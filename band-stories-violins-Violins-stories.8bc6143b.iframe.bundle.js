"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8176],{"./packages/band/stories/violins/Violins.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SelectedIds:()=>SelectedIds,SelectedKeys:()=>SelectedKeys,Smooth:()=>Smooth,Step:()=>Step,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Smooth$parameters,_Smooth$parameters2,_Smooth$parameters2$d,_Step$parameters,_Step$parameters2,_Step$parameters2$doc,_SelectedIds$paramete,_SelectedIds$paramete2,_SelectedIds$paramete3,_SelectedKeys$paramet,_SelectedKeys$paramet2,_SelectedKeys$paramet3,_src_violins__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/violins/Violins.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/violins/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Violins/Violins",component:_src_violins__WEBPACK_IMPORTED_MODULE_0__.K};var Smooth={name:"smooth",args:{variant:"smooth"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.M]},Step={name:"step",args:{variant:"step"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.M]},SelectedIds={name:"selected ids",args:{ids:["alpha"],style:{strokeWidth:1,stroke:"#222222",fillOpacity:1}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.M]},SelectedKeys={name:"selected keys",args:{keys:["x"],style:{strokeWidth:1,stroke:"#222222",fillOpacity:1}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.M]};Smooth.parameters=_extends({},Smooth.parameters,{docs:_extends({},null==(_Smooth$parameters=Smooth.parameters)?void 0:_Smooth$parameters.docs,{source:_extends({originalSource:"{\n  name: 'smooth',\n  args: {\n    variant: 'smooth'\n  },\n  decorators: [ChartViolinDecorator]\n}"},null==(_Smooth$parameters2=Smooth.parameters)||null==(_Smooth$parameters2$d=_Smooth$parameters2.docs)?void 0:_Smooth$parameters2$d.source)})}),Step.parameters=_extends({},Step.parameters,{docs:_extends({},null==(_Step$parameters=Step.parameters)?void 0:_Step$parameters.docs,{source:_extends({originalSource:"{\n  name: 'step',\n  args: {\n    variant: 'step'\n  },\n  decorators: [ChartViolinDecorator]\n}"},null==(_Step$parameters2=Step.parameters)||null==(_Step$parameters2$doc=_Step$parameters2.docs)?void 0:_Step$parameters2$doc.source)})}),SelectedIds.parameters=_extends({},SelectedIds.parameters,{docs:_extends({},null==(_SelectedIds$paramete=SelectedIds.parameters)?void 0:_SelectedIds$paramete.docs,{source:_extends({originalSource:"{\n  name: 'selected ids',\n  args: {\n    ids: ['alpha'],\n    style: {\n      strokeWidth: 1,\n      stroke: '#222222',\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartViolinDecorator]\n}"},null==(_SelectedIds$paramete2=SelectedIds.parameters)||null==(_SelectedIds$paramete3=_SelectedIds$paramete2.docs)?void 0:_SelectedIds$paramete3.source)})}),SelectedKeys.parameters=_extends({},SelectedKeys.parameters,{docs:_extends({},null==(_SelectedKeys$paramet=SelectedKeys.parameters)?void 0:_SelectedKeys$paramet.docs,{source:_extends({originalSource:"{\n  name: 'selected keys',\n  args: {\n    keys: ['x'],\n    style: {\n      strokeWidth: 1,\n      stroke: '#222222',\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartViolinDecorator]\n}"},null==(_SelectedKeys$paramet2=SelectedKeys.parameters)||null==(_SelectedKeys$paramet3=_SelectedKeys$paramet2.docs)?void 0:_SelectedKeys$paramet3.source)})});var __namedExportsOrder=["Smooth","Step","SelectedIds","SelectedKeys"]},"./packages/band/src/violins/Violin.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Violin});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/band/src/violins/context.tsx"),_bars_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/src/bars/utils.ts"),_predicates__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/violins/predicates.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","variant","data","keys","breaks","horizontal","autoRescale","paddingInternal","scaleIndex","scaleValue","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Violin=function Violin(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.WdC:_ref$container,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"grouped":_ref$variant,data=_ref.data,keys=_ref.keys,_ref$breaks=_ref.breaks,breaks=void 0===_ref$breaks?20:_ref$breaks,_ref$horizontal=_ref.horizontal,horizontal=void 0!==_ref$horizontal&&_ref$horizontal,_ref$autoRescale=_ref.autoRescale,autoRescale=void 0===_ref$autoRescale||_ref$autoRescale,_ref$paddingInternal=_ref.paddingInternal,paddingInternal=void 0===_ref$paddingInternal?0:_ref$paddingInternal,_ref$scaleIndex=_ref.scaleIndex,scaleIndex=void 0===_ref$scaleIndex?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Us:_ref$scaleIndex,_ref$scaleValue=_ref.scaleValue,scaleValue=void 0===_ref$scaleValue?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tx9:_ref$scaleValue,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FgM)(),_useContainer=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,disabled=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(keys).disabled,seriesIndexes=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.snp)(data)}),[data]),processedData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function processData(data,keys){var accessors=keys.map((function(k){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(k)}));return data.map((function(seriesData,index){var summaries=accessors.map((function(f){var raw=f(seriesData);if(raw){if((0,_predicates__WEBPACK_IMPORTED_MODULE_3__.ku)(raw))return{n:raw.n,values:raw.values,breaks:raw.breaks};if(Array.isArray(raw))return{n:raw.length,values:raw}}})),domain=summaries.map((function(summary){if(summary)return summary.breaks?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FG_)(summary.breaks):(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FG_)(summary.values)}));return{id:seriesData.id,index,data:summaries,domain}}))}(data,keys)}),[data,keys]),_getScaleProps=(0,_bars_utils__WEBPACK_IMPORTED_MODULE_4__.P)(processedData.map((function(d){return d.id})),processedData.map((function(d){return d.domain})),scaleIndex,scaleValue,innerSize,horizontal,autoRescale?disabled:Array(keys.length).fill(!1)),indexProps=_getScaleProps.index,valueProps=_getScaleProps.value,xProps=horizontal?valueProps:indexProps,yProps=horizontal?indexProps:valueProps,colorProps=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.NVB)(null!=scaleColor?scaleColor:theme.Colors.categorical,keys),scalesContextValue=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.cT_)({x:xProps,y:yProps,color:colorProps}),scales=scalesContextValue.scales,indexScale=horizontal?scales.y:scales.x,valueScale=horizontal?scales.x:scales.y,_getInternalWidthAndG=(0,_bars_utils__WEBPACK_IMPORTED_MODULE_4__.u)(indexScale,keys,paddingInternal,variant),internalWidth=_getInternalWidthAndG[0],internalOffset=_getInternalWidthAndG[1],internalGap=_getInternalWidthAndG[2],preparedData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function prepareData(data,indexScale,valueScale,horizontal,width,offset,gap,breaks){var breaksArray,fullScaled=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FG_)(data.map((function(d){return d.domain.flat().filter((function(v){return void 0!==v}))})).flat()).map((function(v){return valueScale(v)}));return breaksArray=Array.isArray(breaks)?breaks.map((function(v){return valueScale(v)})):(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Sye)(fullScaled,Number(breaks)),data.map((function(seriesData){var bandStart=indexScale(seriesData.id)-indexScale.bandwidth()/2+offset,summaries=seriesData.data.map((function(summary){if(bandStart+=width+gap,summary){var scaledRawValues=summary.breaks?[]:summary.values.map((function(v){return valueScale(v)})),scaledBreaks=summary.breaks?summary.breaks.map((function(v){return valueScale(v)})):breaksArray;return scaledBreaks.sort((function(a,b){return a-b})),{n:summary.n,breaks:summary.breaks?summary.breaks.map((function(v){return valueScale(v)})):scaledBreaks,values:summary.breaks?summary.values:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.NYs)(scaledRawValues,scaledBreaks,!1),bandStart:bandStart-width-gap,bandWidth:width}}}));return{id:seriesData.id,index:seriesData.index,data:summaries}}))}(processedData,indexScale,valueScale,0,internalWidth,internalOffset,internalGap,breaks)}),[processedData,horizontal,indexScale,valueScale,internalWidth,internalOffset,internalGap,breaks]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.PzT,_extends({variant:"violin",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys,scalesContextValue},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_context__WEBPACK_IMPORTED_MODULE_5__.lA,{data:preparedData,seriesIndexes,keys,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.X,{features:framer_motion__WEBPACK_IMPORTED_MODULE_7__.H,children})})}))};Violin.displayName="Violin";try{Violin.displayName="Violin",Violin.__docgenInfo={description:"",displayName:"Violin",props:{variant:{defaultValue:{value:"grouped"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grouped"'},{value:'"layered"'}]}},breaks:{defaultValue:{value:"20"},description:"breaks to determine violin resolution",name:"breaks",required:!1,type:{name:"number | number[]"}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"ViolinDataItem[]"}},keys:{defaultValue:null,description:"list of all keys associated with a band",name:"keys",required:!0,type:{name:"string[]"}},horizontal:{defaultValue:{value:"false"},description:"display bands horizontally",name:"horizontal",required:!1,type:{name:"boolean"}},paddingInternal:{defaultValue:{value:"0"},description:"padding between bands in the same group/index",name:"paddingInternal",required:!1,type:{name:"number"}},scaleIndex:{defaultValue:null,description:"scale for axis with discrete indexes",name:"scaleIndex",required:!1,type:{name:"ScaleWithBandwidthSpec"}},scaleValue:{defaultValue:null,description:"scale for axis with continuous values",name:"scaleValue",required:!1,type:{name:"ContinuousScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}},autoRescale:{defaultValue:{value:"true"},description:"automatically adjust scales if/when data subsets become disabled",name:"autoRescale",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/violins/Violin.tsx#Violin"]={docgenInfo:Violin.__docgenInfo,name:"Violin",path:"packages/band/src/violins/Violin.tsx#Violin"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/violins/Violins.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Violins});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/band/src/violins/context.tsx"),react=__webpack_require__("./node_modules/react/index.js"),predicates=__webpack_require__("./packages/band/src/violins/predicates.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","ids","keys","component","className","dataComponent","style"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Violins=function Violins(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"smooth":_ref$variant,ids=_ref.ids,keys=_ref.keys,_ref$component=_ref.component,component=void 0===_ref$component?chsk_core_es.y$t:_ref$component,className=_ref.className,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?chsk_core_es.oKN:_ref$dataComponent,style=_ref.style,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,chsk_core_es.wIO)().data,preparedData=(0,context.Im)(),scales=(0,chsk_core_es.kE1)().scales,colorScale=scales.color,data=preparedData.data,_useDisabledKeys=(0,chsk_core_es.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender,horizontal=(0,chsk_core_es.y7R)(scales.y);if(!(0,predicates.fV)(processedData))return null;var _useMemo=(0,react.useMemo)((function(){return(0,chsk_core_es.pP)(ids,keys,preparedData)}),[ids,keys,preparedData]),idSet=_useMemo.idSet,keySet=_useMemo.keySet,allKeys=preparedData.keys,pathStyles=(0,react.useMemo)((function(){return allKeys.map((function(k,i){return(0,chsk_core_es.hIX)(style,colorScale(i))}))}),[allKeys,style,colorScale]),curve="step"===variant?"Step":"BasisClosed",result=preparedData.keys.map((function(k,i){if(!keySet.has(k))return null;var visible=!disabledKeys.has(k),items=data.map((function(seriesData){var _seriesProcessedData$;if(!idSet.has(seriesData.id))return null;var summary=seriesData.data[i];if(!summary)return null;var points=function violinPoints(_ref){var values=_ref.values,breaks=_ref.breaks,bandStart=_ref.bandStart,bandWidth=_ref.bandWidth,horizontal=_ref.horizontal,maxValue=(0,chsk_core_es.Fp7)(values);if(maxValue<=0)return[];var _trimIndexes=function trimIndexes(values){for(var start=0,end=values.length;0===values[start]&&start<end;)start+=1;for(;0===values[end-1]&&end>start;)end-=1;return[start,end]}(values),start=_trimIndexes[0],end=_trimIndexes[1],histogram=(0,chsk_core_es.LM9)(values.slice(start,end),breaks.slice(start,end+1)),halfWidth=bandWidth/2,midBand=bandStart+halfWidth,multiplier=halfWidth/maxValue,fwd=histogram.map((function(xy){return[xy[0],midBand+xy[1]*multiplier]})),rev=histogram.map((function(xy){return[xy[0],midBand-xy[1]*multiplier]})).reverse(),result=fwd.concat(rev);return horizontal?result:result.map((function(xy){return[xy[1],xy[0]]}))}(_extends({},summary,{horizontal}));if(0===points.length)return null;var seriesProcessedData=processedData[seriesData.index].data[i];return(0,react.createElement)(dataComponent,_extends({key:"violin-"+seriesData.index+"-"+i,data:{id:seriesData.id,key:k,n:null!=(_seriesProcessedData$=null==seriesProcessedData?void 0:seriesProcessedData.n)?_seriesProcessedData$:0},component,props:{variant:"violin",points,curve,closed:!0,className,style:pathStyles[i],setRole:!1}},props))})).filter(Boolean);return(0,jsx_runtime.jsx)(chsk_core_es.JjT,{role:"violins",visible,firstRender,children:items},"violins-"+i)}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result})};try{Violins.displayName="Violins",Violins.__docgenInfo={description:"",displayName:"Violins",props:{variant:{defaultValue:{value:"smooth"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"smooth"'},{value:'"step"'}]}},component:{defaultValue:null,description:"component used to draw individual bars",name:"component",required:!1,type:{name:"FC<PathProps>"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},keys:{defaultValue:null,description:"keys to display (default to all keys)",name:"keys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<ViolinInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<ViolinInteractiveDataItem, PathProps>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/violins/Violins.tsx#Violins"]={docgenInfo:Violins.__docgenInfo,name:"Violins",path:"packages/band/src/violins/Violins.tsx#Violins"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/violins/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Im:()=>useViolinPreparedData,lA:()=>ViolinPreparedDataProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ViolinPreparedDataContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({data:[],seriesIndexes:{},keys:[]}),ViolinPreparedDataProvider=function ViolinPreparedDataProvider(_ref){var data=_ref.data,seriesIndexes=_ref.seriesIndexes,keys=_ref.keys,children=_ref.children,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{data,seriesIndexes,keys}}),[data]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ViolinPreparedDataContext.Provider,{value,children})};ViolinPreparedDataProvider.displayName="ViolinPreparedDataProvider";var useViolinPreparedData=function useViolinPreparedData(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ViolinPreparedDataContext)};try{ViolinPreparedDataProvider.displayName="ViolinPreparedDataProvider",ViolinPreparedDataProvider.__docgenInfo={description:"",displayName:"ViolinPreparedDataProvider",props:{data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"ViolinPreparedDataItem[]"}},seriesIndexes:{defaultValue:null,description:"map from series ids to indexes",name:"seriesIndexes",required:!0,type:{name:"Record<string, number>"}},keys:{defaultValue:null,description:"list of keys",name:"keys",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/violins/context.tsx#ViolinPreparedDataProvider"]={docgenInfo:ViolinPreparedDataProvider.__docgenInfo,name:"ViolinPreparedDataProvider",path:"packages/band/src/violins/context.tsx#ViolinPreparedDataProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/violins/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fV:()=>isViolinProcessedData,ku:()=>isViolinProcessedSummary});var isViolinProcessedSummary=function isViolinProcessedSummary(x){if("object"!=typeof x||null===x)return!1;if(!("n"in x))return!1;return["values","breaks"].map((function(k){return Array.isArray(x[k])})).every(Boolean)},isViolinProcessedData=function isViolinProcessedData(data){var result=data.map((function(item){return"object"==typeof item&&null!==item&&("id"in item&&"index"in item&&"data"in item&&"domain"in item)}));return result.length>0&&result.every(Boolean)}},"./packages/band/stories/violins/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>ChartViolinDecorator,X:()=>commonViolinProps});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/violins/Violin.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonViolinProps={data:_decorators__WEBPACK_IMPORTED_MODULE_1__.A,keys:["x","y"],scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]},paddingInternal:.2},ChartViolinDecorator=function ChartViolinDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.B,_extends({},commonViolinProps,{horizontal:!1,breaks:12,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartViolinDecorator.displayName="ChartViolinDecorator";try{ChartViolinDecorator.displayName="ChartViolinDecorator",ChartViolinDecorator.__docgenInfo={description:"",displayName:"ChartViolinDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/violins/decorators.tsx#ChartViolinDecorator"]={docgenInfo:ChartViolinDecorator.__docgenInfo,name:"ChartViolinDecorator",path:"packages/band/stories/violins/decorators.tsx#ChartViolinDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);