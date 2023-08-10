const _0x3cafdd = _0x3e13;
(function (_0x5d0889, _0x5248dd) {
  const _0x54e56c = _0x3e13,
    _0x4c97a6 = _0x5d0889();
  while (!![]) {
    try {
      const _0x3dfc8b =
        (-parseInt(_0x54e56c(0xf0)) / 0x1) * (parseInt(_0x54e56c(0xd0)) / 0x2) +
        parseInt(_0x54e56c(0xf2)) / 0x3 +
        parseInt(_0x54e56c(0xcf)) / 0x4 +
        (parseInt(_0x54e56c(0xcc)) / 0x5) * (-parseInt(_0x54e56c(0xe2)) / 0x6) +
        -parseInt(_0x54e56c(0xcd)) / 0x7 +
        (-parseInt(_0x54e56c(0xf3)) / 0x8) *
          (-parseInt(_0x54e56c(0xd4)) / 0x9) +
        parseInt(_0x54e56c(0xf6)) / 0xa;
      if (_0x3dfc8b === _0x5248dd) break;
      else _0x4c97a6["push"](_0x4c97a6["shift"]());
    } catch (_0x794c33) {
      _0x4c97a6["push"](_0x4c97a6["shift"]());
    }
  }
})(_0x46cf, 0x4da25);
function _0x3e13(_0x18a05a, _0x35694b) {
  const _0x46cf59 = _0x46cf();
  return (
    (_0x3e13 = function (_0x3e13a6, _0x49dd51) {
      _0x3e13a6 = _0x3e13a6 - 0xbe;
      let _0x390304 = _0x46cf59[_0x3e13a6];
      return _0x390304;
    }),
    _0x3e13(_0x18a05a, _0x35694b)
  );
}
const { ApiError } = require(_0x3cafdd(0xc5)),
  { Assignment } = require(_0x3cafdd(0xde)),
  { Submission } = require(_0x3cafdd(0xef)),
  localStorage = require(_0x3cafdd(0xe6)),
  compressService = require(_0x3cafdd(0xd2)),
  errors = require(_0x3cafdd(0x101)),
  httpStatus = require(_0x3cafdd(0xec)),
  roomsService = require(_0x3cafdd(0xe4)),
  mongoose = require(_0x3cafdd(0xfe));
