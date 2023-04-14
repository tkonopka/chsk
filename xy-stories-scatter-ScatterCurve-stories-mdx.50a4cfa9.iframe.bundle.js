"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7547],{"./packages/xy/stories/scatter/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XU:()=>ChartForErrorsDecorator,UQ:()=>ChartForIntervalDecorator,oJ:()=>ChartForRegressionDecorator,WC:()=>ChartScatterDecorator,xB:()=>ChartScatterQuadraticDecorator,iT:()=>ChartWithLegendSpaceDecorator,qb:()=>ChartWithNoisyPointsDecorator,ig:()=>ChartWithTooltipDecorator,AR:()=>DoubleSquare,B2:()=>dataBubbles,eC:()=>onScatterClick});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),src=__webpack_require__("./packages/xy/src/index.tsx"),dataPolynomials=__webpack_require__("./packages/xy/stories/scatter/dataPolynomials.json");const dataNoisy_namespaceObject=JSON.parse('[{"id":"A","label":"noisy series","data":[{"x":1,"y":1.785},{"x":2,"y":2.558},{"x":3,"y":1.575},{"x":4,"y":1.792},{"x":5,"y":0.977},{"x":6,"y":0.844},{"x":7,"y":0.382},{"x":8,"y":1.998},{"x":9,"y":3.017},{"x":10,"y":1.521},{"x":11,"y":2.691},{"x":12,"y":2.531},{"x":13,"y":2.436},{"x":14,"y":5.875},{"x":15,"y":3.591},{"x":16,"y":4.681}]}]');var generators=__webpack_require__("./packages/xy/stories/scatter/generators.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ChartScatterDecorator=function ChartScatterDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataPolynomials,x:"x",y:"y",valueSize:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),Story()]})})};ChartScatterDecorator.displayName="ChartScatterDecorator";var ChartScatterQuadraticDecorator=function ChartScatterQuadraticDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataPolynomials,x:"x",y:"y",valueSize:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(src.nr,{ids:["quadratic"]}),Story()]})})};ChartScatterQuadraticDecorator.displayName="ChartScatterQuadraticDecorator";var ChartWithLegendSpaceDecorator=function ChartWithLegendSpaceDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:Story()})};ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator";var round3dp=function round3dp(x){return Math.round(1e3*x)/1e3},dataRegression=[(0,generators.Z)("A",Array(16).fill(0).map((function(v,i){return round3dp(i/2+Math.random())})),(function(x){return round3dp(5+1.1*x+5*Math.random())})),(0,generators.Z)("B",Array(16).fill(0).map((function(v,i){return round3dp(i/2+Math.random())})),(function(x){return round3dp(3+.3*x+4*Math.random())}))],ChartForRegressionDecorator=function ChartForRegressionDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataRegression,x:"x",y:"y",valueSize:4,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(src.cG,{}),Story(),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{position:[220,160],anchor:[0,.5],positionUnits:"absolute",symbol:chsk_core_es.Cdc})]})})};ChartForRegressionDecorator.displayName="ChartForRegressionDecorator";var generateBubbles=function generateBubbles(n,xyInterval,vInterval){void 0===xyInterval&&(xyInterval=[.5,10]),void 0===vInterval&&(vInterval=[1,12]);var xySize=xyInterval[1]-xyInterval[0],vSize=vInterval[1]-vInterval[0];return Array(n).fill(0).map((function(){return{x:xyInterval[0]+xySize*Math.random(),y:xyInterval[0]+xySize*Math.random(),value:vInterval[0]+vSize*Math.random()}}))},dataBubbles=[{id:"A",data:generateBubbles(8)},{id:"B",data:generateBubbles(8)}],onScatterClick=function onScatterClick(data){console.log("clicked: "+JSON.stringify(data))},DoubleSquare=function DoubleSquare(props){var _props$r,_props$r2;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(chsk_core_es.bK0,_extends({},props,{r:4*(null!=(_props$r=props.r)?_props$r:1)})),(0,jsx_runtime.jsx)(chsk_core_es.bK0,_extends({},props,{r:1.5*(null!=(_props$r2=props.r)?_props$r2:1),style:_extends({},props.style,{fill:"#fff"})}))]})},ChartWithTooltipDecorator=function ChartWithTooltipDecorator(){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataRegression,x:"x",y:"y",valueSize:4,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(src.cG,{}),(0,jsx_runtime.jsx)(src.XG,{style:{stroke:"#444",strokeWidth:1,strokeDasharray:6}}),(0,jsx_runtime.jsx)(chsk_core_es.ua7,{offset:[0,-10],anchor:[.5,1],itemSize:[160,32],itemPadding:[8,8,8,8],style:{stroke:"#222222",strokeWidth:1}}),(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{position:[220,160],positionUnits:"absolute",anchor:[0,.5],symbol:chsk_core_es.Cdc})]})})};ChartWithTooltipDecorator.displayName="ChartWithTooltipDecorator";var ChartWithNoisyPointsDecorator=function ChartWithNoisyPointsDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataNoisy_namespaceObject,x:"x",y:"y",valueSize:3,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(src.cG,{}),Story()]})})};ChartWithNoisyPointsDecorator.displayName="ChartWithNoisyPointsDecorator";var dataWithInterval=[(0,generators.H)("A",Array(16).fill(0).map((function(v,i){return i})),(function(x){return 1+.3*x+1.5*Math.random()}),[-.8,1])],ChartForIntervalDecorator=function ChartForIntervalDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[500,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataWithInterval,x:"x",y:"y",valueSize:6,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"],nice:!0},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)",ticks:5}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y",values:5}),Story()]})})};ChartForIntervalDecorator.displayName="ChartForIntervalDecorator";var dataWithErrors=[(0,generators.Z)("A",Array(16).fill(0).map((function(v,i){return i+1})),(function(x){return 1+.3*x+1.5*Math.random()}))];dataWithErrors[0].data=dataWithErrors[0].data.map((function(item){return _extends({},item,{ylo:item.y-.5,yhi:item.y+.5,xlo:item.x-.5,xhi:item.x+.5})}));var ChartForErrorsDecorator=function ChartForErrorsDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataWithErrors,x:"x",y:"y",valueSize:3,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"],nice:!0},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)",ticks:5}),Story(),(0,jsx_runtime.jsx)(src.cG,{})]})})};ChartForErrorsDecorator.displayName="ChartForErrorsDecorator";try{ChartScatterDecorator.displayName="ChartScatterDecorator",ChartScatterDecorator.__docgenInfo={description:"",displayName:"ChartScatterDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartScatterDecorator"]={docgenInfo:ChartScatterDecorator.__docgenInfo,name:"ChartScatterDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartScatterDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartScatterQuadraticDecorator.displayName="ChartScatterQuadraticDecorator",ChartScatterQuadraticDecorator.__docgenInfo={description:"",displayName:"ChartScatterQuadraticDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartScatterQuadraticDecorator"]={docgenInfo:ChartScatterQuadraticDecorator.__docgenInfo,name:"ChartScatterQuadraticDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartScatterQuadraticDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator",ChartWithLegendSpaceDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendSpaceDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartWithLegendSpaceDecorator"]={docgenInfo:ChartWithLegendSpaceDecorator.__docgenInfo,name:"ChartWithLegendSpaceDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartWithLegendSpaceDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForRegressionDecorator.displayName="ChartForRegressionDecorator",ChartForRegressionDecorator.__docgenInfo={description:"",displayName:"ChartForRegressionDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartForRegressionDecorator"]={docgenInfo:ChartForRegressionDecorator.__docgenInfo,name:"ChartForRegressionDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartForRegressionDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onScatterClick.displayName="onScatterClick",onScatterClick.__docgenInfo={description:"",displayName:"onScatterClick",props:{id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},point:{defaultValue:null,description:"",name:"point",required:!1,type:{name:"NumericPositionSpec"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"number"}},original:{defaultValue:null,description:"",name:"original",required:!1,type:{name:"Record<string, unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#onScatterClick"]={docgenInfo:onScatterClick.__docgenInfo,name:"onScatterClick",path:"packages/xy/stories/scatter/decorators.tsx#onScatterClick"})}catch(__react_docgen_typescript_loader_error){}try{DoubleSquare.displayName="DoubleSquare",DoubleSquare.__docgenInfo={description:"",displayName:"DoubleSquare",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#DoubleSquare"]={docgenInfo:DoubleSquare.__docgenInfo,name:"DoubleSquare",path:"packages/xy/stories/scatter/decorators.tsx#DoubleSquare"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithNoisyPointsDecorator.displayName="ChartWithNoisyPointsDecorator",ChartWithNoisyPointsDecorator.__docgenInfo={description:"",displayName:"ChartWithNoisyPointsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartWithNoisyPointsDecorator"]={docgenInfo:ChartWithNoisyPointsDecorator.__docgenInfo,name:"ChartWithNoisyPointsDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartWithNoisyPointsDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForIntervalDecorator.displayName="ChartForIntervalDecorator",ChartForIntervalDecorator.__docgenInfo={description:"",displayName:"ChartForIntervalDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartForIntervalDecorator"]={docgenInfo:ChartForIntervalDecorator.__docgenInfo,name:"ChartForIntervalDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartForIntervalDecorator"})}catch(__react_docgen_typescript_loader_error){}try{dataWithErrors.displayName="dataWithErrors",dataWithErrors.__docgenInfo={description:"error bars",displayName:"dataWithErrors",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#dataWithErrors"]={docgenInfo:dataWithErrors.__docgenInfo,name:"dataWithErrors",path:"packages/xy/stories/scatter/decorators.tsx#dataWithErrors"})}catch(__react_docgen_typescript_loader_error){}try{ChartForErrorsDecorator.displayName="ChartForErrorsDecorator",ChartForErrorsDecorator.__docgenInfo={description:"",displayName:"ChartForErrorsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartForErrorsDecorator"]={docgenInfo:ChartForErrorsDecorator.__docgenInfo,name:"ChartForErrorsDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartForErrorsDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/stories/scatter/generators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>generateScatterSeriesWithInterval,Z:()=>generateScatterSeries});var generateScatterSeriesWithInterval=function generateScatterSeriesWithInterval(id,x,y,interval){return{id,data:x.map((function(xVal){var yVal=y(xVal);return{x:xVal,y:yVal,lo:yVal+interval[0]*Math.sqrt(yVal),hi:yVal+interval[1]*Math.sqrt(yVal)}}))}},generateScatterSeries=function generateScatterSeries(id,x,y){return{id,data:x.map((function(xVal){return{x:xVal,y:y(xVal)}}))}}},"./packages/xy/stories/scatter/ScatterCurve.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,averagedDownsampledIndex0:()=>averagedDownsampledIndex0,averagedDownsampledIndex1:()=>averagedDownsampledIndex1,default:()=>__WEBPACK_DEFAULT_EXPORT__,downsampleIndex0:()=>downsampleIndex0,downsampleIndex1:()=>downsampleIndex1,historicAverage:()=>historicAverage,linearCurve:()=>linearCurve,multipleSeries:()=>multipleSeries,stepCurve:()=>stepCurve,symmetricAverage:()=>symmetricAverage});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/stories/scatter/decorators.tsx"),_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/xy/stories/scatter/dataPolynomials.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.nr,{...args});const linearCurve=Template.bind({});linearCurve.storyName="linear curve",linearCurve.args={ids:["quadratic"],curve:"Linear"},linearCurve.parameters={storySource:{source:"args => <ScatterCurve {...args} />"}},linearCurve.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.WC];const stepCurve=Template.bind({});stepCurve.storyName="step curve",stepCurve.args={ids:["quadratic"],curve:"Step"},stepCurve.parameters={storySource:{source:"args => <ScatterCurve {...args} />"}},stepCurve.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.WC];const multipleSeries=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.bp,{data:_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__,x:"x",y:"y",r:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"left",label:"y (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.nr,{ids:["linear"],curve:"Step",style:{strokeWidth:3}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.nr,{ids:["quadratic"],curve:"Linear",style:{strokeDasharray:"6 6",strokeWidth:3}})]})});multipleSeries.storyName="multiple series",multipleSeries.parameters={storySource:{source:'<Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{\n  display: "inline-block"\n}}><Scatter data={data} x={"x"} y={"y"} r={5} scaleX={{\n    variant: "linear",\n    domain: [0, "auto"]\n  }} scaleY={{\n    variant: "linear",\n    domain: [0, "auto"]\n  }}><Axis variant={"bottom"} label={"x (a.u.)"} /><Axis variant={"left"} label={"y (a.u.)"} /><ScatterCurve ids={["linear"]} curve="Step" style={{\n      strokeWidth: 3\n    }} /><ScatterCurve ids={["quadratic"]} curve="Linear" style={{\n      strokeDasharray: "6 6",\n      strokeWidth: 3\n    }} /></Scatter></Chart>'}};const downsampleIndex0=Template.bind({});downsampleIndex0.storyName="downsample, index 0",downsampleIndex0.args={ids:["A"],curve:"Natural",downsampleFactor:.5,downsampleIndex:0},downsampleIndex0.parameters={storySource:{source:"args => <ScatterCurve {...args} />"}},downsampleIndex0.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb];const downsampleIndex1=Template.bind({});downsampleIndex1.storyName="downsample, index 1",downsampleIndex1.args={ids:["A"],curve:"Natural",downsampleFactor:.5,downsampleIndex:1},downsampleIndex1.parameters={storySource:{source:"args => <ScatterCurve {...args} />"}},downsampleIndex1.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb];const historicAverage=Template.bind({});historicAverage.storyName="historic average",historicAverage.args={ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:0},historicAverage.parameters={storySource:{source:"args => <ScatterCurve {...args} />"}},historicAverage.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb];const symmetricAverage=Template.bind({});symmetricAverage.storyName="symmetric average",symmetricAverage.args={ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:-1},symmetricAverage.parameters={storySource:{source:"args => <ScatterCurve {...args} />"}},symmetricAverage.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb];const averagedDownsampledIndex0=Template.bind({});averagedDownsampledIndex0.storyName="averaged, downsampled, index 0",averagedDownsampledIndex0.args={ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:-1,downsampleFactor:.5,downsampleIndex:0},averagedDownsampledIndex0.parameters={storySource:{source:"args => <ScatterCurve {...args} />"}},averagedDownsampledIndex0.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb];const averagedDownsampledIndex1=Template.bind({});averagedDownsampledIndex1.storyName="averaged, downsampled, index 1",averagedDownsampledIndex1.args={ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:-1,downsampleFactor:.5,downsampleIndex:1},averagedDownsampledIndex1.parameters={storySource:{source:"args => <ScatterCurve {...args} />"}},averagedDownsampledIndex1.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb];const componentMeta={title:"Addons/XY/Scatter/ScatterCurve",tags:["stories-mdx"],includeStories:["linearCurve","stepCurve","multipleSeries","downsampleIndex0","downsampleIndex1","historicAverage","symmetricAverage","averagedDownsampledIndex0","averagedDownsampledIndex1"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h1,{id:"scattercurve",children:"ScatterCurve"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/XY/Scatter/ScatterCurve"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"ScatterCurve"})," draws a curve based on a data series."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_3__.nr}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"curves",children:"Curves"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["The prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"curve"})," controls the type of interpolation between points."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"linear curve",args:{ids:["quadratic"],curve:"Linear"},component:_src__WEBPACK_IMPORTED_MODULE_3__.nr,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.WC],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"step curve",args:{ids:["quadratic"],curve:"Step"},component:_src__WEBPACK_IMPORTED_MODULE_3__.nr,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.WC],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["Note that ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"ScatterCurve"})," uses all the points in a series, and connects points in the order provided. For noisy data, this may produce spiky lines. To display a best-fit line instead, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"ScatterRegression"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["Use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"ScatterCurve"})," multiple times to overlay multiple series. Each series can have a distinct curve setting and css style."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"multiple series",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.bp,{data:_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__,x:"x",y:"y",r:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"left",label:"y (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.nr,{ids:["linear"],curve:"Step",style:{strokeWidth:3}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.nr,{ids:["quadratic"],curve:"Linear",style:{strokeDasharray:"6 6",strokeWidth:3}})]})})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"down-sampling",children:"Down-sampling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"ScatterCurve"})," draws a line through all the data points in a series.\nTo reduce the complexity of the curve, it is possible to set prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"downsampleFactor"})," and use\na fraction of the data points, extracted at regular intervals.\nA prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"downsampleIndex"})," determines the first data point of the down-sampled curve."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"downsample, index 0",args:{ids:["A"],curve:"Natural",downsampleFactor:.5,downsampleIndex:0},component:_src__WEBPACK_IMPORTED_MODULE_3__.nr,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"downsample, index 1",args:{ids:["A"],curve:"Natural",downsampleFactor:.5,downsampleIndex:1},component:_src__WEBPACK_IMPORTED_MODULE_3__.nr,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.p,{children:"The examples above show that starting down-sampling from different data points can produce quite different curve shapes.\nThis makes down-sampling, when used on its own, unreliable as a smoothing technique.\nHowever, it can be attractive when used together with convolution (see next section)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"convolution",children:"Convolution"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"ScatterCurve"})," can perform a convolution of the data with an array-like mask.\nThis can be used to display moving averages of various types: simple / historical moving average, symmetrical averages,\nand weighted averages."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["The properties of the convolution are specified in prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"convolutionMask"})," and prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"convolutionOffset"}),".\nFor example, in a time-series context, it may be desirable to compute a moving average of three time points in the immediate past.\nThis would correspond to a mask ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"[1, 1, 1]"})," and an offset of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"0"})," (the default). In another context, it may be\ndesirable to compute a smoothing curve by averaging three nearby data points in a symmetrical fashion. This would be\nachieved by setting the convolution offset to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"-1"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"historic average",args:{ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:0},component:_src__WEBPACK_IMPORTED_MODULE_3__.nr,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"symmetric average",args:{ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:-1},component:_src__WEBPACK_IMPORTED_MODULE_3__.nr,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["Note that the domain of the resulting curve shifts depending on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"convolutionOffset"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.p,{children:"Once a curve is smoothed with convolution, it may be attractive to perform down-sampling."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"averaged, downsampled, index 0",args:{ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:-1,downsampleFactor:.5,downsampleIndex:0},component:_src__WEBPACK_IMPORTED_MODULE_3__.nr,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"averaged, downsampled, index 1",args:{ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:-1,downsampleFactor:.5,downsampleIndex:1},component:_src__WEBPACK_IMPORTED_MODULE_3__.nr,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.qb],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["The two examples above, which differ in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"downsampleIndex"}),", produce qualitatively similar shapes.\nAs such, the arbitrary aspects of down-sampling become less pronounced after convolution."]})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./packages/xy/stories/scatter/dataPolynomials.json":module=>{module.exports=JSON.parse('[{"id":"linear","label":"linear (y = 2*x)","data":[{"x":1,"y":2},{"x":2,"y":4},{"x":3,"y":6},{"x":4,"y":8},{"x":5,"y":10},{"x":6,"y":12},{"x":7,"y":14},{"x":8,"y":16}]},{"id":"quadratic","label":"quadratic [y = x^2]","data":[{"x":1,"y":1},{"x":2,"y":4},{"x":3,"y":9},{"x":4,"y":16},{"x":5,"y":25},{"x":6,"y":36},{"x":7,"y":49},{"x":8,"y":64}]}]')}}]);