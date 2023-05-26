"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[1075,7593],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/band/stories/quantiles/Quantiles.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BarsHorizontal:()=>BarsHorizontal,BarsVertical:()=>BarsVertical,BoxesHorizontal:()=>BoxesHorizontal,BoxesVertical:()=>BoxesVertical,LinesHorizontal:()=>LinesHorizontal,LinesVertical:()=>LinesVertical,MouseClick:()=>MouseClick,SelectedIds:()=>SelectedIds,SelectedKeys:()=>SelectedKeys,WhiskerCap:()=>WhiskerCap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _BoxesVertical$parame,_BoxesVertical$parame2,_BoxesVertical$parame3,_BoxesHorizontal$para,_BoxesHorizontal$para2,_BoxesHorizontal$para3,_BarsVertical$paramet,_BarsVertical$paramet2,_BarsVertical$paramet3,_BarsHorizontal$param,_BarsHorizontal$param2,_BarsHorizontal$param3,_LinesVertical$parame,_LinesVertical$parame2,_LinesVertical$parame3,_LinesHorizontal$para,_LinesHorizontal$para2,_LinesHorizontal$para3,_SelectedIds$paramete,_SelectedIds$paramete2,_SelectedIds$paramete3,_SelectedKeys$paramet,_SelectedKeys$paramet2,_SelectedKeys$paramet3,_WhiskerCap$parameter,_WhiskerCap$parameter2,_WhiskerCap$parameter3,_MouseClick$parameter,_MouseClick$parameter2,_MouseClick$parameter3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/quantiles/Quantiles.tsx"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/quantiles/BoxAndWhiskers.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/quantiles/BarAndWhisker.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/src/quantiles/LineAndWhiskers.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/quantiles/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Quantiles/Quantiles",component:_src__WEBPACK_IMPORTED_MODULE_0__.R};var BoxesVertical={name:"boxes, vertical",args:{middleStyle:{strokeWidth:2,stroke:"#222222"},component:_src__WEBPACK_IMPORTED_MODULE_1__.m},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},BoxesHorizontal={name:"boxes, horizontal",args:{middleStyle:{strokeWidth:2,stroke:"#222222"},component:_src__WEBPACK_IMPORTED_MODULE_1__.m},component:_src__WEBPACK_IMPORTED_MODULE_0__.R,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.E$]},BarsVertical={name:"bars, vertical",args:{boxStyle:{strokeWidth:1},whiskerStyle:{strokeWidth:1},component:_src__WEBPACK_IMPORTED_MODULE_3__.a},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},BarsHorizontal={name:"bars, horizontal",args:{boxStyle:{strokeWidth:1},whiskerStyle:{strokeWidth:1},component:_src__WEBPACK_IMPORTED_MODULE_3__.a},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.E$]},LinesVertical={name:"lines, vertical",args:{middleStyle:{strokeWidth:3},whiskerStyle:{strokeWidth:1},component:_src__WEBPACK_IMPORTED_MODULE_4__.W},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},LinesHorizontal={name:"lines, horizontal",args:{middleStyle:{strokeWidth:3},whiskerStyle:{strokeWidth:1},component:_src__WEBPACK_IMPORTED_MODULE_4__.W},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.E$]},SelectedIds={name:"selected ids",args:{ids:["alpha"],middleStyle:{strokeWidth:3,stroke:"#444444"},whiskerStyle:{strokeWidth:2},boxStyle:{strokeWidth:.5,stroke:"#444444"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},SelectedKeys={name:"selected keys",args:{keys:["x"],middleStyle:{strokeWidth:3,stroke:"#444444"},whiskerStyle:{strokeWidth:2},boxStyle:{strokeWidth:.5,stroke:"#444444"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},WhiskerCap={name:"whisker cap",args:{middleStyle:{strokeWidth:3,stroke:"#444444"},whiskerStyle:{strokeWidth:2},boxStyle:{strokeWidth:.5,stroke:"#444444"},whiskerCapWidth:.5},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},MouseClick={name:"mouse click",args:{middleStyle:{strokeWidth:3,stroke:"#222222"},whiskerStyle:{strokeWidth:2},handlers:{onClick:_decorators__WEBPACK_IMPORTED_MODULE_2__.Di}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]};BoxesVertical.parameters=_extends({},BoxesVertical.parameters,{docs:_extends({},null==(_BoxesVertical$parame=BoxesVertical.parameters)?void 0:_BoxesVertical$parame.docs,{source:_extends({originalSource:"{\n  name: 'boxes, vertical',\n  args: {\n    middleStyle: {\n      strokeWidth: 2,\n      stroke: '#222222'\n    },\n    component: BoxAndWhiskers\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_BoxesVertical$parame2=BoxesVertical.parameters)||null==(_BoxesVertical$parame3=_BoxesVertical$parame2.docs)?void 0:_BoxesVertical$parame3.source)})}),BoxesHorizontal.parameters=_extends({},BoxesHorizontal.parameters,{docs:_extends({},null==(_BoxesHorizontal$para=BoxesHorizontal.parameters)?void 0:_BoxesHorizontal$para.docs,{source:_extends({originalSource:"{\n  name: 'boxes, horizontal',\n  args: {\n    middleStyle: {\n      strokeWidth: 2,\n      stroke: '#222222'\n    },\n    component: BoxAndWhiskers\n  },\n  component: Quantiles,\n  decorators: [ChartHorizontalQuantileDecorator]\n}"},null==(_BoxesHorizontal$para2=BoxesHorizontal.parameters)||null==(_BoxesHorizontal$para3=_BoxesHorizontal$para2.docs)?void 0:_BoxesHorizontal$para3.source)})}),BarsVertical.parameters=_extends({},BarsVertical.parameters,{docs:_extends({},null==(_BarsVertical$paramet=BarsVertical.parameters)?void 0:_BarsVertical$paramet.docs,{source:_extends({originalSource:"{\n  name: 'bars, vertical',\n  args: {\n    boxStyle: {\n      strokeWidth: 1\n    },\n    whiskerStyle: {\n      strokeWidth: 1\n    },\n    component: BarAndWhisker\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_BarsVertical$paramet2=BarsVertical.parameters)||null==(_BarsVertical$paramet3=_BarsVertical$paramet2.docs)?void 0:_BarsVertical$paramet3.source)})}),BarsHorizontal.parameters=_extends({},BarsHorizontal.parameters,{docs:_extends({},null==(_BarsHorizontal$param=BarsHorizontal.parameters)?void 0:_BarsHorizontal$param.docs,{source:_extends({originalSource:"{\n  name: 'bars, horizontal',\n  args: {\n    boxStyle: {\n      strokeWidth: 1\n    },\n    whiskerStyle: {\n      strokeWidth: 1\n    },\n    component: BarAndWhisker\n  },\n  decorators: [ChartHorizontalQuantileDecorator]\n}"},null==(_BarsHorizontal$param2=BarsHorizontal.parameters)||null==(_BarsHorizontal$param3=_BarsHorizontal$param2.docs)?void 0:_BarsHorizontal$param3.source)})}),LinesVertical.parameters=_extends({},LinesVertical.parameters,{docs:_extends({},null==(_LinesVertical$parame=LinesVertical.parameters)?void 0:_LinesVertical$parame.docs,{source:_extends({originalSource:"{\n  name: 'lines, vertical',\n  args: {\n    middleStyle: {\n      strokeWidth: 3\n    },\n    whiskerStyle: {\n      strokeWidth: 1\n    },\n    component: LineAndWhiskers\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_LinesVertical$parame2=LinesVertical.parameters)||null==(_LinesVertical$parame3=_LinesVertical$parame2.docs)?void 0:_LinesVertical$parame3.source)})}),LinesHorizontal.parameters=_extends({},LinesHorizontal.parameters,{docs:_extends({},null==(_LinesHorizontal$para=LinesHorizontal.parameters)?void 0:_LinesHorizontal$para.docs,{source:_extends({originalSource:"{\n  name: 'lines, horizontal',\n  args: {\n    middleStyle: {\n      strokeWidth: 3\n    },\n    whiskerStyle: {\n      strokeWidth: 1\n    },\n    component: LineAndWhiskers\n  },\n  decorators: [ChartHorizontalQuantileDecorator]\n}"},null==(_LinesHorizontal$para2=LinesHorizontal.parameters)||null==(_LinesHorizontal$para3=_LinesHorizontal$para2.docs)?void 0:_LinesHorizontal$para3.source)})}),SelectedIds.parameters=_extends({},SelectedIds.parameters,{docs:_extends({},null==(_SelectedIds$paramete=SelectedIds.parameters)?void 0:_SelectedIds$paramete.docs,{source:_extends({originalSource:"{\n  name: 'selected ids',\n  args: {\n    ids: ['alpha'],\n    middleStyle: {\n      strokeWidth: 3,\n      stroke: '#444444'\n    },\n    whiskerStyle: {\n      strokeWidth: 2\n    },\n    boxStyle: {\n      strokeWidth: 0.5,\n      stroke: '#444444'\n    }\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_SelectedIds$paramete2=SelectedIds.parameters)||null==(_SelectedIds$paramete3=_SelectedIds$paramete2.docs)?void 0:_SelectedIds$paramete3.source)})}),SelectedKeys.parameters=_extends({},SelectedKeys.parameters,{docs:_extends({},null==(_SelectedKeys$paramet=SelectedKeys.parameters)?void 0:_SelectedKeys$paramet.docs,{source:_extends({originalSource:"{\n  name: 'selected keys',\n  args: {\n    keys: ['x'],\n    middleStyle: {\n      strokeWidth: 3,\n      stroke: '#444444'\n    },\n    whiskerStyle: {\n      strokeWidth: 2\n    },\n    boxStyle: {\n      strokeWidth: 0.5,\n      stroke: '#444444'\n    }\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_SelectedKeys$paramet2=SelectedKeys.parameters)||null==(_SelectedKeys$paramet3=_SelectedKeys$paramet2.docs)?void 0:_SelectedKeys$paramet3.source)})}),WhiskerCap.parameters=_extends({},WhiskerCap.parameters,{docs:_extends({},null==(_WhiskerCap$parameter=WhiskerCap.parameters)?void 0:_WhiskerCap$parameter.docs,{source:_extends({originalSource:"{\n  name: 'whisker cap',\n  args: {\n    middleStyle: {\n      strokeWidth: 3,\n      stroke: '#444444'\n    },\n    whiskerStyle: {\n      strokeWidth: 2\n    },\n    boxStyle: {\n      strokeWidth: 0.5,\n      stroke: '#444444'\n    },\n    whiskerCapWidth: 0.5\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_WhiskerCap$parameter2=WhiskerCap.parameters)||null==(_WhiskerCap$parameter3=_WhiskerCap$parameter2.docs)?void 0:_WhiskerCap$parameter3.source)})}),MouseClick.parameters=_extends({},MouseClick.parameters,{docs:_extends({},null==(_MouseClick$parameter=MouseClick.parameters)?void 0:_MouseClick$parameter.docs,{source:_extends({originalSource:"{\n  name: 'mouse click',\n  args: {\n    middleStyle: {\n      strokeWidth: 3,\n      stroke: '#222222'\n    },\n    whiskerStyle: {\n      strokeWidth: 2\n    },\n    handlers: {\n      onClick: onQuantilesClick\n    }\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_MouseClick$parameter2=MouseClick.parameters)||null==(_MouseClick$parameter3=_MouseClick$parameter2.docs)?void 0:_MouseClick$parameter3.source)})});var __namedExportsOrder=["BoxesVertical","BoxesHorizontal","BarsVertical","BarsHorizontal","LinesVertical","LinesHorizontal","SelectedIds","SelectedKeys","WhiskerCap","MouseClick"]},"./packages/band/src/quantiles/BarAndWhisker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>BarAndWhisker});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["data","horizontal","boxStyle","whiskerStyle","whiskerCapWidth","className","style","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var BarAndWhisker=function BarAndWhisker(_ref){var data=_ref.data,horizontal=_ref.horizontal,boxStyle=_ref.boxStyle,whiskerStyle=_ref.whiskerStyle,_ref$whiskerCapWidth=_ref.whiskerCapWidth,whiskerCapWidth=void 0===_ref$whiskerCapWidth?0:_ref$whiskerCapWidth,className=_ref.className,style=_ref.style,setRole=_ref.setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE1)().scales;if(!data)return null;if(void 0===data.moments||void 0===data.interval)return null;var halfBand=data.bandWidth/2,halfCap=whiskerCapWidth*halfBand,cx=data.bandStart+halfBand,cy=data.moments[0],zero=(horizontal?scales.x:scales.y)(0),commonProps={className,setRole:!1},box=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.AeJ,_extends({variant:"bar",x:-halfBand,y:0,width:data.bandWidth,height:zero-cy,style:boxStyle},commonProps),"bar"),lines=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker",x1:0,x2:0,y1:0,y2:-cy+data.interval[1],style:whiskerStyle},commonProps),"whisker")],caps=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker-cap",x1:-halfCap,x2:halfCap,y1:-cy+data.interval[1],y2:-cy+data.interval[1],style:whiskerStyle},commonProps),"whisker-cap")],config={x:horizontal?cy:cx,y:horizontal?cx:cy,rotate:horizontal?-90:0,originX:"0px",originY:"0px"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.g,_extends({initial:config,animate:config,role:setRole?"bar-and-whisker":void 0,style},props,{children:[box,lines,whiskerCapWidth>0?caps:null]}))};BarAndWhisker.displayName="BarAndWhisker";try{BarAndWhisker.displayName="BarAndWhisker",BarAndWhisker.__docgenInfo={description:"",displayName:"BarAndWhisker",props:{data:{defaultValue:null,description:"information with coordinates",name:"data",required:!0,type:{name:"QuantilePreparedSummary"}},horizontal:{defaultValue:null,description:"orientation of the chart",name:"horizontal",required:!0,type:{name:"boolean"}},boxStyle:{defaultValue:null,description:"style for box",name:"boxStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerStyle:{defaultValue:null,description:"style for whiskers",name:"whiskerStyle",required:!1,type:{name:"Partial<CSSProperties>"}},middleStyle:{defaultValue:null,description:"style for line representing the distribution center",name:"middleStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerCapWidth:{defaultValue:{value:"0"},description:"width of whisker cap",name:"whiskerCapWidth",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/quantiles/BarAndWhisker.tsx#BarAndWhisker"]={docgenInfo:BarAndWhisker.__docgenInfo,name:"BarAndWhisker",path:"packages/band/src/quantiles/BarAndWhisker.tsx#BarAndWhisker"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/quantiles/LineAndWhiskers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>LineAndWhiskers});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["data","horizontal","middleStyle","whiskerStyle","whiskerCapWidth","className","style","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var LineAndWhiskers=function LineAndWhiskers(_ref){var data=_ref.data,horizontal=_ref.horizontal,middleStyle=_ref.middleStyle,whiskerStyle=_ref.whiskerStyle,_ref$whiskerCapWidth=_ref.whiskerCapWidth,whiskerCapWidth=void 0===_ref$whiskerCapWidth?0:_ref$whiskerCapWidth,className=_ref.className,style=_ref.style,setRole=_ref.setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);if(!data)return null;if(void 0===data.moments||void 0===data.interval)return null;var halfBand=data.bandWidth/2,halfCap=whiskerCapWidth*halfBand,cx=data.bandStart+halfBand,cy=data.moments[0],commonProps={className,setRole:!1},middle=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"mean",x1:-halfBand,y1:0,x2:halfBand,y2:0,style:middleStyle},commonProps),"bar"),lines=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker",x1:0,x2:0,y1:0,y2:-cy+data.interval[1],style:whiskerStyle},commonProps),"whisker-upper"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker",x1:0,x2:0,y1:0,y2:-cy+data.interval[0],style:whiskerStyle},commonProps),"whisker-lower")],caps=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker-cap",x1:-halfCap,x2:halfCap,y1:-cy+data.interval[1],y2:-cy+data.interval[1],style:whiskerStyle},commonProps),"whisker-upper-cap"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker-cap",x1:-halfCap,x2:halfCap,y1:-cy+data.interval[0],y2:-cy+data.interval[0],style:whiskerStyle},commonProps),"whisker-lower-cap")],config={x:horizontal?cy:cx,y:horizontal?cx:cy,rotate:horizontal?-90:0,originX:"0px",originY:"0px"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.g,_extends({initial:config,animate:config,role:setRole?"line-and-whiskers":void 0,style},props,{children:[middle,lines,whiskerCapWidth>0?caps:null]}))};LineAndWhiskers.displayName="LineAndWhiskers";try{LineAndWhiskers.displayName="LineAndWhiskers",LineAndWhiskers.__docgenInfo={description:"",displayName:"LineAndWhiskers",props:{data:{defaultValue:null,description:"information with coordinates",name:"data",required:!0,type:{name:"QuantilePreparedSummary"}},horizontal:{defaultValue:null,description:"orientation of the chart",name:"horizontal",required:!0,type:{name:"boolean"}},boxStyle:{defaultValue:null,description:"style for box",name:"boxStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerStyle:{defaultValue:null,description:"style for whiskers",name:"whiskerStyle",required:!1,type:{name:"Partial<CSSProperties>"}},middleStyle:{defaultValue:null,description:"style for line representing the distribution center",name:"middleStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerCapWidth:{defaultValue:{value:"0"},description:"width of whisker cap",name:"whiskerCapWidth",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/quantiles/LineAndWhiskers.tsx#LineAndWhiskers"]={docgenInfo:LineAndWhiskers.__docgenInfo,name:"LineAndWhiskers",path:"packages/band/src/quantiles/LineAndWhiskers.tsx#LineAndWhiskers"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/quantiles/Quantiles.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/quantiles/Quantiles.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"quantiles",children:"Quantiles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Quantiles"})," summarizes distributions of numeric values."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Quantiles"})," is intended to be used within a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Quantile"})," view.\nNote that while the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Quantiles"})," component is the one that draws boxes and whiskers, much of the chart layout is determined by the parent view ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Quantile"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component",children:"Component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"component"})," specifies how distributions are portrayed graphically on the chart.\nBy default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Quantiles"})," uses a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BoxAndWhiskers"})," component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__.BoxesVertical}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__.BoxesHorizontal}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Alternative components are ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BarAndWhisker"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LineAndWhiskers"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__.BarsVertical}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__.BarsHorizontal}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__.LinesVertical}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__.LinesHorizontal}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BoxAndWhiskers"})," always uses non-parametric summary statistics (quantiles).\nIn contrast, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BarAndWhisker"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LineAndWhiskers"})," use parametric summary statistics (mean and standard deviation)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"component"})," also accepts custom implementations of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BoxAndWhiskersProps"})," interface."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data-subsets",children:"Data subsets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Quantiles"})," draws the entire dataset.\nTo draw subsets, use props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ids"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"keys"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__.SelectedIds}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__.SelectedKeys}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"whisker-cap-width",children:"Whisker cap width"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The size of the whisker 'cap' can be adjusted with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"whiskerCapWidth"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__.WhiskerCap}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"mouse-events",children:"Mouse events"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To make the box and whiskers respond to mouse events, set prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"handlers"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantiles_stories__WEBPACK_IMPORTED_MODULE_4__.MouseClick}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["(Click on the boxes, then check the browser console with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Ctrl Shift J"})," for output.)"]})]})}}}}]);