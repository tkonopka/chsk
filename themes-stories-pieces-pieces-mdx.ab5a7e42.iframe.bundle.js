(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[63,4375],{"./packages/themes/stories/pieces/pieces.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_pieces_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/themes/stories/pieces/pieces.stories.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",p:"p",...(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_pieces_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"theme-pieces",children:"Theme pieces"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Theme pieces, like partial themes, are objects that satisfy typescript type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ThemeSpec"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@chsk/core"}),".\nUnlike partial themes, theme pieces have more targeted effects and only modify the appearance of a small number of elements."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"buttontheme",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"buttonTheme"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"buttonTheme"})," holds definitions for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"text"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rect"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"path"})," associated with css class 'button'."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This theme piece is used in the gallery charts to style buttons that trigger downloads."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{of:_pieces_stories__WEBPACK_IMPORTED_MODULE_4__.Button}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"tooltipitemlabelvalue",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tooltipItemLabelValue"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tooltipItemLabelValue"})," holds definitions for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"text"})," components with css classes ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tooltipItem label"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tooltipItem value"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This theme piece is useful in quantile charts, which display tables with key-value pairs."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{of:_pieces_stories__WEBPACK_IMPORTED_MODULE_4__.TooltipItemLabelAndValue})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./packages/themes/src/complete/defaultTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>defaultTheme});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),defaultTheme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.BRZ)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.uHP)},"./packages/themes/stories/ThemeController.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>ThemeController,y:()=>themeStoryChartProps});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),themeStoryChartProps={size:[400,300],padding:[40,100,60,70]},ThemeController=function ThemeController(_ref){var chart=_ref.chart,chartId=_ref.chartId,_ref$themes=_ref.themes,themes=void 0===_ref$themes?{}:_ref$themes,baseTheme=_ref.baseTheme,themeNames=Object.keys(themes),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(themes[themeNames[0]]),theme=_useState[0],setTheme=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),selection=_useState2[0],setSelection=_useState2[1],chartProps=baseTheme?{chartId,theme:null,baseTheme:theme}:{chartId,theme};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"controller-story",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"controller",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"controller-label",children:"THEME"}),themeNames.length>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:function handleTheme0(){setTheme(themes[themeNames[0]]),setSelection(0)},className:"themeButton"+(0==selection?" selected":""),children:themeNames[0]}):null,themeNames.length>1?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:function handleTheme1(){setTheme(themes[themeNames[1]]),setSelection(1)},className:"themeButton"+(1==selection?" selected":""),children:themeNames[1]}):null]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"controller-chart",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"chart",children:(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(chart,chartProps)})})]})};try{ThemeController.displayName="ThemeController",ThemeController.__docgenInfo={description:"",displayName:"ThemeController",props:{chart:{defaultValue:null,description:"component that renders a chart",name:"chart",required:!0,type:{name:"FC<ThemeStory>"}},chartId:{defaultValue:null,description:"string identifier for chart",name:"chartId",required:!0,type:{name:"string"}},themes:{defaultValue:{value:"{}"},description:"dictionary of themes",name:"themes",required:!1,type:{name:"Record<string, ThemeSpec>"}},baseTheme:{defaultValue:null,description:"flag to provide themes to the baseTheme prop instead of the theme prop",name:"baseTheme",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/themes/stories/ThemeController.tsx#ThemeController"]={docgenInfo:ThemeController.__docgenInfo,name:"ThemeController",path:"packages/themes/stories/ThemeController.tsx#ThemeController"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./packages/themes/stories/pieces/pieces.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Button:()=>Button,TooltipItemLabelAndValue:()=>TooltipItemLabelAndValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>pieces_stories});var buttonTheme={text:{button:{dominantBaseline:"central",fill:"#555555",fontFamily:"sans-serif",fontSize:"11px",textAnchor:"start"}},path:{button:{cursor:"pointer",strokeWidth:0,fill:"#555555",fillOpacity:1,pointerEvents:"none"}},rect:{button:{cursor:"pointer"},"button.bg":{fill:"#eeeeee",fillOpacity:0},"button.bg:hover":{fillOpacity:1},"button.bg.selected":{fill:"#dddddd",fillOpacity:.7},"button.bg.selected:hover":{fillOpacity:1}}},defaultTheme=__webpack_require__("./packages/themes/src/complete/defaultTheme.ts"),tooltipItemLabelValueTheme={text:{"tooltipItem.label":{textAnchor:"start",dominantBaseline:"central"},"tooltipItem.value":{textAnchor:"start",fontWeight:600,dominantBaseline:"central"}}},ThemeController=__webpack_require__("./packages/themes/stories/ThemeController.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var ButtonExample=function ButtonExample(_ref){var chartId=_ref.chartId,theme=_ref.theme;return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,_extends({id:chartId},ThemeController.y,{theme:null!=theme?theme:void 0,children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{children:[(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:60,y:60,width:40,height:40,style:{fill:"#dd4444"},className:"button"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[110,80],className:"button",children:"button"}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:60,y:120,width:40,height:40,style:{fill:"#dd4444",stroke:"#000000",strokeWidth:1},className:"button bg"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[110,140],className:"button",children:"button bg"}),(0,jsx_runtime.jsx)(chsk_core_es.y$t,{points:[[20,20],[40,60],[70,30]],className:"button"})]})]}))},TooltipItemLabelValueExample=function TooltipItemLabelValueExample(_ref2){var chartId=_ref2.chartId,theme=_ref2.theme;return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,_extends({id:chartId},ThemeController.y,{theme:null!=theme?theme:void 0,children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{children:[(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:30,y:40,width:120,height:40,style:{fillOpacity:0,stroke:"#dd0000",strokeWidth:1}}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[40,60],className:"tooltipItem label",children:"key:"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[70,60],className:"tooltipItem value",children:"value"})]})]}))};try{ButtonExample.displayName="ButtonExample",ButtonExample.__docgenInfo={description:"",displayName:"ButtonExample",props:{chartId:{defaultValue:null,description:"id for chart",name:"chartId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"theme",name:"theme",required:!0,type:{name:"ThemeSpec | null"}},baseTheme:{defaultValue:null,description:"base theme",name:"baseTheme",required:!1,type:{name:"CompleteThemeSpec | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/themes/stories/pieces/examples.tsx#ButtonExample"]={docgenInfo:ButtonExample.__docgenInfo,name:"ButtonExample",path:"packages/themes/stories/pieces/examples.tsx#ButtonExample"})}catch(__react_docgen_typescript_loader_error){}try{TooltipItemLabelValueExample.displayName="TooltipItemLabelValueExample",TooltipItemLabelValueExample.__docgenInfo={description:"",displayName:"TooltipItemLabelValueExample",props:{chartId:{defaultValue:null,description:"id for chart",name:"chartId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"theme",name:"theme",required:!0,type:{name:"ThemeSpec | null"}},baseTheme:{defaultValue:null,description:"base theme",name:"baseTheme",required:!1,type:{name:"CompleteThemeSpec | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/themes/stories/pieces/examples.tsx#TooltipItemLabelValueExample"]={docgenInfo:TooltipItemLabelValueExample.__docgenInfo,name:"TooltipItemLabelValueExample",path:"packages/themes/stories/pieces/examples.tsx#TooltipItemLabelValueExample"})}catch(__react_docgen_typescript_loader_error){}const pieces_stories={title:"Addons/Themes/Theme pieces",parameters:{controls:{include:[]}}},Button={render:()=>(0,jsx_runtime.jsx)(ThemeController.u,{chart:ButtonExample,chartId:"button",themes:{buttonTheme,defaultTheme:defaultTheme.u}}),name:"button"},TooltipItemLabelAndValue={render:()=>(0,jsx_runtime.jsx)(ThemeController.u,{chart:TooltipItemLabelValueExample,chartId:"tooltipItemLabelValue",themes:{tooltipItemLabelValueTheme,defaultTheme:defaultTheme.u}}),name:"tooltip item label and value"},__namedExportsOrder=["Button","TooltipItemLabelAndValue"];Button.parameters={...Button.parameters,docs:{...Button.parameters?.docs,source:{originalSource:"{\n  render: () => <ThemeController chart={ButtonExample} chartId={'button'} themes={{\n    buttonTheme,\n    defaultTheme\n  }} />,\n  name: 'button'\n}",...Button.parameters?.docs?.source}}},TooltipItemLabelAndValue.parameters={...TooltipItemLabelAndValue.parameters,docs:{...TooltipItemLabelAndValue.parameters?.docs,source:{originalSource:"{\n  render: () => <ThemeController chart={TooltipItemLabelValueExample} chartId={'tooltipItemLabelValue'} themes={{\n    tooltipItemLabelValueTheme,\n    defaultTheme\n  }} />,\n  name: 'tooltip item label and value'\n}",...TooltipItemLabelAndValue.parameters?.docs?.source}}}}}]);