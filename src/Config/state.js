import { proxy } from "valtio";
import { images } from "./images_url";

const state = proxy({
    intro:false,
    color:"#000",
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:images.three_js,
    fullDecal:images.three_js,
})

export default state