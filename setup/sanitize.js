const _0x155045 = _0x1f07;
function _0x234c() {
  const _0x5b1ad5 = [
    "json",
    "urlencoded",
    "29464CoftGS",
    "835165XOhbkQ",
    "uploads",
    "use",
    "555768MFxKWG",
    "818208PTkRUR",
    "175UrvCcf",
    "../middleware/apiError",
    "102856dTbGpr",
    "express",
    "289791nLeDid",
    "1027884YSJncE",
  ];
  _0x234c = function () {
    return _0x5b1ad5;
  };
  return _0x234c();
}
(function (_0x247e1d, _0x1256cc) {
  const _0x2497f1 = _0x1f07,
    _0x2fb2d8 = _0x247e1d();
  while (!![]) {
    try {
      const _0xd61786 =
        -parseInt(_0x2497f1(0xe1)) / 0x1 +
        parseInt(_0x2497f1(0xe9)) / 0x2 +
        parseInt(_0x2497f1(0xe2)) / 0x3 +
        -parseInt(_0x2497f1(0xed)) / 0x4 +
        -parseInt(_0x2497f1(0xe6)) / 0x5 +
        parseInt(_0x2497f1(0xea)) / 0x6 +
        (parseInt(_0x2497f1(0xeb)) / 0x7) * (-parseInt(_0x2497f1(0xe5)) / 0x8);
      if (_0xd61786 === _0x1256cc) break;
      else _0x2fb2d8["push"](_0x2fb2d8["shift"]());
    } catch (_0x431b2c) {
      _0x2fb2d8["push"](_0x2fb2d8["shift"]());
    }
  }
})(_0x234c, 0x2c7fb);
function _0x1f07(_0x1c4961, _0x288885) {
  const _0x234c2f = _0x234c();
  return (
    (_0x1f07 = function (_0x1f0787, _0xfb1a2f) {
      _0x1f0787 = _0x1f0787 - 0xe0;
      let _0x4f54fb = _0x234c2f[_0x1f0787];
      return _0x4f54fb;
    }),
    _0x1f07(_0x1c4961, _0x288885)
  );
}
const express = require(_0x155045(0xe0)),
  upload = require("express-fileupload"),
  { limitHandler } = require(_0x155045(0xec));
module["exports"] = (_0x13b115) => {
  const _0x5e234a = _0x155045;
  _0x13b115[_0x5e234a(0xe8)](
    upload({
      limits: { fileSize: 0x5 * 0x400 * 0x400 },
      abortOnLimit: !![],
      limitHandler: limitHandler,
    })
  ),
    _0x13b115[_0x5e234a(0xe8)](express[_0x5e234a(0xe3)]()),
    _0x13b115[_0x5e234a(0xe8)](express[_0x5e234a(0xe4)]({ extended: !![] })),
    _0x13b115[_0x5e234a(0xe8)](express["static"](_0x5e234a(0xe7)));
};
