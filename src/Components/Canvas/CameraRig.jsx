import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import state from '../../Config/state'

const CameraRig = ({ children }) => {
  const snap = useSnapshot(state)
  const group = useRef()

  useFrame((state, delta) => {
    const isDesktop = window.innerWidth <= 1280
    const isMobile = window.innerWidth <= 640

    let targetPosition = [-0.4,0,2 ]

    // make model scale responsive
    if(snap.intro){
      if(isDesktop){targetPosition = [0, 0.25, 2.5]}
      if(isMobile){targetPosition = [0, 0, 2]}
      
    }else{
      if(isMobile){targetPosition = [0, 0, 2.5]}
      else {targetPosition = [0, 0, 2]}
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta)

    // set model rotation smothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
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