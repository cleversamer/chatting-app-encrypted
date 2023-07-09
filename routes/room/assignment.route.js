const _0x19be67 = _0x5da7;
function _0x2dc5() {
  const _0x57ba33 = [
    "78290qDxwog",
    "310673xTsfDT",
    "../../controllers",
    "getAssignment",
    "readAny",
    "createAssignment",
    "readOwn",
    "createOwn",
    "42raOHvD",
    "4NhpiYK",
    "../../middleware/auth",
    "/submit",
    "4000IsEnVz",
    "getMySubmissionStatus",
    "4878PAZjll",
    "/:roomId",
    "submission",
    "assignment",
    "2511047ScbViU",
    "468980smlEoP",
    "614338nLtmdh",
    "getAssignmentSubmissions",
    "/addSubmissionTime",
    "509415ZAAByc",
    "addSubmissionTime",
    "get",
    "/get/:assignmentId",
    "430ntHaba",
  ];
  _0x2dc5 = function () {
    return _0x57ba33;
  };
  return _0x2dc5();
}
(function (_0x2b35b4, _0x565f00) {
  const _0x579202 = _0x5da7,
    _0x1e65af = _0x2b35b4();
  while (!![]) {
    try {
      const _0x5d9cc8 =
        -parseInt(_0x579202(0xd3)) / 0x1 +
        -parseInt(_0x579202(0xd4)) / 0x2 +
        (-parseInt(_0x579202(0xd7)) / 0x3) * (parseInt(_0x579202(0xc9)) / 0x4) +
        (parseInt(_0x579202(0xc0)) / 0x5) * (-parseInt(_0x579202(0xc8)) / 0x6) +
        parseInt(_0x579202(0xd2)) / 0x7 +
        (-parseInt(_0x579202(0xcc)) / 0x8) * (parseInt(_0x579202(0xce)) / 0x9) +
        (parseInt(_0x579202(0xbf)) / 0xa) * (parseInt(_0x579202(0xc1)) / 0xb);
      if (_0x5d9cc8 === _0x565f00) break;
      else _0x1e65af["push"](_0x1e65af["shift"]());
    } catch (_0x92afec) {
      _0x1e65af["push"](_0x1e65af["shift"]());
    }
  }
})(_0x2dc5, 0x3c352);
function _0x5da7(_0x3c43b9, _0x55a0d5) {
  const _0x2dc5fd = _0x2dc5();
  return (
    (_0x5da7 = function (_0x5da765, _0x14c900) {
      _0x5da765 = _0x5da765 - 0xbe;
      let _0x3d391e = _0x2dc5fd[_0x5da765];
      return _0x3d391e;
    }),
    _0x5da7(_0x3c43b9, _0x55a0d5)
  );
}
const { Router } = require("express"),
  router = Router(),
  { assignmentsController } = require(_0x19be67(0xc2)),
  auth = require(_0x19be67(0xca));
router["post"](
  "/",
  auth(_0x19be67(0xc7), "assignment"),
  assignmentsController[_0x19be67(0xc5)]
),
  router[_0x19be67(0xd9)](
    _0x19be67(0xbe),
    auth(_0x19be67(0xc6), _0x19be67(0xd1)),
    assignmentsController[_0x19be67(0xc3)]
  ),
  router["get"](
    _0x19be67(0xcf),
    auth(_0x19be67(0xc6), "assignment"),
    assignmentsController["getRoomAssignments"]
  ),
  router["patch"](
    _0x19be67(0xd6),
    auth(_0x19be67(0xc7), _0x19be67(0xd1)),
    assignmentsController[_0x19be67(0xd8)]
  ),
  router["post"](
    _0x19be67(0xcb),
    auth(_0x19be67(0xc7), _0x19be67(0xd0)),
    assignmentsController["createSubmission"]
  ),
  router[_0x19be67(0xd9)](
    "/:id/submissions",
    auth(_0x19be67(0xc4), "submission"),
    assignmentsController[_0x19be67(0xd5)]
  ),
  router[_0x19be67(0xd9)](
    "/download/:roomId/:assignmentId",
    auth(_0x19be67(0xc4), _0x19be67(0xd0)),
    assignmentsController["downloadAssignmentSubmissions"]
  ),
  router["get"](
    "/:assignmentId/submission-status",
    auth(_0x19be67(0xc6), _0x19be67(0xd0)),
    assignmentsController[_0x19be67(0xcd)]
  ),
  (module["exports"] = router);
