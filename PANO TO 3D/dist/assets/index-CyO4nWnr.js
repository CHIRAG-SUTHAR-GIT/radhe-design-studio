var Jx=Object.defineProperty;var $x=(o,e,i)=>e in o?Jx(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var He=(o,e,i)=>$x(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Hf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function tS(){if(i_)return Ro;i_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=e,Ro.jsx=i,Ro.jsxs=i,Ro}var a_;function eS(){return a_||(a_=1,Hf.exports=tS()),Hf.exports}var At=eS(),Gf={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function nS(){if(r_)return ee;r_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function v(L,$,yt){this.props=L,this.context=$,this.refs=y,this.updater=yt||b}v.prototype.isReactComponent={},v.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function I(){}I.prototype=v.prototype;function N(L,$,yt){this.props=L,this.context=$,this.refs=y,this.updater=yt||b}var D=N.prototype=new I;D.constructor=N,w(D,v.prototype),D.isPureReactComponent=!0;var q=Array.isArray;function V(){}var z={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function E(L,$,yt){var Z=yt.ref;return{$$typeof:o,type:L,key:$,ref:Z!==void 0?Z:null,props:yt}}function R(L,$){return E(L.type,$,L.props)}function B(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ot(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return $[yt]})}var at=/\/+/g;function dt(L,$){return typeof L=="object"&&L!==null&&L.key!=null?ot(""+L.key):$.toString(36)}function pt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(V,V):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,$,yt,Z,ct){var Tt=typeof L;(Tt==="undefined"||Tt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(Tt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case o:case e:St=!0;break;case g:return St=L._init,O(St(L._payload),$,yt,Z,ct)}}if(St)return ct=ct(L),St=Z===""?"."+dt(L,0):Z,q(ct)?(yt="",St!=null&&(yt=St.replace(at,"$&/")+"/"),O(ct,$,yt,"",function(ne){return ne})):ct!=null&&(B(ct)&&(ct=R(ct,yt+(ct.key==null||L&&L.key===ct.key?"":(""+ct.key).replace(at,"$&/")+"/")+St)),$.push(ct)),1;St=0;var Gt=Z===""?".":Z+":";if(q(L))for(var Ft=0;Ft<L.length;Ft++)Z=L[Ft],Tt=Gt+dt(Z,Ft),St+=O(Z,$,yt,Tt,ct);else if(Ft=M(L),typeof Ft=="function")for(L=Ft.call(L),Ft=0;!(Z=L.next()).done;)Z=Z.value,Tt=Gt+dt(Z,Ft++),St+=O(Z,$,yt,Tt,ct);else if(Tt==="object"){if(typeof L.then=="function")return O(pt(L),$,yt,Z,ct);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return St}function K(L,$,yt){if(L==null)return L;var Z=[],ct=0;return O(L,Z,"","",function(Tt){return $.call(yt,Tt,ct++)}),Z}function j(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var xt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Et={map:K,forEach:function(L,$,yt){K(L,function(){$.apply(this,arguments)},yt)},count:function(L){var $=0;return K(L,function(){$++}),$},toArray:function(L){return K(L,function($){return $})||[]},only:function(L){if(!B(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ee.Activity=_,ee.Children=Et,ee.Component=v,ee.Fragment=i,ee.Profiler=l,ee.PureComponent=N,ee.StrictMode=r,ee.Suspense=m,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ee.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},ee.cache=function(L){return function(){return L.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(L,$,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Z=w({},L.props),ct=L.key;if($!=null)for(Tt in $.key!==void 0&&(ct=""+$.key),$)!F.call($,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&$.ref===void 0||(Z[Tt]=$[Tt]);var Tt=arguments.length-2;if(Tt===1)Z.children=yt;else if(1<Tt){for(var St=Array(Tt),Gt=0;Gt<Tt;Gt++)St[Gt]=arguments[Gt+2];Z.children=St}return E(L.type,ct,Z)},ee.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ee.createElement=function(L,$,yt){var Z,ct={},Tt=null;if($!=null)for(Z in $.key!==void 0&&(Tt=""+$.key),$)F.call($,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ct[Z]=$[Z]);var St=arguments.length-2;if(St===1)ct.children=yt;else if(1<St){for(var Gt=Array(St),Ft=0;Ft<St;Ft++)Gt[Ft]=arguments[Ft+2];ct.children=Gt}if(L&&L.defaultProps)for(Z in St=L.defaultProps,St)ct[Z]===void 0&&(ct[Z]=St[Z]);return E(L,Tt,ct)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(L){return{$$typeof:d,render:L}},ee.isValidElement=B,ee.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:j}},ee.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},ee.startTransition=function(L){var $=z.T,yt={};z.T=yt;try{var Z=L(),ct=z.S;ct!==null&&ct(yt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(V,xt)}catch(Tt){xt(Tt)}finally{$!==null&&yt.types!==null&&($.types=yt.types),z.T=$}},ee.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ee.use=function(L){return z.H.use(L)},ee.useActionState=function(L,$,yt){return z.H.useActionState(L,$,yt)},ee.useCallback=function(L,$){return z.H.useCallback(L,$)},ee.useContext=function(L){return z.H.useContext(L)},ee.useDebugValue=function(){},ee.useDeferredValue=function(L,$){return z.H.useDeferredValue(L,$)},ee.useEffect=function(L,$){return z.H.useEffect(L,$)},ee.useEffectEvent=function(L){return z.H.useEffectEvent(L)},ee.useId=function(){return z.H.useId()},ee.useImperativeHandle=function(L,$,yt){return z.H.useImperativeHandle(L,$,yt)},ee.useInsertionEffect=function(L,$){return z.H.useInsertionEffect(L,$)},ee.useLayoutEffect=function(L,$){return z.H.useLayoutEffect(L,$)},ee.useMemo=function(L,$){return z.H.useMemo(L,$)},ee.useOptimistic=function(L,$){return z.H.useOptimistic(L,$)},ee.useReducer=function(L,$,yt){return z.H.useReducer(L,$,yt)},ee.useRef=function(L){return z.H.useRef(L)},ee.useState=function(L){return z.H.useState(L)},ee.useSyncExternalStore=function(L,$,yt){return z.H.useSyncExternalStore(L,$,yt)},ee.useTransition=function(){return z.H.useTransition()},ee.version="19.2.6",ee}var s_;function ud(){return s_||(s_=1,Gf.exports=nS()),Gf.exports}var En=ud(),Vf={exports:{}},Co={},kf={exports:{}},Xf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function iS(){return o_||(o_=1,(function(o){function e(O,K){var j=O.length;O.push(K);t:for(;0<j;){var xt=j-1>>>1,Et=O[xt];if(0<l(Et,K))O[xt]=K,O[j]=Et,j=xt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var K=O[0],j=O.pop();if(j!==K){O[0]=j;t:for(var xt=0,Et=O.length,L=Et>>>1;xt<L;){var $=2*(xt+1)-1,yt=O[$],Z=$+1,ct=O[Z];if(0>l(yt,j))Z<Et&&0>l(ct,yt)?(O[xt]=ct,O[Z]=j,xt=Z):(O[xt]=yt,O[$]=j,xt=$);else if(Z<Et&&0>l(ct,j))O[xt]=ct,O[Z]=j,xt=Z;else break t}}return K}function l(O,K){var j=O.sortIndex-K.sortIndex;return j!==0?j:O.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,S=3,M=!1,b=!1,w=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=O)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function q(O){if(w=!1,D(O),!b)if(i(m)!==null)b=!0,V||(V=!0,ot());else{var K=i(p);K!==null&&pt(q,K.startTime-O)}}var V=!1,z=-1,F=5,E=-1;function R(){return y?!0:!(o.unstable_now()-E<F)}function B(){if(y=!1,V){var O=o.unstable_now();E=O;var K=!0;try{t:{b=!1,w&&(w=!1,I(z),z=-1),M=!0;var j=S;try{e:{for(D(O),_=i(m);_!==null&&!(_.expirationTime>O&&R());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,S=_.priorityLevel;var Et=xt(_.expirationTime<=O);if(O=o.unstable_now(),typeof Et=="function"){_.callback=Et,D(O),K=!0;break e}_===i(m)&&r(m),D(O)}else r(m);_=i(m)}if(_!==null)K=!0;else{var L=i(p);L!==null&&pt(q,L.startTime-O),K=!1}}break t}finally{_=null,S=j,M=!1}K=void 0}}finally{K?ot():V=!1}}}var ot;if(typeof N=="function")ot=function(){N(B)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,dt=at.port2;at.port1.onmessage=B,ot=function(){dt.postMessage(null)}}else ot=function(){v(B,0)};function pt(O,K){z=v(function(){O(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var j=S;S=K;try{return O()}finally{S=j}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var j=S;S=O;try{return K()}finally{S=j}},o.unstable_scheduleCallback=function(O,K,j){var xt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?xt+j:xt):j=xt,O){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=j+Et,O={id:g++,callback:K,priorityLevel:O,startTime:j,expirationTime:Et,sortIndex:-1},j>xt?(O.sortIndex=j,e(p,O),i(m)===null&&O===i(p)&&(w?(I(z),z=-1):w=!0,pt(q,j-xt))):(O.sortIndex=Et,e(m,O),b||M||(b=!0,V||(V=!0,ot()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var K=S;return function(){var j=S;S=K;try{return O.apply(this,arguments)}finally{S=j}}}})(Xf)),Xf}var l_;function aS(){return l_||(l_=1,kf.exports=iS()),kf.exports}var qf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function rS(){if(c_)return An;c_=1;var o=ud();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},An.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.2.6",An}var u_;function sS(){if(u_)return qf.exports;u_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=rS(),qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function oS(){if(f_)return Co;f_=1;var o=aS(),e=ud(),i=sS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,T=c.child;T;){if(T===a){x=!0,a=c,s=f;break}if(T===s){x=!0,s=c,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,s=c;break}if(T===s){x=!0,s=f,a=c;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case q:return"Suspense";case V:return"SuspenseList";case E:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case F:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var pt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},xt=[],Et=-1;function L(t){return{current:t}}function $(t){0>Et||(t.current=xt[Et],xt[Et]=null,Et--)}function yt(t,n){Et++,xt[Et]=t.current,t.current=n}var Z=L(null),ct=L(null),Tt=L(null),St=L(null);function Gt(t,n){switch(yt(Tt,n),yt(ct,t),yt(Z,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ag(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ag(n),t=Rg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(Z),yt(Z,t)}function Ft(){$(Z),$(ct),$(Tt)}function ne(t){t.memoizedState!==null&&yt(St,t);var n=Z.current,a=Rg(n,t.type);n!==a&&(yt(ct,t),yt(Z,a))}function Le(t){ct.current===t&&($(Z),$(ct)),St.current===t&&($(St),Eo._currentValue=j)}var ue,qe;function H(t){if(ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ue=n&&n[1]||"",qe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+t+qe}var Tn=!1;function ce(t,n){if(!t||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var tt=st}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(st){tt=st}t.call(gt.prototype)}}else{try{throw Error()}catch(st){tt=st}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&tt&&typeof st.stack=="string")return[st.stack,tt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var P=x.split(`
`),J=T.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===J.length)for(s=P.length-1,c=J.length-1;1<=s&&0<=c&&P[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==J[c]){var ut=`
`+P[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=c);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?H(a):""}function pe(t,n){switch(t.tag){case 26:case 27:case 5:return H(t.type);case 16:return H("Lazy");case 13:return t.child!==n&&n!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return ce(t.type,!1);case 11:return ce(t.type.render,!1);case 1:return ce(t.type,!0);case 31:return H("Activity");default:return""}}function Wt(t){try{var n="",a=null;do n+=pe(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ce=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,A=o.unstable_shouldYield,et=o.unstable_requestPaint,ft=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,kt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,me=o.unstable_IdlePriority,bt=o.log,Bt=o.unstable_setDisableYieldValue,Yt=null,Xt=null;function Nt(t){if(typeof bt=="function"&&Bt(t),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(Yt,t)}catch{}}var Jt=Math.clz32?Math.clz32:k,ie=Math.log,Ne=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(ie(t)/Ne|0)|0}var Rt=256,lt=262144,_t=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Ct(s):(x&=T,x!==0?c=Ct(x):a||(a=T&~t,a!==0&&(c=Ct(a))))):(T=s&~f,T!==0?c=Ct(T):x!==0?c=Ct(x):a||(a=s&~t,a!==0&&(c=Ct(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function We(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var t=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),t}function ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _n(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ui(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,J=t.hiddenUpdates;for(a=x&~a;0<a;){var ut=31-Jt(a),gt=1<<ut;T[ut]=0,P[ut]=-1;var tt=J[ut];if(tt!==null)for(J[ut]=null,ut=0;ut<tt.length;ut++){var st=tt[ut];st!==null&&(st.lane&=-536870913)}a&=~gt}s!==0&&zs(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function zs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Jt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ps(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Jt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ei(t,n){var a=n&-n;return a=(a&42)!==0?1:Ya(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ya(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ar(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Bs(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Kg(t.type))}function ja(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var fi=Math.random().toString(36).slice(2),je="__reactFiber$"+fi,vn="__reactProps$"+fi,Ni="__reactContainer$"+fi,Is="__reactEvents$"+fi,Nc="__reactListeners$"+fi,Oc="__reactHandles$"+fi,Vo="__reactResources$"+fi,Za="__reactMarker$"+fi;function C(t){delete t[je],delete t[vn],delete t[Is],delete t[Nc],delete t[Oc]}function X(t){var n=t[je];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ni]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Og(t);t!==null;){if(a=t[je])return a;t=Og(t)}return n}t=a,a=t.parentNode}return null}function nt(t){if(t=t[je]||t[Ni]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function it(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function W(t){var n=t[Vo];return n||(n=t[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(t){t[Za]=!0}var Ut=new Set,zt={};function Ot(t,n){Kt(t,n),Kt(t+"Capture",n)}function Kt(t,n){for(zt[t]=n,t=0;t<n.length;t++)Ut.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jt={},ge={};function Me(t){return Ce.call(ge,t)?!0:Ce.call(jt,t)?!1:te.test(t)?ge[t]=!0:(jt[t]=!0,!1)}function Ve(t,n,a){if(Me(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ae(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Ht(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function en(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ee(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function wn(t){if(!t._valueTracker){var n=en(t)?"checked":"value";t._valueTracker=Ee(t,n,""+t[n])}}function Oi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=en(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function pn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ka=/[\n"\\]/g;function fe(t){return t.replace(Ka,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bn(t,n,a,s,c,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ht(n)):t.value!==""+Ht(n)&&(t.value=""+Ht(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?un(t,x,Ht(n)):a!=null?un(t,x,Ht(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Ht(T):t.removeAttribute("name")}function Dn(t,n,a,s,c,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){wn(t);return}a=a!=null?""+Ht(a):"",n=n!=null?""+Ht(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),wn(t)}function un(t,n,a){n==="number"&&pn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qe(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Ht(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Rr(t,n,a){if(n!=null&&(n=""+Ht(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ht(a):""}function Ti(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(pt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Ht(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),wn(t)}function Cr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Y0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ed(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Y0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Td(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Ed(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Ed(t,f,n[f])}function zc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var j0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Z0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(t){return Z0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Pc=null;function Bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wr=null,Dr=null;function bd(t){var n=nt(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(bn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[vn]||null;if(!c)throw Error(r(90));bn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Oi(s)}break t;case"textarea":Rr(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(t,!!a.multiple,n,!1)}}}var Ic=!1;function Ad(t,n,a){if(Ic)return t(n,a);Ic=!0;try{var s=t(n);return s}finally{if(Ic=!1,(wr!==null||Dr!==null)&&(Dl(),wr&&(n=wr,t=Dr,Dr=wr=null,bd(n),t)))for(n=0;n<t.length;n++)bd(t[n])}}function Fs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=!1;if(Pi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Fc=!1}var fa=null,Hc=null,Xo=null;function Rd(){if(Xo)return Xo;var t,n=Hc,a=n.length,s,c="value"in fa?fa.value:fa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Xo=c.slice(t,1<s?1-s:void 0)}function qo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Cd(){return!1}function On(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Cd,this.isPropagationStopped=Cd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=On(Qa),Gs=_({},Qa,{view:0,detail:0}),K0=On(Gs),Gc,Vc,Vs,jo=_({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(Gc=t.screenX-Vs.screenX,Vc=t.screenY-Vs.screenY):Vc=Gc=0,Vs=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),wd=On(jo),Q0=_({},jo,{dataTransfer:0}),J0=On(Q0),$0=_({},Gs,{relatedTarget:0}),kc=On($0),tv=_({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),ev=On(tv),nv=_({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iv=On(nv),av=_({},Qa,{data:0}),Dd=On(av),rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ov[t])?!!n[t]:!1}function Xc(){return lv}var cv=_({},Gs,{key:function(t){if(t.key){var n=rv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uv=On(cv),fv=_({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ud=On(fv),hv=_({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),dv=On(hv),pv=_({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=On(pv),gv=_({},jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_v=On(gv),vv=_({},Qa,{newState:0,oldState:0}),xv=On(vv),Sv=[9,13,27,32],qc=Pi&&"CompositionEvent"in window,ks=null;Pi&&"documentMode"in document&&(ks=document.documentMode);var yv=Pi&&"TextEvent"in window&&!ks,Ld=Pi&&(!qc||ks&&8<ks&&11>=ks),Nd=" ",Od=!1;function zd(t,n){switch(t){case"keyup":return Sv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function Mv(t,n){switch(t){case"compositionend":return Pd(n);case"keypress":return n.which!==32?null:(Od=!0,Nd);case"textInput":return t=n.data,t===Nd&&Od?null:t;default:return null}}function Ev(t,n){if(Ur)return t==="compositionend"||!qc&&zd(t,n)?(t=Rd(),Xo=Hc=fa=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ld&&n.locale!=="ko"?null:n.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Tv[t.type]:n==="textarea"}function Id(t,n,a,s){wr?Dr?Dr.push(s):Dr=[s]:wr=s,n=Bl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Xs=null,qs=null;function bv(t){Sg(t,0)}function Zo(t){var n=it(t);if(Oi(n))return t}function Fd(t,n){if(t==="change")return n}var Hd=!1;if(Pi){var Wc;if(Pi){var Yc="oninput"in document;if(!Yc){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Yc=typeof Gd.oninput=="function"}Wc=Yc}else Wc=!1;Hd=Wc&&(!document.documentMode||9<document.documentMode)}function Vd(){Xs&&(Xs.detachEvent("onpropertychange",kd),qs=Xs=null)}function kd(t){if(t.propertyName==="value"&&Zo(qs)){var n=[];Id(n,qs,t,Bc(t)),Ad(bv,n)}}function Av(t,n,a){t==="focusin"?(Vd(),Xs=n,qs=a,Xs.attachEvent("onpropertychange",kd)):t==="focusout"&&Vd()}function Rv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(qs)}function Cv(t,n){if(t==="click")return Zo(n)}function wv(t,n){if(t==="input"||t==="change")return Zo(n)}function Dv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:Dv;function Ws(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ce.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function Xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qd(t,n){var a=Xd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xd(a)}}function Wd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Wd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Yd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=pn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pn(t.document)}return n}function jc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Uv=Pi&&"documentMode"in document&&11>=document.documentMode,Lr=null,Zc=null,Ys=null,Kc=!1;function jd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Lr==null||Lr!==pn(s)||(s=Lr,"selectionStart"in s&&jc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ys&&Ws(Ys,s)||(Ys=s,s=Bl(Zc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Lr)))}function Ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Nr={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},Qc={},Zd={};Pi&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function $a(t){if(Qc[t])return Qc[t];if(!Nr[t])return t;var n=Nr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zd)return Qc[t]=n[a];return t}var Kd=$a("animationend"),Qd=$a("animationiteration"),Jd=$a("animationstart"),Lv=$a("transitionrun"),Nv=$a("transitionstart"),Ov=$a("transitioncancel"),$d=$a("transitionend"),tp=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function hi(t,n){tp.set(t,n),Ot(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ti=[],Or=0,$c=0;function Qo(){for(var t=Or,n=$c=Or=0;n<t;){var a=ti[n];ti[n++]=null;var s=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&ep(a,c,f)}}function Jo(t,n,a,s){ti[Or++]=t,ti[Or++]=n,ti[Or++]=a,ti[Or++]=s,$c|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function tu(t,n,a,s){return Jo(t,n,a,s),$o(t)}function tr(t,n){return Jo(t,null,null,n),$o(t)}function ep(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Jt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function $o(t){if(50<go)throw go=0,uf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var zr={};function zv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new zv(t,n,a,s)}function eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function np(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")eu(t)&&(x=1);else if(typeof t=="string")x=Hx(t,a,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case E:return t=qn(31,a,n,c),t.elementType=E,t.lanes=f,t;case w:return er(a.children,c,f,n);case y:x=8,c|=24;break;case v:return t=qn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case q:return t=qn(13,a,n,c),t.elementType=q,t.lanes=f,t;case V:return t=qn(19,a,n,c),t.elementType=V,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:x=10;break t;case I:x=9;break t;case D:x=11;break t;case z:x=14;break t;case F:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function er(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function nu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function ip(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function iu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ap=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=ap.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},ap.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var Pr=[],Br=0,el=null,js=0,ni=[],ii=0,ha=null,bi=1,Ai="";function Ii(t,n){Pr[Br++]=js,Pr[Br++]=el,el=t,js=n}function rp(t,n,a){ni[ii++]=bi,ni[ii++]=Ai,ni[ii++]=ha,ha=t;var s=bi;t=Ai;var c=32-Jt(s)-1;s&=~(1<<c),a+=1;var f=32-Jt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,bi=1<<32-Jt(n)+c|a<<c|s,Ai=f+t}else bi=1<<f|a<<c|s,Ai=t}function au(t){t.return!==null&&(Ii(t,1),rp(t,1,0))}function ru(t){for(;t===el;)el=Pr[--Br],Pr[Br]=null,js=Pr[--Br],Pr[Br]=null;for(;t===ha;)ha=ni[--ii],ni[ii]=null,Ai=ni[--ii],ni[ii]=null,bi=ni[--ii],ni[ii]=null}function sp(t,n){ni[ii++]=bi,ni[ii++]=Ai,ni[ii++]=ha,bi=n.id,Ai=n.overflow,ha=t}var xn=null,ke=null,xe=!1,da=null,ai=!1,su=Error(r(519));function pa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zs(ei(n,t)),su}function op(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[je]=t,n[vn]=s,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)de(vo[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Dn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Ti(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Tg(n.textContent,a)?(s.popover!=null&&(de("beforetoggle",n),de("toggle",n)),s.onScroll!=null&&de("scroll",n),s.onScrollEnd!=null&&de("scrollend",n),s.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||pa(t,!0)}function lp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:xn=xn.return}}function Ir(t){if(t!==xn)return!1;if(!xe)return lp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bf(t.type,t.memoizedProps)),a=!a),a&&ke&&pa(t),lp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ke=Ng(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ke=Ng(t)}else n===27?(n=ke,Ca(t.type)?(t=Df,Df=null,ke=t):ke=n):ke=xn?si(t.stateNode.nextSibling):null;return!0}function nr(){ke=xn=null,xe=!1}function ou(){var t=da;return t!==null&&(In===null?In=t:In.push.apply(In,t),da=null),t}function Zs(t){da===null?da=[t]:da.push(t)}var lu=L(null),ir=null,Fi=null;function ma(t,n,a){yt(lu,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=lu.current,$(lu)}function cu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function uu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),cu(f.return,a,t),s||(x=null);break t}f=T.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),cu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Fr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=c.type;Xn(c.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(c===St.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}c=c.return}t!==null&&uu(n,t,a,s),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return cp(ir,t)}function il(t,n){return ir===null&&ar(t),cp(t,n)}function cp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(r(308));Fi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fi=Fi.next=n;return a}var Pv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Bv=o.unstable_scheduleCallback,Iv=o.unstable_NormalPriority,nn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new Pv,data:new Map,refCount:0}}function Ks(t){t.refCount--,t.refCount===0&&Bv(Iv,function(){t.controller.abort()})}var Qs=null,hu=0,Hr=0,Gr=null;function Fv(t,n){if(Qs===null){var a=Qs=[];hu=0,Hr=gf(),Gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return hu++,n.then(up,up),n}function up(){if(--hu===0&&Qs!==null){Gr!==null&&(Gr.status="fulfilled");var t=Qs;Qs=null,Hr=0,Gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Hv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var fp=O.S;O.S=function(t,n){jm=ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Fv(t,n),fp!==null&&fp(t,n)};var rr=L(null);function du(){var t=rr.current;return t!==null?t:Fe.pooledCache}function al(t,n){n===null?yt(rr,rr.current):yt(rr,n.pool)}function hp(){var t=du();return t===null?null:{parent:nn._currentValue,pool:t}}var Vr=Error(r(460)),pu=Error(r(474)),rl=Error(r(542)),sl={then:function(){}};function dp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gp(t),t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=Fe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gp(t),t}throw or=n,Vr}}function sr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(or=a,Vr):a}}var or=null;function mp(){if(or===null)throw Error(r(459));var t=or;return or=null,t}function gp(t){if(t===Vr||t===rl)throw Error(r(483))}var kr=null,Js=0;function ol(t){var n=Js;return Js+=1,kr===null&&(kr=[]),pp(kr,t,n)}function $s(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function _p(t){function n(Y,G){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[G],Y.flags|=16):Q.push(G)}}function a(Y,G){if(!t)return null;for(;G!==null;)n(Y,G),G=G.sibling;return null}function s(Y){for(var G=new Map;Y!==null;)Y.key!==null?G.set(Y.key,Y):G.set(Y.index,Y),Y=Y.sibling;return G}function c(Y,G){return Y=Bi(Y,G),Y.index=0,Y.sibling=null,Y}function f(Y,G,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<G?(Y.flags|=67108866,G):Q):(Y.flags|=67108866,G)):(Y.flags|=1048576,G)}function x(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,G,Q,ht){return G===null||G.tag!==6?(G=nu(Q,Y.mode,ht),G.return=Y,G):(G=c(G,Q),G.return=Y,G)}function P(Y,G,Q,ht){var Zt=Q.type;return Zt===w?ut(Y,G,Q.props.children,ht,Q.key):G!==null&&(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===F&&sr(Zt)===G.type)?(G=c(G,Q.props),$s(G,Q),G.return=Y,G):(G=tl(Q.type,Q.key,Q.props,null,Y.mode,ht),$s(G,Q),G.return=Y,G)}function J(Y,G,Q,ht){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=iu(Q,Y.mode,ht),G.return=Y,G):(G=c(G,Q.children||[]),G.return=Y,G)}function ut(Y,G,Q,ht,Zt){return G===null||G.tag!==7?(G=er(Q,Y.mode,ht,Zt),G.return=Y,G):(G=c(G,Q),G.return=Y,G)}function gt(Y,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=nu(""+G,Y.mode,Q),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return Q=tl(G.type,G.key,G.props,null,Y.mode,Q),$s(Q,G),Q.return=Y,Q;case b:return G=iu(G,Y.mode,Q),G.return=Y,G;case F:return G=sr(G),gt(Y,G,Q)}if(pt(G)||ot(G))return G=er(G,Y.mode,Q,null),G.return=Y,G;if(typeof G.then=="function")return gt(Y,ol(G),Q);if(G.$$typeof===N)return gt(Y,il(Y,G),Q);ll(Y,G)}return null}function tt(Y,G,Q,ht){var Zt=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Zt!==null?null:T(Y,G,""+Q,ht);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Zt?P(Y,G,Q,ht):null;case b:return Q.key===Zt?J(Y,G,Q,ht):null;case F:return Q=sr(Q),tt(Y,G,Q,ht)}if(pt(Q)||ot(Q))return Zt!==null?null:ut(Y,G,Q,ht,null);if(typeof Q.then=="function")return tt(Y,G,ol(Q),ht);if(Q.$$typeof===N)return tt(Y,G,il(Y,Q),ht);ll(Y,Q)}return null}function st(Y,G,Q,ht,Zt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(Q)||null,T(G,Y,""+ht,Zt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case M:return Y=Y.get(ht.key===null?Q:ht.key)||null,P(G,Y,ht,Zt);case b:return Y=Y.get(ht.key===null?Q:ht.key)||null,J(G,Y,ht,Zt);case F:return ht=sr(ht),st(Y,G,Q,ht,Zt)}if(pt(ht)||ot(ht))return Y=Y.get(Q)||null,ut(G,Y,ht,Zt,null);if(typeof ht.then=="function")return st(Y,G,Q,ol(ht),Zt);if(ht.$$typeof===N)return st(Y,G,Q,il(G,ht),Zt);ll(G,ht)}return null}function It(Y,G,Q,ht){for(var Zt=null,Te=null,Vt=G,se=G=0,ve=null;Vt!==null&&se<Q.length;se++){Vt.index>se?(ve=Vt,Vt=null):ve=Vt.sibling;var be=tt(Y,Vt,Q[se],ht);if(be===null){Vt===null&&(Vt=ve);break}t&&Vt&&be.alternate===null&&n(Y,Vt),G=f(be,G,se),Te===null?Zt=be:Te.sibling=be,Te=be,Vt=ve}if(se===Q.length)return a(Y,Vt),xe&&Ii(Y,se),Zt;if(Vt===null){for(;se<Q.length;se++)Vt=gt(Y,Q[se],ht),Vt!==null&&(G=f(Vt,G,se),Te===null?Zt=Vt:Te.sibling=Vt,Te=Vt);return xe&&Ii(Y,se),Zt}for(Vt=s(Vt);se<Q.length;se++)ve=st(Vt,Y,se,Q[se],ht),ve!==null&&(t&&ve.alternate!==null&&Vt.delete(ve.key===null?se:ve.key),G=f(ve,G,se),Te===null?Zt=ve:Te.sibling=ve,Te=ve);return t&&Vt.forEach(function(Na){return n(Y,Na)}),xe&&Ii(Y,se),Zt}function Qt(Y,G,Q,ht){if(Q==null)throw Error(r(151));for(var Zt=null,Te=null,Vt=G,se=G=0,ve=null,be=Q.next();Vt!==null&&!be.done;se++,be=Q.next()){Vt.index>se?(ve=Vt,Vt=null):ve=Vt.sibling;var Na=tt(Y,Vt,be.value,ht);if(Na===null){Vt===null&&(Vt=ve);break}t&&Vt&&Na.alternate===null&&n(Y,Vt),G=f(Na,G,se),Te===null?Zt=Na:Te.sibling=Na,Te=Na,Vt=ve}if(be.done)return a(Y,Vt),xe&&Ii(Y,se),Zt;if(Vt===null){for(;!be.done;se++,be=Q.next())be=gt(Y,be.value,ht),be!==null&&(G=f(be,G,se),Te===null?Zt=be:Te.sibling=be,Te=be);return xe&&Ii(Y,se),Zt}for(Vt=s(Vt);!be.done;se++,be=Q.next())be=st(Vt,Y,se,be.value,ht),be!==null&&(t&&be.alternate!==null&&Vt.delete(be.key===null?se:be.key),G=f(be,G,se),Te===null?Zt=be:Te.sibling=be,Te=be);return t&&Vt.forEach(function(Qx){return n(Y,Qx)}),xe&&Ii(Y,se),Zt}function Pe(Y,G,Q,ht){if(typeof Q=="object"&&Q!==null&&Q.type===w&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var Zt=Q.key;G!==null;){if(G.key===Zt){if(Zt=Q.type,Zt===w){if(G.tag===7){a(Y,G.sibling),ht=c(G,Q.props.children),ht.return=Y,Y=ht;break t}}else if(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===F&&sr(Zt)===G.type){a(Y,G.sibling),ht=c(G,Q.props),$s(ht,Q),ht.return=Y,Y=ht;break t}a(Y,G);break}else n(Y,G);G=G.sibling}Q.type===w?(ht=er(Q.props.children,Y.mode,ht,Q.key),ht.return=Y,Y=ht):(ht=tl(Q.type,Q.key,Q.props,null,Y.mode,ht),$s(ht,Q),ht.return=Y,Y=ht)}return x(Y);case b:t:{for(Zt=Q.key;G!==null;){if(G.key===Zt)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){a(Y,G.sibling),ht=c(G,Q.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,G);break}else n(Y,G);G=G.sibling}ht=iu(Q,Y.mode,ht),ht.return=Y,Y=ht}return x(Y);case F:return Q=sr(Q),Pe(Y,G,Q,ht)}if(pt(Q))return It(Y,G,Q,ht);if(ot(Q)){if(Zt=ot(Q),typeof Zt!="function")throw Error(r(150));return Q=Zt.call(Q),Qt(Y,G,Q,ht)}if(typeof Q.then=="function")return Pe(Y,G,ol(Q),ht);if(Q.$$typeof===N)return Pe(Y,G,il(Y,Q),ht);ll(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(a(Y,G.sibling),ht=c(G,Q),ht.return=Y,Y=ht):(a(Y,G),ht=nu(Q,Y.mode,ht),ht.return=Y,Y=ht),x(Y)):a(Y,G)}return function(Y,G,Q,ht){try{Js=0;var Zt=Pe(Y,G,Q,ht);return kr=null,Zt}catch(Vt){if(Vt===Vr||Vt===rl)throw Vt;var Te=qn(29,Vt,null,Y.mode);return Te.lanes=ht,Te.return=Y,Te}finally{}}}var lr=_p(!0),vp=_p(!1),ga=!1;function mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Re&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=$o(t),ep(t,null,a),n}return Jo(t,s,n,a),$o(t)}function to(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ps(t,a)}}function _u(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var vu=!1;function eo(){if(vu){var t=Gr;if(t!==null)throw t}}function no(t,n,a,s){vu=!1;var c=t.updateQueue;ga=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,J=P.next;P.next=null,x===null?f=J:x.next=J,x=P;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==x&&(T===null?ut.firstBaseUpdate=J:T.next=J,ut.lastBaseUpdate=P))}if(f!==null){var gt=c.baseState;x=0,ut=J=P=null,T=f;do{var tt=T.lane&-536870913,st=tt!==T.lane;if(st?(_e&tt)===tt:(s&tt)===tt){tt!==0&&tt===Hr&&(vu=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var It=t,Qt=T;tt=n;var Pe=a;switch(Qt.tag){case 1:if(It=Qt.payload,typeof It=="function"){gt=It.call(Pe,gt,tt);break t}gt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Qt.payload,tt=typeof It=="function"?It.call(Pe,gt,tt):It,tt==null)break t;gt=_({},gt,tt);break t;case 2:ga=!0}}tt=T.callback,tt!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[tt]:st.push(tt))}else st={lane:tt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(J=ut=st,P=gt):ut=ut.next=st,x|=tt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;st=T,T=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ut===null&&(P=gt),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ea|=x,t.lanes=x,t.memoizedState=gt}}function xp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Sp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xp(a[t],n)}var Xr=L(null),cl=L(0);function yp(t,n){t=Zi,yt(cl,t),yt(Xr,n),Zi=t|n.baseLanes}function xu(){yt(cl,Zi),yt(Xr,Xr.current)}function Su(){Zi=cl.current,$(Xr),$(cl)}var Wn=L(null),ri=null;function xa(t){var n=t.alternate;yt(Je,Je.current&1),yt(Wn,t),ri===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(ri=t)}function yu(t){yt(Je,Je.current),yt(Wn,t),ri===null&&(ri=t)}function Mp(t){t.tag===22?(yt(Je,Je.current),yt(Wn,t),ri===null&&(ri=t)):Sa()}function Sa(){yt(Je,Je.current),yt(Wn,Wn.current)}function Yn(t){$(Wn),ri===t&&(ri=null),$(Je)}var Je=L(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cf(a)||wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,re=null,Oe=null,an=null,fl=!1,qr=!1,cr=!1,hl=0,io=0,Wr=null,Gv=0;function Ze(){throw Error(r(321))}function Mu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Eu(t,n,a,s,c,f){return Gi=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?rm:Iu,cr=!1,f=a(s,c),cr=!1,qr&&(f=Tp(n,a,s,c)),Ep(t),f}function Ep(t){O.H=so;var n=Oe!==null&&Oe.next!==null;if(Gi=0,an=Oe=re=null,fl=!1,io=0,Wr=null,n)throw Error(r(300));t===null||rn||(t=t.dependencies,t!==null&&nl(t)&&(rn=!0))}function Tp(t,n,a,s){re=t;var c=0;do{if(qr&&(Wr=null),io=0,qr=!1,25<=c)throw Error(r(301));if(c+=1,an=Oe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=sm,f=n(a,s)}while(qr);return f}function Vv(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?ao(n):n,t=t.useState()[0],(Oe!==null?Oe.memoizedState:null)!==t&&(re.flags|=1024),n}function Tu(){var t=hl!==0;return hl=0,t}function bu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Au(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}Gi=0,an=Oe=re=null,qr=!1,io=hl=0,Wr=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?re.memoizedState=an=t:an=an.next=t,an}function $e(){if(Oe===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var n=an===null?re.memoizedState:an.next;if(n!==null)an=n,Oe=t;else{if(t===null)throw re.alternate===null?Error(r(467)):Error(r(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},an===null?re.memoizedState=an=t:an=an.next=t}return an}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(t){var n=io;return io+=1,Wr===null&&(Wr=[]),t=pp(Wr,t,n),n=re,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?rm:Iu),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ao(t);if(t.$$typeof===N)return Sn(t)}throw Error(r(438,String(t)))}function Ru(t){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=re.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=$e();return Cu(n,Oe,t)}function Cu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=x=null,P=null,J=n,ut=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(_e&gt)===gt:(Gi&gt)===gt){var tt=J.revertLane;if(tt===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Hr&&(ut=!0);else if((Gi&tt)===tt){J=J.next,tt===Hr&&(ut=!0);continue}else gt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=gt,x=f):P=P.next=gt,re.lanes|=tt,Ea|=tt;gt=J.action,cr&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else tt={lane:gt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=tt,x=f):P=P.next=tt,re.lanes|=gt,Ea|=gt;J=J.next}while(J!==null&&J!==n);if(P===null?x=f:P.next=T,!Xn(f,t.memoizedState)&&(rn=!0,ut&&(a=Gr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function wu(t){var n=$e(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Xn(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function bp(t,n,a){var s=re,c=$e(),f=xe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Xn((Oe||c).memoizedState,a);if(x&&(c.memoizedState=a,rn=!0),c=c.queue,Lu(Cp.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,Yr(9,{destroy:void 0},Rp.bind(null,s,c,a,n),null),Fe===null)throw Error(r(349));f||(Gi&127)!==0||Ap(s,n,a)}return a}function Ap(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=dl(),re.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rp(t,n,a,s){n.value=a,n.getSnapshot=s,wp(n)&&Dp(t)}function Cp(t,n,a){return a(function(){wp(n)&&Dp(t)})}function wp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Dp(t){var n=tr(t,2);n!==null&&Fn(n,t,2)}function Du(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),cr){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function Up(t,n,a,s){return t.baseState=a,Cu(t,Oe,typeof s=="function"?s:Vi)}function kv(t,n,a,s,c){if(vl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Lp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Lp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var T=a(c,s),P=O.S;P!==null&&P(x,T),Np(t,n,T)}catch(J){Uu(t,n,J)}finally{f!==null&&x.types!==null&&(f.types=x.types),O.T=f}}else try{f=a(c,s),Np(t,n,f)}catch(J){Uu(t,n,J)}}function Np(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Op(t,n,s)},function(s){return Uu(t,n,s)}):Op(t,n,a)}function Op(t,n,a){n.status="fulfilled",n.value=a,zp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Lp(t,a)))}function Uu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,zp(n),n=n.next;while(n!==s)}t.action=null}function zp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Pp(t,n){return n}function Bp(t,n){if(xe){var a=Fe.formState;if(a!==null){t:{var s=re;if(xe){if(ke){e:{for(var c=ke,f=ai;c.nodeType!==8;){if(!f){c=null;break e}if(c=si(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ke=si(c.nextSibling),s=c.data==="F!";break t}}pa(s)}s=!1}s&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pp,lastRenderedState:n},a.queue=s,a=nm.bind(null,re,s),s.dispatch=a,s=Du(!1),f=Bu.bind(null,re,!1,s.queue),s=Un(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=kv.bind(null,re,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Ip(t){var n=$e();return Fp(n,Oe,t)}function Fp(t,n,a){if(n=Cu(t,n,Pp)[0],t=ml(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ao(n)}catch(x){throw x===Vr?rl:x}else s=n;n=$e();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(re.flags|=2048,Yr(9,{destroy:void 0},Xv.bind(null,c,a),null)),[s,f,t]}function Xv(t,n){t.action=n}function Hp(t){var n=$e(),a=Oe;if(a!==null)return Fp(n,a,t);$e(),n=n.memoizedState,a=$e();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Yr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=re.updateQueue,n===null&&(n=dl(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Gp(){return $e().memoizedState}function gl(t,n,a,s){var c=Un();re.flags|=t,c.memoizedState=Yr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _l(t,n,a,s){var c=$e();s=s===void 0?null:s;var f=c.memoizedState.inst;Oe!==null&&s!==null&&Mu(s,Oe.memoizedState.deps)?c.memoizedState=Yr(n,f,a,s):(re.flags|=t,c.memoizedState=Yr(1|n,f,a,s))}function Vp(t,n){gl(8390656,8,t,n)}function Lu(t,n){_l(2048,8,t,n)}function qv(t){re.flags|=4;var n=re.updateQueue;if(n===null)n=dl(),re.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function kp(t){var n=$e().memoizedState;return qv({ref:n,nextImpl:t}),function(){if((Re&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Xp(t,n){return _l(4,2,t,n)}function qp(t,n){return _l(4,4,t,n)}function Wp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Yp(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,Wp.bind(null,n,t),a)}function Nu(){}function jp(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Mu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Zp(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Mu(n,s[1]))return s[0];if(s=t(),cr){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s}function Ou(t,n,a){return a===void 0||(Gi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Km(),re.lanes|=t,Ea|=t,a)}function Kp(t,n,a,s){return Xn(a,n)?a:Xr.current!==null?(t=Ou(t,a,s),Xn(t,n)||(rn=!0),t):(Gi&42)===0||(Gi&1073741824)!==0&&(_e&261930)===0?(rn=!0,t.memoizedState=a):(t=Km(),re.lanes|=t,Ea|=t,n)}function Qp(t,n,a,s,c){var f=K.p;K.p=f!==0&&8>f?f:8;var x=O.T,T={};O.T=T,Bu(t,!1,n,a);try{var P=c(),J=O.S;if(J!==null&&J(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=Hv(P,s);ro(t,n,ut,Kn(t))}else ro(t,n,s,Kn(t))}catch(gt){ro(t,n,{then:function(){},status:"rejected",reason:gt},Kn())}finally{K.p=f,x!==null&&T.types!==null&&(x.types=T.types),O.T=x}}function Wv(){}function zu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Jp(t).queue;Qp(t,c,n,j,a===null?Wv:function(){return $p(t),a(s)})}function Jp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function $p(t){var n=Jp(t);n.next===null&&(n=t.alternate.memoizedState),ro(t,n.next.queue,{},Kn())}function Pu(){return Sn(Eo)}function tm(){return $e().memoizedState}function em(){return $e().memoizedState}function Yv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=_a(a);var s=va(n,t,a);s!==null&&(Fn(s,n,a),to(s,n,a)),n={cache:fu()},t.payload=n;return}n=n.return}}function jv(t,n,a){var s=Kn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?im(n,a):(a=tu(t,n,a,s),a!==null&&(Fn(a,t,s),am(a,n,s)))}function nm(t,n,a){var s=Kn();ro(t,n,a,s)}function ro(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))im(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(c.hasEagerState=!0,c.eagerState=T,Xn(T,x))return Jo(t,n,c,0),Fe===null&&Qo(),!1}catch{}finally{}if(a=tu(t,n,c,s),a!==null)return Fn(a,t,s),am(a,n,s),!0}return!1}function Bu(t,n,a,s){if(s={lane:2,revertLane:gf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(r(479))}else n=tu(t,a,s,2),n!==null&&Fn(n,t,2)}function vl(t){var n=t.alternate;return t===re||n!==null&&n===re}function im(t,n){qr=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function am(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ps(t,a)}}var so={readContext:Sn,use:pl,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};so.useEffectEvent=Ze;var rm={readContext:Sn,use:pl,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:Vp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,Wp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var s=t();if(cr){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Un();if(a!==void 0){var c=a(n);if(cr){Nt(!0);try{a(n)}finally{Nt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=jv.bind(null,re,t),[s.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=Du(t);var n=t.queue,a=nm.bind(null,re,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Nu,useDeferredValue:function(t,n){var a=Un();return Ou(a,t,n)},useTransition:function(){var t=Du(!1);return t=Qp.bind(null,re,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=re,c=Un();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Fe===null)throw Error(r(349));(_e&127)!==0||Ap(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Vp(Cp.bind(null,s,f,t),[t]),s.flags|=2048,Yr(9,{destroy:void 0},Rp.bind(null,s,f,a,n),null),a},useId:function(){var t=Un(),n=Fe.identifierPrefix;if(xe){var a=Ai,s=bi;a=(s&~(1<<32-Jt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Gv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Pu,useFormState:Bp,useActionState:Bp,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bu.bind(null,re,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ru,useCacheRefresh:function(){return Un().memoizedState=Yv.bind(null,re)},useEffectEvent:function(t){var n=Un(),a={impl:t};return n.memoizedState=a,function(){if((Re&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Iu={readContext:Sn,use:pl,useCallback:jp,useContext:Sn,useEffect:Lu,useImperativeHandle:Yp,useInsertionEffect:Xp,useLayoutEffect:qp,useMemo:Zp,useReducer:ml,useRef:Gp,useState:function(){return ml(Vi)},useDebugValue:Nu,useDeferredValue:function(t,n){var a=$e();return Kp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=ml(Vi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:ao(t),n]},useSyncExternalStore:bp,useId:tm,useHostTransitionStatus:Pu,useFormState:Ip,useActionState:Ip,useOptimistic:function(t,n){var a=$e();return Up(a,Oe,t,n)},useMemoCache:Ru,useCacheRefresh:em};Iu.useEffectEvent=kp;var sm={readContext:Sn,use:pl,useCallback:jp,useContext:Sn,useEffect:Lu,useImperativeHandle:Yp,useInsertionEffect:Xp,useLayoutEffect:qp,useMemo:Zp,useReducer:wu,useRef:Gp,useState:function(){return wu(Vi)},useDebugValue:Nu,useDeferredValue:function(t,n){var a=$e();return Oe===null?Ou(a,t,n):Kp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=wu(Vi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:ao(t),n]},useSyncExternalStore:bp,useId:tm,useHostTransitionStatus:Pu,useFormState:Hp,useActionState:Hp,useOptimistic:function(t,n){var a=$e();return Oe!==null?Up(a,Oe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:em};sm.useEffectEvent=kp;function Fu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Hu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=_a(s);c.payload=n,a!=null&&(c.callback=a),n=va(t,c,s),n!==null&&(Fn(n,t,s),to(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Kn(),c=_a(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=va(t,c,s),n!==null&&(Fn(n,t,s),to(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),s=_a(a);s.tag=2,n!=null&&(s.callback=n),n=va(t,s,a),n!==null&&(Fn(n,t,a),to(n,t,a))}};function om(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Ws(a,s)||!Ws(c,f):!0}function lm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Hu.enqueueReplaceState(n,n.state,null)}function ur(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function cm(t){Ko(t)}function um(t){console.error(t)}function fm(t){Ko(t)}function xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function hm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Gu(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(t,n)},a}function dm(t){return t=_a(t),t.tag=3,t}function pm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){hm(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){hm(n,a,s),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Zv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Fr(n,a,c,!0),a=Wn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?Ul():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),df(t,s,c)),!1;case 22:return a.flags|=65536,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),df(t,s,c)),!1}throw Error(r(435,a.tag))}return df(t,s,c),Ul(),!1}if(xe)return n=Wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==su&&(t=Error(r(422),{cause:s}),Zs(ei(t,a)))):(s!==su&&(n=Error(r(423),{cause:s}),Zs(ei(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ei(s,a),c=Gu(t.stateNode,s,c),_u(t,c),Ke!==4&&(Ke=2)),!1;var f=Error(r(520),{cause:s});if(f=ei(f,a),mo===null?mo=[f]:mo.push(f),Ke!==4&&(Ke=2),n===null)return!0;s=ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Gu(a.stateNode,s,t),_u(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=dm(c),pm(c,t,a,s),_u(a,c),!1}a=a.return}while(a!==null);return!1}var Vu=Error(r(461)),rn=!1;function yn(t,n,a,s){n.child=t===null?vp(n,null,a,s):lr(n,t.child,a,s)}function mm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var T in s)T!=="ref"&&(x[T]=s[T])}else x=s;return ar(n),s=Eu(t,n,a,x,f,c),T=Tu(),t!==null&&!rn?(bu(t,n,c),ki(t,n,c)):(xe&&T&&au(n),n.flags|=1,yn(t,n,s,c),n.child)}function gm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_m(t,n,f,s,c)):(t=tl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Ku(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ws,a(x,s)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=Bi(f,s),t.ref=n.ref,t.return=n,n.child=t}function _m(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ws(f,s)&&t.ref===n.ref)if(rn=!1,n.pendingProps=s=f,Ku(t,c))(t.flags&131072)!==0&&(rn=!0);else return n.lanes=t.lanes,ki(t,n,c)}return ku(t,n,a,s,c)}function vm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return xm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?yp(n,f):xu(),Mp(n);else return s=n.lanes=536870912,xm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(al(n,f.cachePool),yp(n,f),Sa(),n.memoizedState=null):(t!==null&&al(n,null),xu(),Sa());return yn(t,n,c,a),n.child}function oo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xm(t,n,a,s,c){var f=du();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&al(n,null),xu(),Mp(n),t!==null&&Fr(t,n,s,!0),n.childLanes=c,null}function Sl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Sm(t,n,a){return lr(n,t.child,null,a),t=Sl(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function Kv(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=Sl(n,s),n.lanes=536870912,oo(null,t);if(yu(n),(t=ke)?(t=Lg(t,ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=ip(t),a.return=n,n.child=a,xn=n,ke=null)):t=null,t===null)throw pa(n);return n.lanes=536870912,null}return Sl(n,s)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(yu(n),c)if(n.flags&256)n.flags&=-257,n=Sm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(rn||Fr(t,n,a,!1),c=(a&t.childLanes)!==0,rn||c){if(s=Fe,s!==null&&(x=Ei(s,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,tr(t,x),Fn(s,t,x),Vu;Ul(),n=Sm(t,n,a)}else t=f.treeContext,ke=si(x.nextSibling),xn=n,xe=!0,da=null,ai=!1,t!==null&&sp(n,t),n=Sl(n,s),n.flags|=4096;return n}return t=Bi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ku(t,n,a,s,c){return ar(n),a=Eu(t,n,a,s,void 0,c),s=Tu(),t!==null&&!rn?(bu(t,n,c),ki(t,n,c)):(xe&&s&&au(n),n.flags|=1,yn(t,n,a,c),n.child)}function ym(t,n,a,s,c,f){return ar(n),n.updateQueue=null,a=Tp(n,s,a,c),Ep(t),s=Tu(),t!==null&&!rn?(bu(t,n,f),ki(t,n,f)):(xe&&s&&au(n),n.flags|=1,yn(t,n,a,f),n.child)}function Mm(t,n,a,s,c){if(ar(n),n.stateNode===null){var f=zr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Sn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Hu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},mu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Sn(x):zr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Fu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Hu.enqueueReplaceState(f,f.state,null),no(n,s,f,c),eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=ur(a,T);f.props=P;var J=f.context,ut=a.contextType;x=zr,typeof ut=="object"&&ut!==null&&(x=Sn(ut));var gt=a.getDerivedStateFromProps;ut=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==x)&&lm(n,f,s,x),ga=!1;var tt=n.memoizedState;f.state=tt,no(n,s,f,c),eo(),J=n.memoizedState,T||tt!==J||ga?(typeof gt=="function"&&(Fu(n,a,gt,s),J=n.memoizedState),(P=ga||om(n,a,P,s,tt,J,x))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=x,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,gu(t,n),x=n.memoizedProps,ut=ur(a,x),f.props=ut,gt=n.pendingProps,tt=f.context,J=a.contextType,P=zr,typeof J=="object"&&J!==null&&(P=Sn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==gt||tt!==P)&&lm(n,f,s,P),ga=!1,tt=n.memoizedState,f.state=tt,no(n,s,f,c),eo();var st=n.memoizedState;x!==gt||tt!==st||ga||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof T=="function"&&(Fu(n,a,T,s),st=n.memoizedState),(ut=ga||om(n,a,ut,s,tt,st,P)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=P,s=ut):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=lr(n,t.child,null,c),n.child=lr(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function Em(t,n,a,s){return nr(),n.flags|=256,yn(t,n,a,s),n.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(t){return{baseLanes:t,cachePool:hp()}}function Wu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Zn),t}function Tm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(Je.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?xa(n):Sa(),(t=ke)?(t=Lg(t,ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=ip(t),a.return=n,n.child=a,xn=n,ke=null)):t=null,t===null)throw pa(n);return wf(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(Sa(),c=n.mode,T=Ml({mode:"hidden",children:T},c),s=er(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=qu(a),s.childLanes=Wu(t,x,a),n.memoizedState=Xu,oo(null,s)):(xa(n),Yu(n,T))}var P=t.memoizedState;if(P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=ju(t,n,a)):n.memoizedState!==null?(Sa(),n.child=t.child,n.flags|=128,n=null):(Sa(),T=s.fallback,c=n.mode,s=Ml({mode:"visible",children:s.children},c),T=er(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,lr(n,t.child,null,a),s=n.child,s.memoizedState=qu(a),s.childLanes=Wu(t,x,a),n.memoizedState=Xu,n=oo(null,s));else if(xa(n),wf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var J=x.dgst;x=J,s=Error(r(419)),s.stack="",s.digest=x,Zs({value:s,source:null,stack:null}),n=ju(t,n,a)}else if(rn||Fr(t,n,a,!1),x=(a&t.childLanes)!==0,rn||x){if(x=Fe,x!==null&&(s=Ei(x,a),s!==0&&s!==P.retryLane))throw P.retryLane=s,tr(t,s),Fn(x,t,s),Vu;Cf(T)||Ul(),n=ju(t,n,a)}else Cf(T)?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,ke=si(T.nextSibling),xn=n,xe=!0,da=null,ai=!1,t!==null&&sp(n,t),n=Yu(n,s.children),n.flags|=4096);return n}return c?(Sa(),T=s.fallback,c=n.mode,P=t.child,J=P.sibling,s=Bi(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,J!==null?T=Bi(J,T):(T=er(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,oo(null,s),s=n.child,T=t.child.memoizedState,T===null?T=qu(a):(c=T.cachePool,c!==null?(P=nn._currentValue,c=c.parent!==P?{parent:P,pool:P}:c):c=hp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=Wu(t,x,a),n.memoizedState=Xu,oo(t.child,s)):(xa(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Yu(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function ju(t,n,a){return lr(n,t.child,null,a),t=Yu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function bm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),cu(t.return,n,a)}function Zu(t,n,a,s,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function Am(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=Je.current,T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,yt(Je,x),yn(t,n,s,a),s=xe?js:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bm(t,a,n);else if(t.tag===19)bm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Zu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Zu(n,!0,a,null,f,s);break;case"together":Zu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ku(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function Qv(t,n,a){switch(n.tag){case 3:Gt(n,n.stateNode.containerInfo),ma(n,nn,t.memoizedState.cache),nr();break;case 27:case 5:ne(n);break;case 4:Gt(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Tm(t,n,a):(xa(n),t=ki(t,n,a),t!==null?t.sibling:null);xa(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Fr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Am(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(Je,Je.current),s)break;return null;case 22:return n.lanes=0,vm(t,n,a,n.pendingProps);case 24:ma(n,nn,t.memoizedState.cache)}return ki(t,n,a)}function Rm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)rn=!0;else{if(!Ku(t,a)&&(n.flags&128)===0)return rn=!1,Qv(t,n,a);rn=(t.flags&131072)!==0}else rn=!1,xe&&(n.flags&1048576)!==0&&rp(n,js,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=sr(n.elementType),n.type=t,typeof t=="function")eu(t)?(s=ur(t,s),n.tag=1,n=Mm(null,n,t,s,a)):(n.tag=0,n=ku(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===D){n.tag=11,n=mm(null,n,t,s,a);break t}else if(c===z){n.tag=14,n=gm(null,n,t,s,a);break t}}throw n=dt(t)||t,Error(r(306,n,""))}}return n;case 0:return ku(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ur(s,n.pendingProps),Mm(t,n,s,c,a);case 3:t:{if(Gt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,gu(t,n),no(n,s,null,a);var x=n.memoizedState;if(s=x.cache,ma(n,nn,s),s!==f.cache&&uu(n,[nn],a,!0),eo(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Em(t,n,s,a);break t}else if(s!==c){c=ei(Error(r(424)),n),Zs(c),n=Em(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ke=si(t.firstChild),xn=n,xe=!0,da=null,ai=!0,a=vp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(nr(),s===c){n=ki(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return yl(t,n),t===null?(a=Ig(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,s=Il(Tt.current).createElement(a),s[je]=n,s[vn]=t,Mn(s,a,t),vt(s),n.stateNode=s):n.memoizedState=Ig(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ne(n),t===null&&xe&&(s=n.stateNode=zg(n.type,n.pendingProps,Tt.current),xn=n,ai=!0,c=ke,Ca(n.type)?(Df=c,ke=si(s.firstChild)):ke=c),yn(t,n,n.pendingProps.children,a),yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=s=ke)&&(s=Rx(s,n.type,n.pendingProps,ai),s!==null?(n.stateNode=s,xn=n,ke=si(s.firstChild),ai=!1,c=!0):c=!1),c||pa(n)),ne(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,bf(c,f)?s=null:x!==null&&bf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Eu(t,n,Vv,null,null,a),Eo._currentValue=c),yl(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=ke)&&(a=Cx(a,n.pendingProps,ai),a!==null?(n.stateNode=a,xn=n,ke=null,t=!0):t=!1),t||pa(n)),null;case 13:return Tm(t,n,a);case 4:return Gt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=lr(n,null,s,a):yn(t,n,s,a),n.child;case 11:return mm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ma(n,n.type,s.value),yn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ar(n),c=Sn(c),s=s(c),n.flags|=1,yn(t,n,s,a),n.child;case 14:return gm(t,n,n.type,n.pendingProps,a);case 15:return _m(t,n,n.type,n.pendingProps,a);case 19:return Am(t,n,a);case 31:return Kv(t,n,a);case 22:return vm(t,n,a,n.pendingProps);case 24:return ar(n),s=Sn(nn),t===null?(c=du(),c===null&&(c=Fe,f=fu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},mu(n),ma(n,nn,c)):((t.lanes&a)!==0&&(gu(t,n),no(n,null,null,a),eo()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ma(n,nn,s)):(s=f.cache,ma(n,nn,s),s!==c.cache&&uu(n,[nn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xi(t){t.flags|=4}function Qu(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(tg())t.flags|=8192;else throw or=sl,pu}else t.flags&=-16777217}function Cm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!kg(n))if(tg())t.flags|=8192;else throw or=sl,pu}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?cn():536870912,t.lanes|=n,Qr|=n)}function lo(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Jv(t,n,a){var s=n.pendingProps;switch(ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Hi(nn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ir(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ou())),Xe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Xi(n),f!==null?(Xe(n),Cm(n,f)):(Xe(n),Qu(n,c,null,s,a))):f?f!==t.memoizedState?(Xi(n),Xe(n),Cm(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Xi(n),Xe(n),Qu(n,c,t,s,a)),null;case 27:if(Le(n),a=Tt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}t=Z.current,Ir(n)?op(n):(t=zg(c,s,a),n.stateNode=t,Xi(n))}return Xe(n),null;case 5:if(Le(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(f=Z.current,Ir(n))op(n);else{var x=Il(Tt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[je]=n,f[vn]=s;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Mn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Xi(n)}}return Xe(n),Qu(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Tt.current,Ir(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=xn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[je]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Tg(t.nodeValue,a)),t||pa(n,!0)}else t=Il(t).createTextNode(s),t[je]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Ir(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[je]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Xe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ir(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[je]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Xe(n),null);case 4:return Ft(),t===null&&Sf(n.stateNode.containerInfo),Xe(n),null;case 10:return Hi(n.type),Xe(n),null;case 19:if($(Je),s=n.memoizedState,s===null)return Xe(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)lo(s,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ul(t),f!==null){for(n.flags|=128,lo(s,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)np(a,t),a=a.sibling;return yt(Je,Je.current&1|2),xe&&Ii(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&ft()>Cl&&(n.flags|=128,c=!0,lo(s,!1),n.lanes=4194304)}else{if(!c)if(t=ul(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xe)return Xe(n),null}else 2*ft()-s.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,c=!0,lo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ft(),t.sibling=null,a=Je.current,yt(Je,c?a&1|2:a&1),xe&&Ii(n,s.treeForkCount),t):(Xe(n),null);case 22:case 23:return Yn(n),Su(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&$(rr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(nn),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function $v(t,n){switch(ru(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(nn),Ft(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $(Je),null;case 4:return Ft(),null;case 10:return Hi(n.type),null;case 22:case 23:return Yn(n),Su(),t!==null&&$(rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(nn),null;case 25:return null;default:return null}}function wm(t,n){switch(ru(n),n.tag){case 3:Hi(nn),Ft();break;case 26:case 27:case 5:Le(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:$(Je);break;case 10:Hi(n.type);break;case 22:case 23:Yn(n),Su(),t!==null&&$(rr);break;case 24:Hi(nn)}}function co(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(T){De(n,n.return,T)}}function ya(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,c=n;var P=a,J=T;try{J()}catch(ut){De(c,P,ut)}}}s=s.next}while(s!==f)}}catch(ut){De(n,n.return,ut)}}function Dm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Sp(n,a)}catch(s){De(t,t.return,s)}}}function Um(t,n,a){a.props=ur(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){De(t,n,s)}}function uo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){De(t,n,c)}}function Ri(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){De(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){De(t,n,c)}else a.current=null}function Lm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){De(t,t.return,c)}}function Ju(t,n,a){try{var s=t.stateNode;yx(s,t.type,a,n),s[vn]=n}catch(c){De(t,t.return,c)}}function Nm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ca(t.type)||t.tag===4}function $u(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Nm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ca(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(s!==4&&(s===27&&Ca(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(tf(t,n,a),t=t.sibling;t!==null;)tf(t,n,a),t=t.sibling}function Tl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ca(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Tl(t,n,a),t=t.sibling;t!==null;)Tl(t,n,a),t=t.sibling}function Om(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[je]=t,n[vn]=a}catch(f){De(t,t.return,f)}}var qi=!1,sn=!1,ef=!1,zm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function tx(t,n){if(t=t.containerInfo,Ef=ql,t=Yd(t),jc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,P=-1,J=0,ut=0,gt=t,tt=null;e:for(;;){for(var st;gt!==a||c!==0&&gt.nodeType!==3||(T=x+c),gt!==f||s!==0&&gt.nodeType!==3||(P=x+s),gt.nodeType===3&&(x+=gt.nodeValue.length),(st=gt.firstChild)!==null;)tt=gt,gt=st;for(;;){if(gt===t)break e;if(tt===a&&++J===c&&(T=x),tt===f&&++ut===s&&(P=x),(st=gt.nextSibling)!==null)break;gt=tt,tt=gt.parentNode}gt=st}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tf={focusedElem:t,selectionRange:a},ql=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var It=ur(a.type,c);t=s.getSnapshotBeforeUpdate(It,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Qt){De(a,a.return,Qt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Rf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Pm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),s&4&&co(5,a);break;case 1:if(Yi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){De(a,a.return,x)}else{var c=ur(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){De(a,a.return,x)}}s&64&&Dm(a),s&512&&uo(a,a.return);break;case 3:if(Yi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sp(t,n)}catch(x){De(a,a.return,x)}}break;case 27:n===null&&s&4&&Om(a);case 26:case 5:Yi(t,a),n===null&&s&4&&Lm(a),s&512&&uo(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),s&4&&Fm(t,a);break;case 13:Yi(t,a),s&4&&Hm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cx.bind(null,a),wx(t,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||sn,c=qi;var f=sn;qi=s,(sn=n)&&!f?ji(t,a,(a.subtreeFlags&8772)!==0):Yi(t,a),qi=c,sn=f}break;case 30:break;default:Yi(t,a)}}function Bm(t){var n=t.alternate;n!==null&&(t.alternate=null,Bm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&C(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,zn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)Im(t,n,a),a=a.sibling}function Im(t,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Yt,a)}catch{}switch(a.tag){case 26:sn||Ri(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Ri(a,n);var s=Ye,c=zn;Ca(a.type)&&(Ye=a.stateNode,zn=!1),Wi(t,n,a),So(a.stateNode),Ye=s,zn=c;break;case 5:sn||Ri(a,n);case 6:if(s=Ye,c=zn,Ye=null,Wi(t,n,a),Ye=s,zn=c,Ye!==null)if(zn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){De(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){De(a,n,f)}break;case 18:Ye!==null&&(zn?(t=Ye,Dg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),rs(t)):Dg(Ye,a.stateNode));break;case 4:s=Ye,c=zn,Ye=a.stateNode.containerInfo,zn=!0,Wi(t,n,a),Ye=s,zn=c;break;case 0:case 11:case 14:case 15:ya(2,a,n),sn||ya(4,a,n),Wi(t,n,a);break;case 1:sn||(Ri(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Um(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:sn=(s=sn)||a.memoizedState!==null,Wi(t,n,a),sn=s;break;default:Wi(t,n,a)}}function Fm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{rs(t)}catch(a){De(n,n.return,a)}}}function Hm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{rs(t)}catch(a){De(n,n.return,a)}}function ex(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new zm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new zm),n;default:throw Error(r(435,t.tag))}}function bl(t,n){var a=ex(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=ux.bind(null,t,s);s.then(c,c)}})}function Pn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(Ca(T.type)){Ye=T.stateNode,zn=!1;break t}break;case 5:Ye=T.stateNode,zn=!1;break t;case 3:case 4:Ye=T.stateNode.containerInfo,zn=!0;break t}T=T.return}if(Ye===null)throw Error(r(160));Im(f,x,c),Ye=null,zn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gm(n,t),n=n.sibling}var di=null;function Gm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pn(n,t),Bn(t),s&4&&(ya(3,t,t.return),co(3,t),ya(5,t,t.return));break;case 1:Pn(n,t),Bn(t),s&512&&(sn||a===null||Ri(a,a.return)),s&64&&qi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=di;if(Pn(n,t),Bn(t),s&512&&(sn||a===null||Ri(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Za]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,s,a),f[je]=t,vt(f),s=f;break t;case"link":var x=Gg("link","href",c).get(s+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Gg("meta","content",c).get(s+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[je]=t,vt(f),s=f}t.stateNode=s}else Vg(c,t.type,t.stateNode);else t.stateNode=Hg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Vg(c,t.type,t.stateNode):Hg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Ju(t,t.memoizedProps,a.memoizedProps)}break;case 27:Pn(n,t),Bn(t),s&512&&(sn||a===null||Ri(a,a.return)),a!==null&&s&4&&Ju(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Pn(n,t),Bn(t),s&512&&(sn||a===null||Ri(a,a.return)),t.flags&32){c=t.stateNode;try{Cr(c,"")}catch(It){De(t,t.return,It)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Ju(t,c,a!==null?a.memoizedProps:c)),s&1024&&(ef=!0);break;case 6:if(Pn(n,t),Bn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(It){De(t,t.return,It)}}break;case 3:if(Gl=null,c=di,di=Fl(n.containerInfo),Pn(n,t),di=c,Bn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(It){De(t,t.return,It)}ef&&(ef=!1,Vm(t));break;case 4:s=di,di=Fl(t.stateNode.containerInfo),Pn(n,t),Bn(t),di=s;break;case 12:Pn(n,t),Bn(t);break;case 31:Pn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,bl(t,s)));break;case 13:Pn(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=ft()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,bl(t,s)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=qi,ut=sn;if(qi=J||c,sn=ut||P,Pn(n,t),sn=ut,qi=J,Bn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||qi||sn||fr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=P.stateNode;var gt=P.memoizedProps.style,tt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(It){De(P,P.return,It)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(It){De(P,P.return,It)}}}else if(n.tag===18){if(a===null){P=n;try{var st=P.stateNode;c?Ug(st,!0):Ug(P.stateNode,!1)}catch(It){De(P,P.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,bl(t,a))));break;case 19:Pn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,bl(t,s)));break;case 30:break;case 21:break;default:Pn(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Nm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=$u(t);Tl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Cr(x,""),a.flags&=-33);var T=$u(t);Tl(t,T,x);break;case 3:case 4:var P=a.stateNode.containerInfo,J=$u(t);tf(t,J,P);break;default:throw Error(r(161))}}catch(ut){De(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Vm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Vm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Pm(t,n.alternate,n),n=n.sibling}function fr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),fr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Um(n,n.return,a),fr(n);break;case 27:So(n.stateNode);case 26:case 5:Ri(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}t=t.sibling}}function ji(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ji(c,f,a),co(4,f);break;case 1:if(ji(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){De(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)xp(P[c],T)}catch(J){De(s,s.return,J)}}a&&x&64&&Dm(f),uo(f,f.return);break;case 27:Om(f);case 26:case 5:ji(c,f,a),a&&s===null&&x&4&&Lm(f),uo(f,f.return);break;case 12:ji(c,f,a);break;case 31:ji(c,f,a),a&&x&4&&Fm(c,f);break;case 13:ji(c,f,a),a&&x&4&&Hm(c,f);break;case 22:f.memoizedState===null&&ji(c,f,a),uo(f,f.return);break;case 30:break;default:ji(c,f,a)}n=n.sibling}}function nf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ks(a))}function af(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ks(t))}function pi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)km(t,n,a,s),n=n.sibling}function km(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:pi(t,n,a,s),c&2048&&co(9,n);break;case 1:pi(t,n,a,s);break;case 3:pi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ks(t)));break;case 12:if(c&2048){pi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){De(n,n.return,P)}}else pi(t,n,a,s);break;case 31:pi(t,n,a,s);break;case 13:pi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?pi(t,n,a,s):fo(t,n):f._visibility&2?pi(t,n,a,s):(f._visibility|=2,jr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&nf(x,n);break;case 24:pi(t,n,a,s),c&2048&&af(n.alternate,n);break;default:pi(t,n,a,s)}}function jr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,T=a,P=s,J=x.flags;switch(x.tag){case 0:case 11:case 15:jr(f,x,T,P,c),co(8,x);break;case 23:break;case 22:var ut=x.stateNode;x.memoizedState!==null?ut._visibility&2?jr(f,x,T,P,c):fo(f,x):(ut._visibility|=2,jr(f,x,T,P,c)),c&&J&2048&&nf(x.alternate,x);break;case 24:jr(f,x,T,P,c),c&&J&2048&&af(x.alternate,x);break;default:jr(f,x,T,P,c)}n=n.sibling}}function fo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:fo(a,s),c&2048&&nf(s.alternate,s);break;case 24:fo(a,s),c&2048&&af(s.alternate,s);break;default:fo(a,s)}n=n.sibling}}var ho=8192;function Zr(t,n,a){if(t.subtreeFlags&ho)for(t=t.child;t!==null;)Xm(t,n,a),t=t.sibling}function Xm(t,n,a){switch(t.tag){case 26:Zr(t,n,a),t.flags&ho&&t.memoizedState!==null&&Gx(a,di,t.memoizedState,t.memoizedProps);break;case 5:Zr(t,n,a);break;case 3:case 4:var s=di;di=Fl(t.stateNode.containerInfo),Zr(t,n,a),di=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=ho,ho=16777216,Zr(t,n,a),ho=s):Zr(t,n,a));break;default:Zr(t,n,a)}}function qm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function po(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Ym(s,t)}qm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wm(t),t=t.sibling}function Wm(t){switch(t.tag){case 0:case 11:case 15:po(t),t.flags&2048&&ya(9,t,t.return);break;case 3:po(t);break;case 12:po(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Al(t)):po(t);break;default:po(t)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Ym(s,t)}qm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}t=t.sibling}}function Ym(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ks(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(Bm(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var nx={getCacheForType:function(t){var n=Sn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(nn).controller.signal}},ix=typeof WeakMap=="function"?WeakMap:Map,Re=0,Fe=null,he=null,_e=0,we=0,jn=null,Ma=!1,Kr=!1,rf=!1,Zi=0,Ke=0,Ea=0,hr=0,sf=0,Zn=0,Qr=0,mo=null,In=null,of=!1,Rl=0,jm=0,Cl=1/0,wl=null,Ta=null,fn=0,ba=null,Jr=null,Ki=0,lf=0,cf=null,Zm=null,go=0,uf=null;function Kn(){return(Re&2)!==0&&_e!==0?_e&-_e:O.T!==null?gf():Bs()}function Km(){if(Zn===0)if((_e&536870912)===0||xe){var t=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),Zn=t}else Zn=536870912;return t=Wn.current,t!==null&&(t.flags|=32),Zn}function Fn(t,n,a){(t===Fe&&(we===2||we===9)||t.cancelPendingCommit!==null)&&($r(t,0),Aa(t,_e,Zn,!1)),_n(t,a),((Re&2)===0||t!==Fe)&&(t===Fe&&((Re&2)===0&&(hr|=a),Ke===4&&Aa(t,_e,Zn,!1)),Ci(t))}function Qm(t,n,a){if((Re&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||$t(t,n),c=s?sx(t,n):hf(t,n,!0),f=s;do{if(c===0){Kr&&!s&&Aa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ax(a)){c=hf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;c=mo;var P=T.current.memoizedState.isDehydrated;if(P&&($r(T,x).flags|=256),x=hf(T,x,!1),x!==2){if(rf&&!P){T.errorRecoveryDisabledLanes|=f,hr|=f,c=4;break t}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){$r(t,0),Aa(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Aa(s,n,Zn,!Ma);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Rl+300-ft(),10<c)){if(Aa(s,n,Zn,!Ma),Dt(s,0,!0)!==0)break t;Ki=n,s.timeoutHandle=Cg(Jm.bind(null,s,a,In,wl,of,n,Zn,hr,Qr,Ma,f,"Throttled",-0,0),c);break t}Jm(s,a,In,wl,of,n,Zn,hr,Qr,Ma,f,null,-0,0)}}break}while(!0);Ci(t)}function Jm(t,n,a,s,c,f,x,T,P,J,ut,gt,tt,st){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},Xm(n,f,gt);var It=(f&62914560)===f?Rl-ft():(f&4194048)===f?jm-ft():0;if(It=Vx(gt,It),It!==null){Ki=f,t.cancelPendingCommit=It(sg.bind(null,t,n,f,a,s,c,x,T,P,ut,gt,null,tt,st)),Aa(t,f,x,!J);return}}sg(t,n,f,a,s,c,x,T,P)}function ax(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Xn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(t,n,a,s){n&=~sf,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Jt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&zs(t,a,n)}function Dl(){return(Re&6)===0?(_o(0),!1):!0}function ff(){if(he!==null){if(we===0)var t=he.return;else t=he,Fi=ir=null,Au(t),kr=null,Js=0,t=he;for(;t!==null;)wm(t.alternate,t),t=t.return;he=null}}function $r(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Tx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ki=0,ff(),Fe=t,he=a=Bi(t.current,null),_e=n,we=0,jn=null,Ma=!1,Kr=$t(t,n),rf=!1,Qr=Zn=sf=hr=Ea=Ke=0,In=mo=null,of=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Jt(s),f=1<<c;n|=t[c],s&=~f}return Zi=n,Qo(),a}function $m(t,n){re=null,O.H=so,n===Vr||n===rl?(n=mp(),we=3):n===pu?(n=mp(),we=4):we=n===Vu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,he===null&&(Ke=1,xl(t,ei(n,t.current)))}function tg(){var t=Wn.current;return t===null?!0:(_e&4194048)===_e?ri===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ri:!1}function eg(){var t=O.H;return O.H=so,t===null?so:t}function ng(){var t=O.A;return O.A=nx,t}function Ul(){Ke=4,Ma||(_e&4194048)!==_e&&Wn.current!==null||(Kr=!0),(Ea&134217727)===0&&(hr&134217727)===0||Fe===null||Aa(Fe,_e,Zn,!1)}function hf(t,n,a){var s=Re;Re|=2;var c=eg(),f=ng();(Fe!==t||_e!==n)&&(wl=null,$r(t,n)),n=!1;var x=Ke;t:do try{if(we!==0&&he!==null){var T=he,P=jn;switch(we){case 8:ff(),x=6;break t;case 3:case 2:case 9:case 6:Wn.current===null&&(n=!0);var J=we;if(we=0,jn=null,ts(t,T,P,J),a&&Kr){x=0;break t}break;default:J=we,we=0,jn=null,ts(t,T,P,J)}}rx(),x=Ke;break}catch(ut){$m(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Fi=ir=null,Re=s,O.H=c,O.A=f,he===null&&(Fe=null,_e=0,Qo()),x}function rx(){for(;he!==null;)ig(he)}function sx(t,n){var a=Re;Re|=2;var s=eg(),c=ng();Fe!==t||_e!==n?(wl=null,Cl=ft()+500,$r(t,n)):Kr=$t(t,n);t:do try{if(we!==0&&he!==null){n=he;var f=jn;e:switch(we){case 1:we=0,jn=null,ts(t,n,f,1);break;case 2:case 9:if(dp(f)){we=0,jn=null,ag(n);break}n=function(){we!==2&&we!==9||Fe!==t||(we=7),Ci(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:dp(f)?(we=0,jn=null,ag(n)):(we=0,jn=null,ts(t,n,f,7));break;case 5:var x=null;switch(he.tag){case 26:x=he.memoizedState;case 5:case 27:var T=he;if(x?kg(x):T.stateNode.complete){we=0,jn=null;var P=T.sibling;if(P!==null)he=P;else{var J=T.return;J!==null?(he=J,Ll(J)):he=null}break e}}we=0,jn=null,ts(t,n,f,5);break;case 6:we=0,jn=null,ts(t,n,f,6);break;case 8:ff(),Ke=6;break t;default:throw Error(r(462))}}ox();break}catch(ut){$m(t,ut)}while(!0);return Fi=ir=null,O.H=s,O.A=c,Re=a,he!==null?0:(Fe=null,_e=0,Qo(),Ke)}function ox(){for(;he!==null&&!A();)ig(he)}function ig(t){var n=Rm(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?Ll(t):he=n}function ag(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ym(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=ym(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Au(n);default:wm(a,n),n=he=np(n,Zi),n=Rm(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?Ll(t):he=n}function ts(t,n,a,s){Fi=ir=null,Au(n),kr=null,Js=0;var c=n.return;try{if(Zv(t,c,n,a,_e)){Ke=1,xl(t,ei(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;Ke=1,xl(t,ei(a,t.current)),he=null;return}n.flags&32768?(xe||s===1?t=!0:Kr||(_e&536870912)!==0?t=!1:(Ma=t=!0,(s===2||s===9||s===3||s===6)&&(s=Wn.current,s!==null&&s.tag===13&&(s.flags|=16384))),rg(n,t)):Ll(n)}function Ll(t){var n=t;do{if((n.flags&32768)!==0){rg(n,Ma);return}t=n.return;var a=Jv(n.alternate,n,Zi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Ke===0&&(Ke=5)}function rg(t,n){do{var a=$v(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Ke=6,he=null}function sg(t,n,a,s,c,f,x,T,P){t.cancelPendingCommit=null;do Nl();while(fn!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=$c,ui(t,a,f,x,T,P),t===Fe&&(he=Fe=null,_e=0),Jr=n,ba=t,Ki=a,lf=f,cf=c,Zm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fx(wt,function(){return fg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=K.p,K.p=2,x=Re,Re|=4;try{tx(t,n,a)}finally{Re=x,K.p=c,O.T=s}}fn=1,og(),lg(),cg()}}function og(){if(fn===1){fn=0;var t=ba,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=K.p;K.p=2;var c=Re;Re|=4;try{Gm(n,t);var f=Tf,x=Yd(t.containerInfo),T=f.focusedElem,P=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Wd(T.ownerDocument.documentElement,T)){if(P!==null&&jc(T)){var J=P.start,ut=P.end;if(ut===void 0&&(ut=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ut,T.value.length);else{var gt=T.ownerDocument||document,tt=gt&&gt.defaultView||window;if(tt.getSelection){var st=tt.getSelection(),It=T.textContent.length,Qt=Math.min(P.start,It),Pe=P.end===void 0?Qt:Math.min(P.end,It);!st.extend&&Qt>Pe&&(x=Pe,Pe=Qt,Qt=x);var Y=qd(T,Qt),G=qd(T,Pe);if(Y&&G&&(st.rangeCount!==1||st.anchorNode!==Y.node||st.anchorOffset!==Y.offset||st.focusNode!==G.node||st.focusOffset!==G.offset)){var Q=gt.createRange();Q.setStart(Y.node,Y.offset),st.removeAllRanges(),Qt>Pe?(st.addRange(Q),st.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),st.addRange(Q))}}}}for(gt=[],st=T;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var ht=gt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}ql=!!Ef,Tf=Ef=null}finally{Re=c,K.p=s,O.T=a}}t.current=n,fn=2}}function lg(){if(fn===2){fn=0;var t=ba,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=K.p;K.p=2;var c=Re;Re|=4;try{Pm(t,n.alternate,n)}finally{Re=c,K.p=s,O.T=a}}fn=3}}function cg(){if(fn===4||fn===3){fn=0,et();var t=ba,n=Jr,a=Ki,s=Zm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,Jr=ba=null,ug(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ta=null),Ar(a),n=n.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=K.p,K.p=2,O.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var T=s[x];f(T.value,{componentStack:T.stack})}}finally{O.T=n,K.p=c}}(Ki&3)!==0&&Nl(),Ci(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===uf?go++:(go=0,uf=t):go=0,_o(0)}}function ug(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ks(n)))}function Nl(){return og(),lg(),cg(),fg()}function fg(){if(fn!==5)return!1;var t=ba,n=lf;lf=0;var a=Ar(Ki),s=O.T,c=K.p;try{K.p=32>a?32:a,O.T=null,a=cf,cf=null;var f=ba,x=Ki;if(fn=0,Jr=ba=null,Ki=0,(Re&6)!==0)throw Error(r(331));var T=Re;if(Re|=4,Wm(f.current),km(f,f.current,x,a),Re=T,_o(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Yt,f)}catch{}return!0}finally{K.p=c,O.T=s,ug(t,n)}}function hg(t,n,a){n=ei(a,n),n=Gu(t.stateNode,n,2),t=va(t,n,2),t!==null&&(_n(t,2),Ci(t))}function De(t,n,a){if(t.tag===3)hg(t,t,a);else for(;n!==null;){if(n.tag===3){hg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){t=ei(a,t),a=dm(2),s=va(n,a,2),s!==null&&(pm(a,s,n,t),_n(s,2),Ci(s));break}}n=n.return}}function df(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new ix;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(rf=!0,c.add(a),t=lx.bind(null,t,n,a),n.then(t,t))}function lx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Fe===t&&(_e&a)===a&&(Ke===4||Ke===3&&(_e&62914560)===_e&&300>ft()-Rl?(Re&2)===0&&$r(t,0):sf|=a,Qr===_e&&(Qr=0)),Ci(t)}function dg(t,n){n===0&&(n=cn()),t=tr(t,n),t!==null&&(_n(t,n),Ci(t))}function cx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),dg(t,a)}function ux(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),dg(t,a)}function fx(t,n){return qt(t,n)}var Ol=null,es=null,pf=!1,zl=!1,mf=!1,Ra=0;function Ci(t){t!==es&&t.next===null&&(es===null?Ol=es=t:es=es.next=t),zl=!0,pf||(pf=!0,dx())}function _o(t,n){if(!mf&&zl){mf=!0;do for(var a=!1,s=Ol;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Jt(42|t)+1)-1,f&=c&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,_g(s,f))}else f=_e,f=Dt(s,s===Fe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||$t(s,f)||(a=!0,_g(s,f));s=s.next}while(a);mf=!1}}function hx(){pg()}function pg(){zl=pf=!1;var t=0;Ra!==0&&Ex()&&(t=Ra);for(var n=ft(),a=null,s=Ol;s!==null;){var c=s.next,f=mg(s,n);f===0?(s.next=null,a===null?Ol=c:a.next=c,c===null&&(es=a)):(a=s,(t!==0||(f&3)!==0)&&(zl=!0)),s=c}fn!==0&&fn!==5||_o(t),Ra!==0&&(Ra=0)}function mg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Jt(f),T=1<<x,P=c[x];P===-1?((T&a)===0||(T&s)!==0)&&(c[x]=We(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=Fe,a=_e,a=Dt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&U(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&U(s),Ar(a)){case 2:case 8:a=kt;break;case 32:a=wt;break;case 268435456:a=me;break;default:a=wt}return s=gg.bind(null,t),a=qt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&U(s),t.callbackPriority=2,t.callbackNode=null,2}function gg(t,n){if(fn!==0&&fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nl()&&t.callbackNode!==a)return null;var s=_e;return s=Dt(t,t===Fe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Qm(t,s,n),mg(t,ft()),t.callbackNode!=null&&t.callbackNode===a?gg.bind(null,t):null)}function _g(t,n){if(Nl())return null;Qm(t,n,!0)}function dx(){bx(function(){(Re&6)!==0?qt(mt,hx):pg()})}function gf(){if(Ra===0){var t=Hr;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ra=t}return Ra}function vg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ko(""+t)}function xg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function px(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=vg((c[vn]||null).action),x=s.submitter;x&&(n=(n=x[vn]||null)?vg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Yo("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ra!==0){var P=x?xg(c,x):new FormData(c);zu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=x?xg(c,x):new FormData(c),zu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var _f=0;_f<Jc.length;_f++){var vf=Jc[_f],mx=vf.toLowerCase(),gx=vf[0].toUpperCase()+vf.slice(1);hi(mx,"on"+gx)}hi(Kd,"onAnimationEnd"),hi(Qd,"onAnimationIteration"),hi(Jd,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(Lv,"onTransitionRun"),hi(Nv,"onTransitionStart"),hi(Ov,"onTransitionCancel"),hi($d,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_x=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Sg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var T=s[x],P=T.instance,J=T.currentTarget;if(T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ut){Ko(ut)}c.currentTarget=null,f=P}else for(x=0;x<s.length;x++){if(T=s[x],P=T.instance,J=T.currentTarget,T=T.listener,P!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ut){Ko(ut)}c.currentTarget=null,f=P}}}}function de(t,n){var a=n[Is];a===void 0&&(a=n[Is]=new Set);var s=t+"__bubble";a.has(s)||(yg(n,t,2,!1),a.add(s))}function xf(t,n,a){var s=0;n&&(s|=4),yg(a,t,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Sf(t){if(!t[Pl]){t[Pl]=!0,Ut.forEach(function(a){a!=="selectionchange"&&(_x.has(a)||xf(a,!1,t),xf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,xf("selectionchange",!1,n))}}function yg(t,n,a,s){switch(Kg(n)){case 2:var c=qx;break;case 8:c=Wx;break;default:c=zf}a=c.bind(null,n,a,t),c=void 0,!Fc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function yf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var T=s.stateNode.containerInfo;if(T===c)break;if(x===4)for(x=s.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;T!==null;){if(x=X(T),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){s=f=x;continue t}T=T.parentNode}}s=s.return}Ad(function(){var J=f,ut=Bc(a),gt=[];t:{var tt=tp.get(t);if(tt!==void 0){var st=Yo,It=t;switch(t){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":st=uv;break;case"focusin":It="focus",st=kc;break;case"focusout":It="blur",st=kc;break;case"beforeblur":case"afterblur":st=kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=dv;break;case Kd:case Qd:case Jd:st=ev;break;case $d:st=mv;break;case"scroll":case"scrollend":st=K0;break;case"wheel":st=_v;break;case"copy":case"cut":case"paste":st=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Ud;break;case"toggle":case"beforetoggle":st=xv}var Qt=(n&4)!==0,Pe=!Qt&&(t==="scroll"||t==="scrollend"),Y=Qt?tt!==null?tt+"Capture":null:tt;Qt=[];for(var G=J,Q;G!==null;){var ht=G;if(Q=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Q===null||Y===null||(ht=Fs(G,Y),ht!=null&&Qt.push(xo(G,ht,Q))),Pe)break;G=G.return}0<Qt.length&&(tt=new st(tt,It,null,a,ut),gt.push({event:tt,listeners:Qt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",tt&&a!==Pc&&(It=a.relatedTarget||a.fromElement)&&(X(It)||It[Ni]))break t;if((st||tt)&&(tt=ut.window===ut?ut:(tt=ut.ownerDocument)?tt.defaultView||tt.parentWindow:window,st?(It=a.relatedTarget||a.toElement,st=J,It=It?X(It):null,It!==null&&(Pe=u(It),Qt=It.tag,It!==Pe||Qt!==5&&Qt!==27&&Qt!==6)&&(It=null)):(st=null,It=J),st!==It)){if(Qt=wd,ht="onMouseLeave",Y="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=Ud,ht="onPointerLeave",Y="onPointerEnter",G="pointer"),Pe=st==null?tt:it(st),Q=It==null?tt:it(It),tt=new Qt(ht,G+"leave",st,a,ut),tt.target=Pe,tt.relatedTarget=Q,ht=null,X(ut)===J&&(Qt=new Qt(Y,G+"enter",It,a,ut),Qt.target=Q,Qt.relatedTarget=Pe,ht=Qt),Pe=ht,st&&It)e:{for(Qt=vx,Y=st,G=It,Q=0,ht=Y;ht;ht=Qt(ht))Q++;ht=0;for(var Zt=G;Zt;Zt=Qt(Zt))ht++;for(;0<Q-ht;)Y=Qt(Y),Q--;for(;0<ht-Q;)G=Qt(G),ht--;for(;Q--;){if(Y===G||G!==null&&Y===G.alternate){Qt=Y;break e}Y=Qt(Y),G=Qt(G)}Qt=null}else Qt=null;st!==null&&Mg(gt,tt,st,Qt,!1),It!==null&&Pe!==null&&Mg(gt,Pe,It,Qt,!0)}}t:{if(tt=J?it(J):window,st=tt.nodeName&&tt.nodeName.toLowerCase(),st==="select"||st==="input"&&tt.type==="file")var Te=Fd;else if(Bd(tt))if(Hd)Te=wv;else{Te=Rv;var Vt=Av}else st=tt.nodeName,!st||st.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&zc(J.elementType)&&(Te=Fd):Te=Cv;if(Te&&(Te=Te(t,J))){Id(gt,Te,a,ut);break t}Vt&&Vt(t,tt,J),t==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&un(tt,"number",tt.value)}switch(Vt=J?it(J):window,t){case"focusin":(Bd(Vt)||Vt.contentEditable==="true")&&(Lr=Vt,Zc=J,Ys=null);break;case"focusout":Ys=Zc=Lr=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,jd(gt,a,ut);break;case"selectionchange":if(Uv)break;case"keydown":case"keyup":jd(gt,a,ut)}var se;if(qc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Ur?zd(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Ld&&a.locale!=="ko"&&(Ur||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ur&&(se=Rd()):(fa=ut,Hc="value"in fa?fa.value:fa.textContent,Ur=!0)),Vt=Bl(J,ve),0<Vt.length&&(ve=new Dd(ve,t,null,a,ut),gt.push({event:ve,listeners:Vt}),se?ve.data=se:(se=Pd(a),se!==null&&(ve.data=se)))),(se=yv?Mv(t,a):Ev(t,a))&&(ve=Bl(J,"onBeforeInput"),0<ve.length&&(Vt=new Dd("onBeforeInput","beforeinput",null,a,ut),gt.push({event:Vt,listeners:ve}),Vt.data=se)),px(gt,t,J,a,ut)}Sg(gt,n)})}function xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Fs(t,a),c!=null&&s.unshift(xo(t,c,f)),c=Fs(t,n),c!=null&&s.push(xo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function vx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mg(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var T=a,P=T.alternate,J=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||J===null||(P=J,c?(J=Fs(a,f),J!=null&&x.unshift(xo(a,J,P))):c||(J=Fs(a,f),J!=null&&x.push(xo(a,J,P)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var xx=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function Eg(t){return(typeof t=="string"?t:""+t).replace(xx,`
`).replace(Sx,"")}function Tg(t,n){return n=Eg(n),Eg(t)===n}function ze(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Cr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Cr(t,""+s);break;case"className":Ie(t,"class",s);break;case"tabIndex":Ie(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,a,s);break;case"style":Td(t,s,f);break;case"data":if(n!=="object"){Ie(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(t,n,"name",c.name,c,null),ze(t,n,"formEncType",c.formEncType,c,null),ze(t,n,"formMethod",c.formMethod,c,null),ze(t,n,"formTarget",c.formTarget,c,null)):(ze(t,n,"encType",c.encType,c,null),ze(t,n,"method",c.method,c,null),ze(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=zi);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":de("beforetoggle",t),de("toggle",t),Ve(t,"popover",s);break;case"xlinkActuate":ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ae(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ae(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ae(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ae(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ve(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=j0.get(a)||a,Ve(t,a,s))}}function Mf(t,n,a,s,c,f){switch(a){case"style":Td(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Cr(t,s):(typeof s=="number"||typeof s=="bigint")&&Cr(t,""+s);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"onClick":s!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ve(t,a,s)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,f,x,a,null)}}c&&ze(t,n,"srcSet",a.srcSet,a,null),s&&ze(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var T=f=x=c=null,P=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":x=ut;break;case"checked":P=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ze(t,n,s,ut,a,null)}}Dn(t,f,T,P,J,x,c,!1);return;case"select":de("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":s=T;default:ze(t,n,c,T,a,null)}n=f,a=x,t.multiple=!!s,n!=null?Qe(t,!!s,n,!1):a!=null&&Qe(t,!!s,a,!0);return;case"textarea":de("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:ze(t,n,x,T,a,null)}Ti(t,s,c,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ze(t,n,P,s,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(s=0;s<vo.length;s++)de(vo[s],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,J,s,a,null)}return;default:if(zc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&Mf(t,n,ut,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&ze(t,n,T,s,a,null))}function yx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,T=null,P=null,J=null,ut=null;for(st in a){var gt=a[st];if(a.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":P=gt;default:s.hasOwnProperty(st)||ze(t,n,st,null,s,gt)}}for(var tt in s){var st=s[tt];if(gt=a[tt],s.hasOwnProperty(tt)&&(st!=null||gt!=null))switch(tt){case"type":f=st;break;case"name":c=st;break;case"checked":J=st;break;case"defaultChecked":ut=st;break;case"value":x=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==gt&&ze(t,n,tt,st,s,gt)}}bn(t,x,T,P,J,ut,f,c);return;case"select":st=x=T=tt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":st=P;default:s.hasOwnProperty(f)||ze(t,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":tt=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==P&&ze(t,n,c,f,s,P)}n=T,a=x,s=st,tt!=null?Qe(t,!!a,tt,!1):!!s!=!!a&&(n!=null?Qe(t,!!a,n,!0):Qe(t,!!a,a?[]:"",!1));return;case"textarea":st=tt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ze(t,n,T,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":tt=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&ze(t,n,x,c,s,f)}Rr(t,tt,st);return;case"option":for(var It in a)if(tt=a[It],a.hasOwnProperty(It)&&tt!=null&&!s.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:ze(t,n,It,null,s,tt)}for(P in s)if(tt=s[P],st=a[P],s.hasOwnProperty(P)&&tt!==st&&(tt!=null||st!=null))switch(P){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:ze(t,n,P,tt,s,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)tt=a[Qt],a.hasOwnProperty(Qt)&&tt!=null&&!s.hasOwnProperty(Qt)&&ze(t,n,Qt,null,s,tt);for(J in s)if(tt=s[J],st=a[J],s.hasOwnProperty(J)&&tt!==st&&(tt!=null||st!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:ze(t,n,J,tt,s,st)}return;default:if(zc(n)){for(var Pe in a)tt=a[Pe],a.hasOwnProperty(Pe)&&tt!==void 0&&!s.hasOwnProperty(Pe)&&Mf(t,n,Pe,void 0,s,tt);for(ut in s)tt=s[ut],st=a[ut],!s.hasOwnProperty(ut)||tt===st||tt===void 0&&st===void 0||Mf(t,n,ut,tt,s,st);return}}for(var Y in a)tt=a[Y],a.hasOwnProperty(Y)&&tt!=null&&!s.hasOwnProperty(Y)&&ze(t,n,Y,null,s,tt);for(gt in s)tt=s[gt],st=a[gt],!s.hasOwnProperty(gt)||tt===st||tt==null&&st==null||ze(t,n,gt,tt,s,st)}function bg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,x=c.initiatorType,T=c.duration;if(f&&T&&bg(x)){for(x=0,T=c.responseEnd,s+=1;s<a.length;s++){var P=a[s],J=P.startTime;if(J>T)break;var ut=P.transferSize,gt=P.initiatorType;ut&&bg(gt)&&(P=P.responseEnd,x+=ut*(P<T?1:(T-J)/(P-J)))}if(--s,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ef=null,Tf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function Ag(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Af=null;function Ex(){var t=window.event;return t&&t.type==="popstate"?t===Af?!1:(Af=t,!0):(Af=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,Tx=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(t){return wg.resolve(null).then(t).catch(Ax)}:Cg;function Ax(t){setTimeout(function(){throw t})}function Ca(t){return t==="head"}function Dg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),rs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")So(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,So(a);for(var f=a.firstChild;f;){var x=f.nextSibling,T=f.nodeName;f[Za]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&So(t.ownerDocument.body);a=c}while(a);rs(n)}function Ug(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Rf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Rf(a),C(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Rx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=si(t.nextSibling),t===null)break}return null}function Cx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=si(t.nextSibling),t===null))return null;return t}function Lg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=si(t.nextSibling),t===null))return null;return t}function Cf(t){return t.data==="$?"||t.data==="$~"}function wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function wx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Df=null;function Ng(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Og(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function zg(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function So(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);C(t)}var oi=new Map,Pg=new Set;function Fl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=K.d;K.d={f:Dx,r:Ux,D:Lx,C:Nx,L:Ox,m:zx,X:Bx,S:Px,M:Ix};function Dx(){var t=Qi.f(),n=Dl();return t||n}function Ux(t){var n=nt(t);n!==null&&n.tag===5&&n.type==="form"?$p(n):Qi.r(t)}var ns=typeof document>"u"?null:document;function Bg(t,n,a){var s=ns;if(s&&typeof n=="string"&&n){var c=fe(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Pg.has(c)||(Pg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",t),vt(n),s.head.appendChild(n)))}}function Lx(t){Qi.D(t),Bg("dns-prefetch",t,null)}function Nx(t,n){Qi.C(t,n),Bg("preconnect",t,n)}function Ox(t,n,a){Qi.L(t,n,a);var s=ns;if(s&&t&&n){var c='link[rel="preload"][as="'+fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+fe(a.imageSizes)+'"]')):c+='[href="'+fe(t)+'"]';var f=c;switch(n){case"style":f=is(t);break;case"script":f=as(t)}oi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(yo(f))||n==="script"&&s.querySelector(Mo(f))||(n=s.createElement("link"),Mn(n,"link",t),vt(n),s.head.appendChild(n)))}}function zx(t,n){Qi.m(t,n);var a=ns;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+fe(s)+'"][href="'+fe(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(t)}if(!oi.has(f)&&(t=_({rel:"modulepreload",href:t},n),oi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mo(f)))return}s=a.createElement("link"),Mn(s,"link",t),vt(s),a.head.appendChild(s)}}}function Px(t,n,a){Qi.S(t,n,a);var s=ns;if(s&&t){var c=W(s).hoistableStyles,f=is(t);n=n||"default";var x=c.get(f);if(!x){var T={loading:0,preload:null};if(x=s.querySelector(yo(f)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(f))&&Uf(t,a);var P=x=s.createElement("link");vt(P),Mn(P,"link",t),P._p=new Promise(function(J,ut){P.onload=J,P.onerror=ut}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Hl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:T},c.set(f,x)}}}function Bx(t,n){Qi.X(t,n);var a=ns;if(a&&t){var s=W(a).hoistableScripts,c=as(t),f=s.get(c);f||(f=a.querySelector(Mo(c)),f||(t=_({src:t,async:!0},n),(n=oi.get(c))&&Lf(t,n),f=a.createElement("script"),vt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Ix(t,n){Qi.M(t,n);var a=ns;if(a&&t){var s=W(a).hoistableScripts,c=as(t),f=s.get(c);f||(f=a.querySelector(Mo(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=oi.get(c))&&Lf(t,n),f=a.createElement("script"),vt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Ig(t,n,a,s){var c=(c=Tt.current)?Fl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=W(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=is(a.href);var f=W(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(yo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),f||Fx(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=W(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function is(t){return'href="'+fe(t)+'"'}function yo(t){return'link[rel="stylesheet"]['+t+"]"}function Fg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Fx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),vt(n),t.head.appendChild(n))}function as(t){return'[src="'+fe(t)+'"]'}function Mo(t){return"script[async]"+t}function Hg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+fe(a.href)+'"]');if(s)return n.instance=s,vt(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),vt(s),Mn(s,"style",c),Hl(s,a.precedence,t),n.instance=s;case"stylesheet":c=is(a.href);var f=t.querySelector(yo(c));if(f)return n.state.loading|=4,n.instance=f,vt(f),f;s=Fg(a),(c=oi.get(c))&&Uf(s,c),f=(t.ownerDocument||t).createElement("link"),vt(f);var x=f;return x._p=new Promise(function(T,P){x.onload=T,x.onerror=P}),Mn(f,"link",s),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=as(a.src),(c=t.querySelector(Mo(f)))?(n.instance=c,vt(c),c):(s=a,(c=oi.get(f))&&(s=_({},a),Lf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),vt(c),Mn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,t));return n.instance}function Hl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var T=s[x];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Uf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Lf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function Gg(t,n,a){if(Gl===null){var s=new Map,c=Gl=new Map;c.set(a,s)}else c=Gl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Za]||f[je]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=s.get(x);T?T.push(f):s.set(x,[f])}}return s}function Vg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Hx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function kg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Gx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=is(s.href),f=n.querySelector(yo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,vt(f);return}f=n.ownerDocument||n,s=Fg(s),(c=oi.get(c))&&Uf(s,c),f=f.createElement("link"),vt(f);var x=f;x._p=new Promise(function(T,P){x.onload=T,x.onerror=P}),Mn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Nf=0;function Vx(t,n){return t.stylesheets&&t.count===0&&Xl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Nf===0&&(Nf=62500*Mx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Nf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function Xl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(kx,t),kl=null,Vl.call(t))}function kx(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var s=a.get(null);else{a=new Map,kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Vl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:N,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Xx(t,n,a,s,c,f,x,T,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ye(0),this.hiddenUpdates=ye(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Xg(t,n,a,s,c,f,x,T,P,J,ut,gt){return t=new Xx(t,n,a,x,P,J,ut,gt,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=fu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},mu(f),t}function qg(t){return t?(t=zr,t):zr}function Wg(t,n,a,s,c,f){c=qg(c),s.context===null?s.context=c:s.pendingContext=c,s=_a(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=va(t,s,n),a!==null&&(Fn(a,t,n),to(a,t,n))}function Yg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Of(t,n){Yg(t,n),(t=t.alternate)&&Yg(t,n)}function jg(t){if(t.tag===13||t.tag===31){var n=tr(t,67108864);n!==null&&Fn(n,t,67108864),Of(t,67108864)}}function Zg(t){if(t.tag===13||t.tag===31){var n=Kn();n=Ya(n);var a=tr(t,n);a!==null&&Fn(a,t,n),Of(t,n)}}var ql=!0;function qx(t,n,a,s){var c=O.T;O.T=null;var f=K.p;try{K.p=2,zf(t,n,a,s)}finally{K.p=f,O.T=c}}function Wx(t,n,a,s){var c=O.T;O.T=null;var f=K.p;try{K.p=8,zf(t,n,a,s)}finally{K.p=f,O.T=c}}function zf(t,n,a,s){if(ql){var c=Pf(s);if(c===null)yf(t,n,s,Wl,a),Qg(t,s);else if(jx(c,t,n,a,s))s.stopPropagation();else if(Qg(t,s),n&4&&-1<Yx.indexOf(t)){for(;c!==null;){var f=nt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ct(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var P=1<<31-Jt(x);T.entanglements[1]|=P,x&=~P}Ci(f),(Re&6)===0&&(Cl=ft()+500,_o(0))}}break;case 31:case 13:T=tr(f,2),T!==null&&Fn(T,f,2),Dl(),Of(f,2)}if(f=Pf(s),f===null&&yf(t,n,s,Wl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else yf(t,n,s,null,a)}}function Pf(t){return t=Bc(t),Bf(t)}var Wl=null;function Bf(t){if(Wl=null,t=X(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wl=t,null}function Kg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case mt:return 2;case kt:return 8;case wt:case Pt:return 32;case me:return 268435456;default:return 32}default:return 32}}var If=!1,wa=null,Da=null,Ua=null,To=new Map,bo=new Map,La=[],Yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qg(t,n){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Ao(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=nt(n),n!==null&&jg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function jx(t,n,a,s,c){switch(n){case"focusin":return wa=Ao(wa,t,n,a,s,c),!0;case"dragenter":return Da=Ao(Da,t,n,a,s,c),!0;case"mouseover":return Ua=Ao(Ua,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return To.set(f,Ao(To.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,Ao(bo.get(f)||null,t,n,a,s,c)),!0}return!1}function Jg(t){var n=X(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ja(t.priority,function(){Zg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,ja(t.priority,function(){Zg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Pf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Pc=s,a.target.dispatchEvent(s),Pc=null}else return n=nt(a),n!==null&&jg(n),t.blockedOn=a,!1;n.shift()}return!0}function $g(t,n,a){Yl(t)&&a.delete(n)}function Zx(){If=!1,wa!==null&&Yl(wa)&&(wa=null),Da!==null&&Yl(Da)&&(Da=null),Ua!==null&&Yl(Ua)&&(Ua=null),To.forEach($g),bo.forEach($g)}function jl(t,n){t.blockedOn===n&&(t.blockedOn=null,If||(If=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Zx)))}var Zl=null;function t_(t){Zl!==t&&(Zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Bf(s||a)===null)continue;break}var f=nt(a);f!==null&&(t.splice(n,3),n-=3,zu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function rs(t){function n(P){return jl(P,t)}wa!==null&&jl(wa,t),Da!==null&&jl(Da,t),Ua!==null&&jl(Ua,t),To.forEach(n),bo.forEach(n);for(var a=0;a<La.length;a++){var s=La[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)Jg(a),a.blockedOn===null&&La.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[vn]||null;if(typeof f=="function")x||t_(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[vn]||null)T=x.formAction;else if(Bf(c)!==null)continue}else T=x.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),t_(a)}}}function e_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Ff(t){this._internalRoot=t}Kl.prototype.render=Ff.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();Wg(a,s,t,n,null,null)},Kl.prototype.unmount=Ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Wg(t.current,2,null,t,null,null),Dl(),n[Ni]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Bs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,t),a===0&&Jg(t)}};var n_=e.version;if(n_!=="19.2.6")throw Error(r(527,n_,"19.2.6"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Kx={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Yt=Ql.inject(Kx),Xt=Ql}catch{}}return Co.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=cm,f=um,x=fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Xg(t,1,!1,null,null,a,s,null,c,f,x,e_),t[Ni]=n.current,Sf(t),new Ff(n)},Co.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=cm,x=um,T=fm,P=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Xg(t,1,!0,n,a??null,s,c,P,f,x,T,e_),n.context=qg(null),a=n.current,s=Kn(),s=Ya(s),c=_a(s),c.callback=null,va(a,c,s),a=s,n.current.lanes=a,_n(n,a),Ci(n),t[Ni]=n.current,Sf(t),new Kl(n)},Co.version="19.2.6",Co}var h_;function lS(){if(h_)return Vf.exports;h_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Vf.exports=oS(),Vf.exports}var cS=lS();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p0=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=En.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},m)=>En.createElement("svg",{ref:m,...fS,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:p0("lucide",l),...d},[...h.map(([p,g])=>En.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=(o,e)=>{const i=En.forwardRef(({className:r,...l},u)=>En.createElement(hS,{ref:u,iconNode:e,className:p0(`lucide-${uS(o)}`,r),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=Mi("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Mi("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=Mi("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Mi("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Mi("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=Mi("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=Mi("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=Mi("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=Mi("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=Mi("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=Mi("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);async function SS(){const i=document.createElement("canvas");i.width=4096,i.height=2048;const r=i.getContext("2d");if(!r)throw new Error("Canvas 2D rendering is unavailable.");const l=r.createLinearGradient(0,0,0,2048*.58);l.addColorStop(0,"#7fd5ff"),l.addColorStop(.48,"#d7f0ff"),l.addColorStop(1,"#f9d58e"),r.fillStyle=l,r.fillRect(0,0,4096,2048*.58);const u=r.createRadialGradient(4096*.18,2048*.22,18,4096*.18,2048*.22,420);u.addColorStop(0,"rgba(255, 247, 196, 0.95)"),u.addColorStop(.35,"rgba(255, 201, 111, 0.38)"),u.addColorStop(1,"rgba(255, 201, 111, 0)"),r.fillStyle=u,r.fillRect(0,0,4096,2048);const h=(p,g,_,S)=>{r.beginPath(),r.moveTo(0,p);for(let M=0;M<=4096;M+=16){const b=M/4096*Math.PI*2,w=p-Math.sin(b*2.2+S)*g*.5-Math.sin(b*6.7+S*.7)*g*.24-Math.sin(b*13.1+S*1.4)*g*.15;r.lineTo(M,w)}r.lineTo(4096,2048*.62),r.lineTo(0,2048*.62),r.closePath(),r.fillStyle=_,r.fill()};h(2048*.53,138,"#627d78",.2),h(2048*.59,112,"#365f5f",1.4);const d=r.createLinearGradient(0,2048*.55,0,2048);d.addColorStop(0,"#3f7d66"),d.addColorStop(.5,"#244c46"),d.addColorStop(1,"#171819"),r.fillStyle=d,r.fillRect(0,2048*.56,4096,2048*.44),r.strokeStyle="rgba(255,255,255,0.17)",r.lineWidth=2;for(let p=2048*.63;p<2048;p+=72)r.beginPath(),r.moveTo(0,p),r.bezierCurveTo(4096*.25,p+38,4096*.75,p-38,4096,p),r.stroke();for(let p=0;p<4096;p+=192)r.beginPath(),r.moveTo(p,2048),r.lineTo(4096*.5,2048*.58),r.stroke();const m=[{x:.08,w:.035,h:.32,color:"#f26b5e"},{x:.23,w:.05,h:.42,color:"#f5ba42"},{x:.37,w:.032,h:.3,color:"#2fb6b3"},{x:.55,w:.045,h:.38,color:"#f26b5e"},{x:.72,w:.058,h:.45,color:"#2fb6b3"},{x:.9,w:.04,h:.33,color:"#f5ba42"}];for(const p of m){const g=p.x*4096,_=p.w*4096,S=2048*(.62-p.h*.28),M=2048*.86,b=r.createLinearGradient(g-_,S,g+_,M);b.addColorStop(0,p.color),b.addColorStop(1,"#121615"),r.fillStyle=b,r.fillRect(g-_/2,S,_,M-S),r.fillStyle="rgba(255,255,255,0.25)",r.fillRect(g-_*.35,S+12,_*.18,M-S-24)}r.fillStyle="rgba(8, 12, 13, 0.46)";for(let p=0;p<120;p+=1){const g=Math.random()*4096,_=2048*(.58+Math.random()*.32),S=1+Math.random()*4;r.beginPath(),r.arc(g,_,S,0,Math.PI*2),r.fill()}return new Promise((p,g)=>{i.toBlob(_=>{_?p(_):g(new Error("Could not create demo panorama."))},"image/jpeg",.96)})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="171",yS=0,g_=1,MS=2,m0=1,ES=2,ia=3,la=0,kn=1,aa=2,Va=0,Es=1,__=2,v_=3,x_=4,TS=5,yr=100,bS=101,AS=102,RS=103,CS=104,wS=200,DS=201,US=202,LS=203,Eh=204,Th=205,NS=206,OS=207,zS=208,PS=209,BS=210,IS=211,FS=212,HS=213,GS=214,bh=0,Ah=1,Rh=2,As=3,Ch=4,wh=5,Dh=6,Uh=7,g0=0,VS=1,kS=2,ka=0,XS=1,qS=2,WS=3,YS=4,jS=5,ZS=6,KS=7,_0=300,Rs=301,Cs=302,Lh=303,Nh=304,wc=306,Oh=1e3,Er=1001,zh=1002,yi=1003,QS=1004,Jl=1005,xi=1006,Yf=1007,Ga=1008,ca=1009,v0=1010,x0=1011,zo=1012,hd=1013,Tr=1014,ra=1015,Bo=1016,dd=1017,pd=1018,ws=1020,S0=35902,y0=1021,M0=1022,Si=1023,E0=1024,T0=1025,Ts=1026,Ds=1027,b0=1028,md=1029,A0=1030,gd=1031,_d=1033,yc=33776,Mc=33777,Ec=33778,Tc=33779,Ph=35840,Bh=35841,Ih=35842,Fh=35843,Hh=36196,Gh=37492,Vh=37496,kh=37808,Xh=37809,qh=37810,Wh=37811,Yh=37812,jh=37813,Zh=37814,Kh=37815,Qh=37816,Jh=37817,$h=37818,td=37819,ed=37820,nd=37821,bc=36492,id=36494,ad=36495,R0=36283,rd=36284,sd=36285,od=36286,JS=3200,$S=3201,ty=0,ey=1,Ha="",Vn="srgb",Us="srgb-linear",Rc="linear",Be="srgb",ss=7680,S_=519,ny=512,iy=513,ay=514,C0=515,ry=516,sy=517,oy=518,ly=519,y_=35044,M_="300 es",sa=2e3,Cc=2001;class Ns{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=Math.PI/180,ld=180/Math.PI;function Io(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function cy(o,e){return(o%e+e)%e}function Zf(o,e,i){return(1-i)*o+i*e}function wo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,i=0){Ge.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(e,i,r,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],S=r[2],M=r[5],b=r[8],w=l[0],y=l[3],v=l[6],I=l[1],N=l[4],D=l[7],q=l[2],V=l[5],z=l[8];return u[0]=h*w+d*I+m*q,u[3]=h*y+d*N+m*V,u[6]=h*v+d*D+m*z,u[1]=p*w+g*I+_*q,u[4]=p*y+g*N+_*V,u[7]=p*v+g*D+_*z,u[2]=S*w+M*I+b*q,u[5]=S*y+M*N+b*V,u[8]=S*v+M*D+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*h-d*p,S=d*m-g*u,M=p*u-h*m,b=i*_+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(l*p-g*r)*w,e[2]=(d*r-l*h)*w,e[3]=S*w,e[4]=(g*i-l*m)*w,e[5]=(l*u-d*i)*w,e[6]=M*w,e[7]=(r*m-p*i)*w,e[8]=(h*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Kf.makeScale(e,i)),this}rotate(e){return this.premultiply(Kf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Kf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new oe;function w0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Po(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function uy(){const o=Po("canvas");return o.style.display="block",o}const E_={};function ys(o){o in E_||(E_[o]=!0,console.warn(o))}function fy(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function hy(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dy(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const T_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function py(){const o={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=bs(l.r),l.g=bs(l.g),l.b=bs(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?Rc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Us]:{primaries:e,whitePoint:r,transfer:Rc,toXYZ:T_,fromXYZ:b_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:r,transfer:Be,toXYZ:T_,fromXYZ:b_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),o}const Ae=py();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let os;class my{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{os===void 0&&(os=Po("canvas")),os.width=e.width,os.height=e.height;const r=os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=os}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Po("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=oa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(oa(i[r]/255)*255):i[r]=oa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gy=0;class D0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Qf(l[h].image)):u.push(Qf(l[h]))}else u=Qf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Qf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?my.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _y=0;class Nn extends Ns{constructor(e=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=Er,l=Er,u=xi,h=Ga,d=Si,m=ca,p=Nn.DEFAULT_ANISOTROPY,g=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Io(),this.name="",this.source=new D0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oh:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oh:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=_0;Nn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],_=m[8],S=m[1],M=m[5],b=m[9],w=m[2],y=m[6],v=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+w)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(M+1)/2,q=(v+1)/2,V=(g+S)/4,z=(_+w)/4,F=(b+y)/4;return N>D&&N>q?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=V/r,u=z/r):D>q?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=V/l,u=F/l):q<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),r=z/u,l=F/u),this.set(r,l,u,i),this}let I=Math.sqrt((y-b)*(y-b)+(_-w)*(_-w)+(S-g)*(S-g));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(_-w)/I,this.z=(S-g)/I,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vy extends Ns{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Nn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new D0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends vy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class U0 extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xy extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const S=u[h+0],M=u[h+1],b=u[h+2],w=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=w;return}if(_!==w||m!==S||p!==M||g!==b){let y=1-d;const v=m*S+p*M+g*b+_*w,I=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const q=Math.sqrt(N),V=Math.atan2(q,v*I);y=Math.sin(y*V)/q,d=Math.sin(d*V)/q}const D=d*I;if(m=m*y+S*D,p=p*y+M*D,g=g*y+b*D,_=_*y+w*D,y===1-d){const q=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=q,p*=q,g*=q,_*=q}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=u[h],S=u[h+1],M=u[h+2],b=u[h+3];return e[i]=d*b+g*_+m*M-p*S,e[i+1]=m*b+g*S+p*_-d*M,e[i+2]=p*b+g*M+d*S-m*_,e[i+3]=g*b-d*_-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(u/2),S=m(r/2),M=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=S*g*_+p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_-S*M*b;break;case"YXZ":this._x=S*g*_+p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_+S*M*b;break;case"ZXY":this._x=S*g*_-p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_-S*M*b;break;case"ZYX":this._x=S*g*_-p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_+S*M*b;break;case"YZX":this._x=S*g*_+p*M*b,this._y=p*M*_+S*g*b,this._z=p*g*b-S*M*_,this._w=p*g*_-S*M*b;break;case"XZY":this._x=S*g*_-p*M*b,this._y=p*M*_-S*g*b,this._z=p*g*b+S*M*_,this._w=p*g*_+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=r+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*_+this._w*S,this._x=r*_+this._x*S,this._y=l*_+this._y*S,this._z=u*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(A_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(A_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),_=2*(u*r-h*i);return this.x=i+m*p+h*_-d*g,this.y=r+m*g+d*p-u*_,this.z=l+m*_+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new rt,A_=new Fo;class Ho{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,mi):mi.fromBufferAttribute(u,h),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),tc.subVectors(this.max,Do),ls.subVectors(e.a,Do),cs.subVectors(e.b,Do),us.subVectors(e.c,Do),Oa.subVectors(cs,ls),za.subVectors(us,cs),dr.subVectors(ls,us);let i=[0,-Oa.z,Oa.y,0,-za.z,za.y,0,-dr.z,dr.y,Oa.z,0,-Oa.x,za.z,0,-za.x,dr.z,0,-dr.x,-Oa.y,Oa.x,0,-za.y,za.x,0,-dr.y,dr.x,0];return!$f(i,ls,cs,us,tc)||(i=[1,0,0,0,1,0,0,0,1],!$f(i,ls,cs,us,tc))?!1:(ec.crossVectors(Oa,za),i=[ec.x,ec.y,ec.z],$f(i,ls,cs,us,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ji=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],mi=new rt,$l=new Ho,ls=new rt,cs=new rt,us=new rt,Oa=new rt,za=new rt,dr=new rt,Do=new rt,tc=new rt,ec=new rt,pr=new rt;function $f(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){pr.fromArray(o,u);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),m=e.dot(pr),p=i.dot(pr),g=r.dot(pr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Sy=new Ho,Uo=new rt,th=new rt;class vd{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Sy.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Uo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(th)),this.expandByPoint(Uo.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new rt,eh=new rt,nc=new rt,Pa=new rt,nh=new rt,ic=new rt,ih=new rt;class yy{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){eh.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Pa.copy(this.origin).sub(eh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(nc),d=Pa.dot(this.direction),m=-Pa.dot(nc),p=Pa.lengthSq(),g=Math.abs(1-h*h);let _,S,M,b;if(g>0)if(_=h*m-d,S=h*d-m,b=u*g,_>=0)if(S>=-b)if(S<=b){const w=1/g;_*=w,S*=w,M=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-b?(_=Math.max(0,-(-h*u+d)),S=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p):S<=b?(_=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(_=Math.max(0,-(h*u+d)),S=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+S*(S+2*m)+p);else S=h>0?-u:u,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(eh).addScaledVector(nc,S),M}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(u=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(u=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(d=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,r,l,u){nh.subVectors(i,e),ic.subVectors(r,e),ih.crossVectors(nh,ic);let h=this.direction.dot(ih),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,e);const m=d*this.direction.dot(ic.crossVectors(Pa,ic));if(m<0)return null;const p=d*this.direction.dot(nh.cross(Pa));if(p<0||m+p>h)return null;const g=-d*Pa.dot(ih);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,i,r,l,u,h,d,m,p,g,_,S,M,b,w,y){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,_,S,M,b,w,y)}set(e,i,r,l,u,h,d,m,p,g,_,S,M,b,w,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=S,v[3]=M,v[7]=b,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/fs.setFromMatrixColumn(e,0).length(),u=1/fs.setFromMatrixColumn(e,1).length(),h=1/fs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const S=h*g,M=h*_,b=d*g,w=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+b*p,i[5]=S-w*p,i[9]=-d*m,i[2]=w-S*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*g,M=m*_,b=p*g,w=p*_;i[0]=S+w*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=M*d-b,i[6]=w+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*g,M=m*_,b=p*g,w=p*_;i[0]=S-w*d,i[4]=-h*_,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*g,i[9]=w-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*g,M=h*_,b=d*g,w=d*_;i[0]=m*g,i[4]=b*p-M,i[8]=S*p+w,i[1]=m*_,i[5]=w*p+S,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,b=d*m,w=d*p;i[0]=m*g,i[4]=w-S*_,i[8]=b*_+M,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+b,i[10]=S-w*_}else if(e.order==="XZY"){const S=h*m,M=h*p,b=d*m,w=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+w,i[5]=h*g,i[9]=M*_-b,i[2]=b*_-M,i[6]=d*g,i[10]=w*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(My,e,Ey)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Ba.crossVectors(r,Qn),Ba.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Ba.crossVectors(r,Qn)),Ba.normalize(),ac.crossVectors(Qn,Ba),l[0]=Ba.x,l[4]=ac.x,l[8]=Qn.x,l[1]=Ba.y,l[5]=ac.y,l[9]=Qn.y,l[2]=Ba.z,l[6]=ac.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],S=r[9],M=r[13],b=r[2],w=r[6],y=r[10],v=r[14],I=r[3],N=r[7],D=r[11],q=r[15],V=l[0],z=l[4],F=l[8],E=l[12],R=l[1],B=l[5],ot=l[9],at=l[13],dt=l[2],pt=l[6],O=l[10],K=l[14],j=l[3],xt=l[7],Et=l[11],L=l[15];return u[0]=h*V+d*R+m*dt+p*j,u[4]=h*z+d*B+m*pt+p*xt,u[8]=h*F+d*ot+m*O+p*Et,u[12]=h*E+d*at+m*K+p*L,u[1]=g*V+_*R+S*dt+M*j,u[5]=g*z+_*B+S*pt+M*xt,u[9]=g*F+_*ot+S*O+M*Et,u[13]=g*E+_*at+S*K+M*L,u[2]=b*V+w*R+y*dt+v*j,u[6]=b*z+w*B+y*pt+v*xt,u[10]=b*F+w*ot+y*O+v*Et,u[14]=b*E+w*at+y*K+v*L,u[3]=I*V+N*R+D*dt+q*j,u[7]=I*z+N*B+D*pt+q*xt,u[11]=I*F+N*ot+D*O+q*Et,u[15]=I*E+N*at+D*K+q*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],S=e[10],M=e[14],b=e[3],w=e[7],y=e[11],v=e[15];return b*(+u*m*_-l*p*_-u*d*S+r*p*S+l*d*M-r*m*M)+w*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*g-u*m*g)+y*(+i*p*_-i*d*M-u*h*_+r*h*M+u*d*g-r*p*g)+v*(-l*d*g-i*m*_+i*d*S+l*h*_-r*h*S+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],S=e[10],M=e[11],b=e[12],w=e[13],y=e[14],v=e[15],I=_*y*p-w*S*p+w*m*M-d*y*M-_*m*v+d*S*v,N=b*S*p-g*y*p-b*m*M+h*y*M+g*m*v-h*S*v,D=g*w*p-b*_*p+b*d*M-h*w*M-g*d*v+h*_*v,q=b*_*m-g*w*m-b*d*S+h*w*S+g*d*y-h*_*y,V=i*I+r*N+l*D+u*q;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/V;return e[0]=I*z,e[1]=(w*S*u-_*y*u-w*l*M+r*y*M+_*l*v-r*S*v)*z,e[2]=(d*y*u-w*m*u+w*l*p-r*y*p-d*l*v+r*m*v)*z,e[3]=(_*m*u-d*S*u-_*l*p+r*S*p+d*l*M-r*m*M)*z,e[4]=N*z,e[5]=(g*y*u-b*S*u+b*l*M-i*y*M-g*l*v+i*S*v)*z,e[6]=(b*m*u-h*y*u-b*l*p+i*y*p+h*l*v-i*m*v)*z,e[7]=(h*S*u-g*m*u+g*l*p-i*S*p-h*l*M+i*m*M)*z,e[8]=D*z,e[9]=(b*_*u-g*w*u-b*r*M+i*w*M+g*r*v-i*_*v)*z,e[10]=(h*w*u-b*d*u+b*r*p-i*w*p-h*r*v+i*d*v)*z,e[11]=(g*d*u-h*_*u-g*r*p+i*_*p+h*r*M-i*d*M)*z,e[12]=q*z,e[13]=(g*w*l-b*_*l+b*r*S-i*w*S-g*r*y+i*_*y)*z,e[14]=(b*d*l-h*w*l-b*r*m+i*w*m+h*r*y-i*d*y)*z,e[15]=(h*_*l-g*d*l+g*r*m-i*_*m-h*r*S+i*d*S)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,_=d+d,S=u*p,M=u*g,b=u*_,w=h*g,y=h*_,v=d*_,I=m*p,N=m*g,D=m*_,q=r.x,V=r.y,z=r.z;return l[0]=(1-(w+v))*q,l[1]=(M+D)*q,l[2]=(b-N)*q,l[3]=0,l[4]=(M-D)*V,l[5]=(1-(S+v))*V,l[6]=(y+I)*V,l[7]=0,l[8]=(b+N)*z,l[9]=(y-I)*z,l[10]=(1-(S+w))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const h=fs.set(l[4],l[5],l[6]).length(),d=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],gi.copy(this);const p=1/u,g=1/h,_=1/d;return gi.elements[0]*=p,gi.elements[1]*=p,gi.elements[2]*=p,gi.elements[4]*=g,gi.elements[5]*=g,gi.elements[6]*=g,gi.elements[8]*=_,gi.elements[9]*=_,gi.elements[10]*=_,i.setFromRotationMatrix(gi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=sa){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),_=(i+e)/(i-e),S=(r+l)/(r-l);let M,b;if(d===sa)M=-(h+u)/(h-u),b=-2*h*u/(h-u);else if(d===Cc)M=-h/(h-u),b=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=sa){const m=this.elements,p=1/(i-e),g=1/(r-l),_=1/(h-u),S=(i+e)*p,M=(r+l)*g;let b,w;if(d===sa)b=(h+u)*_,w=-2*_;else if(d===Cc)b=u*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const fs=new rt,gi=new ln,My=new rt(0,0,0),Ey=new rt(1,1,1),Ba=new rt,ac=new rt,Qn=new rt,R_=new ln,C_=new Fo;class ua{constructor(e=0,i=0,r=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return R_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return C_.setFromEuler(this),this.setFromQuaternion(C_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class L0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ty=0;const w_=new rt,hs=new Fo,ta=new ln,rc=new rt,Lo=new rt,by=new rt,Ay=new Fo,D_=new rt(1,0,0),U_=new rt(0,1,0),L_=new rt(0,0,1),N_={type:"added"},Ry={type:"removed"},ds={type:"childadded",child:null},ah={type:"childremoved",child:null};class $n extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new rt,i=new ua,r=new Fo,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new oe}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return hs.setFromAxisAngle(e,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,i){return hs.setFromAxisAngle(e,i),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(D_,e)}rotateY(e){return this.rotateOnAxis(U_,e)}rotateZ(e){return this.rotateOnAxis(L_,e)}translateOnAxis(e,i){return w_.copy(e).applyQuaternion(this.quaternion),this.position.add(w_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(D_,e)}translateY(e){return this.translateOnAxis(U_,e)}translateZ(e){return this.translateOnAxis(L_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?rc.copy(e):rc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Lo,rc,this.up):ta.lookAt(rc,Lo,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(ta),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(N_),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ry),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(N_),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,by),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Ay,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),_=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}$n.DEFAULT_UP=new rt(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new rt,ea=new rt,rh=new rt,na=new rt,ps=new rt,ms=new rt,O_=new rt,sh=new rt,oh=new rt,lh=new rt,ch=new tn,uh=new tn,fh=new tn;class vi{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),_i.subVectors(e,i),l.cross(_i);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){_i.subVectors(l,i),ea.subVectors(r,i),rh.subVectors(e,i);const h=_i.dot(_i),d=_i.dot(ea),m=_i.dot(rh),p=ea.dot(ea),g=ea.dot(rh),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const S=1/_,M=(p*m-d*g)*S,b=(h*g-d*m)*S;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return ch.setScalar(0),uh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(e,i),uh.fromBufferAttribute(e,r),fh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ch,u.x),h.addScaledVector(uh,u.y),h.addScaledVector(fh,u.z),h}static isFrontFacing(e,i,r,l){return _i.subVectors(r,i),ea.subVectors(e,i),_i.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),_i.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return vi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return vi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;ps.subVectors(l,r),ms.subVectors(u,r),sh.subVectors(e,r);const m=ps.dot(sh),p=ms.dot(sh);if(m<=0&&p<=0)return i.copy(r);oh.subVectors(e,l);const g=ps.dot(oh),_=ms.dot(oh);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(ps,h);lh.subVectors(e,u);const M=ps.dot(lh),b=ms.dot(lh);if(b>=0&&M<=b)return i.copy(u);const w=M*p-m*b;if(w<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(ms,d);const y=g*b-M*_;if(y<=0&&_-g>=0&&M-b>=0)return O_.subVectors(u,l),d=(_-g)/(_-g+(M-b)),i.copy(l).addScaledVector(O_,d);const v=1/(y+w+S);return h=w*v,d=S*v,i.copy(r).addScaledVector(ps,h).addScaledVector(ms,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const N0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},sc={h:0,s:0,l:0};function hh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ue{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=cy(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=hh(h,u,e+1/3),this.g=hh(h,u,e),this.b=hh(h,u,e-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(e,i=Vn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Vn){const r=N0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Ae.fromWorkingColorSpace(Cn.copy(this),e),Math.round(Se(Cn.r*255,0,255))*65536+Math.round(Se(Cn.g*255,0,255))*256+Math.round(Se(Cn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Vn){Ae.fromWorkingColorSpace(Cn.copy(this),e);const i=Cn.r,r=Cn.g,l=Cn.b;return e!==Vn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ia),this.setHSL(Ia.h+e,Ia.s+i,Ia.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ia),e.getHSL(sc);const r=Zf(Ia.h,sc.h,i),l=Zf(Ia.s,sc.s,i),u=Zf(Ia.l,sc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ue;Ue.NAMES=N0;let Cy=0;class Dc extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=Es,this.side=la,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==la&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Eh&&(r.blendSrc=this.blendSrc),this.blendDst!==Th&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xd extends Dc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=g0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new rt,oc=new Ge;class Ui{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=y_,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=wo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==y_&&(e.usage=this.usage),e}}class O0 extends Ui{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class z0 extends Ui{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Li extends Ui{constructor(e,i,r){super(new Float32Array(e),i,r)}}let wy=0;const li=new ln,dh=new $n,gs=new rt,Jn=new Ho,No=new Ho,gn=new rt;class Wa extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w0(e)?z0:O0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new oe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,r){return li.makeTranslation(e,i,r),this.applyMatrix4(li),this}scale(e,i,r){return li.makeScale(e,i,r),this.applyMatrix4(li),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Li(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];No.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Jn.min,No.min),Jn.expandByPoint(gn),gn.addVectors(Jn.max,No.max),Jn.expandByPoint(gn)):(Jn.expandByPoint(No.min),Jn.expandByPoint(No.max))}Jn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(gs.fromBufferAttribute(e,p),gn.add(gs)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let F=0;F<r.count;F++)d[F]=new rt,m[F]=new rt;const p=new rt,g=new rt,_=new rt,S=new Ge,M=new Ge,b=new Ge,w=new rt,y=new rt;function v(F,E,R){p.fromBufferAttribute(r,F),g.fromBufferAttribute(r,E),_.fromBufferAttribute(r,R),S.fromBufferAttribute(u,F),M.fromBufferAttribute(u,E),b.fromBufferAttribute(u,R),g.sub(p),_.sub(p),M.sub(S),b.sub(S);const B=1/(M.x*b.y-b.x*M.y);isFinite(B)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(B),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(B),d[F].add(w),d[E].add(w),d[R].add(w),m[F].add(y),m[E].add(y),m[R].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let F=0,E=I.length;F<E;++F){const R=I[F],B=R.start,ot=R.count;for(let at=B,dt=B+ot;at<dt;at+=3)v(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const N=new rt,D=new rt,q=new rt,V=new rt;function z(F){q.fromBufferAttribute(l,F),V.copy(q);const E=d[F];N.copy(E),N.sub(q.multiplyScalar(q.dot(E))).normalize(),D.crossVectors(V,E);const B=D.dot(m[F])<0?-1:1;h.setXYZW(F,N.x,N.y,N.z,B)}for(let F=0,E=I.length;F<E;++F){const R=I[F],B=R.start,ot=R.count;for(let at=B,dt=B+ot;at<dt;at+=3)z(e.getX(at+0)),z(e.getX(at+1)),z(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new rt,u=new rt,h=new rt,d=new rt,m=new rt,p=new rt,g=new rt,_=new rt;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),w=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),_.subVectors(l,u),g.cross(_),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let M=0,b=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*g;for(let v=0;v<g;v++)S[b++]=p[M++]}return new Ui(S,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],M=e(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],_=u[p];for(let S=0,M=_.length;S<M;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const z_=new ln,mr=new yy,lc=new vd,P_=new rt,cc=new rt,uc=new rt,fc=new rt,ph=new rt,hc=new rt,B_=new rt,dc=new rt;class Di extends $n{constructor(e=new Wa,i=new xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){hc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],_=u[m];g!==0&&(ph.fromBufferAttribute(_,e),h?hc.addScaledVector(ph,g):hc.addScaledVector(ph.sub(i),g))}i.add(hc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(u),mr.copy(e.ray).recast(e.near),!(lc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(lc,P_)===null||mr.origin.distanceToSquared(P_)>(e.far-e.near)**2))&&(z_.copy(u).invert(),mr.copy(e.ray).applyMatrix4(z_),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,mr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=S.length;b<w;b++){const y=S[b],v=h[y.materialIndex],I=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,q=N;D<q;D+=3){const V=d.getX(D),z=d.getX(D+1),F=d.getX(D+2);l=pc(this,v,e,r,p,g,_,V,z,F),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=b,v=w;y<v;y+=3){const I=d.getX(y),N=d.getX(y+1),D=d.getX(y+2);l=pc(this,h,e,r,p,g,_,I,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,w=S.length;b<w;b++){const y=S[b],v=h[y.materialIndex],I=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,q=N;D<q;D+=3){const V=D,z=D+1,F=D+2;l=pc(this,v,e,r,p,g,_,V,z,F),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=b,v=w;y<v;y+=3){const I=y,N=y+1,D=y+2;l=pc(this,h,e,r,p,g,_,I,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Dy(o,e,i,r,l,u,h,d){let m;if(e.side===kn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===la,d),m===null)return null;dc.copy(d),dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:o}}function pc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,cc),o.getVertexPosition(m,uc),o.getVertexPosition(p,fc);const g=Dy(o,e,i,r,cc,uc,fc,B_);if(g){const _=new rt;vi.getBarycoord(B_,cc,uc,fc,_),l&&(g.uv=vi.getInterpolatedAttribute(l,d,m,p,_,new Ge)),u&&(g.uv1=vi.getInterpolatedAttribute(u,d,m,p,_,new Ge)),h&&(g.normal=vi.getInterpolatedAttribute(h,d,m,p,_,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new rt,materialIndex:0};vi.getNormal(cc,uc,fc,S.normal),g.face=S,g.barycoord=_}return g}class Go extends Wa{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],_=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,e,h,u,0),b("z","y","x",1,-1,r,i,-e,h,u,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Li(p,3)),this.setAttribute("normal",new Li(g,3)),this.setAttribute("uv",new Li(_,2));function b(w,y,v,I,N,D,q,V,z,F,E){const R=D/z,B=q/F,ot=D/2,at=q/2,dt=V/2,pt=z+1,O=F+1;let K=0,j=0;const xt=new rt;for(let Et=0;Et<O;Et++){const L=Et*B-at;for(let $=0;$<pt;$++){const yt=$*R-ot;xt[w]=yt*I,xt[y]=L*N,xt[v]=dt,p.push(xt.x,xt.y,xt.z),xt[w]=0,xt[y]=0,xt[v]=V>0?1:-1,g.push(xt.x,xt.y,xt.z),_.push($/z),_.push(1-Et/F),K+=1}}for(let Et=0;Et<F;Et++)for(let L=0;L<z;L++){const $=S+L+pt*Et,yt=S+L+pt*(Et+1),Z=S+(L+1)+pt*(Et+1),ct=S+(L+1)+pt*Et;m.push($,yt,ct),m.push(yt,Z,ct),j+=6}d.addGroup(M,j,E),M+=j,S+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Ln(o){const e={};for(let i=0;i<o.length;i++){const r=Ls(o[i]);for(const l in r)e[l]=r[l]}return e}function Uy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function P0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const Ly={clone:Ls,merge:Ln};var Ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Dc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ny,this.fragmentShader=Oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class B0 extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=sa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new rt,I_=new Ge,F_=new Ge;class ci extends B0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ld*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ld*2*Math.atan(Math.tan(jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z)}getViewSize(e,i){return this.getViewBounds(e,I_,F_),i.subVectors(F_,I_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(jf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class zy extends $n{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(_s,vs,e,i);l.layers=this.layers,this.add(l);const u=new ci(_s,vs,e,i);u.layers=this.layers,this.add(u);const h=new ci(_s,vs,e,i);h.layers=this.layers,this.add(h);const d=new ci(_s,vs,e,i);d.layers=this.layers,this.add(d);const m=new ci(_s,vs,e,i);m.layers=this.layers,this.add(m);const p=new ci(_s,vs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Cc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(_,S,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class I0 extends Nn{constructor(e,i,r,l,u,h,d,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:Rs,super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Py extends br{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new I0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:xi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Go(5,5,5),u=new qa({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Va});u.uniforms.tEquirect.value=i;const h=new Di(l,u),d=i.minFilter;return i.minFilter===Ga&&(i.minFilter=xi),new zy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class By extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const mh=new rt,Iy=new rt,Fy=new oe;class xr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=mh.subVectors(r,i).cross(Iy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(mh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Fy.getNormalMatrix(e),l=this.coplanarPoint(mh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new vd,mc=new rt;class F0{constructor(e=new xr,i=new xr,r=new xr,l=new xr,u=new xr,h=new xr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=sa){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],_=l[6],S=l[7],M=l[8],b=l[9],w=l[10],y=l[11],v=l[12],I=l[13],N=l[14],D=l[15];if(r[0].setComponents(m-u,S-p,y-M,D-v).normalize(),r[1].setComponents(m+u,S+p,y+M,D+v).normalize(),r[2].setComponents(m+h,S+g,y+b,D+I).normalize(),r[3].setComponents(m-h,S-g,y-b,D-I).normalize(),r[4].setComponents(m-d,S-_,y-w,D-N).normalize(),i===sa)r[5].setComponents(m+d,S+_,y+w,D+N).normalize();else if(i===Cc)r[5].setComponents(d,_,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(mc.x=l.normal.x>0?e.max.x:e.min.x,mc.y=l.normal.y>0?e.max.y:e.min.y,mc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gc extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}class H0 extends Nn{constructor(e,i,r,l,u,h,d,m,p,g=Ts){if(g!==Ts&&g!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ts&&(r=Tr),r===void 0&&g===Ds&&(r=ws),super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:yi,this.minFilter=m!==void 0?m:yi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Uc extends Wa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=e/d,S=i/m,M=[],b=[],w=[],y=[];for(let v=0;v<g;v++){const I=v*S-h;for(let N=0;N<p;N++){const D=N*_-u;b.push(D,-I,0),w.push(0,0,1),y.push(N/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let I=0;I<d;I++){const N=I+p*v,D=I+p*(v+1),q=I+1+p*(v+1),V=I+1+p*v;M.push(N,D,V),M.push(D,q,V)}this.setIndex(M),this.setAttribute("position",new Li(b,3)),this.setAttribute("normal",new Li(w,3)),this.setAttribute("uv",new Li(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sd extends Wa{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const g=[],_=new rt,S=new rt,M=[],b=[],w=[],y=[];for(let v=0;v<=r;v++){const I=[],N=v/r;let D=0;v===0&&h===0?D=.5/i:v===r&&m===Math.PI&&(D=-.5/i);for(let q=0;q<=i;q++){const V=q/i;_.x=-e*Math.cos(l+V*u)*Math.sin(h+N*d),_.y=e*Math.cos(h+N*d),_.z=e*Math.sin(l+V*u)*Math.sin(h+N*d),b.push(_.x,_.y,_.z),S.copy(_).normalize(),w.push(S.x,S.y,S.z),y.push(V+D,1-N),I.push(p++)}g.push(I)}for(let v=0;v<r;v++)for(let I=0;I<i;I++){const N=g[v][I+1],D=g[v][I],q=g[v+1][I],V=g[v+1][I+1];(v!==0||h>0)&&M.push(N,D,V),(v!==r-1||m<Math.PI)&&M.push(D,q,V)}this.setIndex(M),this.setAttribute("position",new Li(b,3)),this.setAttribute("normal",new Li(w,3)),this.setAttribute("uv",new Li(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hy extends Dc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gy extends Dc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H_={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Vy{constructor(e,i,r){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,S=p.length;_<S;_+=2){const M=p[_],b=p[_+1];if(M.global&&(M.lastIndex=0),M.test(g))return b}return null}}}const ky=new Vy;class yd{constructor(e){this.manager=e!==void 0?e:ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yd.DEFAULT_MATERIAL_NAME="__DEFAULT";class Xy extends yd{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=H_.get(e);if(h!==void 0)return u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0),h;const d=Po("img");function m(){g(),H_.add(e,this),i&&i(this),u.manager.itemEnd(e)}function p(_){g(),l&&l(_),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class qy extends yd{constructor(e){super(e)}load(e,i,r,l){const u=new Nn,h=new Xy(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class Wy extends B0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Yy extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function G_(o,e,i,r){const l=jy(r);switch(i){case y0:return o*e;case E0:return o*e;case T0:return o*e*2;case b0:return o*e/l.components*l.byteLength;case md:return o*e/l.components*l.byteLength;case A0:return o*e*2/l.components*l.byteLength;case gd:return o*e*2/l.components*l.byteLength;case M0:return o*e*3/l.components*l.byteLength;case Si:return o*e*4/l.components*l.byteLength;case _d:return o*e*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bh:case Fh:return Math.max(o,16)*Math.max(e,8)/4;case Ph:case Ih:return Math.max(o,8)*Math.max(e,8)/2;case Hh:case Gh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case td:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case ed:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case bc:case id:case ad:return Math.ceil(o/4)*Math.ceil(e/4)*16;case R0:case rd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case sd:case od:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jy(o){switch(o){case ca:case v0:return{byteLength:1,components:1};case zo:case x0:case Bo:return{byteLength:2,components:1};case dd:case pd:return{byteLength:2,components:4};case Tr:case hd:case ra:return{byteLength:4,components:1};case S0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function G0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Zy(o){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,g);else{_.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<_.length;M++){const b=_[S],w=_[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++S,_[S]=w)}_.length=S+1;for(let M=0,b=_.length;M<b;M++){const w=_[M];o.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$M=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ST=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:Ky,alphahash_pars_fragment:Qy,alphamap_fragment:Jy,alphamap_pars_fragment:$y,alphatest_fragment:tM,alphatest_pars_fragment:eM,aomap_fragment:nM,aomap_pars_fragment:iM,batching_pars_vertex:aM,batching_vertex:rM,begin_vertex:sM,beginnormal_vertex:oM,bsdfs:lM,iridescence_fragment:cM,bumpmap_pars_fragment:uM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:hM,clipping_planes_pars_vertex:dM,clipping_planes_vertex:pM,color_fragment:mM,color_pars_fragment:gM,color_pars_vertex:_M,color_vertex:vM,common:xM,cube_uv_reflection_fragment:SM,defaultnormal_vertex:yM,displacementmap_pars_vertex:MM,displacementmap_vertex:EM,emissivemap_fragment:TM,emissivemap_pars_fragment:bM,colorspace_fragment:AM,colorspace_pars_fragment:RM,envmap_fragment:CM,envmap_common_pars_fragment:wM,envmap_pars_fragment:DM,envmap_pars_vertex:UM,envmap_physical_pars_fragment:VM,envmap_vertex:LM,fog_vertex:NM,fog_pars_vertex:OM,fog_fragment:zM,fog_pars_fragment:PM,gradientmap_pars_fragment:BM,lightmap_pars_fragment:IM,lights_lambert_fragment:FM,lights_lambert_pars_fragment:HM,lights_pars_begin:GM,lights_toon_fragment:kM,lights_toon_pars_fragment:XM,lights_phong_fragment:qM,lights_phong_pars_fragment:WM,lights_physical_fragment:YM,lights_physical_pars_fragment:jM,lights_fragment_begin:ZM,lights_fragment_maps:KM,lights_fragment_end:QM,logdepthbuf_fragment:JM,logdepthbuf_pars_fragment:$M,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:eE,map_fragment:nE,map_pars_fragment:iE,map_particle_fragment:aE,map_particle_pars_fragment:rE,metalnessmap_fragment:sE,metalnessmap_pars_fragment:oE,morphinstance_vertex:lE,morphcolor_vertex:cE,morphnormal_vertex:uE,morphtarget_pars_vertex:fE,morphtarget_vertex:hE,normal_fragment_begin:dE,normal_fragment_maps:pE,normal_pars_fragment:mE,normal_pars_vertex:gE,normal_vertex:_E,normalmap_pars_fragment:vE,clearcoat_normal_fragment_begin:xE,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:yE,iridescence_pars_fragment:ME,opaque_fragment:EE,packing:TE,premultiplied_alpha_fragment:bE,project_vertex:AE,dithering_fragment:RE,dithering_pars_fragment:CE,roughnessmap_fragment:wE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:UE,shadowmap_pars_vertex:LE,shadowmap_vertex:NE,shadowmask_pars_fragment:OE,skinbase_vertex:zE,skinning_pars_vertex:PE,skinning_vertex:BE,skinnormal_vertex:IE,specularmap_fragment:FE,specularmap_pars_fragment:HE,tonemapping_fragment:GE,tonemapping_pars_fragment:VE,transmission_fragment:kE,transmission_pars_fragment:XE,uv_pars_fragment:qE,uv_pars_vertex:WE,uv_vertex:YE,worldpos_vertex:jE,background_vert:ZE,background_frag:KE,backgroundCube_vert:QE,backgroundCube_frag:JE,cube_vert:$E,cube_frag:tT,depth_vert:eT,depth_frag:nT,distanceRGBA_vert:iT,distanceRGBA_frag:aT,equirect_vert:rT,equirect_frag:sT,linedashed_vert:oT,linedashed_frag:lT,meshbasic_vert:cT,meshbasic_frag:uT,meshlambert_vert:fT,meshlambert_frag:hT,meshmatcap_vert:dT,meshmatcap_frag:pT,meshnormal_vert:mT,meshnormal_frag:gT,meshphong_vert:_T,meshphong_frag:vT,meshphysical_vert:xT,meshphysical_frag:ST,meshtoon_vert:yT,meshtoon_frag:MT,points_vert:ET,points_frag:TT,shadow_vert:bT,shadow_frag:AT,sprite_vert:RT,sprite_frag:CT},Lt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},wi={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};wi.physical={uniforms:Ln([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const _c={r:0,b:0,g:0},_r=new ua,wT=new ln;function DT(o,e,i,r,l,u,h){const d=new Ue(0);let m=u===!0?0:1,p,g,_=null,S=0,M=null;function b(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:e).get(D)),D}function w(N){let D=!1;const q=b(N);q===null?v(d,m):q&&q.isColor&&(v(q,1),D=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,D){const q=b(D);q&&(q.isCubeTexture||q.mapping===wc)?(g===void 0&&(g=new Di(new Go(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Ls(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),_r.copy(D.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),g.material.uniforms.envMap.value=q,g.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(wT.makeRotationFromEuler(_r)),g.material.toneMapped=Ae.getTransfer(q.colorSpace)!==Be,(_!==q||S!==q.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,_=q,S=q.version,M=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):q&&q.isTexture&&(p===void 0&&(p=new Di(new Uc(2,2),new qa({name:"BackgroundMaterial",uniforms:Ls(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:la,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=q,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(q.colorSpace)!==Be,q.matrixAutoUpdate===!0&&q.updateMatrix(),p.material.uniforms.uvTransform.value.copy(q.matrix),(_!==q||S!==q.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=q,S=q.version,M=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,D){N.getRGB(_c,P0(o)),r.buffers.color.setClear(_c.r,_c.g,_c.b,D,h)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(d,m)},render:w,addToRenderList:y,dispose:I}}function UT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(R,B,ot,at,dt){let pt=!1;const O=_(at,ot,B);u!==O&&(u=O,p(u.object)),pt=M(R,at,ot,dt),pt&&b(R,at,ot,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(pt||h)&&(h=!1,D(R,B,ot,at),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function _(R,B,ot){const at=ot.wireframe===!0;let dt=r[R.id];dt===void 0&&(dt={},r[R.id]=dt);let pt=dt[B.id];pt===void 0&&(pt={},dt[B.id]=pt);let O=pt[at];return O===void 0&&(O=S(m()),pt[at]=O),O}function S(R){const B=[],ot=[],at=[];for(let dt=0;dt<i;dt++)B[dt]=0,ot[dt]=0,at[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ot,attributeDivisors:at,object:R,attributes:{},index:null}}function M(R,B,ot,at){const dt=u.attributes,pt=B.attributes;let O=0;const K=ot.getAttributes();for(const j in K)if(K[j].location>=0){const Et=dt[j];let L=pt[j];if(L===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),Et===void 0||Et.attribute!==L||L&&Et.data!==L.data)return!0;O++}return u.attributesNum!==O||u.index!==at}function b(R,B,ot,at){const dt={},pt=B.attributes;let O=0;const K=ot.getAttributes();for(const j in K)if(K[j].location>=0){let Et=pt[j];Et===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor));const L={};L.attribute=Et,Et&&Et.data&&(L.data=Et.data),dt[j]=L,O++}u.attributes=dt,u.attributesNum=O,u.index=at}function w(){const R=u.newAttributes;for(let B=0,ot=R.length;B<ot;B++)R[B]=0}function y(R){v(R,0)}function v(R,B){const ot=u.newAttributes,at=u.enabledAttributes,dt=u.attributeDivisors;ot[R]=1,at[R]===0&&(o.enableVertexAttribArray(R),at[R]=1),dt[R]!==B&&(o.vertexAttribDivisor(R,B),dt[R]=B)}function I(){const R=u.newAttributes,B=u.enabledAttributes;for(let ot=0,at=B.length;ot<at;ot++)B[ot]!==R[ot]&&(o.disableVertexAttribArray(ot),B[ot]=0)}function N(R,B,ot,at,dt,pt,O){O===!0?o.vertexAttribIPointer(R,B,ot,dt,pt):o.vertexAttribPointer(R,B,ot,at,dt,pt)}function D(R,B,ot,at){w();const dt=at.attributes,pt=ot.getAttributes(),O=B.defaultAttributeValues;for(const K in pt){const j=pt[K];if(j.location>=0){let xt=dt[K];if(xt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),xt!==void 0){const Et=xt.normalized,L=xt.itemSize,$=e.get(xt);if($===void 0)continue;const yt=$.buffer,Z=$.type,ct=$.bytesPerElement,Tt=Z===o.INT||Z===o.UNSIGNED_INT||xt.gpuType===hd;if(xt.isInterleavedBufferAttribute){const St=xt.data,Gt=St.stride,Ft=xt.offset;if(St.isInstancedInterleavedBuffer){for(let ne=0;ne<j.locationSize;ne++)v(j.location+ne,St.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ne=0;ne<j.locationSize;ne++)y(j.location+ne);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ne=0;ne<j.locationSize;ne++)N(j.location+ne,L/j.locationSize,Z,Et,Gt*ct,(Ft+L/j.locationSize*ne)*ct,Tt)}else{if(xt.isInstancedBufferAttribute){for(let St=0;St<j.locationSize;St++)v(j.location+St,xt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let St=0;St<j.locationSize;St++)y(j.location+St);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let St=0;St<j.locationSize;St++)N(j.location+St,L/j.locationSize,Z,Et,L*ct,L/j.locationSize*St*ct,Tt)}}else if(O!==void 0){const Et=O[K];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(j.location,Et);break;case 3:o.vertexAttrib3fv(j.location,Et);break;case 4:o.vertexAttrib4fv(j.location,Et);break;default:o.vertexAttrib1fv(j.location,Et)}}}}I()}function q(){F();for(const R in r){const B=r[R];for(const ot in B){const at=B[ot];for(const dt in at)g(at[dt].object),delete at[dt];delete B[ot]}delete r[R]}}function V(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const ot in B){const at=B[ot];for(const dt in at)g(at[dt].object),delete at[dt];delete B[ot]}delete r[R.id]}function z(R){for(const B in r){const ot=r[B];if(ot[R.id]===void 0)continue;const at=ot[R.id];for(const dt in at)g(at[dt].object),delete at[dt];delete ot[R.id]}}function F(){E(),h=!0,u!==l&&(u=l,p(u.object))}function E(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:F,resetDefaultState:E,dispose:q,releaseStatesOfGeometry:V,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function LT(o,e,i){let r;function l(p){r=p}function u(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,_){_!==0&&(o.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b];i.update(M,r,1)}function m(p,g,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,_);let b=0;for(let w=0;w<_;w++)b+=g[w]*S[w];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function NT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Si&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const F=z===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ca&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ra&&!F)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),q=b>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:I,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:q,maxSamples:V}}function OT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new xr,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||l;return l=S,r=_.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,M){const b=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,v=o.get(_);if(!l||b===null||b.length===0||u&&!y)u?g(null):p();else{const I=u?0:r,N=I*4;let D=v.clippingState||null;m.value=D,D=g(b,S,N,M);for(let q=0;q!==N;++q)D[q]=i[q];v.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,S,M,b){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const v=M+w*4,I=S.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,D=M;N!==w;++N,D+=4)h.copy(_[N]).applyMatrix4(I,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function zT(o){let e=new WeakMap;function i(h,d){return d===Lh?h.mapping=Rs:d===Nh&&(h.mapping=Cs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Lh||d===Nh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Py(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ms=4,V_=[.125,.215,.35,.446,.526,.582],Mr=20,gh=new Wy,k_=new Ue;let _h=null,vh=0,xh=0,Sh=!1;const Sr=(1+Math.sqrt(5))/2,xs=1/Sr,X_=[new rt(-Sr,xs,0),new rt(Sr,xs,0),new rt(-xs,0,Sr),new rt(xs,0,Sr),new rt(0,Sr,-xs),new rt(0,Sr,xs),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)];class q_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,vh,xh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Bo,format:Si,colorSpace:Us,depthBuffer:!1},l=W_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PT(u)),this._blurMaterial=BT(u,e,i)}return l}_compileMaterial(e){const i=new Di(this._lodPlanes[0],e);this._renderer.compile(i,gh)}_sceneToCubeUV(e,i,r,l){const d=new ci(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(k_),g.toneMapping=ka,g.autoClear=!1;const M=new xd({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),b=new Di(new Go,M);let w=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,w=!0):(M.color.copy(k_),w=!0);for(let v=0;v<6;v++){const I=v%3;I===0?(d.up.set(0,m[v],0),d.lookAt(p[v],0,0)):I===1?(d.up.set(0,0,m[v]),d.lookAt(0,p[v],0)):(d.up.set(0,m[v],0),d.lookAt(0,0,p[v]));const N=this._cubeSize;vc(l,I*N,v>2?N:0,N,N),g.setRenderTarget(l),w&&g.render(b,d),g.render(e,d)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=S,g.autoClear=_,e.background=y}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Rs||e.mapping===Cs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=j_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Di(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;vc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,gh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=X_[(l-u-1)%X_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Di(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Mr-1),w=u/b,y=isFinite(u)?1+Math.floor(g*w):Mr;y>Mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const v=[];let I=0;for(let z=0;z<Mr;++z){const F=z/w,E=Math.exp(-F*F/2);v.push(E),z===0?I+=E:z<y&&(I+=2*E)}for(let z=0;z<v.length;z++)v[z]=v[z]/I;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=b,S.mipInt.value=N-r;const D=this._sizeLods[l],q=3*D*(l>N-Ms?l-N+Ms:0),V=4*(this._cubeSize-D);vc(i,q,V,3*D,2*D),m.setRenderTarget(i),m.render(_,gh)}}function PT(o){const e=[],i=[],r=[];let l=o;const u=o-Ms+1+V_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Ms?m=V_[h-o+Ms-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,b=6,w=3,y=2,v=1,I=new Float32Array(w*b*M),N=new Float32Array(y*b*M),D=new Float32Array(v*b*M);for(let V=0;V<M;V++){const z=V%3*2/3-1,F=V>2?0:-1,E=[z,F,0,z+2/3,F,0,z+2/3,F+1,0,z,F,0,z+2/3,F+1,0,z,F+1,0];I.set(E,w*b*V),N.set(S,y*b*V);const R=[V,V,V,V,V,V];D.set(R,v*b*V)}const q=new Wa;q.setAttribute("position",new Ui(I,w)),q.setAttribute("uv",new Ui(N,y)),q.setAttribute("faceIndex",new Ui(D,v)),e.push(q),l>Ms&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function W_(o,e,i){const r=new br(o,e,i);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function BT(o,e,i){const r=new Float32Array(Mr),l=new rt(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Y_(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function j_(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Lh||m===Nh,g=m===Rs||m===Cs;if(p||g){let _=e.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new q_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new q_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function FT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ys("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function HT(o,e,i,r){const l={},u=new WeakMap;function h(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,b=_.attributes.position;let w=0;if(M!==null){const I=M.array;w=M.version;for(let N=0,D=I.length;N<D;N+=3){const q=I[N+0],V=I[N+1],z=I[N+2];S.push(q,V,V,z,z,q)}}else if(b!==void 0){const I=b.array;w=b.version;for(let N=0,D=I.length/3-1;N<D;N+=3){const q=N+0,V=N+1,z=N+2;S.push(q,V,V,z,z,q)}}else return;const y=new(w0(S)?z0:O0)(S,1);y.version=w;const v=u.get(_);v&&e.remove(v),u.set(_,y)}function g(_){const S=u.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function GT(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*h),i.update(M,r,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(r,M,u,S*h,b),i.update(M,r,b))}function g(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,r,1)}function _(S,M,b,w){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/h,M[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,w,0,b);let v=0;for(let I=0;I<b;I++)v+=M[I]*w[I];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function VT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function kT(o,e,i){const r=new WeakMap,l=new tn;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let R=function(){F.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let q=d.attributes.position.count*D,V=1;q>e.maxTextureSize&&(V=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const z=new Float32Array(q*V*4*_),F=new U0(z,q,V,_);F.type=ra,F.needsUpdate=!0;const E=D*4;for(let B=0;B<_;B++){const ot=v[B],at=I[B],dt=N[B],pt=q*V*4*B;for(let O=0;O<ot.count;O++){const K=O*E;b===!0&&(l.fromBufferAttribute(ot,O),z[pt+K+0]=l.x,z[pt+K+1]=l.y,z[pt+K+2]=l.z,z[pt+K+3]=0),w===!0&&(l.fromBufferAttribute(at,O),z[pt+K+4]=l.x,z[pt+K+5]=l.y,z[pt+K+6]=l.z,z[pt+K+7]=0),y===!0&&(l.fromBufferAttribute(dt,O),z[pt+K+8]=l.x,z[pt+K+9]=l.y,z[pt+K+10]=l.z,z[pt+K+11]=dt.itemSize===4?l.w:1)}}S={count:_,texture:F,size:new Ge(q,V)},r.set(d,S),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const w=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function XT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const V0=new Nn,Z_=new H0(1,1),k0=new U0,X0=new xy,q0=new I0,K_=[],Q_=[],J_=new Float32Array(16),$_=new Float32Array(9),t0=new Float32Array(4);function Os(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=K_[l];if(u===void 0&&(u=new Float32Array(l),K_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function dn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Lc(o,e){let i=Q_[e];i===void 0&&(i=new Int32Array(e),Q_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function qT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),dn(i,e)}}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),dn(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),dn(i,e)}}function ZT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;t0.set(r),o.uniformMatrix2fv(this.addr,!1,t0),dn(i,r)}}function KT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;$_.set(r),o.uniformMatrix3fv(this.addr,!1,$_),dn(i,r)}}function QT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;J_.set(r),o.uniformMatrix4fv(this.addr,!1,J_),dn(i,r)}}function JT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function $T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),dn(i,e)}}function t1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),dn(i,e)}}function e1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),dn(i,e)}}function n1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function i1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),dn(i,e)}}function a1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),dn(i,e)}}function r1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),dn(i,e)}}function s1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Z_.compareFunction=C0,u=Z_):u=V0,i.setTexture2D(e||u,l)}function o1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||X0,l)}function l1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||q0,l)}function c1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||k0,l)}function u1(o){switch(o){case 5126:return qT;case 35664:return WT;case 35665:return YT;case 35666:return jT;case 35674:return ZT;case 35675:return KT;case 35676:return QT;case 5124:case 35670:return JT;case 35667:case 35671:return $T;case 35668:case 35672:return t1;case 35669:case 35673:return e1;case 5125:return n1;case 36294:return i1;case 36295:return a1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}function f1(o,e){o.uniform1fv(this.addr,e)}function h1(o,e){const i=Os(e,this.size,2);o.uniform2fv(this.addr,i)}function d1(o,e){const i=Os(e,this.size,3);o.uniform3fv(this.addr,i)}function p1(o,e){const i=Os(e,this.size,4);o.uniform4fv(this.addr,i)}function m1(o,e){const i=Os(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function g1(o,e){const i=Os(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function _1(o,e){const i=Os(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function v1(o,e){o.uniform1iv(this.addr,e)}function x1(o,e){o.uniform2iv(this.addr,e)}function S1(o,e){o.uniform3iv(this.addr,e)}function y1(o,e){o.uniform4iv(this.addr,e)}function M1(o,e){o.uniform1uiv(this.addr,e)}function E1(o,e){o.uniform2uiv(this.addr,e)}function T1(o,e){o.uniform3uiv(this.addr,e)}function b1(o,e){o.uniform4uiv(this.addr,e)}function A1(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||V0,u[h])}function R1(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||X0,u[h])}function C1(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||q0,u[h])}function w1(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||k0,u[h])}function D1(o){switch(o){case 5126:return f1;case 35664:return h1;case 35665:return d1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return x1;case 35668:case 35672:return S1;case 35669:case 35673:return y1;case 5125:return M1;case 36294:return E1;case 36295:return T1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return w1}}class U1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=u1(i.type)}}class L1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=D1(i.type)}}class N1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const yh=/(\w+)(\])?(\[|\.)?/g;function e0(o,e){o.seq.push(e),o.map[e.id]=e}function O1(o,e,i){const r=o.name,l=r.length;for(yh.lastIndex=0;;){const u=yh.exec(r),h=yh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){e0(i,p===void 0?new U1(d,o,e):new L1(d,o,e));break}else{let _=i.map[d];_===void 0&&(_=new N1(d),e0(i,_)),i=_}}}class Ac{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);O1(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function n0(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const z1=37297;let P1=0;function B1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const i0=new oe;function I1(o){Ae._getMatrix(i0,Ae.workingColorSpace,o);const e=`mat3( ${i0.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Rc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function a0(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+B1(o.getShaderSource(e),h)}else return l}function F1(o,e){const i=I1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function H1(o,e){let i;switch(e){case XS:i="Linear";break;case qS:i="Reinhard";break;case WS:i="Cineon";break;case YS:i="ACESFilmic";break;case ZS:i="AgX";break;case KS:i="Neutral";break;case jS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xc=new rt;function G1(){Ae.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),e=xc.y.toFixed(4),i=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function k1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function X1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Oo(o){return o!==""}function r0(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(o){return o.replace(q1,Y1)}const W1=new Map;function Y1(o,e){let i=le[e];if(i===void 0){const r=W1.get(e);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return cd(i)}const j1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o0(o){return o.replace(j1,Z1)}function Z1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function l0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===m0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ES?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function Q1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function $1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case g0:e="ENVMAP_BLENDING_MULTIPLY";break;case VS:e="ENVMAP_BLENDING_MIX";break;case kS:e="ENVMAP_BLENDING_ADD";break}return e}function tb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function eb(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=K1(i),p=Q1(i),g=J1(i),_=$1(i),S=tb(i),M=V1(i),b=k1(u),w=l.createProgram();let y,v,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Oo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Oo).join(`
`),v.length>0&&(v+=`
`)):(y=[l0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),v=[l0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?le.tonemapping_pars_fragment:"",i.toneMapping!==ka?H1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,F1("linearToOutputTexel",i.outputColorSpace),G1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),h=cd(h),h=r0(h,i),h=s0(h,i),d=cd(d),d=r0(d,i),d=s0(d,i),h=o0(h),d=o0(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===M_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===M_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=I+y+h,D=I+v+d,q=n0(l,l.VERTEX_SHADER,N),V=n0(l,l.FRAGMENT_SHADER,D);l.attachShader(w,q),l.attachShader(w,V),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(B){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(w).trim(),at=l.getShaderInfoLog(q).trim(),dt=l.getShaderInfoLog(V).trim();let pt=!0,O=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(pt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,q,V);else{const K=a0(l,q,"vertex"),j=a0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ot+`
`+K+`
`+j)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(at===""||dt==="")&&(O=!1);O&&(B.diagnostics={runnable:pt,programLog:ot,vertexShader:{log:at,prefix:y},fragmentShader:{log:dt,prefix:v}})}l.deleteShader(q),l.deleteShader(V),F=new Ac(l,w),E=X1(l,w)}let F;this.getUniforms=function(){return F===void 0&&z(this),F};let E;this.getAttributes=function(){return E===void 0&&z(this),E};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,z1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=P1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=q,this.fragmentShader=V,this}let nb=0;class ib{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new ab(e),i.set(e,r)),r}}class ab{constructor(e){this.id=nb++,this.code=e,this.usedTimes=0}}function rb(o,e,i,r,l,u,h){const d=new L0,m=new ib,p=new Set,g=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return p.add(E),E===0?"uv":`uv${E}`}function y(E,R,B,ot,at){const dt=ot.fog,pt=at.geometry,O=E.isMeshStandardMaterial?ot.environment:null,K=(E.isMeshStandardMaterial?i:e).get(E.envMap||O),j=K&&K.mapping===wc?K.image.height:null,xt=b[E.type];E.precision!==null&&(M=l.getMaxPrecision(E.precision),M!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",M,"instead."));const Et=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,L=Et!==void 0?Et.length:0;let $=0;pt.morphAttributes.position!==void 0&&($=1),pt.morphAttributes.normal!==void 0&&($=2),pt.morphAttributes.color!==void 0&&($=3);let yt,Z,ct,Tt;if(xt){const ye=wi[xt];yt=ye.vertexShader,Z=ye.fragmentShader}else yt=E.vertexShader,Z=E.fragmentShader,m.update(E),ct=m.getVertexShaderID(E),Tt=m.getFragmentShaderID(E);const St=o.getRenderTarget(),Gt=o.state.buffers.depth.getReversed(),Ft=at.isInstancedMesh===!0,ne=at.isBatchedMesh===!0,Le=!!E.map,ue=!!E.matcap,qe=!!K,H=!!E.aoMap,Tn=!!E.lightMap,ce=!!E.bumpMap,pe=!!E.normalMap,Wt=!!E.displacementMap,Ce=!!E.emissiveMap,qt=!!E.metalnessMap,U=!!E.roughnessMap,A=E.anisotropy>0,et=E.clearcoat>0,ft=E.dispersion>0,Mt=E.iridescence>0,mt=E.sheen>0,kt=E.transmission>0,wt=A&&!!E.anisotropyMap,Pt=et&&!!E.clearcoatMap,me=et&&!!E.clearcoatNormalMap,bt=et&&!!E.clearcoatRoughnessMap,Bt=Mt&&!!E.iridescenceMap,Yt=Mt&&!!E.iridescenceThicknessMap,Xt=mt&&!!E.sheenColorMap,Nt=mt&&!!E.sheenRoughnessMap,Jt=!!E.specularMap,ie=!!E.specularColorMap,Ne=!!E.specularIntensityMap,k=kt&&!!E.transmissionMap,Rt=kt&&!!E.thicknessMap,lt=!!E.gradientMap,_t=!!E.alphaMap,Ct=E.alphaTest>0,Dt=!!E.alphaHash,$t=!!E.extensions;let We=ka;E.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(We=o.toneMapping);const cn={shaderID:xt,shaderType:E.type,shaderName:E.name,vertexShader:yt,fragmentShader:Z,defines:E.defines,customVertexShaderID:ct,customFragmentShaderID:Tt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:M,batching:ne,batchingColor:ne&&at._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&at.instanceColor!==null,instancingMorph:Ft&&at.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Us,alphaToCoverage:!!E.alphaToCoverage,map:Le,matcap:ue,envMap:qe,envMapMode:qe&&K.mapping,envMapCubeUVHeight:j,aoMap:H,lightMap:Tn,bumpMap:ce,normalMap:pe,displacementMap:S&&Wt,emissiveMap:Ce,normalMapObjectSpace:pe&&E.normalMapType===ey,normalMapTangentSpace:pe&&E.normalMapType===ty,metalnessMap:qt,roughnessMap:U,anisotropy:A,anisotropyMap:wt,clearcoat:et,clearcoatMap:Pt,clearcoatNormalMap:me,clearcoatRoughnessMap:bt,dispersion:ft,iridescence:Mt,iridescenceMap:Bt,iridescenceThicknessMap:Yt,sheen:mt,sheenColorMap:Xt,sheenRoughnessMap:Nt,specularMap:Jt,specularColorMap:ie,specularIntensityMap:Ne,transmission:kt,transmissionMap:k,thicknessMap:Rt,gradientMap:lt,opaque:E.transparent===!1&&E.blending===Es&&E.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Dt,combine:E.combine,mapUv:Le&&w(E.map.channel),aoMapUv:H&&w(E.aoMap.channel),lightMapUv:Tn&&w(E.lightMap.channel),bumpMapUv:ce&&w(E.bumpMap.channel),normalMapUv:pe&&w(E.normalMap.channel),displacementMapUv:Wt&&w(E.displacementMap.channel),emissiveMapUv:Ce&&w(E.emissiveMap.channel),metalnessMapUv:qt&&w(E.metalnessMap.channel),roughnessMapUv:U&&w(E.roughnessMap.channel),anisotropyMapUv:wt&&w(E.anisotropyMap.channel),clearcoatMapUv:Pt&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:me&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&w(E.sheenRoughnessMap.channel),specularMapUv:Jt&&w(E.specularMap.channel),specularColorMapUv:ie&&w(E.specularColorMap.channel),specularIntensityMapUv:Ne&&w(E.specularIntensityMap.channel),transmissionMapUv:k&&w(E.transmissionMap.channel),thicknessMapUv:Rt&&w(E.thicknessMap.channel),alphaMapUv:_t&&w(E.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(pe||A),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!pt.attributes.uv&&(Le||_t),fog:!!dt,useFog:E.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Gt,skinning:at.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:$,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:We,decodeVideoTexture:Le&&E.map.isVideoTexture===!0&&Ae.getTransfer(E.map.colorSpace)===Be,decodeVideoTextureEmissive:Ce&&E.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(E.emissiveMap.colorSpace)===Be,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===aa,flipSided:E.side===kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$t&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&E.extensions.multiDraw===!0||ne)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return cn.vertexUv1s=p.has(1),cn.vertexUv2s=p.has(2),cn.vertexUv3s=p.has(3),p.clear(),cn}function v(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)R.push(B),R.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(I(R,E),N(R,E),R.push(o.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function I(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function N(E,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),E.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),E.push(d.mask)}function D(E){const R=b[E.type];let B;if(R){const ot=wi[R];B=Ly.clone(ot.uniforms)}else B=E.uniforms;return B}function q(E,R){let B;for(let ot=0,at=g.length;ot<at;ot++){const dt=g[ot];if(dt.cacheKey===R){B=dt,++B.usedTimes;break}}return B===void 0&&(B=new eb(o,R,E,u),g.push(B)),B}function V(E){if(--E.usedTimes===0){const R=g.indexOf(E);g[R]=g[g.length-1],g.pop(),E.destroy()}}function z(E){m.remove(E)}function F(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:q,releaseProgram:V,releaseShaderCache:z,programs:g,dispose:F}}function sb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function ob(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function c0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function u0(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(_,S,M,b,w,y){let v=o[e];return v===void 0?(v={id:_.id,object:_,geometry:S,material:M,groupOrder:b,renderOrder:_.renderOrder,z:w,group:y},o[e]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=M,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=w,v.group=y),e++,v}function d(_,S,M,b,w,y){const v=h(_,S,M,b,w,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,S,M,b,w,y){const v=h(_,S,M,b,w,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||ob),r.length>1&&r.sort(S||c0),l.length>1&&l.sort(S||c0)}function g(){for(let _=e,S=o.length;_<S;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function lb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new u0,o.set(r,[h])):l>=u.length?(h=new u0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function cb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Ue};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function ub(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let fb=0;function hb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function db(o){const e=new cb,i=ub(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,u=new ln,h=new ln;function d(p){let g=0,_=0,S=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let M=0,b=0,w=0,y=0,v=0,I=0,N=0,D=0,q=0,V=0,z=0;p.sort(hb);for(let E=0,R=p.length;E<R;E++){const B=p[E],ot=B.color,at=B.intensity,dt=B.distance,pt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ot.r*at,_+=ot.g*at,S+=ot.b*at;else if(B.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(B.sh.coefficients[O],at);z++}else if(B.isDirectionalLight){const O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,j=i.get(B);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=pt,r.directionalShadowMatrix[M]=B.shadow.matrix,I++}r.directional[M]=O,M++}else if(B.isSpotLight){const O=e.get(B);O.position.setFromMatrixPosition(B.matrixWorld),O.color.copy(ot).multiplyScalar(at),O.distance=dt,O.coneCos=Math.cos(B.angle),O.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),O.decay=B.decay,r.spot[w]=O;const K=B.shadow;if(B.map&&(r.spotLightMap[q]=B.map,q++,K.updateMatrices(B),B.castShadow&&V++),r.spotLightMatrix[w]=K.matrix,B.castShadow){const j=i.get(B);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.spotShadow[w]=j,r.spotShadowMap[w]=pt,D++}w++}else if(B.isRectAreaLight){const O=e.get(B);O.color.copy(ot).multiplyScalar(at),O.halfWidth.set(B.width*.5,0,0),O.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=O,y++}else if(B.isPointLight){const O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),O.distance=B.distance,O.decay=B.decay,B.castShadow){const K=B.shadow,j=i.get(B);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,r.pointShadow[b]=j,r.pointShadowMap[b]=pt,r.pointShadowMatrix[b]=B.shadow.matrix,N++}r.point[b]=O,b++}else if(B.isHemisphereLight){const O=e.get(B);O.skyColor.copy(B.color).multiplyScalar(at),O.groundColor.copy(B.groundColor).multiplyScalar(at),r.hemi[v]=O,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=S;const F=r.hash;(F.directionalLength!==M||F.pointLength!==b||F.spotLength!==w||F.rectAreaLength!==y||F.hemiLength!==v||F.numDirectionalShadows!==I||F.numPointShadows!==N||F.numSpotShadows!==D||F.numSpotMaps!==q||F.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=D+q-V,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=z,F.directionalLength=M,F.pointLength=b,F.spotLength=w,F.rectAreaLength=y,F.hemiLength=v,F.numDirectionalShadows=I,F.numPointShadows=N,F.numSpotShadows=D,F.numSpotMaps=q,F.numLightProbes=z,r.version=fb++)}function m(p,g){let _=0,S=0,M=0,b=0,w=0;const y=g.matrixWorldInverse;for(let v=0,I=p.length;v<I;v++){const N=p[v];if(N.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),_++}else if(N.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:r}}function f0(o){const e=new db(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function pb(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new f0(o),e.set(l,[d])):u>=h.length?(d=new f0(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _b(o,e,i){let r=new F0;const l=new Ge,u=new Ge,h=new tn,d=new Hy({depthPacking:$S}),m=new Gy,p={},g=i.maxTextureSize,_={[la]:kn,[kn]:la,[aa]:aa},S=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:mb,fragmentShader:gb}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Wa;b.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Di(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m0;let v=this.type;this.render=function(V,z,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const E=o.getRenderTarget(),R=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(Va),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const at=v!==ia&&this.type===ia,dt=v===ia&&this.type!==ia;for(let pt=0,O=V.length;pt<O;pt++){const K=V[pt],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const xt=j.getFrameExtents();if(l.multiply(xt),u.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xt.x),l.x=u.x*xt.x,j.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xt.y),l.y=u.y*xt.y,j.mapSize.y=u.y)),j.map===null||at===!0||dt===!0){const L=this.type!==ia?{minFilter:yi,magFilter:yi}:{};j.map!==null&&j.map.dispose(),j.map=new br(l.x,l.y,L),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Et=j.getViewportCount();for(let L=0;L<Et;L++){const $=j.getViewport(L);h.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),ot.viewport(h),j.updateMatrices(K,L),r=j.getFrustum(),D(z,F,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===ia&&I(j,F),j.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(E,R,B)};function I(V,z){const F=e.update(w);S.defines.VSM_SAMPLES!==V.blurSamples&&(S.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new br(l.x,l.y)),S.uniforms.shadow_pass.value=V.map.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(z,null,F,S,w,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(z,null,F,M,w,null)}function N(V,z,F,E){let R=null;const B=F.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(B!==void 0)R=B;else if(R=F.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ot=R.uuid,at=z.uuid;let dt=p[ot];dt===void 0&&(dt={},p[ot]=dt);let pt=dt[at];pt===void 0&&(pt=R.clone(),dt[at]=pt,z.addEventListener("dispose",q)),R=pt}if(R.visible=z.visible,R.wireframe=z.wireframe,E===ia?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:_[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,F.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ot=o.properties.get(R);ot.light=F}return R}function D(V,z,F,E,R){if(V.visible===!1)return;if(V.layers.test(z.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&R===ia)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,V.matrixWorld);const at=e.update(V),dt=V.material;if(Array.isArray(dt)){const pt=at.groups;for(let O=0,K=pt.length;O<K;O++){const j=pt[O],xt=dt[j.materialIndex];if(xt&&xt.visible){const Et=N(V,xt,E,R);V.onBeforeShadow(o,V,z,F,at,Et,j),o.renderBufferDirect(F,null,at,Et,V,j),V.onAfterShadow(o,V,z,F,at,Et,j)}}}else if(dt.visible){const pt=N(V,dt,E,R);V.onBeforeShadow(o,V,z,F,at,pt,null),o.renderBufferDirect(F,null,at,pt,V,null),V.onAfterShadow(o,V,z,F,at,pt,null)}}const ot=V.children;for(let at=0,dt=ot.length;at<dt;at++)D(ot[at],z,F,E,R)}function q(V){V.target.removeEventListener("dispose",q);for(const F in p){const E=p[F],R=V.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}const vb={[bh]:Ah,[Rh]:Dh,[Ch]:Uh,[As]:wh,[Ah]:bh,[Dh]:Rh,[Uh]:Ch,[wh]:As};function xb(o,e){function i(){let k=!1;const Rt=new tn;let lt=null;const _t=new tn(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!k&&(o.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,Dt,$t,We,cn){cn===!0&&(Ct*=We,Dt*=We,$t*=We),Rt.set(Ct,Dt,$t,We),_t.equals(Rt)===!1&&(o.clearColor(Ct,Dt,$t,We),_t.copy(Rt))},reset:function(){k=!1,lt=null,_t.set(-1,0,0,0)}}}function r(){let k=!1,Rt=!1,lt=null,_t=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const $t=e.get("EXT_clip_control");Rt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const We=Ct;Ct=null,this.setClear(We)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?St(o.DEPTH_TEST):Gt(o.DEPTH_TEST)},setMask:function(Dt){lt!==Dt&&!k&&(o.depthMask(Dt),lt=Dt)},setFunc:function(Dt){if(Rt&&(Dt=vb[Dt]),_t!==Dt){switch(Dt){case bh:o.depthFunc(o.NEVER);break;case Ah:o.depthFunc(o.ALWAYS);break;case Rh:o.depthFunc(o.LESS);break;case As:o.depthFunc(o.LEQUAL);break;case Ch:o.depthFunc(o.EQUAL);break;case wh:o.depthFunc(o.GEQUAL);break;case Dh:o.depthFunc(o.GREATER);break;case Uh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Dt}},setLocked:function(Dt){k=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){k=!1,lt=null,_t=null,Ct=null,Rt=!1}}}function l(){let k=!1,Rt=null,lt=null,_t=null,Ct=null,Dt=null,$t=null,We=null,cn=null;return{setTest:function(ye){k||(ye?St(o.STENCIL_TEST):Gt(o.STENCIL_TEST))},setMask:function(ye){Rt!==ye&&!k&&(o.stencilMask(ye),Rt=ye)},setFunc:function(ye,_n,ui){(lt!==ye||_t!==_n||Ct!==ui)&&(o.stencilFunc(ye,_n,ui),lt=ye,_t=_n,Ct=ui)},setOp:function(ye,_n,ui){(Dt!==ye||$t!==_n||We!==ui)&&(o.stencilOp(ye,_n,ui),Dt=ye,$t=_n,We=ui)},setLocked:function(ye){k=ye},setClear:function(ye){cn!==ye&&(o.clearStencil(ye),cn=ye)},reset:function(){k=!1,Rt=null,lt=null,_t=null,Ct=null,Dt=null,$t=null,We=null,cn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,M=[],b=null,w=!1,y=null,v=null,I=null,N=null,D=null,q=null,V=null,z=new Ue(0,0,0),F=0,E=!1,R=null,B=null,ot=null,at=null,dt=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),O=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),O=K>=2);let xt=null,Et={};const L=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),yt=new tn().fromArray(L),Z=new tn().fromArray($);function ct(k,Rt,lt,_t){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(k,Dt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<lt;$t++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Rt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const Tt={};Tt[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),Tt[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Tt[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),St(o.DEPTH_TEST),h.setFunc(As),ce(!1),pe(g_),St(o.CULL_FACE),H(Va);function St(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Gt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function Ft(k,Rt){return _[k]!==Rt?(o.bindFramebuffer(k,Rt),_[k]=Rt,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Rt),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ne(k,Rt){let lt=M,_t=!1;if(k){lt=S.get(Rt),lt===void 0&&(lt=[],S.set(Rt,lt));const Ct=k.textures;if(lt.length!==Ct.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)lt[Dt]=o.COLOR_ATTACHMENT0+Dt;lt.length=Ct.length,_t=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(lt)}function Le(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const ue={[yr]:o.FUNC_ADD,[bS]:o.FUNC_SUBTRACT,[AS]:o.FUNC_REVERSE_SUBTRACT};ue[RS]=o.MIN,ue[CS]=o.MAX;const qe={[wS]:o.ZERO,[DS]:o.ONE,[US]:o.SRC_COLOR,[Eh]:o.SRC_ALPHA,[BS]:o.SRC_ALPHA_SATURATE,[zS]:o.DST_COLOR,[NS]:o.DST_ALPHA,[LS]:o.ONE_MINUS_SRC_COLOR,[Th]:o.ONE_MINUS_SRC_ALPHA,[PS]:o.ONE_MINUS_DST_COLOR,[OS]:o.ONE_MINUS_DST_ALPHA,[IS]:o.CONSTANT_COLOR,[FS]:o.ONE_MINUS_CONSTANT_COLOR,[HS]:o.CONSTANT_ALPHA,[GS]:o.ONE_MINUS_CONSTANT_ALPHA};function H(k,Rt,lt,_t,Ct,Dt,$t,We,cn,ye){if(k===Va){w===!0&&(Gt(o.BLEND),w=!1);return}if(w===!1&&(St(o.BLEND),w=!0),k!==TS){if(k!==y||ye!==E){if((v!==yr||D!==yr)&&(o.blendEquation(o.FUNC_ADD),v=yr,D=yr),ye)switch(k){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case __:o.blendFunc(o.ONE,o.ONE);break;case v_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case x_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case __:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case v_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case x_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}I=null,N=null,q=null,V=null,z.set(0,0,0),F=0,y=k,E=ye}return}Ct=Ct||Rt,Dt=Dt||lt,$t=$t||_t,(Rt!==v||Ct!==D)&&(o.blendEquationSeparate(ue[Rt],ue[Ct]),v=Rt,D=Ct),(lt!==I||_t!==N||Dt!==q||$t!==V)&&(o.blendFuncSeparate(qe[lt],qe[_t],qe[Dt],qe[$t]),I=lt,N=_t,q=Dt,V=$t),(We.equals(z)===!1||cn!==F)&&(o.blendColor(We.r,We.g,We.b,cn),z.copy(We),F=cn),y=k,E=!1}function Tn(k,Rt){k.side===aa?Gt(o.CULL_FACE):St(o.CULL_FACE);let lt=k.side===kn;Rt&&(lt=!lt),ce(lt),k.blending===Es&&k.transparent===!1?H(Va):H(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const _t=k.stencilWrite;d.setTest(_t),_t&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Gt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(k){R!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),R=k)}function pe(k){k!==yS?(St(o.CULL_FACE),k!==B&&(k===g_?o.cullFace(o.BACK):k===MS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Gt(o.CULL_FACE),B=k}function Wt(k){k!==ot&&(O&&o.lineWidth(k),ot=k)}function Ce(k,Rt,lt){k?(St(o.POLYGON_OFFSET_FILL),(at!==Rt||dt!==lt)&&(o.polygonOffset(Rt,lt),at=Rt,dt=lt)):Gt(o.POLYGON_OFFSET_FILL)}function qt(k){k?St(o.SCISSOR_TEST):Gt(o.SCISSOR_TEST)}function U(k){k===void 0&&(k=o.TEXTURE0+pt-1),xt!==k&&(o.activeTexture(k),xt=k)}function A(k,Rt,lt){lt===void 0&&(xt===null?lt=o.TEXTURE0+pt-1:lt=xt);let _t=Et[lt];_t===void 0&&(_t={type:void 0,texture:void 0},Et[lt]=_t),(_t.type!==k||_t.texture!==Rt)&&(xt!==lt&&(o.activeTexture(lt),xt=lt),o.bindTexture(k,Rt||Tt[k]),_t.type=k,_t.texture=Rt)}function et(){const k=Et[xt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ft(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(k){yt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Nt(k){Z.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Z.copy(k))}function Jt(k,Rt){let lt=p.get(Rt);lt===void 0&&(lt=new WeakMap,p.set(Rt,lt));let _t=lt.get(k);_t===void 0&&(_t=o.getUniformBlockIndex(Rt,k.name),lt.set(k,_t))}function ie(k,Rt){const _t=p.get(Rt).get(k);m.get(Rt)!==_t&&(o.uniformBlockBinding(Rt,_t,k.__bindingPointIndex),m.set(Rt,_t))}function Ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},xt=null,Et={},_={},S=new WeakMap,M=[],b=null,w=!1,y=null,v=null,I=null,N=null,D=null,q=null,V=null,z=new Ue(0,0,0),F=0,E=!1,R=null,B=null,ot=null,at=null,dt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:St,disable:Gt,bindFramebuffer:Ft,drawBuffers:ne,useProgram:Le,setBlending:H,setMaterial:Tn,setFlipSided:ce,setCullFace:pe,setLineWidth:Wt,setPolygonOffset:Ce,setScissorTest:qt,activeTexture:U,bindTexture:A,unbindTexture:et,compressedTexImage2D:ft,compressedTexImage3D:Mt,texImage2D:Bt,texImage3D:Yt,updateUBOMapping:Jt,uniformBlockBinding:ie,texStorage2D:me,texStorage3D:bt,texSubImage2D:mt,texSubImage3D:kt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Pt,scissor:Xt,viewport:Nt,reset:Ne}}function Sb(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ge,g=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,A){return M?new OffscreenCanvas(U,A):Po("canvas")}function w(U,A,et){let ft=1;const Mt=qt(U);if((Mt.width>et||Mt.height>et)&&(ft=et/Math.max(Mt.width,Mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const mt=Math.floor(ft*Mt.width),kt=Math.floor(ft*Mt.height);_===void 0&&(_=b(mt,kt));const wt=A?b(mt,kt):_;return wt.width=mt,wt.height=kt,wt.getContext("2d").drawImage(U,0,0,mt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+mt+"x"+kt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,A,et,ft,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let mt=A;if(A===o.RED&&(et===o.FLOAT&&(mt=o.R32F),et===o.HALF_FLOAT&&(mt=o.R16F),et===o.UNSIGNED_BYTE&&(mt=o.R8)),A===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.R8UI),et===o.UNSIGNED_SHORT&&(mt=o.R16UI),et===o.UNSIGNED_INT&&(mt=o.R32UI),et===o.BYTE&&(mt=o.R8I),et===o.SHORT&&(mt=o.R16I),et===o.INT&&(mt=o.R32I)),A===o.RG&&(et===o.FLOAT&&(mt=o.RG32F),et===o.HALF_FLOAT&&(mt=o.RG16F),et===o.UNSIGNED_BYTE&&(mt=o.RG8)),A===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RG8UI),et===o.UNSIGNED_SHORT&&(mt=o.RG16UI),et===o.UNSIGNED_INT&&(mt=o.RG32UI),et===o.BYTE&&(mt=o.RG8I),et===o.SHORT&&(mt=o.RG16I),et===o.INT&&(mt=o.RG32I)),A===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),et===o.UNSIGNED_INT&&(mt=o.RGB32UI),et===o.BYTE&&(mt=o.RGB8I),et===o.SHORT&&(mt=o.RGB16I),et===o.INT&&(mt=o.RGB32I)),A===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),et===o.UNSIGNED_INT&&(mt=o.RGBA32UI),et===o.BYTE&&(mt=o.RGBA8I),et===o.SHORT&&(mt=o.RGBA16I),et===o.INT&&(mt=o.RGBA32I)),A===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),A===o.RGBA){const kt=Mt?Rc:Ae.getTransfer(ft);et===o.FLOAT&&(mt=o.RGBA32F),et===o.HALF_FLOAT&&(mt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(mt=kt===Be?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),mt}function D(U,A){let et;return U?A===null||A===Tr||A===ws?et=o.DEPTH24_STENCIL8:A===ra?et=o.DEPTH32F_STENCIL8:A===zo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Tr||A===ws?et=o.DEPTH_COMPONENT24:A===ra?et=o.DEPTH_COMPONENT32F:A===zo&&(et=o.DEPTH_COMPONENT16),et}function q(U,A){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==yi&&U.minFilter!==xi?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function V(U){const A=U.target;A.removeEventListener("dispose",V),F(A),A.isVideoTexture&&g.delete(A)}function z(U){const A=U.target;A.removeEventListener("dispose",z),R(A)}function F(U){const A=r.get(U);if(A.__webglInit===void 0)return;const et=U.source,ft=S.get(et);if(ft){const Mt=ft[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&E(U),Object.keys(ft).length===0&&S.delete(et)}r.remove(U)}function E(U){const A=r.get(U);o.deleteTexture(A.__webglTexture);const et=U.source,ft=S.get(et);delete ft[A.__cacheKey],h.memory.textures--}function R(U){const A=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(A.__webglFramebuffer[ft]))for(let Mt=0;Mt<A.__webglFramebuffer[ft].length;Mt++)o.deleteFramebuffer(A.__webglFramebuffer[ft][Mt]);else o.deleteFramebuffer(A.__webglFramebuffer[ft]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[ft])}else{if(Array.isArray(A.__webglFramebuffer))for(let ft=0;ft<A.__webglFramebuffer.length;ft++)o.deleteFramebuffer(A.__webglFramebuffer[ft]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ft=0;ft<A.__webglColorRenderbuffer.length;ft++)A.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[ft]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const et=U.textures;for(let ft=0,Mt=et.length;ft<Mt;ft++){const mt=r.get(et[ft]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),h.memory.textures--),r.remove(et[ft])}r.remove(U)}let B=0;function ot(){B=0}function at(){const U=B;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),B+=1,U}function dt(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function pt(U,A){const et=r.get(U);if(U.isVideoTexture&&Wt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const ft=U.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(et,U,A);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+A)}function O(U,A){const et=r.get(U);if(U.version>0&&et.__version!==U.version){Z(et,U,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+A)}function K(U,A){const et=r.get(U);if(U.version>0&&et.__version!==U.version){Z(et,U,A);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+A)}function j(U,A){const et=r.get(U);if(U.version>0&&et.__version!==U.version){ct(et,U,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+A)}const xt={[Oh]:o.REPEAT,[Er]:o.CLAMP_TO_EDGE,[zh]:o.MIRRORED_REPEAT},Et={[yi]:o.NEAREST,[QS]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[xi]:o.LINEAR,[Yf]:o.LINEAR_MIPMAP_NEAREST,[Ga]:o.LINEAR_MIPMAP_LINEAR},L={[ny]:o.NEVER,[ly]:o.ALWAYS,[iy]:o.LESS,[C0]:o.LEQUAL,[ay]:o.EQUAL,[oy]:o.GEQUAL,[ry]:o.GREATER,[sy]:o.NOTEQUAL};function $(U,A){if(A.type===ra&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===xi||A.magFilter===Yf||A.magFilter===Jl||A.magFilter===Ga||A.minFilter===xi||A.minFilter===Yf||A.minFilter===Jl||A.minFilter===Ga)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,xt[A.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,xt[A.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,xt[A.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[A.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[A.minFilter]),A.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===yi||A.minFilter!==Jl&&A.minFilter!==Ga||A.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function yt(U,A){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",V));const ft=A.source;let Mt=S.get(ft);Mt===void 0&&(Mt={},S.set(ft,Mt));const mt=dt(A);if(mt!==U.__cacheKey){Mt[mt]===void 0&&(Mt[mt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Mt[mt].usedTimes++;const kt=Mt[U.__cacheKey];kt!==void 0&&(Mt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&E(A)),U.__cacheKey=mt,U.__webglTexture=Mt[mt].texture}return et}function Z(U,A,et){let ft=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ft=o.TEXTURE_3D);const Mt=yt(U,A),mt=A.source;i.bindTexture(ft,U.__webglTexture,o.TEXTURE0+et);const kt=r.get(mt);if(mt.version!==kt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+et);const wt=Ae.getPrimaries(Ae.workingColorSpace),Pt=A.colorSpace===Ha?null:Ae.getPrimaries(A.colorSpace),me=A.colorSpace===Ha||wt===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let bt=w(A.image,!1,l.maxTextureSize);bt=Ce(A,bt);const Bt=u.convert(A.format,A.colorSpace),Yt=u.convert(A.type);let Xt=N(A.internalFormat,Bt,Yt,A.colorSpace,A.isVideoTexture);$(ft,A);let Nt;const Jt=A.mipmaps,ie=A.isVideoTexture!==!0,Ne=kt.__version===void 0||Mt===!0,k=mt.dataReady,Rt=q(A,bt);if(A.isDepthTexture)Xt=D(A.format===Ds,A.type),Ne&&(ie?i.texStorage2D(o.TEXTURE_2D,1,Xt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Bt,Yt,null));else if(A.isDataTexture)if(Jt.length>0){ie&&Ne&&i.texStorage2D(o.TEXTURE_2D,Rt,Xt,Jt[0].width,Jt[0].height);for(let lt=0,_t=Jt.length;lt<_t;lt++)Nt=Jt[lt],ie?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,Yt,Nt.data):i.texImage2D(o.TEXTURE_2D,lt,Xt,Nt.width,Nt.height,0,Bt,Yt,Nt.data);A.generateMipmaps=!1}else ie?(Ne&&i.texStorage2D(o.TEXTURE_2D,Rt,Xt,bt.width,bt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,Bt,Yt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Bt,Yt,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ie&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Xt,Jt[0].width,Jt[0].height,bt.depth);for(let lt=0,_t=Jt.length;lt<_t;lt++)if(Nt=Jt[lt],A.format!==Si)if(Bt!==null)if(ie){if(k)if(A.layerUpdates.size>0){const Ct=G_(Nt.width,Nt.height,A.format,A.type);for(const Dt of A.layerUpdates){const $t=Nt.data.subarray(Dt*Ct/Nt.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Dt,Nt.width,Nt.height,1,Bt,$t)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Nt.width,Nt.height,bt.depth,Bt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,Xt,Nt.width,Nt.height,bt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Nt.width,Nt.height,bt.depth,Bt,Yt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,Xt,Nt.width,Nt.height,bt.depth,0,Bt,Yt,Nt.data)}else{ie&&Ne&&i.texStorage2D(o.TEXTURE_2D,Rt,Xt,Jt[0].width,Jt[0].height);for(let lt=0,_t=Jt.length;lt<_t;lt++)Nt=Jt[lt],A.format!==Si?Bt!==null?ie?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,Xt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,Yt,Nt.data):i.texImage2D(o.TEXTURE_2D,lt,Xt,Nt.width,Nt.height,0,Bt,Yt,Nt.data)}else if(A.isDataArrayTexture)if(ie){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Xt,bt.width,bt.height,bt.depth),k)if(A.layerUpdates.size>0){const lt=G_(bt.width,bt.height,A.format,A.type);for(const _t of A.layerUpdates){const Ct=bt.data.subarray(_t*lt/bt.data.BYTES_PER_ELEMENT,(_t+1)*lt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Bt,Yt,Ct)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Bt,Yt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,bt.width,bt.height,bt.depth,0,Bt,Yt,bt.data);else if(A.isData3DTexture)ie?(Ne&&i.texStorage3D(o.TEXTURE_3D,Rt,Xt,bt.width,bt.height,bt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Bt,Yt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,bt.width,bt.height,bt.depth,0,Bt,Yt,bt.data);else if(A.isFramebufferTexture){if(Ne)if(ie)i.texStorage2D(o.TEXTURE_2D,Rt,Xt,bt.width,bt.height);else{let lt=bt.width,_t=bt.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Xt,lt,_t,0,Bt,Yt,null),lt>>=1,_t>>=1}}else if(Jt.length>0){if(ie&&Ne){const lt=qt(Jt[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Xt,lt.width,lt.height)}for(let lt=0,_t=Jt.length;lt<_t;lt++)Nt=Jt[lt],ie?k&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Bt,Yt,Nt):i.texImage2D(o.TEXTURE_2D,lt,Xt,Bt,Yt,Nt);A.generateMipmaps=!1}else if(ie){if(Ne){const lt=qt(bt);i.texStorage2D(o.TEXTURE_2D,Rt,Xt,lt.width,lt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,Yt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Xt,Bt,Yt,bt);y(A)&&v(ft),kt.__version=mt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ct(U,A,et){if(A.image.length!==6)return;const ft=yt(U,A),Mt=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const mt=r.get(Mt);if(Mt.version!==mt.__version||ft===!0){i.activeTexture(o.TEXTURE0+et);const kt=Ae.getPrimaries(Ae.workingColorSpace),wt=A.colorSpace===Ha?null:Ae.getPrimaries(A.colorSpace),Pt=A.colorSpace===Ha||kt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const me=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!me&&!bt?Bt[_t]=w(A.image[_t],!0,l.maxCubemapSize):Bt[_t]=bt?A.image[_t].image:A.image[_t],Bt[_t]=Ce(A,Bt[_t]);const Yt=Bt[0],Xt=u.convert(A.format,A.colorSpace),Nt=u.convert(A.type),Jt=N(A.internalFormat,Xt,Nt,A.colorSpace),ie=A.isVideoTexture!==!0,Ne=mt.__version===void 0||ft===!0,k=Mt.dataReady;let Rt=q(A,Yt);$(o.TEXTURE_CUBE_MAP,A);let lt;if(me){ie&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Jt,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){lt=Bt[_t].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];A.format!==Si?Xt!==null?ie?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Xt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,Jt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Xt,Nt,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,Jt,Dt.width,Dt.height,0,Xt,Nt,Dt.data)}}}else{if(lt=A.mipmaps,ie&&Ne){lt.length>0&&Rt++;const _t=qt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Jt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){ie?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,Xt,Nt,Bt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,Bt[_t].width,Bt[_t].height,0,Xt,Nt,Bt[_t].data);for(let Ct=0;Ct<lt.length;Ct++){const $t=lt[Ct].image[_t].image;ie?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,$t.width,$t.height,Xt,Nt,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,Jt,$t.width,$t.height,0,Xt,Nt,$t.data)}}else{ie?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Nt,Bt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,Xt,Nt,Bt[_t]);for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];ie?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Xt,Nt,Dt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,Jt,Xt,Nt,Dt.image[_t])}}}y(A)&&v(o.TEXTURE_CUBE_MAP),mt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Tt(U,A,et,ft,Mt,mt){const kt=u.convert(et.format,et.colorSpace),wt=u.convert(et.type),Pt=N(et.internalFormat,kt,wt,et.colorSpace),me=r.get(A),bt=r.get(et);if(bt.__renderTarget=A,!me.__hasExternalTextures){const Bt=Math.max(1,A.width>>mt),Yt=Math.max(1,A.height>>mt);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,mt,Pt,Bt,Yt,A.depth,0,kt,wt,null):i.texImage2D(Mt,mt,Pt,Bt,Yt,0,kt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),pe(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,Mt,bt.__webglTexture,0,ce(A)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,Mt,bt.__webglTexture,mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function St(U,A,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),A.depthBuffer){const ft=A.depthTexture,Mt=ft&&ft.isDepthTexture?ft.type:null,mt=D(A.stencilBuffer,Mt),kt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ce(A);pe(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,mt,A.width,A.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,mt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,mt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,U)}else{const ft=A.textures;for(let Mt=0;Mt<ft.length;Mt++){const mt=ft[Mt],kt=u.convert(mt.format,mt.colorSpace),wt=u.convert(mt.type),Pt=N(mt.internalFormat,kt,wt,mt.colorSpace),me=ce(A);et&&pe(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,Pt,A.width,A.height):pe(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,Pt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Gt(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(A.depthTexture);ft.__renderTarget=A,(!ft.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pt(A.depthTexture,0);const Mt=ft.__webglTexture,mt=ce(A);if(A.depthTexture.format===Ts)pe(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(A.depthTexture.format===Ds)pe(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Ft(U){const A=r.get(U),et=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ft){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ft.removeEventListener("dispose",Mt)};ft.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=ft}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Gt(A.__webglFramebuffer,U)}else if(et){A.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[ft]),A.__webglDepthbuffer[ft]===void 0)A.__webglDepthbuffer[ft]=o.createRenderbuffer(),St(A.__webglDepthbuffer[ft],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,mt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),St(A.__webglDepthbuffer,U,!1);else{const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,Mt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ne(U,A,et){const ft=r.get(U);A!==void 0&&Tt(ft.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Ft(U)}function Le(U){const A=U.texture,et=r.get(U),ft=r.get(A);U.addEventListener("dispose",z);const Mt=U.textures,mt=U.isWebGLCubeRenderTarget===!0,kt=Mt.length>1;if(kt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=A.version,h.memory.textures++),mt){et.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer[wt]=[];for(let Pt=0;Pt<A.mipmaps.length;Pt++)et.__webglFramebuffer[wt][Pt]=o.createFramebuffer()}else et.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){et.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)et.__webglFramebuffer[wt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(kt)for(let wt=0,Pt=Mt.length;wt<Pt;wt++){const me=r.get(Mt[wt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&pe(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let wt=0;wt<Mt.length;wt++){const Pt=Mt[wt];et.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[wt]);const me=u.convert(Pt.format,Pt.colorSpace),bt=u.convert(Pt.type),Bt=N(Pt.internalFormat,me,bt,Pt.colorSpace,U.isXRRenderTarget===!0),Yt=ce(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Bt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,et.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),St(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),$(o.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Pt=0;Pt<A.mipmaps.length;Pt++)Tt(et.__webglFramebuffer[wt][Pt],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Pt);else Tt(et.__webglFramebuffer[wt],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(A)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let wt=0,Pt=Mt.length;wt<Pt;wt++){const me=Mt[wt],bt=r.get(me);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),$(o.TEXTURE_2D,me),Tt(et.__webglFramebuffer,U,me,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),y(me)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ft.__webglTexture),$(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let Pt=0;Pt<A.mipmaps.length;Pt++)Tt(et.__webglFramebuffer[Pt],U,A,o.COLOR_ATTACHMENT0,wt,Pt);else Tt(et.__webglFramebuffer,U,A,o.COLOR_ATTACHMENT0,wt,0);y(A)&&v(wt),i.unbindTexture()}U.depthBuffer&&Ft(U)}function ue(U){const A=U.textures;for(let et=0,ft=A.length;et<ft;et++){const Mt=A[et];if(y(Mt)){const mt=I(U),kt=r.get(Mt).__webglTexture;i.bindTexture(mt,kt),v(mt),i.unbindTexture()}}}const qe=[],H=[];function Tn(U){if(U.samples>0){if(pe(U)===!1){const A=U.textures,et=U.width,ft=U.height;let Mt=o.COLOR_BUFFER_BIT;const mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=r.get(U),wt=A.length>1;if(wt)for(let Pt=0;Pt<A.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Pt=0;Pt<A.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Pt]);const me=r.get(A[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,et,ft,0,0,et,ft,Mt,o.NEAREST),m===!0&&(qe.length=0,H.length=0,qe.push(o.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(qe.push(mt),H.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,H)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,qe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Pt=0;Pt<A.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Pt]);const me=r.get(A[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const A=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function ce(U){return Math.min(l.maxSamples,U.samples)}function pe(U){const A=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Wt(U){const A=h.render.frame;g.get(U)!==A&&(g.set(U,A),U.update())}function Ce(U,A){const et=U.colorSpace,ft=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Us&&et!==Ha&&(Ae.getTransfer(et)===Be?(ft!==Si||Mt!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),A}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=ot,this.setTexture2D=pt,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=ne,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=pe}function yb(o,e){function i(r,l=Ha){let u;const h=Ae.getTransfer(l);if(r===ca)return o.UNSIGNED_BYTE;if(r===dd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===pd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===S0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===v0)return o.BYTE;if(r===x0)return o.SHORT;if(r===zo)return o.UNSIGNED_SHORT;if(r===hd)return o.INT;if(r===Tr)return o.UNSIGNED_INT;if(r===ra)return o.FLOAT;if(r===Bo)return o.HALF_FLOAT;if(r===y0)return o.ALPHA;if(r===M0)return o.RGB;if(r===Si)return o.RGBA;if(r===E0)return o.LUMINANCE;if(r===T0)return o.LUMINANCE_ALPHA;if(r===Ts)return o.DEPTH_COMPONENT;if(r===Ds)return o.DEPTH_STENCIL;if(r===b0)return o.RED;if(r===md)return o.RED_INTEGER;if(r===A0)return o.RG;if(r===gd)return o.RG_INTEGER;if(r===_d)return o.RGBA_INTEGER;if(r===yc||r===Mc||r===Ec||r===Tc)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ph||r===Bh||r===Ih||r===Fh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Ph)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ih)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hh||r===Gh||r===Vh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Hh||r===Gh)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Vh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kh||r===Xh||r===qh||r===Wh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed||r===nd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$h)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===td)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bc||r===id||r===ad)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===bc)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===id)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ad)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===R0||r===rd||r===sd||r===od)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===bc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===rd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===od)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ws?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Mb={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),v=this._getHandJoint(p,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Mb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new gc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Nn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new qa({vertexShader:Eb,fragmentShader:Tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new Uc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ab extends Ns{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,M=null,b=null;const w=new bb,y=i.getContextAttributes();let v=null,I=null;const N=[],D=[],q=new Ge;let V=null;const z=new ci;z.viewport=new tn;const F=new ci;F.viewport=new tn;const E=[z,F],R=new Yy;let B=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ct=N[Z];return ct===void 0&&(ct=new Mh,N[Z]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Z){let ct=N[Z];return ct===void 0&&(ct=new Mh,N[Z]=ct),ct.getGripSpace()},this.getHand=function(Z){let ct=N[Z];return ct===void 0&&(ct=new Mh,N[Z]=ct),ct.getHandSpace()};function at(Z){const ct=D.indexOf(Z.inputSource);if(ct===-1)return;const Tt=N[ct];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,p||h),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function dt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",pt);for(let Z=0;Z<N.length;Z++){const ct=D[Z];ct!==null&&(D[Z]=null,N[Z].disconnect(ct))}B=null,ot=null,w.reset(),e.setRenderTarget(v),M=null,S=null,_=null,l=null,I=null,yt.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){u=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",pt),y.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(q),l.renderState.layers===void 0){const ct={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new br(M.framebufferWidth,M.framebufferHeight,{format:Si,type:ca,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ct=null,Tt=null,St=null;y.depth&&(St=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=y.stencil?Ds:Ts,Tt=y.stencil?ws:Tr);const Gt={colorFormat:i.RGBA8,depthFormat:St,scaleFactor:u};_=new XRWebGLBinding(l,i),S=_.createProjectionLayer(Gt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),I=new br(S.textureWidth,S.textureHeight,{format:Si,type:ca,depthTexture:new H0(S.textureWidth,S.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function pt(Z){for(let ct=0;ct<Z.removed.length;ct++){const Tt=Z.removed[ct],St=D.indexOf(Tt);St>=0&&(D[St]=null,N[St].disconnect(Tt))}for(let ct=0;ct<Z.added.length;ct++){const Tt=Z.added[ct];let St=D.indexOf(Tt);if(St===-1){for(let Ft=0;Ft<N.length;Ft++)if(Ft>=D.length){D.push(Tt),St=Ft;break}else if(D[Ft]===null){D[Ft]=Tt,St=Ft;break}if(St===-1)break}const Gt=N[St];Gt&&Gt.connect(Tt)}}const O=new rt,K=new rt;function j(Z,ct,Tt){O.setFromMatrixPosition(ct.matrixWorld),K.setFromMatrixPosition(Tt.matrixWorld);const St=O.distanceTo(K),Gt=ct.projectionMatrix.elements,Ft=Tt.projectionMatrix.elements,ne=Gt[14]/(Gt[10]-1),Le=Gt[14]/(Gt[10]+1),ue=(Gt[9]+1)/Gt[5],qe=(Gt[9]-1)/Gt[5],H=(Gt[8]-1)/Gt[0],Tn=(Ft[8]+1)/Ft[0],ce=ne*H,pe=ne*Tn,Wt=St/(-H+Tn),Ce=Wt*-H;if(ct.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ce),Z.translateZ(Wt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Gt[10]===-1)Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const qt=ne+Wt,U=Le+Wt,A=ce-Ce,et=pe+(St-Ce),ft=ue*Le/U*qt,Mt=qe*Le/U*qt;Z.projectionMatrix.makePerspective(A,et,ft,Mt,qt,U),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function xt(Z,ct){ct===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ct.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ct=Z.near,Tt=Z.far;w.texture!==null&&(w.depthNear>0&&(ct=w.depthNear),w.depthFar>0&&(Tt=w.depthFar)),R.near=F.near=z.near=ct,R.far=F.far=z.far=Tt,(B!==R.near||ot!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,ot=R.far),z.layers.mask=Z.layers.mask|2,F.layers.mask=Z.layers.mask|4,R.layers.mask=z.layers.mask|F.layers.mask;const St=Z.parent,Gt=R.cameras;xt(R,St);for(let Ft=0;Ft<Gt.length;Ft++)xt(Gt[Ft],St);Gt.length===2?j(R,z,F):R.projectionMatrix.copy(z.projectionMatrix),Et(Z,R,St)};function Et(Z,ct,Tt){Tt===null?Z.matrix.copy(ct.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ct.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ld*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Z){m=Z,S!==null&&(S.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let L=null;function $(Z,ct){if(g=ct.getViewerPose(p||h),b=ct,g!==null){const Tt=g.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let St=!1;Tt.length!==R.cameras.length&&(R.cameras.length=0,St=!0);for(let Ft=0;Ft<Tt.length;Ft++){const ne=Tt[Ft];let Le=null;if(M!==null)Le=M.getViewport(ne);else{const qe=_.getViewSubImage(S,ne);Le=qe.viewport,Ft===0&&(e.setRenderTargetTextures(I,qe.colorTexture,S.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(I))}let ue=E[Ft];ue===void 0&&(ue=new ci,ue.layers.enable(Ft),ue.viewport=new tn,E[Ft]=ue),ue.matrix.fromArray(ne.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ne.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Le.x,Le.y,Le.width,Le.height),Ft===0&&(R.matrix.copy(ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),St===!0&&R.cameras.push(ue)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Ft=_.getDepthInformation(Tt[0]);Ft&&Ft.isValid&&Ft.texture&&w.init(e,Ft,l.renderState)}}for(let Tt=0;Tt<N.length;Tt++){const St=D[Tt],Gt=N[Tt];St!==null&&Gt!==void 0&&Gt.update(St,ct,p||h)}L&&L(Z,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),b=null}const yt=new G0;yt.setAnimationLoop($),this.setAnimationLoop=function(Z){L=Z},this.dispose=function(){}}}const vr=new ua,Rb=new ln;function Cb(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,P0(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,I,N,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),_(y,v)):v.isMeshPhongMaterial?(u(y,v),g(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(u(y,v),b(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),w(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,I,N):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const I=e.get(v),N=I.envMap,D=I.envMapRotation;N&&(y.envMap.value=N,vr.copy(D),vr.x*=-1,vr.y*=-1,vr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),y.envMapRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(vr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,I,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*I,y.scale.value=N*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,I){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const I=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function wb(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,N){const D=N.program;r.uniformBlockBinding(I,D)}function p(I,N){let D=l[I.id];D===void 0&&(b(I),D=g(I),l[I.id]=D,I.addEventListener("dispose",y));const q=N.program;r.updateUBOMapping(I,q);const V=e.render.frame;u[I.id]!==V&&(S(I),u[I.id]=V)}function g(I){const N=_();I.__bindingPointIndex=N;const D=o.createBuffer(),q=I.__size,V=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,q,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function _(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const N=l[I.id],D=I.uniforms,q=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let V=0,z=D.length;V<z;V++){const F=Array.isArray(D[V])?D[V]:[D[V]];for(let E=0,R=F.length;E<R;E++){const B=F[E];if(M(B,V,E,q)===!0){const ot=B.__offset,at=Array.isArray(B.value)?B.value:[B.value];let dt=0;for(let pt=0;pt<at.length;pt++){const O=at[pt],K=w(O);typeof O=="number"||typeof O=="boolean"?(B.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,ot+dt,B.__data)):O.isMatrix3?(B.__data[0]=O.elements[0],B.__data[1]=O.elements[1],B.__data[2]=O.elements[2],B.__data[3]=0,B.__data[4]=O.elements[3],B.__data[5]=O.elements[4],B.__data[6]=O.elements[5],B.__data[7]=0,B.__data[8]=O.elements[6],B.__data[9]=O.elements[7],B.__data[10]=O.elements[8],B.__data[11]=0):(O.toArray(B.__data,dt),dt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,N,D,q){const V=I.value,z=N+"_"+D;if(q[z]===void 0)return typeof V=="number"||typeof V=="boolean"?q[z]=V:q[z]=V.clone(),!0;{const F=q[z];if(typeof V=="number"||typeof V=="boolean"){if(F!==V)return q[z]=V,!0}else if(F.equals(V)===!1)return F.copy(V),!0}return!1}function b(I){const N=I.uniforms;let D=0;const q=16;for(let z=0,F=N.length;z<F;z++){const E=Array.isArray(N[z])?N[z]:[N[z]];for(let R=0,B=E.length;R<B;R++){const ot=E[R],at=Array.isArray(ot.value)?ot.value:[ot.value];for(let dt=0,pt=at.length;dt<pt;dt++){const O=at[dt],K=w(O),j=D%q,xt=j%K.boundary,Et=j+xt;D+=xt,Et!==0&&q-Et<K.storage&&(D+=q-Et),ot.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=D,D+=K.storage}}}const V=D%q;return V>0&&(D+=q-V),I.__size=D,I.__cache={},this}function w(I){const N={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(N.boundary=4,N.storage=4):I.isVector2?(N.boundary=8,N.storage=8):I.isVector3||I.isColor?(N.boundary=16,N.storage=12):I.isVector4?(N.boundary=16,N.storage=16):I.isMatrix3?(N.boundary=48,N.storage=48):I.isMatrix4?(N.boundary=64,N.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),N}function y(I){const N=I.target;N.removeEventListener("dispose",y);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function v(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}class Db{constructor(e={}){const{canvas:i=uy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const I=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=ka,this.toneMappingExposure=1;const D=this;let q=!1,V=0,z=0,F=null,E=-1,R=null;const B=new tn,ot=new tn;let at=null;const dt=new Ue(0);let pt=0,O=i.width,K=i.height,j=1,xt=null,Et=null;const L=new tn(0,0,O,K),$=new tn(0,0,O,K);let yt=!1;const Z=new F0;let ct=!1,Tt=!1;const St=new ln,Gt=new ln,Ft=new rt,ne=new tn,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function qe(){return F===null?j:1}let H=r;function Tn(C,X){return i.getContext(C,X)}try{const C={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),H===null){const X="webgl2";if(H=Tn(X,C),H===null)throw Tn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ce,pe,Wt,Ce,qt,U,A,et,ft,Mt,mt,kt,wt,Pt,me,bt,Bt,Yt,Xt,Nt,Jt,ie,Ne,k;function Rt(){ce=new FT(H),ce.init(),ie=new yb(H,ce),pe=new NT(H,ce,e,ie),Wt=new xb(H,ce),pe.reverseDepthBuffer&&S&&Wt.buffers.depth.setReversed(!0),Ce=new VT(H),qt=new sb,U=new Sb(H,ce,Wt,qt,pe,ie,Ce),A=new zT(D),et=new IT(D),ft=new Zy(H),Ne=new UT(H,ft),Mt=new HT(H,ft,Ce,Ne),mt=new XT(H,Mt,ft,Ce),Xt=new kT(H,pe,U),bt=new OT(qt),kt=new rb(D,A,et,ce,pe,Ne,bt),wt=new Cb(D,qt),Pt=new lb,me=new pb(ce),Yt=new DT(D,A,et,Wt,mt,M,m),Bt=new _b(D,mt,pe),k=new wb(H,Ce,pe,Wt),Nt=new LT(H,ce,Ce),Jt=new GT(H,ce,Ce),Ce.programs=kt.programs,D.capabilities=pe,D.extensions=ce,D.properties=qt,D.renderLists=Pt,D.shadowMap=Bt,D.state=Wt,D.info=Ce}Rt();const lt=new Ab(D,H);this.xr=lt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ce.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ce.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(O,K,!1))},this.getSize=function(C){return C.set(O,K)},this.setSize=function(C,X,nt=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,K=X,i.width=Math.floor(C*j),i.height=Math.floor(X*j),nt===!0&&(i.style.width=C+"px",i.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(O*j,K*j).floor()},this.setDrawingBufferSize=function(C,X,nt){O=C,K=X,j=nt,i.width=Math.floor(C*nt),i.height=Math.floor(X*nt),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,X,nt,it){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,X,nt,it),Wt.viewport(B.copy(L).multiplyScalar(j).round())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,X,nt,it){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,X,nt,it),Wt.scissor(ot.copy($).multiplyScalar(j).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(C){Wt.setScissorTest(yt=C)},this.setOpaqueSort=function(C){xt=C},this.setTransparentSort=function(C){Et=C},this.getClearColor=function(C){return C.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(C=!0,X=!0,nt=!0){let it=0;if(C){let W=!1;if(F!==null){const vt=F.texture.format;W=vt===_d||vt===gd||vt===md}if(W){const vt=F.texture.type,Ut=vt===ca||vt===Tr||vt===zo||vt===ws||vt===dd||vt===pd,zt=Yt.getClearColor(),Ot=Yt.getClearAlpha(),Kt=zt.r,te=zt.g,jt=zt.b;Ut?(b[0]=Kt,b[1]=te,b[2]=jt,b[3]=Ot,H.clearBufferuiv(H.COLOR,0,b)):(w[0]=Kt,w[1]=te,w[2]=jt,w[3]=Ot,H.clearBufferiv(H.COLOR,0,w))}else it|=H.COLOR_BUFFER_BIT}X&&(it|=H.DEPTH_BUFFER_BIT),nt&&(it|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Yt.dispose(),Pt.dispose(),me.dispose(),qt.dispose(),A.dispose(),et.dispose(),mt.dispose(),Ne.dispose(),k.dispose(),kt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",zs),lt.removeEventListener("sessionend",Ps),Ei.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const C=Ce.autoReset,X=Bt.enabled,nt=Bt.autoUpdate,it=Bt.needsUpdate,W=Bt.type;Rt(),Ce.autoReset=C,Bt.enabled=X,Bt.autoUpdate=nt,Bt.needsUpdate=it,Bt.type=W}function Dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $t(C){const X=C.target;X.removeEventListener("dispose",$t),We(X)}function We(C){cn(C),qt.remove(C)}function cn(C){const X=qt.get(C).programs;X!==void 0&&(X.forEach(function(nt){kt.releaseProgram(nt)}),C.isShaderMaterial&&kt.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,nt,it,W,vt){X===null&&(X=Le);const Ut=W.isMesh&&W.matrixWorld.determinant()<0,zt=Is(C,X,nt,it,W);Wt.setMaterial(it,Ut);let Ot=nt.index,Kt=1;if(it.wireframe===!0){if(Ot=Mt.getWireframeAttribute(nt),Ot===void 0)return;Kt=2}const te=nt.drawRange,jt=nt.attributes.position;let ge=te.start*Kt,Me=(te.start+te.count)*Kt;vt!==null&&(ge=Math.max(ge,vt.start*Kt),Me=Math.min(Me,(vt.start+vt.count)*Kt)),Ot!==null?(ge=Math.max(ge,0),Me=Math.min(Me,Ot.count)):jt!=null&&(ge=Math.max(ge,0),Me=Math.min(Me,jt.count));const Ve=Me-ge;if(Ve<0||Ve===1/0)return;Ne.setup(W,it,zt,nt,Ot);let Ie,ae=Nt;if(Ot!==null&&(Ie=ft.get(Ot),ae=Jt,ae.setIndex(Ie)),W.isMesh)it.wireframe===!0?(Wt.setLineWidth(it.wireframeLinewidth*qe()),ae.setMode(H.LINES)):ae.setMode(H.TRIANGLES);else if(W.isLine){let Ht=it.linewidth;Ht===void 0&&(Ht=1),Wt.setLineWidth(Ht*qe()),W.isLineSegments?ae.setMode(H.LINES):W.isLineLoop?ae.setMode(H.LINE_LOOP):ae.setMode(H.LINE_STRIP)}else W.isPoints?ae.setMode(H.POINTS):W.isSprite&&ae.setMode(H.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ae.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))ae.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ht=W._multiDrawStarts,en=W._multiDrawCounts,Ee=W._multiDrawCount,wn=Ot?ft.get(Ot).bytesPerElement:1,Oi=qt.get(it).currentProgram.getUniforms();for(let pn=0;pn<Ee;pn++)Oi.setValue(H,"_gl_DrawID",pn),ae.render(Ht[pn]/wn,en[pn])}else if(W.isInstancedMesh)ae.renderInstances(ge,Ve,W.count);else if(nt.isInstancedBufferGeometry){const Ht=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,en=Math.min(nt.instanceCount,Ht);ae.renderInstances(ge,Ve,en)}else ae.render(ge,Ve)};function ye(C,X,nt){C.transparent===!0&&C.side===aa&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,je(C,X,nt),C.side=la,C.needsUpdate=!0,je(C,X,nt),C.side=aa):je(C,X,nt)}this.compile=function(C,X,nt=null){nt===null&&(nt=C),v=me.get(nt),v.init(X),N.push(v),nt.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),C!==nt&&C.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights();const it=new Set;return C.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const vt=W.material;if(vt)if(Array.isArray(vt))for(let Ut=0;Ut<vt.length;Ut++){const zt=vt[Ut];ye(zt,nt,W),it.add(zt)}else ye(vt,nt,W),it.add(vt)}),N.pop(),v=null,it},this.compileAsync=function(C,X,nt=null){const it=this.compile(C,X,nt);return new Promise(W=>{function vt(){if(it.forEach(function(Ut){qt.get(Ut).currentProgram.isReady()&&it.delete(Ut)}),it.size===0){W(C);return}setTimeout(vt,10)}ce.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let _n=null;function ui(C){_n&&_n(C)}function zs(){Ei.stop()}function Ps(){Ei.start()}const Ei=new G0;Ei.setAnimationLoop(ui),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(C){_n=C,lt.setAnimationLoop(C),C===null?Ei.stop():Ei.start()},lt.addEventListener("sessionstart",zs),lt.addEventListener("sessionend",Ps),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(X),X=lt.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,X,F),v=me.get(C,N.length),v.init(X),N.push(v),Gt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(Gt),Tt=this.localClippingEnabled,ct=bt.init(this.clippingPlanes,Tt),y=Pt.get(C,I.length),y.init(),I.push(y),lt.enabled===!0&&lt.isPresenting===!0){const vt=D.xr.getDepthSensingMesh();vt!==null&&Ya(vt,X,-1/0,D.sortObjects)}Ya(C,X,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(xt,Et),ue=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,ue&&Yt.addToRenderList(y,C),this.info.render.frame++,ct===!0&&bt.beginShadows();const nt=v.state.shadowsArray;Bt.render(nt,C,X),ct===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=y.opaque,W=y.transmissive;if(v.setupLights(),X.isArrayCamera){const vt=X.cameras;if(W.length>0)for(let Ut=0,zt=vt.length;Ut<zt;Ut++){const Ot=vt[Ut];Bs(it,W,C,Ot)}ue&&Yt.render(C);for(let Ut=0,zt=vt.length;Ut<zt;Ut++){const Ot=vt[Ut];Ar(y,C,Ot,Ot.viewport)}}else W.length>0&&Bs(it,W,C,X),ue&&Yt.render(C),Ar(y,C,X);F!==null&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(D,C,X),Ne.resetDefaultState(),E=-1,R=null,N.pop(),N.length>0?(v=N[N.length-1],ct===!0&&bt.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Ya(C,X,nt,it){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)nt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){it&&ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Gt);const Ut=mt.update(C),zt=C.material;zt.visible&&y.push(C,Ut,zt,nt,ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const Ut=mt.update(C),zt=C.material;if(it&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ne.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ne.copy(Ut.boundingSphere.center)),ne.applyMatrix4(C.matrixWorld).applyMatrix4(Gt)),Array.isArray(zt)){const Ot=Ut.groups;for(let Kt=0,te=Ot.length;Kt<te;Kt++){const jt=Ot[Kt],ge=zt[jt.materialIndex];ge&&ge.visible&&y.push(C,Ut,ge,nt,ne.z,jt)}}else zt.visible&&y.push(C,Ut,zt,nt,ne.z,null)}}const vt=C.children;for(let Ut=0,zt=vt.length;Ut<zt;Ut++)Ya(vt[Ut],X,nt,it)}function Ar(C,X,nt,it){const W=C.opaque,vt=C.transmissive,Ut=C.transparent;v.setupLightsView(nt),ct===!0&&bt.setGlobalState(D.clippingPlanes,nt),it&&Wt.viewport(B.copy(it)),W.length>0&&ja(W,X,nt),vt.length>0&&ja(vt,X,nt),Ut.length>0&&ja(Ut,X,nt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Bs(C,X,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[it.id]===void 0&&(v.state.transmissionRenderTarget[it.id]=new br(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Bo:ca,minFilter:Ga,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const vt=v.state.transmissionRenderTarget[it.id],Ut=it.viewport||B;vt.setSize(Ut.z,Ut.w);const zt=D.getRenderTarget();D.setRenderTarget(vt),D.getClearColor(dt),pt=D.getClearAlpha(),pt<1&&D.setClearColor(16777215,.5),D.clear(),ue&&Yt.render(nt);const Ot=D.toneMapping;D.toneMapping=ka;const Kt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),v.setupLightsView(it),ct===!0&&bt.setGlobalState(D.clippingPlanes,it),ja(C,nt,it),U.updateMultisampleRenderTarget(vt),U.updateRenderTargetMipmap(vt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let jt=0,ge=X.length;jt<ge;jt++){const Me=X[jt],Ve=Me.object,Ie=Me.geometry,ae=Me.material,Ht=Me.group;if(ae.side===aa&&Ve.layers.test(it.layers)){const en=ae.side;ae.side=kn,ae.needsUpdate=!0,fi(Ve,nt,it,Ie,ae,Ht),ae.side=en,ae.needsUpdate=!0,te=!0}}te===!0&&(U.updateMultisampleRenderTarget(vt),U.updateRenderTargetMipmap(vt))}D.setRenderTarget(zt),D.setClearColor(dt,pt),Kt!==void 0&&(it.viewport=Kt),D.toneMapping=Ot}function ja(C,X,nt){const it=X.isScene===!0?X.overrideMaterial:null;for(let W=0,vt=C.length;W<vt;W++){const Ut=C[W],zt=Ut.object,Ot=Ut.geometry,Kt=it===null?Ut.material:it,te=Ut.group;zt.layers.test(nt.layers)&&fi(zt,X,nt,Ot,Kt,te)}}function fi(C,X,nt,it,W,vt){C.onBeforeRender(D,X,nt,it,W,vt),C.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(D,X,nt,it,C,vt),W.transparent===!0&&W.side===aa&&W.forceSinglePass===!1?(W.side=kn,W.needsUpdate=!0,D.renderBufferDirect(nt,X,it,W,C,vt),W.side=la,W.needsUpdate=!0,D.renderBufferDirect(nt,X,it,W,C,vt),W.side=aa):D.renderBufferDirect(nt,X,it,W,C,vt),C.onAfterRender(D,X,nt,it,W,vt)}function je(C,X,nt){X.isScene!==!0&&(X=Le);const it=qt.get(C),W=v.state.lights,vt=v.state.shadowsArray,Ut=W.state.version,zt=kt.getParameters(C,W.state,vt,X,nt),Ot=kt.getProgramCacheKey(zt);let Kt=it.programs;it.environment=C.isMeshStandardMaterial?X.environment:null,it.fog=X.fog,it.envMap=(C.isMeshStandardMaterial?et:A).get(C.envMap||it.environment),it.envMapRotation=it.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Kt===void 0&&(C.addEventListener("dispose",$t),Kt=new Map,it.programs=Kt);let te=Kt.get(Ot);if(te!==void 0){if(it.currentProgram===te&&it.lightsStateVersion===Ut)return Ni(C,zt),te}else zt.uniforms=kt.getUniforms(C),C.onBeforeCompile(zt,D),te=kt.acquireProgram(zt,Ot),Kt.set(Ot,te),it.uniforms=zt.uniforms;const jt=it.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(jt.clippingPlanes=bt.uniform),Ni(C,zt),it.needsLights=Oc(C),it.lightsStateVersion=Ut,it.needsLights&&(jt.ambientLightColor.value=W.state.ambient,jt.lightProbe.value=W.state.probe,jt.directionalLights.value=W.state.directional,jt.directionalLightShadows.value=W.state.directionalShadow,jt.spotLights.value=W.state.spot,jt.spotLightShadows.value=W.state.spotShadow,jt.rectAreaLights.value=W.state.rectArea,jt.ltc_1.value=W.state.rectAreaLTC1,jt.ltc_2.value=W.state.rectAreaLTC2,jt.pointLights.value=W.state.point,jt.pointLightShadows.value=W.state.pointShadow,jt.hemisphereLights.value=W.state.hemi,jt.directionalShadowMap.value=W.state.directionalShadowMap,jt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,jt.spotShadowMap.value=W.state.spotShadowMap,jt.spotLightMatrix.value=W.state.spotLightMatrix,jt.spotLightMap.value=W.state.spotLightMap,jt.pointShadowMap.value=W.state.pointShadowMap,jt.pointShadowMatrix.value=W.state.pointShadowMatrix),it.currentProgram=te,it.uniformsList=null,te}function vn(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Ac.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Ni(C,X){const nt=qt.get(C);nt.outputColorSpace=X.outputColorSpace,nt.batching=X.batching,nt.batchingColor=X.batchingColor,nt.instancing=X.instancing,nt.instancingColor=X.instancingColor,nt.instancingMorph=X.instancingMorph,nt.skinning=X.skinning,nt.morphTargets=X.morphTargets,nt.morphNormals=X.morphNormals,nt.morphColors=X.morphColors,nt.morphTargetsCount=X.morphTargetsCount,nt.numClippingPlanes=X.numClippingPlanes,nt.numIntersection=X.numClipIntersection,nt.vertexAlphas=X.vertexAlphas,nt.vertexTangents=X.vertexTangents,nt.toneMapping=X.toneMapping}function Is(C,X,nt,it,W){X.isScene!==!0&&(X=Le),U.resetTextureUnits();const vt=X.fog,Ut=it.isMeshStandardMaterial?X.environment:null,zt=F===null?D.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Us,Ot=(it.isMeshStandardMaterial?et:A).get(it.envMap||Ut),Kt=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,te=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),jt=!!nt.morphAttributes.position,ge=!!nt.morphAttributes.normal,Me=!!nt.morphAttributes.color;let Ve=ka;it.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Ie=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,ae=Ie!==void 0?Ie.length:0,Ht=qt.get(it),en=v.state.lights;if(ct===!0&&(Tt===!0||C!==R)){const un=C===R&&it.id===E;bt.setState(it,C,un)}let Ee=!1;it.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==en.state.version||Ht.outputColorSpace!==zt||W.isBatchedMesh&&Ht.batching===!1||!W.isBatchedMesh&&Ht.batching===!0||W.isBatchedMesh&&Ht.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ht.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ht.instancing===!1||!W.isInstancedMesh&&Ht.instancing===!0||W.isSkinnedMesh&&Ht.skinning===!1||!W.isSkinnedMesh&&Ht.skinning===!0||W.isInstancedMesh&&Ht.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ht.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ht.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ht.instancingMorph===!1&&W.morphTexture!==null||Ht.envMap!==Ot||it.fog===!0&&Ht.fog!==vt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==bt.numPlanes||Ht.numIntersection!==bt.numIntersection)||Ht.vertexAlphas!==Kt||Ht.vertexTangents!==te||Ht.morphTargets!==jt||Ht.morphNormals!==ge||Ht.morphColors!==Me||Ht.toneMapping!==Ve||Ht.morphTargetsCount!==ae)&&(Ee=!0):(Ee=!0,Ht.__version=it.version);let wn=Ht.currentProgram;Ee===!0&&(wn=je(it,X,W));let Oi=!1,pn=!1,Ka=!1;const fe=wn.getUniforms(),bn=Ht.uniforms;if(Wt.useProgram(wn.program)&&(Oi=!0,pn=!0,Ka=!0),it.id!==E&&(E=it.id,pn=!0),Oi||R!==C){Wt.buffers.depth.getReversed()?(St.copy(C.projectionMatrix),hy(St),dy(St),fe.setValue(H,"projectionMatrix",St)):fe.setValue(H,"projectionMatrix",C.projectionMatrix),fe.setValue(H,"viewMatrix",C.matrixWorldInverse);const Qe=fe.map.cameraPosition;Qe!==void 0&&Qe.setValue(H,Ft.setFromMatrixPosition(C.matrixWorld)),pe.logarithmicDepthBuffer&&fe.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&fe.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,pn=!0,Ka=!0)}if(W.isSkinnedMesh){fe.setOptional(H,W,"bindMatrix"),fe.setOptional(H,W,"bindMatrixInverse");const un=W.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),fe.setValue(H,"boneTexture",un.boneTexture,U))}W.isBatchedMesh&&(fe.setOptional(H,W,"batchingTexture"),fe.setValue(H,"batchingTexture",W._matricesTexture,U),fe.setOptional(H,W,"batchingIdTexture"),fe.setValue(H,"batchingIdTexture",W._indirectTexture,U),fe.setOptional(H,W,"batchingColorTexture"),W._colorsTexture!==null&&fe.setValue(H,"batchingColorTexture",W._colorsTexture,U));const Dn=nt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Xt.update(W,nt,wn),(pn||Ht.receiveShadow!==W.receiveShadow)&&(Ht.receiveShadow=W.receiveShadow,fe.setValue(H,"receiveShadow",W.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(bn.envMap.value=Ot,bn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&X.environment!==null&&(bn.envMapIntensity.value=X.environmentIntensity),pn&&(fe.setValue(H,"toneMappingExposure",D.toneMappingExposure),Ht.needsLights&&Nc(bn,Ka),vt&&it.fog===!0&&wt.refreshFogUniforms(bn,vt),wt.refreshMaterialUniforms(bn,it,j,K,v.state.transmissionRenderTarget[C.id]),Ac.upload(H,vn(Ht),bn,U)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Ac.upload(H,vn(Ht),bn,U),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&fe.setValue(H,"center",W.center),fe.setValue(H,"modelViewMatrix",W.modelViewMatrix),fe.setValue(H,"normalMatrix",W.normalMatrix),fe.setValue(H,"modelMatrix",W.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const un=it.uniformsGroups;for(let Qe=0,Rr=un.length;Qe<Rr;Qe++){const Ti=un[Qe];k.update(Ti,wn),k.bind(Ti,wn)}}return wn}function Nc(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Oc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,X,nt){qt.get(C.texture).__webglTexture=X,qt.get(C.depthTexture).__webglTexture=nt;const it=qt.get(C);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const nt=qt.get(C);nt.__webglFramebuffer=X,nt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,nt=0){F=C,V=X,z=nt;let it=!0,W=null,vt=!1,Ut=!1;if(C){const Ot=qt.get(C);if(Ot.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(H.FRAMEBUFFER,null),it=!1;else if(Ot.__webglFramebuffer===void 0)U.setupRenderTarget(C);else if(Ot.__hasExternalTextures)U.rebindTextures(C,qt.get(C.texture).__webglTexture,qt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const jt=C.depthTexture;if(Ot.__boundDepthTexture!==jt){if(jt!==null&&qt.has(jt)&&(C.width!==jt.image.width||C.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(C)}}const Kt=C.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ut=!0);const te=qt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(te[X])?W=te[X][nt]:W=te[X],vt=!0):C.samples>0&&U.useMultisampledRTT(C)===!1?W=qt.get(C).__webglMultisampledFramebuffer:Array.isArray(te)?W=te[nt]:W=te,B.copy(C.viewport),ot.copy(C.scissor),at=C.scissorTest}else B.copy(L).multiplyScalar(j).floor(),ot.copy($).multiplyScalar(j).floor(),at=yt;if(Wt.bindFramebuffer(H.FRAMEBUFFER,W)&&it&&Wt.drawBuffers(C,W),Wt.viewport(B),Wt.scissor(ot),Wt.setScissorTest(at),vt){const Ot=qt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ot.__webglTexture,nt)}else if(Ut){const Ot=qt.get(C.texture),Kt=X||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.__webglTexture,nt||0,Kt)}E=-1},this.readRenderTargetPixels=function(C,X,nt,it,W,vt,Ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=qt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt){Wt.bindFramebuffer(H.FRAMEBUFFER,zt);try{const Ot=C.texture,Kt=Ot.format,te=Ot.type;if(!pe.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-it&&nt>=0&&nt<=C.height-W&&H.readPixels(X,nt,it,W,ie.convert(Kt),ie.convert(te),vt)}finally{const Ot=F!==null?qt.get(F).__webglFramebuffer:null;Wt.bindFramebuffer(H.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,X,nt,it,W,vt,Ut){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=qt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt){const Ot=C.texture,Kt=Ot.format,te=Ot.type;if(!pe.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-it&&nt>=0&&nt<=C.height-W){Wt.bindFramebuffer(H.FRAMEBUFFER,zt);const jt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.bufferData(H.PIXEL_PACK_BUFFER,vt.byteLength,H.STREAM_READ),H.readPixels(X,nt,it,W,ie.convert(Kt),ie.convert(te),0);const ge=F!==null?qt.get(F).__webglFramebuffer:null;Wt.bindFramebuffer(H.FRAMEBUFFER,ge);const Me=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await fy(H,Me,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,vt),H.deleteBuffer(jt),H.deleteSync(Me),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,nt=0){C.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const it=Math.pow(2,-nt),W=Math.floor(C.image.width*it),vt=Math.floor(C.image.height*it),Ut=X!==null?X.x:0,zt=X!==null?X.y:0;U.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,nt,0,0,Ut,zt,W,vt),Wt.unbindTexture()};const Vo=H.createFramebuffer(),Za=H.createFramebuffer();this.copyTextureToTexture=function(C,X,nt=null,it=null,W=0,vt=null){C.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,C=arguments[1],X=arguments[2],vt=arguments[3]||0,nt=null),vt===null&&(W!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=W,W=0):vt=0);let Ut,zt,Ot,Kt,te,jt,ge,Me,Ve;const Ie=C.isCompressedTexture?C.mipmaps[vt]:C.image;if(nt!==null)Ut=nt.max.x-nt.min.x,zt=nt.max.y-nt.min.y,Ot=nt.isBox3?nt.max.z-nt.min.z:1,Kt=nt.min.x,te=nt.min.y,jt=nt.isBox3?nt.min.z:0;else{const Dn=Math.pow(2,-W);Ut=Math.floor(Ie.width*Dn),zt=Math.floor(Ie.height*Dn),C.isDataArrayTexture?Ot=Ie.depth:C.isData3DTexture?Ot=Math.floor(Ie.depth*Dn):Ot=1,Kt=0,te=0,jt=0}it!==null?(ge=it.x,Me=it.y,Ve=it.z):(ge=0,Me=0,Ve=0);const ae=ie.convert(X.format),Ht=ie.convert(X.type);let en;X.isData3DTexture?(U.setTexture3D(X,0),en=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(U.setTexture2DArray(X,0),en=H.TEXTURE_2D_ARRAY):(U.setTexture2D(X,0),en=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Ee=H.getParameter(H.UNPACK_ROW_LENGTH),wn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Oi=H.getParameter(H.UNPACK_SKIP_PIXELS),pn=H.getParameter(H.UNPACK_SKIP_ROWS),Ka=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ie.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Kt),H.pixelStorei(H.UNPACK_SKIP_ROWS,te),H.pixelStorei(H.UNPACK_SKIP_IMAGES,jt);const fe=C.isDataArrayTexture||C.isData3DTexture,bn=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const Dn=qt.get(C),un=qt.get(X),Qe=qt.get(Dn.__renderTarget),Rr=qt.get(un.__renderTarget);Wt.bindFramebuffer(H.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Wt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Ti=0;Ti<Ot;Ti++)fe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qt.get(C).__webglTexture,W,jt+Ti),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qt.get(X).__webglTexture,vt,Ve+Ti)),H.blitFramebuffer(Kt,te,Ut,zt,ge,Me,Ut,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);Wt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(W!==0||C.isRenderTargetTexture||qt.has(C)){const Dn=qt.get(C),un=qt.get(X);Wt.bindFramebuffer(H.READ_FRAMEBUFFER,Vo),Wt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Za);for(let Qe=0;Qe<Ot;Qe++)fe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dn.__webglTexture,W,jt+Qe):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dn.__webglTexture,W),bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,un.__webglTexture,vt,Ve+Qe):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,un.__webglTexture,vt),W!==0?H.blitFramebuffer(Kt,te,Ut,zt,ge,Me,Ut,zt,H.COLOR_BUFFER_BIT,H.NEAREST):bn?H.copyTexSubImage3D(en,vt,ge,Me,Ve+Qe,Kt,te,Ut,zt):H.copyTexSubImage2D(en,vt,ge,Me,Kt,te,Ut,zt);Wt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else bn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(en,vt,ge,Me,Ve,Ut,zt,Ot,ae,Ht,Ie.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(en,vt,ge,Me,Ve,Ut,zt,Ot,ae,Ie.data):H.texSubImage3D(en,vt,ge,Me,Ve,Ut,zt,Ot,ae,Ht,Ie):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,vt,ge,Me,Ut,zt,ae,Ht,Ie.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,vt,ge,Me,Ie.width,Ie.height,ae,Ie.data):H.texSubImage2D(H.TEXTURE_2D,vt,ge,Me,Ut,zt,ae,Ht,Ie);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,wn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Oi),H.pixelStorei(H.UNPACK_SKIP_ROWS,pn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ka),vt===0&&X.generateMipmaps&&H.generateMipmap(en),Wt.unbindTexture()},this.copyTextureToTexture3D=function(C,X,nt=null,it=null,W=0){return C.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,it=arguments[1]||null,C=arguments[2],X=arguments[3],W=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,nt,it,W)},this.initRenderTarget=function(C){qt.get(C).__webglFramebuffer===void 0&&U.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),Wt.unbindTexture()},this.resetState=function(){V=0,z=0,F=null,Wt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const Ub={efficient:384,balanced:640,ultra:896},Gn=(o,e=0,i=1)=>Math.min(i,Math.max(e,o)),Xa=(o,e,i)=>o*(1-i)+e*i;function Lb(o,e){if("OffscreenCanvas"in window)return new OffscreenCanvas(o,e);const i=document.createElement("canvas");return i.width=o,i.height=e,i}function W0(o){const e=o.getContext("2d",{willReadFrequently:!0});if(!e)throw new Error("Canvas 2D rendering is unavailable.");return e}function h0(o,e,i,r){const l=new Float32Array(o.length),u=new Float32Array(o.length);for(let h=0;h<i;h+=1)for(let d=0;d<e;d+=1){let m=0,p=0;for(let g=-r;g<=r;g+=1){const _=(d+g+e)%e,S=r+1-Math.abs(g);m+=o[h*e+_]*S,p+=S}l[h*e+d]=m/p}for(let h=0;h<i;h+=1)for(let d=0;d<e;d+=1){let m=0,p=0;for(let g=-r;g<=r;g+=1){const _=Gn(h+g,0,i-1),S=r+1-Math.abs(g);m+=l[_*e+d]*S,p+=S}u[h*e+d]=m/p}return u}function Nb(o,e,i,r){const l=new Float32Array(r),u=new Float32Array(r);for(let _=0;_<r;_+=1){let S=0,M=0;for(let b=0;b<i;b+=1){const w=_*i+b;S+=o[w],M+=e[w]}l[_]=S/i,u[_]=M/i}let h=Math.round(r*.5),d=-1/0;const m=Math.round(r*.28),p=Math.round(r*.72),g=Math.max(2,Math.round(r*.025));for(let _=m;_<=p;_+=1){const S=Math.max(0,_-g),M=Math.min(r-1,_+g),b=Math.abs(l[S]-l[M]),w=Math.abs(u[S]-u[M]),y=1-Math.abs(_/r-.5)*.8,v=(b*1.7+w*.85)*y;v>d&&(d=v,h=_)}return Gn(h/Math.max(1,r-1),.32,.68)}function Ob(o,e,i){const r=document.createElement("canvas");r.width=o,r.height=e;const l=W0(r),u=l.createImageData(o,e);for(let h=0;h<i.length;h+=1){const d=Gn(i[h]),m=Gn((d-.18)/.68),p=Math.round(Xa(20,255,m)),g=Math.round(Xa(78,d>.65?100:196,d)),_=Math.round(Xa(104,82,m)),S=h*4;u.data[S]=p,u.data[S+1]=g,u.data[S+2]=_,u.data[S+3]=255}return l.putImageData(u,0,0),r.toDataURL("image/png")}async function zb(o,e){const i=await createImageBitmap(o,{colorSpaceConversion:"default",imageOrientation:"none"}),r=Math.min(Ub[e],i.width),l=i.width/Math.max(1,i.height),u=Math.max(64,Math.round(r)),h=Math.max(32,Math.round(u/l)),d=Lb(u,h),m=W0(d);m.imageSmoothingEnabled=!0,m.imageSmoothingQuality=e==="ultra"?"high":"medium",m.drawImage(i,0,0,u,h);const p=m.getImageData(0,0,u,h),g=u*h,_=new Float32Array(g),S=new Float32Array(g),M=new Float32Array(g);for(let F=0;F<g;F+=1){const E=F*4,R=p.data[E]/255,B=p.data[E+1]/255,ot=p.data[E+2]/255,at=Math.max(R,B,ot),dt=Math.min(R,B,ot);_[F]=R*.2126+B*.7152+ot*.0722,S[F]=at<=.001?0:(at-dt)/at,M[F]=Gn((ot-R*.72-B*.18)*1.8)}const b=h0(_,u,h,2),w=new Float32Array(g);for(let F=0;F<h;F+=1){const E=Math.max(0,F-1),R=Math.min(h-1,F+1);for(let B=0;B<u;B+=1){const ot=(B-1+u)%u,at=(B+1)%u,dt=b[F*u+at]-b[F*u+ot],pt=b[R*u+B]-b[E*u+B];w[F*u+B]=Math.sqrt(dt*dt+pt*pt)}}const y=Nb(_,S,u,h);let v=0,I=0,N=0;for(let F=0;F<Math.max(1,Math.round(h*Math.min(y,.42)));F+=1)for(let E=0;E<u;E+=1){const R=F*u+E;v+=M[R],I+=w[R],N+=1}const D=N>0&&v/N>.08&&I/N<.025,q=new Float32Array(g);for(let F=0;F<h;F+=1){const E=F/Math.max(1,h-1),R=Gn((E-y)/Math.max(.001,1-y)),B=Gn((y-E)/Math.max(.001,y)),ot=Math.pow(R,1.22),at=Gn(w[F*u]*9+S[F*u]*.35),dt=Math.pow(B,1.18)*(D?.08:at);for(let pt=0;pt<u;pt+=1){const O=F*u+pt,K=Math.abs(_[O]-b[O]),j=Gn(w[O]*6+K*1.8),xt=S[O]*(.18+E*.26),Et=D&&E<y?Gn(M[O]*1.4+(1-w[O]*18)*.24):0;let $=.05+ot*.73+dt*.28+j*(.2+E*.34)+xt;Et>.16&&($*=Xa(1,.16,Et)),q[O]=Gn($)}}const V=h0(q,u,h,e==="ultra"?4:3),z=new Float32Array(g);for(let F=0;F<g;F+=1){const E=Gn(w[F]*16+S[F]*.08,.18,.74);z[F]=Gn(Xa(V[F],q[F],E))}return i.close(),{width:u,height:h,data:z,previewUrl:Ob(u,h,z),horizon:y,sourceWidth:i.width,sourceHeight:i.height}}function Pb(o,e,i){const l=(e%1+1)%1*(o.width-1),u=Gn(i)*(o.height-1),h=Math.floor(l),d=Math.floor(u),m=(h+1)%o.width,p=Math.min(o.height-1,d+1),g=l-h,_=u-d,S=o.data[d*o.width+h],M=o.data[d*o.width+m],b=o.data[p*o.width+h],w=o.data[p*o.width+m];return Xa(Xa(S,M,g),Xa(b,w,g),_)}const d0=26,Bb={efficient:128,balanced:192,ultra:288},Ib={efficient:1,balanced:1.5,ultra:2},Ss=(o,e,i)=>Math.min(i,Math.max(e,o)),Fb={phase:"loading",phaseText:"Starting",fileName:"Demo panorama",textureResolution:"0 x 0",depthResolution:"0 x 0",meshVertices:0,meshTriangles:0,renderMode:"On demand",anisotropy:1,depthPreviewUrl:"",horizon:.5};class Hb{constructor(e,i,r){He(this,"container");He(this,"renderer");He(this,"scene",new By);He(this,"camera",new ci(72,1,.01,160));He(this,"mesh");He(this,"texture");He(this,"depthMap");He(this,"resizeObserver");He(this,"onState");He(this,"onSettings");He(this,"state",{...Fb});He(this,"settings");He(this,"yaw",Math.PI);He(this,"pitch",0);He(this,"raf",0);He(this,"loadToken",0);He(this,"disposed",!1);He(this,"isDragging",!1);He(this,"pointerId",-1);He(this,"lastX",0);He(this,"lastY",0);He(this,"handlePointerDown",e=>{this.isDragging=!0,this.pointerId=e.pointerId,this.lastX=e.clientX,this.lastY=e.clientY,this.renderer.domElement.setPointerCapture(e.pointerId)});He(this,"handlePointerMove",e=>{if(!this.isDragging||e.pointerId!==this.pointerId)return;const i=Math.max(1,this.renderer.domElement.clientWidth),r=Math.max(1,this.renderer.domElement.clientHeight),l=e.clientX-this.lastX,u=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY,this.yaw-=l/i*Math.PI*1.45,this.pitch=Ss(this.pitch-u/r*Math.PI*.95,-1.42,1.42),this.requestRender()});He(this,"handlePointerUp",e=>{e.pointerId===this.pointerId&&(this.isDragging=!1,this.pointerId=-1,this.renderer.domElement.hasPointerCapture(e.pointerId)&&this.renderer.domElement.releasePointerCapture(e.pointerId))});He(this,"handleWheel",e=>{e.preventDefault();const i=Ss(this.settings.fov+Math.sign(e.deltaY)*3.5,38,92);this.settings.fov=i,this.onSettings({fov:i}),this.requestRender()});He(this,"resize",()=>{if(this.disposed)return;const e=this.container.getBoundingClientRect(),i=Math.max(1,Math.floor(e.width)),r=Math.max(1,Math.floor(e.height)),l=Ib[this.settings.quality],u=Math.min(window.devicePixelRatio||1,l);this.renderer.setPixelRatio(u),this.renderer.setSize(i,r,!1),this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.requestRender()});this.container=e,this.onState=i,this.onSettings=r,this.settings={quality:"balanced",depthStrength:.58,parallax:.28,fov:72,smartDepth:!0},this.renderer=new Db({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Vn,this.renderer.setClearColor(1119250,1),this.renderer.domElement.setAttribute("aria-label","3D panorama viewport"),this.renderer.domElement.setAttribute("role","img"),this.container.appendChild(this.renderer.domElement),this.scene.background=new Ue(1119250),this.resizeObserver=new ResizeObserver(this.resize),this.resizeObserver.observe(this.container),this.addEvents(),this.resize(),this.emit()}async setPanoramaBlob(e,i){const r=++this.loadToken;this.updateState({phase:"processing",phaseText:"Analyzing depth",fileName:i,depthPreviewUrl:""});try{const[l,u]=await Promise.all([this.loadTexture(e),zb(e,this.settings.quality)]);if(this.disposed||r!==this.loadToken){l.dispose();return}this.disposeSceneTexture(),this.texture=l,this.depthMap=u,this.rebuildMesh(),this.updateState({phase:"ready",phaseText:"Ready",textureResolution:this.textureSize(l),depthResolution:`${u.width} x ${u.height}`,depthPreviewUrl:u.previewUrl,horizon:u.horizon}),this.requestRender()}catch(l){this.updateState({phase:"error",phaseText:l instanceof Error?l.message:"Could not load panorama"})}}setQuality(e){this.settings.quality!==e&&(this.settings.quality=e,this.resize(),this.texture&&this.depthMap&&(this.rebuildMesh(),this.requestRender()))}setDepthStrength(e){this.settings.depthStrength=Ss(e,0,1),this.texture&&this.depthMap&&(this.rebuildMesh(),this.requestRender())}setParallax(e){this.settings.parallax=Ss(e,0,.7),this.requestRender()}setFov(e){this.settings.fov=Ss(e,38,92),this.requestRender()}setSmartDepth(e){this.settings.smartDepth=e,this.texture&&this.depthMap&&(this.rebuildMesh(),this.requestRender())}resetView(){this.yaw=Math.PI,this.pitch=0,this.requestRender()}async downloadPng(){this.renderNow();const e=await new Promise(u=>this.renderer.domElement.toBlob(u,"image/png",1));if(!e)return;const i=URL.createObjectURL(e),r=document.createElement("a"),l=this.state.fileName.replace(/\.[a-z0-9]+$/i,"").replace(/[^a-z0-9-]+/gi,"-");r.href=i,r.download=`${l||"pano-depth"}-render.png`,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}dispose(){this.disposed=!0,this.loadToken+=1,cancelAnimationFrame(this.raf),this.removeEvents(),this.resizeObserver.disconnect(),this.disposeMesh(),this.disposeSceneTexture(),this.renderer.dispose(),this.renderer.domElement.remove()}addEvents(){const e=this.renderer.domElement;e.addEventListener("pointerdown",this.handlePointerDown),e.addEventListener("pointermove",this.handlePointerMove),e.addEventListener("pointerup",this.handlePointerUp),e.addEventListener("pointercancel",this.handlePointerUp),e.addEventListener("wheel",this.handleWheel,{passive:!1})}removeEvents(){const e=this.renderer.domElement;e.removeEventListener("pointerdown",this.handlePointerDown),e.removeEventListener("pointermove",this.handlePointerMove),e.removeEventListener("pointerup",this.handlePointerUp),e.removeEventListener("pointercancel",this.handlePointerUp),e.removeEventListener("wheel",this.handleWheel)}requestRender(){this.disposed||this.raf||(this.updateState({phase:this.state.phase==="processing"?"processing":"rendering",phaseText:"Rendering"}),this.raf=requestAnimationFrame(()=>{this.raf=0,this.renderNow()}))}renderNow(){this.disposed||(this.updateCamera(),this.renderer.render(this.scene,this.camera),this.state.phase!=="processing"&&this.state.phase!=="error"&&this.updateState({phase:"ready",phaseText:"Ready"}))}updateCamera(){const e=new rt(Math.cos(this.pitch)*Math.sin(this.yaw),Math.sin(this.pitch),Math.cos(this.pitch)*Math.cos(this.yaw)).normalize(),i=this.settings.smartDepth?this.settings.parallax:.02;this.camera.fov=this.settings.fov,this.camera.position.copy(e).multiplyScalar(i),this.camera.lookAt(this.camera.position.clone().add(e)),this.camera.updateProjectionMatrix()}async loadTexture(e){const i=URL.createObjectURL(e),r=new qy;try{const l=await r.loadAsync(i);return l.colorSpace=Vn,l.anisotropy=Math.max(1,this.renderer.capabilities.getMaxAnisotropy()),l.magFilter=xi,l.minFilter=Ga,l.generateMipmaps=!0,l.needsUpdate=!0,this.updateState({anisotropy:l.anisotropy}),l}finally{URL.revokeObjectURL(i)}}rebuildMesh(){var m;if(!this.texture||!this.depthMap)return;const e=Bb[this.settings.quality],i=new Sd(d0,e,Math.floor(e/2)),r=i.getAttribute("position"),l=i.getAttribute("uv"),u=new rt,h=this.settings.smartDepth?this.settings.depthStrength:0;for(let p=0;p<r.count;p+=1){u.fromBufferAttribute(r,p).normalize();const g=l.getX(p),_=1-l.getY(p),S=Ss((Math.sin(_*Math.PI)-.04)/.96,0,1),M=Pb(this.depthMap,g,_)*S,b=d0*(1-M*h*.24);r.setXYZ(p,u.x*b,u.y*b,u.z*b)}i.scale(-1,1,1),i.computeVertexNormals();const d=new xd({map:this.texture,side:la});this.disposeMesh(),this.mesh=new Di(i,d),this.scene.add(this.mesh),this.updateState({meshVertices:r.count,meshTriangles:Math.round((((m=i.index)==null?void 0:m.count)??r.count)/3)})}disposeMesh(){this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=void 0)}disposeSceneTexture(){this.texture&&(this.texture.dispose(),this.texture=void 0)}textureSize(e){const i=e.image;return`${i.width??0} x ${i.height??0}`}updateState(e){this.state={...this.state,...e},this.emit()}emit(){this.onState({...this.state})}}const Gb={phase:"loading",phaseText:"Starting",fileName:"Demo panorama",textureResolution:"0 x 0",depthResolution:"0 x 0",meshVertices:0,meshTriangles:0,renderMode:"On demand",anisotropy:1,depthPreviewUrl:"",horizon:.5},Vb=[{value:"efficient",label:"Efficient"},{value:"balanced",label:"Balanced"},{value:"ultra",label:"Ultra"}];function kb(){const o=En.useRef(null),e=En.useRef(null),i=En.useRef(null),[r,l]=En.useState(Gb),[u,h]=En.useState("balanced"),[d,m]=En.useState(.58),[p,g]=En.useState(.28),[_,S]=En.useState(72),[M,b]=En.useState(!0),[w,y]=En.useState(!1);En.useEffect(()=>{if(!o.current)return;let E=!0;const R=new Hb(o.current,l,B=>{typeof B.fov=="number"&&S(B.fov)});return e.current=R,SS().then(B=>{E&&R.setPanoramaBlob(B,"Demo panorama")}).catch(B=>{l(ot=>({...ot,phase:"error",phaseText:B instanceof Error?B.message:"Demo could not load"}))}),()=>{E=!1,R.dispose(),e.current=null}},[]);const v=E=>{var R;!E||!E.type.startsWith("image/")||(R=e.current)==null||R.setPanoramaBlob(E,E.name)},I=E=>{var R;v((R=E.target.files)==null?void 0:R[0]),E.target.value=""},N=E=>{var R;E.preventDefault(),y(!1),v((R=E.dataTransfer.files)==null?void 0:R[0])},D=E=>{var R;h(E),(R=e.current)==null||R.setQuality(E)},q=E=>{var R;m(E),(R=e.current)==null||R.setDepthStrength(E)},V=E=>{var R;g(E),(R=e.current)==null||R.setParallax(E)},z=E=>{var R;S(E),(R=e.current)==null||R.setFov(E)},F=E=>{var R;b(E),(R=e.current)==null||R.setSmartDepth(E)};return At.jsxs("div",{className:"app-shell",onDragEnter:E=>{E.preventDefault(),y(!0)},onDragOver:E=>E.preventDefault(),onDragLeave:E=>{E.currentTarget===E.target&&y(!1)},onDrop:N,children:[At.jsxs("aside",{className:"control-panel","aria-label":"Panorama controls",children:[At.jsxs("header",{className:"brand-row",children:[At.jsx("div",{className:"brand-mark",children:At.jsx(dS,{size:21,strokeWidth:2.2})}),At.jsxs("div",{children:[At.jsx("h1",{children:"PanoDepth Studio"}),At.jsx("span",{children:r.fileName})]})]}),At.jsxs("div",{className:"action-row",children:[At.jsxs("button",{className:"primary-button",type:"button",onClick:()=>{var E;return(E=i.current)==null?void 0:E.click()},children:[At.jsx(Wf,{size:17}),At.jsx("span",{children:"Open"})]}),At.jsx("button",{className:"icon-button",type:"button",title:"Download PNG",onClick:()=>{var E;return void((E=e.current)==null?void 0:E.downloadPng())},children:At.jsx(d_,{size:18})}),At.jsx("button",{className:"icon-button",type:"button",title:"Reset view",onClick:()=>{var E;return(E=e.current)==null?void 0:E.resetView()},children:At.jsx(m_,{size:18})}),At.jsx("input",{ref:i,type:"file",accept:"image/*",onChange:I,hidden:!0})]}),At.jsxs("section",{className:"control-section","aria-label":"Quality",children:[At.jsxs("div",{className:"section-title",children:[At.jsx(xS,{size:16}),At.jsx("span",{children:"Quality"})]}),At.jsx("div",{className:"segmented-control",children:Vb.map(E=>At.jsx("button",{type:"button",className:u===E.value?"active":"",onClick:()=>D(E.value),children:E.label},E.value))})]}),At.jsxs("section",{className:"control-section","aria-label":"Depth controls",children:[At.jsxs("div",{className:"section-title",children:[At.jsx(_S,{size:16}),At.jsx("span",{children:"Depth"})]}),At.jsxs("label",{className:"switch-row",children:[At.jsxs("span",{className:"switch-copy",children:[At.jsx(vS,{size:16}),At.jsx("span",{children:"Smart depth"})]}),At.jsx("input",{type:"checkbox",checked:M,onChange:E=>F(E.target.checked)})]}),At.jsxs("label",{className:"slider-row",children:[At.jsx("span",{children:"Relief"}),At.jsxs("strong",{children:[Math.round(d*100),"%"]}),At.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:d,onChange:E=>q(Number(E.target.value))})]}),At.jsxs("label",{className:"slider-row",children:[At.jsx("span",{children:"Parallax"}),At.jsxs("strong",{children:[Math.round(p*100),"%"]}),At.jsx("input",{type:"range",min:"0",max:"0.7",step:"0.01",value:p,onChange:E=>V(Number(E.target.value))})]}),At.jsxs("label",{className:"slider-row",children:[At.jsx("span",{children:"Field"}),At.jsxs("strong",{children:[Math.round(_)," deg"]}),At.jsx("input",{type:"range",min:"38",max:"92",step:"1",value:_,onChange:E=>z(Number(E.target.value))})]})]}),At.jsxs("section",{className:"control-section","aria-label":"Depth preview",children:[At.jsxs("div",{className:"section-title",children:[At.jsx(p_,{size:16}),At.jsx("span",{children:"Depth map"})]}),At.jsx("div",{className:"depth-preview",children:r.depthPreviewUrl?At.jsx("img",{src:r.depthPreviewUrl,alt:"Generated depth map"}):At.jsx("div",{className:"preview-placeholder"})})]}),At.jsxs("section",{className:"control-section metric-section","aria-label":"Render status",children:[At.jsx(Sc,{icon:At.jsx(gS,{size:15}),label:"Source",value:r.textureResolution}),At.jsx(Sc,{icon:At.jsx(pS,{size:15}),label:"Mesh",value:`${r.meshVertices.toLocaleString()} vertices`}),At.jsx(Sc,{icon:At.jsx(p_,{size:15}),label:"Depth",value:r.depthResolution}),At.jsx(Sc,{icon:At.jsx(mS,{size:15}),label:"Render",value:r.renderMode})]})]}),At.jsxs("main",{className:"stage",children:[At.jsx("div",{ref:o,className:"viewer"}),At.jsx("div",{className:`render-pill ${r.phase}`,children:r.phaseText}),At.jsxs("div",{className:"canvas-actions",children:[At.jsx("button",{className:"icon-button dark",type:"button",title:"Open panorama",onClick:()=>{var E;return(E=i.current)==null?void 0:E.click()},children:At.jsx(Wf,{size:18})}),At.jsx("button",{className:"icon-button dark",type:"button",title:"Download PNG",onClick:()=>{var E;return void((E=e.current)==null?void 0:E.downloadPng())},children:At.jsx(d_,{size:18})}),At.jsx("button",{className:"icon-button dark",type:"button",title:"Reset view",onClick:()=>{var E;return(E=e.current)==null?void 0:E.resetView()},children:At.jsx(m_,{size:18})})]}),w&&At.jsxs("div",{className:"drop-overlay",children:[At.jsx(Wf,{size:34}),At.jsx("span",{children:"Drop panorama"})]})]})]})}function Sc({icon:o,label:e,value:i}){return At.jsxs("div",{className:"metric-row",children:[At.jsxs("span",{className:"metric-label",children:[o,e]}),At.jsx("strong",{children:i})]})}cS.createRoot(document.getElementById("root")).render(At.jsx(En.StrictMode,{children:At.jsx(kb,{})}));
