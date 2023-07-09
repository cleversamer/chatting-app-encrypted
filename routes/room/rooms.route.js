const _0x4f4ad1 = _0x34c5;
function _0x34c5(_0x58f5d0, _0x1cfbbe) {
  const _0x1066b7 = _0x1066();
  return (
    (_0x34c5 = function (_0x34c594, _0x118e12) {
      _0x34c594 = _0x34c594 - 0x89;
      let _0x7b8859 = _0x1066b7[_0x34c594];
      return _0x7b8859;
    }),
    _0x34c5(_0x58f5d0, _0x1cfbbe)
  );
}
(function (_0x47b733, _0x33143e) {
  const _0x1f0a24 = _0x34c5,
    _0x13d6f8 = _0x47b733();
  while (!![]) {
    try {
      const _0x3cfac8 =
        (-parseInt(_0x1f0a24(0x9e)) / 0x1) *
          (-parseInt(_0x1f0a24(0xb6)) / 0x2) +
        parseInt(_0x1f0a24(0xbd)) / 0x3 +
        -parseInt(_0x1f0a24(0xb7)) / 0x4 +
        parseInt(_0x1f0a24(0xaf)) / 0x5 +
        (-parseInt(_0x1f0a24(0x8c)) / 0x6) *
          (-parseInt(_0x1f0a24(0xba)) / 0x7) +
        (parseInt(_0x1f0a24(0x9a)) / 0x8) * (parseInt(_0x1f0a24(0x8a)) / 0x9) +
        (parseInt(_0x1f0a24(0x9c)) / 0xa) * (-parseInt(_0x1f0a24(0x9f)) / 0xb);
      if (_0x3cfac8 === _0x33143e) break;
      else _0x13d6f8["push"](_0x13d6f8["shift"]());
    } catch (_0x5a128f) {
      _0x13d6f8["push"](_0x13d6f8["shift"]());
    }
  }
})(_0x1066, 0xe8ec6);
const { Router } = require(_0x4f4ad1(0xc0)),
  router = Router(),
  { roomsController } = require(_0x4f4ad1(0xab)),
  validator = require("../../middleware/validation/room"),
  auth = require("../../middleware/auth");
