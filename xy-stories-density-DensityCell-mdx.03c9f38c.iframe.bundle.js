"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8918,6376],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/xy/stories/density/DensityCell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{One:()=>One,Two:()=>Two,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _One$parameters,_One$parameters2,_One$parameters2$docs,_Two$parameters,_Two$parameters2,_Two$parameters2$docs,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/xy/src/density/DensityCell.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/xy/stories/density/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/XY/Density/DensityCell",component:_src__WEBPACK_IMPORTED_MODULE_0__.f};var One={name:"one point",args:{value:1,x:20,y:20,width:40,height:40,style:{fill:"#666666"}},component:_src__WEBPACK_IMPORTED_MODULE_0__.f,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.vB]},Two={name:"two points",args:{value:2,x:20,y:20,width:40,height:40,style:{fill:"#666666"}},component:_src__WEBPACK_IMPORTED_MODULE_0__.f,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.vB]};One.parameters=_extends({},One.parameters,{docs:_extends({},null==(_One$parameters=One.parameters)?void 0:_One$parameters.docs,{source:_extends({originalSource:"{\n  name: 'one point',\n  args: {\n    value: 1,\n    x: 20,\n    y: 20,\n    width: 40,\n    height: 40,\n    style: {\n      fill: '#666666'\n    }\n  },\n  component: DensityCell,\n  decorators: [ChartCellDecorator]\n}"},null==(_One$parameters2=One.parameters)||null==(_One$parameters2$docs=_One$parameters2.docs)?void 0:_One$parameters2$docs.source)})}),Two.parameters=_extends({},Two.parameters,{docs:_extends({},null==(_Two$parameters=Two.parameters)?void 0:_Two$parameters.docs,{source:_extends({originalSource:"{\n  name: 'two points',\n  args: {\n    value: 2,\n    x: 20,\n    y: 20,\n    width: 40,\n    height: 40,\n    style: {\n      fill: '#666666'\n    }\n  },\n  component: DensityCell,\n  decorators: [ChartCellDecorator]\n}"},null==(_Two$parameters2=Two.parameters)||null==(_Two$parameters2$docs=_Two$parameters2.docs)?void 0:_Two$parameters2$docs.source)})});var __namedExportsOrder=["One","Two"]},"./packages/xy/stories/density/DensityCell.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_DensityCell_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/stories/density/DensityCell.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"densitycell",children:"DensityCell"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_DensityCell_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DensityCellCircle"})," draws a single element on a density chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_DensityCell_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"value",children:"Value"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"value"})," is intended to represent the number of data points that fall within a region on a density map.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DensityCell"})," draws a circle or a rectangle to summarize a region with a single data point or multiple data points, respectively."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_DensityCell_stories__WEBPACK_IMPORTED_MODULE_4__.One}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_DensityCell_stories__WEBPACK_IMPORTED_MODULE_4__.Two}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"animations",children:"Animations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Overall, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DensityCell"})," is very similar to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DensitySimpleCell"}),".\nHowever, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DensityCell"})," provides color and shape animations upon state change.\nAnimations can make chart updates appear more smooth.\nHowever,"]})]})}}}}]);