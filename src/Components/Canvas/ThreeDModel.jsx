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
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      >
      </mesh>
    </group>
  )
}

useGLTF.preload(Tshirt)
