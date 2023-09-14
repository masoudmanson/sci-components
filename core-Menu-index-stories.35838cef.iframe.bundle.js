"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[2922],{"./packages/components/src/core/Menu/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomPlacement:()=>CustomPlacement,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_CustomPlacement$para,_CustomPlacement$para2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/core/Button/index.tsx"),_MenuItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/core/MenuItem/index.tsx"),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/core/Menu/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={component:function Menu(props){var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(null),2),anchorEl=_React$useState2[0],setAnchorEl=_React$useState2[1],handleClose=function handleClose(){setAnchorEl(null)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{sdsStyle:"minimal",sdsType:"secondary",onClick:function handleClick(event){setAnchorEl(event.currentTarget)},children:"Click me!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({anchorEl,keepMounted:!0,open:Boolean(anchorEl),onClose:handleClose},props),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:handleClose,children:"Contact us"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:handleClose,children:"Terms of Use"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:handleClose,children:"Privacy Policy"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:handleClose,children:"Logout"})]}))]})},title:"Dropdowns/Menu"};var Default={},CustomPlacement={args:{anchorOrigin:{horizontal:"right",vertical:"bottom"},column:"column value",transformOrigin:{horizontal:"right",vertical:"top"}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),CustomPlacement.parameters=_objectSpread(_objectSpread({},CustomPlacement.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CustomPlacement$para=CustomPlacement.parameters)||void 0===_CustomPlacement$para?void 0:_CustomPlacement$para.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    anchorOrigin: {\n      horizontal: "right",\n      vertical: "bottom"\n    },\n    column: "column value",\n    transformOrigin: {\n      horizontal: "right",\n      vertical: "top"\n    }\n  }\n}'},null===(_CustomPlacement$para2=CustomPlacement.parameters)||void 0===_CustomPlacement$para2||null===(_CustomPlacement$para2=_CustomPlacement$para2.docs)||void 0===_CustomPlacement$para2?void 0:_CustomPlacement$para2.source)})});var __namedExportsOrder=["Default","CustomPlacement"]},"./packages/components/src/core/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_Button});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,react=__webpack_require__("./node_modules/react/index.js"),warnings=__webpack_require__("./packages/components/src/common/warnings.ts"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var sdsPropNames=["isAllCaps","isRounded","sdsStyle","sdsType"],ButtonBase=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  box-shadow: none;\n  ","\n"])),(function(props){var variant=props.variant,colors=(0,styles.EC)(props),spacings=(0,styles.Gr)(props),containedPadding="".concat(null==spacings?void 0:spacings.xs,"px ").concat(null==spacings?void 0:spacings.l,"px"),outlinedPadding="".concat(((null==spacings?void 0:spacings.xs)||0)-1,"px ").concat(((null==spacings?void 0:spacings.l)||0)-1,"px"),padding="outlined"===variant?outlinedPadding:containedPadding,outlineBorder="outlined"===variant?"border-color: ".concat(null==colors?void 0:colors.primary[400],";"):"";return"\n      ".concat(outlineBorder,"\n      padding: ").concat(padding,";\n      min-width: 120px;\n      height: 34px;\n      &:hover {\n        color: white;\n        background-color: ").concat(null==colors?void 0:colors.primary[500],";\n        box-shadow: none;\n      }\n      &:focus-visible {\n        outline: 5px auto Highlight;\n        outline: 5px auto -webkit-focus-ring-color;\n      }\n      &:active {\n        color: white;\n        background-color: ").concat(null==colors?void 0:colors.primary[600],";\n        box-shadow: none;\n      }\n      &:disabled {\n        color: ").concat(null==colors?void 0:colors.gray[400],";\n        background-color: ").concat(null==colors?void 0:colors.gray[300],";\n        border-color: ").concat(null==colors?void 0:colors.gray[300],";\n      }\n      .MuiButton-startIcon {\n        margin-right: ").concat(null==spacings?void 0:spacings.m,"px;\n      }\n      .MuiButton-endIcon {\n        margin-left: ").concat(null==spacings?void 0:spacings.m,"px;\n      }\n    ")})),RoundedButton=(0,styled.ZP)(ButtonBase,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var corners=(0,styles.DV)(props);return"\n      border-radius: ".concat(null==corners?void 0:corners.l,"px;\n    ")})),SquareButton=ButtonBase,MinimalButton=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n\n  ","\n  &:hover, &:focus-visible {\n    background-color: transparent;\n  }\n  &:focus-visible {\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"])),(function(props){var spacings=(0,styles.Gr)(props);return"\n      padding: ".concat(null==spacings?void 0:spacings.xxs,"px 0;\n    ")}),(function(props){return null!=props&&props.isAllCaps?styles.n$:""})),minimal=function minimal(props){var colors=(0,styles.EC)(props),spaces=(0,styles.Gr)(props);return"\n    &:hover, &:focus-visible {\n      color: ".concat(null==colors?void 0:colors.primary[500],";\n    }\n    &:active {\n      color: ").concat(null==colors?void 0:colors.primary[600],";\n    }\n    &:disabled {\n      color: ").concat(null==colors?void 0:colors.gray[400],";\n    }\n\n    .MuiButton-startIcon {\n      margin-right: ").concat(null==spaces?void 0:spaces.xxs,"px;\n    }\n  ")},PrimaryMinimalButton=(0,styled.ZP)(MinimalButton)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n"])),minimal),SecondaryMinimalButton=(0,styled.ZP)(MinimalButton)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n  color: #000;\n"])),minimal),StyledButton=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  &:focus-visible {\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n  ","\n"])),(function(props){if(!props.isRounded)return"";var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props);return"\n      border-radius: ".concat(null==corners?void 0:corners.l,"px;\n      padding: ").concat(null==spacings?void 0:spacings.xs,"px ").concat(null==spacings?void 0:spacings.l,"px;\n      min-width: 120px;\n      height: 34px;\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Button_Button=react.forwardRef((function(props,ref){var sdsStyle=null==props?void 0:props.sdsStyle,sdsType=null==props?void 0:props.sdsType;sdsStyle&&sdsType||(0,warnings.$)(warnings.e.ButtonMissingSDSProps),"boolean"==typeof(null==props?void 0:props.isAllCaps)&&"minimal"!==sdsStyle&&console.warn("Warning: isAllCaps is only applied to buttons with sdsStyle='minimal'.");var isAllCaps="boolean"!=typeof(null==props?void 0:props.isAllCaps)||(null==props?void 0:props.isAllCaps),propsWithDefault=_objectSpread(_objectSpread({},props),{},{isAllCaps});switch(!0){case"rounded"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(RoundedButton,_objectSpread({color:"primary",ref,variant:"contained"},propsWithDefault));case"rounded"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(RoundedButton,_objectSpread({color:"primary",ref,variant:"outlined"},propsWithDefault));case"square"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(SquareButton,_objectSpread({color:"primary",ref,variant:"contained"},propsWithDefault));case"square"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(SquareButton,_objectSpread({color:"primary",ref,variant:"outlined"},propsWithDefault));case"minimal"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(PrimaryMinimalButton,_objectSpread({color:"primary",ref,variant:"text"},propsWithDefault));case"minimal"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(SecondaryMinimalButton,_objectSpread({color:"primary",ref,variant:"text"},propsWithDefault));default:return(0,jsx_runtime.jsx)(StyledButton,_objectSpread(_objectSpread({},propsWithDefault),{},{ref}))}}));const core_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"packages/components/src/core/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);