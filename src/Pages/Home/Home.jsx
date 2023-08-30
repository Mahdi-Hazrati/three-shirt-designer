import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import {useSnapshot } from 'valtio'
import state from '../../Config/state'
import {images } from '../../Config/images_url'
import "./Home.css"

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from "../../Config/motion"
import CustomButton from '../../Components/CustomButton/CustomButton'

const Home = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              className='w-8 h-8 object-contain'
              src={images.three_js}
              alt="logo"
            />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                Create and <br className='xl:block hidden' /> Customise
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                <strong>Design</strong> and <strong>Customize</strong> your own <strong>T-shirts</strong> in 3D scene.
              </p>
              <CustomButton
              // type : filled / outlined
                type={"filled"}
                innerText={"Let's Get Started !"}
                customClassName={"w-fit px-4 py-2.5 font-bold text-sm "}
                clickHandler={() => state.intro = false}
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home