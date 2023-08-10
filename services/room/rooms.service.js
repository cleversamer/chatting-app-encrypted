function _0x409a() {
  const _0x3cf6ef = [
    "findByIdAndDelete",
    "deleteFile",
    "forEach",
    "toggleChatDisabled",
    "deleteMembers",
    "chatDisabled",
    "rooms",
    "textScore",
    "alreadyJoined",
    "../user/users.service",
    "searchRoomMembers",
    "role",
    "ObjectId",
    "joinedRooms",
    "6RAMTlT",
    "pinnedMessages",
    "4586388trjRmk",
    "private",
    "143002EiFbjB",
    "firstname",
    "file",
    "aggregate",
    "toString",
    "code",
    "BAD_REQUEST",
    "find",
    "../../middleware/apiError",
    "../../models/assignment.model",
    "../../models/message.model",
    "./messages.service",
    "unjoinUsersFromRoom",
    "isPinned",
    "user",
    "switchRoomToPrivate",
    "changeRoomName",
    "status",
    "joinRoom",
    "notJoined",
    "2604340TFQRXJ",
    "users",
    "body",
    "1679153GZppSP",
    "findRoomById",
    "getMappedRooms",
    "12spgPER",
    "blockUsersFromChatting",
    "deleteRoom",
    "1640bsgbMI",
    "admin",
    "filter",
    "length",
    "assignments",
    "5913376aYmAdb",
    "$members",
    "toggleShowName",
    "messages",
    "UNAUTHORIZED",
    "createRoom",
    "invalidCode",
    "deleteRoomAssets",
    "unauthorized",
    "unshift",
    "deleteMany",
    "createdRooms",
    "noRooms",
    "../../config/errors",
    "BAD_GATEWAY",
    "files",
    "mongoose",
    "findById",
    "FORBIDDEN",
    "findRoomByName",
    "../storage/localStorage.service",
    "4FcxvMX",
    "../../models/room.model",
    "showName",
    "addPinnedMessage",
    "includes",
    "public",
    "name",
    "createMessage",
    "../../models/user.model",
    "9819PIFvZN",
    "exports",
    "resetRoom",
    "getRoomMembers",
    "message",
    "../../models/submission.model",
    "author",
    "incorrectCode",
    "findOne",
    "851145EWXzpa",
    "members",
    "save",
    "Types",
    "22TLvmyI",
    "NOT_FOUND",
    "notFound",
    "url",
    "map",
    "lastname",
    "_id",
  ];
  _0x409a = function () {
    return _0x3cf6ef;
  };
  return _0x409a();
}
const _0x5d3e81 = _0x459f;
function _0x459f(_0x28bfb0, _0x29fb43) {
  const _0x409a16 = _0x409a();
  return (
    (_0x459f = function (_0x459fde, _0x2e250d) {
      _0x459fde = _0x459fde - 0xf0;
      let _0x53395f = _0x409a16[_0x459fde];
      return _0x53395f;
    }),
    _0x459f(_0x28bfb0, _0x29fb43)
  );
}
(function (_0x1aba2c, _0xdcc988) {
  const _0x38d8b6 = _0x459f,
    _0xb9ad57 = _0x1aba2c();
  while (!![]) {
    try {
      const _0x41aff7 =
        (-parseInt(_0x38d8b6(0x10f)) / 0x1) *
          (-parseInt(_0x38d8b6(0xf5)) / 0x2) +
        (-parseInt(_0x38d8b6(0x13e)) / 0x3) *
          (parseInt(_0x38d8b6(0x12c)) / 0x4) +
        -parseInt(_0x38d8b6(0x109)) / 0x5 +
        (-parseInt(_0x38d8b6(0xf1)) / 0x6) *
          (-parseInt(_0x38d8b6(0x10c)) / 0x7) +
        parseInt(_0x38d8b6(0x117)) / 0x8 +
        (-parseInt(_0x38d8b6(0x135)) / 0x9) *
          (-parseInt(_0x38d8b6(0x112)) / 0xa) +
        (-parseInt(_0x38d8b6(0x142)) / 0xb) * (parseInt(_0x38d8b6(0xf3)) / 0xc);
      if (_0x41aff7 === _0xdcc988) break;
      else _0xb9ad57["push"](_0xb9ad57["shift"]());
    } catch (_0x1ccd7c) {
      _0xb9ad57["push"](_0xb9ad57["shift"]());
    }
  }
})(_0x409a, 0x6d21e);
const { ApiError } = require(_0x5d3e81(0xfd)),
  { Room } = require(_0x5d3e81(0x12d)),
  { Message } = require(_0x5d3e81(0xff)),
  { Assignment } = require(_0x5d3e81(0xfe)),
  { Submission } = require(_0x5d3e81(0x13a)),
  { User } = require(_0x5d3e81(0x134)),
  { MESSAGE_TYPES } = require(_0x5d3e81(0xff)),
  errors = require(_0x5d3e81(0x124)),
  httpStatus = require("http-status"),
  messagesService = require(_0x5d3e81(0x100)),
  localStorage = require(_0x5d3e81(0x12b)),
  mongoose = require(_0x5d3e81(0x127)),
  usersService = require(_0x5d3e81(0x152));
