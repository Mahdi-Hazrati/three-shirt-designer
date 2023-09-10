import React from 'react'
import { SketchPicker } from "react-color"
import { useSnapshot } from 'valtio'
import state from "../../Config/state"

const ColorPicker = () => {
  const snap = useSnapshot(state)
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.tshertColor}
        disableAlpha
        presetColors={[
          "#ff0000", "#ff9900", "#e3d904", "#00ff00", "#00ccff", "#9900ff", "#ffffff", "#000000", "#ff66cc", "#33cc33"
        ]}
  
        onChange={(color) => { state.tshertColor = color.hex }}
      />
    </div>
  )
}

export default ColorPicker