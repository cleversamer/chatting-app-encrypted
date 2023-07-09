function _0x2c14(_0x39dd9f, _0x2328a5) {
  const _0x3b7e1d = _0x3b7e();
  return (
    (_0x2c14 = function (_0x2c14d0, _0x2bf1c6) {
      _0x2c14d0 = _0x2c14d0 - 0x148;
      let _0x18bc99 = _0x3b7e1d[_0x2c14d0];
      return _0x18bc99;
    }),
    _0x2c14(_0x39dd9f, _0x2328a5)
  );
}
const _0x2e22f6 = _0x2c14;
(function (_0x41712b, _0x4235f2) {
  const _0x30584f = _0x2c14,
    _0x13c2b2 = _0x41712b();
  while (!![]) {
    try {
      const _0x3206fa =
        (parseInt(_0x30584f(0x166)) / 0x1) *
          (parseInt(_0x30584f(0x177)) / 0x2) +
        parseInt(_0x30584f(0x16b)) / 0x3 +
        (parseInt(_0x30584f(0x175)) / 0x4) *
          (-parseInt(_0x30584f(0x148)) / 0x5) +
        -parseInt(_0x30584f(0x14f)) / 0x6 +
        parseInt(_0x30584f(0x14d)) / 0x7 +
        (-parseInt(_0x30584f(0x14b)) / 0x8) *
          (-parseInt(_0x30584f(0x15f)) / 0x9) +
        (parseInt(_0x30584f(0x163)) / 0xa) * (parseInt(_0x30584f(0x162)) / 0xb);
      if (_0x3206fa === _0x4235f2) break;
      else _0x13c2b2["push"](_0x13c2b2["shift"]());
    } catch (_0x2f5c0b) {
      _0x13c2b2["push"](_0x13c2b2["shift"]());
    }
  }
})(_0x3b7e, 0x380f2);
const mongoose = require(_0x2e22f6(0x171)),
  jwt = require(_0x2e22f6(0x150)),
  bcrypt = require(_0x2e22f6(0x174)),
  clientSchema = [
    _0x2e22f6(0x173),
    _0x2e22f6(0x167),
    _0x2e22f6(0x156),
    _0x2e22f6(0x157),
    _0x2e22f6(0x16f),
    _0x2e22f6(0x16c),
    _0x2e22f6(0x178),
    "createdRooms",
    _0x2e22f6(0x170),
    _0x2e22f6(0x169),
    _0x2e22f6(0x159),
  ],
  SUPPORTED_ROLES = [_0x2e22f6(0x176), _0x2e22f6(0x16d), "admin"],
  userSchema = new mongoose["Schema"](
    {
      avatarUrl: { type: String, default: "" },
      email: { type: String, required: !![], unique: !![], trim: !![] },
      password: { type: String, trim: !![], required: !![] },
      role: { type: String, enum: SUPPORTED_ROLES, default: "student" },
      firstname: { type: String, trim: !![], required: !![] },
      lastname: { type: String, trim: !![], required: !![] },
      nickname: { type: String, default: "" },
      verificationCode: { type: Object },
      verified: { type: Boolean, default: ![] },
      createdRooms: { type: Array },
      joinedRooms: { type: Array },
      notifications: { type: Array, default: [] },
      deviceToken: { type: String, required: !![] },
      resetPasswordCode: {
        code: { type: String, default: "" },
        expiresAt: { type: String, default: "" },
      },
    },
    { minimize: ![] }
  );
