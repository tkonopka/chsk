"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2875],{"./packages/annotation/stories/filters/InsetShadowFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Light:()=>Light,Narrow:()=>Narrow,Wide:()=>Wide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Narrow$parameters,_Narrow$parameters2,_Narrow$parameters2$d,_Wide$parameters,_Wide$parameters2,_Wide$parameters2$doc,_Light$parameters,_Light$parameters2,_Light$parameters2$do,_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src_filters__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/filters/InsetShadowFilter.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Filters/InsetShadowFilter",component:_src_filters__WEBPACK_IMPORTED_MODULE_1__.O};var Narrow={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.O,{id:"narrow-shadow",blurStdDeviation:6}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999",filter:"url(#narrow-shadow)"}})]})},name:"narrow"},Wide={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.O,{id:"wide-shadow",blurStdDeviation:18}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999",filter:"url(#wide-shadow)"}})]})},name:"wide"},Light={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.O,{id:"light-shadow",blurStdDeviation:6,floodColor:"#ffffff",floodOpacity:.8}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999",filter:"url(#light-shadow)"}})]})},name:"light"};Narrow.parameters=_extends({},Narrow.parameters,{docs:_extends({},null==(_Narrow$parameters=Narrow.parameters)?void 0:_Narrow$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetShadowFilter id={'narrow-shadow'} blurStdDeviation={6} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999',\n      filter: 'url(#narrow-shadow)'\n    }} />\n        </Chart>,\n  name: 'narrow'\n}"},null==(_Narrow$parameters2=Narrow.parameters)||null==(_Narrow$parameters2$d=_Narrow$parameters2.docs)?void 0:_Narrow$parameters2$d.source)})}),Wide.parameters=_extends({},Wide.parameters,{docs:_extends({},null==(_Wide$parameters=Wide.parameters)?void 0:_Wide$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetShadowFilter id={'wide-shadow'} blurStdDeviation={18} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999',\n      filter: 'url(#wide-shadow)'\n    }} />\n        </Chart>,\n  name: 'wide'\n}"},null==(_Wide$parameters2=Wide.parameters)||null==(_Wide$parameters2$doc=_Wide$parameters2.docs)?void 0:_Wide$parameters2$doc.source)})}),Light.parameters=_extends({},Light.parameters,{docs:_extends({},null==(_Light$parameters=Light.parameters)?void 0:_Light$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetShadowFilter id={'light-shadow'} blurStdDeviation={6} floodColor={'#ffffff'} floodOpacity={0.8} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999',\n      filter: 'url(#light-shadow)'\n    }} />\n        </Chart>,\n  name: 'light'\n}"},null==(_Light$parameters2=Light.parameters)||null==(_Light$parameters2$do=_Light$parameters2.docs)?void 0:_Light$parameters2$do.source)})});var __namedExportsOrder=["Narrow","Wide","Light"]},"./packages/annotation/src/filters/InsetShadowFilter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>InsetShadowFilter});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),InsetShadowFilter=function InsetShadowFilter(_ref){var id=_ref.id,_ref$blurStdDeviation=_ref.blurStdDeviation,blurStdDeviation=void 0===_ref$blurStdDeviation?5:_ref$blurStdDeviation,_ref$floodColor=_ref.floodColor,floodColor=void 0===_ref$floodColor?"#000000":_ref$floodColor,_ref$floodOpacity=_ref.floodOpacity,floodOpacity=void 0===_ref$floodOpacity?.9:_ref$floodOpacity;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter",{id,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur",{stdDeviation:blurStdDeviation,result:id+"-blur"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"out",in:"SourceGraphic",in2:id+"-blur",result:id+"-inverse"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood",{floodColor,floodOpacity,result:id+"-color"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"in",in:id+"-color",in2:id+"-inverse",result:id+"-shadow"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"over",in:id+"-shadow",in2:"SourceGraphic"})]})};InsetShadowFilter.displayName="InsetShadowFilter";try{InsetShadowFilter.displayName="InsetShadowFilter",InsetShadowFilter.__docgenInfo={description:"",displayName:"InsetShadowFilter",props:{blurStdDeviation:{defaultValue:{value:"5"},description:"",name:"blurStdDeviation",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.9"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/InsetShadowFilter.tsx#InsetShadowFilter"]={docgenInfo:InsetShadowFilter.__docgenInfo,name:"InsetShadowFilter",path:"packages/annotation/src/filters/InsetShadowFilter.tsx#InsetShadowFilter"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);