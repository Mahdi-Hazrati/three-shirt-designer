import React from 'react'
import state from '../../Config/state'
import {useSnapshot } from 'valtio'
import "./CustomButton.css"

function CustomButton({ type, customClassName, clickHandler, innerText }) {
    const snap = useSnapshot(state)

    const generateStyle = (type) =>{
        if(type === "filled"){
            return {
                backgroundColor:snap.color,
                color:"#fff"
                
            }
        }
        else if (type === "outlined"){
            
            return{
                backgroundColor:"white",
                color:snap.color,
                border:"1px solid #000",
                borderColor:snap.color

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