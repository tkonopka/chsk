"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[939],{"./packages/annotation/stories/flowchart/ArcArrow.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomStyle:()=>CustomStyle,DoubleSided:()=>DoubleSided,Left:()=>Left,Narrow:()=>Narrow,Right:()=>Right,Wide:()=>Wide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ArcArrow_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),arrows=__webpack_require__("./packages/annotation/src/flowchart/arrows.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","start","end","units","heads","headWidth","headLength","stemWidth","r"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ArcArrow=function ArcArrow(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"left":_ref$variant,start=_ref.start,end=_ref.end,_ref$units=_ref.units,units=void 0===_ref$units?"view":_ref$units,_ref$heads=_ref.heads,heads=void 0===_ref$heads?[!1,!0]:_ref$heads,_ref$headWidth=_ref.headWidth,headWidth=void 0===_ref$headWidth?20:_ref$headWidth,_ref$headLength=_ref.headLength,headLength=void 0===_ref$headLength?14:_ref$headLength,_ref$stemWidth=_ref.stemWidth,stemWidth=void 0===_ref$stemWidth?8:_ref$stemWidth,r=_ref.r,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),size=(0,chsk_core_es.Bs9)().size,scales=(0,chsk_core_es.kE1)().scales,lineStart=(0,chsk_core_es.eE7)(start,units,size,scales),lineEnd=(0,chsk_core_es.eE7)(end,units,size,scales),path=(0,arrows.cD)({start:lineStart,end:lineEnd,heads,headWidth,headLength,stemWidth,r,variant});return(0,jsx_runtime.jsx)(chsk_core_es.y$t,_extends({variant:"arc-arrow",d:path},props))};ArcArrow.displayName="ArcArrow";try{ArcArrow.displayName="ArcArrow",ArcArrow.__docgenInfo={description:"",displayName:"ArcArrow",props:{variant:{defaultValue:{value:"left"},description:"handedness of arc curvature",name:"variant",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},r:{defaultValue:null,description:"radius of arc",name:"r",required:!1,type:{name:"number"}},start:{defaultValue:null,description:"start position",name:"start",required:!0,type:{name:"PositionSpec"}},end:{defaultValue:null,description:"end position",name:"end",required:!0,type:{name:"PositionSpec"}},units:{defaultValue:{value:"view"},description:"units for start and end positions",name:"units",required:!1,type:{name:"PositionUnits"}},heads:{defaultValue:{value:"[false, true]"},description:"toggling arrow heads at the start and end positions",name:"heads",required:!1,type:{name:"[boolean, boolean]"}},stemWidth:{defaultValue:{value:"8"},description:"width/thickness of arrow stem",name:"stemWidth",required:!1,type:{name:"number"}},headWidth:{defaultValue:{value:"20"},description:"width of arrowhead (orthogonal to arrow axis)",name:"headWidth",required:!1,type:{name:"number"}},headLength:{defaultValue:{value:"14"},description:"length of arrowhead (along arrow axis)",name:"headLength",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/flowchart/ArcArrow.tsx#ArcArrow"]={docgenInfo:ArcArrow.__docgenInfo,name:"ArcArrow",path:"packages/annotation/src/flowchart/ArcArrow.tsx#ArcArrow"})}catch(__react_docgen_typescript_loader_error){}var _Narrow$parameters,_Narrow$parameters2,_Narrow$parameters2$d,_Wide$parameters,_Wide$parameters2,_Wide$parameters2$doc,_Left$parameters,_Left$parameters2,_Left$parameters2$doc,_Right$parameters,_Right$parameters2,_Right$parameters2$do,_DoubleSided$paramete,_DoubleSided$paramete2,_DoubleSided$paramete3,_CustomStyle$paramete,_CustomStyle$paramete2,_CustomStyle$paramete3,decorators=__webpack_require__("./packages/annotation/stories/decorators.tsx");function ArcArrow_stories_extends(){return ArcArrow_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},ArcArrow_stories_extends.apply(this,arguments)}const ArcArrow_stories={title:"Addons/Annotation/Flowchart/ArcArrow",component:ArcArrow};var Narrow={name:"narrow",args:{start:[50,160],end:[200,60],units:"absolute",stemWidth:10,headWidth:30,headLength:40,style:{fillOpacity:1}},decorators:[decorators.ee]},Wide={name:"wide",args:{start:[50,160],end:[200,60],units:"absolute",stemWidth:40,headWidth:60,headLength:20,style:{fillOpacity:1}},decorators:[decorators.ee]},Left={name:"left",args:{start:[50,160],end:[200,60],units:"absolute",variant:"left",r:400,style:{fillOpacity:1}},decorators:[decorators.ee]},Right={name:"right",args:{start:[50,160],end:[200,60],units:"absolute",variant:"right",r:400,style:{fillOpacity:1}},decorators:[decorators.ee]},DoubleSided={name:"double sided",args:{start:[50,160],end:[200,60],units:"absolute",heads:[!0,!0],variant:"left",r:400,style:{fillOpacity:1}},decorators:[decorators.ee]},CustomStyle={name:"custom style",args:{start:[50,160],end:[200,60],units:"absolute",variant:"left",r:400,style:{strokeWidth:2,stroke:"#dd0000",fill:"#dd7777",fillOpacity:1}},decorators:[decorators.ee]};Narrow.parameters=ArcArrow_stories_extends({},Narrow.parameters,{docs:ArcArrow_stories_extends({},null==(_Narrow$parameters=Narrow.parameters)?void 0:_Narrow$parameters.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'narrow',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    stemWidth: 10,\n    headWidth: 30,\n    headLength: 40,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Narrow$parameters2=Narrow.parameters)||null==(_Narrow$parameters2$d=_Narrow$parameters2.docs)?void 0:_Narrow$parameters2$d.source)})}),Wide.parameters=ArcArrow_stories_extends({},Wide.parameters,{docs:ArcArrow_stories_extends({},null==(_Wide$parameters=Wide.parameters)?void 0:_Wide$parameters.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'wide',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    stemWidth: 40,\n    headWidth: 60,\n    headLength: 20,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Wide$parameters2=Wide.parameters)||null==(_Wide$parameters2$doc=_Wide$parameters2.docs)?void 0:_Wide$parameters2$doc.source)})}),Left.parameters=ArcArrow_stories_extends({},Left.parameters,{docs:ArcArrow_stories_extends({},null==(_Left$parameters=Left.parameters)?void 0:_Left$parameters.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'left',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    variant: 'left',\n    r: 400,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Left$parameters2=Left.parameters)||null==(_Left$parameters2$doc=_Left$parameters2.docs)?void 0:_Left$parameters2$doc.source)})}),Right.parameters=ArcArrow_stories_extends({},Right.parameters,{docs:ArcArrow_stories_extends({},null==(_Right$parameters=Right.parameters)?void 0:_Right$parameters.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'right',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    variant: 'right',\n    r: 400,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Right$parameters2=Right.parameters)||null==(_Right$parameters2$do=_Right$parameters2.docs)?void 0:_Right$parameters2$do.source)})}),DoubleSided.parameters=ArcArrow_stories_extends({},DoubleSided.parameters,{docs:ArcArrow_stories_extends({},null==(_DoubleSided$paramete=DoubleSided.parameters)?void 0:_DoubleSided$paramete.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'double sided',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    heads: [true, true],\n    variant: 'left',\n    r: 400,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_DoubleSided$paramete2=DoubleSided.parameters)||null==(_DoubleSided$paramete3=_DoubleSided$paramete2.docs)?void 0:_DoubleSided$paramete3.source)})}),CustomStyle.parameters=ArcArrow_stories_extends({},CustomStyle.parameters,{docs:ArcArrow_stories_extends({},null==(_CustomStyle$paramete=CustomStyle.parameters)?void 0:_CustomStyle$paramete.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'custom style',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    variant: 'left',\n    r: 400,\n    style: {\n      strokeWidth: 2,\n      stroke: '#dd0000',\n      fill: '#dd7777',\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_CustomStyle$paramete2=CustomStyle.parameters)||null==(_CustomStyle$paramete3=_CustomStyle$paramete2.docs)?void 0:_CustomStyle$paramete3.source)})});var __namedExportsOrder=["Narrow","Wide","Left","Right","DoubleSided","CustomStyle"]},"./packages/annotation/src/flowchart/arrows.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cD:()=>getArcArrowPath,cY:()=>getBlockArrowPath});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_typography_lines__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/typography/lines.ts"),translatePoints=function translatePoints(points,translate){return points.map((function(point){return[point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]+translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]]}))},rotateAndTranslatePoints=function rotateAndTranslatePoints(points,translate,cosAngle,sinAngle){return points.map((function(point){return[translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-(cosAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+sinAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]),translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-(sinAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-cosAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])]}))},stemPoints=function stemPoints(halfStemWidth){return 0===halfStemWidth?[[0,0]]:[[-halfStemWidth,0],[halfStemWidth,0]]},headPoints=function headPoints(halfStemWidth,halfHeadWidth,headLength){return[[-halfStemWidth,-headLength],[-halfHeadWidth,-headLength],[0,0],[halfHeadWidth,-headLength],[halfStemWidth,-headLength]]},getClosedPath=function getClosedPath(points){return"M"+(points[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+","+points[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])+points.slice(1).map((function(point){return"L"+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+","+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]})).join("")+"Z"},getBlockArrowPath=function getBlockArrowPath(props){var points=function getBlockArrowPoints(_ref){var start=_ref.start,end=_ref.end,heads=_ref.heads,headWidth=_ref.headWidth,headLength=_ref.headLength,stemWidth=_ref.stemWidth,_getStartToEndAxis=(0,_typography_lines__WEBPACK_IMPORTED_MODULE_1__.MW)(start,end),deltaX=_getStartToEndAxis.deltaX,deltaY=_getStartToEndAxis.deltaY,cosBeta=_getStartToEndAxis.cosBeta,sinBeta=_getStartToEndAxis.sinBeta,halfLength=Math.sqrt(deltaX*deltaX+deltaY*deltaY)/2,halfStemWidth=stemWidth/2,halfHeadWidth=headWidth/2,pointsA=heads[0]?headPoints(halfStemWidth,halfHeadWidth,headLength):stemPoints(halfStemWidth),pointsB=heads[1]?headPoints(-halfStemWidth,-halfHeadWidth,-headLength):stemPoints(-halfStemWidth),result=translatePoints(pointsA,[0,halfLength]).concat(translatePoints(pointsB,[0,-halfLength])).map((function(point){return[point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-halfLength]}));return rotateAndTranslatePoints(result,start,cosBeta,sinBeta)}(props);return getClosedPath(points)},getTangent=function getTangent(center,position,variant){void 0===variant&&(variant="left");var deltaX=position[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-center[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],deltaY=position[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-center[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],angle=(Math.atan(deltaY/deltaX)+(deltaX<0?Math.PI:0)+("left"===variant?0:-Math.PI)+2*Math.PI)%(2*Math.PI);return{angle,cosAngle:Math.cos(angle),sinAngle:Math.sin(angle)}},getArcArrowPath=function getArcArrowPath(_ref2){var start=_ref2.start,end=_ref2.end,heads=_ref2.heads,headWidth=_ref2.headWidth,headLength=_ref2.headLength,stemWidth=_ref2.stemWidth,r=_ref2.r,_ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"right":_ref2$variant,halfStemWidth=stemWidth/2,halfHeadWidth=headWidth/2,pointsStart=heads[0]?headPoints(halfStemWidth,halfHeadWidth,headLength):stemPoints(0),pointsEnd=heads[1]?headPoints(-halfStemWidth,-halfHeadWidth,-headLength):stemPoints(0);if(void 0===r){var _getStartToEndAxis2=(0,_typography_lines__WEBPACK_IMPORTED_MODULE_1__.MW)(start,end),deltaX=_getStartToEndAxis2.deltaX,deltaY=_getStartToEndAxis2.deltaY,cosBeta=_getStartToEndAxis2.cosBeta,sinBeta=_getStartToEndAxis2.sinBeta,halfLength=Math.sqrt(deltaX*deltaX+deltaY*deltaY)/2,rawPoints=translatePoints(pointsStart,[0,halfLength]).concat(translatePoints(pointsEnd,[0,-halfLength])).map((function(point){return[point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-halfLength]})),points=rotateAndTranslatePoints(rawPoints,start,cosBeta,sinBeta);return getClosedPath(points)}var center=function getCenter(start,end,r,variant){var deltaX=end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],deltaY=end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],theta=Math.atan(-deltaY/deltaX),mid=[(start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X])/2,(start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]+end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])/2],eta=theta+(deltaX<0?Math.PI:0)+("left"===variant?Math.PI/2:-Math.PI/2);return[mid[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+r*Math.cos(eta),mid[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-r*Math.sin(eta)]}(start,end,r,variant),_getTangent=getTangent(center,start,variant),startCosBeta=_getTangent.cosAngle,startSinBeta=_getTangent.sinAngle,_getTangent2=getTangent(center,end,variant),endCosBeta=_getTangent2.cosAngle,endSinBeta=_getTangent2.sinAngle,transformedStart=rotateAndTranslatePoints(pointsStart,start,startCosBeta,startSinBeta),transformedEnd=rotateAndTranslatePoints(pointsEnd,end,endCosBeta,endSinBeta),pStart0=transformedStart[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+" "+transformedStart[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],pEnd0=transformedEnd[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+" "+transformedEnd[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],result=["M"+pStart0];transformedStart.slice(1).forEach((function(point){return result.push("L "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+" "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])}));var startSweep="left"===variant?0:1;result.push("A "+r+" "+r+" 0 0 "+startSweep+" "+pEnd0),transformedEnd.slice(1).forEach((function(point){return result.push("L "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+" "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])}));var endSweep="left"===variant?1:0;return result.push("A "+r+" "+r+" 0 0 "+endSweep+" "+pStart0),result.join("")}}}]);