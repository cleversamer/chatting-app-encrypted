const _0x27ea96 = _0x27b3;
(function (_0xd9bf58, _0x7d9c87) {
  const _0x5a7562 = _0x27b3,
    _0x55fb19 = _0xd9bf58();
  while (!![]) {
    try {
      const _0x3d6ea0 =
        (-parseInt(_0x5a7562(0x133)) / 0x1) *
          (parseInt(_0x5a7562(0x131)) / 0x2) +
        -parseInt(_0x5a7562(0x144)) / 0x3 +
        -parseInt(_0x5a7562(0x13c)) / 0x4 +
        parseInt(_0x5a7562(0x141)) / 0x5 +
        parseInt(_0x5a7562(0x148)) / 0x6 +
        parseInt(_0x5a7562(0x135)) / 0x7 +
        -parseInt(_0x5a7562(0x143)) / 0x8;
      if (_0x3d6ea0 === _0x7d9c87) break;
      else _0x55fb19["push"](_0x55fb19["shift"]());
    } catch (_0x6a0420) {
      _0x55fb19["push"](_0x55fb19["shift"]());
    }
  }
})(_0x37fa, 0x2f487);
const { ApiError } = require(_0x27ea96(0x13f)),
  { User } = require(_0x27ea96(0x12f)),
  bcrypt = require(_0x27ea96(0x147)),
  errors = require("../../config/errors"),
  httpStatus = require(_0x27ea96(0x13b)),
  userService = require(_0x27ea96(0x13d));
function _0x27b3(_0x5b2f00, _0x3980c3) {
  const _0x37fa6a = _0x37fa();
  return (
    (_0x27b3 = function (_0x27b3f7, _0x35b61f) {
      _0x27b3f7 = _0x27b3f7 - 0x12e;
      let _0x57512d = _0x37fa6a[_0x27b3f7];
      return _0x57512d;
    }),
    _0x27b3(_0x5b2f00, _0x3980c3)
  );
}
function _0x37fa() {
  const _0x5a71e8 = [
    "../../middleware/apiError",
    "findUserByEmail",
    "1346145dWRZoQ",
    "deviceToken",
    "199624klmAac",
    "258MdRzrj",
    "comparePassword",
    "string",
    "bcrypt",
    "2293362ByfSpd",
    "createUser",
    "../../models/user.model",
    "NOT_FOUND",
    "2piKDsl",
    "BAD_REQUEST",
    "171163tnlkKz",
    "invalidNickname",
    "403158htzTbS",
    "save",
    "auth",
    "exports",
    "length",
    "incorrectCredentials",
    "http-status",
    "1276708wUyWah",
    "./users.service",
    "signInWithEmailAndPassword",
  ];
  _0x37fa = function () {
    return _0x5a71e8;
  };
  return _0x37fa();
}
(module[_0x27ea96(0x138)][_0x27ea96(0x12e)] = async (
  _0x586533,
  _0x4fa1d7,
  _0x47d5c9,
  _0x4794ae,
  _0x41bb17 = "",
  _0x186a02,
  _0x189379
) => {
  const _0x56a9ae = _0x27ea96;
  try {
    const _0x209a78 = await bcrypt["genSalt"](0xa),
      _0x344e7a = await bcrypt["hash"](_0x4fa1d7, _0x209a78),
      _0x28dadd =
        _0x41bb17 &&
        (typeof _0x41bb17 !== _0x56a9ae(0x146) ||
          _0x41bb17[_0x56a9ae(0x139)] < 0x4 ||
          _0x41bb17["length"] > 0x20);
    if (_0x28dadd)
      throw new ApiError(
        httpStatus[_0x56a9ae(0x132)],
        errors[_0x56a9ae(0x137)][_0x56a9ae(0x134)]
      );
    const _0x55c985 = new User({
      email: _0x586533,
      password: _0x344e7a,
      firstname: _0x47d5c9,
      lastname: _0x4794ae,
      nickname: _0x41bb17,
      role: _0x186a02,
      deviceToken: _0x189379,
    });
    return await _0x55c985[_0x56a9ae(0x136)](), _0x55c985;
  } catch (_0x232d16) {
    throw _0x232d16;
  }
}),
  (module[_0x27ea96(0x138)][_0x27ea96(0x13e)] = async (
    _0x3cbe07,
    _0x59021c,
    _0x2a11b1
  ) => {
    const _0x3d706b = _0x27ea96;
    try {
      const _0x9ffafd = await userService[_0x3d706b(0x140)](_0x3cbe07);
      if (!_0x9ffafd)
        throw new ApiError(
          httpStatus[_0x3d706b(0x130)],
          errors[_0x3d706b(0x137)]["emailNotUsed"]
        );
      if (!(await _0x9ffafd[_0x3d706b(0x145)](_0x59021c)))
        throw new ApiError(
          httpStatus["UNAUTHORIZED"],
          errors[_0x3d706b(0x137)][_0x3d706b(0x13a)]
        );
      return (
        (_0x9ffafd[_0x3d706b(0x142)] = _0x2a11b1),
        await _0x9ffafd[_0x3d706b(0x136)]()
      );
    } catch (_0x2ce586) {
      throw _0x2ce586;
    }
  });
