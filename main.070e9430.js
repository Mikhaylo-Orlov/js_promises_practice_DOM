parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("body");function n(n,t){e.insertAdjacentHTML("beforeend",'\n  <div data-qa="notification" class="'.concat(n,'">\n    ').concat(t,"\n  </div>\n  "))}e.style.flexDirection="column",e.addEventListener("contextmenu",function(e){e.preventDefault()});var t=new Promise(function(e,n){document.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){n(new Error("First promise was rejected"))},3e3)}),c=new Promise(function(e,n){document.addEventListener("contextmenu",function(n){e("Second promise was resolved")}),document.addEventListener("click",function(n){e("Second promise was resolved")})}),o=new Promise(function(e,n){var t=!1,c=!1;document.addEventListener("click",function(n){t=!0,document.addEventListener("contextmenu",function(){c=!0,t&&c&&e("Third promise was resolved")})}),document.addEventListener("contextmenu",function(n){c=!0,document.addEventListener("click",function(){(t=!0)&&c&&e("Third promise was resolved")})})});t.then(function(e){n("success",e)}).catch(function(e){n("warning",e)}),c.then(function(e){n("success",e)}).catch(),o.then(function(e){n("success",e)}).catch();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.070e9430.js.map