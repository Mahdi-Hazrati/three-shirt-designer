import React from 'react'
import { useSnapshot } from 'valtio'
import state from "../../Config/state"

const Tab = ({tab, isFilter, isActive, onClick}) => {
  const snap = useSnapshot(state)

  return (
    <div
    key={tab.name}
    className={`tab-btn ${isFilter ? "rounded-full glassmorphism":"rounded-4"}`}
    onClick={onClick}
    >{tab.icon}
    </div>
  )
}

export default Tab