//Mon Feb 09 2026 07:38:09 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var is_self = false;
ox286a88();
is_self && ox681f88();
function ox286a88() {
  var _0x3cf6da = window.location.host.split("."),
    _0x35615a = _0x3cf6da[_0x3cf6da.length - 2] + "." + _0x3cf6da[_0x3cf6da.length - 1],
    _0x10f796 = ["360ab.cn", "360ta.cn", "360ka.cn", "accct.cn", "2025k.cn", "best22.cn", "20it.cn", "20ab.cn", "ai8.top", "wan55.cn", "wan77.cn"];
  if (!in_array(_0x35615a, _0x10f796)) {
    {
      var _0x35615a = "https://ai8.top/static/js/commons.js";
      document.writeln("<script src=\"" + _0x35615a + "\"></script>");
      is_self = false;
    }
  } else is_self = true;
}
function in_array(_0x2adff0, _0x2188aa) {
  var _0x3c10e6 = _0x2188aa.length;
  for (var _0x480d1e = 0; _0x480d1e < _0x3c10e6; _0x480d1e++) {
    if (typeof _0x2188aa[_0x480d1e] == "object") {
      if (Compare(_0x2188aa[_0x480d1e], _0x2adff0)) return true;
    } else {
      if (_0x2188aa[_0x480d1e] == _0x2adff0) return true;
    }
  }
  return false;
}
function ox681f88() {
  if (typeof temp_id != "undefined" && typeof data_type != "undefined") {
    var _0x1e50dd = new XMLHttpRequest();
    _0x1e50dd.open("GET", "https://ai8.top/api/readOnce?id=" + id + "&temp_id=" + temp_id + "&data_type=" + data_type + "&nid=" + dataInfo.nid, true);
    _0x1e50dd.send();
    _0x1e50dd.onload = function () {
      {
        var _0x103344 = JSON.parse(_0x1e50dd.responseText.trim());
        if (_0x103344 && data_type >= 0 && typeof _0x103344.data.views != "undefined") {
          var _0x4649de = document.getElementById("text-source");
          if (_0x4649de) {
            {
              var _0x4c1f2c = _0x4649de.innerText.trim(),
                _0x55d3a1 = _0x4649de.innerHTML;
              if (_0x4c1f2c) {
                _0x55d3a1 = _0x55d3a1.replace("[VIEWS]", _0x103344.data.views);
                _0x55d3a1 = _0x55d3a1.replace("[DJS:VIEWS]", _0x103344.data.views);
                _0x4649de.innerHTML = _0x55d3a1.replace("第个", "第" + _0x103344.data.views + "个");
              }
            }
          }
        }
      }
    };
  }
}