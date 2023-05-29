"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[5568,7599,939,3392,5912,7231,3289,1435,5973,2113,2460,7382,1844,9579,204,9594,749,8176,5063,8954],{"./packages/annotation/stories/misc/GridStripes.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BetweenBands:()=>BetweenBands,CenteredOnBands:()=>CenteredOnBands,Even:()=>Even,Odd:()=>Odd,X:()=>X,Y:()=>Y,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GridStripes_stories});var react=__webpack_require__("./node_modules/react/index.js"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","parity","values","expansion","shift","shiftUnit","component","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var UnthemedGridStripes=function UnthemedGridStripes(_ref){var variant=_ref.variant,_ref$parity=_ref.parity,parity=void 0===_ref$parity?"even":_ref$parity,values=_ref.values,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?0:_ref$expansion,_ref$shift=_ref.shift,shift=void 0===_ref$shift?[0]:_ref$shift,_ref$shiftUnit=_ref.shiftUnit,shiftUnit=void 0===_ref$shiftUnit?"step":_ref$shiftUnit,_ref$component=_ref.component,component=void 0===_ref$component?chsk_core_es.AeJ:_ref$component,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),scales=(0,chsk_core_es.kE1)().scales,size=(0,chsk_core_es.Bs9)().size,isX="x"===variant,scale=isX?scales.x:scales.y,shiftMultiplier="band"===shiftUnit?1:scale.step()/scale.bandwidth(),tickCoordinates=function uniq(values){return Array.from(new Set(values))}(shift.map((function(s){return(0,chsk_core_es.Pyy)(scale,values,s*shiftMultiplier)})).flat()).sort((function(a,b){return a-b})),startCoordinates=[],endCoordinates=[];"even"===parity?(startCoordinates=tickCoordinates.filter((function(_,i){return i%2==0})),endCoordinates=tickCoordinates.filter((function(_,i){return i%2==1}))):(startCoordinates=tickCoordinates.filter((function(_,i){return i%2==1})),endCoordinates=tickCoordinates.filter((function(_,i){return i>0&&i%2==0}))),startCoordinates=startCoordinates.slice(0,endCoordinates.length);var result,_startCoordinates,_startCoordinates2,_numberPair=(0,chsk_core_es.Ryh)(expansion),e1=_numberPair[0],e2=_numberPair[1];isX?result=null==(_startCoordinates=startCoordinates)?void 0:_startCoordinates.map((function(v,i){return(0,react.createElement)(component,_extends({variant:"grid-stripe",key:"x-"+i,x:v,width:endCoordinates[i]-v,y:-e1,height:size[chsk_core_es.Y]+e1+e2},props))})):result=null==(_startCoordinates2=startCoordinates)?void 0:_startCoordinates2.map((function(v,i){return(0,react.createElement)(component,_extends({variant:"grid-stripe",key:"y-"+i,x:-e1,width:size[chsk_core_es.X]+e1+e2,y:v,height:endCoordinates[i]-v},props))}));return(0,jsx_runtime.jsx)("g",{role:setRole?"grid-stripes":void 0,children:result})};UnthemedGridStripes.displayName="UnthemedGridStripes";var GridStripes=function GridStripes(props){return(0,jsx_runtime.jsx)(UnthemedGridStripes,_extends({},(0,chsk_core_es.miB)(props,"GridLines")))};GridStripes.displayName="GridStripes";try{GridStripes.displayName="GridStripes",GridStripes.__docgenInfo={description:"",displayName:"GridStripes",props:{parity:{defaultValue:{value:"even"},description:"toggle intervals used for stripes",name:"parity",required:!1,type:{name:"enum",value:[{value:'"even"'},{value:'"odd"'}]}},variant:{defaultValue:null,description:"variant",name:"variant",required:!0,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'}]}},values:{defaultValue:null,description:"positions for grid lines",name:"values",required:!1,type:{name:"number | string[] | number[]"}},shift:{defaultValue:{value:"[0]"},description:"shift compared to natural tick position",name:"shift",required:!1,type:{name:"number[]"}},shiftUnit:{defaultValue:{value:"step"},description:"unit for shift values",name:"shiftUnit",required:!1,type:{name:"enum",value:[{value:'"band"'},{value:'"step"'}]}},expansion:{defaultValue:{value:"0"},description:"expansion of lines at the start and end of the scale",name:"expansion",required:!1,type:{name:"number | TwoSideSizeSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"component used to draw individual stripes",name:"component",required:!1,type:{name:"FC<RectangleProps>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/misc/GridStripes.tsx#GridStripes"]={docgenInfo:GridStripes.__docgenInfo,name:"GridStripes",path:"packages/annotation/src/misc/GridStripes.tsx#GridStripes"})}catch(__react_docgen_typescript_loader_error){}var _X$parameters,_X$parameters2,_X$parameters2$docs,_Y$parameters,_Y$parameters2,_Y$parameters2$docs,_Even$parameters,_Even$parameters2,_Even$parameters2$doc,_Odd$parameters,_Odd$parameters2,_Odd$parameters2$docs,_BetweenBands$paramet,_BetweenBands$paramet2,_BetweenBands$paramet3,_CenteredOnBands$para,_CenteredOnBands$para2,_CenteredOnBands$para3,decorators=__webpack_require__("./packages/annotation/stories/decorators.tsx");function GridStripes_stories_extends(){return GridStripes_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},GridStripes_stories_extends.apply(this,arguments)}const GridStripes_stories={title:"Addons/Annotation/Misc/GridStripes",component:GridStripes};var X={name:"x",args:{variant:"x",style:{fill:"#ffdddd"}},decorators:[decorators.cK]},Y={name:"y",args:{variant:"y",style:{fill:"#ffdddd"}},decorators:[decorators.cK]},Even={name:"even",args:{variant:"x",parity:"even",style:{fill:"#ffdddd"}},decorators:[decorators.cK]},Odd={name:"odd",args:{variant:"x",parity:"odd",style:{fill:"#ffdddd"}},decorators:[decorators.cK]},BetweenBands={name:"between bands",args:{variant:"x",style:{fill:"#ffdddd"}},decorators:[decorators.VK]},CenteredOnBands={name:"centered on bands",args:{variant:"x",parity:"even",shift:[-.5],style:{fill:"#ffdddd"}},decorators:[decorators.VK]};X.parameters=GridStripes_stories_extends({},X.parameters,{docs:GridStripes_stories_extends({},null==(_X$parameters=X.parameters)?void 0:_X$parameters.docs,{source:GridStripes_stories_extends({originalSource:"{\n  name: 'x',\n  args: {\n    variant: 'x',\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_X$parameters2=X.parameters)||null==(_X$parameters2$docs=_X$parameters2.docs)?void 0:_X$parameters2$docs.source)})}),Y.parameters=GridStripes_stories_extends({},Y.parameters,{docs:GridStripes_stories_extends({},null==(_Y$parameters=Y.parameters)?void 0:_Y$parameters.docs,{source:GridStripes_stories_extends({originalSource:"{\n  name: 'y',\n  args: {\n    variant: 'y',\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_Y$parameters2=Y.parameters)||null==(_Y$parameters2$docs=_Y$parameters2.docs)?void 0:_Y$parameters2$docs.source)})}),Even.parameters=GridStripes_stories_extends({},Even.parameters,{docs:GridStripes_stories_extends({},null==(_Even$parameters=Even.parameters)?void 0:_Even$parameters.docs,{source:GridStripes_stories_extends({originalSource:"{\n  name: 'even',\n  args: {\n    variant: 'x',\n    parity: 'even',\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_Even$parameters2=Even.parameters)||null==(_Even$parameters2$doc=_Even$parameters2.docs)?void 0:_Even$parameters2$doc.source)})}),Odd.parameters=GridStripes_stories_extends({},Odd.parameters,{docs:GridStripes_stories_extends({},null==(_Odd$parameters=Odd.parameters)?void 0:_Odd$parameters.docs,{source:GridStripes_stories_extends({originalSource:"{\n  name: 'odd',\n  args: {\n    variant: 'x',\n    parity: 'odd',\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_Odd$parameters2=Odd.parameters)||null==(_Odd$parameters2$docs=_Odd$parameters2.docs)?void 0:_Odd$parameters2$docs.source)})}),BetweenBands.parameters=GridStripes_stories_extends({},BetweenBands.parameters,{docs:GridStripes_stories_extends({},null==(_BetweenBands$paramet=BetweenBands.parameters)?void 0:_BetweenBands$paramet.docs,{source:GridStripes_stories_extends({originalSource:"{\n  name: 'between bands',\n  args: {\n    variant: 'x',\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartBandViewDecorator]\n}"},null==(_BetweenBands$paramet2=BetweenBands.parameters)||null==(_BetweenBands$paramet3=_BetweenBands$paramet2.docs)?void 0:_BetweenBands$paramet3.source)})}),CenteredOnBands.parameters=GridStripes_stories_extends({},CenteredOnBands.parameters,{docs:GridStripes_stories_extends({},null==(_CenteredOnBands$para=CenteredOnBands.parameters)?void 0:_CenteredOnBands$para.docs,{source:GridStripes_stories_extends({originalSource:"{\n  name: 'centered on bands',\n  args: {\n    variant: 'x',\n    parity: 'even',\n    shift: [-0.5],\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartBandViewDecorator]\n}"},null==(_CenteredOnBands$para2=CenteredOnBands.parameters)||null==(_CenteredOnBands$para3=_CenteredOnBands$para2.docs)?void 0:_CenteredOnBands$para3.source)})});var __namedExportsOrder=["X","Y","Even","Odd","BetweenBands","CenteredOnBands"]},"./packages/annotation/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>barProps,I8:()=>ChartBandViewAxisDecorator,VK:()=>ChartBandViewDecorator,cK:()=>ChartLinearViewDecorator,ee:()=>ChartDecorator,vr:()=>ChartLinearViewAxisDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2,paddingOuter:0},scaleY:{variant:"linear",domain:[0,100]},children:[Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"})]})]})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";var ChartBandViewAxisDecorator=function ChartBandViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"}),Story()]})]})};ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator";var ChartLinearViewDecorator=function ChartLinearViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"})]})]})};ChartLinearViewDecorator.displayName="ChartLinearViewDecorator";var ChartLinearViewAxisDecorator=function ChartLinearViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"}),Story()]})]})};ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator";var barProps={data:[{id:"alpha",x:10},{id:"beta",x:20}],keys:["x"],horizontal:!0,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}};try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/annotation/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator",ChartBandViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartBandViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"]={docgenInfo:ChartBandViewAxisDecorator.__docgenInfo,name:"ChartBandViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewDecorator.displayName="ChartLinearViewDecorator",ChartLinearViewDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"]={docgenInfo:ChartLinearViewDecorator.__docgenInfo,name:"ChartLinearViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator",ChartLinearViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"]={docgenInfo:ChartLinearViewAxisDecorator.__docgenInfo,name:"ChartLinearViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/animation/animate.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>animate});var _index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/index.mjs"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function animate(from,to,transition={}){const value=(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(from)?from:(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(from);return value.start((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Z)("",value,to,transition)),{stop:()=>value.stop(),isAnimating:()=>value.isAnimating()}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/framer-motion/dist/es/utils/process.mjs"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs"),warn_once=__webpack_require__("./node_modules/framer-motion/dist/es/utils/warn-once.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{exitBeforeEnter&&(mode="wait",(0,warn_once.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[forceRender]=function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Z_.postRender(forceRender)),[forceRender]),forcedRenderCount]}();const forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);const isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((()=>{isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return"wait"===mode&&exiting.size&&(childrenToRender=[]),exiting.forEach((key=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:()=>{allChildren.delete(key),exiting.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout,mode},child))})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),"production"!==process.O&&"wait"===mode&&childrenToRender.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);