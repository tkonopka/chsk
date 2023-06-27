"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9345],{"./packages/annotation/stories/typography/BraceLabel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TickSize:()=>TickSize,WideCurves:()=>WideCurves,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BraceLabel_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),lines=__webpack_require__("./packages/annotation/src/typography/lines.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BraceLabel=function BraceLabel(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"right":_ref$variant,start=_ref.start,end=_ref.end,_ref$units=_ref.units,units=void 0===_ref$units?"view":_ref$units,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?[0,0]:_ref$expansion,_ref$tickSize=_ref.tickSize,tickSize=void 0===_ref$tickSize?5:_ref$tickSize,_ref$braceR=_ref.braceR,braceR=void 0===_ref$braceR?8:_ref$braceR,lineStyle=_ref.lineStyle,_ref$offset=_ref.offset,offset=void 0===_ref$offset?[0,-12]:_ref$offset,_ref$align=_ref.align,align=void 0===_ref$align?.5:_ref$align,_ref$angle=_ref.angle,angle=void 0===_ref$angle?0:_ref$angle,textStyle=_ref.textStyle,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,size=(0,chsk_core_es.Bs9)().size,scales=(0,chsk_core_es.kE1)().scales;tickSize="left"===variant?-tickSize:tickSize;var _getLineAbsolutePosit=(0,lines.wT)({start,end,units,expansion,scales,size}),lineStart=_getLineAbsolutePosit.lineStart,lineEnd=_getLineAbsolutePosit.lineEnd,_getBracePositions=(0,lines.qA)({start:lineStart,end:lineEnd,pinch:.5,size:tickSize,r:braceR}),tickStart=_getBracePositions.tickStart,braceStart=_getBracePositions.braceStart,pinchStart=_getBracePositions.pinchStart,lineMiddle=_getBracePositions.lineMiddle,pinchMiddle=_getBracePositions.pinchMiddle,pinchEnd=_getBracePositions.pinchEnd,braceEnd=_getBracePositions.braceEnd,tickEnd=_getBracePositions.tickEnd,textPos=[lineStart[0]+offset[0]+(lineEnd[0]-lineStart[0])*align,lineStart[1]+offset[1]+(lineEnd[1]-lineStart[1])*align],compositeClassName=(0,chsk_core_es.gjB)("brace-label",className);return(0,jsx_runtime.jsxs)("g",{style,className:compositeClassName,role:setRole?"brace-label-"+variant:void 0,children:[(0,jsx_runtime.jsx)(chsk_core_es.y$t,{variant:"brace",points:[tickStart,tickStart,lineStart,braceStart,pinchStart,lineMiddle,pinchMiddle,pinchMiddle,lineMiddle,pinchEnd,braceEnd,lineEnd,tickEnd,tickEnd],curve:"BasisOpen",className:compositeClassName,style:lineStyle,setRole}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"label",position:textPos,angle,className:compositeClassName,style:textStyle,setRole,children})]})};BraceLabel.displayName="BraceLabel";try{BraceLabel.displayName="BraceLabel",BraceLabel.__docgenInfo={description:"",displayName:"BraceLabel",props:{braceR:{defaultValue:{value:"8"},description:"smoothness of brace edges",name:"braceR",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"right"},description:"left- or right- handed ticks",name:"variant",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},tickSize:{defaultValue:{value:"5"},description:"size of marker at the end of line",name:"tickSize",required:!1,type:{name:"number"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},offset:{defaultValue:{value:"[0, -12]"},description:"translation for text label",name:"offset",required:!1,type:{name:"NumericPositionSpec"}},start:{defaultValue:null,description:"start position",name:"start",required:!0,type:{name:"PositionSpec"}},angle:{defaultValue:{value:"0"},description:"rotation of text label",name:"angle",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"children components",name:"children",required:!1,type:{name:"ReactNode"}},padding:{defaultValue:null,description:"padding for text label",name:"padding",required:!1,type:{name:"SizeSpec"}},align:{defaultValue:{value:"0.5"},description:"alignment for text label in [0, 1]",name:"align",required:!1,type:{name:"number"}},end:{defaultValue:null,description:"end position",name:"end",required:!0,type:{name:"PositionSpec"}},expansion:{defaultValue:{value:"[0, 0]"},description:"expansion of interval (multiples of bandwidth)",name:"expansion",required:!1,type:{name:"TwoSideSizeSpec"}},lineStyle:{defaultValue:null,description:"styles for line",name:"lineStyle",required:!1,type:{name:"Partial<CSSProperties>"}},units:{defaultValue:{value:"view"},description:"units for start and end positions",name:"units",required:!1,type:{name:"PositionUnits"}},textStyle:{defaultValue:null,description:"styles for text",name:"textStyle",required:!1,type:{name:"Partial<CSSProperties>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/typography/BraceLabel.tsx#BraceLabel"]={docgenInfo:BraceLabel.__docgenInfo,name:"BraceLabel",path:"packages/annotation/src/typography/BraceLabel.tsx#BraceLabel"})}catch(__react_docgen_typescript_loader_error){}var _TickSize$parameters,_TickSize$parameters2,_TickSize$parameters3,_WideCurves$parameter,_WideCurves$parameter2,_WideCurves$parameter3,decorators=__webpack_require__("./packages/annotation/stories/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const BraceLabel_stories={title:"Addons/Annotation/Typography/BraceLabel",component:BraceLabel};var TickSize={name:"tick size",args:{start:["C",108],end:["D",108],expansion:[.5,.5],tickSize:7,braceR:5,lineStyle:{fillOpacity:0},textStyle:{textAnchor:"middle"},offset:[0,-15],children:"selection"},decorators:[decorators.I8]},WideCurves={name:"wide curves",args:{start:["C",108],end:["D",108],expansion:[.5,.5],tickSize:7,braceR:40,lineStyle:{fillOpacity:0},textStyle:{textAnchor:"middle"},offset:[0,-15],children:"selection"},decorators:[decorators.I8]};TickSize.parameters=_extends({},TickSize.parameters,{docs:_extends({},null==(_TickSize$parameters=TickSize.parameters)?void 0:_TickSize$parameters.docs,{source:_extends({originalSource:"{\n  name: 'tick size',\n  args: {\n    start: ['C', 108],\n    end: ['D', 108],\n    expansion: [0.5, 0.5],\n    tickSize: 7,\n    braceR: 5,\n    lineStyle: {\n      fillOpacity: 0\n    },\n    textStyle: {\n      textAnchor: 'middle'\n    },\n    offset: [0, -15],\n    children: 'selection'\n  },\n  decorators: [ChartBandViewAxisDecorator]\n}"},null==(_TickSize$parameters2=TickSize.parameters)||null==(_TickSize$parameters3=_TickSize$parameters2.docs)?void 0:_TickSize$parameters3.source)})}),WideCurves.parameters=_extends({},WideCurves.parameters,{docs:_extends({},null==(_WideCurves$parameter=WideCurves.parameters)?void 0:_WideCurves$parameter.docs,{source:_extends({originalSource:"{\n  name: 'wide curves',\n  args: {\n    start: ['C', 108],\n    end: ['D', 108],\n    expansion: [0.5, 0.5],\n    tickSize: 7,\n    braceR: 40,\n    lineStyle: {\n      fillOpacity: 0\n    },\n    textStyle: {\n      textAnchor: 'middle'\n    },\n    offset: [0, -15],\n    children: 'selection'\n  },\n  decorators: [ChartBandViewAxisDecorator]\n}"},null==(_WideCurves$parameter2=WideCurves.parameters)||null==(_WideCurves$parameter3=_WideCurves$parameter2.docs)?void 0:_WideCurves$parameter3.source)})});var __namedExportsOrder=["TickSize","WideCurves"]},"./packages/annotation/src/typography/lines.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gg:()=>getBracketPositions,MW:()=>getStartToEndAxis,qA:()=>getBracePositions,wT:()=>getLineAbsolutePositions});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),getLineAbsolutePositions=function getLineAbsolutePositions(_ref){var start=_ref.start,end=_ref.end,_ref$units=_ref.units,units=void 0===_ref$units?"view":_ref$units,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?[0,0]:_ref$expansion,scales=_ref.scales,size=_ref.size,xExpansion=scales.x.bandwidth()*expansion[0],yExpansion=scales.y.bandwidth()*expansion[1],lineStart=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.eE7)(start,units,size,scales),lineEnd=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.eE7)(end,units,size,scales);return{lineStart:lineStart=[lineStart[0]-xExpansion,lineStart[1]-yExpansion],lineEnd:lineEnd=[lineEnd[0]+xExpansion,lineEnd[1]+yExpansion]}},getStartToEndAxis=function getStartToEndAxis(start,end){var deltaX=end[0]-start[0],deltaY=end[1]-start[1],theta=Math.atan(-deltaY/deltaX),beta=Math.PI/2-theta,adjustment=deltaX<0?Math.PI:0;return{deltaX,deltaY,cosBeta:Math.cos(beta+adjustment),sinBeta:Math.sin(beta+adjustment)}},getTickPositions=function getTickPositions(start,end,size,cosBeta,sinBeta){return{tickStart:[start[0]+size*cosBeta,start[1]+size*sinBeta],tickEnd:[end[0]+size*cosBeta,end[1]+size*sinBeta]}},getBracketPositions=function getBracketPositions(_ref2){var start=_ref2.start,end=_ref2.end,size=_ref2.size,_getStartToEndAxis=getStartToEndAxis(start,end),cosBeta=_getStartToEndAxis.cosBeta,sinBeta=_getStartToEndAxis.sinBeta,_getTickPositions=getTickPositions(start,end,size,cosBeta,sinBeta);return{tickStart:_getTickPositions.tickStart,lineStart:start,lineEnd:end,tickEnd:_getTickPositions.tickEnd}},getBracePositions=function getBracePositions(_ref3){var start=_ref3.start,end=_ref3.end,pinch=_ref3.pinch,size=_ref3.size,r=_ref3.r,_getStartToEndAxis2=getStartToEndAxis(start,end),deltaX=_getStartToEndAxis2.deltaX,deltaY=_getStartToEndAxis2.deltaY,cosBeta=_getStartToEndAxis2.cosBeta,sinBeta=_getStartToEndAxis2.sinBeta,_getTickPositions2=getTickPositions(start,end,size,cosBeta,sinBeta),tickStart=_getTickPositions2.tickStart,tickEnd=_getTickPositions2.tickEnd,braceStart=[start[0]+r*sinBeta,start[1]-r*cosBeta],braceEnd=[end[0]-r*sinBeta,end[1]+r*cosBeta];pinch=Math.max(0,Math.min(1,pinch));var lineMiddle=[start[0]+pinch*deltaX,start[1]+pinch*deltaY];return{tickStart,braceStart,pinchStart:[lineMiddle[0]-r*sinBeta,lineMiddle[1]+r*cosBeta],lineMiddle,pinchMiddle:[lineMiddle[0]-size*cosBeta,lineMiddle[1]-size*sinBeta],pinchEnd:[lineMiddle[0]+r*sinBeta,lineMiddle[1]-r*cosBeta],braceEnd,tickEnd}}}}]);