"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[1151],{"./packages/components/src/common/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>noop,m:()=>toKebabCase});var noop=function noop(){},toKebabCase=function toKebabCase(str){return str.replace(/[\s_]+/g,"-").toLowerCase()}},"./packages/components/src/core/DropdownMenu/GITHUB_LABELS.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>GITHUB_LABELS});var _Tag__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/core/Tag/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),GITHUB_LABELS=[{name:"Status: can't reproduce",section:"name only"},{name:"Status: confirmed",section:"name only"},{count:3,name:"Status: duplicate",section:"name with count"},{count:5,name:"Status: needs information",section:"name with count"},{details:"This will not be worked on",name:"Status: wont do/fix",section:"name with details"},{details:"This is still in progress",name:"Status: work in progress",section:"name with details"},{details:"This will not be worked on",name:"Type: bug",sdsIcon:"bacteria",sdsIconProps:{className:"custom-class-name"},section:"With Icon"},{count:4,name:"Type: discussion",sdsIcon:"puzzlePiece",section:"With Icon"},{name:"Type: documentation",sdsIcon:"copy",section:"With Icon"},{name:"Type: enhancement",sdsIcon:"lightBulb",section:"With Icon"},{name:"Type: epic",sdsIcon:"list",section:"With Icon"},{name:"Type: feature request",sdsIcon:"treeVertical",section:"With Icon"},{name:"Type: question",sdsIcon:"search",section:"With Icon"},{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:["Available Labels:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{marginTop:10},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_0__.Z,{label:"bug",sdsStyle:"rounded",sdsType:"secondary",color:"error"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_0__.Z,{label:"feature",sdsStyle:"rounded",sdsType:"secondary",color:"warning"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_0__.Z,{label:"refactor",sdsStyle:"rounded",sdsType:"secondary",color:"gray"})]})]}),name:"Available labels",section:"custom component"}]},"./packages/components/src/core/MenuItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/core/MenuItem/style.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","column","disabled","isMultiSelect","sdsIcon","sdsIconProps","sdsStyle"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var MenuItem=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function MenuItem(props,ref){var children=props.children,_props$column=props.column,column=void 0===_props$column?null:_props$column,disabled=props.disabled,_props$isMultiSelect=props.isMultiSelect,isMultiSelect=void 0!==_props$isMultiSelect&&_props$isMultiSelect,sdsIcon=props.sdsIcon,sdsIconProps=props.sdsIconProps,_props$sdsStyle=props.sdsStyle,sdsStyle=void 0===_props$sdsStyle?"determinate":_props$sdsStyle,originalMenuItemProps=_objectWithoutProperties(props,_excluded),_ref$selected=originalMenuItemProps.selected,selected=void 0!==_ref$selected&&_ref$selected;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__.CM,_objectSpread(_objectSpread({},originalMenuItemProps),{},{disabled,ref,children:[isMultiSelect&&function selectionIcon(){return"determinate"===sdsStyle?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.Mv,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.ip,{className:"check-icon",selected,color:"primary",disabled})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.Mv,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.UV,{className:"check-icon",selected,color:"primary",disabled})})}(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__.vs,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__.OP,{selected,className:"primary-text",disabled,children:[sdsIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.oS,{disabled,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.Z,_objectSpread(_objectSpread({},sdsIconProps),{},{sdsType:"static",sdsIcon,sdsSize:"s"}))}),children]}),column&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.fh,{disabled,children:column})]})]}))}));const __WEBPACK_DEFAULT_EXPORT__=MenuItem;try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!1,type:{name:"enum",value:[{value:'"determinate"'},{value:'"indeterminate"'}]}},disabled:{defaultValue:{value:"false\nfalse"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"If `true`, the component is selected.",name:"selected",required:!1,type:{name:"boolean"}},column:{defaultValue:null,description:"",name:"column",required:!1,type:{name:"ReactNode"}},isMultiSelect:{defaultValue:null,description:"",name:"isMultiSelect",required:!1,type:{name:"boolean"}},sdsIcon:{defaultValue:null,description:"",name:"sdsIcon",required:!1,type:{name:"enum",value:[{value:'"list"'},{value:'"infoCircle"'},{value:'"table"'},{value:'"globe"'},{value:'"people"'},{value:'"search"'},{value:'"bacteria"'},{value:'"barChartHorizontal3"'},{value:'"checkCircle"'},{value:'"gear"'},{value:'"flagCheck"'},{value:'"download"'},{value:'"filter"'},{value:'"link"'},{value:'"document"'},{value:'"copy"'},{value:'"open"'},{value:'"loading"'},{value:'"edit"'},{value:'"lightBulb"'},{value:'"linesHorizontal"'},{value:'"xMark"'},{value:'"dotsHorizontal"'},{value:'"treeHorizontal"'},{value:'"barChartVertical3"'},{value:'"barChartVertical4"'},{value:'"check"'},{value:'"chevronDown"'},{value:'"chevronLeft2"'},{value:'"chevronLeft"'},{value:'"chevronRight2"'},{value:'"chevronRight"'},{value:'"chevronUp"'},{value:'"circlesOverlap"'},{value:'"exclamationMarkCircle"'},{value:'"eyeClosed"'},{value:'"eyeOpen"'},{value:'"flagOutline"'},{value:'"flagQuestionmark"'},{value:'"flagXmark"'},{value:'"house"'},{value:'"lifeRing"'},{value:'"linesDashed3Solid1"'},{value:'"lock"'},{value:'"lockCircle"'},{value:'"minus"'},{value:'"percentage"'},{value:'"person"'},{value:'"pin"'},{value:'"pinLocation"'},{value:'"plus"'},{value:'"plusCircle"'},{value:'"puzzlePiece"'},{value:'"refresh"'},{value:'"searchLinesHorizontal"'},{value:'"starburst"'},{value:'"trashCan"'},{value:'"treeVertical"'},{value:'"triangleDown"'},{value:'"triangleLeft"'},{value:'"triangleRight"'},{value:'"triangleUp"'},{value:'"xMarkCircle"'}]}},sdsIconProps:{defaultValue:null,description:"",name:"sdsIconProps",required:!1,type:{name:'Partial<IconProps<"list" | "infoCircle" | "table" | "globe" | "people" | "search" | "bacteria" | "barChartHorizontal3" | "checkCircle" | "gear" | "flagCheck" | "download" | "filter" | "link" | ... 48 more ... | "xMarkCircle">>'}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<MenuItemClasses> & Partial<ClassNameMap<never>>)"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},dense:{defaultValue:{value:"false"},description:"If `true`, compact vertical padding designed for keyboard and mouse input is used.\nThe prop defaults to the value inherited from the parent Menu component.",name:"dense",required:!1,type:{name:"boolean"}},disableGutters:{defaultValue:{value:"false"},description:"If `true`, the left and right padding is removed.",name:"disableGutters",required:!1,type:{name:"boolean"}},divider:{defaultValue:{value:"false"},description:"If `true`, a 1px light border is added to the bottom of the menu item.",name:"divider",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/MenuItem/index.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"packages/components/src/core/MenuItem/index.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/core/MenuItem/style.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CM:()=>StyledMenuItem,Mv:()=>StyledIconWrapper,OP:()=>TextWrapper,Tm:()=>DemoWrapper,UV:()=>StyledMinus,fh:()=>ColumnWrapper,ip:()=>StyledCheck,oS:()=>StyledMenuItemIcon,vs:()=>ContentWrapper});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/icons-material/esm/Check.js"),_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/esm/Remove.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/MenuItem/menuItemClasses.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_styles_common_mixins_fonts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/core/styles/common/mixins/fonts.ts"),_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/core/styles/common/selectors/theme.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var fontBodyXs=(0,_styles_common_mixins_fonts__WEBPACK_IMPORTED_MODULE_0__.oJ)("xs"),StyledMenuItem=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var selected=props.selected,colors=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.EC)(props),fontWeights=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.y2)(props),spacings=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.Gr)(props),primary=null==colors?void 0:colors.primary[400];return"\n      padding: ".concat(null==spacings?void 0:spacings.xs,"px ").concat(null==spacings?void 0:spacings.s,"px !important;\n      min-height: unset;\n      opacity: 1;\n\n      &.MuiAutocomplete-option {\n        min-height: unset;\n      }\n      \n      .primary-text {\n        font-weight: ").concat(selected?null==fontWeights?void 0:fontWeights.semibold:null==fontWeights?void 0:fontWeights.regular,";\n      }\n\n      &.MuiButtonBase-root {\n        background-color: transparent;\n        opacity: 1;\n\n        &:hover, &.").concat(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z.focusVisible," {\n          background-color: ").concat(null==colors?void 0:colors.gray[100],';\n\n          &[aria-selected="true"] {\n            background-color: ').concat(null==colors?void 0:colors.gray[100],';\n          }\n        }\n      }\n\n      &.MuiMenuItem-root .MuiSvgIcon-root {\n        align-self: flex-start;\n      }\n\n      &.MuiMenuItem-root .Mui-disabled {\n        opacity: 1 !important;\n      }\n\n      &.MuiAutocomplete-option[aria-selected="true"] {\n        &:hover {\n          background-color: ').concat(null==colors?void 0:colors.gray[100]," !important;\n        }\n\n        svg.check-icon {\n          color: ").concat(selected?primary:null==colors?void 0:colors.gray[500],';\n        }\n      }\n\n      &.MuiAutocomplete-option[aria-disabled="true"] {\n        opacity: 1;\n      }\n\n      &:hover {\n        background-color: ').concat(null==colors?void 0:colors.gray[100],";\n        svg.check-icon {\n          color: ").concat(selected?primary:null==colors?void 0:colors.gray[500],";\n        }\n      }\n\n      &.Mui-selected.MuiListItem-root.MuiListItem-button {\n        background-color: white;\n        &:hover {\n          background-color: ").concat(null==colors?void 0:colors.gray[100],";\n        }\n        .primary-text {\n          font-weight: ").concat(null==fontWeights?void 0:fontWeights.semibold,";\n        }\n      }\n\n      &:active {\n        svg.check-icon {\n          color: ").concat(primary,";\n        }\n\n        &:active {\n          svg.check-icon {\n            color: ").concat(primary,";\n          }\n\n          .primary-text {\n            font-weight: ").concat(null==fontWeights?void 0:fontWeights.semibold,";\n          }\n        }\n      }\n    ")})),ContentWrapper=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ZP)("span")(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n"]))),disabledStyles=function disabledStyles(props){if(!props.disabled)return"";var colors=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.EC)(props);return"\n    color: ".concat(null==colors?void 0:colors.gray[300],";\n    cursor: default;\n  ")},TextWrapper=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ZP)("span")(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n\n  ","\n\n  ","\n"])),fontBodyXs,(function(props){var _palette$text,palette=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.XN)(props);return"\n      color: ".concat(null==palette||null===(_palette$text=palette.text)||void 0===_palette$text?void 0:_palette$text.primary,";\n      display: flex;\n      white-space: pre-wrap;\n    ")}),disabledStyles),StyledMenuItemIcon=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ZP)("span")(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var disabled=props.disabled,spacings=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.Gr)(props),iconSizes=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.Dk)(props),colors=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.EC)(props);return"\n      margin-right: ".concat(null==spacings?void 0:spacings.xs,"px;\n      margin-top: ").concat(null==spacings?void 0:spacings.xxxs,"px;\n      height: ").concat(null==iconSizes?void 0:iconSizes.s.height,"px;\n\n      .MuiSvgIcon-root {\n        ").concat(disabled?"color: ".concat(null==colors?void 0:colors.gray[300],";"):null,"\n      }\n    ")})),ColumnWrapper=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ZP)("span")(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n\n  text-align: right;\n  color: black;\n  margin-left: 10px;\n\n  ","\n"])),fontBodyXs,disabledStyles),DemoWrapper=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ZP)("div")(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  width: 250px;\n"]))),StyledIconWrapper=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ZP)("span")(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var spacings=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.Gr)(props),iconSizes=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.Dk)(props);return"\n      align-self: start;\n      margin-right: ".concat(null==spacings?void 0:spacings.m,"px;\n      margin-top: ").concat(null==spacings?void 0:spacings.xxxs,"px;\n      height: ").concat(null==iconSizes?void 0:iconSizes.s.height,"px;\n    ")})),StyledCheck=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ZP)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__.Z,{shouldForwardProp:function shouldForwardProp(prop){return"selected"!==prop}})(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var selected=props.selected,disabled=props.disabled,colors=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.EC)(props),iconSizes=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.Dk)(props),selectedColor=disabled?null==colors?void 0:colors.gray[300]:null==colors?void 0:colors.primary[400];return"\n      color: ".concat(selected?selectedColor:"transparent",";\n      padding: 0;\n      height: ").concat(null==iconSizes?void 0:iconSizes.s.height,"px;\n      width: ").concat(null==iconSizes?void 0:iconSizes.s.width,"px;\n\n      &.MuiCheckbox-colorPrimary.Mui-checked:hover {\n        background-color: transparent;\n      }\n    ")})),StyledMinus=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.ZP)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.Z,{shouldForwardProp:function shouldForwardProp(prop){return"selected"!==prop}})(_templateObject9||(_templateObject9=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var selected=props.selected,disabled=props.disabled,colors=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.EC)(props),iconSizes=(0,_styles_common_selectors_theme__WEBPACK_IMPORTED_MODULE_3__.Dk)(props),selectedColor=disabled?null==colors?void 0:colors.gray[300]:null==colors?void 0:colors.primary[400];return"\n      color: ".concat(selected?selectedColor:"transparent",";\n      padding: 0;\n      height: ").concat(null==iconSizes?void 0:iconSizes.s.height,"px;\n      width: ").concat(null==iconSizes?void 0:iconSizes.s.width,"px;\n\n      &.MuiCheckbox-colorPrimary.Mui-checked:hover {\n        background-color: transparent;\n      }\n    ")}))},"./packages/components/src/core/Tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_Tag});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function createTypeCss(props,type){var themeColors=(0,styles.EC)(props),intent="string"==typeof props.tagColor?props.tagColor:"primary",colors=Array.isArray(props.tagColor)?_toConsumableArray(props.tagColor):[],typeColors={primary:{background:colors.length>=2?colors[1]:null==themeColors?void 0:themeColors[intent][400],backgroundClicked:colors.length>=2?(0,colorManipulator._j)(colors[1],.3):null==themeColors?void 0:themeColors[intent][600],backgroundHover:colors.length>=2?(0,colorManipulator._j)(colors[1],.15):null==themeColors?void 0:themeColors[intent][500],iconColor:colors.length>2?colors[2]:"white",label:colors.length?colors[0]:"white"},secondary:{background:colors.length>=2?colors[1]:null==themeColors?void 0:themeColors[intent][200],backgroundClicked:colors.length>=2?(0,colorManipulator._j)(colors[1],.3):null==themeColors?void 0:themeColors[intent][600],backgroundHover:colors.length>=2?(0,colorManipulator._j)(colors[1],.15):null==themeColors?void 0:themeColors[intent][500],iconColor:colors.length>2?colors[2]:null==themeColors?void 0:themeColors[intent][400],label:colors.length?colors[0]:null==themeColors?void 0:themeColors[intent][600]}}[type];return(0,emotion_react_browser_esm.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    background-color: ",";\n    position: relative;\n\n    .MuiChip-label {\n      color: ",";\n    }\n\n    svg {\n      fill: ",";\n    }\n\n    &:hover,\n    &:active,\n    &:focus {\n      .MuiChip-label {\n        color: white;\n      }\n\n      svg {\n        fill: white;\n      }\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n\n    &:active {\n      background-color: ",";\n    }\n\n    &:focus {\n      background-color: ",";\n    }\n\n    &:focus:hover {\n      background-color: ",";\n    }\n\n    &:focus:active {\n      background-color: ",";\n    }\n  "])),typeColors.background,typeColors.label,typeColors.iconColor,typeColors.backgroundHover,typeColors.backgroundClicked,typeColors.background,typeColors.backgroundHover,typeColors.backgroundClicked)}var typeToCss={primary:function primary(props){return createTypeCss(props,"primary")},secondary:function secondary(props){return createTypeCss(props,"secondary")}},doNotForwardProps=["sdsType","sdsStyle","tagColor","hover"],StyledTag=(0,styled.ZP)(Chip.Z,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  border: none;\n\n  ","\n"])),(function(props){var _props$hover=props.hover,hover=void 0===_props$hover||_props$hover,sdsType=props.sdsType,sdsStyle=props.sdsStyle,icon=props.icon,isRounded="rounded"===sdsStyle,type=sdsType||"primary";return(0,emotion_react_browser_esm.iv)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n      ","\n      ","\n      ","\n      ","\n    "])),icon?function withIcon(props){var spacings=(0,styles.Gr)(props),iconSizes=(0,styles.Dk)(props);return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    height: unset;\n    margin: 0 ","px ","px 0;\n\n    .MuiChip-label {\n      ","\n      padding: 0;\n    }\n\n    .MuiSvgIcon-root {\n      height: ","px;\n      width: ","px;\n      padding-right: ","px;\n      margin: 0 0 0 -","px;\n    }\n\n    .MuiChip-deleteIcon {\n      ","\n      color: white;\n      margin: 0 0 0 ","px;\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xs,(0,styles.$g)(props),null==iconSizes?void 0:iconSizes.l.height,null==iconSizes?void 0:iconSizes.l.width,null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xxxs,(0,styles.J5)(props),null==spacings?void 0:spacings.xxs,null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width)}(props):function withoutIcon(props){var spacings=(0,styles.Gr)(props),iconSizes=(0,styles.Dk)(props);return(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    height: unset;\n    margin: 0 ","px ","px 0;\n\n    .MuiChip-label {\n      ","\n      padding: 0;\n    }\n\n    .MuiChip-deleteIcon {\n      ","\n      color: white;\n      margin: 0 0 0 ","px;\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xs,(0,styles.aI)(props),(0,styles.J5)(props),null==spacings?void 0:spacings.xxs,null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width)}(props),typeToCss[type](props),isRounded?function rounded(props){var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props),icon=props.icon;return(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    border-radius: ","px;\n    padding: ",";\n\n    &:after {\n      border-radius: ","px;\n    }\n  "])),null==corners?void 0:corners.l,icon?"".concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.s,"px ").concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.xs,"px"):"".concat(null==spacings?void 0:spacings.xxxs,"px ").concat(null==spacings?void 0:spacings.s,"px"),null==corners?void 0:corners.l)}(props):function square(props){var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props),icon=props.icon;return(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    border-radius: ","px;\n    padding: ",";\n\n    &:after {\n      border-radius: ","px;\n    }\n  "])),null==corners?void 0:corners.m,icon?"".concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.s,"px"):"".concat(null==spacings?void 0:spacings.xxxs,"px ").concat(null==spacings?void 0:spacings.xs,"px"),null==corners?void 0:corners.m)}(props),hover?function withHover(){return(0,emotion_react_browser_esm.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    &:hover {\n      cursor: pointer;\n    }\n\n    &:hover,\n    &:focus-visible {\n      color: white;\n    }\n  "])))}():"pointer-events: none;")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Tag=function Tag(props){var color=props.color;return(0,jsx_runtime.jsx)(StyledTag,_objectSpread(_objectSpread({tagColor:color},props),{},{color:"primary"}))};const core_Tag=Tag;try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{label:{defaultValue:null,description:"The content of the component.",name:"label",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"SdsTagColorType"}},icon:{defaultValue:null,description:"Icon element.",name:"icon",required:!1,type:{name:"(ReactElement<any, string | JSXElementConstructor<any>> & Element)"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<ChipClasses> & Partial<ClassNameMap<never>>)"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"This prop isn't supported.\nUse the `component` prop if you need to change the children structure.",name:"children",required:!1,type:{name:"null"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'filled'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},avatar:{defaultValue:null,description:"The Avatar element to display.",name:"avatar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},clickable:{defaultValue:null,description:"If `true`, the chip will appear clickable, and will raise when pressed,\neven if the onClick prop is not defined.\nIf `false`, the chip will not appear clickable, even if onClick prop is defined.\nThis can be used, for example,\nalong with the component prop to indicate an anchor Chip is clickable.\nNote: this controls the UI and does not affect the onClick event.",name:"clickable",required:!1,type:{name:"boolean"}},deleteIcon:{defaultValue:null,description:"Override the default delete icon element. Shown only if `onDelete` is set.",name:"deleteIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onDelete:{defaultValue:null,description:"Callback fired when the delete icon is clicked.\nIf set, the delete icon will be shown.",name:"onDelete",required:!1,type:{name:"((event: any) => void)"}},skipFocusWhenDisabled:{defaultValue:{value:"false"},description:"If `true`, allows the disabled chip to escape focus.\nIf `false`, allows the disabled chip to receive focus.",name:"skipFocusWhenDisabled",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},sdsType:{defaultValue:null,description:"",name:"sdsType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},tagColor:{defaultValue:null,description:"",name:"tagColor",required:!1,type:{name:"SdsTagColorType"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tag/index.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"packages/components/src/core/Tag/index.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}}}]);