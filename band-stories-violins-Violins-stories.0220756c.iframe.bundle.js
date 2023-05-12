"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8176],{"./packages/band/stories/violins/Violins.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SelectedIds:()=>SelectedIds,SelectedKeys:()=>SelectedKeys,Smooth:()=>Smooth,Step:()=>Step,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Smooth$parameters,_Smooth$parameters2,_Smooth$parameters2$d,_Step$parameters,_Step$parameters2,_Step$parameters2$doc,_SelectedIds$paramete,_SelectedIds$paramete2,_SelectedIds$paramete3,_SelectedKeys$paramet,_SelectedKeys$paramet2,_SelectedKeys$paramet3,_src_violins__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/violins/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/violins/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Violins/Violins",component:_src_violins__WEBPACK_IMPORTED_MODULE_0__.KI};var Smooth={name:"smooth",args:{variant:"smooth"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.M]},Step={name:"step",args:{variant:"step"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.M]},SelectedIds={name:"selected ids",args:{ids:["alpha"],style:{strokeWidth:1,stroke:"#222222",fillOpacity:1}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.M]},SelectedKeys={name:"selected keys",args:{keys:["x"],style:{strokeWidth:1,stroke:"#222222",fillOpacity:1}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.M]};Smooth.parameters=_extends({},Smooth.parameters,{docs:_extends({},null==(_Smooth$parameters=Smooth.parameters)?void 0:_Smooth$parameters.docs,{source:_extends({originalSource:"{\n  name: 'smooth',\n  args: {\n    variant: 'smooth'\n  },\n  decorators: [ChartViolinDecorator]\n}"},null==(_Smooth$parameters2=Smooth.parameters)||null==(_Smooth$parameters2$d=_Smooth$parameters2.docs)?void 0:_Smooth$parameters2$d.source)})}),Step.parameters=_extends({},Step.parameters,{docs:_extends({},null==(_Step$parameters=Step.parameters)?void 0:_Step$parameters.docs,{source:_extends({originalSource:"{\n  name: 'step',\n  args: {\n    variant: 'step'\n  },\n  decorators: [ChartViolinDecorator]\n}"},null==(_Step$parameters2=Step.parameters)||null==(_Step$parameters2$doc=_Step$parameters2.docs)?void 0:_Step$parameters2$doc.source)})}),SelectedIds.parameters=_extends({},SelectedIds.parameters,{docs:_extends({},null==(_SelectedIds$paramete=SelectedIds.parameters)?void 0:_SelectedIds$paramete.docs,{source:_extends({originalSource:"{\n  name: 'selected ids',\n  args: {\n    ids: ['alpha'],\n    style: {\n      strokeWidth: 1,\n      stroke: '#222222',\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartViolinDecorator]\n}"},null==(_SelectedIds$paramete2=SelectedIds.parameters)||null==(_SelectedIds$paramete3=_SelectedIds$paramete2.docs)?void 0:_SelectedIds$paramete3.source)})}),SelectedKeys.parameters=_extends({},SelectedKeys.parameters,{docs:_extends({},null==(_SelectedKeys$paramet=SelectedKeys.parameters)?void 0:_SelectedKeys$paramet.docs,{source:_extends({originalSource:"{\n  name: 'selected keys',\n  args: {\n    keys: ['x'],\n    style: {\n      strokeWidth: 1,\n      stroke: '#222222',\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartViolinDecorator]\n}"},null==(_SelectedKeys$paramet2=SelectedKeys.parameters)||null==(_SelectedKeys$paramet3=_SelectedKeys$paramet2.docs)?void 0:_SelectedKeys$paramet3.source)})});var __namedExportsOrder=["Smooth","Step","SelectedIds","SelectedKeys"]},"./packages/band/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ChartDecorator,A:()=>dataRawValues});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateUniformValues=function generateUniformValues(n,interval){var size=interval[1]-interval[0];return Array(n).fill(0).map((function(){return interval[0]+Math.random()*size}))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var dataRawValues=[{id:"alpha",x:generateUniformValues(30,[0,10]).map((function(v){return(0,chsk_core_es.DJC)(v,4)})),y:generateUniformValues(30,[2,16]).map((function(v){return(0,chsk_core_es.DJC)(v,4)}))},{id:"beta",x:generateUniformValues(30,[5,15]).map((function(v){return(0,chsk_core_es.DJC)(v,4)})),y:generateUniformValues(30,[10,20]).map((function(v){return(0,chsk_core_es.DJC)(v,4)}))}];try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/band/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/violins/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>ChartViolinDecorator,X:()=>commonViolinProps});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonViolinProps={data:_decorators__WEBPACK_IMPORTED_MODULE_2__.A,keys:["x","y"],scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]},paddingInternal:.2},ChartViolinDecorator=function ChartViolinDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.BS,_extends({},commonViolinProps,{horizontal:!1,breaks:12,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartViolinDecorator.displayName="ChartViolinDecorator";try{ChartViolinDecorator.displayName="ChartViolinDecorator",ChartViolinDecorator.__docgenInfo={description:"",displayName:"ChartViolinDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/violins/decorators.tsx#ChartViolinDecorator"]={docgenInfo:ChartViolinDecorator.__docgenInfo,name:"ChartViolinDecorator",path:"packages/band/stories/violins/decorators.tsx#ChartViolinDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);