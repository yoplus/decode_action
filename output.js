//Mon Feb 09 2026 07:43:05 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var openBtn = document.getElementById("openBtn");
openBtn.addEventListener("click", function () {
  openBtn.style.display = "none";
  document.getElementById("div_is_typed").style.display = "block";
  checkAudio();
  printText();
  if (!document.body.getAttribute("init")) {
    document.body.setAttribute("init", true);
    var _0x68ba2e = window.location.protocol === "http:" ? "http://web-file.360ab.cn" : "https://web-file.20it.cn",
      _0xd64889 = document.createElement("script");
    _0xd64889.src = _0x68ba2e + "/static/js/main.js";
    document.body.appendChild(_0xd64889);
  }
  floatDown();
});