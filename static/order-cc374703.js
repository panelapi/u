import{s as r,S as t}from"./index-5072b23b.js";function u(){return r({url:t+"/api/v1/user/order/fetch",method:"get"})}function a(){return r({url:t+"/api/v1/user/order/getPaymentMethod",method:"get"})}function d(e){return r({url:t+`/api/v1/user/order/cancel?trade_no=${e}`,method:"post"})}function c(e,o){return r({url:t+`/api/v1/user/order/checkout?trade_no=${e}&method=${o}`,method:"post"})}function s(e){return r({url:t+`/api/v1/user/order/check?trade_no=${e}`,method:"get"})}export{u as a,a as b,c,d,s as g};
