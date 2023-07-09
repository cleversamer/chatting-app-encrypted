const _0xd64496 = _0x1a40;
(function (_0x594017, _0x26ce47) {
  const _0x376960 = _0x1a40,
    _0x39f535 = _0x594017();
  while (!![]) {
    try {
      const _0x43eaad =
        parseInt(_0x376960(0x1ad)) / 0x1 +
        (-parseInt(_0x376960(0x1b4)) / 0x2) *
          (-parseInt(_0x376960(0x1af)) / 0x3) +
        parseInt(_0x376960(0x1b3)) / 0x4 +
        (parseInt(_0x376960(0x1ac)) / 0x5) *
          (parseInt(_0x376960(0x1b6)) / 0x6) +
        (-parseInt(_0x376960(0x1b1)) / 0x7) *
          (parseInt(_0x376960(0x1ae)) / 0x8) +
        (-parseInt(_0x376960(0x1a9)) / 0x9) *
          (-parseInt(_0x376960(0x1b5)) / 0xa) +
        -parseInt(_0x376960(0x1b8)) / 0xb;
      if (_0x43eaad === _0x26ce47) break;
      else _0x39f535["push"](_0x39f535["shift"]());
    } catch (_0x44a48c) {
      _0x39f535["push"](_0x39f535["shift"]());
    }
  }
})(_0x373c, 0x302a2);
function _0x373c() {
  const _0x4d0f21 = [
    "341477vzfkcY",
    "8GrdNOb",
    "28434JeWDZt",
    "fcm-notification",
    "496664PJiOWk",
    "sendToMultipleToken",
    "764928qOGyPe",
    "22vQtwZv",
    "297560XOHUga",
    "114fUaEQW",
    "exports",
    "8714387qcJTJk",
    "54BpxYpB",
    "../../config/push-notification-key.json",
    "credential",
    "64460lkzdMn",
  ];
  _0x373c = function () {
    return _0x4d0f21;
  };
  return _0x373c();
}
const admin = require("firebase-admin"),
  FCM = require(_0xd64496(0x1b0)),
  serviceAccount = require(_0xd64496(0x1aa)),
  certPath = admin[_0xd64496(0x1ab)]["cert"](serviceAccount),
  fcm = new FCM(certPath);
function _0x1a40(_0x349220, _0x3d8735) {
  const _0x373c02 = _0x373c();
  return (
    (_0x1a40 = function (_0x1a4034, _0x4fbf75) {
      _0x1a4034 = _0x1a4034 - 0x1a9;
      let _0x5905c4 = _0x373c02[_0x1a4034];
      return _0x5905c4;
    }),
    _0x1a40(_0x349220, _0x3d8735)
  );
}
module[_0xd64496(0x1b7)]["sendPushNotification"] = (
  _0x5925dd,
  _0xab9e75,
  _0x2bf1f5,
  _0x27fe70,
  _0x577573 = () => {}
) => {
  const _0x1220bf = _0xd64496;
  try {
    let _0x341036 = {
      data: _0x2bf1f5,
      notification: { title: _0x5925dd, body: _0xab9e75 },
    };
    fcm[_0x1220bf(0x1b2)](_0x341036, _0x27fe70, _0x577573);
  } catch (_0x5abffe) {}
};
