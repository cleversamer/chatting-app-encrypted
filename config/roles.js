function _0x2208() {
  const _0x2265dd = [
    "1622160EoKmLm",
    "accesscontrol",
    "81wgjhfL",
    "116837rPBoCz",
    "2278755ZXeqWY",
    "3327354sNjKHi",
    "96VmGvnZ",
    "2APaCkM",
    "648110DPUIAT",
    "1025656ipFCON",
    "150817sKZiJG",
    "exports",
  ];
  _0x2208 = function () {
    return _0x2265dd;
  };
  return _0x2208();
}
const _0x308e92 = _0x118f;
(function (_0x270ef7, _0x4cac6c) {
  const _0x34c7f6 = _0x118f,
    _0xed73cd = _0x270ef7();
  while (!![]) {
    try {
      const _0x1bd3ae =
        (parseInt(_0x34c7f6(0x10c)) / 0x1) *
          (-parseInt(_0x34c7f6(0x115)) / 0x2) +
        parseInt(_0x34c7f6(0x10e)) / 0x3 +
        -parseInt(_0x34c7f6(0x117)) / 0x4 +
        parseInt(_0x34c7f6(0x112)) / 0x5 +
        parseInt(_0x34c7f6(0x113)) / 0x6 +
        (-parseInt(_0x34c7f6(0x111)) / 0x7) *
          (parseInt(_0x34c7f6(0x114)) / 0x8) +
        (parseInt(_0x34c7f6(0x110)) / 0x9) *
          (-parseInt(_0x34c7f6(0x116)) / 0xa);
      if (_0x1bd3ae === _0x4cac6c) break;
      else _0xed73cd["push"](_0xed73cd["shift"]());
    } catch (_0x5e79c7) {
      _0xed73cd["push"](_0xed73cd["shift"]());
    }
  }
})(_0x2208, 0x57f10);
function _0x118f(_0x4d4127, _0x1b62db) {
  const _0x220835 = _0x2208();
  return (
    (_0x118f = function (_0x118f69, _0x5bc174) {
      _0x118f69 = _0x118f69 - 0x10c;
      let _0x42569e = _0x220835[_0x118f69];
      return _0x42569e;
    }),
    _0x118f(_0x4d4127, _0x1b62db)
  );
}
const AccessControl = require(_0x308e92(0x10f)),
  allRights = {
    "create:any": ["*"],
    "read:any": ["*"],
    "update:any": ["*"],
    "delete:any": ["*"],
  };
let grantsObject = {
  admin: {
    user: allRights,
    userType: allRights,
    verificationCode: allRights,
    password: allRights,
    room: allRights,
    message: allRights,
    assignment: allRights,
    createdAssignments: allRights,
    submission: allRights,
    profile: allRights,
    roomType: allRights,
    notification: allRights,
    pinnedRoom: allRights,
  },
  teacher: {
    user: allRights,
    verificationCode: allRights,
    password: allRights,
    room: allRights,
    message: allRights,
    assignment: allRights,
    createdAssignments: allRights,
    submission: allRights,
    profile: { "read:own": ["*"], "update:own": ["*"] },
    notification: allRights,
    pinnedRoom: { "read:any": ["*"] },
  },
  student: {
    user: { "read:own": ["*"], "delete:own": ["*"] },
    verificationCode: { "update:own": ["*"] },
    password: { "update:own": ["*"] },
    room: { "read:any": ["*"], "update:own": ["*"] },
    message: {
      "create:own": ["*"],
      "read:own": ["*"],
      "update:own": ["*"],
      "delete:own": ["*"],
    },
    assignment: { "read:any": ["*"] },
    submission: { "create:own": ["*"], "read:own": ["*"] },
    profile: { "read:own": ["*"], "update:own": ["*"] },
    notification: { "read:own": ["*"] },
    pinnedRoom: { "read:any": ["*"] },
  },
};
const roles = new AccessControl(grantsObject);
module[_0x308e92(0x10d)] = roles;
