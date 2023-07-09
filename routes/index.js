const _0x379dbb = _0x2631;
(function (_0x691dac, _0x1dbae7) {
  const _0x2567d5 = _0x2631,
    _0x3e5b1b = _0x691dac();
  while (!![]) {
    try {
      const _0x3f50cf =
        (-parseInt(_0x2567d5(0x95)) / 0x1) * (parseInt(_0x2567d5(0x8e)) / 0x2) +
        (-parseInt(_0x2567d5(0x92)) / 0x3) * (parseInt(_0x2567d5(0x8a)) / 0x4) +
        (-parseInt(_0x2567d5(0x94)) / 0x5) *
          (-parseInt(_0x2567d5(0x86)) / 0x6) +
        (parseInt(_0x2567d5(0x84)) / 0x7) * (-parseInt(_0x2567d5(0x82)) / 0x8) +
        parseInt(_0x2567d5(0x87)) / 0x9 +
        (-parseInt(_0x2567d5(0x8c)) / 0xa) *
          (-parseInt(_0x2567d5(0x97)) / 0xb) +
        (-parseInt(_0x2567d5(0x93)) / 0xc) * (parseInt(_0x2567d5(0x8d)) / 0xd);
      if (_0x3f50cf === _0x1dbae7) break;
      else _0x3e5b1b["push"](_0x3e5b1b["shift"]());
    } catch (_0x22f8c6) {
      _0x3e5b1b["push"](_0x3e5b1b["shift"]());
    }
  }
})(_0xa8c9, 0xa5be7);
const { Router } = require(_0x379dbb(0x8b)),
  router = Router(),
  authRoute = require(_0x379dbb(0x85)),
  usersRoute = require(_0x379dbb(0x99)),
  roomsRoute = require("./room/rooms.route"),
  messagesRoute = require(_0x379dbb(0x8f)),
  assignmentsRoute = require(_0x379dbb(0x81)),
  routes = [
    { path: _0x379dbb(0x83), route: authRoute },
    { path: _0x379dbb(0x89), route: usersRoute },
    { path: _0x379dbb(0x91), route: roomsRoute },
    { path: _0x379dbb(0x88), route: messagesRoute },
    { path: _0x379dbb(0x98), route: assignmentsRoute },
  ];
function _0x2631(_0x1bc5e3, _0x14d03f) {
  const _0xa8c9bb = _0xa8c9();
  return (
    (_0x2631 = function (_0x2631c2, _0x4b7d97) {
      _0x2631c2 = _0x2631c2 - 0x81;
      let _0x16d16f = _0xa8c9bb[_0x2631c2];
      return _0x16d16f;
    }),
    _0x2631(_0x1bc5e3, _0x14d03f)
  );
}
routes[_0x379dbb(0x96)]((_0x3be89b) => {
  const _0x2a71d8 = _0x379dbb;
  router["use"](_0x3be89b[_0x2a71d8(0x90)], _0x3be89b["route"]);
}),
  (module["exports"] = router);
function _0xa8c9() {
  const _0x2de14b = [
    "520wvyKBd",
    "208834SmeCux",
    "forEach",
    "86911CjLMcp",
    "/assignments",
    "./user/users.route",
    "./room/assignment.route",
    "2557648wCOGgy",
    "/auth",
    "7qGpHSr",
    "./user/auth.route",
    "63372TPmqRH",
    "3907728SUxKlY",
    "/messages",
    "/users",
    "6380Sgcjbf",
    "express",
    "1350dUCAcX",
    "8618129KFEEQf",
    "2WPPxKD",
    "./room/messages.route",
    "path",
    "/rooms",
    "1371RpQhKt",
    "12sCOGkh",
  ];
  _0xa8c9 = function () {
    return _0x2de14b;
  };
  return _0xa8c9();
}
