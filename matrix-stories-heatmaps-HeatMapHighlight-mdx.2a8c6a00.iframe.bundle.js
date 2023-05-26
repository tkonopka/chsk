"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4418,4116],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/matrix/stories/heatmaps/HeatMapHighlight.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DataSubsets:()=>DataSubsets,Default:()=>Default,EdgeAnimation:()=>EdgeAnimation,Padding:()=>Padding,Static:()=>Static,Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HeatMapHighlight_stories});var react=__webpack_require__("./node_modules/react/index.js"),motion_minimal=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),predicates=__webpack_require__("./packages/matrix/src/heatmap/predicates.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var HeatMapHighlightMask=function HeatMapHighlightMask(zone,size,style,className,animation){var width=size[0],height=size[1],commonProps={initial:animation?{width:0,height:0}:void 0,style,className};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(motion_minimal.m.rect,_extends({animate:{width:(0,chsk_core_es.UYe)(zone[chsk_core_es.X][0]),height:(0,chsk_core_es.UYe)(zone[chsk_core_es.Y][0])}},commonProps),"top-left"),(0,jsx_runtime.jsx)(motion_minimal.m.rect,_extends({transform:"translate("+width+",0)rotate(90)",animate:{height:(0,chsk_core_es.UYe)(width-zone[chsk_core_es.X][1]),width:(0,chsk_core_es.UYe)(zone[chsk_core_es.Y][0])}},commonProps),"top-right"),(0,jsx_runtime.jsx)(motion_minimal.m.rect,_extends({transform:"translate(0,"+height+")rotate(-90)",animate:{width:(0,chsk_core_es.UYe)(height-zone[chsk_core_es.Y][1]),height:(0,chsk_core_es.UYe)(zone[chsk_core_es.X][0])}},commonProps),"bottom-left"),(0,jsx_runtime.jsx)(motion_minimal.m.rect,_extends({transform:"translate("+width+","+height+")rotate(180)",animate:{width:(0,chsk_core_es.UYe)(width-zone[chsk_core_es.X][1]),height:(0,chsk_core_es.UYe)(height-zone[chsk_core_es.Y][1])}},commonProps),"bottom-right")]})},HeatMapHighlight=function HeatMapHighlight(_ref){var ids=_ref.ids,keys=_ref.keys,_ref$interactive=_ref.interactive,interactive=void 0===_ref$interactive||_ref$interactive,_ref$edgeAnimation=_ref.edgeAnimation,edgeAnimation=void 0!==_ref$edgeAnimation&&_ref$edgeAnimation,_ref$tooltipAlign=_ref.tooltipAlign,tooltipAlign=void 0===_ref$tooltipAlign?[.5,.5]:_ref$tooltipAlign,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,style=_ref.style,processedData=(0,chsk_core_es.wIO)(),scales=(0,chsk_core_es.kE1)().scales,size=(0,chsk_core_es.Bs9)().size,detectorRef=(0,react.useRef)(null),_useState=(0,react.useState)(null),zone=_useState[0],setZone=_useState[1],setTooltipData=(0,chsk_core_es.lLG)().setData,data=processedData.data;if(!(0,predicates.jF)(data,scales))return null;var _useMemo=(0,react.useMemo)((function(){return(0,chsk_core_es.pP)(ids,keys,processedData)}),[ids,keys,processedData]),idSet=_useMemo.idSet,keySet=_useMemo.keySet,idArray=_useMemo.idArray,keyArray=_useMemo.keyArray,scaleX=scales.x,scaleY=scales.y,scaleColor=scales.color,detectorIntervals=(0,react.useMemo)((function(){return function createDetectorIntervals(scaleX,scaleY,idsSet,keysSet){return[(0,chsk_core_es.Ax7)(scaleX,keysSet),(0,chsk_core_es.Ax7)(scaleY,idsSet)]}(scaleX,scaleY,idSet,keySet)}),[scaleX,scaleY,idSet,keySet]);(0,react.useEffect)((function(){if(!interactive){var xInterval=(0,chsk_core_es.FG_)(detectorIntervals[0]),yInterval=(0,chsk_core_es.FG_)(detectorIntervals[1]);setZone([xInterval,yInterval])}}),[detectorIntervals,setZone]);var handleMouseLeave=(0,react.useCallback)((function(){setZone(null),setTooltipData({})}),[setZone,setTooltipData]),handleMouseMove=(0,react.useCallback)((function(event){if(null!==detectorRef&&null!==detectorRef.current){var _detectorRef$current$=detectorRef.current.getBoundingClientRect(),detectorX=_detectorRef$current$.x,detectorY=_detectorRef$current$.y,mouse=[event.clientX-detectorX,event.clientY-detectorY];if(!(0,chsk_core_es.sn2)(mouse,zone)){var _findZone=(0,chsk_core_es.CXu)(mouse,detectorIntervals),indexes=_findZone.indexes,newZone=_findZone.zone;if(null!==newZone){var _getAlignPosition=(0,chsk_core_es.ueV)([newZone[chsk_core_es.X][0],newZone[chsk_core_es.Y][0]],(0,chsk_core_es.gCP)(newZone),tooltipAlign),x=_getAlignPosition[0],y=_getAlignPosition[1],keyIndex=indexes[0],idIndex=indexes[1],zoneId=idArray[idIndex],zoneKey=keyArray[keyIndex],zoneValue=data[idIndex].value[keyIndex],zoneSize=data[idIndex].size[keyIndex],activeData={id:zoneId,key:zoneKey,value:zoneValue,size:zoneSize,label:(null===zoneValue||isNaN(Number(zoneValue))?"":"value: "+zoneValue)+" "+(null===zoneSize||isNaN(Number(zoneSize))?"":"size: "+zoneSize),color:scaleColor(zoneValue)};setTooltipData({x,y,title:zoneId+", "+zoneKey,data:[activeData]}),setZone(newZone)}else handleMouseLeave()}}}),[detectorIntervals,detectorRef,zone,setZone]),detector=(0,jsx_runtime.jsx)("rect",{ref:detectorRef,role:setRole?"heatmap-detector":void 0,width:size[chsk_core_es.X],height:size[chsk_core_es.Y],style:{opacity:0},onMouseMove:handleMouseMove,onMouseLeave:handleMouseLeave}),maskClassName=(0,chsk_core_es.gjB)("heatmap-highlight",className);return(0,jsx_runtime.jsxs)("g",{role:"heatmap-highlight",children:[(0,jsx_runtime.jsx)(chsk_core_es.JjT,{role:setRole?"heatmap-highlight-mask":void 0,visible:null!==zone,firstRender:!1,children:null===zone?null:HeatMapHighlightMask(zone,size,style,maskClassName,edgeAnimation)},"heatmap-highlight-mask"),interactive?detector:null]})};HeatMapHighlight.displayName="HeatMapHighlight";try{HeatMapHighlight.displayName="HeatMapHighlight",HeatMapHighlight.__docgenInfo={description:"",displayName:"HeatMapHighlight",props:{keys:{defaultValue:null,description:"keys to display (default to all keys)",name:"keys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},ids:{defaultValue:null,description:"target ids (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},interactive:{defaultValue:{value:"true"},description:"toggle response to mouse motion",name:"interactive",required:!1,type:{name:"boolean"}},edgeAnimation:{defaultValue:{value:"false"},description:"animate appearance from edges",name:"edgeAnimation",required:!1,type:{name:"boolean"}},tooltipAlign:{defaultValue:{value:"[0.5, 0.5]"},description:"alignment of tooltip within a highlighted zone",name:"tooltipAlign",required:!1,type:{name:"AlignSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/heatmap/HeatMapHighlight.tsx#HeatMapHighlight"]={docgenInfo:HeatMapHighlight.__docgenInfo,name:"HeatMapHighlight",path:"packages/matrix/src/heatmap/HeatMapHighlight.tsx#HeatMapHighlight"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Padding$parameters,_Padding$parameters2,_Padding$parameters2$,_DataSubsets$paramete,_DataSubsets$paramete2,_DataSubsets$paramete3,_Static$parameters,_Static$parameters2,_Static$parameters2$d,_EdgeAnimation$parame,_EdgeAnimation$parame2,_EdgeAnimation$parame3,_Tooltip$parameters,_Tooltip$parameters2,_Tooltip$parameters2$,decorators=__webpack_require__("./packages/matrix/stories/decorators.tsx");function HeatMapHighlight_stories_extends(){return HeatMapHighlight_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},HeatMapHighlight_stories_extends.apply(this,arguments)}const HeatMapHighlight_stories={title:"Addons/Matrix/HeatMaps/HeatMapHighlight",component:HeatMapHighlight};var Default={name:"default",args:{style:{fill:"#222222",opacity:.7}},decorators:[decorators.qj]},Padding={name:"padding",args:{style:{fill:"#992222",opacity:.3}},decorators:[decorators.c7]},DataSubsets={name:"data subsets",args:{ids:["alpha","beta"],style:{fill:"#222222",opacity:.7}},decorators:[decorators.qj]},Static={name:"static",args:{ids:["alpha"],keys:["z"],interactive:!1,style:{fill:"#222222",opacity:.9}},decorators:[decorators.qj]},EdgeAnimation={name:"edge animation",args:{edgeAnimation:!0,style:{fill:"#222222",opacity:.9}},decorators:[decorators.qj]},Tooltip={name:"tooltip",decorators:[decorators.nh]};Default.parameters=HeatMapHighlight_stories_extends({},Default.parameters,{docs:HeatMapHighlight_stories_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:HeatMapHighlight_stories_extends({originalSource:"{\n  name: 'default',\n  args: {\n    style: {\n      fill: '#222222',\n      opacity: 0.7\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source)})}),Padding.parameters=HeatMapHighlight_stories_extends({},Padding.parameters,{docs:HeatMapHighlight_stories_extends({},null==(_Padding$parameters=Padding.parameters)?void 0:_Padding$parameters.docs,{source:HeatMapHighlight_stories_extends({originalSource:"{\n  name: 'padding',\n  args: {\n    style: {\n      fill: '#992222',\n      opacity: 0.3\n    }\n  },\n  decorators: [ChartHeatMapPaddedCellsDecorator]\n}"},null==(_Padding$parameters2=Padding.parameters)||null==(_Padding$parameters2$=_Padding$parameters2.docs)?void 0:_Padding$parameters2$.source)})}),DataSubsets.parameters=HeatMapHighlight_stories_extends({},DataSubsets.parameters,{docs:HeatMapHighlight_stories_extends({},null==(_DataSubsets$paramete=DataSubsets.parameters)?void 0:_DataSubsets$paramete.docs,{source:HeatMapHighlight_stories_extends({originalSource:"{\n  name: 'data subsets',\n  args: {\n    ids: ['alpha', 'beta'],\n    style: {\n      fill: '#222222',\n      opacity: 0.7\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}"},null==(_DataSubsets$paramete2=DataSubsets.parameters)||null==(_DataSubsets$paramete3=_DataSubsets$paramete2.docs)?void 0:_DataSubsets$paramete3.source)})}),Static.parameters=HeatMapHighlight_stories_extends({},Static.parameters,{docs:HeatMapHighlight_stories_extends({},null==(_Static$parameters=Static.parameters)?void 0:_Static$parameters.docs,{source:HeatMapHighlight_stories_extends({originalSource:"{\n  name: 'static',\n  args: {\n    ids: ['alpha'],\n    keys: ['z'],\n    interactive: false,\n    style: {\n      fill: '#222222',\n      opacity: 0.9\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}"},null==(_Static$parameters2=Static.parameters)||null==(_Static$parameters2$d=_Static$parameters2.docs)?void 0:_Static$parameters2$d.source)})}),EdgeAnimation.parameters=HeatMapHighlight_stories_extends({},EdgeAnimation.parameters,{docs:HeatMapHighlight_stories_extends({},null==(_EdgeAnimation$parame=EdgeAnimation.parameters)?void 0:_EdgeAnimation$parame.docs,{source:HeatMapHighlight_stories_extends({originalSource:"{\n  name: 'edge animation',\n  args: {\n    edgeAnimation: true,\n    style: {\n      fill: '#222222',\n      opacity: 0.9\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}"},null==(_EdgeAnimation$parame2=EdgeAnimation.parameters)||null==(_EdgeAnimation$parame3=_EdgeAnimation$parame2.docs)?void 0:_EdgeAnimation$parame3.source)})}),Tooltip.parameters=HeatMapHighlight_stories_extends({},Tooltip.parameters,{docs:HeatMapHighlight_stories_extends({},null==(_Tooltip$parameters=Tooltip.parameters)?void 0:_Tooltip$parameters.docs,{source:HeatMapHighlight_stories_extends({originalSource:"{\n  name: 'tooltip',\n  decorators: [ChartHeatMapCellsTooltipDecorator]\n}"},null==(_Tooltip$parameters2=Tooltip.parameters)||null==(_Tooltip$parameters2$=_Tooltip$parameters2.docs)?void 0:_Tooltip$parameters2$.source)})});var __namedExportsOrder=["Default","Padding","DataSubsets","Static","EdgeAnimation","Tooltip"]},"./packages/matrix/stories/heatmaps/HeatMapHighlight.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/matrix/stories/heatmaps/HeatMapHighlight.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"heatmaphighlight",children:"HeatMapHighlight"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMapHighlight"})," draws masks on a heatmap to focus attention on a specific row and column."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"mouse-motion",children:"Mouse motion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMapHighlight"})," detects mouse movements and emphasizes a cell in the heatmap by masking other parts of the map."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The effect works on maps with and without padding.\nThe appearance of the masks can be tuned via the prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"style"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_4__.Padding}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data-subsets",children:"Data subsets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To restrict the highlighting to a subset of rows and columns, use props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ids"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"keys"}),".\nIn the example below, the highlights should activate only on the first few rows."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_4__.DataSubsets}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"interactivity",children:"Interactivity"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Interactivity and mouse motion can be turned off via prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"interactive"}),".\nThen, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatmapHighlight"})," can be used as a static tool to highlight a subset of ids and/or keys."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_4__.Static}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"edge-animation",children:"Edge animation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMapHighlight"})," displays masks using a fade-in effect (cf. previous examples).\nFlag ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"edgeAnimation"})," instead activates an animation that initially places masks at the corners\nof the matrix and then spreads these masks to zoom onto a target."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_4__.EdgeAnimation}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Note that the animation is only relevant when the mouse pointer first enters the heatmap."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"tooltip",children:"Tooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMapHighlight"})," automatically sets data for a tooltip.\nTo activate a tooltip, use a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_4__.Tooltip})]})}}},"./node_modules/d3-scale-chromatic/src/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(specifier){for(var n=specifier.length/6|0,colors=new Array(n),i=0;i<n;)colors[i]="#"+specifier.slice(6*i,6*++i);return colors}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})},"./node_modules/framer-motion/dist/es/animation/animate.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>animate});var _index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/index.mjs"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function animate(from,to,transition={}){const value=(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(from)?from:(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(from);return value.start((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Z)("",value,to,transition)),{stop:()=>value.stop(),isAnimating:()=>value.isAnimating()}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/framer-motion/dist/es/utils/process.mjs"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs"),warn_once=__webpack_require__("./node_modules/framer-motion/dist/es/utils/warn-once.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{exitBeforeEnter&&(mode="wait",(0,warn_once.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[forceRender]=function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Z_.postRender(forceRender)),[forceRender]),forcedRenderCount]}();const forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);const isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((()=>{isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return"wait"===mode&&exiting.size&&(childrenToRender=[]),exiting.forEach((key=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:()=>{allChildren.delete(key),exiting.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout,mode},child))})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),"production"!==process.O&&"wait"===mode&&childrenToRender.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);