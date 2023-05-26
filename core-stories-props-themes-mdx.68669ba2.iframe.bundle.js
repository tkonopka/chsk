"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[1693,6944],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/props/themes.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:()=>Custom,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Custom$parameters,_Custom$parameters2,_Custom$parameters2$d,_decorators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/stories/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Props/Themes",component:_decorators__WEBPACK_IMPORTED_MODULE_0__.Ib};var Default={name:"default",args:{id:"default-theme"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_0__.z5]},Custom={name:"custom",args:{id:"custom-theme",theme:_decorators__WEBPACK_IMPORTED_MODULE_0__.vr},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_0__.z5]};Default.parameters=_extends({},Default.parameters,{docs:_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:_extends({originalSource:"{\n  name: 'default',\n  args: {\n    id: 'default-theme'\n  },\n  decorators: [DivDecorator]\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source)})}),Custom.parameters=_extends({},Custom.parameters,{docs:_extends({},null==(_Custom$parameters=Custom.parameters)?void 0:_Custom$parameters.docs,{source:_extends({originalSource:"{\n  name: 'custom',\n  args: {\n    id: 'custom-theme',\n    theme: customTheme\n  },\n  decorators: [DivDecorator]\n}"},null==(_Custom$parameters2=Custom.parameters)||null==(_Custom$parameters2$d=_Custom$parameters2.docs)?void 0:_Custom$parameters2$d.source)})});var __namedExportsOrder=["Default","Custom"]},"./packages/core/stories/props/themes.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_themes_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/props/themes.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",a:"a"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_themes_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"themes",children:"Themes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Themes define the default look-and-feel for a chart.\nBy setting styles for an entire chart and not for individual components, themes make code less verbose.\nThemes also help in preparing multiple charts with a consistent appearance."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A theme object is a nested dictionary."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:["Keys in the first nested layer should match svg components, e.g. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"text"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"path"}),", or library components, e.g. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Axis"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Legend"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Keys in the second nested layer should match 'variants'."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Keys in the third nested layer should match component props."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"For example, the object below changes styles for text, geometric components, and tick components."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:"\n  const customTheme = {\n  text: {\n   // title in regular font weight\n   title: {\n     fontWeight: 400,\n   }\n  },\n  rect: {\n   // background in a light color\n   inner: {\n     fill: '#f6f6f6'\n   }\n  },\n  line: {\n   // visible axis line\n   axis: {\n       stroke: '#222222',\n       visibility: 'visible' as const,\n       strokeWidth: '2px',\n   },\n   // grid lines in light gray\n   grid: {\n     stroke: '#cccccc',\n     strokeWidth: '1px',\n   },\n   // tick line in a heavier color\n   tick: {\n     stroke: '#222222',\n     strokeWidth: '2px'\n   }\n  },\n  // ticks facing into the chart\n  AxisTicks: {\n   left: {\n       tickSize: -6,\n       labelOffset: 6,\n   },\n   bottom: {\n       tickSize: -6,\n       labelOffset: 6,\n   },\n  }\n  }"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To apply the custom theme to a chart, use prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"}),".\nThe charts below display the same content with the default and the custom themes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_themes_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_themes_stories__WEBPACK_IMPORTED_MODULE_4__.Custom}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["When two charts appear on the same page, as above, a theme for one chart may affect/override the appearance of another chart.\n(This happens because the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<style>"})," tag in HTML documents specify global settings, no matter how they are nested.)\nTo avoid such cross-talk, set a unique identifier for each chart via the prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"id"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:'\n  <Chart {...props} theme={customThemeA} id="chart-A">\n  ...\n  </Chart>\n  <Chart {...props} theme={customThemeB} id="chart-B">\n  ...\n  </Chart>'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For additional information about themes, including about ready-made themes, see the\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"/?path=/docs/addons-themes-overview--page",children:"themes addon"}),"."]})]})}}}}]);