(module[_0x5d3e81(0x136)]["getAllRooms"] = async () => {
  const _0x552808 = _0x5d3e81;
  try {
    const _0x14a6e6 = await Room[_0x552808(0xf8)]([
        { $match: { isPinned: !![] } },
        { $sort: { _id: -0x1 } },
        {
          $lookup: {
            from: _0x552808(0x10a),
            localField: _0x552808(0x13b),
            foreignField: "_id",
            as: _0x552808(0x13b),
          },
        },
        {
          $project: {
            _id: 0x1,
            name: 0x1,
            isPinned: 0x1,
            showName: 0x1,
            members: { $size: _0x552808(0x118) },
            status: 0x1,
            author: { _id: 0x1, firstname: 0x1, lastname: 0x1 },
          },
        },
      ]),
      _0x59c42b = await Room["aggregate"]([
        { $match: { isPinned: ![] } },
        { $sort: { _id: -0x1 } },
        {
          $lookup: {
            from: _0x552808(0x10a),
            localField: _0x552808(0x13b),
            foreignField: _0x552808(0x148),
            as: _0x552808(0x13b),
          },
        },
        {
          $project: {
            _id: 0x1,
            name: 0x1,
            isPinned: 0x1,
            showName: 0x1,
            members: { $size: _0x552808(0x118) },
            status: 0x1,
            author: { _id: 0x1, firstname: 0x1, lastname: 0x1 },
          },
        },
      ]),
      _0x189cff = [..._0x14a6e6, ..._0x59c42b];
    if (!_0x189cff || !_0x189cff[_0x552808(0x115)]) {
      const _0xad99f9 = httpStatus[_0x552808(0x143)],
        _0x2c48ac = errors[_0x552808(0x14f)][_0x552808(0x123)];
      throw new ApiError(_0xad99f9, _0x2c48ac);
    }
    return _0x189cff;
  } catch (_0x1e9063) {
    throw _0x1e9063;
  }
}),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x111)] = async (
    _0x2c153b,
    _0x73e090
  ) => {
    const _0xc84dad = _0x5d3e81;
    try {
      const _0x129f54 = await Room[_0xc84dad(0x128)](_0x2c153b);
      if (!_0x129f54) {
        const _0x9e464f = httpStatus[_0xc84dad(0x143)],
          _0xe36085 = errors["rooms"]["notFound"];
        throw new ApiError(_0x9e464f, _0xe36085);
      }
      const _0x2e2199 =
        _0x129f54[_0xc84dad(0x13b)][_0xc84dad(0xf9)]() ===
          _0x73e090?.[_0xc84dad(0x148)]?.[_0xc84dad(0xf9)]() ||
        _0x73e090[_0xc84dad(0x154)] === _0xc84dad(0x113);
      if (!_0x2e2199) {
        const _0x4e0aa8 = httpStatus["FORBIDDEN"],
          _0x5318fa = errors[_0xc84dad(0x14f)][_0xc84dad(0x11f)];
        throw new ApiError(_0x4e0aa8, _0x5318fa);
      }
      await this[_0xc84dad(0x11e)](_0x2c153b);
      const _0x3b0b17 = await User["findById"](_0x129f54[_0xc84dad(0x13b)]);
      return (
        (_0x3b0b17["createdRooms"] = _0x3b0b17[_0xc84dad(0x122)][
          _0xc84dad(0x114)
        ](
          (_0x35094b) =>
            _0x35094b[_0xc84dad(0xf9)]() !==
            _0x129f54[_0xc84dad(0x148)][_0xc84dad(0xf9)]()
        )),
        await _0x3b0b17[_0xc84dad(0x140)](),
        await Room[_0xc84dad(0x149)](_0x2c153b),
        _0x129f54
      );
    } catch (_0x54d68a) {
      throw _0x54d68a;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x10d)] = async (_0x43aecf) => {
    const _0x216288 = _0x5d3e81;
    try {
      return (
        (_0x43aecf = new mongoose[_0x216288(0x141)][_0x216288(0x155)](
          _0x43aecf
        )),
        await Room[_0x216288(0x128)](_0x43aecf)
      );
    } catch (_0x290ee0) {
      throw _0x290ee0;
    }
  }),
  (module[_0x5d3e81(0x136)]["findRoomByName"] = async (_0x5af520) => {
    const _0x291020 = _0x5d3e81;
    try {
      return await Room[_0x291020(0x13d)]({ name: _0x5af520 });
    } catch (_0x17eb3e) {
      throw _0x17eb3e;
    }
  }),
  (module[_0x5d3e81(0x136)]["searchRooms"] = async (_0x136ce5, _0x597964) => {
    const _0x4f69de = _0x5d3e81;
    try {
      const _0x4efb61 = [
          ..._0x136ce5[_0x4f69de(0x122)],
          ..._0x136ce5["joinedRooms"],
        ],
        _0xa4a50 = await Room[_0x4f69de(0xf8)]([
          {
            $match: { $text: { $search: _0x597964 }, _id: { $in: _0x4efb61 } },
          },
          { $sort: { score: { $meta: _0x4f69de(0x150) } } },
          { $limit: 0xa },
          {
            $lookup: {
              from: _0x4f69de(0x10a),
              localField: _0x4f69de(0x13f),
              foreignField: _0x4f69de(0x148),
              as: _0x4f69de(0x13f),
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "author",
              foreignField: "_id",
              as: _0x4f69de(0x13b),
            },
          },
          {
            $project: {
              _id: 0x1,
              name: 0x1,
              isPinned: 0x1,
              showName: 0x1,
              pinnedMessages: 0x1,
              messages: 0x1,
              chatDisabled: 0x1,
              blockList: 0x1,
              status: 0x1,
              members: 0x1,
              author: { _id: 0x1, firstname: 0x1, lastname: 0x1, role: 0x1 },
              members: { _id: 0x1, firstname: 0x1, lastname: 0x1, role: 0x1 },
            },
          },
        ]);
      let _0x3a0b36 = await Room[_0x4f69de(0xf8)]([
        { $match: { $text: { $search: _0x597964 }, status: _0x4f69de(0x131) } },
        { $sort: { score: { $meta: _0x4f69de(0x150) } } },
        { $limit: 0xa },
        {
          $lookup: {
            from: _0x4f69de(0x10a),
            localField: _0x4f69de(0x13f),
            foreignField: _0x4f69de(0x148),
            as: _0x4f69de(0x13f),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: _0x4f69de(0x13b),
            foreignField: _0x4f69de(0x148),
            as: _0x4f69de(0x13b),
          },
        },
        {
          $project: {
            _id: 0x1,
            name: 0x1,
            isPinned: 0x1,
            showName: 0x1,
            pinnedMessages: 0x1,
            messages: 0x1,
            chatDisabled: 0x1,
            blockList: 0x1,
            status: 0x1,
            members: 0x1,
            author: { _id: 0x1, firstname: 0x1, lastname: 0x1, role: 0x1 },
            members: { _id: 0x1, firstname: 0x1, lastname: 0x1, role: 0x1 },
          },
        },
      ]);
      return (
        (_0x3a0b36 = _0x3a0b36["filter"](
          (_0x1e97c0) =>
            !_0x136ce5[_0x4f69de(0x122)][_0x4f69de(0x130)](_0x1e97c0["_id"])
        )),
        { myRooms: _0xa4a50, resultRooms: _0x3a0b36 }
      );
    } catch (_0x365815) {
      throw _0x365815;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x138)] = async (
    _0x8cebf4,
    _0x5da92a
  ) => {
    const _0x36b565 = _0x5d3e81;
    try {
      const _0x4855ba = await this[_0x36b565(0x10e)]([_0x5da92a]),
        _0x51ff30 = _0x4855ba[0x0];
      if (!_0x51ff30) {
        const _0x2e2816 = httpStatus["NOT_FOUND"],
          _0x491128 = errors[_0x36b565(0x14f)][_0x36b565(0x144)];
        throw new ApiError(_0x2e2816, _0x491128);
      }
      const _0x40df1c = _0x51ff30[_0x36b565(0x13f)]
          [_0x36b565(0x146)]((_0x5c7a25) => _0x5c7a25["_id"]["toString"]())
          [_0x36b565(0x130)](_0x5da92a),
        _0x21b947 =
          _0x51ff30[_0x36b565(0x13b)][0x0]["_id"][_0x36b565(0xf9)]() ===
          _0x8cebf4["_id"][_0x36b565(0xf9)](),
        _0x14080e = _0x40df1c || _0x21b947;
      if (!_0x14080e) {
        const _0x148823 = httpStatus[_0x36b565(0x129)],
          _0x50d39e = errors["rooms"][_0x36b565(0x108)];
        throw new ApiError(_0x148823, _0x50d39e);
      }
      return _0x51ff30[_0x36b565(0x13f)];
    } catch (_0xd51faa) {
      throw _0xd51faa;
    }
  }),
  (module["exports"][_0x5d3e81(0x10e)] = async (_0x2015f7 = []) => {
    const _0x705af4 = _0x5d3e81;
    _0x2015f7 = _0x2015f7["map"](
      (_0x234d98) => new mongoose[_0x705af4(0x141)][_0x705af4(0x155)](_0x234d98)
    );
    try {
      return await Room[_0x705af4(0xf8)]([
        { $match: { _id: { $in: _0x2015f7 } } },
        { $sort: { _id: -0x1 } },
        {
          $lookup: {
            from: "users",
            localField: "members",
            foreignField: _0x705af4(0x148),
            as: "members",
          },
        },
        {
          $lookup: {
            from: _0x705af4(0x10a),
            localField: _0x705af4(0x13b),
            foreignField: _0x705af4(0x148),
            as: "author",
          },
        },
        {
          $lookup: {
            from: _0x705af4(0x11a),
            localField: _0x705af4(0xf2),
            foreignField: "_id",
            as: _0x705af4(0xf2),
          },
        },
        {
          $lookup: {
            from: _0x705af4(0x116),
            localField: _0x705af4(0x116),
            foreignField: _0x705af4(0x148),
            as: _0x705af4(0x116),
          },
        },
        {
          $project: {
            _id: 0x1,
            name: 0x1,
            isPinned: 0x1,
            showName: 0x1,
            messages: 0x1,
            chatDisabled: 0x1,
            status: 0x1,
            author: {
              _id: 0x1,
              firstname: 0x1,
              lastname: 0x1,
              nickname: 0x1,
              role: 0x1,
            },
            members: {
              _id: 0x1,
              firstname: 0x1,
              lastname: 0x1,
              nickname: 0x1,
              role: 0x1,
            },
            pinnedMessages: { _id: 0x1, text: 0x1, file: 0x1, date: 0x1 },
          },
        },
      ]);
    } catch (_0x13615b) {
      throw _0x13615b;
    }
  }),
  (module[_0x5d3e81(0x136)]["getAllPublicRooms"] = async (_0x4050c7) => {
    const _0x5108a4 = _0x5d3e81;
    try {
      _0x4050c7 = parseInt(_0x4050c7);
      const _0x344c29 = await Room[_0x5108a4(0xf8)]([
          { $match: { isPinned: !![] } },
          { $sort: { _id: -0x1 } },
          {
            $lookup: {
              from: _0x5108a4(0x10a),
              localField: _0x5108a4(0x13b),
              foreignField: _0x5108a4(0x148),
              as: "author",
            },
          },
          {
            $project: {
              _id: 0x1,
              name: 0x1,
              isPinned: 0x1,
              showName: 0x1,
              members: { $size: _0x5108a4(0x118) },
              status: 0x1,
              author: { _id: 0x1, firstname: 0x1, lastname: 0x1 },
            },
          },
        ]),
        _0x4b85b3 = await Room[_0x5108a4(0xf8)]([
          { $match: { status: _0x5108a4(0x131), isPinned: ![] } },
          { $skip: _0x4050c7 },
          { $sort: { _id: -0x1 } },
          { $limit: 0xa },
          {
            $lookup: {
              from: _0x5108a4(0x10a),
              localField: "members",
              foreignField: _0x5108a4(0x148),
              as: _0x5108a4(0x13f),
            },
          },
          {
            $lookup: {
              from: _0x5108a4(0x10a),
              localField: _0x5108a4(0x13b),
              foreignField: _0x5108a4(0x148),
              as: _0x5108a4(0x13b),
            },
          },
          {
            $project: {
              _id: 0x1,
              name: 0x1,
              isPinned: 0x1,
              showName: 0x1,
              pinnedMessages: 0x1,
              messages: 0x1,
              chatDisabled: 0x1,
              blockList: 0x1,
              status: 0x1,
              author: { _id: 0x1, firstname: 0x1, lastname: 0x1, role: 0x1 },
              members: { _id: 0x1, firstname: 0x1, lastname: 0x1, role: 0x1 },
            },
          },
        ]),
        _0x25cf26 = [..._0x344c29, ..._0x4b85b3];
      if (!_0x25cf26 || !_0x25cf26[_0x5108a4(0x115)]) {
        const _0xd99282 = httpStatus[_0x5108a4(0x143)],
          _0x4feadd = errors[_0x5108a4(0x14f)][_0x5108a4(0x123)];
        throw new ApiError(_0xd99282, _0x4feadd);
      }
      return _0x25cf26;
    } catch (_0x3850e1) {
      throw _0x3850e1;
    }
  }),
  (module["exports"][_0x5d3e81(0x11c)] = async (_0x585a0d) => {
    const _0x1b4424 = _0x5d3e81;
    try {
      const _0x36084e = _0x585a0d[_0x1b4424(0x103)],
        {
          name: _0x55124c,
          status: _0x20e0a9,
          code: _0x1c5d88,
        } = _0x585a0d[_0x1b4424(0x10b)];
      if (_0x36084e[_0x1b4424(0x122)]["length"] === 0xa) {
        const _0x1ef7d9 = httpStatus["FORBIDDEN"],
          _0x2f119d = errors[_0x1b4424(0x103)]["reachedMaximumRooms"];
        throw new ApiError(_0x1ef7d9, _0x2f119d);
      }
      const _0x372a29 = {
          name: _0x55124c,
          author: _0x36084e[_0x1b4424(0x148)],
          status: _0x20e0a9,
          code: _0x1c5d88,
        },
        _0x316752 = {
          name: _0x55124c,
          author: _0x36084e["_id"],
          status: _0x20e0a9,
        },
        _0x204022 =
          _0x20e0a9 === _0x1b4424(0xf4) &&
          (!_0x1c5d88 ||
            _0x1c5d88["length"] < 0x1 ||
            _0x1c5d88[_0x1b4424(0x115)] > 0x10);
      if (_0x204022) {
        const _0x459352 = httpStatus["BAD_REQUEST"],
          _0x41fa65 = errors["rooms"][_0x1b4424(0x11d)];
        throw new ApiError(_0x459352, _0x41fa65);
      }
      const _0x170384 = new Room(
          _0x20e0a9 === _0x1b4424(0xf4) ? _0x372a29 : _0x316752
        ),
        _0x5e4883 = await _0x170384[_0x1b4424(0x140)]();
      _0x36084e[_0x1b4424(0x122)][_0x1b4424(0x120)](
        _0x170384[_0x1b4424(0x148)]
      ),
        await _0x36084e["save"]();
      const _0x2ca742 = await this["getMappedRooms"]([
        _0x5e4883[_0x1b4424(0x148)],
      ]);
      return _0x2ca742[0x0];
    } catch (_0x27f220) {
      throw _0x27f220;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x110)] = async (_0x59df9b) => {
    const _0x400804 = _0x5d3e81;
    try {
      const _0x46853d = _0x59df9b["user"],
        { roomId: _0x2f21f3, userIds: _0xa7a90f } = _0x59df9b[_0x400804(0x10b)],
        _0x21011e = await this["findRoomById"](_0x2f21f3);
      if (!_0x21011e) {
        const _0x46520d = httpStatus[_0x400804(0x143)],
          _0x3eb75a = errors[_0x400804(0x14f)][_0x400804(0x144)];
        throw new ApiError(_0x46520d, _0x3eb75a);
      }
      if (
        _0x21011e[_0x400804(0x13b)]["toString"]() !==
        _0x46853d[_0x400804(0x148)]["toString"]()
      ) {
        const _0x2a317a = httpStatus["UNAUTHORIZED"],
          _0x54db84 = errors[_0x400804(0x14f)][_0x400804(0x11f)];
        throw new ApiError(_0x2a317a, _0x54db84);
      }
      _0xa7a90f[_0x400804(0x14b)]((_0x258982) =>
        _0x21011e["blockList"]["unshift"](_0x258982)
      ),
        await _0x21011e["save"]();
      const _0x361af1 = await this[_0x400804(0x10e)]([
        _0x21011e[_0x400804(0x148)],
      ]);
      return _0x361af1[0x0];
    } catch (_0x489e1d) {
      throw _0x489e1d;
    }
  }),
  (module[_0x5d3e81(0x136)]["unblockUsersFromChatting"] = async (_0x187b40) => {
    const _0x4bd358 = _0x5d3e81;
    try {
      const _0x5212ac = _0x187b40["user"],
        { roomId: _0x128418, userIds: _0x1fd20a } = _0x187b40["body"],
        _0x3bbd0d = await this[_0x4bd358(0x10d)](_0x128418);
      if (!_0x3bbd0d) {
        const _0x24cc85 = httpStatus["NOT_FOUND"],
          _0x2dc074 = errors[_0x4bd358(0x14f)][_0x4bd358(0x144)];
        throw new ApiError(_0x24cc85, _0x2dc074);
      }
      if (
        _0x3bbd0d["author"][_0x4bd358(0xf9)]() !==
        _0x5212ac[_0x4bd358(0x148)][_0x4bd358(0xf9)]()
      ) {
        const _0x366e5e = httpStatus["UNAUTHORIZED"],
          _0x433a92 = errors["rooms"][_0x4bd358(0x11f)];
        throw new ApiError(_0x366e5e, _0x433a92);
      }
      (_0x3bbd0d["blockList"] = _0x3bbd0d["blockList"][_0x4bd358(0x114)](
        (_0xd76cd8) => !_0x1fd20a[_0x4bd358(0x130)](_0xd76cd8)
      )),
        await _0x3bbd0d[_0x4bd358(0x140)]();
      const _0x2fb924 = await this[_0x4bd358(0x10e)]([
        _0x3bbd0d[_0x4bd358(0x148)],
      ]);
      return _0x2fb924[0x0];
    } catch (_0x53fc88) {
      throw _0x53fc88;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x137)] = async (
    _0x4df23d,
    _0x4fb14d
  ) => {
    const _0x223415 = _0x5d3e81;
    try {
      const _0x4b96ae = await this[_0x223415(0x10d)](_0x4fb14d);
      if (!_0x4b96ae) {
        const _0x48f0c1 = httpStatus["NOT_FOUND"],
          _0x5162e3 = errors[_0x223415(0x14f)][_0x223415(0x144)];
        throw new ApiError(_0x48f0c1, _0x5162e3);
      }
      if (
        _0x4b96ae["author"]["toString"]() !==
        _0x4df23d[_0x223415(0x148)][_0x223415(0xf9)]()
      ) {
        const _0x291a06 = httpStatus[_0x223415(0x11b)],
          _0x23f387 = errors["rooms"][_0x223415(0x11f)];
        throw new ApiError(_0x291a06, _0x23f387);
      }
      await this[_0x223415(0x11e)](_0x4b96ae[_0x223415(0x148)]);
      const _0x40b705 = await this[_0x223415(0x10e)]([
        _0x4b96ae[_0x223415(0x148)],
      ]);
      return _0x40b705[0x0];
    } catch (_0x239bb8) {
      throw _0x239bb8;
    }
  }),
  (module[_0x5d3e81(0x136)]["deleteRoomMessages"] = async (
    _0x2960f2,
    _0x57aab1
  ) => {
    const _0x4e6b42 = _0x5d3e81;
    try {
      const _0x167656 = await this[_0x4e6b42(0x10d)](_0x57aab1);
      if (!_0x167656) {
        const _0x2333e1 = httpStatus[_0x4e6b42(0x143)],
          _0x1f066f = errors["rooms"][_0x4e6b42(0x144)];
        throw new ApiError(_0x2333e1, _0x1f066f);
      }
      if (
        _0x167656[_0x4e6b42(0x13b)][_0x4e6b42(0xf9)]() !==
        _0x2960f2[_0x4e6b42(0x148)]["toString"]()
      ) {
        const _0x4e7e42 = httpStatus[_0x4e6b42(0x11b)],
          _0x26deca = errors[_0x4e6b42(0x14f)][_0x4e6b42(0x11f)];
        throw new ApiError(_0x4e7e42, _0x26deca);
      }
      const _0x28b1c5 = await Message[_0x4e6b42(0xfc)]({
        receiver: _0x167656[_0x4e6b42(0x148)],
      });
      _0x28b1c5[_0x4e6b42(0x14b)](async (_0x58a943) => {
        const _0x418a1d = _0x4e6b42;
        _0x58a943[_0x418a1d(0xf7)]["url"] &&
          (await localStorage[_0x418a1d(0x14a)](
            _0x58a943[_0x418a1d(0xf7)][_0x418a1d(0x145)]
          )),
          await _0x58a943["deleteOne"]();
      });
      const _0x50b938 = await this[_0x4e6b42(0x10e)]([
        _0x167656[_0x4e6b42(0x148)],
      ]);
      return _0x50b938[0x0];
    } catch (_0x2a6905) {
      throw _0x2a6905;
    }
  }),
  (module["exports"][_0x5d3e81(0x12f)] = async (_0x2ff8fd) => {
    const _0x29f051 = _0x5d3e81;
    try {
      const _0x4d83c8 = _0x2ff8fd["user"],
        {
          type: _0x2f7ab6,
          roomId: _0x25baea,
          text: _0x1c4324,
          date: _0x2f9a10,
          displayName: _0x353cd4,
        } = _0x2ff8fd[_0x29f051(0x10b)],
        _0x5114a4 = _0x2ff8fd?.[_0x29f051(0x126)]?.[_0x29f051(0xf7)];
      if (!MESSAGE_TYPES[_0x29f051(0x130)](_0x2f7ab6)) {
        const _0x28b505 = httpStatus[_0x29f051(0xfb)],
          _0x16f60f = errors[_0x29f051(0x139)]["invalidType"];
        throw new ApiError(_0x28b505, _0x16f60f);
      }
      const _0x390b16 = await this[_0x29f051(0x10d)](_0x25baea);
      if (!_0x390b16) {
        const _0x3be233 = httpStatus["NOT_FOUND"],
          _0x1859a5 = errors[_0x29f051(0x14f)]["notFound"];
        throw new ApiError(_0x3be233, _0x1859a5);
      }
      if (
        _0x390b16[_0x29f051(0x13b)][_0x29f051(0xf9)]() !==
        _0x4d83c8["_id"]["toString"]()
      ) {
        const _0x361d76 = httpStatus[_0x29f051(0x11b)],
          _0x469068 = errors["rooms"][_0x29f051(0x11f)];
        throw new ApiError(_0x361d76, _0x469068);
      }
      const _0xf10c31 = await messagesService[_0x29f051(0x133)](
        _0x4d83c8,
        _0x2f7ab6,
        _0x1c4324,
        _0x25baea,
        _0x5114a4,
        _0x353cd4,
        _0x2f9a10,
        ![],
        null,
        !![]
      );
      _0x390b16["pinnedMessages"][_0x29f051(0x120)](_0xf10c31["_id"]),
        await _0x390b16[_0x29f051(0x140)]();
      const _0x5bbe2 = await this["getMappedRooms"]([
        _0x390b16[_0x29f051(0x148)],
      ]);
      return _0x5bbe2[0x0];
    } catch (_0x28cfc5) {
      throw _0x28cfc5;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x107)] = async (_0x223656) => {
    const _0xb450b4 = _0x5d3e81;
    try {
      const _0x391f0d = _0x223656[_0xb450b4(0x103)],
        { name: _0x288ce1, code: _0x27ef5e } = _0x223656["query"],
        _0x4ca0ff = await this[_0xb450b4(0x12a)](_0x288ce1);
      if (!_0x4ca0ff) {
        const _0x400b9a = httpStatus[_0xb450b4(0x143)],
          _0x3a2af6 = errors[_0xb450b4(0x14f)][_0xb450b4(0x144)];
        throw new ApiError(_0x400b9a, _0x3a2af6);
      }
      const _0x149667 =
        _0x4ca0ff[_0xb450b4(0x106)] === _0xb450b4(0xf4) &&
        (!_0x27ef5e ||
          _0x27ef5e[_0xb450b4(0x115)] < 0x1 ||
          _0x27ef5e[_0xb450b4(0x115)] > 0x10);
      if (_0x149667) {
        const _0x398f80 = httpStatus[_0xb450b4(0xfb)],
          _0x113355 = errors[_0xb450b4(0x14f)][_0xb450b4(0x11d)];
        throw new ApiError(_0x398f80, _0x113355);
      }
      if (
        _0x4ca0ff[_0xb450b4(0x106)] === _0xb450b4(0xf4) &&
        _0x4ca0ff[_0xb450b4(0xfa)] !== _0x27ef5e
      ) {
        const _0x3d7f35 = httpStatus[_0xb450b4(0xfb)],
          _0x127355 = errors[_0xb450b4(0x14f)][_0xb450b4(0x13c)];
        throw new ApiError(_0x3d7f35, _0x127355);
      }
      if (
        _0x4ca0ff["author"][_0xb450b4(0xf9)]() ===
        _0x391f0d[_0xb450b4(0x148)][_0xb450b4(0xf9)]()
      ) {
        const _0x307ce1 = httpStatus[_0xb450b4(0x125)],
          _0x4ef257 = errors[_0xb450b4(0x14f)][_0xb450b4(0x151)];
        throw new ApiError(_0x307ce1, _0x4ef257);
      }
      const _0x384889 =
        _0x391f0d[_0xb450b4(0xf0)][_0xb450b4(0x130)](
          _0x4ca0ff[_0xb450b4(0x148)][_0xb450b4(0xf9)]()
        ) &&
        _0x4ca0ff["members"]["includes"](
          _0x391f0d[_0xb450b4(0x148)][_0xb450b4(0xf9)]()
        );
      if (_0x384889) {
        const _0x3c13c4 = httpStatus["BAD_REQUEST"],
          _0x43907d = errors[_0xb450b4(0x14f)][_0xb450b4(0x151)];
        throw new ApiError(_0x3c13c4, _0x43907d);
      }
      _0x4ca0ff[_0xb450b4(0x13f)][_0xb450b4(0x120)](
        _0x391f0d[_0xb450b4(0x148)]
      ),
        _0x391f0d[_0xb450b4(0xf0)][_0xb450b4(0x120)](
          _0x4ca0ff[_0xb450b4(0x148)]
        ),
        await _0x391f0d[_0xb450b4(0x140)](),
        await _0x4ca0ff[_0xb450b4(0x140)]();
      const _0x3c6e38 = await this[_0xb450b4(0x10e)]([
        _0x4ca0ff[_0xb450b4(0x148)],
      ]);
      return _0x3c6e38[0x0];
    } catch (_0x145bca) {
      throw _0x145bca;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x14d)] = async (
    _0x5054c6,
    _0x399d57,
    _0x18e95f
  ) => {
    const _0x5d10be = _0x5d3e81;
    try {
      const _0x61e3e1 = await Room[_0x5d10be(0x128)](_0x399d57);
      if (!_0x61e3e1) {
        const _0x120f4d = httpStatus[_0x5d10be(0x143)],
          _0x4527ab = errors[_0x5d10be(0x14f)]["notFound"];
        throw new ApiError(_0x120f4d, _0x4527ab);
      }
      if (
        _0x61e3e1[_0x5d10be(0x13b)][_0x5d10be(0xf9)]() !==
        _0x5054c6[_0x5d10be(0x148)][_0x5d10be(0xf9)]()
      ) {
        const _0x597db1 = httpStatus["FORBIDDEN"],
          _0x5c6bf7 = errors["rooms"][_0x5d10be(0x11f)];
        throw new ApiError(_0x597db1, _0x5c6bf7);
      }
      return (
        (_0x61e3e1[_0x5d10be(0x13f)] = _0x61e3e1[_0x5d10be(0x13f)][
          _0x5d10be(0x114)
        ]((_0x4ad865) => !_0x18e95f["includes"](_0x4ad865[_0x5d10be(0xf9)]()))),
        await usersService[_0x5d10be(0x101)](_0x18e95f, _0x399d57),
        await _0x61e3e1["save"]()
      );
    } catch (_0x43ff0b) {
      throw _0x43ff0b;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x119)] = async (
    _0xb8dfab,
    _0x476baf
  ) => {
    const _0x25f558 = _0x5d3e81;
    try {
      const _0x209045 = await Room[_0x25f558(0x128)](_0x476baf);
      if (!_0x209045) {
        const _0x5cd9ea = httpStatus[_0x25f558(0x143)],
          _0x1da437 = errors[_0x25f558(0x14f)][_0x25f558(0x144)];
        throw new ApiError(_0x5cd9ea, _0x1da437);
      }
      if (
        _0x209045[_0x25f558(0x13b)]["toString"]() !==
        _0xb8dfab[_0x25f558(0x148)][_0x25f558(0xf9)]()
      ) {
        const _0x2211ca = httpStatus[_0x25f558(0x129)],
          _0xf7a127 = errors[_0x25f558(0x14f)]["unauthorized"];
        throw new ApiError(_0x2211ca, _0xf7a127);
      }
      return (
        (_0x209045[_0x25f558(0x12e)] = !_0x209045[_0x25f558(0x12e)]),
        await _0x209045[_0x25f558(0x140)]()
      );
    } catch (_0x527521) {
      throw _0x527521;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x14c)] = async (
    _0x5453e6,
    _0x1974e7
  ) => {
    const _0x51d2c1 = _0x5d3e81;
    try {
      const _0x5029e7 = await Room[_0x51d2c1(0x128)](_0x5453e6);
      if (!_0x5029e7) {
        const _0x2962f9 = httpStatus["NOT_FOUND"],
          _0x590733 = errors[_0x51d2c1(0x14f)][_0x51d2c1(0x144)];
        throw new ApiError(_0x2962f9, _0x590733);
      }
      if (
        _0x5029e7[_0x51d2c1(0x13b)][_0x51d2c1(0xf9)]() !==
        _0x1974e7["_id"]["toString"]()
      ) {
        const _0x1600d8 = httpStatus[_0x51d2c1(0x129)],
          _0x2d19b8 = errors[_0x51d2c1(0x14f)][_0x51d2c1(0x11f)];
        throw new ApiError(_0x1600d8, _0x2d19b8);
      }
      return (
        (_0x5029e7[_0x51d2c1(0x14e)] = !_0x5029e7[_0x51d2c1(0x14e)]),
        await _0x5029e7[_0x51d2c1(0x140)]()
      );
    } catch (_0x5ac5a5) {
      throw _0x5ac5a5;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x105)] = async (
    _0x5afc18,
    _0x19bc0b,
    _0x47f531
  ) => {
    const _0x300a8b = _0x5d3e81;
    try {
      const _0x3ff3ca = await Room["findById"](_0x5afc18);
      if (!_0x3ff3ca) {
        const _0x4e2361 = httpStatus[_0x300a8b(0x143)],
          _0x52c6d8 = errors[_0x300a8b(0x14f)][_0x300a8b(0x144)];
        throw new ApiError(_0x4e2361, _0x52c6d8);
      }
      if (
        _0x3ff3ca["author"][_0x300a8b(0xf9)]() !==
        _0x19bc0b["_id"][_0x300a8b(0xf9)]()
      ) {
        const _0xbe4ade = httpStatus[_0x300a8b(0x129)],
          _0x203f55 = errors[_0x300a8b(0x14f)][_0x300a8b(0x11f)];
        throw new ApiError(_0xbe4ade, _0x203f55);
      }
      return (
        (_0x3ff3ca[_0x300a8b(0x132)] = _0x47f531),
        await _0x3ff3ca["save"](),
        _0x3ff3ca
      );
    } catch (_0x3741b0) {
      throw _0x3741b0;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x11e)] = async (_0x48d28c) => {
    const _0x526d52 = _0x5d3e81;
    try {
      const _0x876141 = await Room[_0x526d52(0x128)](_0x48d28c);
      if (!_0x876141) {
        const _0x1ce8f6 = httpStatus[_0x526d52(0x143)],
          _0x437bfa = errors[_0x526d52(0x14f)]["notFound"];
        throw new ApiError(_0x1ce8f6, _0x437bfa);
      }
      await usersService[_0x526d52(0x101)](
        [..._0x876141[_0x526d52(0x13f)]],
        _0x48d28c
      ),
        (_0x876141[_0x526d52(0x13f)] = []);
      const _0x34280f = await Message[_0x526d52(0xfc)]({
        receiver: _0x876141[_0x526d52(0x148)],
      });
      _0x34280f[_0x526d52(0x14b)](async (_0x517359) => {
        const _0x1c9801 = _0x526d52,
          _0x3441df = _0x517359?.[_0x1c9801(0xf7)]?.[_0x1c9801(0x145)];
        _0x3441df && (await localStorage[_0x1c9801(0x14a)](_0x3441df));
      }),
        await Message[_0x526d52(0x121)]({
          receiver: _0x876141[_0x526d52(0x148)],
        }),
        (_0x876141["pinnedMessages"] = []),
        await _0x876141[_0x526d52(0x140)]();
      const _0x548546 = await Assignment["find"]({ room: _0x876141["_id"] });
      _0x548546[_0x526d52(0x14b)](async (_0x519996) => {
        const _0x17cf75 = _0x526d52;
        await localStorage["deleteFile"](
          _0x519996[_0x17cf75(0xf7)][_0x17cf75(0x145)]
        );
        const _0xc767d7 = await Submission["find"]({
          assignmentId: _0x519996["_id"],
        });
        _0xc767d7["forEach"](async (_0x41ca88) => {
          const _0x40d3d1 = _0x17cf75;
          _0x41ca88[_0x40d3d1(0x126)]["forEach"](async (_0x45c0a9) => {
            const _0x25b047 = _0x40d3d1;
            await localStorage[_0x25b047(0x14a)](_0x45c0a9[_0x25b047(0x145)]);
          });
        });
      }),
        await Assignment["deleteMany"]({ room: _0x876141["_id"] }),
        await Submission[_0x526d52(0x121)]({
          roomId: _0x876141[_0x526d52(0x148)],
        });
    } catch (_0x448c27) {
      throw _0x448c27;
    }
  }),
  (module[_0x5d3e81(0x136)]["switchRoomToPublic"] = async (
    _0x2756d8,
    _0x273526
  ) => {
    const _0x27f02e = _0x5d3e81;
    try {
      const _0x172350 = await Room[_0x27f02e(0x128)](_0x273526);
      if (!_0x172350) {
        const _0x16431d = httpStatus[_0x27f02e(0x143)],
          _0x33f06c = errors[_0x27f02e(0x14f)][_0x27f02e(0x144)];
        throw new ApiError(_0x16431d, _0x33f06c);
      }
      if (
        _0x172350[_0x27f02e(0x13b)][_0x27f02e(0xf9)]() !==
        _0x2756d8[_0x27f02e(0x148)]["toString"]()
      ) {
        const _0x13aaa5 = httpStatus[_0x27f02e(0x129)],
          _0x59062d = errors[_0x27f02e(0x14f)][_0x27f02e(0x11f)];
        throw new ApiError(_0x13aaa5, _0x59062d);
      }
      return (
        (_0x172350[_0x27f02e(0x106)] = _0x27f02e(0x131)),
        await _0x172350[_0x27f02e(0x140)](),
        _0x172350
      );
    } catch (_0x4f09de) {
      throw _0x4f09de;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x104)] = async (
    _0x4ec483,
    _0x2bb88c
  ) => {
    const _0x5c84a8 = _0x5d3e81;
    try {
      const _0x471906 = await Room["findById"](_0x2bb88c);
      if (!_0x471906) {
        const _0x49d701 = httpStatus[_0x5c84a8(0x143)],
          _0x354b50 = errors[_0x5c84a8(0x14f)][_0x5c84a8(0x144)];
        throw new ApiError(_0x49d701, _0x354b50);
      }
      if (
        _0x471906["author"][_0x5c84a8(0xf9)]() !==
        _0x4ec483[_0x5c84a8(0x148)][_0x5c84a8(0xf9)]()
      ) {
        const _0x2d323a = httpStatus[_0x5c84a8(0x129)],
          _0x4c10f2 = errors[_0x5c84a8(0x14f)][_0x5c84a8(0x11f)];
        throw new ApiError(_0x2d323a, _0x4c10f2);
      }
      return (
        (_0x471906["status"] = "private"),
        await _0x471906[_0x5c84a8(0x140)](),
        _0x471906
      );
    } catch (_0x1e0eca) {
      throw _0x1e0eca;
    }
  }),
  (module[_0x5d3e81(0x136)]["pinRoom"] = async (_0x20fbb2) => {
    const _0x3c9176 = _0x5d3e81;
    try {
      const _0x23251f = await Room[_0x3c9176(0x128)](_0x20fbb2);
      if (!_0x23251f) {
        const _0x58b137 = httpStatus[_0x3c9176(0x143)],
          _0x4f8237 = errors[_0x3c9176(0x14f)][_0x3c9176(0x144)];
        throw new ApiError(_0x58b137, _0x4f8237);
      }
      return (
        (_0x23251f[_0x3c9176(0x102)] = !![]),
        await _0x23251f[_0x3c9176(0x140)](),
        _0x23251f
      );
    } catch (_0x27bb42) {
      throw _0x27bb42;
    }
  }),
  (module["exports"]["unpinRoom"] = async (_0x428bd1) => {
    const _0xc7c41e = _0x5d3e81;
    try {
      const _0xceca79 = await Room[_0xc7c41e(0x128)](_0x428bd1);
      if (!_0xceca79) {
        const _0xf8b652 = httpStatus["NOT_FOUND"],
          _0x4f92f2 = errors[_0xc7c41e(0x14f)][_0xc7c41e(0x144)];
        throw new ApiError(_0xf8b652, _0x4f92f2);
      }
      return (
        (_0xceca79[_0xc7c41e(0x102)] = ![]),
        await _0xceca79["save"](),
        _0xceca79
      );
    } catch (_0x291c47) {
      throw _0x291c47;
    }
  }),
  (module[_0x5d3e81(0x136)][_0x5d3e81(0x153)] = async (
    _0x2fd85e,
    _0x53c85a,
    _0x541a91
  ) => {
    const _0x5bbd85 = _0x5d3e81;
    try {
      const _0x4c3c63 = await this[_0x5bbd85(0x138)](_0x2fd85e, _0x53c85a);
      if (!_0x541a91) return _0x4c3c63;
      return _0x4c3c63[_0x5bbd85(0x114)](
        (_0x1278c4) =>
          _0x1278c4[_0x5bbd85(0xf6)][_0x5bbd85(0x130)](_0x541a91) ||
          _0x1278c4[_0x5bbd85(0x147)][_0x5bbd85(0x130)](_0x541a91)
      );
    } catch (_0x29366b) {
      throw _0x29366b;
    }
  });
