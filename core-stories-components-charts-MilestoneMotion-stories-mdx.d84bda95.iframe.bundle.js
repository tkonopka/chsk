"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8390],{"./packages/core/stories/components/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OR:()=>ChartViewDecorator,VK:()=>ChartBandViewDecorator,ee:()=>ChartDecorator,ke:()=>viewSeriesIndexesKeys,z5:()=>DivDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},DivDecorator=function DivDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};DivDecorator.displayName="DivDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tg,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartViewDecorator=function ChartViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tg,{variant:"inner"}),Story()]})})};ChartViewDecorator.displayName="ChartViewDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,300],padding:[60,40,60,80],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7,{scaleX:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},scaleY:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tg,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RD,{variant:"left"})]})})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";try{DivDecorator.displayName="DivDecorator",DivDecorator.__docgenInfo={description:"",displayName:"DivDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#DivDecorator"]={docgenInfo:DivDecorator.__docgenInfo,name:"DivDecorator",path:"packages/core/stories/components/decorators.tsx#DivDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/core/stories/components/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartViewDecorator.displayName="ChartViewDecorator",ChartViewDecorator.__docgenInfo={description:"",displayName:"ChartViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartViewDecorator"]={docgenInfo:ChartViewDecorator.__docgenInfo,name:"ChartViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/charts/MilestoneMotion.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,customMilestones:()=>customMilestones,default:()=>MilestoneMotion_stories,entryAndExitMilestones:()=>entryAndExitMilestones,entryMilestones:()=>entryMilestones,exitMilestones:()=>exitMilestones});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),src=__webpack_require__("./packages/core/src/index.tsx"),jsx_runtime=(__webpack_require__("./packages/core/stories/components/decorators.tsx"),__webpack_require__("./node_modules/react/jsx-runtime.js")),MilestonePreview=function MilestonePreview(){var _useMilestones,milestones=Array.from(null!=(_useMilestones=(0,src.ib)())?_useMilestones:[]),size=(0,src.Di)().size,pos=[size[src.X]/2,size[src.Y]+20];return(0,jsx_runtime.jsxs)(src.ZT,{position:pos,style:{textAnchor:"middle",alignmentBaseline:"middle",fill:"#7777bb"},children:["Milestones: ",JSON.stringify(milestones)]})};MilestonePreview.displayName="MilestonePreview";var EntryMilestones=function EntryMilestones(){var ref=(0,react.useRef)(null),toggleMilestone=function toggleMilestone(m){var _ref$current;null==(_ref$current=ref.current)||_ref$current.toggleMilestone(m)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("left")},children:"Toggle milestone ‘left‘"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("right")},children:"Toggle milestone ‘right‘"})]}),(0,jsx_runtime.jsxs)(src.kL,{fref:ref,size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(src.Tg,{variant:"inner"}),(0,jsx_runtime.jsxs)(src.G7,{children:[(0,jsx_runtime.jsx)(src.lq,{initial:"invisible",initialOn:"left",children:(0,jsx_runtime.jsx)(src.RD,{variant:"left"})}),(0,jsx_runtime.jsx)(src.lq,{initial:"invisible",initialOn:"right",children:(0,jsx_runtime.jsx)(src.RD,{variant:"right"})})]}),(0,jsx_runtime.jsx)(MilestonePreview,{})]})]})},ExitMilestones=function ExitMilestones(){var ref=(0,react.useRef)(null),toggleMilestone=function toggleMilestone(m){var _ref$current2;null==(_ref$current2=ref.current)||_ref$current2.toggleMilestone(m)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("left")},children:"Toggle milestone ‘left‘"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("right")},children:"Toggle milestone ‘right‘"})]}),(0,jsx_runtime.jsxs)(src.kL,{fref:ref,size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(src.Tg,{variant:"inner"}),(0,jsx_runtime.jsxs)(src.G7,{children:[(0,jsx_runtime.jsx)(src.lq,{exit:"invisible",exitOn:"left",children:(0,jsx_runtime.jsx)(src.RD,{variant:"left"})}),(0,jsx_runtime.jsx)(src.lq,{exit:"invisible",exitOn:"right",children:(0,jsx_runtime.jsx)(src.RD,{variant:"right"})})]}),(0,jsx_runtime.jsx)(MilestonePreview,{})]})]})},EntryExitMilestones=function EntryExitMilestones(_ref){var initial=_ref.initial,exit=_ref.exit,ref=(0,react.useRef)(null),toggleMilestone=function toggleMilestone(m){var _ref$current3;null==(_ref$current3=ref.current)||_ref$current3.toggleMilestone(m)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("A")},children:"Toggle ‘A‘"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("B")},children:"Toggle ‘B‘"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("C")},children:"Toggle ‘C‘"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("D")},children:"Toggle ‘D‘"})]}),(0,jsx_runtime.jsxs)(src.kL,{fref:ref,size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(src.Tg,{variant:"inner"}),(0,jsx_runtime.jsxs)(src.G7,{children:[(0,jsx_runtime.jsx)(src.lq,{initial,initialOn:"A",exit,exitOn:"B",children:(0,jsx_runtime.jsx)(src.RD,{variant:"left"})}),(0,jsx_runtime.jsx)(src.lq,{initial,initialOn:"C",exit,exitOn:"D",visible:!0,children:(0,jsx_runtime.jsx)(src.RD,{variant:"right"})})]}),(0,jsx_runtime.jsx)(MilestonePreview,{})]})]})};try{EntryExitMilestones.displayName="EntryExitMilestones",EntryExitMilestones.__docgenInfo={description:"",displayName:"EntryExitMilestones",props:{initial:{defaultValue:null,description:"",name:"initial",required:!0,type:{name:"AnimationSpec"}},exit:{defaultValue:null,description:"",name:"exit",required:!0,type:{name:"AnimationSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/charts/Milestone.animations.tsx#EntryExitMilestones"]={docgenInfo:EntryExitMilestones.__docgenInfo,name:"EntryExitMilestones",path:"packages/core/stories/components/charts/Milestone.animations.tsx#EntryExitMilestones"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>(0,jsx_runtime.jsx)(src.lq,{...args});const entryMilestones=()=>(0,jsx_runtime.jsx)(EntryMilestones,{});entryMilestones.storyName="entry milestones",entryMilestones.parameters={storySource:{source:"<EntryMilestones />"}};const exitMilestones=()=>(0,jsx_runtime.jsx)(ExitMilestones,{});exitMilestones.storyName="exit milestones",exitMilestones.parameters={storySource:{source:"<ExitMilestones />"}};const entryAndExitMilestones=()=>(0,jsx_runtime.jsx)(EntryExitMilestones,{initial:"hidden",exit:"hidden"});entryAndExitMilestones.storyName="entry and exit milestones",entryAndExitMilestones.parameters={storySource:{source:'<EntryExitMilestones initial={"hidden"} exit={"hidden"} />'}};const customMilestones=()=>(0,jsx_runtime.jsx)(EntryExitMilestones,{initial:{opacity:0,x:-80},exit:{opacity:0,scale:3}});customMilestones.storyName="custom milestones",customMilestones.parameters={storySource:{source:"<EntryExitMilestones initial={{\n  opacity: 0,\n  x: -80\n}} exit={{\n  opacity: 0,\n  scale: 3\n}} />"}};const componentMeta={title:"Core/Components/Charts/MilestoneMotion",tags:["stories-mdx"],includeStories:["entryMilestones","exitMilestones","entryAndExitMilestones","customMilestones"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"milestonemotion",children:"MilestoneMotion"}),"\n",(0,jsx_runtime.jsx)(dist.h_,{title:"Core/Components/Charts/MilestoneMotion"}),"\n","\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"MilestoneMotion"})," is an organizational component. It does not draw anything itself, but it controls when its children elements appear and disappear."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Charts keep track of a set of 'milestones', which can be toggled on and off, for example using buttons. ",(0,jsx_runtime.jsx)(_components.code,{children:"MilestoneMotion"})," components detect changes in the milestones and trigger the visibility of their children elements."]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:src.lq}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Note: examples on this page involve multiple components, including external buttons. For this reason, the code is more than a few lines long; the complete source code is available in the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/tkonopka/chsk/blob/main/packages/core/stories/components/Milestone.animations.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:"source repository"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"entry-milestones",children:"Entry milestones"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Prop ",(0,jsx_runtime.jsx)(_components.code,{children:"initialOn"})," specifies the milestone at which a component should appear into view. Prop ",(0,jsx_runtime.jsx)(_components.code,{children:"initial"})," specifies the initial state of the entry animation."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The example below uses a fade-in animation. Click on the buttons to toggle a milestone and observe the animation. The two milestones can be toggled independently of each other."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"entry milestones",children:(0,jsx_runtime.jsx)(EntryMilestones,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"exit-milestones",children:"Exit milestones"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Props ",(0,jsx_runtime.jsx)(_components.code,{children:"exitOn"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"exit"})," are analogous to ",(0,jsx_runtime.jsx)(_components.code,{children:"initialOn"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"initial"}),", respectively, except that they determine how components disappear."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"In the example below, the axes are present by default. Click on the buttons to toggle the milestones and observe the axes fade out."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"exit milestones",children:(0,jsx_runtime.jsx)(ExitMilestones,{})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"entry-and-exit-milestones",children:"Entry and exit milestones"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The entry and exit settings can be used together. In the example below, the left and right axes are configured to be invisible and visible by default, respectively."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"entry and exit milestones",children:(0,jsx_runtime.jsx)(EntryExitMilestones,{initial:"hidden",exit:"hidden"})})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Some sequences of button clicks may produce similar effects, or not produce any changes at all."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For example, after setting milestone 'A', the left axis will be in view. In this state, toggling either milestone 'A' or 'B' will have the same effect, i.e. making the axis disappear. Revoking the 'A' milestone and triggering the exit milestone 'B' effectively give the same visual result."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"As another example, after setting milestones 'A' and then 'B', the left axis will first appear into view and then disappear. Toggling milestone 'A' to make the left axis appear will not produce any effect because milestone 'B' signals the component should be invisible."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"custom-animations",children:"Custom animations"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Props ",(0,jsx_runtime.jsx)(_components.code,{children:"initial"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"exit"})," can be set with custom objects that create complex animations. In the example below, the entry animations include a slide from the left side. The exit animations include a zoom-out effect."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"custom milestones",children:(0,jsx_runtime.jsx)(EntryExitMilestones,{initial:{opacity:0,x:-80},exit:{opacity:0,scale:3}})})})]})}}};const MilestoneMotion_stories=componentMeta}}]);