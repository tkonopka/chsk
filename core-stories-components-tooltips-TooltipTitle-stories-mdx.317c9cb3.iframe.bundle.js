"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2013],{"./packages/core/stories/components/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OR:()=>ChartViewDecorator,VK:()=>ChartBandViewDecorator,ee:()=>ChartDecorator,ke:()=>viewSeriesIndexesKeys,z5:()=>DivDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},DivDecorator=function DivDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};DivDecorator.displayName="DivDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tg,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartViewDecorator=function ChartViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tg,{variant:"inner"}),Story()]})})};ChartViewDecorator.displayName="ChartViewDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,300],padding:[60,40,60,80],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7,{scaleX:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},scaleY:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tg,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RD,{variant:"left"})]})})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";try{DivDecorator.displayName="DivDecorator",DivDecorator.__docgenInfo={description:"",displayName:"DivDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#DivDecorator"]={docgenInfo:DivDecorator.__docgenInfo,name:"DivDecorator",path:"packages/core/stories/components/decorators.tsx#DivDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/core/stories/components/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartViewDecorator.displayName="ChartViewDecorator",ChartViewDecorator.__docgenInfo={description:"",displayName:"ChartViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartViewDecorator"]={docgenInfo:ChartViewDecorator.__docgenInfo,name:"ChartViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/tooltips/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mh:()=>ChartForDetectorTooltipDecorator,a5:()=>ChartForShapesTooltipDecorator,fe:()=>ChartWithDetectorWithTooltipDecorator});var src=__webpack_require__("./packages/core/src/index.tsx"),decorators=__webpack_require__("./packages/core/stories/components/decorators.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DetectorWithTooltip=function DetectorWithTooltip(){var setTooltipData=(0,src.lL)().setData,_useDimensions=(0,src.Di)(),size=_useDimensions.size,ref=_useDimensions.ref;return(0,jsx_runtime.jsx)("rect",{x:0,y:0,width:size[src.X],height:size[src.Y],onMouseMove:function handleMouseMove(event){var _ref$current,clientRect=null==ref||null==(_ref$current=ref.current)?void 0:_ref$current.getBoundingClientRect();if(void 0!==clientRect){var x=Math.round(event.clientX-(null==clientRect?void 0:clientRect.x)),y=Math.round(event.clientY-(null==clientRect?void 0:clientRect.y));setTooltipData({x,y})}},onMouseLeave:function handleMouseLeave(){setTooltipData({})},style:{opacity:0}})};DetectorWithTooltip.displayName="DetectorWithTooltip";var ShapesWithTooltip=function ShapesWithTooltip(){var setTooltipData=(0,src.lL)().setData,colorScale=(0,src.kE)().color,ref=(0,src.Di)().ref,keys=["alpha","beta","gamma"],handleMouseMove=function handleMouseMove(event,indexes){var _ref$current2,clientRect=null==ref||null==(_ref$current2=ref.current)?void 0:_ref$current2.getBoundingClientRect();if(void 0!==clientRect){var x=Math.round(event.clientX-(null==clientRect?void 0:clientRect.x)),y=Math.round(event.clientY-(null==clientRect?void 0:clientRect.y));setTooltipData({x,y,data:indexes.map((function(i){return{id:"X",key:keys[i],label:keys[i]}}))})}},handleMouseLeave=function handleMouseLeave(){};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.Cd,{cx:80,cy:50,r:25,style:{fill:colorScale(0)},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[0])},onMouseLeave:handleMouseLeave}),(0,jsx_runtime.jsx)(src.Cd,{cx:80,cy:110,r:25,style:{fill:colorScale(1)},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[1])},onMouseLeave:handleMouseLeave}),(0,jsx_runtime.jsx)(src.Cd,{cx:80,cy:170,r:25,style:{fill:colorScale(2)},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[2])},onMouseLeave:handleMouseLeave}),(0,jsx_runtime.jsx)(src.Cd,{cx:200,cy:110,r:25,style:{fill:"#444444"},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[0,1,2])},onMouseLeave:handleMouseLeave})]})},ChartForDetectorTooltipDecorator=function ChartForDetectorTooltipDecorator(Story){return(0,jsx_runtime.jsx)(src.kL,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.G7,{data:decorators.ke,children:[(0,jsx_runtime.jsx)(src.Tg,{variant:"inner"},"surface"),(0,jsx_runtime.jsxs)(src.pn,{children:[(0,jsx_runtime.jsx)(DetectorWithTooltip,{},"detector"),Story()]},"provider")]})})};ChartForDetectorTooltipDecorator.displayName="ChartForDetectorTooltipDecorator";var ChartForShapesTooltipDecorator=function ChartForShapesTooltipDecorator(Story){return(0,jsx_runtime.jsx)(src.kL,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.G7,{data:decorators.ke,children:[(0,jsx_runtime.jsx)(src.Tg,{variant:"inner"},"surface"),(0,jsx_runtime.jsxs)(src.pn,{children:[(0,jsx_runtime.jsx)(ShapesWithTooltip,{},"shapes"),Story()]},"provider")]})})};ChartForShapesTooltipDecorator.displayName="ChartForShapesTooltipDecorator";var ChartWithDetectorWithTooltipDecorator=function ChartWithDetectorWithTooltipDecorator(Story){return(0,jsx_runtime.jsx)(src.kL,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.G7,{data:decorators.ke,children:[(0,jsx_runtime.jsx)(src.Tg,{variant:"inner"},"surface"),(0,jsx_runtime.jsxs)(src.pn,{children:[(0,jsx_runtime.jsx)(DetectorWithTooltip,{},"detector"),(0,jsx_runtime.jsx)(src.u,{size:[100,48],style:{strokeWidth:.5,stroke:"#222222",fill:"#ffffff"},children:Story()})]},"provider")]})})};ChartWithDetectorWithTooltipDecorator.displayName="ChartWithDetectorWithTooltipDecorator";try{ChartForDetectorTooltipDecorator.displayName="ChartForDetectorTooltipDecorator",ChartForDetectorTooltipDecorator.__docgenInfo={description:"",displayName:"ChartForDetectorTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/tooltips/decorators.tsx#ChartForDetectorTooltipDecorator"]={docgenInfo:ChartForDetectorTooltipDecorator.__docgenInfo,name:"ChartForDetectorTooltipDecorator",path:"packages/core/stories/components/tooltips/decorators.tsx#ChartForDetectorTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForShapesTooltipDecorator.displayName="ChartForShapesTooltipDecorator",ChartForShapesTooltipDecorator.__docgenInfo={description:"",displayName:"ChartForShapesTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/tooltips/decorators.tsx#ChartForShapesTooltipDecorator"]={docgenInfo:ChartForShapesTooltipDecorator.__docgenInfo,name:"ChartForShapesTooltipDecorator",path:"packages/core/stories/components/tooltips/decorators.tsx#ChartForShapesTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithDetectorWithTooltipDecorator.displayName="ChartWithDetectorWithTooltipDecorator",ChartWithDetectorWithTooltipDecorator.__docgenInfo={description:"",displayName:"ChartWithDetectorWithTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/tooltips/decorators.tsx#ChartWithDetectorWithTooltipDecorator"]={docgenInfo:ChartWithDetectorWithTooltipDecorator.__docgenInfo,name:"ChartWithDetectorWithTooltipDecorator",path:"packages/core/stories/components/tooltips/decorators.tsx#ChartWithDetectorWithTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/tooltips/TooltipTitle.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,tooltipTitle:()=>tooltipTitle});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/stories/components/tooltips/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.CK,{...args});const tooltipTitle=Template.bind({});tooltipTitle.storyName="tooltip title",tooltipTitle.args={position:[0,12],size:[100,28],children:"Tooltip title"},tooltipTitle.parameters={storySource:{source:"args => <TooltipTitle {...args} />"}},tooltipTitle.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.fe];const componentMeta={title:"Core/Components/Tooltips/TooltipTitle",tags:["stories-mdx"],includeStories:["tooltipTitle"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"tooltiptitle",children:"TooltipTitle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/Components/Tooltips/TooltipTitle"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"TooltipTitle"})," draws a text component intended as a tooltip title."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_2__.CK}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"position",children:"Position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Positioning of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"TooltipTitle"})," text works in the same way as for ordinary ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Typography"})," components,\nbut the coordinates are measured from the top-left corner or the tooltip container."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"tooltip title",args:{position:[0,12],size:[100,28],children:"Tooltip title"},component:_src__WEBPACK_IMPORTED_MODULE_2__.CK,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.fe],children:Template.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);