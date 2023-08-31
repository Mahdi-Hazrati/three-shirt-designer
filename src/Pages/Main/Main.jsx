import React, { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import config from '../../Config/config'
import state from "../../Config/state"
import { AnimatePresence, motion } from 'framer-motion'
import { downloadCanvasToImage, reader } from "../../Config/helpers"
import { EditorTabs, DecalTypes, FilterTabs } from "../../Config/constants"
import { fadeAnimation, slideAnimation } from "../../Config/motion"
import { AiOutlineDownload } from "react-icons/ai"
import { CustomButton, AiPicker, ColorPicker, FilePicker, Tab, Canvas }
  from "../../Components/index"
import "./Main.css"

const Main = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* Right Menu */}
          <motion.div key="custom" className='absolute top-0 left-0 z-10' {...slideAnimation("left")}>
            <div className="flex item-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    onClick={() => { }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Main