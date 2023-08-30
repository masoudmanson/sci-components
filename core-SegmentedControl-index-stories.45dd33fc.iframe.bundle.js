"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[129],{"./packages/components/src/core/SegmentedControl/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LivePreview:()=>LivePreview,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,ToggleButton=__webpack_require__("./node_modules/@mui/material/ToggleButton/ToggleButton.js"),react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),Tooltip=__webpack_require__("./packages/components/src/core/Tooltip/index.tsx"),ToggleButtonGroup=__webpack_require__("./node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");var doNotForwardProps=["color","buttonDefinition"],StyledSegmentedControl=(0,styled.ZP)(ToggleButtonGroup.Z,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  ","\n"])),(function(props){var colors=(0,styles.EC)(props),spacings=(0,styles.Gr)(props),corners=(0,styles.DV)(props);return"\n    height: 26px;\n\n    .Mui-selected.MuiToggleButton-root {\n        background-color: ".concat(null==colors?void 0:colors.gray[100],";\n        color: ").concat(null==colors?void 0:colors.primary[400],";\n        border-color: ").concat(null==colors?void 0:colors.gray[300],";\n\n        &:hover {\n          background-color: ").concat(null==colors?void 0:colors.gray[100],";\n        }\n    }\n\n    .MuiToggleButton-root {\n      border-color: ").concat(null==colors?void 0:colors.gray[300],";\n      line-height: 0px;\n      color: #000;\n      padding: 0;\n\n      &:hover {\n        border-color: ").concat(null==colors?void 0:colors.gray[300],";\n        background-color: ").concat(null==colors?void 0:colors.gray[100],";\n      }\n    }\n\n    .MuiSvgIcon-root {\n      padding-right: ").concat(null==spacings?void 0:spacings.l,"px;\n      padding-left: ").concat(null==spacings?void 0:spacings.l,"px;\n      padding-bottom: ").concat(null==spacings?void 0:spacings.xs,"px;\n      padding-top: ").concat(null==spacings?void 0:spacings.xs,"px;\n      border-radius: ").concat(null==corners?void 0:corners.m,"px;\n    }\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var SegmentedControl=function SegmentedControl(props){var _buttonDefinition$,buttonDefinition=props.buttonDefinition,leftmost=null===(_buttonDefinition$=buttonDefinition[0])||void 0===_buttonDefinition$?void 0:_buttonDefinition$.tooltipText,_React$useState2=_slicedToArray(react.useState(leftmost),2),active=_React$useState2[0],setActive=_React$useState2[1];return(0,jsx_runtime.jsxs)(StyledSegmentedControl,_objectSpread(_objectSpread({color:"primary",size:"small",value:active,exclusive:!0,onChange:function handleActive(event,newActive){null!==newActive&&setActive(newActive)}},props),{},{children:[buttonDefinition.map((function(button){var iconName=button.iconName,tooltipText=button.tooltipText;return(0,jsx_runtime.jsx)(ToggleButton.Z,{"aria-label":tooltipText,disableRipple:!0,value:tooltipText,children:(0,jsx_runtime.jsx)(Tooltip.Z,{title:tooltipText,sdsStyle:"dark",arrow:!0,children:(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(Icon.Z,{sdsIcon:iconName,sdsSize:"s",sdsType:"button"})})})},tooltipText)})),";"]}))};const core_SegmentedControl=SegmentedControl;try{SegmentedControl.displayName="SegmentedControl",SegmentedControl.__docgenInfo={description:"",displayName:"SegmentedControl",props:{buttonDefinition:{defaultValue:null,description:"",name:"buttonDefinition",required:!0,type:{name:"SingleButtonDefinition[]"}},color:{defaultValue:{value:"'standard'"},description:"The color of the button when it is selected.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"secondary"'},{value:'"standard"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/SegmentedControl/index.tsx#SegmentedControl"]={docgenInfo:SegmentedControl.__docgenInfo,name:"SegmentedControl",path:"packages/components/src/core/SegmentedControl/index.tsx#SegmentedControl"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_LivePreview$paramete,_LivePreview$paramete2,_Test$parameters,_Test$parameters2;function index_stories_typeof(obj){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},index_stories_typeof(obj)}function index_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function index_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?index_stories_ownKeys(Object(source),!0).forEach((function(key){index_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):index_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(arg){var key=function index_stories_toPrimitive(input,hint){if("object"!==index_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==index_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===index_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var iconOptions=["list","infoCircle","table","globe","people"];const index_stories={argTypes:{segmentFourIcon:{control:{type:"select"},options:iconOptions},segmentFourTooltipText:{control:{type:"text"}},segmentOneIcon:{control:{type:"select"},options:iconOptions},segmentOneTooltipText:{control:{type:"text"}},segmentThreeIcon:{control:{type:"select"},options:iconOptions},segmentThreeTooltipText:{control:{type:"text"}},segmentTwoIcon:{control:{type:"select"},options:iconOptions},segmentTwoTooltipText:{control:{type:"text"}}},component:function SegmentedControl(props){var buttonDefinition=props.buttonDefinition;return(0,jsx_runtime.jsx)(core_SegmentedControl,{buttonDefinition})},title:"SegmentedControl"};var Template=function Template(props){var buttonDefinition=[{iconName:props.segmentOneIcon,tooltipText:props.segmentOneTooltipText},{iconName:props.segmentTwoIcon,tooltipText:props.segmentTwoTooltipText},{iconName:props.segmentThreeIcon,tooltipText:props.segmentThreeTooltipText},{iconName:props.segmentFourIcon,tooltipText:props.segmentFourTooltipText}];return(0,jsx_runtime.jsx)(core_SegmentedControl,{buttonDefinition})},Default={args:{segmentFourIcon:"list",segmentFourTooltipText:"List D",segmentOneIcon:"list",segmentOneTooltipText:"List A",segmentThreeIcon:"list",segmentThreeTooltipText:"List C",segmentTwoIcon:"list",segmentTwoTooltipText:"List B"},render:Template},livePreviewStyles={columnGap:"24px",display:"flex"};function LivePreviewDemo(props){var finalProps=index_stories_objectSpread(index_stories_objectSpread({},props),{},{style:{width:"250px"}});return(0,jsx_runtime.jsx)("div",{style:livePreviewStyles,children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Template,index_stories_objectSpread({segmentOneIcon:"list",segmentOneTooltipText:"List A",segmentTwoIcon:"list",segmentTwoTooltipText:"List B",segmentThreeIcon:"list",segmentThreeTooltipText:"List C",segmentFourIcon:"list",segmentFourTooltipText:"List D",buttonDefinition:[]},finalProps))})})}var LivePreview={parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(LivePreviewDemo,index_stories_objectSpread({},args))}},TestDemo=function TestDemo(props){var buttonDefinition=props.buttonDefinition;return(0,jsx_runtime.jsx)(core_SegmentedControl,index_stories_objectSpread({buttonDefinition,"data-testid":"segmentedControl"},props))},Test={args:{buttonDefinition:[{iconName:"list",tooltipText:"List A"},{iconName:"list",tooltipText:"List B"},{iconName:"table",tooltipText:"Table"},{iconName:"people",tooltipText:"People"}]},parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(TestDemo,index_stories_objectSpread({},args))}};Default.parameters=index_stories_objectSpread(index_stories_objectSpread({},Default.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  args: {\n    segmentFourIcon: "list",\n    segmentFourTooltipText: "List D",\n    segmentOneIcon: "list",\n    segmentOneTooltipText: "List A",\n    segmentThreeIcon: "list",\n    segmentThreeTooltipText: "List C",\n    segmentTwoIcon: "list",\n    segmentTwoTooltipText: "List B"\n  },\n  render: Template\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),LivePreview.parameters=index_stories_objectSpread(index_stories_objectSpread({},LivePreview.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_LivePreview$paramete=LivePreview.parameters)||void 0===_LivePreview$paramete?void 0:_LivePreview$paramete.docs),{},{source:index_stories_objectSpread({originalSource:"{\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <LivePreviewDemo {...args} />\n}"},null===(_LivePreview$paramete2=LivePreview.parameters)||void 0===_LivePreview$paramete2||null===(_LivePreview$paramete2=_LivePreview$paramete2.docs)||void 0===_LivePreview$paramete2?void 0:_LivePreview$paramete2.source)})}),Test.parameters=index_stories_objectSpread(index_stories_objectSpread({},Test.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Test$parameters=Test.parameters)||void 0===_Test$parameters?void 0:_Test$parameters.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  args: {\n    buttonDefinition: [{\n      iconName: "list",\n      tooltipText: "List A"\n    }, {\n      iconName: "list",\n      tooltipText: "List B"\n    }, {\n      iconName: "table",\n      tooltipText: "Table"\n    }, {\n      iconName: "people",\n      tooltipText: "People"\n    }]\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} />\n}'},null===(_Test$parameters2=Test.parameters)||void 0===_Test$parameters2||null===(_Test$parameters2=_Test$parameters2.docs)||void 0===_Test$parameters2?void 0:_Test$parameters2.source)})});var __namedExportsOrder=["Default","LivePreview","Test"]},"./packages/components/src/common/warnings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _SDS_WARNINGS;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{$:()=>showWarningIfFirstOccurence,e:()=>SDSWarningTypes});var SDSWarningTypes=function(SDSWarningTypes){return SDSWarningTypes.ButtonMissingSDSProps="buttonMissingProps",SDSWarningTypes.ChipDeprecated="chipDeprecated",SDSWarningTypes.MenuSelectDeprecated="menuSelectDeprecated",SDSWarningTypes.ButtonIconMediumSize="buttonIconMediumSize",SDSWarningTypes.TooltipSubtitle="tooltipSubtitle",SDSWarningTypes.TooltipWidth="tooltipWidth",SDSWarningTypes.TooltipInverted="tooltipInverted",SDSWarningTypes}({}),SDS_WARNINGS=(_defineProperty(_SDS_WARNINGS={},SDSWarningTypes.ButtonMissingSDSProps,{hasWarned:!1,message:"Warning: Buttons without sdsStyle or sdsType props will be deprecated."}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.ChipDeprecated,{hasWarned:!1,message:"Warning: <Chip /> will be deprecated and replaced with <Tag />"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.MenuSelectDeprecated,{hasWarned:!1,message:"Warning: MenuSelect will be deprecated and replaced with <DropdownMenu />"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.ButtonIconMediumSize,{hasWarned:!1,message:"Warning: A medium size ButtonIcon can only be of type tertiary!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipSubtitle,{hasWarned:!1,message:"Warning: The 'subtitle' text is only available for dark tooltips!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipWidth,{hasWarned:!1,message:"Warning: The 'wide' width is only available for light tooltips!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipInverted,{hasWarned:!1,message:"Warning: Tooltips using the inverted prop will be deprecated. Please use sdsStyle: 'dark' | 'light' instead!"}),_SDS_WARNINGS),showWarningIfFirstOccurence=function showWarningIfFirstOccurence(warningType){warningType in SDS_WARNINGS||(SDS_WARNINGS[warningType]={hasWarned:!1,message:"Warning: SDSWarningType ".concat(warningType," is not defined in SDS_WARNINGS")}),SDS_WARNINGS[warningType].hasWarned||(console.warn(SDS_WARNINGS[warningType].message),SDS_WARNINGS[warningType].hasWarned=!0)}},"./packages/components/src/core/Tooltip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_Tooltip});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,Tooltip_Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),react=__webpack_require__("./node_modules/react/index.js"),warnings=__webpack_require__("./packages/components/src/common/warnings.ts"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),Popper=__webpack_require__("./node_modules/@mui/material/Popper/Popper.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Subtitle=(0,styled.ZP)("div")(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.zm,(function(props){var colors=(0,styles.EC)(props);return"\n      color: ".concat(null==colors?void 0:colors.gray[400],";\n    ")})),tooltipCss=function tooltipCss(props){var inverted=props.inverted,sdsStyle=props.sdsStyle,width=props.width,followCursor=props.followCursor,shadows=(0,styles.tM)(props);return(0,emotion_css_esm.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    &.MuiTooltip-tooltip {\n      ","\n      ","\n\n      ","\n\n      box-shadow: ",";\n    }\n  "])),"dark"===sdsStyle||inverted?function dark(props){var spacings=(0,styles.Gr)(props);return(0,emotion_css_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    ","\n    background-color: black;\n    color: white;\n    text-align: center;\n    max-width: 250px;\n    padding: ","px ","px;\n  "])),(0,styles.J5)(props),null==spacings?void 0:spacings.s,null==spacings?void 0:spacings.l)}(props):function light(props){var spacings=(0,styles.Gr)(props);return(0,emotion_css_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    ","\n    background-color: white;\n    color: black;\n    text-align: left;\n    max-width: 250px;\n    padding: ","px ","px;\n  "])),(0,styles.$g)(props),null==spacings?void 0:spacings.xs,null==spacings?void 0:spacings.l)}(props),"wide"===width&&"light"===sdsStyle&&function wide(){return(0,emotion_css_esm.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    max-width: 550px;\n  "])))}(),!0===followCursor&&function tableStyles(props){var spacings=(0,styles.Gr)(props);return(0,emotion_css_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    padding: ","px;\n  "])),null==spacings?void 0:spacings.m)}(props),null==shadows?void 0:shadows.m)},arrowCss=function arrowCss(props){var inverted=props.inverted,sdsStyle=props.sdsStyle,arrowOffset=props.arrowOffset;return(0,emotion_css_esm.iv)(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n    &.MuiTooltip-arrow {\n      /* (bethbertozzi): !important is needed to fight inline style */\n      left: ","px !important;\n      color: ",";\n      &:before {\n        box-sizing: border-box;\n        width: 12px;\n        height: 12px;\n      }\n    }\n  "])),arrowOffset,inverted||"dark"===sdsStyle?"black":"white")},StyledPopper=(0,styled.ZP)(Popper.Z)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(['\n  &[data-popper-placement*="top"] .MuiTooltip-arrow {\n    width: 24px !important;\n    height: 12px !important;\n    margin-bottom: -12px !important;\n    &:before {\n      transform: rotate(45deg) translate(0px, -2px);\n      border-bottom-right-radius: 2px;\n      box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);\n    }\n  }\n\n  &[data-popper-placement*="bottom"] .MuiTooltip-arrow {\n    width: 24px !important;\n    height: 12px !important;\n    margin-top: -12px !important;\n    &:before {\n      transform: rotate(45deg) translate(-1px, 2px);\n      border-top-left-radius: 2px;\n      box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.1);\n    }\n  }\n\n  &[data-popper-placement*="left"] .MuiTooltip-arrow {\n    width: 12px !important;\n    height: 16px !important;\n    margin-right: -12px !important;\n    &:before {\n      transform: rotate(45deg) translate(-1px, 1px);\n      border-top-right-radius: 2px;\n      box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.1);\n    }\n  }\n\n  &[data-popper-placement*="right"] .MuiTooltip-arrow {\n    width: 12px !important;\n    height: 16px !important;\n    margin-left: -12px !important;\n    &:before {\n      transform: rotate(45deg) translate(4px, 2px);\n      border-bottom-left-radius: 2px;\n      box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.1);\n    }\n  }\n']))),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["arrowOffset","classes","inverted","sdsStyle","subtitle","title","width","PopperComponent"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Tooltip=(0,react.forwardRef)((function Tooltip(props,ref){var arrowOffset=props.arrowOffset,classes=props.classes,inverted=props.inverted,_props$sdsStyle=props.sdsStyle,sdsStyle=void 0===_props$sdsStyle?"light":_props$sdsStyle,subtitle=props.subtitle,title=props.title,_props$width=props.width,width=void 0===_props$width?"default":_props$width,_props$PopperComponen=props.PopperComponent,PopperComponent=void 0===_props$PopperComponen?StyledPopper:_props$PopperComponen,rest=_objectWithoutProperties(props,_excluded),children=rest.children;inverted&&(0,warnings.$)(warnings.e.TooltipInverted),"wide"===width&&"dark"===sdsStyle&&(0,warnings.$)(warnings.e.TooltipWidth),subtitle&&"light"===sdsStyle&&(0,warnings.$)(warnings.e.TooltipSubtitle);var extraProps={arrowOffset,classes,inverted,sdsStyle,theme:(0,useTheme.Z)(),width},tooltip=mergeClass({className:tooltipCss(extraProps),key:"tooltip",props}),arrow=mergeClass({className:arrowCss(extraProps),key:"arrow",props});if(!title&&!subtitle)return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children});var content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[title,"dark"===sdsStyle&&subtitle&&(0,jsx_runtime.jsx)(Subtitle,{children:subtitle})]}),leaveDelay=inverted||"dark"===sdsStyle?0:500;return(0,jsx_runtime.jsx)(Tooltip_Tooltip.Z,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({classes:{arrow,tooltip},leaveDelay,title:content,PopperComponent,ref},rest))}));function mergeClass(_ref){var props=_ref.props,className=_ref.className,key=_ref.key,classes=props.classes;if(!classes)return className;var propClassName=classes[key];return propClassName?"".concat(propClassName," ").concat(className):className}const core_Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{arrowOffset:{defaultValue:null,description:"",name:"arrowOffset",required:!1,type:{name:"number"}},sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"wide"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},followCursor:{defaultValue:{value:"false"},description:"If `true`, the tooltip follow the cursor over the wrapped element.",name:"followCursor",required:!1,type:{name:"boolean"}},inverted:{defaultValue:null,description:"",name:"inverted",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tooltip/index.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"packages/components/src/core/Tooltip/index.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}}}]);