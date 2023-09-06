import React from 'react'
import { Canvas as FiberCanvas } from '@react-three/fiber'
import { Environment, Center } from "@react-three/drei"
import Backdrop from './Backdrop'
import CameraRig from "./CameraRig"
import ThreeDModel from "./ThreeDModel"


const Canvas = () => {
  return (
    <FiberCanvas>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <ThreeDModel />
        </Center>
      </CameraRig>
    </FiberCanvas>
  )
}

export default Canvas