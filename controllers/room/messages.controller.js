const _0x5849d7 = _0x54ea;
(function (_0x14807c, _0x14f7f6) {
  const _0x1ac7bd = _0x54ea,
    _0x4f4aba = _0x14807c();
  while (!![]) {
    try {
      const _0x53aeea =
        -parseInt(_0x1ac7bd(0x1df)) / 0x1 +
        parseInt(_0x1ac7bd(0x1e7)) / 0x2 +
        -parseInt(_0x1ac7bd(0x1e6)) / 0x3 +
        -parseInt(_0x1ac7bd(0x1e3)) / 0x4 +
        (parseInt(_0x1ac7bd(0x1db)) / 0x5) *
          (-parseInt(_0x1ac7bd(0x1f6)) / 0x6) +
        (parseInt(_0x1ac7bd(0x1eb)) / 0x7) *
          (-parseInt(_0x1ac7bd(0x1f2)) / 0x8) +
        (-parseInt(_0x1ac7bd(0x1ed)) / 0x9) *
          (-parseInt(_0x1ac7bd(0x1f7)) / 0xa);
      if (_0x53aeea === _0x14f7f6) break;
      else _0x4f4aba["push"](_0x4f4aba["shift"]());
    } catch (_0x4beefb) {
      _0x4f4aba["push"](_0x4f4aba["shift"]());
    }
  }
})(_0x327e, 0x3a3a4);
const { CLIENT_SCHEMA } = require(_0x5849d7(0x1e0)),
  { messagesService } = require("../../services"),
  localStorage = require("../../services/storage/localStorage.service"),
  httpStatus = require(_0x5849d7(0x1e2)),
  _ = require(_0x5849d7(0x1e5));
(module[_0x5849d7(0x1f3)]["createMessage"] = async (
  _0xc94c74,
  _0x17dde6,
  _0x45f2c3
) => {
  const _0xdb309c = _0x5849d7;
  try {
    const _0x3528a0 = _0xc94c74[_0xdb309c(0x1dc)];
    let {
      type: _0x3e03bb,
      text: _0x42ab45,
      roomId: _0x2504f0,
      date: _0x2c8d30,
      isReply: _0x17081d,
      repliedMessageId: _0x2230d0,
      fileName: _0x99e02e,
      options: _0xc8a4f9,
    } = _0xc94c74["body"];
    const _0x308df3 = _0xc94c74?.[_0xdb309c(0x1f5)]?.[_0xdb309c(0x1f4)],
      _0x4d5aef = await messagesService[_0xdb309c(0x1fa)](
        _0x3528a0,
        _0x3e03bb,
        _0x42ab45,
        _0x2504f0,
        _0x308df3,
        _0x99e02e,
        _0x2c8d30,
        _0x17081d,
        _0x2230d0,
        ![],
        _0xc8a4f9
      );
    _0x17dde6[_0xdb309c(0x1e8)](httpStatus["OK"])["json"](
      _[_0xdb309c(0x1f8)](_0x4d5aef, CLIENT_SCHEMA)
    );
  } catch (_0x1a906c) {
    _0x45f2c3(_0x1a906c);
  }
}),
  (module[_0x5849d7(0x1f3)][_0x5849d7(0x1ee)] = async (
    _0x47dc42,
    _0x4660b4,
    _0x2340b4
  ) => {
    const _0xce2ed7 = _0x5849d7;
    try {
      const _0x11051d = _0x47dc42[_0xce2ed7(0x1dc)],
        { messageId: _0xde4f18 } = _0x47dc42["params"],
        { optionIndex: _0x30cb45 } = _0x47dc42[_0xce2ed7(0x1ef)],
        _0x1684b8 = await messagesService["createVote"](
          _0x11051d,
          _0xde4f18,
          _0x30cb45
        ),
        _0x5b7326 = {
          message: _[_0xce2ed7(0x1f8)](_0x1684b8, CLIENT_SCHEMA),
          user: {
            _id: _0x11051d[_0xce2ed7(0x1e1)],
            avatarUrl: _0x11051d[_0xce2ed7(0x1e4)],
            firstname: _0x11051d[_0xce2ed7(0x1f0)],
            lastname: _0x11051d[_0xce2ed7(0x1ea)],
          },
        };
      _0x4660b4[_0xce2ed7(0x1e8)](httpStatus["OK"])[_0xce2ed7(0x1f9)](
        _0x5b7326
      );
    } catch (_0xb48ff8) {
      _0x2340b4(_0xb48ff8);
    }
  }),
  (module[_0x5849d7(0x1f3)][_0x5849d7(0x1dd)] = async (
    _0x562cc6,
    _0x36d6ba,
    _0x4e9f93
  ) => {
    const _0x3213ab = _0x5849d7;
    try {
      const _0x27c91a = _0x562cc6["user"],
        _0x4964eb = _0x562cc6[_0x3213ab(0x1ec)]["id"],
        _0x100e52 = await messagesService[_0x3213ab(0x1dd)](
          _0x27c91a,
          _0x4964eb
        );
      _0x36d6ba["status"](httpStatus["OK"])["json"]({ messages: _0x100e52 });
    } catch (_0xd87b89) {
      _0x4e9f93(_0xd87b89);
    }
  }),
  (module[_0x5849d7(0x1f3)][_0x5849d7(0x1e9)] = async (
    _0x12437b,
    _0x480c3a,
    _0x2c1d9c
  ) => {
    const _0xee41ed = _0x5849d7;
    try {
      const _0xe5adf = _0x12437b[_0xee41ed(0x1dc)],
        { messageId: _0x30cf52 } = _0x12437b["body"],
        _0x1cf438 = await messagesService[_0xee41ed(0x1e9)](
          _0xe5adf,
          _0x30cf52
        );
      _0x1cf438[_0xee41ed(0x1f4)][_0xee41ed(0x1f1)] &&
        (await localStorage[_0xee41ed(0x1de)](
          _0x1cf438[_0xee41ed(0x1f4)]["url"]
        )),
        _0x480c3a[_0xee41ed(0x1e8)](httpStatus["OK"])[_0xee41ed(0x1f9)](
          _0x1cf438
        );
    } catch (_0x3182f4) {
      _0x2c1d9c(_0x3182f4);
    }
  });
function _0x54ea(_0x1839c9, _0x4114d2) {
  const _0x327ea6 = _0x327e();
  return (
    (_0x54ea = function (_0x54ea6d, _0x6974d7) {
      _0x54ea6d = _0x54ea6d - 0x1db;
      let _0x5b565e = _0x327ea6[_0x54ea6d];
      return _0x5b565e;
    }),
    _0x54ea(_0x1839c9, _0x4114d2)
  );
}
function _0x327e() {
  const _0x79d514 = [
    "2177225kDUGnO",
    "user",
    "getRoomMessages",
    "deleteFile",
    "433869TITeUE",
    "../../models/message.model",
    "_id",
    "http-status",
    "304744RhmeUT",
    "avatarUrl",
    "lodash",
    "563136jSPqMH",
    "302282kQeuOM",
    "status",
    "deleteMessage",
    "lastname",
    "2566781ZPPYGo",
    "params",
    "18ZjwpVI",
    "createVote",
    "body",
    "firstname",
    "url",
    "8UxtgEJ",
    "exports",
    "file",
    "files",
    "6djmAEo",
    "7936270UggZvO",
    "pick",
    "json",
    "createMessage",
  ];
  _0x327e = function () {
    return _0x79d514;
  };
  return _0x327e();
}
