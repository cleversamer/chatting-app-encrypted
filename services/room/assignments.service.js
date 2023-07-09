const _0x97893f = _0x3693;
function _0x3693(_0x50d5f0, _0x1a553b) {
  const _0x440b0a = _0x440b();
  return (
    (_0x3693 = function (_0x3693bf, _0x18c787) {
      _0x3693bf = _0x3693bf - 0x18d;
      let _0x3d5697 = _0x440b0a[_0x3693bf];
      return _0x3d5697;
    }),
    _0x3693(_0x50d5f0, _0x1a553b)
  );
}
(function (_0x3fa18a, _0x74414a) {
  const _0x5ceaf4 = _0x3693,
    _0x1d3206 = _0x3fa18a();
  while (!![]) {
    try {
      const _0x4bd47c =
        parseInt(_0x5ceaf4(0x1b5)) / 0x1 +
        -parseInt(_0x5ceaf4(0x1ba)) / 0x2 +
        (-parseInt(_0x5ceaf4(0x1d1)) / 0x3) *
          (-parseInt(_0x5ceaf4(0x1ae)) / 0x4) +
        parseInt(_0x5ceaf4(0x1b1)) / 0x5 +
        (-parseInt(_0x5ceaf4(0x1ab)) / 0x6) *
          (parseInt(_0x5ceaf4(0x1ce)) / 0x7) +
        -parseInt(_0x5ceaf4(0x1d2)) / 0x8 +
        (parseInt(_0x5ceaf4(0x197)) / 0x9) * (parseInt(_0x5ceaf4(0x1ad)) / 0xa);
      if (_0x4bd47c === _0x74414a) break;
      else _0x1d3206["push"](_0x1d3206["shift"]());
    } catch (_0x38c178) {
      _0x1d3206["push"](_0x1d3206["shift"]());
    }
  }
})(_0x440b, 0x8ece0);
function _0x440b() {
  const _0x52e9cb = [
    "../../middleware/apiError",
    "aggregate",
    "3161015ArkLMn",
    "displayName",
    "firstname",
    "BAD_REQUEST",
    "1031804wflIhC",
    "room",
    "authorId",
    "toString",
    "Types",
    "2189644gKlBLX",
    "unauthorized",
    "ObjectId",
    "assignments",
    "files",
    "title",
    "_doc",
    "getMySubmissionStatus",
    "members",
    "sort",
    "../../config/errors",
    "compressFiles",
    "map",
    "exports",
    "filter",
    "expiresAt",
    "createAssignment",
    "deleteFile",
    "UNAUTHORIZED",
    "getAssignment",
    "294YNKBhW",
    "notFound",
    "getRoomsActiveAssignments",
    "2847240TqmcuM",
    "8564440bfjRLi",
    "forEach",
    "path",
    "save",
    "downloadAssignmentSubmissions",
    "deleteAssignment",
    "includes",
    "users",
    "url",
    "author",
    "addSubmissionTime",
    "getRoomAssignments",
    "../../models/assignment.model",
    "storeFile",
    "NOT_FOUND",
    "getTime",
    "18rCLcxs",
    "submissions",
    "getAssignmentSubmissions",
    "http-status",
    "rooms",
    "noFile",
    "expired",
    "_id",
    "lastname",
    "originalName",
    "findById",
    "findRoomById",
    "../storage/compress.service",
    "setTime",
    "find",
    "../../models/submission.model",
    "delete",
    "now",
    "push",
    "findOne",
    "119850RirPpt",
    "getRemainingTime",
    "4880840VaEqiC",
    "4YKjrHi",
  ];
  _0x440b = function () {
    return _0x52e9cb;
  };
  return _0x440b();
}
const { ApiError } = require(_0x97893f(0x1af)),
  { Assignment } = require(_0x97893f(0x193)),
  { Submission } = require(_0x97893f(0x1a6)),
  localStorage = require("../storage/localStorage.service"),
  compressService = require(_0x97893f(0x1a3)),
  errors = require(_0x97893f(0x1c4)),
  httpStatus = require(_0x97893f(0x19a)),
  roomsService = require("../room/rooms.service"),
  mongoose = require("mongoose");
