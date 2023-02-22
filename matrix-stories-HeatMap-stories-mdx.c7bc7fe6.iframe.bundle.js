"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7304],{"./packages/matrix/stories/HeatMap.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,categorical:()=>categorical,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,padding:()=>padding,size:()=>size});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/matrix/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/matrix/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Br,{...args});const defaultStory=Template.bind({});defaultStory.storyName="default",defaultStory.args={..._decorators__WEBPACK_IMPORTED_MODULE_3__.$7,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.WL,{})},defaultStory.parameters={storySource:{source:"args => <HeatMap {...args} />"}},defaultStory.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.OO];const categorical=Template.bind({});categorical.storyName="categorical",categorical.args={..._decorators__WEBPACK_IMPORTED_MODULE_3__.T5,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.WL,{})},categorical.parameters={storySource:{source:"args => <HeatMap {...args} />"}},categorical.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.OO];const size=Template.bind({});size.storyName="size",size.args={..._decorators__WEBPACK_IMPORTED_MODULE_3__.$7,dataSize:_decorators__WEBPACK_IMPORTED_MODULE_3__.$7.data,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.WL,{})},size.parameters={storySource:{source:"args => <HeatMap {...args} />"}},size.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.OO];const padding=Template.bind({});padding.storyName="padding",padding.args={..._decorators__WEBPACK_IMPORTED_MODULE_3__.$7,scaleX:{variant:"band",padding:.15},scaleY:{variant:"band",padding:.15},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.WL,{})},padding.parameters={storySource:{source:"args => <HeatMap {...args} />"}},padding.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.OO];const componentMeta={title:"Addons/Matrix/HeatMap",tags:["stories-mdx"],includeStories:["defaultStory","categorical","size","padding"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"heatmap",children:"HeatMap"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/Matrix/HeatMap"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"HeatMap"})," sets up a view for a heat map."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_2__.Br}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"HeatMap"})," is an organizational component and it does not draw any visual elements. However, it manages datasets that can be visualized with other components, for example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"HeatMapCells"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["The examples in this page showcase ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"HeatMap"})," by automatically using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"HeatMapCells"})," as a child component. Note that to create a complete chart, additional components would normally be employed, for example adding axes and labels."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Data should be prepared as an array of objects. All objects should contain a string identifier ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"'id'"}),". Other keys can be used to encode information that will be turned into colors in the heat map."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"The pseudocode below shows one data item with an identifier and three numeric values."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:'\n[\n  {\n    "id": "alpha",\n    "x": 55,\n    "y": 35,\n    "z": 10\n  },\n  ...\n]\n'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"An analogous format is also used to encode heat map cell size."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"color-scales",children:"Color scales"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"HeatMap"})," accepts both continuous and categorical color scales. The first example below is based on a matrix with numeric values and converts these numbers into many shades. The second example is based on a matrix of strings and displays a fixed number of colors."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"default",args:{..._decorators__WEBPACK_IMPORTED_MODULE_3__.$7,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.WL,{})},component:_src__WEBPACK_IMPORTED_MODULE_2__.Br,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.OO],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"categorical",args:{..._decorators__WEBPACK_IMPORTED_MODULE_3__.T5,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.WL,{})},component:_src__WEBPACK_IMPORTED_MODULE_2__.Br,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.OO],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Again, the two maps above are based on different data - there is no mapping between the colors of two examples."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"size-scales",children:"Size scales"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["The heat map supports cells of non-constant sizes. Use prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"dataSize"})," to specify the cell sizes, and prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"scaleSize"})," to specify the required scaling. The format for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"dataSize"})," is the same as for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"data"}),", which ensures that the same ids and keys are used to match colors and sizes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"size",args:{..._decorators__WEBPACK_IMPORTED_MODULE_3__.$7,dataSize:_decorators__WEBPACK_IMPORTED_MODULE_3__.$7.data,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.WL,{})},component:_src__WEBPACK_IMPORTED_MODULE_2__.Br,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.OO],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["In the example above, the same data object is presented to both ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"data"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"dataSize"}),", so color intensity and cell size are proportional."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"padding",children:"Padding"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["By default, the rows and columns in the heatmap are placed directly adjacent to each other. The space between rows and columns can be adjusted through props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"scaleX"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"scaleY"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"padding",args:{..._decorators__WEBPACK_IMPORTED_MODULE_3__.$7,scaleX:{variant:"band",padding:.15},scaleY:{variant:"band",padding:.15},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.WL,{})},component:_src__WEBPACK_IMPORTED_MODULE_2__.Br,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.OO],children:Template.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);