"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4999,5553],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/typography/BoxedLabel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AbsolutePosition:()=>AbsolutePosition,AnchorTopLeftCorner:()=>AnchorTopLeftCorner,AnchorTopRightCorner:()=>AnchorTopRightCorner,OffsetAboveCenter:()=>OffsetAboveCenter,OffsetAwayFromCorner:()=>OffsetAwayFromCorner,RelativePosition:()=>RelativePosition,Rotation:()=>Rotation,Styling:()=>Styling,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _AbsolutePosition$par,_AbsolutePosition$par2,_AbsolutePosition$par3,_RelativePosition$par,_RelativePosition$par2,_RelativePosition$par3,_AnchorTopLeftCorner$,_AnchorTopLeftCorner$2,_AnchorTopLeftCorner$3,_AnchorTopRightCorner,_AnchorTopRightCorner2,_AnchorTopRightCorner3,_OffsetAboveCenter$pa,_OffsetAboveCenter$pa2,_OffsetAboveCenter$pa3,_OffsetAwayFromCorner,_OffsetAwayFromCorner2,_OffsetAwayFromCorner3,_Rotation$parameters,_Rotation$parameters2,_Rotation$parameters3,_Styling$parameters,_Styling$parameters2,_Styling$parameters2$,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/annotation/src/typography/BoxedLabel.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/stories/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Typography/BoxedLabel",component:_src__WEBPACK_IMPORTED_MODULE_0__.I};var AbsolutePosition={name:"absolute position",args:{position:[50,30],size:[40,26],boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:"Title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]},RelativePosition={name:"relative position",args:{position:[.5,.5],positionUnits:"relative",size:[120,26],boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:"Relative position"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]},AnchorTopLeftCorner={name:"anchor top-left corner",args:{position:[0,0],positionUnits:"relative",anchor:[0,0],size:[180,26],boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:"Anchor in top-left corner"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]},AnchorTopRightCorner={name:"anchor top-right corner",args:{position:[1,0],positionUnits:"relative",anchor:[1,0],size:[180,26],boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:"Anchor in top-right corner"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]},OffsetAboveCenter={name:"offset above center",args:{position:[.5,.5],positionUnits:"relative",offset:[0,-40],size:[120,26],boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:"above-center"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]},OffsetAwayFromCorner={name:"offset away from corner",args:{position:[0,0],offset:[-10,-10],anchor:[1,1],size:[22,22],boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:"A"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]},Rotation={name:"rotation",args:{position:[.5,.5],positionUnits:"relative",size:[80,26],angle:15,boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:"rotated"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]},Styling={name:"styling",args:{position:[1,0],positionUnits:"relative",anchor:[1,0],offset:[-10,10],size:[22,22],boxStyle:{fill:"#994444",strokeWidth:"0px"},textStyle:{fill:"#ffffff",fontWeight:600},children:"1"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]};AbsolutePosition.parameters=_extends({},AbsolutePosition.parameters,{docs:_extends({},null==(_AbsolutePosition$par=AbsolutePosition.parameters)?void 0:_AbsolutePosition$par.docs,{source:_extends({originalSource:"{\n  name: 'absolute position',\n  args: {\n    position: [50, 30],\n    size: [40, 26],\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    children: 'Title'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_AbsolutePosition$par2=AbsolutePosition.parameters)||null==(_AbsolutePosition$par3=_AbsolutePosition$par2.docs)?void 0:_AbsolutePosition$par3.source)})}),RelativePosition.parameters=_extends({},RelativePosition.parameters,{docs:_extends({},null==(_RelativePosition$par=RelativePosition.parameters)?void 0:_RelativePosition$par.docs,{source:_extends({originalSource:"{\n  name: 'relative position',\n  args: {\n    position: [0.5, 0.5],\n    positionUnits: 'relative',\n    size: [120, 26],\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    children: 'Relative position'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_RelativePosition$par2=RelativePosition.parameters)||null==(_RelativePosition$par3=_RelativePosition$par2.docs)?void 0:_RelativePosition$par3.source)})}),AnchorTopLeftCorner.parameters=_extends({},AnchorTopLeftCorner.parameters,{docs:_extends({},null==(_AnchorTopLeftCorner$=AnchorTopLeftCorner.parameters)?void 0:_AnchorTopLeftCorner$.docs,{source:_extends({originalSource:"{\n  name: 'anchor top-left corner',\n  args: {\n    position: [0, 0],\n    positionUnits: 'relative',\n    anchor: [0, 0],\n    size: [180, 26],\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    children: 'Anchor in top-left corner'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_AnchorTopLeftCorner$2=AnchorTopLeftCorner.parameters)||null==(_AnchorTopLeftCorner$3=_AnchorTopLeftCorner$2.docs)?void 0:_AnchorTopLeftCorner$3.source)})}),AnchorTopRightCorner.parameters=_extends({},AnchorTopRightCorner.parameters,{docs:_extends({},null==(_AnchorTopRightCorner=AnchorTopRightCorner.parameters)?void 0:_AnchorTopRightCorner.docs,{source:_extends({originalSource:"{\n  name: 'anchor top-right corner',\n  args: {\n    position: [1, 0],\n    positionUnits: 'relative',\n    anchor: [1, 0],\n    size: [180, 26],\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    children: 'Anchor in top-right corner'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_AnchorTopRightCorner2=AnchorTopRightCorner.parameters)||null==(_AnchorTopRightCorner3=_AnchorTopRightCorner2.docs)?void 0:_AnchorTopRightCorner3.source)})}),OffsetAboveCenter.parameters=_extends({},OffsetAboveCenter.parameters,{docs:_extends({},null==(_OffsetAboveCenter$pa=OffsetAboveCenter.parameters)?void 0:_OffsetAboveCenter$pa.docs,{source:_extends({originalSource:"{\n  name: 'offset above center',\n  args: {\n    position: [0.5, 0.5],\n    positionUnits: 'relative',\n    offset: [0, -40],\n    size: [120, 26],\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    children: 'above-center'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_OffsetAboveCenter$pa2=OffsetAboveCenter.parameters)||null==(_OffsetAboveCenter$pa3=_OffsetAboveCenter$pa2.docs)?void 0:_OffsetAboveCenter$pa3.source)})}),OffsetAwayFromCorner.parameters=_extends({},OffsetAwayFromCorner.parameters,{docs:_extends({},null==(_OffsetAwayFromCorner=OffsetAwayFromCorner.parameters)?void 0:_OffsetAwayFromCorner.docs,{source:_extends({originalSource:"{\n  name: 'offset away from corner',\n  args: {\n    position: [0, 0],\n    offset: [-10, -10],\n    anchor: [1, 1],\n    size: [22, 22],\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    children: 'A'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_OffsetAwayFromCorner2=OffsetAwayFromCorner.parameters)||null==(_OffsetAwayFromCorner3=_OffsetAwayFromCorner2.docs)?void 0:_OffsetAwayFromCorner3.source)})}),Rotation.parameters=_extends({},Rotation.parameters,{docs:_extends({},null==(_Rotation$parameters=Rotation.parameters)?void 0:_Rotation$parameters.docs,{source:_extends({originalSource:"{\n  name: 'rotation',\n  args: {\n    position: [0.5, 0.5],\n    positionUnits: 'relative',\n    size: [80, 26],\n    angle: 15,\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    children: 'rotated'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Rotation$parameters2=Rotation.parameters)||null==(_Rotation$parameters3=_Rotation$parameters2.docs)?void 0:_Rotation$parameters3.source)})}),Styling.parameters=_extends({},Styling.parameters,{docs:_extends({},null==(_Styling$parameters=Styling.parameters)?void 0:_Styling$parameters.docs,{source:_extends({originalSource:"{\n  name: 'styling',\n  args: {\n    position: [1, 0],\n    positionUnits: 'relative',\n    anchor: [1, 0],\n    offset: [-10, 10],\n    size: [22, 22],\n    boxStyle: {\n      fill: '#994444',\n      strokeWidth: '0px'\n    },\n    textStyle: {\n      fill: '#ffffff',\n      fontWeight: 600\n    },\n    children: '1'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Styling$parameters2=Styling.parameters)||null==(_Styling$parameters2$=_Styling$parameters2.docs)?void 0:_Styling$parameters2$.source)})});var __namedExportsOrder=["AbsolutePosition","RelativePosition","AnchorTopLeftCorner","AnchorTopRightCorner","OffsetAboveCenter","OffsetAwayFromCorner","Rotation","Styling"]},"./packages/annotation/src/typography/BoxedLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>BoxedLabel});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BoxedLabel=function BoxedLabel(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"boxed-label":_ref$variant,_ref$position=_ref.position,position=void 0===_ref$position?[0,0]:_ref$position,_ref$positionUnits=_ref.positionUnits,positionUnits=void 0===_ref$positionUnits?"absolute":_ref$positionUnits,_ref$size=_ref.size,size=void 0===_ref$size?[100,32]:_ref$size,_ref$sizeUnits=_ref.sizeUnits,sizeUnits=void 0===_ref$sizeUnits?"absolute":_ref$sizeUnits,_ref$offset=_ref.offset,offset=void 0===_ref$offset?[0,0]:_ref$offset,_ref$anchor=_ref.anchor,anchor=void 0===_ref$anchor?[.5,.5]:_ref$anchor,_ref$angle=_ref.angle,angle=void 0===_ref$angle?0:_ref$angle,_ref$angleUnit=_ref.angleUnit,angleUnit=void 0===_ref$angleUnit?"degree":_ref$angleUnit,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?[0,0,0,0]:_ref$expansion,rx=_ref.rx,ry=_ref.ry,boxStyle=_ref.boxStyle,textStyle=_ref.textStyle,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,dimensions=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Bs9)(),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE1)().scales,absPos=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.eE7)(position,positionUnits,dimensions.size,scales),absSize=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.YEL)(size,sizeUnits,dimensions.size),_getAnchoredOrigin=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.ji)(absPos,absSize,anchor),x=_getAnchoredOrigin[0],y=_getAnchoredOrigin[1];x+=size[0]/2+offset[0],y+=size[1]/2+offset[1],absSize[0]+=expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RLj]+expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pXp],absSize[1]+=expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.GSB]+expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.DaS];var compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.gjB)(variant,className),content="string"==typeof children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{style:textStyle,className:"label "+compositeClassName,children}):children,config={x,y,rotate:angle&&"radian"===angleUnit?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.BVy)(angle):angle,originX:"0px",originY:"0px"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.g,{role:setRole?variant:void 0,initial:config,animate:config,style,className:compositeClassName,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.AeJ,{variant:"label",x:0,y:0,width:absSize[0],height:absSize[1],rx,ry,center:!0,className:compositeClassName,style:boxStyle,setRole:!1}),content]})};BoxedLabel.displayName="BoxedLabel";try{BoxedLabel.displayName="BoxedLabel",BoxedLabel.__docgenInfo={description:"",displayName:"BoxedLabel",props:{variant:{defaultValue:{value:"boxed-label"},description:"variant",name:"variant",required:!1,type:{name:"string"}},size:{defaultValue:{value:"[100, 32]"},description:"size of box in absolute units",name:"size",required:!1,type:{name:"SizeSpec"}},angle:{defaultValue:{value:"0"},description:"angle",name:"angle",required:!1,type:{name:"number"}},angleUnit:{defaultValue:{value:"degree"},description:"angle unit",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"[0, 0]"},description:"container position",name:"position",required:!1,type:{name:"PositionSpec"}},positionUnits:{defaultValue:{value:"absolute"},description:"absolute or relative units for position",name:"positionUnits",required:!1,type:{name:"PositionUnits"}},sizeUnits:{defaultValue:{value:"absolute"},description:"absolute or relative units for position and size measurements",name:"sizeUnits",required:!1,type:{name:"SizeUnits"}},anchor:{defaultValue:{value:"[0.5, 0.5]"},description:"container anchor point",name:"anchor",required:!1,type:{name:"AnchorSpec"}},padding:{defaultValue:null,description:"padding (absolute values) *",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},offset:{defaultValue:{value:"[0, 0]"},description:"offset/translation applied after anchoring, absolute units",name:"offset",required:!1,type:{name:"NumericPositionSpec"}},expansion:{defaultValue:{value:"[0, 0, 0, 0]"},description:"expansion of box size",name:"expansion",required:!1,type:{name:"FourSideSizeSpec"}},rx:{defaultValue:null,description:"horizontal radius of box",name:"rx",required:!1,type:{name:"number"}},ry:{defaultValue:null,description:"vertical radius of box",name:"ry",required:!1,type:{name:"number"}},boxStyle:{defaultValue:null,description:"style for box",name:"boxStyle",required:!1,type:{name:"Partial<CSSProperties>"}},textStyle:{defaultValue:null,description:"style for text",name:"textStyle",required:!1,type:{name:"Partial<CSSProperties>"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/typography/BoxedLabel.tsx#BoxedLabel"]={docgenInfo:BoxedLabel.__docgenInfo,name:"BoxedLabel",path:"packages/annotation/src/typography/BoxedLabel.tsx#BoxedLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/typography/BoxedLabel.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_BoxedLabel_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/annotation/stories/typography/BoxedLabel.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_BoxedLabel_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"boxedlabel",children:"BoxedLabel"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BoxedLabel"})," displays a text label enclosed in a rectangle."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_BoxedLabel_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BoxedLabel"})," is closely related to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BoxedTitle"}),", but it offers more control of positioning."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"position",children:"Position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"})," marks a location on the chart / view.\nThis is specified as a pair of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"[x, y]"})," values.\nThe values can be specified as absolute svg coordinates, or as fractions of the view dimensions.\nIn the latter case, the prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"units"})," should be set to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'relative'"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BoxedLabel_stories__WEBPACK_IMPORTED_MODULE_4__.AbsolutePosition}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BoxedLabel_stories__WEBPACK_IMPORTED_MODULE_4__.RelativePosition}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"anchors",children:"Anchors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"anchor"})," determines what part of the label is aligned with the point on the chart designated by ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BoxedLabel_stories__WEBPACK_IMPORTED_MODULE_4__.AnchorTopLeftCorner}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BoxedLabel_stories__WEBPACK_IMPORTED_MODULE_4__.AnchorTopRightCorner}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"offset",children:"Offset"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"offset"})," accepts an array ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"[x, y]"}),", which shifts the position of the label.\nThe translation can be used, for example, to displace a label from the center or a corner."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BoxedLabel_stories__WEBPACK_IMPORTED_MODULE_4__.OffsetAboveCenter}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BoxedLabel_stories__WEBPACK_IMPORTED_MODULE_4__.OffsetAwayFromCorner}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"rotation",children:"Rotation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The label can be rotated using prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"angle"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BoxedLabel_stories__WEBPACK_IMPORTED_MODULE_4__.Rotation}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"It is possible to style the box as well as the text."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BoxedLabel_stories__WEBPACK_IMPORTED_MODULE_4__.Styling})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);