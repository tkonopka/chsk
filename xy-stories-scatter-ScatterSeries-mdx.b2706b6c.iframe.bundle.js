"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7409,4509],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/xy/stories/scatter/ScatterSeries.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AreaCurveAndPoints:()=>AreaCurveAndPoints,CurveAndPoints:()=>CurveAndPoints,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ScatterSeries_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),ScatterPoints=__webpack_require__("./packages/xy/src/scatter/ScatterPoints.tsx"),ScatterCurve=__webpack_require__("./packages/xy/src/scatter/ScatterCurve.tsx"),ScatterArea=__webpack_require__("./packages/xy/src/scatter/ScatterArea.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","baseline","layers","curve","symbol","areaStyle","curveStyle","symbolStyle"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ScatterSeries=function ScatterSeries(_ref){var ids=_ref.ids,_ref$baseline=_ref.baseline,baseline=void 0===_ref$baseline?0:_ref$baseline,_ref$layers=_ref.layers,layers=void 0===_ref$layers?["area","curve","points"]:_ref$layers,_ref$curve=_ref.curve,curve=void 0===_ref$curve?"Linear":_ref$curve,symbol=_ref.symbol,areaStyle=_ref.areaStyle,curveStyle=_ref.curveStyle,symbolStyle=_ref.symbolStyle,commonProps=_extends({curve},function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded)),result=layers.map((function(layer){return"points"===layer?(0,jsx_runtime.jsx)(ScatterPoints.c,_extends({ids},commonProps,{symbol,symbolStyle}),"points"):"curve"===layer?(0,jsx_runtime.jsx)(ScatterCurve.n,_extends({ids},commonProps,{style:curveStyle}),"curve"):"area"===layer?(0,jsx_runtime.jsx)(ScatterArea.c,_extends({ids},commonProps,{baseline,style:areaStyle}),"area"):null}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result.filter(Boolean)})};try{ScatterSeries.displayName="ScatterSeries",ScatterSeries.__docgenInfo={description:"",displayName:"ScatterSeries",props:{layers:{defaultValue:{value:"['area', 'curve', 'points']"},description:"list of components to display",name:"layers",required:!1,type:{name:"ScatterSeriesLayer[]"}},areaStyle:{defaultValue:null,description:"styles for areas",name:"areaStyle",required:!1,type:{name:"Partial<CSSProperties>"}},curveStyle:{defaultValue:null,description:"styles for curve",name:"curveStyle",required:!1,type:{name:"Partial<CSSProperties>"}},symbolStyle:{defaultValue:null,description:"styles for points",name:"symbolStyle",required:!1,type:{name:"Partial<CSSProperties>"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},symbol:{defaultValue:null,description:"symbol for individual data points",name:"symbol",required:!1,type:{name:"FC<SymbolProps>"}},symbolClassName:{defaultValue:null,description:"style class for data points",name:"symbolClassName",required:!1,type:{name:"string"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<ScatterInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<ScatterInteractiveDataItem, SymbolProps>>"}},component:{defaultValue:null,description:"function used to draw individual components",name:"component",required:!1,type:{name:"FC<PathProps>"}},baseline:{defaultValue:{value:"0"},description:"base for the area polygon",name:"baseline",required:!1,type:{name:"number"}},curve:{defaultValue:{value:"Linear"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},componentProps:{defaultValue:null,description:"props passed to each component",name:"componentProps",required:!1,type:{name:"Partial<PathProps>"}},convolutionMask:{defaultValue:null,description:"convolution mask",name:"convolutionMask",required:!1,type:{name:"number[]"}},convolutionOffset:{defaultValue:null,description:"offset used during convolution",name:"convolutionOffset",required:!1,type:{name:"number"}},downsampleFactor:{defaultValue:null,description:"down-sampling factor [0, 1]",name:"downsampleFactor",required:!1,type:{name:"number"}},downsampleIndex:{defaultValue:null,description:"offset used during down-sampling",name:"downsampleIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/ScatterSeries.tsx#ScatterSeries"]={docgenInfo:ScatterSeries.__docgenInfo,name:"ScatterSeries",path:"packages/xy/src/scatter/ScatterSeries.tsx#ScatterSeries"})}catch(__react_docgen_typescript_loader_error){}var _CurveAndPoints$param,_CurveAndPoints$param2,_CurveAndPoints$param3,_AreaCurveAndPoints$p,_AreaCurveAndPoints$p2,_AreaCurveAndPoints$p3,Scatter=__webpack_require__("./packages/xy/src/scatter/Scatter.tsx"),generators=__webpack_require__("./packages/xy/stories/scatter/generators.tsx");function ScatterSeries_stories_extends(){return ScatterSeries_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},ScatterSeries_stories_extends.apply(this,arguments)}var dataWithInterval=[(0,generators.H)("A",Array(16).fill(0).map((function(v,i){return i})),(function(x){return 1+.3*x+1.5*Math.random()}),[-.8,1]),(0,generators.H)("B",Array(16).fill(0).map((function(v,i){return i})),(function(x){return 8-.3*x+1.5*Math.random()}),[-.8,1])];const ScatterSeries_stories={title:"Addons/XY/Scatter/ScatterSeries",component:ScatterSeries};var CurveAndPoints={render:function render(){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(Scatter.b,{data:dataWithInterval,x:"x",y:"y",valueSize:4,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y"}),(0,jsx_runtime.jsx)(ScatterSeries,{ids:["A"],layers:["curve","points"],curveStyle:{stroke:"#dd3333"},symbolStyle:{fill:"#dd3333"}})]})})},name:"curve and points"},AreaCurveAndPoints={render:function render(){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(Scatter.b,{data:dataWithInterval,x:"x",y:"y",valueSize:4,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y"}),(0,jsx_runtime.jsx)(ScatterSeries,{ids:["A"],layers:["area","curve","points"],areaStyle:{fill:"#dd3333",fillOpacity:.1,strokeWidth:0},curveStyle:{stroke:"#dd3333"},symbolStyle:{fill:"#dd3333"}})]})})},name:"area, curve, and points"};CurveAndPoints.parameters=ScatterSeries_stories_extends({},CurveAndPoints.parameters,{docs:ScatterSeries_stories_extends({},null==(_CurveAndPoints$param=CurveAndPoints.parameters)?void 0:_CurveAndPoints$param.docs,{source:ScatterSeries_stories_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{\n    display: 'inline-block'\n  }}>\n            <Scatter data={dataWithInterval} x={'x'} y={'y'} valueSize={4} scaleX={{\n      variant: 'linear',\n      domain: [0, 'auto']\n    }} scaleY={{\n      variant: 'linear',\n      domain: [0, 'auto']\n    }}>\n                <Axis variant={'bottom'} label={'x (a.u.)'} />\n                <Axis variant={'left'} label={'y (a.u.)'} />\n                <GridLines variant={'y'} />\n                <ScatterSeries ids={['A']} layers={['curve', 'points']} curveStyle={{\n        stroke: '#dd3333'\n      }} symbolStyle={{\n        fill: '#dd3333'\n      }} />\n            </Scatter>\n        </Chart>,\n  name: 'curve and points'\n}"},null==(_CurveAndPoints$param2=CurveAndPoints.parameters)||null==(_CurveAndPoints$param3=_CurveAndPoints$param2.docs)?void 0:_CurveAndPoints$param3.source)})}),AreaCurveAndPoints.parameters=ScatterSeries_stories_extends({},AreaCurveAndPoints.parameters,{docs:ScatterSeries_stories_extends({},null==(_AreaCurveAndPoints$p=AreaCurveAndPoints.parameters)?void 0:_AreaCurveAndPoints$p.docs,{source:ScatterSeries_stories_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{\n    display: 'inline-block'\n  }}>\n            <Scatter data={dataWithInterval} x={'x'} y={'y'} valueSize={4} scaleX={{\n      variant: 'linear',\n      domain: [0, 'auto']\n    }} scaleY={{\n      variant: 'linear',\n      domain: [0, 'auto']\n    }}>\n                <Axis variant={'bottom'} label={'x (a.u.)'} />\n                <Axis variant={'left'} label={'y (a.u.)'} />\n                <GridLines variant={'y'} />\n                <ScatterSeries ids={['A']} layers={['area', 'curve', 'points']} areaStyle={{\n        fill: '#dd3333',\n        fillOpacity: 0.1,\n        strokeWidth: 0\n      }} curveStyle={{\n        stroke: '#dd3333'\n      }} symbolStyle={{\n        fill: '#dd3333'\n      }} />\n            </Scatter>\n        </Chart>,\n  name: 'area, curve, and points'\n}"},null==(_AreaCurveAndPoints$p2=AreaCurveAndPoints.parameters)||null==(_AreaCurveAndPoints$p3=_AreaCurveAndPoints$p2.docs)?void 0:_AreaCurveAndPoints$p3.source)})});var __namedExportsOrder=["CurveAndPoints","AreaCurveAndPoints"]},"./packages/xy/src/scatter/ScatterArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>ScatterArea,f:()=>getAreaD});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/scatter/context.tsx"),_signals__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/src/scatter/signals.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","baseline","curve","convolutionMask","convolutionOffset","downsampleFactor","downsampleIndex","style","className","setRole","dataComponent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var getAreaD=function getAreaD(_ref){var _generator,points=_ref.points,scaleY=_ref.scaleY,baseline=_ref.baseline,curve=_ref.curve,base=scaleY(null!=baseline?baseline:Number(scaleY.domain()[0])),pointIntervals=points.map((function(d){return[d[0],d[1],base]}));return null!=(_generator=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.DmD)(curve)(pointIntervals))?_generator:""},ScatterArea=function ScatterArea(_ref2){var ids=_ref2.ids,baseline=_ref2.baseline,_ref2$curve=_ref2.curve,curve=void 0===_ref2$curve?"Linear":_ref2$curve,convolutionMask=_ref2.convolutionMask,convolutionOffset=_ref2.convolutionOffset,downsampleFactor=_ref2.downsampleFactor,downsampleIndex=_ref2.downsampleIndex,style=_ref2.style,className=_ref2.className,_ref2$setRole=_ref2.setRole,setRole=void 0===_ref2$setRole||_ref2$setRole,_ref2$dataComponent=_ref2.dataComponent,dataComponent=void 0===_ref2$dataComponent?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Aj5:_ref2$dataComponent,pathProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref2,_excluded),preparedData=(0,_context__WEBPACK_IMPORTED_MODULE_3__.DP)(),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales,scaleY=scales.y,colorScale=scales.color,_useDisabledKeys=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender;if(!(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.z0X)(scaleY))return null;var areas={};preparedData.keys.forEach((function(id){var seriesIndex=preparedData.seriesIndexes[id];if(void 0!==seriesIndex){var seriesData=preparedData.data[seriesIndex];areas[id]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var _seriesData$x,_seriesData$y;return getAreaD({points:(0,_signals__WEBPACK_IMPORTED_MODULE_4__.ee)({x:null!=(_seriesData$x=null==seriesData?void 0:seriesData.x)?_seriesData$x:[],y:null!=(_seriesData$y=null==seriesData?void 0:seriesData.y)?_seriesData$y:[],convolutionMask,convolutionOffset,downsampleFactor,downsampleIndex}),curve,scaleY,baseline})}),[seriesIndex,preparedData,curve,scaleY,baseline,convolutionMask,convolutionOffset,downsampleFactor,downsampleIndex])}}));var result=(null!=ids?ids:preparedData.keys).map((function(id){var visible=!disabledKeys.has(id),seriesIndex=preparedData.seriesIndexes[id];if(void 0===seriesIndex)return null;var seriesStyle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hIX)(style,colorScale(seriesIndex)),element=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(dataComponent,_extends({data:{id},component:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.y$t,props:{variant:"scatter-area",d:areas[id],setRole,style:seriesStyle,className}},pathProps));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.JjT,{role:setRole?"scatter-area-presence":void 0,visible,firstRender,children:element},"area-"+seriesIndex)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:result.filter(Boolean)})};try{getAreaD.displayName="getAreaD",getAreaD.__docgenInfo={description:"",displayName:"getAreaD",props:{points:{defaultValue:null,description:"",name:"points",required:!0,type:{name:"NumericPositionSpec[]"}},scaleY:{defaultValue:null,description:"",name:"scaleY",required:!0,type:{name:"ContinuousAxisScale"}},baseline:{defaultValue:null,description:"",name:"baseline",required:!1,type:{name:"number"}},curve:{defaultValue:{value:"Linear"},description:"",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/ScatterArea.tsx#getAreaD"]={docgenInfo:getAreaD.__docgenInfo,name:"getAreaD",path:"packages/xy/src/scatter/ScatterArea.tsx#getAreaD"})}catch(__react_docgen_typescript_loader_error){}try{ScatterArea.displayName="ScatterArea",ScatterArea.__docgenInfo={description:"",displayName:"ScatterArea",props:{baseline:{defaultValue:null,description:"base for the area polygon",name:"baseline",required:!1,type:{name:"number"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},curve:{defaultValue:{value:"Linear"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<ScatterInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<ScatterInteractiveDataItem, PathProps>>"}},component:{defaultValue:null,description:"function used to draw individual components",name:"component",required:!1,type:{name:"FC<PathProps>"}},componentProps:{defaultValue:null,description:"props passed to each component",name:"componentProps",required:!1,type:{name:"Partial<PathProps>"}},convolutionMask:{defaultValue:null,description:"convolution mask",name:"convolutionMask",required:!1,type:{name:"number[]"}},convolutionOffset:{defaultValue:null,description:"offset used during convolution",name:"convolutionOffset",required:!1,type:{name:"number"}},downsampleFactor:{defaultValue:null,description:"down-sampling factor [0, 1]",name:"downsampleFactor",required:!1,type:{name:"number"}},downsampleIndex:{defaultValue:null,description:"offset used during down-sampling",name:"downsampleIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/ScatterArea.tsx#ScatterArea"]={docgenInfo:ScatterArea.__docgenInfo,name:"ScatterArea",path:"packages/xy/src/scatter/ScatterArea.tsx#ScatterArea"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/stories/scatter/ScatterSeries.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ScatterSeries_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/stories/scatter/ScatterSeries.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"scatterseries",children:"ScatterSeries"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_ScatterSeries_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterSeries"})," is a convenience component that combines the capabilities of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterArea"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterCurve"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterInterval"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterPoints"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_ScatterSeries_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"layers",children:"Layers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"layers"})," controls the amount of information that is displayed about a series. Setting the prop to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"['curve', 'points']"}),", for example, can display a curve and data points. An array with an additional ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'area'"})," would also create a polygon."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterSeries_stories__WEBPACK_IMPORTED_MODULE_4__.CurveAndPoints}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterSeries_stories__WEBPACK_IMPORTED_MODULE_4__.AreaCurveAndPoints})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);