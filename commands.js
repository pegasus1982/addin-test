!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=986)}({54:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},986:function(e,t,n){(function(e){Office.onReady((function(){})),("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:void 0).action=function(e){var t={type:Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,message:"Performed action.",icon:"Icon.80x80",persistent:!0};Office.context.mailbox.item.notificationMessages.replaceAsync("action",t),e.completed()},function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var n="undefined"!=typeof __webpack_exports__?__webpack_exports__:t;if(n)if("function"!=typeof n){for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){var r=void 0;try{r=n[o]}catch(e){continue}e.register(r,o,"D:\\01-Daily_Working\\2019-11-19(VSTO)\\PropertyManager-Excel-AddIn\\src\\commands\\commands.js")}}else e.register(n,"module.exports","D:\\01-Daily_Working\\2019-11-19(VSTO)\\PropertyManager-Excel-AddIn\\src\\commands\\commands.js")}}()}).call(this,n(54))}});
//# sourceMappingURL=commands.js.map