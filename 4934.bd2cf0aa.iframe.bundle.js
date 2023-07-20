/*! For license information please see 4934.bd2cf0aa.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[4934],{"./node_modules/@mui/material/SvgIcon/SvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SvgIcon_SvgIcon});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSvgIcon",slot)}(0,generateUtilityClasses.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],SvgIconRoot=(0,styled.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`],styles[`fontSize${(0,capitalize.Z)(ownerState.fontSize)}`]]}})((({theme,ownerState})=>{var _theme$transitions,_theme$transitions$cr,_theme$transitions2,_theme$transitions2$d,_theme$typography,_theme$typography$pxT,_theme$typography2,_theme$typography2$px,_theme$typography3,_theme$typography3$px,_palette$ownerState$c,_palette,_palette$ownerState$c2,_palette2,_palette2$action,_palette3,_palette3$action;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(_theme$transitions=theme.transitions)||null==(_theme$transitions$cr=_theme$transitions.create)?void 0:_theme$transitions$cr.call(_theme$transitions,"fill",{duration:null==(_theme$transitions2=theme.transitions)||null==(_theme$transitions2$d=_theme$transitions2.duration)?void 0:_theme$transitions2$d.shorter}),fontSize:{inherit:"inherit",small:(null==(_theme$typography=theme.typography)||null==(_theme$typography$pxT=_theme$typography.pxToRem)?void 0:_theme$typography$pxT.call(_theme$typography,20))||"1.25rem",medium:(null==(_theme$typography2=theme.typography)||null==(_theme$typography2$px=_theme$typography2.pxToRem)?void 0:_theme$typography2$px.call(_theme$typography2,24))||"1.5rem",large:(null==(_theme$typography3=theme.typography)||null==(_theme$typography3$px=_theme$typography3.pxToRem)?void 0:_theme$typography3$px.call(_theme$typography3,35))||"2.1875rem"}[ownerState.fontSize],color:null!=(_palette$ownerState$c=null==(_palette=(theme.vars||theme).palette)||null==(_palette$ownerState$c2=_palette[ownerState.color])?void 0:_palette$ownerState$c2.main)?_palette$ownerState$c:{action:null==(_palette2=(theme.vars||theme).palette)||null==(_palette2$action=_palette2.action)?void 0:_palette2$action.active,disabled:null==(_palette3=(theme.vars||theme).palette)||null==(_palette3$action=_palette3.action)?void 0:_palette3$action.disabled,inherit:void 0}[ownerState.color]}})),SvgIcon=react.forwardRef((function SvgIcon(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSvgIcon"}),{children,className,color="inherit",component="svg",fontSize="medium",htmlColor,inheritViewBox=!1,titleAccess,viewBox="0 0 24 24"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{color,component,fontSize,instanceFontSize:inProps.fontSize,inheritViewBox,viewBox}),more={};inheritViewBox||(more.viewBox=viewBox);const classes=(ownerState=>{const{color,fontSize,classes}=ownerState,slots={root:["root","inherit"!==color&&`color${(0,capitalize.Z)(color)}`,`fontSize${(0,capitalize.Z)(fontSize)}`]};return(0,composeClasses.Z)(slots,getSvgIconUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SvgIconRoot,(0,esm_extends.Z)({as:component,className:(0,clsx_m.Z)(classes.root,className),focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref},more,other,{ownerState,children:[children,titleAccess?(0,jsx_runtime.jsx)("title",{children:titleAccess}):null]}))}));SvgIcon.muiName="SvgIcon";const SvgIcon_SvgIcon=SvgIcon},"./node_modules/@mui/material/ToggleButton/ToggleButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ToggleButton_ToggleButton});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getToggleButtonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiToggleButton",slot)}const ToggleButton_toggleButtonClasses=(0,generateUtilityClasses.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],ToggleButtonRoot=(0,styled.ZP)(ButtonBase.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[`size${(0,capitalize.Z)(ownerState.size)}`]]}})((({theme,ownerState})=>{let selectedColorChannel,selectedColor="standard"===ownerState.color?theme.palette.text.primary:theme.palette[ownerState.color].main;return theme.vars&&(selectedColor="standard"===ownerState.color?theme.vars.palette.text.primary:theme.vars.palette[ownerState.color].main,selectedColorChannel="standard"===ownerState.color?theme.vars.palette.text.primaryChannel:theme.vars.palette[ownerState.color].mainChannel),(0,esm_extends.Z)({},theme.typography.button,{borderRadius:(theme.vars||theme).shape.borderRadius,padding:11,border:`1px solid ${(theme.vars||theme).palette.divider}`,color:(theme.vars||theme).palette.action.active},ownerState.fullWidth&&{width:"100%"},{[`&.${ToggleButton_toggleButtonClasses.disabled}`]:{color:(theme.vars||theme).palette.action.disabled,border:`1px solid ${(theme.vars||theme).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:theme.vars?`rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette.text.primary,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ToggleButton_toggleButtonClasses.selected}`]:{color:selectedColor,backgroundColor:theme.vars?`rgba(${selectedColorChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,colorManipulator.Fq)(selectedColor,theme.palette.action.selectedOpacity),"&:hover":{backgroundColor:theme.vars?`rgba(${selectedColorChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))`:(0,colorManipulator.Fq)(selectedColor,theme.palette.action.selectedOpacity+theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:theme.vars?`rgba(${selectedColorChannel} / ${theme.vars.palette.action.selectedOpacity})`:(0,colorManipulator.Fq)(selectedColor,theme.palette.action.selectedOpacity)}}}},"small"===ownerState.size&&{padding:7,fontSize:theme.typography.pxToRem(13)},"large"===ownerState.size&&{padding:15,fontSize:theme.typography.pxToRem(15)})})),ToggleButton_ToggleButton=react.forwardRef((function ToggleButton(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiToggleButton"}),{children,className,color="standard",disabled=!1,disableFocusRipple=!1,fullWidth=!1,onChange,onClick,selected,size="medium",value}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{color,disabled,disableFocusRipple,fullWidth,size}),classes=(ownerState=>{const{classes,fullWidth,selected,disabled,size,color}=ownerState,slots={root:["root",selected&&"selected",disabled&&"disabled",fullWidth&&"fullWidth",`size${(0,capitalize.Z)(size)}`,color]};return(0,composeClasses.Z)(slots,getToggleButtonUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsx)(ToggleButtonRoot,(0,esm_extends.Z)({className:(0,clsx_m.Z)(classes.root,className),disabled,focusRipple:!disableFocusRipple,ref,onClick:event=>{onClick&&(onClick(event,value),event.defaultPrevented)||onChange&&onChange(event,value)},onChange,value,ownerState,"aria-pressed":selected},other,{children}))}))},"./node_modules/@mui/material/ToggleButtonGroup/ToggleButtonGroup.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ToggleButtonGroup_ToggleButtonGroup});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=(__webpack_require__("./node_modules/react-is/index.js"),__webpack_require__("./node_modules/clsx/dist/clsx.m.js")),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js");function isValueSelected(value,candidate){return void 0!==candidate&&void 0!==value&&(Array.isArray(candidate)?candidate.indexOf(value)>=0:value===candidate)}var generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getToggleButtonGroupUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiToggleButtonGroup",slot)}const ToggleButtonGroup_toggleButtonGroupClasses=(0,generateUtilityClasses.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],ToggleButtonGroupRoot=(0,styled.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[{[`& .${ToggleButtonGroup_toggleButtonGroupClasses.grouped}`]:styles.grouped},{[`& .${ToggleButtonGroup_toggleButtonGroupClasses.grouped}`]:styles[`grouped${(0,capitalize.Z)(ownerState.orientation)}`]},styles.root,"vertical"===ownerState.orientation&&styles.vertical,ownerState.fullWidth&&styles.fullWidth]}})((({ownerState,theme})=>(0,esm_extends.Z)({display:"inline-flex",borderRadius:(theme.vars||theme).shape.borderRadius},"vertical"===ownerState.orientation&&{flexDirection:"column"},ownerState.fullWidth&&{width:"100%"},{[`& .${ToggleButtonGroup_toggleButtonGroupClasses.grouped}`]:(0,esm_extends.Z)({},"horizontal"===ownerState.orientation?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${ToggleButtonGroup_toggleButtonGroupClasses.selected} + .${ToggleButtonGroup_toggleButtonGroupClasses.grouped}.${ToggleButtonGroup_toggleButtonGroupClasses.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${ToggleButtonGroup_toggleButtonGroupClasses.selected} + .${ToggleButtonGroup_toggleButtonGroupClasses.grouped}.${ToggleButtonGroup_toggleButtonGroupClasses.selected}`]:{borderTop:0,marginTop:0}})}))),ToggleButtonGroup_ToggleButtonGroup=react.forwardRef((function ToggleButtonGroup(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiToggleButtonGroup"}),{children,className,color="standard",disabled=!1,exclusive=!1,fullWidth=!1,onChange,orientation="horizontal",size="medium",value}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{disabled,fullWidth,orientation,size}),classes=(ownerState=>{const{classes,orientation,fullWidth,disabled}=ownerState,slots={root:["root","vertical"===orientation&&"vertical",fullWidth&&"fullWidth"],grouped:["grouped",`grouped${(0,capitalize.Z)(orientation)}`,disabled&&"disabled"]};return(0,composeClasses.Z)(slots,getToggleButtonGroupUtilityClass,classes)})(ownerState),handleChange=(event,buttonValue)=>{if(!onChange)return;const index=value&&value.indexOf(buttonValue);let newValue;value&&index>=0?(newValue=value.slice(),newValue.splice(index,1)):newValue=value?value.concat(buttonValue):[buttonValue],onChange(event,newValue)},handleExclusiveChange=(event,buttonValue)=>{onChange&&onChange(event,value===buttonValue?null:buttonValue)};return(0,jsx_runtime.jsx)(ToggleButtonGroupRoot,(0,esm_extends.Z)({role:"group",className:(0,clsx_m.Z)(classes.root,className),ref,ownerState},other,{children:react.Children.map(children,(child=>react.isValidElement(child)?react.cloneElement(child,{className:(0,clsx_m.Z)(classes.grouped,child.props.className),onChange:exclusive?handleExclusiveChange:handleChange,selected:void 0===child.props.selected?isValueSelected(child.props.value,value):child.props.selected,size:child.props.size||size,fullWidth,color:child.props.color||color,disabled:child.props.disabled||disabled}):null))}))}))},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var u,b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen");function v(a){if("object"==typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}u=Symbol.for("react.module.reference")},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);