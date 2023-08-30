import React, { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import config from '../../Config/config'
import state from "../../Config/state"
import { AnimatePresence, motion } from 'framer-motion'
import { downloadCanvasToImage, reader } from "../../Config/helpers"
import { EditorTabs, DecalTypes, FilterTabs } from "../../Config/constants"
import { fadeAnimation, slideAnimation } from "../../Config/motion"
import { AiOutlineDownload } from "react-icons/ai"
import {CustomButton,AiPicker,ColorPicker,FilePicker,Tab,Canvas} from "../../Components/index"
import "./Main.css"

const Main = () => {
  const snap = useSnapshot(state)
  return (
    <div>
      Wellcome to Home
    </div>
  )
}

export default Main