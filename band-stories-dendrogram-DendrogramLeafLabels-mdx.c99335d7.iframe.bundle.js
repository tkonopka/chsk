"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7274,9e3],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/band/stories/dendrogram/DendrogramLeafLabels.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Boxed:()=>Boxed,Hang:()=>Hang,Position:()=>Position,Subset:()=>Subset,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DendrogramLeafLabels_stories});var chsk_annotation_es=__webpack_require__("./packages/annotation/dist/chsk-annotation.es.js"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react=__webpack_require__("./node_modules/react/index.js"),predicates=__webpack_require__("./packages/band/src/dendrogram/predicates.ts"),context=__webpack_require__("./packages/band/src/dendrogram/context.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","ids","keys","format","component","componentProps","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var DendrogramLeafLabels=function DendrogramLeafLabels(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"leaf-label":_ref$variant,ids=_ref.ids,keys=_ref.keys,format=_ref.format,_ref$component=_ref.component,component=void 0===_ref$component?chsk_core_es.__J:_ref$component,componentProps=_ref.componentProps,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),originalData=(0,chsk_core_es.W3B)().data,preparedData=(0,context._$)(),scales=(0,chsk_core_es.kE1)().scales,horizontal=(0,chsk_core_es.y7R)(scales.y),_useIdsKeys=(0,chsk_core_es.lRm)(ids,keys,preparedData),idSet=_useIdsKeys.idSet,keySet=_useIdsKeys.keySet;if(!(0,predicates.T)(originalData))return null;var commonProps=_extends({variant,setRole:!1},componentProps,{className}),result=preparedData.data.map((function(item){if(!idSet.has(item.id))return null;var data=originalData[item.index],leafX=horizontal?item.leafHeight:item.leafPosition,leafY=horizontal?item.leafPosition:item.leafHeight;return null==data?void 0:data.keys.map((function(k,i){var x=leafX[i],y=leafY[i];if(!keySet.has(k)||!x||!y)return null;var position=[x,y],value=format?format(k):k;return(0,react.createElement)(component,_extends({key:"l-"+item.id+"-"+k},commonProps,{position},props),value)}))}));return(0,jsx_runtime.jsx)("g",{role:setRole?"dendrogram-leaf-labels":void 0,children:result})};DendrogramLeafLabels.displayName="DendrogramLeafLabels";try{DendrogramLeafLabels.displayName="DendrogramLeafLabels",DendrogramLeafLabels.__docgenInfo={description:"",displayName:"DendrogramLeafLabels",props:{format:{defaultValue:null,description:"format for text",name:"format",required:!1,type:{name:"((v: string) => ReactNode)"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},keys:{defaultValue:null,description:"keys to display (default to all keys)",name:"keys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"position offset added after anchoring and alignment",name:"offset",required:!1,type:{name:"NumericPositionSpec"}},anchor:{defaultValue:null,description:"position of anchor point relative to box size",name:"anchor",required:!1,type:{name:"AlignSpec"}},variant:{defaultValue:{value:"leaf-label"},description:"variant",name:"variant",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"rotation (degrees)",name:"angle",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},size:{defaultValue:null,description:"size of bounding container",name:"size",required:!1,type:{name:"SizeSpec"}},padding:{defaultValue:null,description:"space between container and label",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},align:{defaultValue:null,description:"alignment of content within the bounding container",name:"align",required:!1,type:{name:"AlignSpec"}},component:{defaultValue:null,description:"function used to draw individual components",name:"component",required:!1,type:{name:"FC<LabelProps>"}},componentProps:{defaultValue:null,description:"props passed to each component",name:"componentProps",required:!1,type:{name:"Partial<LabelProps>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/dendrogram/DendrogramLeafLabels.tsx#DendrogramLeafLabels"]={docgenInfo:DendrogramLeafLabels.__docgenInfo,name:"DendrogramLeafLabels",path:"packages/band/src/dendrogram/DendrogramLeafLabels.tsx#DendrogramLeafLabels"})}catch(__react_docgen_typescript_loader_error){}var _Position$parameters,_Position$parameters2,_Subset$parameters,_Subset$parameters2,_Hang$parameters,_Hang$parameters2,_Boxed$parameters,_Boxed$parameters2,decorators=__webpack_require__("./packages/band/stories/dendrogram/decorators.tsx");function DendrogramLeafLabels_stories_extends(){return DendrogramLeafLabels_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},DendrogramLeafLabels_stories_extends.apply(this,arguments)}const DendrogramLeafLabels_stories={title:"Addons/Band/Dendrogram/DendrogramLeafLabels",component:DendrogramLeafLabels};var Position={name:"subset",args:{offset:[6,0],style:{textAnchor:"start"}},decorators:[decorators.pW]},Subset={name:"subset",args:{keys:["gamma","delta","epsilon"],offset:[6,0],style:{textAnchor:"start"}},decorators:[decorators.pW]},Hang={name:"hang",args:{offset:[6,0],style:{textAnchor:"start"}},decorators:[decorators.ms]},Boxed={name:"boxed label",args:{offset:[0,0],anchor:[0,.5],size:[55,25],component:chsk_annotation_es.I6,style:{textAnchor:"start"}},decorators:[decorators.ms]};Position.parameters=DendrogramLeafLabels_stories_extends({},Position.parameters,{docs:DendrogramLeafLabels_stories_extends({},null==(_Position$parameters=Position.parameters)?void 0:_Position$parameters.docs,{source:DendrogramLeafLabels_stories_extends({originalSource:"{\n  name: 'subset',\n  args: {\n    offset: [6, 0],\n    style: {\n      textAnchor: 'start'\n    }\n  },\n  decorators: [ChartDendrogramTreeDecorator]\n}"},null==(_Position$parameters2=Position.parameters)||null==(_Position$parameters2=_Position$parameters2.docs)?void 0:_Position$parameters2.source)})}),Subset.parameters=DendrogramLeafLabels_stories_extends({},Subset.parameters,{docs:DendrogramLeafLabels_stories_extends({},null==(_Subset$parameters=Subset.parameters)?void 0:_Subset$parameters.docs,{source:DendrogramLeafLabels_stories_extends({originalSource:"{\n  name: 'subset',\n  args: {\n    keys: ['gamma', 'delta', 'epsilon'],\n    offset: [6, 0],\n    style: {\n      textAnchor: 'start'\n    }\n  },\n  decorators: [ChartDendrogramTreeDecorator]\n}"},null==(_Subset$parameters2=Subset.parameters)||null==(_Subset$parameters2=_Subset$parameters2.docs)?void 0:_Subset$parameters2.source)})}),Hang.parameters=DendrogramLeafLabels_stories_extends({},Hang.parameters,{docs:DendrogramLeafLabels_stories_extends({},null==(_Hang$parameters=Hang.parameters)?void 0:_Hang$parameters.docs,{source:DendrogramLeafLabels_stories_extends({originalSource:"{\n  name: 'hang',\n  args: {\n    offset: [6, 0],\n    style: {\n      textAnchor: 'start'\n    }\n  },\n  decorators: [ChartDendrogramTreeHangDecorator]\n}"},null==(_Hang$parameters2=Hang.parameters)||null==(_Hang$parameters2=_Hang$parameters2.docs)?void 0:_Hang$parameters2.source)})}),Boxed.parameters=DendrogramLeafLabels_stories_extends({},Boxed.parameters,{docs:DendrogramLeafLabels_stories_extends({},null==(_Boxed$parameters=Boxed.parameters)?void 0:_Boxed$parameters.docs,{source:DendrogramLeafLabels_stories_extends({originalSource:"{\n  name: 'boxed label',\n  args: {\n    offset: [0, 0],\n    anchor: [0, 0.5],\n    size: [55, 25],\n    component: BoxedLabel,\n    style: {\n      textAnchor: 'start'\n    }\n  },\n  decorators: [ChartDendrogramTreeHangDecorator]\n}"},null==(_Boxed$parameters2=Boxed.parameters)||null==(_Boxed$parameters2=_Boxed$parameters2.docs)?void 0:_Boxed$parameters2.source)})});var __namedExportsOrder=["Position","Subset","Hang","Boxed"]},"./packages/band/stories/dendrogram/DendrogramLeafLabels.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_DendrogramLeafLabels_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/dendrogram/DendrogramLeafLabels.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"dendrogramleaflabels",children:"DendrogramLeafLabels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_DendrogramLeafLabels_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DendrogramLeafLabels"})," draws a set of labels next to dendrogram leaf nodes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_DendrogramLeafLabels_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"position",children:"Position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Props such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"offset"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"align"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"anchor"}),", or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"angle"})," can fine-tune label placement.\nIn practice, simple labels may only require an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"offset"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_DendrogramLeafLabels_stories__WEBPACK_IMPORTED_MODULE_4__.Position}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"subsets",children:"Subsets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DendrogramLeafLabels"})," draws labels for all the leaf nodes.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"keys"})," restricts this to a subset of nodes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_DendrogramLeafLabels_stories__WEBPACK_IMPORTED_MODULE_4__.Subset}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"hang",children:"Hang"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The feature that distinguishes ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DendrogramLeafLabels"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AxisTicks"})," is the ability to place\nlabels at different heights in the hierarchy (when using prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"hang"})," in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Dendrogram"}),")."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_DendrogramLeafLabels_stories__WEBPACK_IMPORTED_MODULE_4__.Hang}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"custom-components",children:"Custom components"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"component"})," accepts a label-drawing function.\nThis can accept label components from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@chsk/annotation"}),", for example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BoxedLabel"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_DendrogramLeafLabels_stories__WEBPACK_IMPORTED_MODULE_4__.Boxed})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/d3-shape/src/curve/bundle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _basis_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/curve/basis.js");function Bundle(context,beta){this._basis=new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context),this._beta=beta}Bundle.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var x=this._x,y=this._y,j=x.length-1;if(j>0)for(var t,x0=x[0],y0=y[0],dx=x[j]-x0,dy=y[j]-y0,i=-1;++i<=j;)t=i/j,this._basis.point(this._beta*x[i]+(1-this._beta)*(x0+t*dx),this._beta*y[i]+(1-this._beta)*(y0+t*dy));this._x=this._y=null,this._basis.lineEnd()},point:function(x,y){this._x.push(+x),this._y.push(+y)}};const __WEBPACK_DEFAULT_EXPORT__=function custom(beta){function bundle(context){return 1===beta?new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context):new Bundle(context,beta)}return bundle.beta=function(beta){return custom(+beta)},bundle}(.85)}}]);