(module[_0x3cafdd(0xfa)][_0x3cafdd(0xf9)] = async (
  _0x345194,
  _0x4cb7d1,
  _0x5e8edc,
  _0x1d499c,
  _0x4f5314,
  _0x5a4c5e,
  _0x165f32
) => {
  const _0xbf9b0e = _0x3cafdd;
  try {
    const _0x2ee12d = await roomsService["findRoomById"](_0x5e8edc);
    if (!_0x2ee12d) {
      const _0x5cd987 = httpStatus[_0xbf9b0e(0xd6)],
        _0x23868e = errors[_0xbf9b0e(0xd7)][_0xbf9b0e(0xc0)];
      throw new ApiError(_0x5cd987, _0x23868e);
    }
    if (
      _0x2ee12d[_0xbf9b0e(0xbe)][_0xbf9b0e(0xd5)]() !==
      _0x345194[_0xbf9b0e(0xc2)][_0xbf9b0e(0xd5)]()
    ) {
      const _0x18587c = httpStatus[_0xbf9b0e(0xdb)],
        _0x3224a5 = errors[_0xbf9b0e(0xd7)][_0xbf9b0e(0xe3)];
      throw new ApiError(_0x18587c, _0x3224a5);
    }
    if (!_0x4f5314) {
      const _0x317a1c = httpStatus["BAD_REQUEST"],
        _0x532da2 = errors[_0xbf9b0e(0xc8)][_0xbf9b0e(0xdf)];
      throw new ApiError(_0x317a1c, _0x532da2);
    }
    const _0x1c22d2 = Date["now"](),
      _0x34b431 = _0x1c22d2 + parseInt(_0x1d499c * 0xea60),
      _0x40eed2 = new Date(_0x34b431),
      _0x30c030 = await localStorage[_0xbf9b0e(0xc3)](_0x4f5314, _0x4cb7d1),
      _0x43ce76 = new Assignment({
        title: _0x4cb7d1,
        room: _0x2ee12d[_0xbf9b0e(0xc2)],
        file: {
          displayName: _0x5a4c5e || _0x30c030[_0xbf9b0e(0xd1)],
          url: _0x30c030[_0xbf9b0e(0xd9)],
        },
        expiresAt: _0x40eed2,
        clientDate: _0x165f32,
      });
    return (
      await _0x43ce76[_0xbf9b0e(0xe9)](),
      {
        ..._0x43ce76[_0xbf9b0e(0xbf)],
        remainingTime: _0x43ce76[_0xbf9b0e(0xee)](),
      }
    );
  } catch (_0x41de24) {
    throw _0x41de24;
  }
}),
  (module[_0x3cafdd(0xfa)][_0x3cafdd(0x103)] = async (_0x4605ad) => {
    const _0xf986a2 = _0x3cafdd;
    try {
      let _0xff0b58 = await Assignment[_0xf986a2(0x106)]([
        { $match: { _id: new mongoose["Types"]["ObjectId"](_0x4605ad) } },
        {
          $lookup: {
            from: _0xf986a2(0xd7),
            localField: _0xf986a2(0x107),
            foreignField: _0xf986a2(0xc2),
            as: "room",
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
      return (
        (_0xff0b58 = _0xff0b58[_0xf986a2(0xe1)]((_0x14af25) => ({
          ..._0x14af25,
          remainingTime: Assignment[_0xf986a2(0xee)](
            _0x14af25[_0xf986a2(0xc6)]
          ),
        }))),
        _0xff0b58[0x0]
      );
    } catch (_0x730950) {
      throw _0x730950;
    }
  }),
  (module[_0x3cafdd(0xfa)][_0x3cafdd(0xcb)] = async (_0x1cc449) => {
    const _0x18b0e1 = _0x3cafdd;
    try {
      const _0x28ced3 = await roomsService[_0x18b0e1(0xeb)](_0x1cc449);
      if (!_0x28ced3) {
        const _0x39392f = httpStatus[_0x18b0e1(0xd6)],
          _0x215e9b = errors[_0x18b0e1(0xd7)]["notFound"];
        throw new ApiError(_0x39392f, _0x215e9b);
      }
      let _0x3ae007 = await Assignment["find"]({
        room: new mongoose[_0x18b0e1(0xed)]["ObjectId"](_0x1cc449),
      })["sort"]({ _id: -0x1 });
      return (
        (_0x3ae007 = _0x3ae007["map"]((_0x1b6712) => ({
          ..._0x1b6712[_0x18b0e1(0xbf)],
          remainingTime: _0x1b6712["getRemainingTime"](),
          room: [_0x28ced3],
        }))),
        _0x3ae007
      );
    } catch (_0x231106) {
      throw _0x231106;
    }
  }),
  (module[_0x3cafdd(0xfa)][_0x3cafdd(0xe8)] = async (
    _0x8f53c1,
    _0x3df8a1,
    _0x61761e,
    _0x19da3a
  ) => {
    const _0x1b6fd4 = _0x3cafdd;
    try {
      const _0x5177f1 = await roomsService[_0x1b6fd4(0xeb)](_0x3df8a1);
      if (!_0x5177f1) {
        const _0x1e817d = httpStatus[_0x1b6fd4(0xd6)],
          _0x3eb3a7 = errors[_0x1b6fd4(0xd7)][_0x1b6fd4(0xc0)];
        throw new ApiError(_0x1e817d, _0x3eb3a7);
      }
      const _0x16d3c8 = await Assignment[_0x1b6fd4(0xf5)](_0x61761e);
      if (!_0x16d3c8) {
        const _0x522687 = httpStatus["NOT_FOUND"],
          _0x2e080d = errors[_0x1b6fd4(0xc8)][_0x1b6fd4(0xc0)];
        throw new ApiError(_0x522687, _0x2e080d);
      }
      if (
        _0x5177f1[_0x1b6fd4(0xbe)]["toString"]() !==
        _0x8f53c1[_0x1b6fd4(0xc2)][_0x1b6fd4(0xd5)]()
      ) {
        const _0x1438be = httpStatus[_0x1b6fd4(0xdb)],
          _0x351dac = errors["rooms"][_0x1b6fd4(0xe3)];
        throw new ApiError(_0x1438be, _0x351dac);
      }
      const _0x3cd78f = new Date(_0x16d3c8[_0x1b6fd4(0xc6)]),
        _0x24ee90 = new Date();
      return (
        _0x24ee90["setTime"](
          _0x3cd78f[_0x1b6fd4(0xc1)]() +
            parseInt(_0x19da3a) * 0x3c * 0x3c * 0x3e8
        ),
        (_0x16d3c8[_0x1b6fd4(0xc6)] = _0x24ee90),
        await _0x16d3c8["save"](),
        {
          ..._0x16d3c8[_0x1b6fd4(0xbf)],
          remainingTime: _0x16d3c8[_0x1b6fd4(0xee)](),
        }
      );
    } catch (_0x5f483d) {
      throw _0x5f483d;
    }
  }),
  (module[_0x3cafdd(0xfa)][_0x3cafdd(0xf4)] = async (
    _0x4a8e58,
    _0x2e8c64,
    _0x2ee258,
    _0x2cb7cc,
    _0x3f99e4,
    _0xd27bd8,
    _0x4108a2,
    _0x2adb04,
    _0x5351b8
  ) => {
    const _0x42820a = _0x3cafdd;
    try {
      const _0x5e897b = await roomsService[_0x42820a(0xeb)](_0x2e8c64);
      if (!_0x5e897b) {
        const _0x2ee3dc = httpStatus[_0x42820a(0xd6)],
          _0x2c669d = errors[_0x42820a(0xd7)][_0x42820a(0xc0)];
        throw new ApiError(_0x2ee3dc, _0x2c669d);
      }
      const _0x1c32bf = await Assignment["findById"](_0x2ee258);
      if (!_0x1c32bf) {
        const _0x5cdff4 = httpStatus[_0x42820a(0xd6)],
          _0x302269 = errors[_0x42820a(0xc8)][_0x42820a(0xc0)];
        throw new ApiError(_0x5cdff4, _0x302269);
      }
      if (
        !_0x5e897b[_0x42820a(0xc9)]["includes"](
          _0x4a8e58["_id"][_0x42820a(0xd5)]()
        ) &&
        _0x5e897b[_0x42820a(0xbe)]["toString"]() !==
          _0x4a8e58["_id"]["toString"]()
      ) {
        const _0x4b505e = httpStatus["UNAUTHORIZED"],
          _0x3a2aa9 = errors[_0x42820a(0xd7)][_0x42820a(0xdc)];
        throw new ApiError(_0x4b505e, _0x3a2aa9);
      }
      const _0x317732 = new Date(_0x1c32bf[_0x42820a(0xc6)]) < new Date();
      if (_0x317732) {
        const _0x1f5892 = httpStatus[_0x42820a(0xd6)],
          _0x58eaa1 = errors[_0x42820a(0xc8)][_0x42820a(0xfc)];
        throw new ApiError(_0x1f5892, _0x58eaa1);
      }
      if (!_0x2cb7cc && !_0x3f99e4 && !_0xd27bd8) {
        const _0x188dce = httpStatus[_0x42820a(0xea)],
          _0x1c00f2 = errors["assignments"][_0x42820a(0x104)];
        throw new ApiError(_0x188dce, _0x1c00f2);
      }
      const _0x9b5918 = new Submission({
        authorId: _0x4a8e58[_0x42820a(0xc2)],
        roomId: _0x5e897b["_id"],
        assignmentId: _0x1c32bf[_0x42820a(0xc2)],
      });
      if (_0x2cb7cc) {
        const _0x24c5c2 =
            "1_" + _0x4a8e58["firstname"] + "_" + _0x4a8e58["lastname"],
          _0x289e9f = await localStorage[_0x42820a(0xc3)](_0x2cb7cc, _0x24c5c2);
        _0x9b5918[_0x42820a(0x102)]["push"]({
          displayName: _0x4108a2,
          url: _0x289e9f[_0x42820a(0xd9)],
        });
      }
      if (_0x3f99e4) {
        const _0x26879d =
            "2_" +
            _0x4a8e58[_0x42820a(0xff)] +
            "_" +
            _0x4a8e58[_0x42820a(0xfb)],
          _0x1360c7 = await localStorage[_0x42820a(0xc3)](_0x3f99e4, _0x26879d);
        _0x9b5918[_0x42820a(0x102)][_0x42820a(0xce)]({
          displayName: _0x2adb04,
          url: _0x1360c7[_0x42820a(0xd9)],
        });
      }
      if (_0xd27bd8) {
        const _0x294fd1 =
            "3_" +
            _0x4a8e58[_0x42820a(0xff)] +
            "_" +
            _0x4a8e58[_0x42820a(0xfb)],
          _0x5147ac = await localStorage[_0x42820a(0xc3)](_0xd27bd8, _0x294fd1);
        _0x9b5918["files"][_0x42820a(0xce)]({
          displayName: _0x5351b8,
          url: _0x5147ac[_0x42820a(0xd9)],
        });
      }
      return (
        await _0x9b5918[_0x42820a(0xe9)](),
        (_0x1c32bf[_0x42820a(0xe7)] = _0x1c32bf[_0x42820a(0xe7)] + 0x1),
        await _0x1c32bf["save"](),
        _0x9b5918
      );
    } catch (_0x5fd163) {
      throw _0x5fd163;
    }
  }),
  (module[_0x3cafdd(0xfa)]["getAssignmentSubmissions"] = async (
    _0x3326b0,
    _0x432598,
    _0x39ae36
  ) => {
    const _0x2d1e72 = _0x3cafdd;
    try {
      const _0x567f80 = await roomsService[_0x2d1e72(0xeb)](_0x39ae36);
      if (!_0x567f80) {
        const _0x5cc360 = httpStatus["NOT_FOUND"],
          _0x2b34b9 = errors[_0x2d1e72(0xd7)][_0x2d1e72(0xc0)];
        throw new ApiError(_0x5cc360, _0x2b34b9);
      }
      if (
        _0x567f80[_0x2d1e72(0xbe)][_0x2d1e72(0xd5)]() !==
        _0x3326b0[_0x2d1e72(0xc2)]["toString"]()
      ) {
        const _0x71532 = httpStatus[_0x2d1e72(0xdb)],
          _0x42273b = errors[_0x2d1e72(0xd7)][_0x2d1e72(0xe3)];
        throw new ApiError(_0x71532, _0x42273b);
      }
      const _0x102c94 = await Assignment[_0x2d1e72(0xf5)](_0x432598);
      if (!_0x102c94) {
        const _0x36d06b = httpStatus[_0x2d1e72(0xd6)],
          _0x350c50 = errors[_0x2d1e72(0xc8)][_0x2d1e72(0xc0)];
        throw new ApiError(_0x36d06b, _0x350c50);
      }
      const _0x7d6684 = await Submission[_0x2d1e72(0x106)]([
        { $match: { assignmentId: _0x102c94[_0x2d1e72(0xc2)] } },
        {
          $lookup: {
            from: "users",
            localField: _0x2d1e72(0xda),
            foreignField: _0x2d1e72(0xc2),
            as: _0x2d1e72(0xbe),
          },
        },
        {
          $project: {
            _id: 0x1,
            date: 0x1,
            files: 0x1,
            author: { _id: 0x1, firstname: 0x1, lastname: 0x1 },
          },
        },
      ]);
      return _0x7d6684;
    } catch (_0x39f479) {
      throw _0x39f479;
    }
  }),
  (module[_0x3cafdd(0xfa)][_0x3cafdd(0xf8)] = async (
    _0x4e0ac4,
    _0x12bedf,
    _0x8166a9
  ) => {
    const _0x334df8 = _0x3cafdd;
    try {
      const _0x5a0766 = await Assignment[_0x334df8(0xf5)](_0x12bedf),
        _0x390279 = await roomsService[_0x334df8(0xeb)](_0x8166a9),
        _0x269b81 = await this[_0x334df8(0xdd)](
          _0x4e0ac4,
          _0x12bedf,
          _0x8166a9
        ),
        _0x41e35c = [];
      _0x269b81[_0x334df8(0xe0)]((_0x362b85) => {
        const _0x67fcf3 = _0x334df8,
          _0x41690b = _0x362b85[_0x67fcf3(0x102)][_0x67fcf3(0xe1)](
            (_0x505bf1) => ({
              name: _0x505bf1[_0x67fcf3(0xe5)],
              path: _0x505bf1[_0x67fcf3(0x108)],
            })
          );
        _0x41e35c["push"](..._0x41690b);
      });
      const _0x183bf5 = _0x390279[_0x334df8(0xf7)] + "_" + _0x5a0766["title"],
        _0x21d298 = await compressService["compressFiles"](
          _0x183bf5,
          _0x41e35c
        );
      return _0x21d298;
    } catch (_0x5cb242) {
      throw _0x5cb242;
    }
  }),
  (module[_0x3cafdd(0xfa)][_0x3cafdd(0xca)] = async (_0x2d7dc3, _0xd4cd69) => {
    const _0x14ffc0 = _0x3cafdd;
    try {
      const _0x373724 = {
          authorId: _0x2d7dc3[_0x14ffc0(0xc2)],
          assignmentId: new mongoose["Types"][_0x14ffc0(0xf1)](_0xd4cd69),
        },
        _0x3ef53c = await Submission[_0x14ffc0(0xfd)](_0x373724);
      return !!_0x3ef53c;
    } catch (_0x49db59) {
      throw _0x49db59;
    }
  }),
  (module[_0x3cafdd(0xfa)][_0x3cafdd(0xc7)] = async (_0x40667b = []) => {
    const _0x69c9d4 = _0x3cafdd;
    try {
      _0x40667b = _0x40667b[_0x69c9d4(0xe1)](
        (_0x426890) => new mongoose[_0x69c9d4(0xed)][_0x69c9d4(0xf1)](_0x426890)
      );
      let _0x26d7db = await Assignment[_0x69c9d4(0x106)]([
        { $match: { room: { $in: _0x40667b } } },
        {
          $lookup: {
            from: _0x69c9d4(0xd7),
            localField: _0x69c9d4(0x107),
            foreignField: _0x69c9d4(0xc2),
            as: _0x69c9d4(0x107),
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
      return (
        (_0x26d7db = _0x26d7db[_0x69c9d4(0x105)](
          (_0x279692) => new Date(_0x279692[_0x69c9d4(0xc6)]) - new Date() > 0x0
        )),
        _0x26d7db[_0x69c9d4(0xe1)]((_0x8430ff) => ({
          ..._0x8430ff,
          remainingTime: Assignment[_0x69c9d4(0xee)](
            _0x8430ff[_0x69c9d4(0xc6)]
          ),
        }))
      );
    } catch (_0x1f81a8) {
      throw _0x1f81a8;
    }
  }),
  (module[_0x3cafdd(0xfa)]["deleteAssignment"] = async (_0x18001e) => {
    const _0x3663df = _0x3cafdd;
    try {
      const _0x57ac32 = await Assignment[_0x3663df(0xf5)](_0x18001e);
      if (!_0x57ac32) {
        const _0x3377ab = httpStatus[_0x3663df(0xd6)],
          _0x3a4f03 = errors[_0x3663df(0xc8)][_0x3663df(0xc0)];
        throw new ApiError(_0x3377ab, _0x3a4f03);
      }
      await localStorage[_0x3663df(0x100)](
        _0x57ac32[_0x3663df(0xd3)][_0x3663df(0x108)]
      );
      const _0x152da1 = await Submission[_0x3663df(0xd8)]({
        assignmentId: _0x57ac32[_0x3663df(0xc2)],
      });
      _0x152da1[_0x3663df(0xe0)](async (_0x3515f0) => {
        const _0x491f00 = _0x3663df;
        _0x3515f0["files"][_0x491f00(0xe0)](async (_0x8b010d) => {
          const _0x3ab541 = _0x491f00;
          await localStorage[_0x3ab541(0x100)](_0x8b010d[_0x3ab541(0x108)]);
        }),
          await _0x3515f0[_0x491f00(0xc4)]();
      }),
        await _0x57ac32[_0x3663df(0xc4)]();
    } catch (_0x5d03e9) {
      throw _0x5d03e9;
    }
  });
function _0x46cf() {
  const _0x53a054 = [
    "files",
    "getAssignment",
    "noSubmissionFiles",
    "filter",
    "aggregate",
    "room",
    "url",
    "author",
    "_doc",
    "notFound",
    "getTime",
    "_id",
    "storeFile",
    "deleteOne",
    "../../middleware/apiError",
    "expiresAt",
    "getRoomsActiveAssignments",
    "assignments",
    "members",
    "getMySubmissionStatus",
    "getRoomAssignments",
    "5tEKQSj",
    "2862286PDQFXP",
    "push",
    "1819864BttUNq",
    "2598ppauJt",
    "originalName",
    "../storage/compress.service",
    "file",
    "1110447PQjcRc",
    "toString",
    "NOT_FOUND",
    "rooms",
    "find",
    "path",
    "authorId",
    "UNAUTHORIZED",
    "notJoined",
    "getAssignmentSubmissions",
    "../../models/assignment.model",
    "noFile",
    "forEach",
    "map",
    "448524LLmJTU",
    "unauthorized",
    "../room/rooms.service",
    "displayName",
    "../storage/localStorage.service",
    "submissions",
    "addSubmissionTime",
    "save",
    "BAD_REQUEST",
    "findRoomById",
    "http-status",
    "Types",
    "getRemainingTime",
    "../../models/submission.model",
    "6sEYTTa",
    "ObjectId",
    "490980IiYjJr",
    "8jSGXKm",
    "createSubmission",
    "findById",
    "674260PWmybV",
    "name",
    "downloadAssignmentSubmissions",
    "createAssignment",
    "exports",
    "lastname",
    "expired",
    "findOne",
    "mongoose",
    "firstname",
    "deleteFile",
    "../../config/errors",
  ];
  _0x46cf = function () {
    return _0x53a054;
  };
  return _0x46cf();
}
