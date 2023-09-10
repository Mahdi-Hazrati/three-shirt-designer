import React from 'react'
import { useSnapshot } from 'valtio'
import state from "../../Config/state"

const Tab = ({ tab, isFilter, isActive, onClick }) => {
  const snap = useSnapshot(state)
  const activeStyle = isFilter && isActive
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 }

  return (
    <div
      key={tab.name}
      style={activeStyle}
      className={`tab-btn ${isFilter ? "rounded-full glassmorphism" : "rounded-4"}`}
      onClick={onClick}
    >
      <div className={`${isFilter ? "w-2/3 h-2/3":"w-11/12 h-11/12"} flex justify-center items-center`}>{tab.icon}</div>
      
    </div>
  )
}

export default Tab