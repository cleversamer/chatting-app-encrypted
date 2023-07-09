const _0x3f8e7c = _0x553e;
(function (_0x3251fb, _0xd4547d) {
  const _0x21af45 = _0x553e,
    _0x56354a = _0x3251fb();
  while (!![]) {
    try {
      const _0x39a7ab =
        parseInt(_0x21af45(0x19b)) / 0x1 +
        (-parseInt(_0x21af45(0x1d4)) / 0x2) *
          (-parseInt(_0x21af45(0x1cb)) / 0x3) +
        parseInt(_0x21af45(0x1a4)) / 0x4 +
        (parseInt(_0x21af45(0x1c0)) / 0x5) *
          (parseInt(_0x21af45(0x1ad)) / 0x6) +
        parseInt(_0x21af45(0x1d6)) / 0x7 +
        (parseInt(_0x21af45(0x1d1)) / 0x8) *
          (-parseInt(_0x21af45(0x1bb)) / 0x9) +
        -parseInt(_0x21af45(0x1cf)) / 0xa;
      if (_0x39a7ab === _0xd4547d) break;
      else _0x56354a["push"](_0x56354a["shift"]());
    } catch (_0x450901) {
      _0x56354a["push"](_0x56354a["shift"]());
    }
  }
})(_0x1eb6, 0x3b952);
const { ApiError } = require("../../middleware/apiError"),
  { User } = require(_0x3f8e7c(0x1b8)),
  { Room } = require(_0x3f8e7c(0x19f)),
  { Assignment } = require(_0x3f8e7c(0x1da)),
  bcrypt = require("bcrypt"),
  emailService = require(_0x3f8e7c(0x1ba)),
  roomsService = require(_0x3f8e7c(0x1b4)),
  notificationsService = require("./notifications.service"),
  errors = require("../../config/errors"),
  httpStatus = require(_0x3f8e7c(0x1c9)),
  jwt = require("jsonwebtoken"),
  mongoose = require(_0x3f8e7c(0x1d2)),
  localStorage = require(_0x3f8e7c(0x1a2));
