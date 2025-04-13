"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[6800],{"./packages/matrix/src/heatmap/HeatMapRectangle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>HeatMapRectangle});var framer_motion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["x","y","width","height","style"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var HeatMapRectangle=function HeatMapRectangle(_ref){var x=_ref.x,y=_ref.y,width=_ref.width,height=_ref.height,style=_ref.style,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(_ref,_excluded),config={fill:null==style?void 0:style.fill};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.rect,_extends({},props,{initial:config,animate:config,exit:config,x:x-width/2,y:y-height/2,height,width,style:_extends({},style,{fill:void 0})}))};try{HeatMapRectangle.displayName="HeatMapRectangle",HeatMapRectangle.__docgenInfo={description:"",displayName:"HeatMapRectangle",props:{cellValue:{defaultValue:null,description:"value that determines cell color",name:"cellValue",required:!1,type:{name:"string | number"}},cellSize:{defaultValue:null,description:"value that determines cell size",name:"cellSize",required:!1,type:{name:"number"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},x:{defaultValue:null,description:"x coordinate",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"y coordinate",name:"y",required:!0,type:{name:"number"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},width:{defaultValue:null,description:"width",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"height",name:"height",required:!0,type:{name:"number"}},rx:{defaultValue:null,description:"horizontal corner radius",name:"rx",required:!1,type:{name:"number"}},ry:{defaultValue:null,description:"vertical corner radius",name:"ry",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/heatmap/HeatMapRectangle.tsx#HeatMapRectangle"]={docgenInfo:HeatMapRectangle.__docgenInfo,name:"HeatMapRectangle",path:"packages/matrix/src/heatmap/HeatMapRectangle.tsx#HeatMapRectangle"})}catch(__react_docgen_typescript_loader_error){}},"./packages/matrix/stories/heatmaps/HeatMapSimpleRectangle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/matrix/src/heatmap/HeatMapCells.tsx"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/matrix/src/heatmap/HeatMapRectangle.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/matrix/stories/decorators.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Matrix/HeatMaps/HeatMapSimpleRectangle",component:_src__WEBPACK_IMPORTED_MODULE_0__.W},Example={name:"rectangle",args:{style:{strokeWidth:1,stroke:"#222222"},component:_src__WEBPACK_IMPORTED_MODULE_1__.e},component:_src__WEBPACK_IMPORTED_MODULE_0__.W,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.OX]},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  name: 'rectangle',\n  args: {\n    style: {\n      strokeWidth: 1,\n      stroke: '#222222'\n    },\n    component: HeatMapRectangle\n  },\n  component: HeatMapCells,\n  decorators: [ChartHeatMapDecorator]\n}",...Example.parameters?.docs?.source}}}}}]);