function _0x306f() {
  const _0x380894 = [
    "student",
    "noUsers",
    "verificationCode",
    "verifyEmail",
    "find",
    "55416zbFXsK",
    "save",
    "system",
    "email",
    "json",
    "password",
    "deleteUser",
    "getMyAssignments",
    "joinedRooms",
    "deleteMyAccount",
    "sendNotification",
    "BAD_REQUEST",
    "../../services",
    "user",
    "CREATED",
    "handleForgotPassword",
    "code",
    "registerEmail",
    "../../config/success",
    "body",
    "length",
    "alreadyVerified",
    "210901YtQkPS",
    "seeNotifications",
    "resendVerificationCode",
    "isAuth",
    "genSalt",
    "getAllUsers",
    "verificationCodeSent",
    "status",
    "16CRazDC",
    "searchStudents",
    "codes",
    "verifyUser",
    "18voknJV",
    "../../middleware/apiError",
    "notification",
    "getMappedRooms",
    "resetPassword",
    "expiresAt",
    "10ugxGCP",
    "24959bKXGgN",
    "sendForgotPasswordCode",
    "338387GFqksn",
    "bcrypt",
    "http-status",
    "1439253QVXwDH",
    "2496sehDYG",
    "pick",
    "2uinHed",
    "../../models/user.model",
    "invalidCode",
    "hash",
    "expiredCode",
    "verified",
    "notificationSent",
    "exportUsersToExcelFile",
    "searchTeachers",
    "exports",
    "NOT_FOUND",
    "sort",
    "toString",
    "263735PybysJ",
    "getRoomsActiveAssignments",
    "incorrectCode",
    "auth",
    "_id",
    "emailNotUsed",
    "query",
    "getMyActiveAssignments",
    "passwordResetCodeSent",
    "includes",
    "resetPasswordCode",
    "901052cCDfzd",
    "file/xlsx",
    "INTERNAL_SERVER_ERROR",
    "map",
  ];
  _0x306f = function () {
    return _0x380894;
  };
  return _0x306f();
}
const _0x23eb31 = _0x1ecd;
(function (_0x28f1a8, _0x357743) {
  const _0x2e6037 = _0x1ecd,
    _0x946117 = _0x28f1a8();
  while (!![]) {
    try {
      const _0x3045f1 =
        (-parseInt(_0x2e6037(0x183)) / 0x1) *
          (parseInt(_0x2e6037(0x19e)) / 0x2) +
        -parseInt(_0x2e6037(0x16d)) / 0x3 +
        -parseInt(_0x2e6037(0x164)) / 0x4 +
        (-parseInt(_0x2e6037(0x1ab)) / 0x5) *
          (parseInt(_0x2e6037(0x18f)) / 0x6) +
        (-parseInt(_0x2e6037(0x198)) / 0x7) *
          (-parseInt(_0x2e6037(0x18b)) / 0x8) +
        (parseInt(_0x2e6037(0x19b)) / 0x9) *
          (parseInt(_0x2e6037(0x195)) / 0xa) +
        (parseInt(_0x2e6037(0x196)) / 0xb) * (parseInt(_0x2e6037(0x19c)) / 0xc);
      if (_0x3045f1 === _0x357743) break;
      else _0x946117["push"](_0x946117["shift"]());
    } catch (_0x3e068f) {
      _0x946117["push"](_0x946117["shift"]());
    }
  }
})(_0x306f, 0x1c3da);
function _0x1ecd(_0x2f073a, _0x1704c4) {
  const _0x306f92 = _0x306f();
  return (
    (_0x1ecd = function (_0x1ecdfc, _0x33c798) {
      _0x1ecdfc = _0x1ecdfc - 0x15e;
      let _0x222e31 = _0x306f92[_0x1ecdfc];
      return _0x222e31;
    }),
    _0x1ecd(_0x2f073a, _0x1704c4)
  );
}
const _ = require("lodash"),
  { ApiError } = require(_0x23eb31(0x190)),
  { User, clientSchema } = require(_0x23eb31(0x19f)),
  {
    emailService,
    usersService,
    roomsService,
    assignemntsService,
    excelService,
  } = require(_0x23eb31(0x179)),
  bcrypt = require(_0x23eb31(0x199)),
  errors = require("../../config/errors"),
  httpStatus = require(_0x23eb31(0x19a)),
  success = require(_0x23eb31(0x17f));
