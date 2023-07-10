"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2898,3992],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/symbols/createConcentricSymbol.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Background:()=>Background,Foreground:()=>Foreground,Hybrid:()=>Hybrid,Squares:()=>Squares,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Background$parameter,_Background$parameter2,_Background$parameter3,_Foreground$parameter,_Foreground$parameter2,_Foreground$parameter3,_Squares$parameters,_Squares$parameters2,_Squares$parameters2$,_Hybrid$parameters,_Hybrid$parameters2,_Hybrid$parameters2$d,_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/symbols/createConcentricSymbol.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/annotation/stories/symbols/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Symbols/createConcentricSymbol",component:_src__WEBPACK_IMPORTED_MODULE_1__.b};var Background={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_3__.ql,{cx:80,cy:50,r:20,style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"}})]})},name:"background"},Foreground={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_3__.SZ,{cx:80,cy:50,r:20,style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"}})]})},name:"foreground"},Squares={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_3__.oW,{cx:80,cy:50,r:20,style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"}})]})},name:"squares"},Hybrid={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_3__.dY,{cx:80,cy:50,r:20,style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"}})]})},name:"hybrid"};Background.parameters=_extends({},Background.parameters,{docs:_extends({},null==(_Background$parameter=Background.parameters)?void 0:_Background$parameter.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 140]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <ConcentricCirclesBg cx={80} cy={50} r={20} style={{\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    }} />\n        </Chart>,\n  name: 'background'\n}"},null==(_Background$parameter2=Background.parameters)||null==(_Background$parameter3=_Background$parameter2.docs)?void 0:_Background$parameter3.source)})}),Foreground.parameters=_extends({},Foreground.parameters,{docs:_extends({},null==(_Foreground$parameter=Foreground.parameters)?void 0:_Foreground$parameter.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 140]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <ConcentricCirclesFg cx={80} cy={50} r={20} style={{\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    }} />\n        </Chart>,\n  name: 'foreground'\n}"},null==(_Foreground$parameter2=Foreground.parameters)||null==(_Foreground$parameter3=_Foreground$parameter2.docs)?void 0:_Foreground$parameter3.source)})}),Squares.parameters=_extends({},Squares.parameters,{docs:_extends({},null==(_Squares$parameters=Squares.parameters)?void 0:_Squares$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 140]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <ConcentricSquares cx={80} cy={50} r={20} style={{\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    }} />\n        </Chart>,\n  name: 'squares'\n}"},null==(_Squares$parameters2=Squares.parameters)||null==(_Squares$parameters2$=_Squares$parameters2.docs)?void 0:_Squares$parameters2$.source)})}),Hybrid.parameters=_extends({},Hybrid.parameters,{docs:_extends({},null==(_Hybrid$parameters=Hybrid.parameters)?void 0:_Hybrid$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 140]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <ConcentricHybrid cx={80} cy={50} r={20} style={{\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    }} />\n        </Chart>,\n  name: 'hybrid'\n}"},null==(_Hybrid$parameters2=Hybrid.parameters)||null==(_Hybrid$parameters2$d=_Hybrid$parameters2.docs)?void 0:_Hybrid$parameters2$d.source)})});var __namedExportsOrder=["Background","Foreground","Squares","Hybrid"]},"./packages/annotation/stories/symbols/createConcentricSymbol.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/annotation/stories/symbols/createConcentricSymbol.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"createconcentricsymbol",children:"createConcentricSymbol"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createConcentricSymbol"})," is a factory.\nIt creates a function that creates a symbol composed of two concentric parts.\nIt can be used to create composite symbols such as concentric circles, squares, or any other shapes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Note:"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createConcentricSymbol"})," is a factory method and creates new functions.\nAn example usage is as follows."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:"\n  import { createConcentricSymbol } from '@chsk/annotation'\n\nconst ConcentricCirclesBg = createConcentricSymbol({ variant: 'background', rMultiplier: 1.4 })\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The examples below demonstrate behavior of components creates with this pattern."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variant",children:"Variant"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["A concentric symbol is composed of one primary symbol and one secondary symbol.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," determines whether the secondary object appears in the background or in the foreground."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," is often used together with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rMultiplier"}),",\nwhich determines the size of the secondary object relative to the size of the primary symbol."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_4__.Background}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_4__.Foreground}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"symbols",children:"Symbols"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The shapes of the primary and secondary parts are controlled with props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"symbolPrimary"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"symbolSecondary"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_4__.Squares}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_4__.Hybrid})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);