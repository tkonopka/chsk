"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[310],{"./packages/matrix/src/heatmap/HeatMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>HeatMap});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/matrix/src/heatmap/helpers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","keys","data","dataSize","scaleX","scaleY","scaleColor","scaleSize","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var defaultHeatMapScaleSpec={variant:"band",padding:0},HeatMap=function HeatMap(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.WdC:_ref$container,keys=_ref.keys,data=_ref.data,dataSize=_ref.dataSize,_ref$scaleX=_ref.scaleX,scaleX=void 0===_ref$scaleX?defaultHeatMapScaleSpec:_ref$scaleX,_ref$scaleY=_ref.scaleY,scaleY=void 0===_ref$scaleY?defaultHeatMapScaleSpec:_ref$scaleY,scaleColor=_ref.scaleColor,_ref$scaleSize=_ref.scaleSize,scaleSize=void 0===_ref$scaleSize?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Ooi:_ref$scaleSize,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FgM)(),_useContainer=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,seriesIndexes=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.snp)(data)}),[data]),seriesIds=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return data.map((function(item){return item.id}))}),[data]),keyAccessors=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return keys.map((function(k){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(k)}))}),[keys]),processedData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function processData(accessors,data,dataSize){var sizeIndexes=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.snp)(dataSize);return data.map((function(seriesData,index){var id=seriesData.id,sizeIndex=sizeIndexes[id],sizeData=void 0!==sizeIndex&&void 0!==dataSize?dataSize[sizeIndex]:{id};return{id,index,value:accessors.map((function(f){return f(seriesData)})),size:accessors.map((function(f){return Number(f(sizeData))}))}}))}(keyAccessors,data,dataSize)}),[keyAccessors,data,dataSize]),_getXYScaleProps=(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.qe)(seriesIds,keys,scaleX,scaleY,innerSize),xProps=_getXYScaleProps.x,yProps=_getXYScaleProps.y,colorProps=(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.VF)(processedData,null!=scaleColor?scaleColor:theme.Colors.sequential),sizeProps=(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.Pu)(processedData,scaleSize,innerSize,seriesIds,keys),scalesContextValue=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.cT_)({x:xProps,y:yProps,color:colorProps,size:sizeProps});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.PzT,_extends({variant:"heatmap",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys,scalesContextValue},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.X,{features:framer_motion__WEBPACK_IMPORTED_MODULE_5__.H,children})}))};HeatMap.displayName="HeatMap";try{HeatMap.displayName="HeatMap",HeatMap.__docgenInfo={description:"",displayName:"HeatMap",props:{keys:{defaultValue:null,description:"list of all keys associated with a heatmap row",name:"keys",required:!0,type:{name:"string[]"}},data:{defaultValue:null,description:"primary data (used for color scale)",name:"data",required:!0,type:{name:"HeatMapDataItem[]"}},dataSize:{defaultValue:null,description:"secondary data (used for size scale)",name:"dataSize",required:!1,type:{name:"HeatMapDataItem[]"}},scaleX:{defaultValue:{value:"{\n    variant: 'band',\n    padding: 0,\n}"},description:"scale for horizontal axis",name:"scaleX",required:!1,type:{name:"BandScaleSpec"}},scaleY:{defaultValue:{value:"{\n    variant: 'band',\n    padding: 0,\n}"},description:"scale for vertical axis",name:"scaleY",required:!1,type:{name:"BandScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"ColorScaleSpec"}},scaleSize:{defaultValue:null,description:"scale for cell size",name:"scaleSize",required:!1,type:{name:"SizeScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/heatmap/HeatMap.tsx#HeatMap"]={docgenInfo:HeatMap.__docgenInfo,name:"HeatMap",path:"packages/matrix/src/heatmap/HeatMap.tsx#HeatMap"})}catch(__react_docgen_typescript_loader_error){}},"./packages/matrix/src/heatmap/HeatMapCells.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>HeatMapCells});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_predicates__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/matrix/src/heatmap/predicates.ts"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),_HeatMapRectangle__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/matrix/src/heatmap/HeatMapRectangle.tsx"),_helpers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/matrix/src/heatmap/helpers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),HeatMapCells=function HeatMapCells(_ref){var ids=_ref.ids,keys=_ref.keys,cells=_ref.cells,_ref$cell=_ref.cell,cell=void 0===_ref$cell?_HeatMapRectangle__WEBPACK_IMPORTED_MODULE_3__.e:_ref$cell,scaleColor=_ref.scaleColor,scaleSize=_ref.scaleSize,className=_ref.className,style=_ref.style,children=_ref.children,processedData=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_4__.wIO)(),scalesContextValue=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_4__.kE1)(),scales=scalesContextValue.scales,data=processedData.data;if(!(0,_predicates__WEBPACK_IMPORTED_MODULE_5__.jF)(data,scales))return null;var colorScale=scaleColor?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_4__.rio)(scaleColor):scales.color,sizeScale=scaleSize?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_4__.Pur)(scaleSize):scales.size,maxSize=sizeScale(sizeScale.domain()[1]),variableSize=isFinite(maxSize),_useMemo=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_4__.pP)(ids,keys,processedData)}),[ids,keys,processedData]),idSet=_useMemo.idSet,keySet=_useMemo.keySet,cellFilter=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_helpers__WEBPACK_IMPORTED_MODULE_6__.mJ)(cells,idSet,keySet)}),[cells,idSet,keySet]),scaleX=scales.x,scaleY=scales.y,x=processedData.keys.map((function(k){return scaleX(k)})),width=scales.x.bandwidth(),height=scales.y.bandwidth(),cellClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_4__.gjB)("cell",className),aspectRatio=width/height,elements=data.map((function(seriesData){if(!idSet.has(seriesData.id))return null;var y=scaleY(seriesData.id),values=seriesData.value,sizes=seriesData.size;return seriesData.value.map((function(v,i){if(!cellFilter(seriesData.id,processedData.keys[i]))return null;var cellColor=colorScale(values[i]),cellStyle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_4__.hIX)(style,cellColor),cell2R=2*(isFinite(sizes[i])?sizeScale(sizes[i]):maxSize);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(cell,{key:"cell-"+seriesData.index+"-"+i,x:x[i],y,width:variableSize?aspectRatio>1?cell2R*aspectRatio:cell2R:width,height:variableSize?aspectRatio>1?cell2R:cell2R/aspectRatio:height,cellValue:values[i],cellSize:sizes[i],className:cellClassName,style:cellStyle,center:!0,setRole:!1})}))})).flat().filter(Boolean);if(0===elements.length&&!children)return null;var customScalesContextValue=(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(scalesContextValue);return customScalesContextValue.scales.color=colorScale,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g",{role:"heatmap-cells",children:[elements,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.irH,{value:customScalesContextValue,children},"provider")]})};HeatMapCells.displayName="HeatMapCells";try{HeatMapCells.displayName="HeatMapCells",HeatMapCells.__docgenInfo={description:"",displayName:"HeatMapCells",props:{cells:{defaultValue:null,description:"id and key coordinates for subset of cells",name:"cells",required:!1,type:{name:"[string, string][]"}},cell:{defaultValue:{value:"({ x, y, width, height, className, style }: HeatMapCellProps) => {\n    return (\n        <rect\n            x={x - width / 2}\n            y={y - height / 2}\n            height={height}\n            width={width}\n            role={undefined}\n            style={style}\n            className={className}\n        />\n    )\n}"},description:"symbol for individual cells",name:"cell",required:!1,type:{name:"FC<HeatMapCellProps>"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"ColorScaleProps"}},scaleSize:{defaultValue:null,description:"scale for size",name:"scaleSize",required:!1,type:{name:"SizeScaleProps"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},keys:{defaultValue:null,description:"keys to display (default to all keys)",name:"keys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},ids:{defaultValue:null,description:"target ids (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},interactive:{defaultValue:null,description:"toggle response to mouse motion",name:"interactive",required:!1,type:{name:"boolean"}},edgeAnimation:{defaultValue:null,description:"animate appearance from edges",name:"edgeAnimation",required:!1,type:{name:"boolean"}},tooltipAlign:{defaultValue:null,description:"alignment of tooltip within a highlighted zone",name:"tooltipAlign",required:!1,type:{name:"AlignSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/heatmap/HeatMapCells.tsx#HeatMapCells"]={docgenInfo:HeatMapCells.__docgenInfo,name:"HeatMapCells",path:"packages/matrix/src/heatmap/HeatMapCells.tsx#HeatMapCells"})}catch(__react_docgen_typescript_loader_error){}},"./packages/matrix/src/heatmap/HeatMapRectangle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>HeatMapRectangle});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),HeatMapRectangle=function HeatMapRectangle(_ref){var x=_ref.x,y=_ref.y,width=_ref.width,height=_ref.height,className=_ref.className,style=_ref.style;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect",{x:x-width/2,y:y-height/2,height,width,role:void 0,style,className})};HeatMapRectangle.displayName="HeatMapRectangle";try{HeatMapRectangle.displayName="HeatMapRectangle",HeatMapRectangle.__docgenInfo={description:"",displayName:"HeatMapRectangle",props:{cellValue:{defaultValue:null,description:"value that determines cell color",name:"cellValue",required:!1,type:{name:"string | number"}},cellSize:{defaultValue:null,description:"value that determines cell size",name:"cellSize",required:!1,type:{name:"number"}},x:{defaultValue:null,description:"x coordinate",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"y coordinate",name:"y",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"width",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"height",name:"height",required:!0,type:{name:"number"}},rx:{defaultValue:null,description:"horizontal corner radius",name:"rx",required:!1,type:{name:"number"}},ry:{defaultValue:null,description:"vertical corner radius",name:"ry",required:!1,type:{name:"number"}},center:{defaultValue:null,description:"center the rectangle around (x, y)",name:"center",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionProps"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/heatmap/HeatMapRectangle.tsx#HeatMapRectangle"]={docgenInfo:HeatMapRectangle.__docgenInfo,name:"HeatMapRectangle",path:"packages/matrix/src/heatmap/HeatMapRectangle.tsx#HeatMapRectangle"})}catch(__react_docgen_typescript_loader_error){}},"./packages/matrix/src/heatmap/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Pu:()=>getSizeScaleProps,VF:()=>getColorScaleProps,mJ:()=>createCellFilter,qe:()=>getXYScaleProps});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),getXYScaleProps=function getXYScaleProps(ids,keys,scaleSpecX,scaleSpecY,size){var result={x:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(scaleSpecX),y:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(scaleSpecY)};return result.x.domain=keys,result.x.size=size[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X],result.y.domain=ids,result.y.size=size[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y],result},getColorScaleProps=function getColorScaleProps(data,scaleSpec){if("categorical"===scaleSpec.variant){var allValues=new Set(data.map((function(item){return item.value})).flat().map(String));return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.NVB)(scaleSpec,Array.from(allValues))}var minmax=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.FG_)(data.map((function(item){return item.value})).flat().map(Number).filter(isFinite));return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.NVB)(scaleSpec,minmax)},getSizeScaleProps=function getSizeScaleProps(data,scaleSpec,viewSize,ids,keys){var maxDomain=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Fp7)(data.map((function(seriesData){return seriesData.size})).flat()),maxSize=Math.min(viewSize[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y]/ids.length,viewSize[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X]/keys.length)/2;return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__._C2)(scaleSpec,maxDomain,maxSize)},createCellFilter=function createCellFilter(cells,ids,keys){var data={};return cells?cells.forEach((function(pair){var cellId=pair[0],cellKey=pair[1];data[cellId]||(data[cellId]=new Set),data[cellId].add(cellKey)})):Array.from(ids).forEach((function(cellId){data[cellId]=keys})),function(cellId,cellKey){return!!data[cellId]&&data[cellId].has(cellKey)}}},"./packages/matrix/src/heatmap/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jF:()=>isHeatMapSetting});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),isHeatMapSetting=function isHeatMapSetting(data,scales){return function isHeatMapProcessedData(data){return data.map((function(item){return"object"==typeof item&&null!==item&&"id"in item&&"index"in item&&"value"in item&&"size"in item})).every(Boolean)}(data)&&(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.y7R)(scales.x)&&(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.y7R)(scales.y)}},"./packages/matrix/src/upset/UpSet.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>UpSet});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","data","horizontal","scaleIndex","scaleMembership","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var defaultUpSetScaleSpec={variant:"band",padding:.25},UpSet=function UpSet(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?_chsk_core__WEBPACK_IMPORTED_MODULE_3__.WdC:_ref$container,data=_ref.data,_ref$horizontal=_ref.horizontal,horizontal=void 0===_ref$horizontal||_ref$horizontal,_ref$scaleIndex=_ref.scaleIndex,scaleIndex=void 0===_ref$scaleIndex?defaultUpSetScaleSpec:_ref$scaleIndex,_ref$scaleMembership=_ref.scaleMembership,scaleMembership=void 0===_ref$scaleMembership?defaultUpSetScaleSpec:_ref$scaleMembership,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.FgM)(),_useContainer=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,seriesIndexes=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.snp)(data)}),[data]),seriesIds=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return data.map((function(item){return item.id}))}),[data]),_useMemo=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function processData(data,ids,horizontal){var membership={};data.map((function(seriesData,i){var index=1<<i;new Set(seriesData.data).forEach((function(item){var k=String(item);membership[k]||(membership[k]=0),membership[k]+=index}))}));var allCounts=Array(Math.pow(2,data.length)).fill(0);Object.values(membership).forEach((function(index){allCounts[index]+=1}));var summary=allCounts.map((function(count,i){return count?[i,count]:null})).filter(Boolean);return summary.sort((function(a,b){return b[1]-a[1]})),{keys:summary.map((function(x){return String(x[0])})),processedData:data.map((function(seriesData,index){var id=seriesData.id,mask=1<<index;return{id,index,horizontal,data:summary.map((function(x){return(x[0]&mask)>0?x[1]:0}))}}))}}(data,0,horizontal)}),[data,seriesIds,horizontal]),keys=_useMemo.keys,processedData=_useMemo.processedData,_useMemo2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function getXYScaleProps(ids,keys,horizontal,scaleSpecIndex,scaleSpecMembership,size){var scalePropsIndex=(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(scaleSpecIndex);scalePropsIndex.domain=ids;var scalePropsMembership=(0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(scaleSpecMembership);scalePropsMembership.domain=keys;var result={x:horizontal?scalePropsMembership:scalePropsIndex,y:horizontal?scalePropsIndex:scalePropsMembership};return result.x.size=size[_chsk_core__WEBPACK_IMPORTED_MODULE_3__.X],result.y.size=size[_chsk_core__WEBPACK_IMPORTED_MODULE_3__.Y],result}(seriesIds,keys,horizontal,scaleIndex,scaleMembership,innerSize)}),[seriesIds,keys,horizontal,scaleIndex,scaleMembership,dimsProps]),xProps=_useMemo2.x,yProps=_useMemo2.y,colorProps=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.NVB)(null!=scaleColor?scaleColor:theme.Colors.categorical,[""]),scalesContextValue=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.cT_)({x:xProps,y:yProps,color:colorProps});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.PzT,_extends({variant:"upset",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys,scalesContextValue},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.X,{features:framer_motion__WEBPACK_IMPORTED_MODULE_5__.H,children})}))};UpSet.displayName="UpSet";try{UpSet.displayName="UpSet",UpSet.__docgenInfo={description:"",displayName:"UpSet",props:{data:{defaultValue:null,description:"primary data (used for color scale)",name:"data",required:!0,type:{name:"UpSetDataItem[]"}},horizontal:{defaultValue:{value:"true"},description:"display set pairs horizontally",name:"horizontal",required:!1,type:{name:"boolean"}},scaleIndex:{defaultValue:{value:"{\n    variant: 'band',\n    padding: 0.25,\n}"},description:"scale for axis with sets",name:"scaleIndex",required:!1,type:{name:"BandScaleSpec"}},scaleMembership:{defaultValue:{value:"{\n    variant: 'band',\n    padding: 0.25,\n}"},description:"scale for axis with set membership",name:"scaleMembership",required:!1,type:{name:"BandScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/upset/UpSet.tsx#UpSet"]={docgenInfo:UpSet.__docgenInfo,name:"UpSet",path:"packages/matrix/src/upset/UpSet.tsx#UpSet"})}catch(__react_docgen_typescript_loader_error){}},"./packages/matrix/src/upset/UpSetGrid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>UpSetGrid});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_predicates__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/matrix/src/upset/predicates.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),UpSetGrid=function UpSetGrid(_ref){var _ref$symbol=_ref.symbol,symbol=void 0===_ref$symbol?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:_ref$symbol,symbolStyle=_ref.symbolStyle,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0!==_ref$setRole&&_ref$setRole,processedData=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIO)(),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales,data=processedData.data;if(!(0,_predicates__WEBPACK_IMPORTED_MODULE_3__.B)(data)||0==data.length)return null;var horizontal=data[0].horizontal,scaleIndex=horizontal?scales.y:scales.x,scaleKeys=horizontal?scales.x:scales.y,cellR=Math.min(scaleIndex.bandwidth(),scaleKeys.bandwidth())/2,cells=scaleIndex.domain().map((function(id,i){var idCoordinate=scaleIndex(id);return scaleKeys.domain().map((function(k,j){var keyCoordinate=scaleKeys(k);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(symbol,{key:"cell-"+i+"-"+j,cx:horizontal?keyCoordinate:idCoordinate,cy:horizontal?idCoordinate:keyCoordinate,r:cellR,className,style:symbolStyle,setRole})}))})).flat().filter(Boolean);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{role:"upset-grid",children:cells})};UpSetGrid.displayName="UpSetGrid";try{UpSetGrid.displayName="UpSetGrid",UpSetGrid.__docgenInfo={description:"",displayName:"UpSetGrid",props:{symbol:{defaultValue:null,description:"component drawing a symbol for line edges",name:"symbol",required:!1,type:{name:"FC<SymbolProps>"}},symbolStyle:{defaultValue:null,description:"styles for symbol",name:"symbolStyle",required:!1,type:{name:"Partial<CSSProperties>"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"false"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/upset/UpSetGrid.tsx#UpSetGrid"]={docgenInfo:UpSetGrid.__docgenInfo,name:"UpSetGrid",path:"packages/matrix/src/upset/UpSetGrid.tsx#UpSetGrid"})}catch(__react_docgen_typescript_loader_error){}},"./packages/matrix/src/upset/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>isUpSetProcessedData});var isUpSetProcessedData=function isUpSetProcessedData(data){return data.map((function(item){return"object"==typeof item&&null!==item&&("id"in item&&"index"in item&&"data"in item)})).every(Boolean)}},"./packages/matrix/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ee:()=>ChartDecorator,OO:()=>ChartDecoratorEqualPadding,qj:()=>ChartHeatMapCellsDecorator,nh:()=>ChartHeatMapCellsTooltipDecorator,OX:()=>ChartHeatMapDecorator,c7:()=>ChartHeatMapPaddedCellsDecorator,b7:()=>ChartUpSetDecorator,_0:()=>ChartUpSetGridDecorator,T5:()=>commonCategoricalProps,$7:()=>commonProps,w:()=>commonUpSetProps});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),category10=__webpack_require__("./node_modules/d3-scale-chromatic/src/categorical/category10.js"),HeatMap=__webpack_require__("./packages/matrix/src/heatmap/HeatMap.tsx"),HeatMapCells=__webpack_require__("./packages/matrix/src/heatmap/HeatMapCells.tsx"),UpSet=__webpack_require__("./packages/matrix/src/upset/UpSet.tsx"),UpSetGrid=__webpack_require__("./packages/matrix/src/upset/UpSetGrid.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var continuous4x3=function generateContinuousHeatMapData(ids,keys,interval,round){void 0===round&&(round=1);var intervalSize=interval[1]-interval[0];return ids.map((function(id){var series={id};return keys.forEach((function(k){return series[k]=(0,chsk_core_es.DJC)(interval[0]+intervalSize*Math.random(),round)})),series}))}(["alpha","beta","gamma","delta"],["x","y","z"],[0,35]),categorical4x3=function generateCategoricalHeatMapData(ids,keys,domain){var domainSize=domain.length;return ids.map((function(id){var series={id};return keys.forEach((function(k){return series[k]=domain[Math.floor(domainSize*Math.random())]})),series}))}(["alpha","beta","gamma","delta"],["x","y","z"],["a","b","c","d","e"]),upsetData=function generateUpSetData(ids,domain,n){var domainSize=domain.length;return ids.map((function(id){var series={id},seriesSize=Math.max(Math.floor(n/2),Math.floor(n*Math.random())),values=Array(seriesSize).fill(0).map((function(){return domain[Math.floor(domainSize*Math.random())]}));return series.data=Array.from(new Set(values)),series}))}(["alpha","beta","gamma","delta"],["a","b","c","d","e","f","g","h","i","j","k","l"],8),commonProps={data:continuous4x3,keys:["x","y","z"]},commonCategoricalProps={data:categorical4x3,keys:["x","y","z"],scaleColor:{variant:"categorical",colors:category10.Z}},commonUpSetProps={data:upsetData,scaleIndex:{variant:"band",padding:.2},scaleMembership:{variant:"band",padding:.2}},ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[60,40,40,60],style:{display:"inline-block"},children:Story()})};ChartDecorator.displayName="ChartDecorator";var ChartDecoratorEqualPadding=function ChartDecoratorEqualPadding(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:Story()})};ChartDecoratorEqualPadding.displayName="ChartDecoratorEqualPadding";var ChartHeatMapDecorator=function ChartHeatMapDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[60,40,40,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(HeatMap.B,_extends({},commonProps,{children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"top"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),Story()]}))})};ChartHeatMapDecorator.displayName="ChartHeatMapDecorator";var ChartHeatMapCellsDecorator=function ChartHeatMapCellsDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[60,40,40,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(HeatMap.B,_extends({},commonProps,{children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"top"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),(0,jsx_runtime.jsx)(HeatMapCells.W,{}),Story()]}))})};ChartHeatMapCellsDecorator.displayName="ChartHeatMapCellsDecorator";var ChartHeatMapCellsTooltipDecorator=function ChartHeatMapCellsTooltipDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[60,40,40,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(HeatMap.B,_extends({},commonProps,{children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"top"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),(0,jsx_runtime.jsx)(HeatMapCells.W,{}),Story(),(0,jsx_runtime.jsx)(chsk_core_es.ua7,{})]}))})};ChartHeatMapCellsTooltipDecorator.displayName="ChartHeatMapCellsTooltipDecorator";var ChartHeatMapPaddedCellsDecorator=function ChartHeatMapPaddedCellsDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[60,40,40,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(HeatMap.B,_extends({},commonProps,{scaleX:{variant:"band",padding:.15,paddingOuter:.075},scaleY:{variant:"band",padding:.15,paddingOuter:.075},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"top"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),(0,jsx_runtime.jsx)(HeatMapCells.W,{}),Story()]}))})};ChartHeatMapPaddedCellsDecorator.displayName="ChartHeatMapPaddedCellsDecorator";var ChartUpSetDecorator=function ChartUpSetDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,40,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(UpSet.F,_extends({},commonUpSetProps,{children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),Story()]}))})};ChartUpSetDecorator.displayName="ChartUpSetDecorator";var ChartUpSetGridDecorator=function ChartUpSetGridDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,40,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(UpSet.F,_extends({},commonUpSetProps,{children:[(0,jsx_runtime.jsx)(UpSetGrid.h,{symbolStyle:{fill:"#ccc"}}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),Story()]}))})};ChartUpSetGridDecorator.displayName="ChartUpSetGridDecorator";try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/matrix/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecoratorEqualPadding.displayName="ChartDecoratorEqualPadding",ChartDecoratorEqualPadding.__docgenInfo={description:"",displayName:"ChartDecoratorEqualPadding",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/stories/decorators.tsx#ChartDecoratorEqualPadding"]={docgenInfo:ChartDecoratorEqualPadding.__docgenInfo,name:"ChartDecoratorEqualPadding",path:"packages/matrix/stories/decorators.tsx#ChartDecoratorEqualPadding"})}catch(__react_docgen_typescript_loader_error){}try{ChartHeatMapDecorator.displayName="ChartHeatMapDecorator",ChartHeatMapDecorator.__docgenInfo={description:"",displayName:"ChartHeatMapDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/stories/decorators.tsx#ChartHeatMapDecorator"]={docgenInfo:ChartHeatMapDecorator.__docgenInfo,name:"ChartHeatMapDecorator",path:"packages/matrix/stories/decorators.tsx#ChartHeatMapDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHeatMapCellsDecorator.displayName="ChartHeatMapCellsDecorator",ChartHeatMapCellsDecorator.__docgenInfo={description:"",displayName:"ChartHeatMapCellsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/stories/decorators.tsx#ChartHeatMapCellsDecorator"]={docgenInfo:ChartHeatMapCellsDecorator.__docgenInfo,name:"ChartHeatMapCellsDecorator",path:"packages/matrix/stories/decorators.tsx#ChartHeatMapCellsDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHeatMapCellsTooltipDecorator.displayName="ChartHeatMapCellsTooltipDecorator",ChartHeatMapCellsTooltipDecorator.__docgenInfo={description:"",displayName:"ChartHeatMapCellsTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/stories/decorators.tsx#ChartHeatMapCellsTooltipDecorator"]={docgenInfo:ChartHeatMapCellsTooltipDecorator.__docgenInfo,name:"ChartHeatMapCellsTooltipDecorator",path:"packages/matrix/stories/decorators.tsx#ChartHeatMapCellsTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHeatMapPaddedCellsDecorator.displayName="ChartHeatMapPaddedCellsDecorator",ChartHeatMapPaddedCellsDecorator.__docgenInfo={description:"",displayName:"ChartHeatMapPaddedCellsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/stories/decorators.tsx#ChartHeatMapPaddedCellsDecorator"]={docgenInfo:ChartHeatMapPaddedCellsDecorator.__docgenInfo,name:"ChartHeatMapPaddedCellsDecorator",path:"packages/matrix/stories/decorators.tsx#ChartHeatMapPaddedCellsDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartUpSetDecorator.displayName="ChartUpSetDecorator",ChartUpSetDecorator.__docgenInfo={description:"",displayName:"ChartUpSetDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/stories/decorators.tsx#ChartUpSetDecorator"]={docgenInfo:ChartUpSetDecorator.__docgenInfo,name:"ChartUpSetDecorator",path:"packages/matrix/stories/decorators.tsx#ChartUpSetDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartUpSetGridDecorator.displayName="ChartUpSetGridDecorator",ChartUpSetGridDecorator.__docgenInfo={description:"",displayName:"ChartUpSetGridDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/stories/decorators.tsx#ChartUpSetGridDecorator"]={docgenInfo:ChartUpSetGridDecorator.__docgenInfo,name:"ChartUpSetGridDecorator",path:"packages/matrix/stories/decorators.tsx#ChartUpSetGridDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/d3-scale-chromatic/src/categorical/category10.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js").Z)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf")}}]);