"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[8661],{"./packages/components/src/core/Accordion/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LivePreview:()=>LivePreview,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),AccordionDetails_AccordionDetails=__webpack_require__("./node_modules/@mui/material/AccordionDetails/AccordionDetails.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var StyledAccordionDetails=(0,styled.ZP)(AccordionDetails_AccordionDetails.Z)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.GW,(function(props){var spaces=(0,styles.Gr)(props);return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n      padding: ","px;\n      padding-top: ","px;\n    "])),null==spaces?void 0:spaces.m,null==spaces?void 0:spaces.xxs)})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),components_AccordionDetails_AccordionDetails=function AccordionDetails(props){var children=props.children;return(0,jsx_runtime.jsx)(StyledAccordionDetails,{children})};const components_AccordionDetails=components_AccordionDetails_AccordionDetails;try{components_AccordionDetails_AccordionDetails.displayName="AccordionDetails",components_AccordionDetails_AccordionDetails.__docgenInfo={description:"",displayName:"AccordionDetails",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Accordion/components/AccordionDetails/index.tsx#AccordionDetails"]={docgenInfo:components_AccordionDetails_AccordionDetails.__docgenInfo,name:"AccordionDetails",path:"packages/components/src/core/Accordion/components/AccordionDetails/index.tsx#AccordionDetails"})}catch(__react_docgen_typescript_loader_error){}var style_templateObject,style_templateObject2,_templateObject3,_templateObject4,Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),AccordionSummary=__webpack_require__("./node_modules/@mui/material/AccordionSummary/AccordionSummary.js");function style_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var StyledAccordionHeader=(0,styled.ZP)(AccordionSummary.Z)(style_templateObject||(style_templateObject=style_taggedTemplateLiteral(["\n  ","\n  ","\n"])),styles.FT,(function(props){var spaces=(0,styles.Gr)(props),colors=(0,styles.EC)(props);return(0,emotion_react_browser_esm.iv)(style_templateObject2||(style_templateObject2=style_taggedTemplateLiteral(["\n      padding: ","px;\n      min-height: 40px;\n      align-items: flex-start;\n      box-sizing: border-box;\n\n      &.Mui-expanded {\n        min-height: 40px;\n      }\n\n      .MuiAccordionSummary-content {\n        margin: 0;\n        flex-direction: column;\n\n        &.Mui-expanded {\n          margin: 0;\n        }\n      }\n\n      .MuiAccordionSummary-expandIconWrapper {\n        padding: 0px;\n        margin-right: 0;\n        margin-left: ","px;\n        svg {\n          color: ",";\n        }\n      }\n    "])),null==spaces?void 0:spaces.m,null==spaces?void 0:spaces.m,null==colors?void 0:colors.gray[500])})),StyledSubtitle=(0,styled.ZP)("p")(_templateObject3||(_templateObject3=style_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.mA,(function(props){var colors=(0,styles.EC)(props);return(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=style_taggedTemplateLiteral(["\n      color: ",";\n      margin: 0;\n    "])),null==colors?void 0:colors.gray[500])})),AccordionHeader_AccordionHeader=function AccordionHeader(props){var children=props.children,id=props.id,subtitle=props.subtitle;return(0,jsx_runtime.jsxs)(StyledAccordionHeader,{"aria-controls":"".concat(id,"-panel-content"),id,expandIcon:(0,jsx_runtime.jsx)(Icon.Z,{sdsIcon:"chevronDown",sdsSize:"s",sdsType:"static"}),children:[children,subtitle&&(0,jsx_runtime.jsx)(StyledSubtitle,{children:subtitle})]})};const components_AccordionHeader=AccordionHeader_AccordionHeader;try{AccordionHeader_AccordionHeader.displayName="AccordionHeader",AccordionHeader_AccordionHeader.__docgenInfo={description:"",displayName:"AccordionHeader",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<AccordionSummaryClasses> & Partial<ClassNameMap<never>>)"}},expandIcon:{defaultValue:null,description:"The icon to display as the expand indicator.",name:"expandIcon",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Accordion/components/AccordionHeader/index.tsx#AccordionHeader"]={docgenInfo:AccordionHeader_AccordionHeader.__docgenInfo,name:"AccordionHeader",path:"packages/components/src/core/Accordion/components/AccordionHeader/index.tsx#AccordionHeader"})}catch(__react_docgen_typescript_loader_error){}var Accordion_style_templateObject,Accordion_style_templateObject2,style_templateObject3,Accordion=__webpack_require__("./node_modules/@mui/material/Accordion/Accordion.js");function Accordion_style_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var sdsPropNames=["useDivider","togglePosition"],StyledAccordion=(0,styled.ZP)(Accordion.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop.toString())}})(Accordion_style_templateObject||(Accordion_style_templateObject=Accordion_style_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var useDivider=props.useDivider,togglePosition=props.togglePosition,shadows=(0,styles.tM)(props),typography=(0,styles.cY)(props),border=(0,styles.W0)(props);return(0,emotion_react_browser_esm.iv)(Accordion_style_templateObject2||(Accordion_style_templateObject2=Accordion_style_taggedTemplateLiteral(["\n      &.MuiAccordion-root {\n        box-shadow: ",";\n        font-family: ",";\n        border-bottom: ",";\n        height: fit-content;\n\n        & .MuiAccordionSummary-root {\n          padding: 10px;\n          min-height: 40px;\n\n          &.Mui-expanded {\n            min-height: unset;\n          }\n\n          & .MuiAccordionSummary-expandIcon,\n          & .MuiAccordionSummary-expandIconWrapper {\n            padding: 0;\n            align-self: flex-start;\n          }\n        }\n\n        .MuiAccordionDetails-root {\n          padding: 10px;\n          padding-top: 4px;\n        }\n\n        &:before {\n          opacity: 0;\n        }\n\n        &.Mui-expanded {\n          margin: 0;\n        }\n        ","\n      }\n    "])),null==shadows?void 0:shadows.none,null==typography?void 0:typography.fontFamily,useDivider?null==border?void 0:border.gray[300]:"none","left"===togglePosition&&leftPosition(props))})),leftPosition=function leftPosition(props){var spaces=(0,styles.Gr)(props);return(0,emotion_react_browser_esm.iv)(style_templateObject3||(style_templateObject3=Accordion_style_taggedTemplateLiteral(["\n    &.MuiAccordion-root {\n      & .MuiAccordionSummary-root {\n        flex-direction: row-reverse;\n\n        .MuiAccordionSummary-content {\n          padding-left: ","px;\n        }\n\n        .MuiAccordionSummary-expandIconWrapper {\n          margin: 0;\n          transform: rotate(-90deg);\n          align-self: flex-start;\n          margin-top: ","px;\n\n          &.Mui-expanded {\n            transform: rotate(0deg);\n          }\n        }\n      }\n\n      & .MuiAccordionDetails-root {\n        padding-left: 30px;\n      }\n    }\n  "])),null==spaces?void 0:spaces.xs,null==spaces?void 0:spaces.xxs)};function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Accordion_Accordion=react.forwardRef((function(props,ref){var children=props.children,useDivider=props.useDivider,_props$togglePosition=props.togglePosition,togglePosition=void 0===_props$togglePosition?"right":_props$togglePosition,id=props.id,_React$useState2=_slicedToArray(react.useState(!1),2),expanded=_React$useState2[0],setExpanded=_React$useState2[1];return(0,jsx_runtime.jsx)(StyledAccordion,_objectSpread(_objectSpread({square:!0,useDivider,togglePosition,expanded:expanded===id,onChange:function handleChange(panel){return function(_event,isExpanded){setExpanded(!!isExpanded&&panel)}}(id),ref},props),{},{children}))}));const core_Accordion=Accordion_Accordion;try{AccordionHeader.displayName="AccordionHeader",AccordionHeader.__docgenInfo={description:"",displayName:"AccordionHeader",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<AccordionSummaryClasses> & Partial<ClassNameMap<never>>)"}},expandIcon:{defaultValue:null,description:"The icon to display as the expand indicator.",name:"expandIcon",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Accordion/index.tsx#AccordionHeader"]={docgenInfo:AccordionHeader.__docgenInfo,name:"AccordionHeader",path:"packages/components/src/core/Accordion/index.tsx#AccordionHeader"})}catch(__react_docgen_typescript_loader_error){}try{AccordionDetails.displayName="AccordionDetails",AccordionDetails.__docgenInfo={description:"",displayName:"AccordionDetails",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Accordion/index.tsx#AccordionDetails"]={docgenInfo:AccordionDetails.__docgenInfo,name:"AccordionDetails",path:"packages/components/src/core/Accordion/index.tsx#AccordionDetails"})}catch(__react_docgen_typescript_loader_error){}try{Accordion_Accordion.displayName="Accordion",Accordion_Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{square:{defaultValue:{value:"false"},description:"If `true`, rounded corners are disabled.",name:"square",required:!1,type:{name:"boolean"}},useDivider:{defaultValue:null,description:"",name:"useDivider",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'elevation'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"elevation"'}]}},togglePosition:{defaultValue:null,description:"",name:"togglePosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}},elevation:{defaultValue:{value:"1"},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.",name:"elevation",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Accordion/index.tsx#Accordion"]={docgenInfo:Accordion_Accordion.__docgenInfo,name:"Accordion",path:"packages/components/src/core/Accordion/index.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,_LivePreview$paramete,_LivePreview$paramete2,_LivePreview$paramete3,_Test$parameters,_Test$parameters2,_Test$parameters2$doc;function index_stories_typeof(obj){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},index_stories_typeof(obj)}function index_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function index_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?index_stories_ownKeys(Object(source),!0).forEach((function(key){index_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):index_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(arg){var key=function index_stories_toPrimitive(input,hint){if("object"!==index_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==index_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===index_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var index_stories_Accordion=function Accordion(props){var id=props.id,subtitle=props.subtitle,useDivider=props.useDivider,togglePosition=props.togglePosition;return(0,jsx_runtime.jsxs)(core_Accordion,index_stories_objectSpread(index_stories_objectSpread({id,useDivider,togglePosition},props),{},{children:[(0,jsx_runtime.jsx)(components_AccordionHeader,{id:"".concat(id,"-header"),subtitle,children:"Accordion Header"}),(0,jsx_runtime.jsx)(components_AccordionDetails,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]}))};const index_stories={argTypes:{id:{control:{type:"text"},required:!0},subtitle:{control:{type:"text"}},togglePosition:{control:{type:"select"},options:["right","left"]},useDivider:{control:{type:"boolean"}}},component:index_stories_Accordion,title:"Accordion"};var Default={args:{togglePosition:"right"}},livePreviewStyles={display:"grid",gridColumnGap:"24px",gridRowGap:"50px",gridTemplateColumns:"repeat(4, 200px)"};function LivePreviewDemo(props){return(0,jsx_runtime.jsxs)("div",{style:livePreviewStyles,children:[(0,jsx_runtime.jsx)(index_stories_Accordion,index_stories_objectSpread({id:"accordion-1",togglePosition:"right",useDivider:!0},props)),(0,jsx_runtime.jsx)(index_stories_Accordion,index_stories_objectSpread({id:"accordion-2",togglePosition:"right",subtitle:"Optional Subtitle",useDivider:!0},props)),(0,jsx_runtime.jsx)(index_stories_Accordion,index_stories_objectSpread({id:"accordion-3",togglePosition:"left",useDivider:!0},props)),(0,jsx_runtime.jsx)(index_stories_Accordion,index_stories_objectSpread({id:"accordion-4",togglePosition:"left",subtitle:"Optional Subtitle",useDivider:!0},props))]})}var LivePreview={parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(LivePreviewDemo,index_stories_objectSpread({},args))}},Test={args:{id:"test-story",togglePosition:"right"},parameters:{snapshot:{skip:!0}},render:function render(props){return(0,jsx_runtime.jsx)(index_stories_Accordion,index_stories_objectSpread(index_stories_objectSpread({},props),{},{"data-testid":"accordion"}))}};Default.parameters=index_stories_objectSpread(index_stories_objectSpread({},Default.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  args: {\n    togglePosition: "right"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),LivePreview.parameters=index_stories_objectSpread(index_stories_objectSpread({},LivePreview.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_LivePreview$paramete=LivePreview.parameters)||void 0===_LivePreview$paramete?void 0:_LivePreview$paramete.docs),{},{source:index_stories_objectSpread({originalSource:"{\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <LivePreviewDemo {...args} />\n}"},null===(_LivePreview$paramete2=LivePreview.parameters)||void 0===_LivePreview$paramete2||null===(_LivePreview$paramete3=_LivePreview$paramete2.docs)||void 0===_LivePreview$paramete3?void 0:_LivePreview$paramete3.source)})}),Test.parameters=index_stories_objectSpread(index_stories_objectSpread({},Test.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Test$parameters=Test.parameters)||void 0===_Test$parameters?void 0:_Test$parameters.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  args: {\n    id: "test-story",\n    togglePosition: "right"\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (props: Args): JSX.Element => <Accordion {...props} data-testid="accordion" />\n}'},null===(_Test$parameters2=Test.parameters)||void 0===_Test$parameters2||null===(_Test$parameters2$doc=_Test$parameters2.docs)||void 0===_Test$parameters2$doc?void 0:_Test$parameters2$doc.source)})});var __namedExportsOrder=["Default","LivePreview","Test"]}}]);