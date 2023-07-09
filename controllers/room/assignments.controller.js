function _0x52f7(_0x179292, _0x437d68) {
  const _0x3c7163 = _0x3c71();
  return (
    (_0x52f7 = function (_0x52f70b, _0x491899) {
      _0x52f70b = _0x52f70b - 0x132;
      let _0x3c777a = _0x3c7163[_0x52f70b];
      return _0x3c777a;
    }),
    _0x52f7(_0x179292, _0x437d68)
  );
}
const _0x226325 = _0x52f7;
(function (_0xe41f98, _0x143d8e) {
  const _0x1ed898 = _0x52f7,
    _0x35879e = _0xe41f98();
  while (!![]) {
    try {
      const _0x5e68ff =
        (-parseInt(_0x1ed898(0x135)) / 0x1) *
          (-parseInt(_0x1ed898(0x136)) / 0x2) +
        -parseInt(_0x1ed898(0x139)) / 0x3 +
        (parseInt(_0x1ed898(0x158)) / 0x4) *
          (parseInt(_0x1ed898(0x155)) / 0x5) +
        (-parseInt(_0x1ed898(0x134)) / 0x6) *
          (parseInt(_0x1ed898(0x149)) / 0x7) +
        (parseInt(_0x1ed898(0x14d)) / 0x8) *
          (-parseInt(_0x1ed898(0x154)) / 0x9) +
        -parseInt(_0x1ed898(0x14c)) / 0xa +
        parseInt(_0x1ed898(0x143)) / 0xb;
      if (_0x5e68ff === _0x143d8e) break;
      else _0x35879e["push"](_0x35879e["shift"]());
    } catch (_0x1e9fc6) {
      _0x35879e["push"](_0x35879e["shift"]());
    }
  }
})(_0x3c71, 0x9f8be);
function _0x3c71() {
  const _0x366df6 = [
    "body",
    "1652LDsTeK",
    "getAssignment",
    "getAssignmentSubmissions",
    "9327010LOjwks",
    "1072ZlmRwx",
    "file/zip",
    "params",
    "file1",
    "uploads",
    "addSubmissionTime",
    "http-status",
    "52830WZQQQs",
    "5xcWkxl",
    "../../services/storage/localStorage.service",
    "user",
    "5033792qgTRTT",
    "getMinutes",
    "file3",
    "query",
    "exports",
    "21138bsMoor",
    "3WUynFt",
    "721124DRNVoH",
    "createAssignment",
    "createSubmission",
    "2277267lzwKjT",
    "getMySubmissionStatus",
    "scheduleEvent",
    "split",
    "setMinutes",
    "status",
    "files",
    "deleteAssignment",
    "file2",
    "getRoomAssignments",
    "17854826QoCRKK",
    "downloadAssignmentSubmissions",
    "json",
    "CREATED",
    "_id",
  ];
  _0x3c71 = function () {
    return _0x366df6;
  };
  return _0x3c71();
}
const { assignemntsService } = require("../../services"),
  scheduleService = require("../../services/system/schedule.service"),
  localStorage = require(_0x226325(0x156)),
  httpStatus = require(_0x226325(0x153));
