"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[1591],{"./packages/core/stories/components/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OR:()=>ChartViewDecorator,VK:()=>ChartBandViewDecorator,ee:()=>ChartDecorator,ke:()=>viewSeriesIndexesKeys,z5:()=>DivDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},DivDecorator=function DivDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};DivDecorator.displayName="DivDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartViewDecorator=function ChartViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})})};ChartViewDecorator.displayName="ChartViewDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,40,60,80],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},scaleY:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"})]})})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";try{DivDecorator.displayName="DivDecorator",DivDecorator.__docgenInfo={description:"",displayName:"DivDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#DivDecorator"]={docgenInfo:DivDecorator.__docgenInfo,name:"DivDecorator",path:"packages/core/stories/components/decorators.tsx#DivDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/core/stories/components/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartViewDecorator.displayName="ChartViewDecorator",ChartViewDecorator.__docgenInfo={description:"",displayName:"ChartViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartViewDecorator"]={docgenInfo:ChartViewDecorator.__docgenInfo,name:"ChartViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/legends/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AP:()=>ChartWithRightLegendDecorator,RW:()=>ChartForLegend2Decorator,Wl:()=>ChartWithSizeLegendDecorator,kN:()=>ChartWithColorLegendDecorator,lT:()=>ChartForColorLegendDecorator,p8:()=>ChartForLegendDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/stories/components/decorators.tsx"),d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-scale-chromatic/src/sequential-single/Blues.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartForLegendDecorator=function ChartForLegendDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[80,80,80,80],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{data:_decorators__WEBPACK_IMPORTED_MODULE_1__.ke,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})})};ChartForLegendDecorator.displayName="ChartForLegendDecorator";var ChartForLegend2Decorator=function ChartForLegend2Decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[80,120,80,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{data:_decorators__WEBPACK_IMPORTED_MODULE_1__.ke,children:[Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"})]})})};ChartForLegend2Decorator.displayName="ChartForLegend2Decorator";var ChartWithRightLegendDecorator=function ChartWithRightLegendDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[20,100,20,20],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{data:_decorators__WEBPACK_IMPORTED_MODULE_1__.ke,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.DeQ,{position:[280,0],positionUnits:"absolute",size:[100,80],sizeUnits:"absolute",anchor:[0,0],padding:[12,4,12,4],children:Story()})]})})};ChartWithRightLegendDecorator.displayName="ChartWithRightLegendDecorator";var ChartWithRightLegendTitleDecorator=function ChartWithRightLegendTitleDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[20,100,20,20],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{data:_decorators__WEBPACK_IMPORTED_MODULE_1__.ke,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.DeQ,{position:[280,0],positionUnits:"absolute",size:[100,80],sizeUnits:"absolute",anchor:[0,0],padding:[12,10,12,10],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.VwH,{position:[0,0],children:"Legend title"}),Story()]})]})})};ChartWithRightLegendTitleDecorator.displayName="ChartWithRightLegendTitleDecorator";var scaleBluesSpec={variant:"sequential",colors:d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_3__.Z,domain:[0,100]},ChartForColorLegendDecorator=function ChartForColorLegendDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,140,120,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{data:_decorators__WEBPACK_IMPORTED_MODULE_1__.ke,scaleColor:scaleBluesSpec,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})})};ChartForColorLegendDecorator.displayName="ChartForColorLegendDecorator";var ChartWithColorLegendDecorator=function ChartWithColorLegendDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,120,80,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{data:_decorators__WEBPACK_IMPORTED_MODULE_1__.ke,scaleColor:scaleBluesSpec,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.DeQ,{variant:"color",position:[260,0],anchor:[0,0],positionUnits:"absolute",children:Story()})]})})};ChartWithColorLegendDecorator.displayName="ChartWithColorLegendDecorator";var ChartWithSizeLegendDecorator=function ChartWithSizeLegendDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,120,80,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{data:_decorators__WEBPACK_IMPORTED_MODULE_1__.ke,scaleColor:scaleBluesSpec,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.DeQ,{variant:"color",position:[250,0],anchor:[0,0],positionUnits:"absolute",children:Story()})]})})};ChartWithSizeLegendDecorator.displayName="ChartWithSizeLegendDecorator";try{ChartForLegendDecorator.displayName="ChartForLegendDecorator",ChartForLegendDecorator.__docgenInfo={description:"",displayName:"ChartForLegendDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/legends/decorators.tsx#ChartForLegendDecorator"]={docgenInfo:ChartForLegendDecorator.__docgenInfo,name:"ChartForLegendDecorator",path:"packages/core/stories/components/legends/decorators.tsx#ChartForLegendDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForLegend2Decorator.displayName="ChartForLegend2Decorator",ChartForLegend2Decorator.__docgenInfo={description:"",displayName:"ChartForLegend2Decorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/legends/decorators.tsx#ChartForLegend2Decorator"]={docgenInfo:ChartForLegend2Decorator.__docgenInfo,name:"ChartForLegend2Decorator",path:"packages/core/stories/components/legends/decorators.tsx#ChartForLegend2Decorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithRightLegendDecorator.displayName="ChartWithRightLegendDecorator",ChartWithRightLegendDecorator.__docgenInfo={description:"",displayName:"ChartWithRightLegendDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/legends/decorators.tsx#ChartWithRightLegendDecorator"]={docgenInfo:ChartWithRightLegendDecorator.__docgenInfo,name:"ChartWithRightLegendDecorator",path:"packages/core/stories/components/legends/decorators.tsx#ChartWithRightLegendDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithRightLegendTitleDecorator.displayName="ChartWithRightLegendTitleDecorator",ChartWithRightLegendTitleDecorator.__docgenInfo={description:"",displayName:"ChartWithRightLegendTitleDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/legends/decorators.tsx#ChartWithRightLegendTitleDecorator"]={docgenInfo:ChartWithRightLegendTitleDecorator.__docgenInfo,name:"ChartWithRightLegendTitleDecorator",path:"packages/core/stories/components/legends/decorators.tsx#ChartWithRightLegendTitleDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForColorLegendDecorator.displayName="ChartForColorLegendDecorator",ChartForColorLegendDecorator.__docgenInfo={description:"",displayName:"ChartForColorLegendDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/legends/decorators.tsx#ChartForColorLegendDecorator"]={docgenInfo:ChartForColorLegendDecorator.__docgenInfo,name:"ChartForColorLegendDecorator",path:"packages/core/stories/components/legends/decorators.tsx#ChartForColorLegendDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithColorLegendDecorator.displayName="ChartWithColorLegendDecorator",ChartWithColorLegendDecorator.__docgenInfo={description:"",displayName:"ChartWithColorLegendDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/legends/decorators.tsx#ChartWithColorLegendDecorator"]={docgenInfo:ChartWithColorLegendDecorator.__docgenInfo,name:"ChartWithColorLegendDecorator",path:"packages/core/stories/components/legends/decorators.tsx#ChartWithColorLegendDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithSizeLegendDecorator.displayName="ChartWithSizeLegendDecorator",ChartWithSizeLegendDecorator.__docgenInfo={description:"",displayName:"ChartWithSizeLegendDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/legends/decorators.tsx#ChartWithSizeLegendDecorator"]={docgenInfo:ChartWithSizeLegendDecorator.__docgenInfo,name:"ChartWithSizeLegendDecorator",path:"packages/core/stories/components/legends/decorators.tsx#ChartWithSizeLegendDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/legends/Legend.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,bottomAnchoredTop:()=>bottomAnchoredTop,bottomRightAnchoredBottomLeft:()=>bottomRightAnchoredBottomLeft,bottomRightAnchoredBottomRight:()=>bottomRightAnchoredBottomRight,colorsHorizontal:()=>colorsHorizontal,colorsVertical:()=>colorsVertical,default:()=>__WEBPACK_DEFAULT_EXPORT__,listHorizontal1:()=>listHorizontal1,listHorizontal2:()=>listHorizontal2,listVertical:()=>listVertical,nonInteractive:()=>nonInteractive,rightAnchoredMiddleLeft:()=>rightAnchoredMiddleLeft,rightWithPadding:()=>rightWithPadding,sizesHorizontal:()=>sizesHorizontal,sizesVertical:()=>sizesVertical});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/stories/components/legends/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,{...args});const rightAnchoredMiddleLeft=Template.bind({});rightAnchoredMiddleLeft.storyName="right, anchored middle-left",rightAnchoredMiddleLeft.args={position:[240,70],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[0,.5],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Tgp,{style:{fill:"#aabbee"}})},rightAnchoredMiddleLeft.parameters={storySource:{source:"args => <Legend {...args} />"}},rightAnchoredMiddleLeft.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.p8];const bottomRightAnchoredBottomLeft=Template.bind({});bottomRightAnchoredBottomLeft.storyName="bottom-right, anchored bottom-left",bottomRightAnchoredBottomLeft.args={position:[240,140],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[0,1],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Tgp,{style:{fill:"#aabbee"}})},bottomRightAnchoredBottomLeft.parameters={storySource:{source:"args => <Legend {...args} />"}},bottomRightAnchoredBottomLeft.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.p8];const bottomRightAnchoredBottomRight=Template.bind({});bottomRightAnchoredBottomRight.storyName="bottom-right, anchored bottom-right",bottomRightAnchoredBottomRight.args={position:[240,140],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[1,1],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Tgp,{style:{fill:"#aabbee"}})},bottomRightAnchoredBottomRight.parameters={storySource:{source:"args => <Legend {...args} />"}},bottomRightAnchoredBottomRight.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.p8];const bottomAnchoredTop=Template.bind({});bottomAnchoredTop.storyName="bottom, anchored top",bottomAnchoredTop.args={position:[120,140],positionUnits:"absolute",size:[140,60],sizeUnits:"absolute",anchor:[.5,0],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Tgp,{style:{fill:"#aabbee"}})},bottomAnchoredTop.parameters={storySource:{source:"args => <Legend {...args} />"}},bottomAnchoredTop.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.p8];const rightWithPadding=Template.bind({});rightWithPadding.storyName="right, with padding",rightWithPadding.args={position:[240,70],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[0,.5],offset:[10,0],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Tgp,{style:{fill:"#aabbee"}})},rightWithPadding.parameters={storySource:{source:"args => <Legend {...args} />"}},rightWithPadding.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.p8];const listVertical=Template.bind({});listVertical.storyName="list, vertical",listVertical.args={position:[240,0],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[0,0],padding:[0,8,0,8],itemSize:[80,24],itemPadding:[2,2,2,2],title:"Legend title"},listVertical.parameters={storySource:{source:"args => <Legend {...args} />"}},listVertical.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.RW];const listHorizontal1=Template.bind({});listHorizontal1.storyName="list, horizontal 1",listHorizontal1.args={position:[0,0],positionUnits:"absolute",size:[240,70],sizeUnits:"absolute",anchor:[0,1],padding:[6,0,6,0],itemSize:[80,24],firstOffset:[-80,24],itemPadding:[2,2,2,2],horizontal:!0,title:"Legend title"},listHorizontal1.parameters={storySource:{source:"args => <Legend {...args} />"}},listHorizontal1.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.RW];const listHorizontal2=Template.bind({});listHorizontal2.storyName="list, horizontal 2",listHorizontal2.args={position:[0,140],positionUnits:"absolute",size:[240,60],sizeUnits:"absolute",anchor:[0,0],padding:[16,0,0,0],itemSize:[70,20],itemPadding:[2,2,2,2],firstOffset:[0,0],horizontal:!0,title:"Legend: "},listHorizontal2.parameters={storySource:{source:"args => <Legend {...args} />"}},listHorizontal2.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.RW];const colorsVertical=Template.bind({});colorsVertical.storyName="colors, vertical",colorsVertical.args={variant:"color",position:[240,0],positionUnits:"absolute",size:[60,100],sizeUnits:"absolute",anchor:[0,0],padding:[0,8,0,8],itemSize:[80,24],itemPadding:[2,2,2,2],title:"Legend title",scaleSize:[12,80],firstOffset:[0,10]},colorsVertical.parameters={storySource:{source:"args => <Legend {...args} />"}},colorsVertical.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.lT];const colorsHorizontal=Template.bind({});colorsHorizontal.storyName="colors, horizontal",colorsHorizontal.args={variant:"color",horizontal:!0,position:[120,180],positionUnits:"absolute",padding:[10,0,10,0],size:[120,60],sizeUnits:"absolute",anchor:[.5,0],itemSize:[90,24],itemPadding:[2,2,2,2],title:"Legend title",scaleSize:[120,12],firstOffset:[-90,20]},colorsHorizontal.parameters={storySource:{source:"args => <Legend {...args} />"}},colorsHorizontal.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.lT];const sizesVertical=Template.bind({});sizesVertical.storyName="sizes, vertical",sizesVertical.args={variant:"size",position:[220,0],positionUnits:"absolute",size:[60,100],sizeUnits:"absolute",anchor:[0,0],padding:[0,8,0,8],itemSize:[80,20],itemPadding:[2,2,2,2],title:"Legend title",firstOffset:[0,10],symbolStyle:{stroke:"#222222",strokeWidth:1},sizeTicks:4},sizesVertical.parameters={storySource:{source:"args => <Legend {...args} />"}},sizesVertical.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.lT];const sizesHorizontal=Template.bind({});sizesHorizontal.storyName="sizes, horizontal",sizesHorizontal.args={variant:"size",horizontal:!0,position:[0,140],positionUnits:"absolute",padding:[10,0,10,0],size:[120,60],sizeUnits:"absolute",anchor:[0,0],itemSize:[26,80],itemPadding:[4,4,4,4],title:"Legend title",firstOffset:[-26,18],symbolStyle:{stroke:"#222222",strokeWidth:1},labelStyle:{textAnchor:"middle",alignmentBaseline:"hanging"},sizeTicks:[10,20,40,80]},sizesHorizontal.parameters={storySource:{source:"args => <Legend {...args} />"}},sizesHorizontal.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.lT];const nonInteractive=Template.bind({});nonInteractive.storyName="non-interactive",nonInteractive.args={position:[240,0],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[0,0],padding:[0,8,0,8],itemSize:[80,24],itemPadding:[2,2,2,2],title:"Legend title",interactive:!1},nonInteractive.parameters={storySource:{source:"args => <Legend {...args} />"}},nonInteractive.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.RW];const componentMeta={title:"Core/Components/Legends/Legend",tags:["stories-mdx"],includeStories:["rightAnchoredMiddleLeft","bottomRightAnchoredBottomLeft","bottomRightAnchoredBottomRight","bottomAnchoredTop","rightWithPadding","listVertical","listHorizontal1","listHorizontal2","colorsVertical","colorsHorizontal","sizesVertical","sizesHorizontal","nonInteractive"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"legend",children:"Legend"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/Components/Legends/Legend"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Legend"})," is a container component for legends."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["When used on its own, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Legend"})," draws a standard/automatic legend on a chart.\nIt can also be used with children elements to construct a custom legend."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"position-size-and-anchor",children:"Position, size, and anchor"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["The location of the legend is controlled by props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"position"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"size"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"anchor"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"position"})," determines a coordinate in the current view. Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"size"})," sets the width and height of the legend container. These two props can be specified either as absolute values (in pixels), or as fractions of the current view size."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"anchor"})," determines which point along the legend boundary makes contact with the specified position."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"In the examples below, the gray area is the current view, and the blue rectangle indicates the legend."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"right, anchored middle-left",args:{position:[240,70],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[0,.5],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Tgp,{style:{fill:"#aabbee"}})},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.p8],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"bottom-right, anchored bottom-left",args:{position:[240,140],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[0,1],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Tgp,{style:{fill:"#aabbee"}})},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.p8],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"bottom-right, anchored bottom-right",args:{position:[240,140],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[1,1],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Tgp,{style:{fill:"#aabbee"}})},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.p8],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"bottom, anchored top",args:{position:[120,140],positionUnits:"absolute",size:[140,60],sizeUnits:"absolute",anchor:[.5,0],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Tgp,{style:{fill:"#aabbee"}})},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.p8],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"offset",children:"Offset"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["A prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"offset"})," introduces an additional shift (in absolute coordinates)\nwith respect to the position determined by ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"position"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"size"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"anchor"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"right, with padding",args:{position:[240,70],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[0,.5],offset:[10,0],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Tgp,{style:{fill:"#aabbee"}})},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.p8],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"categorical-content",children:"Categorical content"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["When ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Legend"})," is used without any child elements, it automatically creates a title and entries for relevant colors and labels. The entries are extracted from the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"useProcessedData"})," hook, which return view-specific information."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"The content can be arranged vertically or horizontally."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"list, vertical",args:{position:[240,0],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[0,0],padding:[0,8,0,8],itemSize:[80,24],itemPadding:[2,2,2,2],title:"Legend title"},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.RW],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"list, horizontal 1",args:{position:[0,0],positionUnits:"absolute",size:[240,70],sizeUnits:"absolute",anchor:[0,1],padding:[6,0,6,0],itemSize:[80,24],firstOffset:[-80,24],itemPadding:[2,2,2,2],horizontal:!0,title:"Legend title"},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.RW],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"list, horizontal 2",args:{position:[0,140],positionUnits:"absolute",size:[240,60],sizeUnits:"absolute",anchor:[0,0],padding:[16,0,0,0],itemSize:[70,20],itemPadding:[2,2,2,2],firstOffset:[0,0],horizontal:!0,title:"Legend: "},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.RW],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"color-scales",children:"Color scales"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["The legend can display a continuous color scale by setting prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"variant"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"colors, vertical",args:{variant:"color",position:[240,0],positionUnits:"absolute",size:[60,100],sizeUnits:"absolute",anchor:[0,0],padding:[0,8,0,8],itemSize:[80,24],itemPadding:[2,2,2,2],title:"Legend title",scaleSize:[12,80],firstOffset:[0,10]},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.lT],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"colors, horizontal",args:{variant:"color",horizontal:!0,position:[120,180],positionUnits:"absolute",padding:[10,0,10,0],size:[120,60],sizeUnits:"absolute",anchor:[.5,0],itemSize:[90,24],itemPadding:[2,2,2,2],title:"Legend title",scaleSize:[120,12],firstOffset:[-90,20]},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.lT],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["For more control of this type of legend, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"LegendColorScale"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"size-scales",children:"Size scales"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["The legend can display a size scale by setting prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"variant"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"sizes, vertical",args:{variant:"size",position:[220,0],positionUnits:"absolute",size:[60,100],sizeUnits:"absolute",anchor:[0,0],padding:[0,8,0,8],itemSize:[80,20],itemPadding:[2,2,2,2],title:"Legend title",firstOffset:[0,10],symbolStyle:{stroke:"#222222",strokeWidth:1},sizeTicks:4},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.lT],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"sizes, horizontal",args:{variant:"size",horizontal:!0,position:[0,140],positionUnits:"absolute",padding:[10,0,10,0],size:[120,60],sizeUnits:"absolute",anchor:[0,0],itemSize:[26,80],itemPadding:[4,4,4,4],title:"Legend title",firstOffset:[-26,18],symbolStyle:{stroke:"#222222",strokeWidth:1},labelStyle:{textAnchor:"middle",alignmentBaseline:"hanging"},sizeTicks:[10,20,40,80]},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.lT],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["For more control of this type of legend, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"LegendSizeScale"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"interactivity",children:"Interactivity"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"interactive"})," toggles the ability to click on items in a categorical legend."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Legend interactivity is turned on by default. Set ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"interactive"})," to 'false' to disable it."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"non-interactive",args:{position:[240,0],positionUnits:"absolute",size:[60,80],sizeUnits:"absolute",anchor:[0,0],padding:[0,8,0,8],itemSize:[80,24],itemPadding:[2,2,2,2],title:"Legend title",interactive:!1},component:_src__WEBPACK_IMPORTED_MODULE_2__.DeQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.RW],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["When a legend is not interactive, clicking on legend items does not change their opacity.\nHowever, all css style definitions remain the same.\nIn particular, in the example above, a css style sets the mouse cursor to a pointer.\nThat behavior may be undesirable in a non-interactive component.\nTo adjust it, use a custom theme, or create a legend manually and set styles for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"LegendItemList"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"LegendItem"})," components."]})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);