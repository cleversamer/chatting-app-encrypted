const _0x5d50b1 = _0x4435;
(function (_0x21c1f7, _0x3542f5) {
  const _0x119a04 = _0x4435,
    _0x2007a2 = _0x21c1f7();
  while (!![]) {
    try {
      const _0x17e73f =
        (parseInt(_0x119a04(0x177)) / 0x1) *
          (-parseInt(_0x119a04(0x172)) / 0x2) +
        (-parseInt(_0x119a04(0x166)) / 0x3) *
          (parseInt(_0x119a04(0x178)) / 0x4) +
        parseInt(_0x119a04(0x169)) / 0x5 +
        -parseInt(_0x119a04(0x163)) / 0x6 +
        parseInt(_0x119a04(0x16d)) / 0x7 +
        -parseInt(_0x119a04(0x171)) / 0x8 +
        (-parseInt(_0x119a04(0x170)) / 0x9) *
          (-parseInt(_0x119a04(0x16b)) / 0xa);
      if (_0x17e73f === _0x3542f5) break;
      else _0x2007a2["push"](_0x2007a2["shift"]());
    } catch (_0x47d3bd) {
      _0x2007a2["push"](_0x2007a2["shift"]());
    }
  }
})(_0x3cd2, 0x938d5);
const mongoose = require(_0x5d50b1(0x173)),
  httpStatus = require(_0x5d50b1(0x168)),
  errors = require(_0x5d50b1(0x16c));
class ApiError extends Error {
  constructor(_0x47f661, _0x46bf6f) {
    const _0x3b720b = _0x5d50b1;
    super(),
      (this[_0x3b720b(0x174)] = _0x47f661),
      (this["message"] = _0x46bf6f);
  }
}
const errorHandler = (_0xf4bf88, _0x501f2c, _0x579484, _0x5bf893) => {
    const _0x9a1a29 = _0x5d50b1;
    _0x579484[_0x9a1a29(0x179)](_0xf4bf88[_0x9a1a29(0x174)])[_0x9a1a29(0x16e)]({
      status: _0x9a1a29(0x175),
      ..._0xf4bf88,
    });
  },
  errorConverter = (_0x278f0c, _0x3c7fa1, _0x2c3bbe, _0x3f4d18) => {
    const _0x55086e = _0x5d50b1;
    if (!(_0x278f0c instanceof ApiError)) {
      const _0x30388c =
          _0x278f0c["statusCode"] ||
          _0x278f0c instanceof mongoose[_0x55086e(0x16f)]
            ? httpStatus[_0x55086e(0x16a)]
            : httpStatus[_0x55086e(0x164)],
        _0x1dccc1 =
          _0x278f0c[_0x55086e(0x160)] === _0x55086e(0x161)
            ? errors[_0x55086e(0x162)][_0x55086e(0x176)]
            : _0x278f0c[_0x55086e(0x160)]
            ? { en: _0x278f0c[_0x55086e(0x160)], ar: _0x278f0c["message"] }
            : { en: httpStatus[_0x30388c], ar: httpStatus[_0x30388c] };
      _0x278f0c = new ApiError(_0x30388c, _0x1dccc1);
    }
    _0x3f4d18(_0x278f0c);
  },
  unsupportedRouteHandler = (_0x32947f, _0x5b945b, _0x4e4a26) => {
    const _0x26e558 = _0x5d50b1,
      _0x2287a3 = httpStatus["NOT_FOUND"],
      _0x2b7317 = errors[_0x26e558(0x162)][_0x26e558(0x165)];
    throw new ApiError(_0x2287a3, _0x2b7317);
  },
  limitHandler = (_0x15a1b3, _0x2fb562, _0x50e1cd) => {
    const _0x191ef8 = _0x5d50b1,
      _0x303dd6 = httpStatus["FORBIDDEN"],
      _0x5a524a = errors[_0x191ef8(0x162)][_0x191ef8(0x176)];
    _0x50e1cd(new ApiError(_0x303dd6, _0x5a524a));
  };
function _0x4435(_0x3ca0cd, _0x3b15a7) {
  const _0x3cd2d5 = _0x3cd2();
  return (
    (_0x4435 = function (_0x4435b8, _0x1d856d) {
      _0x4435b8 = _0x4435b8 - 0x160;
      let _0x428c00 = _0x3cd2d5[_0x4435b8];
      return _0x428c00;
    }),
    _0x4435(_0x3ca0cd, _0x3b15a7)
  );
}
module[_0x5d50b1(0x167)] = {
  ApiError: ApiError,
  errorHandler: errorHandler,
  errorConverter: errorConverter,
  unsupportedRouteHandler: unsupportedRouteHandler,
  limitHandler: limitHandler,
};
function _0x3cd2() {
  const _0x4382ff = [
    "request\x20entity\x20too\x20large",
    "system",
    "1394172QWtCvc",
    "INTERNAL_SERVER_ERROR",
    "unsupportedRoute",
    "1010277yNZsuM",
    "exports",
    "http-status",
    "1051150WrDAyL",
    "BAD_REQUEST",
    "4538270bPukbr",
    "../config/errors",
    "7325535kYoTJk",
    "json",
    "Error",
    "27eQxdHz",
    "8482704AzSTCb",
    "2002RTyQNv",
    "mongoose",
    "statusCode",
    "error",
    "largeFile",
    "384OefNiL",
    "4WCwWLk",
    "status",
    "message",
  ];
  _0x3cd2 = function () {
    return _0x4382ff;
  };
  return _0x3cd2();
}
