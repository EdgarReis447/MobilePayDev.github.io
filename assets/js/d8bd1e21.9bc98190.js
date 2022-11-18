"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[129],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,c=f["".concat(s,".").concat(m)]||f[m]||d[m]||o;return t?r.createElement(c,i(i({ref:n},u),{},{components:t})):r.createElement(c,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},24046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:3},i="Refund Payments",p={unversionedId:"app-payments/payments-refunds/refund-payments",id:"app-payments/payments-refunds/refund-payments",title:"Refund Payments",description:"Refunds API lets developers refund payments. Refunds use your available MobilePay balance. If your available balance doesn't cover the amount of the refund, it will fail. You can only refund payments with the state captured and within 90 days of the original payment date.",source:"@site/docs/app-payments/payments-refunds/refund-payments.md",sourceDirName:"app-payments/payments-refunds",slug:"/app-payments/payments-refunds/refund-payments",permalink:"/docs/app-payments/payments-refunds/refund-payments",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Create And Manage Payments",permalink:"/docs/app-payments/payments-refunds/create-payments"},next:{title:"Error Codes",permalink:"/docs/app-payments/payments-refunds/error-codes"}},s={},l=[{value:"Refund payment",id:"refund-payment",level:2},{value:"Retrieve refund information",id:"retrieve-refund-information",level:2}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"refund-payments"},"Refund Payments"),(0,a.kt)("p",null,"Refunds API lets developers refund payments. Refunds use your available MobilePay balance. If your available balance doesn't cover the amount of the refund, it will fail. You can only refund payments with the state ",(0,a.kt)("inlineCode",{parentName:"p"},"captured")," and within 90 days of the original payment date."),(0,a.kt)("p",null,"Common refund scenarios include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Refund all or a portion of payment."),(0,a.kt)("li",{parentName:"ul"},"Multiple partial refunds of payment.")),(0,a.kt)("h2",{id:"refund-payment"},"Refund payment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Refund payment"',title:'"Refund','payment"':!0},'curl https://api.mobilepay.dk/v1/refunds \\\n  -X POST \\\n  -H \'Authorization: Bearer {API_KEY}\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "idempotencyKey": "{UUID}",\n    "paymentId": "{PAYMENT_ID}",\n    "amount": 500,\n    "reference": "{YOUR_UNIQUE_KEY}",\n    "description": "Lorem ipsum"\n  }\'\n')),(0,a.kt)("p",null,"When MobilePay receives the request, it begins the refund process. The response and its status code will indicate if a refund was successful. The following is an example response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "refundId": "7576910d-9789-4fef-a72e-877d89afec94",\n  "paymentId": "186d2b31-ff25-4414-9fd1-bfe9807fa8b7",\n  "amount": 500,\n  "description": "Lorem ipsum",\n  "reference": "order-212-32",\n  "createdOn": "2021-07-19T12:42:38Z",\n  "remainingAmount": 750\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"remainingAmount")," will be included in successful refund response once, for reasons when you might need to do multiple refunds."),(0,a.kt)("h2",{id:"retrieve-refund-information"},"Retrieve refund information"),(0,a.kt)("p",null,"After you refund a payment there might be a need to get refund information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Retrieve refund"',title:'"Retrieve','refund"':!0},"curl https://api.mobilepay.dk/v1/refunds/{refundid} \\\n  -X GET \\\n  -H 'Authorization: Bearer {API_KEY}' \\\n  -H 'Content-Type: application/json'\n")),(0,a.kt)("p",null,"Or to see all refunds."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="List refunds"',title:'"List','refunds"':!0},"curl https://api.mobilepay.dk/v1/refunds \\\n  -X GET \\\n  -H 'Authorization: Bearer {API_KEY}' \\\n  -H 'Content-Type: application/json'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "pageSize": 48649663,\n  "nextPageNumber": 31,\n  "refunds": [\n    {\n      "refundId": "7576910d-9789-4fef-a72e-877d89afec94",\n      "paymentId": "186d2b31-ff25-4414-9fd1-bfe9807fa8b7",\n      "amount": 500,\n      "description": "Lorem ipsum",\n      "reference": "order-212-32",\n      "createdOn": "2021-07-19T12:42:38+00:00"\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);