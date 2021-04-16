export const COLOR_CLOUD = ['#0D5AFE', '#0D7EFE', '#0D7EFE', '#FF7002', '#ff0a78']
// 将hex颜色转成rgb
export function hexToRgba(hex = '', opacity) {
  var RGBA = 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')'
  return {
    red: parseInt('0x' + hex.slice(1, 3)),
    green: parseInt('0x' + hex.slice(3, 5)),
    blue: parseInt('0x' + hex.slice(5, 7)),
    rgba: RGBA
  }
}

export function getRandomColor() {
  let str = "0123456789abcdef";
  let t = "#";
  for (let j = 0; j < 6; j++) {
    t = t + str.charAt(Math.random() * str.length);
  }
  return t;
}