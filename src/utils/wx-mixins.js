import axios from "axios"
const wx = window.wx

export default {
  async wxConfig() {
    const res = await axios.get(
      `${window.location.protocol}//hi-our.com/api/signature?url=${window.location.href}`,
      // {
      //   // TODO: 根据实际接口填写
      //   baseURL: "https://xxx.xxx.xxx/xxx/",
      //   method: "POST"
      // }
    )
    // 接口反
    const { appId, timestamp, nonceStr, signature } = res.data && res.data.data
    await wx.config({
      // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      // debug: true,


      // 必填，公众号的唯一标识
      appId,

      // 必填，生成签名的时间戳
      timestamp,

      // 必填，生成签名的随机串
      nonceStr,

      // 必填，签名
      signature,

      // 必填，需要使用的JS接口列表
      jsApiList: ["updateTimelineShareData", "updateAppMessageShareData"]
    })

    wx.error(function (res) {
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      console.log("微信验证失败", res)
    })
   

    wx.checkJsApi({
      jsApiList: ["onMenuShareQQ", "onMenuShareTimeline"], // 需要检测的JS接口列表，所有JS接口列表见附录2,
      success: function (res) {
        console.log('checkJsApi res :>> ', res);
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
      }
    })
  },

  setWechatShareConfig({
    shareUrl,
    shareTitle,
    descContent,
    shareImg,
    onShareSuccess,
    onShareCancel,
    onMenuShareAppMessageSuccess,
    onMenuShareAppMessageCancel,
    onMenuShareTimelineSuccess,
    onMenuShareTimelineCancel
  }) {
    console.log('window.wx :>> ', window.wx);

    if (!window.wx) return 

    let shareData = {
      title: decodeURIComponent(encodeURIComponent(shareTitle)),
      desc: decodeURIComponent(encodeURIComponent(descContent)),
      link: shareUrl || window.location.href,
      imgUrl: decodeURIComponent(encodeURIComponent(shareImg)),
      success: (res) => {
        console.log('share success res :>> ', res);
      },
      cancel: (res) => {
        console.log('share cancel res :>> ', res);
      }
    }
    window.wx.ready(() => {

      debugger
      // 分享给朋友
      window.wx.onMenuShareAppMessage(shareData)
      // 分享到朋友圈
      window.wx.onMenuShareTimeline(shareData)
      // 分享到QQ
      window.wx.onMenuShareQQ(shareData)
      // 分享到微博
      window.wx.onMenuShareWeibo(shareData)
    })
  },

  // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
  updateAppMessageShareData() {
    debugger
    wx.updateAppMessageShareData({
      // TODO: 以下根据实际情况填写
      title: "xxx",
      desc: "xxx",
      link: window.location.href,
      // imgUrl一定要是绝对地址，否则可能出问题
      imgUrl: "xxx",
      success() {
        // 用户确认分享后执行的回调函数
      }
    })
  },

  // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
  updateTimelineShareData(shareConfig = {}) {
    const { title } = shareConfig
    wx.updateTimelineShareData({
      // TODO: 以下根据实际情况填写
      title: title,
      link: window.location.href,
      // imgUrl一定要是绝对地址，否则可能出问题
      imgUrl: "xxx",
      success() {
        // 用户确认分享后执行的回调函数
      }
    })
  }
}
