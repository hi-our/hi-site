const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const wxConfig = require('./wx-config.json')
const wechatSDKNpm = require("wechat-web-sdk");

const app = express();
const port = process.env.PORT || 8769;

const { appID: wxAppID, appSecret: wxAppSecret } = wxConfig

console.log('object :>> ', wxAppID, wxAppSecret);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

const wechatSDK = wechatSDKNpm.getInstance({
  appid: wxAppID,
  secret: wxAppSecret
})


// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});
app.get('/api/signature', async (req, res) => {
  const { url } = req
  try {
    const result = await wechatSDK.getSignature(decodeURIComponent(urlNow))

    console.log('result >> ', result);
    
    res.send({
      data: result || {},
      status: 0,
      message: '',
      time: new Date()
    })
  } catch (error) {
    const { errcode = -10086, errmsg = '调用有错误' } = error || {}
    res.send({
      data: {},
      status: errcode,
      message: errmsg + ': ' + JSON.stringify(error)
    })
  }
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

if (process.env.NODE_ENV) {
  console.log('(process.env.NODE_ENV :', process.env.NODE_ENV);
}

if (process.env.NODE_ENV === 'production') {
  console.log('编译正式环境的效果 :');
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
