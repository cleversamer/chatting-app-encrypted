const _0x298462 = _0x1b94;
(function (_0x3291ad, _0x3e2fa7) {
  const _0x403ca1 = _0x1b94,
    _0x32307b = _0x3291ad();
  while (!![]) {
    try {
      const _0x291051 =
        parseInt(_0x403ca1(0x14c)) / 0x1 +
        (parseInt(_0x403ca1(0x190)) / 0x2) *
          (parseInt(_0x403ca1(0x147)) / 0x3) +
        (parseInt(_0x403ca1(0x169)) / 0x4) *
          (parseInt(_0x403ca1(0x165)) / 0x5) +
        -parseInt(_0x403ca1(0x17e)) / 0x6 +
        parseInt(_0x403ca1(0x144)) / 0x7 +
        parseInt(_0x403ca1(0x185)) / 0x8 +
        (parseInt(_0x403ca1(0x17d)) / 0x9) *
          (-parseInt(_0x403ca1(0x191)) / 0xa);
      if (_0x291051 === _0x3e2fa7) break;
      else _0x32307b["push"](_0x32307b["shift"]());
    } catch (_0x485485) {
      _0x32307b["push"](_0x32307b["shift"]());
    }
  }
})(_0x2814, 0x875b0);
function _0x1b94(_0x45edda, _0x27b66c) {
  const _0x2814e8 = _0x2814();
  return (
    (_0x1b94 = function (_0x1b9489, _0x27d0f5) {
      _0x1b9489 = _0x1b9489 - 0x12e;
      let _0xbd545b = _0x2814e8[_0x1b9489];
      return _0xbd545b;
    }),
    _0x1b94(_0x45edda, _0x27b66c)
  );
}
const { ApiError } = require(_0x298462(0x145)),
  { Room } = require(_0x298462(0x167)),
  { Message } = require(_0x298462(0x186)),
  { Assignment } = require(_0x298462(0x15c)),
  { Submission } = require(_0x298462(0x17f)),
  { User } = require(_0x298462(0x141)),
  { MESSAGE_TYPES } = require(_0x298462(0x186)),
  errors = require("../../config/errors"),
  httpStatus = require("http-status"),
  messagesService = require(_0x298462(0x16f)),
  localStorage = require(_0x298462(0x177)),
  mongoose = require("mongoose"),
  usersService = require(_0x298462(0x16d));
