function _0x44c0() {
  const _0x5760ee = [
    "image",
    "storeFile",
    "video",
    "invalidMessage",
    "voters",
    "addVote",
    "invalidId",
    "Types",
    "receiver",
    "updateMany",
    "BAD_REQUEST",
    "NOT_FOUND",
    "280833JJQlIr",
    "author",
    "findById",
    "invalidType",
    "type",
    "findByIdAndDelete",
    "audio",
    "../storage/localStorage.service",
    "notPoll",
    "FORBIDDEN",
    "ObjectId",
    "text",
    "notJoined",
    "includes",
    "../../models/message.model",
    "http-status",
    "votes",
    "296jEbpgN",
    "blockList",
    "957896QzrRdM",
    "createMessage",
    "users",
    "27704oqegqX",
    "16247880icwKRj",
    "notFound",
    "viewers",
    "getRoomMessages",
    "36660pyNqMX",
    "isValidObjectId",
    "exports",
    "map",
    "../../models/room.model",
    "save",
    "createVote",
    "file",
    "userId",
    "path",
    "alreadyVoted",
    "memberOf",
    "18dqRByJ",
    "toString",
    "votes.userId",
    "319521BcnrFD",
    "user",
    "sender",
    "3105535GSDrWj",
    "_id",
    "message",
    "./rooms.service",
    "repliedMessage",
    "members",
    "rooms",
    "poll",
    "../../middleware/apiError",
  ];
  _0x44c0 = function () {
    return _0x5760ee;
  };
  return _0x44c0();
}
const _0x3af038 = _0x3540;
(function (_0x4127e5, _0xe087b3) {
  const _0x37d92a = _0x3540,
    _0x19aa60 = _0x4127e5();
  while (!![]) {
    try {
      const _0x526bfe =
        parseInt(_0x37d92a(0x160)) / 0x1 +
        -parseInt(_0x37d92a(0x15d)) / 0x2 +
        -parseInt(_0x37d92a(0x174)) / 0x3 +
        -parseInt(_0x37d92a(0x165)) / 0x4 +
        (parseInt(_0x37d92a(0x177)) / 0x5) *
          (parseInt(_0x37d92a(0x171)) / 0x6) +
        (parseInt(_0x37d92a(0x14a)) / 0x7) *
          (parseInt(_0x37d92a(0x15b)) / 0x8) +
        -parseInt(_0x37d92a(0x161)) / 0x9;
      if (_0x526bfe === _0xe087b3) break;
      else _0x19aa60["push"](_0x19aa60["shift"]());
    } catch (_0x1c410e) {
      _0x19aa60["push"](_0x19aa60["shift"]());
    }
  }
})(_0x44c0, 0xee280);
const mongoose = require("mongoose"),
  { ApiError } = require(_0x3af038(0x17f)),
  { Message, MESSAGE_TYPES } = require(_0x3af038(0x158)),
  { Room } = require(_0x3af038(0x169)),
  localStorage = require(_0x3af038(0x151)),
  errors = require("../../config/errors"),
  httpStatus = require(_0x3af038(0x159)),
  roomsService = require(_0x3af038(0x17a)),
  createTextMessage = async (
    _0x555c8b,
    _0x1c7930,
    _0x35a85a,
    _0x112547,
    _0x2b926c,
    _0x1e9b71,
    _0x4880c0
  ) => {
    const _0x3d9686 = _0x3af038;
    try {
      const _0x1cfcc2 = _0x2b926c && mongoose[_0x3d9686(0x166)](_0x1e9b71),
        _0x57b972 = new Message({
          text: _0x35a85a,
          receiver: _0x1c7930[_0x3d9686(0x178)],
          sender: _0x555c8b[_0x3d9686(0x178)],
          type: _0x3d9686(0x155),
          date: _0x112547,
          isReply: _0x2b926c && !_0x4880c0,
          isPinned: _0x4880c0,
          repliedMessage: _0x1cfcc2 ? _0x1e9b71 : null,
        });
      return (
        await _0x57b972[_0x3d9686(0x16a)](),
        _0x1cfcc2
          ? (_0x57b972["repliedMessage"] = await Message[_0x3d9686(0x14c)](
              _0x1e9b71
            ))
          : (_0x57b972[_0x3d9686(0x17b)] = null),
        _0x57b972
      );
    } catch (_0x5770d7) {
      throw _0x5770d7;
    }
  },
  createFileMessage = async (
    _0x2e908f,
    _0x498ce7,
    _0x2e7581,
    _0x48660d,
    _0x45d054,
    _0x1c4456,
    _0x57217f,
    _0x2e91cc,
    _0x278f34,
    _0x1b3388
  ) => {
    const _0x268067 = _0x3af038;
    try {
      const _0x2e57d1 = _0x45d054
          ? await localStorage[_0x268067(0x181)](_0x45d054)
          : {},
        _0x4dddf8 = _0x2e91cc && mongoose[_0x268067(0x166)](_0x278f34),
        _0x4e8859 = new Message({
          text: _0x2e7581,
          file: { displayName: _0x1c4456, url: _0x2e57d1[_0x268067(0x16e)] },
          receiver: _0x48660d["_id"],
          sender: _0x2e908f[_0x268067(0x178)],
          type: _0x498ce7,
          date: _0x57217f,
          isReply: _0x2e91cc && !_0x1b3388,
          repliedMessage: _0x4dddf8 ? _0x278f34 : null,
          isPinned: _0x1b3388,
        });
      return (
        await _0x4e8859[_0x268067(0x16a)](),
        _0x4dddf8
          ? (_0x4e8859[_0x268067(0x17b)] = await Message[_0x268067(0x14c)](
              _0x278f34
            ))
          : (_0x4e8859[_0x268067(0x17b)] = null),
        _0x4e8859
      );
    } catch (_0x2d75f6) {
      throw _0x2d75f6;
    }
  },
  createPollMessage = async (
    _0x1a2c70,
    _0x271918,
    _0x1976df,
    _0x1ad196,
    _0x549b2d,
    _0x26a408,
    _0x1daec9,
    _0x3e4e5d
  ) => {
    const _0x4e7937 = _0x3af038;
    try {
      const _0x2ffcbc = _0x549b2d && mongoose[_0x4e7937(0x166)](_0x26a408),
        _0x4fc1ba = new Message({
          text: _0x271918,
          receiver: _0x1976df[_0x4e7937(0x178)],
          sender: _0x1a2c70[_0x4e7937(0x178)],
          type: _0x4e7937(0x17e),
          date: _0x1ad196,
          isReply: _0x549b2d && !_0x1daec9,
          repliedMessage: _0x2ffcbc ? _0x26a408 : null,
          isPinned: _0x1daec9,
          options: _0x3e4e5d[_0x4e7937(0x168)]((_0x2f0a17) => ({
            title: _0x2f0a17,
            votes: 0x0,
          })),
        });
      return (
        await _0x4fc1ba[_0x4e7937(0x16a)](),
        _0x2ffcbc
          ? (_0x4fc1ba[_0x4e7937(0x17b)] = await Message[_0x4e7937(0x14c)](
              _0x26a408
            ))
          : (_0x4fc1ba[_0x4e7937(0x17b)] = null),
        _0x4fc1ba
      );
    } catch (_0x139a67) {
      throw _0x139a67;
    }
  };
