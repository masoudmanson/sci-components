"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[9688],{"./packages/components/src/core/TooltipTable/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LivePreview:()=>LivePreview,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,InfoOutlined=__webpack_require__("./node_modules/@mui/icons-material/InfoOutlined.js"),Link=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/components/src/core/Link/index.tsx")),Tooltip=__webpack_require__("./packages/components/src/core/Tooltip/index.tsx"),TableContainer=__webpack_require__("./node_modules/@mui/material/TableContainer/TableContainer.js"),Table=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),TableBody=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),TableRow=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),TableCell=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var sdsPropNames=["contentAlert","itemAlign"],disabledStyle=function disabledStyle(props){var colors=(0,styles.EC)(props);return props.disabled?"\n    color: ".concat(null==colors?void 0:colors.gray[300],";\n  "):""},Section=(0,styled.ZP)("div")(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),disabledStyle,(function(props){var colors=(0,styles.EC)(props),spacings=(0,styles.Gr)(props);return"\n      &:not(:last-child) {\n        padding-bottom: ".concat(null==spacings?void 0:spacings.l,"px;\n        border-bottom: 1px solid ").concat(null==colors?void 0:colors.gray[200],";\n      }\n\n      &:not(:first-of-type) {\n        padding-top: ").concat(null==spacings?void 0:spacings.l,"px;\n      }\n    ")})),SectionLabel=(0,styled.ZP)("div")(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n  ","\n\n  ","\n"])),styles.vz,disabledStyle,(function(props){var colors=(0,styles.EC)(props),spacings=(0,styles.Gr)(props);return props.label?"\n      margin-bottom: ".concat(null==spacings?void 0:spacings.m,"px;\n      color: ").concat(null==colors?void 0:colors.gray[500],";\n    "):""})),RowLabel=(0,styled.ZP)(TableCell.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop.toString())}})(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n  ","\n  ","\n"])),styles.$g,disabledStyle,(function(props){var spacings=(0,styles.Gr)(props);return"\n      padding: 0 0 ".concat(null==spacings?void 0:spacings.xxs,"px 0;\n      width: 50%;\n      border-bottom: none;\n      font-weight: 600;\n    ")})),RowValue=(0,styled.ZP)(TableCell.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop.toString())}})(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n  ","\n\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 0 !important;\n  border-bottom: none;\n"])),styles.$g,disabledStyle),Alert=(0,styled.ZP)("div")(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n"])),styles.mA),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["contentAlert","data","itemAlign"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const core_TooltipTable=function TooltipTableContent(props){var contentAlert=props.contentAlert,data=props.data,_props$itemAlign=props.itemAlign,itemAlign=void 0===_props$itemAlign?"right":_props$itemAlign,rest=_objectWithoutProperties(props,_excluded);return(0,jsx_runtime.jsxs)(TableContainer.Z,_objectSpread(_objectSpread({},rest),{},{children:[contentAlert&&(0,jsx_runtime.jsx)(Alert,{children:contentAlert}),null==data?void 0:data.map((function(section,index){return(0,jsx_runtime.jsxs)(Section,{disabled:section.disabled,children:[(0,jsx_runtime.jsx)(SectionLabel,{disabled:section.disabled,label:section.label,children:section.label}),(0,jsx_runtime.jsx)(Table.Z,{size:"small",children:(0,jsx_runtime.jsx)(TableBody.Z,{children:section.dataRows.map((function(row,rowIndex){return(0,jsx_runtime.jsxs)(TableRow.Z,{children:[(0,jsx_runtime.jsx)(RowLabel,{disabled:section.disabled,align:"left",children:row.label}),(0,jsx_runtime.jsx)(RowValue,{disabled:section.disabled,align:itemAlign,children:row.value})]},row.label+String(rowIndex))}))})})]},"".concat(section.label+String(index)))}))]}))};try{TooltipTable.displayName="TooltipTable",TooltipTable.__docgenInfo={description:"",displayName:"TooltipTable",props:{data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"{ label?: string; dataRows: { label: string; value: string | number; }[]; disabled?: boolean; }[] | undefined"}},contentAlert:{defaultValue:null,description:"",name:"contentAlert",required:!1,type:{name:"string | Element"}},itemAlign:{defaultValue:null,description:"",name:"itemAlign",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/TooltipTable/index.tsx#TooltipTable"]={docgenInfo:TooltipTable.__docgenInfo,name:"TooltipTable",path:"packages/components/src/core/TooltipTable/index.tsx#TooltipTable"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,_LivePreview$paramete,_LivePreview$paramete2,_LivePreview$paramete3,_Test$parameters,_Test$parameters2,_Test$parameters2$doc;function index_stories_typeof(obj){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},index_stories_typeof(obj)}function index_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function index_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?index_stories_ownKeys(Object(source),!0).forEach((function(key){index_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):index_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(arg){var key=function index_stories_toPrimitive(input,hint){if("object"!==index_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==index_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===index_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var rows=[{label:"Label 1",value:1},{label:"Label 2",value:2},{label:"Label 3",value:3},{label:"Label 4",value:4},{label:"Label 5 ",value:5},{label:"Label 6",value:6},{label:"Label 7",value:7},{label:"Label 8",value:8},{label:"Label 9",value:9},{label:"Label 10",value:10},{label:"Label 11",value:11},{label:"Label 12",value:12},{label:"Label 13",value:13},{label:"Label 14",value:14},{label:"Label 15",value:15}],data=[{dataRows:rows.slice(0,5),label:"Section 1"},{dataRows:rows.slice(5,10),label:"Section 2"},{dataRows:rows.slice(10,15),label:"Section 3"}];const index_stories={argTypes:{contentAlert:{control:{type:"select"},options:["String","Element","None"]},itemAlign:{control:{type:"radio"},options:["right","left"]}},component:function TooltipTableContent(props){var contentAlert=props.contentAlert;return(0,jsx_runtime.jsx)(core_TooltipTable,index_stories_objectSpread(index_stories_objectSpread({},props),{},{contentAlert:function handleAlert(){var alertContent;switch(contentAlert){case"String":alertContent="Some values do not pass the selected filter";break;case"Element":alertContent=(0,jsx_runtime.jsx)(Link.Z,{href:"/",children:"Click this link to see samples"});break;default:alertContent=void 0}return alertContent}()}))},title:"TooltipTable"};var Default={args:{contentAlert:"None",data,itemAlign:"right"}},storyRow={alignItems:"stretch",display:"flex",flexDirection:"row",gap:"20px",justifyContent:"flex-start"},tooltipStyleMock={flexGrow:1},LivePreviewDemo=function LivePreviewDemo(props){return(0,jsx_runtime.jsxs)("div",{style:storyRow,children:[(0,jsx_runtime.jsx)("div",{style:tooltipStyleMock,children:(0,jsx_runtime.jsx)(Tooltip.Z,{followCursor:!0,placement:"right-end",title:(0,jsx_runtime.jsx)(core_TooltipTable,index_stories_objectSpread(index_stories_objectSpread({},props),{},{data:[data[0]]})),children:(0,jsx_runtime.jsx)(InfoOutlined.Z,{color:"primary",fontSize:"small"})})}),(0,jsx_runtime.jsx)("div",{style:tooltipStyleMock,children:(0,jsx_runtime.jsx)(Tooltip.Z,{followCursor:!0,placement:"right-end",title:(0,jsx_runtime.jsx)(core_TooltipTable,index_stories_objectSpread(index_stories_objectSpread({},props),{},{data:[data[0],data[1]]})),children:(0,jsx_runtime.jsx)(InfoOutlined.Z,{color:"primary",fontSize:"small"})})}),(0,jsx_runtime.jsx)("div",{style:tooltipStyleMock,children:(0,jsx_runtime.jsx)(Tooltip.Z,{followCursor:!0,placement:"right-end",title:(0,jsx_runtime.jsx)(core_TooltipTable,index_stories_objectSpread(index_stories_objectSpread({},props),{},{data})),children:(0,jsx_runtime.jsx)(InfoOutlined.Z,{color:"primary",fontSize:"small"})})})]})},LivePreview={parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(LivePreviewDemo,index_stories_objectSpread({},args))}},TestDemo=function TestDemo(props){return(0,jsx_runtime.jsx)(core_TooltipTable,index_stories_objectSpread(index_stories_objectSpread({},props),{},{data:[data[0],data[1]],"data-testid":"tooltipTable"}))},Test={parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(TestDemo,index_stories_objectSpread({},args))}};Default.parameters=index_stories_objectSpread(index_stories_objectSpread({},Default.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  args: {\n    contentAlert: "None",\n    data,\n    itemAlign: "right"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),LivePreview.parameters=index_stories_objectSpread(index_stories_objectSpread({},LivePreview.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_LivePreview$paramete=LivePreview.parameters)||void 0===_LivePreview$paramete?void 0:_LivePreview$paramete.docs),{},{source:index_stories_objectSpread({originalSource:"{\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <LivePreviewDemo {...args} />\n}"},null===(_LivePreview$paramete2=LivePreview.parameters)||void 0===_LivePreview$paramete2||null===(_LivePreview$paramete3=_LivePreview$paramete2.docs)||void 0===_LivePreview$paramete3?void 0:_LivePreview$paramete3.source)})}),Test.parameters=index_stories_objectSpread(index_stories_objectSpread({},Test.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Test$parameters=Test.parameters)||void 0===_Test$parameters?void 0:_Test$parameters.docs),{},{source:index_stories_objectSpread({originalSource:"{\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} />\n}"},null===(_Test$parameters2=Test.parameters)||void 0===_Test$parameters2||null===(_Test$parameters2$doc=_Test$parameters2.docs)||void 0===_Test$parameters2$doc?void 0:_Test$parameters2$doc.source)})});var __namedExportsOrder=["Default","LivePreview","Test"]},"./packages/components/src/common/warnings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _SDS_WARNINGS;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{$:()=>showWarningIfFirstOccurence,e:()=>SDSWarningTypes});var SDSWarningTypes=function(SDSWarningTypes){return SDSWarningTypes.ButtonMissingSDSProps="buttonMissingProps",SDSWarningTypes.ChipDeprecated="chipDeprecated",SDSWarningTypes.MenuSelectDeprecated="menuSelectDeprecated",SDSWarningTypes.ButtonIconMediumSize="buttonIconMediumSize",SDSWarningTypes.TooltipSubtitle="tooltipSubtitle",SDSWarningTypes.TooltipWidth="tooltipWidth",SDSWarningTypes.TooltipInverted="tooltipInverted",SDSWarningTypes}({}),SDS_WARNINGS=(_defineProperty(_SDS_WARNINGS={},SDSWarningTypes.ButtonMissingSDSProps,{hasWarned:!1,message:"Warning: Buttons without sdsStyle or sdsType props will be deprecated."}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.ChipDeprecated,{hasWarned:!1,message:"Warning: <Chip /> will be deprecated and replaced with <Tag />"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.MenuSelectDeprecated,{hasWarned:!1,message:"Warning: MenuSelect will be deprecated and replaced with <DropdownMenu />"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.ButtonIconMediumSize,{hasWarned:!1,message:"Warning: A medium size ButtonIcon can only be of type tertiary!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipSubtitle,{hasWarned:!1,message:"Warning: The 'subtitle' text is only available for dark tooltips!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipWidth,{hasWarned:!1,message:"Warning: The 'wide' width is only available for light tooltips!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipInverted,{hasWarned:!1,message:"Warning: Tooltips using the inverted prop will be deprecated. Please use sdsStyle: 'dark' | 'light' instead!"}),_SDS_WARNINGS),showWarningIfFirstOccurence=function showWarningIfFirstOccurence(warningType){warningType in SDS_WARNINGS||(SDS_WARNINGS[warningType]={hasWarned:!1,message:"Warning: SDSWarningType ".concat(warningType," is not defined in SDS_WARNINGS")}),SDS_WARNINGS[warningType].hasWarned||(console.warn(SDS_WARNINGS[warningType].message),SDS_WARNINGS[warningType].hasWarned=!0)}},"./packages/components/src/core/Link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_Link});var _templateObject,_templateObject2,_templateObject3,_templateObject4,react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Link=__webpack_require__("./node_modules/@mui/material/Link/Link.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var sdsPropNames=["sdsStyle"],StyledLink=(0,styled.ZP)(Link.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop.toString())}})(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var sdsStyle=props.sdsStyle;return(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n      ","\n      ","\n    "])),"default"===sdsStyle&&function defaultStyle(props){var _theme$app,_theme$app2,theme=props.theme;return(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    color: ",";\n\n    &:hover,\n    &:focus {\n      color: ",";\n    }\n  "])),null==theme||null===(_theme$app=theme.app)||void 0===_theme$app?void 0:_theme$app.colors.primary[400],null==theme||null===(_theme$app2=theme.app)||void 0===_theme$app2?void 0:_theme$app2.colors.primary[500])}(props),"dashed"===sdsStyle&&function dashedStyle(props){var border=(0,styles.W0)(props);return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    color: inherit;\n    border-bottom: ",";\n\n    &:hover,\n    &:focus {\n      text-decoration: none;\n      border-bottom: ",";\n    }\n  "])),null==border?void 0:border.link.dashed,null==border?void 0:border.link.solid)}(props))})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Link_Link=(0,react.forwardRef)((function(props,ref){var underline;return"default"===props.sdsStyle&&(underline="none"),(0,jsx_runtime.jsx)(StyledLink,_objectSpread(_objectSpread({},props),{},{underline,ref}))}));const core_Link=Link_Link;try{Link_Link.displayName="Link",Link_Link.__docgenInfo={description:"",displayName:"Link",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Link/index.tsx#Link"]={docgenInfo:Link_Link.__docgenInfo,name:"Link",path:"packages/components/src/core/Link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/core/Tooltip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_Tooltip});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,Tooltip_Tooltip=__webpack_require__("./node_modules/@mui/material/Tooltip/Tooltip.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),react=__webpack_require__("./node_modules/react/index.js"),warnings=__webpack_require__("./packages/components/src/common/warnings.ts"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),Popper=__webpack_require__("./node_modules/@mui/material/Popper/Popper.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Subtitle=(0,styled.ZP)("div")(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.zm,(function(props){var colors=(0,styles.EC)(props);return"\n      color: ".concat(null==colors?void 0:colors.gray[400],";\n    ")})),tooltipCss=function tooltipCss(props){var inverted=props.inverted,sdsStyle=props.sdsStyle,width=props.width,followCursor=props.followCursor,shadows=(0,styles.tM)(props);return(0,emotion_css_esm.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    &.MuiTooltip-tooltip {\n      ","\n      ","\n\n      ","\n\n      box-shadow: ",";\n    }\n  "])),"dark"===sdsStyle||inverted?function dark(props){var spacings=(0,styles.Gr)(props);return(0,emotion_css_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    ","\n    background-color: black;\n    color: white;\n    text-align: center;\n    max-width: 250px;\n    padding: ","px ","px;\n  "])),(0,styles.J5)(props),null==spacings?void 0:spacings.s,null==spacings?void 0:spacings.l)}(props):function light(props){var spacings=(0,styles.Gr)(props);return(0,emotion_css_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    ","\n    background-color: white;\n    color: black;\n    text-align: left;\n    max-width: 250px;\n    padding: ","px ","px;\n  "])),(0,styles.$g)(props),null==spacings?void 0:spacings.xs,null==spacings?void 0:spacings.l)}(props),"wide"===width&&"light"===sdsStyle&&function wide(){return(0,emotion_css_esm.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    max-width: 550px;\n  "])))}(),!0===followCursor&&function tableStyles(props){var spacings=(0,styles.Gr)(props);return(0,emotion_css_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    padding: ","px;\n  "])),null==spacings?void 0:spacings.m)}(props),null==shadows?void 0:shadows.m)},arrowCss=function arrowCss(props){var inverted=props.inverted,sdsStyle=props.sdsStyle,arrowOffset=props.arrowOffset;return(0,emotion_css_esm.iv)(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n    &.MuiTooltip-arrow {\n      /* (bethbertozzi): !important is needed to fight inline style */\n      left: ","px !important;\n      color: ",";\n      &:before {\n        box-sizing: border-box;\n        width: 12px;\n        height: 12px;\n      }\n    }\n  "])),arrowOffset,inverted||"dark"===sdsStyle?"black":"white")},StyledPopper=(0,styled.ZP)(Popper.Z)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(['\n  &[data-popper-placement*="top"] .MuiTooltip-arrow {\n    width: 24px !important;\n    height: 12px !important;\n    margin-bottom: -12px !important;\n    &:before {\n      transform: rotate(45deg) translate(0px, -2px);\n      border-bottom-right-radius: 2px;\n      box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);\n    }\n  }\n\n  &[data-popper-placement*="bottom"] .MuiTooltip-arrow {\n    width: 24px !important;\n    height: 12px !important;\n    margin-top: -12px !important;\n    &:before {\n      transform: rotate(45deg) translate(-1px, 2px);\n      border-top-left-radius: 2px;\n      box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.1);\n    }\n  }\n\n  &[data-popper-placement*="left"] .MuiTooltip-arrow {\n    width: 12px !important;\n    height: 16px !important;\n    margin-right: -12px !important;\n    &:before {\n      transform: rotate(45deg) translate(-1px, 1px);\n      border-top-right-radius: 2px;\n      box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.1);\n    }\n  }\n\n  &[data-popper-placement*="right"] .MuiTooltip-arrow {\n    width: 12px !important;\n    height: 16px !important;\n    margin-left: -12px !important;\n    &:before {\n      transform: rotate(45deg) translate(4px, 2px);\n      border-bottom-left-radius: 2px;\n      box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.1);\n    }\n  }\n']))),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["arrowOffset","classes","inverted","sdsStyle","subtitle","title","width","PopperComponent"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Tooltip=(0,react.forwardRef)((function Tooltip(props,ref){var arrowOffset=props.arrowOffset,classes=props.classes,inverted=props.inverted,_props$sdsStyle=props.sdsStyle,sdsStyle=void 0===_props$sdsStyle?"light":_props$sdsStyle,subtitle=props.subtitle,title=props.title,_props$width=props.width,width=void 0===_props$width?"default":_props$width,_props$PopperComponen=props.PopperComponent,PopperComponent=void 0===_props$PopperComponen?StyledPopper:_props$PopperComponen,rest=_objectWithoutProperties(props,_excluded),children=rest.children;inverted&&(0,warnings.$)(warnings.e.TooltipInverted),"wide"===width&&"dark"===sdsStyle&&(0,warnings.$)(warnings.e.TooltipWidth),subtitle&&"light"===sdsStyle&&(0,warnings.$)(warnings.e.TooltipSubtitle);var extraProps={arrowOffset,classes,inverted,sdsStyle,theme:(0,useTheme.Z)(),width},tooltip=mergeClass({className:tooltipCss(extraProps),key:"tooltip",props}),arrow=mergeClass({className:arrowCss(extraProps),key:"arrow",props});if(!title&&!subtitle)return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children});var content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[title,"dark"===sdsStyle&&subtitle&&(0,jsx_runtime.jsx)(Subtitle,{children:subtitle})]}),leaveDelay=inverted||"dark"===sdsStyle?0:500;return(0,jsx_runtime.jsx)(Tooltip_Tooltip.Z,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({classes:{arrow,tooltip},leaveDelay,title:content,PopperComponent,ref},rest))}));function mergeClass(_ref){var props=_ref.props,className=_ref.className,key=_ref.key,classes=props.classes;if(!classes)return className;var propClassName=classes[key];return propClassName?"".concat(propClassName," ").concat(className):className}const core_Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{arrowOffset:{defaultValue:null,description:"",name:"arrowOffset",required:!1,type:{name:"number"}},sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"wide"'}]}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},followCursor:{defaultValue:{value:"false"},description:"If `true`, the tooltip follow the cursor over the wrapped element.",name:"followCursor",required:!1,type:{name:"boolean"}},inverted:{defaultValue:null,description:"",name:"inverted",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tooltip/index.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"packages/components/src/core/Tooltip/index.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}}}]);