(module[_0x23eb31(0x1a7)][_0x23eb31(0x186)] = async (
  _0x2fb374,
  _0x49b20e,
  _0x3b1b38
) => {
  const _0x7519b7 = _0x23eb31;
  try {
    const _0xe7dc1b = _["pick"](_0x2fb374[_0x7519b7(0x17a)], clientSchema);
    _0x49b20e[_0x7519b7(0x18a)](httpStatus["OK"])[_0x7519b7(0x171)](_0xe7dc1b);
  } catch (_0x515166) {
    _0x3b1b38(_0x515166);
  }
}),
  (module["exports"][_0x23eb31(0x18e)] = async (
    _0x111ec9,
    _0x3b153a,
    _0x33f42c
  ) => {
    const _0x3a9544 = _0x23eb31;
    try {
      const { code: _0xe0b8a } = _0x111ec9[_0x3a9544(0x180)],
        _0x47a215 = _0x111ec9[_0x3a9544(0x17a)];
      if (_0x47a215[_0x3a9544(0x1a3)]) {
        const _0x523b39 = httpStatus["BAD_REQUEST"],
          _0x48ae19 = errors[_0x3a9544(0x17a)]["alreadyVerified"];
        throw new ApiError(_0x523b39, _0x48ae19);
      }
      if (
        (!_0xe0b8a && _0xe0b8a != 0x0) ||
        _0xe0b8a[_0x3a9544(0x1aa)]()[_0x3a9544(0x181)] !== 0x4
      ) {
        const _0x13b2b9 = httpStatus[_0x3a9544(0x178)],
          _0x22a8a8 = errors[_0x3a9544(0x1ae)][_0x3a9544(0x1a0)];
        throw new ApiError(_0x13b2b9, _0x22a8a8);
      }
      if (_0x47a215[_0x3a9544(0x16a)]["code"] == _0xe0b8a) {
        const _0x5440da =
            new Date() -
            new Date(_0x47a215["verificationCode"][_0x3a9544(0x194)]),
          _0x6d9f2f = _0x5440da < 0xa * 0x3c * 0x3e8;
        if (!_0x6d9f2f) {
          const _0x2a12ef = httpStatus["BAD_REQUEST"],
            _0x1925eb = errors[_0x3a9544(0x1ae)][_0x3a9544(0x1a2)];
          throw new ApiError(_0x2a12ef, _0x1925eb);
        }
        return (
          _0x47a215[_0x3a9544(0x16b)](),
          await _0x47a215["save"](),
          _0x3b153a[_0x3a9544(0x18a)](httpStatus["OK"])[_0x3a9544(0x171)](
            _[_0x3a9544(0x19d)](_0x47a215, clientSchema)
          )
        );
      }
      const _0xe8ff03 = httpStatus["BAD_REQUEST"],
        _0xb7294e = errors["auth"][_0x3a9544(0x1ad)];
      throw new ApiError(_0xe8ff03, _0xb7294e);
    } catch (_0x476b6d) {
      _0x33f42c(_0x476b6d);
    }
  }),
  (module[_0x23eb31(0x1a7)][_0x23eb31(0x185)] = async (
    _0x3dbc96,
    _0x5ced05,
    _0x18c783
  ) => {
    const _0x22c5c5 = _0x23eb31;
    try {
      const _0x492bd6 = _0x3dbc96["user"];
      if (_0x492bd6["verified"]) {
        const _0x308f66 = httpStatus[_0x22c5c5(0x178)],
          _0x1f2a3e = errors["user"][_0x22c5c5(0x182)];
        throw new ApiError(_0x308f66, _0x1f2a3e);
      }
      _0x492bd6["updateVerificationCode"](),
        await _0x492bd6[_0x22c5c5(0x16e)](),
        await emailService[_0x22c5c5(0x17e)](
          _0x492bd6[_0x22c5c5(0x170)],
          _0x492bd6
        ),
        _0x5ced05["status"](httpStatus["OK"])[_0x22c5c5(0x171)]({
          ok: !![],
          message: success["auth"][_0x22c5c5(0x189)],
        });
    } catch (_0x3eb62f) {
      _0x18c783(_0x3eb62f);
    }
  }),
  (module[_0x23eb31(0x1a7)][_0x23eb31(0x193)] = async (
    _0x2d4427,
    _0xb97ea3,
    _0x34ae68
  ) => {
    const _0x4a2323 = _0x23eb31;
    try {
      const { newPassword: _0x2cff8a } = _0x2d4427[_0x4a2323(0x180)],
        _0x170f8d = _0x2d4427[_0x4a2323(0x17a)],
        _0x2d990a = await bcrypt[_0x4a2323(0x187)](0xa),
        _0x183d3e = await bcrypt[_0x4a2323(0x1a1)](_0x2cff8a, _0x2d990a);
      (_0x170f8d["password"] = _0x183d3e),
        await _0x170f8d["save"](),
        _0xb97ea3[_0x4a2323(0x18a)](httpStatus["CREATED"])["json"](
          _[_0x4a2323(0x19d)](_0x170f8d, clientSchema)
        );
    } catch (_0x4816ec) {
      _0x34ae68(_0x4816ec);
    }
  }),
  (module[_0x23eb31(0x1a7)]["getUserRooms"] = async (
    _0x3b2c02,
    _0xa5e974,
    _0x296c13
  ) => {
    const _0x3de448 = _0x23eb31;
    try {
      const _0x6acce2 = _0x3b2c02[_0x3de448(0x17a)],
        _0x59468c = [
          ..._0x6acce2["createdRooms"],
          ..._0x6acce2[_0x3de448(0x175)],
        ],
        _0x294fde = await roomsService[_0x3de448(0x192)](_0x59468c);
      _0xa5e974[_0x3de448(0x18a)](httpStatus["OK"])["json"]({
        rooms: _0x294fde,
      });
    } catch (_0x5bb8ec) {
      _0x296c13(_0x5bb8ec);
    }
  }),
  (module[_0x23eb31(0x1a7)][_0x23eb31(0x197)] = async (
    _0xf9c45d,
    _0x51ef06,
    _0x251c45
  ) => {
    const _0x422140 = _0x23eb31;
    try {
      const { email: _0x489884 } = _0xf9c45d[_0x422140(0x15f)],
        _0x5652d7 = await usersService["findUserByEmail"](_0x489884);
      if (!_0x5652d7) {
        const _0x8ad9da = httpStatus[_0x422140(0x1a8)],
          _0x4db5f7 = errors[_0x422140(0x1ae)]["emailNotUsed"];
        throw new ApiError(_0x8ad9da, _0x4db5f7);
      }
      _0x5652d7["generatePasswordResetCode"]();
      const _0x28ad5f = await _0x5652d7[_0x422140(0x16e)]();
      await emailService["forgotPasswordEmail"](_0x489884, _0x28ad5f),
        _0x51ef06[_0x422140(0x18a)](httpStatus["OK"])[_0x422140(0x171)]({
          ok: !![],
          message: success[_0x422140(0x1ae)][_0x422140(0x161)],
        });
    } catch (_0x4f4bdb) {
      _0x251c45(_0x4f4bdb);
    }
  }),
  (module[_0x23eb31(0x1a7)][_0x23eb31(0x17c)] = async (
    _0x45b8e0,
    _0x4d671e,
    _0x48cab9
  ) => {
    const _0x214226 = _0x23eb31;
    try {
      const {
          email: _0x14c4af,
          code: _0x1956d3,
          newPassword: _0x1c1ae5,
        } = _0x45b8e0[_0x214226(0x180)],
        _0x1ba19b = await usersService["findUserByEmail"](_0x14c4af);
      if (!_0x1ba19b) {
        const _0x2caa02 = httpStatus[_0x214226(0x1a8)],
          _0x32beca = errors["auth"][_0x214226(0x15e)];
        throw new ApiError(_0x2caa02, _0x32beca);
      }
      if (
        (!_0x1956d3 && _0x1956d3 != 0x0) ||
        _0x1956d3["toString"]()[_0x214226(0x181)] !== 0x4
      ) {
        const _0x461640 = httpStatus[_0x214226(0x178)],
          _0x1b2eb3 = errors[_0x214226(0x1ae)]["invalidCode"];
        throw new ApiError(_0x461640, _0x1b2eb3);
      }
      if (_0x1ba19b[_0x214226(0x163)]["code"] == _0x1956d3) {
        const _0x463f3f =
            new Date() -
            new Date(_0x1ba19b[_0x214226(0x163)][_0x214226(0x194)]),
          _0x5c13b3 = _0x463f3f < 0xa * 0x3c * 0x3e8;
        if (!_0x5c13b3) {
          const _0x2a8d71 = httpStatus[_0x214226(0x178)],
            _0x3c7040 = errors[_0x214226(0x1ae)][_0x214226(0x1a2)];
          throw new ApiError(_0x2a8d71, _0x3c7040);
        }
        const _0x31eb00 = await bcrypt["genSalt"](0xa),
          _0x12f647 = await bcrypt["hash"](_0x1c1ae5, _0x31eb00);
        return (
          (_0x1ba19b[_0x214226(0x172)] = _0x12f647),
          await _0x1ba19b[_0x214226(0x16e)](),
          _0x4d671e[_0x214226(0x18a)](httpStatus["OK"])[_0x214226(0x171)](
            _[_0x214226(0x19d)](_0x1ba19b, clientSchema)
          )
        );
      }
      const _0x380fe6 = httpStatus[_0x214226(0x178)],
        _0x3ba892 = errors[_0x214226(0x1ae)][_0x214226(0x1ad)];
      throw new ApiError(_0x380fe6, _0x3ba892);
    } catch (_0x15d483) {
      _0x48cab9(_0x15d483);
    }
  }),
  (module[_0x23eb31(0x1a7)]["updateProfile"] = async (
    _0x23ecab,
    _0x48c289,
    _0x13dc9a
  ) => {
    const _0x25dd26 = _0x23eb31;
    try {
      const _0x82b3cb = await usersService["updateProfile"](_0x23ecab);
      _0x48c289[_0x25dd26(0x18a)](httpStatus[_0x25dd26(0x17b)])[
        _0x25dd26(0x171)
      ](_[_0x25dd26(0x19d)](_0x82b3cb, clientSchema));
    } catch (_0x52f838) {
      if (
        _0x52f838[_0x25dd26(0x17d)] ===
        errors[_0x25dd26(0x18d)]["duplicateIndexKey"]
      ) {
        const _0x14ca84 = httpStatus[_0x25dd26(0x178)],
          _0x9e7bb2 = errors[_0x25dd26(0x1ae)]["emailUsed"];
        _0x52f838 = new ApiError(_0x14ca84, _0x9e7bb2);
      }
      _0x13dc9a(_0x52f838);
    }
  }),
  (module[_0x23eb31(0x1a7)][_0x23eb31(0x188)] = async (
    _0x9cb46a,
    _0x54ac3c,
    _0x11236d
  ) => {
    const _0x9103c1 = _0x23eb31;
    try {
      const _0xae524a = _0x9cb46a[_0x9103c1(0x17a)];
      let { role: _0x44b159 } = _0x9cb46a[_0x9103c1(0x15f)];
      ![_0x9103c1(0x168), "teacher"][_0x9103c1(0x162)](_0x44b159) &&
        (_0x44b159 = _0x9103c1(0x168));
      const _0x5e343d = await usersService[_0x9103c1(0x188)](
        _0xae524a,
        _0x44b159
      );
      if (!_0x5e343d || !_0x5e343d[_0x9103c1(0x181)]) {
        const _0x43ce31 = httpStatus["NOT_FOUND"],
          _0x1dceea = errors[_0x9103c1(0x17a)][_0x9103c1(0x169)];
        throw new ApiError(_0x43ce31, _0x1dceea);
      }
      _0x54ac3c[_0x9103c1(0x18a)](httpStatus["OK"])[_0x9103c1(0x171)]({
        users: _0x5e343d,
      });
    } catch (_0xcf5523) {
      _0x11236d(_0xcf5523);
    }
  }),
  (module[_0x23eb31(0x1a7)][_0x23eb31(0x173)] = async (
    _0xdf8300,
    _0x2514d1,
    _0x2c5fba
  ) => {
    const _0x5ab912 = _0x23eb31;
    try {
      const { userId: _0x50562e } = _0xdf8300["body"],
        _0x21612b = await usersService[_0x5ab912(0x173)](_0x50562e);
      _0x2514d1[_0x5ab912(0x18a)](httpStatus["OK"])[_0x5ab912(0x171)](
        _0x21612b
      );
    } catch (_0x59abd9) {
      _0x2c5fba(_0x59abd9);
    }
  }),
  (module[_0x23eb31(0x1a7)][_0x23eb31(0x176)] = async (
    _0x2d4761,
    _0x40d855,
    _0x46a006
  ) => {
    const _0x2e662d = _0x23eb31;
    try {
      const _0x59f14c = _0x2d4761[_0x2e662d(0x17a)],
        _0xfa68bb = await usersService["deleteUser"](
          _0x59f14c[_0x2e662d(0x1af)]
        );
      _0x40d855[_0x2e662d(0x18a)](httpStatus["OK"])[_0x2e662d(0x171)](
        _0xfa68bb
      );
    } catch (_0x2b22d4) {
      _0x46a006(_0x2b22d4);
    }
  }),
  (module["exports"]["sendNotification"] = async (
    _0x1f91ef,
    _0x291942,
    _0x3bf400
  ) => {
    const _0x23df1a = _0x23eb31;
    try {
      const {
          userIds: userIds = [],
          title: title = "",
          body: body = "",
          data: data = {},
          date: date = null,
        } = _0x1f91ef[_0x23df1a(0x180)],
        _0x1e65f2 = (_0x3493ad, _0x19540f) => {
          const _0x12c2ff = _0x23df1a;
          if (_0x3493ad) {
            const _0x4331c5 = httpStatus[_0x12c2ff(0x166)],
              _0xfd6e20 = errors[_0x12c2ff(0x16f)][_0x12c2ff(0x191)],
              _0x399ba0 = new ApiError(_0x4331c5, _0xfd6e20);
            return _0x3bf400(_0x399ba0);
          }
          _0x291942["status"](httpStatus["OK"])[_0x12c2ff(0x171)](
            success[_0x12c2ff(0x1ae)][_0x12c2ff(0x1a4)]
          );
        };
      await usersService[_0x23df1a(0x177)](
        userIds,
        title,
        body,
        data,
        date,
        _0x1e65f2
      );
    } catch (_0x256c89) {
      _0x3bf400(_0x256c89);
    }
  }),
  (module[_0x23eb31(0x1a7)]["seeNotifications"] = async (
    _0x533ed8,
    _0xdd7da4,
    _0x4f6aa9
  ) => {
    const _0x196c48 = _0x23eb31;
    try {
      const _0x32d551 = _0x533ed8[_0x196c48(0x17a)];
      _0x32d551[_0x196c48(0x184)](), await _0x32d551["save"]();
      const _0x4e9579 = { notifications: _0x32d551["notifications"] };
      _0xdd7da4[_0x196c48(0x18a)](httpStatus["OK"])[_0x196c48(0x171)](
        _0x4e9579
      );
    } catch (_0x5719f7) {
      _0x4f6aa9(_0x5719f7);
    }
  }),
  (module["exports"][_0x23eb31(0x174)] = async (
    _0x3ad148,
    _0xee3ddd,
    _0x50a5fb
  ) => {
    const _0x1fcb27 = _0x23eb31;
    try {
      const _0x13edaa = _0x3ad148[_0x1fcb27(0x17a)],
        _0x3541d3 = await usersService[_0x1fcb27(0x174)](_0x13edaa);
      _0xee3ddd[_0x1fcb27(0x18a)](httpStatus["OK"])["json"](_0x3541d3);
    } catch (_0x17971f) {
      _0x50a5fb(_0x17971f);
    }
  }),
  (module[_0x23eb31(0x1a7)][_0x23eb31(0x160)] = async (
    _0x47d02b,
    _0x392c51,
    _0x3a75a4
  ) => {
    const _0x299454 = _0x23eb31;
    try {
      const _0xc69d1a = _0x47d02b[_0x299454(0x17a)],
        _0x5047e6 = await assignemntsService[_0x299454(0x1ac)](
          _0xc69d1a[_0x299454(0x175)]
        );
      _0x392c51[_0x299454(0x18a)](httpStatus["OK"])[_0x299454(0x171)]({
        assignments: _0x5047e6,
      });
    } catch (_0x24da41) {
      _0x3a75a4(_0x24da41);
    }
  }),
  (module[_0x23eb31(0x1a7)]["exportUsersToExcel"] = async (
    _0x34a6f4,
    _0xc569ce,
    _0x4ac373
  ) => {
    const _0x30c35f = _0x23eb31;
    try {
      const _0x5adf29 = await User[_0x30c35f(0x16c)]()[_0x30c35f(0x1a9)]({
          _id: -0x1,
        }),
        _0x31afce = await excelService[_0x30c35f(0x1a5)](_0x5adf29),
        _0x2cbe9f = { type: _0x30c35f(0x165), path: _0x31afce };
      _0xc569ce["status"](httpStatus["CREATED"])[_0x30c35f(0x171)](_0x2cbe9f);
    } catch (_0xc62d09) {
      _0x4ac373(_0xc62d09);
    }
  }),
  (module[_0x23eb31(0x1a7)][_0x23eb31(0x1a6)] = async (
    _0x2b51b7,
    _0x469249,
    _0x2509b4
  ) => {
    const _0xa33dc4 = _0x23eb31;
    try {
      const { searchTerm: _0x2ad2f7 } = _0x2b51b7[_0xa33dc4(0x15f)],
        _0x1859bd = await usersService["searchTeachers"](_0x2ad2f7),
        _0x2b7b1e = {
          teachers: _0x1859bd[_0xa33dc4(0x167)]((_0xc26c02) =>
            _[_0xa33dc4(0x19d)](_0xc26c02, clientSchema)
          ),
        };
      _0x469249["status"](httpStatus["OK"])[_0xa33dc4(0x171)](_0x2b7b1e);
    } catch (_0x1c5943) {
      _0x2509b4(_0x1c5943);
    }
  }),
  (module["exports"]["searchStudents"] = async (
    _0x4b3e12,
    _0x2b9a1b,
    _0x47dcf5
  ) => {
    const _0x1f9d8d = _0x23eb31;
    try {
      const { searchTerm: _0x1dfa13 } = _0x4b3e12[_0x1f9d8d(0x15f)],
        _0x39320a = await usersService[_0x1f9d8d(0x18c)](_0x1dfa13),
        _0x28da88 = {
          teachers: _0x39320a[_0x1f9d8d(0x167)]((_0x41190f) =>
            _["pick"](_0x41190f, clientSchema)
          ),
        };
      _0x2b9a1b[_0x1f9d8d(0x18a)](httpStatus["OK"])[_0x1f9d8d(0x171)](
        _0x28da88
      );
    } catch (_0x42aeb8) {
      _0x47dcf5(_0x42aeb8);
    }
  });
