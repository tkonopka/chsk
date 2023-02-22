"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4390],{"./packages/core/stories/components/typography/Counter.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,counter:()=>counter,default:()=>Counter_stories,percentages:()=>percentages});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),src=__webpack_require__("./packages/core/src/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),randomUniformValue=function randomUniformValue(min,max){return min+Math.random()*(max-min)},CounterController=function CounterController(_ref){var _ref$position=_ref.position,position=void 0===_ref$position?[0,0]:_ref$position,_ref$format=_ref.format,format=void 0===_ref$format?function(v){return String(v)}:_ref$format,_useState=(0,react.useState)(Math.round(randomUniformValue(0,100))),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return function updateValue(){setValue(Math.round(randomUniformValue(0,100)))}()},children:"Update value"})}),(0,jsx_runtime.jsxs)(src.kL,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(src.Tg,{variant:"inner"}),(0,jsx_runtime.jsx)(src.G7,{children:(0,jsx_runtime.jsx)(src.AT,{position,format,style:{fontSize:24},children:value})})]})]})};try{CounterController.displayName="CounterController",CounterController.__docgenInfo={description:"",displayName:"CounterController",props:{position:{defaultValue:{value:"[0, 0]"},description:"position for center of label container",name:"position",required:!1,type:{name:"NumericPositionSpec"}},format:{defaultValue:{value:"(v: number) => String(v)"},description:"format",name:"format",required:!1,type:{name:"((v: number) => string)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/typography/CounterController.tsx#CounterController"]={docgenInfo:CounterController.__docgenInfo,name:"CounterController",path:"packages/core/stories/components/typography/CounterController.tsx#CounterController"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>{const{Label}=(0,lib.ah)();return Label||function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}("Label",!0),(0,jsx_runtime.jsx)(Label,{...args})};const counter=()=>(0,jsx_runtime.jsx)(CounterController,{position:[40,40]});counter.storyName="counter",counter.parameters={storySource:{source:"<CounterController position={[40, 40]} />"}};const percentages=()=>(0,jsx_runtime.jsx)(CounterController,{position:[40,40],format:v=>String(v)+"%"});percentages.storyName="percentages",percentages.parameters={storySource:{source:'<CounterController position={[40, 40]} format={v => String(v) + "%"} />'}};const componentMeta={title:"Core/Components/Text/Counter",tags:["stories-mdx"],includeStories:["counter","percentages"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"counter",children:"Counter"}),"\n",(0,jsx_runtime.jsx)(dist.h_,{title:"Core/Components/Text/Counter"}),"\n","\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Counter"})," creates a text element with a number. Its characteristic feature is that when data changes, the number is animated."]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:src.AT}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"position",children:"Position"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Counter"})," shares many props with ",(0,jsx_runtime.jsx)(_components.code,{children:"Typography"}),". The position of the text, for example, is determined by prop ",(0,jsx_runtime.jsx)(_components.code,{children:"position"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"counter",children:(0,jsx_runtime.jsx)(CounterController,{position:[40,40]})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"content-format",children:"Content format"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Counter"})," always displays a number, but the format can be adjusted using prop ",(0,jsx_runtime.jsx)(_components.code,{children:"format"}),", for example, to display percentages."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"percentages",children:(0,jsx_runtime.jsx)(CounterController,{position:[40,40],format:v=>String(v)+"%"})})})]})}}};const Counter_stories=componentMeta}}]);