userSchema["pre"](_0x2e22f6(0x15e), function (_0x392ca1) {
  const _0x27903b = _0x2e22f6,
    _0x797955 = Math[_0x27903b(0x15a)](0x3e8 + Math["random"]() * 0x2328),
    _0x4a5cdd = new Date() + 0xa * 0x3c * 0x3e8;
  (this[_0x27903b(0x15d)] = { code: _0x797955, expiresAt: _0x4a5cdd }),
    _0x392ca1();
}),
  (userSchema[_0x2e22f6(0x161)]["updateVerificationCode"] = function () {
    const _0x2877ee = _0x2e22f6,
      _0x3c8be7 = Math[_0x2877ee(0x15a)](
        0x3e8 + Math[_0x2877ee(0x14e)]() * 0x2328
      ),
      _0x3b731a = new Date() + 0xa * 0x3c * 0x3e8;
    this[_0x2877ee(0x15d)] = { code: _0x3c8be7, expiresAt: _0x3b731a };
  }),
  (userSchema[_0x2e22f6(0x161)][_0x2e22f6(0x153)] = function () {
    const _0x4a7305 = _0x2e22f6,
      _0x464edb = Math["floor"](0x3e8 + Math[_0x4a7305(0x14e)]() * 0x2328),
      _0x522cb1 = new Date() + 0xa * 0x3c * 0x3e8;
    this[_0x4a7305(0x149)] = { code: _0x464edb, expiresAt: _0x522cb1 };
  }),
  (userSchema[_0x2e22f6(0x161)][_0x2e22f6(0x154)] = function () {
    this["verified"] = !![];
  }),
  (userSchema[_0x2e22f6(0x161)][_0x2e22f6(0x168)] = function () {
    const _0x5ec6d8 = _0x2e22f6,
      _0x43f9ec = {
        sub: this["_id"][_0x5ec6d8(0x152)](),
        email: this[_0x5ec6d8(0x156)],
      },
      _0x3d7307 = jwt[_0x5ec6d8(0x165)](
        _0x43f9ec,
        process["env"][_0x5ec6d8(0x158)]
      );
    return _0x3d7307;
  }),
  (userSchema[_0x2e22f6(0x161)]["comparePassword"] = async function (
    _0xa8f7ef
  ) {
    const _0x35bcbb = _0x2e22f6;
    return await bcrypt[_0x35bcbb(0x15b)](_0xa8f7ef, this[_0x35bcbb(0x179)]);
  }),
  (userSchema[_0x2e22f6(0x161)][_0x2e22f6(0x155)] = function (
    _0x4d9711,
    _0x4669e7,
    _0x4146ec,
    _0x399bcf
  ) {
    const _0x271e6b = _0x2e22f6,
      _0x87ad16 = {
        title: _0x4d9711,
        body: _0x4669e7,
        date: _0x399bcf,
        seen: ![],
        data: _0x4146ec,
      };
    while (this["notifications"]["length"] >= 0xa) {
      this[_0x271e6b(0x169)][_0x271e6b(0x160)]();
    }
    this[_0x271e6b(0x169)]["unshift"](_0x87ad16);
  }),
  (userSchema[_0x2e22f6(0x161)][_0x2e22f6(0x151)] = function () {
    const _0x2ef513 = _0x2e22f6;
    this[_0x2ef513(0x169)] = this[_0x2ef513(0x169)][_0x2ef513(0x16a)](
      (_0x254b87) => ({ ..._0x254b87, seen: !![] })
    );
  }),
  (userSchema["methods"][_0x2e22f6(0x14a)] = function (_0x75df57) {
    const _0x47e531 = _0x2e22f6,
      _0x7da967 =
        this[_0x47e531(0x15c)][_0x47e531(0x16e)](
          (_0x840f6c) =>
            _0x840f6c[_0x47e531(0x164)]() === _0x75df57[_0x47e531(0x164)]()
        ) >= 0x0,
      _0x1a75ad =
        this["joinedRooms"]["findIndex"](
          (_0xa35c84) =>
            _0xa35c84[_0x47e531(0x164)]() === _0x75df57[_0x47e531(0x164)]()
        ) >= 0x0;
    return _0x7da967 || _0x1a75ad;
  });
const User = mongoose[_0x2e22f6(0x14c)]("User", userSchema);
module[_0x2e22f6(0x172)] = {
  User: User,
  clientSchema: clientSchema,
  SUPPORTED_ROLES: SUPPORTED_ROLES,
};
function _0x3b7e() {
  const _0x2aa761 = [
    "5692UCuHlH",
    "student",
    "4kGkNPk",
    "nickname",
    "password",
    "1180yRdzTq",
    "resetPasswordCode",
    "memberOf",
    "136xwfAmg",
    "model",
    "19292DflPbJ",
    "random",
    "1745130fjrjpT",
    "jsonwebtoken",
    "seeNotifications",
    "toHexString",
    "generatePasswordResetCode",
    "verifyEmail",
    "addNotification",
    "email",
    "role",
    "JWT_PRIVATE_KEY",
    "verified",
    "floor",
    "compare",
    "createdRooms",
    "verificationCode",
    "save",
    "14463oMZuwr",
    "pop",
    "methods",
    "11Ekytnb",
    "4020530wWEViZ",
    "toString",
    "sign",
    "111247CpWjms",
    "avatarUrl",
    "genAuthToken",
    "notifications",
    "map",
    "605037KvJavL",
    "lastname",
    "teacher",
    "findIndex",
    "firstname",
    "joinedRooms",
    "mongoose",
    "exports",
    "_id",
    "bcrypt",
  ];
  _0x3b7e = function () {
    return _0x2aa761;
  };
  return _0x3b7e();
}
