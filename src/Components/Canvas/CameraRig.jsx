import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import state from '../../Config/state'

const CameraRig = ({ children }) => {
  const snap = useSnapshot(state)
  const group = useRef()

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5],
      0.25,
      delta,


    )
  })
  
  return (
    <group ref={group}>
      {children}
    </group>

  )
}

export default CameraRig