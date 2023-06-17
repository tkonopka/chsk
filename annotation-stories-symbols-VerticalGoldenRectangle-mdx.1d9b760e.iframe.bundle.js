"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3780,2897],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/symbols/VerticalGoldenRectangle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Styled:()=>Styled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>VerticalGoldenRectangle_stories});var motion_minimal=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),constants=__webpack_require__("./packages/annotation/src/symbols/constants.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","cx","cy","r","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var VerticalGoldenRectangle=function VerticalGoldenRectangle(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,_ref$cx=_ref.cx,cx=void 0===_ref$cx?0:_ref$cx,_ref$cy=_ref.cy,cy=void 0===_ref$cy?0:_ref$cy,_ref$r=_ref.r,r=void 0===_ref$r?1:_ref$r,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),compositeClassName=(0,chsk_core_es.gjB)(variant,className),config={x:cx-r*constants.gk/2,y:cy-r*constants.Wk/2,width:r*constants.gk,height:r*constants.Wk};return(0,jsx_runtime.jsx)(motion_minimal.m.rect,_extends({role:setRole?variant:void 0,initial:config,animate:config,className:compositeClassName},props))};VerticalGoldenRectangle.displayName="VerticalGoldenRectangle";try{VerticalGoldenRectangle.displayName="VerticalGoldenRectangle",VerticalGoldenRectangle.__docgenInfo={description:"",displayName:"VerticalGoldenRectangle",props:{cx:{defaultValue:{value:"0"},description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:{value:"0"},description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:{value:"1"},description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/symbols/VerticalGoldenRectangle.tsx#VerticalGoldenRectangle"]={docgenInfo:VerticalGoldenRectangle.__docgenInfo,name:"VerticalGoldenRectangle",path:"packages/annotation/src/symbols/VerticalGoldenRectangle.tsx#VerticalGoldenRectangle"})}catch(__react_docgen_typescript_loader_error){}var _Styled$parameters,_Styled$parameters2,_Styled$parameters2$d,decorators=__webpack_require__("./packages/annotation/stories/symbols/decorators.tsx");function VerticalGoldenRectangle_stories_extends(){return VerticalGoldenRectangle_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},VerticalGoldenRectangle_stories_extends.apply(this,arguments)}const VerticalGoldenRectangle_stories={title:"Addons/Annotation/Symbols/VerticalGoldenRectangle",component:VerticalGoldenRectangle};var Styled={name:"styled",args:{style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"},cx:80,cy:50,r:20},decorators:[decorators.J4]};Styled.parameters=VerticalGoldenRectangle_stories_extends({},Styled.parameters,{docs:VerticalGoldenRectangle_stories_extends({},null==(_Styled$parameters=Styled.parameters)?void 0:_Styled$parameters.docs,{source:VerticalGoldenRectangle_stories_extends({originalSource:"{\n  name: 'styled',\n  args: {\n    style: {\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    },\n    cx: 80,\n    cy: 50,\n    r: 20\n  },\n  decorators: [ChartSymbolDecorator]\n}"},null==(_Styled$parameters2=Styled.parameters)||null==(_Styled$parameters2$d=_Styled$parameters2.docs)?void 0:_Styled$parameters2$d.source)})});var __namedExportsOrder=["Styled"]},"./packages/annotation/src/symbols/constants.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bb:()=>diamondCoordinates,R6:()=>starCoordinates,SJ:()=>equilateralCoordinates,Wk:()=>goldenRectWidth,Yy:()=>pentagonCoordinates,gk:()=>goldenRectHeight,nF:()=>segmentCoordinates});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),phi=(1+Math.sqrt(5))/2,goldenRectWidth=.96*Math.sqrt(Math.PI*phi),goldenRectHeight=.96*Math.sqrt(Math.PI/phi),equilateralArm=2*Math.sqrt(Math.PI/(3*Math.sqrt(3)))*.94,equilateralSide=Math.sqrt(3)*equilateralArm*.94,equilateralCoordinates=[[0,-equilateralArm],[equilateralSide/2,equilateralArm/2],[-equilateralSide/2,equilateralArm/2]],diamondEdge=.96*Math.sqrt(Math.PI/2),diamondCoordinates=[[0,-diamondEdge],[diamondEdge,0],[0,diamondEdge],[-diamondEdge,0]],segmentCoordinates=[[-1.1,0],[1.1,0]],angleOffset=-Math.PI/2,pentagonCoordinates=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.w6H)(0,5).map((function(i){return[Math.cos(angleOffset+2*Math.PI*i/5),Math.sin(angleOffset+2*Math.PI*i/5)]})),starCoordinates=[];(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.w6H)(0,5).forEach((function(i){var angle=angleOffset+2*Math.PI*(2*i/10);starCoordinates.push([1.447*Math.cos(angle),1.447*Math.sin(angle)]),angle+=2*Math.PI*.1,starCoordinates.push([(1-.447)*Math.cos(angle),(1-.447)*Math.sin(angle)])}));try{starCoordinates.displayName="starCoordinates",starCoordinates.__docgenInfo={description:"star",displayName:"starCoordinates",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/symbols/constants.tsx#starCoordinates"]={docgenInfo:starCoordinates.__docgenInfo,name:"starCoordinates",path:"packages/annotation/src/symbols/constants.tsx#starCoordinates"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/symbols/VerticalGoldenRectangle.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_VerticalGoldenRectangle_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/annotation/stories/symbols/VerticalGoldenRectangle.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_VerticalGoldenRectangle_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"verticalgoldenrectangle",children:"VerticalGoldenRectangle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"VerticalGoldenRectangle"})," displays a rectangular symbol with height / width proportion set to the golden ratio (1.618)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Geometrically, golden rectangles are just rectangles and can be created using the versatile ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Rectangle"})," component.\nHowever, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"VerticalGoldenRectangle"})," is relevant in that it has the same API as symbols such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Circle"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Square"}),".\nThe component can be used, for example, in legends and tooltips."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_VerticalGoldenRectangle_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styles",children:"Styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The symbol can be styled using css."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_VerticalGoldenRectangle_stories__WEBPACK_IMPORTED_MODULE_4__.Styled})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);