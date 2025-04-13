"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4116],{"./packages/matrix/stories/heatmaps/HeatMapHighlight.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DataSubsets:()=>DataSubsets,Default:()=>Default,EdgeAnimation:()=>EdgeAnimation,Padding:()=>Padding,Static:()=>Static,Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HeatMapHighlight_stories});var react=__webpack_require__("./node_modules/react/index.js"),motion_minimal=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),predicates=__webpack_require__("./packages/matrix/src/heatmap/predicates.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","keys","interactive","edgeAnimation","tooltipAlign","className","setRole","style"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var HeatMapHighlightMask=function HeatMapHighlightMask(zone,size,style,className,animation){var width=size[0],height=size[1],commonProps={initial:animation?{width:0,height:0}:void 0,style,className};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(motion_minimal.m.rect,_extends({animate:{width:(0,chsk_core_es.UYe)(zone[chsk_core_es.X][0]),height:(0,chsk_core_es.UYe)(zone[chsk_core_es.Y][0])}},commonProps),"top-left"),(0,jsx_runtime.jsx)(motion_minimal.m.rect,_extends({transform:"translate("+width+",0)rotate(90)",animate:{height:(0,chsk_core_es.UYe)(width-zone[chsk_core_es.X][1]),width:(0,chsk_core_es.UYe)(zone[chsk_core_es.Y][0])}},commonProps),"top-right"),(0,jsx_runtime.jsx)(motion_minimal.m.rect,_extends({transform:"translate(0,"+height+")rotate(-90)",animate:{width:(0,chsk_core_es.UYe)(height-zone[chsk_core_es.Y][1]),height:(0,chsk_core_es.UYe)(zone[chsk_core_es.X][0])}},commonProps),"bottom-left"),(0,jsx_runtime.jsx)(motion_minimal.m.rect,_extends({transform:"translate("+width+","+height+")rotate(180)",animate:{width:(0,chsk_core_es.UYe)(width-zone[chsk_core_es.X][1]),height:(0,chsk_core_es.UYe)(height-zone[chsk_core_es.Y][1])}},commonProps),"bottom-right")]})},HeatMapHighlight=function HeatMapHighlight(_ref){var ids=_ref.ids,keys=_ref.keys,_ref$interactive=_ref.interactive,interactive=void 0===_ref$interactive||_ref$interactive,_ref$edgeAnimation=_ref.edgeAnimation,edgeAnimation=void 0!==_ref$edgeAnimation&&_ref$edgeAnimation,_ref$tooltipAlign=_ref.tooltipAlign,tooltipAlign=void 0===_ref$tooltipAlign?[.5,.5]:_ref$tooltipAlign,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,style=_ref.style,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(_ref,_excluded),processedData=(0,chsk_core_es.wIO)(),scales=(0,chsk_core_es.kE1)().scales,size=(0,chsk_core_es.Bs9)().size,detectorRef=(0,react.useRef)(null),_useState=(0,react.useState)(null),zone=_useState[0],setZone=_useState[1],_useState2=(0,react.useState)(void 0),activeData=_useState2[0],setActiveData=_useState2[1],setTooltipData=(0,chsk_core_es.lLG)().setData,data=processedData.data,_useIdsKeys=(0,chsk_core_es.lRm)(ids,keys,processedData),idSet=_useIdsKeys.idSet,keySet=_useIdsKeys.keySet,idArray=_useIdsKeys.idArray,keyArray=_useIdsKeys.keyArray;if(!(0,predicates.jF)(data,scales))return null;var scaleX=scales.x,scaleY=scales.y,scaleColor=scales.color,detectorIntervals=(0,react.useMemo)((function(){return function createDetectorIntervals(scaleX,scaleY,idsSet,keysSet){return[(0,chsk_core_es.Ax7)(scaleX,keysSet),(0,chsk_core_es.Ax7)(scaleY,idsSet)]}(scaleX,scaleY,idSet,keySet)}),[scaleX,scaleY,idSet,keySet]);(0,react.useEffect)((function(){if(!interactive){var xInterval=(0,chsk_core_es.FG_)(detectorIntervals[0]),yInterval=(0,chsk_core_es.FG_)(detectorIntervals[1]);setZone([xInterval,yInterval])}}),[detectorIntervals,setZone]);var handleClick=(0,react.useCallback)((function(event){var _props$handlers;null==(_props$handlers=props.handlers)||null==_props$handlers.onClick||_props$handlers.onClick(activeData,event)}),[activeData,props.handlers]),handleMouseLeave=(0,react.useCallback)((function(event){var _props$handlers2;null==(_props$handlers2=props.handlers)||null==_props$handlers2.onMouseLeave||_props$handlers2.onMouseLeave(activeData,event),setZone(null),setTooltipData({})}),[activeData,setZone,setTooltipData,props.handlers]),handleMouseMove=(0,react.useCallback)((function(event){var _data$idIndex,_data$idIndex2,_props$handlers3;if(null!==detectorRef&&null!==detectorRef.current){var _detectorRef$current$=detectorRef.current.getBoundingClientRect(),detectorX=_detectorRef$current$.x,detectorY=_detectorRef$current$.y,mouse=[event.clientX-detectorX,event.clientY-detectorY];if(!(0,chsk_core_es.sn2)(mouse,zone)){var _findZone=(0,chsk_core_es.CXu)(mouse,detectorIntervals),indexes=_findZone.indexes,newZone=_findZone.zone;if(null!==newZone){var _getAlignPosition=(0,chsk_core_es.ueV)([newZone[chsk_core_es.X][0],newZone[chsk_core_es.Y][0]],(0,chsk_core_es.gCP)(newZone),tooltipAlign),x=_getAlignPosition[0],y=_getAlignPosition[1],keyIndex=indexes[0],idIndex=indexes[1],zoneId=String(idArray[idIndex]),zoneKey=String(keyArray[keyIndex]),zoneValue=Number(null==(_data$idIndex=data[idIndex])?void 0:_data$idIndex.value[keyIndex]),zoneSize=null==(_data$idIndex2=data[idIndex])?void 0:_data$idIndex2.size[keyIndex],activeData={id:zoneId,key:zoneKey,data:zoneValue,size:zoneSize,label:(null===zoneValue||isNaN(Number(zoneValue))?"":"value: "+zoneValue)+" "+(null===zoneSize||isNaN(Number(zoneSize))?"":"size: "+zoneSize),color:scaleColor(zoneValue)};null==(_props$handlers3=props.handlers)||null==_props$handlers3.onMouseEnter||_props$handlers3.onMouseEnter(activeData,event),setActiveData(activeData),setTooltipData({x,y,title:zoneId+", "+zoneKey,data:[activeData]}),setZone(newZone)}else handleMouseLeave(event)}}}),[detectorIntervals,detectorRef,zone,setZone,props.handlers]),detector=(0,jsx_runtime.jsx)("rect",{ref:detectorRef,role:setRole?"heatmap-detector":void 0,width:size[chsk_core_es.X],height:size[chsk_core_es.Y],style:{opacity:0},onMouseMove:handleMouseMove,onMouseLeave:handleMouseLeave,onClick:handleClick},"detector"),maskClassName=(0,chsk_core_es.gjB)("heatmap-highlight",className);return(0,jsx_runtime.jsxs)("g",{role:"heatmap-highlight",children:[(0,jsx_runtime.jsx)(chsk_core_es.JjT,{role:setRole?"heatmap-highlight-mask":void 0,visible:null!==zone,firstRender:!1,children:null===zone?null:HeatMapHighlightMask(zone,size,style,maskClassName,edgeAnimation)},"mask"),interactive?detector:null]})};try{HeatMapHighlight.displayName="HeatMapHighlight",HeatMapHighlight.__docgenInfo={description:"",displayName:"HeatMapHighlight",props:{keys:{defaultValue:null,description:"keys to display (default to all keys)",name:"keys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},ids:{defaultValue:null,description:"target ids (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},interactive:{defaultValue:{value:"true"},description:"toggle response to mouse motion",name:"interactive",required:!1,type:{name:"boolean"}},edgeAnimation:{defaultValue:{value:"false"},description:"animate appearance from edges",name:"edgeAnimation",required:!1,type:{name:"boolean"}},tooltipAlign:{defaultValue:{value:"[0.5, 0.5]"},description:"alignment of tooltip within a highlighted zone",name:"tooltipAlign",required:!1,type:{name:"AlignSpec"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<HeatMapInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<HeatMapInteractiveDataItem, HeatMapCellProps>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/heatmap/HeatMapHighlight.tsx#HeatMapHighlight"]={docgenInfo:HeatMapHighlight.__docgenInfo,name:"HeatMapHighlight",path:"packages/matrix/src/heatmap/HeatMapHighlight.tsx#HeatMapHighlight"})}catch(__react_docgen_typescript_loader_error){}var decorators=__webpack_require__("./packages/matrix/stories/decorators.tsx");const HeatMapHighlight_stories={title:"Addons/Matrix/HeatMaps/HeatMapHighlight",component:HeatMapHighlight},Default={name:"default",args:{style:{fill:"#222222",opacity:.7}},decorators:[decorators.qj]},Padding={name:"padding",args:{style:{fill:"#992222",opacity:.3}},decorators:[decorators.c7]},DataSubsets={name:"data subsets",args:{ids:["alpha","beta"],style:{fill:"#222222",opacity:.7}},decorators:[decorators.qj]},Static={name:"static",args:{ids:["alpha"],keys:["z"],interactive:!1,style:{fill:"#222222",opacity:.9}},decorators:[decorators.qj]},EdgeAnimation={name:"edge animation",args:{edgeAnimation:!0,style:{fill:"#222222",opacity:.9}},decorators:[decorators.qj]},Tooltip={name:"tooltip",decorators:[decorators.nh]},__namedExportsOrder=["Default","Padding","DataSubsets","Static","EdgeAnimation","Tooltip"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: 'default',\n  args: {\n    style: {\n      fill: '#222222',\n      opacity: 0.7\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}",...Default.parameters?.docs?.source}}},Padding.parameters={...Padding.parameters,docs:{...Padding.parameters?.docs,source:{originalSource:"{\n  name: 'padding',\n  args: {\n    style: {\n      fill: '#992222',\n      opacity: 0.3\n    }\n  },\n  decorators: [ChartHeatMapPaddedCellsDecorator]\n}",...Padding.parameters?.docs?.source}}},DataSubsets.parameters={...DataSubsets.parameters,docs:{...DataSubsets.parameters?.docs,source:{originalSource:"{\n  name: 'data subsets',\n  args: {\n    ids: ['alpha', 'beta'],\n    style: {\n      fill: '#222222',\n      opacity: 0.7\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}",...DataSubsets.parameters?.docs?.source}}},Static.parameters={...Static.parameters,docs:{...Static.parameters?.docs,source:{originalSource:"{\n  name: 'static',\n  args: {\n    ids: ['alpha'],\n    keys: ['z'],\n    interactive: false,\n    style: {\n      fill: '#222222',\n      opacity: 0.9\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}",...Static.parameters?.docs?.source}}},EdgeAnimation.parameters={...EdgeAnimation.parameters,docs:{...EdgeAnimation.parameters?.docs,source:{originalSource:"{\n  name: 'edge animation',\n  args: {\n    edgeAnimation: true,\n    style: {\n      fill: '#222222',\n      opacity: 0.9\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}",...EdgeAnimation.parameters?.docs?.source}}},Tooltip.parameters={...Tooltip.parameters,docs:{...Tooltip.parameters?.docs,source:{originalSource:"{\n  name: 'tooltip',\n  decorators: [ChartHeatMapCellsTooltipDecorator]\n}",...Tooltip.parameters?.docs?.source}}}}}]);