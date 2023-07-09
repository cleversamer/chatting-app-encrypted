const _0x5e7d8c = _0x13c5;
function _0x306a() {
  const _0x443aea = [
    "role",
    "isIn",
    "invalidPassword",
    "password",
    "isEmpty",
    "msg",
    "express-validator",
    "invalidRole",
    "http-status",
    "2899806BhteHO",
    "114541PBjfsz",
    "34838oUCYTO",
    "219771tuwWwy",
    "exports",
    "withMessage",
    "16kzqkXV",
    "24Ztuxng",
    "isLength",
    "invalidEmail",
    "12305gxvmtm",
    "11qHvNII",
    "array",
    "admin",
    "../../models/user.model",
    "../../config/errors",
    "filter",
    "trim",
    "4BygXIf",
    "newPassword",
    "1280412QFvpZL",
    "email",
    "isEmail",
    "toLowerCase",
    "70AXAfIm",
    "BAD_REQUEST",
    "invalidName",
    "firstname",
    "651231lwgreU",
    "516AioxXW",
    "bail",
  ];
  _0x306a = function () {
    return _0x443aea;
  };
  return _0x306a();
}
function _0x13c5(_0x1741f5, _0x12ca00) {
  const _0x306abc = _0x306a();
  return (
    (_0x13c5 = function (_0x13c509, _0x4891cd) {
      _0x13c509 = _0x13c509 - 0x16e;
      let _0x6c4b31 = _0x306abc[_0x13c509];
      return _0x6c4b31;
    }),
    _0x13c5(_0x1741f5, _0x12ca00)
  );
}
(function (_0x1761f9, _0xa336ba) {
  const _0x4be476 = _0x13c5,
    _0x2bcbe8 = _0x1761f9();
  while (!![]) {
    try {
      const _0xf9cd80 =
        (parseInt(_0x4be476(0x191)) / 0x1) *
          (parseInt(_0x4be476(0x195)) / 0x2) +
        (-parseInt(_0x4be476(0x183)) / 0x3) *
          (-parseInt(_0x4be476(0x179)) / 0x4) +
        (-parseInt(_0x4be476(0x171)) / 0x5) *
          (parseInt(_0x4be476(0x184)) / 0x6) +
        (-parseInt(_0x4be476(0x190)) / 0x7) *
          (-parseInt(_0x4be476(0x16e)) / 0x8) +
        (parseInt(_0x4be476(0x192)) / 0x9) *
          (parseInt(_0x4be476(0x17f)) / 0xa) +
        (parseInt(_0x4be476(0x172)) / 0xb) *
          (-parseInt(_0x4be476(0x17b)) / 0xc) +
        -parseInt(_0x4be476(0x18f)) / 0xd;
      if (_0xf9cd80 === _0xa336ba) break;
      else _0x2bcbe8["push"](_0x2bcbe8["shift"]());
    } catch (_0xb15a19) {
      _0x2bcbe8["push"](_0x2bcbe8["shift"]());
    }
  }
})(_0x306a, 0x2a93a);
const { check, validationResult } = require(_0x5e7d8c(0x18c)),
  httpStatus = require(_0x5e7d8c(0x18e)),
  { ApiError } = require("../apiError"),
  { SUPPORTED_ROLES } = require(_0x5e7d8c(0x175)),
  { auth: errors } = require(_0x5e7d8c(0x176)),
  handler = (_0x58d544, _0x1072b2, _0x497bde) => {
    const _0x560551 = _0x5e7d8c,
      _0x317634 = validationResult(_0x58d544);
    if (!_0x317634[_0x560551(0x18a)]()) {
      const _0x1d39e8 = httpStatus[_0x560551(0x180)],
        _0x34667b = _0x317634[_0x560551(0x173)]()[0x0][_0x560551(0x18b)],
        _0x43fb8d = new ApiError(_0x1d39e8, _0x34667b);
      return _0x497bde(_0x43fb8d);
    }
    _0x497bde();
  },
  loginValidator = [
    check(_0x5e7d8c(0x17c))
      [_0x5e7d8c(0x178)]()
      ["isEmail"]()
      [_0x5e7d8c(0x194)](errors["invalidEmail"])
      [_0x5e7d8c(0x185)](),
    check(_0x5e7d8c(0x189))
      ["trim"]()
      [_0x5e7d8c(0x16f)]({ min: 0x8, max: 0x20 })
      [_0x5e7d8c(0x194)](errors[_0x5e7d8c(0x188)]),
    handler,
  ],
  registerValidator = [
    ...loginValidator,
    check(_0x5e7d8c(0x182))
      [_0x5e7d8c(0x178)]()
      [_0x5e7d8c(0x16f)]({ min: 0x1, max: 0x40 })
      [_0x5e7d8c(0x194)](errors[_0x5e7d8c(0x181)]),
    check("lastname")
      ["trim"]()
      [_0x5e7d8c(0x16f)]({ min: 0x1, max: 0x40 })
      ["withMessage"](errors[_0x5e7d8c(0x181)]),
    check(_0x5e7d8c(0x186))
      [_0x5e7d8c(0x187)](
        SUPPORTED_ROLES[_0x5e7d8c(0x177)](
          (_0xf8f0f6) => _0xf8f0f6[_0x5e7d8c(0x17e)]() !== _0x5e7d8c(0x174)
        )
      )
      [_0x5e7d8c(0x194)](errors[_0x5e7d8c(0x18d)]),
    handler,
  ],
  resetPasswordValidator = [
    check(_0x5e7d8c(0x17a))
      [_0x5e7d8c(0x178)]()
      ["isLength"]({ min: 0x8, max: 0x20 })
      [_0x5e7d8c(0x194)](errors[_0x5e7d8c(0x188)]),
    handler,
  ],
  forgotPasswordValidator = [
    check(_0x5e7d8c(0x17c))
      ["trim"]()
      [_0x5e7d8c(0x17d)]()
      [_0x5e7d8c(0x194)](errors[_0x5e7d8c(0x170)])
      [_0x5e7d8c(0x185)](),
    check(_0x5e7d8c(0x17a))
      [_0x5e7d8c(0x178)]()
      [_0x5e7d8c(0x16f)]({ min: 0x8, max: 0x20 })
      ["withMessage"](errors[_0x5e7d8c(0x188)]),
    handler,
  ],
  emailValidator = [
    check(_0x5e7d8c(0x17c))
      ["trim"]()
      [_0x5e7d8c(0x17d)]()
      [_0x5e7d8c(0x194)](errors[_0x5e7d8c(0x170)])
      [_0x5e7d8c(0x185)](),
  ];
module[_0x5e7d8c(0x193)] = {
  loginValidator: loginValidator,
  registerValidator: registerValidator,
  resetPasswordValidator: resetPasswordValidator,
  forgotPasswordValidator: forgotPasswordValidator,
  emailValidator: emailValidator,
};
