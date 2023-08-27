"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7840],{"./packages/annotation/dist/chsk-annotation.es.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CJ:()=>Triangle,DJ:()=>BluntMarker,Dt:()=>LineLabel,Ee:()=>HorizontalGoldenRectangle,I6:()=>BoxedLabel,IQ:()=>InsetColorFilter,NY:()=>Q,O7:()=>InsetShadowFilter,Po:()=>ArrowMarker,Q1:()=>BoxedTitle,Qs:()=>FlowPath,UW:()=>Download,VC:()=>BlockArrow,XX:()=>Segment,by:()=>createConcentricSymbol,cs:()=>InsetBorderFilter,d5:()=>BracketLabel,hK:()=>Stripe,jo:()=>VerticalGoldenRectangle,nv:()=>Paragraph,wR:()=>Connector});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),d3_shape__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/d3-shape/src/line.js"),d3_shape__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/d3-shape/src/curve/bundle.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(t,e){if(null==t)return{};var r,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function _createForOfIteratorHelperLoose(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var Z=function roundPxDecimalPlaces(e,r,i){if(void 0===i&&(i=!1),e.includes(" "))return e.split(" ").map((function(t){return roundPxDecimalPlaces(t,r,i)})).join(" ");var n=e.includes("px")&&i,o=Number(e.replace("px","").replace(";","")),a=isFinite(o)?String((0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.DJC)(o,r)):e;return n?a+"px":a},rgb2hex=function rgb2hex(t){if(!t)return"undefined";var e=t.startsWith("rgb(")?"rgb":t.startsWith("rgba(")?"rgba":void 0;if(!e)return t;var r=t.includes(",")?",":" ",i=contentInParentheses(t,e).replace("/",r).split(r).filter(Boolean).map((function(t){return t.trim()})),n="rgba"===e&&"1"===i[3]?3:i.length,o=i.slice(0,n).map((function(t){return function(t){var e;return e=t.includes("%")?255*Number(t.replace("%",""))/100:t.includes(".")?255*Number(t):Number(t),((e=Math.max(0,Math.min(255,Math.round(e))))<16?"0":"")+e.toString(16)}(t)})).join("");return"#"+o},contentInParentheses=function contentInParentheses(t,e){return String(t.replace(e+"(","").split(")")[0])},cleanTransform=function cleanTransform(t,e){if(void 0===t)return t;var r=t.replace("transform:","").trim();if("none"===r)return null;var i=["0","0"],n=["1","1"],o=["0deg"],a=[];r.split(" ").map((function(t){t.startsWith("translateX")?i[0]=contentInParentheses(t,"translateX"):t.startsWith("translateY")?i[1]=contentInParentheses(t,"translateY"):t.startsWith("scaleX")?n[0]=contentInParentheses(t,"scaleX"):t.startsWith("scaleY")?n[1]=contentInParentheses(t,"scaleY"):t.startsWith("rotate(")?o[0]=contentInParentheses(t,"rotate"):a.push(t)}));var s="";"0"===i[0]&&"0"===i[1]||(s="translate("+Z(i[0],e,!1)+","+Z(i[1],e,!1)+")");var l="";"1"===n[0]&&"1"===n[1]||(l="scale("+Z(n[0],e)+","+Z(n[1],e)+")");var d="";return"0deg"!==o[0]&&(d="rotate("+Z(o[0].replace("deg",""),e)+")"),s+l+d+a.join(" ")},cleanStyle=function cleanStyle(t,e){var r=t.split(";").map((function(t){return t.trim()})),i=r.filter((function(t){return t.startsWith("transform:")}))[0],n=r.filter((function(t){return!t.startsWith("transform")})).map((function(t){if(t.startsWith("fill:")||t.startsWith("stroke:")){var e=t.split(":",2),r=e[0],i=e[1];return r+": "+rgb2hex(null==i?void 0:i.trim())}return t}));return{style:n.filter(Boolean).join("; "),transform:cleanTransform(i,e)}},K=function scanSvg(t,e,r){var i=null!=r?r:{};if(!t.attributes)return i;var n=t.getAttribute("role");if(null!==n&&e.skipRoles.indexOf(n)>=0)return i;var o=t.nodeName;o in i||(i[o]=new Set);for(var a,s=_createForOfIteratorHelperLoose(t.attributes);!(a=s()).done;){var l=a.value;"class"===l.name&&l.value.split(" ").forEach((function(t){var e;return null==(e=i[o])?void 0:e.add(t)}))}return t.hasChildNodes()&&t.childNodes.forEach((function(t){return scanSvg(t,e,i)})),i},Q={skipAttributes:["transform-origin","svg.id"],skipRoles:["dimensions-reference","view-controller"],roundAttributes:["x","x1","x2","y","y1","y2","width","height","cx","cy","r","rx","ry","opacity","fill-opacity","stroke-width","stroke-dashoffset","stroke-dasharray"],roundAttributeDecimalPlaces:3,newlineTags:["style","g","rect","circle","line","path","text","filter","defs"],shake:!0},V=function transformSvg(t,r,i,n){void 0===r&&(r=Q);var o=t.nodeName;if("svg"===o&&((n=K(t,r))["svg.id"]=new Set([String(t.getAttribute("id"))])),"style"===o&&i){var a,s=(n?Array.from(null!=(a=n["svg.id"])?a:[]):[""])[0];t.textContent=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gbv)(i,void 0,"#"+s)}var l,d,c,v=new Set(r.skipAttributes);if(!t.attributes)return"style"===(null==(l=t.parentNode)?void 0:l.nodeName)&&(r.shake&&n&&(t.textContent=function(t,e){return t?t.split("\n").map((function(t){var r,i,n=t.split(" ");if(null!=(r=n[0])&&r.startsWith("#")){var o=null==(i=n[1])?void 0:i.split(".");if(o){var a=o[0];if(a&&a in e){var s=null==o?void 0:o.slice(1),l=null==s?void 0:s.every((function(t){var r;return null==(r=e[a])?void 0:r.has(t)}));if(null==s||!s.length||l)return t}}}})).filter(Boolean).join("\n"):""}(t.textContent,n)),t.textContent=(d=t.textContent,c=v.has("svg.id"),d?c?d.split("\n").map((function(t){return c?t.split(" ").splice(1).join(" "):t})).map((function(t){return""+t})).join("\n"):d:"")),t;for(var f,h=new Set(r.roundAttributes),p=r.roundAttributeDecimalPlaces,m=[],y=_createForOfIteratorHelperLoose(t.attributes);!(f=y()).done;){var g=f.value;if(h.has(g.name))t.setAttribute(g.name,Z(g.value,p));else if("style"===g.name){var x=cleanStyle(g.value,p),b=x.style,M=x.transform;t.setAttribute("style",b),""===b&&t.removeAttribute("style"),M&&t.setAttribute("transform",M)}else"fill"!==g.name&&"stroke"!==g.name||t.setAttribute(g.name,rgb2hex(g.value));("undefined"===g.value||"opacity"===g.name&&"1"===g.value||v.has(o+"."+g.name))&&m.push(g.name)}if(m.concat(r.skipAttributes).forEach((function(e){t.removeAttribute(e)})),t.hasChildNodes()&&r.skipRoles.length>0){var k=[];t.childNodes.forEach((function(t){var e=t;if(e.attributes){var i=e.getAttribute("role");null!==i&&r.skipRoles.indexOf(i)>=0&&k.push(t)}})),k.forEach((function(t){return t.remove()}))}return t.hasChildNodes()&&t.childNodes.forEach((function(t){return transformSvg(t,r,i,n)})),t},downloadToFile=function downloadToFile(t,e){var r=new Blob([t],{type:"text/json"}),i=document.createElement("a");i.download=e,i.href=window.URL.createObjectURL(r),i.dataset.downloadurl=["text/json",i.download,i.href].join(":");var n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});i.dispatchEvent(n),i.remove()},DataDownload=function DataDownload(t){var e=t.filename,i=t.setRole,n=t.className,o=t.children,a=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.W3B)().data;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{role:i?"download-data":void 0,className:n,onClick:function onClick(){return downloadToFile(JSON.stringify(a),e)},children:o})},ImageDownload=function ImageDownload(t){var e=t.filename,r=t.svgTransformConfig,o=void 0===r?Q:r,a=t.className,s=t.setRole,l=t.children,d=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.q14)().data,c=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FgM)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{role:s?"download-image":void 0,className:a,onClick:function onClick(){return function(t,e,r,i){var n,o=document.getElementById(t);if(o){var a=null==(n=V(null==o?void 0:o.cloneNode(!0),r,i))?void 0:n.outerHTML;r.newlineTags.forEach((function(t){var e=new RegExp("</"+t+"><","g"),r=new RegExp("><"+t,"g");a=a.replace(e,"</"+t+">\n<").replace(e,"</"+t+">\n<").replace(r,">\n<"+t)})),downloadToFile(a,e)}}(d.id,e,o,c)},children:l})},Download=function Download(t){var e=t.variant,r=t.filename,i=t.svgTransformConfig,n=void 0===i?Q:i,o=t.className,a=t.setRole,s=void 0===a||a,l=t.children;return"data"===e?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DataDownload,{filename:r,className:o,setRole:s,children:l}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImageDownload,{filename:r,svgTransformConfig:n,className:o,setRole:s,children:l})},InsetBorderFilter=function InsetBorderFilter(t){var e=t.id,r=t.r,i=void 0===r?1:r,n=t.erodeR,o=void 0===n?0:n,a=t.floodColor,s=void 0===a?"#000000":a,l=t.floodOpacity,d=void 0===l?.5:l;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter",{id:e,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology",{in:"SourceGraphic",operator:"erode",radius:i,result:e+"-in"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology",{in:"SourceGraphic",operator:"erode",radius:o,result:e+"-erode"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood",{floodColor:s,floodOpacity:d,result:e+"-color"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"out",in:e+"-erode",in2:e+"-in",result:e+"-boundary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"in",in:e+"-color",in2:e+"-boundary",result:e+"-mask"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"over",in:e+"-mask",in2:"SourceGraphic"})]})},InsetColorFilter=function InsetColorFilter(t){var e=t.id,r=t.erodeR,i=void 0===r?0:r,n=t.floodColor,o=void 0===n?"#000000":n,a=t.floodOpacity,s=void 0===a?.5:a;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter",{id:e,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology",{operator:"erode",radius:i,result:e+"-erode"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood",{floodColor:o,floodOpacity:s,result:e+"-color"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"in",in:e+"-color",in2:e+"-erode",result:e+"-mask"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"over",in:e+"-mask",in2:"SourceGraphic"})]})},InsetShadowFilter=function InsetShadowFilter(t){var e=t.id,r=t.blurStdDeviation,i=void 0===r?5:r,n=t.floodColor,o=void 0===n?"#000000":n,a=t.floodOpacity,s=void 0===a?.9:a;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter",{id:e,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur",{stdDeviation:i,result:e+"-blur"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"out",in:"SourceGraphic",in2:e+"-blur",result:e+"-inverse"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood",{floodColor:o,floodOpacity:s,result:e+"-color"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"in",in:e+"-color",in2:e+"-inverse",result:e+"-shadow"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"over",in:e+"-shadow",in2:"SourceGraphic"})]})},getLineAbsolutePositions=function getLineAbsolutePositions(t){var e=t.start,r=t.end,i=t.units,n=void 0===i?"view":i,o=t.expansion,a=void 0===o?[0,0]:o,s=t.scales,l=t.size,c=s.x.bandwidth()*a[0],u=s.y.bandwidth()*a[1],v=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.eE7)(e,n,l,s),f=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.eE7)(r,n,l,s);return{lineStart:v=[v[0]-c,v[1]-u],lineEnd:f=[f[0]+c,f[1]+u]}},getStartToEndAxis=function getStartToEndAxis(t,e){var r=e[0]-t[0],i=e[1]-t[1],n=Math.atan(-i/r),o=Math.PI/2-n,a=r<0?Math.PI:0;return{deltaX:r,deltaY:i,cosBeta:Math.cos(o+a),sinBeta:Math.sin(o+a)}},getTickPositions=function getTickPositions(t,e,r,i,n){return{tickStart:[t[0]+r*i,t[1]+r*n],tickEnd:[e[0]+r*i,e[1]+r*n]}},translatePoints=function translatePoints(t,e){return t.map((function(t){return[t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X]+e[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X],t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]+e[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]]}))},rotateAndTranslatePoints=function rotateAndTranslatePoints(t,e,r,i){return t.map((function(t){return[e[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X]-(r*t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X]+i*t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]),e[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]-(i*t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X]-r*t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y])]}))},stemPoints=function stemPoints(t){return 0===t?[[0,0]]:[[-t,0],[t,0]]},headPoints=function headPoints(t,e,r){var i=[[-t,-r],[-e,-r],[0,0],[e,-r],[t,-r]];return t===e?i.slice(1,4):i},caretPoints=function caretPoints(t,e,r){var i=headPoints(t,e,-r);return translatePoints(i,[0,-r])},getClosedPath=function getClosedPath(t){var e,r;return"M"+(null==(e=t[0])?void 0:e[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X])+","+(null==(r=t[0])?void 0:r[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y])+t.slice(1).map((function(t){return"L"+t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X]+","+t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]})).join("")+"Z"},tt=["variant","start","end","units","heads","headWidth","headLength","stemWidth"],BlockArrow=function BlockArrow(t){var e=t.variant,r=void 0===e?"arrow":e,i=t.start,n=t.end,o=t.units,a=void 0===o?"view":o,s=t.heads,l=void 0===s?[!1,!0]:s,c=t.headWidth,u=void 0===c?20:c,p=t.headLength,m=void 0===p?14:p,y=t.stemWidth,g=void 0===y?8:y,x=_objectWithoutPropertiesLoose(t,tt),b=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Bs9)().size,M=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales,N=function getBlockArrowPath(t){var e,r,i,n,o,a,s,l,d,v,f,h,p,m,y,g,x,b,M,k,S=(r=(e=t).start,i=e.end,n=e.heads,o=e.headWidth,a=e.headLength,s=e.stemWidth,d=void 0!==(l=e.caret)&&l,f=(v=getStartToEndAxis(r,i)).deltaX,h=v.deltaY,p=v.cosBeta,m=v.sinBeta,y=Math.sqrt(f*f+h*h)/2,g=s/2,x=o/2,b=n[0]?headPoints(g,x,a):d?caretPoints(g,x,a):stemPoints(g),M=n[1]?headPoints(-g,-x,-a):d?caretPoints(-g,-x,-a):stemPoints(-g),k=translatePoints(b,[0,y]).concat(translatePoints(M,[0,-y])).map((function(t){return[t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X],t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]-y]})),rotateAndTranslatePoints(k,r,p,m));return getClosedPath(S)}({start:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.eE7)(i,a,b,M),end:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.eE7)(n,a,b,M),heads:l,headWidth:u,headLength:m,stemWidth:g,caret:"caret"===r});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.y$t,_extends({variant:"block-arrow",d:N},x))},et=["variant","points","units","curve","markerStart","markerEnd","className","setRole","transition"],FlowPath=function FlowPath(t){var e=t.variant,r=void 0===e?"flow":e,i=t.points,n=t.units,o=void 0===n?"view":n,a=t.curve,s=void 0===a?"Linear":a,l=t.markerStart,c=t.markerEnd,u=t.className,h=t.setRole,y=void 0===h||h,g=t.transition,x=void 0===g?{pathLength:{duration:.5}}:g,b=_objectWithoutPropertiesLoose(t,et),M=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),k=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales,S=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Bs9)().size,N=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return i.map((function(t){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.eE7)(t,o,S,k)}))}),[i,o,S,k]),w=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)(r,u),L=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.mHv)(s)}),[s])(N);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.X,{features:framer_motion__WEBPACK_IMPORTED_MODULE_4__.H,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.path,_extends({ref:M},b,{initial:{d:null!=L?L:void 0,pathLength:0},animate:{d:null!=L?L:void 0,pathLength:1},exit:{d:null!=L?L:void 0,pathLength:1},onAnimationStart:function onAnimationStart(){var t;l&&(null==(t=M.current)||t.setAttribute("marker-start","url(#"+l+")"))},onAnimationComplete:function onAnimationComplete(){var t,e,r;c&&(null==(r=M.current)||r.setAttribute("marker-end","url(#"+c+")")),null==(t=M.current)||t.removeAttribute("stroke-dasharray"),null==(e=M.current)||e.removeAttribute("stroke-dashoffset")},transition:x,role:y?r:void 0,className:w}))})},ArrowMarker=function ArrowMarker(t){var d,e=t.variant,r=void 0===e?"triangle":e,i=t.id,n=t.size,o=void 0===n?10:n,a=t.width,s=void 0===a?1:a,l=t.style,c=Math.min(1,Math.max(0,s));return d="triangle"===r?function(t,e){var r=t*e/2,i=e/2;return["M0,",i-r,"L"+e+","+i+"L0,",i+r,"z"].join("")}(c,o):"winged"===r?function(t,e){var r=t*e/2,i=e/2;return["M0,",i-r,"L"+e+","+i+"L0,",i+r,"L"+i+","+i+"z"].join("")}(c,o):function(t,e){var r=t*e/2,i=e/2;return["M0,",i-r,"L"+e+","+i+"L0,",i+r].join("")}(c,o),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("marker",{id:i,viewBox:"0 0 "+(o+2)+" "+(o+2),refX:3*o/4,refY:o/2,markerWidth:o/2,markerHeight:o/2,orient:"auto-start-reverse",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d,style:l})})},BluntMarker=function BluntMarker(t){var e=t.variant,r=void 0===e?"circle":e,i=t.id,n=t.size,o=void 0===n?10:n,a=t.style,s=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{x:0,y:0,width:o,height:o,style:a});if("circle"===r)s=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:o/2,cy:o/2,r:o/2,style:a});else if("diamond"===r){var l=function(t){var e=t/2;return["M"+e+",0","L0,"+e,"L"+e+","+t,"L"+t+","+e,"z"].join("")}(o);s=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:l,style:a})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("marker",{id:i,viewBox:"0 0 "+(o+2)+" "+(o+2),refX:o/2,refY:o/2,markerWidth:o/2,markerHeight:o/2,orient:"auto-start-reverse",children:s})},rt=["variant","x1","y1","x2","y2","beta","elbow","elbowUnit","className"],elbowCoordinate=function elbowCoordinate(t,e,r,i){return i?t+r*(e-t):(e>t?Math.min:Math.max)(e,t+Math.sign(e-t)*r)},Connector=function Connector(t){var e,r=t.variant,i=void 0===r?"line":r,n=t.x1,o=t.y1,a=t.x2,s=t.y2,l=t.beta,d=t.elbow,v=void 0===d?.5:d,f=t.elbowUnit,m=void 0===f?"relative":f,y=t.className,g=_objectWithoutPropertiesLoose(t,rt),x=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return(0,d3_shape__WEBPACK_IMPORTED_MODULE_6__.Z)().curve(d3_shape__WEBPACK_IMPORTED_MODULE_7__.Z.beta(null!=l?l:0))}),[l]),b="relative"===m,M=[n,o];"hl"===i?M=[elbowCoordinate(n,a,v,b),o]:"lh"===i?M=[elbowCoordinate(a,n,v,b),s]:"vl"===i?M=[n,elbowCoordinate(o,s,v,b)]:"lv"===i&&(M=[a,elbowCoordinate(s,o,v,b)]);var k=void 0===l?["M",n,o,"L",M[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X],M[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y],"L",a,s].join(" "):null!=(e=x([[n,o],M,[a,s]]))?e:"",S=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)("connector",y);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.y$t,_extends({d:k},g,{className:S}))},nt=["variant","domain","domainUnits","expansion","shift","shiftUnit","component"],Stripe=function Stripe(t){var e=t.variant,r=void 0===e?"x":e,i=t.domain,n=t.domainUnits,o=void 0===n?"view":n,a=t.expansion,s=void 0===a?[0,0]:a,l=t.shift,d=void 0===l?[0,0]:l,h=t.shiftUnit,p=void 0===h?"step":h,m=t.component,y=void 0===m?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ:m,g=_objectWithoutPropertiesLoose(t,nt),S=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales,N=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Bs9)().size,w="x"===r,L=w?S.x:S.y,W=w?N[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X]:N[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y],P="step"===p?L.step():L.bandwidth(),R=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.OYb)(o),j=[(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Oc9)(i[0],R[0],W,L)+d[0]*P,(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Oc9)(i[1],R[1],W,L)+d[1]*P],_=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Ryh)(s),A=_[0],E=_[1],C=w?{x:j[0],width:j[1]-j[0],y:-A,height:N[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]+A+E}:{x:-A,width:N[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X]+A+E,y:j[0],height:j[1]-j[0]};return(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(y,_extends({variant:"stripe"},C,g))},lt=["cx","cy","r","className","style"],createConcentricSymbol=function createConcentricSymbol(t){var e=t.variant,r=void 0===e?"background":e,i=t.symbolPrimary,n=void 0===i?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:i,o=t.symbolSecondary,a=void 0===o?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:o,s=t.rMultiplier,l=void 0===s?1.5:s,d=t.styleModifier,c=void 0===d?{fill:"#ffffff"}:d;return function(t){var e=t.cx,i=t.cy,o=t.r,s=t.className,d=t.style,u=_objectWithoutPropertiesLoose(t,lt),v=function(t){var e=t.cx,r=t.cy,i=t.r,n=void 0===i?1:i,o=t.className,a=t.style,s=t.setRole,l=t.variant,d=t.symbolPrimary,c=void 0===d?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:d,u=t.symbolSecondary,v=void 0===u?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:u,f=t.rMultiplier,h=void 0===f?1:f,m=t.styleModifier,y=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)(null!=o?o:"default","primary"),g=(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(c,{key:"primary",cx:e,cy:r,r:n,className:y,style:a,setRole:s}),x=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)(null!=o?o:"default","secondary"),b=_extends({},a,m),M=(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(v,{key:"secondary",cx:e,cy:r,r:n*h,className:x,style:b,setRole:s}),k="background"===l;return{background:k?M:g,foreground:k?g:M}}({cx:e,cy:i,r:o,className:s,style:d,variant:r,symbolPrimary:n,symbolSecondary:a,rMultiplier:l,styleModifier:c}),f=v.background,h=v.foreground;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",_extends({className:s},u,{children:[f,h]}))}},dt=(1+Math.sqrt(5))/2,ct=.96*Math.sqrt(Math.PI*dt),ut=.96*Math.sqrt(Math.PI/dt),vt=2*Math.sqrt(Math.PI/(3*Math.sqrt(3)))*.94,ft=Math.sqrt(3)*vt*.94,ht=[[0,-vt],[ft/2,vt/2],[-ft/2,vt/2]],yt=(Math.sqrt(Math.PI/2),[[-1.1,0],[1.1,0]]),gt=-Math.PI/2,bt=((0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.w6H)(0,5).map((function(t){return[Math.cos(gt+2*Math.PI*t/5),Math.sin(gt+2*Math.PI*t/5)]})),[]);(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.w6H)(0,5).forEach((function(t){var e=gt+2*Math.PI*(2*t/10);bt.push([1.447*Math.cos(e),1.447*Math.sin(e)]),e+=2*Math.PI*.1,bt.push([(1-.447)*Math.cos(e),(1-.447)*Math.sin(e)])}));var St=["variant","initial","animate","exit","cx","cy","r","className","style","setRole"],HorizontalGoldenRectangle=function HorizontalGoldenRectangle(t){var e=t.variant,r=void 0===e?"default":e,i=t.initial,n=t.animate,o=t.exit,a=t.cx,s=void 0===a?0:a,l=t.cy,d=void 0===l?0:l,c=t.r,u=void 0===c?1:c,v=t.className,f=t.style,h=t.setRole,m=void 0===h||h,y=_objectWithoutPropertiesLoose(t,St),g=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)(r,v),x={x:s-u*ct/2,y:d-u*ut/2,width:u*ct,height:u*ut};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.rect,_extends({role:m&&"default"!==r?r:void 0,initial:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.$dz)(x,i),animate:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.$dz)(x,n),exit:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.$dz)(x,o),className:g,style:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.dJS)(f,x)},y))},Lt=["variant","initial","animate","exit","cx","cy","r","className","setRole"],Segment=function Segment(t){var e,r,i,n,o=t.variant,a=void 0===o?"default":o,s=t.initial,l=t.animate,d=t.exit,v=t.cx,f=void 0===v?0:v,h=t.cy,m=void 0===h?0:h,y=t.r,g=void 0===y?1:y,x=t.className,b=t.setRole,M=void 0===b||b,k=_objectWithoutPropertiesLoose(t,Lt),S=yt.map((function(t){return[f+t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X]*g,m+t[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]*g]})),N={x1:null==(e=S[0])?void 0:e[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X],y1:null==(r=S[0])?void 0:r[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y],x2:null==(i=S[1])?void 0:i[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X],y2:null==(n=S[1])?void 0:n[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.line,_extends({role:M?a:void 0,initial:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.$dz)(N,s),animate:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.$dz)(N,l),exit:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.$dz)(N,d),className:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)(a,x)},k))},Pt=["cx","cy","r"],Triangle=function Triangle(t){var e=t.cx,r=void 0===e?0:e,i=t.cy,n=void 0===i?0:i,o=t.r,a=void 0===o?1:o,s=_objectWithoutPropertiesLoose(t,Pt),l=ht.map((function(t){return[r+t[0]*a,n+t[1]*a]}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.mgq,_extends({points:l},s))},Rt=["variant","initial","animate","exit","cx","cy","r","className","style","setRole"],VerticalGoldenRectangle=function VerticalGoldenRectangle(t){var e=t.variant,r=void 0===e?"default":e,i=t.initial,n=t.animate,o=t.exit,a=t.cx,s=void 0===a?0:a,l=t.cy,d=void 0===l?0:l,c=t.r,u=void 0===c?1:c,v=t.className,f=t.style,h=t.setRole,m=void 0===h||h,y=_objectWithoutPropertiesLoose(t,Rt),g=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)(r,v),x={x:s-u*ut/2,y:d-u*ct/2,width:u*ut,height:u*ct};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.rect,_extends({role:m&&"default"!==r?r:void 0,initial:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.$dz)(x,i),animate:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.$dz)(x,n),exit:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.$dz)(x,o),className:g,style:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.dJS)(f,x)},y))},BoxedLabel=function BoxedLabel(t){var e=t.variant,r=void 0===e?"boxed-label":e,i=t.position,n=void 0===i?[0,0]:i,c=t.positionUnits,u=void 0===c?"absolute":c,h=t.size,m=void 0===h?[100,32]:h,y=t.sizeUnits,g=void 0===y?"absolute":y,x=t.offset,M=void 0===x?[0,0]:x,k=t.anchor,N=void 0===k?[.5,.5]:k,w=t.angle,L=void 0===w?0:w,W=t.angleUnit,_=void 0===W?"degree":W,A=t.expansion,E=void 0===A?[0,0,0,0]:A,C=t.rx,z=t.ry,I=t.boxStyle,U=t.textStyle,T=t.className,X=t.style,Y=t.setRole,G=void 0===Y||Y,q=t.children,F=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Bs9)(),H=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales,J=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.eE7)(n,u,F.size,H),Z=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.YEL)(m,g,F.size),K=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.ji)(J,Z,N),Q=K[0],V=K[1];Q+=m[0]/2+M[0],V+=m[1]/2+M[1],Z[0]+=E[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RLj]+E[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.pXp],Z[1]+=E[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.GSB]+E[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.DaS];var $=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)(r,T),tt="string"==typeof q?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{style:U,className:"label "+$,children:q}):q,et={x:Q,y:V,rotate:L&&"radian"===_?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.BVy)(L):L,originX:"0px",originY:"0px"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.g,{role:G?r:void 0,initial:et,animate:et,style:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.dJS)(X,et),className:$,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{variant:"label",x:0,y:0,width:Z[0],height:Z[1],rx:C,ry:z,center:!0,className:$,style:I,setRole:!1}),tt]})},BoxedTitle=function BoxedTitle(t){var e=t.variant,r=t.distance,i=void 0===r?0:r,n=t.size,o=void 0===n?26:n,a=t.expansion,s=void 0===a?[0,0,0,0]:a,l=t.rx,d=t.ry,c=t.boxStyle,u=t.textStyle,f=t.className,h=t.style,p=t.setRole,m=void 0===p||p,y=t.children,g="top"===e||"bottom"===e,x="left"===e||"right"===e,b=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Bs9)().size,M=b[0],k=b[1],S=0,N=0;return"left"===e&&(S-=o/2+i),"right"===e&&(S+=M+o/2+i),"top"===e&&(N-=o/2+i),"bottom"===e&&(N+=k+o/2+i),x&&(N+=.5*k),g&&(S+=.5*M),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{role:m?"boxed-title-"+e:void 0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BoxedLabel,{variant:"boxed-title",position:[S,N],size:g?[M,o]:[k,o],expansion:s,angle:"left"===e?-90:"right"===e?90:0,className:f,rx:l,ry:d,boxStyle:c,textStyle:u,style:h,setRole:m,children:y})})},BracketLabel=function BracketLabel(t){var e=t.variant,r=void 0===e?"right":e,i=t.start,n=t.end,o=t.units,a=void 0===o?"view":o,s=t.expansion,l=void 0===s?[0,0]:s,d=t.tickSize,c=void 0===d?5:d,u=t.lineStyle,m=t.offset,y=void 0===m?[0,-8]:m,g=t.align,x=void 0===g?.5:g,b=t.angle,M=void 0===b?0:b,k=t.textStyle,S=t.className,N=t.style,w=t.setRole,L=void 0===w||w,W=t.children,P=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Bs9)().size,R=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales;c="left"===r?-c:c;var j=getLineAbsolutePositions({start:i,end:n,units:a,expansion:l,scales:R,size:P}),A=j.lineStart,E=j.lineEnd,C=function(t){var e=t.start,r=t.end,i=t.size,n=getStartToEndAxis(e,r),o=n.cosBeta,a=n.sinBeta,s=getTickPositions(e,r,i,o,a);return{tickStart:s.tickStart,lineStart:e,lineEnd:r,tickEnd:s.tickEnd}}({start:A,end:E,size:c}),z=C.tickStart,I=C.tickEnd,U=[A[0]+y[0]+(E[0]-A[0])*x,A[1]+y[1]+(E[1]-A[1])*x],T=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)("bracket-label",S);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{style:N,className:T,role:L?"bracket-label-"+r:void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.y$t,{variant:"bracket",points:[z,A,E,I],className:T,style:u,setRole:L}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.ZT$,{variant:"label",position:U,angle:M,className:T,style:k,setRole:L,children:W})]})},jt=function getTextContent(t){return t?"string"==typeof t?t:"object"!=typeof t?String(t).toString():(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kJL)(t)?t.map((function(t){return getTextContent(t)})).join(""):String(t.props.children).toString():""},_t=function splitText(t,e,r,i){var n,o=i?t.split(i):[t];if(o.length>1)return o.map((function(t){return splitText(t,e,r)})).flat();var a=[],s=String(o[0]).replace(/\n/g," ").split(" ").filter((function(t){return t.length>0})),l=s.map((function(t){return function(t,e){var r,i=null!=(r=e[" "])?r:0;return t.split("").reduce((function(t,r){var n;return t+(null!=(n=e[r])?n:i)}),0)}(t,e)})),d=null!=(n=e[" "])?n:0,c="",u=0;return s.forEach((function(t,e){var i=Number(l[e]);u+d+i<r?(u+=(c.length>0?d:0)+i,c+=(c.length>0?" ":"")+t):(a.push(c),c=t,u=i)})),a.push(c),a.filter((function(t){return t.length>0}))},LineLabel=function LineLabel(t){var e=t.start,r=t.end,i=t.units,n=void 0===i?"view":i,o=t.expansion,a=void 0===o?[0,0]:o,s=t.lineStyle,l=t.offset,d=void 0===l?[0,-8]:l,c=t.align,u=void 0===c?.5:c,h=t.angle,m=void 0===h?0:h,y=t.markerStart,g=t.markerEnd,x=t.textStyle,b=t.className,M=t.style,k=t.setRole,S=void 0===k||k,N=t.children,w=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Bs9)().size,L=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales,W=getLineAbsolutePositions({start:e,end:r,units:n,expansion:a,scales:L,size:w}),P=W.lineStart,R=W.lineEnd,j=[P[0]+d[0]+(R[0]-P[0])*u,P[1]+d[1]+(R[1]-P[1])*u],A=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)("line-label",b);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{style:M,className:b,role:S?"line-label":void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.x12,{variant:"line",x1:P[0],y1:P[1],x2:R[0],y2:R[1],markerStart:y,markerEnd:g,className:A,style:s,setRole:S}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.ZT$,{variant:"label",position:j,angle:m,className:A,style:x,setRole:S,children:N})]})},At={0:8.899,1:7.83,2:8.899,3:8.899,4:8.899,5:8.899,6:8.899,7:8.899,8:8.899,9:8.899," ":8.899,A:10.628,B:10.672,C:11.555,D:11.555,E:10.672,F:9.774,G:12.446,H:11.555,I:4.446,J:8,K:10.672,L:8.87,M:13.329,N:11.555,O:12.446,P:10.658,Q:12.446,R:11.555,S:10.672,T:9.745,U:11.555,V:10.672,W:15.102,X:10.672,Y:10.644,Z:9.774,a:8.899,b:8.899,c:8,d:8.899,e:8.899,f:4.185,g:8.899,h:8.899,i:3.555,j:3.555,k:8,l:3.555,m:13.329,n:8.899,o:8.899,p:8.899,q:8.899,r:5.329,s:8,t:4.466,u:8.899,v:8,w:11.555,x:8,y:8,z:8,".":4.466,",":4.466,"!":4.466,"?":8.899,"#":8.899},Et={0:8,1:7.466,2:8,3:8,4:8,5:8,6:8,7:8,8:8,9:8," ":8,A:11.511,B:10.672,C:10.672,D:11.555,E:9.774,F:8.899,G:11.555,H:11.555,I:5.329,J:6.227,K:11.555,L:9.744,M:14.227,N:11.555,O:11.555,P:8.87,Q:11.555,R:10.672,S:8.899,T:9.745,U:11.555,V:11.526,W:15.073,X:11.555,Y:11.496,Z:9.774,a:7.102,b:8,c:7.102,d:8,e:7.102,f:5.069,g:8,h:8,i:4.446,j:4.446,k:8,l:4.446,m:12.446,n:8,o:8,p:8,q:8,r:5.329,s:6.227,t:4.446,u:8,v:8,w:11.555,x:8,y:8,z:7.102,".":4,",":4,"!":5.329,"?":7.102,"#":8},Paragraph=function Paragraph(t){var e,r=t.position,i=void 0===r?[0,0]:r,n=t.size,o=void 0===n?[100,22]:n,a=t.align,s=void 0===a?.5:a,l=t.offset,d=void 0===l?[0,0]:l,v=t.angle,f=t.separator,h=t.letterBaseWidths,m=void 0===h?"sans":h,y=t.letterWidths,g=t.className,x=t.style,b=t.setRole,M=void 0===b||b,k=t.children,S=(e=y,(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.dGq)((0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.BRZ)("sans"===m?At:Et),null!=e?e:{})),N=_t(jt(k),S,o[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X],f),w=Array(N.length).fill(0).map((function(t,e){return e*o[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]})),L=Number(w[w.length-1]),W=i[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X]+d[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X],R=i[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]-s*L+d[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y],j=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)("paragraph",g),_={x:W,y:R,rotate:v,originX:"0px",originY:"0px"},C=N.map((function(t,e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{y:w[e],className:j,style:x,children:t},"paragraph-"+e)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.X,{features:framer_motion__WEBPACK_IMPORTED_MODULE_4__.H,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.g,{role:M?"paragraph":void 0,initial:_,animate:_,style:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.dJS)(void 0,_),children:C})})};Stripe.__docgenInfo={description:"",methods:[],displayName:"Stripe"}}}]);