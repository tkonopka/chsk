"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4241],{"./packages/xy/stories/scatter/ScatterCurve.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AveragedDownsampledIndex0:()=>AveragedDownsampledIndex0,AveragedDownsampledIndex1:()=>AveragedDownsampledIndex1,DownsampleIndex0:()=>DownsampleIndex0,DownsampleIndex1:()=>DownsampleIndex1,HistoricAverage:()=>HistoricAverage,LinearCurve:()=>LinearCurve,MultipleSeries:()=>MultipleSeries,StepCurve:()=>StepCurve,SymmetricAverage:()=>SymmetricAverage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _chsk_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/xy/src/scatter/ScatterCurve.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/src/scatter/Scatter.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/xy/stories/scatter/decorators.tsx"),_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/xy/stories/scatter/dataPolynomials.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/XY/Scatter/ScatterCurve",component:_src__WEBPACK_IMPORTED_MODULE_1__.n},LinearCurve={name:"linear curve",args:{ids:["quadratic"],curve:"Linear"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.WC]},StepCurve={name:"step curve",args:{ids:["quadratic"],curve:"Step"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.WC]},MultipleSeries={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.b,{data:_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__,x:"x",y:"y",scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.RDh,{variant:"left",label:"y (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.n,{ids:["linear"],curve:"Step",style:{strokeWidth:3}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.n,{ids:["quadratic"],curve:"Linear",style:{strokeDasharray:"6 6",strokeWidth:3}})]})}),name:"multiple series"},DownsampleIndex0={name:"downsample, index 0",args:{ids:["A"],curve:"Natural",downsampleFactor:.5,downsampleIndex:0},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.qb]},DownsampleIndex1={name:"downsample, index 1",args:{ids:["A"],curve:"Natural",downsampleFactor:.5,downsampleIndex:1},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.qb]},HistoricAverage={name:"historic average",args:{ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:0},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.qb]},SymmetricAverage={name:"symmetric average",args:{ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:-1},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.qb]},AveragedDownsampledIndex0={name:"averaged, downsampled, index 0",args:{ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:-1,downsampleFactor:.5,downsampleIndex:0},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.qb]},AveragedDownsampledIndex1={name:"averaged, downsampled, index 1",args:{ids:["A"],curve:"Natural",convolutionMask:[1,1,1],convolutionOffset:-1,downsampleFactor:.5,downsampleIndex:1},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.qb]},__namedExportsOrder=["LinearCurve","StepCurve","MultipleSeries","DownsampleIndex0","DownsampleIndex1","HistoricAverage","SymmetricAverage","AveragedDownsampledIndex0","AveragedDownsampledIndex1"];LinearCurve.parameters={...LinearCurve.parameters,docs:{...LinearCurve.parameters?.docs,source:{originalSource:"{\n  name: 'linear curve',\n  args: {\n    ids: ['quadratic'],\n    curve: 'Linear'\n  },\n  decorators: [ChartScatterDecorator]\n}",...LinearCurve.parameters?.docs?.source}}},StepCurve.parameters={...StepCurve.parameters,docs:{...StepCurve.parameters?.docs,source:{originalSource:"{\n  name: 'step curve',\n  args: {\n    ids: ['quadratic'],\n    curve: 'Step'\n  },\n  decorators: [ChartScatterDecorator]\n}",...StepCurve.parameters?.docs?.source}}},MultipleSeries.parameters={...MultipleSeries.parameters,docs:{...MultipleSeries.parameters?.docs,source:{originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{\n    display: 'inline-block'\n  }}>\n            <Scatter data={data} x={'x'} y={'y'} scaleX={{\n      variant: 'linear',\n      domain: [0, 'auto']\n    }} scaleY={{\n      variant: 'linear',\n      domain: [0, 'auto']\n    }}>\n                <Axis variant={'bottom'} label={'x (a.u.)'} />\n                <Axis variant={'left'} label={'y (a.u.)'} />\n                <ScatterCurve ids={['linear']} curve=\"Step\" style={{\n        strokeWidth: 3\n      }} />\n                <ScatterCurve ids={['quadratic']} curve=\"Linear\" style={{\n        strokeDasharray: '6 6',\n        strokeWidth: 3\n      }} />\n            </Scatter>\n        </Chart>,\n  name: 'multiple series'\n}",...MultipleSeries.parameters?.docs?.source}}},DownsampleIndex0.parameters={...DownsampleIndex0.parameters,docs:{...DownsampleIndex0.parameters?.docs,source:{originalSource:"{\n  name: 'downsample, index 0',\n  args: {\n    ids: ['A'],\n    curve: 'Natural',\n    downsampleFactor: 0.5,\n    downsampleIndex: 0\n  },\n  decorators: [ChartWithNoisyPointsDecorator]\n}",...DownsampleIndex0.parameters?.docs?.source}}},DownsampleIndex1.parameters={...DownsampleIndex1.parameters,docs:{...DownsampleIndex1.parameters?.docs,source:{originalSource:"{\n  name: 'downsample, index 1',\n  args: {\n    ids: ['A'],\n    curve: 'Natural',\n    downsampleFactor: 0.5,\n    downsampleIndex: 1\n  },\n  decorators: [ChartWithNoisyPointsDecorator]\n}",...DownsampleIndex1.parameters?.docs?.source}}},HistoricAverage.parameters={...HistoricAverage.parameters,docs:{...HistoricAverage.parameters?.docs,source:{originalSource:"{\n  name: 'historic average',\n  args: {\n    ids: ['A'],\n    curve: 'Natural',\n    convolutionMask: [1, 1, 1],\n    convolutionOffset: 0\n  },\n  decorators: [ChartWithNoisyPointsDecorator]\n}",...HistoricAverage.parameters?.docs?.source}}},SymmetricAverage.parameters={...SymmetricAverage.parameters,docs:{...SymmetricAverage.parameters?.docs,source:{originalSource:"{\n  name: 'symmetric average',\n  args: {\n    ids: ['A'],\n    curve: 'Natural',\n    convolutionMask: [1, 1, 1],\n    convolutionOffset: -1\n  },\n  decorators: [ChartWithNoisyPointsDecorator]\n}",...SymmetricAverage.parameters?.docs?.source}}},AveragedDownsampledIndex0.parameters={...AveragedDownsampledIndex0.parameters,docs:{...AveragedDownsampledIndex0.parameters?.docs,source:{originalSource:"{\n  name: 'averaged, downsampled, index 0',\n  args: {\n    ids: ['A'],\n    curve: 'Natural',\n    convolutionMask: [1, 1, 1],\n    convolutionOffset: -1,\n    downsampleFactor: 0.5,\n    downsampleIndex: 0\n  },\n  decorators: [ChartWithNoisyPointsDecorator]\n}",...AveragedDownsampledIndex0.parameters?.docs?.source}}},AveragedDownsampledIndex1.parameters={...AveragedDownsampledIndex1.parameters,docs:{...AveragedDownsampledIndex1.parameters?.docs,source:{originalSource:"{\n  name: 'averaged, downsampled, index 1',\n  args: {\n    ids: ['A'],\n    curve: 'Natural',\n    convolutionMask: [1, 1, 1],\n    convolutionOffset: -1,\n    downsampleFactor: 0.5,\n    downsampleIndex: 1\n  },\n  decorators: [ChartWithNoisyPointsDecorator]\n}",...AveragedDownsampledIndex1.parameters?.docs?.source}}}}}]);