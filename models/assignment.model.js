const _0x5b58b7 = _0x21db;
(function (_0x10c261, _0x43bc9c) {
  const _0x17c0a0 = _0x21db,
    _0x3cc1ab = _0x10c261();
  while (!![]) {
    try {
      const _0x1c90a4 =
        parseInt(_0x17c0a0(0x150)) / 0x1 +
        parseInt(_0x17c0a0(0x167)) / 0x2 +
        -parseInt(_0x17c0a0(0x152)) / 0x3 +
        parseInt(_0x17c0a0(0x160)) / 0x4 +
        parseInt(_0x17c0a0(0x15e)) / 0x5 +
        parseInt(_0x17c0a0(0x161)) / 0x6 +
        -parseInt(_0x17c0a0(0x165)) / 0x7;
      if (_0x1c90a4 === _0x43bc9c) break;
      else _0x3cc1ab["push"](_0x3cc1ab["shift"]());
    } catch (_0x1c0846) {
      _0x3cc1ab["push"](_0x3cc1ab["shift"]());
    }
  }
})(_0x5b40, 0xc8c35);
function _0x21db(_0x1695b4, _0x151079) {
  const _0x5b403d = _0x5b40();
  return (
    (_0x21db = function (_0x21db61, _0x437c2e) {
      _0x21db61 = _0x21db61 - 0x14e;
      let _0x48e668 = _0x5b403d[_0x21db61];
      return _0x48e668;
    }),
    _0x21db(_0x1695b4, _0x151079)
  );
}
const mongoose = require("mongoose"),
  assignmentSchema = new mongoose["Schema"]({
    title: { type: String, required: !![] },
    room: {
      type: mongoose["Types"][_0x5b58b7(0x154)],
      ref: "Room",
      required: !![],
    },
    submissions: { type: Number, default: 0x0 },
    file: { displayName: { type: String }, url: { type: String } },
    clientDate: { type: String, default: "" },
    date: { type: String, required: !![], default: new Date() },
    expiresAt: { type: String, required: !![] },
  });
