const _0x3f51e8 = _0xb874;
(function (_0x5ac679, _0xc74090) {
  const _0x1c57ed = _0xb874,
    _0x4dfbed = _0x5ac679();
  while (!![]) {
    try {
      const _0x2255ba =
        (-parseInt(_0x1c57ed(0x19b)) / 0x1) *
          (parseInt(_0x1c57ed(0x198)) / 0x2) +
        (parseInt(_0x1c57ed(0x197)) / 0x3) *
          (parseInt(_0x1c57ed(0x19d)) / 0x4) +
        (-parseInt(_0x1c57ed(0x1a4)) / 0x5) *
          (parseInt(_0x1c57ed(0x18c)) / 0x6) +
        -parseInt(_0x1c57ed(0x18f)) / 0x7 +
        -parseInt(_0x1c57ed(0x199)) / 0x8 +
        parseInt(_0x1c57ed(0x196)) / 0x9 +
        parseInt(_0x1c57ed(0x19a)) / 0xa;
      if (_0x2255ba === _0xc74090) break;
      else _0x4dfbed["push"](_0x4dfbed["shift"]());
    } catch (_0x543558) {
      _0x4dfbed["push"](_0x4dfbed["shift"]());
    }
  }
})(_0x4336, 0xaaa3b);
function _0xb874(_0x23f186, _0x430ebf) {
  const _0x433607 = _0x4336();
  return (
    (_0xb874 = function (_0xb87495, _0x119f92) {
      _0xb87495 = _0xb87495 - 0x189;
      let _0x35a02f = _0x433607[_0xb87495];
      return _0x35a02f;
    }),
    _0xb874(_0x23f186, _0x430ebf)
  );
}
const _ = require(_0x3f51e8(0x18a)),
  { ApiError } = require(_0x3f51e8(0x18b)),
  { authService, emailService } = require(_0x3f51e8(0x1a7)),
  { clientSchema } = require(_0x3f51e8(0x19f)),
  errors = require(_0x3f51e8(0x1a5)),
  httpStatus = require(_0x3f51e8(0x192));
(module[_0x3f51e8(0x1a6)][_0x3f51e8(0x19c)] = async (
  _0x359adf,
  _0x309520,
  _0x45781d
) => {
  const _0x1226dc = _0x3f51e8;
  try {
    const {
        email: _0x255127,
        password: _0x3f573e,
        firstname: _0x4207e4,
        lastname: _0x2addcf,
        nickname: _0xbfe45a,
        role: _0x26810c,
        deviceToken: _0xdef26b,
      } = _0x359adf["body"],
      _0x349ccc = await authService[_0x1226dc(0x1a3)](
        _0x255127,
        _0x3f573e,
        _0x4207e4,
        _0x2addcf,
        _0xbfe45a,
        _0x26810c,
        _0xdef26b
      ),
      _0x6dcac5 = _0x349ccc["genAuthToken"]();
    await emailService[_0x1226dc(0x1a2)](_0x255127, _0x349ccc);
    const _0x1d39be = {
      user: _[_0x1226dc(0x18d)](_0x349ccc, clientSchema),
      token: _0x6dcac5,
    };
    _0x309520[_0x1226dc(0x19e)](httpStatus["CREATED"])[_0x1226dc(0x1a0)](
      _0x1d39be
    );
  } catch (_0x5a252f) {
    if (
      _0x5a252f[_0x1226dc(0x18e)] === errors[_0x1226dc(0x195)][_0x1226dc(0x191)]
    ) {
      const _0x508e9b = httpStatus[_0x1226dc(0x1a8)],
        _0x2684bd = errors[_0x1226dc(0x193)][_0x1226dc(0x189)];
      _0x5a252f = new ApiError(_0x508e9b, _0x2684bd);
    }
    _0x45781d(_0x5a252f);
  }
}),
  (module["exports"]["signin"] = async (_0x53a424, _0x32aa2c, _0x3487b6) => {
    const _0x179caa = _0x3f51e8;
    try {
      const {
          email: _0x55ebce,
          password: _0x2dc1f1,
          deviceToken: _0x5bcac2,
        } = _0x53a424[_0x179caa(0x194)],
        _0x4a610e = await authService[_0x179caa(0x1a1)](
          _0x55ebce,
          _0x2dc1f1,
          _0x5bcac2
        ),
        _0x1b744f = _0x4a610e[_0x179caa(0x190)](),
        _0x4decf4 = {
          user: _["pick"](_0x4a610e, clientSchema),
          token: _0x1b744f,
        };
      _0x32aa2c["status"](httpStatus["OK"])[_0x179caa(0x1a0)](_0x4decf4);
    } catch (_0x407e58) {
      _0x3487b6(_0x407e58);
    }
  });
function _0x4336() {
  const _0x2c0552 = [
    "4213370kHppwX",
    "172917DDezFs",
    "register",
    "8EVRIks",
    "status",
    "../../models/user.model",
    "json",
    "signInWithEmailAndPassword",
    "registerEmail",
    "createUser",
    "110BKCzmu",
    "../../config/errors",
    "exports",
    "../../services",
    "BAD_REQUEST",
    "emailUsed",
    "lodash",
    "../../middleware/apiError",
    "73740uQUmdO",
    "pick",
    "code",
    "3995516uoiEbH",
    "genAuthToken",
    "duplicateIndexKey",
    "http-status",
    "auth",
    "body",
    "codes",
    "10623366rhCjxA",
    "1518621MlMiNj",
    "6FSsJAI",
    "4442136QBtILe",
  ];
  _0x4336 = function () {
    return _0x2c0552;
  };
  return _0x4336();
}
