webpackJsonp([1],{439:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var a=e,l=t,o=n;r=!1,null===a&&(a=Function.prototype);var u=Object.getOwnPropertyDescriptor(a,l);if(void 0!==u){if("value"in u)return u.value;var i=u.get;if(void 0===i)return;return i.call(o)}var c=Object.getPrototypeOf(a);if(null===c)return;e=c,t=l,n=o,r=!0,u=c=void 0}},i=n(192),c=r(i),s=n(434),f=r(s),p=n(435),d=r(p),m=function(e){function t(){var e=this;a(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this.state={percent:-1,intervalTime:200},this.setPercent=function(t){return function(){e.setState({percent:t})}},this.start=function(){e.setState({percent:0,intervalTime:1e3*Math.random()})}}return l(t,e),o(t,[{key:"render",value:function(){return c["default"].createElement(f["default"],{title:"Auto increment | React progress bar plus",className:"page-auto-increment"},c["default"].createElement("div",null,c["default"].createElement(d["default"],{percent:this.state.percent,autoIncrement:!0,intervalTime:this.state.intervalTime,spinner:"right"}),c["default"].createElement("div",{className:"text-center"},c["default"].createElement("h4",null,"Current intervalTime: ",c["default"].createElement("code",null,this.state.intervalTime)),c["default"].createElement("div",{className:"btn-group"},c["default"].createElement("button",{className:"btn btn-default",onClick:this.start},"Start"),c["default"].createElement("button",{className:"btn btn-default",onClick:this.setPercent(25)},"Set 25"),c["default"].createElement("button",{className:"btn btn-default",onClick:this.setPercent(50)},"Set 50"),c["default"].createElement("button",{className:"btn btn-default",onClick:this.setPercent(75)},"Set 75"),c["default"].createElement("button",{className:"btn btn-default",onClick:this.setPercent(100)},"Finish")))))}}]),t}(c["default"].Component);t["default"]=m,e.exports=t["default"]}});