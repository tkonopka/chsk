"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8405,5928],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/matrix/stories/upsets/UpSet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BackgroundStripes:()=>BackgroundStripes,Default:()=>Default,LargePadding:()=>LargePadding,Outline:()=>Outline,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Vertical$parameters,_Vertical$parameters2,_Vertical$parameters3,_LargePadding$paramet,_LargePadding$paramet2,_LargePadding$paramet3,_Outline$parameters,_Outline$parameters2,_Outline$parameters2$,_BackgroundStripes$pa,_BackgroundStripes$pa2,_BackgroundStripes$pa3,_chsk_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/matrix/src/upset/UpSet.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/matrix/src/upset/UpSetGrid.tsx"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/matrix/src/heatmap/HeatMapSurface.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/matrix/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var rowExpansion=[[.625,.625],[.625,.625]],outlineStyle={fillOpacity:0,stroke:"#2222dd",strokeWidth:4},rowStyleOdd={fill:"#f2f2f2"},rowStyleEven={fill:"#dedede"};const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Matrix/UpSets/UpSet",component:_src__WEBPACK_IMPORTED_MODULE_1__.F};var Default={name:"default",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.w,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.RDh,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.h,{symbolStyle:{fill:"#ccc"}})]})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},Vertical={name:"vertical",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.w,{horizontal:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.RDh,{variant:"top"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.h,{symbolStyle:{fill:"#ccc"}})]})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},LargePadding={name:"large padding",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.w,{scaleIndex:{variant:"band",padding:.5},scaleMembership:{variant:"band",padding:.5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.RDh,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.h,{symbolStyle:{fill:"#ccc"}})]})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},Outline={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.kL2,{size:[400,300],padding:[40,40,40,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.F,_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.w,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.RDh,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.h,{symbolStyle:{fill:"#ccc"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.j,{expansion:rowExpansion,style:outlineStyle})]}))})},name:"outline"},BackgroundStripes={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.kL2,{size:[400,300],padding:[40,40,40,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.F,_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.w,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.RDh,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.j,{ids:["alpha"],expansion:rowExpansion,style:rowStyleOdd}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.j,{ids:["beta"],expansion:rowExpansion,style:rowStyleEven}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.j,{ids:["gamma"],expansion:rowExpansion,style:rowStyleOdd}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.j,{ids:["delta"],expansion:rowExpansion,style:rowStyleEven}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.h,{symbolStyle:{fill:"#ccc"}})]}))})},name:"background stripes"};Default.parameters=_extends({},Default.parameters,{docs:_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:_extends({originalSource:"{\n  name: 'default',\n  args: {\n    ...commonUpSetProps,\n    children: <>\n                <Axis variant=\"left\" />\n                <UpSetGrid symbolStyle={{\n        fill: '#ccc'\n      }} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source)})}),Vertical.parameters=_extends({},Vertical.parameters,{docs:_extends({},null==(_Vertical$parameters=Vertical.parameters)?void 0:_Vertical$parameters.docs,{source:_extends({originalSource:"{\n  name: 'vertical',\n  args: {\n    ...commonUpSetProps,\n    horizontal: false,\n    children: <>\n                <Axis variant=\"top\" />\n                <UpSetGrid symbolStyle={{\n        fill: '#ccc'\n      }} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Vertical$parameters2=Vertical.parameters)||null==(_Vertical$parameters3=_Vertical$parameters2.docs)?void 0:_Vertical$parameters3.source)})}),LargePadding.parameters=_extends({},LargePadding.parameters,{docs:_extends({},null==(_LargePadding$paramet=LargePadding.parameters)?void 0:_LargePadding$paramet.docs,{source:_extends({originalSource:"{\n  name: 'large padding',\n  args: {\n    ...commonUpSetProps,\n    scaleIndex: {\n      variant: 'band',\n      padding: 0.5\n    },\n    scaleMembership: {\n      variant: 'band',\n      padding: 0.5\n    },\n    children: <>\n                <Axis variant=\"left\" />\n                <UpSetGrid symbolStyle={{\n        fill: '#ccc'\n      }} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_LargePadding$paramet2=LargePadding.parameters)||null==(_LargePadding$paramet3=_LargePadding$paramet2.docs)?void 0:_LargePadding$paramet3.source)})}),Outline.parameters=_extends({},Outline.parameters,{docs:_extends({},null==(_Outline$parameters=Outline.parameters)?void 0:_Outline$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 40, 60]} style={{\n    display: 'inline-block'\n  }}>\n            <UpSet {...commonUpSetProps}>\n                <Axis variant=\"left\" />\n                <UpSetGrid symbolStyle={{\n        fill: '#ccc'\n      }} />\n                <HeatMapSurface expansion={rowExpansion} style={outlineStyle} />\n            </UpSet>\n        </Chart>,\n  name: 'outline'\n}"},null==(_Outline$parameters2=Outline.parameters)||null==(_Outline$parameters2$=_Outline$parameters2.docs)?void 0:_Outline$parameters2$.source)})}),BackgroundStripes.parameters=_extends({},BackgroundStripes.parameters,{docs:_extends({},null==(_BackgroundStripes$pa=BackgroundStripes.parameters)?void 0:_BackgroundStripes$pa.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 40, 60]} style={{\n    display: 'inline-block'\n  }}>\n            <UpSet {...commonUpSetProps}>\n                <Axis variant=\"left\" />\n                <HeatMapSurface ids={['alpha']} expansion={rowExpansion} style={rowStyleOdd} />\n                <HeatMapSurface ids={['beta']} expansion={rowExpansion} style={rowStyleEven} />\n                <HeatMapSurface ids={['gamma']} expansion={rowExpansion} style={rowStyleOdd} />\n                <HeatMapSurface ids={['delta']} expansion={rowExpansion} style={rowStyleEven} />\n                <UpSetGrid symbolStyle={{\n        fill: '#ccc'\n      }} />\n            </UpSet>\n        </Chart>,\n  name: 'background stripes'\n}"},null==(_BackgroundStripes$pa2=BackgroundStripes.parameters)||null==(_BackgroundStripes$pa3=_BackgroundStripes$pa2.docs)?void 0:_BackgroundStripes$pa3.source)})});var __namedExportsOrder=["Default","Vertical","LargePadding","Outline","BackgroundStripes"]},"./packages/matrix/src/heatmap/HeatMapSurface.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>HeatMapSurface});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),getInterval=function getInterval(targets,scale,expansion){var bandwidth=scale.bandwidth(),values=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.FG_)(Array.from(targets).map(scale));return[values[0]-expansion[0]*bandwidth,values[1]+expansion[1]*bandwidth]},HeatMapSurface=function HeatMapSurface(_ref){var ids=_ref.ids,keys=_ref.keys,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?[[0,0],[0,0]]:_ref$expansion,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0!==_ref$setRole&&_ref$setRole,style=_ref.style,processedData=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.wIO)(),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE1)().scales,_useIdsKeys=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.lRm)(ids,keys,processedData),idSet=_useIdsKeys.idSet,keySet=_useIdsKeys.keySet;if(0===idSet.size||0===keySet.size)return null;var idInterval=getInterval(idSet,scales.y,expansion[0]),keyInterval=getInterval(keySet,scales.x,expansion[1]),compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.gjB)("heatmapSurface",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{role:"heatmap-surface",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.rect,{x:keyInterval[0],width:keyInterval[1]-keyInterval[0],y:idInterval[0],height:idInterval[1]-idInterval[0],role:setRole?"heatmap-surface":void 0,className:compositeClassName,style},"surface-"+Array.from(idSet).join(",")+"-"+Array.from(keySet).join(","))})};HeatMapSurface.displayName="HeatMapSurface";try{HeatMapSurface.displayName="HeatMapSurface",HeatMapSurface.__docgenInfo={description:"",displayName:"HeatMapSurface",props:{ids:{defaultValue:null,description:"interval of ids",name:"ids",required:!1,type:{name:"string[]"}},keys:{defaultValue:null,description:"interval of keys",name:"keys",required:!1,type:{name:"string[]"}},expansion:{defaultValue:{value:"[\n        [0, 0],\n        [0, 0],\n    ]"},description:"expansion along the ids and keys axes",name:"expansion",required:!1,type:{name:"[[number, number], [number, number]]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"false"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"activate interactive features",name:"interactive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/heatmap/HeatMapSurface.tsx#HeatMapSurface"]={docgenInfo:HeatMapSurface.__docgenInfo,name:"HeatMapSurface",path:"packages/matrix/src/heatmap/HeatMapSurface.tsx#HeatMapSurface"})}catch(__react_docgen_typescript_loader_error){}},"./packages/matrix/stories/upsets/UpSet.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_UpSet_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/matrix/stories/upsets/UpSet.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"upset",children:"UpSet"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_UpSet_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"UpSet"})," sets up a view for an upset chart, which summarizes relationships between sets.\nThe chart design is motivated and explained ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://upset.app/",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"UpSet"})," component does not draw any visible elements;\nit only pre-processes a dataset so that it can be visualized with other components, for example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"UpSetMemberships"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"UpSetGrid"}),".\nThe examples on this page use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"UpSetGrid"})," in order to display the effect of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"UpSet"})," settings on child elements."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_UpSet_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Data should be prepared as an array of objects that represent sets.\nThe objects should contain a string identifier ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"id"})," and an array ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data"})," holding the unique elements of the set."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The pseudocode below shows one object with a data array that contains four strings."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:"\n  [\n  {\n   \"id\": \"alpha\",\n   \"data\": ['a', 'b', 'c', 'd'],\n  },\n  ...\n  ]\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"orientation",children:"Orientation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"UpSet"})," charts can be arranged horizontally (default) or vertically.\nThe orientation is toggled with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"horizontal"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_UpSet_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_UpSet_stories__WEBPACK_IMPORTED_MODULE_4__.Vertical}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"symbol-size",children:"Symbol size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Symbols are sized automatically to fill the space available in each row / column. The apparent size can be tuned, however, by adjusting the padding for the x-axis and y-axis band scales."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_UpSet_stories__WEBPACK_IMPORTED_MODULE_4__.LargePadding}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h2,{id:"heatmap-components",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMap"})," components"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Some components designed for heat maps can also be used within ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"UpSet"})," views.\nIn particular, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMapSurface"})," can provide outlines or background colors for the UpSet grid."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_UpSet_stories__WEBPACK_IMPORTED_MODULE_4__.Outline}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_UpSet_stories__WEBPACK_IMPORTED_MODULE_4__.BackgroundStripes})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);