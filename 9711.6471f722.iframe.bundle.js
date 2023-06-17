"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9711],{"./packages/xy/src/histogram/Histogram.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Histogram});var react=__webpack_require__("./node_modules/react/index.js"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/xy/src/histogram/context.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","container","data","breaks","scaleX","scaleY","scaleColor","autoRescale","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Histogram=function Histogram(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"count":_ref$variant,_ref$container=_ref.container,container=void 0===_ref$container?chsk_core_es.WdC:_ref$container,data=_ref.data,breaks=_ref.breaks,_ref$scaleX=_ref.scaleX,scaleX=void 0===_ref$scaleX?chsk_core_es.Bs3:_ref$scaleX,_ref$scaleY=_ref.scaleY,scaleY=void 0===_ref$scaleY?chsk_core_es.Bs3:_ref$scaleY,scaleColor=_ref.scaleColor,_ref$autoRescale=_ref.autoRescale,autoRescale=void 0===_ref$autoRescale||_ref$autoRescale,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,chsk_core_es.FgM)(),_useContainer=(0,chsk_core_es.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,seriesIndexes=(0,react.useMemo)((function(){return(0,chsk_core_es.snp)(data)}),[data]),seriesIds=(0,react.useMemo)((function(){return data.map((function(item){return item.id}))}),[data]),disabled=(0,chsk_core_es.gKR)(seriesIds).disabled,breaksArray=(0,react.useMemo)((function(){return Array.isArray(breaks)?breaks:function getBreaksArray(data,n){var values=(0,chsk_core_es.FG_)(data.map((function(seriesData){return(0,chsk_core_es.FG_)(seriesData.data)})).flat());return(0,chsk_core_es.Sye)(values,n)}(data,breaks)}),[data,breaks]),processedData=(0,react.useMemo)((function(){return function processData(data,breaks,density){return data.map((function(seriesData,index){var _moments=(0,chsk_core_es.Gi7)(seriesData.data),mean=_moments[0],variance=_moments[1],bins=(0,chsk_core_es.NYs)(seriesData.data,breaks,density);return{id:seriesData.id,index,points:(0,chsk_core_es.LM9)(bins,breaks),breaks,n:seriesData.data.length,mean,sd:Math.sqrt(variance)}}))}(data,breaksArray,"density"===variant)}),[data,breaksArray,variant]),_getHistogramScalePro=function getHistogramScaleProps(data,scaleSpecX,scaleSpecY,size,disabled){var result={x:(0,chsk_core_es.BRZ)(scaleSpecX),y:(0,chsk_core_es.BRZ)(scaleSpecY)},filterDisabled=function filterDisabled(v,i){return!disabled[i]};if(!(0,chsk_core_es.HBl)(scaleSpecX)){var x=data.filter(filterDisabled).map((function(seriesData){return seriesData.points.map((function(point){return point[chsk_core_es.X]}))})).flat();result.x=(0,chsk_core_es.zAC)(scaleSpecX,(0,chsk_core_es.FG_)(x))}if(!(0,chsk_core_es.HBl)(scaleSpecY)){var y=data.filter(filterDisabled).map((function(seriesData){return seriesData.points.map((function(point){return point[chsk_core_es.Y]}))})).flat();result.y=(0,chsk_core_es.zAC)(scaleSpecY,(0,chsk_core_es.FG_)(y))}return result.x.size=size[chsk_core_es.X],result.y.size=size[chsk_core_es.Y],result}(processedData,scaleX,scaleY,innerSize,autoRescale?disabled:Array(seriesIds.length).fill(!1)),xProps=_getHistogramScalePro.x,yProps=_getHistogramScalePro.y,colorProps=(0,chsk_core_es.NVB)(null!=scaleColor?scaleColor:theme.Colors.categorical,seriesIds),scalesContextValue=(0,chsk_core_es.cT_)({x:xProps,y:yProps,color:colorProps}),scales=scalesContextValue.scales,preparedData=processedData.map((function(seriesData){return function prepareData(seriesData,scaleX,scaleY){return{id:seriesData.id,index:seriesData.index,points:seriesData.points.map((function(point){return[scaleX(point[chsk_core_es.X]),scaleY(point[chsk_core_es.Y])]})),breaks:seriesData.breaks,n:seriesData.n}}(seriesData,scales.x,scales.y)}));return(0,jsx_runtime.jsx)(chsk_core_es.PzT,_extends({variant:"histogram",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys:seriesIds,scalesContextValue},props,{children:(0,jsx_runtime.jsx)(context.Jg,{data:preparedData,seriesIndexes,keys:seriesIds,children:(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children})})}))};Histogram.displayName="Histogram";try{Histogram.displayName="Histogram",Histogram.__docgenInfo={description:"",displayName:"Histogram",props:{variant:{defaultValue:{value:"count"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"count"'},{value:'"density"'}]}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"HistogramDataItem[]"}},breaks:{defaultValue:null,description:"breakpoints for bins",name:"breaks",required:!0,type:{name:"number | number[]"}},scaleX:{defaultValue:null,description:"scale for horizontal axis",name:"scaleX",required:!1,type:{name:"ContinuousScaleSpec"}},scaleY:{defaultValue:null,description:"scale for vertical axis",name:"scaleY",required:!1,type:{name:"ContinuousScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}},autoRescale:{defaultValue:{value:"true"},description:"automatically adjust scales if/when data subsets become disabled",name:"autoRescale",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/histogram/Histogram.tsx#Histogram"]={docgenInfo:Histogram.__docgenInfo,name:"Histogram",path:"packages/xy/src/histogram/Histogram.tsx#Histogram"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/histogram/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jg:()=>HistogramPreparedDataProvider,cT:()=>useHistogramPreparedData});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),HistogramPreparedDataContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({data:[],seriesIndexes:{},keys:[]}),HistogramPreparedDataProvider=function HistogramPreparedDataProvider(_ref){var data=_ref.data,seriesIndexes=_ref.seriesIndexes,keys=_ref.keys,children=_ref.children,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{data,seriesIndexes,keys}}),[data]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(HistogramPreparedDataContext.Provider,{value,children})};HistogramPreparedDataProvider.displayName="HistogramPreparedDataProvider";var useHistogramPreparedData=function useHistogramPreparedData(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(HistogramPreparedDataContext)};try{HistogramPreparedDataProvider.displayName="HistogramPreparedDataProvider",HistogramPreparedDataProvider.__docgenInfo={description:"",displayName:"HistogramPreparedDataProvider",props:{data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"RecordWithId[] & HistogramProcessedDataItem[]"}},seriesIndexes:{defaultValue:null,description:"map from series ids to indexes",name:"seriesIndexes",required:!0,type:{name:"Record<string, number>"}},keys:{defaultValue:null,description:"list of keys",name:"keys",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/histogram/context.tsx#HistogramPreparedDataProvider"]={docgenInfo:HistogramPreparedDataProvider.__docgenInfo,name:"HistogramPreparedDataProvider",path:"packages/xy/src/histogram/context.tsx#HistogramPreparedDataProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/histogram/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>isHistogramProcessedData});var isHistogramProcessedData=function isHistogramProcessedData(data){return data.map((function(item){return"object"==typeof item&&null!==item&&("id"in item&&"index"in item&&"points"in item)})).every(Boolean)}},"./packages/xy/stories/histogram/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ee:()=>ChartDecorator,Nu:()=>ChartHistogramDecorator,iT:()=>ChartWithLegendSpaceDecorator,m:()=>sampleData});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateHistogramSeries=function generateHistogramSeries(id,n,generator){return{id,data:Array(n).fill(0).map((function(){return generator()}))}},randomNormalValue=function randomNormalValue(mean,sd){void 0===sd&&(sd=1);var u=1-Math.random(),v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)*sd+mean};try{randomNormalValue.displayName="randomNormalValue",randomNormalValue.__docgenInfo={description:"generate a random number from normal distribution\nmodified from:\nhttps://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve",displayName:"randomNormalValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/generators.tsx#randomNormalValue"]={docgenInfo:randomNormalValue.__docgenInfo,name:"randomNormalValue",path:"packages/xy/stories/histogram/generators.tsx#randomNormalValue"})}catch(__react_docgen_typescript_loader_error){}var Histogram=__webpack_require__("./packages/xy/src/histogram/Histogram.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),sampleData=[generateHistogramSeries("A",150,(function(){return(0,chsk_core_es.DJC)(randomNormalValue(-2,.8),4)})),generateHistogramSeries("B",120,(function(){return(0,chsk_core_es.DJC)(randomNormalValue(2,1.6),4)}))],ChartHistogramDecorator=function ChartHistogramDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(Histogram.b,{data:sampleData,breaks:[-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7],scaleX:{variant:"linear",domain:"auto"},scaleY:{variant:"linear",domain:"auto"},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"counts"}),Story()]})})};ChartHistogramDecorator.displayName="ChartHistogramDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:Story()})};ChartDecorator.displayName="ChartDecorator";var ChartWithLegendSpaceDecorator=function ChartWithLegendSpaceDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:Story()})};ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator";try{ChartHistogramDecorator.displayName="ChartHistogramDecorator",ChartHistogramDecorator.__docgenInfo={description:"",displayName:"ChartHistogramDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartHistogramDecorator"]={docgenInfo:ChartHistogramDecorator.__docgenInfo,name:"ChartHistogramDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartHistogramDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator",ChartWithLegendSpaceDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendSpaceDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartWithLegendSpaceDecorator"]={docgenInfo:ChartWithLegendSpaceDecorator.__docgenInfo,name:"ChartWithLegendSpaceDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartWithLegendSpaceDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);