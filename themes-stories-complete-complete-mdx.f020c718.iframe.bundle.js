(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[6108,3297],{"./packages/themes/stories/complete/complete.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_complete_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/themes/stories/complete/complete.stories.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",p:"p",...(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_complete_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"complete-themes",children:"Complete Themes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Complete themes are objects that satisfy typescript type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CompleteThemeSpec"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@chsk/core"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"darktheme",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"darkTheme"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"darkTheme"})," defines a theme suitable for use with dark backgrounds.\nApart from reversing dark and light colors, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"darkTheme"})," is otherwise very similar to the default theme."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{of:_complete_stories__WEBPACK_IMPORTED_MODULE_4__.Dark}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that if a chart specifies colors using inline styles, those styles will not be affected by the theme.\nIn the chart above, for example, the regression line specifies a dark-gray color with a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"stroke"})," setting passed to a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"style"})," prop,\nand that color is not adjusted via the theme, becoming almost imperceptible on a dark background.\nThis detail reveals that toggling themes may not automatically give perfect outcomes,\nand some charts may require manual adjustment."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"emptytheme",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"emptyTheme"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"emptyTheme"})," is an object that satisfies the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CompleteThemeSpec"})," interface but does not hold any data."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{of:_complete_stories__WEBPACK_IMPORTED_MODULE_4__.Empty}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["As evidenced in the example above, using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"emptyTheme"})," on its own is likely to produce very poor outcomes.\nHowever, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"emptyTheme"})," is valuable because it is a bare-bones structure that can be provided to prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"baseTheme"}),"\nin the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Chart"})," component, upon which it is then possible to build a new theme from scratch."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To understand why a bare-bones theme is valuable, recall that the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Chart"})," component uses the chart theme to\ngenerate the content of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<style>"})," tag in an svg graphic.\nThe default theme provides styles for several commonly-used elements such as text in titles, legends, and tooltips.\nAltogether, those definitions add around 3kb to the size of each chart.\nIf a particular chart type does not require many of those styles, it may be worthwhile to exclude them.\nUnfortunately, removing styles from the default theme is not straightforward.\nThus, to achieve a smaller footprint for the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<style>"})," tag, it is necessary to start from a bare theme and then\nadd the elements required for a given application."]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./packages/themes/src/complete/defaultTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>defaultTheme});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),defaultTheme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.BRZ)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.uHP)},"./packages/themes/stories/ThemeController.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>ThemeController,y:()=>themeStoryChartProps});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),themeStoryChartProps={size:[400,300],padding:[40,100,60,70]},ThemeController=function ThemeController(_ref){var chart=_ref.chart,chartId=_ref.chartId,_ref$themes=_ref.themes,themes=void 0===_ref$themes?{}:_ref$themes,baseTheme=_ref.baseTheme,themeNames=Object.keys(themes),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(themes[themeNames[0]]),theme=_useState[0],setTheme=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),selection=_useState2[0],setSelection=_useState2[1],chartProps=baseTheme?{chartId,theme:null,baseTheme:theme}:{chartId,theme};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"controller-story",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"controller",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"controller-label",children:"THEME"}),themeNames.length>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:function handleTheme0(){setTheme(themes[themeNames[0]]),setSelection(0)},className:"themeButton"+(0==selection?" selected":""),children:themeNames[0]}):null,themeNames.length>1?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:function handleTheme1(){setTheme(themes[themeNames[1]]),setSelection(1)},className:"themeButton"+(1==selection?" selected":""),children:themeNames[1]}):null]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"controller-chart",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"chart",children:(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(chart,chartProps)})})]})};try{ThemeController.displayName="ThemeController",ThemeController.__docgenInfo={description:"",displayName:"ThemeController",props:{chart:{defaultValue:null,description:"component that renders a chart",name:"chart",required:!0,type:{name:"FC<ThemeStory>"}},chartId:{defaultValue:null,description:"string identifier for chart",name:"chartId",required:!0,type:{name:"string"}},themes:{defaultValue:{value:"{}"},description:"dictionary of themes",name:"themes",required:!1,type:{name:"Record<string, ThemeSpec>"}},baseTheme:{defaultValue:null,description:"flag to provide themes to the baseTheme prop instead of the theme prop",name:"baseTheme",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/themes/stories/ThemeController.tsx#ThemeController"]={docgenInfo:ThemeController.__docgenInfo,name:"ThemeController",path:"packages/themes/stories/ThemeController.tsx#ThemeController"})}catch(__react_docgen_typescript_loader_error){}},"./packages/themes/stories/complete/ThemeScatterChart.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>ThemeScatterChart});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_chsk_xy__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/dist/chsk-xy.es.js"),_ThemeController__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/themes/stories/ThemeController.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var regressionStyle={strokeWidth:2,stroke:"#444444",strokeDasharray:"9 11",strokeLinecap:"round"},data=[{id:"A",data:[{x:1,y:1},{x:1.5,y:2.5},{x:2,y:2.5},{x:2.5,y:3},{x:3,y:2},{x:4,y:2.5},{x:5,y:3},{x:4.5,y:3.5}]}],ThemeScatterChart=function ThemeScatterChart(_ref){var chartId=_ref.chartId,theme=_ref.theme,baseTheme=_ref.baseTheme;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,_extends({id:chartId},_ThemeController__WEBPACK_IMPORTED_MODULE_2__.y,{theme:null!=theme?theme:void 0,baseTheme:null!=baseTheme?baseTheme:void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"outer"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_xy__WEBPACK_IMPORTED_MODULE_3__.bp,{data,x:"x",y:"y",valueSize:4,scaleX:{variant:"linear",domain:[0,6],nice:!1},scaleY:{variant:"linear",domain:[0,4.5]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom",label:"Covariate (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kpH,{variant:"left",children:"Measurement (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.yAs,{variant:"left"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_xy__WEBPACK_IMPORTED_MODULE_3__.cG,{ids:["A"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_xy__WEBPACK_IMPORTED_MODULE_3__.FX,{ids:["A"],variant:"series",style:regressionStyle})]})]}))};try{ThemeScatterChart.displayName="ThemeScatterChart",ThemeScatterChart.__docgenInfo={description:"",displayName:"ThemeScatterChart",props:{chartId:{defaultValue:null,description:"id for chart",name:"chartId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"theme",name:"theme",required:!0,type:{name:"ThemeSpec | null"}},baseTheme:{defaultValue:null,description:"base theme",name:"baseTheme",required:!1,type:{name:"CompleteThemeSpec | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/themes/stories/complete/ThemeScatterChart.tsx#ThemeScatterChart"]={docgenInfo:ThemeScatterChart.__docgenInfo,name:"ThemeScatterChart",path:"packages/themes/stories/complete/ThemeScatterChart.tsx#ThemeScatterChart"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./packages/themes/stories/complete/complete.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Empty:()=>Empty,__namedExportsOrder:()=>__namedExportsOrder,default:()=>complete_stories});var YlOrBr=__webpack_require__("./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js"),BrBG=__webpack_require__("./node_modules/d3-scale-chromatic/src/diverging/BrBG.js"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),defaultTheme=__webpack_require__("./packages/themes/src/complete/defaultTheme.ts"),darkTheme={circle:{default:{stroke:"#bbbbbb",strokeWidth:0}},g:(0,chsk_core_es.BRZ)(defaultTheme.u.g),line:{default:{stroke:"#bbbbbb",strokeWidth:1},grid:{stroke:"#cccccc",strokeWidth:.5},axis:{strokeLinecap:"square",strokeWidth:0},tick:{stroke:"#bbbbbb",strokeWidth:2}},path:{default:{stroke:"#bbbbbb",strokeWidth:2,fill:"transparent"}},polygon:{default:{stroke:"#bbbbbb",strokeWidth:0}},rect:{default:{stroke:"#bbbbbb",strokeWidth:0},inner:{fill:"#333333"},outer:{fill:"#222222"},tooltip:{fill:"#000000"},"tooltip.surface":{strokeWidth:.5,stroke:"#cccccc",filter:"drop-shadow(2px 2px 4px #cccccc33)"},"legend.surface":{fillOpacity:0},legendItem:{fill:"#ffffff"},legendTitle:{fill:"#ffffff"}},text:{default:{fontFamily:"sans-serif",fontSize:"14px",fill:"#bbbbbb",textAnchor:"middle"},label:{fontSize:"12px",dominantBaseline:"central"},counter:{fontSize:"12px",dominantBaseline:"central"},title:{fontWeight:600,fontSize:"18px",textAnchor:"start"},subtitle:{fontSize:"14px",fill:"#888888",textAnchor:"start"},axisLabel:{fontSize:"14px",dominantBaseline:"middle"},tickLabel:{fontSize:"12px"},"tickLabel.left":{textAnchor:"end",dominantBaseline:"middle"},"tickLabel.right":{textAnchor:"start",dominantBaseline:"middle"},"tickLabel.top":{textAnchor:"middle",dominantBaseline:"auto"},"tickLabel.bottom":{textAnchor:"middle",dominantBaseline:"hanging"},legendTitle:{textAnchor:"start",dominantBaseline:"central"},legendItem:{textAnchor:"start",dominantBaseline:"central"},tooltipTitle:{dominantBaseline:"central",fontSize:"12px",fontWeight:600},tooltipItem:{dominantBaseline:"central",fontSize:"12px"},"tooltipTitle.right":{textAnchor:"start"},"tooltipTitle.left":{textAnchor:"end"},"tooltipItem.right":{textAnchor:"start"},"tooltipItem.left":{textAnchor:"end"}},tspan:{},Axis:(0,chsk_core_es.BRZ)(defaultTheme.u.Axis),AxisLabel:(0,chsk_core_es.BRZ)(defaultTheme.u.AxisLabel),AxisTicks:(0,chsk_core_es.BRZ)(defaultTheme.u.AxisTicks),GridLines:(0,chsk_core_es.BRZ)(defaultTheme.u.GridLines),Legend:(0,chsk_core_es.BRZ)(defaultTheme.u.Legend),LegendItemList:(0,chsk_core_es.BRZ)(defaultTheme.u.LegendItemList),LegendItem:(0,chsk_core_es.BRZ)(defaultTheme.u.LegendItem),LegendTitle:(0,chsk_core_es.BRZ)(defaultTheme.u.LegendTitle),LegendColorScale:(0,chsk_core_es.BRZ)(defaultTheme.u.LegendColorScale),LegendSizeScale:(0,chsk_core_es.BRZ)(defaultTheme.u.LegendSizeScale),MilestoneMotion:(0,chsk_core_es.BRZ)(defaultTheme.u.MilestoneMotion),Surface:(0,chsk_core_es.BRZ)(defaultTheme.u.Surface),Tooltip:(0,chsk_core_es.BRZ)(defaultTheme.u.Tooltip),TooltipItemList:(0,chsk_core_es.BRZ)(defaultTheme.u.TooltipItemList),TooltipItem:(0,chsk_core_es.BRZ)(defaultTheme.u.TooltipItem),TooltipTitle:(0,chsk_core_es.BRZ)(defaultTheme.u.TooltipTitle),AxisTooltip:(0,chsk_core_es.BRZ)(defaultTheme.u.AxisTooltip),View:(0,chsk_core_es.BRZ)(defaultTheme.u.View),ViewClip:(0,chsk_core_es.BRZ)(defaultTheme.u.ViewClip),Color:{categorical:{variant:"categorical",colors:["#3f9cde","#e05263","#ffa047","#7fc29b","#c6d8d3","#68758d"],size:6},sequential:{variant:"sequential",colors:YlOrBr.Z,domain:"auto"},diverging:{variant:"diverging",colors:BrBG.Z,domain:"auto"}},Transition:(0,chsk_core_es.BRZ)(defaultTheme.u.Transition),Target:(0,chsk_core_es.BRZ)(defaultTheme.u.Target)},emptyTheme=(0,chsk_core_es.BRZ)(chsk_core_es.GCc),ThemeController=__webpack_require__("./packages/themes/stories/ThemeController.tsx"),ThemeScatterChart=__webpack_require__("./packages/themes/stories/complete/ThemeScatterChart.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const complete_stories={title:"Addons/Themes/Complete themes"},Dark={render:()=>(0,jsx_runtime.jsx)(ThemeController.u,{chart:ThemeScatterChart.S,chartId:"darkTheme",themes:{darkTheme,defaultTheme:defaultTheme.u},baseTheme:!0}),name:"dark"},Empty={render:()=>(0,jsx_runtime.jsx)(ThemeController.u,{chart:ThemeScatterChart.S,chartId:"emptyTheme",themes:{emptyTheme,defaultTheme:defaultTheme.u},baseTheme:!0}),name:"empty"},__namedExportsOrder=["Dark","Empty"];Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  render: () => <ThemeController chart={ThemeScatterChart} chartId={'darkTheme'} themes={{\n    darkTheme,\n    defaultTheme\n  }} baseTheme={true} />,\n  name: 'dark'\n}",...Dark.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  render: () => <ThemeController chart={ThemeScatterChart} chartId={'emptyTheme'} themes={{\n    emptyTheme,\n    defaultTheme\n  }} baseTheme={true} />,\n  name: 'empty'\n}",...Empty.parameters?.docs?.source}}}},"./node_modules/d3-scale-chromatic/src/diverging/BrBG.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js"),_ramp_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-scale-chromatic/src/ramp.js"),scheme=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(_colors_js__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=(0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__.Z)(scheme)},"./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js"),_ramp_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-scale-chromatic/src/ramp.js"),scheme=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(_colors_js__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=(0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__.Z)(scheme)}}]);