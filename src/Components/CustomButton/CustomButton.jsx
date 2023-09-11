import React from 'react'
import state from '../../Config/state'
import { useSnapshot } from 'valtio'
import "./CustomButton.css"

function CustomButton({ type, customClassName, clickHandler, innerText }) {
    const snap = useSnapshot(state)

    const generateStyle = (type) => {
        if (type === "filled") {
            return {
                backgroundColor: snap.color,
                color: "#fff"

            }
        }
        else if (type === "outlined") {
            return {
                borderWidth: "1px",
                borderColor: snap.color,
                color: snap.color,

            }

        }


    }

    return (
        <button
            className={`px-2 py-1.5 rounded-md ${customClassName}`}
            onClick={clickHandler}
            style={generateStyle(type)}
        >
            {innerText}
        </button>
    )
}

export default CustomButton