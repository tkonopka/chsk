"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4418,4116],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/matrix/stories/heatmaps/HeatMapHighlight.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DataSubsets:()=>DataSubsets,Default:()=>Default,EdgeAnimation:()=>EdgeAnimation,Padding:()=>Padding,Static:()=>Static,Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Padding$parameters,_Padding$parameters2,_Padding$parameters2$,_DataSubsets$paramete,_DataSubsets$paramete2,_DataSubsets$paramete3,_Static$parameters,_Static$parameters2,_Static$parameters2$d,_EdgeAnimation$parame,_EdgeAnimation$parame2,_EdgeAnimation$parame3,_Tooltip$parameters,_Tooltip$parameters2,_Tooltip$parameters2$,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/matrix/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/matrix/stories/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Matrix/HeatMaps/HeatMapHighlight",component:_src__WEBPACK_IMPORTED_MODULE_0__.ad};var Default={name:"default",args:{style:{fill:"#222222",opacity:.7}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.qj]},Padding={name:"padding",args:{style:{fill:"#992222",opacity:.3}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.c7]},DataSubsets={name:"data subsets",args:{ids:["alpha","beta"],style:{fill:"#222222",opacity:.7}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.qj]},Static={name:"static",args:{ids:["alpha"],keys:["z"],interactive:!1,style:{fill:"#222222",opacity:.9}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.qj]},EdgeAnimation={name:"edge animation",args:{edgeAnimation:!0,style:{fill:"#222222",opacity:.9}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.qj]},Tooltip={name:"tooltip",decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.nh]};Default.parameters=_extends({},Default.parameters,{docs:_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:_extends({originalSource:"{\n  name: 'default',\n  args: {\n    style: {\n      fill: '#222222',\n      opacity: 0.7\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source)})}),Padding.parameters=_extends({},Padding.parameters,{docs:_extends({},null==(_Padding$parameters=Padding.parameters)?void 0:_Padding$parameters.docs,{source:_extends({originalSource:"{\n  name: 'padding',\n  args: {\n    style: {\n      fill: '#992222',\n      opacity: 0.3\n    }\n  },\n  decorators: [ChartHeatMapPaddedCellsDecorator]\n}"},null==(_Padding$parameters2=Padding.parameters)||null==(_Padding$parameters2$=_Padding$parameters2.docs)?void 0:_Padding$parameters2$.source)})}),DataSubsets.parameters=_extends({},DataSubsets.parameters,{docs:_extends({},null==(_DataSubsets$paramete=DataSubsets.parameters)?void 0:_DataSubsets$paramete.docs,{source:_extends({originalSource:"{\n  name: 'data subsets',\n  args: {\n    ids: ['alpha', 'beta'],\n    style: {\n      fill: '#222222',\n      opacity: 0.7\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}"},null==(_DataSubsets$paramete2=DataSubsets.parameters)||null==(_DataSubsets$paramete3=_DataSubsets$paramete2.docs)?void 0:_DataSubsets$paramete3.source)})}),Static.parameters=_extends({},Static.parameters,{docs:_extends({},null==(_Static$parameters=Static.parameters)?void 0:_Static$parameters.docs,{source:_extends({originalSource:"{\n  name: 'static',\n  args: {\n    ids: ['alpha'],\n    keys: ['z'],\n    interactive: false,\n    style: {\n      fill: '#222222',\n      opacity: 0.9\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}"},null==(_Static$parameters2=Static.parameters)||null==(_Static$parameters2$d=_Static$parameters2.docs)?void 0:_Static$parameters2$d.source)})}),EdgeAnimation.parameters=_extends({},EdgeAnimation.parameters,{docs:_extends({},null==(_EdgeAnimation$parame=EdgeAnimation.parameters)?void 0:_EdgeAnimation$parame.docs,{source:_extends({originalSource:"{\n  name: 'edge animation',\n  args: {\n    edgeAnimation: true,\n    style: {\n      fill: '#222222',\n      opacity: 0.9\n    }\n  },\n  decorators: [ChartHeatMapCellsDecorator]\n}"},null==(_EdgeAnimation$parame2=EdgeAnimation.parameters)||null==(_EdgeAnimation$parame3=_EdgeAnimation$parame2.docs)?void 0:_EdgeAnimation$parame3.source)})}),Tooltip.parameters=_extends({},Tooltip.parameters,{docs:_extends({},null==(_Tooltip$parameters=Tooltip.parameters)?void 0:_Tooltip$parameters.docs,{source:_extends({originalSource:"{\n  name: 'tooltip',\n  decorators: [ChartHeatMapCellsTooltipDecorator]\n}"},null==(_Tooltip$parameters2=Tooltip.parameters)||null==(_Tooltip$parameters2$=_Tooltip$parameters2.docs)?void 0:_Tooltip$parameters2$.source)})});var __namedExportsOrder=["Default","Padding","DataSubsets","Static","EdgeAnimation","Tooltip"]},"./packages/matrix/stories/heatmaps/HeatMapHighlight.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/matrix/stories/heatmaps/HeatMapHighlight.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"heatmaphighlight",children:"HeatMapHighlight"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMapHighlight"})," draws masks on a heatmap to focus attention on a specific row and column."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"mouse-motion",children:"Mouse motion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMapHighlight"})," detects mouse movements and emphasizes a cell in the heatmap by masking other parts of the map."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The effect works on maps with and without padding.\nThe appearance of the masks can be tuned via the prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"style"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_2__.Padding}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data-subsets",children:"Data subsets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To restrict the highlighting to a subset of rows and columns, use props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ids"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"keys"}),".\nIn the example below, the highlights should activate only on the first few rows."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_2__.DataSubsets}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"interactivity",children:"Interactivity"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Interactivity and mouse motion can be turned off via prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"interactive"}),".\nThen, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatmapHighlight"})," can be used as a static tool to highlight a subset of ids and/or keys."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_2__.Static}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"edge-animation",children:"Edge animation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMapHighlight"})," displays masks using a fade-in effect (cf. previous examples).\nFlag ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"edgeAnimation"})," instead activates an animation that initially places masks at the corners\nof the matrix and then spreads these masks to zoom onto a target."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_2__.EdgeAnimation}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Note that the animation is only relevant when the mouse pointer first enters the heatmap."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"tooltip",children:"Tooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMapHighlight"})," automatically sets data for a tooltip.\nTo activate a tooltip, use a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_HeatMapHighlight_stories__WEBPACK_IMPORTED_MODULE_2__.Tooltip})]})}}}}]);