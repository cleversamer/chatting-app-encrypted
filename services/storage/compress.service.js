const _0x2525cf = _0x56eb;
(function (_0x2d2ccd, _0x438086) {
  const _0x532da4 = _0x56eb,
    _0x3809e2 = _0x2d2ccd();
  while (!![]) {
    try {
      const _0x39909e =
        -parseInt(_0x532da4(0xb8)) / 0x1 +
        (-parseInt(_0x532da4(0xc4)) / 0x2) * (parseInt(_0x532da4(0xba)) / 0x3) +
        -parseInt(_0x532da4(0xc0)) / 0x4 +
        parseInt(_0x532da4(0xbb)) / 0x5 +
        -parseInt(_0x532da4(0xca)) / 0x6 +
        -parseInt(_0x532da4(0xcc)) / 0x7 +
        parseInt(_0x532da4(0xc6)) / 0x8;
      if (_0x39909e === _0x438086) break;
      else _0x3809e2["push"](_0x3809e2["shift"]());
    } catch (_0x30442e) {
      _0x3809e2["push"](_0x3809e2["shift"]());
    }
  }
})(_0x2e8d, 0x31e4e);
function _0x56eb(_0x477ee9, _0x7236b8) {
  const _0x2e8da3 = _0x2e8d();
  return (
    (_0x56eb = function (_0x56ebf4, _0x505fdf) {
      _0x56ebf4 = _0x56ebf4 - 0xb7;
      let _0x2029be = _0x2e8da3[_0x56ebf4];
      return _0x2029be;
    }),
    _0x56eb(_0x477ee9, _0x7236b8)
  );
}
const AdmZip = require(_0x2525cf(0xc7)),
  httpStatus = require(_0x2525cf(0xbf)),
  errors = require(_0x2525cf(0xc5)),
  { ApiError } = require(_0x2525cf(0xc3));
function _0x2e8d() {
  const _0x23bed9 = [
    "2020280OYrzav",
    "forEach",
    "addLocalFile",
    "toLocaleString",
    "http-status",
    "1105536lOghhP",
    "substring",
    "./uploads/",
    "../../middleware/apiError",
    "108OycqyH",
    "../../config/errors",
    "3490232YRGhlo",
    "adm-zip",
    "exports",
    ".zip",
    "716148LpMKLM",
    "system",
    "518476KZsLTx",
    "fileUploadError",
    "writeZip",
    "path",
    "split",
    "115237ZWGuKl",
    "join",
    "2829JWnsuV",
  ];
  _0x2e8d = function () {
    return _0x23bed9;
  };
  return _0x2e8d();
}
module[_0x2525cf(0xc8)]["compressFiles"] = async (
  _0x3b7cf2,
  _0x21bad6 = []
) => {
  const _0x2ad20e = _0x2525cf;
  try {
    const _0x5ed0e4 = new AdmZip(),
      _0x39702b = filterName(_0x3b7cf2 + "_" + getCurrentDate()),
      _0x46dd25 = _0x2ad20e(0xc2) + _0x39702b + _0x2ad20e(0xc9);
    return (
      _0x21bad6[_0x2ad20e(0xbc)]((_0x4ae5cb, _0x4a781b) => {
        const _0x494c40 = _0x2ad20e,
          _0x1ff98a =
            _0x494c40(0xc2) + _0x4ae5cb[_0x494c40(0xcf)][_0x494c40(0xc1)](0x1);
        _0x5ed0e4[_0x494c40(0xbd)](_0x1ff98a);
      }),
      _0x5ed0e4[_0x2ad20e(0xce)](_0x46dd25),
      _0x46dd25
    );
  } catch (_0x32418f) {
    const _0x5b3b09 = httpStatus["BAD_REQUEST"],
      _0x524a3f = errors[_0x2ad20e(0xcb)][_0x2ad20e(0xcd)];
    throw new ApiError(_0x5b3b09, _0x524a3f);
  }
};
const filterName = (_0x3e0daf = "") => {
    const _0x588cde = _0x2525cf;
    return _0x3e0daf[_0x588cde(0xb7)]("\x20")
      ["join"]("_")
      ["split"](":")
      ["join"]("_");
  },
  getCurrentDate = () => {
    const _0x1c5e08 = _0x2525cf;
    let _0x4cc3ad = new Date()[_0x1c5e08(0xbe)]();
    _0x4cc3ad = _0x4cc3ad["split"](",\x20");
    let _0x16d2c7 = _0x4cc3ad[0x0],
      _0x163acc = _0x4cc3ad[0x1]["split"]("\x20"),
      _0x10117f = _0x163acc[0x0]
        [_0x1c5e08(0xb7)](":")
        ["slice"](0x0, 0x2)
        ["join"](":"),
      _0x4cfa2e = _0x163acc[0x1],
      _0x50409a = _0x16d2c7 + "_" + _0x10117f + "_" + _0x4cfa2e;
    return (
      (_0x50409a = _0x50409a[_0x1c5e08(0xb7)]("/")[_0x1c5e08(0xb9)]("-")),
      _0x50409a
    );
  };