(module[_0x97893f(0x1c7)][_0x97893f(0x1ca)] = async (
  _0x1bd08d,
  _0x423e61,
  _0x3c18fe,
  _0x389561,
  _0x157235,
  _0xfdd2d3,
  _0x5e7a66
) => {
  const _0x23371c = _0x97893f;
  try {
    const _0x1353c4 = await roomsService[_0x23371c(0x1a2)](_0x3c18fe);
    if (!_0x1353c4) {
      const _0x319d32 = httpStatus["NOT_FOUND"],
        _0x38239c = errors[_0x23371c(0x19b)][_0x23371c(0x1cf)];
      throw new ApiError(_0x319d32, _0x38239c);
    }
    if (
      _0x1353c4[_0x23371c(0x190)]["toString"]() !==
      _0x1bd08d[_0x23371c(0x19e)][_0x23371c(0x1b8)]()
    ) {
      const _0x444bde = httpStatus[_0x23371c(0x1cc)],
        _0x2972f7 = errors[_0x23371c(0x19b)][_0x23371c(0x1bb)];
      throw new ApiError(_0x444bde, _0x2972f7);
    }
    if (!_0x157235) {
      const _0x6092a0 = httpStatus["BAD_REQUEST"],
        _0x381768 = errors[_0x23371c(0x1bd)][_0x23371c(0x19c)];
      throw new ApiError(_0x6092a0, _0x381768);
    }
    const _0x5479f8 = Date[_0x23371c(0x1a8)](),
      _0x1bec31 = _0x5479f8 + parseInt(_0x389561 * 0xea60),
      _0x3b7a1c = new Date(_0x1bec31),
      _0x4c2b44 = await localStorage["storeFile"](_0x157235, _0x423e61),
      _0x2b4760 = new Assignment({
        title: _0x423e61,
        room: _0x1353c4[_0x23371c(0x19e)],
        file: {
          displayName: _0xfdd2d3 || _0x4c2b44[_0x23371c(0x1a0)],
          url: _0x4c2b44[_0x23371c(0x1d4)],
        },
        expiresAt: _0x3b7a1c,
        clientDate: _0x5e7a66,
      });
    return (
      await _0x2b4760[_0x23371c(0x1d5)](),
      { ..._0x2b4760["_doc"], remainingTime: _0x2b4760[_0x23371c(0x1ac)]() }
    );
  } catch (_0x49fb9f) {
    throw _0x49fb9f;
  }
}),
  (module[_0x97893f(0x1c7)][_0x97893f(0x1cd)] = async (_0x43918f) => {
    const _0x4bbe26 = _0x97893f;
    try {
      let _0x564ba4 = await Assignment[_0x4bbe26(0x1b0)]([
        { $match: { _id: new mongoose["Types"][_0x4bbe26(0x1bc)](_0x43918f) } },
        {
          $lookup: {
            from: _0x4bbe26(0x19b),
            localField: _0x4bbe26(0x1b6),
            foreignField: _0x4bbe26(0x19e),
            as: _0x4bbe26(0x1b6),
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
        (_0x564ba4 = _0x564ba4[_0x4bbe26(0x1c6)]((_0x187220) => ({
          ..._0x187220,
          remainingTime: Assignment[_0x4bbe26(0x1ac)](
            _0x187220[_0x4bbe26(0x1c9)]
          ),
        }))),
        _0x564ba4[0x0]
      );
    } catch (_0x39e38d) {
      throw _0x39e38d;
    }
  }),
  (module[_0x97893f(0x1c7)][_0x97893f(0x192)] = async (_0x40b8ea) => {
    const _0x3e58c2 = _0x97893f;
    try {
      const _0x12f87e = await roomsService["findRoomById"](_0x40b8ea);
      if (!_0x12f87e) {
        const _0x230c05 = httpStatus[_0x3e58c2(0x195)],
          _0x4e0840 = errors[_0x3e58c2(0x19b)][_0x3e58c2(0x1cf)];
        throw new ApiError(_0x230c05, _0x4e0840);
      }
      let _0x1c3c7d = await Assignment[_0x3e58c2(0x1a5)]({
        room: new mongoose[_0x3e58c2(0x1b9)]["ObjectId"](_0x40b8ea),
      })[_0x3e58c2(0x1c3)]({ _id: -0x1 });
      return (
        (_0x1c3c7d = _0x1c3c7d["map"]((_0x101b2a) => ({
          ..._0x101b2a[_0x3e58c2(0x1c0)],
          remainingTime: _0x101b2a[_0x3e58c2(0x1ac)](),
          room: [_0x12f87e],
        }))),
        _0x1c3c7d
      );
    } catch (_0xe804ab) {
      throw _0xe804ab;
    }
  }),
  (module[_0x97893f(0x1c7)][_0x97893f(0x191)] = async (
    _0x90d4bc,
    _0x47e39c,
    _0x4f057c,
    _0x2fcd6c
  ) => {
    const _0x596033 = _0x97893f;
    try {
      const _0x444abe = await roomsService["findRoomById"](_0x47e39c);
      if (!_0x444abe) {
        const _0xc5fd2f = httpStatus[_0x596033(0x195)],
          _0x12bf51 = errors["rooms"][_0x596033(0x1cf)];
        throw new ApiError(_0xc5fd2f, _0x12bf51);
      }
      const _0x50fb06 = await Assignment[_0x596033(0x1a1)](_0x4f057c);
      if (!_0x50fb06) {
        const _0x47ee9c = httpStatus[_0x596033(0x195)],
          _0x2024c8 = errors[_0x596033(0x1bd)][_0x596033(0x1cf)];
        throw new ApiError(_0x47ee9c, _0x2024c8);
      }
      if (
        _0x444abe["author"][_0x596033(0x1b8)]() !==
        _0x90d4bc[_0x596033(0x19e)][_0x596033(0x1b8)]()
      ) {
        const _0x190238 = httpStatus[_0x596033(0x1cc)],
          _0x3f1647 = errors[_0x596033(0x19b)][_0x596033(0x1bb)];
        throw new ApiError(_0x190238, _0x3f1647);
      }
      const _0x1fcef7 = new Date(_0x50fb06["expiresAt"]),
        _0x25f44d = new Date();
      return (
        _0x25f44d[_0x596033(0x1a4)](
          _0x1fcef7[_0x596033(0x196)]() +
            parseInt(_0x2fcd6c) * 0x3c * 0x3c * 0x3e8
        ),
        (_0x50fb06[_0x596033(0x1c9)] = _0x25f44d),
        await _0x50fb06[_0x596033(0x1d5)](),
        {
          ..._0x50fb06[_0x596033(0x1c0)],
          remainingTime: _0x50fb06[_0x596033(0x1ac)](),
        }
      );
    } catch (_0x31d620) {
      throw _0x31d620;
    }
  }),
  (module[_0x97893f(0x1c7)]["createSubmission"] = async (
    _0x57d30d,
    _0x4408fa,
    _0x5c99f5,
    _0x482824,
    _0x526372,
    _0x5a4e9c,
    _0x1f4885,
    _0x329710,
    _0x356be0
  ) => {
    const _0x288163 = _0x97893f;
    try {
      const _0x429608 = await roomsService["findRoomById"](_0x4408fa);
      if (!_0x429608) {
        const _0x97861d = httpStatus[_0x288163(0x195)],
          _0x51b19f = errors[_0x288163(0x19b)]["notFound"];
        throw new ApiError(_0x97861d, _0x51b19f);
      }
      const _0x5e370f = await Assignment["findById"](_0x5c99f5);
      if (!_0x5e370f) {
        const _0x178937 = httpStatus[_0x288163(0x195)],
          _0x5eb1ab = errors[_0x288163(0x1bd)][_0x288163(0x1cf)];
        throw new ApiError(_0x178937, _0x5eb1ab);
      }
      if (
        !_0x429608[_0x288163(0x1c2)][_0x288163(0x18d)](
          _0x57d30d[_0x288163(0x19e)][_0x288163(0x1b8)]()
        ) &&
        _0x429608[_0x288163(0x190)][_0x288163(0x1b8)]() !==
          _0x57d30d["_id"]["toString"]()
      ) {
        const _0x519b2d = httpStatus["UNAUTHORIZED"],
          _0x2fc8b3 = errors[_0x288163(0x19b)]["notJoined"];
        throw new ApiError(_0x519b2d, _0x2fc8b3);
      }
      const _0x1d1b36 = new Date(_0x5e370f[_0x288163(0x1c9)]) < new Date();
      if (_0x1d1b36) {
        const _0x5e963a = httpStatus[_0x288163(0x195)],
          _0xc287a2 = errors["assignments"][_0x288163(0x19d)];
        throw new ApiError(_0x5e963a, _0xc287a2);
      }
      if (!_0x482824 && !_0x526372 && !_0x5a4e9c) {
        const _0x5cdb27 = httpStatus[_0x288163(0x1b4)],
          _0x12ca90 = errors[_0x288163(0x1bd)]["noSubmissionFiles"];
        throw new ApiError(_0x5cdb27, _0x12ca90);
      }
      const _0x4a27f0 = new Submission({
        authorId: _0x57d30d["_id"],
        roomId: _0x429608[_0x288163(0x19e)],
        assignmentId: _0x5e370f[_0x288163(0x19e)],
      });
      if (_0x482824) {
        const _0x26e25f =
            "1_" + _0x57d30d["firstname"] + "_" + _0x57d30d[_0x288163(0x19f)],
          _0x5061e4 = await localStorage[_0x288163(0x194)](
            _0x482824,
            _0x26e25f
          );
        _0x4a27f0["files"][_0x288163(0x1a9)]({
          displayName: _0x1f4885,
          url: _0x5061e4["path"],
        });
      }
      if (_0x526372) {
        const _0x3c3cfb =
            "2_" + _0x57d30d["firstname"] + "_" + _0x57d30d[_0x288163(0x19f)],
          _0x3452f8 = await localStorage[_0x288163(0x194)](
            _0x526372,
            _0x3c3cfb
          );
        _0x4a27f0[_0x288163(0x1be)]["push"]({
          displayName: _0x329710,
          url: _0x3452f8[_0x288163(0x1d4)],
        });
      }
      if (_0x5a4e9c) {
        const _0x3dc9c8 =
            "3_" +
            _0x57d30d[_0x288163(0x1b3)] +
            "_" +
            _0x57d30d[_0x288163(0x19f)],
          _0x38290d = await localStorage[_0x288163(0x194)](
            _0x5a4e9c,
            _0x3dc9c8
          );
        _0x4a27f0[_0x288163(0x1be)][_0x288163(0x1a9)]({
          displayName: _0x356be0,
          url: _0x38290d[_0x288163(0x1d4)],
        });
      }
      return (
        await _0x4a27f0["save"](),
        (_0x5e370f[_0x288163(0x198)] = _0x5e370f[_0x288163(0x198)] + 0x1),
        await _0x5e370f["save"](),
        _0x4a27f0
      );
    } catch (_0xafe0de) {
      throw _0xafe0de;
    }
  }),
  (module[_0x97893f(0x1c7)]["getAssignmentSubmissions"] = async (
    _0x154294,
    _0x5a8584,
    _0x1a410e
  ) => {
    const _0x11b501 = _0x97893f;
    try {
      const _0x1e54fa = await roomsService["findRoomById"](_0x1a410e);
      if (!_0x1e54fa) {
        const _0x582673 = httpStatus["NOT_FOUND"],
          _0x4d0e86 = errors[_0x11b501(0x19b)][_0x11b501(0x1cf)];
        throw new ApiError(_0x582673, _0x4d0e86);
      }
      if (
        _0x1e54fa[_0x11b501(0x190)][_0x11b501(0x1b8)]() !==
        _0x154294[_0x11b501(0x19e)][_0x11b501(0x1b8)]()
      ) {
        const _0x2a9708 = httpStatus[_0x11b501(0x1cc)],
          _0x177b0c = errors[_0x11b501(0x19b)][_0x11b501(0x1bb)];
        throw new ApiError(_0x2a9708, _0x177b0c);
      }
      const _0x5d65ad = await Assignment["findById"](_0x5a8584);
      if (!_0x5d65ad) {
        const _0x40b01a = httpStatus[_0x11b501(0x195)],
          _0x375430 = errors["assignments"][_0x11b501(0x1cf)];
        throw new ApiError(_0x40b01a, _0x375430);
      }
      const _0x5cf1e2 = await Submission["aggregate"]([
        { $match: { assignmentId: _0x5d65ad[_0x11b501(0x19e)] } },
        {
          $lookup: {
            from: _0x11b501(0x18e),
            localField: _0x11b501(0x1b7),
            foreignField: _0x11b501(0x19e),
            as: "author",
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
      return _0x5cf1e2;
    } catch (_0x263172) {
      throw _0x263172;
    }
  }),
  (module["exports"][_0x97893f(0x1d6)] = async (
    _0x1b7377,
    _0x5edc0f,
    _0xae6c51
  ) => {
    const _0x997c6 = _0x97893f;
    try {
      const _0x1eeb53 = await Assignment["findById"](_0x5edc0f),
        _0x5bcfbc = await roomsService[_0x997c6(0x1a2)](_0xae6c51),
        _0x2c4617 = await this[_0x997c6(0x199)](
          _0x1b7377,
          _0x5edc0f,
          _0xae6c51
        ),
        _0x3beab1 = [];
      _0x2c4617[_0x997c6(0x1d3)]((_0x3870cb) => {
        const _0x62644 = _0x997c6,
          _0x3c2fd9 = _0x3870cb[_0x62644(0x1be)][_0x62644(0x1c6)](
            (_0x5e2779) => ({
              name: _0x5e2779[_0x62644(0x1b2)],
              path: _0x5e2779[_0x62644(0x18f)],
            })
          );
        _0x3beab1[_0x62644(0x1a9)](..._0x3c2fd9);
      });
      const _0xd463f = _0x5bcfbc["name"] + "_" + _0x1eeb53[_0x997c6(0x1bf)],
        _0x323458 = await compressService[_0x997c6(0x1c5)](_0xd463f, _0x3beab1);
      return _0x323458;
    } catch (_0x4cf6cb) {
      throw _0x4cf6cb;
    }
  }),
  (module["exports"][_0x97893f(0x1c1)] = async (_0x1e3a8a, _0x563678) => {
    const _0x50020d = _0x97893f;
    try {
      const _0x2c2b37 = {
          authorId: _0x1e3a8a[_0x50020d(0x19e)],
          assignmentId: new mongoose["Types"][_0x50020d(0x1bc)](_0x563678),
        },
        _0x20b742 = await Submission[_0x50020d(0x1aa)](_0x2c2b37);
      return !!_0x20b742;
    } catch (_0x39a838) {
      throw _0x39a838;
    }
  }),
  (module[_0x97893f(0x1c7)][_0x97893f(0x1d0)] = async (_0x596a83 = []) => {
    const _0x152715 = _0x97893f;
    try {
      _0x596a83 = _0x596a83[_0x152715(0x1c6)](
        (_0xe3c3d6) => new mongoose["Types"][_0x152715(0x1bc)](_0xe3c3d6)
      );
      let _0x46455f = await Assignment[_0x152715(0x1b0)]([
        { $match: { room: { $in: _0x596a83 } } },
        {
          $lookup: {
            from: _0x152715(0x19b),
            localField: _0x152715(0x1b6),
            foreignField: _0x152715(0x19e),
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
        (_0x46455f = _0x46455f[_0x152715(0x1c8)](
          (_0x56ac17) => new Date(_0x56ac17["expiresAt"]) - new Date() > 0x0
        )),
        _0x46455f[_0x152715(0x1c6)]((_0x587a42) => ({
          ..._0x587a42,
          remainingTime: Assignment[_0x152715(0x1ac)](_0x587a42["expiresAt"]),
        }))
      );
    } catch (_0x396095) {
      throw _0x396095;
    }
  }),
  (module["exports"][_0x97893f(0x1d7)] = async (_0x9ccf13) => {
    const _0x2c9c3d = _0x97893f;
    try {
      const _0x49f8b1 = await Assignment[_0x2c9c3d(0x1a1)](_0x9ccf13);
      if (!_0x49f8b1) {
        const _0x550b56 = httpStatus[_0x2c9c3d(0x195)],
          _0x90bec4 = errors["assignments"][_0x2c9c3d(0x1cf)];
        throw new ApiError(_0x550b56, _0x90bec4);
      }
      await localStorage[_0x2c9c3d(0x1cb)](_0x49f8b1["file"]["url"]);
      const _0x2b9f07 = await Submission[_0x2c9c3d(0x1a5)]({
        assignmentId: _0x49f8b1[_0x2c9c3d(0x19e)],
      });
      _0x2b9f07[_0x2c9c3d(0x1d3)](async (_0x133cbd) => {
        const _0x526340 = _0x2c9c3d;
        _0x133cbd[_0x526340(0x1be)]["forEach"](async (_0x9a7d81) => {
          const _0x521040 = _0x526340;
          await localStorage[_0x521040(0x1cb)](_0x9a7d81[_0x521040(0x18f)]);
        }),
          await _0x133cbd[_0x526340(0x1a7)]();
      }),
        await _0x49f8b1[_0x2c9c3d(0x1a7)]();
    } catch (_0x53da7b) {
      throw _0x53da7b;
    }
  });
