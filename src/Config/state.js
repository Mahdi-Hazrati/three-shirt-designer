import { proxy } from "valtio";
import three_js_logo from "../Assets/images/three-js.png"

const state = proxy({
    intro:false,
    color:"#000",
    tshertColor:"#87CEEB",
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:three_js_logo,
    fullDecal:three_js_logo,
})

export default state

// 🌸 Pale Pink: #F9CBCB
// 🍊 Coral Orange: #FF7F50
// 🌿 Mint Green: #98FF98
// 🔵 Sky Blue: #87CEEB
// 🌻 Golden Yellow: #FFD700