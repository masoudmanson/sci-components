"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[3676],{"./packages/components/src/core/Alert/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SnackbarAlert:()=>SnackbarAlert,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,CheckCircleOutline=__webpack_require__("./node_modules/@mui/icons-material/esm/CheckCircleOutline.js"),Snackbar=__webpack_require__("./node_modules/@mui/material/Snackbar/Snackbar.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./packages/components/src/core/Button/index.tsx"),defaultTheme=__webpack_require__("./packages/components/src/core/styles/common/defaultTheme.ts"),Alert=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");var StyledAlert=(0,styled.ZP)(Alert.Z)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  ","\n"])),(function(props){var colors=(0,styles.EC)(props),spacings=(0,styles.Gr)(props),shadows=(0,styles.tM)(props),_props$severity=props.severity,severity=void 0===_props$severity?"success":_props$severity,borderColor=colors&&colors[severity][400]||"black",alertColor=colors&&colors[severity][100]||"white",iconColor=colors&&colors[severity][400]||"black",backgroundColor=colors&&colors[severity][100];return"\n      background-color: ".concat(backgroundColor,";\n      margin: ").concat(null==spacings?void 0:spacings.m,"px 0;\n      color: ").concat(defaultTheme.uH.palette.text.primary,";\n      padding: ").concat(null==spacings?void 0:spacings.l,"px ").concat(null==spacings?void 0:spacings.l,"px\n        ").concat(null==spacings?void 0:spacings.l,"px 9px;\n      background-color: ").concat(alertColor,";\n      &.elevated {\n        border-left: 5px solid;\n        box-shadow: ").concat(null==shadows?void 0:shadows.s,";\n        border-color: ").concat(borderColor,";\n      }\n      .MuiAlert-icon {\n        path {\n          fill: ").concat(iconColor,";\n        }\n      }\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Alert_Alert=function Alert(props){return(0,jsx_runtime.jsx)(StyledAlert,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},props))};const core_Alert=Alert_Alert;try{Alert_Alert.displayName="Alert",Alert_Alert.__docgenInfo={description:"",displayName:"Alert",props:{square:{defaultValue:{value:"false"},description:"If `true`, rounded corners are disabled.",name:"square",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},elevation:{defaultValue:{value:"1"},description:"Shadow depth, corresponds to `dp` in the spec.\nIt accepts values between 0 and 24 inclusive.",name:"elevation",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Alert/index.tsx#Alert"]={docgenInfo:Alert_Alert.__docgenInfo,name:"Alert",path:"packages/components/src/core/Alert/index.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}function index_stories_typeof(obj){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},index_stories_typeof(obj)}var index_stories_templateObject,_Default$parameters,_Default$parameters2,_SnackbarAlert$parame,_SnackbarAlert$parame2,_Test$parameters,_Test$parameters2;function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function index_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function index_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?index_stories_ownKeys(Object(source),!0).forEach((function(key){index_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):index_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(arg){var key=function index_stories_toPrimitive(input,hint){if("object"!==index_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==index_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===index_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var DismissButton=(0,styled.ZP)(Button.Z)(index_stories_templateObject||(index_stories_templateObject=function index_stories_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  margin-left: -","px;\n  padding-bottom: 0;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 1px;\n  font-weight: 600;\n  &:hover {\n    background: none;\n  }\n"])),defaultTheme.uH.spacing(3));const index_stories={argTypes:{text:{control:{type:"text"},required:!0}},component:function Demo(props){var text=props.text;return(0,jsx_runtime.jsx)(core_Alert,index_stories_objectSpread(index_stories_objectSpread({icon:(0,jsx_runtime.jsx)(CheckCircleOutline.Z,{}),onClose:function onClose(){}},props),{},{children:text}))},title:"Alert - To Be Depreciated"};var Default={args:{text:"This is an alert!"},parameters:{snapshot:{skip:!0}}},SnackbarAlert=function SnackbarAlert(){var _React$useState2=_slicedToArray(react.useState(!1),2),open=_React$useState2[0],setOpen=_React$useState2[1];return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.Z,{sdsType:"primary",sdsStyle:"square",onClick:function handleOpen(){return setOpen(!0)},children:"Open alert"}),(0,jsx_runtime.jsx)(Snackbar.Z,{anchorOrigin:{horizontal:"right",vertical:"top"},open,autoHideDuration:6e3,children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(core_Alert,{className:"elevated",severity:"info",children:[(0,jsx_runtime.jsx)("div",{children:"This is a snackbar alert!"}),(0,jsx_runtime.jsx)(DismissButton,{onClick:function handleClose(){return setOpen(!1)},children:"DISMISS"})]})})})]})},Test={args:{text:"Test Alert!"}};Default.parameters=index_stories_objectSpread(index_stories_objectSpread({},Default.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  args: {\n    text: "This is an alert!"\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),SnackbarAlert.parameters=index_stories_objectSpread(index_stories_objectSpread({},SnackbarAlert.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_SnackbarAlert$parame=SnackbarAlert.parameters)||void 0===_SnackbarAlert$parame?void 0:_SnackbarAlert$parame.docs),{},{source:index_stories_objectSpread({originalSource:'() => {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n  return <div>\n      <Button sdsType="primary" sdsStyle="square" onClick={handleOpen}>\n        Open alert\n      </Button>\n      <Snackbar anchorOrigin={{\n      horizontal: "right",\n      vertical: "top"\n    }} open={open} autoHideDuration={6000}>\n        <div>\n          <Alert className="elevated" severity="info">\n            <div>This is a snackbar alert!</div>\n            <DismissButton onClick={handleClose}>DISMISS</DismissButton>\n          </Alert>\n        </div>\n      </Snackbar>\n    </div>;\n}'},null===(_SnackbarAlert$parame2=SnackbarAlert.parameters)||void 0===_SnackbarAlert$parame2||null===(_SnackbarAlert$parame2=_SnackbarAlert$parame2.docs)||void 0===_SnackbarAlert$parame2?void 0:_SnackbarAlert$parame2.source)})}),Test.parameters=index_stories_objectSpread(index_stories_objectSpread({},Test.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Test$parameters=Test.parameters)||void 0===_Test$parameters?void 0:_Test$parameters.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  args: {\n    text: "Test Alert!"\n  }\n}'},null===(_Test$parameters2=Test.parameters)||void 0===_Test$parameters2||null===(_Test$parameters2=_Test$parameters2.docs)||void 0===_Test$parameters2?void 0:_Test$parameters2.source)})});var __namedExportsOrder=["Default","SnackbarAlert","Test"]},"./packages/components/src/common/warnings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _SDS_WARNINGS;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{$:()=>showWarningIfFirstOccurence,e:()=>SDSWarningTypes});var SDSWarningTypes=function(SDSWarningTypes){return SDSWarningTypes.ButtonMissingSDSProps="buttonMissingProps",SDSWarningTypes.ChipDeprecated="chipDeprecated",SDSWarningTypes.MenuSelectDeprecated="menuSelectDeprecated",SDSWarningTypes.ButtonIconMediumSize="buttonIconMediumSize",SDSWarningTypes.TooltipSubtitle="tooltipSubtitle",SDSWarningTypes.TooltipWidth="tooltipWidth",SDSWarningTypes.TooltipInverted="tooltipInverted",SDSWarningTypes}({}),SDS_WARNINGS=(_defineProperty(_SDS_WARNINGS={},SDSWarningTypes.ButtonMissingSDSProps,{hasWarned:!1,message:"Warning: Buttons without sdsStyle or sdsType props will be deprecated."}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.ChipDeprecated,{hasWarned:!1,message:"Warning: <Chip /> will be deprecated and replaced with <Tag />"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.MenuSelectDeprecated,{hasWarned:!1,message:"Warning: MenuSelect will be deprecated and replaced with <DropdownMenu />"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.ButtonIconMediumSize,{hasWarned:!1,message:"Warning: A medium size ButtonIcon can only be of type tertiary!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipSubtitle,{hasWarned:!1,message:"Warning: The 'subtitle' text is only available for dark tooltips!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipWidth,{hasWarned:!1,message:"Warning: The 'wide' width is only available for light tooltips!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipInverted,{hasWarned:!1,message:"Warning: Tooltips using the inverted prop will be deprecated. Please use sdsStyle: 'dark' | 'light' instead!"}),_SDS_WARNINGS),showWarningIfFirstOccurence=function showWarningIfFirstOccurence(warningType){warningType in SDS_WARNINGS||(SDS_WARNINGS[warningType]={hasWarned:!1,message:"Warning: SDSWarningType ".concat(warningType," is not defined in SDS_WARNINGS")}),SDS_WARNINGS[warningType].hasWarned||(console.warn(SDS_WARNINGS[warningType].message),SDS_WARNINGS[warningType].hasWarned=!0)}},"./packages/components/src/core/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_Button});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,react=__webpack_require__("./node_modules/react/index.js"),warnings=__webpack_require__("./packages/components/src/common/warnings.ts"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var sdsPropNames=["isAllCaps","isRounded","sdsStyle","sdsType"],ButtonBase=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  box-shadow: none;\n  ","\n"])),(function(props){var variant=props.variant,colors=(0,styles.EC)(props),spacings=(0,styles.Gr)(props),containedPadding="".concat(null==spacings?void 0:spacings.xs,"px ").concat(null==spacings?void 0:spacings.l,"px"),outlinedPadding="".concat(((null==spacings?void 0:spacings.xs)||0)-1,"px ").concat(((null==spacings?void 0:spacings.l)||0)-1,"px"),padding="outlined"===variant?outlinedPadding:containedPadding,outlineBorder="outlined"===variant?"border-color: ".concat(null==colors?void 0:colors.primary[400],";"):"";return"\n      ".concat(outlineBorder,"\n      padding: ").concat(padding,";\n      min-width: 120px;\n      height: 34px;\n      &:hover {\n        color: white;\n        background-color: ").concat(null==colors?void 0:colors.primary[500],";\n        box-shadow: none;\n      }\n      &:focus-visible {\n        outline: 5px auto Highlight;\n        outline: 5px auto -webkit-focus-ring-color;\n      }\n      &:active {\n        color: white;\n        background-color: ").concat(null==colors?void 0:colors.primary[600],";\n        box-shadow: none;\n      }\n      &:disabled {\n        color: ").concat(null==colors?void 0:colors.gray[400],";\n        background-color: ").concat(null==colors?void 0:colors.gray[300],";\n        border-color: ").concat(null==colors?void 0:colors.gray[300],";\n      }\n      .MuiButton-startIcon {\n        margin-right: ").concat(null==spacings?void 0:spacings.m,"px;\n      }\n      .MuiButton-endIcon {\n        margin-left: ").concat(null==spacings?void 0:spacings.m,"px;\n      }\n    ")})),RoundedButton=(0,styled.ZP)(ButtonBase,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var corners=(0,styles.DV)(props);return"\n      border-radius: ".concat(null==corners?void 0:corners.l,"px;\n    ")})),SquareButton=ButtonBase,MinimalButton=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n\n  ","\n  &:hover, &:focus-visible {\n    background-color: transparent;\n  }\n  &:focus-visible {\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"])),(function(props){var spacings=(0,styles.Gr)(props);return"\n      padding: ".concat(null==spacings?void 0:spacings.xxs,"px 0;\n    ")}),(function(props){return null!=props&&props.isAllCaps?styles.n$:""})),minimal=function minimal(props){var colors=(0,styles.EC)(props),spaces=(0,styles.Gr)(props);return"\n    &:hover, &:focus-visible {\n      color: ".concat(null==colors?void 0:colors.primary[500],";\n    }\n    &:active {\n      color: ").concat(null==colors?void 0:colors.primary[600],";\n    }\n    &:disabled {\n      color: ").concat(null==colors?void 0:colors.gray[400],";\n    }\n\n    .MuiButton-startIcon {\n      margin-right: ").concat(null==spaces?void 0:spaces.xxs,"px;\n    }\n  ")},PrimaryMinimalButton=(0,styled.ZP)(MinimalButton)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n"])),minimal),SecondaryMinimalButton=(0,styled.ZP)(MinimalButton)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n  color: #000;\n"])),minimal),StyledButton=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  &:focus-visible {\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n  ","\n"])),(function(props){if(!props.isRounded)return"";var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props);return"\n      border-radius: ".concat(null==corners?void 0:corners.l,"px;\n      padding: ").concat(null==spacings?void 0:spacings.xs,"px ").concat(null==spacings?void 0:spacings.l,"px;\n      min-width: 120px;\n      height: 34px;\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Button_Button=react.forwardRef((function(props,ref){var sdsStyle=null==props?void 0:props.sdsStyle,sdsType=null==props?void 0:props.sdsType;sdsStyle&&sdsType||(0,warnings.$)(warnings.e.ButtonMissingSDSProps),"boolean"==typeof(null==props?void 0:props.isAllCaps)&&"minimal"!==sdsStyle&&console.warn("Warning: isAllCaps is only applied to buttons with sdsStyle='minimal'.");var isAllCaps="boolean"!=typeof(null==props?void 0:props.isAllCaps)||(null==props?void 0:props.isAllCaps),propsWithDefault=_objectSpread(_objectSpread({},props),{},{isAllCaps});switch(!0){case"rounded"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(RoundedButton,_objectSpread({color:"primary",ref,variant:"contained"},propsWithDefault));case"rounded"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(RoundedButton,_objectSpread({color:"primary",ref,variant:"outlined"},propsWithDefault));case"square"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(SquareButton,_objectSpread({color:"primary",ref,variant:"contained"},propsWithDefault));case"square"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(SquareButton,_objectSpread({color:"primary",ref,variant:"outlined"},propsWithDefault));case"minimal"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(PrimaryMinimalButton,_objectSpread({color:"primary",ref,variant:"text"},propsWithDefault));case"minimal"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(SecondaryMinimalButton,_objectSpread({color:"primary",ref,variant:"text"},propsWithDefault));default:return(0,jsx_runtime.jsx)(StyledButton,_objectSpread(_objectSpread({},propsWithDefault),{},{ref}))}}));const core_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"packages/components/src/core/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);