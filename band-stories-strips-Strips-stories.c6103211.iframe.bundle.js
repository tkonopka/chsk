"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9594],{"./packages/band/src/bands/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>isBandProcessedDataArray});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),isBandProcessedDataArray=function isBandProcessedDataArray(data,predicate){var result=data.map((function(item){return"object"==typeof item&&null!==item&&(!!("id"in item&&"index"in item&&"data"in item&&"domain"in item)&&((0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kJL)(item.data)&&item.data.map(predicate).every(Boolean)))}));return result.length>0&&result.every(Boolean)}},"./packages/band/src/bars/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>getScaleProps,u:()=>getInternalWidthAndGap});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),getScaleProps=function getScaleProps(ids,data,scaleSpecIndex,scaleSpecValue,size,horizontal,disabled,stacked){void 0===stacked&&(stacked=!1);var result={index:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.BRZ)(scaleSpecIndex),value:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.BRZ)(scaleSpecValue)};if((0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.HBl)(scaleSpecIndex)||(result.index.domain=ids),!(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.HBl)(scaleSpecValue)){var active=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RGn)(disabled).filter((function(i){return!disabled[i]})),isValue=function isValue(v){return void 0!==v&&isFinite(Number(v))},values=data.map((function(d){return active.map((function(i){return d[i]})).flat().filter(isValue)})),domain=stacked?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.FG_)(values.map((function sumValues(values){var positive=values.reduce((function(acc,v){return isFinite(v)&&v>0?acc+v:acc}),0);return[values.reduce((function(acc,v){return isFinite(v)&&v<0?acc+v:acc}),0),positive]})).flat()):(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.FG_)(values.flat());result.value=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.zAC)(scaleSpecValue,domain)}return result.index.size=horizontal?size[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]:size[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],result.value.size=horizontal?size[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]:size[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],result},getInternalWidthAndGap=function getInternalWidthAndGap(indexScale,keys,paddingInternal,variant){var bandwidth=indexScale.bandwidth(),nKeys=keys.length,padInternal=paddingInternal||0,width="grouped"===variant?bandwidth/nKeys:bandwidth,advance=width*padInternal;return"grouped"===variant?[width*(1-padInternal),advance/2,advance]:[width*(1-padInternal),advance/2,-width*(1-padInternal)]}},"./packages/band/src/strips/Strip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Strip});var react=__webpack_require__("./node_modules/react/index.js"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/band/src/strips/context.tsx"),utils=__webpack_require__("./packages/band/src/bars/utils.ts"),getStripInternalOrder=function getStripInternalOrder(jitter,values){var result=(0,chsk_core_es.RGn)(values);if("none"===jitter)return result;if("random"===jitter)return result.sort((function(){return Math.random()-.5}));if("middle"===jitter)return Array(values.length).fill((values.length+1)/2);var aux=values.map((function(v,i){return[v,i]}));return"increasing"===jitter||"ascending"===jitter?aux.sort((function ascendingComparator(a,b){return a[0]-b[0]})).forEach((function(vi,j){return result[vi[1]]=j})):aux.sort((function descendingComparator(a,b){return b[0]-a[0]})).forEach((function(vi,j){return result[vi[1]]=j})),result},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","variant","data","keys","jitter","valueSize","horizontal","autoRescale","paddingInternal","scaleIndex","scaleValue","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Strip=function Strip(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?chsk_core_es.WdC:_ref$container,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"grouped":_ref$variant,data=_ref.data,keys=_ref.keys,_ref$jitter=_ref.jitter,jitter=void 0===_ref$jitter?"none":_ref$jitter,_ref$valueSize=_ref.valueSize,valueSize=void 0===_ref$valueSize?3:_ref$valueSize,_ref$horizontal=_ref.horizontal,horizontal=void 0!==_ref$horizontal&&_ref$horizontal,_ref$autoRescale=_ref.autoRescale,autoRescale=void 0===_ref$autoRescale||_ref$autoRescale,_ref$paddingInternal=_ref.paddingInternal,paddingInternal=void 0===_ref$paddingInternal?0:_ref$paddingInternal,_ref$scaleIndex=_ref.scaleIndex,scaleIndex=void 0===_ref$scaleIndex?chsk_core_es.Us:_ref$scaleIndex,_ref$scaleValue=_ref.scaleValue,scaleValue=void 0===_ref$scaleValue?chsk_core_es.Tx9:_ref$scaleValue,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(_ref,_excluded),theme=(0,chsk_core_es.FgM)(),_useContainer=(0,chsk_core_es.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,disabled=(0,chsk_core_es.gKR)(keys).disabled,seriesIndexes=(0,react.useMemo)((function(){return(0,chsk_core_es.snp)(data)}),[data]),processedData=(0,react.useMemo)((function(){return function processData(data,keys,valueSize,jitter){var accessors=keys.map((function(k){return(0,chsk_core_es.wIU)(k)}));return data.map((function(seriesData,index){var summaries=accessors.map((function(f){var raw=f(seriesData);if(raw&&(0,chsk_core_es.kJL)(raw))return{value:raw,internal:getStripInternalOrder(jitter,raw),valueSize:Array(raw.length).fill(valueSize)}}));return{id:seriesData.id,index,data:summaries,domain:summaries.map((function(summary){return summary?(0,chsk_core_es.FG_)(null==summary?void 0:summary.value):void 0}))}}))}(data,keys,valueSize,jitter)}),[data,keys,valueSize,jitter]),_getScaleProps=(0,utils.P)(processedData.map((function(d){return d.id})),processedData.map((function(d){return d.domain})),scaleIndex,scaleValue,innerSize,horizontal,autoRescale?disabled:Array(keys.length).fill(!1)),indexProps=_getScaleProps.index,valueProps=_getScaleProps.value,xProps=horizontal?valueProps:indexProps,yProps=horizontal?indexProps:valueProps,colorProps=(0,chsk_core_es.NVB)(null!=scaleColor?scaleColor:theme.Color.categorical,keys),scalesContextValue=(0,chsk_core_es.cT_)({x:xProps,y:yProps,color:colorProps}),scales=scalesContextValue.scales,indexScale=horizontal?scales.y:scales.x,valueScale=horizontal?scales.x:scales.y,_getInternalWidthAndG=(0,utils.u)(indexScale,keys,paddingInternal,variant),stripWidth=_getInternalWidthAndG[0],stripOffset=_getInternalWidthAndG[1],stripGap=_getInternalWidthAndG[2],preparedData=(0,react.useMemo)((function(){return function prepareData(data,indexScale,valueScale,width,offset,gap){return data.map((function(seriesData){var bandStart=indexScale(seriesData.id)-indexScale.bandwidth()/2+offset,summaries=seriesData.data.map((function(summary){if(bandStart+=width+gap,summary){var n=summary.value.length,internalInterval=n<=1?width:width/(summary.value.length-1),internalStart=bandStart-width-gap+(n<=1?width/2:0);return{value:summary.value.map((function(v){return valueScale(v)})),internal:summary.internal.map((function(v){return internalStart+v*internalInterval})),valueSize:summary.valueSize.map((function(v){return v})),bandStart:bandStart-width-gap,bandWidth:width}}}));return{id:seriesData.id,index:seriesData.index,data:summaries}}))}(processedData,indexScale,valueScale,stripWidth,stripOffset,stripGap)}),[processedData,indexScale,valueScale,stripWidth,stripOffset,stripGap]);return(0,jsx_runtime.jsx)(chsk_core_es.PzT,_extends({variant:"strip",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys,scalesContextValue},props,{children:(0,jsx_runtime.jsx)(context.nQ,{data:preparedData,seriesIndexes,keys,children:(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children})})}))};try{Strip.displayName="Strip",Strip.__docgenInfo={description:"",displayName:"Strip",props:{variant:{defaultValue:{value:"grouped"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grouped"'},{value:'"layered"'}]}},jitter:{defaultValue:{value:"none"},description:"determines how points are arranged within a strip",name:"jitter",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"none"'},{value:'"random"'},{value:'"ascending"'},{value:'"increasing"'},{value:'"descending"'},{value:'"decreasing"'}]}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"StripDataItem[]"}},valueSize:{defaultValue:{value:"3"},description:"size of dots",name:"valueSize",required:!1,type:{name:"number"}},keys:{defaultValue:null,description:"list of all keys associated with a band",name:"keys",required:!0,type:{name:"string[]"}},horizontal:{defaultValue:{value:"false"},description:"display bands horizontally",name:"horizontal",required:!1,type:{name:"boolean"}},paddingInternal:{defaultValue:{value:"0"},description:"padding between bands in the same group/index",name:"paddingInternal",required:!1,type:{name:"number"}},scaleIndex:{defaultValue:null,description:"scale for axis with discrete indexes",name:"scaleIndex",required:!1,type:{name:"ScaleWithBandwidthSpec"}},scaleValue:{defaultValue:null,description:"scale for axis with continuous values",name:"scaleValue",required:!1,type:{name:"ContinuousScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}},autoRescale:{defaultValue:{value:"true"},description:"automatically adjust scales if/when data subsets become disabled",name:"autoRescale",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/strips/Strip.tsx#Strip"]={docgenInfo:Strip.__docgenInfo,name:"Strip",path:"packages/band/src/strips/Strip.tsx#Strip"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/strips/Strips.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Strips});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/band/src/strips/context.tsx"),react=__webpack_require__("./node_modules/react/index.js"),predicates=__webpack_require__("./packages/band/src/bands/predicates.ts"),isStripProcessedPoints=function isStripProcessedPoints(x){return!x||"object"==typeof x&&("internal"in x&&"value"in x&&"valueSize"in x)},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","keys","component","componentProps","setRole","className","symbolStyle","dataComponent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Strips=function Strips(_ref){var ids=_ref.ids,keys=_ref.keys,_ref$component=_ref.component,component=void 0===_ref$component?chsk_core_es.Cdc:_ref$component,componentProps=_ref.componentProps,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,className=_ref.className,symbolStyle=_ref.symbolStyle,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?chsk_core_es.Aj5:_ref$dataComponent,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(_ref,_excluded),processedData=(0,chsk_core_es.wIO)().data,preparedData=(0,context.xh)(),scales=(0,chsk_core_es.kE1)().scales,colorScale=scales.color,data=preparedData.data,_useDisabledKeys=(0,chsk_core_es.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender,horizontal=(0,chsk_core_es.y7R)(scales.y),_useIdsKeys=(0,chsk_core_es.lRm)(ids,keys,preparedData),idSet=_useIdsKeys.idSet,keySet=_useIdsKeys.keySet;if(!function isStripProcessedData(data){return(0,predicates.y)(data,isStripProcessedPoints)}(processedData))return null;var allKeys=preparedData.keys,symbolStyles=(0,react.useMemo)((function(){return(0,chsk_core_es.RGn)(allKeys).map((function(i){return(0,chsk_core_es.hIX)(symbolStyle,colorScale(i))}))}),[allKeys,symbolStyle,colorScale]),commonProps=_extends({setRole:!1},componentProps,{className}),result=preparedData.keys.map((function(k,i){if(!keySet.has(k))return null;var visible=!disabledKeys.has(k),items=data.map((function(seriesData){var _processedData$series;if(!idSet.has(seriesData.id))return null;var summary=seriesData.data[i];if(!summary)return null;var x=horizontal?summary.value:summary.internal,y=horizontal?summary.internal:summary.value,seriesProcessedData=null==(_processedData$series=processedData[seriesData.index])?void 0:_processedData$series.data[i];return summary.valueSize.map((function(valueSize,j){return(0,react.createElement)(dataComponent,_extends({key:"p-"+seriesData.index+"-"+i+"-"+j,data:{id:seriesData.id,key:k,index:j,value:null==seriesProcessedData?void 0:seriesProcessedData.value[j],valueSize:null==seriesProcessedData?void 0:seriesProcessedData.valueSize[j]},component,props:_extends({},commonProps,{cx:x[j],cy:y[j],r:valueSize,style:symbolStyles[i]})},props))}))})).filter(Boolean).flat();return(0,jsx_runtime.jsx)(chsk_core_es.JjT,{role:setRole?"strips":void 0,visible,firstRender,children:items},"s-"+i)}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result})};try{Strips.displayName="Strips",Strips.__docgenInfo={description:"",displayName:"Strips",props:{symbolStyle:{defaultValue:null,description:"style for symbols",name:"symbolStyle",required:!1,type:{name:"Partial<CSSProperties>"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},keys:{defaultValue:null,description:"keys to display (default to all keys)",name:"keys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<StripInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<StripInteractiveDataItem, SymbolProps>>"}},component:{defaultValue:null,description:"function used to draw individual components",name:"component",required:!1,type:{name:"FC<SymbolProps>"}},componentProps:{defaultValue:null,description:"props passed to each component",name:"componentProps",required:!1,type:{name:"Partial<SymbolProps>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/strips/Strips.tsx#Strips"]={docgenInfo:Strips.__docgenInfo,name:"Strips",path:"packages/band/src/strips/Strips.tsx#Strips"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/strips/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nQ:()=>StripPreparedDataProvider,xh:()=>useStripPreparedData});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),StripPreparedDataContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({data:[],seriesIndexes:{},keys:[]}),StripPreparedDataProvider=function StripPreparedDataProvider(_ref){var data=_ref.data,seriesIndexes=_ref.seriesIndexes,keys=_ref.keys,children=_ref.children,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{data,seriesIndexes,keys}}),[data]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StripPreparedDataContext.Provider,{value,children})},useStripPreparedData=function useStripPreparedData(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StripPreparedDataContext)};try{StripPreparedDataProvider.displayName="StripPreparedDataProvider",StripPreparedDataProvider.__docgenInfo={description:"",displayName:"StripPreparedDataProvider",props:{keys:{defaultValue:null,description:"list of keys",name:"keys",required:!0,type:{name:"string[]"}},seriesIndexes:{defaultValue:null,description:"map from series ids to indexes",name:"seriesIndexes",required:!0,type:{name:"Record<string, number>"}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"StripPreparedDataItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/strips/context.tsx#StripPreparedDataProvider"]={docgenInfo:StripPreparedDataProvider.__docgenInfo,name:"StripPreparedDataProvider",path:"packages/band/src/strips/context.tsx#StripPreparedDataProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ChartDecorator,A:()=>dataRawValues});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateUniformValues=function generateUniformValues(n,interval){var size=interval[1]-interval[0];return Array(n).fill(0).map((function(){return interval[0]+Math.random()*size}))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),Story()]})},dataRawValues=[{id:"alpha",x:generateUniformValues(30,[0,10]).map((function(v){return(0,chsk_core_es.DJC)(v,4)})),y:generateUniformValues(30,[2,16]).map((function(v){return(0,chsk_core_es.DJC)(v,4)}))},{id:"beta",x:generateUniformValues(30,[5,15]).map((function(v){return(0,chsk_core_es.DJC)(v,4)})),y:generateUniformValues(30,[10,20]).map((function(v){return(0,chsk_core_es.DJC)(v,4)}))}];try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/band/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/strips/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JA:()=>commonStripProps,PB:()=>onStripsClick,sb:()=>ChartStripDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/strips/Strip.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var commonStripProps={data:_decorators__WEBPACK_IMPORTED_MODULE_1__.A,keys:["x","y"],valueSize:4,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]},paddingInternal:.2},ChartStripDecorator=function ChartStripDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.D,_extends({},commonStripProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})},onStripsClick=function onStripsClick(data){console.log("clicked: "+JSON.stringify(data))};try{ChartStripDecorator.displayName="ChartStripDecorator",ChartStripDecorator.__docgenInfo={description:"",displayName:"ChartStripDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/strips/decorators.tsx#ChartStripDecorator"]={docgenInfo:ChartStripDecorator.__docgenInfo,name:"ChartStripDecorator",path:"packages/band/stories/strips/decorators.tsx#ChartStripDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onStripsClick.displayName="onStripsClick",onStripsClick.__docgenInfo={description:"",displayName:"onStripsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},valueSize:{defaultValue:null,description:"",name:"valueSize",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/strips/decorators.tsx#onStripsClick"]={docgenInfo:onStripsClick.__docgenInfo,name:"onStripsClick",path:"packages/band/stories/strips/decorators.tsx#onStripsClick"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/strips/Strips.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MouseClick:()=>MouseClick,SelectedIds:()=>SelectedIds,SelectedKeys:()=>SelectedKeys,Symbols:()=>Symbols,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/strips/Strips.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/strips/decorators.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Strips/Strips",component:_src__WEBPACK_IMPORTED_MODULE_0__.i},SelectedIds={name:"selected ids",args:{ids:["alpha"],symbolStyle:{strokeWidth:1,stroke:"#222222"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.sb]},SelectedKeys={name:"selected keys",args:{keys:["x"],symbolStyle:{strokeWidth:1,stroke:"#222222"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.sb]},Symbols={name:"symbols",args:{component:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.bK0,symbolStyle:{strokeWidth:1,stroke:"#222222"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.sb]},MouseClick={name:"mouse click",args:{handlers:{onClick:_decorators__WEBPACK_IMPORTED_MODULE_1__.PB}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.sb]},__namedExportsOrder=["SelectedIds","SelectedKeys","Symbols","MouseClick"];SelectedIds.parameters={...SelectedIds.parameters,docs:{...SelectedIds.parameters?.docs,source:{originalSource:"{\n  name: 'selected ids',\n  args: {\n    ids: ['alpha'],\n    symbolStyle: {\n      strokeWidth: 1,\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartStripDecorator]\n}",...SelectedIds.parameters?.docs?.source}}},SelectedKeys.parameters={...SelectedKeys.parameters,docs:{...SelectedKeys.parameters?.docs,source:{originalSource:"{\n  name: 'selected keys',\n  args: {\n    keys: ['x'],\n    symbolStyle: {\n      strokeWidth: 1,\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartStripDecorator]\n}",...SelectedKeys.parameters?.docs?.source}}},Symbols.parameters={...Symbols.parameters,docs:{...Symbols.parameters?.docs,source:{originalSource:"{\n  name: 'symbols',\n  args: {\n    component: Square,\n    symbolStyle: {\n      strokeWidth: 1,\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartStripDecorator]\n}",...Symbols.parameters?.docs?.source}}},MouseClick.parameters={...MouseClick.parameters,docs:{...MouseClick.parameters?.docs,source:{originalSource:"{\n  name: 'mouse click',\n  args: {\n    handlers: {\n      onClick: onStripsClick\n    }\n  },\n  decorators: [ChartStripDecorator]\n}",...MouseClick.parameters?.docs?.source}}}}}]);