"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3375],{"./packages/themes/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ss:()=>boxedViewTheme,Ee:()=>buttonTheme,uH:()=>complete.uH,bh:()=>faintTicksTheme,f8:()=>fontSystemUITheme,oh:()=>inverseGridTheme,t7:()=>smallAxisTextTheme,JR:()=>tooltipItemLabelValueTheme});var complete=__webpack_require__("./packages/themes/src/complete/index.ts"),boxedViewTheme={line:{tick:{stroke:"#222222",strokeWidth:1}},rect:{inner:{stroke:"#222222",strokeWidth:"1px"}},Axis:{top:{distance:10},right:{distance:10},bottom:{distance:10},left:{distance:10}},AxisLabel:{bottom:{distance:36},left:{distance:46}},Surface:{inner:{expansion:[10,10,10,10]}}},faintTicksTheme={text:{tickLabel:{fill:"#777777"}},line:{tick:{stroke:"#666666",strokeWidth:1}}},fontSystemUITheme={text:{default:{fontFamily:"system-ui"}}},inverseGridTheme={line:{grid:{stroke:"#ffffff",strokeWidth:2}},rect:{inner:{fill:"#f0f0f0"}}},chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),smallAxisTextTheme={text:{axisLabel:{fontSize:"10px"},tickLabel:{fontSize:"10px"}},AxisLabel:{top:{distance:chsk_core_es.txD.distance-5},bottom:{distance:chsk_core_es.jNX.distance-5},left:{distance:chsk_core_es.QCr.distance-5},right:{distance:chsk_core_es.wPC.distance-5}},AxisTicks:{top:{labelDistance:chsk_core_es.Gj2.labelDistance-1},bottom:{labelDistance:chsk_core_es.Gj2.labelDistance-1},left:{labelDistance:chsk_core_es.Gj2.labelDistance-1},right:{labelDistance:chsk_core_es.Gj2.labelDistance-1}}},buttonTheme={text:{button:{dominantBaseline:"central",fill:"#555555",fontFamily:"sans-serif",fontSize:"11px",textAnchor:"start"}},path:{button:{cursor:"pointer",strokeWidth:0,fill:"#555555",fillOpacity:1,pointerEvents:"none"}},rect:{button:{cursor:"pointer"},"button.bg":{fill:"#eeeeee",fillOpacity:0},"button.bg:hover":{fillOpacity:1},"button.bg.selected":{fill:"#dddddd",fillOpacity:.7},"button.bg.selected:hover":{fillOpacity:1}}},tooltipItemLabelValueTheme={text:{"tooltipItem.label":{textAnchor:"start",dominantBaseline:"central"},"tooltipItem.value":{textAnchor:"start",fontWeight:600,dominantBaseline:"central"}}}},"./packages/themes/stories/pieces/pieces.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{button:()=>pieces_stories_button,default:()=>pieces_stories,tooltipItemLabelAndValue:()=>tooltipItemLabelAndValue});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),src=__webpack_require__("./packages/themes/src/index.ts"),ThemeController=__webpack_require__("./packages/themes/stories/ThemeController.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ButtonExample=function ButtonExample(_ref){var chartId=_ref.chartId,theme=_ref.theme;return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,_extends({id:chartId},ThemeController.y,{theme:null!=theme?theme:void 0,children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{children:[(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:60,y:60,width:40,height:40,style:{fill:"#dd4444"},className:"button"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[110,80],className:"button",children:"button"}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:60,y:120,width:40,height:40,style:{fill:"#dd4444",stroke:"#000000",strokeWidth:1},className:"button bg"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[110,140],className:"button",children:"button bg"}),(0,jsx_runtime.jsx)(chsk_core_es.y$t,{points:[[20,20],[40,60],[70,30]],className:"button"})]})]}))};ButtonExample.displayName="ButtonExample";var TooltipItemLabelValueExample=function TooltipItemLabelValueExample(_ref2){var chartId=_ref2.chartId,theme=_ref2.theme;return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,_extends({id:chartId},ThemeController.y,{theme:null!=theme?theme:void 0,children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{children:[(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:30,y:40,width:120,height:40,style:{fillOpacity:0,stroke:"#dd0000",strokeWidth:1}}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[40,60],className:"tooltipItem label",children:"key:"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[70,60],className:"tooltipItem value",children:"value"})]})]}))};TooltipItemLabelValueExample.displayName="TooltipItemLabelValueExample";try{ButtonExample.displayName="ButtonExample",ButtonExample.__docgenInfo={description:"",displayName:"ButtonExample",props:{chartId:{defaultValue:null,description:"id for chart",name:"chartId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"theme",name:"theme",required:!0,type:{name:"ThemeSpec | null"}},baseTheme:{defaultValue:null,description:"base theme",name:"baseTheme",required:!1,type:{name:"CompleteThemeSpec | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/themes/stories/pieces/examples.tsx#ButtonExample"]={docgenInfo:ButtonExample.__docgenInfo,name:"ButtonExample",path:"packages/themes/stories/pieces/examples.tsx#ButtonExample"})}catch(__react_docgen_typescript_loader_error){}try{TooltipItemLabelValueExample.displayName="TooltipItemLabelValueExample",TooltipItemLabelValueExample.__docgenInfo={description:"",displayName:"TooltipItemLabelValueExample",props:{chartId:{defaultValue:null,description:"id for chart",name:"chartId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"theme",name:"theme",required:!0,type:{name:"ThemeSpec | null"}},baseTheme:{defaultValue:null,description:"base theme",name:"baseTheme",required:!1,type:{name:"CompleteThemeSpec | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/themes/stories/pieces/examples.tsx#TooltipItemLabelValueExample"]={docgenInfo:TooltipItemLabelValueExample.__docgenInfo,name:"TooltipItemLabelValueExample",path:"packages/themes/stories/pieces/examples.tsx#TooltipItemLabelValueExample"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./packages/themes/stories/complete/ThemeScatterChart.tsx");const pieces_stories_button=()=>(0,jsx_runtime.jsx)(ThemeController.u,{chart:ButtonExample,chartId:"button",themes:{buttonTheme:src.Ee,defaultTheme:src.uH}});pieces_stories_button.storyName="button",pieces_stories_button.parameters={storySource:{source:'<ThemeController chart={ButtonExample} chartId={"button"} themes={{\n  buttonTheme,\n  defaultTheme\n}} />'}};const tooltipItemLabelAndValue=()=>(0,jsx_runtime.jsx)(ThemeController.u,{chart:TooltipItemLabelValueExample,chartId:"tooltipItemLabelValue",themes:{tooltipItemLabelValueTheme:src.JR,defaultTheme:src.uH}});tooltipItemLabelAndValue.storyName="tooltip item label and value",tooltipItemLabelAndValue.parameters={storySource:{source:'<ThemeController chart={TooltipItemLabelValueExample} chartId={"tooltipItemLabelValue"} themes={{\n  tooltipItemLabelValueTheme,\n  defaultTheme\n}} />'}};const componentMeta={title:"Addons/Themes/Theme pieces",tags:["stories-mdx"],includeStories:["button","tooltipItemLabelAndValue"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Addons/Themes/Theme pieces"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"theme-pieces",children:"Theme pieces"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Theme pieces, like partial themes, are objects that satisfy typescript type ",(0,jsx_runtime.jsx)(_components.code,{children:"ThemeSpec"})," from ",(0,jsx_runtime.jsx)(_components.code,{children:"@chsk/core"}),".\nUnlike partial themes, theme pieces have more targeted effects and only modify the appearance of a small number of\nelements."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"buttontheme",children:(0,jsx_runtime.jsx)(_components.code,{children:"buttonTheme"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"buttonTheme"})," holds definitions for ",(0,jsx_runtime.jsx)(_components.code,{children:"text"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"rect"}),", and ",(0,jsx_runtime.jsx)(_components.code,{children:"path"})," associated with css class 'button'."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This theme piece is used in many of the examples in the gallery to style buttons that trigger downloads."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"button",children:(0,jsx_runtime.jsx)(ThemeController.u,{chart:ButtonExample,chartId:"button",themes:{buttonTheme:src.Ee,defaultTheme:src.uH}})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"tooltipitemlabelvalue",children:(0,jsx_runtime.jsx)(_components.code,{children:"tooltipItemLabelValue"})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"tooltipItemLabelValue"})," holds definitions for ",(0,jsx_runtime.jsx)(_components.code,{children:"text"})," components with css classes ",(0,jsx_runtime.jsx)(_components.code,{children:"tooltipItem label"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"tooltipItem value"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This theme piece is useful to style tooltips in quantile charts, which display tables with key-value pairs."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"tooltip item label and value",children:(0,jsx_runtime.jsx)(ThemeController.u,{chart:TooltipItemLabelValueExample,chartId:"tooltipItemLabelValue",themes:{tooltipItemLabelValueTheme:src.JR,defaultTheme:src.uH}})})})]})}}};const pieces_stories=componentMeta}}]);