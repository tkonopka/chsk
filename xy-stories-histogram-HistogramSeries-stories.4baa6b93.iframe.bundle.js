"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7202],{"./packages/xy/src/histogram/HistogramCurve.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>HistogramCurve});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/histogram/context.tsx"),_predicates__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/src/histogram/predicates.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","curve","style","setRole","dataComponent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var HistogramCurve=function HistogramCurve(_ref){var ids=_ref.ids,_ref$curve=_ref.curve,curve=void 0===_ref$curve?"MonotoneX":_ref$curve,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Aj5:_ref$dataComponent,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(_ref,_excluded),processedData=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIO)().data,preparedData=(0,_context__WEBPACK_IMPORTED_MODULE_3__.cT)(),colorScale=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales.color,_useDisabledKeys=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender;if(!(0,_predicates__WEBPACK_IMPORTED_MODULE_4__.j)(processedData))return null;var result=(null!=ids?ids:preparedData.keys).map((function(id){var _preparedData$data$se,visible=!disabledKeys.has(id),seriesIndex=preparedData.seriesIndexes[id];if(void 0===seriesIndex)return null;var seriesStyle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hIX)(style,colorScale(seriesIndex));seriesStyle.fill=void 0;var element=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(dataComponent,_extends({data:processedData[seriesIndex],component:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.y$t,props:{variant:"histogram-curve",points:null==(_preparedData$data$se=preparedData.data[seriesIndex])?void 0:_preparedData$data$se.points,curve,style:seriesStyle,setRole}},props));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.JjT,{role:setRole?"histogram-curve-presence":void 0,visible,firstRender,children:element},"curve-"+seriesIndex)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:result.filter(Boolean)})};try{HistogramCurve.displayName="HistogramCurve",HistogramCurve.__docgenInfo={description:"",displayName:"HistogramCurve",props:{ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},curve:{defaultValue:{value:"MonotoneX"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<HistogramInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<HistogramInteractiveDataItem, PathProps>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/histogram/HistogramCurve.tsx#HistogramCurve"]={docgenInfo:HistogramCurve.__docgenInfo,name:"HistogramCurve",path:"packages/xy/src/histogram/HistogramCurve.tsx#HistogramCurve"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/stories/histogram/HistogramSeries.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AreaAndCurve:()=>AreaAndCurve,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HistogramSeries_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),HistogramCurve=__webpack_require__("./packages/xy/src/histogram/HistogramCurve.tsx"),HistogramArea=__webpack_require__("./packages/xy/src/histogram/HistogramArea.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","layers","curve","areaStyle","curveStyle","className","setRole","dataComponent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var HistogramSeries=function HistogramSeries(_ref){var ids=_ref.ids,_ref$layers=_ref.layers,layers=void 0===_ref$layers?["area","curve"]:_ref$layers,_ref$curve=_ref.curve,curve=void 0===_ref$curve?"MonotoneX":_ref$curve,areaStyle=_ref.areaStyle,curveStyle=_ref.curveStyle,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,_ref$dataComponent=_ref.dataComponent,commonProps=_extends({curve,className,setRole,dataComponent:void 0===_ref$dataComponent?chsk_core_es.Aj5:_ref$dataComponent},function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(_ref,_excluded)),result=layers.map((function(layer){return"area"===layer?(0,jsx_runtime.jsx)(HistogramArea.d,_extends({ids},commonProps,{style:areaStyle}),"areas"):(0,jsx_runtime.jsx)(HistogramCurve.L,_extends({ids},commonProps,{style:curveStyle}),"curves")}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result.filter(Boolean)})};try{HistogramSeries.displayName="HistogramSeries",HistogramSeries.__docgenInfo={description:"",displayName:"HistogramSeries",props:{layers:{defaultValue:{value:"['area', 'curve']"},description:"list of components to display",name:"layers",required:!1,type:{name:"HistogramSeriesLayer[]"}},areaStyle:{defaultValue:null,description:"styles for areas",name:"areaStyle",required:!1,type:{name:"Partial<CSSProperties>"}},curveStyle:{defaultValue:null,description:"styles for curve",name:"curveStyle",required:!1,type:{name:"Partial<CSSProperties>"}},barStyle:{defaultValue:null,description:"styles for bars",name:"barStyle",required:!1,type:{name:"Partial<CSSProperties>"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},curve:{defaultValue:{value:"MonotoneX"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<HistogramInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<HistogramInteractiveDataItem, PathProps>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/histogram/HistogramSeries.tsx#HistogramSeries"]={docgenInfo:HistogramSeries.__docgenInfo,name:"HistogramSeries",path:"packages/xy/src/histogram/HistogramSeries.tsx#HistogramSeries"})}catch(__react_docgen_typescript_loader_error){}var Histogram=__webpack_require__("./packages/xy/src/histogram/Histogram.tsx"),decorators=__webpack_require__("./packages/xy/stories/histogram/decorators.tsx");const HistogramSeries_stories={title:"Addons/XY/Histograms/HistogramSeries",component:HistogramSeries},AreaAndCurve={render:()=>(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(Histogram.b,{variant:"density",data:decorators.m,breaks:12,children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"density"}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y"}),(0,jsx_runtime.jsx)(HistogramSeries,{layers:["area","curve"],curveStyle:{strokeWidth:2},areaStyle:{opacity:.2}})]})}),name:"area and curve"},__namedExportsOrder=["AreaAndCurve"];AreaAndCurve.parameters={...AreaAndCurve.parameters,docs:{...AreaAndCurve.parameters?.docs,source:{originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{\n    display: 'inline-block'\n  }}>\n            <Histogram variant={'density'} data={sampleData} breaks={12}>\n                <Axis variant={'bottom'} label={'x (a.u.)'} />\n                <Axis variant={'left'} label={'density'} />\n                <GridLines variant={'y'} />\n                <HistogramSeries layers={['area', 'curve']} curveStyle={{\n        strokeWidth: 2\n      }} areaStyle={{\n        opacity: 0.2\n      }} />\n            </Histogram>\n        </Chart>,\n  name: 'area and curve'\n}",...AreaAndCurve.parameters?.docs?.source}}}}}]);