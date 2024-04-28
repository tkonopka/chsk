"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[861,7954],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/legends/LegendSizeScale.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bottom:()=>Bottom,Left:()=>Left,Right:()=>Right,Top:()=>Top,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Bottom$parameters,_Bottom$parameters2,_Top$parameters,_Top$parameters2,_Left$parameters,_Left$parameters2,_Right$parameters,_Right$parameters2,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/legends/LegendSizeScale.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/stories/components/legends/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Legends/LegendSizeScale",component:_src__WEBPACK_IMPORTED_MODULE_0__.W};var Bottom={name:"bottom",args:{variant:"bottom",horizontal:!0,position:[0,0],itemSize:[25,12],ticks:[10,20,30],labelDistance:16,labelStyle:{textAnchor:"middle"},symbolStyle:{fill:"#888888"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.Wl]},Top={name:"top",args:{variant:"top",horizontal:!0,position:[0,20],itemSize:[25,12],ticks:[10,20,30],labelDistance:14,labelStyle:{textAnchor:"middle"},symbolStyle:{fill:"#888888"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.Wl]},Left={name:"left",args:{variant:"left",horizontal:!1,position:[50,24],itemSize:[12,25],ticks:[10,20,30],labelDistance:20,symbolStyle:{fill:"#888888"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.Wl]},Right={name:"right",args:{variant:"right",horizontal:!1,position:[0,24],itemSize:[12,25],ticks:[10,20,30],symbolStyle:{fill:"#888888"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.Wl]};Bottom.parameters=_extends({},Bottom.parameters,{docs:_extends({},null==(_Bottom$parameters=Bottom.parameters)?void 0:_Bottom$parameters.docs,{source:_extends({originalSource:"{\n  name: 'bottom',\n  args: {\n    variant: 'bottom',\n    horizontal: true,\n    position: [0, 0],\n    itemSize: [25, 12],\n    ticks: [10, 20, 30],\n    labelDistance: 16,\n    labelStyle: {\n      textAnchor: 'middle'\n    },\n    symbolStyle: {\n      fill: '#888888'\n    }\n  },\n  decorators: [ChartWithSizeLegendDecorator]\n}"},null==(_Bottom$parameters2=Bottom.parameters)||null==(_Bottom$parameters2=_Bottom$parameters2.docs)?void 0:_Bottom$parameters2.source)})}),Top.parameters=_extends({},Top.parameters,{docs:_extends({},null==(_Top$parameters=Top.parameters)?void 0:_Top$parameters.docs,{source:_extends({originalSource:"{\n  name: 'top',\n  args: {\n    variant: 'top',\n    horizontal: true,\n    position: [0, 20],\n    itemSize: [25, 12],\n    ticks: [10, 20, 30],\n    labelDistance: 14,\n    labelStyle: {\n      textAnchor: 'middle'\n    },\n    symbolStyle: {\n      fill: '#888888'\n    }\n  },\n  decorators: [ChartWithSizeLegendDecorator]\n}"},null==(_Top$parameters2=Top.parameters)||null==(_Top$parameters2=_Top$parameters2.docs)?void 0:_Top$parameters2.source)})}),Left.parameters=_extends({},Left.parameters,{docs:_extends({},null==(_Left$parameters=Left.parameters)?void 0:_Left$parameters.docs,{source:_extends({originalSource:"{\n  name: 'left',\n  args: {\n    variant: 'left',\n    horizontal: false,\n    position: [50, 24],\n    itemSize: [12, 25],\n    ticks: [10, 20, 30],\n    labelDistance: 20,\n    symbolStyle: {\n      fill: '#888888'\n    }\n  },\n  decorators: [ChartWithSizeLegendDecorator]\n}"},null==(_Left$parameters2=Left.parameters)||null==(_Left$parameters2=_Left$parameters2.docs)?void 0:_Left$parameters2.source)})}),Right.parameters=_extends({},Right.parameters,{docs:_extends({},null==(_Right$parameters=Right.parameters)?void 0:_Right$parameters.docs,{source:_extends({originalSource:"{\n  name: 'right',\n  args: {\n    variant: 'right',\n    horizontal: false,\n    position: [0, 24],\n    itemSize: [12, 25],\n    ticks: [10, 20, 30],\n    symbolStyle: {\n      fill: '#888888'\n    }\n  },\n  decorators: [ChartWithSizeLegendDecorator]\n}"},null==(_Right$parameters2=Right.parameters)||null==(_Right$parameters2=_Right$parameters2.docs)?void 0:_Right$parameters2.source)})});var __namedExportsOrder=["Bottom","Top","Left","Right"]},"./packages/core/stories/components/legends/LegendSizeScale.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_LegendSizeScale_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/legends/LegendSizeScale.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"legendsizescale",children:"LegendSizeScale"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_LegendSizeScale_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LegendSizeScale"})," draws a rectangle with a color scale."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_LegendSizeScale_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," determines where the labels marks appear in relation to symbol."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_LegendSizeScale_stories__WEBPACK_IMPORTED_MODULE_4__.Bottom}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_LegendSizeScale_stories__WEBPACK_IMPORTED_MODULE_4__.Top}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_LegendSizeScale_stories__WEBPACK_IMPORTED_MODULE_4__.Left}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_LegendSizeScale_stories__WEBPACK_IMPORTED_MODULE_4__.Right})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);