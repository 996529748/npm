Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),_interceptors=require("./interceptors");function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var HttpRequest=function(){function t(e){_classCallCheck(this,t),this.axios=new _interceptors.Interceptors(e).instance}return _createClass(t,[{key:"request",value:function(e){var r=this;return new Promise(function(t,n){r.axios(e).then(function(e){t(e)}).catch(function(e){n(e)})})}}]),t}();exports.default=HttpRequest;