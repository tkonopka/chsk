"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8603,556],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/interactivity/DataComponent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClickEvents:()=>ClickEvents,CustomImplementation:()=>CustomImplementation,StyleModifiers:()=>StyleModifiers,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DataComponent_stories});var DataComponent=__webpack_require__("./packages/core/src/interactivity/DataComponent.tsx"),Chart=__webpack_require__("./packages/core/src/charts/Chart.tsx"),Surface=__webpack_require__("./packages/core/src/views/Surface.tsx"),Circle=__webpack_require__("./packages/core/src/shapes/Circle.tsx"),Typography=__webpack_require__("./packages/core/src/typography/Typography.tsx"),react=__webpack_require__("./node_modules/react/index.js"),contexts=__webpack_require__("./packages/core/src/charts/contexts.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var CustomDataComponent=function CustomDataComponent(_ref){var _chartData$activeId,_ref2,_data$id,_props$style$fill,_props$style,component=_ref.component,data=_ref.data,props=_ref.props,handlers=_ref.handlers,_useChartData=(0,contexts.q1)(),chartData=_useChartData.data,setChartData=_useChartData.setData,activeId=null!=(_chartData$activeId=chartData.activeId)?_chartData$activeId:null,clickedIds=null!=(_ref2=chartData.clickedIds)?_ref2:new Set,id=null!=(_data$id=null==data?void 0:data.id)?_data$id:"",clicked=data&&clickedIds.has(id),active=data&&activeId===id;active||clicked?props.style=_extends({},props.style,{stroke:"#222222",strokeWidth:clicked&&!active?2:3}):props.style=_extends({},props.style,{stroke:null!=(_props$style$fill=null==props||null==(_props$style=props.style)?void 0:_props$style.fill)?_props$style$fill:void 0,strokeWidth:2});var handleMouseEnter=(0,react.useCallback)((function(event){setChartData&&(setChartData(_extends({},chartData,{activeId:null==data?void 0:data.id})),null==handlers||null==handlers.onMouseEnter||handlers.onMouseEnter(data,event))}),[data,handlers,chartData]),handleMouseMove=(0,react.useCallback)((function(event){return null==handlers||null==handlers.onMouseMove?void 0:handlers.onMouseMove(data,event)}),[data,handlers]),handleMouseLeave=(0,react.useCallback)((function(event){setChartData&&(setChartData(_extends({},chartData,{activeId:null})),null==handlers||null==handlers.onMouseLeave||handlers.onMouseLeave(data,event))}),[data,handlers,chartData]),handleClick=(0,react.useCallback)((function(event){setChartData&&(clickedIds.has(id)?clickedIds.delete(id):clickedIds.add(id),setChartData(_extends({},chartData,{clickedIds})),null==handlers||null==handlers.onClick||handlers.onClick(data,event))}),[data,handlers,chartData]);return(0,react.createElement)(component,_extends({key:"custom-data-component-"+active},props,{onMouseEnter:handleMouseEnter,onMouseMove:handleMouseMove,onMouseLeave:handleMouseLeave,onClick:handleClick}))};try{CustomDataComponent.displayName="CustomDataComponent",CustomDataComponent.__docgenInfo={description:"",displayName:"CustomDataComponent",props:{data:{defaultValue:null,description:"data object",name:"data",required:!1,type:{name:"WithId"}},component:{defaultValue:null,description:"function to create a chart component",name:"component",required:!0,type:{name:"FC<ComponentProps>"}},props:{defaultValue:null,description:"props passed to the component",name:"props",required:!0,type:{name:"SvgElementVariantProps & InteractivityProps"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<DataSpec>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/interactivity/CustomDataComponent.tsx#CustomDataComponent"]={docgenInfo:CustomDataComponent.__docgenInfo,name:"CustomDataComponent",path:"packages/core/stories/components/interactivity/CustomDataComponent.tsx#CustomDataComponent"})}catch(__react_docgen_typescript_loader_error){}var _ClickEvents$paramete,_ClickEvents$paramete2,_ClickEvents$paramete3,_StyleModifiers$param,_StyleModifiers$param2,_StyleModifiers$param3,_CustomImplementation,_CustomImplementation2,_CustomImplementation3,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function DataComponent_stories_extends(){return DataComponent_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},DataComponent_stories_extends.apply(this,arguments)}var customOnClick=function customOnClick(data){console.log("clicked: "+JSON.stringify(data))};const DataComponent_stories={title:"Core/Components/Interactivity/DataComponent",component:DataComponent.A};var ClickEvents={render:function render(){return(0,jsx_runtime.jsxs)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"}),(0,jsx_runtime.jsx)(DataComponent.A,{component:Circle.C,data:{id:"A",value:"first circle"},props:{cx:50,cy:50,r:30,style:{fill:"#cccccc"}},handlers:{onClick:customOnClick}}),(0,jsx_runtime.jsx)(DataComponent.A,{component:Circle.C,data:{id:"B",value:"second circle"},props:{cx:50,cy:120,r:30,style:{fill:"#999999"}},handlers:{onClick:customOnClick}}),(0,jsx_runtime.jsx)(Typography.Z,{position:[120,50],style:{textAnchor:"start"},children:"Click to log into console"})]})},name:"click events"},keyframes=["@keyframes colorChange {","from {fill: #999999 }","to {fill: #dd4444 }","}"].join(""),StyleModifiers={render:function render(){return(0,jsx_runtime.jsxs)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,jsx_runtime.jsx)("style",{children:keyframes}),(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"}),(0,jsx_runtime.jsx)(DataComponent.A,{component:Circle.C,data:{id:"A",value:"first circle"},props:{cx:50,cy:50,r:30,style:{fill:"#cccccc"}},modifiers:{onMouseEnter:{strokeWidth:2,stroke:"#0000dd"},onMouseLeave:{}}}),(0,jsx_runtime.jsx)(Typography.Z,{position:[90,50],style:{textAnchor:"start"},children:"hover to change stroke"}),(0,jsx_runtime.jsx)(DataComponent.A,{component:Circle.C,data:{id:"B",value:"second circle"},props:{cx:50,cy:120,r:30,style:{fill:"#999999"}},modifiers:{onClick:{animation:"colorChange 0.5s ease-in 0s 4 alternate none running"}}}),(0,jsx_runtime.jsx)(Typography.Z,{position:[90,120],style:{textAnchor:"start"},children:"click for 2x color pulse"})]})},name:"style modifiers"},CustomImplementation={render:function render(){return(0,jsx_runtime.jsxs)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"}),(0,jsx_runtime.jsx)(CustomDataComponent,{component:Circle.C,data:{id:"A",value:"first circle"},props:{cx:50,cy:50,r:30,style:{fill:"#ddaaaa",fillOpacity:.5,stroke:"#ddaaaa"}}}),(0,jsx_runtime.jsx)(CustomDataComponent,{component:Circle.C,data:{id:"B",value:"second circle"},props:{cx:50,cy:120,r:30,style:{fill:"#aaaadd",fillOpacity:.5,stroke:"#aaaadd"}}}),(0,jsx_runtime.jsx)(Typography.Z,{position:[120,50],style:{textAnchor:"start"},children:"Hover and click"})]})},name:"custom implementation"};ClickEvents.parameters=DataComponent_stories_extends({},ClickEvents.parameters,{docs:DataComponent_stories_extends({},null==(_ClickEvents$paramete=ClickEvents.parameters)?void 0:_ClickEvents$paramete.docs,{source:DataComponent_stories_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{\n    margin: '0.5em',\n    border: 'solid 1px #aa3333',\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <DataComponent component={Circle} data={{\n      id: 'A',\n      value: 'first circle'\n    }} props={{\n      cx: 50,\n      cy: 50,\n      r: 30,\n      style: {\n        fill: '#cccccc'\n      }\n    }} handlers={{\n      onClick: customOnClick\n    }} />\n            <DataComponent component={Circle} data={{\n      id: 'B',\n      value: 'second circle'\n    }} props={{\n      cx: 50,\n      cy: 120,\n      r: 30,\n      style: {\n        fill: '#999999'\n      }\n    }} handlers={{\n      onClick: customOnClick\n    }} />\n            <Typography position={[120, 50]} style={{\n      textAnchor: 'start'\n    }}>\n                Click to log into console\n            </Typography>\n        </Chart>,\n  name: 'click events'\n}"},null==(_ClickEvents$paramete2=ClickEvents.parameters)||null==(_ClickEvents$paramete3=_ClickEvents$paramete2.docs)?void 0:_ClickEvents$paramete3.source)})}),StyleModifiers.parameters=DataComponent_stories_extends({},StyleModifiers.parameters,{docs:DataComponent_stories_extends({},null==(_StyleModifiers$param=StyleModifiers.parameters)?void 0:_StyleModifiers$param.docs,{source:DataComponent_stories_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{\n    margin: '0.5em',\n    border: 'solid 1px #aa3333',\n    display: 'inline-block'\n  }}>\n            <style>{keyframes}</style>\n            <Surface variant={'inner'} />\n            <DataComponent component={Circle} data={{\n      id: 'A',\n      value: 'first circle'\n    }} props={{\n      cx: 50,\n      cy: 50,\n      r: 30,\n      style: {\n        fill: '#cccccc'\n      }\n    }} modifiers={{\n      onMouseEnter: {\n        strokeWidth: 2,\n        stroke: '#0000dd'\n      },\n      onMouseLeave: {}\n    }} />\n            <Typography position={[90, 50]} style={{\n      textAnchor: 'start'\n    }}>\n                hover to change stroke\n            </Typography>\n            <DataComponent component={Circle} data={{\n      id: 'B',\n      value: 'second circle'\n    }} props={{\n      cx: 50,\n      cy: 120,\n      r: 30,\n      style: {\n        fill: '#999999'\n      }\n    }} modifiers={{\n      onClick: {\n        animation: 'colorChange 0.5s ease-in 0s 4 alternate none running'\n      }\n    }} />\n            <Typography position={[90, 120]} style={{\n      textAnchor: 'start'\n    }}>\n                click for 2x color pulse\n            </Typography>\n        </Chart>,\n  name: 'style modifiers'\n}"},null==(_StyleModifiers$param2=StyleModifiers.parameters)||null==(_StyleModifiers$param3=_StyleModifiers$param2.docs)?void 0:_StyleModifiers$param3.source)})}),CustomImplementation.parameters=DataComponent_stories_extends({},CustomImplementation.parameters,{docs:DataComponent_stories_extends({},null==(_CustomImplementation=CustomImplementation.parameters)?void 0:_CustomImplementation.docs,{source:DataComponent_stories_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{\n    margin: '0.5em',\n    border: 'solid 1px #aa3333',\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <CustomDataComponent component={Circle} data={{\n      id: 'A',\n      value: 'first circle'\n    }} props={{\n      cx: 50,\n      cy: 50,\n      r: 30,\n      style: {\n        fill: '#ddaaaa',\n        fillOpacity: 0.5,\n        stroke: '#ddaaaa'\n      }\n    }} />\n            <CustomDataComponent component={Circle} data={{\n      id: 'B',\n      value: 'second circle'\n    }} props={{\n      cx: 50,\n      cy: 120,\n      r: 30,\n      style: {\n        fill: '#aaaadd',\n        fillOpacity: 0.5,\n        stroke: '#aaaadd'\n      }\n    }} />\n            <Typography position={[120, 50]} style={{\n      textAnchor: 'start'\n    }}>\n                Hover and click\n            </Typography>\n        </Chart>,\n  name: 'custom implementation'\n}"},null==(_CustomImplementation2=CustomImplementation.parameters)||null==(_CustomImplementation3=_CustomImplementation2.docs)?void 0:_CustomImplementation3.source)})});var __namedExportsOrder=["ClickEvents","StyleModifiers","CustomImplementation"]},"./packages/core/src/interactivity/DataComponent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>DataComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var DataComponent=function DataComponent(_ref){var component=_ref.component,data=_ref.data,props=_ref.props,handlers=_ref.handlers,modifiers=_ref.modifiers,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.style),componentStyle=_useState[0],setComponentStyle=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),key=_useState2[0],setKey=_useState2[1],style=props.style,handleMouseEnter=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){null==handlers||null==handlers.onMouseEnter||handlers.onMouseEnter(data,event),null!=modifiers&&modifiers.onMouseEnter&&setComponentStyle(_extends({},style,modifiers.onMouseEnter))}),[data,handlers,style,modifiers,setComponentStyle]),handleMouseMove=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){null==handlers||null==handlers.onMouseMove||handlers.onMouseMove(data,event),null!=modifiers&&modifiers.onMouseMove&&setComponentStyle(_extends({},style,modifiers.onMouseMove))}),[data,handlers,style,modifiers,setComponentStyle]),handleMouseLeave=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){null==handlers||null==handlers.onMouseLeave||handlers.onMouseLeave(data,event),null!=modifiers&&modifiers.onMouseLeave&&(setComponentStyle(_extends({},style,modifiers.onMouseLeave)),setKey((function(key){return key+1})))}),[data,handlers,style,modifiers,setComponentStyle,setKey]),handleClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){null==handlers||null==handlers.onClick||handlers.onClick(data,event),null!=modifiers&&modifiers.onClick&&setComponentStyle(_extends({},style,modifiers.onClick))}),[data,handlers,style,modifiers,setComponentStyle]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component,_extends({},props,{key,style:componentStyle,onMouseEnter:handleMouseEnter,onMouseMove:handleMouseMove,onMouseLeave:handleMouseLeave,onClick:handleClick}))};try{DataComponent.displayName="DataComponent",DataComponent.__docgenInfo={description:"",displayName:"DataComponent",props:{data:{defaultValue:null,description:"data object",name:"data",required:!1,type:{name:"WithId"}},component:{defaultValue:null,description:"function to create a chart component",name:"component",required:!0,type:{name:"FC<ComponentProps>"}},props:{defaultValue:null,description:"props passed to the component",name:"props",required:!0,type:{name:"SvgElementVariantProps & InteractivityProps"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<DataSpec>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/interactivity/DataComponent.tsx#DataComponent"]={docgenInfo:DataComponent.__docgenInfo,name:"DataComponent",path:"packages/core/src/interactivity/DataComponent.tsx#DataComponent"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/src/shapes/Circle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Circle});var _themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/themes/utils.ts"),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","cx","cy","r","className","style","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Circle=function Circle(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,cx=_ref.cx,cy=_ref.cy,r=_ref.r,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),compositeClassName=(0,_themes__WEBPACK_IMPORTED_MODULE_1__.gj)(variant,className),config={cx,cy,r};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.circle,_extends({role:setRole&&"default"!==variant?variant:void 0,initial:config,animate:config,style,className:compositeClassName},props))};Circle.displayName="Circle";try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"packages/core/src/shapes/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/src/typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography});var framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_general__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/general/constants.ts"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/themes/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Typography=function Typography(_ref){var _ref$position=_ref.position,position=void 0===_ref$position?_general__WEBPACK_IMPORTED_MODULE_1__.rv:_ref$position,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,angle=_ref.angle,style=_ref.style,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children;if(!children)return null;var compositeClassName=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.gj)(variant,className),config={x:position[_general__WEBPACK_IMPORTED_MODULE_1__.X],y:position[_general__WEBPACK_IMPORTED_MODULE_1__.Y],rotate:angle,originX:"0px",originY:"0px"},role=setRole&&"default"!==variant?variant:void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.g,{role,initial:config,animate:config,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{style,className:compositeClassName,children})})};Typography.displayName="Typography";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{position:{defaultValue:{value:"[0, 0]"},description:"position (absolute coordinates)",name:"position",required:!1,type:{name:"NumericPositionSpec"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"rotation (degrees)",name:"angle",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"packages/core/src/typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/interactivity/DataComponent.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_DataComponent_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/interactivity/DataComponent.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"datacomponent",children:"DataComponent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_DataComponent_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DataComponent"})," is a wrapper function that associates event handlers with other components."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DataComponent"})," binds event handlers to chart components so that the actions triggered by those events depend on object-specific data.\nIt is used extensively by add-on packages to provide interactivity for chart components."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_DataComponent_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"event-handlers",children:"Event handlers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DataComponent"})," can be used to handle events on multiple components with a single handler function."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Event handlers should be prepared as functions that accept two arguments: a data object and a mouse event object."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:"\n  const customOnClick = (data, event) => {\n  ...\n  }\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["In the example below, a single ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"customOnClick"})," function is associated with two different components (circles)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_DataComponent_stories__WEBPACK_IMPORTED_MODULE_4__.ClickEvents}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["(Click on a circle, then check the browser console with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Ctrl Shift J"})," for output.)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"style-modifiers",children:"Style modifiers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_DataComponent_stories__WEBPACK_IMPORTED_MODULE_4__.StyleModifiers}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"custom-implementations",children:"Custom implementations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["One use for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DataComponent"})," is to implement custom changes to element colors and styles."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["In add-on packages, e.g. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@chsk/xy"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@chsk/band"}),", some chart components are assigned\nfill and stroke colors automatically. These colors override settings in the chart theme.\nIn particular, it is not possible to use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:":hover"})," styles in the chart theme to toggle these\ncolors upon mouse events. Instead, such tuning can be made in custom implementations\nof ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DataComponent"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The example below changes the circle stroke color in response to mouse events.\nHover the mouse pointer and click on the circles, and observe changes to the outlines."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_DataComponent_stories__WEBPACK_IMPORTED_MODULE_4__.CustomImplementation}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The above example uses a custom function ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CustomDataComponent"})," that is a stand-in for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DataComponent"}),".\nThe full code is available ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/tkonopka/chsk/blob/main/packages/core/stories/components/interactivity/CustomDataComponent.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]})]})}}}}]);