function _0x1eb6() {
  const _0x14af56 = [
    "toLowerCase",
    "user",
    "validateToken",
    "JWT_PRIVATE_KEY",
    "sendPushNotification",
    "searchStudents",
    "15006qwxXcC",
    "room",
    "exports",
    "invalidName",
    "admin",
    "addNotification",
    "length",
    "../room/rooms.service",
    "files",
    "getRemainingTime",
    "aggregate",
    "../../models/user.model",
    "invalidEmail",
    "./email.service",
    "357498ydxgxF",
    "avatar",
    "lastname",
    "avatarUrl",
    "findOne",
    "825TQXiPD",
    "student",
    "verify",
    "path",
    "match",
    "teacher",
    "getAllUsers",
    "map",
    "invalidPassword",
    "http-status",
    "createdRooms",
    "121419ZCXJSO",
    "toString",
    "_id",
    "save",
    "8526550IhxkSY",
    "deleteRoom",
    "56xryMey",
    "mongoose",
    "BAD_REQUEST",
    "4BIYlOt",
    "unjoinUsersFromRoom",
    "2957605Rbxlpk",
    "searchTeachers",
    "find",
    "filter",
    "../../models/assignment.model",
    "body",
    "forEach",
    "notFound",
    "hash",
    "comparePassword",
    "rooms",
    "firstname",
    "deleteFile",
    "251161kaJXHs",
    "storeFile",
    "auth",
    "email",
    "../../models/room.model",
    "deleteUser",
    "findUserByEmail",
    "../storage/localStorage.service",
    "joinedRooms",
    "829888OFWeSa",
    "deviceToken",
    "NOT_FOUND",
  ];
  _0x1eb6 = function () {
    return _0x14af56;
  };
  return _0x1eb6();
}
(module[_0x3f8e7c(0x1af)][_0x3f8e7c(0x1c6)] = async (_0x560082, _0x153926) => {
  const _0x37f9c7 = _0x3f8e7c;
  try {
    return await User["aggregate"]([
      {
        $match: {
          _id: { $not: { $eq: _0x560082[_0x37f9c7(0x1cd)] } },
          role: _0x153926,
        },
      },
      {
        $project: {
          _id: 0x1,
          email: 0x1,
          firstname: 0x1,
          lastname: 0x1,
          nickname: 0x1,
          role: 0x1,
          verified: 0x1,
        },
      },
    ]);
  } catch (_0x5f7617) {
    throw _0x5f7617;
  }
}),
  (module[_0x3f8e7c(0x1af)][_0x3f8e7c(0x1a0)] = async (_0x32e23d) => {
    const _0xeac5c5 = _0x3f8e7c;
    try {
      if (!mongoose["isValidObjectId"](_0x32e23d)) {
        const _0xb2c25c = httpStatus[_0xeac5c5(0x1d3)],
          _0x316fa9 = errors["system"]["invalidMongoId"];
        throw new ApiError(_0xb2c25c, _0x316fa9);
      }
      const _0x376697 = await User["findByIdAndDelete"](_0x32e23d);
      if (!_0x376697) {
        const _0x4a1259 = httpStatus[_0xeac5c5(0x1a6)],
          _0x2c4beb = errors[_0xeac5c5(0x19d)][_0xeac5c5(0x1dd)];
        throw new ApiError(_0x4a1259, _0x2c4beb);
      }
      if (!_0x376697[_0xeac5c5(0x1ca)]["length"]) return _0x376697;
      const _0x22f0cc = await Room[_0xeac5c5(0x1d8)]({
        _id: { $in: _0x376697[_0xeac5c5(0x1ca)] },
      });
      return (
        _0x22f0cc[_0xeac5c5(0x1dc)](async (_0x447731) => {
          const _0x18963f = _0xeac5c5;
          try {
            await roomsService[_0x18963f(0x1d0)](_0x447731[_0x18963f(0x1cd)], {
              role: _0x18963f(0x1b1),
            });
          } catch (_0x4a8df1) {}
        }),
        _0x376697[_0xeac5c5(0x1be)] &&
          (await localStorage[_0xeac5c5(0x19a)](_0x376697[_0xeac5c5(0x1be)])),
        _0x376697
      );
    } catch (_0x14e00c) {
      throw _0x14e00c;
    }
  }),
  (module[_0x3f8e7c(0x1af)][_0x3f8e7c(0x1a1)] = async (_0xd8e854) => {
    const _0x37e8a9 = _0x3f8e7c;
    try {
      const _0x4a61e3 = await User[_0x37e8a9(0x1bf)]({ email: _0xd8e854 });
      return _0x4a61e3;
    } catch (_0x532a13) {
      throw _0x532a13;
    }
  }),
  (module["exports"]["findUserById"] = async (_0x2aa453) => {
    try {
      const _0x1ea370 = await User["findById"](_0x2aa453);
      return _0x1ea370;
    } catch (_0x30faa7) {
      throw _0x30faa7;
    }
  }),
  (module[_0x3f8e7c(0x1af)][_0x3f8e7c(0x1a9)] = (_0xa34af0) => {
    const _0x427366 = _0x3f8e7c;
    try {
      return jwt[_0x427366(0x1c2)](_0xa34af0, process["env"][_0x427366(0x1aa)]);
    } catch (_0x4bd87e) {
      throw _0x4bd87e;
    }
  }),
  (module[_0x3f8e7c(0x1af)][_0x3f8e7c(0x1d5)] = async (
    _0x41ed24,
    _0x16ab13
  ) => {
    const _0xeeea3c = _0x3f8e7c;
    try {
      const _0xab18d6 = await User["find"]({ _id: { $in: _0x41ed24 } });
      _0xab18d6[_0xeeea3c(0x1dc)](async (_0x447a29) => {
        const _0x3f83eb = _0xeeea3c;
        (_0x447a29[_0x3f83eb(0x1a3)] = _0x447a29[_0x3f83eb(0x1a3)][
          _0x3f83eb(0x1d9)
        ](
          (_0x2f90a0) =>
            _0x2f90a0[_0x3f83eb(0x1cc)]() !== _0x16ab13[_0x3f83eb(0x1cc)]()
        )),
          await _0x447a29[_0x3f83eb(0x1ce)]();
      });
    } catch (_0x43e634) {
      throw _0x43e634;
    }
  }),
  (module[_0x3f8e7c(0x1af)]["updateProfile"] = async (_0x51d235) => {
    const _0x4b0d66 = _0x3f8e7c;
    try {
      let _0x1a38af = _0x51d235[_0x4b0d66(0x1a8)];
      const {
          firstname: _0x17cd26,
          lastname: _0x2fdab2,
          email: _0x4a42dc,
          password: _0x544fc9,
          nickname: _0x597804,
        } = _0x51d235[_0x4b0d66(0x1db)],
        _0x37eb22 = _0x51d235?.[_0x4b0d66(0x1b5)]?.[_0x4b0d66(0x1bc)];
      if (
        !_0x37eb22 &&
        !_0x17cd26 &&
        !_0x2fdab2 &&
        !_0x4a42dc &&
        !_0x544fc9 &&
        !_0x597804
      )
        return _0x1a38af;
      validateString(_0x17cd26, 0x1, 0x40, "invalidName"),
        validateString(_0x2fdab2, 0x1, 0x40, _0x4b0d66(0x1b0)),
        validateEmail(_0x4a42dc, _0x4b0d66(0x1b9)),
        validateString(_0x544fc9, 0x8, 0x20, _0x4b0d66(0x1c8));
      _0x597804 && validateString(_0x597804, 0x4, 0x20, "invalidNickname");
      if (_0x37eb22) {
        _0x1a38af[_0x4b0d66(0x1be)] &&
          (await localStorage[_0x4b0d66(0x19a)](_0x1a38af["avatarUrl"]));
        const _0x2923b8 = await localStorage[_0x4b0d66(0x19c)](_0x37eb22);
        _0x1a38af[_0x4b0d66(0x1be)] = _0x2923b8[_0x4b0d66(0x1c3)];
      }
      _0x17cd26 &&
        _0x1a38af["firstname"] !== _0x17cd26 &&
        (_0x1a38af[_0x4b0d66(0x199)] = _0x17cd26);
      _0x2fdab2 &&
        _0x1a38af[_0x4b0d66(0x1bd)] !== _0x2fdab2 &&
        (_0x1a38af[_0x4b0d66(0x1bd)] = _0x2fdab2);
      _0x1a38af["nickname"] = _0x597804;
      if (_0x544fc9) {
        const _0x2acbc4 = await _0x1a38af[_0x4b0d66(0x1df)](_0x544fc9);
        if (!_0x2acbc4) {
          const _0x1e64ca = await bcrypt["genSalt"](0xa),
            _0x3b5a31 = await bcrypt[_0x4b0d66(0x1de)](_0x544fc9, _0x1e64ca);
          _0x1a38af["password"] = _0x3b5a31;
        }
      }
      _0x4a42dc &&
        _0x1a38af[_0x4b0d66(0x19e)] !== _0x4a42dc &&
        ((_0x1a38af[_0x4b0d66(0x19e)] = _0x4a42dc),
        (_0x1a38af["verified"] = ![]));
      const _0x291a13 = await _0x1a38af[_0x4b0d66(0x1ce)]();
      return (
        _0x4a42dc &&
          _0x1a38af[_0x4b0d66(0x19e)] !== _0x4a42dc &&
          (await emailService["registerEmail"](_0x4a42dc, _0x1a38af)),
        _0x291a13
      );
    } catch (_0x549b6b) {
      throw _0x549b6b;
    }
  });
