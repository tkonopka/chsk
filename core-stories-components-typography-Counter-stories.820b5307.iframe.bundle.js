"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9052],{"./packages/core/stories/components/typography/Counter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomComponent:()=>CustomComponent,CustomFormat:()=>CustomFormat,Position:()=>Position,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Counter_stories});var animate=__webpack_require__("./node_modules/framer-motion/dist/es/animation/animate.mjs"),motion_minimal=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),react=__webpack_require__("./node_modules/react/index.js"),constants=__webpack_require__("./packages/core/src/general/constants.ts"),math=__webpack_require__("./packages/core/src/general/math.ts"),utils=__webpack_require__("./packages/core/src/general/utils.ts"),context=__webpack_require__("./packages/core/src/themes/context.tsx"),themes_utils=__webpack_require__("./packages/core/src/themes/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["component","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var TextElement=function TextElement(_ref){var component=_ref.component,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);return void 0===component?(0,jsx_runtime.jsx)("text",_extends({},props,{children})):(0,react.createElement)(component,props,children)},Counter=function Counter(_ref2){var _ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"counter":_ref2$variant,_ref2$position=_ref2.position,position=void 0===_ref2$position?constants.rv:_ref2$position,angle=_ref2.angle,_ref2$size=_ref2.size,size=void 0===_ref2$size?[20,20]:_ref2$size,_ref2$padding=_ref2.padding,padding=void 0===_ref2$padding?constants.xe:_ref2$padding,_ref2$align=_ref2.align,align=void 0===_ref2$align?constants.WF:_ref2$align,_ref2$anchor=_ref2.anchor,anchor=void 0===_ref2$anchor?constants.WF:_ref2$anchor,_ref2$offset=_ref2.offset,offset=void 0===_ref2$offset?constants.rv:_ref2$offset,_ref2$nDecimalPlaces=_ref2.nDecimalPlaces,nDecimalPlaces=void 0===_ref2$nDecimalPlaces?0:_ref2$nDecimalPlaces,_ref2$format=_ref2.format,format=void 0===_ref2$format?function(v){return String(v)}:_ref2$format,component=_ref2.component,style=_ref2.style,className=_ref2.className,_ref2$setRole=_ref2.setRole,setRole=void 0===_ref2$setRole||_ref2$setRole,children=_ref2.children,theme=(0,context.Fg)(),_useState=(0,react.useState)((0,math.DJ)(Number(children),nDecimalPlaces)),value=_useState[0],setValue=_useState[1],_useState2=(0,react.useState)(!1),working=_useState2[0],setWorking=_useState2[1];if(value!==Number(children)&&!working){var _theme$Motion$variant,animateConfig=null!=(_theme$Motion$variant=theme.Motion[variant])?_theme$Motion$variant:theme.Motion.default;(0,animate.j)(value,Number(children),_extends({},animateConfig,{onPlay:function onPlay(){setWorking(!0)},onUpdate:function onUpdate(latest){setValue((0,math.DJ)(latest,nDecimalPlaces))},onComplete:function onComplete(){setWorking(!1)}}))}var corner=(0,utils.ji)(position,size,anchor),_getAlignPosition=(0,utils.ue)(corner,size,align,padding,offset),x=_getAlignPosition[0],y=_getAlignPosition[1],compositeClassName=(0,themes_utils.gj)(variant,className),config={x,y,rotate:angle,originX:"0px",originY:"0px"};return(0,jsx_runtime.jsx)(motion_minimal.m.g,{role:setRole&&"default"!==variant?"counter":void 0,initial:config,animate:config,children:(0,jsx_runtime.jsx)(TextElement,{style,className:compositeClassName,component,children:format(value)})})};Counter.displayName="Counter";try{Counter.displayName="Counter",Counter.__docgenInfo={description:"",displayName:"Counter",props:{nDecimalPlaces:{defaultValue:{value:"0"},description:"number of decimal places",name:"nDecimalPlaces",required:!1,type:{name:"number"}},format:{defaultValue:{value:"(v: number) => String(v)"},description:"format",name:"format",required:!1,type:{name:"((v: number) => ReactNode)"}},component:{defaultValue:null,description:"component to replace default text",name:"component",required:!1,type:{name:"FC<TextContentProps>"}},position:{defaultValue:{value:"[0, 0]"},description:"position (absolute coordinates)\nposition",name:"position",required:!1,type:{name:"NumericPositionSpec"}},variant:{defaultValue:{value:"counter"},description:"variant",name:"variant",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"rotation (degrees)",name:"angle",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"[20, 20]"},description:"size of bounding container",name:"size",required:!1,type:{name:"SizeSpec"}},padding:{defaultValue:{value:"[0, 0, 0, 0]"},description:"space between container and label",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},anchor:{defaultValue:{value:"[0.5, 0.5]"},description:"position of anchor point relative to box size",name:"anchor",required:!1,type:{name:"AlignSpec"}},align:{defaultValue:{value:"[0.5, 0.5]"},description:"alignment of content within the bounding container",name:"align",required:!1,type:{name:"AlignSpec"}},offset:{defaultValue:{value:"[0, 0]"},description:"position offset added after anchoring and alignment",name:"offset",required:!1,type:{name:"NumericPositionSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/typography/Counter.tsx#Counter"]={docgenInfo:Counter.__docgenInfo,name:"Counter",path:"packages/core/src/typography/Counter.tsx#Counter"})}catch(__react_docgen_typescript_loader_error){}var Chart=__webpack_require__("./packages/core/src/charts/Chart.tsx"),Surface=__webpack_require__("./packages/core/src/views/Surface.tsx"),View=__webpack_require__("./packages/core/src/views/View.tsx"),randomUniformValue=function randomUniformValue(min,max){return min+Math.random()*(max-min)},CustomCounterValue=function CustomCounterValue(_ref){var style=_ref.style,className=_ref.className,children=_ref.children;return(0,jsx_runtime.jsxs)("text",{style,className,children:[children,(0,jsx_runtime.jsx)("tspan",{style:{fontSize:14,dominantBaseline:"text-before-edge"},children:" %"})]})};CustomCounterValue.displayName="CustomCounterValue";var _Position$parameters,_Position$parameters2,_Position$parameters3,_CustomFormat$paramet,_CustomFormat$paramet2,_CustomFormat$paramet3,_CustomComponent$para,_CustomComponent$para2,_CustomComponent$para3,CounterController=function CounterController(_ref2){var _ref2$position=_ref2.position,position=void 0===_ref2$position?[0,0]:_ref2$position,_ref2$nDecimalPlaces=_ref2.nDecimalPlaces,nDecimalPlaces=void 0===_ref2$nDecimalPlaces?0:_ref2$nDecimalPlaces,component=_ref2.component,_ref2$format=_ref2.format,format=void 0===_ref2$format?function(v){return String(v)}:_ref2$format,_useState=(0,react.useState)(randomUniformValue(0,100)),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return function updateValue(){setValue(randomUniformValue(0,100))}()},children:"Update value"})}),(0,jsx_runtime.jsxs)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"}),(0,jsx_runtime.jsx)(View.G,{children:(0,jsx_runtime.jsx)(Counter,{position,format,style:{fontSize:32},nDecimalPlaces,component,children:value})})]})]})};try{CustomCounterValue.displayName="CustomCounterValue",CustomCounterValue.__docgenInfo={description:"",displayName:"CustomCounterValue",props:{children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/typography/CounterController.tsx#CustomCounterValue"]={docgenInfo:CustomCounterValue.__docgenInfo,name:"CustomCounterValue",path:"packages/core/stories/components/typography/CounterController.tsx#CustomCounterValue"})}catch(__react_docgen_typescript_loader_error){}try{CounterController.displayName="CounterController",CounterController.__docgenInfo={description:"",displayName:"CounterController",props:{component:{defaultValue:null,description:"component to replace default text",name:"component",required:!1,type:{name:"FC<TextContentProps>"}},position:{defaultValue:{value:"[0, 0]"},description:"position (absolute coordinates)\nposition",name:"position",required:!1,type:{name:"NumericPositionSpec"}},format:{defaultValue:{value:"(v: number) => String(v)"},description:"format",name:"format",required:!1,type:{name:"((v: number) => ReactNode)"}},nDecimalPlaces:{defaultValue:{value:"0"},description:"number of decimal places",name:"nDecimalPlaces",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/typography/CounterController.tsx#CounterController"]={docgenInfo:CounterController.__docgenInfo,name:"CounterController",path:"packages/core/stories/components/typography/CounterController.tsx#CounterController"})}catch(__react_docgen_typescript_loader_error){}function Counter_stories_extends(){return Counter_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Counter_stories_extends.apply(this,arguments)}const Counter_stories={title:"Core/Components/Text/Counter",component:Counter};var Position={render:function render(){return(0,jsx_runtime.jsx)(CounterController,{position:[80,40]})},name:"counter"},CustomFormat={render:function render(){return(0,jsx_runtime.jsx)(CounterController,{position:[80,40],format:function format(v){return String(v)+"%"},nDecimalPlaces:1})},name:"custom format"},CustomComponent={render:function render(){return(0,jsx_runtime.jsx)(CounterController,{position:[80,40],nDecimalPlaces:0,component:CustomCounterValue})},name:"custom component"};Position.parameters=Counter_stories_extends({},Position.parameters,{docs:Counter_stories_extends({},null==(_Position$parameters=Position.parameters)?void 0:_Position$parameters.docs,{source:Counter_stories_extends({originalSource:"{\n  render: () => <CounterController position={[80, 40]} />,\n  name: 'counter'\n}"},null==(_Position$parameters2=Position.parameters)||null==(_Position$parameters3=_Position$parameters2.docs)?void 0:_Position$parameters3.source)})}),CustomFormat.parameters=Counter_stories_extends({},CustomFormat.parameters,{docs:Counter_stories_extends({},null==(_CustomFormat$paramet=CustomFormat.parameters)?void 0:_CustomFormat$paramet.docs,{source:Counter_stories_extends({originalSource:"{\n  render: () => <CounterController position={[80, 40]} format={v => String(v) + '%'} nDecimalPlaces={1} />,\n  name: 'custom format'\n}"},null==(_CustomFormat$paramet2=CustomFormat.parameters)||null==(_CustomFormat$paramet3=_CustomFormat$paramet2.docs)?void 0:_CustomFormat$paramet3.source)})}),CustomComponent.parameters=Counter_stories_extends({},CustomComponent.parameters,{docs:Counter_stories_extends({},null==(_CustomComponent$para=CustomComponent.parameters)?void 0:_CustomComponent$para.docs,{source:Counter_stories_extends({originalSource:"{\n  render: () => <CounterController position={[80, 40]} nDecimalPlaces={0} component={CustomCounterValue} />,\n  name: 'custom component'\n}"},null==(_CustomComponent$para2=CustomComponent.parameters)||null==(_CustomComponent$para3=_CustomComponent$para2.docs)?void 0:_CustomComponent$para3.source)})});var __namedExportsOrder=["Position","CustomFormat","CustomComponent"]},"./node_modules/framer-motion/dist/es/animation/animate.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>animate});var _index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/index.mjs"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function animate(from,to,transition={}){const value=(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(from)?from:(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(from);return value.start((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Z)("",value,to,transition)),{stop:()=>value.stop(),isAnimating:()=>value.isAnimating()}}}}]);