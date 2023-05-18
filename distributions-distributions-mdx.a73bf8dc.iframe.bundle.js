"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[1715,1847],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./examples/distributions/distributions.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BarAndWhisker:()=>BarAndWhisker,ManyDistributions:()=>ManyDistributions,QuantileGroups:()=>QuantileGroups,StripsAndBox:()=>StripsAndBox,Violins:()=>Violins,Waterfall:()=>Waterfall,__namedExportsOrder:()=>__namedExportsOrder,default:()=>distributions_stories});var gallery=__webpack_require__("./examples/gallery.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),chsk_band_es=__webpack_require__("./packages/band/dist/chsk-band.es.js"),chsk_themes_es=__webpack_require__("./packages/themes/dist/chsk-themes.es.js"),utils=__webpack_require__("./examples/utils.ts"),navigation=__webpack_require__("./examples/navigation.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var customTheme=(0,chsk_core_es.ItK)([chsk_themes_es.Ee,chsk_themes_es.JR,{line:{median:{stroke:"#161616",strokeWidth:3},whisker:{stroke:"#161616",strokeWidth:1.5}},rect:{box:{fillOpacity:.5,strokeWidth:1.5}},text:{intervalLabel:{textAnchor:"middle",fontWeight:400,fill:"#222255"}},AxisLabel:{bottom:{distance:60}},AxisTicks:{bottom:{labelAngle:-45,labelDistance:10,labelStyle:{textAnchor:"end",dominantBaseline:"middle"}}}}]),quantileProps={keys:["before","after"],paddingInternal:0,scaleIndex:{variant:"band",domain:"auto",paddingInner:.25,paddingOuter:.25},scaleValue:{variant:"linear",domain:"auto"},scaleColor:{variant:"categorical",colors:["#f2f0f7","#54278f"]}},QuantileGroupsChart=function QuantileGroupsChart(_ref){var fref=_ref.fref,chartData=_ref.chartData,rawData=_ref.rawData;return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{id:"quantileGroups",fref,data:chartData,size:[800,340],padding:[60,100,80,60],theme:customTheme,children:(0,jsx_runtime.jsxs)(chsk_band_es.cO,_extends({},quantileProps,{data:rawData,autoRescale:!1,children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y",values:6}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"x"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"score (a.u.)",ticks:6}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"Samples"}),(0,jsx_runtime.jsxs)(chsk_core_es.g_k,{id:"quantile-groups",children:[(0,jsx_runtime.jsx)(chsk_band_es.Rv,{boxStyle:{stroke:"#222222"},whiskerStyle:{stroke:"#161616"},middleStyle:{stroke:"#161616"},whiskerCapWidth:.75}),(0,jsx_runtime.jsx)(chsk_band_es.nE,{style:{fill:"#222222",opacity:.3}})]}),(0,jsx_runtime.jsx)(chsk_core_es.N5d,{variant:"x",container:{position:[1,0],positionUnits:"relative",offset:[12,0]},component:navigation.h}),(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{position:[1,1],positionUnits:"relative",offset:[12,0],anchor:[0,1],padding:[0,0,0,0],r:9,itemSize:[100,20],itemPadding:[2,2,2,2]}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[0,-35],children:"Many distributions"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"subtitle",position:[0,-16],children:"Boxes and whiskers drawn from pre-computed quantile data"}),(0,jsx_runtime.jsx)(navigation.N,{position:[620,270],data:!0,image:!0}),(0,jsx_runtime.jsx)(chsk_band_es.Y_,{anchor:[0,.5],offset:[24,0],maxOverhang:[40,40,40,40],padding:[8,8,8,8],itemSize:[160,26],cellSize:[40,20],cellPadding:20,labelFormat:function labelFormat(x){var _x$key;return null!=(_x$key=x.key)?_x$key:""},valueFormat:utils.$F,title:"",style:{strokeWidth:1,stroke:"#000000"},labelStyle:{fontWeight:600}})]}))})};QuantileGroupsChart.displayName="QuantileGroupsChart";try{QuantileGroupsChart.displayName="QuantileGroupsChart",QuantileGroupsChart.__docgenInfo={description:"",displayName:"QuantileGroupsChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/distributions/QuantileGroupsChart.tsx#QuantileGroupsChart"]={docgenInfo:QuantileGroupsChart.__docgenInfo,name:"QuantileGroupsChart",path:"examples/distributions/QuantileGroupsChart.tsx#QuantileGroupsChart"})}catch(__react_docgen_typescript_loader_error){}function StripAndBoxChart_extends(){return StripAndBoxChart_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},StripAndBoxChart_extends.apply(this,arguments)}var StripAndBoxChart_customTheme={line:{intervalLabel:{strokeWidth:1,stroke:"#222255"},axis:{strokeWidth:1.5}},text:{axisLabel:{textAnchor:"middle",dominantBaseline:"auto"},intervalLabel:{textAnchor:"middle",fontWeight:400,fill:"#222255"},"tooltipItem.label":{textAnchor:"start"},"tooltipItem.value":{textAnchor:"start",fontWeight:600,dominantBaseline:"central"}},tspan:{exponent:{fontSize:"10px"}}},stripProps={keys:["x","y","z"],variant:"layered",scaleIndex:{variant:"band",domain:"auto",paddingInner:.2,paddingOuter:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},expLabelFormat=function expLabelFormat(v){var _Number$toExponential=Number(v).toExponential().split("e"),a=_Number$toExponential[0],b=_Number$toExponential[1];return(0,jsx_runtime.jsxs)("tspan",{children:["1"!==a?a+" · ":"","10",(0,jsx_runtime.jsx)("tspan",{dy:-6,className:"exponent",children:b.replace("+","")})]})};expLabelFormat.displayName="expLabelFormat";var roundExp2dp=function roundExp2dp(v){var _v$toExponential$spli=v.toExponential().split("e"),a=_v$toExponential$spli[0],b=_v$toExponential$spli[1];return(0,utils.$F)(Number(a))+"e"+b},StripAndBoxChart=function StripAndBoxChart(_ref){var fref=_ref.fref,chartData=_ref.chartData,rawData=_ref.rawData;return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{id:"stripAndBox",fref,data:chartData,size:[360,400],padding:[40,60,60,80],theme:StripAndBoxChart_customTheme,children:[(0,jsx_runtime.jsxs)(chsk_band_es.D_,StripAndBoxChart_extends({},stripProps,{data:rawData,paddingInternal:.4,scaleValue:{variant:"log"},children:[(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"axes",children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y",values:5}),(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"left",children:[(0,jsx_runtime.jsx)(chsk_core_es.$Co,{}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{children:"Measurements (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.yAs,{ticks:5,labelFormat:expLabelFormat})]}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"counts",children:(0,jsx_runtime.jsx)(chsk_core_es.$Co,{variant:"bottom"})}),(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{position:[0,1],positionUnits:"relative",anchor:[0,0],offset:[5,5],horizontal:!0,padding:[10,0,10,0],r:10,itemSize:[85,20],itemPadding:[2,2,2,2]})]}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"strips",children:(0,jsx_runtime.jsx)(chsk_band_es.iP,{})})]})),(0,jsx_runtime.jsx)(chsk_band_es.cO,StripAndBoxChart_extends({},stripProps,{data:rawData,paddingInternal:0,scaleValue:{variant:"log"},children:(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"quantiles",children:[(0,jsx_runtime.jsx)(chsk_band_es.Rv,{boxStyle:{fillOpacity:.35,stroke:"#222222",strokeWidth:1.5},whiskerStyle:{stroke:"#161616",strokeWidth:1.5},middleStyle:{stroke:"#161616",strokeWidth:3},whiskerCapWidth:.3}),(0,jsx_runtime.jsx)(chsk_band_es.Y_,{maxOverhang:[40,40,40,40],size:[220,140],cellSize:[40,20],cellPadding:20,padding:[8,8,8,8],itemSize:[160,26],labelFormat:function labelFormat(x){var _x$key;return null!=(_x$key=x.key)?_x$key:""},valueFormat:roundExp2dp,title:""})]})}))]})};StripAndBoxChart.displayName="StripAndBoxChart";try{StripAndBoxChart.displayName="StripAndBoxChart",StripAndBoxChart.__docgenInfo={description:"",displayName:"StripAndBoxChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/distributions/StripAndBoxChart.tsx#StripAndBoxChart"]={docgenInfo:StripAndBoxChart.__docgenInfo,name:"StripAndBoxChart",path:"examples/distributions/StripAndBoxChart.tsx#StripAndBoxChart"})}catch(__react_docgen_typescript_loader_error){}function ManyDistributionsStripChart_extends(){return ManyDistributionsStripChart_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},ManyDistributionsStripChart_extends.apply(this,arguments)}var ManyDistributionsStripChart_customTheme=(0,chsk_core_es.hr)(chsk_themes_es.JR,{line:{grid:{strokeDasharray:"6 6",stroke:"#888888"},median:{stroke:"#dd0000",strokeWidth:3,strokeLinecap:"round"}},rect:{inner:{stroke:"#222222",strokeWidth:1,fill:"#ffffff"}}}),customProps={keys:["data"],scaleIndex:{variant:"band",paddingOuter:.1,paddingInner:.2},scaleValue:{variant:"linear"}},ManyDistributionsStripChart=function ManyDistributionsStripChart(_ref){var fref=_ref.fref,chartData=_ref.chartData,rawData=_ref.rawData;return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{data:chartData,fref,id:"manyDistributions",size:[800,340],padding:[60,40,60,60],theme:ManyDistributionsStripChart_customTheme,children:[(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[0,-40],children:"Many distributions"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"subtitle",position:[0,-18],children:"Letters arranged in alphabetical order, values in ascending order"}),(0,jsx_runtime.jsxs)(chsk_band_es.D_,ManyDistributionsStripChart_extends({},customProps,{data:rawData,jitter:"ascending",children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",children:(0,jsx_runtime.jsx)(chsk_core_es.yAs,{tickSize:5,labelAngle:-90,labelDistance:9,labelStyle:{textAnchor:"end",dominantBaseline:"middle"}})}),(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"left",children:[(0,jsx_runtime.jsx)(chsk_core_es.yAs,{tickSize:5}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{children:"Measurements (a.u.)"})]}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"right",children:(0,jsx_runtime.jsx)(chsk_core_es.yAs,{tickSize:5})}),(0,jsx_runtime.jsx)(chsk_band_es.iP,{})]})),(0,jsx_runtime.jsxs)(chsk_band_es.cO,ManyDistributionsStripChart_extends({},customProps,{data:rawData,scaleIndex:{variant:"band",paddingOuter:.15,paddingInner:.3},children:[(0,jsx_runtime.jsx)(chsk_band_es.Rv,{boxStyle:{visibility:"hidden"},whiskerStyle:{visibility:"hidden"},middleStyle:{stroke:"#dd0000"}}),(0,jsx_runtime.jsx)(chsk_band_es.nE,{style:{fill:"#cccccc",opacity:.3}}),(0,jsx_runtime.jsx)(chsk_band_es.Y_,{anchor:[0,.5],offset:[20,0],maxOverhang:[40,40,40,40],padding:[8,8,8,8],itemSize:[160,26],cellSize:[40,20],cellPadding:20,labelFormat:function labelFormat(x){var _x$id;return null!=(_x$id=x.id)?_x$id:""},valueFormat:utils.$F,title:"",style:{strokeWidth:1,stroke:"#000000"},labelStyle:{fontWeight:600}})]}))]})};ManyDistributionsStripChart.displayName="ManyDistributionsStripChart";try{ManyDistributionsStripChart.displayName="ManyDistributionsStripChart",ManyDistributionsStripChart.__docgenInfo={description:"",displayName:"ManyDistributionsStripChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/distributions/ManyDistributionsStripChart.tsx#ManyDistributionsStripChart"]={docgenInfo:ManyDistributionsStripChart.__docgenInfo,name:"ManyDistributionsStripChart",path:"examples/distributions/ManyDistributionsStripChart.tsx#ManyDistributionsStripChart"})}catch(__react_docgen_typescript_loader_error){}var chsk_annotation_es=__webpack_require__("./packages/annotation/dist/chsk-annotation.es.js"),WaterfallStripChart_customTheme={line:{axis:{visibility:"visible",strokeWidth:1},grid:{strokeDasharray:"5 5"}},rect:{"surface.inner":{stroke:"#222222",strokeWidth:1,fill:"#ffffff"},boxedLabel:{fill:"#ffffff"}},text:{boxedLabel:{fill:"#555555"}}},BetweenBandsLabel=function BetweenBandsLabel(_ref){var x1=_ref.x1,x2=_ref.x2,y=_ref.y,label=_ref.label,size=_ref.size,scales=(0,chsk_core_es.kE1)().scales,scaleIndex=scales.x,scaleValue=scales.y,center=[(scaleIndex(x1)+scaleIndex(x2))/2,scaleValue(y)];return(0,jsx_runtime.jsx)(chsk_annotation_es.I6,{position:center,size,children:label})};BetweenBandsLabel.displayName="BetweenBandsLabel";var WaterfallStripChart=function WaterfallStripChart(_ref2){var fref=_ref2.fref,chartData=_ref2.chartData,rawData=_ref2.rawData;if(!(0,chsk_band_es.k6)(rawData))return null;var subsetData=rawData.filter((function(d){return Math.abs(d.data[0])>2.5})),omitted="("+(rawData.length-subsetData.length)+" samples)",lastPositiveId=subsetData.filter((function(d){return Number(d.data[0])>0})).reverse()[0].id,firstNegativeId=subsetData.filter((function(d){return Number(d.data[0])<0}))[0].id,scaleIndex={variant:"band",paddingOuter:.1,paddingInner:.2,extraPadding:{}};return scaleIndex.extraPadding&&(scaleIndex.extraPadding[firstNegativeId]=6),(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{data:chartData,fref,id:"waterfall",size:[800,340],padding:[60,40,60,60],theme:WaterfallStripChart_customTheme,children:[(0,jsx_runtime.jsxs)(chsk_band_es.D_,{data:subsetData,keys:["data"],scaleValue:{variant:"linear"},scaleIndex,children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y",values:[-2.5,2.5],style:{stroke:"#222222",strokeWidth:2}}),(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"bottom",children:[(0,jsx_runtime.jsx)(chsk_core_es.yAs,{tickSize:5,labelAngle:-45,labelDistance:9,labelStyle:{textAnchor:"end",dominantBaseline:"middle"}}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{distance:55,children:"Samples"})]}),(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"left",children:[(0,jsx_runtime.jsx)(chsk_core_es.yAs,{tickSize:5}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{children:"z-score"})]}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"right",children:(0,jsx_runtime.jsx)(chsk_core_es.yAs,{tickSize:5})}),(0,jsx_runtime.jsx)(chsk_band_es.iP,{}),(0,jsx_runtime.jsx)(BetweenBandsLabel,{x1:lastPositiveId,x2:firstNegativeId,y:0,label:omitted,size:[80,40]}),(0,jsx_runtime.jsx)(chsk_band_es.nE,{style:{fill:"#222222",opacity:.3}})]}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[0,-40],children:"Focus on the edges of a distribution"}),(0,jsx_runtime.jsxs)(chsk_core_es.ZT$,{variant:"subtitle",position:[0,-18],children:[subsetData.length," samples out of ",rawData.length," have |z| > 2.5"]})]})};WaterfallStripChart.displayName="WaterfallStripChart";try{WaterfallStripChart.displayName="WaterfallStripChart",WaterfallStripChart.__docgenInfo={description:"",displayName:"WaterfallStripChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/distributions/WaterfallStripChart.tsx#WaterfallStripChart"]={docgenInfo:WaterfallStripChart.__docgenInfo,name:"WaterfallStripChart",path:"examples/distributions/WaterfallStripChart.tsx#WaterfallStripChart"})}catch(__react_docgen_typescript_loader_error){}function BarStripChart_extends(){return BarStripChart_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},BarStripChart_extends.apply(this,arguments)}var BarStripChart_customTheme=(0,chsk_core_es.ItK)([chsk_themes_es.Ee,chsk_themes_es.JR,{line:{axis:{stroke:"#222222",strokeWidth:2},tick:{strokeWidth:1}},text:{tickLabel:{fontSize:"12px"}}}]),BarStripChart_stripProps={keys:["x","y"],paddingInternal:.3,scaleIndex:{variant:"band",domain:"auto",paddingInner:.2,paddingOuter:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},BarStripChart=function BarStripChart(_ref){var fref=_ref.fref,chartData=_ref.chartData,rawData=_ref.rawData;return(0,chsk_band_es.k6)(rawData)?(0,jsx_runtime.jsx)(chsk_core_es.kL2,{data:chartData,fref,id:"bar-and-whisker",size:[360,400],padding:[40,140,70,70],theme:BarStripChart_customTheme,children:(0,jsx_runtime.jsxs)(chsk_band_es.cO,BarStripChart_extends({},BarStripChart_stripProps,{data:rawData,paddingInternal:0,children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:""}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"Measurements (a.u.)"}),(0,jsx_runtime.jsx)(navigation.N,{position:[160,350],data:!0,image:!0}),(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{offset:[20,0],position:[1,1],positionUnits:"relative",anchor:[0,1],title:"Conditions",itemSize:[100,20],itemPadding:[2,2,2,2],r:9}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"boxes",exitOn:"bars",children:(0,jsx_runtime.jsx)(chsk_band_es.Rv,{boxStyle:{fillOpacity:.35,stroke:"#222222",strokeWidth:2},whiskerStyle:{stroke:"#161616",strokeWidth:2},middleStyle:{stroke:"#161616",strokeWidth:3},whiskerCapWidth:.5})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"bars",children:(0,jsx_runtime.jsx)(chsk_band_es.Rv,{boxStyle:{fillOpacity:.35,stroke:"#222222",strokeWidth:2},whiskerStyle:{stroke:"#161616",strokeWidth:2},middleStyle:{stroke:"#161616",strokeWidth:3},whiskerCapWidth:.5,component:chsk_band_es.af})}),(0,jsx_runtime.jsx)(chsk_band_es.D_,BarStripChart_extends({},BarStripChart_stripProps,{data:rawData,valueSize:4,style:{pointerEvents:"none"},children:(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"points",exitOn:"barsonly",children:(0,jsx_runtime.jsx)(chsk_band_es.iP,{symbolStyle:{strokeWidth:1,stroke:"#161616"}})})})),(0,jsx_runtime.jsx)(chsk_band_es.Y_,{maxOverhang:[40,40,40,40],size:[200,140],anchor:[.5,0],offset:[0,15],cellSize:[40,20],cellPadding:20,padding:[8,8,8,8],itemSize:[160,26],labelFormat:function labelFormat(x){return x.id+" - "+x.key},valueFormat:utils.$F,title:""})]}))}):null};BarStripChart.displayName="BarStripChart";try{BarStripChart.displayName="BarStripChart",BarStripChart.__docgenInfo={description:"",displayName:"BarStripChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/distributions/BarStripChart.tsx#BarStripChart"]={docgenInfo:BarStripChart.__docgenInfo,name:"BarStripChart",path:"examples/distributions/BarStripChart.tsx#BarStripChart"})}catch(__react_docgen_typescript_loader_error){}var _QuantileGroups$param,_QuantileGroups$param2,_QuantileGroups$param3,_StripsAndBox$paramet,_StripsAndBox$paramet2,_StripsAndBox$paramet3,_ManyDistributions$pa,_ManyDistributions$pa2,_ManyDistributions$pa3,_Waterfall$parameters,_Waterfall$parameters2,_Waterfall$parameters3,_BarAndWhisker$parame,_BarAndWhisker$parame2,_BarAndWhisker$parame3,_Violins$parameters,_Violins$parameters2,_Violins$parameters2$,ids=utils.eB.slice(0,6),ViolinChart_customTheme=(0,chsk_core_es.ItK)([chsk_themes_es.Ee,{line:{baseline:{stroke:"#222222",strokeWidth:2}},path:{violin:{stroke:"#222222",strokeWidth:1,fillOpacity:1}},text:{title:{fontSize:"16px"},paragraph:{textAnchor:"start",fill:"#444444"}}}]),customLabelFormat=function customLabelFormat(x){return x.id+", n="+("n"in x?x.n:"?")},ViolinChart=function ViolinChart(_ref){var fref=_ref.fref,chartData=_ref.chartData,rawData=_ref.rawData;return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{id:"violins",fref,data:chartData,size:[600,400],padding:[170,120,30,70],theme:ViolinChart_customTheme,children:(0,jsx_runtime.jsxs)(chsk_band_es.BS,{variant:"layered",data:rawData,keys:ids,autoRescale:!0,horizontal:!0,breaks:25,scaleIndex:{variant:"band",paddingOuter:.3},scaleValue:{variant:"linear",domain:[0,100]},children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y",values:6}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"x"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:""}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"top",label:"score (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"x",values:[0],className:"baseline"}),(0,jsx_runtime.jsx)(chsk_band_es.KI,{style:{stroke:"#222222"}}),(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{position:[1,.5],positionUnits:"relative",offset:[20,0],anchor:[0,.5],padding:[0,0,0,0],r:9,itemSize:[100,20],itemPadding:[2,2,2,2]}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[-50,-150],children:"Violins"}),(0,jsx_runtime.jsx)(chsk_annotation_es.nv,{size:[480,18],position:[-50,-125],align:0,children:"Violin charts summarize value distributions. In contrast to box plots, violins can reveal subtle patterns such as bi-modality. However, violin shapes can be sensitive to outliers."}),(0,jsx_runtime.jsx)(navigation.N,{position:[420,210],data:!0,image:!0}),(0,jsx_runtime.jsx)(chsk_core_es.ua7,{itemSize:[120,24],labelFormat:customLabelFormat})]})})};ViolinChart.displayName="ViolinChart";try{ViolinChart.displayName="ViolinChart",ViolinChart.__docgenInfo={description:"",displayName:"ViolinChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/distributions/ViolinChart.tsx#ViolinChart"]={docgenInfo:ViolinChart.__docgenInfo,name:"ViolinChart",path:"examples/distributions/ViolinChart.tsx#ViolinChart"})}catch(__react_docgen_typescript_loader_error){}function distributions_stories_extends(){return distributions_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},distributions_stories_extends.apply(this,arguments)}const distributions_stories=distributions_stories_extends({},gallery.m,{title:"Gallery/Distribution charts"});var QuantileGroups={name:"quantiles",args:{generator:function generateQuantileGroupsData(){var q5=[.05,.25,.5,.75,.95],generateDistributionSummary=function generateDistributionSummary(mean,sd){var values=Array(9).fill(0).map((function(){return(0,utils.TL)(mean,sd)})).sort((function(a,b){return a-b}));return{n:Math.round((0,utils.TL)(100,15)),moments:[(values[3]+values[5])/2,NaN],values:[values[0],values[2],values[4],values[6],values[8]],quantiles:q5,extrema:[values[0]-.5,values[8]+.5]}};return utils.eB.map((function(id){return{id,before:generateDistributionSummary(0,1),after:generateDistributionSummary(.5,1)}}))},chart:QuantileGroupsChart}},StripsAndBox={name:"strips and quantiles",args:{generator:function generateStripAndBoxData(){var three=Array(3).fill(0),means=three.map((function(){return(0,utils.SN)(10,16)})),offsets=three.map((function(){return(0,utils.SN)(0,5)})),positive=function positive(v){return v>0},x=(0,utils.G0)([45,5],[means[0],means[0]+offsets[0]],[3,6]),y=(0,utils.G0)([45,5],[means[1],means[1]+offsets[1]],[3,8]),z=(0,utils.G0)([45,5],[means[2],means[2]+offsets[2]],[3,6]),power=function power(v){return Math.pow(2,v)};return[{id:"controls",x:x.filter(positive).map(power)},{id:"A",y:y.filter(positive).map(power)},{id:"B",z:z.filter(positive).map(power)}]},chart:StripAndBoxChart,steps:["axes","strips","quantiles","strips","strips"]}},ManyDistributions={name:"many distributions",args:{generator:function generateManyDistributionsData(){return utils.eB.map((function(id,i){return{id,data:(0,utils.G0)([(0,utils.TL)(25,4)],[.8+.2*i],[.5+.05*i])}}))},chart:ManyDistributionsStripChart}},Waterfall={name:"waterfall",args:{generator:function generateWaterfallStripData(){var ids=(0,utils.D)(1e3,1e4,"S"),values=(0,utils.G0)([930,70],[0,0],[1,3]);return ids.map((function(id,i){return{id,data:[values[i]]}})).sort((function(a,b){return-a.data[0]+b.data[0]}))},chart:WaterfallStripChart}},BarAndWhisker={name:"bar and whiskers",args:{generator:function generateBarStripData(){var means=(0,utils.Bh)(6,10,80),positive=function positive(v){return v>=0};return["alpha","beta","gamma"].map((function(id,index){return{id,x:(0,utils.G0)([6],[means[2*index]],[10]).filter(positive),y:(0,utils.G0)([6],[means[2*index+1]],[10]).filter(positive)}}))},chart:BarStripChart,steps:["points","boxes","bars","barsonly"],comment:(0,jsx_runtime.jsx)("div",{children:"This example summarizes data with strip, box-and-whisker, and bar-and-whiskers representations. Click through the milestone animation to toggle between them."})}},Violins={name:"violins",args:{generator:function generateViolinData(){var means=(0,utils.Bh)(6,25,80),sds=(0,utils.Bh)(6,1,10),n=(0,utils.Bh)(6,500,1e3),bimodal=(0,utils.Bh)(2,0,6).map((function(v){return Math.floor(v)}));return ids.map((function(id,i){var result={id},values=(0,utils.G0)([n[i]],[means[i]],[sds[i]]);if(bimodal.indexOf(i)>=0){var newN=.8*n[i],newMean=means[i]>50?means[i]-4*sds[i]:means[i]+3*sds[i];values=values.concat((0,utils.G0)([newN],[newMean],[sds[i]]))}return result[id]=values.filter((function(v){return v>=0})).filter((function(v){return v<=100})).map((function(v){return(0,chsk_core_es.DJC)(v,4)})),result}))},chart:ViolinChart}};QuantileGroups.parameters=distributions_stories_extends({},QuantileGroups.parameters,{docs:distributions_stories_extends({},null==(_QuantileGroups$param=QuantileGroups.parameters)?void 0:_QuantileGroups$param.docs,{source:distributions_stories_extends({originalSource:"{\n  name: 'quantiles',\n  args: {\n    generator: generateQuantileGroupsData,\n    chart: QuantileGroupsChart\n  }\n}"},null==(_QuantileGroups$param2=QuantileGroups.parameters)||null==(_QuantileGroups$param3=_QuantileGroups$param2.docs)?void 0:_QuantileGroups$param3.source)})}),StripsAndBox.parameters=distributions_stories_extends({},StripsAndBox.parameters,{docs:distributions_stories_extends({},null==(_StripsAndBox$paramet=StripsAndBox.parameters)?void 0:_StripsAndBox$paramet.docs,{source:distributions_stories_extends({originalSource:"{\n  name: 'strips and quantiles',\n  args: {\n    generator: generateStripAndBoxData,\n    chart: StripAndBoxChart,\n    steps: ['axes', 'strips', 'quantiles', 'strips', 'strips']\n  }\n}"},null==(_StripsAndBox$paramet2=StripsAndBox.parameters)||null==(_StripsAndBox$paramet3=_StripsAndBox$paramet2.docs)?void 0:_StripsAndBox$paramet3.source)})}),ManyDistributions.parameters=distributions_stories_extends({},ManyDistributions.parameters,{docs:distributions_stories_extends({},null==(_ManyDistributions$pa=ManyDistributions.parameters)?void 0:_ManyDistributions$pa.docs,{source:distributions_stories_extends({originalSource:"{\n  name: 'many distributions',\n  args: {\n    generator: generateManyDistributionsData,\n    chart: ManyDistributionsStripChart\n  }\n}"},null==(_ManyDistributions$pa2=ManyDistributions.parameters)||null==(_ManyDistributions$pa3=_ManyDistributions$pa2.docs)?void 0:_ManyDistributions$pa3.source)})}),Waterfall.parameters=distributions_stories_extends({},Waterfall.parameters,{docs:distributions_stories_extends({},null==(_Waterfall$parameters=Waterfall.parameters)?void 0:_Waterfall$parameters.docs,{source:distributions_stories_extends({originalSource:"{\n  name: 'waterfall',\n  args: {\n    generator: generateWaterfallStripData,\n    chart: WaterfallStripChart\n  }\n}"},null==(_Waterfall$parameters2=Waterfall.parameters)||null==(_Waterfall$parameters3=_Waterfall$parameters2.docs)?void 0:_Waterfall$parameters3.source)})}),BarAndWhisker.parameters=distributions_stories_extends({},BarAndWhisker.parameters,{docs:distributions_stories_extends({},null==(_BarAndWhisker$parame=BarAndWhisker.parameters)?void 0:_BarAndWhisker$parame.docs,{source:distributions_stories_extends({originalSource:"{\n  name: 'bar and whiskers',\n  args: {\n    generator: generateBarStripData,\n    chart: BarStripChart,\n    steps: ['points', 'boxes', 'bars', 'barsonly'],\n    comment: <div>\n                This example summarizes data with strip, box-and-whisker, and bar-and-whiskers\n                representations. Click through the milestone animation to toggle between them.\n            </div>\n  }\n}"},null==(_BarAndWhisker$parame2=BarAndWhisker.parameters)||null==(_BarAndWhisker$parame3=_BarAndWhisker$parame2.docs)?void 0:_BarAndWhisker$parame3.source)})}),Violins.parameters=distributions_stories_extends({},Violins.parameters,{docs:distributions_stories_extends({},null==(_Violins$parameters=Violins.parameters)?void 0:_Violins$parameters.docs,{source:distributions_stories_extends({originalSource:"{\n  name: 'violins',\n  args: {\n    generator: generateViolinData,\n    chart: ViolinChart\n  }\n}"},null==(_Violins$parameters2=Violins.parameters)||null==(_Violins$parameters2$=_Violins$parameters2.docs)?void 0:_Violins$parameters2$.source)})});var __namedExportsOrder=["QuantileGroups","StripsAndBox","ManyDistributions","Waterfall","BarAndWhisker","Violins"]},"./examples/distributions/distributions.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_distributions_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./examples/distributions/distributions.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"examples-of-distribution-charts",children:"Examples of distribution charts"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_distributions_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_distributions_stories__WEBPACK_IMPORTED_MODULE_2__.QuantileGroups}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_distributions_stories__WEBPACK_IMPORTED_MODULE_2__.StripsAndBox}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_distributions_stories__WEBPACK_IMPORTED_MODULE_2__.ManyDistributions}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_distributions_stories__WEBPACK_IMPORTED_MODULE_2__.Waterfall}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_distributions_stories__WEBPACK_IMPORTED_MODULE_2__.BarAndWhisker}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_distributions_stories__WEBPACK_IMPORTED_MODULE_2__.Violins})]})}}}}]);