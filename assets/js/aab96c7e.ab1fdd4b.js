"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[9633],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,y=u["".concat(i,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(y,o(o({ref:t},s),{},{components:a})):n.createElement(y,o({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:4},o="Error Codes",p={unversionedId:"app-payments/payments-refunds/error-codes",id:"app-payments/payments-refunds/error-codes",title:"Error Codes",description:"If any client errors occur, our endpoints return an error object describing the issues encountered. Each error object has the same contract. Here's an example:",source:"@site/docs/app-payments/payments-refunds/error-codes.md",sourceDirName:"app-payments/payments-refunds",slug:"/app-payments/payments-refunds/error-codes",permalink:"/MobilePay-Payments-API/docs/app-payments/payments-refunds/error-codes",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Refund Payments",permalink:"/MobilePay-Payments-API/docs/app-payments/payments-refunds/refund-payments"},next:{title:"Webhooks",permalink:"/MobilePay-Payments-API/docs/app-payments/webhooks"}},i={},d=[{value:"Errors",id:"errors",level:2},{value:"HTTP 409 Conflict",id:"http-409-conflict",level:3},{value:"Payments API",id:"payments-api",level:4},{value:"Refunds API",id:"refunds-api",level:4},{value:"HTTP 400 Bad Request",id:"http-400-bad-request",level:3}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"error-codes"},"Error Codes"),(0,r.kt)("p",null,"If any client errors occur, our endpoints return an error object describing the issues encountered. Each error object has the same contract. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "code": "invalid_payment_state",\n  "correlationId": "8d4243bc-aa83-43c3-a55d-5da221facd9b",\n  "message": "Cannot cancel payment that is already captured.",\n  "origin": "MPY"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," are the properties you should be interested to. ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"origin")," properties should be provided for our support team in case you need their help with any issues. The values of those properties help to find solutions quicker."),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("h3",{id:"http-409-conflict"},"HTTP 409 Conflict"),(0,r.kt)("h4",{id:"payments-api"},"Payments API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"message"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"processing_error"),(0,r.kt)("td",{parentName:"tr",align:null},"We were not able to process your request. Please try again or contact our support.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount_too_large"),(0,r.kt)("td",{parentName:"tr",align:null},"Cannot capture a larger amount than is reserved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"partial_capture_disallowed"),(0,r.kt)("td",{parentName:"tr",align:null},"Partial capture is not allowed on this payment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment_not_found"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment does not exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invalid_payment_state"),(0,r.kt)("td",{parentName:"tr",align:null},"Cannot cancel payment that is already captured.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invalid_payment_state"),(0,r.kt)("td",{parentName:"tr",align:null},"Only initiated payments can be cancelled by idempotency key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invalid_payment_state"),(0,r.kt)("td",{parentName:"tr",align:null},"Only reserved payments can be captured.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invalid_payment_state"),(0,r.kt)("td",{parentName:"tr",align:null},"Capture attempted and failed. Please try capturing again.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invalid_payment_point"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment point is not active.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment_point_not_found"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment point does not exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idempotency_key_reused"),(0,r.kt)("td",{parentName:"tr",align:null},"Different request parameters already used for the same idempotencyKey - {",(0,r.kt)("em",{parentName:"td"},"idempotencyKey"),"}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unauthorized_access"),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization error occurred.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment_captured_with_different_amount"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment has already been captured with different amount.")))),(0,r.kt)("h4",{id:"refunds-api"},"Refunds API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"message"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"processing_error"),(0,r.kt)("td",{parentName:"tr",align:null},"We were not able to process your request. Please change idempotency key and try again or contact our support.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount_too_large"),(0,r.kt)("td",{parentName:"tr",align:null},"Cannot refund more than the remaining amount of payment - {",(0,r.kt)("em",{parentName:"td"},"remaining payment amount"),"}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount_exceeds_available_funds"),(0,r.kt)("td",{parentName:"tr",align:null},"Refund amount exceeds available payment point funds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment_not_found"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment does not exist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invalid_payment_state"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment has not been captured yet and cannot be refunded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idempotency_key_reused"),(0,r.kt)("td",{parentName:"tr",align:null},"Different request parameters already used for the same idempotencyKey - {",(0,r.kt)("em",{parentName:"td"},"idempotencyKey"),"}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unauthorized_access"),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization error occurred.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"availability_duration_expired"),(0,r.kt)("td",{parentName:"tr",align:null},"It is no longer possible to refund this payment.")))),(0,r.kt)("h3",{id:"http-400-bad-request"},"HTTP 400 Bad Request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"message"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("em",{parentName:"td"},"Message indicating what is wrong with your request body."),"}")))))}m.isMDXComponent=!0}}]);