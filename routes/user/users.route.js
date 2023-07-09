const _0x3623e5 = _0x4020;
(function (_0xd943ff, _0x2c86a4) {
  const _0x4fec27 = _0x4020,
    _0x5aa134 = _0xd943ff();
  while (!![]) {
    try {
      const _0x39631f =
        parseInt(_0x4fec27(0x11f)) / 0x1 +
        -parseInt(_0x4fec27(0x108)) / 0x2 +
        -parseInt(_0x4fec27(0xfd)) / 0x3 +
        (parseInt(_0x4fec27(0x129)) / 0x4) *
          (-parseInt(_0x4fec27(0x10a)) / 0x5) +
        parseInt(_0x4fec27(0xff)) / 0x6 +
        (-parseInt(_0x4fec27(0x104)) / 0x7) *
          (-parseInt(_0x4fec27(0x11a)) / 0x8) +
        (parseInt(_0x4fec27(0x10c)) / 0x9) * (parseInt(_0x4fec27(0x10e)) / 0xa);
      if (_0x39631f === _0x2c86a4) break;
      else _0x5aa134["push"](_0x5aa134["shift"]());
    } catch (_0x24eded) {
      _0x5aa134["push"](_0x5aa134["shift"]());
    }
  }
})(_0x441b, 0x2d290);
function _0x4020(_0x2eae5b, _0x4486b2) {
  const _0x441bc9 = _0x441b();
  return (
    (_0x4020 = function (_0x4020ba, _0x1a77fd) {
      _0x4020ba = _0x4020ba - 0xfb;
      let _0x5c47ed = _0x441bc9[_0x4020ba];
      return _0x5c47ed;
    }),
    _0x4020(_0x2eae5b, _0x4486b2)
  );
}
function _0x441b() {
  const _0x1df336 = [
    "getUserRooms",
    "deleteAny",
    "patch",
    "../../middleware/auth",
    "get",
    "handleForgotPassword",
    "deleteMyAccount",
    "23500ATRxRR",
    "/my-rooms",
    "notification",
    "exports",
    "../../middleware/validation/auth",
    "sendForgotPasswordCode",
    "seeNotifications",
    "searchTeachers",
    "/export",
    "updateOwn",
    "resendVerificationCode",
    "/delete-my-account",
    "/students/search",
    "/verify",
    "searchStudents",
    "/my-active-assignments",
    "deleteOwn",
    "341274pmCbPe",
    "emailValidator",
    "419496tJxXTA",
    "getAllUsers",
    "assignment",
    "sendNotification",
    "resetPassword",
    "106974KKaXPc",
    "/profile",
    "/see-notifications",
    "readAny",
    "489746hSTYxs",
    "route",
    "215MRWtDm",
    "express",
    "27tcwBWh",
    "/my-assignments",
    "1963890siyTWo",
    "profile",
    "/isauth",
    "/reset-password",
    "getMyActiveAssignments",
    "createAny",
    "delete",
    "/teachers/search",
    "isAuth",
    "verificationCode",
    "updateProfile",
    "getMyAssignments",
    "24MdeQxw",
    "deleteUser",
    "userType",
    "user",
    "readOwn",
    "91303iOVrvn",
    "createdAssignments",
    "post",
  ];
  _0x441b = function () {
    return _0x1df336;
  };
  return _0x441b();
}
const { Router } = require(_0x3623e5(0x10b)),
  router = Router(),
  { usersController } = require("../../controllers"),
  auth = require(_0x3623e5(0x125)),
  validator = require(_0x3623e5(0x12d));
router[_0x3623e5(0x126)](
  _0x3623e5(0x110),
  auth("readOwn", _0x3623e5(0x11d)),
  usersController[_0x3623e5(0x116)]
),
  router[_0x3623e5(0x109)](_0x3623e5(0x136))
    [_0x3623e5(0x126)](
      auth(_0x3623e5(0x132), _0x3623e5(0x117), !![]),
      usersController[_0x3623e5(0x133)]
    )
    [_0x3623e5(0x121)](
      auth(_0x3623e5(0x132), _0x3623e5(0x117), !![]),
      usersController["verifyUser"]
    ),
  router[_0x3623e5(0x126)](
    _0x3623e5(0x12a),
    auth("readOwn", "room"),
    usersController[_0x3623e5(0x122)]
  ),
  router[_0x3623e5(0x109)]("/forgot-password")
    [_0x3623e5(0x126)](
      validator[_0x3623e5(0xfe)],
      usersController[_0x3623e5(0x12e)]
    )
    [_0x3623e5(0x121)](
      validator["forgotPasswordValidator"],
      usersController[_0x3623e5(0x127)]
    ),
  router[_0x3623e5(0x121)](
    _0x3623e5(0x111),
    auth(_0x3623e5(0x132), "password"),
    validator["resetPasswordValidator"],
    usersController[_0x3623e5(0x103)]
  ),
  router[_0x3623e5(0x124)](
    _0x3623e5(0x105),
    auth(_0x3623e5(0x132), _0x3623e5(0x10f)),
    usersController[_0x3623e5(0x118)]
  ),
  router[_0x3623e5(0x109)]("/")
    [_0x3623e5(0x126)](
      auth("readAny", _0x3623e5(0x11c)),
      usersController[_0x3623e5(0x100)]
    )
    [_0x3623e5(0x114)](
      auth(_0x3623e5(0x123), _0x3623e5(0x11c)),
      usersController[_0x3623e5(0x11b)]
    ),
  router[_0x3623e5(0x114)](
    _0x3623e5(0x134),
    auth(_0x3623e5(0xfc), "user"),
    usersController[_0x3623e5(0x128)]
  ),
  router[_0x3623e5(0x121)](
    "/send-notification",
    auth(_0x3623e5(0x113), _0x3623e5(0x12b)),
    usersController[_0x3623e5(0x102)]
  ),
  router[_0x3623e5(0x126)](
    _0x3623e5(0x106),
    auth("readOwn", _0x3623e5(0x12b)),
    usersController[_0x3623e5(0x12f)]
  ),
  router["get"](
    _0x3623e5(0x10d),
    auth(_0x3623e5(0x11e), _0x3623e5(0x120)),
    usersController[_0x3623e5(0x119)]
  ),
  router[_0x3623e5(0x126)](
    _0x3623e5(0xfb),
    auth(_0x3623e5(0x11e), _0x3623e5(0x101)),
    usersController[_0x3623e5(0x112)]
  ),
  router[_0x3623e5(0x126)](
    _0x3623e5(0x131),
    auth(_0x3623e5(0x107), _0x3623e5(0x11d)),
    usersController["exportUsersToExcel"]
  ),
  router[_0x3623e5(0x126)](
    _0x3623e5(0x115),
    auth(_0x3623e5(0x107), "user"),
    usersController[_0x3623e5(0x130)]
  ),
  router[_0x3623e5(0x126)](
    _0x3623e5(0x135),
    auth(_0x3623e5(0x107), _0x3623e5(0x11d)),
    usersController[_0x3623e5(0x137)]
  ),
  (module[_0x3623e5(0x12c)] = router);
