"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3711,5846],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/xy/stories/scatter/ScatterErrors.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Caps:()=>Caps,Styles:()=>Styles,X:()=>X,Y:()=>Y,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ScatterErrors_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/xy/src/scatter/context.tsx"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","lower","upper","capWidth","className","style","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ScatterErrorBar=function ScatterErrorBar(_ref){var variant=_ref.variant,lower=_ref.lower,upper=_ref.upper,_ref$capWidth=_ref.capWidth,capWidth=void 0===_ref$capWidth?0:_ref$capWidth,className=_ref.className,style=_ref.style,setRole=_ref.setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),capSize="x"===variant?[0,capWidth/2]:[capWidth/2,0],commonProps={style,className,setRole:!1},bar=(0,jsx_runtime.jsx)(chsk_core_es.x12,_extends({x1:lower[chsk_core_es.X],y1:lower[chsk_core_es.Y],x2:upper[chsk_core_es.X],y2:upper[chsk_core_es.Y]},commonProps),"line"),caps=capWidth>0?[(0,jsx_runtime.jsx)(chsk_core_es.x12,_extends({x1:lower[chsk_core_es.X]-capSize[chsk_core_es.X],x2:lower[chsk_core_es.X]+capSize[chsk_core_es.X],y1:lower[chsk_core_es.Y]-capSize[chsk_core_es.Y],y2:lower[chsk_core_es.Y]+capSize[chsk_core_es.Y]},commonProps),"lower-cap"),(0,jsx_runtime.jsx)(chsk_core_es.x12,_extends({x1:upper[chsk_core_es.X]-capSize[chsk_core_es.X],x2:upper[chsk_core_es.X]+capSize[chsk_core_es.X],y1:upper[chsk_core_es.Y]-capSize[chsk_core_es.Y],y2:upper[chsk_core_es.Y]+capSize[chsk_core_es.Y]},commonProps),"upper-cap")]:null;return(0,jsx_runtime.jsxs)("g",_extends({role:setRole?"error-bar":void 0},props,{children:[bar,caps]}))};ScatterErrorBar.displayName="ScatterErrorBar";try{ScatterErrorBar.displayName="ScatterErrorBar",ScatterErrorBar.__docgenInfo={description:"",displayName:"ScatterErrorBar",props:{variant:{defaultValue:null,description:"horizontal or vertical error bar",name:"variant",required:!0,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'}]}},capWidth:{defaultValue:{value:"0"},description:"width of cap at the end of error bar",name:"capWidth",required:!1,type:{name:"number"}},lower:{defaultValue:null,description:"position of lower bound",name:"lower",required:!0,type:{name:"NumericPositionSpec"}},upper:{defaultValue:null,description:"position of upper bound",name:"upper",required:!0,type:{name:"NumericPositionSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/ScatterErrorBar.tsx#ScatterErrorBar"]={docgenInfo:ScatterErrorBar.__docgenInfo,name:"ScatterErrorBar",path:"packages/xy/src/scatter/ScatterErrorBar.tsx#ScatterErrorBar"})}catch(__react_docgen_typescript_loader_error){}var predicates=__webpack_require__("./packages/xy/src/scatter/predicates.ts"),ScatterErrors_excluded=["variant","ids","lower","upper","capWidth","style","className","setRole","component","dataComponent"];function ScatterErrors_extends(){return ScatterErrors_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},ScatterErrors_extends.apply(this,arguments)}var ScatterErrors=function ScatterErrors(_ref2){var _ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"y":_ref2$variant,ids=_ref2.ids,lower=_ref2.lower,upper=_ref2.upper,capWidth=_ref2.capWidth,style=_ref2.style,className=_ref2.className,_ref2$setRole=_ref2.setRole,setRole=void 0===_ref2$setRole||_ref2$setRole,_ref2$component=_ref2.component,component=void 0===_ref2$component?ScatterErrorBar:_ref2$component,_ref2$dataComponent=_ref2.dataComponent,dataComponent=void 0===_ref2$dataComponent?chsk_core_es.Wnl:_ref2$dataComponent,props=function ScatterErrors_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref2,ScatterErrors_excluded),preparedData=(0,context.DP)(),data=preparedData.data,rawData=(0,chsk_core_es.W3B)().data,_useScales$scales=(0,chsk_core_es.kE1)().scales,scaleX=_useScales$scales.x,scaleY=_useScales$scales.y,scaleColor=_useScales$scales.color,_useDisabledKeys=(0,chsk_core_es.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender;if(!((0,chsk_core_es.z0X)(scaleX)&&(0,chsk_core_es.z0X)(scaleY)&&(0,predicates.Tc)(data)&&(0,predicates.Bf)(rawData)))return null;var errorsData=(0,react.useMemo)((function(){return data.map((function(seriesData,index){return function getErrorPoints(_ref){var lowerValues,upperValues,variant=_ref.variant,rawData=_ref.rawData,seriesData=_ref.seriesData,scale=_ref.scale,lower=_ref.lower,upper=_ref.upper;if((0,chsk_core_es.kJL)(rawData)){var getLower=(0,chsk_core_es.wIU)(lower),getUpper=(0,chsk_core_es.wIU)(upper);lowerValues=rawData.map((function(item){return scale(getLower(item))})),upperValues=rawData.map((function(item){return scale(getUpper(item))}))}else{var _getLower=(0,chsk_core_es.wIU)(String(lower)),_getUpper=(0,chsk_core_es.wIU)(String(upper));lowerValues=_getLower(rawData).map((function(v){return scale(v)})),upperValues=_getUpper(rawData).map((function(v){return scale(v)}))}var otherValues="y"===variant?seriesData.x:seriesData.y,transform="y"===variant?function(x){return x}:function(x){return[x[1],x[0]]};return lowerValues.map((function(v,i){return{lower:transform([otherValues[i],v]),upper:transform([otherValues[i],upperValues[i]])}}))}({variant,rawData:rawData[index].data,seriesData,scale:"y"===variant?scaleY:scaleX,lower,upper})}))}),[variant,data,rawData,scaleX,scaleY,lower,upper]),compositeClassName=(0,chsk_core_es.gjB)("scatter-errors",className),result=(null!=ids?ids:preparedData.keys).map((function(id){var visible=!disabledKeys.has(id),seriesIndex=preparedData.seriesIndexes[id];if(void 0===seriesIndex)return null;var seriesStyle=(0,chsk_core_es.hIX)(style,scaleColor(seriesIndex)),elements=errorsData[seriesIndex].map((function(points,index){return(0,react.createElement)(dataComponent,ScatterErrors_extends({key:"error-"+id+"-"+index,data:{id,index},component,props:{variant,lower:points.lower,upper:points.upper,capWidth,setRole,style:seriesStyle,className:compositeClassName}},props))}));return(0,jsx_runtime.jsx)(chsk_core_es.JjT,{role:setRole?"scatter-errors":void 0,visible,firstRender,children:elements},"errors-"+id)}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result.filter(Boolean)})};try{ScatterErrors.displayName="ScatterErrors",ScatterErrors.__docgenInfo={description:"",displayName:"ScatterErrors",props:{variant:{defaultValue:{value:"y"},description:"horizontal or vertical error bars",name:"variant",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'}]}},capWidth:{defaultValue:null,description:"width of error bar ends",name:"capWidth",required:!1,type:{name:"number"}},component:{defaultValue:{value:"({\n    variant,\n    lower,\n    upper,\n    capWidth = 0.0,\n    className,\n    style,\n    setRole,\n    ...props\n}: ScatterErrorBarProps) => {\n    const capSize: SizeSpec = variant === 'x' ? [0, capWidth / 2] : [capWidth / 2, 0]\n    const commonProps = { style, className, setRole: false }\n    const bar = (\n        <Line\n            key={'line'}\n            x1={lower[X]}\n            y1={lower[Y]}\n            x2={upper[X]}\n            y2={upper[Y]}\n            {...commonProps}\n        />\n    )\n    const caps =\n        capWidth > 0\n            ? [\n                  <Line\n                      key={'lower-cap'}\n                      x1={lower[X] - capSize[X]}\n                      x2={lower[X] + capSize[X]}\n                      y1={lower[Y] - capSize[Y]}\n                      y2={lower[Y] + capSize[Y]}\n                      {...commonProps}\n                  />,\n                  <Line\n                      key={'upper-cap'}\n                      x1={upper[X] - capSize[X]}\n                      x2={upper[X] + capSize[X]}\n                      y1={upper[Y] - capSize[Y]}\n                      y2={upper[Y] + capSize[Y]}\n                      {...commonProps}\n                  />,\n              ]\n            : null\n\n    return (\n        <g role={setRole ? 'error-bar' : undefined} {...props}>\n            {bar}\n            {caps}\n        </g>\n    )\n}"},description:"component used to draw error bars",name:"component",required:!1,type:{name:"FC<ScatterErrorBarProps>"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<ScatterInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<ScatterInteractiveDataItem, ScatterErrorBarProps>>"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},lower:{defaultValue:null,description:"key or function to extract lower bound for interval",name:"lower",required:!0,type:{name:"string | AccessorFunction<number>"}},upper:{defaultValue:null,description:"key or function to extract upper bound for interval",name:"upper",required:!0,type:{name:"string | AccessorFunction<number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/ScatterErrors.tsx#ScatterErrors"]={docgenInfo:ScatterErrors.__docgenInfo,name:"ScatterErrors",path:"packages/xy/src/scatter/ScatterErrors.tsx#ScatterErrors"})}catch(__react_docgen_typescript_loader_error){}var _X$parameters,_X$parameters2,_X$parameters2$docs,_Y$parameters,_Y$parameters2,_Y$parameters2$docs,_Caps$parameters,_Caps$parameters2,_Caps$parameters2$doc,_Styles$parameters,_Styles$parameters2,_Styles$parameters2$d,decorators=__webpack_require__("./packages/xy/stories/scatter/decorators.tsx");function ScatterErrors_stories_extends(){return ScatterErrors_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},ScatterErrors_stories_extends.apply(this,arguments)}const ScatterErrors_stories={title:"Addons/XY/Scatter/ScatterErrors",component:ScatterErrors};var X={name:"x",args:{variant:"x",lower:"xlo",upper:"xhi"},decorators:[decorators.XU]},Y={name:"y",args:{variant:"y",lower:"ylo",upper:"yhi"},decorators:[decorators.XU]},Caps={name:"caps",args:{variant:"y",lower:"ylo",upper:"yhi",capWidth:8},decorators:[decorators.XU]},Styles={name:"styles",args:{variant:"y",lower:"ylo",upper:"yhi",capWidth:8,style:{stroke:"#444444",strokeWidth:3}},decorators:[decorators.XU]};X.parameters=ScatterErrors_stories_extends({},X.parameters,{docs:ScatterErrors_stories_extends({},null==(_X$parameters=X.parameters)?void 0:_X$parameters.docs,{source:ScatterErrors_stories_extends({originalSource:"{\n  name: 'x',\n  args: {\n    variant: 'x',\n    lower: 'xlo',\n    upper: 'xhi'\n  },\n  decorators: [ChartForErrorsDecorator]\n}"},null==(_X$parameters2=X.parameters)||null==(_X$parameters2$docs=_X$parameters2.docs)?void 0:_X$parameters2$docs.source)})}),Y.parameters=ScatterErrors_stories_extends({},Y.parameters,{docs:ScatterErrors_stories_extends({},null==(_Y$parameters=Y.parameters)?void 0:_Y$parameters.docs,{source:ScatterErrors_stories_extends({originalSource:"{\n  name: 'y',\n  args: {\n    variant: 'y',\n    lower: 'ylo',\n    upper: 'yhi'\n  },\n  decorators: [ChartForErrorsDecorator]\n}"},null==(_Y$parameters2=Y.parameters)||null==(_Y$parameters2$docs=_Y$parameters2.docs)?void 0:_Y$parameters2$docs.source)})}),Caps.parameters=ScatterErrors_stories_extends({},Caps.parameters,{docs:ScatterErrors_stories_extends({},null==(_Caps$parameters=Caps.parameters)?void 0:_Caps$parameters.docs,{source:ScatterErrors_stories_extends({originalSource:"{\n  name: 'caps',\n  args: {\n    variant: 'y',\n    lower: 'ylo',\n    upper: 'yhi',\n    capWidth: 8\n  },\n  decorators: [ChartForErrorsDecorator]\n}"},null==(_Caps$parameters2=Caps.parameters)||null==(_Caps$parameters2$doc=_Caps$parameters2.docs)?void 0:_Caps$parameters2$doc.source)})}),Styles.parameters=ScatterErrors_stories_extends({},Styles.parameters,{docs:ScatterErrors_stories_extends({},null==(_Styles$parameters=Styles.parameters)?void 0:_Styles$parameters.docs,{source:ScatterErrors_stories_extends({originalSource:"{\n  name: 'styles',\n  args: {\n    variant: 'y',\n    lower: 'ylo',\n    upper: 'yhi',\n    capWidth: 8,\n    style: {\n      stroke: '#444444',\n      strokeWidth: 3\n    }\n  },\n  decorators: [ChartForErrorsDecorator]\n}"},null==(_Styles$parameters2=Styles.parameters)||null==(_Styles$parameters2$d=_Styles$parameters2.docs)?void 0:_Styles$parameters2$d.source)})});var __namedExportsOrder=["X","Y","Caps","Styles"]},"./packages/xy/stories/scatter/ScatterErrors.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ScatterErrors_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/stories/scatter/ScatterErrors.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"scattererrors",children:"ScatterErrors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_ScatterErrors_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterErrors"})," draws error bars for a series of points."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_ScatterErrors_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterErrors"})," works with datasets provided to a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Scatter"})," chart.\nThe data itself does not need to be provided as a prop. However, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterErrors"}),"\ndoes require information about how to extract the sizes of errors bars from the raw data."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The examples below assume that the data is prepared in a format as follows."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:'\n  [\n  {\n   "id": "alpha",\n   "data": [\n     {\n       "x": 1,\n       "y": 2,\n       "xlo": 0.5,\n       "xhi": 1.5,\n       "ylo": 1.5,\n       "yhi": 2.5,\n     },\n     ...\n   ]\n  },\n  ...\n  ]\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Notably, each data point is characterized by keys specifying the x- and y- coordinates,\nas well as four distinct keys specifying the lower and upper uncertainty bounds on each axis."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variant",children:"Variant"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," determines whether error bars display uncertainties along the x- or y-axes.\nIn each case, use props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"lower"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"higher"})," to designate the keys in the original dataset\nthat hold the lower and upper error bounds, respectively."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterErrors_stories__WEBPACK_IMPORTED_MODULE_4__.X}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterErrors_stories__WEBPACK_IMPORTED_MODULE_4__.Y}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To display both horizontal and vertical error bars, overlay two separate ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterError"})," components."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"caps",children:"Caps"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To display orthogonal lines (caps) at the end of the error bars, specify the size of those caps with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"capWidth"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterErrors_stories__WEBPACK_IMPORTED_MODULE_4__.Caps}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Error bar lines can be styled using css."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterErrors_stories__WEBPACK_IMPORTED_MODULE_4__.Styles})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);