(module["exports"][_0x298462(0x174)] = async () => {
  const _0x99e9c3 = _0x298462;
  try {
    const _0x15e97e = await Room["aggregate"]([
        { $match: { isPinned: !![] } },
        { $sort: { _id: -0x1 } },
        {
          $lookup: {
            from: _0x99e9c3(0x155),
            localField: _0x99e9c3(0x159),
            foreignField: "_id",
            as: _0x99e9c3(0x159),
          },
        },
        {
          $project: {
            _id: 0x1,
            name: 0x1,
            isPinned: 0x1,
            showName: 0x1,
            members: { $size: _0x99e9c3(0x13e) },
            status: 0x1,
            author: { _id: 0x1, firstname: 0x1, lastname: 0x1 },
          },
        },
      ]),
      _0x9f5656 = await Room[_0x99e9c3(0x168)]([
        { $match: { isPinned: ![] } },
        { $sort: { _id: -0x1 } },
        {
          $lookup: {
            from: "users",
            localField: _0x99e9c3(0x159),
            foreignField: "_id",
            as: _0x99e9c3(0x159),
          },
        },
        {
          $project: {
            _id: 0x1,
            name: 0x1,
            isPinned: 0x1,
            showName: 0x1,
            members: { $size: _0x99e9c3(0x13e) },
            status: 0x1,
            author: { _id: 0x1, firstname: 0x1, lastname: 0x1 },
          },
        },
      ]),
      _0x4cfe73 = [..._0x15e97e, ..._0x9f5656];
    if (!_0x4cfe73 || !_0x4cfe73[_0x99e9c3(0x149)]) {
      const _0x3bab9c = httpStatus[_0x99e9c3(0x194)],
        _0x2e3cd1 = errors[_0x99e9c3(0x130)][_0x99e9c3(0x172)];
      throw new ApiError(_0x3bab9c, _0x2e3cd1);
    }
    return _0x4cfe73;
  } catch (_0x88fab1) {
    throw _0x88fab1;
  }
}),
  (module[_0x298462(0x146)][_0x298462(0x14a)] = async (
    _0xfd6675,
    _0x3f85f1
  ) => {
    const _0x40e7b0 = _0x298462;
    try {
      const _0x1808d7 = await Room["findById"](_0xfd6675);
      if (!_0x1808d7) {
        const _0x46a7ef = httpStatus["NOT_FOUND"],
          _0x44f31f = errors[_0x40e7b0(0x130)][_0x40e7b0(0x148)];
        throw new ApiError(_0x46a7ef, _0x44f31f);
      }
      const _0x3a3a7e =
        _0x1808d7[_0x40e7b0(0x159)]["toString"]() ===
          _0x3f85f1?.["_id"]?.[_0x40e7b0(0x187)]() ||
        _0x3f85f1[_0x40e7b0(0x182)] === "admin";
      if (!_0x3a3a7e) {
        const _0x432566 = httpStatus[_0x40e7b0(0x153)],
          _0x2dd273 = errors[_0x40e7b0(0x130)][_0x40e7b0(0x134)];
        throw new ApiError(_0x432566, _0x2dd273);
      }
      await this["deleteRoomAssets"](_0xfd6675);
      const _0x1f8e45 = await User["findById"](_0x1808d7["author"]);
      return (
        (_0x1f8e45[_0x40e7b0(0x14e)] = _0x1f8e45[_0x40e7b0(0x14e)][
          _0x40e7b0(0x16e)
        ](
          (_0x1dec89) =>
            _0x1dec89[_0x40e7b0(0x187)]() !==
            _0x1808d7["_id"][_0x40e7b0(0x187)]()
        )),
        await _0x1f8e45["save"](),
        await Room[_0x40e7b0(0x131)](_0xfd6675),
        _0x1808d7
      );
    } catch (_0x42c13a) {
      throw _0x42c13a;
    }
  }),
  (module[_0x298462(0x146)]["findRoomById"] = async (_0x13c819) => {
    const _0xef2222 = _0x298462;
    try {
      return (
        (_0x13c819 = new mongoose["Types"][_0xef2222(0x188)](_0x13c819)),
        await Room["findById"](_0x13c819)
      );
    } catch (_0x34def9) {
      throw _0x34def9;
    }
  }),
  (module["exports"][_0x298462(0x173)] = async (_0x432a99) => {
    try {
      return await Room["findOne"]({ name: _0x432a99 });
    } catch (_0x5a87ef) {
      throw _0x5a87ef;
    }
  }),
  (module["exports"]["searchRooms"] = async (_0x2b4f69, _0x32254f) => {
    const _0x3190d7 = _0x298462;
    try {
      const _0x50bf6d = [
          ..._0x2b4f69[_0x3190d7(0x14e)],
          ..._0x2b4f69[_0x3190d7(0x142)],
        ],
        _0x33b144 = await Room[_0x3190d7(0x168)]([
          {
            $match: { $text: { $search: _0x32254f }, _id: { $in: _0x50bf6d } },
          },
          { $sort: { score: { $meta: _0x3190d7(0x183) } } },
          { $limit: 0xa },
          {
            $lookup: {
              from: _0x3190d7(0x155),
              localField: _0x3190d7(0x18a),
              foreignField: _0x3190d7(0x14b),
              as: _0x3190d7(0x18a),
            },
          },
          {
            $lookup: {
              from: _0x3190d7(0x155),
              localField: "author",
              foreignField: _0x3190d7(0x14b),
              as: _0x3190d7(0x159),
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
      let _0x39bd36 = await Room["aggregate"]([
        { $match: { $text: { $search: _0x32254f }, status: _0x3190d7(0x156) } },
        { $sort: { score: { $meta: _0x3190d7(0x183) } } },
        { $limit: 0xa },
        {
          $lookup: {
            from: _0x3190d7(0x155),
            localField: _0x3190d7(0x18a),
            foreignField: _0x3190d7(0x14b),
            as: _0x3190d7(0x18a),
          },
        },
        {
          $lookup: {
            from: _0x3190d7(0x155),
            localField: _0x3190d7(0x159),
            foreignField: _0x3190d7(0x14b),
            as: "author",
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
        (_0x39bd36 = _0x39bd36[_0x3190d7(0x16e)](
          (_0x56de2d) =>
            !_0x2b4f69["createdRooms"]["includes"](_0x56de2d[_0x3190d7(0x14b)])
        )),
        { myRooms: _0x33b144, resultRooms: _0x39bd36 }
      );
    } catch (_0x58949b) {
      throw _0x58949b;
    }
  }),
  (module["exports"][_0x298462(0x135)] = async (_0x96ee0, _0xec455) => {
    const _0x85385 = _0x298462;
    try {
      const _0x53dfa4 = await this["getMappedRooms"]([_0xec455]),
        _0x206fd1 = _0x53dfa4[0x0];
      if (!_0x206fd1) {
        const _0x3ccc4f = httpStatus["NOT_FOUND"],
          _0x567d8a = errors[_0x85385(0x130)][_0x85385(0x148)];
        throw new ApiError(_0x3ccc4f, _0x567d8a);
      }
      const _0x4186b4 = _0x206fd1[_0x85385(0x18a)]
          [_0x85385(0x162)]((_0x4d2e41) =>
            _0x4d2e41[_0x85385(0x14b)][_0x85385(0x187)]()
          )
          [_0x85385(0x154)](_0xec455),
        _0x428f78 =
          _0x206fd1["author"][0x0][_0x85385(0x14b)][_0x85385(0x187)]() ===
          _0x96ee0[_0x85385(0x14b)][_0x85385(0x187)](),
        _0x1a46e4 = _0x4186b4 || _0x428f78;
      if (!_0x1a46e4) {
        const _0x439f69 = httpStatus["FORBIDDEN"],
          _0x56a0b2 = errors[_0x85385(0x130)][_0x85385(0x14f)];
        throw new ApiError(_0x439f69, _0x56a0b2);
      }
      return _0x206fd1["members"];
    } catch (_0x24cfe5) {
      throw _0x24cfe5;
    }
  }),
  (module[_0x298462(0x146)]["getMappedRooms"] = async (_0x339e94 = []) => {
    const _0x3d33ca = _0x298462;
    _0x339e94 = _0x339e94["map"](
      (_0x5db6bb) => new mongoose[_0x3d33ca(0x18f)][_0x3d33ca(0x188)](_0x5db6bb)
    );
    try {
      return await Room[_0x3d33ca(0x168)]([
        { $match: { _id: { $in: _0x339e94 } } },
        { $sort: { _id: -0x1 } },
        {
          $lookup: {
            from: _0x3d33ca(0x155),
            localField: _0x3d33ca(0x18a),
            foreignField: _0x3d33ca(0x14b),
            as: "members",
          },
        },
        {
          $lookup: {
            from: _0x3d33ca(0x155),
            localField: _0x3d33ca(0x159),
            foreignField: _0x3d33ca(0x14b),
            as: _0x3d33ca(0x159),
          },
        },
        {
          $lookup: {
            from: _0x3d33ca(0x13a),
            localField: "pinnedMessages",
            foreignField: _0x3d33ca(0x14b),
            as: _0x3d33ca(0x13b),
          },
        },
        {
          $lookup: {
            from: "assignments",
            localField: _0x3d33ca(0x176),
            foreignField: _0x3d33ca(0x14b),
            as: "assignments",
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
    } catch (_0x1a4b08) {
      throw _0x1a4b08;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x184)] = async (_0x5aa94e) => {
    const _0x1690c4 = _0x298462;
    try {
      _0x5aa94e = parseInt(_0x5aa94e);
      const _0x22895c = await Room[_0x1690c4(0x168)]([
          { $match: { isPinned: !![] } },
          { $sort: { _id: -0x1 } },
          {
            $lookup: {
              from: _0x1690c4(0x155),
              localField: _0x1690c4(0x159),
              foreignField: _0x1690c4(0x14b),
              as: _0x1690c4(0x159),
            },
          },
          {
            $project: {
              _id: 0x1,
              name: 0x1,
              isPinned: 0x1,
              showName: 0x1,
              members: { $size: "$members" },
              status: 0x1,
              author: { _id: 0x1, firstname: 0x1, lastname: 0x1 },
            },
          },
        ]),
        _0x5dc78d = await Room[_0x1690c4(0x168)]([
          { $match: { status: _0x1690c4(0x156), isPinned: ![] } },
          { $skip: _0x5aa94e },
          { $sort: { _id: -0x1 } },
          { $limit: 0xa },
          {
            $lookup: {
              from: _0x1690c4(0x155),
              localField: _0x1690c4(0x18a),
              foreignField: "_id",
              as: _0x1690c4(0x18a),
            },
          },
          {
            $lookup: {
              from: _0x1690c4(0x155),
              localField: _0x1690c4(0x159),
              foreignField: "_id",
              as: _0x1690c4(0x159),
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
        _0x293e7e = [..._0x22895c, ..._0x5dc78d];
      if (!_0x293e7e || !_0x293e7e["length"]) {
        const _0x5b7b0d = httpStatus[_0x1690c4(0x194)],
          _0x21a68b = errors[_0x1690c4(0x130)]["noRooms"];
        throw new ApiError(_0x5b7b0d, _0x21a68b);
      }
      return _0x293e7e;
    } catch (_0x312d65) {
      throw _0x312d65;
    }
  }),
  (module[_0x298462(0x146)]["createRoom"] = async (_0x5e877d) => {
    const _0x289eeb = _0x298462;
    try {
      const _0x3d99ef = _0x5e877d["user"],
        {
          name: _0x189033,
          status: _0x4ba5fd,
          code: _0x13bf70,
        } = _0x5e877d[_0x289eeb(0x18e)];
      if (_0x3d99ef["createdRooms"][_0x289eeb(0x149)] === 0xa) {
        const _0x2404ba = httpStatus["FORBIDDEN"],
          _0x3bdc11 = errors[_0x289eeb(0x193)][_0x289eeb(0x13d)];
        throw new ApiError(_0x2404ba, _0x3bdc11);
      }
      const _0x5e0677 = {
          name: _0x189033,
          author: _0x3d99ef[_0x289eeb(0x14b)],
          status: _0x4ba5fd,
          code: _0x13bf70,
        },
        _0x280407 = {
          name: _0x189033,
          author: _0x3d99ef["_id"],
          status: _0x4ba5fd,
        },
        _0x21618b =
          _0x4ba5fd === _0x289eeb(0x12e) &&
          (!_0x13bf70 ||
            _0x13bf70[_0x289eeb(0x149)] < 0x1 ||
            _0x13bf70[_0x289eeb(0x149)] > 0x10);
      if (_0x21618b) {
        const _0x25b920 = httpStatus["BAD_REQUEST"],
          _0x168af6 = errors["rooms"]["invalidCode"];
        throw new ApiError(_0x25b920, _0x168af6);
      }
      const _0xc18f64 = new Room(
          _0x4ba5fd === _0x289eeb(0x12e) ? _0x5e0677 : _0x280407
        ),
        _0x16f33b = await _0xc18f64["save"]();
      _0x3d99ef[_0x289eeb(0x14e)][_0x289eeb(0x151)](_0xc18f64["_id"]),
        await _0x3d99ef["save"]();
      const _0x57046f = await this["getMappedRooms"]([_0x16f33b["_id"]]);
      return _0x57046f[0x0];
    } catch (_0xd95b10) {
      throw _0xd95b10;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x12f)] = async (_0x22572c) => {
    const _0xaf1a4d = _0x298462;
    try {
      const _0xe2da95 = _0x22572c[_0xaf1a4d(0x193)],
        { roomId: _0x25a489, userIds: _0x32b4f1 } = _0x22572c["body"],
        _0x13687a = await this[_0xaf1a4d(0x138)](_0x25a489);
      if (!_0x13687a) {
        const _0x250176 = httpStatus["NOT_FOUND"],
          _0xc28b63 = errors[_0xaf1a4d(0x130)][_0xaf1a4d(0x148)];
        throw new ApiError(_0x250176, _0xc28b63);
      }
      if (
        _0x13687a[_0xaf1a4d(0x159)][_0xaf1a4d(0x187)]() !==
        _0xe2da95[_0xaf1a4d(0x14b)][_0xaf1a4d(0x187)]()
      ) {
        const _0x3807ab = httpStatus[_0xaf1a4d(0x16b)],
          _0x427eab = errors["rooms"][_0xaf1a4d(0x134)];
        throw new ApiError(_0x3807ab, _0x427eab);
      }
      _0x32b4f1[_0xaf1a4d(0x15f)]((_0x90fec4) =>
        _0x13687a[_0xaf1a4d(0x18d)]["unshift"](_0x90fec4)
      ),
        await _0x13687a[_0xaf1a4d(0x17c)]();
      const _0xeb67b8 = await this[_0xaf1a4d(0x15e)]([_0x13687a["_id"]]);
      return _0xeb67b8[0x0];
    } catch (_0x56db8c) {
      throw _0x56db8c;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x158)] = async (_0x4be0cd) => {
    const _0x2a55b2 = _0x298462;
    try {
      const _0x3ad2c8 = _0x4be0cd["user"],
        { roomId: _0x452d49, userIds: _0x5d9b21 } = _0x4be0cd[_0x2a55b2(0x18e)],
        _0x211aa8 = await this[_0x2a55b2(0x138)](_0x452d49);
      if (!_0x211aa8) {
        const _0xf6af29 = httpStatus["NOT_FOUND"],
          _0x28daef = errors[_0x2a55b2(0x130)][_0x2a55b2(0x148)];
        throw new ApiError(_0xf6af29, _0x28daef);
      }
      if (
        _0x211aa8[_0x2a55b2(0x159)][_0x2a55b2(0x187)]() !==
        _0x3ad2c8["_id"]["toString"]()
      ) {
        const _0x1e309e = httpStatus[_0x2a55b2(0x16b)],
          _0x1fd8d9 = errors[_0x2a55b2(0x130)][_0x2a55b2(0x134)];
        throw new ApiError(_0x1e309e, _0x1fd8d9);
      }
      (_0x211aa8[_0x2a55b2(0x18d)] = _0x211aa8[_0x2a55b2(0x18d)]["filter"](
        (_0x115175) => !_0x5d9b21[_0x2a55b2(0x154)](_0x115175)
      )),
        await _0x211aa8["save"]();
      const _0x4cd532 = await this[_0x2a55b2(0x15e)]([
        _0x211aa8[_0x2a55b2(0x14b)],
      ]);
      return _0x4cd532[0x0];
    } catch (_0x4b1f61) {
      throw _0x4b1f61;
    }
  }),
  (module["exports"][_0x298462(0x17b)] = async (_0x89a087, _0x1804c6) => {
    const _0x9e23f1 = _0x298462;
    try {
      const _0xb15558 = await this["findRoomById"](_0x1804c6);
      if (!_0xb15558) {
        const _0x1e6814 = httpStatus[_0x9e23f1(0x194)],
          _0x42f917 = errors[_0x9e23f1(0x130)][_0x9e23f1(0x148)];
        throw new ApiError(_0x1e6814, _0x42f917);
      }
      if (
        _0xb15558[_0x9e23f1(0x159)][_0x9e23f1(0x187)]() !==
        _0x89a087[_0x9e23f1(0x14b)]["toString"]()
      ) {
        const _0xcdd950 = httpStatus[_0x9e23f1(0x16b)],
          _0x490ad5 = errors[_0x9e23f1(0x130)][_0x9e23f1(0x134)];
        throw new ApiError(_0xcdd950, _0x490ad5);
      }
      await this[_0x9e23f1(0x192)](_0xb15558["_id"]);
      const _0x422d0b = await this[_0x9e23f1(0x15e)]([
        _0xb15558[_0x9e23f1(0x14b)],
      ]);
      return _0x422d0b[0x0];
    } catch (_0x4045e8) {
      throw _0x4045e8;
    }
  }),
  (module[_0x298462(0x146)]["deleteRoomMessages"] = async (
    _0x53c214,
    _0x1a620d
  ) => {
    const _0x5c8b6e = _0x298462;
    try {
      const _0x20e3f8 = await this["findRoomById"](_0x1a620d);
      if (!_0x20e3f8) {
        const _0x96d3d7 = httpStatus[_0x5c8b6e(0x194)],
          _0x38d741 = errors[_0x5c8b6e(0x130)]["notFound"];
        throw new ApiError(_0x96d3d7, _0x38d741);
      }
      if (
        _0x20e3f8[_0x5c8b6e(0x159)][_0x5c8b6e(0x187)]() !==
        _0x53c214[_0x5c8b6e(0x14b)]["toString"]()
      ) {
        const _0x1cb78a = httpStatus[_0x5c8b6e(0x16b)],
          _0x551a9a = errors[_0x5c8b6e(0x130)][_0x5c8b6e(0x134)];
        throw new ApiError(_0x1cb78a, _0x551a9a);
      }
      const _0x1a3ca7 = await Message[_0x5c8b6e(0x160)]({
        receiver: _0x20e3f8["_id"],
      });
      _0x1a3ca7["forEach"](async (_0x201d0d) => {
        const _0x3267a3 = _0x5c8b6e;
        _0x201d0d[_0x3267a3(0x164)][_0x3267a3(0x137)] &&
          (await localStorage[_0x3267a3(0x13c)](
            _0x201d0d[_0x3267a3(0x164)][_0x3267a3(0x137)]
          )),
          await _0x201d0d[_0x3267a3(0x161)]();
      });
      const _0x53377a = await this[_0x5c8b6e(0x15e)]([
        _0x20e3f8[_0x5c8b6e(0x14b)],
      ]);
      return _0x53377a[0x0];
    } catch (_0x39117e) {
      throw _0x39117e;
    }
  }),
  (module[_0x298462(0x146)]["addPinnedMessage"] = async (_0x5a4092) => {
    const _0x570f75 = _0x298462;
    try {
      const _0x14f8b8 = _0x5a4092[_0x570f75(0x193)],
        {
          type: _0x877695,
          roomId: _0x16ed32,
          text: _0xf1b02d,
          date: _0x541790,
          displayName: _0x4cad75,
        } = _0x5a4092[_0x570f75(0x18e)],
        _0x1de0f5 = _0x5a4092?.[_0x570f75(0x15a)]?.[_0x570f75(0x164)];
      if (!MESSAGE_TYPES[_0x570f75(0x154)](_0x877695)) {
        const _0x1f93ea = httpStatus[_0x570f75(0x139)],
          _0x5a3f1f = errors[_0x570f75(0x16c)][_0x570f75(0x150)];
        throw new ApiError(_0x1f93ea, _0x5a3f1f);
      }
      const _0x35c1cb = await this[_0x570f75(0x138)](_0x16ed32);
      if (!_0x35c1cb) {
        const _0x4290f5 = httpStatus[_0x570f75(0x194)],
          _0x3c9b04 = errors["rooms"][_0x570f75(0x148)];
        throw new ApiError(_0x4290f5, _0x3c9b04);
      }
      if (
        _0x35c1cb["author"]["toString"]() !==
        _0x14f8b8["_id"][_0x570f75(0x187)]()
      ) {
        const _0x28e551 = httpStatus[_0x570f75(0x16b)],
          _0x385255 = errors[_0x570f75(0x130)][_0x570f75(0x134)];
        throw new ApiError(_0x28e551, _0x385255);
      }
      const _0xec1137 = await messagesService["createMessage"](
        _0x14f8b8,
        _0x877695,
        _0xf1b02d,
        _0x16ed32,
        _0x1de0f5,
        _0x4cad75,
        _0x541790,
        ![],
        null,
        !![]
      );
      _0x35c1cb["pinnedMessages"]["unshift"](_0xec1137["_id"]),
        await _0x35c1cb[_0x570f75(0x17c)]();
      const _0x142d93 = await this[_0x570f75(0x15e)]([
        _0x35c1cb[_0x570f75(0x14b)],
      ]);
      return _0x142d93[0x0];
    } catch (_0x35c85b) {
      throw _0x35c85b;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x179)] = async (_0x399298) => {
    const _0x10720d = _0x298462;
    try {
      const _0xa7f56c = _0x399298["user"],
        { name: _0x46478f, code: _0x574bcf } = _0x399298[_0x10720d(0x175)],
        _0x109517 = await this[_0x10720d(0x173)](_0x46478f);
      if (!_0x109517) {
        const _0xec091b = httpStatus[_0x10720d(0x194)],
          _0x1310aa = errors[_0x10720d(0x130)]["notFound"];
        throw new ApiError(_0xec091b, _0x1310aa);
      }
      const _0x5c7a6f =
        _0x109517["status"] === _0x10720d(0x12e) &&
        (!_0x574bcf ||
          _0x574bcf[_0x10720d(0x149)] < 0x1 ||
          _0x574bcf["length"] > 0x10);
      if (_0x5c7a6f) {
        const _0x5580d9 = httpStatus[_0x10720d(0x139)],
          _0x2973a5 = errors[_0x10720d(0x130)][_0x10720d(0x132)];
        throw new ApiError(_0x5580d9, _0x2973a5);
      }
      if (
        _0x109517[_0x10720d(0x17a)] === _0x10720d(0x12e) &&
        _0x109517[_0x10720d(0x189)] !== _0x574bcf
      ) {
        const _0x4e927d = httpStatus[_0x10720d(0x139)],
          _0xeaeff8 = errors[_0x10720d(0x130)][_0x10720d(0x180)];
        throw new ApiError(_0x4e927d, _0xeaeff8);
      }
      if (
        _0x109517["author"][_0x10720d(0x187)]() ===
        _0xa7f56c[_0x10720d(0x14b)][_0x10720d(0x187)]()
      ) {
        const _0x29132e = httpStatus[_0x10720d(0x181)],
          _0x546c0e = errors[_0x10720d(0x130)][_0x10720d(0x157)];
        throw new ApiError(_0x29132e, _0x546c0e);
      }
      const _0x49368a =
        _0xa7f56c["joinedRooms"][_0x10720d(0x154)](
          _0x109517[_0x10720d(0x14b)][_0x10720d(0x187)]()
        ) &&
        _0x109517["members"][_0x10720d(0x154)](
          _0xa7f56c[_0x10720d(0x14b)][_0x10720d(0x187)]()
        );
      if (_0x49368a) {
        const _0x2efe00 = httpStatus["BAD_REQUEST"],
          _0x166274 = errors[_0x10720d(0x130)][_0x10720d(0x157)];
        throw new ApiError(_0x2efe00, _0x166274);
      }
      _0x109517[_0x10720d(0x18a)][_0x10720d(0x151)](
        _0xa7f56c[_0x10720d(0x14b)]
      ),
        _0xa7f56c[_0x10720d(0x142)][_0x10720d(0x151)](
          _0x109517[_0x10720d(0x14b)]
        ),
        await _0xa7f56c[_0x10720d(0x17c)](),
        await _0x109517[_0x10720d(0x17c)]();
      const _0x5d35fe = await this[_0x10720d(0x15e)]([_0x109517["_id"]]);
      return _0x5d35fe[0x0];
    } catch (_0x439e60) {
      throw _0x439e60;
    }
  }),
  (module["exports"][_0x298462(0x13f)] = async (
    _0x5bf1eb,
    _0x24516f,
    _0x5a1e30
  ) => {
    const _0x5a90ee = _0x298462;
    try {
      const _0x3a44f6 = await Room[_0x5a90ee(0x143)](_0x24516f);
      if (!_0x3a44f6) {
        const _0x1040c2 = httpStatus[_0x5a90ee(0x194)],
          _0x334a30 = errors["rooms"]["notFound"];
        throw new ApiError(_0x1040c2, _0x334a30);
      }
      if (
        _0x3a44f6[_0x5a90ee(0x159)][_0x5a90ee(0x187)]() !==
        _0x5bf1eb["_id"]["toString"]()
      ) {
        const _0x1c71df = httpStatus[_0x5a90ee(0x153)],
          _0x35823b = errors[_0x5a90ee(0x130)][_0x5a90ee(0x134)];
        throw new ApiError(_0x1c71df, _0x35823b);
      }
      return (
        (_0x3a44f6[_0x5a90ee(0x18a)] = _0x3a44f6["members"][_0x5a90ee(0x16e)](
          (_0x274270) =>
            !_0x5a1e30[_0x5a90ee(0x154)](_0x274270[_0x5a90ee(0x187)]())
        )),
        await usersService[_0x5a90ee(0x136)](_0x5a1e30, _0x24516f),
        await _0x3a44f6[_0x5a90ee(0x17c)]()
      );
    } catch (_0x19bbab) {
      throw _0x19bbab;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x18b)] = async (
    _0xa7502c,
    _0x3ac3e2
  ) => {
    const _0xb8e03d = _0x298462;
    try {
      const _0xa0cc21 = await Room[_0xb8e03d(0x143)](_0x3ac3e2);
      if (!_0xa0cc21) {
        const _0xa78b62 = httpStatus[_0xb8e03d(0x194)],
          _0x5704c0 = errors[_0xb8e03d(0x130)][_0xb8e03d(0x148)];
        throw new ApiError(_0xa78b62, _0x5704c0);
      }
      if (
        _0xa0cc21[_0xb8e03d(0x159)][_0xb8e03d(0x187)]() !==
        _0xa7502c[_0xb8e03d(0x14b)][_0xb8e03d(0x187)]()
      ) {
        const _0x357122 = httpStatus["FORBIDDEN"],
          _0x871af = errors[_0xb8e03d(0x130)][_0xb8e03d(0x134)];
        throw new ApiError(_0x357122, _0x871af);
      }
      return (
        (_0xa0cc21[_0xb8e03d(0x140)] = !_0xa0cc21[_0xb8e03d(0x140)]),
        await _0xa0cc21[_0xb8e03d(0x17c)]()
      );
    } catch (_0x337259) {
      throw _0x337259;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x178)] = async (
    _0x28fad4,
    _0x46665b
  ) => {
    const _0xa9a28a = _0x298462;
    try {
      const _0x26d147 = await Room[_0xa9a28a(0x143)](_0x28fad4);
      if (!_0x26d147) {
        const _0x22e424 = httpStatus[_0xa9a28a(0x194)],
          _0x4ff0e1 = errors[_0xa9a28a(0x130)][_0xa9a28a(0x148)];
        throw new ApiError(_0x22e424, _0x4ff0e1);
      }
      if (
        _0x26d147[_0xa9a28a(0x159)][_0xa9a28a(0x187)]() !==
        _0x46665b[_0xa9a28a(0x14b)][_0xa9a28a(0x187)]()
      ) {
        const _0x51eeb8 = httpStatus[_0xa9a28a(0x153)],
          _0x35c0e4 = errors["rooms"][_0xa9a28a(0x134)];
        throw new ApiError(_0x51eeb8, _0x35c0e4);
      }
      return (
        (_0x26d147["chatDisabled"] = !_0x26d147[_0xa9a28a(0x15d)]),
        await _0x26d147[_0xa9a28a(0x17c)]()
      );
    } catch (_0xf50990) {
      throw _0xf50990;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x18c)] = async (
    _0x2b8d09,
    _0x12ab34,
    _0x28cd8f
  ) => {
    const _0x2714ec = _0x298462;
    try {
      const _0x4b01c3 = await Room[_0x2714ec(0x143)](_0x2b8d09);
      if (!_0x4b01c3) {
        const _0x5345a8 = httpStatus[_0x2714ec(0x194)],
          _0x35bb9f = errors[_0x2714ec(0x130)]["notFound"];
        throw new ApiError(_0x5345a8, _0x35bb9f);
      }
      if (
        _0x4b01c3[_0x2714ec(0x159)]["toString"]() !==
        _0x12ab34["_id"]["toString"]()
      ) {
        const _0x263fd5 = httpStatus[_0x2714ec(0x153)],
          _0x31f9d7 = errors[_0x2714ec(0x130)][_0x2714ec(0x134)];
        throw new ApiError(_0x263fd5, _0x31f9d7);
      }
      return (
        (_0x4b01c3[_0x2714ec(0x15b)] = _0x28cd8f),
        await _0x4b01c3[_0x2714ec(0x17c)](),
        _0x4b01c3
      );
    } catch (_0x235f60) {
      throw _0x235f60;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x192)] = async (_0x1f1297) => {
    const _0x4ec07f = _0x298462;
    try {
      const _0x44eaac = await Room["findById"](_0x1f1297);
      if (!_0x44eaac) {
        const _0x3fee57 = httpStatus[_0x4ec07f(0x194)],
          _0x3011e4 = errors[_0x4ec07f(0x130)][_0x4ec07f(0x148)];
        throw new ApiError(_0x3fee57, _0x3011e4);
      }
      await usersService[_0x4ec07f(0x136)](
        [..._0x44eaac[_0x4ec07f(0x18a)]],
        _0x1f1297
      ),
        (_0x44eaac["members"] = []);
      const _0x3b51b5 = await Message[_0x4ec07f(0x160)]({
        receiver: _0x44eaac[_0x4ec07f(0x14b)],
      });
      _0x3b51b5[_0x4ec07f(0x15f)](async (_0x391ade) => {
        const _0x3b9e93 = _0x4ec07f,
          _0x1e9c54 = _0x391ade?.["file"]?.[_0x3b9e93(0x137)];
        _0x1e9c54 && (await localStorage[_0x3b9e93(0x13c)](_0x1e9c54));
      }),
        await Message[_0x4ec07f(0x170)]({ receiver: _0x44eaac["_id"] }),
        (_0x44eaac[_0x4ec07f(0x13b)] = []),
        await _0x44eaac[_0x4ec07f(0x17c)]();
      const _0x2c119f = await Assignment[_0x4ec07f(0x160)]({
        room: _0x44eaac["_id"],
      });
      _0x2c119f[_0x4ec07f(0x15f)](async (_0x5b6904) => {
        const _0x2c9fa0 = _0x4ec07f;
        await localStorage[_0x2c9fa0(0x13c)](
          _0x5b6904["file"][_0x2c9fa0(0x137)]
        );
        const _0x1a1236 = await Submission[_0x2c9fa0(0x160)]({
          assignmentId: _0x5b6904[_0x2c9fa0(0x14b)],
        });
        _0x1a1236["forEach"](async (_0x4dcd0f) => {
          const _0xca86d1 = _0x2c9fa0;
          _0x4dcd0f[_0xca86d1(0x15a)][_0xca86d1(0x15f)](async (_0x3efb73) => {
            const _0x407c2d = _0xca86d1;
            await localStorage[_0x407c2d(0x13c)](_0x3efb73[_0x407c2d(0x137)]);
          });
        });
      }),
        await Assignment["deleteMany"]({ room: _0x44eaac[_0x4ec07f(0x14b)] }),
        await Submission[_0x4ec07f(0x170)]({ roomId: _0x44eaac["_id"] });
    } catch (_0x5805a9) {
      throw _0x5805a9;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x163)] = async (
    _0x30f7aa,
    _0x268ef1
  ) => {
    const _0x3047fa = _0x298462;
    try {
      const _0x18b38f = await Room[_0x3047fa(0x143)](_0x268ef1);
      if (!_0x18b38f) {
        const _0x570726 = httpStatus["NOT_FOUND"],
          _0x343e5b = errors[_0x3047fa(0x130)][_0x3047fa(0x148)];
        throw new ApiError(_0x570726, _0x343e5b);
      }
      if (
        _0x18b38f[_0x3047fa(0x159)][_0x3047fa(0x187)]() !==
        _0x30f7aa[_0x3047fa(0x14b)][_0x3047fa(0x187)]()
      ) {
        const _0x13fa3e = httpStatus[_0x3047fa(0x153)],
          _0x189025 = errors[_0x3047fa(0x130)][_0x3047fa(0x134)];
        throw new ApiError(_0x13fa3e, _0x189025);
      }
      return (
        (_0x18b38f[_0x3047fa(0x17a)] = _0x3047fa(0x156)),
        await _0x18b38f[_0x3047fa(0x17c)](),
        _0x18b38f
      );
    } catch (_0x20c654) {
      throw _0x20c654;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x133)] = async (
    _0x2c5169,
    _0x4f80c0
  ) => {
    const _0x3bf1f3 = _0x298462;
    try {
      const _0x344d3b = await Room[_0x3bf1f3(0x143)](_0x4f80c0);
      if (!_0x344d3b) {
        const _0x5f5c55 = httpStatus[_0x3bf1f3(0x194)],
          _0x1d886c = errors[_0x3bf1f3(0x130)]["notFound"];
        throw new ApiError(_0x5f5c55, _0x1d886c);
      }
      if (
        _0x344d3b[_0x3bf1f3(0x159)]["toString"]() !==
        _0x2c5169[_0x3bf1f3(0x14b)][_0x3bf1f3(0x187)]()
      ) {
        const _0x58685d = httpStatus[_0x3bf1f3(0x153)],
          _0x1c2fa6 = errors["rooms"][_0x3bf1f3(0x134)];
        throw new ApiError(_0x58685d, _0x1c2fa6);
      }
      return (
        (_0x344d3b[_0x3bf1f3(0x17a)] = _0x3bf1f3(0x12e)),
        await _0x344d3b[_0x3bf1f3(0x17c)](),
        _0x344d3b
      );
    } catch (_0x2fb00d) {
      throw _0x2fb00d;
    }
  }),
  (module["exports"][_0x298462(0x152)] = async (_0x16e9f6) => {
    const _0x28921c = _0x298462;
    try {
      const _0x565f3e = await Room[_0x28921c(0x143)](_0x16e9f6);
      if (!_0x565f3e) {
        const _0x293bec = httpStatus[_0x28921c(0x194)],
          _0x198013 = errors["rooms"][_0x28921c(0x148)];
        throw new ApiError(_0x293bec, _0x198013);
      }
      return (
        (_0x565f3e[_0x28921c(0x171)] = !![]),
        await _0x565f3e[_0x28921c(0x17c)](),
        _0x565f3e
      );
    } catch (_0x4855d6) {
      throw _0x4855d6;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x16a)] = async (_0x495e64) => {
    const _0x51002d = _0x298462;
    try {
      const _0x3d39aa = await Room[_0x51002d(0x143)](_0x495e64);
      if (!_0x3d39aa) {
        const _0x1a2cdb = httpStatus[_0x51002d(0x194)],
          _0x5a9633 = errors[_0x51002d(0x130)][_0x51002d(0x148)];
        throw new ApiError(_0x1a2cdb, _0x5a9633);
      }
      return (
        (_0x3d39aa[_0x51002d(0x171)] = ![]),
        await _0x3d39aa[_0x51002d(0x17c)](),
        _0x3d39aa
      );
    } catch (_0xbe5477) {
      throw _0xbe5477;
    }
  }),
  (module[_0x298462(0x146)][_0x298462(0x14d)] = async (
    _0xb1729f,
    _0x46c4d8,
    _0x2b1e29
  ) => {
    const _0x6573f0 = _0x298462;
    try {
      const _0xbbcb6a = await this[_0x6573f0(0x135)](_0xb1729f, _0x46c4d8);
      if (!_0x2b1e29) return _0xbbcb6a;
      return _0xbbcb6a[_0x6573f0(0x16e)](
        (_0xe13d82) =>
          _0xe13d82["firstname"][_0x6573f0(0x154)](_0x2b1e29) ||
          _0xe13d82[_0x6573f0(0x166)]["includes"](_0x2b1e29)
      );
    } catch (_0x3c91c2) {
      throw _0x3c91c2;
    }
  });
function _0x2814() {
  const _0x135fdc = [
    "searchRoomMembers",
    "createdRooms",
    "notJoined",
    "invalidType",
    "unshift",
    "pinRoom",
    "FORBIDDEN",
    "includes",
    "users",
    "public",
    "alreadyJoined",
    "unblockUsersFromChatting",
    "author",
    "files",
    "name",
    "../../models/assignment.model",
    "chatDisabled",
    "getMappedRooms",
    "forEach",
    "find",
    "delete",
    "map",
    "switchRoomToPublic",
    "file",
    "12580rKMmYa",
    "lastname",
    "../../models/room.model",
    "aggregate",
    "1148SznhPt",
    "unpinRoom",
    "UNAUTHORIZED",
    "message",
    "../user/users.service",
    "filter",
    "./messages.service",
    "deleteMany",
    "isPinned",
    "noRooms",
    "findRoomByName",
    "getAllRooms",
    "query",
    "assignments",
    "../storage/localStorage.service",
    "toggleChatDisabled",
    "joinRoom",
    "status",
    "resetRoom",
    "save",
    "333nhcWqo",
    "5162958UCfqdG",
    "../../models/submission.model",
    "incorrectCode",
    "BAD_GATEWAY",
    "role",
    "textScore",
    "getAllPublicRooms",
    "7022752WlEviM",
    "../../models/message.model",
    "toString",
    "ObjectId",
    "code",
    "members",
    "toggleShowName",
    "changeRoomName",
    "blockList",
    "body",
    "Types",
    "1334170vFVjOa",
    "483310gryUdY",
    "deleteRoomAssets",
    "user",
    "NOT_FOUND",
    "private",
    "blockUsersFromChatting",
    "rooms",
    "findByIdAndDelete",
    "invalidCode",
    "switchRoomToPrivate",
    "unauthorized",
    "getRoomMembers",
    "unjoinUsersFromRoom",
    "url",
    "findRoomById",
    "BAD_REQUEST",
    "messages",
    "pinnedMessages",
    "deleteFile",
    "reachedMaximumRooms",
    "$members",
    "deleteMembers",
    "showName",
    "../../models/user.model",
    "joinedRooms",
    "findById",
    "5095629ryUJyf",
    "../../middleware/apiError",
    "exports",
    "3vfMENa",
    "notFound",
    "length",
    "deleteRoom",
    "_id",
    "208188eXrhWl",
  ];
  _0x2814 = function () {
    return _0x135fdc;
  };
  return _0x2814();
}
