const _0x18ee22 = _0x48c5;
(function (_0x466a90, _0xc9ae5) {
  const _0xf6fde3 = _0x48c5,
    _0x39732a = _0x466a90();
  while (!![]) {
    try {
      const _0x56b934 =
        -parseInt(_0xf6fde3(0x1b6)) / 0x1 +
        -parseInt(_0xf6fde3(0x1a4)) / 0x2 +
        -parseInt(_0xf6fde3(0x19e)) / 0x3 +
        -parseInt(_0xf6fde3(0x1b8)) / 0x4 +
        (-parseInt(_0xf6fde3(0x1ac)) / 0x5) *
          (parseInt(_0xf6fde3(0x1a3)) / 0x6) +
        -parseInt(_0xf6fde3(0x1a5)) / 0x7 +
        parseInt(_0xf6fde3(0x19d)) / 0x8;
      if (_0x56b934 === _0xc9ae5) break;
      else _0x39732a["push"](_0x39732a["shift"]());
    } catch (_0x129d68) {
      _0x39732a["push"](_0x39732a["shift"]());
    }
  }
})(_0x114e, 0xd5577);
function _0x48c5(_0x12bc4a, _0x3dc965) {
  const _0x114ed8 = _0x114e();
  return (
    (_0x48c5 = function (_0x48c565, _0x168b9e) {
      _0x48c565 = _0x48c565 - 0x18f;
      let _0x12cfd0 = _0x114ed8[_0x48c565];
      return _0x12cfd0;
    }),
    _0x48c5(_0x12bc4a, _0x3dc965)
  );
}
function _0x114e() {
  const _0x308ebd = [
    "deleteRoom",
    "2063270dCSQPu",
    "deleteMembers",
    "blockUsersFromChatting",
    "params",
    "../../config/errors",
    "length",
    "../../middleware/apiError",
    "getAllRooms",
    "body",
    "rooms",
    "564156NNFhzO",
    "switchRoomToPrivate",
    "2121096XXGXoM",
    "_id",
    "addPinnedMessage",
    "myRooms",
    "changeRoomName",
    "addNotification",
    "getRoomActiveAssignments",
    "NOT_FOUND",
    "resultRooms",
    "unpinRoom",
    "getRoomsActiveAssignments",
    "codes",
    "getRoomMembers",
    "toggleChatDisabled",
    "user",
    "exports",
    "../../models/user.model",
    "setMinutes",
    "json",
    "map",
    "switchRoomToPublic",
    "alreadyExist",
    "unblockUsersFromChatting",
    "admin",
    "createRoom",
    "../../services",
    "searchRooms",
    "query",
    "joinRoom",
    "searchRoomMembers",
    "duplicateIndexKey",
    "status",
    "pinRoom",
    "36368344sOKTrq",
    "508983PppZFk",
    "getAllPublicRooms",
    "deleteRoomMessages",
    "toggleShowName",
    "pick",
    "18YMwWho",
    "301418RmjteZ",
    "7136038ALIHSH",
    "BAD_REQUEST",
    "http-status",
    "scheduleEvent",
    "getMinutes",
    "CREATED",
  ];
  _0x114e = function () {
    return _0x308ebd;
  };
  return _0x114e();
}
const { ApiError } = require(_0x18ee22(0x1b2)),
  { roomsService, assignemntsService } = require(_0x18ee22(0x195)),
  scheduleService = require("../../services/system/schedule.service"),
  errors = require(_0x18ee22(0x1b0)),
  httpStatus = require(_0x18ee22(0x1a7)),
  { clientSchema: userSchema } = require(_0x18ee22(0x1c8)),
  _ = require("lodash");
