import { proxy } from "valtio";

const state = proxy({
    intro:false,
    color:"#000",
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:"./logo.png",
    fullDecal:"./logo.png",
})

export default state