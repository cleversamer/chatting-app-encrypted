const _0xf9a33f = _0x2662;
(function (_0x23d4f0, _0xb9923e) {
  const _0x81f55f = _0x2662,
    _0x18e61c = _0x23d4f0();
  while (!![]) {
    try {
      const _0xb9a903 =
        (-parseInt(_0x81f55f(0xd7)) / 0x1) *
          (-parseInt(_0x81f55f(0xda)) / 0x2) +
        (parseInt(_0x81f55f(0xdd)) / 0x3) * (parseInt(_0x81f55f(0xe5)) / 0x4) +
        -parseInt(_0x81f55f(0xe3)) / 0x5 +
        parseInt(_0x81f55f(0xe7)) / 0x6 +
        (-parseInt(_0x81f55f(0xde)) / 0x7) *
          (-parseInt(_0x81f55f(0xca)) / 0x8) +
        (parseInt(_0x81f55f(0xd1)) / 0x9) * (-parseInt(_0x81f55f(0xe1)) / 0xa) +
        (parseInt(_0x81f55f(0xe2)) / 0xb) * (parseInt(_0x81f55f(0xdb)) / 0xc);
      if (_0xb9a903 === _0xb9923e) break;
      else _0x18e61c["push"](_0x18e61c["shift"]());
    } catch (_0x18440c) {
      _0x18e61c["push"](_0x18e61c["shift"]());
    }
  }
})(_0x28f0, 0x733bb);
const passport = require(_0xf9a33f(0xd0)),
  { ApiError } = require("./apiError"),
  httpStatus = require(_0xf9a33f(0xd6)),
  errors = require("../config/errors"),
  roles = require(_0xf9a33f(0xe8)),
  verify =
    (_0x52cfb2, _0x5ee4d0, _0x4f44fa, _0x46f2d4, _0x5cc1ed) =>
    async (_0x51d025, _0x268973) => {
      const _0x372226 = _0xf9a33f;
      if (_0x51d025 || !_0x268973) {
        const _0xae8f60 = httpStatus[_0x372226(0xcd)],
          _0x2dcb98 = errors["auth"][_0x372226(0xcb)];
        return _0x46f2d4(new ApiError(_0xae8f60, _0x2dcb98));
      }
      _0x52cfb2[_0x372226(0xcf)] = _0x268973;
      const _0x4ad9b4 = _0x5cc1ed[0x2];
      if (!_0x4ad9b4 && !_0x268973[_0x372226(0xe4)]) {
        const _0x35f8b5 = httpStatus[_0x372226(0xcc)],
          _0x450911 = errors[_0x372226(0xd2)][_0x372226(0xdc)];
        return _0x46f2d4(new ApiError(_0x35f8b5, _0x450911));
      }
      if (_0x5cc1ed[_0x372226(0xd3)]) {
        const _0x2907b6 = _0x5cc1ed[0x0],
          _0x37166f = _0x5cc1ed[0x1],
          _0x4ba2c4 = roles[_0x372226(0xe9)](
            _0x52cfb2[_0x372226(0xcf)][_0x372226(0xe6)]
          )[_0x2907b6](_0x37166f);
        if (!_0x4ba2c4[_0x372226(0xdf)]) {
          const _0x137f78 = httpStatus["FORBIDDEN"],
            _0x360fbd = errors[_0x372226(0xd2)][_0x372226(0xd8)];
          return _0x46f2d4(new ApiError(_0x137f78, _0x360fbd));
        }
        _0x5ee4d0[_0x372226(0xd9)][_0x372226(0xd4)] = _0x4ba2c4;
      }
      _0x4f44fa();
    },
  auth = (..._0x1f5dcf) => {
    return async (_0x3d3aef, _0x284d6f, _0x35408b) => {
      return new Promise((_0x18715a, _0x247984) => {
        const _0x100cc6 = _0x2662;
        passport[_0x100cc6(0xce)](
          _0x100cc6(0xe0),
          { session: ![] },
          verify(_0x3d3aef, _0x284d6f, _0x18715a, _0x247984, _0x1f5dcf)
        )(_0x3d3aef, _0x284d6f, _0x35408b);
      })
        ["then"](() => _0x35408b())
        ["catch"]((_0x3a5dff) => _0x35408b(_0x3a5dff));
    };
  };
module[_0xf9a33f(0xd5)] = auth;
function _0x2662(_0x15d311, _0xc55a05) {
  const _0x28f0e9 = _0x28f0();
  return (
    (_0x2662 = function (_0x2662fa, _0x79d8fd) {
      _0x2662fa = _0x2662fa - 0xca;
      let _0x3353c0 = _0x28f0e9[_0x2662fa];
      return _0x3353c0;
    }),
    _0x2662(_0x15d311, _0xc55a05)
  );
}
function _0x28f0() {
  const _0x418256 = [
    "length",
    "permission",
    "exports",
    "http-status",
    "1gsRmWO",
    "hasNoRights",
    "locals",
    "256978qEhCSJ",
    "1888932AiSDYW",
    "notVerified",
    "3663tHEmkj",
    "2446969atNFGu",
    "granted",
    "jwt",
    "36310NEEGhO",
    "22alHDXm",
    "4626690ekOkyP",
    "verified",
    "1972QfGulL",
    "role",
    "4568286QdjABL",
    "../config/roles",
    "can",
    "8BuozPP",
    "invalidToken",
    "FORBIDDEN",
    "UNAUTHORIZED",
    "authenticate",
    "user",
    "passport",
    "1881zRbvsS",
    "auth",
  ];
  _0x28f0 = function () {
    return _0x418256;
  };
  return _0x28f0();
}
