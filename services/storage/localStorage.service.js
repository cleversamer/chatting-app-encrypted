function _0x564a(_0x287909, _0x525a66) {
  const _0x101210 = _0x1012();
  return (
    (_0x564a = function (_0x564ae7, _0x3fe74e) {
      _0x564ae7 = _0x564ae7 - 0xd9;
      let _0x5ecf61 = _0x101210[_0x564ae7];
      return _0x5ecf61;
    }),
    _0x564a(_0x287909, _0x525a66)
  );
}
const _0x50d104 = _0x564a;
function _0x1012() {
  const _0x368055 = [
    "1759146ooABFm",
    "exports",
    "name",
    "utf8",
    "base64",
    "writeFileSync",
    "crypto",
    "http-status",
    "1661009qFAYnM",
    "substring",
    "./uploads",
    "system",
    "split",
    "4170gwQpcE",
    "from",
    "1qOsGFd",
    "1476232NTvVVR",
    "length",
    "32976oEAGeT",
    "BAD_REQUEST",
    "512698LILZbz",
    "fileUploadError",
    "toLocaleString",
    "join",
    "508655slLTmC",
    "randomUUID",
  ];
  _0x1012 = function () {
    return _0x368055;
  };
  return _0x1012();
}
(function (_0x353216, _0xcf6959) {
  const _0x252743 = _0x564a,
    _0x11f573 = _0x353216();
  while (!![]) {
    try {
      const _0xd528b6 =
        (parseInt(_0x252743(0xeb)) / 0x1) * (parseInt(_0x252743(0xf0)) / 0x2) +
        -parseInt(_0x252743(0xe9)) / 0x3 +
        parseInt(_0x252743(0xec)) / 0x4 +
        parseInt(_0x252743(0xda)) / 0x5 +
        -parseInt(_0x252743(0xdc)) / 0x6 +
        -parseInt(_0x252743(0xe4)) / 0x7 +
        -parseInt(_0x252743(0xee)) / 0x8;
      if (_0xd528b6 === _0xcf6959) break;
      else _0x11f573["push"](_0x11f573["shift"]());
    } catch (_0x3dc661) {
      _0x11f573["push"](_0x11f573["shift"]());
    }
  }
})(_0x1012, 0x2eaac);
const { ApiError } = require("../../middleware/apiError"),
  crypto = require(_0x50d104(0xe2)),
  errors = require("../../config/errors"),
  fs = require("fs"),
  httpStatus = require(_0x50d104(0xe3)),
  storeFile = async (_0x2a939b, _0x2da29d = "") => {
    const _0x4d8d24 = _0x50d104;
    try {
      const _0x4e5ad8 = Buffer[_0x4d8d24(0xea)](
          _0x2a939b["data"],
          _0x4d8d24(0xe0)
        ),
        _0x293304 = _0x2da29d
          ? filterName(_0x2da29d + "_" + getCurrentDate()) +
            "_" +
            crypto[_0x4d8d24(0xdb)]()[_0x4d8d24(0xe5)](0x0, 0xa)
          : crypto[_0x4d8d24(0xdb)](),
        _0x4f4197 = _0x2a939b["name"]["split"]("."),
        _0x20715b = _0x4f4197[_0x4f4197[_0x4d8d24(0xed)] - 0x1],
        _0x4878ba = _0x293304 + "." + _0x20715b,
        _0x86a556 = "/" + _0x4878ba;
      return (
        fs[_0x4d8d24(0xe1)](
          _0x4d8d24(0xe6) + _0x86a556,
          _0x4e5ad8,
          _0x4d8d24(0xdf)
        ),
        {
          originalName: _0x2a939b[_0x4d8d24(0xde)],
          name: _0x4878ba,
          path: _0x86a556,
        }
      );
    } catch (_0x25f887) {
      const _0x1a70c5 = httpStatus[_0x4d8d24(0xef)],
        _0x2c1a2a = errors[_0x4d8d24(0xe7)][_0x4d8d24(0xf1)];
      throw new ApiError(_0x1a70c5, _0x2c1a2a);
    }
  },
  filterName = (_0x96a5a1 = "") => {
    const _0x5d50c7 = _0x50d104;
    return _0x96a5a1[_0x5d50c7(0xe8)]("\x20")
      [_0x5d50c7(0xd9)]("_")
      [_0x5d50c7(0xe8)](":")
      [_0x5d50c7(0xd9)]("_");
  },
  getCurrentDate = () => {
    const _0x346614 = _0x50d104;
    let _0x24bf69 = new Date()[_0x346614(0xf2)]();
    _0x24bf69 = _0x24bf69["split"](",\x20");
    let _0x32a7f1 = _0x24bf69[0x0],
      _0x3c8977 = _0x24bf69[0x1][_0x346614(0xe8)]("\x20"),
      _0x679b68 = _0x3c8977[0x0]
        ["split"](":")
        ["slice"](0x0, 0x2)
        [_0x346614(0xd9)](":"),
      _0x15b8d4 = _0x3c8977[0x1],
      _0x44c393 = _0x32a7f1 + "_" + _0x679b68 + "_" + _0x15b8d4;
    return (
      (_0x44c393 = _0x44c393["split"]("/")[_0x346614(0xd9)]("-")), _0x44c393
    );
  },
  deleteFile = async (_0xe4bf8d) => {
    const _0x58705e = _0x50d104;
    try {
      return (
        fs["unlink"](_0x58705e(0xe6) + _0xe4bf8d, (_0x5bd8c0) => {
          if (_0x5bd8c0) {
          }
        }),
        !![]
      );
    } catch (_0xe2d4e7) {
      if (!(_0xe2d4e7 instanceof ApiError)) {
        const _0x5bedd7 = httpStatus[_0x58705e(0xef)],
          _0x36771b = errors[_0x58705e(0xe7)][_0x58705e(0xf1)];
        _0xe2d4e7 = new ApiError(_0x5bedd7, _0x36771b);
      }
      throw _0xe2d4e7;
    }
  };
module[_0x50d104(0xdd)] = { storeFile: storeFile, deleteFile: deleteFile };