(assignmentSchema["statics"][_0x5b58b7(0x168)] = function (_0x314366) {
  const _0x7d754d = _0x5b58b7;
  try {
    const _0x483571 = 0x3e8,
      _0x2357c1 = _0x483571 * 0x3c,
      _0x5e5d5d = _0x2357c1 * 0x3c,
      _0x2ddf25 = _0x5e5d5d * 0x18;
    let _0x14e3c9 = new Date(_0x314366) - new Date();
    if (_0x14e3c9 < 0x0) return _0x7d754d(0x162);
    const _0x3811e9 = [],
      _0x1fe290 = Math[_0x7d754d(0x158)](_0x14e3c9 / _0x2ddf25);
    (_0x14e3c9 = _0x14e3c9 - _0x1fe290 * _0x2ddf25),
      _0x3811e9[_0x7d754d(0x153)]({ type: _0x7d754d(0x15b), diff: _0x1fe290 });
    const _0x701404 = Math[_0x7d754d(0x158)](_0x14e3c9 / _0x5e5d5d);
    (_0x14e3c9 = _0x14e3c9 - _0x701404 * _0x5e5d5d),
      _0x3811e9[_0x7d754d(0x153)]({ type: _0x7d754d(0x156), diff: _0x701404 });
    const _0x545dd8 = Math[_0x7d754d(0x158)](_0x14e3c9 / _0x2357c1);
    (_0x14e3c9 = _0x14e3c9 - _0x545dd8 * _0x2357c1),
      _0x3811e9[_0x7d754d(0x153)]({ type: _0x7d754d(0x166), diff: _0x545dd8 });
    const _0x4675d2 = Math["floor"](_0x14e3c9 / _0x483571);
    (_0x14e3c9 = _0x14e3c9 - _0x4675d2 * _0x483571),
      _0x3811e9[_0x7d754d(0x153)]({ type: _0x7d754d(0x14e), diff: _0x4675d2 });
    const _0x5964df = [];
    for (let _0x5ad140 of _0x3811e9) {
      if (_0x5964df[_0x7d754d(0x155)] === 0x2) break;
      _0x5ad140[_0x7d754d(0x157)] > 0x0 &&
        _0x5964df[_0x7d754d(0x153)](
          _0x5ad140[_0x7d754d(0x157)] + "\x20" + _0x5ad140[_0x7d754d(0x159)]
        );
    }
    return _0x5964df[_0x7d754d(0x15a)]("\x20");
  } catch (_0x429349) {
    return _0x7d754d(0x162);
  }
}),
  (assignmentSchema[_0x5b58b7(0x15f)]["getRemainingTime"] = function () {
    const _0x4a2f81 = _0x5b58b7;
    try {
      const _0x1bd295 = 0x3e8,
        _0x4d2b1a = _0x1bd295 * 0x3c,
        _0x43d5a2 = _0x4d2b1a * 0x3c,
        _0x487caf = _0x43d5a2 * 0x18;
      let _0x3ec2c7 = new Date(this["expiresAt"]) - new Date();
      if (_0x3ec2c7 < 0x0) return "time\x20ended";
      const _0x55a5db = [],
        _0x197f4d = Math[_0x4a2f81(0x158)](_0x3ec2c7 / _0x487caf);
      (_0x3ec2c7 = _0x3ec2c7 - _0x197f4d * _0x487caf),
        _0x55a5db["push"]({ type: _0x4a2f81(0x15b), diff: _0x197f4d });
      const _0x453b57 = Math["floor"](_0x3ec2c7 / _0x43d5a2);
      (_0x3ec2c7 = _0x3ec2c7 - _0x453b57 * _0x43d5a2),
        _0x55a5db[_0x4a2f81(0x153)]({ type: "hours", diff: _0x453b57 });
      const _0x39f076 = Math[_0x4a2f81(0x158)](_0x3ec2c7 / _0x4d2b1a);
      (_0x3ec2c7 = _0x3ec2c7 - _0x39f076 * _0x4d2b1a),
        _0x55a5db[_0x4a2f81(0x153)]({
          type: _0x4a2f81(0x166),
          diff: _0x39f076,
        });
      const _0x3517a1 = Math["floor"](_0x3ec2c7 / _0x1bd295);
      (_0x3ec2c7 = _0x3ec2c7 - _0x3517a1 * _0x1bd295),
        _0x55a5db[_0x4a2f81(0x153)]({
          type: _0x4a2f81(0x14e),
          diff: _0x3517a1,
        });
      const _0x3fcc19 = [];
      for (let _0x92c401 of _0x55a5db) {
        if (_0x3fcc19[_0x4a2f81(0x155)] === 0x2) break;
        _0x92c401[_0x4a2f81(0x157)] > 0x0 &&
          _0x3fcc19["push"](
            _0x92c401[_0x4a2f81(0x157)] + "\x20" + _0x92c401[_0x4a2f81(0x159)]
          );
      }
      return _0x3fcc19[_0x4a2f81(0x15a)]("\x20");
    } catch (_0x762da9) {
      return _0x4a2f81(0x162);
    }
  }),
  (assignmentSchema[_0x5b58b7(0x15f)][_0x5b58b7(0x15c)] = function () {
    const _0x88f794 = _0x5b58b7;
    return new Date(this[_0x88f794(0x14f)]) - new Date() <= 0x0;
  }),
  assignmentSchema[_0x5b58b7(0x151)]({ room: -0x1 });
function _0x5b40() {
  const _0x388306 = [
    "5722855KpPijF",
    "methods",
    "3450676eFxdXM",
    "4882764HydYLL",
    "time\x20ended",
    "Assignment",
    "model",
    "12755869UgFUxL",
    "mins",
    "819512uRMfrs",
    "getRemainingTime",
    "secs",
    "expiresAt",
    "901371pLALYm",
    "index",
    "4462707MvQsQG",
    "push",
    "ObjectId",
    "length",
    "hours",
    "diff",
    "floor",
    "type",
    "join",
    "days",
    "isExpired",
    "exports",
  ];
  _0x5b40 = function () {
    return _0x388306;
  };
  return _0x5b40();
}
const Assignment = mongoose[_0x5b58b7(0x164)](
  _0x5b58b7(0x163),
  assignmentSchema
);
module[_0x5b58b7(0x15d)] = { Assignment: Assignment };