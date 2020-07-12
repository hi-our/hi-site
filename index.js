// index.js
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();

exports.tcbGetApp = async function () {
  await app.prepare();
  return handle;
};
