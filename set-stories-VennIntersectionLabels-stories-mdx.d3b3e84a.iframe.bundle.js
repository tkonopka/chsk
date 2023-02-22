"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[320],{"./packages/set/stories/VennIntersectionLabels.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,customFormat:()=>customFormat,default:()=>__WEBPACK_DEFAULT_EXPORT__,oneSet:()=>oneSet,proportionalAreas:()=>proportionalAreas,proportionalDisjoint:()=>proportionalDisjoint,styled:()=>styled,threeSets:()=>threeSets,twoSets:()=>twoSets});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./packages/core/dist/chsk-core.es.js"),__webpack_require__("./packages/set/src/index.tsx")),_decorators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/set/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.T$,{...args});const oneSet=Template.bind({});oneSet.storyName="one set",oneSet.parameters={storySource:{source:"args => <VennIntersectionLabels {...args} />"}},oneSet.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.Df];const twoSets=Template.bind({});twoSets.storyName="two sets",twoSets.parameters={storySource:{source:"args => <VennIntersectionLabels {...args} />"}},twoSets.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.Zt];const threeSets=Template.bind({});threeSets.storyName="three sets",threeSets.parameters={storySource:{source:"args => <VennIntersectionLabels {...args} />"}},threeSets.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.Xm];const proportionalAreas=Template.bind({});proportionalAreas.storyName="proportional areas",proportionalAreas.parameters={storySource:{source:"args => <VennIntersectionLabels {...args} />"}},proportionalAreas.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.L0];const proportionalDisjoint=Template.bind({});proportionalDisjoint.storyName="proportional disjoint",proportionalDisjoint.parameters={storySource:{source:"args => <VennIntersectionLabels {...args} />"}},proportionalDisjoint.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.v0];const customFormat=Template.bind({});customFormat.storyName="custom format",customFormat.args={format:(x,item)=>"al"==item.label.substring(0,2)&&item.label.indexOf("!")>0?"cold":"be"==item.label.substring(0,2)?"hot":"tepid"},customFormat.parameters={storySource:{source:"args => <VennIntersectionLabels {...args} />"}},customFormat.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.Zt];const styled=Template.bind({});styled.storyName="styled",styled.args={style:{fontWeight:600,fontSize:24,fill:"#fff"},translate:[0,-100]},styled.parameters={storySource:{source:"args => <VennIntersectionLabels {...args} />"}},styled.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.Zt];const componentMeta={title:"Addons/Set/VennIntersectionLabels",tags:["stories-mdx"],includeStories:["oneSet","twoSets","threeSets","proportionalAreas","proportionalDisjoint","customFormat","styled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"vennintersectionlabels",children:"VennIntersectionLabels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/Set/VennIntersectionLabels"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"VennIntersectionLabels"})," draws labels on a Venn chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_3__.T$}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"number-of-sets",children:"Number of sets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"VennIntersectionLabels"})," labels all regions of a venn diagram. The component automatically positions the labels for datasets with one, two, or three sets."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"one set",component:_src__WEBPACK_IMPORTED_MODULE_3__.T$,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.Df],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"two sets",component:_src__WEBPACK_IMPORTED_MODULE_3__.T$,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.Zt],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"three sets",component:_src__WEBPACK_IMPORTED_MODULE_3__.T$,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.Xm],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"proportional-areas",children:"Proportional areas"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Labels work automatically for Venn diagrams with proportional sizes."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"proportional areas",component:_src__WEBPACK_IMPORTED_MODULE_3__.T$,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.L0],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"proportional disjoint",component:_src__WEBPACK_IMPORTED_MODULE_3__.T$,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.v0],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"label-format",children:"Label format"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["By default, labels display the set id. The content can be adjusted via prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"format"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"custom format",args:{format:(x,item)=>"al"==item.label.substring(0,2)&&item.label.indexOf("!")>0?"cold":"be"==item.label.substring(0,2)?"hot":"tepid"},component:_src__WEBPACK_IMPORTED_MODULE_3__.T$,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.Zt],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Text labels can be styled with css."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"styled",args:{style:{fontWeight:600,fontSize:24,fill:"#fff"},translate:[0,-100]},component:_src__WEBPACK_IMPORTED_MODULE_3__.T$,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.Zt],children:Template.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);