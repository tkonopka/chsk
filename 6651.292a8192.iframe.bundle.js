"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[6651],{"./packages/xy/src/density/Density.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Density});var react=__webpack_require__("./node_modules/react/index.js"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),helpers=__webpack_require__("./packages/xy/src/scatter/helpers.ts"),types=__webpack_require__("./packages/xy/src/density/types.ts"),lab=__webpack_require__("./node_modules/d3-color/src/lab.js"),round=Math.round,context=__webpack_require__("./packages/xy/src/density/context.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","data","x","y","valueColor","binSize","scaleX","scaleY","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var prepareData=function prepareData(_ref2){var data=_ref2.data,x=_ref2.x,y=_ref2.y,_ref2$valueColor=_ref2.valueColor,valueColor=void 0===_ref2$valueColor?null:_ref2$valueColor,scales=_ref2.scales,binSize=_ref2.binSize,disabled=_ref2.disabled,scaleX=scales.x,scaleY=scales.y,scaleColor=scales.color,bins={},binKeys=new Set;return data.forEach((function(seriesData,i){var xValues,yValues,colorValues,d=seriesData.data,countIncrement=disabled[i]?0:1;if((0,chsk_core_es.kJL)(d)){var getX=(0,chsk_core_es.wIU)(x),getY=(0,chsk_core_es.wIU)(y),getColor=valueColor?(0,chsk_core_es.wIU)(valueColor):null;xValues=d.map((function(item){return getX(item)})),yValues=d.map((function(item){return getY(item)})),colorValues=getColor?d.map((function(item){return getColor(item)})):Array(xValues.length).fill(i)}else{var _getX2=(0,chsk_core_es.wIU)(String(x)),_getY2=(0,chsk_core_es.wIU)(String(y)),_getColor2=valueColor?(0,chsk_core_es.wIU)(String(valueColor)):null;xValues=_getX2(d),yValues=_getY2(d),colorValues=_getColor2?_getColor2(d):Array(xValues.length).fill(i)}xValues.forEach((function(v,j){var xBin=round(scaleX(v)/binSize),yBin=round(scaleY(Number(yValues[j]))/binSize),key=xBin+","+yBin;binKeys.has(key)||(binKeys.add(key),bins[key]=[xBin,yBin,0,"",[]]);var binsData=bins[key];countIncrement&&binsData&&(binsData[types.z3]+=1,binsData[types.Nj].push(Number(colorValues[j])))}))})),Object.values(bins).map((function(item){return item[types.vm]=function avgLab(values,scale){for(var n=values.length,l=0,a=0,b=0,i=0;i<n;){for(var v=values[i],j=1;i+j<n&&values[i+j]==v;)j+=1;var vColor=(0,lab.ZP)(scale(v));l+=j*vColor.l,a+=j*vColor.a,b+=j*vColor.b,i+=j}return(0,lab.ZP)(l/n,a/n,b/n).formatHex()}(item[types.Nj],scaleColor),item})).sort((function(a,b){return a[types.z3]-b[types.z3]}))},Density=function Density(_ref3){var _ref3$container=_ref3.container,container=void 0===_ref3$container?chsk_core_es.WdC:_ref3$container,data=_ref3.data,x=_ref3.x,y=_ref3.y,_ref3$valueColor=_ref3.valueColor,valueColor=void 0===_ref3$valueColor?null:_ref3$valueColor,_ref3$binSize=_ref3.binSize,binSize=void 0===_ref3$binSize?3:_ref3$binSize,_ref3$scaleX=_ref3.scaleX,scaleX=void 0===_ref3$scaleX?chsk_core_es.Bs3:_ref3$scaleX,_ref3$scaleY=_ref3.scaleY,scaleY=void 0===_ref3$scaleY?chsk_core_es.Bs3:_ref3$scaleY,scaleColor=_ref3.scaleColor,children=_ref3.children,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(_ref3,_excluded),theme=(0,chsk_core_es.FgM)(),_useContainer=(0,chsk_core_es.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,seriesIndexes=(0,react.useMemo)((function(){return(0,chsk_core_es.snp)(data)}),[data]),seriesIds=(0,react.useMemo)((function(){return data.map((function(item){return item.id}))}),[data]),disabled=(0,chsk_core_es.gKR)(seriesIds).disabled,processedData=(0,react.useMemo)((function(){return function processData(_ref){var data=_ref.data,x=_ref.x,y=_ref.y,_ref$valueColor=_ref.valueColor,valueColor=void 0===_ref$valueColor?null:_ref$valueColor;return data.map((function(seriesData,index){var d=seriesData.data;if((0,chsk_core_es.kJL)(d)){var getX=(0,chsk_core_es.wIU)(x),getY=(0,chsk_core_es.wIU)(y),getColor=valueColor?(0,chsk_core_es.wIU)(valueColor):null;return{id:seriesData.id,index,x:(0,chsk_core_es.FG_)(d.map((function(item){return getX(item)}))),y:(0,chsk_core_es.FG_)(d.map((function(item){return getY(item)}))),color:getColor?(0,chsk_core_es.FG_)(d.map((function(item){return getColor(item)}))):void 0}}var _getX=(0,chsk_core_es.wIU)(String(x)),_getY=(0,chsk_core_es.wIU)(String(y)),_getColor=valueColor?(0,chsk_core_es.wIU)(String(valueColor)):null;return{id:seriesData.id,index,x:(0,chsk_core_es.FG_)(_getX(d)),y:(0,chsk_core_es.FG_)(_getY(d)),color:_getColor?(0,chsk_core_es.FG_)(_getColor(d)):void 0}}))}({data,x,y,valueColor})}),[data,x,y,valueColor]),_useMemo=(0,react.useMemo)((function(){return(0,helpers.qe)(processedData,scaleX,scaleY,innerSize,Array(seriesIds.length).fill(!1))}),[processedData,scaleX,scaleY,innerSize,seriesIds]),xProps=_useMemo.x,yProps=_useMemo.y,colorProps=(0,react.useMemo)((function(){return(0,helpers.VF)(processedData,null!=scaleColor?scaleColor:theme.Color.categorical,seriesIds)}),[processedData,scaleColor,theme,seriesIds]),scalesContextValue=(0,chsk_core_es.cT_)({x:xProps,y:yProps,color:colorProps}),preparedData=(0,react.useMemo)((function(){return prepareData({data,x,y,valueColor,scales:scalesContextValue.scales,binSize,disabled})}),[data,x,y,valueColor,scalesContextValue,binSize,disabled]);return(0,jsx_runtime.jsx)(chsk_core_es.PzT,_extends({variant:"density",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys:seriesIds,scalesContextValue},props,{children:(0,jsx_runtime.jsx)(context.IO,{data:preparedData,binSize,seriesIndexes,keys:seriesIds,children:(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children})})}))};try{Density.displayName="Density",Density.__docgenInfo={description:"",displayName:"Density",props:{binSize:{defaultValue:{value:"3"},description:"bin size",name:"binSize",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"ScatterDataItem[]"}},x:{defaultValue:null,description:"extraction of x-axis values from raw data",name:"x",required:!0,type:{name:"string | AccessorFunction<number>"}},y:{defaultValue:null,description:"extraction of y-axis values from raw data",name:"y",required:!0,type:{name:"string | AccessorFunction<number>"}},valueColor:{defaultValue:{value:"null"},description:"extraction of a value for color",name:"valueColor",required:!1,type:{name:"string | AccessorFunction<number> | null"}},scaleX:{defaultValue:null,description:"scale for horizontal axis",name:"scaleX",required:!1,type:{name:"ContinuousScaleSpec"}},scaleY:{defaultValue:null,description:"scale for vertical axis",name:"scaleY",required:!1,type:{name:"ContinuousScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"ColorScaleSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/density/Density.tsx#Density"]={docgenInfo:Density.__docgenInfo,name:"Density",path:"packages/xy/src/density/Density.tsx#Density"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/density/DensityCells.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>DensityCells});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/xy/src/density/types.ts"),_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/src/density/context.tsx"),_DensitySimpleCell__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/density/DensitySimpleCell.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var max=Math.max,alphaScale=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.nm0)({variant:"sqrt",domain:[0,1],size:1}),DensityCells=function DensityCells(_ref){var _ref$component=_ref.component,component=void 0===_ref$component?_DensitySimpleCell__WEBPACK_IMPORTED_MODULE_3__.o:_ref$component,componentProps=_ref.componentProps,_ref$transparency=_ref.transparency,transparency=void 0===_ref$transparency||_ref$transparency,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,_useDensityPreparedDa=(0,_context__WEBPACK_IMPORTED_MODULE_4__.BJ)(),data=_useDensityPreparedDa.data,binSize=_useDensityPreparedDa.binSize,maxCount=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return data.reduce((function(acc,item){return max(acc,item[_types__WEBPACK_IMPORTED_MODULE_5__.z3])}),1)}),[data]),commonProps=_extends({},componentProps,{className}),elements=data.map((function(item){var x=item[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X],y=item[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y],value=item[_types__WEBPACK_IMPORTED_MODULE_5__.z3],opacity=transparency||0===value?alphaScale(value/maxCount):1,fill=item[_types__WEBPACK_IMPORTED_MODULE_5__.vm];return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component,_extends({key:x+"-"+y},commonProps,{value,x:x*binSize,y:y*binSize,width:binSize,height:binSize,style:{fill,opacity}}))}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{role:setRole?"density-cells":void 0,style,children:elements})};try{DensityCells.displayName="DensityCells",DensityCells.__docgenInfo={description:"",displayName:"DensityCells",props:{transparency:{defaultValue:{value:"true"},description:"use transparency proportional to cell count",name:"transparency",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},component:{defaultValue:{value:"({ value, x, y, width, height, ...props }: DensityCellProps) => {\n    if (value < 2) {\n        return <circle cx={x} cy={y} r={width / 2} {...props} />\n    }\n    return <rect x={x - width / 2} y={y - height / 2} width={width} height={height} {...props} />\n}"},description:"function used to draw individual components",name:"component",required:!1,type:{name:"FC<DensityCellProps>"}},componentProps:{defaultValue:null,description:"props passed to each component",name:"componentProps",required:!1,type:{name:"Partial<DensityCellProps>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/density/DensityCells.tsx#DensityCells"]={docgenInfo:DensityCells.__docgenInfo,name:"DensityCells",path:"packages/xy/src/density/DensityCells.tsx#DensityCells"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/density/DensitySimpleCell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>DensitySimpleCell});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["value","x","y","width","height"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var DensitySimpleCell=function DensitySimpleCell(_ref){var value=_ref.value,x=_ref.x,y=_ref.y,width=_ref.width,height=_ref.height,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(_ref,_excluded);return value<2?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",_extends({cx:x,cy:y,r:width/2},props)):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",_extends({x:x-width/2,y:y-height/2,width,height},props))};try{DensitySimpleCell.displayName="DensitySimpleCell",DensitySimpleCell.__docgenInfo={description:"",displayName:"DensitySimpleCell",props:{value:{defaultValue:null,description:"data count",name:"value",required:!0,type:{name:"number"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},x:{defaultValue:null,description:"x coordinate",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"y coordinate",name:"y",required:!0,type:{name:"number"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},width:{defaultValue:null,description:"width",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"height",name:"height",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/density/DensitySimpleCell.tsx#DensitySimpleCell"]={docgenInfo:DensitySimpleCell.__docgenInfo,name:"DensitySimpleCell",path:"packages/xy/src/density/DensitySimpleCell.tsx#DensitySimpleCell"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/density/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BJ:()=>useDensityPreparedData,IO:()=>DensityPreparedDataProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),DensityPreparedDataContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({data:[],binSize:1,seriesIndexes:{},keys:[]}),DensityPreparedDataProvider=function DensityPreparedDataProvider(_ref){var data=_ref.data,binSize=_ref.binSize,seriesIndexes=_ref.seriesIndexes,keys=_ref.keys,children=_ref.children,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{data,binSize,seriesIndexes,keys}}),[data,binSize,seriesIndexes,keys]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DensityPreparedDataContext.Provider,{value,children})},useDensityPreparedData=function useDensityPreparedData(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DensityPreparedDataContext)};try{DensityPreparedDataProvider.displayName="DensityPreparedDataProvider",DensityPreparedDataProvider.__docgenInfo={description:"",displayName:"DensityPreparedDataProvider",props:{keys:{defaultValue:null,description:"list of keys",name:"keys",required:!0,type:{name:"string[]"}},seriesIndexes:{defaultValue:null,description:"map from series ids to indexes",name:"seriesIndexes",required:!0,type:{name:"Record<string, number>"}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"DensityPreparedDataItem[]"}},binSize:{defaultValue:null,description:"bin size",name:"binSize",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/density/context.tsx#DensityPreparedDataProvider"]={docgenInfo:DensityPreparedDataProvider.__docgenInfo,name:"DensityPreparedDataProvider",path:"packages/xy/src/density/context.tsx#DensityPreparedDataProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/density/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nj:()=>DENSITY_CONTENT,vm:()=>DENSITY_COLOR,z3:()=>DENSITY_COUNT});var DENSITY_COUNT=2,DENSITY_COLOR=3,DENSITY_CONTENT=4},"./packages/xy/stories/density/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{dQ:()=>ChartForCrosshairTooltipDecorator,hb:()=>ChartDensityDecorator,jc:()=>densityData,vB:()=>ChartCellDecorator,ww:()=>ChartForCrosshairDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/xy/src/density/Density.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/density/DensityCells.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),densityData=function generateDensityData(ids,n,round){return void 0===round&&(round=2),ids.map((function(id,i){var series={id},indexes=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.w6H)(n[i]),x=Math.random(),y=Math.random();return series.data={x:indexes.map((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.DJC)(x+Math.random(),round)})),y:indexes.map((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.DJC)(y+Math.random(),round)})),c:indexes.map((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.DJC)(Math.abs(Math.random()),round)}))},series}))}(["alpha","beta"],[180,120]),ChartCellDecorator=function ChartCellDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,160],padding:[40,40,40,40],style:{display:"inline-block"},children:Story()})},ChartDensityDecorator=function ChartDensityDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.A,{data:densityData,x:"x",y:"y",binSize:20,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left",label:"y (a.u.)"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.DeQ,{position:[230,60],anchor:[0,.5],positionUnits:"absolute",title:"Groups"})]})})},ChartForCrosshairDecorator=function ChartForCrosshairDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.A,{data:densityData,x:"x",y:"y",binSize:20,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left",label:"y (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.P,{}),Story()]})})},ChartForCrosshairTooltipDecorator=function ChartForCrosshairTooltipDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.A,{data:densityData,x:"x",y:"y",binSize:20,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left",label:"y (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.P,{}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.ua7,{itemSize:[120,25]})]})})};try{ChartCellDecorator.displayName="ChartCellDecorator",ChartCellDecorator.__docgenInfo={description:"",displayName:"ChartCellDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/density/decorators.tsx#ChartCellDecorator"]={docgenInfo:ChartCellDecorator.__docgenInfo,name:"ChartCellDecorator",path:"packages/xy/stories/density/decorators.tsx#ChartCellDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDensityDecorator.displayName="ChartDensityDecorator",ChartDensityDecorator.__docgenInfo={description:"",displayName:"ChartDensityDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/density/decorators.tsx#ChartDensityDecorator"]={docgenInfo:ChartDensityDecorator.__docgenInfo,name:"ChartDensityDecorator",path:"packages/xy/stories/density/decorators.tsx#ChartDensityDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForCrosshairDecorator.displayName="ChartForCrosshairDecorator",ChartForCrosshairDecorator.__docgenInfo={description:"",displayName:"ChartForCrosshairDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/density/decorators.tsx#ChartForCrosshairDecorator"]={docgenInfo:ChartForCrosshairDecorator.__docgenInfo,name:"ChartForCrosshairDecorator",path:"packages/xy/stories/density/decorators.tsx#ChartForCrosshairDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForCrosshairTooltipDecorator.displayName="ChartForCrosshairTooltipDecorator",ChartForCrosshairTooltipDecorator.__docgenInfo={description:"",displayName:"ChartForCrosshairTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/density/decorators.tsx#ChartForCrosshairTooltipDecorator"]={docgenInfo:ChartForCrosshairTooltipDecorator.__docgenInfo,name:"ChartForCrosshairTooltipDecorator",path:"packages/xy/stories/density/decorators.tsx#ChartForCrosshairTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/d3-color/src/lab.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>lab});var src_define=__webpack_require__("./node_modules/d3-color/src/define.js"),color=__webpack_require__("./node_modules/d3-color/src/color.js");const radians=Math.PI/180,degrees=180/Math.PI,Xn=.96422,Yn=1,Zn=.82521,t0=4/29,t1=6/29,t2=3*t1*t1,t3=t1*t1*t1;function labConvert(o){if(o instanceof Lab)return new Lab(o.l,o.a,o.b,o.opacity);if(o instanceof Hcl)return hcl2lab(o);o instanceof color.Ss||(o=(0,color.SU)(o));var x,z,r=rgb2lrgb(o.r),g=rgb2lrgb(o.g),b=rgb2lrgb(o.b),y=xyz2lab((.2225045*r+.7168786*g+.0606169*b)/Yn);return r===g&&g===b?x=z=y:(x=xyz2lab((.4360747*r+.3850649*g+.1430804*b)/Xn),z=xyz2lab((.0139322*r+.0971045*g+.7141733*b)/Zn)),new Lab(116*y-16,500*(x-y),200*(y-z),o.opacity)}function lab(l,a,b,opacity){return 1===arguments.length?labConvert(l):new Lab(l,a,b,null==opacity?1:opacity)}function Lab(l,a,b,opacity){this.l=+l,this.a=+a,this.b=+b,this.opacity=+opacity}function xyz2lab(t){return t>t3?Math.pow(t,1/3):t/t2+t0}function lab2xyz(t){return t>t1?t*t*t:t2*(t-t0)}function lrgb2rgb(x){return 255*(x<=.0031308?12.92*x:1.055*Math.pow(x,1/2.4)-.055)}function rgb2lrgb(x){return(x/=255)<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4)}function hclConvert(o){if(o instanceof Hcl)return new Hcl(o.h,o.c,o.l,o.opacity);if(o instanceof Lab||(o=labConvert(o)),0===o.a&&0===o.b)return new Hcl(NaN,0<o.l&&o.l<100?0:NaN,o.l,o.opacity);var h=Math.atan2(o.b,o.a)*degrees;return new Hcl(h<0?h+360:h,Math.sqrt(o.a*o.a+o.b*o.b),o.l,o.opacity)}function Hcl(h,c,l,opacity){this.h=+h,this.c=+c,this.l=+l,this.opacity=+opacity}function hcl2lab(o){if(isNaN(o.h))return new Lab(o.l,0,0,o.opacity);var h=o.h*radians;return new Lab(o.l,Math.cos(h)*o.c,Math.sin(h)*o.c,o.opacity)}(0,src_define.Z)(Lab,lab,(0,src_define.l)(color.Il,{brighter(k){return new Lab(this.l+18*(null==k?1:k),this.a,this.b,this.opacity)},darker(k){return new Lab(this.l-18*(null==k?1:k),this.a,this.b,this.opacity)},rgb(){var y=(this.l+16)/116,x=isNaN(this.a)?y:y+this.a/500,z=isNaN(this.b)?y:y-this.b/200;return x=Xn*lab2xyz(x),y=Yn*lab2xyz(y),z=Zn*lab2xyz(z),new color.Ss(lrgb2rgb(3.1338561*x-1.6168667*y-.4906146*z),lrgb2rgb(-.9787684*x+1.9161415*y+.033454*z),lrgb2rgb(.0719453*x-.2289914*y+1.4052427*z),this.opacity)}})),(0,src_define.Z)(Hcl,(function hcl(h,c,l,opacity){return 1===arguments.length?hclConvert(h):new Hcl(h,c,l,null==opacity?1:opacity)}),(0,src_define.l)(color.Il,{brighter(k){return new Hcl(this.h,this.c,this.l+18*(null==k?1:k),this.opacity)},darker(k){return new Hcl(this.h,this.c,this.l-18*(null==k?1:k),this.opacity)},rgb(){return hcl2lab(this).rgb()}}))}}]);