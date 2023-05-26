"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[5503,7601],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/matrix/stories/heatmaps/HeatMap.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Categorical:()=>Categorical,Default:()=>Default,Padding:()=>Padding,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Categorical$paramete,_Categorical$paramete2,_Categorical$paramete3,_Size$parameters,_Size$parameters2,_Size$parameters2$doc,_Padding$parameters,_Padding$parameters2,_Padding$parameters2$,_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/matrix/src/heatmap/HeatMap.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/matrix/src/heatmap/HeatMapCells.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/matrix/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Matrix/HeatMaps/HeatMap",component:_src__WEBPACK_IMPORTED_MODULE_1__.B};var Default={name:"default",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.$7,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.W,{})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.OO]},Categorical={name:"categorical",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.T5,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.W,{})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.OO]},Size={name:"size",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.$7,{dataSize:_decorators__WEBPACK_IMPORTED_MODULE_2__.$7.data,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.W,{})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.OO]},Padding={name:"padding",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.$7,{scaleX:{variant:"band",padding:.15},scaleY:{variant:"band",padding:.15},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.W,{})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.OO]};Default.parameters=_extends({},Default.parameters,{docs:_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:_extends({originalSource:"{\n  name: 'default',\n  args: {\n    ...commonProps,\n    children: <HeatMapCells />\n  },\n  decorators: [ChartDecoratorEqualPadding]\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source)})}),Categorical.parameters=_extends({},Categorical.parameters,{docs:_extends({},null==(_Categorical$paramete=Categorical.parameters)?void 0:_Categorical$paramete.docs,{source:_extends({originalSource:"{\n  name: 'categorical',\n  args: {\n    ...commonCategoricalProps,\n    children: <HeatMapCells />\n  },\n  decorators: [ChartDecoratorEqualPadding]\n}"},null==(_Categorical$paramete2=Categorical.parameters)||null==(_Categorical$paramete3=_Categorical$paramete2.docs)?void 0:_Categorical$paramete3.source)})}),Size.parameters=_extends({},Size.parameters,{docs:_extends({},null==(_Size$parameters=Size.parameters)?void 0:_Size$parameters.docs,{source:_extends({originalSource:"{\n  name: 'size',\n  args: {\n    ...commonProps,\n    dataSize: commonProps.data,\n    children: <HeatMapCells />\n  },\n  decorators: [ChartDecoratorEqualPadding]\n}"},null==(_Size$parameters2=Size.parameters)||null==(_Size$parameters2$doc=_Size$parameters2.docs)?void 0:_Size$parameters2$doc.source)})}),Padding.parameters=_extends({},Padding.parameters,{docs:_extends({},null==(_Padding$parameters=Padding.parameters)?void 0:_Padding$parameters.docs,{source:_extends({originalSource:"{\n  name: 'padding',\n  args: {\n    ...commonProps,\n    scaleX: {\n      variant: 'band',\n      padding: 0.15\n    },\n    scaleY: {\n      variant: 'band',\n      padding: 0.15\n    },\n    children: <HeatMapCells />\n  },\n  decorators: [ChartDecoratorEqualPadding]\n}"},null==(_Padding$parameters2=Padding.parameters)||null==(_Padding$parameters2$=_Padding$parameters2.docs)?void 0:_Padding$parameters2$.source)})});var __namedExportsOrder=["Default","Categorical","Size","Padding"]},"./packages/matrix/stories/heatmaps/HeatMap.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_HeatMap_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/matrix/stories/heatmaps/HeatMap.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"heatmap",children:"HeatMap"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_HeatMap_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMap"})," sets up a view for a heat map."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_HeatMap_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMap"})," is an organizational component and it does not draw any visual elements.\nHowever, it manages datasets that can be visualized with other components, for example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMapCells"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The examples in this page showcase ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMap"})," by automatically using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMapCells"})," as a child component.\nNote that to create a complete chart, additional components would normally be employed, for example adding axes and labels."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Data should be prepared as an array of objects. All objects should contain a string identifier ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'id'"}),".\nOther keys can be used to encode information that will be turned into colors in the heat map."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The pseudocode below shows one data item with an identifier and three numeric values."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:'\n  [\n  {\n   "id": "alpha",\n   "x": 55,\n   "y": 35,\n   "z": 10\n  },\n  ...\n  ]\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"An analogous format is also used to encode heat map cell size."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"color-scales",children:"Color scales"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HeatMap"})," accepts both continuous and categorical color scales.\nThe first example below is based on a matrix with numeric values and converts these numbers into many shades.\nThe second example is based on a matrix of strings and displays a fixed number of colors."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HeatMap_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HeatMap_stories__WEBPACK_IMPORTED_MODULE_4__.Categorical}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Again, the two maps above are based on different data - there is no mapping between the colors of two examples."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"size-scales",children:"Size scales"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The heat map supports cells of non-constant sizes. Use prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"dataSize"})," to specify the cell sizes, and prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"scaleSize"})," to specify the required scaling.\nThe format for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"dataSize"})," is the same as for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data"}),", which ensures that the same ids and keys are used to match colors and sizes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HeatMap_stories__WEBPACK_IMPORTED_MODULE_4__.Size}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["In the example above, the same data object is presented to both ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"dataSize"}),", so color intensity and cell size are proportional."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"padding",children:"Padding"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, the rows and columns in the heatmap are placed directly adjacent to each other.\nThe space between rows and columns can be adjusted through props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"scaleX"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"scaleY"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HeatMap_stories__WEBPACK_IMPORTED_MODULE_4__.Padding})]})}}},"./node_modules/d3-scale-chromatic/src/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(specifier){for(var n=specifier.length/6|0,colors=new Array(n),i=0;i<n;)colors[i]="#"+specifier.slice(6*i,6*++i);return colors}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})},"./node_modules/framer-motion/dist/es/animation/animate.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>animate});var _index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/index.mjs"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function animate(from,to,transition={}){const value=(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(from)?from:(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(from);return value.start((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Z)("",value,to,transition)),{stop:()=>value.stop(),isAnimating:()=>value.isAnimating()}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/framer-motion/dist/es/utils/process.mjs"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs"),warn_once=__webpack_require__("./node_modules/framer-motion/dist/es/utils/warn-once.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{exitBeforeEnter&&(mode="wait",(0,warn_once.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[forceRender]=function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Z_.postRender(forceRender)),[forceRender]),forcedRenderCount]}();const forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);const isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((()=>{isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return"wait"===mode&&exiting.size&&(childrenToRender=[]),exiting.forEach((key=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:()=>{allChildren.delete(key),exiting.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout,mode},child))})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),"production"!==process.O&&"wait"===mode&&childrenToRender.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);