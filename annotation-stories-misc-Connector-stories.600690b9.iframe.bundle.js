"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8600],{"./packages/annotation/stories/misc/Connector.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ArcH:()=>ArcH,ArcLeft:()=>ArcLeft,ArcRight:()=>ArcRight,ArcV:()=>ArcV,ElbowEndAbsolute:()=>ElbowEndAbsolute,ElbowEndRelative:()=>ElbowEndRelative,ElbowStartAbsolute:()=>ElbowStartAbsolute,ElbowStartRelative:()=>ElbowStartRelative,HL:()=>HL,LH:()=>LH,LV:()=>LV,Line:()=>Line,Radii:()=>Radii,Smoothing:()=>Smoothing,VL:()=>VL,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Line$parameters,_Line$parameters2,_Line$parameters2$doc,_ArcLeft$parameters,_ArcLeft$parameters2,_ArcLeft$parameters2$,_ArcRight$parameters,_ArcRight$parameters2,_ArcRight$parameters3,_ArcH$parameters,_ArcH$parameters2,_ArcH$parameters2$doc,_ArcV$parameters,_ArcV$parameters2,_ArcV$parameters2$doc,_Radii$parameters,_Radii$parameters2,_Radii$parameters2$do,_HL$parameters,_HL$parameters2,_HL$parameters2$docs,_LH$parameters,_LH$parameters2,_LH$parameters2$docs,_VL$parameters,_VL$parameters2,_VL$parameters2$docs,_LV$parameters,_LV$parameters2,_LV$parameters2$docs,_ElbowStartRelative$p,_ElbowStartRelative$p2,_ElbowStartRelative$p3,_ElbowStartAbsolute$p,_ElbowStartAbsolute$p2,_ElbowStartAbsolute$p3,_ElbowEndRelative$par,_ElbowEndRelative$par2,_ElbowEndRelative$par3,_ElbowEndAbsolute$par,_ElbowEndAbsolute$par2,_ElbowEndAbsolute$par3,_Smoothing$parameters,_Smoothing$parameters2,_Smoothing$parameters3,_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/misc/Connector.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Misc/Connector",component:_src__WEBPACK_IMPORTED_MODULE_1__.w};var ConnectorDecorator=function ConnectorDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[400,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{variant:"inner"}),Story()]})};ConnectorDecorator.displayName="ConnectorDecorator";var coordinates={x1:200,x2:350,y1:50,y2:25},Line={name:"line",args:_extends({variant:"line"},coordinates),decorators:[ConnectorDecorator]},ArcLeft={name:"arc left",args:_extends({variant:"arc-left"},coordinates),decorators:[ConnectorDecorator]},ArcRight={name:"arc right",args:_extends({variant:"arc-right"},coordinates),decorators:[ConnectorDecorator]},ArcH={name:"arc horizontal",args:_extends({variant:"arc-h"},coordinates),decorators:[ConnectorDecorator]},ArcV={name:"arc vertical",args:_extends({variant:"arc-v"},coordinates),decorators:[ConnectorDecorator]},Radii={name:"radii",args:_extends({variant:"arc-right",rx:150,ry:40},coordinates),decorators:[ConnectorDecorator]},HL={name:"horizontal line",args:_extends({variant:"hl"},coordinates),decorators:[ConnectorDecorator]},LH={name:"line horizontal",args:_extends({variant:"lh"},coordinates),decorators:[ConnectorDecorator]},VL={name:"vertical line",args:_extends({variant:"vl"},coordinates),decorators:[ConnectorDecorator]},LV={name:"line vertical",args:_extends({variant:"vl"},coordinates),decorators:[ConnectorDecorator]},ElbowStartRelative={name:"elbow relative",args:_extends({variant:"hl",elbow:.25,elbowUnit:"relative"},coordinates),decorators:[ConnectorDecorator]},ElbowStartAbsolute={name:"elbow absolute",args:_extends({variant:"lh",elbow:20,elbowUnit:"absolute"},coordinates),decorators:[ConnectorDecorator]},ElbowEndRelative={name:"elbow end relative",args:_extends({variant:"lh",elbow:.25,elbowUnit:"relative"},coordinates),decorators:[ConnectorDecorator]},ElbowEndAbsolute={name:"elbow absolute",args:_extends({variant:"lh",elbow:20,elbowUnit:"absolute"},coordinates),decorators:[ConnectorDecorator]},Smoothing={name:"smoothing",args:_extends({variant:"hl",elbow:.9,beta:.85},coordinates),decorators:[ConnectorDecorator]};Line.parameters=_extends({},Line.parameters,{docs:_extends({},null==(_Line$parameters=Line.parameters)?void 0:_Line$parameters.docs,{source:_extends({originalSource:"{\n  name: 'line',\n  args: {\n    variant: 'line',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_Line$parameters2=Line.parameters)||null==(_Line$parameters2$doc=_Line$parameters2.docs)?void 0:_Line$parameters2$doc.source)})}),ArcLeft.parameters=_extends({},ArcLeft.parameters,{docs:_extends({},null==(_ArcLeft$parameters=ArcLeft.parameters)?void 0:_ArcLeft$parameters.docs,{source:_extends({originalSource:"{\n  name: 'arc left',\n  args: {\n    variant: 'arc-left',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_ArcLeft$parameters2=ArcLeft.parameters)||null==(_ArcLeft$parameters2$=_ArcLeft$parameters2.docs)?void 0:_ArcLeft$parameters2$.source)})}),ArcRight.parameters=_extends({},ArcRight.parameters,{docs:_extends({},null==(_ArcRight$parameters=ArcRight.parameters)?void 0:_ArcRight$parameters.docs,{source:_extends({originalSource:"{\n  name: 'arc right',\n  args: {\n    variant: 'arc-right',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_ArcRight$parameters2=ArcRight.parameters)||null==(_ArcRight$parameters3=_ArcRight$parameters2.docs)?void 0:_ArcRight$parameters3.source)})}),ArcH.parameters=_extends({},ArcH.parameters,{docs:_extends({},null==(_ArcH$parameters=ArcH.parameters)?void 0:_ArcH$parameters.docs,{source:_extends({originalSource:"{\n  name: 'arc horizontal',\n  args: {\n    variant: 'arc-h',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_ArcH$parameters2=ArcH.parameters)||null==(_ArcH$parameters2$doc=_ArcH$parameters2.docs)?void 0:_ArcH$parameters2$doc.source)})}),ArcV.parameters=_extends({},ArcV.parameters,{docs:_extends({},null==(_ArcV$parameters=ArcV.parameters)?void 0:_ArcV$parameters.docs,{source:_extends({originalSource:"{\n  name: 'arc vertical',\n  args: {\n    variant: 'arc-v',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_ArcV$parameters2=ArcV.parameters)||null==(_ArcV$parameters2$doc=_ArcV$parameters2.docs)?void 0:_ArcV$parameters2$doc.source)})}),Radii.parameters=_extends({},Radii.parameters,{docs:_extends({},null==(_Radii$parameters=Radii.parameters)?void 0:_Radii$parameters.docs,{source:_extends({originalSource:"{\n  name: 'radii',\n  args: {\n    variant: 'arc-right',\n    rx: 150,\n    ry: 40,\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_Radii$parameters2=Radii.parameters)||null==(_Radii$parameters2$do=_Radii$parameters2.docs)?void 0:_Radii$parameters2$do.source)})}),HL.parameters=_extends({},HL.parameters,{docs:_extends({},null==(_HL$parameters=HL.parameters)?void 0:_HL$parameters.docs,{source:_extends({originalSource:"{\n  name: 'horizontal line',\n  args: {\n    variant: 'hl',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_HL$parameters2=HL.parameters)||null==(_HL$parameters2$docs=_HL$parameters2.docs)?void 0:_HL$parameters2$docs.source)})}),LH.parameters=_extends({},LH.parameters,{docs:_extends({},null==(_LH$parameters=LH.parameters)?void 0:_LH$parameters.docs,{source:_extends({originalSource:"{\n  name: 'line horizontal',\n  args: {\n    variant: 'lh',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_LH$parameters2=LH.parameters)||null==(_LH$parameters2$docs=_LH$parameters2.docs)?void 0:_LH$parameters2$docs.source)})}),VL.parameters=_extends({},VL.parameters,{docs:_extends({},null==(_VL$parameters=VL.parameters)?void 0:_VL$parameters.docs,{source:_extends({originalSource:"{\n  name: 'vertical line',\n  args: {\n    variant: 'vl',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_VL$parameters2=VL.parameters)||null==(_VL$parameters2$docs=_VL$parameters2.docs)?void 0:_VL$parameters2$docs.source)})}),LV.parameters=_extends({},LV.parameters,{docs:_extends({},null==(_LV$parameters=LV.parameters)?void 0:_LV$parameters.docs,{source:_extends({originalSource:"{\n  name: 'line vertical',\n  args: {\n    variant: 'vl',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_LV$parameters2=LV.parameters)||null==(_LV$parameters2$docs=_LV$parameters2.docs)?void 0:_LV$parameters2$docs.source)})}),ElbowStartRelative.parameters=_extends({},ElbowStartRelative.parameters,{docs:_extends({},null==(_ElbowStartRelative$p=ElbowStartRelative.parameters)?void 0:_ElbowStartRelative$p.docs,{source:_extends({originalSource:"{\n  name: 'elbow relative',\n  args: {\n    variant: 'hl',\n    elbow: 0.25,\n    elbowUnit: 'relative',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_ElbowStartRelative$p2=ElbowStartRelative.parameters)||null==(_ElbowStartRelative$p3=_ElbowStartRelative$p2.docs)?void 0:_ElbowStartRelative$p3.source)})}),ElbowStartAbsolute.parameters=_extends({},ElbowStartAbsolute.parameters,{docs:_extends({},null==(_ElbowStartAbsolute$p=ElbowStartAbsolute.parameters)?void 0:_ElbowStartAbsolute$p.docs,{source:_extends({originalSource:"{\n  name: 'elbow absolute',\n  args: {\n    variant: 'lh',\n    elbow: 20,\n    elbowUnit: 'absolute',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_ElbowStartAbsolute$p2=ElbowStartAbsolute.parameters)||null==(_ElbowStartAbsolute$p3=_ElbowStartAbsolute$p2.docs)?void 0:_ElbowStartAbsolute$p3.source)})}),ElbowEndRelative.parameters=_extends({},ElbowEndRelative.parameters,{docs:_extends({},null==(_ElbowEndRelative$par=ElbowEndRelative.parameters)?void 0:_ElbowEndRelative$par.docs,{source:_extends({originalSource:"{\n  name: 'elbow end relative',\n  args: {\n    variant: 'lh',\n    elbow: 0.25,\n    elbowUnit: 'relative',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_ElbowEndRelative$par2=ElbowEndRelative.parameters)||null==(_ElbowEndRelative$par3=_ElbowEndRelative$par2.docs)?void 0:_ElbowEndRelative$par3.source)})}),ElbowEndAbsolute.parameters=_extends({},ElbowEndAbsolute.parameters,{docs:_extends({},null==(_ElbowEndAbsolute$par=ElbowEndAbsolute.parameters)?void 0:_ElbowEndAbsolute$par.docs,{source:_extends({originalSource:"{\n  name: 'elbow absolute',\n  args: {\n    variant: 'lh',\n    elbow: 20,\n    elbowUnit: 'absolute',\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_ElbowEndAbsolute$par2=ElbowEndAbsolute.parameters)||null==(_ElbowEndAbsolute$par3=_ElbowEndAbsolute$par2.docs)?void 0:_ElbowEndAbsolute$par3.source)})}),Smoothing.parameters=_extends({},Smoothing.parameters,{docs:_extends({},null==(_Smoothing$parameters=Smoothing.parameters)?void 0:_Smoothing$parameters.docs,{source:_extends({originalSource:"{\n  name: 'smoothing',\n  args: {\n    variant: 'hl',\n    elbow: 0.9,\n    beta: 0.85,\n    ...coordinates\n  },\n  decorators: [ConnectorDecorator]\n}"},null==(_Smoothing$parameters2=Smoothing.parameters)||null==(_Smoothing$parameters3=_Smoothing$parameters2.docs)?void 0:_Smoothing$parameters3.source)})});var __namedExportsOrder=["Line","ArcLeft","ArcRight","ArcH","ArcV","Radii","HL","LH","VL","LV","ElbowStartRelative","ElbowStartAbsolute","ElbowEndRelative","ElbowEndAbsolute","Smoothing"]},"./packages/annotation/src/misc/Connector.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Connector});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),d3_shape__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/line.js"),d3_shape__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/curve/bundle.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","x1","y1","x2","y2","beta","elbow","elbowUnit","className"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var elbowCoordinate=function elbowCoordinate(start,end,elbow,relative){return relative?start+elbow*(end-start):(end>start?Math.min:Math.max)(end,start+Math.sign(end-start)*elbow)},Connector=function Connector(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"line":_ref$variant,x1=_ref.x1,y1=_ref.y1,x2=_ref.x2,y2=_ref.y2,beta=_ref.beta,_ref$elbow=_ref.elbow,elbow=void 0===_ref$elbow?.5:_ref$elbow,_ref$elbowUnit=_ref.elbowUnit,elbowUnit=void 0===_ref$elbowUnit?"relative":_ref$elbowUnit,className=_ref.className,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),generator=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,d3_shape__WEBPACK_IMPORTED_MODULE_2__.Z)().curve(d3_shape__WEBPACK_IMPORTED_MODULE_3__.Z.beta(null!=beta?beta:0))}),[beta]),relative="relative"===elbowUnit,elbowPosition=[x1,y1];"hl"===variant?elbowPosition=[elbowCoordinate(x1,x2,elbow,relative),y1]:"lh"===variant?elbowPosition=[elbowCoordinate(x2,x1,elbow,relative),y2]:"vl"===variant?elbowPosition=[x1,elbowCoordinate(y1,y2,elbow,relative)]:"lv"===variant&&(elbowPosition=[x2,elbowCoordinate(y2,y1,elbow,relative)]);var _generator,d="";void 0===beta?d=["M",x1,y1,"L",elbowPosition[_chsk_core__WEBPACK_IMPORTED_MODULE_4__.X],elbowPosition[_chsk_core__WEBPACK_IMPORTED_MODULE_4__.Y],"L",x2,y2].join(" "):d=null!=(_generator=generator([[x1,y1],elbowPosition,[x2,y2]]))?_generator:"";var compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_4__.gjB)("connector",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.y$t,_extends({d},props,{className:compositeClassName}))};Connector.displayName="Connector";try{Connector.displayName="Connector",Connector.__docgenInfo={description:"",displayName:"Connector",props:{variant:{defaultValue:{value:"line"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"hl"'},{value:'"lh"'},{value:'"vl"'},{value:'"lv"'}]}},beta:{defaultValue:null,description:"smoothing parameter",name:"beta",required:!1,type:{name:"number"}},elbow:{defaultValue:{value:"0.5"},description:"position of elbow in segmented lines",name:"elbow",required:!1,type:{name:"number"}},elbowUnit:{defaultValue:{value:"relative"},description:"unit for elbow position",name:"elbowUnit",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'}]}},x1:{defaultValue:null,description:"starting x coordinate",name:"x1",required:!0,type:{name:"number"}},y1:{defaultValue:null,description:"starting y coordinate",name:"y1",required:!0,type:{name:"number"}},x2:{defaultValue:null,description:"ending x coordinate",name:"x2",required:!0,type:{name:"number"}},y2:{defaultValue:null,description:"ending y coordinate",name:"y2",required:!0,type:{name:"number"}},markerStart:{defaultValue:null,description:"identifier for start marker",name:"markerStart",required:!1,type:{name:"string"}},markerEnd:{defaultValue:null,description:"identifier for end marker",name:"markerEnd",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/misc/Connector.tsx#Connector"]={docgenInfo:Connector.__docgenInfo,name:"Connector",path:"packages/annotation/src/misc/Connector.tsx#Connector"})}catch(__react_docgen_typescript_loader_error){}}}]);