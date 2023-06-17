"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7083],{"./packages/annotation/stories/markers/BluntMarker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Circle:()=>Circle,Diamond:()=>Diamond,DoubleSided:()=>DoubleSided,Large:()=>Large,Small:()=>Small,Square:()=>Square,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BluntMarker_stories});var _Circle$parameters,_Circle$parameters2,_Circle$parameters2$d,_Square$parameters,_Square$parameters2,_Square$parameters2$d,_Diamond$parameters,_Diamond$parameters2,_Diamond$parameters2$,_Small$parameters,_Small$parameters2,_Small$parameters2$do,_Large$parameters,_Large$parameters2,_Large$parameters2$do,_DoubleSided$paramete,_DoubleSided$paramete2,_DoubleSided$paramete3,chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BluntMarker=function BluntMarker(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"circle":_ref$variant,id=_ref.id,_ref$size=_ref.size,size=void 0===_ref$size?10:_ref$size,style=_ref.style,content=(0,jsx_runtime.jsx)("rect",{x:0,y:0,width:size,height:size,style});if("circle"===variant)content=(0,jsx_runtime.jsx)("circle",{cx:size/2,cy:size/2,r:size/2,style});else if("diamond"===variant){var d=function createDiamondD(size){var halfSize=size/2;return["M"+halfSize+",0","L0,"+halfSize,"L"+halfSize+","+size,"L"+size+","+halfSize,"z"].join("")}(size);content=(0,jsx_runtime.jsx)("path",{d,style})}return(0,jsx_runtime.jsx)("marker",{id,viewBox:"0 0 "+(size+2)+" "+(size+2),refX:size/2,refY:size/2,markerWidth:size/2,markerHeight:size/2,orient:"auto-start-reverse",children:content})};BluntMarker.displayName="BluntMarker";try{BluntMarker.displayName="BluntMarker",BluntMarker.__docgenInfo={description:"",displayName:"BluntMarker",props:{variant:{defaultValue:{value:"circle"},description:"variant of arrowhead",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'},{value:'"diamond"'}]}},id:{defaultValue:null,description:"identifier",name:"id",required:!0,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"marker size",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"style for marker path",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/markers/BluntMarker.tsx#BluntMarker"]={docgenInfo:BluntMarker.__docgenInfo,name:"BluntMarker",path:"packages/annotation/src/markers/BluntMarker.tsx#BluntMarker"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const BluntMarker_stories={title:"Addons/Annotation/Markers/BluntMarker",component:BluntMarker};var Circle={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(BluntMarker,{id:"circle",variant:"circle",style:{fill:"#222222",fillOpacity:1}})}),(0,jsx_runtime.jsx)(chsk_core_es.x12,{x1:0,y1:60,x2:140,y2:20,markerEnd:"circle",style:{strokeWidth:3}})]})},name:"circle"},Square={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(BluntMarker,{id:"square",variant:"square",style:{fill:"#222222",fillOpacity:1}})}),(0,jsx_runtime.jsx)(chsk_core_es.x12,{x1:0,y1:60,x2:140,y2:20,markerEnd:"square",style:{strokeWidth:3}})]})},name:"square"},Diamond={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(BluntMarker,{id:"diamond",variant:"diamond",style:{fill:"#222222",fillOpacity:1}})}),(0,jsx_runtime.jsx)(chsk_core_es.x12,{x1:0,y1:60,x2:140,y2:20,markerEnd:"diamond",style:{strokeWidth:3}})]})},name:"diamond"},Small={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(BluntMarker,{id:"small-circle",variant:"circle",size:8,style:{fill:"#222222",fillOpacity:1}})}),(0,jsx_runtime.jsx)(chsk_core_es.x12,{x1:0,y1:60,x2:140,y2:20,markerEnd:"small-circle",style:{strokeWidth:3}})]})},name:"small"},Large={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(BluntMarker,{id:"large-square",variant:"square",size:15,style:{fill:"#222222",fillOpacity:1}})}),(0,jsx_runtime.jsx)(chsk_core_es.x12,{x1:0,y1:60,x2:140,y2:20,markerEnd:"large-square",style:{strokeWidth:3}})]})},name:"large"},DoubleSided={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(BluntMarker,{id:"color-circle",variant:"circle",style:{stroke:"#2222dd",fill:"#2222dd",fillOpacity:1}})}),(0,jsx_runtime.jsx)(chsk_core_es.x12,{x1:0,y1:60,x2:140,y2:20,markerStart:"color-circle",markerEnd:"color-circle",style:{strokeWidth:2,stroke:"#2222dd"}})]})},name:"double sided"};Circle.parameters=_extends({},Circle.parameters,{docs:_extends({},null==(_Circle$parameters=Circle.parameters)?void 0:_Circle$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <BluntMarker id=\"circle\" variant=\"circle\" style={{\n        fill: '#222222',\n        fillOpacity: 1\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerEnd={'circle'} style={{\n      strokeWidth: 3\n    }} />\n        </Chart>,\n  name: 'circle'\n}"},null==(_Circle$parameters2=Circle.parameters)||null==(_Circle$parameters2$d=_Circle$parameters2.docs)?void 0:_Circle$parameters2$d.source)})}),Square.parameters=_extends({},Square.parameters,{docs:_extends({},null==(_Square$parameters=Square.parameters)?void 0:_Square$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <BluntMarker id=\"square\" variant=\"square\" style={{\n        fill: '#222222',\n        fillOpacity: 1\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerEnd={'square'} style={{\n      strokeWidth: 3\n    }} />\n        </Chart>,\n  name: 'square'\n}"},null==(_Square$parameters2=Square.parameters)||null==(_Square$parameters2$d=_Square$parameters2.docs)?void 0:_Square$parameters2$d.source)})}),Diamond.parameters=_extends({},Diamond.parameters,{docs:_extends({},null==(_Diamond$parameters=Diamond.parameters)?void 0:_Diamond$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <BluntMarker id=\"diamond\" variant=\"diamond\" style={{\n        fill: '#222222',\n        fillOpacity: 1\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerEnd={'diamond'} style={{\n      strokeWidth: 3\n    }} />\n        </Chart>,\n  name: 'diamond'\n}"},null==(_Diamond$parameters2=Diamond.parameters)||null==(_Diamond$parameters2$=_Diamond$parameters2.docs)?void 0:_Diamond$parameters2$.source)})}),Small.parameters=_extends({},Small.parameters,{docs:_extends({},null==(_Small$parameters=Small.parameters)?void 0:_Small$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <BluntMarker id=\"small-circle\" variant=\"circle\" size={8} style={{\n        fill: '#222222',\n        fillOpacity: 1\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerEnd={'small-circle'} style={{\n      strokeWidth: 3\n    }} />\n        </Chart>,\n  name: 'small'\n}"},null==(_Small$parameters2=Small.parameters)||null==(_Small$parameters2$do=_Small$parameters2.docs)?void 0:_Small$parameters2$do.source)})}),Large.parameters=_extends({},Large.parameters,{docs:_extends({},null==(_Large$parameters=Large.parameters)?void 0:_Large$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <BluntMarker id=\"large-square\" variant=\"square\" size={15} style={{\n        fill: '#222222',\n        fillOpacity: 1\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerEnd={'large-square'} style={{\n      strokeWidth: 3\n    }} />\n        </Chart>,\n  name: 'large'\n}"},null==(_Large$parameters2=Large.parameters)||null==(_Large$parameters2$do=_Large$parameters2.docs)?void 0:_Large$parameters2$do.source)})}),DoubleSided.parameters=_extends({},DoubleSided.parameters,{docs:_extends({},null==(_DoubleSided$paramete=DoubleSided.parameters)?void 0:_DoubleSided$paramete.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <BluntMarker id=\"color-circle\" variant=\"circle\" style={{\n        stroke: '#2222dd',\n        fill: '#2222dd',\n        fillOpacity: 1\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerStart={'color-circle'} markerEnd={'color-circle'} style={{\n      strokeWidth: 2,\n      stroke: '#2222dd'\n    }} />\n        </Chart>,\n  name: 'double sided'\n}"},null==(_DoubleSided$paramete2=DoubleSided.parameters)||null==(_DoubleSided$paramete3=_DoubleSided$paramete2.docs)?void 0:_DoubleSided$paramete3.source)})});var __namedExportsOrder=["Circle","Square","Diamond","Small","Large","DoubleSided"]},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);