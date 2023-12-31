import React from 'react'
import { easing } from "maath"
import state from "../../Config/state"
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from "@react-three/drei"
import Tshirt from "../../Assets/model/shirt.glb"

export default function ThreeDModel(props) {
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF(Tshirt)

  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)

  useFrame((srate, delta)=>{
    easing.dampC(materials.lambert1.color, snap.tshertColor, 0.25, delta)
  })
  const stateAsString = JSON.stringify(snap)
  return (
    <group {...props} key={stateAsString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            map={fullTexture}
            scale={1}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}

          />

        )}
        {snap.isLogoTexture && (
          <Decal
            map={logoTexture}
            scale={0.15}
            position={[0, 0.05, 0.15]}
            rotation={[0, 0, 0]}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  )
}

useGLTF.preload(Tshirt)
