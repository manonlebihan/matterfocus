!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=38)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(41))},function(t,n,e){var r=e(0),o=e(24),i=e(2),c=e(26),u=e(31),a=e(59),f=o("wks"),s=r.Symbol,p=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=p("Symbol."+t)),f[t]}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(49),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(6),o=e(10),i=e(18);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(6),o=e(20),i=e(5),c=e(19),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t){t.exports=JSON.parse('{"id":"com.mattermost.plugin-matterfocus","name":"Plugin Matterfocus","description":"This plugin improves Mattermost notifications system.","homepage_url":"https://github.com/mattermost/mattermost-plugin-starter-template","support_url":"https://github.com/mattermost/mattermost-plugin-starter-template/issues","release_notes_url":"https://github.com/mattermost/mattermost-plugin-starter-template/releases/tag/v0.1.0","icon_path":"assets/starter-template-icon.svg","version":"0.1.0","min_server_version":"5.12.0","server":{"executables":{"linux-amd64":"server/dist/plugin-linux-amd64","darwin-amd64":"server/dist/plugin-darwin-amd64","darwin-arm64":"server/dist/plugin-darwin-arm64","windows-amd64":"server/dist/plugin-windows-amd64.exe"}},"webapp":{"bundle_path":"webapp/dist/main.js"},"settings_schema":{"header":"","footer":"","settings":[]}}')},function(t,n,e){var r=e(6),o=e(42),i=e(18),c=e(14),u=e(19),a=e(2),f=e(20),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(43),o=e(44);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(9),i=e(2),c=e(16),u=e(17),a=e(23),f=a.get,s=a.enforce,p=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=p.join("string"==typeof n?n:"")),t!==r?(a?!l&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(0),o=e(9);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(22),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(6),o=e(3),i=e(21);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(16),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r,o,i,c=e(45),u=e(0),a=e(4),f=e(9),s=e(2),p=e(46),l=e(27),v=u.WeakMap;if(c){var d=new v,h=d.get,m=d.has,y=d.set;r=function(t,n){return y.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return m.call(d,t)}}else{var g=p("state");l[g]=!0,r=function(t,n){return f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(25),o=e(22);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(3),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n){t.exports={}},function(t,n,e){var r=e(11);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r,o,i,c=e(0),u=e(3),a=e(7),f=e(33),s=e(70),p=e(21),l=e(35),v=c.location,d=c.setImmediate,h=c.clearImmediate,m=c.process,y=c.MessageChannel,g=c.Dispatch,x=0,b={},w=function(t){if(b.hasOwnProperty(t)){var n=b[t];delete b[t],n()}},j=function(t){return function(){w(t)}},S=function(t){w(t.data)},O=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};d&&h||(d=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return b[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(x),x},h=function(t){delete b[t]},"process"==a(m)?r=function(t){m.nextTick(j(t))}:g&&g.now?r=function(t){g.now(j(t))}:y&&!l?(i=(o=new y).port2,o.port1.onmessage=S,r=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(O)||"file:"===v.protocol?r="onreadystatechange"in p("script")?function(t){s.appendChild(p("script")).onreadystatechange=function(){s.removeChild(this),w(t)}}:function(t){setTimeout(j(t),0)}:(r=O,c.addEventListener("message",S,!1))),t.exports={set:d,clear:h}},function(t,n,e){var r=e(36);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){var r=e(8);t.exports=r("navigator","userAgent")||""},function(t,n,e){"use strict";var r=e(11),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){t.exports=e(76)},function(t,n,e){"use strict";var r,o,i,c,u=e(40),a=e(25),f=e(0),s=e(8),p=e(56),l=e(15),v=e(57),d=e(58),h=e(60),m=e(4),y=e(11),g=e(61),x=e(7),b=e(17),w=e(62),j=e(68),S=e(69),O=e(34).set,P=e(71),E=e(72),T=e(73),_=e(37),M=e(74),k=e(23),I=e(30),A=e(1),F=e(75),N=A("species"),C="Promise",L=k.get,z=k.set,D=k.getterFor(C),R=p,W=f.TypeError,q=f.document,G=f.process,K=s("fetch"),U=_.f,B=U,H="process"==x(G),J=!!(q&&q.createEvent&&f.dispatchEvent),V=I(C,(function(){if(!(b(R)!==String(R))){if(66===F)return!0;if(!H&&"function"!=typeof PromiseRejectionEvent)return!0}if(a&&!R.prototype.finally)return!0;if(F>=51&&/native code/.test(R))return!1;var t=R.resolve(1),n=function(t){t((function(){}),(function(){}))};return(t.constructor={})[N]=n,!(t.then((function(){}))instanceof n)})),Y=V||!j((function(t){R.all(t).catch((function(){}))})),Q=function(t){var n;return!(!m(t)||"function"!=typeof(n=t.then))&&n},X=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;P((function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var u,a,f,s=r[c++],p=i?s.ok:s.fail,l=s.resolve,v=s.reject,d=s.domain;try{p?(i||(2===n.rejection&&nt(t,n),n.rejection=1),!0===p?u=o:(d&&d.enter(),u=p(o),d&&(d.exit(),f=!0)),u===s.promise?v(W("Promise-chain cycle")):(a=Q(u))?a.call(u,l,v):l(u)):v(o)}catch(t){d&&!f&&d.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&$(t,n)}))}},Z=function(t,n,e){var r,o;J?((r=q.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},(o=f["on"+t])?o(r):"unhandledrejection"===t&&T("Unhandled promise rejection",e)},$=function(t,n){O.call(f,(function(){var e,r=n.value;if(tt(n)&&(e=M((function(){H?G.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),n.rejection=H||tt(n)?2:1,e.error))throw e.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,n){O.call(f,(function(){H?G.emit("rejectionHandled",t):Z("rejectionhandled",t,n.value)}))},et=function(t,n,e,r){return function(o){t(n,e,o,r)}},rt=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,X(t,n,!0))},ot=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw W("Promise can't be resolved itself");var o=Q(e);o?P((function(){var r={done:!1};try{o.call(e,et(ot,t,r,n),et(rt,t,r,n))}catch(e){rt(t,r,e,n)}})):(n.value=e,n.state=1,X(t,n,!1))}catch(e){rt(t,{done:!1},e,n)}}};V&&(R=function(t){g(this,R,C),y(t),r.call(this);var n=L(this);try{t(et(ot,this,n),et(rt,this,n))}catch(t){rt(this,n,t)}},(r=function(t){z(this,{type:C,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(R.prototype,{then:function(t,n){var e=D(this),r=U(S(this,R));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=H?G.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&X(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=L(t);this.promise=t,this.resolve=et(ot,t,n),this.reject=et(rt,t,n)},_.f=U=function(t){return t===R||t===i?new o(t):B(t)},a||"function"!=typeof p||(c=p.prototype.then,l(p.prototype,"then",(function(t,n){var e=this;return new R((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof K&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return E(R,K.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:V},{Promise:R}),d(R,C,!1,!0),h(C),i=s(C),u({target:C,stat:!0,forced:V},{reject:function(t){var n=U(this);return n.reject.call(void 0,t),n.promise}}),u({target:C,stat:!0,forced:a||V},{resolve:function(t){return E(a&&this===i?R:this,t)}}),u({target:C,stat:!0,forced:Y},{all:function(t){var n=this,e=U(n),r=e.resolve,o=e.reject,i=M((function(){var e=y(n.resolve),i=[],c=0,u=1;w(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,e.call(n,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=U(n),r=e.reject,o=M((function(){var o=y(n.resolve);w(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(0),o=e(13).f,i=e(9),c=e(15),u=e(16),a=e(47),f=e(30);t.exports=function(t,n){var e,s,p,l,v,d=t.target,h=t.global,m=t.stat;if(e=h?r:m?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:d+(m?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(e,s,l,t)}}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(3),o=e(7),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(17),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(24),o=e(26),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(2),o=e(48),i=e(13),c=e(10);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(8),o=e(50),i=e(55),c=e(5);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(51),o=e(54).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(14),i=e(52).indexOf,c=e(27);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(14),o=e(28),i=e(53),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(29),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(15);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){var r=e(10).f,o=e(2),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(31);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){"use strict";var r=e(8),o=e(10),i=e(1),c=e(6),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(5),o=e(63),i=e(28),c=e(33),u=e(64),a=e(67),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,p){var l,v,d,h,m,y,g,x=c(n,e,s?2:1);if(p)l=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,h=i(t.length);h>d;d++)if((m=s?x(r(g=t[d])[0],g[1]):x(t[d]))&&m instanceof f)return m;return new f(!1)}l=v.call(t)}for(y=l.next;!(g=y.call(l)).done;)if("object"==typeof(m=a(l,x,g.value,s))&&m&&m instanceof f)return m;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n,e){var r=e(1),o=e(32),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(65),o=e(32),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(66),o=e(7),i=e(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){var r={};r[e(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){var r=e(5);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(5),o=e(11),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r=e(8);t.exports=r("document","documentElement")},function(t,n,e){var r,o,i,c,u,a,f,s,p=e(0),l=e(13).f,v=e(7),d=e(34).set,h=e(35),m=p.MutationObserver||p.WebKitMutationObserver,y=p.process,g=p.Promise,x="process"==v(y),b=l(p,"queueMicrotask"),w=b&&b.value;w||(r=function(){var t,n;for(x&&(t=y.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},x?c=function(){y.nextTick(r)}:m&&!h?(u=!0,a=document.createTextNode(""),new m(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):g&&g.resolve?(f=g.resolve(void 0),s=f.then,c=function(){s.call(f,r)}):c=function(){d.call(p,r)}),t.exports=w||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(5),o=e(4),i=e(37);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){var r,o,i=e(0),c=e(36),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return i}));e(39);var r=e(12),o=r;r.id,r.version;class i{async initialize(t,n){}}window.registerPlugin(o.id,new i)}]);