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

  return (
    <group {...props}>
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
      </mesh>
    </group>
  )
}

useGLTF.preload(Tshirt)
