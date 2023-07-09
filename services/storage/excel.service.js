const _0x2de3c1 = _0x3b4a;
function _0x3b4a(_0x2bd77c, _0x11d83c) {
  const _0x146565 = _0x1465();
  return (
    (_0x3b4a = function (_0x3b4a8c, _0x2fedfe) {
      _0x3b4a8c = _0x3b4a8c - 0x1c0;
      let _0x670873 = _0x146565[_0x3b4a8c];
      return _0x670873;
    }),
    _0x3b4a(_0x2bd77c, _0x11d83c)
  );
}
(function (_0x1a6e54, _0x35956f) {
  const _0x276c0f = _0x3b4a,
    _0xb1a3ef = _0x1a6e54();
  while (!![]) {
    try {
      const _0xbcd111 =
        parseInt(_0x276c0f(0x1db)) / 0x1 +
        parseInt(_0x276c0f(0x1e1)) / 0x2 +
        parseInt(_0x276c0f(0x1dc)) / 0x3 +
        -parseInt(_0x276c0f(0x1d5)) / 0x4 +
        (parseInt(_0x276c0f(0x1d2)) / 0x5) *
          (parseInt(_0x276c0f(0x1c5)) / 0x6) +
        parseInt(_0x276c0f(0x1de)) / 0x7 +
        (-parseInt(_0x276c0f(0x1df)) / 0x8) *
          (-parseInt(_0x276c0f(0x1c0)) / 0x9);
      if (_0xbcd111 === _0x35956f) break;
      else _0xb1a3ef["push"](_0xb1a3ef["shift"]());
    } catch (_0x4cac95) {
      _0xb1a3ef["push"](_0xb1a3ef["shift"]());
    }
  }
})(_0x1465, 0xf3ce5);
const Excel = require(_0x2de3c1(0x1dd)),
  httpStatus = require(_0x2de3c1(0x1c3)),
  errors = require("../../config/errors"),
  { ApiError } = require("../../middleware/apiError");
function _0x1465() {
  const _0x115f32 = [
    "exports",
    "نوع\x20المستخدم",
    "6240128nzUWdh",
    "addWorksheet",
    "nickname",
    "verified",
    "lastname",
    "email",
    "443311JhakWt",
    "1343442ojPLQb",
    "exceljs",
    "4391996RfUxGQ",
    "96248zdTkOX",
    "مستخدمين\x20تطبيق\x20المعلم\x20التكنولوجي",
    "1615896RymWgC",
    "9JKHclb",
    "addRow",
    "exportUsersToExcelFile",
    "http-status",
    "البريد\x20الإلكتروني",
    "354MUcCQy",
    "writeFile",
    "join",
    "split",
    "الحساب\x20مفعل",
    "toLocaleString",
    "firstname",
    "_id",
    "errorExportingExcel",
    "forEach",
    "الإسم\x20الأخير",
    "./uploads/",
    ".xlsx",
    "18655AoWxSQ",
  ];
  _0x1465 = function () {
    return _0x115f32;
  };
  return _0x1465();
}
module[_0x2de3c1(0x1d3)][_0x2de3c1(0x1c2)] = async (_0x4fb186 = []) => {
  const _0x258fe2 = _0x2de3c1;
  try {
    let _0x3ef169 = new Excel["Workbook"](),
      _0x30542b = _0x3ef169[_0x258fe2(0x1d6)](_0x258fe2(0x1e0));
    _0x30542b[_0x258fe2(0x1c1)]([
      "ID",
      "الإسم\x20الأول",
      _0x258fe2(0x1cf),
      "الكنية",
      _0x258fe2(0x1c4),
      _0x258fe2(0x1d4),
      _0x258fe2(0x1c9),
    ]),
      _0x4fb186[_0x258fe2(0x1ce)](function (_0x2555af) {
        const _0x3c4277 = _0x258fe2;
        _0x30542b[_0x3c4277(0x1c1)]([
          _0x2555af[_0x3c4277(0x1cc)],
          _0x2555af[_0x3c4277(0x1cb)],
          _0x2555af[_0x3c4277(0x1d9)],
          _0x2555af[_0x3c4277(0x1d7)],
          _0x2555af[_0x3c4277(0x1da)],
          _0x2555af["role"],
          _0x2555af[_0x3c4277(0x1d8)],
        ]);
      }, "i");
    const _0x41e32f =
        filterName("teacher_tech_users_" + getCurrentDate()) + _0x258fe2(0x1d1),
      _0x5c7cdd = "/" + _0x41e32f;
    return (
      await _0x3ef169["xlsx"][_0x258fe2(0x1c6)](_0x258fe2(0x1d0) + _0x41e32f),
      _0x5c7cdd
    );
  } catch (_0x392c97) {
    const _0xf588fa = httpStatus["INTERNAL_SERVER_ERROR"],
      _0x430598 = errors["system"][_0x258fe2(0x1cd)];
    throw new ApiError(_0xf588fa, _0x430598);
  }
};
const filterName = (_0x148e61 = "") => {
    const _0x2c926f = _0x2de3c1;
    return _0x148e61[_0x2c926f(0x1c8)]("\x20")
      ["join"]("_")
      ["split"](":")
      [_0x2c926f(0x1c7)]("_");
  },
  getCurrentDate = () => {
    const _0x571d2c = _0x2de3c1;
    let _0x3b7cba = new Date()[_0x571d2c(0x1ca)]();
    _0x3b7cba = _0x3b7cba[_0x571d2c(0x1c8)](",\x20");
    let _0x1735d1 = _0x3b7cba[0x0],
      _0xb1339d = "" + _0x1735d1;
    return (
      (_0xb1339d = _0xb1339d[_0x571d2c(0x1c8)]("/")["join"]("-")), _0xb1339d
    );
  };
