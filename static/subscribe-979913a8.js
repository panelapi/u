import{a0 as A,X as C,a1 as H,A as z,c as l,l as U,s as W}from"./vendor-bc3e0ca2.js";import{i as q,C as R,b as B,w as G,a as J,c as L}from"./index-2cfd342e.js";import{A as X}from"./index-5072b23b.js";var I={exports:{}};(function(O,d){(function(w,o){O.exports=o()})(A,function(){var w,o,p=1e3,v=6e4,M=36e5,S=864e5,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,D=31536e6,m=2628e6,E=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:D,months:m,days:S,hours:M,minutes:v,seconds:p,milliseconds:1,weeks:6048e5},x=function(n){return n instanceof Y},g=function(n,s,t){return new Y(n,t,s.$l)},b=function(n){return o.p(n)+"s"},u=function(n){return n<0},c=function(n){return u(n)?Math.ceil(n):Math.floor(n)},k=function(n){return Math.abs(n)},$=function(n,s){return n?u(n)?{negative:!0,format:""+k(n)+s}:{negative:!1,format:""+n+s}:{negative:!1,format:""}},Y=function(){function n(t,e,r){var i=this;if(this.$d={},this.$l=r,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),e)return g(t*y[b(e)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function(f){i.$d[b(f)]=t[f]}),this.calMilliseconds(),this;if(typeof t=="string"){var a=t.match(E);if(a){var h=a.slice(2).map(function(f){return f!=null?Number(f):0});return this.$d.years=h[0],this.$d.months=h[1],this.$d.weeks=h[2],this.$d.days=h[3],this.$d.hours=h[4],this.$d.minutes=h[5],this.$d.seconds=h[6],this.calMilliseconds(),this}}return this}var s=n.prototype;return s.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(e,r){return e+(t.$d[r]||0)*y[r]},0)},s.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=c(t/D),t%=D,this.$d.months=c(t/m),t%=m,this.$d.days=c(t/S),t%=S,this.$d.hours=c(t/M),t%=M,this.$d.minutes=c(t/v),t%=v,this.$d.seconds=c(t/p),t%=p,this.$d.milliseconds=t},s.toISOString=function(){var t=$(this.$d.years,"Y"),e=$(this.$d.months,"M"),r=+this.$d.days||0;this.$d.weeks&&(r+=7*this.$d.weeks);var i=$(r,"D"),a=$(this.$d.hours,"H"),h=$(this.$d.minutes,"M"),f=this.$d.seconds||0;this.$d.milliseconds&&(f+=this.$d.milliseconds/1e3,f=Math.round(1e3*f)/1e3);var N=$(f,"S"),T=t.negative||e.negative||i.negative||a.negative||h.negative||N.negative,_=a.format||h.format||N.format?"T":"",P=(T?"-":"")+"P"+t.format+e.format+i.format+_+a.format+h.format+N.format;return P==="P"||P==="-P"?"P0D":P},s.toJSON=function(){return this.toISOString()},s.format=function(t){var e=t||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:o.s(this.$d.years,2,"0"),YYYY:o.s(this.$d.years,4,"0"),M:this.$d.months,MM:o.s(this.$d.months,2,"0"),D:this.$d.days,DD:o.s(this.$d.days,2,"0"),H:this.$d.hours,HH:o.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:o.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:o.s(this.$d.seconds,2,"0"),SSS:o.s(this.$d.milliseconds,3,"0")};return e.replace(j,function(i,a){return a||String(r[i])})},s.as=function(t){return this.$ms/y[b(t)]},s.get=function(t){var e=this.$ms,r=b(t);return r==="milliseconds"?e%=1e3:e=r==="weeks"?c(e/y[r]):this.$d[r],e||0},s.add=function(t,e,r){var i;return i=e?t*y[b(e)]:x(t)?t.$ms:g(t,this).$ms,g(this.$ms+i*(r?-1:1),this)},s.subtract=function(t,e){return this.add(t,e,!0)},s.locale=function(t){var e=this.clone();return e.$l=t,e},s.clone=function(){return g(this.$ms,this)},s.humanize=function(t){return w().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},s.valueOf=function(){return this.asMilliseconds()},s.milliseconds=function(){return this.get("milliseconds")},s.asMilliseconds=function(){return this.as("milliseconds")},s.seconds=function(){return this.get("seconds")},s.asSeconds=function(){return this.as("seconds")},s.minutes=function(){return this.get("minutes")},s.asMinutes=function(){return this.as("minutes")},s.hours=function(){return this.get("hours")},s.asHours=function(){return this.as("hours")},s.days=function(){return this.get("days")},s.asDays=function(){return this.as("days")},s.weeks=function(){return this.get("weeks")},s.asWeeks=function(){return this.as("weeks")},s.months=function(){return this.get("months")},s.asMonths=function(){return this.as("months")},s.years=function(){return this.get("years")},s.asYears=function(){return this.as("years")},n}(),F=function(n,s,t){return n.add(s.years()*t,"y").add(s.months()*t,"M").add(s.days()*t,"d").add(s.hours()*t,"h").add(s.minutes()*t,"m").add(s.seconds()*t,"s").add(s.milliseconds()*t,"ms")};return function(n,s,t){w=t,o=t().$utils(),t.duration=function(i,a){var h=t.locale();return g(i,{$l:h},a)},t.isDuration=x;var e=s.prototype.add,r=s.prototype.subtract;s.prototype.add=function(i,a){return x(i)?F(this,i,1):e.bind(this)(i,a)},s.prototype.subtract=function(i,a){return x(i)?F(this,i,-1):r.bind(this)(i,a)}}})})(I);var Z=I.exports;const K=C(Z);H.extend(K);function st(O=0){const d=z({loaded:!1,d:0,u:0}),w=l(()=>d.plan_id),o=l(()=>d.expired_at),p=l(()=>d.d+d.u),v=l(()=>d.transfer_enable??0),M=l(()=>Math.max(v.value-p.value,0)),S=l(()=>parseFloat((p.value/v.value*100).toFixed(2))),j=l(()=>{var u;return Number((u=d.plan)==null?void 0:u.renew)===1}),D=l(()=>q(U.get(X))),m=l(()=>(console.log("expiredDate",o.value),o.value!==null?H.unix(o.value).diff(H(),"second"):null)),E=l(()=>(console.log("expiredResidue",m.value),m.value!==null?parseFloat((m.value/3600/24).toFixed(2)):null)),y=l(()=>{const u=m.value;if(u===null)return"";if(u<60)return u+" 秒";const c=H.duration(u,"seconds"),k=c.years(),$=c.months(),Y=c.days(),F=c.hours(),n=c.minutes();return[k>0?k+" 年":"",$>0?$+" 月":"",Y>0?Y+" 天":"",F>0?F+" 小时":"",n>0?n+" 分钟":""].filter(s=>s.length>0).join(" ")}),x=l(()=>d.loaded?d.plan===null?R.UNBUY:d.expired_at===null?R.ONE_TIME:R.PERIOD:null),g=l(()=>{const u=B(M.value,{unitSeparator:"-"}).split("-");return{num:u[0],unit:u[1]}});W(()=>{D.value||b()});async function b(){const u=await G(J,{refresh:Number(O)});L(d,u.data),d.loaded=!0}return{subscribe:d,comboType:x,planId:w,expiredDate:o,expiredDays:E,usedFlow:p,allFlow:v,leftFlow:M,leftFlowObj:g,percent:S,renewable:j,expiredResidue:m,expiredResidueDuration:y}}export{st as u};