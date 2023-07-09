const _0x3b6a29 = _0x40ae;
function _0x40ae(_0x41f260, _0xfb7fac) {
  const _0x31544f = _0x3154();
  return (
    (_0x40ae = function (_0x40ae19, _0xe381c3) {
      _0x40ae19 = _0x40ae19 - 0x1d9;
      let _0x2d0892 = _0x31544f[_0x40ae19];
      return _0x2d0892;
    }),
    _0x40ae(_0x41f260, _0xfb7fac)
  );
}
(function (_0x24a97d, _0x2bfafe) {
  const _0x17df58 = _0x40ae,
    _0x1b740d = _0x24a97d();
  while (!![]) {
    try {
      const _0x1bc2cb =
        (parseInt(_0x17df58(0x1da)) / 0x1) *
          (parseInt(_0x17df58(0x1ec)) / 0x2) +
        (-parseInt(_0x17df58(0x1de)) / 0x3) *
          (parseInt(_0x17df58(0x1e5)) / 0x4) +
        (-parseInt(_0x17df58(0x1e3)) / 0x5) *
          (-parseInt(_0x17df58(0x1dc)) / 0x6) +
        -parseInt(_0x17df58(0x1df)) / 0x7 +
        parseInt(_0x17df58(0x1db)) / 0x8 +
        (parseInt(_0x17df58(0x1e2)) / 0x9) *
          (-parseInt(_0x17df58(0x1f2)) / 0xa) +
        parseInt(_0x17df58(0x1e8)) / 0xb;
      if (_0x1bc2cb === _0x2bfafe) break;
      else _0x1b740d["push"](_0x1b740d["shift"]());
    } catch (_0x26e278) {
      _0x1b740d["push"](_0x1b740d["shift"]());
    }
  }
})(_0x3154, 0x2e458);
const setupSanitization = require(_0x3b6a29(0x1dd)),
  setupMongoDB = require("./db"),
  socket = require(_0x3b6a29(0x1e1)),
  routes = require(_0x3b6a29(0x1d9)),
  host = require(_0x3b6a29(0x1e4)),
  passport = require(_0x3b6a29(0x1e0)),
  { jwtStrategy } = require(_0x3b6a29(0x1ef)),
  { errorHandler, errorConverter, unsupportedRouteHandler } = require(_0x3b6a29(
    0x1e7
  ));
module[_0x3b6a29(0x1ea)] = (_0x3207f1) => {
  const _0x2d6396 = _0x3b6a29;
  setupMongoDB(),
    setupSanitization(_0x3207f1),
    _0x3207f1[_0x2d6396(0x1ed)](passport[_0x2d6396(0x1e6)]()),
    passport[_0x2d6396(0x1ed)](_0x2d6396(0x1e9), jwtStrategy),
    _0x3207f1[_0x2d6396(0x1ed)](_0x2d6396(0x1ee), routes),
    _0x3207f1["use"](unsupportedRouteHandler),
    _0x3207f1["use"](errorConverter),
    _0x3207f1[_0x2d6396(0x1ed)](errorHandler);
  const _0x5d02b9 =
      process[_0x2d6396(0x1eb)][_0x2d6396(0x1f1)] ||
      host[_0x2d6396(0x1f0)]["port"],
    _0x15f5ce = _0x3207f1["listen"](_0x5d02b9, () => {
      const _0x4e24fb = _0x2d6396;
      console["log"](_0x4e24fb(0x1f3) + _0x5d02b9);
    });
  socket(_0x15f5ce);
};
function _0x3154() {
  const _0x1a6640 = [
    "80953KXhXzP",
    "76728FKJgra",
    "390450NqWYni",
    "./sanitize",
    "33oeaDWH",
    "918351NaxCVc",
    "passport",
    "./socket",
    "9fkJgvc",
    "25RSNdKB",
    "../config/host",
    "137524EXZPdW",
    "initialize",
    "../middleware/apiError",
    "4821476PlNbsF",
    "jwt",
    "exports",
    "env",
    "2HeVani",
    "use",
    "/api",
    "../middleware/passport",
    "server",
    "PORT",
    "1553230xBDKuV",
    "App\x20is\x20listening\x20on\x20port\x20",
    "../routes",
  ];
  _0x3154 = function () {
    return _0x1a6640;
  };
  return _0x3154();
}
