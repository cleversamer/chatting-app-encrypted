function _0x2892() {
  const _0x42ada2 = [
    "status",
    "deleteMessage",
    "json",
    "5ZWTqLi",
    "deleteFile",
    "lodash",
    "params",
    "files",
    "../../services/storage/localStorage.service",
    "firstname",
    "302QqLwnb",
    "5546880KPbVDq",
    "16jpgIoj",
    "exports",
    "170592WbhPJI",
    "getRoomMessages",
    "body",
    "createVote",
    "3304EvEYfu",
    "file",
    "_id",
    "url",
    "../../services",
    "5248398ugTvhc",
    "3562772TNGjgl",
    "811657ArhbWx",
    "createMessage",
    "393633cFTqDf",
    "pick",
    "user",
  ];
  _0x2892 = function () {
    return _0x42ada2;
  };
  return _0x2892();
}
const _0x276a4f = _0x2f6f;
(function (_0x260df3, _0x1cd2f1) {
  const _0x19f7d9 = _0x2f6f,
    _0x1bb461 = _0x260df3();
  while (!![]) {
    try {
      const _0x16c66 =
        (parseInt(_0x19f7d9(0x1f6)) / 0x1) *
          (-parseInt(_0x19f7d9(0x1fe)) / 0x2) +
        -parseInt(_0x19f7d9(0x1fa)) / 0x3 +
        parseInt(_0x19f7d9(0x1e6)) / 0x4 +
        (parseInt(_0x19f7d9(0x1ef)) / 0x5) *
          (parseInt(_0x19f7d9(0x203)) / 0x6) +
        -parseInt(_0x19f7d9(0x1e7)) / 0x7 +
        (parseInt(_0x19f7d9(0x1f8)) / 0x8) *
          (-parseInt(_0x19f7d9(0x1e9)) / 0x9) +
        -parseInt(_0x19f7d9(0x1f7)) / 0xa;
      if (_0x16c66 === _0x1cd2f1) break;
      else _0x1bb461["push"](_0x1bb461["shift"]());
    } catch (_0xa07855) {
      _0x1bb461["push"](_0x1bb461["shift"]());
    }
  }
})(_0x2892, 0x6e3d9);
const { CLIENT_SCHEMA } = require("../../models/message.model"),
  { messagesService } = require(_0x276a4f(0x202)),
  localStorage = require(_0x276a4f(0x1f4)),
  httpStatus = require("http-status"),
  _ = require(_0x276a4f(0x1f1));
function _0x2f6f(_0x4a0bc6, _0x29823a) {
  const _0x28929b = _0x2892();
  return (
    (_0x2f6f = function (_0x2f6f88, _0x565726) {
      _0x2f6f88 = _0x2f6f88 - 0x1e6;
      let _0x47584f = _0x28929b[_0x2f6f88];
      return _0x47584f;
    }),
    _0x2f6f(_0x4a0bc6, _0x29823a)
  );
}
(module[_0x276a4f(0x1f9)][_0x276a4f(0x1e8)] = async (
  _0x434a49,
  _0x5b5c8c,
  _0x5ef958
) => {
  const _0x25feca = _0x276a4f;
  try {
    const _0x3adc90 = _0x434a49[_0x25feca(0x1eb)];
    let {
      type: _0x3d83d9,
      text: _0x3a2af6,
      roomId: _0x4acb62,
      date: _0x240731,
      isReply: _0x1cd429,
      repliedMessageId: _0x678f02,
      fileName: _0x3b4bde,
      options: _0x36f263,
    } = _0x434a49[_0x25feca(0x1fc)];
    const _0x4b5775 = _0x434a49?.[_0x25feca(0x1f3)]?.[_0x25feca(0x1ff)],
      _0x1b9eeb = await messagesService[_0x25feca(0x1e8)](
        _0x3adc90,
        _0x3d83d9,
        _0x3a2af6,
        _0x4acb62,
        _0x4b5775,
        _0x3b4bde,
        _0x240731,
        _0x1cd429,
        _0x678f02,
        ![],
        _0x36f263
      );
    _0x5b5c8c[_0x25feca(0x1ec)](httpStatus["OK"])[_0x25feca(0x1ee)](
      _[_0x25feca(0x1ea)](_0x1b9eeb, CLIENT_SCHEMA)
    );
  } catch (_0xd53fa5) {
    _0x5ef958(_0xd53fa5);
  }
}),
  (module[_0x276a4f(0x1f9)][_0x276a4f(0x1fd)] = async (
    _0x4bd446,
    _0x5ab5f2,
    _0xfa1049
  ) => {
    const _0x475f67 = _0x276a4f;
    try {
      const _0x437781 = _0x4bd446[_0x475f67(0x1eb)],
        { messageId: _0x4061fa } = _0x4bd446["params"],
        { optionIndex: _0x3abb4b } = _0x4bd446["body"],
        _0x42aca0 = await messagesService["createVote"](
          _0x437781,
          _0x4061fa,
          _0x3abb4b
        ),
        _0x19d4fc = {
          message: _[_0x475f67(0x1ea)](_0x42aca0, CLIENT_SCHEMA),
          user: {
            _id: _0x437781[_0x475f67(0x200)],
            firstname: _0x437781[_0x475f67(0x1f5)],
            lastname: _0x437781["lastname"],
          },
        };
      _0x5ab5f2[_0x475f67(0x1ec)](httpStatus["OK"])[_0x475f67(0x1ee)](
        _0x19d4fc
      );
    } catch (_0x37d76a) {
      _0xfa1049(_0x37d76a);
    }
  }),
  (module[_0x276a4f(0x1f9)][_0x276a4f(0x1fb)] = async (
    _0x1a68f9,
    _0x1bf1ca,
    _0x450adf
  ) => {
    const _0x19eccd = _0x276a4f;
    try {
      const _0x2bac33 = _0x1a68f9["user"],
        _0x55823f = _0x1a68f9[_0x19eccd(0x1f2)]["id"],
        _0xea5d67 = await messagesService[_0x19eccd(0x1fb)](
          _0x2bac33,
          _0x55823f
        );
      _0x1bf1ca[_0x19eccd(0x1ec)](httpStatus["OK"])["json"]({
        messages: _0xea5d67,
      });
    } catch (_0x546efa) {
      _0x450adf(_0x546efa);
    }
  }),
  (module[_0x276a4f(0x1f9)]["deleteMessage"] = async (
    _0xcd3917,
    _0x226615,
    _0x23618a
  ) => {
    const _0x51651f = _0x276a4f;
    try {
      const _0xbc13bc = _0xcd3917[_0x51651f(0x1eb)],
        { messageId: _0x594a2e } = _0xcd3917[_0x51651f(0x1fc)],
        _0x443fe9 = await messagesService[_0x51651f(0x1ed)](
          _0xbc13bc,
          _0x594a2e
        );
      _0x443fe9[_0x51651f(0x1ff)][_0x51651f(0x201)] &&
        (await localStorage[_0x51651f(0x1f0)](
          _0x443fe9[_0x51651f(0x1ff)][_0x51651f(0x201)]
        )),
        _0x226615["status"](httpStatus["OK"])[_0x51651f(0x1ee)](_0x443fe9);
    } catch (_0xa01c8c) {
      _0x23618a(_0xa01c8c);
    }
  });
