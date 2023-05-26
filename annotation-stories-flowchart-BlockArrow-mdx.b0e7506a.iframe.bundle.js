"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7359,3392],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/flowchart/BlockArrow.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CssStyle:()=>CssStyle,DoubleSided:()=>DoubleSided,Filter:()=>Filter,Gradient:()=>Gradient,Narrow:()=>Narrow,Wide:()=>Wide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BlockArrow_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),arrows=__webpack_require__("./packages/annotation/src/flowchart/arrows.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["start","end","units","heads","headWidth","headLength","stemWidth"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var BlockArrow=function BlockArrow(_ref){var start=_ref.start,end=_ref.end,_ref$units=_ref.units,units=void 0===_ref$units?"view":_ref$units,_ref$heads=_ref.heads,heads=void 0===_ref$heads?[!1,!0]:_ref$heads,_ref$headWidth=_ref.headWidth,headWidth=void 0===_ref$headWidth?20:_ref$headWidth,_ref$headLength=_ref.headLength,headLength=void 0===_ref$headLength?14:_ref$headLength,_ref$stemWidth=_ref.stemWidth,stemWidth=void 0===_ref$stemWidth?8:_ref$stemWidth,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),size=(0,chsk_core_es.Bs9)().size,scales=(0,chsk_core_es.kE1)().scales,lineStart=(0,chsk_core_es.eE7)(start,units,size,scales),lineEnd=(0,chsk_core_es.eE7)(end,units,size,scales),path=(0,arrows.cY)({start:lineStart,end:lineEnd,heads,headWidth,headLength,stemWidth});return(0,jsx_runtime.jsx)(chsk_core_es.y$t,_extends({variant:"block-arrow",d:path},props))};BlockArrow.displayName="BlockArrow";try{BlockArrow.displayName="BlockArrow",BlockArrow.__docgenInfo={description:"",displayName:"BlockArrow",props:{start:{defaultValue:null,description:"start position",name:"start",required:!0,type:{name:"PositionSpec"}},end:{defaultValue:null,description:"end position",name:"end",required:!0,type:{name:"PositionSpec"}},units:{defaultValue:{value:"view"},description:"units for start and end positions",name:"units",required:!1,type:{name:"PositionUnits"}},heads:{defaultValue:{value:"[false, true]"},description:"toggling arrow heads at the start and end positions",name:"heads",required:!1,type:{name:"[boolean, boolean]"}},stemWidth:{defaultValue:{value:"8"},description:"width/thickness of arrow stem",name:"stemWidth",required:!1,type:{name:"number"}},headWidth:{defaultValue:{value:"20"},description:"width of arrowhead (orthogonal to arrow axis)",name:"headWidth",required:!1,type:{name:"number"}},headLength:{defaultValue:{value:"14"},description:"length of arrowhead (along arrow axis)",name:"headLength",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/flowchart/BlockArrow.tsx#BlockArrow"]={docgenInfo:BlockArrow.__docgenInfo,name:"BlockArrow",path:"packages/annotation/src/flowchart/BlockArrow.tsx#BlockArrow"})}catch(__react_docgen_typescript_loader_error){}var _Narrow$parameters,_Narrow$parameters2,_Narrow$parameters2$d,_Wide$parameters,_Wide$parameters2,_Wide$parameters2$doc,_DoubleSided$paramete,_DoubleSided$paramete2,_DoubleSided$paramete3,_CssStyle$parameters,_CssStyle$parameters2,_CssStyle$parameters3,_Gradient$parameters,_Gradient$parameters2,_Gradient$parameters3,_Filter$parameters,_Filter$parameters2,_Filter$parameters2$d,InsetShadowFilter=__webpack_require__("./packages/annotation/src/filters/InsetShadowFilter.tsx"),decorators=__webpack_require__("./packages/annotation/stories/decorators.tsx");function BlockArrow_stories_extends(){return BlockArrow_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},BlockArrow_stories_extends.apply(this,arguments)}const BlockArrow_stories={title:"Addons/Annotation/Flowchart/BlockArrow",component:BlockArrow};var Narrow={name:"narrow",args:{start:[50,160],end:[200,60],units:"absolute",stemWidth:10,headWidth:30,headLength:40,style:{fillOpacity:1}},decorators:[decorators.ee]},Wide={name:"wide",args:{start:[50,160],end:[200,60],units:"absolute",stemWidth:40,headWidth:60,headLength:20,style:{fillOpacity:1}},decorators:[decorators.ee]},DoubleSided={name:"double sided",args:{start:[50,160],end:[200,60],units:"absolute",heads:[!0,!0],style:{fillOpacity:1}},decorators:[decorators.ee]},CssStyle={name:"css style",args:{start:[50,160],end:[200,60],units:"absolute",stemWidth:12,style:{strokeWidth:2,stroke:"#dd0000",fill:"#dd7777",fillOpacity:1}},decorators:[decorators.ee]},Gradient={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(chsk_core_es.oas,{id:"arrow-gradient",start:[0,1],end:[1,.333],stops:["#dd000000","#dd0000ff"],offsets:[.05,.4]})}),(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsx)(BlockArrow,{stemWidth:12,start:[50,160],end:[200,60],units:"absolute",style:{fill:"url(#arrow-gradient)",strokeWidth:0,fillOpacity:1}})]})},name:"gradient"},Filter={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(InsetShadowFilter.O,{id:"arrow-shadow",blurStdDeviation:6,floodOpacity:.95}),(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsx)(BlockArrow,{stemWidth:32,headWidth:16,start:[50,160],end:[200,60],units:"absolute",style:{fill:"#dd0000",fillOpacity:1,filter:"url(#arrow-shadow)",strokeWidth:0}})]})},name:"filter"};Narrow.parameters=BlockArrow_stories_extends({},Narrow.parameters,{docs:BlockArrow_stories_extends({},null==(_Narrow$parameters=Narrow.parameters)?void 0:_Narrow$parameters.docs,{source:BlockArrow_stories_extends({originalSource:"{\n  name: 'narrow',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    stemWidth: 10,\n    headWidth: 30,\n    headLength: 40,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Narrow$parameters2=Narrow.parameters)||null==(_Narrow$parameters2$d=_Narrow$parameters2.docs)?void 0:_Narrow$parameters2$d.source)})}),Wide.parameters=BlockArrow_stories_extends({},Wide.parameters,{docs:BlockArrow_stories_extends({},null==(_Wide$parameters=Wide.parameters)?void 0:_Wide$parameters.docs,{source:BlockArrow_stories_extends({originalSource:"{\n  name: 'wide',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    stemWidth: 40,\n    headWidth: 60,\n    headLength: 20,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Wide$parameters2=Wide.parameters)||null==(_Wide$parameters2$doc=_Wide$parameters2.docs)?void 0:_Wide$parameters2$doc.source)})}),DoubleSided.parameters=BlockArrow_stories_extends({},DoubleSided.parameters,{docs:BlockArrow_stories_extends({},null==(_DoubleSided$paramete=DoubleSided.parameters)?void 0:_DoubleSided$paramete.docs,{source:BlockArrow_stories_extends({originalSource:"{\n  name: 'double sided',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    heads: [true, true],\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_DoubleSided$paramete2=DoubleSided.parameters)||null==(_DoubleSided$paramete3=_DoubleSided$paramete2.docs)?void 0:_DoubleSided$paramete3.source)})}),CssStyle.parameters=BlockArrow_stories_extends({},CssStyle.parameters,{docs:BlockArrow_stories_extends({},null==(_CssStyle$parameters=CssStyle.parameters)?void 0:_CssStyle$parameters.docs,{source:BlockArrow_stories_extends({originalSource:"{\n  name: 'css style',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    stemWidth: 12,\n    style: {\n      strokeWidth: 2,\n      stroke: '#dd0000',\n      fill: '#dd7777',\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_CssStyle$parameters2=CssStyle.parameters)||null==(_CssStyle$parameters3=_CssStyle$parameters2.docs)?void 0:_CssStyle$parameters3.source)})}),Gradient.parameters=BlockArrow_stories_extends({},Gradient.parameters,{docs:BlockArrow_stories_extends({},null==(_Gradient$parameters=Gradient.parameters)?void 0:_Gradient$parameters.docs,{source:BlockArrow_stories_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{\n    display: 'inline-block'\n  }}>\n            <defs>\n                <LinearGradient id=\"arrow-gradient\" start={[0, 1]} end={[1, 0.333]} stops={['#dd000000', '#dd0000ff']} offsets={[0.05, 0.4]} />\n            </defs>\n            <Surface variant={'inner'} />\n            <BlockArrow stemWidth={12} start={[50, 160]} end={[200, 60]} units={'absolute'} style={{\n      fill: 'url(#arrow-gradient)',\n      strokeWidth: 0,\n      fillOpacity: 1\n    }} />\n        </Chart>,\n  name: 'gradient'\n}"},null==(_Gradient$parameters2=Gradient.parameters)||null==(_Gradient$parameters3=_Gradient$parameters2.docs)?void 0:_Gradient$parameters3.source)})}),Filter.parameters=BlockArrow_stories_extends({},Filter.parameters,{docs:BlockArrow_stories_extends({},null==(_Filter$parameters=Filter.parameters)?void 0:_Filter$parameters.docs,{source:BlockArrow_stories_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{\n    display: 'inline-block'\n  }}>\n            <InsetShadowFilter id={'arrow-shadow'} blurStdDeviation={6} floodOpacity={0.95} />\n            <Surface variant={'inner'} />\n            <BlockArrow stemWidth={32} headWidth={16} start={[50, 160]} end={[200, 60]} units={'absolute'} style={{\n      fill: '#dd0000',\n      fillOpacity: 1,\n      filter: 'url(#arrow-shadow)',\n      strokeWidth: 0\n    }} />\n        </Chart>,\n  name: 'filter'\n}"},null==(_Filter$parameters2=Filter.parameters)||null==(_Filter$parameters2$d=_Filter$parameters2.docs)?void 0:_Filter$parameters2$d.source)})});var __namedExportsOrder=["Narrow","Wide","DoubleSided","CssStyle","Gradient","Filter"]},"./packages/annotation/src/filters/InsetShadowFilter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>InsetShadowFilter});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),InsetShadowFilter=function InsetShadowFilter(_ref){var id=_ref.id,_ref$blurStdDeviation=_ref.blurStdDeviation,blurStdDeviation=void 0===_ref$blurStdDeviation?5:_ref$blurStdDeviation,_ref$floodColor=_ref.floodColor,floodColor=void 0===_ref$floodColor?"#000000":_ref$floodColor,_ref$floodOpacity=_ref.floodOpacity,floodOpacity=void 0===_ref$floodOpacity?.9:_ref$floodOpacity;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter",{id,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur",{stdDeviation:blurStdDeviation,result:id+"-blur"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"out",in:"SourceGraphic",in2:id+"-blur",result:id+"-inverse"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood",{floodColor,floodOpacity,result:id+"-color"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"in",in:id+"-color",in2:id+"-inverse",result:id+"-shadow"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"over",in:id+"-shadow",in2:"SourceGraphic"})]})};InsetShadowFilter.displayName="InsetShadowFilter";try{InsetShadowFilter.displayName="InsetShadowFilter",InsetShadowFilter.__docgenInfo={description:"",displayName:"InsetShadowFilter",props:{blurStdDeviation:{defaultValue:{value:"5"},description:"",name:"blurStdDeviation",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.9"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/InsetShadowFilter.tsx#InsetShadowFilter"]={docgenInfo:InsetShadowFilter.__docgenInfo,name:"InsetShadowFilter",path:"packages/annotation/src/filters/InsetShadowFilter.tsx#InsetShadowFilter"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/src/flowchart/arrows.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cD:()=>getArcArrowPath,cY:()=>getBlockArrowPath});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_typography_lines__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/typography/lines.ts"),translatePoints=function translatePoints(points,translate){return points.map((function(point){return[point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]+translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]]}))},rotateAndTranslatePoints=function rotateAndTranslatePoints(points,translate,cosAngle,sinAngle){return points.map((function(point){return[translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-(cosAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+sinAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]),translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-(sinAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-cosAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])]}))},stemPoints=function stemPoints(halfStemWidth){return 0===halfStemWidth?[[0,0]]:[[-halfStemWidth,0],[halfStemWidth,0]]},headPoints=function headPoints(halfStemWidth,halfHeadWidth,headLength){return[[-halfStemWidth,-headLength],[-halfHeadWidth,-headLength],[0,0],[halfHeadWidth,-headLength],[halfStemWidth,-headLength]]},getClosedPath=function getClosedPath(points){return"M"+(points[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+","+points[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])+points.slice(1).map((function(point){return"L"+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+","+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]})).join("")+"Z"},getBlockArrowPath=function getBlockArrowPath(props){var points=function getBlockArrowPoints(_ref){var start=_ref.start,end=_ref.end,heads=_ref.heads,headWidth=_ref.headWidth,headLength=_ref.headLength,stemWidth=_ref.stemWidth,_getStartToEndAxis=(0,_typography_lines__WEBPACK_IMPORTED_MODULE_1__.MW)(start,end),deltaX=_getStartToEndAxis.deltaX,deltaY=_getStartToEndAxis.deltaY,cosBeta=_getStartToEndAxis.cosBeta,sinBeta=_getStartToEndAxis.sinBeta,halfLength=Math.sqrt(deltaX*deltaX+deltaY*deltaY)/2,halfStemWidth=stemWidth/2,halfHeadWidth=headWidth/2,pointsA=heads[0]?headPoints(halfStemWidth,halfHeadWidth,headLength):stemPoints(halfStemWidth),pointsB=heads[1]?headPoints(-halfStemWidth,-halfHeadWidth,-headLength):stemPoints(-halfStemWidth),result=translatePoints(pointsA,[0,halfLength]).concat(translatePoints(pointsB,[0,-halfLength])).map((function(point){return[point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-halfLength]}));return rotateAndTranslatePoints(result,start,cosBeta,sinBeta)}(props);return getClosedPath(points)},getTangent=function getTangent(center,position,variant){void 0===variant&&(variant="left");var deltaX=position[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-center[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],deltaY=position[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-center[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],angle=(Math.atan(deltaY/deltaX)+(deltaX<0?Math.PI:0)+("left"===variant?0:-Math.PI)+2*Math.PI)%(2*Math.PI);return{angle,cosAngle:Math.cos(angle),sinAngle:Math.sin(angle)}},getArcArrowPath=function getArcArrowPath(_ref2){var start=_ref2.start,end=_ref2.end,heads=_ref2.heads,headWidth=_ref2.headWidth,headLength=_ref2.headLength,stemWidth=_ref2.stemWidth,r=_ref2.r,_ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"right":_ref2$variant,halfStemWidth=stemWidth/2,halfHeadWidth=headWidth/2,pointsStart=heads[0]?headPoints(halfStemWidth,halfHeadWidth,headLength):stemPoints(0),pointsEnd=heads[1]?headPoints(-halfStemWidth,-halfHeadWidth,-headLength):stemPoints(0);if(void 0===r){var _getStartToEndAxis2=(0,_typography_lines__WEBPACK_IMPORTED_MODULE_1__.MW)(start,end),deltaX=_getStartToEndAxis2.deltaX,deltaY=_getStartToEndAxis2.deltaY,cosBeta=_getStartToEndAxis2.cosBeta,sinBeta=_getStartToEndAxis2.sinBeta,halfLength=Math.sqrt(deltaX*deltaX+deltaY*deltaY)/2,rawPoints=translatePoints(pointsStart,[0,halfLength]).concat(translatePoints(pointsEnd,[0,-halfLength])).map((function(point){return[point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-halfLength]})),points=rotateAndTranslatePoints(rawPoints,start,cosBeta,sinBeta);return getClosedPath(points)}var center=function getCenter(start,end,r,variant){var deltaX=end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],deltaY=end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],theta=Math.atan(-deltaY/deltaX),mid=[(start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X])/2,(start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]+end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])/2],eta=theta+(deltaX<0?Math.PI:0)+("left"===variant?Math.PI/2:-Math.PI/2);return[mid[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+r*Math.cos(eta),mid[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-r*Math.sin(eta)]}(start,end,r,variant),_getTangent=getTangent(center,start,variant),startCosBeta=_getTangent.cosAngle,startSinBeta=_getTangent.sinAngle,_getTangent2=getTangent(center,end,variant),endCosBeta=_getTangent2.cosAngle,endSinBeta=_getTangent2.sinAngle,transformedStart=rotateAndTranslatePoints(pointsStart,start,startCosBeta,startSinBeta),transformedEnd=rotateAndTranslatePoints(pointsEnd,end,endCosBeta,endSinBeta),pStart0=transformedStart[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+" "+transformedStart[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],pEnd0=transformedEnd[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+" "+transformedEnd[0][_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],result=["M"+pStart0];transformedStart.slice(1).forEach((function(point){return result.push("L "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+" "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])}));var startSweep="left"===variant?0:1;result.push("A "+r+" "+r+" 0 0 "+startSweep+" "+pEnd0),transformedEnd.slice(1).forEach((function(point){return result.push("L "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+" "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])}));var endSweep="left"===variant?1:0;return result.push("A "+r+" "+r+" 0 0 "+endSweep+" "+pStart0),result.join("")}},"./packages/annotation/stories/flowchart/BlockArrow.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_BlockArrow_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/annotation/stories/flowchart/BlockArrow.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_BlockArrow_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"blockarrow",children:"BlockArrow"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BlockArrow"})," displays a thick arrow."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_BlockArrow_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"arrow-shape",children:"Arrow shape"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The shape of the arrow is determined by props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"stemWidth"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"headWidth"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"headLength"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BlockArrow_stories__WEBPACK_IMPORTED_MODULE_4__.Narrow}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BlockArrow_stories__WEBPACK_IMPORTED_MODULE_4__.Wide}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"arrow-heads",children:"Arrow heads"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BlockArrow"})," creates a shape that is blunt at the start position and has an arrowhead at the end position.\nArrowheads can be configured at each side via prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"heads"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BlockArrow_stories__WEBPACK_IMPORTED_MODULE_4__.DoubleSided}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Arrows can be styled using css, including with gradients and filters."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BlockArrow_stories__WEBPACK_IMPORTED_MODULE_4__.CssStyle}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BlockArrow_stories__WEBPACK_IMPORTED_MODULE_4__.Gradient}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BlockArrow_stories__WEBPACK_IMPORTED_MODULE_4__.Filter})]})}}}}]);