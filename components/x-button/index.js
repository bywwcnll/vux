!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxXButton=t():e.vuxXButton=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:{required:!1,"default":"default"},disabled:{type:Boolean,required:!1,"default":!1},mini:{type:Boolean,required:!1,"default":!1},text:{type:String,required:!1}}}},function(e,t){},function(e,t){e.exports="<button class=weui_btn :class=\"{'weui_btn_disabled':disabled, 'weui_btn_mini': mini, 'weui_btn_primary':type==='primary', 'weui_btn_warn':type==='warn', 'weui_btn_default':type==='default'}\" :disabled=disabled> {{text}}<slot></slot> </button>"},function(e,t,o){var n,r;o(2),n=o(1),r=o(3),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)}])});