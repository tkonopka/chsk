"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[6256,9052],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/typography/Counter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomComponent:()=>CustomComponent,CustomFormat:()=>CustomFormat,Position:()=>Position,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Counter_stories});var src=__webpack_require__("./packages/core/src/index.tsx"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),randomUniformValue=function randomUniformValue(min,max){return min+Math.random()*(max-min)},CustomCounterValue=function CustomCounterValue(_ref){var style=_ref.style,className=_ref.className,children=_ref.children;return(0,jsx_runtime.jsxs)("text",{style,className,children:[children,(0,jsx_runtime.jsx)("tspan",{style:{fontSize:14,dominantBaseline:"text-before-edge"},children:" %"})]})};CustomCounterValue.displayName="CustomCounterValue";var _Position$parameters,_Position$parameters2,_Position$parameters3,_CustomFormat$paramet,_CustomFormat$paramet2,_CustomFormat$paramet3,_CustomComponent$para,_CustomComponent$para2,_CustomComponent$para3,CounterController=function CounterController(_ref2){var _ref2$position=_ref2.position,position=void 0===_ref2$position?[0,0]:_ref2$position,_ref2$nDecimalPlaces=_ref2.nDecimalPlaces,nDecimalPlaces=void 0===_ref2$nDecimalPlaces?0:_ref2$nDecimalPlaces,component=_ref2.component,_ref2$format=_ref2.format,format=void 0===_ref2$format?function(v){return String(v)}:_ref2$format,_useState=(0,react.useState)(randomUniformValue(0,100)),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return function updateValue(){setValue(randomUniformValue(0,100))}()},children:"Update value"})}),(0,jsx_runtime.jsxs)(src.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(src.Tgp,{variant:"inner"}),(0,jsx_runtime.jsx)(src.G7x,{children:(0,jsx_runtime.jsx)(src.ATJ,{position,format,style:{fontSize:32},nDecimalPlaces,component,children:value})})]})]})};try{CustomCounterValue.displayName="CustomCounterValue",CustomCounterValue.__docgenInfo={description:"",displayName:"CustomCounterValue",props:{children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/typography/CounterController.tsx#CustomCounterValue"]={docgenInfo:CustomCounterValue.__docgenInfo,name:"CustomCounterValue",path:"packages/core/stories/components/typography/CounterController.tsx#CustomCounterValue"})}catch(__react_docgen_typescript_loader_error){}try{CounterController.displayName="CounterController",CounterController.__docgenInfo={description:"",displayName:"CounterController",props:{component:{defaultValue:null,description:"component to replace default text",name:"component",required:!1,type:{name:"FC<TextContentProps>"}},position:{defaultValue:{value:"[0, 0]"},description:"position (absolute coordinates)\nposition",name:"position",required:!1,type:{name:"NumericPositionSpec"}},format:{defaultValue:{value:"(v: number) => String(v)"},description:"format",name:"format",required:!1,type:{name:"((v: number) => ReactNode)"}},nDecimalPlaces:{defaultValue:{value:"0"},description:"number of decimal places",name:"nDecimalPlaces",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/typography/CounterController.tsx#CounterController"]={docgenInfo:CounterController.__docgenInfo,name:"CounterController",path:"packages/core/stories/components/typography/CounterController.tsx#CounterController"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Counter_stories={title:"Core/Components/Text/Counter",component:src.ATJ};var Position={render:function render(){return(0,jsx_runtime.jsx)(CounterController,{position:[80,40]})},name:"counter"},CustomFormat={render:function render(){return(0,jsx_runtime.jsx)(CounterController,{position:[80,40],format:function format(v){return String(v)+"%"},nDecimalPlaces:1})},name:"custom format"},CustomComponent={render:function render(){return(0,jsx_runtime.jsx)(CounterController,{position:[80,40],nDecimalPlaces:0,component:CustomCounterValue})},name:"custom component"};Position.parameters=_extends({},Position.parameters,{docs:_extends({},null==(_Position$parameters=Position.parameters)?void 0:_Position$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <CounterController position={[80, 40]} />,\n  name: 'counter'\n}"},null==(_Position$parameters2=Position.parameters)||null==(_Position$parameters3=_Position$parameters2.docs)?void 0:_Position$parameters3.source)})}),CustomFormat.parameters=_extends({},CustomFormat.parameters,{docs:_extends({},null==(_CustomFormat$paramet=CustomFormat.parameters)?void 0:_CustomFormat$paramet.docs,{source:_extends({originalSource:"{\n  render: () => <CounterController position={[80, 40]} format={v => String(v) + '%'} nDecimalPlaces={1} />,\n  name: 'custom format'\n}"},null==(_CustomFormat$paramet2=CustomFormat.parameters)||null==(_CustomFormat$paramet3=_CustomFormat$paramet2.docs)?void 0:_CustomFormat$paramet3.source)})}),CustomComponent.parameters=_extends({},CustomComponent.parameters,{docs:_extends({},null==(_CustomComponent$para=CustomComponent.parameters)?void 0:_CustomComponent$para.docs,{source:_extends({originalSource:"{\n  render: () => <CounterController position={[80, 40]} nDecimalPlaces={0} component={CustomCounterValue} />,\n  name: 'custom component'\n}"},null==(_CustomComponent$para2=CustomComponent.parameters)||null==(_CustomComponent$para3=_CustomComponent$para2.docs)?void 0:_CustomComponent$para3.source)})});var __namedExportsOrder=["Position","CustomFormat","CustomComponent"]},"./packages/core/stories/components/typography/Counter.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Counter_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/stories/components/typography/Counter.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"counter",children:"Counter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Counter_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Counter"})," creates a text element with a number. Its characteristic feature is that when data changes, the number is animated."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_Counter_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"position",children:"Position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Counter"})," shares many props with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Typography"}),". The position of the text, for example, is determined by prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Counter_stories__WEBPACK_IMPORTED_MODULE_2__.Position}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"content-format",children:"Content format"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Counter"})," displays a number 'as-is'.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"nDecimalPlaces"})," introduces number-rounding to a fixed number of decimal places.\nAlternatively, prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"format"})," accepts a function to perform custom number-to-string conversion.\nThis can be used, for example, to display values as percentages."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Counter_stories__WEBPACK_IMPORTED_MODULE_2__.CustomFormat}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"custom-components",children:"Custom components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For even more control over how the counter is displayed, prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"component"})," accepts a custom React component.\nCustom components can be used to, for example, display text with nested ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tspan"})," tags."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Counter_stories__WEBPACK_IMPORTED_MODULE_2__.CustomComponent})]})}}}}]);