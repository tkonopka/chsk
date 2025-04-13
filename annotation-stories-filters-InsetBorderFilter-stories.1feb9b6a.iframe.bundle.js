"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[5149],{"./packages/annotation/src/filters/InsetBorderFilter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>InsetBorderFilter});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),InsetBorderFilter=function InsetBorderFilter(_ref){var id=_ref.id,_ref$r=_ref.r,r=void 0===_ref$r?1:_ref$r,_ref$erodeR=_ref.erodeR,erodeR=void 0===_ref$erodeR?0:_ref$erodeR,_ref$floodColor=_ref.floodColor,floodColor=void 0===_ref$floodColor?"#000000":_ref$floodColor,_ref$floodOpacity=_ref.floodOpacity,floodOpacity=void 0===_ref$floodOpacity?.5:_ref$floodOpacity;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter",{id,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology",{in:"SourceGraphic",operator:"erode",radius:r,result:id+"-in"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology",{in:"SourceGraphic",operator:"erode",radius:erodeR,result:id+"-erode"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood",{floodColor,floodOpacity,result:id+"-color"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"out",in:id+"-erode",in2:id+"-in",result:id+"-boundary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"in",in:id+"-color",in2:id+"-boundary",result:id+"-mask"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"over",in:id+"-mask",in2:"SourceGraphic"})]})};try{InsetBorderFilter.displayName="InsetBorderFilter",InsetBorderFilter.__docgenInfo={description:"",displayName:"InsetBorderFilter",props:{erodeR:{defaultValue:{value:"0"},description:"",name:"erodeR",required:!1,type:{name:"number"}},r:{defaultValue:{value:"1"},description:"",name:"r",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.5"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/InsetBorderFilter.tsx#InsetBorderFilter"]={docgenInfo:InsetBorderFilter.__docgenInfo,name:"InsetBorderFilter",path:"packages/annotation/src/filters/InsetBorderFilter.tsx#InsetBorderFilter"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/filters/InsetBorderFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Darker:()=>Darker,Inset:()=>Inset,Lighter:()=>Lighter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src_filters__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/filters/InsetBorderFilter.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Filters/InsetBorderFilter",component:_src_filters__WEBPACK_IMPORTED_MODULE_1__.c},Lighter={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.c,{id:"lighter-border",floodColor:"#ffffff",r:8}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999",filter:"url(#lighter-border)"}})]}),name:"lighter"},Darker={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.c,{id:"darker-border",floodColor:"#222222",r:8}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999",filter:"url(#darker-border)"}})]}),name:"darker"},Inset={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.c,{id:"inset-lighter-border",erodeR:3,r:8,floodColor:"#ffffff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999",filter:"url(#inset-lighter-border)"}})]}),name:"inset"},__namedExportsOrder=["Lighter","Darker","Inset"];Lighter.parameters={...Lighter.parameters,docs:{...Lighter.parameters?.docs,source:{originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetBorderFilter id={'lighter-border'} floodColor={'#ffffff'} r={8} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999',\n      filter: 'url(#lighter-border)'\n    }} />\n        </Chart>,\n  name: 'lighter'\n}",...Lighter.parameters?.docs?.source}}},Darker.parameters={...Darker.parameters,docs:{...Darker.parameters?.docs,source:{originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetBorderFilter id={'darker-border'} floodColor={'#222222'} r={8} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999',\n      filter: 'url(#darker-border)'\n    }} />\n        </Chart>,\n  name: 'darker'\n}",...Darker.parameters?.docs?.source}}},Inset.parameters={...Inset.parameters,docs:{...Inset.parameters?.docs,source:{originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetBorderFilter id={'inset-lighter-border'} erodeR={3} r={8} floodColor={'#ffffff'} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999',\n      filter: 'url(#inset-lighter-border)'\n    }} />\n        </Chart>,\n  name: 'inset'\n}",...Inset.parameters?.docs?.source}}}}}]);