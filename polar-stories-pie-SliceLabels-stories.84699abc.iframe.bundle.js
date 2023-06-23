"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8050],{"./packages/polar/stories/pie/SliceLabels.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Doughnut:()=>Doughnut,MinimumAngle:()=>MinimumAngle,Pie:()=>Pie,SelectedIds:()=>SelectedIds,Styled:()=>Styled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SliceLabels_stories});var react=__webpack_require__("./node_modules/react/index.js"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),predicates=__webpack_require__("./packages/polar/src/pie/predicates.ts"),SliceLabel=__webpack_require__("./packages/polar/src/pie/SliceLabel.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),SliceLabels=function SliceLabels(_ref){var ids=_ref.ids,_ref$align=_ref.align,align=void 0===_ref$align?[.5,.5]:_ref$align,_ref$minAngle=_ref.minAngle,minAngle=void 0===_ref$minAngle?10:_ref$minAngle,_ref$angleUnit=_ref.angleUnit,angleUnit=void 0===_ref$angleUnit?"degree":_ref$angleUnit,_ref$format=_ref.format,format=void 0===_ref$format?function(v){return String(v.data)}:_ref$format,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0!==_ref$setRole&&_ref$setRole,style=_ref.style,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?chsk_core_es.Wnl:_ref$dataComponent,component=_ref.component,processedData=(0,chsk_core_es.wIO)(),rScale=(0,chsk_core_es.kE1)().scales.x,data=processedData.data,idSet=(0,chsk_core_es.lRm)(ids,null,processedData).idSet;if(!(0,predicates.X)(data))return null;var minAngleRad="degree"===angleUnit?(0,chsk_core_es.VlM)(minAngle):minAngle,r0=rScale(0),result=data.map((function(seriesData,i){return idSet.has(seriesData.id)?seriesData.endAngle-seriesData.startAngle<minAngleRad?null:(0,react.createElement)(dataComponent,{key:"label-"+i,component:null!=component?component:SliceLabel.w,data:seriesData,props:{startAngle:seriesData.startAngle,endAngle:seriesData.endAngle,innerRadius:rScale(seriesData.rInner)-r0,outerRadius:rScale(seriesData.rOuter)-r0,angleUnit:"radian",align,className,style,setRole,children:format(seriesData)}}):null}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result.filter(Boolean)})};try{SliceLabels.displayName="SliceLabels",SliceLabels.__docgenInfo={description:"",displayName:"SliceLabels",props:{align:{defaultValue:{value:"[0.5, 0.5]"},description:"alignment [r, theta]",name:"align",required:!1,type:{name:"AlignSpec"}},minAngle:{defaultValue:{value:"10"},description:"minimum angle (degrees)",name:"minAngle",required:!1,type:{name:"number"}},angleUnit:{defaultValue:{value:"degree"},description:"angle unit",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}},format:{defaultValue:{value:"(v: PieProcessedDataItem) => String(v.data)"},description:"format for text",name:"format",required:!1,type:{name:"((v: PieProcessedDataItem) => string)"}},component:{defaultValue:null,description:"components used to render text",name:"component",required:!1,type:{name:"FC<SliceLabelProps>"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"false"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},radial:{defaultValue:null,description:"flag, orient text radially",name:"radial",required:!1,type:{name:"boolean"}},tangential:{defaultValue:null,description:"flag, orient text tangentially",name:"tangential",required:!1,type:{name:"boolean"}},ids:{defaultValue:null,description:"/** ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<PieProcessedDataItem, SliceLabelProps>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/pie/SliceLabels.tsx#SliceLabels"]={docgenInfo:SliceLabels.__docgenInfo,name:"SliceLabels",path:"packages/polar/src/pie/SliceLabels.tsx#SliceLabels"})}catch(__react_docgen_typescript_loader_error){}var _Doughnut$parameters,_Doughnut$parameters2,_Doughnut$parameters3,_Pie$parameters,_Pie$parameters2,_Pie$parameters2$docs,_SelectedIds$paramete,_SelectedIds$paramete2,_SelectedIds$paramete3,_MinimumAngle$paramet,_MinimumAngle$paramet2,_MinimumAngle$paramet3,_Styled$parameters,_Styled$parameters2,_Styled$parameters2$d,decorators=__webpack_require__("./packages/polar/stories/pie/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SliceLabels_stories={title:"Addons/Polar/Pie/SliceLabels",component:SliceLabels};var Doughnut={name:"doughnut",args:{align:[.5,.5]},decorators:[decorators.aW]},Pie={name:"pie",args:{align:[.8,.5]},decorators:[decorators.R_]},SelectedIds={name:"selected ids",args:{ids:["alpha","gamma"]},decorators:[decorators.aW]},MinimumAngle={name:"minimum angle",args:{minAngle:80,angleUnit:"degree"},decorators:[decorators.aW]},Styled={name:"styled",args:{style:{fill:"#ffffff",fontSize:"14px",fontWeight:600}},decorators:[decorators.aW]};Doughnut.parameters=_extends({},Doughnut.parameters,{docs:_extends({},null==(_Doughnut$parameters=Doughnut.parameters)?void 0:_Doughnut$parameters.docs,{source:_extends({originalSource:"{\n  name: 'doughnut',\n  args: {\n    align: [0.5, 0.5]\n  },\n  decorators: [ChartDoughnutSlicesDecorator]\n}"},null==(_Doughnut$parameters2=Doughnut.parameters)||null==(_Doughnut$parameters3=_Doughnut$parameters2.docs)?void 0:_Doughnut$parameters3.source)})}),Pie.parameters=_extends({},Pie.parameters,{docs:_extends({},null==(_Pie$parameters=Pie.parameters)?void 0:_Pie$parameters.docs,{source:_extends({originalSource:"{\n  name: 'pie',\n  args: {\n    align: [0.8, 0.5]\n  },\n  decorators: [ChartPieSlicesDecorator]\n}"},null==(_Pie$parameters2=Pie.parameters)||null==(_Pie$parameters2$docs=_Pie$parameters2.docs)?void 0:_Pie$parameters2$docs.source)})}),SelectedIds.parameters=_extends({},SelectedIds.parameters,{docs:_extends({},null==(_SelectedIds$paramete=SelectedIds.parameters)?void 0:_SelectedIds$paramete.docs,{source:_extends({originalSource:"{\n  name: 'selected ids',\n  args: {\n    ids: ['alpha', 'gamma']\n  },\n  decorators: [ChartDoughnutSlicesDecorator]\n}"},null==(_SelectedIds$paramete2=SelectedIds.parameters)||null==(_SelectedIds$paramete3=_SelectedIds$paramete2.docs)?void 0:_SelectedIds$paramete3.source)})}),MinimumAngle.parameters=_extends({},MinimumAngle.parameters,{docs:_extends({},null==(_MinimumAngle$paramet=MinimumAngle.parameters)?void 0:_MinimumAngle$paramet.docs,{source:_extends({originalSource:"{\n  name: 'minimum angle',\n  args: {\n    minAngle: 80,\n    angleUnit: 'degree'\n  },\n  decorators: [ChartDoughnutSlicesDecorator]\n}"},null==(_MinimumAngle$paramet2=MinimumAngle.parameters)||null==(_MinimumAngle$paramet3=_MinimumAngle$paramet2.docs)?void 0:_MinimumAngle$paramet3.source)})}),Styled.parameters=_extends({},Styled.parameters,{docs:_extends({},null==(_Styled$parameters=Styled.parameters)?void 0:_Styled$parameters.docs,{source:_extends({originalSource:"{\n  name: 'styled',\n  args: {\n    style: {\n      fill: '#ffffff',\n      fontSize: '14px',\n      fontWeight: 600\n    }\n  },\n  decorators: [ChartDoughnutSlicesDecorator]\n}"},null==(_Styled$parameters2=Styled.parameters)||null==(_Styled$parameters2$d=_Styled$parameters2.docs)?void 0:_Styled$parameters2$d.source)})});var __namedExportsOrder=["Doughnut","Pie","SelectedIds","MinimumAngle","Styled"]}}]);