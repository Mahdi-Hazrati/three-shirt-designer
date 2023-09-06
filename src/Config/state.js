import { proxy } from "valtio";
import three_js_logo from "../Assets/images/three-js.png"

const state = proxy({
    intro:false,
    color:"#000",
    isLogoTexture:true,
    isFullTexture:true,
    logoDecal:three_js_logo,
    fullDecal:three_js_logo,
})

export default state