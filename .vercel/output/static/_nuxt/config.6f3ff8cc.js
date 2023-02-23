import{j as ue,r as he,_ as be,d as X,k as T,l as fe,c as F,h as r,m as ge,o as pe,a as ve,b as U,t as me,n as _,f as we,e as xe,p as ke}from"./entry.f6939452.js";import{c as ye,i as Ce,a as O,b as t,j as E,d as P,k as c,l as I,u as Se,e as Y,m as _e,g as m,h as Be,n as j,r as w,N as Re,o as $e,p as D}from"./light.09fd0cdb.js";import{u as Ve,p as A,d as u}from"./use-merged-state.d3ff8d9c.js";function ze(){const e=ue();return e._appConfig||(e._appConfig=he(be)),e._appConfig}const Fe={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},We=e=>{const{primaryColor:o,opacityDisabled:d,borderRadius:l,textColor3:n}=e,h="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Fe),{iconColor:n,textColor:"white",loadingColor:o,opacityDisabled:d,railColor:h,railColorActive:o,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:l,railBorderRadiusMedium:l,railBorderRadiusLarge:l,buttonBorderRadiusSmall:l,buttonBorderRadiusMedium:l,buttonBorderRadiusLarge:l,boxShadowFocus:`0 0 0 2px ${Ce(o,{alpha:.2})}`})},Ne={name:"Switch",common:ye,self:We},Me=Ne,He=O("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),O("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[E({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),P("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),c("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),I("disabled",[I("icon",[c("rubber-band",[c("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[P("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),c("active",[c("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[P("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),c("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[E()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),c("active",[t("rail","background-color: var(--n-rail-color-active);")]),c("loading",[t("rail",`
 cursor: wait;
 `)]),c("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Le=Object.assign(Object.assign({},Y.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Te=X({name:"Switch",props:Le,setup(e){B===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:o,inlineThemeDisabled:d}=Se(e),l=Y("Switch","-switch",He,Me,e,o),n=_e(e),{mergedSizeRef:h,mergedDisabledRef:s}=n,y=T(e.defaultValue),R=fe(e,"value"),v=Ve(R,y),C=F(()=>v.value===e.checkedValue),x=T(!1),i=T(!1),b=F(()=>{const{railStyle:a}=e;if(a)return a({focused:i.value,checked:C.value})});function f(a){const{"onUpdate:value":$,onChange:V,onUpdateValue:z}=e,{nTriggerFormInput:W,nTriggerFormChange:N}=n;$&&D($,a),z&&D(z,a),V&&D(V,a),y.value=a,W(),N()}function q(){const{nTriggerFormFocus:a}=n;a()}function G(){const{nTriggerFormBlur:a}=n;a()}function J(){e.loading||s.value||(v.value!==e.checkedValue?f(e.checkedValue):f(e.uncheckedValue))}function Q(){i.value=!0,q()}function Z(){i.value=!1,G(),x.value=!1}function ee(a){e.loading||s.value||a.key===" "&&(v.value!==e.checkedValue?f(e.checkedValue):f(e.uncheckedValue),x.value=!1)}function te(a){e.loading||s.value||a.key===" "&&(a.preventDefault(),x.value=!0)}const K=F(()=>{const{value:a}=h,{self:{opacityDisabled:$,railColor:V,railColorActive:z,buttonBoxShadow:W,buttonColor:N,boxShadowFocus:ae,loadingColor:ie,textColor:ne,iconColor:oe,[m("buttonHeight",a)]:g,[m("buttonWidth",a)]:re,[m("buttonWidthPressed",a)]:le,[m("railHeight",a)]:p,[m("railWidth",a)]:S,[m("railBorderRadius",a)]:se,[m("buttonBorderRadius",a)]:de},common:{cubicBezierEaseInOut:ce}}=l.value;let M,H,L;return B?(M=`calc((${p} - ${g}) / 2)`,H=`max(${p}, ${g})`,L=`max(${S}, calc(${S} + ${g} - ${p}))`):(M=A((u(p)-u(g))/2),H=A(Math.max(u(p),u(g))),L=u(p)>u(g)?S:A(u(S)+u(g)-u(p))),{"--n-bezier":ce,"--n-button-border-radius":de,"--n-button-box-shadow":W,"--n-button-color":N,"--n-button-width":re,"--n-button-width-pressed":le,"--n-button-height":g,"--n-height":H,"--n-offset":M,"--n-opacity-disabled":$,"--n-rail-border-radius":se,"--n-rail-color":V,"--n-rail-color-active":z,"--n-rail-height":p,"--n-rail-width":S,"--n-width":L,"--n-box-shadow-focus":ae,"--n-loading-color":ie,"--n-text-color":ne,"--n-icon-color":oe}}),k=d?Be("switch",F(()=>h.value[0]),K,e):void 0;return{handleClick:J,handleBlur:Z,handleFocus:Q,handleKeyup:ee,handleKeydown:te,mergedRailStyle:b,pressed:x,mergedClsPrefix:o,mergedValue:v,checked:C,mergedDisabled:s,cssVars:d?void 0:K,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:o,checked:d,mergedRailStyle:l,onRender:n,$slots:h}=this;n==null||n();const{checked:s,unchecked:y,icon:R,"checked-icon":v,"unchecked-icon":C}=h,x=!(j(R)&&j(v)&&j(C));return r("div",{role:"switch","aria-checked":d,class:[`${e}-switch`,this.themeClass,x&&`${e}-switch--icon`,d&&`${e}-switch--active`,o&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},r("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:l},w(s,i=>w(y,b=>i||b?r("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},r("div",{class:`${e}-switch__rail-placeholder`},r("div",{class:`${e}-switch__button-placeholder`}),i),r("div",{class:`${e}-switch__rail-placeholder`},r("div",{class:`${e}-switch__button-placeholder`}),b)):null)),r("div",{class:`${e}-switch__button`},w(R,i=>w(v,b=>w(C,f=>r(Re,null,{default:()=>this.loading?r($e,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(b||i)?r("div",{class:`${e}-switch__button-icon`,key:b?"checked-icon":"icon"},b||i):!this.checked&&(f||i)?r("div",{class:`${e}-switch__button-icon`,key:f?"unchecked-icon":"icon"},f||i):null})))),w(s,i=>i&&r("div",{key:"checked",class:`${e}-switch__checked`},i)),w(y,i=>i&&r("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}}),Ae=X({__name:"config",setup(e){const o=ze(),d=ge();return console.log(d),(l,n)=>{const h=Te;return pe(),ve("div",{class:ke({dark:_(o).theme.dark})},[U("p",{class:"bg-blue-300 dark:bg-slate-600 dark:text-slate-200",onClick:n[0]||(n[0]=s=>_(o).title="hello")}," appConfig: "+me(_(o).title),1),U("label",null,[we(" dark mode: "),xe(h,{id:"toggle",value:_(o).theme.dark,"onUpdate:value":n[1]||(n[1]=s=>_(o).theme.dark=s)},null,8,["value"])])],2)}}});export{Ae as default};
