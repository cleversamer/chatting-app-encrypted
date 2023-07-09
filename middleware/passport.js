const _0x5b3c24 = _0x5d7f;
(function (_0x2cae43, _0xf68f7e) {
  const _0x42fb86 = _0x5d7f,
    _0x237f88 = _0x2cae43();
  while (!![]) {
    try {
      const _0x562b56 =
        (-parseInt(_0x42fb86(0x161)) / 0x1) *
          (-parseInt(_0x42fb86(0x16b)) / 0x2) +
        (-parseInt(_0x42fb86(0x16a)) / 0x3) *
          (parseInt(_0x42fb86(0x168)) / 0x4) +
        (-parseInt(_0x42fb86(0x16e)) / 0x5) *
          (parseInt(_0x42fb86(0x162)) / 0x6) +
        -parseInt(_0x42fb86(0x16f)) / 0x7 +
        -parseInt(_0x42fb86(0x16c)) / 0x8 +
        (-parseInt(_0x42fb86(0x163)) / 0x9) *
          (parseInt(_0x42fb86(0x160)) / 0xa) +
        (-parseInt(_0x42fb86(0x15e)) / 0xb) *
          (-parseInt(_0x42fb86(0x169)) / 0xc);
      if (_0x562b56 === _0xf68f7e) break;
      else _0x237f88["push"](_0x237f88["shift"]());
    } catch (_0x6bc448) {
      _0x237f88["push"](_0x237f88["shift"]());
    }
  }
})(_0x222b, 0x48ec5);
const { User } = require(_0x5b3c24(0x16d)),
  { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt"),
  jwtOptions = {
    secretOrKey: process["env"][_0x5b3c24(0x15f)],
    jwtFromRequest: ExtractJwt[_0x5b3c24(0x164)](),
  },
  jwtVerify = async (_0x577ea1, _0x2933f0) => {
    const _0x395233 = _0x5b3c24;
    try {
      const _0x7ca24d = await User[_0x395233(0x167)](
        _0x577ea1[_0x395233(0x166)]
      );
      if (!_0x7ca24d) return _0x2933f0(null, ![]);
      _0x2933f0(null, _0x7ca24d);
    } catch (_0x2ef619) {
      _0x2933f0(_0x2ef619, ![]);
    }
  },
  jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
function _0x5d7f(_0x538eb9, _0x10fa72) {
  const _0x222bc0 = _0x222b();
  return (
    (_0x5d7f = function (_0x5d7f88, _0x41d9a9) {
      _0x5d7f88 = _0x5d7f88 - 0x15e;
      let _0x1573d4 = _0x222bc0[_0x5d7f88];
      return _0x1573d4;
    }),
    _0x5d7f(_0x538eb9, _0x10fa72)
  );
}
module[_0x5b3c24(0x165)] = { jwtStrategy: jwtStrategy };
function _0x222b() {
  const _0x3e018b = [
    "3415tccJDU",
    "2742768jaqvcn",
    "11oZtMOU",
    "JWT_PRIVATE_KEY",
    "169680tmmIZN",
    "523237DfWYeL",
    "4254OvUbdC",
    "315slPbFi",
    "fromAuthHeaderAsBearerToken",
    "exports",
    "sub",
    "findById",
    "36788EqAeMp",
    "18983892wUsDrK",
    "57XZvdMf",
    "2KLcLzt",
    "1294728SIXjLk",
    "../models/user.model",
  ];
  _0x222b = function () {
    return _0x3e018b;
  };
  return _0x222b();
}
