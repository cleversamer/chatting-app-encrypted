const _0x334c41 = _0x42fa;
(function (_0xd04481, _0x5a64bd) {
  const _0x2c5e8b = _0x42fa,
    _0x1d2f84 = _0xd04481();
  while (!![]) {
    try {
      const _0xee33d1 =
        -parseInt(_0x2c5e8b(0x9b)) / 0x1 +
        -parseInt(_0x2c5e8b(0x91)) / 0x2 +
        -parseInt(_0x2c5e8b(0x94)) / 0x3 +
        (-parseInt(_0x2c5e8b(0x9e)) / 0x4) *
          (-parseInt(_0x2c5e8b(0xa2)) / 0x5) +
        parseInt(_0x2c5e8b(0x99)) / 0x6 +
        parseInt(_0x2c5e8b(0x98)) / 0x7 +
        (parseInt(_0x2c5e8b(0xa0)) / 0x8) * (parseInt(_0x2c5e8b(0x9c)) / 0x9);
      if (_0xee33d1 === _0x5a64bd) break;
      else _0x1d2f84["push"](_0x1d2f84["shift"]());
    } catch (_0x3d42d1) {
      _0x1d2f84["push"](_0x1d2f84["shift"]());
    }
  }
})(_0x3d52, 0x68e92);
function _0x3d52() {
  const _0x27b570 = [
    "catch",
    "connect",
    "2081611LIVYKm",
    "2124528Twshqt",
    "strictQuery",
    "722365ixJueB",
    "9PiKgjd",
    "message",
    "4abwnsR",
    "../config/host",
    "2956424KqIICQ",
    "mongoose",
    "4096835PHxTMr",
    "145346CDVlVD",
    "set",
    "then",
    "1846887RCdHQI",
    "log",
  ];
  _0x3d52 = function () {
    return _0x27b570;
  };
  return _0x3d52();
}
function _0x42fa(_0x1b188a, _0x51b904) {
  const _0x3d526e = _0x3d52();
  return (
    (_0x42fa = function (_0x42fa1d, _0x47e782) {
      _0x42fa1d = _0x42fa1d - 0x91;
      let _0x386f5f = _0x3d526e[_0x42fa1d];
      return _0x386f5f;
    }),
    _0x42fa(_0x1b188a, _0x51b904)
  );
}
const host = require(_0x334c41(0x9f)),
  mongoose = require(_0x334c41(0xa1));
module["exports"] = () => {
  const _0xbb8ae0 = _0x334c41,
    _0x227e60 = host["server"]["db"];
  mongoose[_0xbb8ae0(0x92)](_0xbb8ae0(0x9a), ![]),
    mongoose[_0xbb8ae0(0x97)](_0x227e60)
      [_0xbb8ae0(0x93)]((_0x4af1a2) => {
        const _0x394bdb = _0xbb8ae0;
        console[_0x394bdb(0x95)](
          "Connected\x20to\x20MongoDB\x20Server:\x20" + _0x227e60
        );
      })
      [_0xbb8ae0(0x96)]((_0x1c72ff) => {
        const _0x5d6090 = _0xbb8ae0;
        console[_0x5d6090(0x95)](
          "Failed\x20to\x20connect\x20to\x20MongoDB:\x20" +
            _0x1c72ff[_0x5d6090(0x9d)]
        );
      });
};
