function _0x390b() {
  const _0x443d76 = [
    "notFound",
    "memberOf",
    "16537IJImUR",
    "votes",
    "users",
    "viewers",
    "getRoomMessages",
    "Types",
    "findByIdAndDelete",
    "voters",
    "isValidObjectId",
    "updateMany",
    "text",
    "4rgyUos",
    "video",
    "addVote",
    "receiver",
    "_id",
    "members",
    "exports",
    "../storage/localStorage.service",
    "save",
    "author",
    "alreadyVoted",
    "audio",
    "28zyDxOr",
    "type",
    "invalidType",
    "sender",
    "storeFile",
    "invalidMessage",
    "image",
    "user",
    "findRoomById",
    "../../middleware/apiError",
    "../../models/message.model",
    "userId",
    "1470570ehPumE",
    "poll",
    "repliedMessage",
    "notPoll",
    "600536ZCVNBA",
    "FORBIDDEN",
    "notAuthor",
    "createMessage",
    "message",
    "includes",
    "map",
    "70KullUy",
    "BAD_REQUEST",
    "file",
    "http-status",
    "messages",
    "605208UzQAFX",
    "./rooms.service",
    "path",
    "../../config/errors",
    "1423525hXkUxC",
    "toString",
    "invalidId",
    "ObjectId",
    "510486XETbAi",
    "214821lhywDM",
    "votes.userId",
    "mongoose",
    "createVote",
    "rooms",
    "findById",
    "chatBlocked",
    "notJoined",
  ];
  _0x390b = function () {
    return _0x443d76;
  };
  return _0x390b();
}
function _0x49c2(_0x265493, _0x4b324e) {
  const _0x390b3c = _0x390b();
  return (
    (_0x49c2 = function (_0x49c267, _0x1b0327) {
      _0x49c267 = _0x49c267 - 0x10e;
      let _0xde7010 = _0x390b3c[_0x49c267];
      return _0xde7010;
    }),
    _0x49c2(_0x265493, _0x4b324e)
  );
}
const _0x3947fc = _0x49c2;
(function (_0x4bca33, _0x34e9c5) {
  const _0x3375ce = _0x49c2,
    _0x1c38f6 = _0x4bca33();
  while (!![]) {
    try {
      const _0x3c8d72 =
        parseInt(_0x3375ce(0x138)) / 0x1 +
        parseInt(_0x3375ce(0x125)) / 0x2 +
        (-parseInt(_0x3375ce(0x12d)) / 0x3) *
          (parseInt(_0x3375ce(0x143)) / 0x4) +
        parseInt(_0x3375ce(0x129)) / 0x5 +
        parseInt(_0x3375ce(0x115)) / 0x6 +
        (-parseInt(_0x3375ce(0x14f)) / 0x7) *
          (parseInt(_0x3375ce(0x119)) / 0x8) +
        (-parseInt(_0x3375ce(0x12e)) / 0x9) *
          (parseInt(_0x3375ce(0x120)) / 0xa);
      if (_0x3c8d72 === _0x34e9c5) break;
      else _0x1c38f6["push"](_0x1c38f6["shift"]());
    } catch (_0x5ca2be) {
      _0x1c38f6["push"](_0x1c38f6["shift"]());
    }
  }
})(_0x390b, 0x339e4);
const mongoose = require(_0x3947fc(0x130)),
  { ApiError } = require(_0x3947fc(0x112)),
  { Message, MESSAGE_TYPES } = require(_0x3947fc(0x113)),
  { Room } = require("../../models/room.model"),
  localStorage = require(_0x3947fc(0x14a)),
  errors = require(_0x3947fc(0x128)),
  httpStatus = require(_0x3947fc(0x123)),
  roomsService = require(_0x3947fc(0x126)),
  createTextMessage = async (
    _0xa7b6bb,
    _0x123790,
    _0x18f64d,
    _0x1313d5,
    _0x253f52,
    _0x320b10,
    _0x6e8d35
  ) => {
    const _0x1875f4 = _0x3947fc;
    try {
      const _0x4b1286 = _0x253f52 && mongoose[_0x1875f4(0x140)](_0x320b10),
        _0x186497 = new Message({
          text: _0x18f64d,
          receiver: _0x123790["_id"],
          sender: _0xa7b6bb[_0x1875f4(0x147)],
          type: _0x1875f4(0x142),
          date: _0x1313d5,
          isReply: _0x253f52 && !_0x6e8d35,
          isPinned: _0x6e8d35,
          repliedMessage: _0x4b1286 ? _0x320b10 : null,
        });
      return (
        await _0x186497[_0x1875f4(0x14b)](),
        _0x4b1286
          ? (_0x186497[_0x1875f4(0x117)] = await Message[_0x1875f4(0x133)](
              _0x320b10
            ))
          : (_0x186497[_0x1875f4(0x117)] = null),
        _0x186497
      );
    } catch (_0x8cab31) {
      throw _0x8cab31;
    }
  },
  createFileMessage = async (
    _0x5b7afd,
    _0x284491,
    _0xb16387,
    _0x4c0419,
    _0x3f6f9d,
    _0x5c8c12,
    _0x4fe1ec,
    _0x16d9be,
    _0x3abb88,
    _0x5887ce
  ) => {
    const _0x15a4c4 = _0x3947fc;
    try {
      const _0x3f2ee7 = _0x3f6f9d
          ? await localStorage[_0x15a4c4(0x153)](_0x3f6f9d)
          : {},
        _0x2b000e = _0x16d9be && mongoose["isValidObjectId"](_0x3abb88),
        _0x43b526 = new Message({
          text: _0xb16387,
          file: { displayName: _0x5c8c12, url: _0x3f2ee7[_0x15a4c4(0x127)] },
          receiver: _0x4c0419["_id"],
          sender: _0x5b7afd[_0x15a4c4(0x147)],
          type: _0x284491,
          date: _0x4fe1ec,
          isReply: _0x16d9be && !_0x5887ce,
          repliedMessage: _0x2b000e ? _0x3abb88 : null,
          isPinned: _0x5887ce,
        });
      return (
        await _0x43b526["save"](),
        _0x2b000e
          ? (_0x43b526[_0x15a4c4(0x117)] = await Message["findById"](_0x3abb88))
          : (_0x43b526[_0x15a4c4(0x117)] = null),
        _0x43b526
      );
    } catch (_0x43c69e) {
      throw _0x43c69e;
    }
  },
  createPollMessage = async (
    _0x4c430a,
    _0x326dbf,
    _0x59084a,
    _0x4ad7d0,
    _0x2c55c0,
    _0x54b180,
    _0x1d572b,
    _0x385530
  ) => {
    const _0x411a6b = _0x3947fc;
    try {
      const _0x2abc43 = _0x2c55c0 && mongoose[_0x411a6b(0x140)](_0x54b180),
        _0x408797 = new Message({
          text: _0x326dbf,
          receiver: _0x59084a[_0x411a6b(0x147)],
          sender: _0x4c430a[_0x411a6b(0x147)],
          type: _0x411a6b(0x116),
          date: _0x4ad7d0,
          isReply: _0x2c55c0 && !_0x1d572b,
          repliedMessage: _0x2abc43 ? _0x54b180 : null,
          isPinned: _0x1d572b,
          options: _0x385530[_0x411a6b(0x11f)]((_0x4dde0d) => ({
            title: _0x4dde0d,
            votes: 0x0,
          })),
        });
      return (
        await _0x408797[_0x411a6b(0x14b)](),
        _0x2abc43
          ? (_0x408797[_0x411a6b(0x117)] = await Message[_0x411a6b(0x133)](
              _0x54b180
            ))
          : (_0x408797[_0x411a6b(0x117)] = null),
        _0x408797
      );
    } catch (_0x477175) {
      throw _0x477175;
    }
  };