function _0x3540(_0x42a88e, _0x4cbe89) {
  const _0x44c0cd = _0x44c0();
  return (
    (_0x3540 = function (_0x35409d, _0x3cc8b8) {
      _0x35409d = _0x35409d - 0x143;
      let _0x844b37 = _0x44c0cd[_0x35409d];
      return _0x844b37;
    }),
    _0x3540(_0x42a88e, _0x4cbe89)
  );
}
(module[_0x3af038(0x167)][_0x3af038(0x15e)] = async (
  _0x4b3ac3,
  _0x90648f,
  _0x204833,
  _0x59c3c5,
  _0x1ca1ed,
  _0x4db225,
  _0x47137c,
  _0x3c69cd,
  _0x233ad2,
  _0x31cb3c,
  _0x225302
) => {
  const _0x390865 = _0x3af038;
  try {
    const _0x29543c = await roomsService["findRoomById"](_0x59c3c5);
    if (!_0x29543c) {
      const _0x5691cb = httpStatus[_0x390865(0x148)],
        _0x40e92f = errors[_0x390865(0x17d)][_0x390865(0x162)];
      throw new ApiError(_0x5691cb, _0x40e92f);
    }
    const _0x2924d3 =
      !_0x29543c[_0x390865(0x17c)]["includes"](
        _0x4b3ac3[_0x390865(0x178)][_0x390865(0x172)]()
      ) &&
      _0x29543c[_0x390865(0x14b)][_0x390865(0x172)]() !==
        _0x4b3ac3["_id"][_0x390865(0x172)]();
    if (_0x2924d3) {
      const _0x31cdda = httpStatus["BAD_REQUEST"],
        _0x58b1db = errors[_0x390865(0x17d)][_0x390865(0x156)];
      throw new ApiError(_0x31cdda, _0x58b1db);
    }
    if (!MESSAGE_TYPES[_0x390865(0x157)](_0x90648f)) {
      const _0x427390 = httpStatus[_0x390865(0x148)],
        _0x102d51 = errors["message"][_0x390865(0x14d)];
      throw new ApiError(_0x427390, _0x102d51);
    }
    if (
      _0x29543c[_0x390865(0x15c)][_0x390865(0x157)](
        _0x4b3ac3[_0x390865(0x178)][_0x390865(0x172)]()
      )
    ) {
      const _0x209365 = httpStatus["BAD_REQUEST"],
        _0x2b934c = errors["rooms"]["chatBlocked"];
      throw new ApiError(_0x209365, _0x2b934c);
    }
    const _0x57cdda = !_0x1ca1ed && !_0x204833;
    if (_0x57cdda) {
      const _0x392571 = httpStatus[_0x390865(0x148)],
        _0x4cd6f7 = errors[_0x390865(0x17d)][_0x390865(0x183)];
      throw new ApiError(_0x392571, _0x4cd6f7);
    }
    if (
      [_0x390865(0x150), _0x390865(0x16c), _0x390865(0x180), _0x390865(0x182)][
        "includes"
      ](_0x90648f) &&
      !_0x1ca1ed
    ) {
      const _0x35b19e = httpStatus[_0x390865(0x148)],
        _0x545090 = errors[_0x390865(0x179)]["noFile"];
      throw new ApiError(_0x35b19e, _0x545090);
    }
    switch (_0x90648f) {
      case _0x390865(0x155):
        return await createTextMessage(
          _0x4b3ac3,
          _0x29543c,
          _0x204833,
          _0x47137c,
          _0x3c69cd,
          _0x233ad2,
          _0x31cb3c
        );
      case "audio":
      case _0x390865(0x16c):
      case "image":
      case _0x390865(0x182):
        return await createFileMessage(
          _0x4b3ac3,
          _0x90648f,
          _0x204833,
          _0x29543c,
          _0x1ca1ed,
          _0x4db225,
          _0x47137c,
          _0x3c69cd,
          _0x233ad2,
          _0x31cb3c
        );
      case _0x390865(0x17e):
        return await createPollMessage(
          _0x4b3ac3,
          _0x204833,
          _0x29543c,
          _0x47137c,
          _0x3c69cd,
          _0x233ad2,
          _0x31cb3c,
          _0x225302
        );
      default:
        return null;
    }
  } catch (_0xf9ae63) {
    throw _0xf9ae63;
  }
}),
  (module["exports"][_0x3af038(0x16b)] = async (
    _0x3d2341,
    _0x45ac5e,
    _0x3a256c
  ) => {
    const _0x51c819 = _0x3af038;
    try {
      if (!mongoose[_0x51c819(0x166)](_0x45ac5e)) {
        const _0x4e38af = httpStatus["BAD_REQUEST"],
          _0x23ceda = errors[_0x51c819(0x179)]["invalidId"];
        throw new ApiError(_0x4e38af, _0x23ceda);
      }
      _0x45ac5e = new mongoose[_0x51c819(0x145)][_0x51c819(0x154)](_0x45ac5e);
      const _0x4ba3a5 = await Message[_0x51c819(0x14c)](_0x45ac5e);
      if (!_0x4ba3a5) {
        const _0x4e4241 = httpStatus["NOT_FOUND"],
          _0x301273 = errors[_0x51c819(0x179)][_0x51c819(0x162)];
        throw new ApiError(_0x4e4241, _0x301273);
      }
      if (_0x4ba3a5[_0x51c819(0x14e)] !== _0x51c819(0x17e)) {
        const _0x3f12d9 = httpStatus["BAD_REQUEST"],
          _0xe51e91 = errors["message"][_0x51c819(0x152)];
        throw new ApiError(_0x3f12d9, _0xe51e91);
      }
      const _0x307482 = _0x3d2341[_0x51c819(0x170)](_0x4ba3a5["receiver"]);
      if (!_0x307482) {
        const _0x54cade = httpStatus[_0x51c819(0x148)],
          _0x48c96b = errors[_0x51c819(0x17d)][_0x51c819(0x156)];
        throw new ApiError(_0x54cade, _0x48c96b);
      }
      const _0x1883fb = _0x4ba3a5[_0x51c819(0x143)](
        _0x3d2341[_0x51c819(0x178)],
        _0x3a256c
      );
      if (!_0x1883fb) {
        const _0x149234 = httpStatus[_0x51c819(0x148)],
          _0x2c38f9 = errors[_0x51c819(0x179)][_0x51c819(0x16f)];
        throw new ApiError(_0x149234, _0x2c38f9);
      }
      return await _0x4ba3a5[_0x51c819(0x16a)](), _0x4ba3a5;
    } catch (_0x38f0b6) {
      throw _0x38f0b6;
    }
  }),
  (module[_0x3af038(0x167)][_0x3af038(0x164)] = async (
    _0x5d66a1,
    _0x55cd5f
  ) => {
    const _0x418181 = _0x3af038;
    try {
      await Message[_0x418181(0x147)](
        { receiver: new mongoose[_0x418181(0x145)]["ObjectId"](_0x55cd5f) },
        { $addToSet: { viewers: _0x5d66a1["_id"] } }
      );
      const _0x171220 = await Message["aggregate"]([
        {
          $match: {
            receiver: new mongoose[_0x418181(0x145)][_0x418181(0x154)](
              _0x55cd5f
            ),
          },
        },
        {
          $lookup: {
            from: _0x418181(0x15f),
            localField: "sender",
            foreignField: "_id",
            as: "sender",
          },
        },
        {
          $lookup: {
            from: _0x418181(0x15f),
            localField: "viewers",
            foreignField: _0x418181(0x178),
            as: _0x418181(0x163),
          },
        },
        {
          $lookup: {
            from: "messages",
            localField: "repliedMessage",
            foreignField: "_id",
            as: _0x418181(0x17b),
          },
        },
        {
          $lookup: {
            from: _0x418181(0x15f),
            localField: _0x418181(0x173),
            foreignField: "_id",
            as: _0x418181(0x184),
          },
        },
        {
          $project: {
            _id: 0x1,
            type: 0x1,
            isReply: 0x1,
            isPinned: 0x1,
            text: 0x1,
            file: 0x1,
            options: 0x1,
            date: 0x1,
            receiver: 0x1,
            votes: 0x1,
            voters: { _id: 0x1, avatarUrl: 0x1, firstname: 0x1, lastname: 0x1 },
            repliedMessage: { _id: 0x1, type: 0x1, text: 0x1, file: 0x1 },
            viewers: {
              _id: 0x1,
              avatarUrl: 0x1,
              firstname: 0x1,
              lastname: 0x1,
            },
            sender: {
              _id: 0x1,
              avatarUrl: 0x1,
              firstname: 0x1,
              lastname: 0x1,
              nickname: 0x1,
            },
          },
        },
      ]);
      return _0x171220[_0x418181(0x168)]((_0x3bc99e) => {
        const _0x25c23b = _0x418181;
        if (_0x3bc99e[_0x25c23b(0x14e)] !== _0x25c23b(0x17e))
          return delete _0x3bc99e[_0x25c23b(0x184)], _0x3bc99e;
        return (
          _0x3bc99e[_0x25c23b(0x15a)]["map"]((_0x52cc0d, _0x57c33f) => {
            const _0x50face = _0x25c23b;
            return (
              delete _0x52cc0d[_0x50face(0x16d)],
              (_0x52cc0d[_0x50face(0x175)] = _0x3bc99e["voters"][_0x57c33f]),
              _0x52cc0d
            );
          }),
          delete _0x3bc99e[_0x25c23b(0x184)],
          _0x3bc99e
        );
      });
    } catch (_0x5e09aa) {
      throw _0x5e09aa;
    }
  }),
  (module[_0x3af038(0x167)]["deleteMessage"] = async (_0x2f733e, _0x16d1b7) => {
    const _0x5d5b3a = _0x3af038;
    try {
      _0x16d1b7 = new mongoose[_0x5d5b3a(0x145)][_0x5d5b3a(0x154)](_0x16d1b7);
      if (!mongoose["isValidObjectId"](_0x16d1b7)) {
        const _0x3ed41c = httpStatus["BAD_REQUEST"],
          _0x2def67 = errors[_0x5d5b3a(0x179)][_0x5d5b3a(0x144)];
        throw new ApiError(_0x3ed41c, _0x2def67);
      }
      const _0x53fc0c = await Message["findById"](_0x16d1b7);
      if (!_0x53fc0c) {
        const _0x44f2fe = httpStatus[_0x5d5b3a(0x149)],
          _0x44e9ac = errors[_0x5d5b3a(0x179)][_0x5d5b3a(0x162)];
        throw new ApiError(_0x44f2fe, _0x44e9ac);
      }
      const _0x11242b = await Room[_0x5d5b3a(0x14c)](
          _0x53fc0c[_0x5d5b3a(0x146)]
        ),
        _0x1a047e =
          _0x53fc0c[_0x5d5b3a(0x176)][_0x5d5b3a(0x172)]() ===
          _0x2f733e[_0x5d5b3a(0x178)][_0x5d5b3a(0x172)](),
        _0x259d28 =
          _0x11242b[_0x5d5b3a(0x14b)][_0x5d5b3a(0x172)]() ===
          _0x2f733e[_0x5d5b3a(0x178)][_0x5d5b3a(0x172)](),
        _0x3f8277 = _0x1a047e || _0x259d28;
      if (!_0x3f8277) {
        const _0x254b79 = httpStatus[_0x5d5b3a(0x153)],
          _0x407522 = errors[_0x5d5b3a(0x179)]["notAuthor"];
        throw new ApiError(_0x254b79, _0x407522);
      }
      return await Message[_0x5d5b3a(0x14f)](_0x16d1b7);
    } catch (_0x31d1ce) {
      throw _0x31d1ce;
    }
  });
