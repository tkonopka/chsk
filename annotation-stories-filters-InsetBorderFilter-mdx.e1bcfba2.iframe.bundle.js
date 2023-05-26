"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7053,5149],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/filters/InsetBorderFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Darker:()=>Darker,Inset:()=>Inset,Lighter:()=>Lighter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Lighter$parameters,_Lighter$parameters2,_Lighter$parameters2$,_Darker$parameters,_Darker$parameters2,_Darker$parameters2$d,_Inset$parameters,_Inset$parameters2,_Inset$parameters2$do,_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src_filters__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/filters/InsetBorderFilter.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Filters/InsetBorderFilter",component:_src_filters__WEBPACK_IMPORTED_MODULE_1__.c};var Lighter={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.c,{id:"lighter-border",floodColor:"#ffffff",r:8}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999",filter:"url(#lighter-border)"}})]})},name:"lighter"},Darker={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.c,{id:"darker-border",floodColor:"#222222",r:8}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999",filter:"url(#darker-border)"}})]})},name:"darker"},Inset={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.c,{id:"inset-lighter-border",erodeR:3,r:8,floodColor:"#ffffff"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999",filter:"url(#inset-lighter-border)"}})]})},name:"inset"};Lighter.parameters=_extends({},Lighter.parameters,{docs:_extends({},null==(_Lighter$parameters=Lighter.parameters)?void 0:_Lighter$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetBorderFilter id={'lighter-border'} floodColor={'#ffffff'} r={8} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999',\n      filter: 'url(#lighter-border)'\n    }} />\n        </Chart>,\n  name: 'lighter'\n}"},null==(_Lighter$parameters2=Lighter.parameters)||null==(_Lighter$parameters2$=_Lighter$parameters2.docs)?void 0:_Lighter$parameters2$.source)})}),Darker.parameters=_extends({},Darker.parameters,{docs:_extends({},null==(_Darker$parameters=Darker.parameters)?void 0:_Darker$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetBorderFilter id={'darker-border'} floodColor={'#222222'} r={8} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999',\n      filter: 'url(#darker-border)'\n    }} />\n        </Chart>,\n  name: 'darker'\n}"},null==(_Darker$parameters2=Darker.parameters)||null==(_Darker$parameters2$d=_Darker$parameters2.docs)?void 0:_Darker$parameters2$d.source)})}),Inset.parameters=_extends({},Inset.parameters,{docs:_extends({},null==(_Inset$parameters=Inset.parameters)?void 0:_Inset$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetBorderFilter id={'inset-lighter-border'} erodeR={3} r={8} floodColor={'#ffffff'} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999',\n      filter: 'url(#inset-lighter-border)'\n    }} />\n        </Chart>,\n  name: 'inset'\n}"},null==(_Inset$parameters2=Inset.parameters)||null==(_Inset$parameters2$do=_Inset$parameters2.docs)?void 0:_Inset$parameters2$do.source)})});var __namedExportsOrder=["Lighter","Darker","Inset"]},"./packages/annotation/src/filters/InsetBorderFilter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>InsetBorderFilter});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),InsetBorderFilter=function InsetBorderFilter(_ref){var id=_ref.id,_ref$r=_ref.r,r=void 0===_ref$r?1:_ref$r,_ref$erodeR=_ref.erodeR,erodeR=void 0===_ref$erodeR?0:_ref$erodeR,_ref$floodColor=_ref.floodColor,floodColor=void 0===_ref$floodColor?"#000000":_ref$floodColor,_ref$floodOpacity=_ref.floodOpacity,floodOpacity=void 0===_ref$floodOpacity?.5:_ref$floodOpacity;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter",{id,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology",{in:"SourceGraphic",operator:"erode",radius:r,result:id+"-in"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology",{in:"SourceGraphic",operator:"erode",radius:erodeR,result:id+"-erode"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood",{floodColor,floodOpacity,result:id+"-color"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"out",in:id+"-erode",in2:id+"-in",result:id+"-boundary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"in",in:id+"-color",in2:id+"-boundary",result:id+"-mask"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"over",in:id+"-mask",in2:"SourceGraphic"})]})};InsetBorderFilter.displayName="InsetBorderFilter";try{InsetBorderFilter.displayName="InsetBorderFilter",InsetBorderFilter.__docgenInfo={description:"",displayName:"InsetBorderFilter",props:{erodeR:{defaultValue:{value:"0"},description:"",name:"erodeR",required:!1,type:{name:"number"}},r:{defaultValue:{value:"1"},description:"",name:"r",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.5"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/InsetBorderFilter.tsx#InsetBorderFilter"]={docgenInfo:InsetBorderFilter.__docgenInfo,name:"InsetBorderFilter",path:"packages/annotation/src/filters/InsetBorderFilter.tsx#InsetBorderFilter"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/filters/InsetBorderFilter.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_InsetBorderFilter_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/annotation/stories/filters/InsetBorderFilter.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_InsetBorderFilter_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"insetborderfilter",children:"InsetBorderFilter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"InsetBorderFilter"})," creates an svg filter that applies a solid color mask to the boundary of a target."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_InsetBorderFilter_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"color-and-opacity",children:"Color and opacity"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"floodColor"})," determines the color of the mask.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"floodOpacity"})," determines the intensity of the filter."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_InsetBorderFilter_stories__WEBPACK_IMPORTED_MODULE_4__.Lighter}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_InsetBorderFilter_stories__WEBPACK_IMPORTED_MODULE_4__.Darker}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"inset",children:"Inset"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"InsetBorderFilter"})," affects the entire shape, including any existing boundary.\nTo exclude the boundary from the filter, set prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"erodeR"})," with the width of the boundary stroke."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_InsetBorderFilter_stories__WEBPACK_IMPORTED_MODULE_4__.Inset})]})}}},"./node_modules/framer-motion/dist/es/animation/animate.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>animate});var _index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/index.mjs"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function animate(from,to,transition={}){const value=(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(from)?from:(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(from);return value.start((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Z)("",value,to,transition)),{stop:()=>value.stop(),isAnimating:()=>value.isAnimating()}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/framer-motion/dist/es/utils/process.mjs"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs"),warn_once=__webpack_require__("./node_modules/framer-motion/dist/es/utils/warn-once.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{exitBeforeEnter&&(mode="wait",(0,warn_once.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[forceRender]=function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Z_.postRender(forceRender)),[forceRender]),forcedRenderCount]}();const forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);const isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((()=>{isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return"wait"===mode&&exiting.size&&(childrenToRender=[]),exiting.forEach((key=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:()=>{allChildren.delete(key),exiting.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout,mode},child))})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),"production"!==process.O&&"wait"===mode&&childrenToRender.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);