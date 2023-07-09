const _0x512c1d = _0x4d09;
function _0x4a0c() {
  const _0x246b59 = [
    "express-validator",
    "3HOuabo",
    "12779152BAxRSJ",
    "1889170aDyUxX",
    "5uHgsSH",
    "invalidType",
    "../../config/errors",
    "6524307BRAKGh",
    "60GDPjev",
    "type",
    "message",
    "array",
    "isIn",
    "6526492tzIbxn",
    "269710ytYTTb",
    "265374Eiceff",
    "http-status",
    "460452XTeDEK",
    "exports",
    "BAD_REQUEST",
  ];
  _0x4a0c = function () {
    return _0x246b59;
  };
  return _0x4a0c();
}
function _0x4d09(_0x274c4a, _0x5de782) {
  const _0x4a0c5a = _0x4a0c();
  return (
    (_0x4d09 = function (_0x4d09eb, _0x3e79f1) {
      _0x4d09eb = _0x4d09eb - 0x1d3;
      let _0x200199 = _0x4a0c5a[_0x4d09eb];
      return _0x200199;
    }),
    _0x4d09(_0x274c4a, _0x5de782)
  );
}
(function (_0x2dc101, _0xbfedf8) {
  const _0x34ec98 = _0x4d09,
    _0x54040a = _0x2dc101();
  while (!![]) {
    try {
      const _0x287b97 =
        (-parseInt(_0x34ec98(0x1df)) / 0x1) *
          (-parseInt(_0x34ec98(0x1d5)) / 0x2) +
        (-parseInt(_0x34ec98(0x1dc)) / 0x3) *
          (parseInt(_0x34ec98(0x1d8)) / 0x4) +
        (-parseInt(_0x34ec98(0x1e3)) / 0x5) *
          (-parseInt(_0x34ec98(0x1d6)) / 0x6) +
        -parseInt(_0x34ec98(0x1d4)) / 0x7 +
        parseInt(_0x34ec98(0x1dd)) / 0x8 +
        -parseInt(_0x34ec98(0x1e2)) / 0x9 +
        -parseInt(_0x34ec98(0x1de)) / 0xa;
      if (_0x287b97 === _0xbfedf8) break;
      else _0x54040a["push"](_0x54040a["shift"]());
    } catch (_0x446818) {
      _0x54040a["push"](_0x54040a["shift"]());
    }
  }
})(_0x4a0c, 0xcd594);
const { check, validationResult } = require(_0x512c1d(0x1db)),
  httpStatus = require(_0x512c1d(0x1d7)),
  { ApiError } = require("../apiError"),
  errors = require(_0x512c1d(0x1e1)),
  handler = (_0x25e35b, _0x37f73c, _0x59cc2a) => {
    const _0x5973ed = _0x512c1d,
      _0x5e324e = validationResult(_0x25e35b);
    if (!_0x5e324e["isEmpty"]()) {
      const _0x972190 = httpStatus[_0x5973ed(0x1da)],
        _0x1ad437 = _0x5e324e[_0x5973ed(0x1e6)]()[0x0]["msg"],
        _0x2b0bce = new ApiError(_0x972190, _0x1ad437);
      return _0x59cc2a(_0x2b0bce);
    }
    _0x59cc2a();
  },
  createMessageValidator = [
    check(_0x512c1d(0x1e4))
      [_0x512c1d(0x1d3)](MESSAGE_TYPES)
      ["withMessage"](errors[_0x512c1d(0x1e5)][_0x512c1d(0x1e0)]),
    handler,
  ];
module[_0x512c1d(0x1d9)] = { createMessageValidator: createMessageValidator };
