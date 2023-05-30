"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[5242],{"./packages/xy/src/scatter/Scatter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Scatter});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),framer_motion__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/src/scatter/context.tsx"),_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/scatter/helpers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","data","x","y","k","valueColor","valueSize","scaleX","scaleY","scaleColor","scaleSize","autoRescale","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Scatter=function Scatter(_ref2){var _ref2$container=_ref2.container,container=void 0===_ref2$container?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.WdC:_ref2$container,data=_ref2.data,x=_ref2.x,y=_ref2.y,k=_ref2.k,_ref2$valueColor=_ref2.valueColor,valueColor=void 0===_ref2$valueColor?null:_ref2$valueColor,_ref2$valueSize=_ref2.valueSize,valueSize=void 0===_ref2$valueSize?5:_ref2$valueSize,_ref2$scaleX=_ref2.scaleX,scaleX=void 0===_ref2$scaleX?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Bs3:_ref2$scaleX,_ref2$scaleY=_ref2.scaleY,scaleY=void 0===_ref2$scaleY?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Bs3:_ref2$scaleY,scaleColor=_ref2.scaleColor,_ref2$scaleSize=_ref2.scaleSize,scaleSize=void 0===_ref2$scaleSize?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Ooi:_ref2$scaleSize,_ref2$autoRescale=_ref2.autoRescale,autoRescale=void 0===_ref2$autoRescale||_ref2$autoRescale,children=_ref2.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref2,_excluded),theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FgM)(),_useContainer=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,seriesIndexes=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.snp)(data)}),[data]),seriesIds=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return data.map((function(item){return item.id}))}),[data]),disabled=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(seriesIds).disabled,processedData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function processData(_ref){var data=_ref.data,x=_ref.x,y=_ref.y,k=_ref.k,_ref$valueSize=_ref.valueSize,valueSize=void 0===_ref$valueSize?5:_ref$valueSize,_ref$valueColor=_ref.valueColor,valueColor=void 0===_ref$valueColor?null:_ref$valueColor;return data.map((function(seriesData,index){var d=seriesData.data;if(Array.isArray(d)){var getX=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(x),getY=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(y),getK=k?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(k):void 0,getSize=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hAO)(valueSize),getColor=valueColor?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(valueColor):null;return{id:seriesData.id,index,k:getK?d.map((function(item){return getK(item)})):(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.w6H)(d.length),x:d.map((function(item){return getX(item)})),y:d.map((function(item){return getY(item)})),size:d.map((function(item){return getSize(item)})),color:getColor?d.map((function(item){return getColor(item)})):void 0}}var _getX=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(String(x)),n=_getX(d).length,_getY=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(String(y)),_getK=k?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(String(k)):void 0,_getSize=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hj$)(valueSize)?function(){return Array(n).fill(valueSize)}:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(String(valueSize)),_getColor=valueColor?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(String(valueColor)):null;return{id:seriesData.id,index,k:_getK?_getK(d):(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.w6H)(_getX(d).length),x:_getX(d),y:_getY(d),size:_getSize(d),color:_getColor?_getColor(d):void 0}}))}({data,x,y,k,valueSize,valueColor})}),[data,x,y,k,valueSize,valueColor]),_useMemo=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.qe)(processedData,scaleX,scaleY,innerSize,autoRescale?disabled:Array(seriesIds.length).fill(!1))}),[processedData,scaleX,scaleY,disabled,autoRescale,disabled,seriesIds]),xProps=_useMemo.x,yProps=_useMemo.y,_useMemo2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{colorProps:(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.VF)(processedData,null!=scaleColor?scaleColor:theme.Colors.categorical,seriesIds),sizeProps:(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.Pu)(processedData,scaleSize,valueSize)}}),[processedData,scaleColor,scaleSize,theme,valueSize,seriesIds]),colorProps=_useMemo2.colorProps,sizeProps=_useMemo2.sizeProps,scalesContextValue=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.cT_)({x:xProps,y:yProps,color:colorProps,size:sizeProps}),preparedData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function prepareData(data,scales){var scaleX=scales.x,scaleY=scales.y,scaleSize=scales.size,scaleColor=scales.color;return data.map((function(seriesData){return{id:seriesData.id,index:seriesData.index,x:seriesData.x.map((function(v){return scaleX(v)})),y:seriesData.y.map((function(v){return scaleY(v)})),r:seriesData.size.map((function(v){return scaleSize(v)})),color:seriesData.color?seriesData.color.map((function(v){return scaleColor(v)})):void 0}}))}(processedData,scalesContextValue.scales)}),[processedData,scalesContextValue]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.PzT,_extends({variant:"scatter",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys:seriesIds,scalesContextValue},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_context__WEBPACK_IMPORTED_MODULE_4__.lq,{data:preparedData,seriesIndexes,keys:seriesIds,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.X,{features:framer_motion__WEBPACK_IMPORTED_MODULE_6__.H,children})})}))};Scatter.displayName="Scatter";try{Scatter.displayName="Scatter",Scatter.__docgenInfo={description:"",displayName:"Scatter",props:{x:{defaultValue:null,description:"extraction of x-axis values from raw data",name:"x",required:!0,type:{name:"string | AccessorFunction<number>"}},y:{defaultValue:null,description:"extraction of y-axis values from raw data",name:"y",required:!0,type:{name:"string | AccessorFunction<number>"}},k:{defaultValue:null,description:"extraction of key values (indexes) from raw data",name:"k",required:!1,type:{name:"string | AccessorFunction<number>"}},valueSize:{defaultValue:{value:"5"},description:"extraction of dot size from raw data",name:"valueSize",required:!1,type:{name:"string | number | AccessorFunction<number>"}},valueColor:{defaultValue:{value:"null"},description:"extraction of a value for color",name:"valueColor",required:!1,type:{name:"string | AccessorFunction<number> | null"}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"ScatterDataItem[]"}},scaleX:{defaultValue:null,description:"scale for horizontal axis",name:"scaleX",required:!1,type:{name:"ContinuousScaleSpec"}},scaleY:{defaultValue:null,description:"scale for vertical axis",name:"scaleY",required:!1,type:{name:"ContinuousScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"ColorScaleSpec"}},scaleSize:{defaultValue:null,description:"scale for cell size",name:"scaleSize",required:!1,type:{name:"SizeScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}},autoRescale:{defaultValue:{value:"true"},description:"automatically adjust scales if/when data subsets become disabled",name:"autoRescale",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/Scatter.tsx#Scatter"]={docgenInfo:Scatter.__docgenInfo,name:"Scatter",path:"packages/xy/src/scatter/Scatter.tsx#Scatter"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/scatter/ScatterCurve.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>ScatterCurve});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/scatter/context.tsx"),_signals__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/src/scatter/signals.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","curve","convolutionMask","convolutionOffset","downsampleFactor","downsampleIndex","style","className","setRole","dataComponent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ScatterCurve=function ScatterCurve(_ref){var ids=_ref.ids,_ref$curve=_ref.curve,curve=void 0===_ref$curve?"Linear":_ref$curve,convolutionMask=_ref.convolutionMask,convolutionOffset=_ref.convolutionOffset,downsampleFactor=_ref.downsampleFactor,downsampleIndex=_ref.downsampleIndex,style=_ref.style,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.oKN:_ref$dataComponent,pathProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),preparedData=(0,_context__WEBPACK_IMPORTED_MODULE_3__.DP)(),colorScale=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales.color,_useDisabledKeys=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender,result=(null!=ids?ids:preparedData.keys).map((function(id){var visible=!disabledKeys.has(id),seriesIndex=preparedData.seriesIndexes[id];if(void 0===seriesIndex)return null;var seriesStyle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hIX)(style,colorScale(seriesIndex));seriesStyle.fill=void 0;var seriesData=preparedData.data[seriesIndex],points=(0,_signals__WEBPACK_IMPORTED_MODULE_4__.ee)({x:seriesData.x,y:seriesData.y,convolutionMask,convolutionOffset,downsampleFactor,downsampleIndex}),element=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(dataComponent,_extends({data:{id},component:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.y$t,props:{points,curve,variant:"scatter-curve",className,style:seriesStyle,setRole}},pathProps));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.JjT,{role:setRole?"scatter-curve-presence":void 0,visible,firstRender,children:element},"curve-"+seriesIndex)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:result.filter(Boolean)})};try{ScatterCurve.displayName="ScatterCurve",ScatterCurve.__docgenInfo={description:"",displayName:"ScatterCurve",props:{ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},curve:{defaultValue:{value:"Linear"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<ScatterInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<ScatterInteractiveDataItem, PathProps>>"}},convolutionMask:{defaultValue:null,description:"convolution mask",name:"convolutionMask",required:!1,type:{name:"number[]"}},convolutionOffset:{defaultValue:null,description:"offset used during convolution",name:"convolutionOffset",required:!1,type:{name:"number"}},downsampleFactor:{defaultValue:null,description:"down-sampling factor [0, 1]",name:"downsampleFactor",required:!1,type:{name:"number"}},downsampleIndex:{defaultValue:null,description:"offset used during down-sampling",name:"downsampleIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/ScatterCurve.tsx#ScatterCurve"]={docgenInfo:ScatterCurve.__docgenInfo,name:"ScatterCurve",path:"packages/xy/src/scatter/ScatterCurve.tsx#ScatterCurve"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/scatter/ScatterPoints.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>ScatterPoints});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/scatter/context.tsx"),_predicates__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/src/scatter/predicates.ts"),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/xy/src/scatter/helpers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","symbol","symbolStyle","symbolClassName","dataComponent","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ScatterPoints=function ScatterPoints(_ref){var ids=_ref.ids,_ref$symbol=_ref.symbol,symbol=void 0===_ref$symbol?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:_ref$symbol,symbolStyle=_ref.symbolStyle,symbolClassName=_ref.symbolClassName,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Aj5:_ref$dataComponent,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIO)().data,preparedData=(0,_context__WEBPACK_IMPORTED_MODULE_3__.DP)(),colorScale=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales.color,_useDisabledKeys=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender;if(!(0,_predicates__WEBPACK_IMPORTED_MODULE_4__.dI)(processedData))return null;var symbolData=(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.pq)(processedData,preparedData),result=(null!=ids?ids:preparedData.keys).map((function(id){var visible=!disabledKeys.has(id),seriesIndex=preparedData.seriesIndexes[id];if(void 0===seriesIndex)return null;var seriesStyle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hIX)(symbolStyle,colorScale(seriesIndex)),data=preparedData.data[seriesIndex],x=data.x,y=data.y,k=processedData[seriesIndex].k,colors=data.color,dots=visible?data.r.map((function(r,i){return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(dataComponent,_extends({key:k[i],data:symbolData[seriesIndex][i],component:symbol,props:{cx:x[i],cy:y[i],r,className:symbolClassName,style:colors?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hIX)(symbolStyle,colors[i]):seriesStyle,setRole:!1}},props))})):null;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.JjT,{role:setRole?"scatter-points":void 0,visible,firstRender,children:dots},"points-"+seriesIndex)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:result.filter(Boolean)})};try{ScatterPoints.displayName="ScatterPoints",ScatterPoints.__docgenInfo={description:"",displayName:"ScatterPoints",props:{ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},symbol:{defaultValue:null,description:"symbol for individual data points",name:"symbol",required:!1,type:{name:"FC<SymbolProps>"}},symbolClassName:{defaultValue:null,description:"style class for data points",name:"symbolClassName",required:!1,type:{name:"string"}},symbolStyle:{defaultValue:null,description:"style for data points",name:"symbolStyle",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<ScatterInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<ScatterInteractiveDataItem, SymbolProps>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/ScatterPoints.tsx#ScatterPoints"]={docgenInfo:ScatterPoints.__docgenInfo,name:"ScatterPoints",path:"packages/xy/src/scatter/ScatterPoints.tsx#ScatterPoints"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/scatter/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DP:()=>useScatterPreparedData,lq:()=>ScatterPreparedDataProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ScatterPreparedDataContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({data:[],seriesIndexes:{},keys:[]}),ScatterPreparedDataProvider=function ScatterPreparedDataProvider(_ref){var data=_ref.data,seriesIndexes=_ref.seriesIndexes,keys=_ref.keys,children=_ref.children,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{data,seriesIndexes,keys}}),[data,seriesIndexes,keys]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ScatterPreparedDataContext.Provider,{value,children})};ScatterPreparedDataProvider.displayName="ScatterPreparedDataProvider";var useScatterPreparedData=function useScatterPreparedData(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScatterPreparedDataContext)};try{ScatterPreparedDataProvider.displayName="ScatterPreparedDataProvider",ScatterPreparedDataProvider.__docgenInfo={description:"",displayName:"ScatterPreparedDataProvider",props:{data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"RecordWithId[] & ScatterPreparedDataItem[]"}},seriesIndexes:{defaultValue:null,description:"map from series ids to indexes",name:"seriesIndexes",required:!0,type:{name:"Record<string, number>"}},keys:{defaultValue:null,description:"list of keys",name:"keys",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/context.tsx#ScatterPreparedDataProvider"]={docgenInfo:ScatterPreparedDataProvider.__docgenInfo,name:"ScatterPreparedDataProvider",path:"packages/xy/src/scatter/context.tsx#ScatterPreparedDataProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/scatter/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C9:()=>useTargets,I_:()=>distanceY,Pu:()=>getSizeScaleProps,VF:()=>getColorScaleProps,pq:()=>useSymbolData,qe:()=>getXYScaleProps,sr:()=>distanceXY,uD:()=>distanceX});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_predicates__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/xy/src/scatter/predicates.ts"),getXYScaleProps=function getXYScaleProps(data,scaleSpecX,scaleSpecY,size,disabled){var result={x:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.BRZ)(scaleSpecX),y:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.BRZ)(scaleSpecY)},filterDisabled=function filterDisabled(v,i){return!disabled[i]};if(!(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.HBl)(scaleSpecX)){var x=data.filter(filterDisabled).map((function(seriesData){return seriesData.x})).flat();result.x=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.zAC)(scaleSpecX,(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.FG_)(x))}if(!(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.HBl)(scaleSpecY)){var y=data.filter(filterDisabled).map((function(seriesData){return seriesData.y})).flat();result.y=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.zAC)(scaleSpecY,(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.FG_)(y))}return result.x.size=size[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X],result.y.size=size[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y],result},getSizeScaleProps=function getSizeScaleProps(data,scaleSpec,maxSize){var maxDomain=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Fp7)(data.map((function(seriesData){return seriesData.size})).flat());return"number"==typeof maxSize?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__._C2)(scaleSpec,maxDomain,maxSize):(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__._C2)(scaleSpec,maxDomain,10)},getColorScaleProps=function getColorScaleProps(data,scaleSpec,seriesIds){if("categorical"===scaleSpec.variant)return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.NVB)(scaleSpec,seriesIds);var minmax=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.FG_)(data.map((function(seriesData){var _seriesData$color;return null!=(_seriesData$color=seriesData.color)?_seriesData$color:[]})).flat());return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.NVB)(scaleSpec,minmax)},useSymbolData=function useSymbolData(processedData,preparedData){return(0,_predicates__WEBPACK_IMPORTED_MODULE_2__.dI)(processedData)?(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return preparedData.keys.map((function(id){var seriesIndex=preparedData.seriesIndexes[id],seriesProcessedData=processedData[seriesIndex];return preparedData.data[seriesIndex].r.map((function(r,index){var _seriesProcessedData$;return{id,index,point:[seriesProcessedData.x[index],seriesProcessedData.y[index]],size:seriesProcessedData.size[index],color:null==(_seriesProcessedData$=seriesProcessedData.color)?void 0:_seriesProcessedData$[index]}}))}))}),[processedData,preparedData]):[]},distanceXY=function distanceXY(a,b){return Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2))},distanceX=function distanceX(a,b){return Math.abs(a[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X]-b[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X])},distanceY=function distanceY(a,b){return Math.abs(a[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y]-b[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y])},useTargets=function useTargets(preparedData,disabledKeys){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var result=[];return preparedData.keys.forEach((function(id){if(!disabledKeys.has(id)){var seriesIndex=preparedData.seriesIndexes[id],data=preparedData.data[seriesIndex];data.r.forEach((function(r,index){result.push([data.x[index],data.y[index],seriesIndex,index])}))}})),result}),[preparedData,disabledKeys])}},"./packages/xy/src/scatter/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bf:()=>isScatterData,Tc:()=>isScatterPreparedData,dI:()=>isScatterProcessedData});var isScatterProcessedData=function isScatterProcessedData(data){return data.map((function(item){return"object"==typeof item&&null!==item&&("id"in item&&"index"in item&&"x"in item&&"y"in item&&"size"in item)})).every(Boolean)},isScatterPreparedData=function isScatterPreparedData(data){return data.map((function(item){return"object"==typeof item&&null!==item&&("id"in item&&"index"in item&&"x"in item&&"y"in item&&"r"in item)})).every(Boolean)},isScatterData=function isScatterData(data){return data.map((function(item){return"id"in item&&"data"in item&&"object"==typeof item.data})).every(Boolean)}},"./packages/xy/src/scatter/signals.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ee:()=>curvePoints});var downsample=function downsample(data,alpha,offset){void 0===offset&&(offset=0);var n=data.length,thresholds=data.map((function(_,i){return Math.floor(i*alpha)}));return thresholds.map((function(t,i){return i+offset<n&&(0===i||t!=thresholds[i-1])?i:void 0})).filter((function(v){return void 0!==v})).map((function(i){return data[i+offset]}))},curvePoints=function curvePoints(_ref){var x=_ref.x,y=_ref.y,mask=_ref.convolutionMask,_ref$convolutionOffse=_ref.convolutionOffset,offset=void 0===_ref$convolutionOffse?0:_ref$convolutionOffse,_ref$downsampleFactor=_ref.downsampleFactor,downsampleFactor=void 0===_ref$downsampleFactor?1:_ref$downsampleFactor,_ref$downsampleIndex=_ref.downsampleIndex,downsampleIndex=void 0===_ref$downsampleIndex?0:_ref$downsampleIndex,n=mask?mask.length-1:0,x0=x.slice(n+offset,x.length+offset),y0=(mask?function convolution(data,mask,normalizeMask){void 0===normalizeMask&&(normalizeMask=!0);for(var m=normalizeMask?function normalizeSum(v){var denominator=v.reduce((function(total,x){return total+x}),0);return v.map((function(x){return x/denominator}))}(mask):[].concat(mask),mLength=m.length,n=data.length+m.length-1,result=Array(n).fill(0),i=0;i<n;i+=1){for(var iResult=0,j=0;j<mLength;j++){var _data;iResult+=(null!=(_data=data[i-j])?_data:0)*m[j]}result[i]=iResult}return result}(y,mask):y).slice(n,x.length),noDownsample=1===downsampleFactor,x1=noDownsample?x0:downsample(x0,downsampleFactor,downsampleIndex),y1=noDownsample?y0:downsample(y0,downsampleFactor,downsampleIndex);return x1.map((function(v,i){return[v,y1[i]]}))}},"./packages/xy/stories/scatter/generators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>generateScatterSeriesWithInterval,Z:()=>generateScatterSeries});var generateScatterSeriesWithInterval=function generateScatterSeriesWithInterval(id,x,y,interval){return{id,data:x.map((function(xVal){var yVal=y(xVal);return{x:xVal,y:yVal,lo:yVal+interval[0]*Math.sqrt(yVal),hi:yVal+interval[1]*Math.sqrt(yVal)}}))}},generateScatterSeries=function generateScatterSeries(id,x,y){return{id,data:x.map((function(xVal){return{x:xVal,y:y(xVal)}}))}}}}]);