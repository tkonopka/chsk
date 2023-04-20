"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2949],{"./packages/core/stories/components/axes/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>ChartBottomAxisDecorator,l:()=>ChartLeftAxisDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartBottomAxisDecorator=function ChartBottomAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom",children:Story()})]})})};ChartBottomAxisDecorator.displayName="ChartBottomAxisDecorator";var ChartLeftAxisDecorator=function ChartLeftAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",children:Story()})]})})};ChartLeftAxisDecorator.displayName="ChartLeftAxisDecorator";try{ChartBottomAxisDecorator.displayName="ChartBottomAxisDecorator",ChartBottomAxisDecorator.__docgenInfo={description:"",displayName:"ChartBottomAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/axes/decorators.tsx#ChartBottomAxisDecorator"]={docgenInfo:ChartBottomAxisDecorator.__docgenInfo,name:"ChartBottomAxisDecorator",path:"packages/core/stories/components/axes/decorators.tsx#ChartBottomAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLeftAxisDecorator.displayName="ChartLeftAxisDecorator",ChartLeftAxisDecorator.__docgenInfo={description:"",displayName:"ChartLeftAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/axes/decorators.tsx#ChartLeftAxisDecorator"]={docgenInfo:ChartLeftAxisDecorator.__docgenInfo,name:"ChartLeftAxisDecorator",path:"packages/core/stories/components/axes/decorators.tsx#ChartLeftAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/axes/AxisLine.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,visibility:()=>visibility});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/stories/components/axes/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.$Co,{...args});const visibility=Template.bind({});visibility.storyName="visibility",visibility.args={variant:"bottom",style:{strokeWidth:2}},visibility.parameters={storySource:{source:"args => <AxisLine {...args} />"}},visibility.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.j];const componentMeta={title:"Core/Components/Axes/AxisLine",tags:["stories-mdx"],includeStories:["visibility"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"axis",children:"Axis"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/Components/Axes/AxisLine"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"AxisLine"})," draws a line intended as an axis.\nIt is intended to be used a child of an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Axis"})," component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_2__.$Co}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"variant"})," configures a line for the top, right, bottom, or left side of a chart.\nFor brevity, the example below shows a line along the bottom edge."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"visibility",args:{variant:"bottom",style:{strokeWidth:2}},component:_src__WEBPACK_IMPORTED_MODULE_2__.$Co,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.j],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Note that in the default theme, the axis line has zero thickness and is therefore invisible.\nTo make the line appear, set a css style, or adjust the chart theme."})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);