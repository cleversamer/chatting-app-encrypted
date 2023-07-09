const _0x1cbac = _0x475c;
(function (_0x13724d, _0x282936) {
  const _0x34c03b = _0x475c,
    _0x2d19f9 = _0x13724d();
  while (!![]) {
    try {
      const _0x388540 =
        -parseInt(_0x34c03b(0x15f)) / 0x1 +
        -parseInt(_0x34c03b(0x15b)) / 0x2 +
        parseInt(_0x34c03b(0x156)) / 0x3 +
        (parseInt(_0x34c03b(0x14f)) / 0x4) *
          (-parseInt(_0x34c03b(0x159)) / 0x5) +
        (parseInt(_0x34c03b(0x15c)) / 0x6) *
          (parseInt(_0x34c03b(0x15a)) / 0x7) +
        parseInt(_0x34c03b(0x150)) / 0x8 +
        (parseInt(_0x34c03b(0x155)) / 0x9) * (parseInt(_0x34c03b(0x164)) / 0xa);
      if (_0x388540 === _0x282936) break;
      else _0x2d19f9["push"](_0x2d19f9["shift"]());
    } catch (_0x459b1c) {
      _0x2d19f9["push"](_0x2d19f9["shift"]());
    }
  }
})(_0x2cdb, 0x8a396);
function _0x475c(_0x39ba2b, _0x14057f) {
  const _0x2cdbd3 = _0x2cdb();
  return (
    (_0x475c = function (_0x475c4b, _0x36f2e7) {
      _0x475c4b = _0x475c4b - 0x14a;
      let _0x465116 = _0x2cdbd3[_0x475c4b];
      return _0x465116;
    }),
    _0x475c(_0x39ba2b, _0x14057f)
  );
}
const { check, validationResult } = require(_0x1cbac(0x160)),
  httpStatus = require(_0x1cbac(0x154)),
  { ApiError } = require(_0x1cbac(0x162)),
  errors = require("../../config/errors"),
  handler = (_0x10fc48, _0x5a2656, _0x287bf8) => {
    const _0x2a70fb = _0x1cbac,
      _0x4b7954 = validationResult(_0x10fc48);
    if (!_0x4b7954[_0x2a70fb(0x14c)]()) {
      const _0x2a2ff7 = httpStatus[_0x2a70fb(0x151)],
        _0x4c4e6f = _0x4b7954[_0x2a70fb(0x163)]()[0x0][_0x2a70fb(0x152)],
        _0x2c3238 = new ApiError(_0x2a2ff7, _0x4c4e6f);
      return _0x287bf8(_0x2c3238);
    }
    _0x287bf8();
  },
  createRoomValidator = [
    check(_0x1cbac(0x14d))
      [_0x1cbac(0x14e)]()
      [_0x1cbac(0x153)]({ min: 0x1, max: 0x40 })
      [_0x1cbac(0x157)](errors[_0x1cbac(0x161)][_0x1cbac(0x14a)]),
    check(_0x1cbac(0x158))
      ["trim"]()
      [_0x1cbac(0x15d)](["public", _0x1cbac(0x14b)])
      [_0x1cbac(0x157)](errors[_0x1cbac(0x161)][_0x1cbac(0x15e)]),
    handler,
  ],
  validateChangeRoomName = [
    check("name")
      [_0x1cbac(0x14e)]()
      [_0x1cbac(0x153)]({ min: 0x1, max: 0x40 })
      [_0x1cbac(0x157)](errors["rooms"][_0x1cbac(0x14a)]),
    handler,
  ];
module["exports"] = {
  createRoomValidator: createRoomValidator,
  validateChangeRoomName: validateChangeRoomName,
};
function _0x2cdb() {
  const _0x4a117e = [
    "withMessage",
    "status",
    "35325CpyQpi",
    "7XsUxsE",
    "2155188uBysEd",
    "5549538AfVSAK",
    "isIn",
    "invalidStatus",
    "1065105fmBbyj",
    "express-validator",
    "rooms",
    "../apiError",
    "array",
    "880060ZOpaFK",
    "invalidName",
    "private",
    "isEmpty",
    "name",
    "trim",
    "276HfzYvr",
    "7928056zsGbhn",
    "BAD_REQUEST",
    "msg",
    "isLength",
    "http-status",
    "36cGakEc",
    "2785188ihzfTk",
  ];
  _0x2cdb = function () {
    return _0x4a117e;
  };
  return _0x2cdb();
}
