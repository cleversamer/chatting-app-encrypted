const _0x529174 = _0x805f;
(function (_0x61ea65, _0xf41401) {
  const _0x3da425 = _0x805f,
    _0x55e0f6 = _0x61ea65();
  while (!![]) {
    try {
      const _0x38ca1c =
        (-parseInt(_0x3da425(0x89)) / 0x1) * (parseInt(_0x3da425(0x8f)) / 0x2) +
        -parseInt(_0x3da425(0x9c)) / 0x3 +
        (-parseInt(_0x3da425(0x91)) / 0x4) *
          (-parseInt(_0x3da425(0x99)) / 0x5) +
        parseInt(_0x3da425(0x9b)) / 0x6 +
        (-parseInt(_0x3da425(0x90)) / 0x7) *
          (-parseInt(_0x3da425(0x9f)) / 0x8) +
        -parseInt(_0x3da425(0x8a)) / 0x9 +
        -parseInt(_0x3da425(0x8d)) / 0xa;
      if (_0x38ca1c === _0xf41401) break;
      else _0x55e0f6["push"](_0x55e0f6["shift"]());
    } catch (_0x8e60ea) {
      _0x55e0f6["push"](_0x55e0f6["shift"]());
    }
  }
})(_0x1954, 0x1f8ec);
function _0x805f(_0x492d73, _0x13598f) {
  const _0x1954ff = _0x1954();
  return (
    (_0x805f = function (_0x805ff5, _0x42fb58) {
      _0x805ff5 = _0x805ff5 - 0x89;
      let _0x204e3f = _0x1954ff[_0x805ff5];
      return _0x204e3f;
    }),
    _0x805f(_0x492d73, _0x13598f)
  );
}
const { Router } = require(_0x529174(0x9e)),
  router = Router(),
  { messagesController } = require(_0x529174(0x8c)),
  auth = require(_0x529174(0x9a));
function _0x1954() {
  const _0x18b181 = [
    "5mfAhSC",
    "../../middleware/auth",
    "1045500WlDqrC",
    "300102FRqyMo",
    "createMessage",
    "express",
    "1125320UvJtkB",
    "post",
    "1509WPKRve",
    "346680vWSics",
    "message",
    "../../controllers",
    "1925610vOWgZi",
    "exports",
    "82mHzQrB",
    "7RrUZah",
    "829316VilSBJ",
    "readOwn",
    "deleteOwn",
    "get",
    "createOwn",
    "delete",
    "/:messageId/poll/vote",
    "/send",
  ];
  _0x1954 = function () {
    return _0x18b181;
  };
  return _0x1954();
}
router[_0x529174(0xa0)](
  _0x529174(0x98),
  auth("createOwn", _0x529174(0x8b)),
  messagesController[_0x529174(0x9d)]
),
  router[_0x529174(0xa0)](
    _0x529174(0x97),
    auth(_0x529174(0x95), _0x529174(0x8b)),
    messagesController["createVote"]
  ),
  router[_0x529174(0x94)](
    "/room/:id",
    auth(_0x529174(0x92), "message"),
    messagesController["getRoomMessages"]
  ),
  router[_0x529174(0x96)](
    "/delete",
    auth(_0x529174(0x93), _0x529174(0x8b)),
    messagesController["deleteMessage"]
  ),
  (module[_0x529174(0x8e)] = router);
