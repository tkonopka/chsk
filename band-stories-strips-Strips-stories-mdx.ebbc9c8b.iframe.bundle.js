"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2943],{"./packages/band/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ChartDecorator,A:()=>dataRawValues});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateUniformValues=function generateUniformValues(n,interval){var size=interval[1]-interval[0];return Array(n).fill(0).map((function(){return interval[0]+Math.random()*size}))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var dataRawValues=[{id:"alpha",x:generateUniformValues(30,[0,10]),y:generateUniformValues(30,[2,16])},{id:"beta",x:generateUniformValues(30,[5,15]),y:generateUniformValues(30,[10,20])}];try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/band/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/strips/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JA:()=>commonStripProps,PB:()=>onStripsClick,sb:()=>ChartStripDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonStripProps={data:_decorators__WEBPACK_IMPORTED_MODULE_2__.A,keys:["x","y"],valueSize:4,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]},paddingInternal:.2},ChartStripDecorator=function ChartStripDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.D_,_extends({},commonStripProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartStripDecorator.displayName="ChartStripDecorator";var onStripsClick=function onStripsClick(data){console.log("clicked: "+JSON.stringify(data))};try{ChartStripDecorator.displayName="ChartStripDecorator",ChartStripDecorator.__docgenInfo={description:"",displayName:"ChartStripDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/strips/decorators.tsx#ChartStripDecorator"]={docgenInfo:ChartStripDecorator.__docgenInfo,name:"ChartStripDecorator",path:"packages/band/stories/strips/decorators.tsx#ChartStripDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onStripsClick.displayName="onStripsClick",onStripsClick.__docgenInfo={description:"",displayName:"onStripsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},valueSize:{defaultValue:null,description:"",name:"valueSize",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/strips/decorators.tsx#onStripsClick"]={docgenInfo:onStripsClick.__docgenInfo,name:"onStripsClick",path:"packages/band/stories/strips/decorators.tsx#onStripsClick"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/strips/Strips.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,mouseClick:()=>mouseClick,selectedIds:()=>selectedIds,selectedKeys:()=>selectedKeys,symbols:()=>symbols});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/strips/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.iP,{...args});const selectedIds=Template.bind({});selectedIds.storyName="selected ids",selectedIds.args={ids:["alpha"],symbolStyle:{strokeWidth:1,stroke:"#222222"}},selectedIds.parameters={storySource:{source:"args => <Strips {...args} />"}},selectedIds.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.sb];const selectedKeys=Template.bind({});selectedKeys.storyName="selected keys",selectedKeys.args={keys:["x"],symbolStyle:{strokeWidth:1,stroke:"#222222"}},selectedKeys.parameters={storySource:{source:"args => <Strips {...args} />"}},selectedKeys.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.sb];const symbols=Template.bind({});symbols.storyName="symbols",symbols.args={component:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.bK0,symbolStyle:{strokeWidth:1,stroke:"#222222"}},symbols.parameters={storySource:{source:"args => <Strips {...args} />"}},symbols.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.sb];const mouseClick=Template.bind({});mouseClick.storyName="mouse click",mouseClick.args={handlers:{onClick:_decorators__WEBPACK_IMPORTED_MODULE_4__.PB}},mouseClick.parameters={storySource:{source:"args => <Strips {...args} />"}},mouseClick.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.sb];const componentMeta={title:"Addons/Band/Strips/Strips",tags:["stories-mdx"],includeStories:["selectedIds","selectedKeys","symbols","mouseClick"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"strips",children:"Strips"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/Band/Strips/Strips"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Strips"})," draws data points on a strip chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Strips"})," is intended to be used within a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Strip"})," view. Note that while the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Strips"})," component is the one that draws data points, much of the chart layout is determined by the parent view ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Strip"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_3__.iP}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"data-subsets",children:"Data subsets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Strips"})," draws the entire dataset. To draw subsets, set the props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"ids"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"keys"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"selected ids",args:{ids:["alpha"],symbolStyle:{strokeWidth:1,stroke:"#222222"}},component:_src__WEBPACK_IMPORTED_MODULE_3__.iP,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.sb],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"selected keys",args:{keys:["x"],symbolStyle:{strokeWidth:1,stroke:"#222222"}},component:_src__WEBPACK_IMPORTED_MODULE_3__.iP,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.sb],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"symbols",children:"Symbols"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"component"})," accepts a function for rendering individual data points. The default function draws circles, but this can be replaced, for example, to create squares or other symbols."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"symbols",args:{component:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.bK0,symbolStyle:{strokeWidth:1,stroke:"#222222"}},component:_src__WEBPACK_IMPORTED_MODULE_3__.iP,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.sb],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["See documentation in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"@chsk/core"})," for symbols ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Circle"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Diamond"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Square"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Triangle"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"InvertedTriangle"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"mouse-events",children:"Mouse events"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["To make points respond to mouse events, set prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"handlers"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"mouse click",args:{handlers:{onClick:_decorators__WEBPACK_IMPORTED_MODULE_4__.PB}},component:_src__WEBPACK_IMPORTED_MODULE_3__.iP,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.sb],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["(Click on the data points, then check the browser console with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Ctrl Shift J"})," for output.)"]})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);