"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3047],{"./examples/hierarchies/hierarchies.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dendrogram:()=>Dendrogram,__namedExportsOrder:()=>__namedExportsOrder,default:()=>hierarchies_stories});var gallery=__webpack_require__("./examples/gallery.tsx"),react=__webpack_require__("./node_modules/react/index.js"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),chsk_band_es=__webpack_require__("./packages/band/dist/chsk-band.es.js"),chsk_themes_es=__webpack_require__("./packages/themes/dist/chsk-themes.es.js"),utils=__webpack_require__("./examples/utils.ts"),navigation=__webpack_require__("./examples/navigation.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{path:{dendrogram:{strokeWidth:2,pointerEvents:"none"}},rect:{dendrogramSurface:{fill:"#cccccc",cursor:"pointer"}},text:{tickLabel:{pointerEvents:"none"}},AxisTicks:{bottom:{labelDistance:6,labelAngle:-90,labelStyle:{dominantBaseline:"middle",textAnchor:"end"},tickSize:0}}}),getSubTreeIndexes=function getSubTreeIndexes(data,index,result){var _data$merge,_data$merge2;index<0?result.push(-index-1):(getSubTreeIndexes(data,null==(_data$merge=data.merge[index-1])?void 0:_data$merge[0],result),getSubTreeIndexes(data,null==(_data$merge2=data.merge[index-1])?void 0:_data$merge2[1],result))},DendrogramChart=function DendrogramChart(_ref){var fref=_ref.fref,chartData=_ref.chartData,rawData=_ref.rawData,_useState=(0,react.useState)(void 0),domain=_useState[0],setDomain=_useState[1];if(!(0,chsk_band_es.Ts)(rawData))return null;return(0,react.useEffect)((function(){var _rawData$;setDomain(null==(_rawData$=rawData[0])?void 0:_rawData$.keys)}),[rawData]),(0,jsx_runtime.jsx)(chsk_core_es.kL2,{data:chartData,fref,id:"wide-dendrogram",size:[600,300],padding:[90,40,60,40],theme:customTheme,children:(0,jsx_runtime.jsxs)(chsk_band_es.bg,{data:rawData,scaleIndex:{variant:"band",domain},children:[(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[0,-50],children:"Hierarchical clustering"}),(0,jsx_runtime.jsx)(chsk_band_es.kH,{interactive:!0,expansion:[.5,.5,2.8,.5],handlers:{onClick:function handleClick(data){data&&setDomain((function(domain){return function flipDomain(domain,data,level){var pair=data.merge[level],leftIndexes=[],rightIndexes=[];getSubTreeIndexes(data,pair[0],leftIndexes),getSubTreeIndexes(data,pair[1],rightIndexes);var keys=data.keys,leftTransformed=leftIndexes.map((function(i){return domain.indexOf(keys[i])})),rightTransformed=rightIndexes.map((function(i){return domain.indexOf(keys[i])})),leftInterval=(0,chsk_core_es.FG_)(leftTransformed),rightInterval=(0,chsk_core_es.FG_)(rightTransformed);if(rightInterval[0]<leftInterval[0]){var temp=[rightInterval[0],rightInterval[1]];rightInterval=leftInterval,leftInterval=temp}var a=domain.slice(0,leftInterval[0]),b=domain.slice(leftInterval[0],leftInterval[1]+1),c=domain.slice(rightInterval[0],rightInterval[1]+1),d=domain.slice(rightInterval[1]+1,domain.length);return a.concat(c).concat(b).concat(d)}(null!=domain?domain:data.data.keys,data.data,data.level)}))}}}),(0,jsx_runtime.jsx)(chsk_band_es.Ap,{}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"}),(0,jsx_runtime.jsx)(navigation.N,{position:[420,-50],image:!0,data:!0})]})})};try{DendrogramChart.displayName="DendrogramChart",DendrogramChart.__docgenInfo={description:"",displayName:"DendrogramChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/hierarchies/DendrogramChart.tsx#DendrogramChart"]={docgenInfo:DendrogramChart.__docgenInfo,name:"DendrogramChart",path:"examples/hierarchies/DendrogramChart.tsx#DendrogramChart"})}catch(__react_docgen_typescript_loader_error){}const hierarchies_stories={...gallery.m,title:"Gallery/Hierarchies"},Dendrogram={name:"dendrogram",args:{generator:function generateDendrogramData(){for(var keys=[].concat(utils.eB).sort((function(){return Math.random()>.5?1:-1})),pool=(0,chsk_core_es.w6H)(utils.eB.length).map((function(v){return-v-1})),merge=[],height=[];pool.length>1;){var poolSize=pool.length,end=Math.floor((0,utils.SN)(0,poolSize)),start=end-1;if(start>=0&&end>=0){var endIndex=pool[end],startIndex=pool[start];merge.push([startIndex,endIndex]),(pool=pool.slice(0,start).concat(pool.slice(end,poolSize)))[start]=merge.length,height.push((0,utils.$F)((0,utils.SN)(0,utils.eB.length)))}}return height.sort((function(a,b){return a-b})),[{id:"data",merge,keys,height}]},chart:DendrogramChart,comment:(0,jsx_runtime.jsx)("div",{children:"Hierarchical structures can be represented in many equivalent ways. Click on the parts of the dendrogram to flip branches."})}},__namedExportsOrder=["Dendrogram"];Dendrogram.parameters={...Dendrogram.parameters,docs:{...Dendrogram.parameters?.docs,source:{originalSource:"{\n  name: 'dendrogram',\n  args: {\n    generator: generateDendrogramData,\n    chart: DendrogramChart,\n    comment: <div>\n                Hierarchical structures can be represented in many equivalent ways. Click on the\n                parts of the dendrogram to flip branches.\n            </div>\n  }\n}",...Dendrogram.parameters?.docs?.source}}}},"./node_modules/d3-scale-chromatic/src/diverging/BrBG.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js"),_ramp_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-scale-chromatic/src/ramp.js"),scheme=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(_colors_js__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=(0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__.Z)(scheme)},"./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js"),_ramp_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-scale-chromatic/src/ramp.js"),scheme=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(_colors_js__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=(0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__.Z)(scheme)},"./node_modules/d3-shape/src/curve/bundle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _basis_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/curve/basis.js");function Bundle(context,beta){this._basis=new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context),this._beta=beta}Bundle.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var x=this._x,y=this._y,j=x.length-1;if(j>0)for(var t,x0=x[0],y0=y[0],dx=x[j]-x0,dy=y[j]-y0,i=-1;++i<=j;)t=i/j,this._basis.point(this._beta*x[i]+(1-this._beta)*(x0+t*dx),this._beta*y[i]+(1-this._beta)*(y0+t*dy));this._x=this._y=null,this._basis.lineEnd()},point:function(x,y){this._x.push(+x),this._y.push(+y)}};const __WEBPACK_DEFAULT_EXPORT__=function custom(beta){function bundle(context){return 1===beta?new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context):new Bundle(context,beta)}return bundle.beta=function(beta){return custom(+beta)},bundle}(.85)}}]);