import{u as R,B as f,A as M,c as v,r as T,E as q,o as w,a as z,g as e,w as t,b as _,I as A,G as N,i as d,e as S,a2 as U,l as V,C as E,J as F,a3 as G,a4 as I,S as j,a5 as J,T as $,a6 as H}from"./vendor-bc3e0ca2.js";import{u as K,L as O,A as P}from"./index-5072b23b.js";import{u as Q,a as W}from"./auth-ff21b30d.js";const X={class:"auth-container"},Y={class:"btns"},Z={class:"bottom"},ee=_("div",{id:"recaptcha",style:{height:"80px"}},null,-1),le={__name:"Login",setup(ae){const m=K(),b=R(),c=f(!1),s=f(!1),o=M({email:"",password:"",captchaData:""}),k={email:[{required:!0,message:"请输入邮箱",trigger:"change"},{type:"email",message:"邮箱格式错误",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"},{min:8,message:"密码至少为8个字符",trigger:"change"}]},y=v(()=>m.globalConfig.is_recaptcha===1),C=v(()=>m.globalConfig.recaptcha_site_key);function x(){s.value=!0,H(()=>{W(["https://www.google.com/recaptcha/api.js?onload=onloadCallback3&render=explicit"],"google-recaptcha3"),window.onloadCallback3=()=>{console.log(888,this);const l=window.grecaptcha.render("recaptcha",{sitekey:C.value,callback:()=>{s.value=!1,o.captchaData=window.grecaptcha.getResponse(l),window.grecaptcha.reset(l),g(null,!0)}})}})}async function g(l,a){const{email:i,password:n,captchaData:u}=U(o);if(y.value&&!a){x();return}c.value=!0;try{const{data:p}=await Q({email:i,password:n,captchaData:u});V.set(P,p.auth_data),E.success("登录成功"),b.push("/profile")}catch{}c.value=!1}return(l,a)=>{const i=F,n=G,u=I,p=j,h=T("router-link"),L=J,B=$,D=q("wave");return w(),z("div",X,[e(L,{class:"auth-form",model:o,rules:k,hideRequiredMark:"",colon:!1,layout:"vertical",onFinish:g},{default:t(()=>[e(n,{class:"control-item",label:"邮箱",name:"email"},{default:t(()=>[e(i,{value:o.email,"onUpdate:value":a[0]||(a[0]=r=>o.email=r),class:"control-input",size:"large",placeholder:"请输入邮箱",allowClear:""},null,8,["value"])]),_:1}),e(n,{class:"control-item",label:"密码",name:"password"},{default:t(()=>[e(u,{value:o.password,"onUpdate:value":a[1]||(a[1]=r=>o.password=r),class:"control-input",size:"large",maxlength:64,placeholder:"请输入密码",allowClear:!1},null,8,["value"])]),_:1}),_("div",Y,[A((w(),N(p,{type:"primary",class:"btn",loading:c.value,shape:"round",htmlType:"submit"},{default:t(()=>[d("登录")]),_:1},8,["loading"])),[[D]])]),_("div",Z,[e(h,{class:"link",to:"/register"},{default:t(()=>[d("注册")]),_:1}),e(h,{class:"link",to:"/reset-password"},{default:t(()=>[d("忘记密码？")]),_:1})]),e(S(O),{class:"logo"})]),_:1},8,["model"]),e(B,{open:s.value,centered:"",footer:null,onCancel:a[2]||(a[2]=r=>s.value=!1)},{default:t(()=>[ee]),_:1},8,["open"])])}}};export{le as default};