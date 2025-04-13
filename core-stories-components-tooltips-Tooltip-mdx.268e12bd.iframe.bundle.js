(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3328,9737],{"./packages/core/stories/components/tooltips/Tooltip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/tooltips/Tooltip.stories.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",p:"p",...(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tooltip",children:"Tooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," is a container component for tooltips."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," is meant to display information intermittently as the mouse pointer hovers over chart elements.\nIt determines its location and information content using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useTooltip"})," hook.\nAs such, it should be used alongside components that sets data for the tooltip context."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The examples in this documentation page use custom elements that set tooltip data manually."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"position",children:"Position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," determines its position from the tooltip context via the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useTooltip"})," hook.\nFurther, the tooltip can be offset with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"offset"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.Position}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"size-and-anchor",children:"Size and anchor"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," requires information about its size and how it should be anchored to the target position.\nThe relevant props are ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"anchor"}),".\nHover on the examples below to display a tooltip anchored at different location relative to the mouse pointer."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.AnchoredMiddleLeft}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.AnchoredTopRight}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overhang",children:"Overhang"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A tooltip created within a view may hover beyond the view boundary, and sometimes, that is acceptable.\nHowever, when the tooltip moves beyond the entire chart boundary, it may become clipped."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To avoid clipping, use prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"maxOverhang"})," to set a margin around the view.\nTooltips that move beyond the overhang will flip direction."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.LargeOverhang}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.SmallOverhang}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"If a tooltip still overhangs even after a flip, then it is shifted.\nIn practice, the shift is most noticeable for tooltips with anchor values are set to 0.5,\nwhich typically center the tooltip horizontally or vertically.\nIn such cases, when a tooltip is created near the edges of a view, flipping may not prevent overhang,\nang shifting overrides the anchoring recipe to avoid overhang."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.OverhangShiftX}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.OverhangShiftY}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"tooltip-content",children:"Tooltip content"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The content of the tooltip consists of a number of distinct pieces.\nThese pieces can be tuned with props such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"itemSize"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"itemPadding"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The examples below display tooltips that have: compact padding, ample padding, and a title line.\n(Note that the tooltips do not disappear when the mouse moves away.\nIn these examples, this behavior is intentional -\nit facilitates inspection of the tooltip using developer tools ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Ctrl Shift C"}),".)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.SmallItemPadding}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.LargeItemPadding}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.Title}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To create a tooltip with only a title, i.e. without entries with a symbol and label, set prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"labelFormat"})," to null."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.OnlyTitle}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"custom-style",children:"Custom style"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The tooltip can be styled using css."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.CustomStyle})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./packages/core/stories/components/tooltips/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnchoredMiddleLeft:()=>AnchoredMiddleLeft,AnchoredTopRight:()=>AnchoredTopRight,CustomStyle:()=>CustomStyle,LargeItemPadding:()=>LargeItemPadding,LargeOverhang:()=>LargeOverhang,OnlyTitle:()=>OnlyTitle,OverhangShiftX:()=>OverhangShiftX,OverhangShiftY:()=>OverhangShiftY,Position:()=>Position,SmallItemPadding:()=>SmallItemPadding,SmallOverhang:()=>SmallOverhang,Title:()=>Title,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/tooltips/Tooltip.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/views/Surface.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/shapes/Circle.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/stories/components/tooltips/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Tooltips/Tooltip",component:_src__WEBPACK_IMPORTED_MODULE_1__.u},Position={name:"position",args:{offset:[0,-10],size:[80,40],anchor:[.5,1],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},AnchoredMiddleLeft={name:"anchored middle-left",args:{offset:[0,0],size:[80,40],anchor:[0,.5],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},AnchoredTopRight={name:"anchored top-right",args:{offset:[0,0],size:[80,120],anchor:[1,0],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},LargeOverhang={name:"large overhang",args:{offset:[0,0],size:[80,80],anchor:[0,1],maxOverhang:[60,60,60,60],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},SmallOverhang={name:"small overhang",args:{offset:[0,0],size:[80,80],anchor:[0,1],maxOverhang:[0,0,0,0],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},OverhangShiftX={name:"overhang shift",args:{offset:[0,0],size:[160,40],anchor:[.5,1],maxOverhang:[20,20,20,20],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},OverhangShiftY={name:"overhang shift",args:{offset:[0,0],size:[40,120],anchor:[1,.5],maxOverhang:[20,20,20,20],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},SmallItemPadding={name:"small item padding",args:{offset:[10,0],anchor:[0,.5],itemSize:[100,20],itemPadding:[2,2,2,2]},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.a5]},LargeItemPadding={name:"large item padding",args:{offset:[10,0],anchor:[0,.5],itemSize:[100,28],itemPadding:[6,6,6,6]},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.a5]},Title={name:"title",args:{offset:[10,0],anchor:[0,.5],itemPadding:[4,6,4,6],title:"Tooltip title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.a5]},OnlyTitle={name:"only title",args:{offset:[10,0],anchor:[0,.5],itemSize:[100,20],itemPadding:[2,0,0,6],title:"Tooltip title",labelFormat:null},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.a5]},CustomStyle={name:"custom style",args:{offset:[10,0],anchor:[0,.5],itemSize:[100,28],itemPadding:[6,6,6,6],symbol:_src__WEBPACK_IMPORTED_MODULE_4__.C,rx:5,ry:5,style:{fill:"#fff8f8",strokeWidth:1,stroke:"#000000",filter:"drop-shadow(3px 5px 5px #22222299)"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.a5]},__namedExportsOrder=["Position","AnchoredMiddleLeft","AnchoredTopRight","LargeOverhang","SmallOverhang","OverhangShiftX","OverhangShiftY","SmallItemPadding","LargeItemPadding","Title","OnlyTitle","CustomStyle"];Position.parameters={...Position.parameters,docs:{...Position.parameters?.docs,source:{originalSource:"{\n  name: 'position',\n  args: {\n    offset: [0, -10],\n    size: [80, 40],\n    anchor: [0.5, 1],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}",...Position.parameters?.docs?.source}}},AnchoredMiddleLeft.parameters={...AnchoredMiddleLeft.parameters,docs:{...AnchoredMiddleLeft.parameters?.docs,source:{originalSource:"{\n  name: 'anchored middle-left',\n  args: {\n    offset: [0, 0],\n    size: [80, 40],\n    anchor: [0, 0.5],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}",...AnchoredMiddleLeft.parameters?.docs?.source}}},AnchoredTopRight.parameters={...AnchoredTopRight.parameters,docs:{...AnchoredTopRight.parameters?.docs,source:{originalSource:"{\n  name: 'anchored top-right',\n  args: {\n    offset: [0, 0],\n    size: [80, 120],\n    anchor: [1, 0],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}",...AnchoredTopRight.parameters?.docs?.source}}},LargeOverhang.parameters={...LargeOverhang.parameters,docs:{...LargeOverhang.parameters?.docs,source:{originalSource:"{\n  name: 'large overhang',\n  args: {\n    offset: [0, 0],\n    size: [80, 80],\n    anchor: [0, 1],\n    maxOverhang: [60, 60, 60, 60],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}",...LargeOverhang.parameters?.docs?.source}}},SmallOverhang.parameters={...SmallOverhang.parameters,docs:{...SmallOverhang.parameters?.docs,source:{originalSource:"{\n  name: 'small overhang',\n  args: {\n    offset: [0, 0],\n    size: [80, 80],\n    anchor: [0, 1],\n    maxOverhang: [0, 0, 0, 0],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}",...SmallOverhang.parameters?.docs?.source}}},OverhangShiftX.parameters={...OverhangShiftX.parameters,docs:{...OverhangShiftX.parameters?.docs,source:{originalSource:"{\n  name: 'overhang shift',\n  args: {\n    offset: [0, 0],\n    size: [160, 40],\n    anchor: [0.5, 1],\n    maxOverhang: [20, 20, 20, 20],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}",...OverhangShiftX.parameters?.docs?.source}}},OverhangShiftY.parameters={...OverhangShiftY.parameters,docs:{...OverhangShiftY.parameters?.docs,source:{originalSource:"{\n  name: 'overhang shift',\n  args: {\n    offset: [0, 0],\n    size: [40, 120],\n    anchor: [1, 0.5],\n    maxOverhang: [20, 20, 20, 20],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}",...OverhangShiftY.parameters?.docs?.source}}},SmallItemPadding.parameters={...SmallItemPadding.parameters,docs:{...SmallItemPadding.parameters?.docs,source:{originalSource:"{\n  name: 'small item padding',\n  args: {\n    offset: [10, 0],\n    anchor: [0, 0.5],\n    itemSize: [100, 20],\n    itemPadding: [2, 2, 2, 2]\n  },\n  decorators: [ChartForShapesTooltipDecorator]\n}",...SmallItemPadding.parameters?.docs?.source}}},LargeItemPadding.parameters={...LargeItemPadding.parameters,docs:{...LargeItemPadding.parameters?.docs,source:{originalSource:"{\n  name: 'large item padding',\n  args: {\n    offset: [10, 0],\n    anchor: [0, 0.5],\n    itemSize: [100, 28],\n    itemPadding: [6, 6, 6, 6]\n  },\n  decorators: [ChartForShapesTooltipDecorator]\n}",...LargeItemPadding.parameters?.docs?.source}}},Title.parameters={...Title.parameters,docs:{...Title.parameters?.docs,source:{originalSource:"{\n  name: 'title',\n  args: {\n    offset: [10, 0],\n    anchor: [0, 0.5],\n    itemPadding: [4, 6, 4, 6],\n    title: 'Tooltip title'\n  },\n  decorators: [ChartForShapesTooltipDecorator]\n}",...Title.parameters?.docs?.source}}},OnlyTitle.parameters={...OnlyTitle.parameters,docs:{...OnlyTitle.parameters?.docs,source:{originalSource:"{\n  name: 'only title',\n  args: {\n    offset: [10, 0],\n    anchor: [0, 0.5],\n    itemSize: [100, 20],\n    itemPadding: [2, 0, 0, 6],\n    title: 'Tooltip title',\n    labelFormat: null\n  },\n  decorators: [ChartForShapesTooltipDecorator]\n}",...OnlyTitle.parameters?.docs?.source}}},CustomStyle.parameters={...CustomStyle.parameters,docs:{...CustomStyle.parameters?.docs,source:{originalSource:"{\n  name: 'custom style',\n  args: {\n    offset: [10, 0],\n    anchor: [0, 0.5],\n    itemSize: [100, 28],\n    itemPadding: [6, 6, 6, 6],\n    symbol: Circle,\n    rx: 5,\n    ry: 5,\n    style: {\n      fill: '#fff8f8',\n      strokeWidth: 1,\n      stroke: '#000000',\n      filter: 'drop-shadow(3px 5px 5px #22222299)'\n    }\n  },\n  decorators: [ChartForShapesTooltipDecorator]\n}",...CustomStyle.parameters?.docs?.source}}}}}]);