const validateEmail = (_0x117476, _0x146b44) => {
    const _0x44ba05 = _0x3f8e7c,
      _0x13581f =
        !_0x117476 ||
        String(_0x117476)
          [_0x44ba05(0x1a7)]()
          [_0x44ba05(0x1c4)](
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    if (!_0x13581f)
      throw new ApiError(
        httpStatus[_0x44ba05(0x1d3)],
        errors["auth"][_0x146b44]
      );
    return _0x13581f;
  },
  validateString = (_0x30528c, _0x138249, _0x1b42f4, _0x5631b6) => {
    const _0x1bc2e3 = _0x3f8e7c,
      _0x258990 =
        !_0x30528c ||
        (typeof _0x30528c === "string" &&
          _0x30528c["length"] >= _0x138249 &&
          _0x30528c[_0x1bc2e3(0x1b3)] <= _0x1b42f4);
    if (!_0x258990)
      throw new ApiError(
        httpStatus[_0x1bc2e3(0x1d3)],
        errors[_0x1bc2e3(0x19d)][_0x5631b6]
      );
    return _0x258990;
  };
function _0x553e(_0xbdc516, _0x187777) {
  const _0x1eb6d4 = _0x1eb6();
  return (
    (_0x553e = function (_0x553ee6, _0x2ec1f1) {
      _0x553ee6 = _0x553ee6 - 0x199;
      let _0x758081 = _0x1eb6d4[_0x553ee6];
      return _0x758081;
    }),
    _0x553e(_0xbdc516, _0x187777)
  );
}
(module[_0x3f8e7c(0x1af)]["sendNotification"] = async (
  _0xa8c1e0,
  _0x23264d,
  _0x3ca8f2,
  _0x47d68a,
  _0x30e22e,
  _0x55ef17
) => {
  const _0x1b01a4 = _0x3f8e7c;
  try {
    const _0x26f879 = await User[_0x1b01a4(0x1d8)]({ _id: { $in: _0xa8c1e0 } }),
      _0x23542f = _0x26f879[_0x1b01a4(0x1c7)]((_0x4a4226) => {
        const _0x9b7e46 = _0x1b01a4;
        return (
          _0x4a4226[_0x9b7e46(0x1b2)](
            _0x23264d,
            _0x3ca8f2,
            _0x47d68a,
            _0x30e22e
          ),
          _0x4a4226[_0x9b7e46(0x1ce)](),
          _0x4a4226[_0x9b7e46(0x1a5)]
        );
      });
    return (
      notificationsService[_0x1b01a4(0x1ab)](
        _0x23264d,
        _0x3ca8f2,
        _0x47d68a,
        _0x23542f,
        _0x55ef17
      ),
      !![]
    );
  } catch (_0xf1d354) {
    throw _0xf1d354;
  }
}),
  (module["exports"]["getMyAssignments"] = async (_0x312b81) => {
    const _0x3119f1 = _0x3f8e7c;
    try {
      let _0x32aeda = await Assignment[_0x3119f1(0x1b7)]([
        { $match: { room: { $in: _0x312b81[_0x3119f1(0x1ca)] } } },
        { $sort: { _id: -0x1 } },
        {
          $lookup: {
            from: _0x3119f1(0x1e0),
            localField: _0x3119f1(0x1ae),
            foreignField: _0x3119f1(0x1cd),
            as: _0x3119f1(0x1ae),
          },
        },
        {
          $project: {
            title: 0x1,
            file: 0x1,
            clientDate: 0x1,
            date: 0x1,
            submissions: 0x1,
            expiresAt: 0x1,
            room: { _id: 0x1, name: 0x1, status: 0x1, members: 0x1 },
          },
        },
      ]);
      return _0x32aeda[_0x3119f1(0x1c7)]((_0x9ddf71) => ({
        ..._0x9ddf71,
        remainingTime: Assignment[_0x3119f1(0x1b6)](_0x9ddf71["expiresAt"]),
      }));
    } catch (_0x33156d) {
      throw _0x33156d;
    }
  }),
  (module[_0x3f8e7c(0x1af)][_0x3f8e7c(0x1d7)] = async (_0x5dc91c) => {
    const _0x42fc8e = _0x3f8e7c;
    try {
      return await User[_0x42fc8e(0x1d8)]({
        role: _0x42fc8e(0x1c5),
        $or: [
          { firstname: { $regex: RegExp(_0x5dc91c, "i") } },
          { lastname: { $regex: RegExp(_0x5dc91c, "i") } },
        ],
      });
    } catch (_0xd4c5bd) {
      throw _0xd4c5bd;
    }
  }),
  (module[_0x3f8e7c(0x1af)][_0x3f8e7c(0x1ac)] = async (_0xdc1a53) => {
    const _0x3eea86 = _0x3f8e7c;
    try {
      return await User[_0x3eea86(0x1d8)]({
        role: _0x3eea86(0x1c1),
        $or: [
          { firstname: { $regex: RegExp(_0xdc1a53, "i") } },
          { lastname: { $regex: RegExp(_0xdc1a53, "i") } },
        ],
      });
    } catch (_0xd90e7d) {
      throw _0xd90e7d;
    }
  });
