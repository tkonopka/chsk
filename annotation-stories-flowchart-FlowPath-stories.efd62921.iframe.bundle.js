"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[896],{"./packages/annotation/stories/flowchart/FlowPath.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComplexLine:()=>ComplexLine,NaturalCurve:()=>NaturalCurve,SimpleLine:()=>SimpleLine,SlowTransition:()=>SlowTransition,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FlowPath_stories});var react=__webpack_require__("./node_modules/react/index.js"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),motion_minimal=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","points","units","curve","markerStart","markerEnd","className","setRole","style","transition"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var FlowPath=function FlowPath(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"flow":_ref$variant,points=_ref.points,_ref$units=_ref.units,units=void 0===_ref$units?"view":_ref$units,_ref$curve=_ref.curve,curve=void 0===_ref$curve?"Linear":_ref$curve,markerStart=_ref.markerStart,markerEnd=_ref.markerEnd,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,style=_ref.style,_ref$transition=_ref.transition,transition=void 0===_ref$transition?{pathLength:{duration:.5}}:_ref$transition,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),ref=(0,react.useRef)(null),scales=(0,chsk_core_es.kE1)().scales,size=(0,chsk_core_es.Bs9)().size,viewPoints=(0,react.useMemo)((function(){return points.map((function(point){return(0,chsk_core_es.eE7)(point,units,size,scales)}))}),[points,units,size,scales]),compositeClassName=(0,chsk_core_es.gjB)(variant,className),path=(0,react.useMemo)((function(){return(0,chsk_core_es.mHv)(curve)}),[curve])(viewPoints);return(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children:(0,jsx_runtime.jsx)(motion_minimal.m.path,_extends({ref,initial:{d:null!=path?path:void 0,pathLength:0},animate:{d:null!=path?path:void 0,pathLength:1},onAnimationStart:function onAnimationStart(){var _ref$current;markerStart&&(null==(_ref$current=ref.current)||_ref$current.setAttribute("marker-start","url(#"+markerStart+")"))},onAnimationComplete:function onAnimationComplete(){var _ref$current3,_ref$current4,_ref$current2;markerEnd&&(null==(_ref$current2=ref.current)||_ref$current2.setAttribute("marker-end","url(#"+markerEnd+")"));null==(_ref$current3=ref.current)||_ref$current3.removeAttribute("stroke-dasharray"),null==(_ref$current4=ref.current)||_ref$current4.removeAttribute("stroke-dashoffset")},transition,role:setRole?variant:void 0,style,className:compositeClassName},props))})};FlowPath.displayName="FlowPath";try{FlowPath.displayName="FlowPath",FlowPath.__docgenInfo={description:"",displayName:"FlowPath",props:{points:{defaultValue:null,description:"points along path",name:"points",required:!0,type:{name:"PositionSpec[]"}},units:{defaultValue:{value:"view"},description:"units for points",name:"units",required:!1,type:{name:"PositionUnits"}},transition:{defaultValue:{value:"{ pathLength: { duration: 0.5 } }"},description:"transition",name:"transition",required:!1,type:{name:"FlowAnimationProp"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},curve:{defaultValue:{value:"Linear"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},variant:{defaultValue:{value:"flow"},description:"variant",name:"variant",required:!1,type:{name:"string"}},markerStart:{defaultValue:null,description:"identifier for start marker",name:"markerStart",required:!1,type:{name:"string"}},markerEnd:{defaultValue:null,description:"identifier for end marker",name:"markerEnd",required:!1,type:{name:"string"}},closed:{defaultValue:null,description:"closed path",name:"closed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/flowchart/FlowPath.tsx#FlowPath"]={docgenInfo:FlowPath.__docgenInfo,name:"FlowPath",path:"packages/annotation/src/flowchart/FlowPath.tsx#FlowPath"})}catch(__react_docgen_typescript_loader_error){}var _SimpleLine$parameter,_SimpleLine$parameter2,_SimpleLine$parameter3,_ComplexLine$paramete,_ComplexLine$paramete2,_ComplexLine$paramete3,_NaturalCurve$paramet,_NaturalCurve$paramet2,_NaturalCurve$paramet3,_SlowTransition$param,_SlowTransition$param2,_SlowTransition$param3,ArrowMarker=__webpack_require__("./packages/annotation/src/markers/ArrowMarker.tsx"),FlowMilestones=function FlowMilestones(_ref){var points=_ref.points,_ref$curve=_ref.curve,curve=void 0===_ref$curve?"Linear":_ref$curve,style=_ref.style,transition=_ref.transition,ref=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return function toggleMilestone(m){var _ref$current;null==(_ref$current=ref.current)||_ref$current.toggleMilestone(m)}("A")},children:"Toggle milestone"})}),(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{fref:ref,size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},theme:{path:{default:{fillOpacity:0}}},children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(ArrowMarker.P,{id:"triangle",variant:"Triangle",size:20,style:{fill:"#222222",fillOpacity:1}})}),(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2},scaleY:{variant:"linear",domain:[0,100]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"A",children:(0,jsx_runtime.jsx)(FlowPath,{points,curve,transition,style,markerEnd:"triangle"})})]})]})]})};try{FlowMilestones.displayName="FlowMilestones",FlowMilestones.__docgenInfo={description:"",displayName:"FlowMilestones",props:{curve:{defaultValue:{value:"Linear"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},points:{defaultValue:null,description:"points along path",name:"points",required:!0,type:{name:"PositionSpec[]"}},transition:{defaultValue:null,description:"transition",name:"transition",required:!1,type:{name:"FlowAnimationProp"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/flowchart/FlowMilestones.tsx#FlowMilestones"]={docgenInfo:FlowMilestones.__docgenInfo,name:"FlowMilestones",path:"packages/annotation/stories/flowchart/FlowMilestones.tsx#FlowMilestones"})}catch(__react_docgen_typescript_loader_error){}function FlowPath_stories_extends(){return FlowPath_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},FlowPath_stories_extends.apply(this,arguments)}const FlowPath_stories={title:"Addons/Annotation/Flowchart/FlowPath",component:FlowPath};var SimpleLine={render:function render(){return(0,jsx_runtime.jsx)(FlowMilestones,{points:[["A",80],["D",80]]})},name:"simple line"},ComplexLine={render:function render(){return(0,jsx_runtime.jsx)(FlowMilestones,{points:[["A",80],["D",80],["D",20],["B",20],["B",70]],style:{fillOpacity:0}})},name:"complex line"},NaturalCurve={render:function render(){return(0,jsx_runtime.jsx)(FlowMilestones,{points:[["A",80],["D",80],["D",20],["B",20],["B",70]],curve:"Natural"})},name:"natural curve"},SlowTransition={render:function render(){return(0,jsx_runtime.jsx)(FlowMilestones,{points:[["A",80],["D",80],["D",20],["B",20],["B",70]],curve:"Natural",transition:{pathLength:{duration:3}}})},name:"slow transition"};SimpleLine.parameters=FlowPath_stories_extends({},SimpleLine.parameters,{docs:FlowPath_stories_extends({},null==(_SimpleLine$parameter=SimpleLine.parameters)?void 0:_SimpleLine$parameter.docs,{source:FlowPath_stories_extends({originalSource:"{\n  render: () => <FlowMilestones points={[['A', 80], ['D', 80]]} />,\n  name: 'simple line'\n}"},null==(_SimpleLine$parameter2=SimpleLine.parameters)||null==(_SimpleLine$parameter3=_SimpleLine$parameter2.docs)?void 0:_SimpleLine$parameter3.source)})}),ComplexLine.parameters=FlowPath_stories_extends({},ComplexLine.parameters,{docs:FlowPath_stories_extends({},null==(_ComplexLine$paramete=ComplexLine.parameters)?void 0:_ComplexLine$paramete.docs,{source:FlowPath_stories_extends({originalSource:"{\n  render: () => <FlowMilestones points={[['A', 80], ['D', 80], ['D', 20], ['B', 20], ['B', 70]]} style={{\n    fillOpacity: 0\n  }} />,\n  name: 'complex line'\n}"},null==(_ComplexLine$paramete2=ComplexLine.parameters)||null==(_ComplexLine$paramete3=_ComplexLine$paramete2.docs)?void 0:_ComplexLine$paramete3.source)})}),NaturalCurve.parameters=FlowPath_stories_extends({},NaturalCurve.parameters,{docs:FlowPath_stories_extends({},null==(_NaturalCurve$paramet=NaturalCurve.parameters)?void 0:_NaturalCurve$paramet.docs,{source:FlowPath_stories_extends({originalSource:"{\n  render: () => <FlowMilestones points={[['A', 80], ['D', 80], ['D', 20], ['B', 20], ['B', 70]]} curve={'Natural'} />,\n  name: 'natural curve'\n}"},null==(_NaturalCurve$paramet2=NaturalCurve.parameters)||null==(_NaturalCurve$paramet3=_NaturalCurve$paramet2.docs)?void 0:_NaturalCurve$paramet3.source)})}),SlowTransition.parameters=FlowPath_stories_extends({},SlowTransition.parameters,{docs:FlowPath_stories_extends({},null==(_SlowTransition$param=SlowTransition.parameters)?void 0:_SlowTransition$param.docs,{source:FlowPath_stories_extends({originalSource:"{\n  render: () => <FlowMilestones points={[['A', 80], ['D', 80], ['D', 20], ['B', 20], ['B', 70]]} curve={'Natural'} transition={{\n    pathLength: {\n      duration: 3\n    }\n  }} />,\n  name: 'slow transition'\n}"},null==(_SlowTransition$param2=SlowTransition.parameters)||null==(_SlowTransition$param3=_SlowTransition$param2.docs)?void 0:_SlowTransition$param3.source)})});var __namedExportsOrder=["SimpleLine","ComplexLine","NaturalCurve","SlowTransition"]},"./packages/annotation/src/markers/ArrowMarker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>ArrowMarker});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ArrowMarker=function ArrowMarker(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"triangle":_ref$variant,id=_ref.id,_ref$size=_ref.size,size=void 0===_ref$size?10:_ref$size,_ref$width=_ref.width,width=void 0===_ref$width?1:_ref$width,style=_ref.style,d="",w=Math.min(1,Math.max(0,width));return d="triangle"===variant?function createTriangleArrowD(width,size){var w=width*size/2,half=size/2;return["M0,",half-w,"L"+size+","+half+"L0,",half+w,"z"].join("")}(w,size):"winged"===variant?function createWingedArrowD(width,size){var w=width*size/2,half=size/2;return["M0,",half-w,"L"+size+","+half+"L0,",half+w,"L"+half+","+half+"z"].join("")}(w,size):function createChevronArrowD(width,size){var w=width*size/2,half=size/2;return["M0,",half-w,"L"+size+","+half+"L0,",half+w].join("")}(w,size),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("marker",{id,viewBox:"0 0 "+(size+2)+" "+(size+2),refX:3*size/4,refY:size/2,markerWidth:size/2,markerHeight:size/2,orient:"auto-start-reverse",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d,style})})};ArrowMarker.displayName="ArrowMarker";try{ArrowMarker.displayName="ArrowMarker",ArrowMarker.__docgenInfo={description:"",displayName:"ArrowMarker",props:{variant:{defaultValue:{value:"triangle"},description:"variant of arrowhead",name:"variant",required:!1,type:{name:"enum",value:[{value:'"triangle"'},{value:'"chevron"'},{value:'"winged"'}]}},width:{defaultValue:{value:"1"},description:"numeric parameter [0, 1] to control width of arrowhead",name:"width",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier",name:"id",required:!0,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"marker size",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"style for marker path",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/markers/ArrowMarker.tsx#ArrowMarker"]={docgenInfo:ArrowMarker.__docgenInfo,name:"ArrowMarker",path:"packages/annotation/src/markers/ArrowMarker.tsx#ArrowMarker"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);