router[_0x4f4ad1(0x89)]("/")
  ["get"](auth("readAny", "room"), roomsController[_0x4f4ad1(0xac)])
  [_0x4f4ad1(0xa4)](
    validator[_0x4f4ad1(0xa0)],
    auth(_0x4f4ad1(0xc4), "room"),
    roomsController[_0x4f4ad1(0xc2)]
  )
  [_0x4f4ad1(0x98)](
    auth(_0x4f4ad1(0xc5), _0x4f4ad1(0xa7)),
    roomsController["deleteRoom"]
  ),
  router["get"](
    _0x4f4ad1(0x97),
    auth("readAny", _0x4f4ad1(0x99)),
    roomsController[_0x4f4ad1(0xb0)]
  ),
  router[_0x4f4ad1(0xa4)](
    _0x4f4ad1(0xaa),
    auth(_0x4f4ad1(0x90), _0x4f4ad1(0xa7)),
    roomsController[_0x4f4ad1(0x8d)]
  ),
  router[_0x4f4ad1(0xb2)](
    "/block-users",
    auth(_0x4f4ad1(0x90), _0x4f4ad1(0xa7)),
    roomsController["blockUsersFromChatting"]
  ),
  router[_0x4f4ad1(0xb2)](
    _0x4f4ad1(0xa2),
    auth("updateOwn", "room"),
    roomsController[_0x4f4ad1(0x93)]
  ),
  router[_0x4f4ad1(0xb3)](
    _0x4f4ad1(0xa3),
    auth(_0x4f4ad1(0x90), _0x4f4ad1(0xa7)),
    roomsController["resetRoom"]
  ),
  router["delete"](
    _0x4f4ad1(0x9d),
    auth("updateOwn", _0x4f4ad1(0xa7)),
    roomsController[_0x4f4ad1(0x96)]
  ),
  router["get"](
    _0x4f4ad1(0xb5),
    auth(_0x4f4ad1(0x90), _0x4f4ad1(0xa7)),
    roomsController[_0x4f4ad1(0x8e)]
  ),
  router[_0x4f4ad1(0x8f)](
    _0x4f4ad1(0xa8),
    auth(_0x4f4ad1(0xbf), _0x4f4ad1(0xa7)),
    roomsController[_0x4f4ad1(0xa5)]
  ),
  router[_0x4f4ad1(0x8f)](
    _0x4f4ad1(0xa9),
    auth(_0x4f4ad1(0xbf), _0x4f4ad1(0xa7)),
    roomsController[_0x4f4ad1(0xa6)]
  ),
  router["delete"](
    "/delete-members",
    auth(_0x4f4ad1(0x90), _0x4f4ad1(0xa7)),
    roomsController[_0x4f4ad1(0xbe)]
  ),
  router[_0x4f4ad1(0xb2)](
    _0x4f4ad1(0x95),
    auth(_0x4f4ad1(0x90), _0x4f4ad1(0xa7)),
    roomsController[_0x4f4ad1(0xbc)]
  ),
  router[_0x4f4ad1(0xb2)](
    _0x4f4ad1(0xb1),
    auth(_0x4f4ad1(0x90), _0x4f4ad1(0xa7)),
    roomsController["toggleChatDisabled"]
  ),
  router[_0x4f4ad1(0xb2)](
    "/change-room-name",
    validator[_0x4f4ad1(0x92)],
    auth(_0x4f4ad1(0x90), _0x4f4ad1(0xa7)),
    roomsController[_0x4f4ad1(0xbb)]
  ),
  router[_0x4f4ad1(0x8f)](_0x4f4ad1(0xb9), roomsController[_0x4f4ad1(0xad)]),
  router[_0x4f4ad1(0xa4)](
    _0x4f4ad1(0xb4),
    auth(_0x4f4ad1(0x90), "room"),
    roomsController["switchRoomToPublic"]
  ),
  router[_0x4f4ad1(0xa4)](
    _0x4f4ad1(0xc1),
    auth("updateOwn", _0x4f4ad1(0xa7)),
    roomsController[_0x4f4ad1(0xae)]
  ),
  router[_0x4f4ad1(0xa4)](
    "/pin",
    auth("updateAny", _0x4f4ad1(0x94)),
    roomsController["pinRoom"]
  ),
  router["post"](
    _0x4f4ad1(0xa1),
    auth(_0x4f4ad1(0xb8), _0x4f4ad1(0x94)),
    roomsController[_0x4f4ad1(0x8b)]
  ),
  router[_0x4f4ad1(0xa4)](
    _0x4f4ad1(0x9b),
    auth("updateOwn", _0x4f4ad1(0xa7)),
    roomsController[_0x4f4ad1(0x91)]
  ),
  (module[_0x4f4ad1(0xc3)] = router);
function _0x1066() {
  const _0x43be02 = [
    "/toggle-show-name",
    "deleteRoomMessages",
    "/all",
    "delete",
    "roomType",
    "402888WkiiWD",
    "/members/search",
    "9390vZpCul",
    "/delete-messages",
    "3997vxfmWz",
    "20317TwuFmc",
    "createRoomValidator",
    "/unpin",
    "/unblock-users",
    "/:id/reset-room",
    "post",
    "searchRooms",
    "getRoomMembers",
    "room",
    "/search",
    "/:roomId/members",
    "/add-pinned-message",
    "../../controllers",
    "getAllPublicRooms",
    "getRoomActiveAssignments",
    "switchRoomToPrivate",
    "4343450xCrzOa",
    "getAllRooms",
    "/toggle-chat-disabled",
    "patch",
    "put",
    "/switch-to-public",
    "/join",
    "562eATaeO",
    "6199708TfANDy",
    "updateAny",
    "/:roomId/active-assignments",
    "14LwpDtX",
    "changeRoomName",
    "toggleShowName",
    "4480212leOHZJ",
    "deleteMembers",
    "readAny",
    "express",
    "/switch-to-private",
    "createRoom",
    "exports",
    "createOwn",
    "deleteOwn",
    "route",
    "45uIhfyM",
    "unpinRoom",
    "1503774GENwwh",
    "addPinnedMessage",
    "joinRoom",
    "get",
    "updateOwn",
    "searchRoomMembers",
    "validateChangeRoomName",
    "unblockUsersFromChatting",
    "pinnedRoom",
  ];
  _0x1066 = function () {
    return _0x43be02;
  };
  return _0x1066();
}
