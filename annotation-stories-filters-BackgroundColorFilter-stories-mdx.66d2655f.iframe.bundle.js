"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4955],{"./packages/annotation/src/filters/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>BackgroundColorFilter_BackgroundColorFilter,T0:()=>BlurFilter_BlurFilter,cs:()=>InsetBorderFilter_InsetBorderFilter,IQ:()=>InsetColorFilter_InsetColorFilter,O7:()=>InsetShadowFilter_InsetShadowFilter});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BackgroundColorFilter_BackgroundColorFilter=function BackgroundColorFilter(_ref){var id=_ref.id,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?[0,0,0,0]:_ref$expansion,_ref$floodColor=_ref.floodColor,floodColor=void 0===_ref$floodColor?"#000000":_ref$floodColor,_ref$floodOpacity=_ref.floodOpacity,floodOpacity=void 0===_ref$floodOpacity?1:_ref$floodOpacity;return(0,jsx_runtime.jsxs)("filter",{id,x:-expansion[chsk_core_es.RLj],y:-expansion[chsk_core_es.GSB],width:1+expansion[chsk_core_es.RLj]+expansion[chsk_core_es.pXp],height:1+expansion[chsk_core_es.GSB]+expansion[chsk_core_es.DaS],children:[(0,jsx_runtime.jsx)("feFlood",{floodColor,floodOpacity}),(0,jsx_runtime.jsx)("feComposite",{operator:"over",in:"SourceGraphic"})]})};BackgroundColorFilter_BackgroundColorFilter.displayName="BackgroundColorFilter";try{BackgroundColorFilter_BackgroundColorFilter.displayName="BackgroundColorFilter",BackgroundColorFilter_BackgroundColorFilter.__docgenInfo={description:"",displayName:"BackgroundColorFilter",props:{expansion:{defaultValue:{value:"[0, 0, 0, 0]"},description:"",name:"expansion",required:!1,type:{name:"FourSideSizeSpec"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"1"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/BackgroundColorFilter.tsx#BackgroundColorFilter"]={docgenInfo:BackgroundColorFilter_BackgroundColorFilter.__docgenInfo,name:"BackgroundColorFilter",path:"packages/annotation/src/filters/BackgroundColorFilter.tsx#BackgroundColorFilter"})}catch(__react_docgen_typescript_loader_error){}var BlurFilter_BlurFilter=function BlurFilter(_ref){var id=_ref.id,_ref$blurStdDeviation=_ref.blurStdDeviation,blurStdDeviation=void 0===_ref$blurStdDeviation?5:_ref$blurStdDeviation;return(0,jsx_runtime.jsx)("filter",{id,children:(0,jsx_runtime.jsx)("feGaussianBlur",{stdDeviation:blurStdDeviation})})};BlurFilter_BlurFilter.displayName="BlurFilter";try{BlurFilter_BlurFilter.displayName="BlurFilter",BlurFilter_BlurFilter.__docgenInfo={description:"",displayName:"BlurFilter",props:{blurStdDeviation:{defaultValue:{value:"5"},description:"",name:"blurStdDeviation",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/BlurFilter.tsx#BlurFilter"]={docgenInfo:BlurFilter_BlurFilter.__docgenInfo,name:"BlurFilter",path:"packages/annotation/src/filters/BlurFilter.tsx#BlurFilter"})}catch(__react_docgen_typescript_loader_error){}var InsetBorderFilter_InsetBorderFilter=function InsetBorderFilter(_ref){var id=_ref.id,_ref$r=_ref.r,r=void 0===_ref$r?1:_ref$r,_ref$erodeR=_ref.erodeR,erodeR=void 0===_ref$erodeR?0:_ref$erodeR,_ref$floodColor=_ref.floodColor,floodColor=void 0===_ref$floodColor?"#000000":_ref$floodColor,_ref$floodOpacity=_ref.floodOpacity,floodOpacity=void 0===_ref$floodOpacity?.5:_ref$floodOpacity;return(0,jsx_runtime.jsxs)("filter",{id,children:[(0,jsx_runtime.jsx)("feMorphology",{in:"SourceGraphic",operator:"erode",radius:r,result:id+"-in"}),(0,jsx_runtime.jsx)("feMorphology",{in:"SourceGraphic",operator:"erode",radius:erodeR,result:id+"-erode"}),(0,jsx_runtime.jsx)("feFlood",{floodColor,floodOpacity,result:id+"-color"}),(0,jsx_runtime.jsx)("feComposite",{operator:"out",in:id+"-erode",in2:id+"-in",result:id+"-boundary"}),(0,jsx_runtime.jsx)("feComposite",{operator:"in",in:id+"-color",in2:id+"-boundary",result:id+"-mask"}),(0,jsx_runtime.jsx)("feComposite",{operator:"over",in:id+"-mask",in2:"SourceGraphic"})]})};InsetBorderFilter_InsetBorderFilter.displayName="InsetBorderFilter";try{InsetBorderFilter_InsetBorderFilter.displayName="InsetBorderFilter",InsetBorderFilter_InsetBorderFilter.__docgenInfo={description:"",displayName:"InsetBorderFilter",props:{erodeR:{defaultValue:{value:"0"},description:"",name:"erodeR",required:!1,type:{name:"number"}},r:{defaultValue:{value:"1"},description:"",name:"r",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.5"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/InsetBorderFilter.tsx#InsetBorderFilter"]={docgenInfo:InsetBorderFilter_InsetBorderFilter.__docgenInfo,name:"InsetBorderFilter",path:"packages/annotation/src/filters/InsetBorderFilter.tsx#InsetBorderFilter"})}catch(__react_docgen_typescript_loader_error){}var InsetColorFilter_InsetColorFilter=function InsetColorFilter(_ref){var id=_ref.id,_ref$erodeR=_ref.erodeR,erodeR=void 0===_ref$erodeR?0:_ref$erodeR,_ref$floodColor=_ref.floodColor,floodColor=void 0===_ref$floodColor?"#000000":_ref$floodColor,_ref$floodOpacity=_ref.floodOpacity,floodOpacity=void 0===_ref$floodOpacity?.5:_ref$floodOpacity;return(0,jsx_runtime.jsxs)("filter",{id,children:[(0,jsx_runtime.jsx)("feMorphology",{operator:"erode",radius:erodeR,result:id+"-erode"}),(0,jsx_runtime.jsx)("feFlood",{floodColor,floodOpacity,result:id+"-color"}),(0,jsx_runtime.jsx)("feComposite",{operator:"in",in:id+"-color",in2:id+"-erode",result:id+"-mask"}),(0,jsx_runtime.jsx)("feComposite",{operator:"over",in:id+"-mask",in2:"SourceGraphic"})]})};InsetColorFilter_InsetColorFilter.displayName="InsetColorFilter";try{InsetColorFilter_InsetColorFilter.displayName="InsetColorFilter",InsetColorFilter_InsetColorFilter.__docgenInfo={description:"",displayName:"InsetColorFilter",props:{erodeR:{defaultValue:{value:"0"},description:"",name:"erodeR",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.5"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/InsetColorFilter.tsx#InsetColorFilter"]={docgenInfo:InsetColorFilter_InsetColorFilter.__docgenInfo,name:"InsetColorFilter",path:"packages/annotation/src/filters/InsetColorFilter.tsx#InsetColorFilter"})}catch(__react_docgen_typescript_loader_error){}var InsetShadowFilter_InsetShadowFilter=function InsetShadowFilter(_ref){var id=_ref.id,_ref$blurStdDeviation=_ref.blurStdDeviation,blurStdDeviation=void 0===_ref$blurStdDeviation?5:_ref$blurStdDeviation,_ref$floodColor=_ref.floodColor,floodColor=void 0===_ref$floodColor?"#000000":_ref$floodColor,_ref$floodOpacity=_ref.floodOpacity,floodOpacity=void 0===_ref$floodOpacity?.9:_ref$floodOpacity;return(0,jsx_runtime.jsxs)("filter",{id,children:[(0,jsx_runtime.jsx)("feGaussianBlur",{stdDeviation:blurStdDeviation,result:id+"-blur"}),(0,jsx_runtime.jsx)("feComposite",{operator:"out",in:"SourceGraphic",in2:id+"-blur",result:id+"-inverse"}),(0,jsx_runtime.jsx)("feFlood",{floodColor,floodOpacity,result:id+"-color"}),(0,jsx_runtime.jsx)("feComposite",{operator:"in",in:id+"-color",in2:id+"-inverse",result:id+"-shadow"}),(0,jsx_runtime.jsx)("feComposite",{operator:"over",in:id+"-shadow",in2:"SourceGraphic"})]})};InsetShadowFilter_InsetShadowFilter.displayName="InsetShadowFilter";try{InsetShadowFilter_InsetShadowFilter.displayName="InsetShadowFilter",InsetShadowFilter_InsetShadowFilter.__docgenInfo={description:"",displayName:"InsetShadowFilter",props:{blurStdDeviation:{defaultValue:{value:"5"},description:"",name:"blurStdDeviation",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.9"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/InsetShadowFilter.tsx#InsetShadowFilter"]={docgenInfo:InsetShadowFilter_InsetShadowFilter.__docgenInfo,name:"InsetShadowFilter",path:"packages/annotation/src/filters/InsetShadowFilter.tsx#InsetShadowFilter"})}catch(__react_docgen_typescript_loader_error){}try{BackgroundColorFilter.displayName="BackgroundColorFilter",BackgroundColorFilter.__docgenInfo={description:"",displayName:"BackgroundColorFilter",props:{expansion:{defaultValue:{value:"[0, 0, 0, 0]"},description:"",name:"expansion",required:!1,type:{name:"FourSideSizeSpec"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"1"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/index.tsx#BackgroundColorFilter"]={docgenInfo:BackgroundColorFilter.__docgenInfo,name:"BackgroundColorFilter",path:"packages/annotation/src/filters/index.tsx#BackgroundColorFilter"})}catch(__react_docgen_typescript_loader_error){}try{BlurFilter.displayName="BlurFilter",BlurFilter.__docgenInfo={description:"",displayName:"BlurFilter",props:{blurStdDeviation:{defaultValue:{value:"5"},description:"",name:"blurStdDeviation",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/index.tsx#BlurFilter"]={docgenInfo:BlurFilter.__docgenInfo,name:"BlurFilter",path:"packages/annotation/src/filters/index.tsx#BlurFilter"})}catch(__react_docgen_typescript_loader_error){}try{InsetBorderFilter.displayName="InsetBorderFilter",InsetBorderFilter.__docgenInfo={description:"",displayName:"InsetBorderFilter",props:{erodeR:{defaultValue:{value:"0"},description:"",name:"erodeR",required:!1,type:{name:"number"}},r:{defaultValue:{value:"1"},description:"",name:"r",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.5"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/index.tsx#InsetBorderFilter"]={docgenInfo:InsetBorderFilter.__docgenInfo,name:"InsetBorderFilter",path:"packages/annotation/src/filters/index.tsx#InsetBorderFilter"})}catch(__react_docgen_typescript_loader_error){}try{InsetColorFilter.displayName="InsetColorFilter",InsetColorFilter.__docgenInfo={description:"",displayName:"InsetColorFilter",props:{erodeR:{defaultValue:{value:"0"},description:"",name:"erodeR",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.5"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/index.tsx#InsetColorFilter"]={docgenInfo:InsetColorFilter.__docgenInfo,name:"InsetColorFilter",path:"packages/annotation/src/filters/index.tsx#InsetColorFilter"})}catch(__react_docgen_typescript_loader_error){}try{InsetShadowFilter.displayName="InsetShadowFilter",InsetShadowFilter.__docgenInfo={description:"",displayName:"InsetShadowFilter",props:{blurStdDeviation:{defaultValue:{value:"5"},description:"",name:"blurStdDeviation",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.9"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/index.tsx#InsetShadowFilter"]={docgenInfo:InsetShadowFilter.__docgenInfo,name:"InsetShadowFilter",path:"packages/annotation/src/filters/index.tsx#InsetShadowFilter"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/filters/BackgroundColorFilter.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,color:()=>color,default:()=>__WEBPACK_DEFAULT_EXPORT__,expansion:()=>expansion,opacity:()=>opacity});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src_filters__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/annotation/src/filters/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_3__.o,{...args});const color=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,120],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_3__.o,{id:"bgColor",floodColor:"#ffffff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:0,y:0,width:120,height:80,style:{fill:"#d0d0dd"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.ZT$,{position:[120,40],style:{fill:"#aa2222",filter:"url(#bgColor)",fontSize:"16px",textAnchor:"middle"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:["This is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tspan",{style:{fontWeight:600},children:"important"})," text."]})})]});color.storyName="color",color.parameters={storySource:{source:'<Chart size={[280, 120]} padding={[20, 20, 20, 20]} style={{\n  display: "inline-block"\n}}><Surface /><BackgroundColorFilter id={"bgColor"} floodColor={"#ffffff"} /><Rectangle x={0} y={0} width={120} height={80} style={{\n    fill: "#d0d0dd"\n  }} /><Typography position={[120, 40]} style={{\n    fill: "#aa2222",\n    filter: "url(#bgColor)",\n    fontSize: "16px",\n    textAnchor: "middle"\n  }} children={<>\n                        This is <tspan style={{\n      fontWeight: 600\n    }}>important</tspan> text.\n                    </>} /></Chart>'}};const opacity=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,120],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_3__.o,{id:"bgOpacity",floodColor:"#ffffff",floodOpacity:.6}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:0,y:0,width:120,height:80,style:{fill:"#d0d0dd"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.ZT$,{position:[120,40],style:{fill:"#aa2222",filter:"url(#bgOpacity)",fontSize:"16px",textAnchor:"middle"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:["This is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tspan",{style:{fontWeight:600},children:"important"})," text."]})})]});opacity.storyName="opacity",opacity.parameters={storySource:{source:'<Chart size={[280, 120]} padding={[20, 20, 20, 20]} style={{\n  display: "inline-block"\n}}><Surface /><BackgroundColorFilter id={"bgOpacity"} floodColor={"#ffffff"} floodOpacity={0.6} /><Rectangle x={0} y={0} width={120} height={80} style={{\n    fill: "#d0d0dd"\n  }} /><Typography position={[120, 40]} style={{\n    fill: "#aa2222",\n    filter: "url(#bgOpacity)",\n    fontSize: "16px",\n    textAnchor: "middle"\n  }} children={<>\n                        This is <tspan style={{\n      fontWeight: 600\n    }}>important</tspan> text.\n                    </>} /></Chart>'}};const expansion=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,120],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_3__.o,{id:"bgExpansion",floodColor:"#ffffff",floodOpacity:.7,expansion:[.3,0,.3,0]},"bgExpansionFilter"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:0,y:0,width:120,height:80,style:{fill:"#d0d0dd"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.ZT$,{position:[120,40],style:{fill:"#aa2222",filter:"url(#bgExpansion)",fontSize:"16px",textAnchor:"middle"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:["This is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tspan",{style:{fontWeight:600},children:"important"})," text."]})})]});expansion.storyName="expansion",expansion.parameters={storySource:{source:'<Chart size={[280, 120]} padding={[20, 20, 20, 20]} style={{\n  display: "inline-block"\n}}><Surface /><BackgroundColorFilter key={"bgExpansionFilter"} id={"bgExpansion"} floodColor={"#ffffff"} floodOpacity={0.7} expansion={[0.3, 0, 0.3, 0]} /><Rectangle x={0} y={0} width={120} height={80} style={{\n    fill: "#d0d0dd"\n  }} /><Typography position={[120, 40]} style={{\n    fill: "#aa2222",\n    filter: "url(#bgExpansion)",\n    fontSize: "16px",\n    textAnchor: "middle"\n  }} children={<>\n                        This is <tspan style={{\n      fontWeight: 600\n    }}>important</tspan> text.\n                    </>} /></Chart>'}};const componentMeta={title:"Addons/Annotation/Filters/BackgroundColorFilter",tags:["stories-mdx"],includeStories:["color","opacity","expansion"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",tspan:"tspan"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/Annotation/Filters/BackgroundColorFilter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"backgroundcolorfilter",children:"BackgroundColorFilter"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"BackgroundColorFilter"})," creates an svg filter that applies a solid background color."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src_filters__WEBPACK_IMPORTED_MODULE_3__.o}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"color-and-opacity",children:"Color and opacity"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"floodColor"})," determines the background color.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"floodOpacity"})," determines the opacity of the filter."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"color",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,120],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_3__.o,{id:"bgColor",floodColor:"#ffffff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:0,y:0,width:120,height:80,style:{fill:"#d0d0dd"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.ZT$,{position:[120,40],style:{fill:"#aa2222",filter:"url(#bgColor)",fontSize:"16px",textAnchor:"middle"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:["This is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.tspan,{style:{fontWeight:600},children:"important"})," text."]})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"opacity",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,120],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_3__.o,{id:"bgOpacity",floodColor:"#ffffff",floodOpacity:.6}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:0,y:0,width:120,height:80,style:{fill:"#d0d0dd"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.ZT$,{position:[120,40],style:{fill:"#aa2222",filter:"url(#bgOpacity)",fontSize:"16px",textAnchor:"middle"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:["This is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.tspan,{style:{fontWeight:600},children:"important"})," text."]})})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"expansion",children:"Expansion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"expansion"})," takes a four-element array that expands the background color around the\nelement. The array entries determine expansion along the top, right, bottom, and left sides.\nValues are interpreted as fractions of the object's dimensions."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"expansion",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,120],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_3__.o,{id:"bgExpansion",floodColor:"#ffffff",floodOpacity:.7,expansion:[.3,0,.3,0]},"bgExpansionFilter"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:0,y:0,width:120,height:80,style:{fill:"#d0d0dd"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.ZT$,{position:[120,40],style:{fill:"#aa2222",filter:"url(#bgExpansion)",fontSize:"16px",textAnchor:"middle"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:["This is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.tspan,{style:{fontWeight:600},children:"important"})," text."]})})]})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Unfortunately, it is not possible to use svg filters to expand a fixed number of pixels around the text."})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);