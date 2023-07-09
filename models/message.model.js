const _0xe55b59 = _0x3e20;
function _0x510e() {
  const _0x51635b = [
    "isReply",
    "text",
    "date",
    "mongoose",
    "Types",
    "options",
    "type",
    "toString",
    "Schema",
    "User",
    "poll",
    "findIndex",
    "addVote",
    "1guLLmn",
    "votes",
    "index",
    "exports",
    "image",
    "1808855mYlygH",
    "4655144BnqXQv",
    "userId",
    "631570MfWesv",
    "67186rgaGeo",
    "methods",
    "8UhfaDC",
    "length",
    "number",
    "156DbRhFq",
    "1661rcUAAn",
    "file",
    "video",
    "viewers",
    "708uxVrBA",
    "sender",
    "Room",
    "ObjectId",
    "1800453HECdoW",
    "Message",
    "_id",
    "unshift",
    "2369716gRkkmQ",
    "isPinned",
    "9BYqvKD",
  ];
  _0x510e = function () {
    return _0x51635b;
  };
  return _0x510e();
}
(function (_0x388275, _0x35449d) {
  const _0x822043 = _0x3e20,
    _0x1b3997 = _0x388275();
  while (!![]) {
    try {
      const _0x42ae4b =
        (-parseInt(_0x822043(0x111)) / 0x1) *
          (parseInt(_0x822043(0x101)) / 0x2) +
        (parseInt(_0x822043(0xfd)) / 0x3) * (parseInt(_0x822043(0x11c)) / 0x4) +
        parseInt(_0x822043(0x116)) / 0x5 +
        (-parseInt(_0x822043(0xf4)) / 0x6) *
          (parseInt(_0x822043(0x11a)) / 0x7) +
        parseInt(_0x822043(0x117)) / 0x8 +
        (-parseInt(_0x822043(0x103)) / 0x9) *
          (parseInt(_0x822043(0x119)) / 0xa) +
        (parseInt(_0x822043(0xf5)) / 0xb) * (-parseInt(_0x822043(0xf9)) / 0xc);
      if (_0x42ae4b === _0x35449d) break;
      else _0x1b3997["push"](_0x1b3997["shift"]());
    } catch (_0x390418) {
      _0x1b3997["push"](_0x1b3997["shift"]());
    }
  }
})(_0x510e, 0x9ba36);
const mongoose = require(_0xe55b59(0x107)),
  MESSAGE_TYPES = [
    _0xe55b59(0x105),
    "audio",
    "file",
    _0xe55b59(0x115),
    _0xe55b59(0xf7),
    _0xe55b59(0x10e),
  ],
  CLIENT_SCHEMA = [
    _0xe55b59(0xff),
    _0xe55b59(0x10a),
    "repliedMessage",
    _0xe55b59(0x104),
    _0xe55b59(0x102),
    _0xe55b59(0xfa),
    "receiver",
    "text",
    _0xe55b59(0xf6),
    _0xe55b59(0x109),
    _0xe55b59(0x112),
    _0xe55b59(0x106),
    _0xe55b59(0xf8),
  ],
  messageSchema = new mongoose[_0xe55b59(0x10c)](
    {
      type: {
        type: String,
        enum: MESSAGE_TYPES,
        default: _0xe55b59(0x105),
        required: !![],
      },
      repliedMessage: {
        type: mongoose["Types"][_0xe55b59(0xfc)],
        ref: _0xe55b59(0xfe),
      },
      isReply: { type: Boolean, default: ![] },
      isPinned: { type: Boolean, default: ![] },
      sender: { type: Object, ref: _0xe55b59(0x10d), required: !![] },
      receiver: { type: Object, ref: _0xe55b59(0xfb), required: !![] },
      text: { type: String, trim: !![], default: "" },
      file: { displayName: { type: String }, url: { type: String } },
      options: [
        {
          title: {
            type: String,
            minLength: 0x1,
            maxLength: 0x100,
            required: !![],
            trim: !![],
          },
          votes: { type: Number, default: 0x0 },
        },
      ],
      votes: [
        {
          userId: {
            type: mongoose[_0xe55b59(0x108)][_0xe55b59(0xfc)],
            ref: _0xe55b59(0x10d),
            required: !![],
          },
          optionIndex: { type: Number, required: !![] },
        },
      ],
      viewers: { type: Array, default: [] },
      date: { type: String, required: !![], default: new Date() },
    },
    { minimize: ![] }
  );
function _0x3e20(_0x3d3654, _0x3acdbf) {
  const _0x510ecc = _0x510e();
  return (
    (_0x3e20 = function (_0x3e2073, _0x343876) {
      _0x3e2073 = _0x3e2073 - 0xf4;
      let _0x2baea7 = _0x510ecc[_0x3e2073];
      return _0x2baea7;
    }),
    _0x3e20(_0x3d3654, _0x3acdbf)
  );
}
messageSchema[_0xe55b59(0x113)]({ receiver: -0x1 }),
  (messageSchema[_0xe55b59(0x11b)][_0xe55b59(0x110)] = function (
    _0x14cc0d,
    _0x20fd90
  ) {
    const _0x2e4a9f = _0xe55b59;
    try {
      _0x20fd90 = parseInt(_0x20fd90);
      if (typeof _0x20fd90 !== _0x2e4a9f(0x11e)) return ![];
      if (
        _0x20fd90 >= this[_0x2e4a9f(0x109)][_0x2e4a9f(0x11d)] ||
        _0x20fd90 < 0x0
      )
        return ![];
      const _0x3a39ff = this[_0x2e4a9f(0x112)][_0x2e4a9f(0x10f)](
        (_0x39ff32) =>
          _0x39ff32[_0x2e4a9f(0x118)][_0x2e4a9f(0x10b)]() ===
          _0x14cc0d[_0x2e4a9f(0x10b)]()
      );
      if (_0x3a39ff >= 0x0) return ![];
      return (
        this[_0x2e4a9f(0x112)][_0x2e4a9f(0x100)]({
          userId: _0x14cc0d,
          optionIndex: _0x20fd90,
        }),
        (this[_0x2e4a9f(0x109)][_0x20fd90][_0x2e4a9f(0x112)] =
          this[_0x2e4a9f(0x109)][_0x20fd90][_0x2e4a9f(0x112)] + 0x1),
        !![]
      );
    } catch (_0x3420b9) {
      return ![];
    }
  });
const Message = mongoose["model"](_0xe55b59(0xfe), messageSchema);
module[_0xe55b59(0x114)] = {
  Message: Message,
  MESSAGE_TYPES: MESSAGE_TYPES,
  CLIENT_SCHEMA: CLIENT_SCHEMA,
};
