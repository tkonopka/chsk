"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7862],{"./packages/core/stories/components/interactivity/PersistentTooltipDataComponent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PersistentTooltipDataComponent_stories});var react=__webpack_require__("./node_modules/react/index.js"),contexts=__webpack_require__("./packages/core/src/general/contexts.tsx"),tooltips_contexts=__webpack_require__("./packages/core/src/tooltips/contexts.tsx"),utils=__webpack_require__("./packages/core/src/interactivity/utils.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var PersistentTooltipDataComponent=function PersistentTooltipDataComponent(_ref){var component=_ref.component,data=_ref.data,props=_ref.props,handlers=_ref.handlers,modifiers=_ref.modifiers,_useTooltip=(0,tooltips_contexts.lL)(),tooltipData=_useTooltip.data,setTooltipData=_useTooltip.setData,ref=(0,contexts.Bs)().ref,_useState=(0,react.useState)(props.style),componentStyle=_useState[0],setComponentStyle=_useState[1],_useState2=(0,react.useState)(0),key=_useState2[0],setKey=_useState2[1],style=props.style,handleTooltip=(0,react.useCallback)((function(event,style,modifiers){var _tooltipData$data,_getEventXY=(0,utils.E)(event,ref),x=_getEventXY.x,y=_getEventXY.y;void 0!==x&&void 0!==y&&null!=data&&(data===(null==tooltipData||null==(_tooltipData$data=tooltipData.data)?void 0:_tooltipData$data[0])?(setTooltipData({}),null!=modifiers&&modifiers.onMouseLeave&&setComponentStyle(_extends({},style,modifiers.onMouseLeave))):(setTooltipData({x,y,data:[data]}),null!=modifiers&&modifiers.onMouseEnter&&setComponentStyle(_extends({},style,modifiers.onMouseEnter))))}),[data,ref,tooltipData,setTooltipData,setComponentStyle]),handleClick=(0,react.useCallback)((function(event){handleTooltip(event,style,modifiers),null==handlers||null==handlers.onClick||handlers.onClick(data,event),null!=modifiers&&modifiers.onClick&&(setComponentStyle(_extends({},style,modifiers.onClick)),setKey((function(key){return key+1})))}),[data,handlers,modifiers,style,setComponentStyle,setTooltipData,tooltipData]);return(0,react.createElement)(component,_extends({},props,{key,style:componentStyle,onClick:handleClick}))};try{PersistentTooltipDataComponent.displayName="PersistentTooltipDataComponent",PersistentTooltipDataComponent.__docgenInfo={description:"",displayName:"PersistentTooltipDataComponent",props:{data:{defaultValue:null,description:"data object",name:"data",required:!1,type:{name:"WithId"}},component:{defaultValue:null,description:"function to create a chart component",name:"component",required:!0,type:{name:"FC<ComponentProps>"}},props:{defaultValue:null,description:"props passed to the component",name:"props",required:!0,type:{name:"SvgElementVariantProps & InteractivityProps"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<DataSpec>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/interactivity/PersistentTooltipDataComponent.tsx#PersistentTooltipDataComponent"]={docgenInfo:PersistentTooltipDataComponent.__docgenInfo,name:"PersistentTooltipDataComponent",path:"packages/core/src/interactivity/PersistentTooltipDataComponent.tsx#PersistentTooltipDataComponent"})}catch(__react_docgen_typescript_loader_error){}var _Example$parameters,_Example$parameters2,_Example$parameters2$,Circle=__webpack_require__("./packages/core/src/shapes/Circle.tsx"),decorators=__webpack_require__("./packages/core/stories/components/interactivity/decorators.tsx");function PersistentTooltipDataComponent_stories_extends(){return PersistentTooltipDataComponent_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},PersistentTooltipDataComponent_stories_extends.apply(this,arguments)}const PersistentTooltipDataComponent_stories={title:"Core/Components/Interactivity/PersistentTooltipDataComponent",component:PersistentTooltipDataComponent};var Example={name:"example",args:{component:Circle.C,data:{id:"identifier",value:"value"},props:{cx:50,cy:50,r:30,style:{fill:"#999999"}}},decorators:[decorators.w]};Example.parameters=PersistentTooltipDataComponent_stories_extends({},Example.parameters,{docs:PersistentTooltipDataComponent_stories_extends({},null==(_Example$parameters=Example.parameters)?void 0:_Example$parameters.docs,{source:PersistentTooltipDataComponent_stories_extends({originalSource:"{\n  name: 'example',\n  args: {\n    component: Circle,\n    data: {\n      id: 'identifier',\n      value: 'value'\n    },\n    props: {\n      cx: 50,\n      cy: 50,\n      r: 30,\n      style: {\n        fill: '#999999'\n      }\n    }\n  },\n  decorators: [ChartViewWithTooltipDecorator]\n}"},null==(_Example$parameters2=Example.parameters)||null==(_Example$parameters2$=_Example$parameters2.docs)?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./packages/core/src/interactivity/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>getEventXY});var getEventXY=function getEventXY(event,ref){var _ref$current,clientRect=null==ref||null==(_ref$current=ref.current)?void 0:_ref$current.getBoundingClientRect();return void 0===clientRect?{}:{x:Math.round(event.clientX-(null==clientRect?void 0:clientRect.x)),y:Math.round(event.clientY-(null==clientRect?void 0:clientRect.y))}}},"./packages/core/src/shapes/Circle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Circle});var _themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/themes/utils.ts"),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","cx","cy","r","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Circle=function Circle(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,cx=_ref.cx,cy=_ref.cy,r=_ref.r,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),compositeClassName=(0,_themes__WEBPACK_IMPORTED_MODULE_1__.gj)(variant,className),config={cx,cy,r};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.circle,_extends({role:setRole&&"default"!==variant?variant:void 0,initial:config,animate:config,className:compositeClassName},props))};Circle.displayName="Circle";try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"packages/core/src/shapes/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/interactivity/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>ChartForButtonDecorator,w:()=>ChartViewWithTooltipDecorator});var _src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/charts/Chart.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/views/View.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/views/Surface.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/tooltips/Tooltip.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartForButtonDecorator=function ChartForButtonDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},theme:{g:{button:{cursor:"pointer"}}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.G,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.T,{variant:"inner"}),Story()]})})};ChartForButtonDecorator.displayName="ChartForButtonDecorator";var ChartViewWithTooltipDecorator=function ChartViewWithTooltipDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.G,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.T,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.u,{size:[110,30]})]})})};ChartViewWithTooltipDecorator.displayName="ChartViewWithTooltipDecorator";try{ChartForButtonDecorator.displayName="ChartForButtonDecorator",ChartForButtonDecorator.__docgenInfo={description:"",displayName:"ChartForButtonDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/interactivity/decorators.tsx#ChartForButtonDecorator"]={docgenInfo:ChartForButtonDecorator.__docgenInfo,name:"ChartForButtonDecorator",path:"packages/core/stories/components/interactivity/decorators.tsx#ChartForButtonDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartViewWithTooltipDecorator.displayName="ChartViewWithTooltipDecorator",ChartViewWithTooltipDecorator.__docgenInfo={description:"",displayName:"ChartViewWithTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/interactivity/decorators.tsx#ChartViewWithTooltipDecorator"]={docgenInfo:ChartViewWithTooltipDecorator.__docgenInfo,name:"ChartViewWithTooltipDecorator",path:"packages/core/stories/components/interactivity/decorators.tsx#ChartViewWithTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);