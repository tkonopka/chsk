(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8031,5398],{"./packages/annotation/stories/symbols/Pentagon.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Pentagon_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/annotation/stories/symbols/Pentagon.stories.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",p:"p",...(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Pentagon_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"pentagon",children:"Pentagon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Pentagon"})," displays a five-sided polygon."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Pentagon_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styles",children:"Styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Pentagons can be styled using css."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Pentagon_stories__WEBPACK_IMPORTED_MODULE_4__.Styled})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./packages/annotation/src/symbols/constants.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bb:()=>diamondCoordinates,R6:()=>starCoordinates,SJ:()=>equilateralCoordinates,Wk:()=>goldenRectWidth,Yy:()=>pentagonCoordinates,gk:()=>goldenRectHeight,nF:()=>segmentCoordinates});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),phi=(1+Math.sqrt(5))/2,goldenRectWidth=.96*Math.sqrt(Math.PI*phi),goldenRectHeight=.96*Math.sqrt(Math.PI/phi),equilateralArm=2*Math.sqrt(Math.PI/(3*Math.sqrt(3)))*.94,equilateralSide=Math.sqrt(3)*equilateralArm*.94,equilateralCoordinates=[[0,-equilateralArm],[equilateralSide/2,equilateralArm/2],[-equilateralSide/2,equilateralArm/2]],diamondEdge=.96*Math.sqrt(Math.PI/2),diamondCoordinates=[[0,-diamondEdge],[diamondEdge,0],[0,diamondEdge],[-diamondEdge,0]],segmentCoordinates=[[-1.1,0],[1.1,0]],angleOffset=-Math.PI/2,pentagonCoordinates=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.w6H)(0,5).map((function(i){return[Math.cos(angleOffset+2*Math.PI*i/5),Math.sin(angleOffset+2*Math.PI*i/5)]})),starCoordinates=[];(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.w6H)(0,5).forEach((function(i){var angle=angleOffset+2*Math.PI*(2*i/10);starCoordinates.push([1.447*Math.cos(angle),1.447*Math.sin(angle)]),angle+=2*Math.PI*.1,starCoordinates.push([(1-.447)*Math.cos(angle),(1-.447)*Math.sin(angle)])}));try{starCoordinates.displayName="starCoordinates",starCoordinates.__docgenInfo={description:"star",displayName:"starCoordinates",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/symbols/constants.tsx#starCoordinates"]={docgenInfo:starCoordinates.__docgenInfo,name:"starCoordinates",path:"packages/annotation/src/symbols/constants.tsx#starCoordinates"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/src/symbols/createConcentricSymbol.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>createConcentricSymbol});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["cx","cy","r","className","style"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var createConcentricSymbol=function createConcentricSymbol(_ref2){var _ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"background":_ref2$variant,_ref2$symbolPrimary=_ref2.symbolPrimary,symbolPrimary=void 0===_ref2$symbolPrimary?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:_ref2$symbolPrimary,_ref2$symbolSecondary=_ref2.symbolSecondary,symbolSecondary=void 0===_ref2$symbolSecondary?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:_ref2$symbolSecondary,_ref2$rMultiplier=_ref2.rMultiplier,rMultiplier=void 0===_ref2$rMultiplier?1.5:_ref2$rMultiplier,_ref2$styleModifier=_ref2.styleModifier,styleModifier=void 0===_ref2$styleModifier?{fill:"#ffffff"}:_ref2$styleModifier;return function ConcentricSymbol(_ref3){var cx=_ref3.cx,cy=_ref3.cy,r=_ref3.r,className=_ref3.className,style=_ref3.style,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(_ref3,_excluded),_createConcentricPart=function createConcentricParts(_ref){var cx=_ref.cx,cy=_ref.cy,_ref$r=_ref.r,r=void 0===_ref$r?1:_ref$r,className=_ref.className,style=_ref.style,setRole=_ref.setRole,variant=_ref.variant,_ref$symbolPrimary=_ref.symbolPrimary,symbolPrimary=void 0===_ref$symbolPrimary?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:_ref$symbolPrimary,_ref$symbolSecondary=_ref.symbolSecondary,symbolSecondary=void 0===_ref$symbolSecondary?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:_ref$symbolSecondary,_ref$rMultiplier=_ref.rMultiplier,rMultiplier=void 0===_ref$rMultiplier?1:_ref$rMultiplier,styleModifier=_ref.styleModifier,className1=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)(null!=className?className:"default","primary"),primary=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(symbolPrimary,{key:"primary",cx,cy,r,className:className1,style,setRole}),className2=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)(null!=className?className:"default","secondary"),mergedStyle=_extends({},style,styleModifier),secondary=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(symbolSecondary,{key:"secondary",cx,cy,r:r*rMultiplier,className:className2,style:mergedStyle,setRole}),isBackground="background"===variant;return{background:isBackground?secondary:primary,foreground:isBackground?primary:secondary}}({cx,cy,r,className,style,variant,symbolPrimary,symbolSecondary,rMultiplier,styleModifier}),background=_createConcentricPart.background,foreground=_createConcentricPart.foreground;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g",_extends({className},props,{children:[background,foreground]}))}};try{createConcentricSymbol.displayName="createConcentricSymbol",createConcentricSymbol.__docgenInfo={description:"",displayName:"createConcentricSymbol",props:{variant:{defaultValue:{value:"background"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"background"'},{value:'"foreground"'}]}},symbolPrimary:{defaultValue:null,description:"",name:"symbolPrimary",required:!1,type:{name:"FC<SymbolProps>"}},symbolSecondary:{defaultValue:null,description:"",name:"symbolSecondary",required:!1,type:{name:"FC<SymbolProps>"}},rMultiplier:{defaultValue:{value:"1.5"},description:"",name:"rMultiplier",required:!1,type:{name:"number"}},styleModifier:{defaultValue:{value:"{ fill: '#ffffff' }"},description:"",name:"styleModifier",required:!1,type:{name:"Partial<CSSProperties>"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/symbols/createConcentricSymbol.tsx#createConcentricSymbol"]={docgenInfo:createConcentricSymbol.__docgenInfo,name:"createConcentricSymbol",path:"packages/annotation/src/symbols/createConcentricSymbol.tsx#createConcentricSymbol"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/symbols/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J4:()=>ChartSymbolDecorator,SZ:()=>ConcentricCirclesFg,dY:()=>ConcentricHybrid,ke:()=>viewSeriesIndexesKeys,oW:()=>ConcentricSquares,ql:()=>ConcentricCirclesBg});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src_symbols__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/src/symbols/createConcentricSymbol.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},ChartSymbolDecorator=function ChartSymbolDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),Story()]})},ConcentricCirclesBg=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_2__.b)({variant:"background",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cdc,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cdc,rMultiplier:1.4,styleModifier:{fill:"#ffffff"}}),ConcentricCirclesFg=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_2__.b)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cdc,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cdc,rMultiplier:.6,styleModifier:{fill:"#ffffff"}}),ConcentricSquares=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_2__.b)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.bK0,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.bK0,rMultiplier:.6,styleModifier:{fill:"#ffffff"}}),ConcentricHybrid=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_2__.b)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.bK0,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cdc,rMultiplier:.4,styleModifier:{fill:"#ffffff"}});try{ChartSymbolDecorator.displayName="ChartSymbolDecorator",ChartSymbolDecorator.__docgenInfo={description:"",displayName:"ChartSymbolDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ChartSymbolDecorator"]={docgenInfo:ChartSymbolDecorator.__docgenInfo,name:"ChartSymbolDecorator",path:"packages/annotation/stories/symbols/decorators.tsx#ChartSymbolDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricCirclesBg.displayName="ConcentricCirclesBg",ConcentricCirclesBg.__docgenInfo={description:"",displayName:"ConcentricCirclesBg",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesBg"]={docgenInfo:ConcentricCirclesBg.__docgenInfo,name:"ConcentricCirclesBg",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesBg"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricCirclesFg.displayName="ConcentricCirclesFg",ConcentricCirclesFg.__docgenInfo={description:"",displayName:"ConcentricCirclesFg",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesFg"]={docgenInfo:ConcentricCirclesFg.__docgenInfo,name:"ConcentricCirclesFg",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesFg"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricSquares.displayName="ConcentricSquares",ConcentricSquares.__docgenInfo={description:"",displayName:"ConcentricSquares",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricSquares"]={docgenInfo:ConcentricSquares.__docgenInfo,name:"ConcentricSquares",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricSquares"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricHybrid.displayName="ConcentricHybrid",ConcentricHybrid.__docgenInfo={description:"",displayName:"ConcentricHybrid",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricHybrid"]={docgenInfo:ConcentricHybrid.__docgenInfo,name:"ConcentricHybrid",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricHybrid"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./packages/annotation/stories/symbols/Pentagon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Styled:()=>Styled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pentagon_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),constants=__webpack_require__("./packages/annotation/src/symbols/constants.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["cx","cy","r"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var Pentagon=function Pentagon(_ref){var _ref$cx=_ref.cx,cx=void 0===_ref$cx?0:_ref$cx,_ref$cy=_ref.cy,cy=void 0===_ref$cy?0:_ref$cy,_ref$r=_ref.r,r=void 0===_ref$r?1:_ref$r,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(_ref,_excluded),points=constants.Yy.map((function(coords){return[cx+coords[0]*r,cy+coords[1]*r]}));return(0,jsx_runtime.jsx)(chsk_core_es.mgq,_extends({points},props))};try{Pentagon.displayName="Pentagon",Pentagon.__docgenInfo={description:"",displayName:"Pentagon",props:{cx:{defaultValue:{value:"0"},description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:{value:"0"},description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:{value:"1"},description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/symbols/Pentagon.tsx#Pentagon"]={docgenInfo:Pentagon.__docgenInfo,name:"Pentagon",path:"packages/annotation/src/symbols/Pentagon.tsx#Pentagon"})}catch(__react_docgen_typescript_loader_error){}var decorators=__webpack_require__("./packages/annotation/stories/symbols/decorators.tsx");const Pentagon_stories={title:"Addons/Annotation/Symbols/Pentagon",component:Pentagon},Styled={name:"styled",args:{style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"},cx:80,cy:50,r:20},decorators:[decorators.J4]},__namedExportsOrder=["Styled"];Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:"{\n  name: 'styled',\n  args: {\n    style: {\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    },\n    cx: 80,\n    cy: 50,\n    r: 20\n  },\n  decorators: [ChartSymbolDecorator]\n}",...Styled.parameters?.docs?.source}}}}}]);