(module["exports"][_0x3947fc(0x11c)] = async (
  _0x2521dd,
  _0x2fb731,
  _0x5a59b1,
  _0x287af7,
  _0x2238e0,
  _0x1316d6,
  _0x3e1705,
  _0xb490ee,
  _0x1cbee3,
  _0xbf11ab,
  _0xcb99ad
) => {
  const _0xa4bdbf = _0x3947fc;
  try {
    const _0x2b19ab = await roomsService[_0xa4bdbf(0x111)](_0x287af7);
    if (!_0x2b19ab) {
      const _0xf3798f = httpStatus[_0xa4bdbf(0x121)],
        _0x47ab09 = errors[_0xa4bdbf(0x132)][_0xa4bdbf(0x136)];
      throw new ApiError(_0xf3798f, _0x47ab09);
    }
    const _0x54d22b =
      !_0x2b19ab[_0xa4bdbf(0x148)][_0xa4bdbf(0x11e)](
        _0x2521dd[_0xa4bdbf(0x147)][_0xa4bdbf(0x12a)]()
      ) &&
      _0x2b19ab[_0xa4bdbf(0x14c)][_0xa4bdbf(0x12a)]() !==
        _0x2521dd[_0xa4bdbf(0x147)][_0xa4bdbf(0x12a)]();
    if (_0x54d22b) {
      const _0x20c948 = httpStatus[_0xa4bdbf(0x121)],
        _0x5f34b9 = errors[_0xa4bdbf(0x132)][_0xa4bdbf(0x135)];
      throw new ApiError(_0x20c948, _0x5f34b9);
    }
    if (!MESSAGE_TYPES["includes"](_0x2fb731)) {
      const _0x258e9a = httpStatus[_0xa4bdbf(0x121)],
        _0x23870f = errors[_0xa4bdbf(0x11d)][_0xa4bdbf(0x151)];
      throw new ApiError(_0x258e9a, _0x23870f);
    }
    if (
      _0x2b19ab["blockList"]["includes"](
        _0x2521dd[_0xa4bdbf(0x147)][_0xa4bdbf(0x12a)]()
      )
    ) {
      const _0x2903af = httpStatus["BAD_REQUEST"],
        _0x41222b = errors[_0xa4bdbf(0x132)][_0xa4bdbf(0x134)];
      throw new ApiError(_0x2903af, _0x41222b);
    }
    const _0x484a3e = !_0x2238e0 && !_0x5a59b1;
    if (_0x484a3e) {
      const _0x556523 = httpStatus[_0xa4bdbf(0x121)],
        _0x3e120a = errors["rooms"][_0xa4bdbf(0x10e)];
      throw new ApiError(_0x556523, _0x3e120a);
    }
    if (
      [_0xa4bdbf(0x14e), _0xa4bdbf(0x122), _0xa4bdbf(0x10f), "video"][
        _0xa4bdbf(0x11e)
      ](_0x2fb731) &&
      !_0x2238e0
    ) {
      const _0x455071 = httpStatus[_0xa4bdbf(0x121)],
        _0x346043 = errors[_0xa4bdbf(0x11d)]["noFile"];
      throw new ApiError(_0x455071, _0x346043);
    }
    switch (_0x2fb731) {
      case _0xa4bdbf(0x142):
        return await createTextMessage(
          _0x2521dd,
          _0x2b19ab,
          _0x5a59b1,
          _0x3e1705,
          _0xb490ee,
          _0x1cbee3,
          _0xbf11ab
        );
      case _0xa4bdbf(0x14e):
      case _0xa4bdbf(0x122):
      case "image":
      case _0xa4bdbf(0x144):
        return await createFileMessage(
          _0x2521dd,
          _0x2fb731,
          _0x5a59b1,
          _0x2b19ab,
          _0x2238e0,
          _0x1316d6,
          _0x3e1705,
          _0xb490ee,
          _0x1cbee3,
          _0xbf11ab
        );
      case _0xa4bdbf(0x116):
        return await createPollMessage(
          _0x2521dd,
          _0x5a59b1,
          _0x2b19ab,
          _0x3e1705,
          _0xb490ee,
          _0x1cbee3,
          _0xbf11ab,
          _0xcb99ad
        );
      default:
        return null;
    }
  } catch (_0x1fee50) {
    throw _0x1fee50;
  }
}),
  (module[_0x3947fc(0x149)][_0x3947fc(0x131)] = async (
    _0x1963b2,
    _0x325123,
    _0x4e1970
  ) => {
    const _0x1ffb5e = _0x3947fc;
    try {
      if (!mongoose[_0x1ffb5e(0x140)](_0x325123)) {
        const _0x386d46 = httpStatus[_0x1ffb5e(0x121)],
          _0x4f8cfc = errors[_0x1ffb5e(0x11d)][_0x1ffb5e(0x12b)];
        throw new ApiError(_0x386d46, _0x4f8cfc);
      }
      _0x325123 = new mongoose[_0x1ffb5e(0x13d)][_0x1ffb5e(0x12c)](_0x325123);
      const _0x3df08b = await Message[_0x1ffb5e(0x133)](_0x325123);
      if (!_0x3df08b) {
        const _0x416698 = httpStatus["NOT_FOUND"],
          _0x46760c = errors["message"]["notFound"];
        throw new ApiError(_0x416698, _0x46760c);
      }
      if (_0x3df08b[_0x1ffb5e(0x150)] !== _0x1ffb5e(0x116)) {
        const _0x38b913 = httpStatus[_0x1ffb5e(0x121)],
          _0x5599f6 = errors[_0x1ffb5e(0x11d)][_0x1ffb5e(0x118)];
        throw new ApiError(_0x38b913, _0x5599f6);
      }
      const _0x450c90 = _0x1963b2[_0x1ffb5e(0x137)](
        _0x3df08b[_0x1ffb5e(0x146)]
      );
      if (!_0x450c90) {
        const _0x3c0244 = httpStatus[_0x1ffb5e(0x121)],
          _0x460d33 = errors[_0x1ffb5e(0x132)]["notJoined"];
        throw new ApiError(_0x3c0244, _0x460d33);
      }
      const _0x4180ce = _0x3df08b[_0x1ffb5e(0x145)](
        _0x1963b2[_0x1ffb5e(0x147)],
        _0x4e1970
      );
      if (!_0x4180ce) {
        const _0x3f3468 = httpStatus[_0x1ffb5e(0x121)],
          _0x31e7df = errors["message"][_0x1ffb5e(0x14d)];
        throw new ApiError(_0x3f3468, _0x31e7df);
      }
      return await _0x3df08b[_0x1ffb5e(0x14b)](), _0x3df08b;
    } catch (_0x42b81c) {
      throw _0x42b81c;
    }
  }),
  (module["exports"][_0x3947fc(0x13c)] = async (_0x7352ea, _0x23659b) => {
    const _0x4a0674 = _0x3947fc;
    try {
      await Message[_0x4a0674(0x141)](
        {
          receiver: new mongoose[_0x4a0674(0x13d)][_0x4a0674(0x12c)](_0x23659b),
        },
        { $addToSet: { viewers: _0x7352ea[_0x4a0674(0x147)] } }
      );
      const _0x57d038 = await Message["aggregate"]([
        {
          $match: {
            receiver: new mongoose[_0x4a0674(0x13d)][_0x4a0674(0x12c)](
              _0x23659b
            ),
          },
        },
        {
          $lookup: {
            from: _0x4a0674(0x13a),
            localField: _0x4a0674(0x152),
            foreignField: "_id",
            as: _0x4a0674(0x152),
          },
        },
        {
          $lookup: {
            from: "users",
            localField: _0x4a0674(0x13b),
            foreignField: _0x4a0674(0x147),
            as: _0x4a0674(0x13b),
          },
        },
        {
          $lookup: {
            from: _0x4a0674(0x124),
            localField: _0x4a0674(0x117),
            foreignField: "_id",
            as: "repliedMessage",
          },
        },
        {
          $lookup: {
            from: _0x4a0674(0x13a),
            localField: _0x4a0674(0x12f),
            foreignField: _0x4a0674(0x147),
            as: "voters",
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
            voters: { _id: 0x1, firstname: 0x1, lastname: 0x1 },
            repliedMessage: { _id: 0x1, type: 0x1, text: 0x1, file: 0x1 },
            viewers: { _id: 0x1, firstname: 0x1, lastname: 0x1 },
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
      return _0x57d038[_0x4a0674(0x11f)]((_0x49e130) => {
        const _0x5e6771 = _0x4a0674;
        if (_0x49e130["type"] !== _0x5e6771(0x116))
          return delete _0x49e130[_0x5e6771(0x13f)], _0x49e130;
        return (
          _0x49e130[_0x5e6771(0x139)][_0x5e6771(0x11f)](
            (_0x33a766, _0x2abf95) => {
              const _0x38aa8c = _0x5e6771;
              return (
                delete _0x33a766[_0x38aa8c(0x114)],
                (_0x33a766[_0x38aa8c(0x110)] =
                  _0x49e130[_0x38aa8c(0x13f)][_0x2abf95]),
                _0x33a766
              );
            }
          ),
          delete _0x49e130["voters"],
          _0x49e130
        );
      });
    } catch (_0x27574d) {
      throw _0x27574d;
    }
  }),
  (module[_0x3947fc(0x149)]["deleteMessage"] = async (_0x33b047, _0x268285) => {
    const _0x3ac57f = _0x3947fc;
    try {
      _0x268285 = new mongoose[_0x3ac57f(0x13d)]["ObjectId"](_0x268285);
      if (!mongoose["isValidObjectId"](_0x268285)) {
        const _0x46d2f0 = httpStatus["BAD_REQUEST"],
          _0x325ea2 = errors[_0x3ac57f(0x11d)][_0x3ac57f(0x12b)];
        throw new ApiError(_0x46d2f0, _0x325ea2);
      }
      const _0x280d43 = await Message[_0x3ac57f(0x133)](_0x268285);
      if (!_0x280d43) {
        const _0x30b52b = httpStatus["NOT_FOUND"],
          _0x317bc1 = errors[_0x3ac57f(0x11d)][_0x3ac57f(0x136)];
        throw new ApiError(_0x30b52b, _0x317bc1);
      }
      const _0xdd1d89 = await Room[_0x3ac57f(0x133)](
          _0x280d43[_0x3ac57f(0x146)]
        ),
        _0x2f9d91 =
          _0x280d43["sender"]["toString"]() ===
          _0x33b047[_0x3ac57f(0x147)][_0x3ac57f(0x12a)](),
        _0x2967ed =
          _0xdd1d89["author"][_0x3ac57f(0x12a)]() ===
          _0x33b047[_0x3ac57f(0x147)][_0x3ac57f(0x12a)](),
        _0x568bce = _0x2f9d91 || _0x2967ed;
      if (!_0x568bce) {
        const _0x532202 = httpStatus[_0x3ac57f(0x11a)],
          _0x11b43a = errors["message"][_0x3ac57f(0x11b)];
        throw new ApiError(_0x532202, _0x11b43a);
      }
      return await Message[_0x3ac57f(0x13e)](_0x268285);
    } catch (_0x2f5c40) {
      throw _0x2f5c40;
    }
  });
