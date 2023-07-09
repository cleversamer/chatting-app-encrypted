const _0x124166 = _0x2a3c;
function _0x2a3c(_0x39e2cb, _0x36f6c3) {
  const _0x4e946f = _0x4e94();
  return (
    (_0x2a3c = function (_0x2a3c41, _0x2a3a1d) {
      _0x2a3c41 = _0x2a3c41 - 0x118;
      let _0x33db02 = _0x4e946f[_0x2a3c41];
      return _0x33db02;
    }),
    _0x2a3c(_0x39e2cb, _0x36f6c3)
  );
}
(function (_0xe05d8c, _0x49dfc1) {
  const _0x2ef975 = _0x2a3c,
    _0x34023c = _0xe05d8c();
  while (!![]) {
    try {
      const _0x107cd9 =
        -parseInt(_0x2ef975(0x12a)) / 0x1 +
        parseInt(_0x2ef975(0x129)) / 0x2 +
        parseInt(_0x2ef975(0x120)) / 0x3 +
        (-parseInt(_0x2ef975(0x125)) / 0x4) *
          (-parseInt(_0x2ef975(0x121)) / 0x5) +
        parseInt(_0x2ef975(0x11b)) / 0x6 +
        (-parseInt(_0x2ef975(0x11f)) / 0x7) *
          (-parseInt(_0x2ef975(0x119)) / 0x8) +
        (parseInt(_0x2ef975(0x11d)) / 0x9) *
          (-parseInt(_0x2ef975(0x126)) / 0xa);
      if (_0x107cd9 === _0x49dfc1) break;
      else _0x34023c["push"](_0x34023c["shift"]());
    } catch (_0x5b420e) {
      _0x34023c["push"](_0x34023c["shift"]());
    }
  }
})(_0x4e94, 0x4dc84);
const mongoose = require(_0x124166(0x127)),
  submissionSchema = new mongoose[_0x124166(0x11a)]({
    roomId: {
      type: mongoose[_0x124166(0x124)][_0x124166(0x122)],
      ref: _0x124166(0x123),
      required: !![],
    },
    assignmentId: {
      type: mongoose[_0x124166(0x124)]["ObjectId"],
      ref: _0x124166(0x11e),
      required: !![],
    },
    authorId: {
      type: mongoose[_0x124166(0x124)][_0x124166(0x122)],
      ref: _0x124166(0x128),
      required: !![],
    },
    files: { type: Array },
    date: { type: String, default: new Date() },
  });
submissionSchema["index"]({ roomId: -0x1 }),
  submissionSchema["index"]({ assignmentId: -0x1 });
function _0x4e94() {
  const _0x116acc = [
    "942201iWdDCp",
    "Assignment",
    "3773wWveXr",
    "1380600sPidWz",
    "619390RSjrMh",
    "ObjectId",
    "Room",
    "Types",
    "12bzeMWu",
    "90QUKYMW",
    "mongoose",
    "User",
    "121958NWdeTd",
    "484309MliTPk",
    "Submission",
    "exports",
    "3752sLtYQN",
    "Schema",
    "3597012AyPCrv",
    "model",
  ];
  _0x4e94 = function () {
    return _0x116acc;
  };
  return _0x4e94();
}
const Submission = mongoose[_0x124166(0x11c)](
  _0x124166(0x12b),
  submissionSchema
);
module[_0x124166(0x118)] = { Submission: Submission };
