(window.webpackJsonpuiw=window.webpackJsonpuiw||[]).push([[43],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(18),c=n(23),a=n(11),o=n(19),i=n(12),s=n(13),l=n(14),u=n(2),p=n.n(u),f=n(10),b=n.n(f),d=n(109);n(102);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).renderSvgPaths=function(e){var t=d[e];return null==t?null:t.map((function(e,t){return p.a.createElement("path",{key:t,d:e,fillRule:"evenodd"})}))},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.color,o=e.type,i=e.spin,s=e.verticalAlign,l=e.tagName,u=Object(c.a)(e,["prefixCls","className","color","type","spin","verticalAlign","tagName"]),f=null;if("string"===typeof o)f=p.a.createElement("svg",{fill:a,viewBox:"0 0 20 20"},this.renderSvgPaths(o));else{if(!p.a.isValidElement(o))return null;f=p.a.cloneElement(o,{fill:a})}u.style=y({fill:"currentColor"},u.style);var d=y({},u,{className:b()(t,n,"".concat(t,"-").concat(s),Object(r.a)({},"".concat(t,"-spin"),i))});return p.a.createElement(l,d,f)}}]),t}(p.a.PureComponent);O.defaultProps={prefixCls:"w-icon",verticalAlign:"middle",tagName:"span",spin:!1}},102:function(e,t,n){},105:function(e,t,n){},1126:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(187),c=n(1098),a=n(113);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n,r,c,a,o){try{var i=e[a](o),s=i.value}catch(l){return void n(l)}i.done?t(s):Promise.resolve(s).then(r,c)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(n=l(this,(e=u(t)).call.apply(e,[this].concat(i)))).path="packages/core/src/switch/README.md",n.dependencies={Switch:r.a,Divider:c.a,Button:a.a},n}var o,f,b;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),o=t,(f=[{key:"renderPage",value:function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(422).then(n.bind(null,1077));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,c){var a=e.apply(t,n);function o(e){i(a,r,c,o,s,"next",e)}function s(e){i(a,r,c,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}()}])&&s(o.prototype,f),b&&s(o,b),t}(n(103).a)},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(15),c=n(18),a=n(23),o=n(11),i=n(19),s=n(12),l=n(13),u=n(14),p=n(2),f=n.n(p),b=n(10),d=n.n(b),h=n(101),y=(n(105),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.type,i=t.size,s=t.icon,l=t.active,u=t.disabled,p=t.block,b=t.basic,y=t.className,O=t.loading,v=t.children,j=t.htmlType,m=Object(a.a)(t,["prefixCls","type","size","icon","active","disabled","block","basic","className","loading","children","htmlType"]),g=d()(y,n,(e={},Object(c.a)(e,"".concat(n,"-size-").concat(i),i),Object(c.a)(e,"".concat(n,"-").concat(o),o),Object(c.a)(e,"".concat(n,"-basic"),b),Object(c.a)(e,"".concat(n,"-loading"),O),Object(c.a)(e,"disabled",u||O),Object(c.a)(e,"active",l),Object(c.a)(e,"block",p),e));return f.a.createElement("button",Object(r.a)({},m,{type:j,disabled:u||O,className:g}),s&&f.a.createElement(h.a,{type:s}),v&&f.a.Children.map(v,(function(e){return e?f.a.isValidElement(e)?e:f.a.createElement("span",null,e):e})))}}]),t}(f.a.Component));y.defaultProps={prefixCls:"w-btn",disabled:!1,active:!1,loading:!1,block:!1,basic:!1,htmlType:"button",type:"light",size:"default"}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(18),c=n(23),a=n(11),o=n(19),i=n(12),s=n(13),l=n(32),u=n(14),p=n(2),f=n.n(p),b=n(10),d=n.n(b),h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={},n.onChange=function(e){e.persist();var t=n.props.onChange;n.setState({checked:e.target.checked},t&&t.bind(Object(l.a)(n),e))},n.state={checked:e.checked||!1},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.checked!==this.props.checked&&this.setState({checked:e.checked})}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.style,o=e.children,i=e.size,s=Object(c.a)(e,["prefixCls","className","style","children","size"]),l=d()(t,n,Object(r.a)({disabled:s.disabled},"".concat(t,"-").concat(i),i));s.checked=this.state.checked,s.onChange=this.onChange;var u=o||s.value;return f.a.createElement("label",{className:l,style:a},f.a.createElement("input",s),u&&f.a.createElement("div",{className:"".concat(t,"-text")},u))}}]),t}(f.a.Component);h.defaulProps={prefixCls:"w-radio",type:"radio",disabled:!1,checked:!1,value:""}},140:function(e,t,n){},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(18),c=n(11),a=n(19),o=n(12),i=n(13),s=n(14),l=n(2),u=n.n(l),p=n(114);n(140);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var b=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props;return u.a.createElement(p.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{type:"checkbox"}))}}]),t}(u.a.Component);b.defaultProps={prefixCls:"w-switch",type:"switch"}}}]);
//# sourceMappingURL=43.198e92a7.chunk.js.map