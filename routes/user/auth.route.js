const _0xcfe21d = _0x450c;
function _0x450c(_0x2e3379, _0x2f813d) {
  const _0xd5b437 = _0xd5b4();
  return (
    (_0x450c = function (_0x450c89, _0x519683) {
      _0x450c89 = _0x450c89 - 0x76;
      let _0x14c4ba = _0xd5b437[_0x450c89];
      return _0x14c4ba;
    }),
    _0x450c(_0x2e3379, _0x2f813d)
  );
}
function _0xd5b4() {
  const _0x4fa31e = [
    "743795fCPmNW",
    "140320LFkNzR",
    "251180fPfPmV",
    "7RkjSrL",
    "/login",
    "2789384rSbows",
    "/register",
    "exports",
    "post",
    "express",
    "1417014onymLt",
    "1394004DrexWq",
    "registerValidator",
    "12140920ZAcOkk",
    "../../middleware/validation/auth",
    "../../controllers",
    "loginValidator",
  ];
  _0xd5b4 = function () {
    return _0x4fa31e;
  };
  return _0xd5b4();
}
(function (_0x2c53fb, _0x3e307c) {
  const _0x27a0a6 = _0x450c,
    _0x2053e1 = _0x2c53fb();
  while (!![]) {
    try {
      const _0x52f87e =
        -parseInt(_0x27a0a6(0x7a)) / 0x1 +
        parseInt(_0x27a0a6(0x7b)) / 0x2 +
        parseInt(_0x27a0a6(0x85)) / 0x3 +
        -parseInt(_0x27a0a6(0x7f)) / 0x4 +
        parseInt(_0x27a0a6(0x7c)) / 0x5 +
        (parseInt(_0x27a0a6(0x84)) / 0x6) * (-parseInt(_0x27a0a6(0x7d)) / 0x7) +
        parseInt(_0x27a0a6(0x76)) / 0x8;
      if (_0x52f87e === _0x3e307c) break;
      else _0x2053e1["push"](_0x2053e1["shift"]());
    } catch (_0x3f80e5) {
      _0x2053e1["push"](_0x2053e1["shift"]());
    }
  }
})(_0xd5b4, 0x67d99);
const { Router } = require(_0xcfe21d(0x83)),
  router = Router(),
  { authController } = require(_0xcfe21d(0x78)),
  validator = require(_0xcfe21d(0x77));
router[_0xcfe21d(0x82)](
  _0xcfe21d(0x80),
  validator[_0xcfe21d(0x86)],
  authController["register"]
),
  router[_0xcfe21d(0x82)](
    _0xcfe21d(0x7e),
    validator[_0xcfe21d(0x79)],
    authController["signin"]
  ),
  (module[_0xcfe21d(0x81)] = router);
