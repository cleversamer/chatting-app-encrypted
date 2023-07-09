const _0x2ae1f9 = _0x3efe;
(function (_0x298707, _0x41cf66) {
  const _0x4fa8e6 = _0x3efe,
    _0x3c4aae = _0x298707();
  while (!![]) {
    try {
      const _0x94117 =
        -parseInt(_0x4fa8e6(0x1fa)) / 0x1 +
        (-parseInt(_0x4fa8e6(0x20c)) / 0x2) *
          (-parseInt(_0x4fa8e6(0x20b)) / 0x3) +
        -parseInt(_0x4fa8e6(0x20d)) / 0x4 +
        (parseInt(_0x4fa8e6(0x202)) / 0x5) *
          (parseInt(_0x4fa8e6(0x207)) / 0x6) +
        parseInt(_0x4fa8e6(0x1ee)) / 0x7 +
        -parseInt(_0x4fa8e6(0x1f2)) / 0x8 +
        (-parseInt(_0x4fa8e6(0x1f4)) / 0x9) *
          (-parseInt(_0x4fa8e6(0x1f1)) / 0xa);
      if (_0x94117 === _0x41cf66) break;
      else _0x3c4aae["push"](_0x3c4aae["shift"]());
    } catch (_0x2b2d5a) {
      _0x3c4aae["push"](_0x3c4aae["shift"]());
    }
  }
})(_0x49cf, 0x6a48f);
const mail = require(_0x2ae1f9(0x1fc)),
  Mailgen = require("mailgen"),
  nodemailer = require(_0x2ae1f9(0x1fd)),
  transporter = nodemailer["createTransport"]({
    service: _0x2ae1f9(0x20a),
    secure: !![],
    auth: {
      user: mail["auth"][_0x2ae1f9(0x208)],
      pass: mail[_0x2ae1f9(0x209)][_0x2ae1f9(0x1f6)],
    },
  });
function _0x3efe(_0x1938ad, _0x282220) {
  const _0x49cff2 = _0x49cf();
  return (
    (_0x3efe = function (_0x3efe71, _0x50b800) {
      _0x3efe71 = _0x3efe71 - 0x1ed;
      let _0x38a664 = _0x49cff2[_0x3efe71];
      return _0x38a664;
    }),
    _0x3efe(_0x1938ad, _0x282220)
  );
}
function _0x49cf() {
  const _0x44b3bb = [
    "firstname",
    "Copyright\x20©\x202022\x20Technology\x20Teacher.\x20All\x20rights\x20reserved.",
    "10smUuWi",
    "6200736NqfNsi",
    "generate",
    "1649655vUCqgp",
    "المعلم\x20التكنولوجي",
    "password",
    "Dear",
    "code",
    "أهلاً\x20بك\x20في\x20المعلم\x20التكنولوجي",
    "619123OokFhD",
    "forgotPasswordEmail",
    "../../config/mail",
    "nodemailer",
    "lastname",
    "resetPasswordCode",
    "registerEmail",
    "verificationCode",
    "2451425lrCJME",
    "هذا\x20هو\x20الكود\x20الخاص\x20باستعادة\x20كلمة\x20المرور\x20صالح\x20لمدة\x2010\x20دقائق:\x20",
    "default",
    "sendMail",
    "exports",
    "6uGGzuK",
    "user",
    "auth",
    "Gmail",
    "3BOjqUO",
    "1319858yPYDud",
    "1247936DtWvoH",
    "هذا\x20هو\x20الكود\x20الخاص\x20بتفعيل\x20الحساب\x20صالح\x20لمدة\x2010\x20دقائق:\x20",
    "5656231LABFwM",
  ];
  _0x49cf = function () {
    return _0x44b3bb;
  };
  return _0x49cf();
}
(module[_0x2ae1f9(0x206)][_0x2ae1f9(0x200)] = async (_0x43c4a3, _0x3584e9) => {
  const _0x52abbc = _0x2ae1f9;
  try {
    const _0x12add1 = new Mailgen({
        theme: _0x52abbc(0x204),
        product: {
          name: _0x52abbc(0x1f5),
          link: "#",
          copyright:
            "Copyright\x20©\x202022\x20Technology\x20Teacher.\x20All\x20rights\x20reserved.",
        },
      }),
      _0x50494a = _0x12add1[_0x52abbc(0x1f3)]({
        body: {
          title:
            _0x52abbc(0x1ed) + _0x3584e9[_0x52abbc(0x201)][_0x52abbc(0x1f8)],
          greeting: _0x52abbc(0x1f7),
          signature:
            _0x3584e9[_0x52abbc(0x1ef)] + "\x20" + _0x3584e9[_0x52abbc(0x1fe)],
        },
      }),
      _0x3933ae = {
        to: _0x43c4a3,
        from: _0x52abbc(0x1f5),
        html: _0x50494a,
        subject: _0x52abbc(0x1f9),
      };
    return await transporter["sendMail"](_0x3933ae), !![];
  } catch (_0x11763a) {
    throw _0x11763a;
  }
}),
  (module["exports"][_0x2ae1f9(0x1fb)] = async (_0x354801, _0x463085) => {
    const _0x1bdc26 = _0x2ae1f9;
    try {
      const _0x384222 = new Mailgen({
          theme: _0x1bdc26(0x204),
          product: {
            name: _0x1bdc26(0x1f5),
            link: "#",
            copyright: _0x1bdc26(0x1f0),
          },
        }),
        _0x57a677 = _0x384222[_0x1bdc26(0x1f3)]({
          body: {
            title:
              _0x1bdc26(0x203) + _0x463085[_0x1bdc26(0x1ff)][_0x1bdc26(0x1f8)],
            greeting: _0x1bdc26(0x1f7),
            signature:
              _0x463085["firstname"] + "\x20" + _0x463085[_0x1bdc26(0x1fe)],
          },
        }),
        _0x3bc421 = {
          to: _0x354801,
          from: "المعلم\x20التكنولوجي",
          html: _0x57a677,
          subject: "إعادة\x20تعيين\x20كلمة\x20المرور",
        };
      return await transporter[_0x1bdc26(0x205)](_0x3bc421), !![];
    } catch (_0x27fe16) {
      throw _0x27fe16;
    }
  });
