"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7416],{"./packages/polar/src/general/PolarItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>PolarItem});var framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-value.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/animate.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),d3_interpolate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-interpolate/src/value.js"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/polar/src/general/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var getTransform=function getTransform(x,y,degrees){return"translateX("+x+"px) translateY("+y+"px) rotate("+degrees+"deg)"},PolarItem=function PolarItem(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,_ref$position=_ref.position,position=void 0===_ref$position?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.rv1:_ref$position,_ref$angleUnit=_ref.angleUnit,angleUnit=void 0===_ref$angleUnit?"radian":_ref$angleUnit,radial=_ref.radial,tangential=_ref.tangential,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FgM)(),isRadians="radian"===angleUnit,r=position[_constants__WEBPACK_IMPORTED_MODULE_3__.R],theta=isRadians?position[_constants__WEBPACK_IMPORTED_MODULE_3__.uD]:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VlM)(position[_constants__WEBPACK_IMPORTED_MODULE_3__.uD]),x=r*Math.sin(theta),y=-r*Math.cos(theta),angle=0;radial?angle+=theta-_constants__WEBPACK_IMPORTED_MODULE_3__.$_:tangential&&(angle+=theta),angle%=_constants__WEBPACK_IMPORTED_MODULE_3__.EP,(radial&&(theta<0||theta>Math.PI)||tangential&&(theta<-_constants__WEBPACK_IMPORTED_MODULE_3__.$_||theta>_constants__WEBPACK_IMPORTED_MODULE_3__.$_))&&(angle+=Math.PI),angle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.BVy)(angle%_constants__WEBPACK_IMPORTED_MODULE_3__.EP);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([r,theta,angle]),values=_useState[0],setValues=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),working=_useState2[0],setWorking=_useState2[1],transform=(0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.c)(getTransform(x,y,angle));if(!children)return null;if(transform.get()!==getTransform(x,y,angle)&&!working){var animateConfig=theme.Transition.default,interpolator=(0,d3_interpolate__WEBPACK_IMPORTED_MODULE_5__.Z)(values,[r,theta,angle]);(0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.j)(0,1,_extends({},animateConfig,{onPlay:function onPlay(){setWorking(!0)},onUpdate:function onUpdate(latest){var _ref2=interpolator(latest),rLatest=_ref2[0],thetaLatest=_ref2[1],angleLatest=_ref2[2],latestX=rLatest*Math.sin(thetaLatest),latestY=-rLatest*Math.cos(thetaLatest);transform.set(getTransform(latestX,latestY,angleLatest))},onComplete:function onComplete(){setValues([r,theta,angle]),setWorking(!1)}}))}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.m.g,{role:setRole&&"default"!==variant?variant:void 0,style:{transform},children})};try{PolarItem.displayName="PolarItem",PolarItem.__docgenInfo={description:"",displayName:"PolarItem",props:{position:{defaultValue:null,description:"position in polar coordinates [radius, angle]",name:"position",required:!1,type:{name:"NumericPositionSpec"}},angleUnit:{defaultValue:{value:"radian"},description:"angle units",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}},radial:{defaultValue:null,description:"flag, orient text radially",name:"radial",required:!1,type:{name:"boolean"}},tangential:{defaultValue:null,description:"flag, orient text tangentially",name:"tangential",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/general/PolarItem.tsx#PolarItem"]={docgenInfo:PolarItem.__docgenInfo,name:"PolarItem",path:"packages/polar/src/general/PolarItem.tsx#PolarItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/general/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>HALFPI,EP:()=>TWOPI,R:()=>R,uD:()=>THETA});var R=0,THETA=1,TWOPI=2*Math.PI,HALFPI=Math.PI/2},"./packages/polar/src/pie/SliceLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>SliceLabel});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_general__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/polar/src/general/constants.ts"),_general__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/polar/src/general/PolarItem.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SliceLabel=function SliceLabel(_ref){var innerRadius=_ref.innerRadius,outerRadius=_ref.outerRadius,startAngle=_ref.startAngle,endAngle=_ref.endAngle,_ref$angleUnit=_ref.angleUnit,angleUnit=void 0===_ref$angleUnit?"radian":_ref$angleUnit,_ref$align=_ref.align,align=void 0===_ref$align?[.5,.5]:_ref$align,radial=_ref.radial,tangential=_ref.tangential,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0!==_ref$setRole&&_ref$setRole,style=_ref.style,children=_ref.children,sizeR=outerRadius-innerRadius,sizeAngle=endAngle-startAngle,theta=startAngle+align[_general__WEBPACK_IMPORTED_MODULE_1__.uD]*sizeAngle;"degree"===angleUnit&&(theta=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VlM)(theta));var position=[innerRadius+align[_general__WEBPACK_IMPORTED_MODULE_1__.R]*sizeR,theta],classPrefix="";radial&&(theta<0||theta>Math.PI)?classPrefix=" leftHemisphere ":tangential&&(theta<-Math.PI/2||theta>Math.PI/2)&&(classPrefix=" bottomHemisphere");var compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)("label sliceLabel"+classPrefix,className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_general__WEBPACK_IMPORTED_MODULE_3__.V,{variant:"label",position,angleUnit:"radian",radial,tangential,setRole,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:compositeClassName,style,children})})};try{SliceLabel.displayName="SliceLabel",SliceLabel.__docgenInfo={description:"",displayName:"SliceLabel",props:{className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"false"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},innerRadius:{defaultValue:null,description:"inner radius in absolute coordinates",name:"innerRadius",required:!0,type:{name:"number"}},angleUnit:{defaultValue:{value:"radian"},description:"angle units",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}},outerRadius:{defaultValue:null,description:"outer radius in absolute coordinates",name:"outerRadius",required:!0,type:{name:"number"}},startAngle:{defaultValue:null,description:"start angle for slice (radians)",name:"startAngle",required:!0,type:{name:"number"}},endAngle:{defaultValue:null,description:"end angle for slice (radians)",name:"endAngle",required:!0,type:{name:"number"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},align:{defaultValue:{value:"[0.5, 0.5]"},description:"alignment of content within the bounding container",name:"align",required:!1,type:{name:"AlignSpec"}},radial:{defaultValue:null,description:"flag, orient text radially",name:"radial",required:!1,type:{name:"boolean"}},tangential:{defaultValue:null,description:"flag, orient text tangentially",name:"tangential",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/pie/SliceLabel.tsx#SliceLabel"]={docgenInfo:SliceLabel.__docgenInfo,name:"SliceLabel",path:"packages/polar/src/pie/SliceLabel.tsx#SliceLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/stories/pie/SliceLabel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LabelPosition:()=>LabelPosition,LeftAligned:()=>LeftAligned,Styled:()=>Styled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/polar/src/pie/SliceLabel.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/polar/stories/pie/decorators.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Polar/Pie/SliceLabel",component:_src__WEBPACK_IMPORTED_MODULE_0__.w},LabelPosition={name:"label position",args:{innerRadius:120,outerRadius:120,startAngle:-90,endAngle:0,angleUnit:"degree",align:[.5,.5],children:"label"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.aW]},LeftAligned={name:"left-aligned",args:{innerRadius:120,outerRadius:120,startAngle:-90,endAngle:0,angleUnit:"degree",align:[.5,0],children:"label"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.aW]},Styled={name:"styled",args:{innerRadius:120,outerRadius:120,startAngle:-90,endAngle:0,angleUnit:"degree",align:[.5,.5],children:"label",style:{fill:"#000000",fontSize:"14px",fontWeight:600}},component:_src__WEBPACK_IMPORTED_MODULE_0__.w,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.aW]},__namedExportsOrder=["LabelPosition","LeftAligned","Styled"];LabelPosition.parameters={...LabelPosition.parameters,docs:{...LabelPosition.parameters?.docs,source:{originalSource:"{\n  name: 'label position',\n  args: {\n    innerRadius: 120,\n    outerRadius: 120,\n    startAngle: -90,\n    endAngle: 0,\n    angleUnit: 'degree',\n    align: [0.5, 0.5],\n    children: 'label'\n  },\n  decorators: [ChartDoughnutSlicesDecorator]\n}",...LabelPosition.parameters?.docs?.source}}},LeftAligned.parameters={...LeftAligned.parameters,docs:{...LeftAligned.parameters?.docs,source:{originalSource:"{\n  name: 'left-aligned',\n  args: {\n    innerRadius: 120,\n    outerRadius: 120,\n    startAngle: -90,\n    endAngle: 0,\n    angleUnit: 'degree',\n    align: [0.5, 0],\n    children: 'label'\n  },\n  decorators: [ChartDoughnutSlicesDecorator]\n}",...LeftAligned.parameters?.docs?.source}}},Styled.parameters={...Styled.parameters,docs:{...Styled.parameters?.docs,source:{originalSource:"{\n  name: 'styled',\n  args: {\n    innerRadius: 120,\n    outerRadius: 120,\n    startAngle: -90,\n    endAngle: 0,\n    angleUnit: 'degree',\n    align: [0.5, 0.5],\n    children: 'label',\n    style: {\n      fill: '#000000',\n      fontSize: '14px',\n      fontWeight: 600\n    }\n  },\n  component: SliceLabel,\n  decorators: [ChartDoughnutSlicesDecorator]\n}",...Styled.parameters?.docs?.source}}}}}]);