(module[_0x226325(0x133)][_0x226325(0x137)] = async (
  _0x31c6f9,
  _0x5244e0,
  _0x469c4a
) => {
  const _0x58e74b = _0x226325;
  try {
    const _0x72e001 = _0x31c6f9[_0x58e74b(0x157)],
      {
        title: _0x21c125,
        roomId: _0x2d8ece,
        minutes: _0x3f96c4,
        clientDate: _0x52e061,
        displayName: _0x39334c,
      } = _0x31c6f9[_0x58e74b(0x148)],
      _0x4be0 = _0x31c6f9?.[_0x58e74b(0x13f)]?.["file"],
      _0x443356 = await assignemntsService[_0x58e74b(0x137)](
        _0x72e001,
        _0x21c125,
        _0x2d8ece,
        _0x3f96c4,
        _0x4be0,
        _0x39334c,
        _0x52e061
      ),
      _0x42b5db = new Date();
    _0x42b5db[_0x58e74b(0x13d)](_0x42b5db[_0x58e74b(0x159)]() + 0x5a0 * 0x1e),
      scheduleService[_0x58e74b(0x13b)](_0x42b5db, async () => {
        const _0x39e4cc = _0x58e74b;
        await assignemntsService[_0x39e4cc(0x140)](_0x443356[_0x39e4cc(0x147)]);
      }),
      _0x5244e0["status"](httpStatus[_0x58e74b(0x146)])["json"](_0x443356);
  } catch (_0x33151e) {
    _0x469c4a(_0x33151e);
  }
}),
  (module[_0x226325(0x133)][_0x226325(0x14a)] = async (
    _0x21a46b,
    _0x2d6a7c,
    _0x1ef34c
  ) => {
    const _0x4f6759 = _0x226325;
    try {
      const { assignmentId: _0x218706 } = _0x21a46b[_0x4f6759(0x14f)],
        _0x58b02b = await assignemntsService[_0x4f6759(0x14a)](_0x218706);
      _0x2d6a7c[_0x4f6759(0x13e)](httpStatus["OK"])["json"](_0x58b02b);
    } catch (_0xbbc90e) {
      _0x1ef34c(_0xbbc90e);
    }
  }),
  (module[_0x226325(0x133)][_0x226325(0x142)] = async (
    _0x471076,
    _0x447941,
    _0x4456a0
  ) => {
    const _0x6d5f90 = _0x226325;
    try {
      const { roomId: _0x2099c3 } = _0x471076["params"],
        _0x1416f1 = await assignemntsService[_0x6d5f90(0x142)](_0x2099c3);
      _0x447941[_0x6d5f90(0x13e)](httpStatus["OK"])[_0x6d5f90(0x145)]({
        assignments: _0x1416f1,
      });
    } catch (_0x3a9857) {
      _0x4456a0(_0x3a9857);
    }
  }),
  (module["exports"][_0x226325(0x152)] = async (
    _0x31d4ac,
    _0x1e1376,
    _0x3618e7
  ) => {
    const _0x4cbf38 = _0x226325;
    try {
      const _0x12a462 = _0x31d4ac[_0x4cbf38(0x157)],
        {
          roomId: _0x945632,
          assignmentId: _0x2e2de9,
          hours: _0x2c7f4e,
        } = _0x31d4ac[_0x4cbf38(0x148)],
        _0x16aa32 = await assignemntsService["addSubmissionTime"](
          _0x12a462,
          _0x945632,
          _0x2e2de9,
          _0x2c7f4e
        );
      _0x1e1376[_0x4cbf38(0x13e)](httpStatus[_0x4cbf38(0x146)])[
        _0x4cbf38(0x145)
      ](_0x16aa32);
    } catch (_0x435f03) {
      _0x3618e7(_0x435f03);
    }
  }),
  (module[_0x226325(0x133)][_0x226325(0x138)] = async (
    _0xed34a9,
    _0x3f579a,
    _0x20ac9a
  ) => {
    const _0x1521e1 = _0x226325;
    try {
      const _0x10b0b4 = _0xed34a9[_0x1521e1(0x157)],
        {
          roomId: _0x4f11f9,
          assignmentId: _0x49b467,
          displayName1: _0xd7e034,
          displayName2: _0x58391e,
          displayName3: _0x50f747,
        } = _0xed34a9[_0x1521e1(0x148)],
        _0x45fb63 = _0xed34a9?.["files"]?.[_0x1521e1(0x150)],
        _0xd3ff1d = _0xed34a9?.[_0x1521e1(0x13f)]?.[_0x1521e1(0x141)],
        _0x4d3aa3 = _0xed34a9?.["files"]?.[_0x1521e1(0x15a)],
        _0x19fd43 = await assignemntsService["createSubmission"](
          _0x10b0b4,
          _0x4f11f9,
          _0x49b467,
          _0x45fb63,
          _0xd3ff1d,
          _0x4d3aa3,
          _0xd7e034,
          _0x58391e,
          _0x50f747
        );
      _0x3f579a[_0x1521e1(0x13e)](httpStatus[_0x1521e1(0x146)])[
        _0x1521e1(0x145)
      ](_0x19fd43);
    } catch (_0x398d62) {
      _0x20ac9a(_0x398d62);
    }
  }),
  (module[_0x226325(0x133)][_0x226325(0x14b)] = async (
    _0x4f1454,
    _0x16a356,
    _0xa702b4
  ) => {
    const _0x4b6b68 = _0x226325;
    try {
      const _0x94a273 = _0x4f1454["user"],
        _0x1ef50e = _0x4f1454[_0x4b6b68(0x14f)]["id"],
        { roomId: _0x4d2315 } = _0x4f1454[_0x4b6b68(0x132)],
        _0x264efd = await assignemntsService[_0x4b6b68(0x14b)](
          _0x94a273,
          _0x1ef50e,
          _0x4d2315
        );
      _0x16a356[_0x4b6b68(0x13e)](httpStatus["OK"])["json"]({
        submissions: _0x264efd,
      });
    } catch (_0x51b9b7) {
      _0xa702b4(_0x51b9b7);
    }
  }),
  (module[_0x226325(0x133)][_0x226325(0x144)] = async (
    _0x342a96,
    _0x56e373,
    _0x2dc018
  ) => {
    const _0x410ed9 = _0x226325;
    try {
      const _0x46281b = _0x342a96[_0x410ed9(0x157)],
        { roomId: _0x7894f1, assignmentId: _0x14d386 } =
          _0x342a96[_0x410ed9(0x14f)],
        _0x227ae7 = await assignemntsService["downloadAssignmentSubmissions"](
          _0x46281b,
          _0x14d386,
          _0x7894f1
        ),
        _0x313f17 = _0x227ae7[_0x410ed9(0x13c)](_0x410ed9(0x151))[0x1],
        _0x4f927e = new Date();
      _0x4f927e["setMinutes"](_0x4f927e[_0x410ed9(0x159)]() + 0x3),
        scheduleService[_0x410ed9(0x13b)](_0x4f927e, async () => {
          await localStorage["deleteFile"](_0x313f17);
        }),
        _0x56e373[_0x410ed9(0x13e)](httpStatus[_0x410ed9(0x146)])[
          _0x410ed9(0x145)
        ]({ type: _0x410ed9(0x14e), path: _0x313f17 });
    } catch (_0x4c35ed) {
      _0x2dc018(_0x4c35ed);
    }
  }),
  (module[_0x226325(0x133)][_0x226325(0x13a)] = async (
    _0x42b802,
    _0xa0c993,
    _0x3171a0
  ) => {
    const _0x55fd6d = _0x226325;
    try {
      const _0x4d8222 = _0x42b802[_0x55fd6d(0x157)],
        { assignmentId: _0x25a1d3 } = _0x42b802[_0x55fd6d(0x14f)],
        _0x34cb21 = await assignemntsService[_0x55fd6d(0x13a)](
          _0x4d8222,
          _0x25a1d3
        );
      _0xa0c993[_0x55fd6d(0x13e)](httpStatus["OK"])[_0x55fd6d(0x145)]({
        submitted: _0x34cb21,
      });
    } catch (_0x4c1cc7) {
      _0x3171a0(_0x4c1cc7);
    }
  });
