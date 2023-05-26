"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3289],{"./packages/annotation/stories/typography/Paragraph.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Centered:()=>Centered,InBoxedLabel:()=>InBoxedLabel,MiddleAlignment:()=>MiddleAlignment,Rotation:()=>Rotation,TopAlignment:()=>TopAlignment,WrappingDelimiter:()=>WrappingDelimiter,WrappingNarrow:()=>WrappingNarrow,WrappingWide:()=>WrappingWide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Paragraph_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),motion_minimal=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),utils=__webpack_require__("./packages/annotation/src/typography/utils.ts");const arial_namespaceObject=JSON.parse('{"0":8.899,"1":7.83,"2":8.899,"3":8.899,"4":8.899,"5":8.899,"6":8.899,"7":8.899,"8":8.899,"9":8.899," ":8.899,"A":10.628,"B":10.672,"C":11.555,"D":11.555,"E":10.672,"F":9.774,"G":12.446,"H":11.555,"I":4.446,"J":8,"K":10.672,"L":8.87,"M":13.329,"N":11.555,"O":12.446,"P":10.658,"Q":12.446,"R":11.555,"S":10.672,"T":9.745,"U":11.555,"V":10.672,"W":15.102,"X":10.672,"Y":10.644,"Z":9.774,"a":8.899,"b":8.899,"c":8,"d":8.899,"e":8.899,"f":4.185,"g":8.899,"h":8.899,"i":3.555,"j":3.555,"k":8,"l":3.555,"m":13.329,"n":8.899,"o":8.899,"p":8.899,"q":8.899,"r":5.329,"s":8,"t":4.466,"u":8.899,"v":8,"w":11.555,"x":8,"y":8,"z":8,".":4.466,",":4.466,"!":4.466,"?":8.899,"#":8.899}'),times_new_roman_namespaceObject=JSON.parse('{"0":8,"1":7.466,"2":8,"3":8,"4":8,"5":8,"6":8,"7":8,"8":8,"9":8," ":8,"A":11.511,"B":10.672,"C":10.672,"D":11.555,"E":9.774,"F":8.899,"G":11.555,"H":11.555,"I":5.329,"J":6.227,"K":11.555,"L":9.744,"M":14.227,"N":11.555,"O":11.555,"P":8.87,"Q":11.555,"R":10.672,"S":8.899,"T":9.745,"U":11.555,"V":11.526,"W":15.073,"X":11.555,"Y":11.496,"Z":9.774,"a":7.102,"b":8,"c":7.102,"d":8,"e":7.102,"f":5.069,"g":8,"h":8,"i":4.446,"j":4.446,"k":8,"l":4.446,"m":12.446,"n":8,"o":8,"p":8,"q":8,"r":5.329,"s":6.227,"t":4.446,"u":8,"v":8,"w":11.555,"x":8,"y":8,"z":7.102,".":4,",":4,"!":5.329,"?":7.102,"#":8}');var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Paragraph=function Paragraph(_ref){var _ref$position=_ref.position,position=void 0===_ref$position?[0,0]:_ref$position,_ref$size=_ref.size,size=void 0===_ref$size?[100,22]:_ref$size,_ref$align=_ref.align,align=void 0===_ref$align?.5:_ref$align,_ref$offset=_ref.offset,offset=void 0===_ref$offset?[0,0]:_ref$offset,angle=_ref.angle,separator=_ref.separator,_ref$letterBaseWidths=_ref.letterBaseWidths,letterBaseWidths=void 0===_ref$letterBaseWidths?"sans":_ref$letterBaseWidths,letterWidths=_ref.letterWidths,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,letters=(0,utils.h$)("sans"===letterBaseWidths?arial_namespaceObject:times_new_roman_namespaceObject,letterWidths),lines=(0,utils.PF)((0,utils.FB)(children),letters,size[chsk_core_es.X],separator),offsets=Array(lines.length).fill(0).map((function(_,index){return index*size[chsk_core_es.Y]})),maxOffset=offsets[offsets.length-1],x=position[chsk_core_es.X]+offset[chsk_core_es.X],y=position[chsk_core_es.Y]-align*maxOffset+offset[chsk_core_es.Y],compositeClassName=(0,chsk_core_es.gjB)("paragraph",className),config={x,y,rotate:angle,originX:"0px",originY:"0px"},content=lines.map((function(line,index){return(0,jsx_runtime.jsx)("text",{y:offsets[index],className:compositeClassName,style,children:line},"paragraph-"+index)}));return(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children:(0,jsx_runtime.jsx)(motion_minimal.m.g,{role:setRole?"paragraph":void 0,initial:config,animate:config,children:content})})};Paragraph.displayName="Paragraph";try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{size:{defaultValue:{value:"[100, 22]"},description:"size of individual lines (width, height)",name:"size",required:!1,type:{name:"SizeSpec"}},align:{defaultValue:{value:"0.5"},description:"vertical alignment",name:"align",required:!1,type:{name:"number"}},separator:{defaultValue:null,description:"separator string used to split text into lines",name:"separator",required:!1,type:{name:"string"}},letterBaseWidths:{defaultValue:{value:"sans"},description:"base letter width profiles",name:"letterBaseWidths",required:!1,type:{name:"enum",value:[{value:'"serif"'},{value:'"sans"'}]}},letterWidths:{defaultValue:null,description:"letter widths",name:"letterWidths",required:!1,type:{name:"Record<string, number>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},position:{defaultValue:{value:"[0, 0]"},description:"position (absolute coordinates)",name:"position",required:!1,type:{name:"NumericPositionSpec"}},angle:{defaultValue:null,description:"rotation (degrees)",name:"angle",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},offset:{defaultValue:{value:"[0, 0]"},description:"position offset added after anchoring and alignment",name:"offset",required:!1,type:{name:"NumericPositionSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/typography/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"packages/annotation/src/typography/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}var _TopAlignment$paramet,_TopAlignment$paramet2,_TopAlignment$paramet3,_MiddleAlignment$para,_MiddleAlignment$para2,_MiddleAlignment$para3,_Rotation$parameters,_Rotation$parameters2,_Rotation$parameters3,_WrappingWide$paramet,_WrappingWide$paramet2,_WrappingWide$paramet3,_WrappingNarrow$param,_WrappingNarrow$param2,_WrappingNarrow$param3,_WrappingDelimiter$pa,_WrappingDelimiter$pa2,_WrappingDelimiter$pa3,_Centered$parameters,_Centered$parameters2,_Centered$parameters3,_InBoxedLabel$paramet,_InBoxedLabel$paramet2,_InBoxedLabel$paramet3,BoxedLabel=__webpack_require__("./packages/annotation/src/typography/BoxedLabel.tsx"),decorators=__webpack_require__("./packages/annotation/stories/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Paragraph_stories={title:"Addons/Annotation/Typography/Paragraph",component:Paragraph};var TopAlignment={name:"top alignment",args:{position:[0,0],size:[100,26],align:0,style:{textAnchor:"start"},children:"Long text should wrap."},decorators:[decorators.ee]},MiddleAlignment={name:"middle alignment",args:{position:[0,0],size:[100,26],align:.5,style:{textAnchor:"start"},children:"Long text should wrap."},decorators:[decorators.ee]},Rotation={name:"rotation",args:{position:[60,80],size:[100,26],angle:-30,style:{textAnchor:"start"},children:"Long text should wrap."},decorators:[decorators.ee]},WrappingWide={name:"wrapping, wide",args:{position:[0,0],size:[180,22],align:0,style:{textAnchor:"start"},children:"Long text should wrap into several lines."},decorators:[decorators.ee]},WrappingNarrow={name:"wrapping, narrow",args:{position:[0,0],size:[80,32],align:0,style:{textAnchor:"start"},children:"Long text should wrap into several lines."},decorators:[decorators.ee]},WrappingDelimiter={name:"wrapping, delimiter",args:{position:[0,0],size:[180,22],align:0,separator:"\n",style:{textAnchor:"start"},children:"Long\ntext should wrap into several lines."},decorators:[decorators.ee]},Centered={name:"centered",args:{position:[120,60],size:[180,22],align:0,children:"Long text should wrap into several lines.",style:{fontWeight:600,textAnchor:"middle"}},decorators:[decorators.ee]},InBoxedLabel={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsx)(BoxedLabel.I,{position:[.5,.5],positionUnits:"relative",size:[200,100],sizeUnits:"absolute",boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:1},rx:8,ry:8,children:(0,jsx_runtime.jsx)(Paragraph,{position:[-85,0],size:[190,22],align:.5,style:{textAnchor:"start",dominantBaseline:"middle"},children:"Long text should wrap into several lines. Long text should wrap."})})]})},name:"boxed label"};TopAlignment.parameters=_extends({},TopAlignment.parameters,{docs:_extends({},null==(_TopAlignment$paramet=TopAlignment.parameters)?void 0:_TopAlignment$paramet.docs,{source:_extends({originalSource:"{\n  name: 'top alignment',\n  args: {\n    position: [0, 0],\n    size: [100, 26],\n    align: 0,\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long text should wrap.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_TopAlignment$paramet2=TopAlignment.parameters)||null==(_TopAlignment$paramet3=_TopAlignment$paramet2.docs)?void 0:_TopAlignment$paramet3.source)})}),MiddleAlignment.parameters=_extends({},MiddleAlignment.parameters,{docs:_extends({},null==(_MiddleAlignment$para=MiddleAlignment.parameters)?void 0:_MiddleAlignment$para.docs,{source:_extends({originalSource:"{\n  name: 'middle alignment',\n  args: {\n    position: [0, 0],\n    size: [100, 26],\n    align: 0.5,\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long text should wrap.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_MiddleAlignment$para2=MiddleAlignment.parameters)||null==(_MiddleAlignment$para3=_MiddleAlignment$para2.docs)?void 0:_MiddleAlignment$para3.source)})}),Rotation.parameters=_extends({},Rotation.parameters,{docs:_extends({},null==(_Rotation$parameters=Rotation.parameters)?void 0:_Rotation$parameters.docs,{source:_extends({originalSource:"{\n  name: 'rotation',\n  args: {\n    position: [60, 80],\n    size: [100, 26],\n    angle: -30,\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long text should wrap.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Rotation$parameters2=Rotation.parameters)||null==(_Rotation$parameters3=_Rotation$parameters2.docs)?void 0:_Rotation$parameters3.source)})}),WrappingWide.parameters=_extends({},WrappingWide.parameters,{docs:_extends({},null==(_WrappingWide$paramet=WrappingWide.parameters)?void 0:_WrappingWide$paramet.docs,{source:_extends({originalSource:"{\n  name: 'wrapping, wide',\n  args: {\n    position: [0, 0],\n    size: [180, 22],\n    align: 0,\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long text should wrap into several lines.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_WrappingWide$paramet2=WrappingWide.parameters)||null==(_WrappingWide$paramet3=_WrappingWide$paramet2.docs)?void 0:_WrappingWide$paramet3.source)})}),WrappingNarrow.parameters=_extends({},WrappingNarrow.parameters,{docs:_extends({},null==(_WrappingNarrow$param=WrappingNarrow.parameters)?void 0:_WrappingNarrow$param.docs,{source:_extends({originalSource:"{\n  name: 'wrapping, narrow',\n  args: {\n    position: [0, 0],\n    size: [80, 32],\n    align: 0,\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long text should wrap into several lines.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_WrappingNarrow$param2=WrappingNarrow.parameters)||null==(_WrappingNarrow$param3=_WrappingNarrow$param2.docs)?void 0:_WrappingNarrow$param3.source)})}),WrappingDelimiter.parameters=_extends({},WrappingDelimiter.parameters,{docs:_extends({},null==(_WrappingDelimiter$pa=WrappingDelimiter.parameters)?void 0:_WrappingDelimiter$pa.docs,{source:_extends({originalSource:"{\n  name: 'wrapping, delimiter',\n  args: {\n    position: [0, 0],\n    size: [180, 22],\n    align: 0,\n    separator: '\\n',\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long\\ntext should wrap into several lines.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_WrappingDelimiter$pa2=WrappingDelimiter.parameters)||null==(_WrappingDelimiter$pa3=_WrappingDelimiter$pa2.docs)?void 0:_WrappingDelimiter$pa3.source)})}),Centered.parameters=_extends({},Centered.parameters,{docs:_extends({},null==(_Centered$parameters=Centered.parameters)?void 0:_Centered$parameters.docs,{source:_extends({originalSource:"{\n  name: 'centered',\n  args: {\n    position: [120, 60],\n    size: [180, 22],\n    align: 0,\n    children: 'Long text should wrap into several lines.',\n    style: {\n      fontWeight: 600,\n      textAnchor: 'middle'\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Centered$parameters2=Centered.parameters)||null==(_Centered$parameters3=_Centered$parameters2.docs)?void 0:_Centered$parameters3.source)})}),InBoxedLabel.parameters=_extends({},InBoxedLabel.parameters,{docs:_extends({},null==(_InBoxedLabel$paramet=InBoxedLabel.parameters)?void 0:_InBoxedLabel$paramet.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <BoxedLabel position={[0.5, 0.5]} positionUnits={'relative'} size={[200, 100]} sizeUnits={'absolute'} boxStyle={{\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: 1\n    }} rx={8} ry={8}>\n                <Paragraph position={[-85, 0]} size={[190, 22]} align={0.5} style={{\n        textAnchor: 'start',\n        dominantBaseline: 'middle'\n      }}>\n                    Long text should wrap into several lines. Long text should wrap.\n                </Paragraph>\n            </BoxedLabel>\n        </Chart>,\n  name: 'boxed label'\n}"},null==(_InBoxedLabel$paramet2=InBoxedLabel.parameters)||null==(_InBoxedLabel$paramet3=_InBoxedLabel$paramet2.docs)?void 0:_InBoxedLabel$paramet3.source)})});var __namedExportsOrder=["TopAlignment","MiddleAlignment","Rotation","WrappingWide","WrappingNarrow","WrappingDelimiter","Centered","InBoxedLabel"]},"./packages/annotation/src/typography/BoxedLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>BoxedLabel});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BoxedLabel=function BoxedLabel(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"boxed-label":_ref$variant,_ref$position=_ref.position,position=void 0===_ref$position?[0,0]:_ref$position,_ref$positionUnits=_ref.positionUnits,positionUnits=void 0===_ref$positionUnits?"absolute":_ref$positionUnits,_ref$size=_ref.size,size=void 0===_ref$size?[100,32]:_ref$size,_ref$sizeUnits=_ref.sizeUnits,sizeUnits=void 0===_ref$sizeUnits?"absolute":_ref$sizeUnits,_ref$offset=_ref.offset,offset=void 0===_ref$offset?[0,0]:_ref$offset,_ref$anchor=_ref.anchor,anchor=void 0===_ref$anchor?[.5,.5]:_ref$anchor,_ref$angle=_ref.angle,angle=void 0===_ref$angle?0:_ref$angle,_ref$angleUnit=_ref.angleUnit,angleUnit=void 0===_ref$angleUnit?"degree":_ref$angleUnit,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?[0,0,0,0]:_ref$expansion,rx=_ref.rx,ry=_ref.ry,boxStyle=_ref.boxStyle,textStyle=_ref.textStyle,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,dimensions=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Bs9)(),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE1)().scales,absPos=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.eE7)(position,positionUnits,dimensions.size,scales),absSize=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.YEL)(size,sizeUnits,dimensions.size),_getAnchoredOrigin=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.ji)(absPos,absSize,anchor),x=_getAnchoredOrigin[0],y=_getAnchoredOrigin[1];x+=size[0]/2+offset[0],y+=size[1]/2+offset[1],absSize[0]+=expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RLj]+expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pXp],absSize[1]+=expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.GSB]+expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.DaS];var compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.gjB)(variant,className),content="string"==typeof children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{style:textStyle,className:"label "+compositeClassName,children}):children,config={x,y,rotate:angle&&"radian"===angleUnit?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.BVy)(angle):angle,originX:"0px",originY:"0px"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.g,{role:setRole?variant:void 0,initial:config,animate:config,style,className:compositeClassName,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.AeJ,{variant:"label",x:0,y:0,width:absSize[0],height:absSize[1],rx,ry,center:!0,className:compositeClassName,style:boxStyle,setRole:!1}),content]})};BoxedLabel.displayName="BoxedLabel";try{BoxedLabel.displayName="BoxedLabel",BoxedLabel.__docgenInfo={description:"",displayName:"BoxedLabel",props:{variant:{defaultValue:{value:"boxed-label"},description:"variant",name:"variant",required:!1,type:{name:"string"}},size:{defaultValue:{value:"[100, 32]"},description:"size of box in absolute units",name:"size",required:!1,type:{name:"SizeSpec"}},angle:{defaultValue:{value:"0"},description:"angle",name:"angle",required:!1,type:{name:"number"}},angleUnit:{defaultValue:{value:"degree"},description:"angle unit",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},position:{defaultValue:{value:"[0, 0]"},description:"container position",name:"position",required:!1,type:{name:"PositionSpec"}},positionUnits:{defaultValue:{value:"absolute"},description:"absolute or relative units for position",name:"positionUnits",required:!1,type:{name:"PositionUnits"}},sizeUnits:{defaultValue:{value:"absolute"},description:"absolute or relative units for position and size measurements",name:"sizeUnits",required:!1,type:{name:"SizeUnits"}},anchor:{defaultValue:{value:"[0.5, 0.5]"},description:"container anchor point",name:"anchor",required:!1,type:{name:"AnchorSpec"}},padding:{defaultValue:null,description:"padding (absolute values) *",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},offset:{defaultValue:{value:"[0, 0]"},description:"offset/translation applied after anchoring, absolute units",name:"offset",required:!1,type:{name:"NumericPositionSpec"}},expansion:{defaultValue:{value:"[0, 0, 0, 0]"},description:"expansion of box size",name:"expansion",required:!1,type:{name:"FourSideSizeSpec"}},rx:{defaultValue:null,description:"horizontal radius of box",name:"rx",required:!1,type:{name:"number"}},ry:{defaultValue:null,description:"vertical radius of box",name:"ry",required:!1,type:{name:"number"}},boxStyle:{defaultValue:null,description:"style for box",name:"boxStyle",required:!1,type:{name:"Partial<CSSProperties>"}},textStyle:{defaultValue:null,description:"style for text",name:"textStyle",required:!1,type:{name:"Partial<CSSProperties>"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/typography/BoxedLabel.tsx#BoxedLabel"]={docgenInfo:BoxedLabel.__docgenInfo,name:"BoxedLabel",path:"packages/annotation/src/typography/BoxedLabel.tsx#BoxedLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/src/typography/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FB:()=>getTextContent,PF:()=>splitText,h$:()=>getLetterProfile});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),getLetterProfile=function getLetterProfile(profile,adjustment){return(0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(profile),adjustment)},getTextContent=function getTextContent(node){return node?"string"==typeof node?node:"object"!=typeof node?String(node).toString():Array.isArray(node)?node.map((function(x){return getTextContent(x)})).join(""):String(node.props.children).toString():""},splitText=function splitText(content,widths,lineWidth,separator){var _widths$2,lines=separator?content.split(separator):[content];if(lines.length>1)return lines.map((function(line){return splitText(line,widths,lineWidth)})).flat();var result=[],words=lines[0].replace(/\n/g," ").split(" ").filter((function(word){return word.length>0})),wordLengths=words.map((function(word){return function wordLength(word,widths){var _widths$,fallback=null!=(_widths$=widths[" "])?_widths$:0;return word.split("").reduce((function(total,letter){var _widths$letter;return total+(null!=(_widths$letter=widths[letter])?_widths$letter:fallback)}),0)}(word,widths)})),spaceLength=null!=(_widths$2=widths[" "])?_widths$2:0,line="",lineLength=0;return words.forEach((function(word,index){var wordLength=wordLengths[index];lineLength+spaceLength+wordLength<lineWidth?(lineLength+=(line.length>0?spaceLength:0)+wordLength,line+=(line.length>0?" ":"")+word):(result.push(line),line=word,lineLength=wordLength)})),result.push(line),result.filter((function(word){return word.length>0}))}},"./packages/annotation/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>barProps,I8:()=>ChartBandViewAxisDecorator,VK:()=>ChartBandViewDecorator,cK:()=>ChartLinearViewDecorator,ee:()=>ChartDecorator,vr:()=>ChartLinearViewAxisDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2,paddingOuter:0},scaleY:{variant:"linear",domain:[0,100]},children:[Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"})]})]})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";var ChartBandViewAxisDecorator=function ChartBandViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"}),Story()]})]})};ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator";var ChartLinearViewDecorator=function ChartLinearViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"})]})]})};ChartLinearViewDecorator.displayName="ChartLinearViewDecorator";var ChartLinearViewAxisDecorator=function ChartLinearViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"}),Story()]})]})};ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator";var barProps={data:[{id:"alpha",x:10},{id:"beta",x:20}],keys:["x"],horizontal:!0,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}};try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/annotation/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator",ChartBandViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartBandViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"]={docgenInfo:ChartBandViewAxisDecorator.__docgenInfo,name:"ChartBandViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewDecorator.displayName="ChartLinearViewDecorator",ChartLinearViewDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"]={docgenInfo:ChartLinearViewDecorator.__docgenInfo,name:"ChartLinearViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator",ChartLinearViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"]={docgenInfo:ChartLinearViewAxisDecorator.__docgenInfo,name:"ChartLinearViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/framer-motion/dist/es/animation/animate.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>animate});var _index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/index.mjs"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function animate(from,to,transition={}){const value=(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(from)?from:(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(from);return value.start((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Z)("",value,to,transition)),{stop:()=>value.stop(),isAnimating:()=>value.isAnimating()}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/framer-motion/dist/es/utils/process.mjs"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs"),warn_once=__webpack_require__("./node_modules/framer-motion/dist/es/utils/warn-once.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{exitBeforeEnter&&(mode="wait",(0,warn_once.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[forceRender]=function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Z_.postRender(forceRender)),[forceRender]),forcedRenderCount]}();const forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);const isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((()=>{isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return"wait"===mode&&exiting.size&&(childrenToRender=[]),exiting.forEach((key=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:()=>{allChildren.delete(key),exiting.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout,mode},child))})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),"production"!==process.O&&"wait"===mode&&childrenToRender.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);