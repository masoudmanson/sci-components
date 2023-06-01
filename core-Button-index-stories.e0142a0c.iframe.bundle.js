"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[7252],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./packages/components/src/core/Button/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,MinimalLivePreview:()=>MinimalLivePreview,RoundedLivePreview:()=>RoundedLivePreview,ScreenshotTest:()=>ScreenshotTest,SquareLivePreview:()=>SquareLivePreview,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_RoundedLivePreview$p,_RoundedLivePreview$p2,_RoundedLivePreview$p3,_SquareLivePreview$pa,_SquareLivePreview$pa2,_SquareLivePreview$pa3,_MinimalLivePreview$p,_MinimalLivePreview$p2,_MinimalLivePreview$p3,_ScreenshotTest$param,_ScreenshotTest$param2,_ScreenshotTest$param3,_Test$parameters,_Test$parameters2,_Test$parameters2$doc,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/core/Button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var SDS_STYLES=["rounded","square","minimal"],SDS_TYPES=["primary","secondary"],ICON_OPTIONS=[void 0,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{sdsSize:"l",sdsIcon:"download",sdsType:"button"},"download")],DISABLED_OPTIONS=[!1,!0],PSEUDO_STATES=["default","hover","active","focus-visible"],TEXT="Label",actions={onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onClick")},Button=function Button(props){var sdsType=props.sdsType,sdsStyle=props.sdsStyle;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({sdsType,sdsStyle},props),{},{children:TEXT}))};const __WEBPACK_DEFAULT_EXPORT__={argTypes:{onClick:{action:actions.onClick},sdsStyle:{control:{type:"select"},options:SDS_STYLES},sdsType:{control:{type:"select"},options:SDS_TYPES},text:{control:{type:"text"}}},component:Button,title:"Button"};var Default={args:{disabled:!1,sdsStyle:"rounded",sdsType:"primary",text:"Label"}},placementStyles={display:"grid",gridColumnGap:"10px",gridRowGap:"0px",gridTemplateColumns:"repeat(6, 120px)",gridTemplateRows:"1fr"},RoundedLivePreviewDemo=function RoundedLivePreviewDemo(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:placementStyles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{sdsStyle:"rounded",sdsType:"primary",children:TEXT})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{startIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{sdsIcon:"download",sdsSize:"s",sdsType:"button"}),sdsStyle:"rounded",sdsType:"primary",children:TEXT})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{sdsStyle:"rounded",sdsType:"secondary",children:TEXT})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{startIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{sdsIcon:"download",sdsSize:"s",sdsType:"button"}),sdsStyle:"rounded",sdsType:"secondary",children:TEXT}))]})},RoundedLivePreview={args:{label:"Label"},parameters:{snapshot:{skip:!0}},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RoundedLivePreviewDemo,_objectSpread({},args))}},SquareLivePreviewDemo=function SquareLivePreviewDemo(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:placementStyles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{sdsStyle:"square",sdsType:"primary",children:TEXT})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{startIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{sdsIcon:"download",sdsSize:"s",sdsType:"button"}),sdsStyle:"square",sdsType:"primary",children:TEXT})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{sdsStyle:"square",sdsType:"secondary",children:TEXT})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{startIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{sdsIcon:"download",sdsSize:"s",sdsType:"button"}),sdsStyle:"square",sdsType:"secondary",children:TEXT}))]})},SquareLivePreview={args:{label:"Label"},parameters:{snapshot:{skip:!0}},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SquareLivePreviewDemo,_objectSpread({},args))}},MinimalLivePreviewDemo=function MinimalLivePreviewDemo(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:"grid",gridColumnGap:"24px",gridRowGap:"0px",gridTemplateColumns:"repeat(3, min-content)",gridTemplateRows:"1fr"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{sdsStyle:"minimal",sdsType:"primary",children:TEXT})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{startIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.Z,{sdsIcon:"download",sdsSize:"s",sdsType:"button"}),sdsStyle:"minimal",sdsType:"primary",children:TEXT})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{sdsStyle:"minimal",sdsType:"secondary",children:TEXT}))]})},MinimalLivePreview={args:{label:"Label"},parameters:{snapshot:{skip:!0}},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MinimalLivePreviewDemo,_objectSpread({},args))}},ScreenshotTestDemo=function ScreenshotTestDemo(props){var topLevel={columnGap:"20px",display:"inline-grid",fontFamily:"sans-serif",marginRight:"50px"},displayContents={display:"contents"},penultimateLevel={display:"contents"},bottomLevel={marginBottom:10},fontWeightNormal={fontWeight:"normal"},topLabel=_objectSpread(_objectSpread({},fontWeightNormal),{},{fontSize:"2em",gridColumn:"1 / 6",marginBottom:0}),midLabel=_objectSpread(_objectSpread({},fontWeightNormal),{},{borderStyle:"solid none none none",gridColumn:"1 / 6",justifySelf:"stretch",paddingTop:10}),secondLabel=_objectSpread(_objectSpread({},midLabel),{},{borderWidth:"2px",fontSize:"1.17em",margin:"20px 0"}),thirdLabel=_objectSpread(_objectSpread({},midLabel),{},{alignSelf:"end",borderWidth:"1px",fontWeight:"normal",margin:"0 0 5px 0"}),bottomLabel=_objectSpread(_objectSpread({},fontWeightNormal),{},{margin:"10px 0"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:SDS_STYLES.map((function(sdsStyle){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonStyleOption,{sdsStyle},sdsStyle)}))});function ButtonStyleOption(_ref){var sdsStyle=_ref.sdsStyle;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:topLevel,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3",{style:topLabel,children:["Style: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:sdsStyle})]}),SDS_TYPES.map((function(type){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonTypeOption,{sdsStyle,type},type)}))]})}function ButtonTypeOption(_ref2){var sdsStyle=_ref2.sdsStyle,type=_ref2.type;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:displayContents,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4",{style:secondLabel,children:["Type: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:type})]}),"minimal"===sdsStyle&&"secondary"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonIconOption,{sdsStyle,type,icon:ICON_OPTIONS[0]},String(ICON_OPTIONS[0])):ICON_OPTIONS.map((function(icon){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonIconOption,{sdsStyle,type,icon},String(icon))}))]})}function ButtonIconOption(_ref3){var sdsStyle=_ref3.sdsStyle,type=_ref3.type,icon=_ref3.icon;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:displayContents,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h5",{style:thirdLabel,children:["Icon: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:icon?"yes":"no"})]}),DISABLED_OPTIONS.map((function(disabled){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonDisabledOption,{sdsStyle,type,icon,disabled},String(disabled))}))]})}function ButtonDisabledOption(_ref4){var sdsStyle=_ref4.sdsStyle,type=_ref4.type,icon=_ref4.icon,disabled=_ref4.disabled;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:penultimateLevel,children:PSEUDO_STATES.map((function(state){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:bottomLevel,children:(!1===disabled||!0===disabled&&"default"===state)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h6",{style:bottomLabel,children:[!1===disabled?"State: ":"Disabled: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b",{children:!1===disabled?state:"true"})]}),(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},props),{},{"data-testid":"button",sdsStyle,sdsType:type,startIcon:icon,disabled,className:"pseudo-".concat(state),key:state}),TEXT)]})},state)}))})}},ScreenshotTest={args:{label:"Label"},parameters:{controls:{exclude:["onClick","sdsStyle","sdsType","text"]},snapshot:{skip:!0}},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ScreenshotTestDemo,_objectSpread({},args))}},Test={args:{disabled:!1,sdsStyle:"rounded",sdsType:"primary",text:"Label"},parameters:{snapshot:{skip:!0}},render:function render(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Button,_objectSpread(_objectSpread({},props),{},{"data-testid":"button"}))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    disabled: false,\n    sdsStyle: "rounded",\n    sdsType: "primary",\n    text: "Label"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),RoundedLivePreview.parameters=_objectSpread(_objectSpread({},RoundedLivePreview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RoundedLivePreview$p=RoundedLivePreview.parameters)||void 0===_RoundedLivePreview$p?void 0:_RoundedLivePreview$p.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    label: "Label"\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <RoundedLivePreviewDemo {...args} />\n}'},null===(_RoundedLivePreview$p2=RoundedLivePreview.parameters)||void 0===_RoundedLivePreview$p2||null===(_RoundedLivePreview$p3=_RoundedLivePreview$p2.docs)||void 0===_RoundedLivePreview$p3?void 0:_RoundedLivePreview$p3.source)})}),SquareLivePreview.parameters=_objectSpread(_objectSpread({},SquareLivePreview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SquareLivePreview$pa=SquareLivePreview.parameters)||void 0===_SquareLivePreview$pa?void 0:_SquareLivePreview$pa.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    label: "Label"\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <SquareLivePreviewDemo {...args} />\n}'},null===(_SquareLivePreview$pa2=SquareLivePreview.parameters)||void 0===_SquareLivePreview$pa2||null===(_SquareLivePreview$pa3=_SquareLivePreview$pa2.docs)||void 0===_SquareLivePreview$pa3?void 0:_SquareLivePreview$pa3.source)})}),MinimalLivePreview.parameters=_objectSpread(_objectSpread({},MinimalLivePreview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MinimalLivePreview$p=MinimalLivePreview.parameters)||void 0===_MinimalLivePreview$p?void 0:_MinimalLivePreview$p.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    label: "Label"\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <MinimalLivePreviewDemo {...args} />\n}'},null===(_MinimalLivePreview$p2=MinimalLivePreview.parameters)||void 0===_MinimalLivePreview$p2||null===(_MinimalLivePreview$p3=_MinimalLivePreview$p2.docs)||void 0===_MinimalLivePreview$p3?void 0:_MinimalLivePreview$p3.source)})}),ScreenshotTest.parameters=_objectSpread(_objectSpread({},ScreenshotTest.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ScreenshotTest$param=ScreenshotTest.parameters)||void 0===_ScreenshotTest$param?void 0:_ScreenshotTest$param.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    label: "Label"\n  },\n  parameters: {\n    controls: {\n      exclude: ["onClick", "sdsStyle", "sdsType", "text"]\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <ScreenshotTestDemo {...args} />\n}'},null===(_ScreenshotTest$param2=ScreenshotTest.parameters)||void 0===_ScreenshotTest$param2||null===(_ScreenshotTest$param3=_ScreenshotTest$param2.docs)||void 0===_ScreenshotTest$param3?void 0:_ScreenshotTest$param3.source)})}),Test.parameters=_objectSpread(_objectSpread({},Test.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Test$parameters=Test.parameters)||void 0===_Test$parameters?void 0:_Test$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    disabled: false,\n    sdsStyle: "rounded",\n    sdsType: "primary",\n    text: "Label"\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (props: Args) => <Button {...props} data-testid="button" />\n}'},null===(_Test$parameters2=Test.parameters)||void 0===_Test$parameters2||null===(_Test$parameters2$doc=_Test$parameters2.docs)||void 0===_Test$parameters2$doc?void 0:_Test$parameters2$doc.source)})});var __namedExportsOrder=["Default","RoundedLivePreview","SquareLivePreview","MinimalLivePreview","ScreenshotTest","Test"]},"./packages/components/src/common/warnings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _SDS_WARNINGS;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{$:()=>showWarningIfFirstOccurence,e:()=>SDSWarningTypes});var SDSWarningTypes=function(SDSWarningTypes){return SDSWarningTypes.ButtonMissingSDSProps="buttonMissingProps",SDSWarningTypes.ChipDeprecated="chipDeprecated",SDSWarningTypes.MenuSelectDeprecated="menuSelectDeprecated",SDSWarningTypes.ButtonIconMediumSize="buttonIconMediumSize",SDSWarningTypes.TooltipSubtitle="tooltipSubtitle",SDSWarningTypes.TooltipWidth="tooltipWidth",SDSWarningTypes.TooltipInverted="tooltipInverted",SDSWarningTypes}({}),SDS_WARNINGS=(_defineProperty(_SDS_WARNINGS={},SDSWarningTypes.ButtonMissingSDSProps,{hasWarned:!1,message:"Warning: Buttons without sdsStyle or sdsType props will be deprecated."}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.ChipDeprecated,{hasWarned:!1,message:"Warning: <Chip /> will be deprecated and replaced with <Tag />"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.MenuSelectDeprecated,{hasWarned:!1,message:"Warning: MenuSelect will be deprecated and replaced with <DropdownMenu />"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.ButtonIconMediumSize,{hasWarned:!1,message:"Warning: A medium size ButtonIcon can only be of type tertiary!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipSubtitle,{hasWarned:!1,message:"Warning: The 'subtitle' text is only available for dark tooltips!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipWidth,{hasWarned:!1,message:"Warning: The 'wide' width is only available for light tooltips!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipInverted,{hasWarned:!1,message:"Warning: Tooltips using the inverted prop will be deprecated. Please use sdsStyle: 'dark' | 'light' instead!"}),_SDS_WARNINGS),showWarningIfFirstOccurence=function showWarningIfFirstOccurence(warningType){warningType in SDS_WARNINGS||(SDS_WARNINGS[warningType]={hasWarned:!1,message:"Warning: SDSWarningType ".concat(warningType," is not defined in SDS_WARNINGS")}),SDS_WARNINGS[warningType].hasWarned||(console.warn(SDS_WARNINGS[warningType].message),SDS_WARNINGS[warningType].hasWarned=!0)}},"./packages/components/src/core/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_Button});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,react=__webpack_require__("./node_modules/react/index.js"),warnings=__webpack_require__("./packages/components/src/common/warnings.ts"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var sdsPropNames=["isAllCaps","isRounded","sdsStyle","sdsType"],ButtonBase=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  box-shadow: none;\n  ","\n"])),(function(props){var variant=props.variant,colors=(0,styles.EC)(props),spacings=(0,styles.Gr)(props),containedPadding="".concat(null==spacings?void 0:spacings.xs,"px ").concat(null==spacings?void 0:spacings.l,"px"),outlinedPadding="".concat(((null==spacings?void 0:spacings.xs)||0)-1,"px ").concat(((null==spacings?void 0:spacings.l)||0)-1,"px"),padding="outlined"===variant?outlinedPadding:containedPadding,outlineBorder="outlined"===variant?"border-color: ".concat(null==colors?void 0:colors.primary[400],";"):"";return"\n      ".concat(outlineBorder,"\n      padding: ").concat(padding,";\n      min-width: 120px;\n      height: 34px;\n      &:hover {\n        color: white;\n        background-color: ").concat(null==colors?void 0:colors.primary[500],";\n        box-shadow: none;\n      }\n      &:focus-visible {\n        outline: 5px auto Highlight;\n        outline: 5px auto -webkit-focus-ring-color;\n      }\n      &:active {\n        color: white;\n        background-color: ").concat(null==colors?void 0:colors.primary[600],";\n        box-shadow: none;\n      }\n      &:disabled {\n        color: ").concat(null==colors?void 0:colors.gray[400],";\n        background-color: ").concat(null==colors?void 0:colors.gray[300],";\n        border-color: ").concat(null==colors?void 0:colors.gray[300],";\n      }\n      .MuiButton-startIcon {\n        margin-right: ").concat(null==spacings?void 0:spacings.m,"px;\n      }\n      .MuiButton-endIcon {\n        margin-left: ").concat(null==spacings?void 0:spacings.m,"px;\n      }\n    ")})),RoundedButton=(0,styled.ZP)(ButtonBase,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var corners=(0,styles.DV)(props);return"\n      border-radius: ".concat(null==corners?void 0:corners.l,"px;\n    ")})),SquareButton=ButtonBase,MinimalButton=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n\n  ","\n  &:hover, &:focus-visible {\n    background-color: transparent;\n  }\n  &:focus-visible {\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"])),(function(props){var spacings=(0,styles.Gr)(props);return"\n      padding: ".concat(null==spacings?void 0:spacings.xxs,"px 0;\n    ")}),(function(props){return null!=props&&props.isAllCaps?styles.n$:""})),minimal=function minimal(props){var colors=(0,styles.EC)(props),spaces=(0,styles.Gr)(props);return"\n    &:hover, &:focus-visible {\n      color: ".concat(null==colors?void 0:colors.primary[500],";\n    }\n    &:active {\n      color: ").concat(null==colors?void 0:colors.primary[600],";\n    }\n    &:disabled {\n      color: ").concat(null==colors?void 0:colors.gray[400],";\n    }\n\n    .MuiButton-startIcon {\n      margin-right: ").concat(null==spaces?void 0:spaces.xxs,"px;\n    }\n  ")},PrimaryMinimalButton=(0,styled.ZP)(MinimalButton)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n"])),minimal),SecondaryMinimalButton=(0,styled.ZP)(MinimalButton)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n  color: #000;\n"])),minimal),StyledButton=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  &:focus-visible {\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n  ","\n"])),(function(props){if(!props.isRounded)return"";var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props);return"\n      border-radius: ".concat(null==corners?void 0:corners.l,"px;\n      padding: ").concat(null==spacings?void 0:spacings.xs,"px ").concat(null==spacings?void 0:spacings.l,"px;\n      min-width: 120px;\n      height: 34px;\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Button_Button=react.forwardRef((function(props,ref){var sdsStyle=null==props?void 0:props.sdsStyle,sdsType=null==props?void 0:props.sdsType;sdsStyle&&sdsType||(0,warnings.$)(warnings.e.ButtonMissingSDSProps),"boolean"==typeof(null==props?void 0:props.isAllCaps)&&"minimal"!==sdsStyle&&console.warn("Warning: isAllCaps is only applied to buttons with sdsStyle='minimal'.");var isAllCaps="boolean"!=typeof(null==props?void 0:props.isAllCaps)||(null==props?void 0:props.isAllCaps),propsWithDefault=_objectSpread(_objectSpread({},props),{},{isAllCaps});switch(!0){case"rounded"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(RoundedButton,_objectSpread({color:"primary",ref,variant:"contained"},propsWithDefault));case"rounded"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(RoundedButton,_objectSpread({color:"primary",ref,variant:"outlined"},propsWithDefault));case"square"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(SquareButton,_objectSpread({color:"primary",ref,variant:"contained"},propsWithDefault));case"square"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(SquareButton,_objectSpread({color:"primary",ref,variant:"outlined"},propsWithDefault));case"minimal"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(PrimaryMinimalButton,_objectSpread({color:"primary",ref,variant:"text"},propsWithDefault));case"minimal"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(SecondaryMinimalButton,_objectSpread({color:"primary",ref,variant:"text"},propsWithDefault));default:return(0,jsx_runtime.jsx)(StyledButton,_objectSpread(_objectSpread({},propsWithDefault),{},{ref}))}}));const core_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"packages/components/src/core/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);