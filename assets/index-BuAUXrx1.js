const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BZbHS1kw.js","assets/react-vendor-DxtPTlJ_.js","assets/404-uFeKnOv_.js"])))=>i.map(i=>d[i]);
import{r as u,a as b,g as w,O as R,S,c as L,R as D}from"./react-vendor-DxtPTlJ_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();var y={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=u,I=Symbol.for("react.element"),k=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,T=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function v(o,t,n){var s,e={},r=null,i=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(i=t.ref);for(s in t)C.call(t,s)&&!$.hasOwnProperty(s)&&(e[s]=t[s]);if(o&&o.defaultProps)for(s in t=o.defaultProps,t)e[s]===void 0&&(e[s]=t[s]);return{$$typeof:I,type:o,key:r,ref:i,props:e,_owner:T.current}}f.Fragment=k;f.jsx=v;f.jsxs=v;y.exports=f;var c=y.exports,h,m=b;h=m.createRoot,m.hydrateRoot;const A="modulepreload",F=function(o){return"/mandarin101/"+o},_={},x=function(t,n,s){let e=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.all(n.map(l=>{if(l=F(l),l in _)return;_[l]=!0;const d=l.endsWith(".css"),j=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${j}`))return;const a=document.createElement("link");if(a.rel=d?"stylesheet":A,d||(a.as="script",a.crossOrigin=""),a.href=l,i&&a.setAttribute("nonce",i),document.head.appendChild(a),d)return new Promise((E,P)=>{a.addEventListener("load",E),a.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${l}`)))})}))}return e.then(()=>t()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},U=u.lazy(()=>x(()=>import("./index-BZbHS1kw.js"),__vite__mapDeps([0,1]))),q=u.lazy(()=>x(()=>import("./404-uFeKnOv_.js"),__vite__mapDeps([2,1]))),B=[{index:!0,element:c.jsx(u.Suspense,{children:c.jsx(U,{})})},{path:"*",element:c.jsx(u.Suspense,{children:c.jsx(q,{})})}];var g={exports:{}},p=Object.defineProperty,z=Object.getOwnPropertyDescriptor,J=Object.getOwnPropertyNames,V=Object.prototype.hasOwnProperty,W=(o,t)=>{for(var n in t)p(o,n,{get:t[n],enumerable:!0})},H=(o,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of J(t))!V.call(o,e)&&e!==n&&p(o,e,{get:()=>t[e],enumerable:!(s=z(t,e))||s.enumerable});return o},K=o=>H(p({},"__esModule",{value:!0}),o),O={};W(O,{default:()=>G});var Y=K(O);function G(...o){return o.length?o[0]:(t,...n)=>{if(n&&n.length)return n[0]}}g.exports=Y;var M=g.exports;const Q=w(M);function X(){return Q(),c.jsxs(u.Fragment,{children:[c.jsx(R,{}),c.jsx(S,{})]})}const Z=document.getElementById("root"),ee=h(Z),te=L([{path:"/",element:c.jsx(X,{}),children:B}]);ee.render(c.jsx(u.StrictMode,{children:c.jsx("div",{className:"w-[100vw] h-[100vh] overflow-hidden bg-[#292929] font-jockey flex items-center justify-center",children:c.jsx(D,{router:te,fallbackElement:c.jsx("div",{children:"loading..."})})})}));export{c as j};
