const _0x5e2f8b = _0x5bd7;
(function (_0x328977, _0x2c0dd4) {
  const _0x3dcda3 = _0x5bd7,
    _0x56e761 = _0x328977();
  while (!![]) {
    try {
      const _0x520ed7 =
        (parseInt(_0x3dcda3(0x183)) / 0x1) *
          (parseInt(_0x3dcda3(0x171)) / 0x2) +
        parseInt(_0x3dcda3(0x18b)) / 0x3 +
        -parseInt(_0x3dcda3(0x174)) / 0x4 +
        (-parseInt(_0x3dcda3(0x17e)) / 0x5) *
          (parseInt(_0x3dcda3(0x189)) / 0x6) +
        -parseInt(_0x3dcda3(0x180)) / 0x7 +
        (-parseInt(_0x3dcda3(0x187)) / 0x8) *
          (parseInt(_0x3dcda3(0x18a)) / 0x9) +
        parseInt(_0x3dcda3(0x170)) / 0xa;
      if (_0x520ed7 === _0x2c0dd4) break;
      else _0x56e761["push"](_0x56e761["shift"]());
    } catch (_0x202a7a) {
      _0x56e761["push"](_0x56e761["shift"]());
    }
  }
})(_0x4368, 0x2f908);
const mongoose = require("mongoose"),
  clientSchema = [
    _0x5e2f8b(0x188),
    "name",
    _0x5e2f8b(0x172),
    _0x5e2f8b(0x173),
    _0x5e2f8b(0x182),
    "pinnedMessages",
    _0x5e2f8b(0x185),
    _0x5e2f8b(0x186),
    _0x5e2f8b(0x177),
    _0x5e2f8b(0x184),
  ],
  roomSchema = new mongoose["Schema"](
    {
      name: { type: String, required: !![], unique: !![], trim: !![] },
      isPinned: { type: Boolean, default: ![] },
      showName: { type: Boolean, default: !![] },
      author: {
        type: mongoose[_0x5e2f8b(0x181)][_0x5e2f8b(0x178)],
        ref: _0x5e2f8b(0x17f),
        required: !![],
      },
      code: { type: String, trim: !![] },
      pinnedMessages: { type: Array, default: [] },
      members: { type: Array, default: [] },
      chatDisabled: { type: Boolean, default: ![] },
      blockList: { type: Array, default: [] },
      status: {
        type: String,
        required: !![],
        enum: [_0x5e2f8b(0x17b), _0x5e2f8b(0x179)],
        default: _0x5e2f8b(0x179),
      },
    },
    { minimize: ![] }
  );
function _0x5bd7(_0x11b290, _0x43b4f4) {
  const _0x4368fb = _0x4368();
  return (
    (_0x5bd7 = function (_0x5bd770, _0x12eb64) {
      _0x5bd770 = _0x5bd770 - 0x170;
      let _0x1b72ad = _0x4368fb[_0x5bd770];
      return _0x1b72ad;
    }),
    _0x5bd7(_0x11b290, _0x43b4f4)
  );
}
roomSchema[_0x5e2f8b(0x176)]({ name: _0x5e2f8b(0x17d) }),
  roomSchema[_0x5e2f8b(0x176)]({ author: -0x1 });
function _0x4368() {
  const _0xadf840 = [
    "Types",
    "author",
    "79UTJkTv",
    "blockList",
    "members",
    "chatDisabled",
    "568YlRwPA",
    "_id",
    "240yHieUt",
    "20097DXiYCB",
    "85278YhmhVL",
    "5753240aHjGFg",
    "9378EhfizV",
    "isPinned",
    "showName",
    "1407936aelfAG",
    "exports",
    "index",
    "status",
    "ObjectId",
    "public",
    "model",
    "private",
    "Room",
    "text",
    "6975wJFXPL",
    "User",
    "1491210VamHPO",
  ];
  _0x4368 = function () {
    return _0xadf840;
  };
  return _0x4368();
}
const Room = mongoose[_0x5e2f8b(0x17a)](_0x5e2f8b(0x17c), roomSchema);
module[_0x5e2f8b(0x175)] = { Room: Room, clientSchema: clientSchema };