(module["exports"][_0x18ee22(0x1b3)] = async (
  _0x242b1a,
  _0x18eb99,
  _0x9160f6
) => {
  const _0x35456b = _0x18ee22;
  try {
    const _0x306b7e = await roomsService[_0x35456b(0x1b3)]();
    _0x18eb99["status"](httpStatus["OK"])["json"]({ rooms: _0x306b7e });
  } catch (_0x55dbde) {
    _0x9160f6(_0x55dbde);
  }
}),
  (module["exports"][_0x18ee22(0x1ab)] = async (
    _0x2701a0,
    _0x2b3fa9,
    _0x3f40ff
  ) => {
    const _0x271901 = _0x18ee22;
    try {
      const _0x3d214b = _0x2701a0[_0x271901(0x1c6)],
        { roomId: _0x56602d } = _0x2701a0[_0x271901(0x1b4)],
        _0x3294d8 = await roomsService["deleteRoom"](_0x56602d, _0x3d214b);
      _0x2b3fa9[_0x271901(0x19b)](httpStatus["OK"])["json"](_0x3294d8);
    } catch (_0x249181) {
      _0x3f40ff(_0x249181);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x19f)] = async (
    _0x32ff30,
    _0x719bb,
    _0x12ed9d
  ) => {
    const _0x87977c = _0x18ee22;
    try {
      const { skip: _0x8e5712 } = _0x32ff30[_0x87977c(0x197)],
        _0x5b7711 = await roomsService[_0x87977c(0x19f)](_0x8e5712);
      _0x719bb[_0x87977c(0x19b)](httpStatus["OK"])[_0x87977c(0x1ca)]({
        rooms: _0x5b7711,
      });
    } catch (_0x360242) {
      _0x12ed9d(_0x360242);
    }
  }),
  (module["exports"]["resetRoom"] = async (_0x16683c, _0x28bdd2, _0x40f469) => {
    const _0x57a6c1 = _0x18ee22;
    try {
      const _0x316323 = _0x16683c[_0x57a6c1(0x1c6)],
        _0x25952c = _0x16683c[_0x57a6c1(0x1af)]["id"],
        _0x2b7d74 = await roomsService["resetRoom"](_0x316323, _0x25952c);
      _0x28bdd2[_0x57a6c1(0x19b)](httpStatus["CREATED"])[_0x57a6c1(0x1ca)](
        _0x2b7d74
      );
    } catch (_0x5d4995) {
      _0x40f469(_0x5d4995);
    }
  }),
  (module[_0x18ee22(0x1c7)]["deleteRoomMessages"] = async (
    _0x30d868,
    _0x38781b,
    _0x1df444
  ) => {
    const _0x3ca627 = _0x18ee22;
    try {
      const _0x444877 = _0x30d868[_0x3ca627(0x1c6)],
        { roomId: _0xdc1cd1 } = _0x30d868[_0x3ca627(0x1b4)],
        _0x166e3b = await roomsService[_0x3ca627(0x1a0)](_0x444877, _0xdc1cd1);
      _0x38781b["status"](httpStatus["CREATED"])[_0x3ca627(0x1ca)](_0x166e3b);
    } catch (_0x20379c) {
      _0x1df444(_0x20379c);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x194)] = async (
    _0x3d087b,
    _0x38d062,
    _0x1a3091
  ) => {
    const _0x133199 = _0x18ee22;
    try {
      const _0xcfebe9 = _0x3d087b[_0x133199(0x1c6)],
        _0x52767c = await roomsService["createRoom"](_0x3d087b),
        _0x1a4cf3 = new Date();
      _0x1a4cf3[_0x133199(0x1c9)](
        _0x1a4cf3[_0x133199(0x1a9)]() + 0x3c * 0x18 * 0x87
      ),
        scheduleService[_0x133199(0x1a8)](_0x1a4cf3, async () => {
          const _0x602b09 = _0x133199;
          try {
            await roomsService[_0x602b09(0x1ab)](_0x52767c[_0x602b09(0x1b9)], {
              role: _0x602b09(0x193),
            });
          } catch (_0x418123) {}
        });
      const _0xd16bc7 = new Date();
      _0xd16bc7[_0x133199(0x1c9)](
        _0xd16bc7[_0x133199(0x1a9)]() + 0x3c * 0x18 * 0x86
      ),
        scheduleService[_0x133199(0x1a8)](_0xd16bc7, async () => {
          const _0x208bde = _0x133199;
          try {
            const _0x32870e =
              "سيتم\x20إعادة\x20تعيين\x20الغرفة\x20خلال\x207\x20أيام";
            _0xcfebe9[_0x208bde(0x1bd)](_0x32870e, null, null, _0xd16bc7),
              await _0xcfebe9["save"]();
          } catch (_0x42815d) {}
        }),
        _0x38d062[_0x133199(0x19b)](httpStatus[_0x133199(0x1aa)])[
          _0x133199(0x1ca)
        ](_0x52767c);
    } catch (_0x872cc5) {
      if (_0x872cc5["code"] === errors[_0x133199(0x1c3)][_0x133199(0x19a)]) {
        const _0x5ca0cc = httpStatus[_0x133199(0x1a6)],
          _0x3efeef = errors[_0x133199(0x1b5)][_0x133199(0x191)];
        _0x872cc5 = new ApiError(_0x5ca0cc, _0x3efeef);
      }
      _0x1a3091(_0x872cc5);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x1ae)] = async (
    _0x55c5c4,
    _0x407651,
    _0x673239
  ) => {
    const _0x13a6e5 = _0x18ee22;
    try {
      const _0x52bd0c = await roomsService[_0x13a6e5(0x1ae)](_0x55c5c4);
      _0x407651[_0x13a6e5(0x19b)](httpStatus["CREATED"])["json"](_0x52bd0c);
    } catch (_0x100e8d) {
      _0x673239(_0x100e8d);
    }
  }),
  (module["exports"][_0x18ee22(0x192)] = async (
    _0x266afc,
    _0x5c0b38,
    _0x3d30bc
  ) => {
    const _0x485fa7 = _0x18ee22;
    try {
      const _0x455ed6 = await roomsService["unblockUsersFromChatting"](
        _0x266afc
      );
      _0x5c0b38[_0x485fa7(0x19b)](httpStatus[_0x485fa7(0x1aa)])[
        _0x485fa7(0x1ca)
      ](_0x455ed6);
    } catch (_0x222d34) {
      _0x3d30bc(_0x222d34);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x1ba)] = async (
    _0x1afcf4,
    _0x5d4c52,
    _0x2e984a
  ) => {
    const _0xf3f0aa = _0x18ee22;
    try {
      const _0x34cd86 = await roomsService["addPinnedMessage"](_0x1afcf4);
      _0x5d4c52["status"](httpStatus[_0xf3f0aa(0x1aa)])[_0xf3f0aa(0x1ca)](
        _0x34cd86
      );
    } catch (_0x1ecf5f) {
      _0x2e984a(_0x1ecf5f);
    }
  }),
  (module[_0x18ee22(0x1c7)]["joinRoom"] = async (
    _0x580b0d,
    _0x126acd,
    _0xa53a51
  ) => {
    const _0x39fcbc = _0x18ee22;
    try {
      const _0xb0718e = await roomsService[_0x39fcbc(0x198)](_0x580b0d);
      _0x126acd["status"](httpStatus[_0x39fcbc(0x1aa)])[_0x39fcbc(0x1ca)](
        _0xb0718e
      );
    } catch (_0x16c15c) {
      _0xa53a51(_0x16c15c);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x196)] = async (
    _0x3863a0,
    _0xfccead,
    _0xb0ab6a
  ) => {
    const _0x1a1ce2 = _0x18ee22;
    try {
      const _0x84fe6e = _0x3863a0[_0x1a1ce2(0x1c6)],
        { name: _0x5a2b29 } = _0x3863a0[_0x1a1ce2(0x197)],
        _0x5ee19f = await roomsService[_0x1a1ce2(0x196)](_0x84fe6e, _0x5a2b29);
      if (
        !_0x5ee19f[_0x1a1ce2(0x1bb)][_0x1a1ce2(0x1b1)] &&
        !_0x5ee19f[_0x1a1ce2(0x1c0)]["length"]
      ) {
        const _0x180eb7 = httpStatus[_0x1a1ce2(0x1bf)],
          _0x24d5e9 = errors[_0x1a1ce2(0x1b5)]["noRoomsMatch"];
        throw new ApiError(_0x180eb7, _0x24d5e9);
      }
      _0xfccead["status"](httpStatus["OK"])[_0x1a1ce2(0x1ca)](_0x5ee19f);
    } catch (_0x32f45c) {
      _0xb0ab6a(_0x32f45c);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x1c4)] = async (
    _0x277177,
    _0x4c5b95,
    _0x54a0a0
  ) => {
    const _0x1da374 = _0x18ee22;
    try {
      const _0x147d89 = _0x277177[_0x1da374(0x1c6)],
        { roomId: _0x188b3a } = _0x277177["params"],
        _0x17e2a5 = await roomsService[_0x1da374(0x1c4)](_0x147d89, _0x188b3a);
      _0x4c5b95[_0x1da374(0x19b)](httpStatus["OK"])[_0x1da374(0x1ca)]({
        members: _0x17e2a5,
      });
    } catch (_0x1a369a) {
      _0x54a0a0(_0x1a369a);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x1ad)] = async (
    _0x4fbc3e,
    _0x42d600,
    _0xdb89e
  ) => {
    const _0xe13f6c = _0x18ee22;
    try {
      const _0x5e3a25 = _0x4fbc3e[_0xe13f6c(0x1c6)],
        { roomId: _0x481f18, members: _0xe80fc7 } = _0x4fbc3e["body"],
        _0x1538ed = await roomsService[_0xe13f6c(0x1ad)](
          _0x5e3a25,
          _0x481f18,
          _0xe80fc7
        );
      _0x42d600["status"](httpStatus["OK"])[_0xe13f6c(0x1ca)](_0x1538ed);
    } catch (_0x34f04) {
      _0xdb89e(_0x34f04);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x1a1)] = async (
    _0x434c27,
    _0x5687da,
    _0x48b693
  ) => {
    const _0x3ae64b = _0x18ee22;
    try {
      const _0x4782fb = _0x434c27[_0x3ae64b(0x1c6)],
        { roomId: _0x3d26b0 } = _0x434c27[_0x3ae64b(0x1b4)],
        _0x44cbbd = await roomsService[_0x3ae64b(0x1a1)](_0x4782fb, _0x3d26b0);
      _0x5687da[_0x3ae64b(0x19b)](httpStatus["OK"])[_0x3ae64b(0x1ca)](
        _0x44cbbd
      );
    } catch (_0x5bbbb6) {
      _0x48b693(_0x5bbbb6);
    }
  }),
  (module["exports"][_0x18ee22(0x1c5)] = async (
    _0x475a1b,
    _0xd7e550,
    _0x26a56
  ) => {
    const _0x5c194a = _0x18ee22;
    try {
      const _0x5900d8 = _0x475a1b[_0x5c194a(0x1c6)],
        { roomId: _0xcad0f0 } = _0x475a1b[_0x5c194a(0x1b4)],
        _0x56e487 = await roomsService[_0x5c194a(0x1c5)](_0xcad0f0, _0x5900d8);
      _0xd7e550[_0x5c194a(0x19b)](httpStatus["OK"])[_0x5c194a(0x1ca)](
        _0x56e487
      );
    } catch (_0x3a95db) {
      _0x26a56(_0x3a95db);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x1bc)] = async (
    _0x1429de,
    _0x3a3d8f,
    _0x218cdb
  ) => {
    const _0x582740 = _0x18ee22;
    try {
      const _0x26394 = _0x1429de[_0x582740(0x1c6)],
        { roomId: _0x5687f6, name: _0xd9f171 } = _0x1429de[_0x582740(0x1b4)],
        _0x24b8b7 = await roomsService["changeRoomName"](
          _0x5687f6,
          _0x26394,
          _0xd9f171
        );
      _0x3a3d8f[_0x582740(0x19b)](httpStatus["OK"])[_0x582740(0x1ca)](
        _0x24b8b7
      );
    } catch (_0x3cddef) {
      _0x218cdb(_0x3cddef);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x1be)] = async (
    _0x77f6fa,
    _0x7c9daf,
    _0x20c507
  ) => {
    const _0x8871f2 = _0x18ee22;
    try {
      const { roomId: _0x3c660b } = _0x77f6fa[_0x8871f2(0x1af)],
        _0x5634cd = await assignemntsService[_0x8871f2(0x1c2)]([_0x3c660b]);
      _0x7c9daf[_0x8871f2(0x19b)](httpStatus["OK"])["json"]({
        assignments: _0x5634cd,
      });
    } catch (_0x492ee0) {
      _0x20c507(_0x492ee0);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x190)] = async (
    _0x17ac65,
    _0x160659,
    _0x281551
  ) => {
    const _0x515175 = _0x18ee22;
    try {
      const _0x52c5b1 = _0x17ac65[_0x515175(0x1c6)],
        { roomId: _0xca6189 } = _0x17ac65[_0x515175(0x1b4)],
        _0x2035f4 = await roomsService[_0x515175(0x190)](_0x52c5b1, _0xca6189);
      _0x160659[_0x515175(0x19b)](httpStatus[_0x515175(0x1aa)])["json"](
        _0x2035f4
      );
    } catch (_0x60a393) {
      _0x281551(_0x60a393);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x1b7)] = async (
    _0xf291b1,
    _0x2b67f6,
    _0x3dc13e
  ) => {
    const _0x56c13d = _0x18ee22;
    try {
      const _0x11adc7 = _0xf291b1[_0x56c13d(0x1c6)],
        { roomId: _0x38f88f } = _0xf291b1[_0x56c13d(0x1b4)],
        _0x5ce387 = await roomsService[_0x56c13d(0x1b7)](_0x11adc7, _0x38f88f);
      _0x2b67f6["status"](httpStatus[_0x56c13d(0x1aa)])[_0x56c13d(0x1ca)](
        _0x5ce387
      );
    } catch (_0x191b5b) {
      _0x3dc13e(_0x191b5b);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x19c)] = async (
    _0x3a6741,
    _0x282d1a,
    _0x16d85b
  ) => {
    const _0xc83061 = _0x18ee22;
    try {
      const { roomId: _0x2f75da } = _0x3a6741[_0xc83061(0x1b4)],
        _0x329f80 = await roomsService["pinRoom"](_0x2f75da);
      _0x282d1a[_0xc83061(0x19b)](httpStatus[_0xc83061(0x1aa)])[
        _0xc83061(0x1ca)
      ](_0x329f80);
    } catch (_0x22f0de) {
      _0x16d85b(_0x22f0de);
    }
  }),
  (module[_0x18ee22(0x1c7)][_0x18ee22(0x1c1)] = async (
    _0x56b97f,
    _0x4a8f29,
    _0x5a7108
  ) => {
    const _0x4ef345 = _0x18ee22;
    try {
      const { roomId: _0x534faa } = _0x56b97f[_0x4ef345(0x1b4)],
        _0x96a6e1 = await roomsService[_0x4ef345(0x1c1)](_0x534faa);
      _0x4a8f29[_0x4ef345(0x19b)](httpStatus[_0x4ef345(0x1aa)])["json"](
        _0x96a6e1
      );
    } catch (_0x27254c) {
      _0x5a7108(_0x27254c);
    }
  }),
  (module[_0x18ee22(0x1c7)]["searchRoomMembers"] = async (
    _0x341fe2,
    _0x3de071,
    _0x3a2af1
  ) => {
    const _0x4e3f30 = _0x18ee22;
    try {
      const _0x216c26 = _0x341fe2["user"],
        { roomId: _0x10a4b5, searchText: _0xc6c1a7 } =
          _0x341fe2[_0x4e3f30(0x1b4)],
        _0x1b0d5e = await roomsService[_0x4e3f30(0x199)](
          _0x216c26,
          _0x10a4b5,
          _0xc6c1a7
        );
      _0x3de071["status"](httpStatus["OK"])["json"]({
        members: _0x1b0d5e[_0x4e3f30(0x18f)]((_0x458f71) =>
          _[_0x4e3f30(0x1a2)](_0x458f71, userSchema)
        ),
      });
    } catch (_0x5ca6f3) {
      _0x3a2af1(_0x5ca6f3);
    }
  });
