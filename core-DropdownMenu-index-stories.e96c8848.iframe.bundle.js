"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[1485],{"./node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/utils/esm/useEventCallback.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/utils/esm/ownerDocument.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function mapEventPropToEvent(eventProp){return eventProp.substring(2).toLowerCase()}const __WEBPACK_DEFAULT_EXPORT__=function ClickAwayListener(props){const{children,disableReactTree=!1,mouseEvent="onClick",onClickAway,touchEvent="onTouchEnd"}=props,movedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),nodeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),activatedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),syntheticEventRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(setTimeout((()=>{activatedRef.current=!0}),0),()=>{activatedRef.current=!1})),[]);const handleRef=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(children.ref,nodeRef),handleClickAway=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__.Z)((event=>{const insideReactTree=syntheticEventRef.current;syntheticEventRef.current=!1;const doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current);if(!activatedRef.current||!nodeRef.current||"clientX"in event&&function clickedRootScrollbar(event,doc){return doc.documentElement.clientWidth<event.clientX||doc.documentElement.clientHeight<event.clientY}(event,doc))return;if(movedRef.current)return void(movedRef.current=!1);let insideDOM;insideDOM=event.composedPath?event.composedPath().indexOf(nodeRef.current)>-1:!doc.documentElement.contains(event.target)||nodeRef.current.contains(event.target),insideDOM||!disableReactTree&&insideReactTree||onClickAway(event)})),createHandleSynthetic=handlerName=>event=>{syntheticEventRef.current=!0;const childrenPropsHandler=children.props[handlerName];childrenPropsHandler&&childrenPropsHandler(event)},childrenProps={ref:handleRef};return!1!==touchEvent&&(childrenProps[touchEvent]=createHandleSynthetic(touchEvent)),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(!1!==touchEvent){const mappedTouchEvent=mapEventPropToEvent(touchEvent),doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current),handleTouchMove=()=>{movedRef.current=!0};return doc.addEventListener(mappedTouchEvent,handleClickAway),doc.addEventListener("touchmove",handleTouchMove),()=>{doc.removeEventListener(mappedTouchEvent,handleClickAway),doc.removeEventListener("touchmove",handleTouchMove)}}}),[handleClickAway,touchEvent]),!1!==mouseEvent&&(childrenProps[mouseEvent]=createHandleSynthetic(mouseEvent)),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(!1!==mouseEvent){const mappedMouseEvent=mapEventPropToEvent(mouseEvent),doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current);return doc.addEventListener(mappedMouseEvent,handleClickAway),()=>{doc.removeEventListener(mappedMouseEvent,handleClickAway)}}}),[handleClickAway,mouseEvent]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,childrenProps)})}},"./packages/components/src/core/DropdownMenu/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LivePreview:()=>LivePreview,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,_Default$parameters,_Default$parameters2,_Default$parameters2$,_LivePreview$paramete,_LivePreview$paramete2,_LivePreview$paramete3,_Test$parameters,_Test$parameters2,_Test$parameters2$doc,_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ButtonIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/core/ButtonIcon/index.tsx"),_InputDropdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/core/InputDropdown/index.tsx"),_GITHUB_LABELS__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/core/DropdownMenu/GITHUB_LABELS.tsx"),_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/core/DropdownMenu/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var StyledInputDropdown=(0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.ZP)(_InputDropdown__WEBPACK_IMPORTED_MODULE_2__.Z)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  min-width: 300px;\n"]))),groupByOptions=[void 0,function(option){return option.section}];const __WEBPACK_DEFAULT_EXPORT__={argTypes:{ClickAwayListenerProps:{control:{type:"object"}},groupBy:{control:{labels:["No group by","Group by section names"],type:"select"},mapping:groupByOptions,options:Object.keys(groupByOptions)},keepSearchOnSelect:{control:{type:"boolean"}},label:{control:{type:"text"},require:!0},multiple:{control:{type:"boolean"}},search:{control:{type:"boolean"}},title:{control:{type:"text"}}},component:function DropdownMenu(props){var multiple=props.multiple,_props$options=props.options,options=void 0===_props$options?_GITHUB_LABELS__WEBPACK_IMPORTED_MODULE_3__.j:_props$options,search=props.search,title=props.title,label=props.label,propValue=props.value,isControlled=void 0!==propValue,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),anchorEl=_useState4[0],setAnchorEl=_useState4[1],_useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialValue()),2),value=_useState6[0],setValue=_useState6[1],_useState8=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitialValue()),2),pendingValue=_useState8[0],setPendingValue=_useState8[1],id=open?"dropdown-menu":void 0;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){isControlled&&setValue(propValue)}),[propValue]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledInputDropdown,{"aria-describedby":id,label,onClick:function handleClick(event){open?(multiple&&setValue(pendingValue),setOpen(!1),anchorEl&&anchorEl.focus(),setAnchorEl(null)):(multiple&&setPendingValue(value),setAnchorEl(event.currentTarget),setOpen(!0))},sdsStage:open?"userInput":"default",sdsType:multiple?"multiSelect":"singleSelect",sdsStyle:"square"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.Z,_objectSpread({anchorEl,disableCloseOnSelect:!1,id,multiple,onChange:function handleChange(_,newValue){if(multiple)return setPendingValue(newValue);setValue(newValue),setOpen(!1)},onClickAway:function handleClickAway(){open&&(setOpen(!1),multiple&&setValue(pendingValue))},open,options,PopperBaseProps:{placement:"bottom-start",sx:{width:300}},search,title,value:multiple?pendingValue:value,getOptionDisabled:function getOptionDisabled(option){return"Type: feature request"===option.name||"Type: documentation"===option.name}},props))]});function getInitialValue(){return isControlled?propValue:multiple?[]:null}},title:"Dropdowns/DropdownMenu"};var Default={args:{groupBy:groupByOptions[1],keepSearchOnSelect:!0,label:"Click Target",multiple:!0,search:!0,title:"Github Labels"}},storyRow={display:"grid",gridColumnGap:24,gridRowGap:8,gridTemplateColumns:"repeat(4, 160px)",gridTemplateRows:"repeat(2, auto)"},StyledInputDropdownLive1=(0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.ZP)(_InputDropdown__WEBPACK_IMPORTED_MODULE_2__.Z)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  position: relative !important;\n  min-width: unset;\n  &.MuiButtonBase-root {\n    margin: 0 !important;\n\n    & > span {\n      font-size: 13px;\n    }\n  }\n"]))),StyledInputDropdownLive3=(0,_mui_material__WEBPACK_IMPORTED_MODULE_6__.ZP)(_InputDropdown__WEBPACK_IMPORTED_MODULE_2__.Z)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  position: relative !important;\n  min-width: 160px;\n  &.MuiButtonBase-root {\n    margin: 0 !important;\n\n    & > span {\n      font-size: 13px;\n    }\n  }\n"]))),LIVE_PREVIEW_LABELS=[{name:"Menu Item 1",section:"Section 1"},{name:"Menu Item 2",section:"Section 1"},{name:"Menu Item 3",section:"Section 1"},{name:"Menu Item 4",section:"Section 2"},{name:"Menu Item 5",section:"Section 2"},{name:"Menu Item 6",section:"Section 2"}],LivePreviewDemo=function LivePreviewDemo(){var options=LIVE_PREVIEW_LABELS,_useState10=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),anchorEl1=_useState10[0],setAnchorEl1=_useState10[1],_useState12=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),anchorEl2=_useState12[0],setAnchorEl2=_useState12[1],_useState14=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),anchorEl3=_useState14[0],setAnchorEl3=_useState14[1],_useState16=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),anchorEl4=_useState16[0],setAnchorEl4=_useState16[1],_useState18=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open1=_useState18[0],setOpen1=_useState18[1],_useState20=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open2=_useState20[0],setOpen2=_useState20[1],_useState22=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open3=_useState22[0],setOpen3=_useState22[1],_useState24=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open4=_useState24[0],setOpen4=_useState24[1],_useState26=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),value1=_useState26[0],setValue1=_useState26[1],_useState28=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),value2=_useState28[0],setValue2=_useState28[1],_useState30=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),2),pendingValue3=_useState30[0],setPendingValue3=_useState30[1],_useState32=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),2),pendingValue4=_useState32[0],setPendingValue4=_useState32[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:storyRow,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{alignSelf:"end",gridArea:"1/1/2/2"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledInputDropdownLive1,{"aria-describedby":"live1",onClick:function handleClick1(event){open1?(setOpen1(!1),anchorEl1&&anchorEl1.focus(),setAnchorEl1(null)):(setAnchorEl1(event.currentTarget),setOpen1(!0))},label:"Click Target",sdsStage:open1?"userInput":"default",sdsType:"singleSelect",sdsStyle:"minimal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.Z,{anchorEl:anchorEl1,id:"live1",open:!!open1,onChange:function handleChange1(_,newValue){setOpen1(!1),setValue1(newValue)},disableCloseOnSelect:!1,options:options.slice(0,3),PopperBaseProps:{placement:"bottom-start",sx:{width:160}},search:!1,multiple:!1,hasSections:!1,value:value1,onClickAway:function handleClickAway1(){return open1&&setOpen1(!1)}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{gridArea:"1/2/2/3"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ButtonIcon__WEBPACK_IMPORTED_MODULE_1__.Z,{"aria-describedby":"live2","aria-label":"Open menu",onClick:function handleClick2(event){open2?(setOpen2(!1),anchorEl2&&anchorEl2.focus(),setAnchorEl2(null)):(setAnchorEl2(event.currentTarget),setOpen2(!0))},on:!1,sdsSize:"large",sdsType:"secondary",sdsIcon:"infoSpeechBubble"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.Z,{anchorEl:anchorEl2,id:"live2",open:!!open2,search:!1,multiple:!1,onChange:function handleChange2(_,newValue){setOpen2(!1),setValue2(newValue)},disableCloseOnSelect:!1,options:options.slice(0,3),PopperBaseProps:{placement:"bottom-start",sx:{width:160}},value:value2,title:"Title Lorem Ipsum",onClickAway:function handleClickAway2(){return open2&&setOpen2(!1)}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{gridArea:"1/3/2/4"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledInputDropdownLive3,{"aria-describedby":"live3",onClick:function handleClick3(event){open3?(setOpen3(!1),anchorEl3&&anchorEl3.focus(),setAnchorEl3(null)):(setAnchorEl3(event.currentTarget),setOpen3(!0))},label:"Click Target",sdsStage:open3?"userInput":"default",sdsType:"multiSelect",sdsStyle:"rounded"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.Z,{id:"live3",anchorEl:anchorEl3,open:!!open3,search:!0,multiple:!0,onChange:function handleChange3(_,newValue){return setPendingValue3(newValue)},disableCloseOnSelect:!0,options,PopperBaseProps:{placement:"bottom-start",sx:{width:160}},value:pendingValue3,onClickAway:function handleClickAway3(){return open3&&setOpen3(!1)}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{gridArea:"1/4/2/5"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledInputDropdownLive3,{"aria-describedby":"live4",onClick:function handleClick4(event){open4?(setOpen4(!1),anchorEl4&&anchorEl4.focus(),setAnchorEl4(null)):(setAnchorEl4(event.currentTarget),setOpen4(!0))},label:"Click Target",sdsStage:open4?"userInput":"default",sdsType:"multiSelect",sdsStyle:"square"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.Z,{id:"live4",anchorEl:anchorEl4,open:!!open4,search:!1,multiple:!0,hasSections:!0,groupBy:function groupBy(option){return option.section},onChange:function handleChange4(_,newValue){return setPendingValue4(newValue)},disableCloseOnSelect:!0,options,PopperBaseProps:{placement:"bottom-start",sx:{width:160}},value:pendingValue4,onClickAway:function handleClickAway4(){return open4&&setOpen4(!1)}})]})]})},LivePreview={args:{keepSearchOnSelect:!0,multiple:!1,search:!1},parameters:{snapshot:{skip:!0}},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(LivePreviewDemo,_objectSpread({},args))}},TestDemo=function TestDemo(props){var multiple=props.multiple,_props$options2=props.options,options=void 0===_props$options2?LIVE_PREVIEW_LABELS:_props$options2,search=props.search,_useState34=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),anchorEl=_useState34[0],setAnchorEl=_useState34[1],_useState36=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),open=_useState36[0],setOpen=_useState36[1],_useState38=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(multiple?[]:null),2),value=_useState38[0],setValue=_useState38[1],_useState40=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),2),pendingValue=_useState40[0],setPendingValue=_useState40[1],id=open?"github-label":void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_InputDropdown__WEBPACK_IMPORTED_MODULE_2__.Z,{"aria-describedby":id,onClick:function handleClick(event){open?(multiple&&setValue(pendingValue),setOpen(!1),anchorEl&&anchorEl.focus(),setAnchorEl(null)):(multiple&&setPendingValue(value),setAnchorEl(event.currentTarget),setOpen(!0))},label:"Click Target",sdsStage:open?"userInput":"default",sdsType:multiple?"multiSelect":"singleSelect",sdsStyle:"square","data-testid":"dropdown-menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.Z,_objectSpread({anchorEl,id,open,search,multiple,value:multiple?pendingValue:value,onChange:function handleChange(_,newValue){multiple||(setValue(newValue),setOpen(!1));return setPendingValue(newValue)},disableCloseOnSelect:multiple,options,onClickAway:function handleClickAway(){if(open)return setOpen(!1),multiple&&setValue(pendingValue)}},props))]})},Test={args:{keepSearchOnSelect:!1,multiple:!1,search:!1},parameters:{snapshot:{skip:!0}},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TestDemo,_objectSpread({},args))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    groupBy: groupByOptions[1],\n    keepSearchOnSelect: true,\n    label: "Click Target",\n    multiple: true,\n    search: true,\n    title: "Github Labels"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),LivePreview.parameters=_objectSpread(_objectSpread({},LivePreview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LivePreview$paramete=LivePreview.parameters)||void 0===_LivePreview$paramete?void 0:_LivePreview$paramete.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    keepSearchOnSelect: true,\n    multiple: false,\n    search: false\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <LivePreviewDemo {...args} />\n}"},null===(_LivePreview$paramete2=LivePreview.parameters)||void 0===_LivePreview$paramete2||null===(_LivePreview$paramete3=_LivePreview$paramete2.docs)||void 0===_LivePreview$paramete3?void 0:_LivePreview$paramete3.source)})}),Test.parameters=_objectSpread(_objectSpread({},Test.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Test$parameters=Test.parameters)||void 0===_Test$parameters?void 0:_Test$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    keepSearchOnSelect: false,\n    multiple: false,\n    search: false\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} />\n}"},null===(_Test$parameters2=Test.parameters)||void 0===_Test$parameters2||null===(_Test$parameters2$doc=_Test$parameters2.docs)||void 0===_Test$parameters2$doc?void 0:_Test$parameters2$doc.source)})});var __namedExportsOrder=["Default","LivePreview","Test"]},"./packages/components/src/core/DropdownMenu/GITHUB_LABELS.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>GITHUB_LABELS});__webpack_require__("./node_modules/react/index.js");var _Tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/core/Tag/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),GITHUB_LABELS=[{name:"Status: can't reproduce",section:"name only"},{name:"Status: confirmed",section:"name only"},{count:3,name:"Status: duplicate",section:"name with count"},{count:5,name:"Status: needs information",section:"name with count"},{details:"This will not be worked on",name:"Status: wont do/fix",section:"name with details"},{details:"This is still in progress",name:"Status: work in progress",section:"name with details"},{details:"This will not be worked on",name:"Type: bug",sdsIcon:"bacteria",sdsIconProps:{className:"custom-class-name"},section:"With Icon"},{count:4,name:"Type: discussion",sdsIcon:"puzzlePiece",section:"With Icon"},{name:"Type: documentation",sdsIcon:"copy",section:"With Icon"},{name:"Type: enhancement",sdsIcon:"lightBulb",section:"With Icon"},{name:"Type: epic",sdsIcon:"list",section:"With Icon"},{name:"Type: feature request",sdsIcon:"treeVertical",section:"With Icon"},{name:"Type: question",sdsIcon:"search",section:"With Icon"},{component:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:["Available Labels:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{marginTop:10},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"bug",sdsStyle:"rounded",sdsType:"secondary",color:"error"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"feature",sdsStyle:"rounded",sdsType:"secondary",color:"warning"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Tag__WEBPACK_IMPORTED_MODULE_1__.Z,{label:"refactor",sdsStyle:"rounded",sdsType:"secondary",color:"gray"})]})]}),name:"custom 2",section:"custom component"}]},"./packages/components/src/core/Tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_Tag});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function createTypeCss(props,type){var themeColors=(0,styles.EC)(props),intent="string"==typeof props.tagColor?props.tagColor:"primary",colors=Array.isArray(props.tagColor)?_toConsumableArray(props.tagColor):[],typeColors={primary:{background:colors.length>=2?colors[1]:null==themeColors?void 0:themeColors[intent][400],backgroundClicked:colors.length>=2?(0,colorManipulator._j)(colors[1],.3):null==themeColors?void 0:themeColors[intent][600],backgroundHover:colors.length>=2?(0,colorManipulator._j)(colors[1],.15):null==themeColors?void 0:themeColors[intent][500],iconColor:colors.length>2?colors[2]:"white",label:colors.length?colors[0]:"white"},secondary:{background:colors.length>=2?colors[1]:null==themeColors?void 0:themeColors[intent][200],backgroundClicked:colors.length>=2?(0,colorManipulator._j)(colors[1],.3):null==themeColors?void 0:themeColors[intent][600],backgroundHover:colors.length>=2?(0,colorManipulator._j)(colors[1],.15):null==themeColors?void 0:themeColors[intent][500],iconColor:colors.length>2?colors[2]:null==themeColors?void 0:themeColors[intent][400],label:colors.length?colors[0]:null==themeColors?void 0:themeColors[intent][600]}}[type];return(0,emotion_react_browser_esm.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    background-color: ",";\n    position: relative;\n\n    .MuiChip-label {\n      color: ",";\n    }\n\n    svg {\n      fill: ",";\n    }\n\n    &:hover,\n    &:active,\n    &:focus {\n      .MuiChip-label {\n        color: white;\n      }\n\n      svg {\n        fill: white;\n      }\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n\n    &:active {\n      background-color: ",";\n    }\n\n    &:focus {\n      background-color: ",";\n    }\n\n    &:focus:hover {\n      background-color: ",";\n    }\n\n    &:focus:active {\n      background-color: ",";\n    }\n  "])),typeColors.background,typeColors.label,typeColors.iconColor,typeColors.backgroundHover,typeColors.backgroundClicked,typeColors.background,typeColors.backgroundHover,typeColors.backgroundClicked)}var typeToCss={primary:function primary(props){return createTypeCss(props,"primary")},secondary:function secondary(props){return createTypeCss(props,"secondary")}},doNotForwardProps=["sdsType","sdsStyle","tagColor","hover"],StyledTag=(0,styled.ZP)(Chip.Z,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  border: none;\n\n  ","\n"])),(function(props){var _props$hover=props.hover,hover=void 0===_props$hover||_props$hover,sdsType=props.sdsType,sdsStyle=props.sdsStyle,icon=props.icon,isRounded="rounded"===sdsStyle,type=sdsType||"primary";return(0,emotion_react_browser_esm.iv)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n      ","\n      ","\n      ","\n      ","\n    "])),icon?function withIcon(props){var spacings=(0,styles.Gr)(props),iconSizes=(0,styles.Dk)(props);return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    height: unset;\n    margin: 0 ","px ","px 0;\n\n    .MuiChip-label {\n      ","\n      padding: 0;\n    }\n\n    .MuiSvgIcon-root {\n      height: ","px;\n      width: ","px;\n      padding-right: ","px;\n      margin: 0 0 0 -","px;\n    }\n\n    .MuiChip-deleteIcon {\n      ","\n      color: white;\n      margin: 0 0 0 ","px;\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xs,(0,styles.$g)(props),null==iconSizes?void 0:iconSizes.l.height,null==iconSizes?void 0:iconSizes.l.width,null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xxxs,(0,styles.J5)(props),null==spacings?void 0:spacings.xxs,null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width)}(props):function withoutIcon(props){var spacings=(0,styles.Gr)(props),iconSizes=(0,styles.Dk)(props);return(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    height: unset;\n    margin: 0 ","px ","px 0;\n\n    .MuiChip-label {\n      ","\n      padding: 0;\n    }\n\n    .MuiChip-deleteIcon {\n      ","\n      color: white;\n      margin: 0 0 0 ","px;\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xs,(0,styles.aI)(props),(0,styles.J5)(props),null==spacings?void 0:spacings.xxs,null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width)}(props),typeToCss[type](props),isRounded?function rounded(props){var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props),icon=props.icon;return(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    border-radius: ","px;\n    padding: ",";\n\n    &:after {\n      border-radius: ","px;\n    }\n  "])),null==corners?void 0:corners.l,icon?"".concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.s,"px ").concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.xs,"px"):"".concat(null==spacings?void 0:spacings.xxxs,"px ").concat(null==spacings?void 0:spacings.s,"px"),null==corners?void 0:corners.l)}(props):function square(props){var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props),icon=props.icon;return(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    border-radius: ","px;\n    padding: ",";\n\n    &:after {\n      border-radius: ","px;\n    }\n  "])),null==corners?void 0:corners.m,icon?"".concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.s,"px"):"".concat(null==spacings?void 0:spacings.xxxs,"px ").concat(null==spacings?void 0:spacings.xs,"px"),null==corners?void 0:corners.m)}(props),hover?function withHover(){return(0,emotion_react_browser_esm.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    &:hover {\n      cursor: pointer;\n    }\n\n    &:hover,\n    &:focus-visible {\n      color: white;\n    }\n  "])))}():"pointer-events: none;")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Tag=function Tag(props){var color=props.color;return(0,jsx_runtime.jsx)(StyledTag,_objectSpread(_objectSpread({tagColor:color},props),{},{color:"primary"}))};const core_Tag=Tag;try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{label:{defaultValue:null,description:"The content of the component.",name:"label",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"SdsTagColorType"}},icon:{defaultValue:null,description:"Icon element.",name:"icon",required:!1,type:{name:"(ReactElement<any, string | JSXElementConstructor<any>> & Element)"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<ChipClasses> & Partial<ClassNameMap<never>>)"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"This prop isn't supported.\nUse the `component` prop if you need to change the children structure.",name:"children",required:!1,type:{name:"null"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'filled'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"filled"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},avatar:{defaultValue:null,description:"The Avatar element to display.",name:"avatar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},clickable:{defaultValue:null,description:"If `true`, the chip will appear clickable, and will raise when pressed,\neven if the onClick prop is not defined.\nIf `false`, the chip will not appear clickable, even if onClick prop is defined.\nThis can be used, for example,\nalong with the component prop to indicate an anchor Chip is clickable.\nNote: this controls the UI and does not affect the onClick event.",name:"clickable",required:!1,type:{name:"boolean"}},deleteIcon:{defaultValue:null,description:"Override the default delete icon element. Shown only if `onDelete` is set.",name:"deleteIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onDelete:{defaultValue:null,description:"Callback fired when the delete icon is clicked.\nIf set, the delete icon will be shown.",name:"onDelete",required:!1,type:{name:"((event: any) => void)"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},skipFocusWhenDisabled:{defaultValue:{value:"false"},description:"If `true`, allows the disabled chip to escape focus.\nIf `false`, allows the disabled chip to receive focus.",name:"skipFocusWhenDisabled",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},sdsType:{defaultValue:null,description:"",name:"sdsType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},tagColor:{defaultValue:null,description:"",name:"tagColor",required:!1,type:{name:"SdsTagColorType"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tag/index.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"packages/components/src/core/Tag/index.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}}}]);