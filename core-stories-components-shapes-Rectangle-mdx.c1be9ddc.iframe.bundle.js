"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8441,5229],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/shapes/Rectangle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Centered:()=>Centered,RoundedCorners:()=>RoundedCorners,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Centered$parameters,_Centered$parameters2,_Centered$parameters3,_RoundedCorners$param,_RoundedCorners$param2,_RoundedCorners$param3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/shapes/Rectangle.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/stories/components/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Shapes/Rectangle",component:_src__WEBPACK_IMPORTED_MODULE_0__.A};var Centered={name:"centered",args:{style:{fill:"#dd9999"},x:0,y:0,width:60,height:30,center:!0},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]},RoundedCorners={name:"rounded corners",args:{style:{fill:"#dd9999",strokeWidth:"1px",stroke:"#aa7777"},x:30,y:20,width:240,height:90,rx:30,ry:20},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]};Centered.parameters=_extends({},Centered.parameters,{docs:_extends({},null==(_Centered$parameters=Centered.parameters)?void 0:_Centered$parameters.docs,{source:_extends({originalSource:"{\n  name: 'centered',\n  args: {\n    style: {\n      fill: '#dd9999'\n    },\n    x: 0,\n    y: 0,\n    width: 60,\n    height: 30,\n    center: true\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Centered$parameters2=Centered.parameters)||null==(_Centered$parameters3=_Centered$parameters2.docs)?void 0:_Centered$parameters3.source)})}),RoundedCorners.parameters=_extends({},RoundedCorners.parameters,{docs:_extends({},null==(_RoundedCorners$param=RoundedCorners.parameters)?void 0:_RoundedCorners$param.docs,{source:_extends({originalSource:"{\n  name: 'rounded corners',\n  args: {\n    style: {\n      fill: '#dd9999',\n      strokeWidth: '1px',\n      stroke: '#aa7777'\n    },\n    x: 30,\n    y: 20,\n    width: 240,\n    height: 90,\n    rx: 30,\n    ry: 20\n  },\n  decorators: [ChartDecorator]\n}"},null==(_RoundedCorners$param2=RoundedCorners.parameters)||null==(_RoundedCorners$param3=_RoundedCorners$param2.docs)?void 0:_RoundedCorners$param3.source)})});var __namedExportsOrder=["Centered","RoundedCorners"]},"./packages/core/src/shapes/Rectangle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Rectangle});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/themes/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/general/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","initial","animate","exit","x","y","width","height","center","className","setRole","stroke","strokeWidth","fill","fillOpacity","opacity","style"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Rectangle=function Rectangle(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,x=_ref.x,y=_ref.y,width=_ref.width,height=_ref.height,_ref$center=_ref.center,center=void 0!==_ref$center&&_ref$center,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,stroke=_ref.stroke,strokeWidth=_ref.strokeWidth,fill=_ref.fill,fillOpacity=_ref.fillOpacity,opacity=_ref.opacity,style=_ref.style,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);width<0&&(x-=width=Math.abs(width)),height<0&&(y-=height=Math.abs(height));var config=(0,_general__WEBPACK_IMPORTED_MODULE_1__.Bx)({x:center?x-width/2:x,y:center?y-height/2:y,width,height,stroke,strokeWidth,fill,fillOpacity,opacity});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.rect,_extends({role:setRole&&"default"!==variant?variant:void 0,initial:(0,_general__WEBPACK_IMPORTED_MODULE_1__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_1__.$d)(config,animate),exit:(0,_general__WEBPACK_IMPORTED_MODULE_1__.$d)(config,exit),className:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.gj)(variant,className),style:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.dJ)(style,config)},props))};Rectangle.displayName="Rectangle";try{Rectangle.displayName="Rectangle",Rectangle.__docgenInfo={description:"",displayName:"Rectangle",props:{x:{defaultValue:null,description:"x coordinate",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"y coordinate",name:"y",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"width",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"height",name:"height",required:!0,type:{name:"number"}},rx:{defaultValue:null,description:"horizontal corner radius",name:"rx",required:!1,type:{name:"number"}},ry:{defaultValue:null,description:"vertical corner radius",name:"ry",required:!1,type:{name:"number"}},center:{defaultValue:{value:"false"},description:"center the rectangle around (x, y)",name:"center",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Rectangle.tsx#Rectangle"]={docgenInfo:Rectangle.__docgenInfo,name:"Rectangle",path:"packages/core/src/shapes/Rectangle.tsx#Rectangle"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/shapes/Rectangle.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Rectangle_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/shapes/Rectangle.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"rectangle",children:"Rectangle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Rectangle_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Rectangle"})," displays a rectangle shape."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Rectangle_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"centering",children:"Centering"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"x"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"y"})," specify the coordinates for the top-left corner of the rectangle.\nTo use those coordinates as the center of the rectangle instead, set the prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"center"})," to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Rectangle_stories__WEBPACK_IMPORTED_MODULE_4__.Centered}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"rounded-corners",children:"Rounded corners"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Rectangle corners can be rounded by setting props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rx"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ry"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Rectangle_stories__WEBPACK_IMPORTED_MODULE_4__.RoundedCorners})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);