"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4375],{"./packages/themes/stories/pieces/pieces.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:()=>Button,TooltipItemLabelAndValue:()=>TooltipItemLabelAndValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>pieces_stories});var buttonTheme={text:{button:{dominantBaseline:"central",fill:"#555555",fontFamily:"sans-serif",fontSize:"11px",textAnchor:"start"}},path:{button:{cursor:"pointer",strokeWidth:0,fill:"#555555",fillOpacity:1,pointerEvents:"none"}},rect:{button:{cursor:"pointer"},"button.bg":{fill:"#eeeeee",fillOpacity:0},"button.bg:hover":{fillOpacity:1},"button.bg.selected":{fill:"#dddddd",fillOpacity:.7},"button.bg.selected:hover":{fillOpacity:1}}},defaultTheme=__webpack_require__("./packages/themes/src/complete/defaultTheme.ts"),tooltipItemLabelValueTheme={text:{"tooltipItem.label":{textAnchor:"start",dominantBaseline:"central"},"tooltipItem.value":{textAnchor:"start",fontWeight:600,dominantBaseline:"central"}}},ThemeController=__webpack_require__("./packages/themes/stories/ThemeController.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ButtonExample=function ButtonExample(_ref){var chartId=_ref.chartId,theme=_ref.theme;return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,_extends({id:chartId},ThemeController.y,{theme:null!=theme?theme:void 0,children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{children:[(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:60,y:60,width:40,height:40,style:{fill:"#dd4444"},className:"button"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[110,80],className:"button",children:"button"}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:60,y:120,width:40,height:40,style:{fill:"#dd4444",stroke:"#000000",strokeWidth:1},className:"button bg"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[110,140],className:"button",children:"button bg"}),(0,jsx_runtime.jsx)(chsk_core_es.y$t,{points:[[20,20],[40,60],[70,30]],className:"button"})]})]}))};ButtonExample.displayName="ButtonExample";var _Button$parameters,_Button$parameters2,_Button$parameters2$d,_TooltipItemLabelAndV,_TooltipItemLabelAndV2,_TooltipItemLabelAndV3,TooltipItemLabelValueExample=function TooltipItemLabelValueExample(_ref2){var chartId=_ref2.chartId,theme=_ref2.theme;return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,_extends({id:chartId},ThemeController.y,{theme:null!=theme?theme:void 0,children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{children:[(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:30,y:40,width:120,height:40,style:{fillOpacity:0,stroke:"#dd0000",strokeWidth:1}}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[40,60],className:"tooltipItem label",children:"key:"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[70,60],className:"tooltipItem value",children:"value"})]})]}))};TooltipItemLabelValueExample.displayName="TooltipItemLabelValueExample";try{ButtonExample.displayName="ButtonExample",ButtonExample.__docgenInfo={description:"",displayName:"ButtonExample",props:{chartId:{defaultValue:null,description:"id for chart",name:"chartId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"theme",name:"theme",required:!0,type:{name:"ThemeSpec | null"}},baseTheme:{defaultValue:null,description:"base theme",name:"baseTheme",required:!1,type:{name:"CompleteThemeSpec | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/themes/stories/pieces/examples.tsx#ButtonExample"]={docgenInfo:ButtonExample.__docgenInfo,name:"ButtonExample",path:"packages/themes/stories/pieces/examples.tsx#ButtonExample"})}catch(__react_docgen_typescript_loader_error){}try{TooltipItemLabelValueExample.displayName="TooltipItemLabelValueExample",TooltipItemLabelValueExample.__docgenInfo={description:"",displayName:"TooltipItemLabelValueExample",props:{chartId:{defaultValue:null,description:"id for chart",name:"chartId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"theme",name:"theme",required:!0,type:{name:"ThemeSpec | null"}},baseTheme:{defaultValue:null,description:"base theme",name:"baseTheme",required:!1,type:{name:"CompleteThemeSpec | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/themes/stories/pieces/examples.tsx#TooltipItemLabelValueExample"]={docgenInfo:TooltipItemLabelValueExample.__docgenInfo,name:"TooltipItemLabelValueExample",path:"packages/themes/stories/pieces/examples.tsx#TooltipItemLabelValueExample"})}catch(__react_docgen_typescript_loader_error){}function pieces_stories_extends(){return pieces_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},pieces_stories_extends.apply(this,arguments)}const pieces_stories={title:"Addons/Themes/Theme pieces",parameters:{controls:{include:[]}}};var Button={render:function render(){return(0,jsx_runtime.jsx)(ThemeController.u,{chart:ButtonExample,chartId:"button",themes:{buttonTheme,defaultTheme:defaultTheme.u}})},name:"button"},TooltipItemLabelAndValue={render:function render(){return(0,jsx_runtime.jsx)(ThemeController.u,{chart:TooltipItemLabelValueExample,chartId:"tooltipItemLabelValue",themes:{tooltipItemLabelValueTheme,defaultTheme:defaultTheme.u}})},name:"tooltip item label and value"};Button.parameters=pieces_stories_extends({},Button.parameters,{docs:pieces_stories_extends({},null==(_Button$parameters=Button.parameters)?void 0:_Button$parameters.docs,{source:pieces_stories_extends({originalSource:"{\n  render: () => <ThemeController chart={ButtonExample} chartId={'button'} themes={{\n    buttonTheme,\n    defaultTheme\n  }} />,\n  name: 'button'\n}"},null==(_Button$parameters2=Button.parameters)||null==(_Button$parameters2$d=_Button$parameters2.docs)?void 0:_Button$parameters2$d.source)})}),TooltipItemLabelAndValue.parameters=pieces_stories_extends({},TooltipItemLabelAndValue.parameters,{docs:pieces_stories_extends({},null==(_TooltipItemLabelAndV=TooltipItemLabelAndValue.parameters)?void 0:_TooltipItemLabelAndV.docs,{source:pieces_stories_extends({originalSource:"{\n  render: () => <ThemeController chart={TooltipItemLabelValueExample} chartId={'tooltipItemLabelValue'} themes={{\n    tooltipItemLabelValueTheme,\n    defaultTheme\n  }} />,\n  name: 'tooltip item label and value'\n}"},null==(_TooltipItemLabelAndV2=TooltipItemLabelAndValue.parameters)||null==(_TooltipItemLabelAndV3=_TooltipItemLabelAndV2.docs)?void 0:_TooltipItemLabelAndV3.source)})});var __namedExportsOrder=["Button","TooltipItemLabelAndValue"]},"./packages/themes/src/complete/defaultTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>defaultTheme});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),defaultTheme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.BRZ)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.uHP)},"./packages/themes/stories/ThemeController.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>ThemeController,y:()=>themeStoryChartProps});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),themeStoryChartProps={size:[400,300],padding:[40,100,60,70]},ThemeController=function ThemeController(_ref){var chart=_ref.chart,chartId=_ref.chartId,_ref$themes=_ref.themes,themes=void 0===_ref$themes?{}:_ref$themes,baseTheme=_ref.baseTheme,themeNames=Object.keys(themes),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(themes[themeNames[0]]),theme=_useState[0],setTheme=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),selection=_useState2[0],setSelection=_useState2[1],chartProps=baseTheme?{chartId,theme:null,baseTheme:theme}:{chartId,theme};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"controller-story",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"controller",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"controller-label",children:"THEME"}),themeNames.length>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:function handleTheme0(){setTheme(themes[themeNames[0]]),setSelection(0)},className:"themeButton"+(0==selection?" selected":""),children:themeNames[0]}):null,themeNames.length>1?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:function handleTheme1(){setTheme(themes[themeNames[1]]),setSelection(1)},className:"themeButton"+(1==selection?" selected":""),children:themeNames[1]}):null]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"controller-chart",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"chart",children:(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(chart,chartProps)})})]})};ThemeController.displayName="ThemeController";try{ThemeController.displayName="ThemeController",ThemeController.__docgenInfo={description:"",displayName:"ThemeController",props:{chart:{defaultValue:null,description:"component that renders a chart",name:"chart",required:!0,type:{name:"FC<ThemeStory>"}},chartId:{defaultValue:null,description:"string identifier for chart",name:"chartId",required:!0,type:{name:"string"}},themes:{defaultValue:{value:"{}"},description:"dictionary of themes",name:"themes",required:!1,type:{name:"Record<string, ThemeSpec>"}},baseTheme:{defaultValue:null,description:"flag to provide themes to the baseTheme prop instead of the theme prop",name:"baseTheme",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/themes/stories/ThemeController.tsx#ThemeController"]={docgenInfo:ThemeController.__docgenInfo,name:"ThemeController",path:"packages/themes/stories/ThemeController.tsx#ThemeController"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);