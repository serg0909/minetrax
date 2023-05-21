import{r as _,ac as M,o,d as r,a as c,m as q,b as i,w as s,f as l,t as a,V as R,n as C,aP as H,T as N,h as I,i as Q,c as g,u as y,e as m,F as Y,g as D,K as O,bE as A}from"./app.cdeb0fbf.js";import{_ as U}from"./ActionSection.599c039c.js";import{_ as K}from"./Button.a6a3f950.js";import{_ as X}from"./DialogModal.f514a86d.js";import{_ as z}from"./Input.8bbfc6fc.js";import{_ as G}from"./InputError.cc6f927e.js";import{_ as S}from"./SecondaryButton.5fbafbe9.js";import{_ as W}from"./DangerButton.1b9c3600.js";import{X as j}from"./XInput.03f7126b.js";import"./SectionTitle.da02a3b3.js";import"./Modal.146d1fb9.js";const J={class:"mt-4"},w={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(k,{emit:x}){const u=_(!1),e=M({password:"",error:"",processing:!1}),d=_(null),v=()=>{axios.get(route("password.confirmation")).then(n=>{n.data.confirmed?x("confirmed"):(u.value=!0,setTimeout(()=>d.value.focus(),250))})},h=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,f(),H().then(()=>x("confirmed"))}).catch(n=>{e.processing=!1,e.error=n.response.data.errors.password[0],d.value.focus()})},f=()=>{u.value=!1,e.password="",e.error=""};return(n,p)=>(o(),r("span",null,[c("span",{onClick:v},[q(n.$slots,"default")]),i(X,{show:u.value,onClose:f},{title:s(()=>[l(a(k.title),1)]),content:s(()=>[l(a(k.content)+" ",1),c("div",J,[i(z,{ref_key:"passwordInput",ref:d,modelValue:e.password,"onUpdate:modelValue":p[0]||(p[0]=F=>e.password=F),type:"password",class:"mt-1 block w-3/4",placeholder:n.__("Password"),onKeyup:R(h,["enter"])},null,8,["modelValue","placeholder","onKeyup"]),i(G,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:s(()=>[i(S,{onClick:f},{default:s(()=>[l(a(n.__("Cancel")),1)]),_:1}),i(K,{class:C(["ml-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:h},{default:s(()=>[l(a(k.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},Z={key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-300"},ee={key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-400"},te={key:2,class:"text-lg font-medium text-gray-900 dark:text-gray-300"},oe={class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ae={key:3},se={key:0},re={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ne={key:0,class:"font-semibold"},le={key:1},ie=["innerHTML"],ce={key:0,class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ue={class:"font-semibold"},de=["innerHTML"],me={key:1,class:"mt-4"},fe={key:1},pe={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},_e={class:"font-semibold"},he={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 dark:text-gray-300 rounded-lg"},ye={class:"mt-5"},ve={key:0},ge={key:1},Pe={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(k){const x=k,u=_(!1),e=_(!1),d=_(!1),v=_(null),h=_(null),f=_([]),n=N({code:""}),p=I(()=>{var t,b;return!u.value&&((b=(t=O().props.auth)==null?void 0:t.user)==null?void 0:b.two_factor_enabled)});Q(p,()=>{p.value||(n.reset(),n.clearErrors())});const F=()=>{u.value=!0,A.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([B(),E(),V()]),onFinish:()=>{u.value=!1,e.value=x.requiresConfirmation}})},B=()=>axios.get("/user/two-factor-qr-code").then(t=>{v.value=t.data.svg}),E=()=>axios.get("/user/two-factor-secret-key").then(t=>{h.value=t.data.secretKey}),V=()=>axios.get("/user/two-factor-recovery-codes").then(t=>{f.value=t.data}),$=()=>{n.post("/user/confirmed-two-factor-authentication",{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,v.value=null,h.value=null}})},L=()=>{axios.post("/user/two-factor-recovery-codes").then(()=>V())},P=()=>{d.value=!0,A.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>{d.value=!1,e.value=!1}})};return(t,b)=>(o(),g(U,null,{title:s(()=>[l(a(t.__("Two Factor Authentication")),1)]),description:s(()=>[l(a(t.__("Add additional security to your account using two factor authentication.")),1)]),content:s(()=>[y(p)&&!e.value?(o(),r("h3",Z,a(t.__("You have enabled two factor authentication.")),1)):y(p)&&e.value?(o(),r("h3",ee,a(t.__("Finish enabling two factor authentication.")),1)):(o(),r("h3",te,a(t.__("You have not enabled two factor authentication.")),1)),c("div",oe,[c("p",null,a(t.__("When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.")),1)]),y(p)?(o(),r("div",ae,[v.value?(o(),r("div",se,[c("div",re,[e.value?(o(),r("p",ne,a(t.__("To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code.")),1)):(o(),r("p",le,a(t.__("Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key.")),1))]),c("div",{class:"mt-4 dark:bg-white dark:p-4 dark:rounded",innerHTML:v.value},null,8,ie),h.value?(o(),r("div",ce,[c("p",ue,[l(a(t.__("Setup Key"))+": ",1),c("span",{innerHTML:h.value},null,8,de)])])):m("",!0),e.value?(o(),r("div",me,[i(j,{id:"code",modelValue:y(n).code,"onUpdate:modelValue":b[0]||(b[0]=T=>y(n).code=T),inputmode:"numeric",label:t.__("Code"),error:y(n).errors.code,autocomplete:"one-time-code",autofocus:"",class:"block mt-1 w-1/2",type:"text",name:"code",onKeyup:R($,["enter"])},null,8,["modelValue","label","error","onKeyup"])])):m("",!0)])):m("",!0),f.value.length>0&&!e.value?(o(),r("div",fe,[c("div",pe,[c("p",_e,a(t.__("Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.")),1)]),c("div",he,[(o(!0),r(Y,null,D(f.value,T=>(o(),r("div",{key:T},a(T),1))),128))])])):m("",!0)])):m("",!0),c("div",ye,[y(p)?(o(),r("div",ge,[i(w,{onConfirmed:$},{default:s(()=>[e.value?(o(),g(K,{key:0,type:"button",class:C(["mr-3",{"opacity-25":u.value}]),disabled:u.value},{default:s(()=>[l(a(t.__("Confirm")),1)]),_:1},8,["class","disabled"])):m("",!0)]),_:1}),i(w,{onConfirmed:L},{default:s(()=>[f.value.length>0&&!e.value?(o(),g(S,{key:0,class:"mr-3"},{default:s(()=>[l(a(t.__("Regenerate Recovery Codes")),1)]),_:1})):m("",!0)]),_:1}),i(w,{onConfirmed:V},{default:s(()=>[f.value.length===0&&!e.value?(o(),g(S,{key:0,class:"mr-3"},{default:s(()=>[l(a(t.__("Show Recovery Codes")),1)]),_:1})):m("",!0)]),_:1}),i(w,{onConfirmed:P},{default:s(()=>[e.value?(o(),g(S,{key:0,class:C({"opacity-25":d.value}),disabled:d.value},{default:s(()=>[l(a(t.__("Cancel")),1)]),_:1},8,["class","disabled"])):m("",!0)]),_:1}),i(w,{onConfirmed:P},{default:s(()=>[e.value?m("",!0):(o(),g(W,{key:0,class:C({"opacity-25":d.value}),disabled:d.value},{default:s(()=>[l(a(t.__("Disable")),1)]),_:1},8,["class","disabled"]))]),_:1})])):(o(),r("div",ve,[i(w,{onConfirmed:F},{default:s(()=>[i(K,{type:"button",class:C({"opacity-25":u.value}),disabled:u.value},{default:s(()=>[l(a(t.__("Enable")),1)]),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Pe as default};
