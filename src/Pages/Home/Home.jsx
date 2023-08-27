import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { snapshot } from 'valtio'
import state from '../../Config/state'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from "../../Config/motion"

const Home = () => {
  const snap = snapshot(state) 
  return (
    <div>Home</div>
  )
}

export default Home