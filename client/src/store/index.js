import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './node.png',
  fullDecal: './navyFull.jpg',
})

export default state