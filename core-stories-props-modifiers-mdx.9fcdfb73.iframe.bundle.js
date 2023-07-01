/*! For license information please see core-stories-props-modifiers-mdx.9fcdfb73.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3882],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/props/mocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AG:()=>MockSetRole,FY:()=>MockTimeScale,Qx:()=>MockHandlers,ST:()=>MockCategoricalScale,ZM:()=>MockBandScale,kj:()=>MockModifiers,ng:()=>MockContainer,ru:()=>MockNumericScale,tm:()=>MockStyles,wI:()=>MockSequentialScale,wZ:()=>MockDivergingScale,wt:()=>MockDataHandlers,xJ:()=>MockColors,xN:()=>MockThresholdScale,yA:()=>MockScales});var MockContainer=function MockContainer(props){return console.log(JSON.stringify(props)),null},MockColors=function MockColors(_ref){var scaleColor=_ref.scaleColor;return console.log(JSON.stringify(scaleColor)),null},MockHandlers=function MockHandlers(props){return console.log(JSON.stringify(props)),null},MockDataHandlers=function MockDataHandlers(props){return console.log(JSON.stringify(props)),null},MockStyles=function MockStyles(props){return console.log(JSON.stringify(props)),null},MockSetRole=function MockSetRole(props){return console.log(JSON.stringify(props)),null},MockModifiers=function MockModifiers(props){return console.log(JSON.stringify(props)),null},MockScales=function MockScales(props){return console.log(JSON.stringify(props)),null},MockNumericScale=function MockNumericScale(props){return console.log(JSON.stringify(props)),null},MockTimeScale=function MockTimeScale(props){return console.log(JSON.stringify(props)),null},MockBandScale=function MockBandScale(props){return console.log(JSON.stringify(props)),null},MockCategoricalScale=function MockCategoricalScale(props){return console.log(JSON.stringify(props)),null},MockSequentialScale=function MockSequentialScale(props){return console.log(JSON.stringify(props)),null},MockDivergingScale=function MockDivergingScale(props){return console.log(JSON.stringify(props)),null},MockThresholdScale=function MockThresholdScale(props){return console.log(JSON.stringify(props)),null};try{MockContainer.displayName="MockContainer",MockContainer.__docgenInfo={description:"collection of mock objects\nThese are only used to generate tables with props for the documentation",displayName:"MockContainer",props:{position:{defaultValue:null,description:"container position",name:"position",required:!1,type:{name:"PositionSpec"}},positionUnits:{defaultValue:null,description:"absolute or relative units for position",name:"positionUnits",required:!1,type:{name:"PositionUnits"}},size:{defaultValue:null,description:"container size as an array [width, height]",name:"size",required:!1,type:{name:"SizeSpec"}},sizeUnits:{defaultValue:null,description:"absolute or relative units for position and size measurements",name:"sizeUnits",required:!1,type:{name:"SizeUnits"}},anchor:{defaultValue:null,description:"container anchor point",name:"anchor",required:!1,type:{name:"AnchorSpec"}},padding:{defaultValue:null,description:"padding (absolute values) *",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},offset:{defaultValue:null,description:"offset/translation applied after anchoring, absolute units",name:"offset",required:!1,type:{name:"NumericPositionSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockContainer"]={docgenInfo:MockContainer.__docgenInfo,name:"MockContainer",path:"packages/core/stories/props/mocks.tsx#MockContainer"})}catch(__react_docgen_typescript_loader_error){}try{MockColors.displayName="MockColors",MockColors.__docgenInfo={description:"",displayName:"MockColors",props:{scaleColor:{defaultValue:null,description:"",name:"scaleColor",required:!0,type:{name:"ColorScaleSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockColors"]={docgenInfo:MockColors.__docgenInfo,name:"MockColors",path:"packages/core/stories/props/mocks.tsx#MockColors"})}catch(__react_docgen_typescript_loader_error){}try{MockHandlers.displayName="MockHandlers",MockHandlers.__docgenInfo={description:"",displayName:"MockHandlers",props:{onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockHandlers"]={docgenInfo:MockHandlers.__docgenInfo,name:"MockHandlers",path:"packages/core/stories/props/mocks.tsx#MockHandlers"})}catch(__react_docgen_typescript_loader_error){}try{MockDataHandlers.displayName="MockDataHandlers",MockDataHandlers.__docgenInfo={description:"",displayName:"MockDataHandlers",props:{onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((data: WithId, event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((data: WithId, event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((data: WithId, event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((data: WithId, event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((data: WithId, event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockDataHandlers"]={docgenInfo:MockDataHandlers.__docgenInfo,name:"MockDataHandlers",path:"packages/core/stories/props/mocks.tsx#MockDataHandlers"})}catch(__react_docgen_typescript_loader_error){}try{MockStyles.displayName="MockStyles",MockStyles.__docgenInfo={description:"",displayName:"MockStyles",props:{className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockStyles"]={docgenInfo:MockStyles.__docgenInfo,name:"MockStyles",path:"packages/core/stories/props/mocks.tsx#MockStyles"})}catch(__react_docgen_typescript_loader_error){}try{MockSetRole.displayName="MockSetRole",MockSetRole.__docgenInfo={description:"",displayName:"MockSetRole",props:{setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockSetRole"]={docgenInfo:MockSetRole.__docgenInfo,name:"MockSetRole",path:"packages/core/stories/props/mocks.tsx#MockSetRole"})}catch(__react_docgen_typescript_loader_error){}try{MockModifiers.displayName="MockModifiers",MockModifiers.__docgenInfo={description:"",displayName:"MockModifiers",props:{onMouseEnter:{defaultValue:null,description:"style modifier upon mouse enter event",name:"onMouseEnter",required:!1,type:{name:"Partial<CSSProperties>"}},onMouseLeave:{defaultValue:null,description:"style modifier upon mouse leave event",name:"onMouseLeave",required:!1,type:{name:"Partial<CSSProperties>"}},onMouseMove:{defaultValue:null,description:"style modifier upon mouse move event",name:"onMouseMove",required:!1,type:{name:"Partial<CSSProperties>"}},onClick:{defaultValue:null,description:"style modifier upon click",name:"onClick",required:!1,type:{name:"Partial<CSSProperties>"}},onDoubleClick:{defaultValue:null,description:"style modifier upon double click",name:"onDoubleClick",required:!1,type:{name:"Partial<CSSProperties>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockModifiers"]={docgenInfo:MockModifiers.__docgenInfo,name:"MockModifiers",path:"packages/core/stories/props/mocks.tsx#MockModifiers"})}catch(__react_docgen_typescript_loader_error){}try{MockScales.displayName="MockScales",MockScales.__docgenInfo={description:"",displayName:"MockScales",props:{scaleX:{defaultValue:null,description:"scale for horizontal axis",name:"scaleX",required:!1,type:{name:'Omit<ContinuousScaleProps, "size"> | Omit<BandScaleProps, "size">'}},scaleY:{defaultValue:null,description:"scale for vertical axis",name:"scaleY",required:!1,type:{name:'Omit<ContinuousScaleProps, "size"> | Omit<BandScaleProps, "size">'}},scaleColor:{defaultValue:null,description:"scale for color",name:"scaleColor",required:!1,type:{name:"ColorScaleProps"}},scaleSize:{defaultValue:null,description:"scale for size",name:"scaleSize",required:!1,type:{name:"SizeScaleProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockScales"]={docgenInfo:MockScales.__docgenInfo,name:"MockScales",path:"packages/core/stories/props/mocks.tsx#MockScales"})}catch(__react_docgen_typescript_loader_error){}try{MockNumericScale.displayName="MockNumericScale",MockNumericScale.__docgenInfo={description:"",displayName:"MockNumericScale",props:{variant:{defaultValue:null,description:"type of scale",name:"variant",required:!0,type:{name:"enum",value:[{value:'"linear"'},{value:'"log"'},{value:'"sqrt"'}]}},domain:{defaultValue:null,description:"domain min and max",name:"domain",required:!1,type:{name:'[number, number] | "auto" | [number, "auto"] | ["auto", number]'}},clamp:{defaultValue:null,description:"clamp",name:"clamp",required:!1,type:{name:"boolean"}},nice:{defaultValue:null,description:"nice",name:"nice",required:!1,type:{name:"number | boolean"}},reverse:{defaultValue:null,description:"reverse direction of axis",name:"reverse",required:!1,type:{name:"boolean"}},bandwidth:{defaultValue:null,description:"interval for bandwidth",name:"bandwidth",required:!1,type:{name:"[number, number]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockNumericScale"]={docgenInfo:MockNumericScale.__docgenInfo,name:"MockNumericScale",path:"packages/core/stories/props/mocks.tsx#MockNumericScale"})}catch(__react_docgen_typescript_loader_error){}try{MockTimeScale.displayName="MockTimeScale",MockTimeScale.__docgenInfo={description:"",displayName:"MockTimeScale",props:{clamp:{defaultValue:null,description:"clamp",name:"clamp",required:!1,type:{name:"boolean"}},nice:{defaultValue:null,description:"nice",name:"nice",required:!1,type:{name:"number | boolean"}},reverse:{defaultValue:null,description:"reverse direction of axis",name:"reverse",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"type of scale",name:"variant",required:!0,type:{name:'"time"'}},domain:{defaultValue:null,description:"domain min and max",name:"domain",required:!1,type:{name:'"auto" | [Date, Date] | [Date, "auto"] | ["auto", Date]'}},bandwidth:{defaultValue:null,description:"interval for bandwidth",name:"bandwidth",required:!1,type:{name:"[Date, Date]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockTimeScale"]={docgenInfo:MockTimeScale.__docgenInfo,name:"MockTimeScale",path:"packages/core/stories/props/mocks.tsx#MockTimeScale"})}catch(__react_docgen_typescript_loader_error){}try{MockBandScale.displayName="MockBandScale",MockBandScale.__docgenInfo={description:"",displayName:"MockBandScale",props:{variant:{defaultValue:null,description:"type of scale",name:"variant",required:!0,type:{name:'"band"'}},domain:{defaultValue:null,description:"all keys in the domain",name:"domain",required:!1,type:{name:'string[] | "auto"'}},padding:{defaultValue:null,description:"padding (multiple of scale step size); overridden by paddingOuter and paddingInner",name:"padding",required:!1,type:{name:"number"}},paddingOuter:{defaultValue:null,description:"padding between edges of range and first/last bands (multiple of scale step size)",name:"paddingOuter",required:!1,type:{name:"number"}},paddingInner:{defaultValue:null,description:"padding between individual bands (multiple of scale step size)",name:"paddingInner",required:!1,type:{name:"number"}},extraPadding:{defaultValue:null,description:"dictionary with additional padding before certain bands (multiples of scale step size)",name:"extraPadding",required:!1,type:{name:"Record<string, number>"}},nice:{defaultValue:null,description:"nice (does not work on band scales)",name:"nice",required:!1,type:{name:"number | boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockBandScale"]={docgenInfo:MockBandScale.__docgenInfo,name:"MockBandScale",path:"packages/core/stories/props/mocks.tsx#MockBandScale"})}catch(__react_docgen_typescript_loader_error){}try{MockCategoricalScale.displayName="MockCategoricalScale",MockCategoricalScale.__docgenInfo={description:"",displayName:"MockCategoricalScale",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"categorical"'}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ColorScheme"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},domain:{defaultValue:null,description:"",name:"domain",required:!1,type:{name:'string[] | "auto"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockCategoricalScale"]={docgenInfo:MockCategoricalScale.__docgenInfo,name:"MockCategoricalScale",path:"packages/core/stories/props/mocks.tsx#MockCategoricalScale"})}catch(__react_docgen_typescript_loader_error){}try{MockSequentialScale.displayName="MockSequentialScale",MockSequentialScale.__docgenInfo={description:"",displayName:"MockSequentialScale",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"sequential"'}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ColorArray | ColorInterpolator"}},domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:'"auto" | [number | "auto", number | "auto"]'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockSequentialScale"]={docgenInfo:MockSequentialScale.__docgenInfo,name:"MockSequentialScale",path:"packages/core/stories/props/mocks.tsx#MockSequentialScale"})}catch(__react_docgen_typescript_loader_error){}try{MockDivergingScale.displayName="MockDivergingScale",MockDivergingScale.__docgenInfo={description:"",displayName:"MockDivergingScale",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"diverging"'}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ColorArray | ColorInterpolator"}},domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:'"auto" | [number | "auto", number | "auto", number | "auto"]'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockDivergingScale"]={docgenInfo:MockDivergingScale.__docgenInfo,name:"MockDivergingScale",path:"packages/core/stories/props/mocks.tsx#MockDivergingScale"})}catch(__react_docgen_typescript_loader_error){}try{MockThresholdScale.displayName="MockThresholdScale",MockThresholdScale.__docgenInfo={description:"",displayName:"MockThresholdScale",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"threshold"'}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ColorArray"}},domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockThresholdScale"]={docgenInfo:MockThresholdScale.__docgenInfo,name:"MockThresholdScale",path:"packages/core/stories/props/mocks.tsx#MockThresholdScale"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/props/modifiers.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_mocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/props/mocks.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Core/Props/Modifiers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"modifiers",children:"Modifiers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Modifiers are style definitions that augment a base style.\nThey can be used to adjust visual appearance in response to mouse events."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_mocks__WEBPACK_IMPORTED_MODULE_4__.kj}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Modifier styles should be grouped into one objects. As an example, consider the following object."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:"\nconst customModifiers = {\n  onMouseEnter: { stroke: '#000000' },\n  onMouseClick: { strokeWidth: 2 },\n  onMouseLeave: { }\n}"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["When creating a bars in a bar chart with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Bars"}),", this object can be provided to prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"modifiers"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:"\n<Bars modifiers={customModifiers} />\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"As a result, bars in the chart should adjust their appearance in response to mouse events."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that style modifications are not animated by the chsk framework.\nHowever, styles may contain ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation",target:"_blank",rel:"nofollow noopener noreferrer",children:"css animations"}),"."]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);