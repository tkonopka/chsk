"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[430,8255],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/polar/stories/general/PolarItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Origin:()=>PolarItem_stories_Origin,Radial:()=>Radial,RadialLeftHemisphere:()=>RadialLeftHemisphere,TangentBottomHemisphere:()=>TangentBottomHemisphere,Tangential:()=>Tangential,TwoOClock:()=>TwoOClock,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PolarItem_stories});var _Origin$parameters,_Origin$parameters2,_Origin$parameters2$d,_TwoOClock$parameters,_TwoOClock$parameters2,_TwoOClock$parameters3,_Radial$parameters,_Radial$parameters2,_Radial$parameters2$d,_Tangential$parameter,_Tangential$parameter2,_Tangential$parameter3,_RadialLeftHemisphere,_RadialLeftHemisphere2,_RadialLeftHemisphere3,_TangentBottomHemisph,_TangentBottomHemisph2,_TangentBottomHemisph3,PolarItem=__webpack_require__("./packages/polar/src/general/PolarItem.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),Pie=__webpack_require__("./packages/polar/src/pie/Pie.tsx"),Origin=__webpack_require__("./packages/polar/src/general/Origin.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartOriginDecorator=function ChartOriginDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(Pie.b,{data:[],children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsxs)(Origin.a,{children:[(0,jsx_runtime.jsx)(chsk_core_es.Cdc,{cx:0,cy:0,r:80,style:{stroke:"#222222",strokeWidth:1,fillOpacity:0}}),Story()]})]})})};ChartOriginDecorator.displayName="ChartOriginDecorator";try{ChartOriginDecorator.displayName="ChartOriginDecorator",ChartOriginDecorator.__docgenInfo={description:"",displayName:"ChartOriginDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/stories/general/decorators.tsx#ChartOriginDecorator"]={docgenInfo:ChartOriginDecorator.__docgenInfo,name:"ChartOriginDecorator",path:"packages/polar/stories/general/decorators.tsx#ChartOriginDecorator"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const PolarItem_stories={title:"Addons/Polar/Polar/PolarItem",component:PolarItem.V};var PolarItem_stories_Origin={name:"origin",args:{position:[0,0],children:(0,jsx_runtime.jsx)("text",{children:"label"})},decorators:[ChartOriginDecorator]},TwoOClock={name:"two o clock",args:{position:[100,60],angleUnit:"degrees",children:(0,jsx_runtime.jsx)("text",{children:"label"})},decorators:[ChartOriginDecorator]},Radial={name:"radial",args:{radial:!0,position:[100,60],angleUnit:"degrees",children:(0,jsx_runtime.jsx)("text",{children:"label"})},decorators:[ChartOriginDecorator]},Tangential={name:"tangential",args:{tangential:!0,position:[100,60],angleUnit:"degrees",children:(0,jsx_runtime.jsx)("text",{children:"label"})},decorators:[ChartOriginDecorator]},RadialLeftHemisphere={name:"radial, left hemisphere",args:{radial:!0,position:[100,-60],angleUnit:"degrees",children:(0,jsx_runtime.jsx)("text",{children:"label"})},decorators:[ChartOriginDecorator]},TangentBottomHemisphere={name:"tangent, bottom hemisphere",args:{tangential:!0,position:[100,120],angleUnit:"degrees",children:(0,jsx_runtime.jsx)("text",{children:"label"})},decorators:[ChartOriginDecorator]};PolarItem_stories_Origin.parameters=_extends({},PolarItem_stories_Origin.parameters,{docs:_extends({},null==(_Origin$parameters=PolarItem_stories_Origin.parameters)?void 0:_Origin$parameters.docs,{source:_extends({originalSource:"{\n  name: 'origin',\n  args: {\n    position: [0, 0],\n    children: <text>label</text>\n  },\n  decorators: [ChartOriginDecorator]\n}"},null==(_Origin$parameters2=PolarItem_stories_Origin.parameters)||null==(_Origin$parameters2$d=_Origin$parameters2.docs)?void 0:_Origin$parameters2$d.source)})}),TwoOClock.parameters=_extends({},TwoOClock.parameters,{docs:_extends({},null==(_TwoOClock$parameters=TwoOClock.parameters)?void 0:_TwoOClock$parameters.docs,{source:_extends({originalSource:"{\n  name: 'two o clock',\n  args: {\n    position: [100, 60],\n    angleUnit: 'degrees',\n    children: <text>label</text>\n  },\n  decorators: [ChartOriginDecorator]\n}"},null==(_TwoOClock$parameters2=TwoOClock.parameters)||null==(_TwoOClock$parameters3=_TwoOClock$parameters2.docs)?void 0:_TwoOClock$parameters3.source)})}),Radial.parameters=_extends({},Radial.parameters,{docs:_extends({},null==(_Radial$parameters=Radial.parameters)?void 0:_Radial$parameters.docs,{source:_extends({originalSource:"{\n  name: 'radial',\n  args: {\n    radial: true,\n    position: [100, 60],\n    angleUnit: 'degrees',\n    children: <text>label</text>\n  },\n  decorators: [ChartOriginDecorator]\n}"},null==(_Radial$parameters2=Radial.parameters)||null==(_Radial$parameters2$d=_Radial$parameters2.docs)?void 0:_Radial$parameters2$d.source)})}),Tangential.parameters=_extends({},Tangential.parameters,{docs:_extends({},null==(_Tangential$parameter=Tangential.parameters)?void 0:_Tangential$parameter.docs,{source:_extends({originalSource:"{\n  name: 'tangential',\n  args: {\n    tangential: true,\n    position: [100, 60],\n    angleUnit: 'degrees',\n    children: <text>label</text>\n  },\n  decorators: [ChartOriginDecorator]\n}"},null==(_Tangential$parameter2=Tangential.parameters)||null==(_Tangential$parameter3=_Tangential$parameter2.docs)?void 0:_Tangential$parameter3.source)})}),RadialLeftHemisphere.parameters=_extends({},RadialLeftHemisphere.parameters,{docs:_extends({},null==(_RadialLeftHemisphere=RadialLeftHemisphere.parameters)?void 0:_RadialLeftHemisphere.docs,{source:_extends({originalSource:"{\n  name: 'radial, left hemisphere',\n  args: {\n    radial: true,\n    position: [100, -60],\n    angleUnit: 'degrees',\n    children: <text>label</text>\n  },\n  decorators: [ChartOriginDecorator]\n}"},null==(_RadialLeftHemisphere2=RadialLeftHemisphere.parameters)||null==(_RadialLeftHemisphere3=_RadialLeftHemisphere2.docs)?void 0:_RadialLeftHemisphere3.source)})}),TangentBottomHemisphere.parameters=_extends({},TangentBottomHemisphere.parameters,{docs:_extends({},null==(_TangentBottomHemisph=TangentBottomHemisphere.parameters)?void 0:_TangentBottomHemisph.docs,{source:_extends({originalSource:"{\n  name: 'tangent, bottom hemisphere',\n  args: {\n    tangential: true,\n    position: [100, 120],\n    angleUnit: 'degrees',\n    children: <text>label</text>\n  },\n  decorators: [ChartOriginDecorator]\n}"},null==(_TangentBottomHemisph2=TangentBottomHemisphere.parameters)||null==(_TangentBottomHemisph3=_TangentBottomHemisph2.docs)?void 0:_TangentBottomHemisph3.source)})});var __namedExportsOrder=["Origin","TwoOClock","Radial","Tangential","RadialLeftHemisphere","TangentBottomHemisphere"]},"./packages/polar/src/general/Origin.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Origin});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Origin=function Origin(_ref){var _ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,className=_ref.className,style=_ref.style,children=_ref.children,scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE1)().scales,xScale=scales.x,yScale=scales.y,config={x:xScale(0),y:yScale(0),originX:"0px",originY:"0px"},compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.gjB)("origin",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.g,{initial:config,animate:config,role:setRole?"origin":void 0,style,className:compositeClassName,children})};Origin.displayName="Origin";try{Origin.displayName="Origin",Origin.__docgenInfo={description:"",displayName:"Origin",props:{className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/general/Origin.tsx#Origin"]={docgenInfo:Origin.__docgenInfo,name:"Origin",path:"packages/polar/src/general/Origin.tsx#Origin"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/general/PolarItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>PolarItem});var framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-value.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/animate.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),d3_interpolate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-interpolate/src/value.js"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/polar/src/general/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var getTransform=function getTransform(x,y,degrees){return"translateX("+x+"px) translateY("+y+"px) rotate("+degrees+"deg)"},PolarItem=function PolarItem(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,_ref$position=_ref.position,position=void 0===_ref$position?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.rv1:_ref$position,_ref$angleUnit=_ref.angleUnit,angleUnit=void 0===_ref$angleUnit?"radian":_ref$angleUnit,radial=_ref.radial,tangential=_ref.tangential,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FgM)(),isRadians="radian"===angleUnit,r=position[_constants__WEBPACK_IMPORTED_MODULE_3__.R],theta=isRadians?position[_constants__WEBPACK_IMPORTED_MODULE_3__.uD]:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VlM)(position[_constants__WEBPACK_IMPORTED_MODULE_3__.uD]),x=r*Math.sin(theta),y=-r*Math.cos(theta),angle=0;radial?angle+=theta-_constants__WEBPACK_IMPORTED_MODULE_3__.$_:tangential&&(angle+=theta),angle%=_constants__WEBPACK_IMPORTED_MODULE_3__.EP,(radial&&(theta<0||theta>Math.PI)||tangential&&(theta<-_constants__WEBPACK_IMPORTED_MODULE_3__.$_||theta>_constants__WEBPACK_IMPORTED_MODULE_3__.$_))&&(angle+=Math.PI),angle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.BVy)(angle%_constants__WEBPACK_IMPORTED_MODULE_3__.EP);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([r,theta,angle]),values=_useState[0],setValues=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),working=_useState2[0],setWorking=_useState2[1],transform=(0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.c)(getTransform(x,y,angle));if(!children)return null;if(transform.get()!==getTransform(x,y,angle)&&!working){var animateConfig=theme.Motion.default,interpolator=(0,d3_interpolate__WEBPACK_IMPORTED_MODULE_5__.Z)(values,[r,theta,angle]);(0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.j)(0,1,_extends({},animateConfig,{onPlay:function onPlay(){setWorking(!0)},onUpdate:function onUpdate(latest){var _interpolator=interpolator(latest),rLatest=_interpolator[0],thetaLatest=_interpolator[1],angleLatest=_interpolator[2],latestX=rLatest*Math.sin(thetaLatest),latestY=-rLatest*Math.cos(thetaLatest);transform.set(getTransform(latestX,latestY,angleLatest))},onComplete:function onComplete(){setValues([r,theta,angle]),setWorking(!1)}}))}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.m.g,{role:setRole&&"default"!==variant?variant:void 0,style:{transform},children})};PolarItem.displayName="PolarItem";try{PolarItem.displayName="PolarItem",PolarItem.__docgenInfo={description:"",displayName:"PolarItem",props:{position:{defaultValue:null,description:"position in polar coordinates [radius, angle]",name:"position",required:!1,type:{name:"NumericPositionSpec"}},angleUnit:{defaultValue:{value:"radian"},description:"angle units",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}},radial:{defaultValue:null,description:"flag, orient text radially",name:"radial",required:!1,type:{name:"boolean"}},tangential:{defaultValue:null,description:"flag, orient text tangentially",name:"tangential",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/general/PolarItem.tsx#PolarItem"]={docgenInfo:PolarItem.__docgenInfo,name:"PolarItem",path:"packages/polar/src/general/PolarItem.tsx#PolarItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/general/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>HALFPI,EP:()=>TWOPI,R:()=>R,uD:()=>THETA});var R=0,THETA=1,TWOPI=2*Math.PI,HALFPI=Math.PI/2},"./packages/polar/src/pie/Pie.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Pie});var react=__webpack_require__("./node_modules/react/index.js"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","data","angle","angleUnit","angleAlign","rOuter","rInner","scaleX","scaleY","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var defaultPolarScaleSpec={variant:"linear",domain:[-1,1],nice:!1},Pie=function Pie(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?chsk_core_es.WdC:_ref$container,data=_ref.data,_ref$angle=_ref.angle,angle=void 0===_ref$angle?0:_ref$angle,_ref$angleUnit=_ref.angleUnit,angleUnit=void 0===_ref$angleUnit?"degree":_ref$angleUnit,_ref$angleAlign=_ref.angleAlign,angleAlign=void 0===_ref$angleAlign?0:_ref$angleAlign,_ref$rOuter=_ref.rOuter,rOuter=void 0===_ref$rOuter?1:_ref$rOuter,_ref$rInner=_ref.rInner,rInner=void 0===_ref$rInner?0:_ref$rInner,_ref$scaleX=_ref.scaleX,scaleX=void 0===_ref$scaleX?defaultPolarScaleSpec:_ref$scaleX,_ref$scaleY=_ref.scaleY,scaleY=void 0===_ref$scaleY?defaultPolarScaleSpec:_ref$scaleY,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,chsk_core_es.FgM)(),_useContainer=(0,chsk_core_es.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,seriesIds=(0,react.useMemo)((function(){return data.map((function(item){return item.id}))}),[data]),seriesIndexes=(0,react.useMemo)((function(){return(0,chsk_core_es.snp)(data)}),[data]),processedData=(0,react.useMemo)((function(){return function processData(data,angle,unit,align,rInner,rOuter){var values=data.map((function(seriesData){return Math.max(0,seriesData.data)})),total=values.reduce((function(acc,v){return acc+v}),0),start=0,offset="radian"===unit?angle:(0,chsk_core_es.VlM)(angle);return data.map((function(seriesData,index){var proportion=values[index]/total,startAngle=start,endAngle=start+2*proportion*Math.PI;if(0===index){var firstOffset=offset-(endAngle-startAngle)*align;startAngle+=firstOffset,endAngle+=firstOffset}return start=endAngle,{id:seriesData.id,index,data:values[index],proportion,startAngle,endAngle,rInner,rOuter}}))}(data,angle,angleUnit,angleAlign,rInner,rOuter)}),[data,angle,angleUnit,angleAlign,rInner,rOuter]),_useMemo=(0,react.useMemo)((function(){return function getPieXYScaleProps(scaleSpecX,scaleSpecY,size){var result={x:(0,lodash.cloneDeep)(scaleSpecX),y:(0,lodash.cloneDeep)(scaleSpecY)};return(0,chsk_core_es.HBl)(scaleSpecX)||(result.x=(0,chsk_core_es.zAC)(scaleSpecX,[-1,1])),(0,chsk_core_es.HBl)(scaleSpecY)||(result.y=(0,chsk_core_es.zAC)(scaleSpecY,[-1,1])),result.x.size=size[chsk_core_es.X],result.y.size=size[chsk_core_es.Y],(0,chsk_core_es.vO5)(result.x,result.y)}(scaleX,scaleY,innerSize)}),[scaleX,scaleY,innerSize]),xProps=_useMemo.x,yProps=_useMemo.y,colorProps=(0,react.useMemo)((function(){return(0,chsk_core_es.NVB)(null!=scaleColor?scaleColor:theme.Colors.categorical,seriesIds)}),[scaleColor,theme,seriesIds]),scalesContextValue=(0,chsk_core_es.cT_)({x:xProps,y:yProps,color:colorProps});return(0,jsx_runtime.jsx)(chsk_core_es.PzT,_extends({variant:"pie",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys:seriesIds,scalesContextValue},props,{children:(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children})}))};Pie.displayName="Pie";try{Pie.displayName="Pie",Pie.__docgenInfo={description:"",displayName:"Pie",props:{data:{defaultValue:null,description:"primary data (used for color scale)",name:"data",required:!0,type:{name:"PieDataItem[]"}},angle:{defaultValue:{value:"0"},description:"global rotation",name:"angle",required:!1,type:{name:"number"}},angleUnit:{defaultValue:{value:"degree"},description:"angle unit",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}},angleAlign:{defaultValue:{value:"0"},description:"angle alignment for first slice",name:"angleAlign",required:!1,type:{name:"number"}},rOuter:{defaultValue:{value:"1"},description:"outer radius",name:"rOuter",required:!1,type:{name:"number"}},rInner:{defaultValue:{value:"0"},description:"inner radius",name:"rInner",required:!1,type:{name:"number"}},scaleX:{defaultValue:{value:"{\n    variant: 'linear',\n    domain: [-1, 1],\n    nice: false,\n}"},description:"scale for horizontal axis",name:"scaleX",required:!1,type:{name:"LinearScaleSpec"}},scaleY:{defaultValue:{value:"{\n    variant: 'linear',\n    domain: [-1, 1],\n    nice: false,\n}"},description:"scale for vertical axis",name:"scaleY",required:!1,type:{name:"LinearScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/pie/Pie.tsx#Pie"]={docgenInfo:Pie.__docgenInfo,name:"Pie",path:"packages/polar/src/pie/Pie.tsx#Pie"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/stories/general/PolarItem.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_PolarItem_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/polar/stories/general/PolarItem.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"polaritem",children:"PolarItem"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_PolarItem_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"PolarItem"})," positions and animates an arbitrary component on a polar chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_PolarItem_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"position",children:"Position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"PolarItem"})," places its content at the local origin.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"})," specifies an alternate position in the form of a radius (in pixels) and an angle.\nAngles can be specified in radians or degrees, with the unit declared using prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"angleUnit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_PolarItem_stories__WEBPACK_IMPORTED_MODULE_4__.Origin}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_PolarItem_stories__WEBPACK_IMPORTED_MODULE_4__.TwoOClock}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"orientation",children:"Orientation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"PolarItem"})," orient text horizontally by default.\nFlags ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"radial"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tangential"})," rotate the labels based on their position along the circle."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_PolarItem_stories__WEBPACK_IMPORTED_MODULE_4__.Radial}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_PolarItem_stories__WEBPACK_IMPORTED_MODULE_4__.Tangential}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"PolarItem"})," automatically adjust rotations for radial and tangential content:\nradial labels are rotated differently in the left and right hemispheres;\ntangential labels are rotated different in the top and bottom hemisphere."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_PolarItem_stories__WEBPACK_IMPORTED_MODULE_4__.RadialLeftHemisphere}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_PolarItem_stories__WEBPACK_IMPORTED_MODULE_4__.TangentBottomHemisphere}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that labels in the right and left hemispheres may require different alignments (css style ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"textAnchor"}),")."]})]})}}},"./node_modules/d3-interpolate/src/number.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(a,b){return a=+a,b=+b,function(t){return a*(1-t)+b*t}}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})},"./node_modules/d3-interpolate/src/object.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _value_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-interpolate/src/value.js");function __WEBPACK_DEFAULT_EXPORT__(a,b){var k,i={},c={};for(k in null!==a&&"object"==typeof a||(a={}),null!==b&&"object"==typeof b||(b={}),b)k in a?i[k]=(0,_value_js__WEBPACK_IMPORTED_MODULE_0__.Z)(a[k],b[k]):c[k]=b[k];return function(t){for(k in i)c[k]=i[k](t);return c}}},"./node_modules/d3-interpolate/src/value.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>value});var color=__webpack_require__("./node_modules/d3-color/src/color.js"),rgb=__webpack_require__("./node_modules/d3-interpolate/src/rgb.js");function genericArray(a,b){var i,nb=b?b.length:0,na=a?Math.min(nb,a.length):0,x=new Array(na),c=new Array(nb);for(i=0;i<na;++i)x[i]=value(a[i],b[i]);for(;i<nb;++i)c[i]=b[i];return function(t){for(i=0;i<na;++i)c[i]=x[i](t);return c}}function date(a,b){var d=new Date;return a=+a,b=+b,function(t){return d.setTime(a*(1-t)+b*t),d}}var number=__webpack_require__("./node_modules/d3-interpolate/src/number.js"),object=__webpack_require__("./node_modules/d3-interpolate/src/object.js"),reA=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,reB=new RegExp(reA.source,"g");function string(a,b){var am,bm,bs,bi=reA.lastIndex=reB.lastIndex=0,i=-1,s=[],q=[];for(a+="",b+="";(am=reA.exec(a))&&(bm=reB.exec(b));)(bs=bm.index)>bi&&(bs=b.slice(bi,bs),s[i]?s[i]+=bs:s[++i]=bs),(am=am[0])===(bm=bm[0])?s[i]?s[i]+=bm:s[++i]=bm:(s[++i]=null,q.push({i,x:(0,number.Z)(am,bm)})),bi=reB.lastIndex;return bi<b.length&&(bs=b.slice(bi),s[i]?s[i]+=bs:s[++i]=bs),s.length<2?q[0]?function one(b){return function(t){return b(t)+""}}(q[0].x):function zero(b){return function(){return b}}(b):(b=q.length,function(t){for(var o,i=0;i<b;++i)s[(o=q[i]).i]=o.x(t);return s.join("")})}var constant=__webpack_require__("./node_modules/d3-interpolate/src/constant.js");function src_numberArray(a,b){b||(b=[]);var i,n=a?Math.min(b.length,a.length):0,c=b.slice();return function(t){for(i=0;i<n;++i)c[i]=a[i]*(1-t)+b[i]*t;return c}}function value(a,b){var c,t=typeof b;return null==b||"boolean"===t?(0,constant.Z)(b):("number"===t?number.Z:"string"===t?(c=(0,color.ZP)(b))?(b=c,rgb.ZP):string:b instanceof color.ZP?rgb.ZP:b instanceof Date?date:function numberArray_isNumberArray(x){return ArrayBuffer.isView(x)&&!(x instanceof DataView)}(b)?src_numberArray:Array.isArray(b)?genericArray:"function"!=typeof b.valueOf&&"function"!=typeof b.toString||isNaN(b)?object.Z:number.Z)(a,b)}}}]);