!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var c in o)("object"==typeof exports?exports:e)[c]=o[c]}}(this,(()=>{return e={10:e=>{e.exports={EncodeCPF:function(e,t){if("cpf"===e){let e=t;return e.slice(0,2).concat(e[2].concat("."))+e.slice(3,5).concat(e[5].concat("."))+e.slice(6,8).concat(e[8].concat("-"))+e.slice(9,11)}},DecodeCPF:function(e){return e.replace(".","").replace(".","").replace("-","").trim()}}}},t={},function o(c){var r=t[c];if(void 0!==r)return r.exports;var n=t[c]={exports:{}};return e[c](n,n.exports,o),n.exports}(10);var e,t}));