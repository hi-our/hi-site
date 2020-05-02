const userAgent = window.navigator.userAgent
const userAgentLowerCase = userAgent.toLocaleLowerCase()
// let app = navigator.appVersion
export const isAndroid = () => {
  return userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1
}

export const isIOS = () => {
  return !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}


/**
 * 是否是移动端
 * @return     {Boolean} [description]
 */
export function isMobile() {
  return /mobile/ig.test(navigator.userAgent.toLocaleLowerCase())
}


export const isWeixin = () => {
  let result = userAgentLowerCase.match(/micromessenger/i)
  let resultStr = Array.isArray(result) && result[0] ? result[0] : result
  return resultStr === 'micromessenger'
}