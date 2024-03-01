import{u as te,f as le,B as u,A as oe,c,s as se,l as b,a1 as L,r as re,E as ne,o as n,a as M,g as s,w as o,a7 as ie,G as m,F as ue,h as ce,i as g,t as $,H as R,I as N,b as I,e as de,a2 as S,C as O,a8 as pe,a9 as me,J as ve,a3 as _e,S as ge,a5 as fe,T as we,U as he,W as be,a6 as ye}from"./vendor-bc3e0ca2.js";import{_ as Ce,u as ke,L as xe}from"./index-5072b23b.js";import{s as Re,b as Se,a as Ie}from"./auth-ff21b30d.js";const qe=f=>(he("data-v-2f6766b0"),f=f(),be(),f),Ee={class:"auth-container register"},Ue={class:"btns"},ze={class:"bottom"},Ae=qe(()=>I("div",{id:"recaptcha",style:{height:"80px"}},null,-1)),y="RegTime",De={__name:"Register",setup(f){const v=ke(),G=te(),q=le(),E=u(null),C=u(!1),k=u(!1),w=u(!1),h=u(""),d=u(0);u([]);const t=oe({email:"",emailAddon:"",password:"",password2:"",emailCode:"",inviteCode:"",captchaData:""}),H=(a,e,p)=>e===""?Promise.reject("请输入确认密码"):e!==t.password?Promise.reject("两次输入的密码不一致"):Promise.resolve(),J=(a,e,p)=>e===""?Promise.reject("请输入邮箱"):t.email.includes("@")?Promise.reject("邮箱格式错误"):Promise.resolve(),W=c(()=>Y()),_=c(()=>Z()),U=c(()=>v.globalConfig.is_email_verify===1),K=c(()=>v.globalConfig.is_invite_force===1),Q=c(()=>K||q.query.code),z=c(()=>v.globalConfig.is_recaptcha===1),X=c(()=>v.globalConfig.recaptcha_site_key);se(()=>{t.inviteCode=q.query.code??"";const a=b.get(y);if(a){const e=60-(L().valueOf()-a)/1e3;e>0?D(e):b.remove(y)}});function Y(){const a={email:[],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,message:"密码至少为8个字符",trigger:"blur"}],password2:[{required:!0,validator:H,trigger:"change"}],emailCode:[{required:!0,message:"请输入验证码",trigger:"blur"}]};return _.value.length>0?a.email.push({required:!0,validator:J,trigger:"blur"}):a.email.push({required:!0,type:"email",message:"邮箱格式错误",trigger:"blur"}),a}function Z(){const a=(v.globalConfig.email_whitelist_suffix||[]).map(e=>"@"+e);return a.length>0&&(t.emailAddon=a[0]),a}function A(){const{email:a,emailAddon:e}=S(t);return _.value.length>0?a+e:a}function D(a){d.value=a;const e=setInterval(()=>{d.value--,d.value<=0&&(clearInterval(e),b.remove(y))},1e3)}function T(){w.value=!0,ye(()=>{Ie(["https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"],"google-recaptcha"),window.onloadCallback=()=>{const a=window.grecaptcha.render("recaptcha",{sitekey:X.value,callback:()=>{w.value=!1,t.captchaData=window.grecaptcha.getResponse(a),window.grecaptcha.reset(a),h.value==="register"?j(!0):V(!0)}})}})}async function V(a){if(S(t),await E.value.validate(["email"]),z.value&&!a){h.value="sendEmail",T();return}k.value=!0;try{(await Re({email:A(),recaptcha_data:t.captchaData})).data===!0&&(O.success("验证码发送成功，如未收到请检查垃圾邮件"),b.set(y,L().valueOf()),D(60))}catch{}k.value=!1}async function j(a){const{password:e,password2:p,inviteCode:x,emailCode:r,email:i}=S(t);if(!e||!p||e!==p||U.value&&!r||!i)return console.log("验证未通过"),!1;if(z.value&&!a&&h.value!=="sendEmail"){h.value="register",T();return}C.value=!0;try{await Se({email:A(),password:e,invite_code:x,email_code:r,recaptcha_data:t.captchaData}),O.success("注册成功，请登录"),G.push("/login")}catch{}C.value=!1}return(a,e)=>{const p=pe,x=me,r=ve,i=_e,B=ge,F=re("router-link"),ee=fe,ae=we,P=ne("wave");return n(),M("div",Ee,[s(ee,{ref_key:"refForm",ref:E,class:"auth-form",model:t,rules:W.value,hideRequiredMark:"",colon:!1,layout:"vertical",onSubmit:e[7]||(e[7]=l=>j())},{default:o(()=>[s(i,{class:"control-item",label:"邮箱",name:"email"},{default:o(()=>[s(r,{value:t.email,"onUpdate:value":e[1]||(e[1]=l=>t.email=l),class:"control-input",size:"large",placeholder:"请输入邮箱","allow-clear":""},ie({_:2},[_.value.length>0?{name:"addonAfter",fn:o(()=>[_.value.length>0?(n(),m(x,{key:0,value:t.emailAddon,"onUpdate:value":e[0]||(e[0]=l=>t.emailAddon=l),style:{width:"150px"}},{default:o(()=>[(n(!0),M(ue,null,ce(_.value,l=>(n(),m(p,{key:l,value:l},{default:o(()=>[g($(l),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])):R("",!0)]),key:"0"}:void 0]),1032,["value"])]),_:1}),U.value?(n(),m(i,{key:0,class:"control-item",label:"验证码",name:"emailCode"},{default:o(()=>[s(r,{value:t.emailCode,"onUpdate:value":e[3]||(e[3]=l=>t.emailCode=l),class:"control-input",type:"text",size:"large",maxlength:32,placeholder:"请输入验证码","allow-clear":""},{suffix:o(()=>[N((n(),m(B,{type:"primary",loading:k.value,disabled:d.value>0,size:"small",shape:"round",class:"btn-vcode",onClick:e[2]||(e[2]=l=>V())},{default:o(()=>[g($(d.value>0?`${parseInt(d.value)}s`:"发送"),1)]),_:1},8,["loading","disabled"])),[[P]])]),_:1},8,["value"])]),_:1})):R("",!0),s(i,{class:"control-item",label:"密码",name:"password"},{default:o(()=>[s(r,{value:t.password,"onUpdate:value":e[4]||(e[4]=l=>t.password=l),class:"control-input",type:"password",size:"large",maxlength:64,placeholder:"请输入密码",autocomplete:"new-password","allow-clear":""},null,8,["value"])]),_:1}),s(i,{class:"control-item",label:"确认密码",name:"password2"},{default:o(()=>[s(r,{value:t.password2,"onUpdate:value":e[5]||(e[5]=l=>t.password2=l),class:"control-input",type:"password",size:"large",maxlength:64,placeholder:"请确认密码",autocomplete:"new-password","allow-clear":""},null,8,["value"])]),_:1}),Q.value?(n(),m(i,{key:1,class:"control-item",label:"邀请码",name:"inviteCode"},{default:o(()=>[s(r,{value:t.inviteCode,"onUpdate:value":e[6]||(e[6]=l=>t.inviteCode=l),class:"control-input",type:"text",size:"large",maxlength:64,placeholder:"请输入邀请码（没有请留空）","allow-clear":""},null,8,["value"])]),_:1})):R("",!0),I("div",Ue,[N((n(),m(B,{type:"primary",class:"btn",loading:C.value,size:"large",htmlType:"submit"},{default:o(()=>[g("注册")]),_:1},8,["loading"])),[[P]])]),I("div",ze,[s(F,{class:"link",to:"/login"},{default:o(()=>[g("登录")]),_:1}),s(F,{class:"link",to:"/reset-password"},{default:o(()=>[g("忘记密码？")]),_:1})]),s(de(xe),{class:"logo"})]),_:1},8,["model","rules"]),s(ae,{open:w.value,centered:"",footer:null,onCancel:e[8]||(e[8]=l=>w.value=!1)},{default:o(()=>[Ae]),_:1},8,["open"])])}}},Be=Ce(De,[["__scopeId","data-v-2f6766b0"]]);export{Be as default};