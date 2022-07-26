"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[1540],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,y=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98365:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],p={sidebar_position:2},s="Create And Manage Payments",l={unversionedId:"payments-refunds/create-payments",id:"payments-refunds/create-payments",title:"Create And Manage Payments",description:"Payments API lets developers create and manage payments. It is important to remember, that payment cannot be completed without user interaction, meaning that the user has to swipe and approve payments inside MobilePay app.",source:"@site/docs/payments-refunds/create-payments.md",sourceDirName:"payments-refunds",slug:"/payments-refunds/create-payments",permalink:"/MobilePay-Payments-API/docs/payments-refunds/create-payments",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/MobilePay-Payments-API/docs/payments-refunds/overview"},next:{title:"Refund Payments",permalink:"/MobilePay-Payments-API/docs/payments-refunds/refund-payments"}},m={},c=[{value:"Create payment",id:"create-payment",level:2},{value:"Get single payment details",id:"get-single-payment-details",level:2},{value:"Get all payments",id:"get-all-payments",level:2},{value:"Capture payment",id:"capture-payment",level:2},{value:"Cancel payment",id:"cancel-payment",level:2},{value:"Cancel payment by idempotency key",id:"cancel-payment-by-idempotency-key",level:2}],d={toc:c};function u(e){var t=e.components,p=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-and-manage-payments"},"Create And Manage Payments"),(0,r.kt)("p",null,"Payments API lets developers create and manage payments. It is important to remember, that payment cannot be completed without user interaction, meaning that the user has to ",(0,r.kt)("strong",{parentName:"p"},"swipe and approve payments")," inside MobilePay app."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User confirmation",src:n(53684).Z,width:"960",height:"551"})),(0,r.kt)("h2",{id:"create-payment"},"Create payment"),(0,r.kt)("p",null,"The first step in your journey of collecting payments would be to initiate a new payment. You can do that using the following request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Create payment"',title:'"Create','payment"':!0},'curl https://api.mobilepay.dk/v1/payments \\\n  -X POST \\\n  -H \'x-ibm-client-id: {CLIENT_ID}\' \\\n  -H \'Authorization: Bearer {API_KEY}\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "amount": 1250,\n    "idempotencyKey": "{UUID}",\n    "paymentPointId": "{PAYMENT_POINT_ID}",\n    "redirectUri": "{URI_TO_YOUR_APP}"\n    "reference": "{YOUR_UNIQUE_KEY}",\n    "description": "Details on the product/service that the customer is buying"\n  }\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "paymentId": "186d2b31-ff25-4414-9fd1-bfe9807fa8b7",\n  "mobilePayAppRedirectUri": "mobilepay://merchant_payments?payment_id=186d2b31-ff25-4414-9fd1-bfe9807fa8b7"\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"mobilePayAppRedirectUri")," should be used to redirect user to the MobilePay app."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," to inform your customers to a greater extent. Description will be shown on the payment confirmation screen in MobilePay so the customer has more information about the product. The description will also be shown when the MobilePay user opens their payment receipt in the activity list."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We suggest setting unique order or transaction id from your own system in the ",(0,r.kt)("inlineCode",{parentName:"p"},"reference")," field. The ",(0,r.kt)("inlineCode",{parentName:"p"},"reference")," field will be contained throughout the backend flow of the payment. Also in settlement reports in the MobilePay portal or from our Transaction Reporting API. End-users/customers will see the ",(0,r.kt)("inlineCode",{parentName:"p"},"reference")," field value in the receipt of the payment, found in the MobilePay app's activity tab."))),(0,r.kt)("h2",{id:"get-single-payment-details"},"Get single payment details"),(0,r.kt)("p",null,"Whenever there is a need you can retrieve details of a single payment and e.g. check the current state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Retrieve payment"',title:'"Retrieve','payment"':!0},"curl https://api.mobilepay.dk/v1/payments/{PAYMENT_ID} \\\n  -X GET \\\n  -H 'x-ibm-client-id: {CLIENT_ID}' \\\n  -H 'Authorization: Bearer {API_KEY}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "paymentId": "186d2b31-ff25-4414-9fd1-bfe9807fa8b7",\n  "amount": 1250,\n  "description": "Lorem ipsum",\n  "paymentPointId": "7347ba06-95c5-4181-82e5-7c7a23609a0e",\n  "reference": "DFX101103518",\n  "redirectUri": "https://yourredirecturi",\n  "state": "initiated",\n  "initiatedOn": "2021-08-20T05:18:07Z",\n  "lastUpdatedOn": "2021-08-21T08:45:32Z",\n  "merchantId": "655ad36f-70b0-4add-a123-b943daca50e8",\n  "isoCurrencyCode": "DKK",\n  "paymentPointName": "Nullam tincidunt"\n}\n')),(0,r.kt)("p",null,"Property ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," can have these values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"initiated")," - initial state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reserved")," - MobilePay user approved payment, ready to be captured."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"captured")," - final state, funds will be transferred during next settlement."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cancelledByMerchant")," - payment was cancelled by you."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cancelledBySystem")," - no user interactions with payment were made in 5-10 minutes after creation, so our automated job cancelled it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cancelledByUser")," - user cancelled payment inside MobilePay app.")),(0,r.kt)("h2",{id:"get-all-payments"},"Get all payments"),(0,r.kt)("p",null,"There's also a possibility to list all your payments in pages. Multiple searching criteria can be used as query parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="List payments"',title:'"List','payments"':!0},"curl https://api.mobilepay.dk/v1/payments \\\n  -X GET \\\n  -H 'x-ibm-client-id: {CLIENT_ID}' \\\n  -H 'Authorization: Bearer {API_KEY}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "pageSize": 1,\n  "nextPageNumber": 2,\n  "payments": [\n    {\n      "paymentId": "186d2b31-ff25-4414-9fd1-bfe9807fa8b7",\n      "amount": 1250,\n      "description": "Lorem ipsum",\n      "paymentPointId": "7347ba06-95c5-4181-82e5-7c7a23609a0e",\n      "reference": "DFX101103518",\n      "redirectUri": "https://yourredirecturi",\n      "state": "initiated",\n      "initiatedOn": "2021-08-20T05:18:07Z",\n      "lastUpdatedOn": "2021-08-21T08:45:32Z",\n      "merchantId": "655ad36f-70b0-4add-a123-b943daca50e8",\n      "isoCurrencyCode": "DKK",\n      "paymentPointName": "Nullam tincidunt"\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"capture-payment"},"Capture payment"),(0,r.kt)("p",null,"After you receive a notification that payment was reserved or you retrieve payment and it has a state ",(0,r.kt)("inlineCode",{parentName:"p"},"reserved"),", you must capture payment in order to end the flow and receive the money with a nightly transfer."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Partial capture availability is limited. Let us know your use case during onboarding, and we will let you know if it's available."),(0,r.kt)("li",{parentName:"ul"},"Reservations are canceled after 7 days.")))),(0,r.kt)("p",null,"At this point you have 2 options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can capture the whole reserved amount."),(0,r.kt)("li",{parentName:"ul"},"You can do a partial capture and only capture the amount you need. Remaining amount will be returned to the user.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Capture payment"',title:'"Capture','payment"':!0},"curl https://api.mobilepay.dk/v1/payments/{PAYMENT_ID}/capture \\\n  -X POST \\\n  -H 'x-ibm-client-id: {CLIENT_ID}' \\\n  -H 'Authorization: Bearer {API_KEY}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"amount\": 1250\n  }'\n")),(0,r.kt)("h2",{id:"cancel-payment"},"Cancel payment"),(0,r.kt)("p",null,"If you changed your mind and want to cancel payment , you can do that using the following request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Cancel payment"',title:'"Cancel','payment"':!0},"curl https://api.mobilepay.dk/v1/payments/{PAYMENT_ID}/cancel \\\n  -X POST \\\n  -H 'x-ibm-client-id: {CLIENT_ID}' \\\n  -H 'Authorization: Bearer {API_KEY}' \\\n")),(0,r.kt)("p",null,"Keep in mind, that payment can be cancelled in all states except ",(0,r.kt)("inlineCode",{parentName:"p"},"captured"),". If you've already captured payment, refunding is your only option.\nIf you cancel a reserved payment, reserved amount will be returned to the user."),(0,r.kt)("h2",{id:"cancel-payment-by-idempotency-key"},"Cancel payment by idempotency key"),(0,r.kt)("p",null,"You can also cancel a payment by sending us the same idempotency key that you've used in the create payment request.\nUse this endpoint when the outcome of the payment creation request is unknown (e.g. network/server error occurred and you didn't get a response). It allows cancelling only those payments that are in ",(0,r.kt)("inlineCode",{parentName:"p"},"initiated")," state. For all other scenarios, please use the ",(0,r.kt)("a",{parentName:"p",href:"#cancel-payment"},"endpoint above"),".\nAfter successful cancellation, you can create a new payment again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Capture payment"',title:'"Capture','payment"':!0},"curl https://api.mobilepay.dk/v1/payments/cancel \\\n  -X POST \\\n  -H 'x-ibm-client-id: {CLIENT_ID}' \\\n  -H 'Authorization: Bearer {API_KEY}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"idempotencyKey\": {UUID}\n  }'\n")))}u.isMDXComponent=!0},53684:function(e,t,n){t.Z=n.p+"assets/images/create-payment-app-dfe1507f073ed1813deb669f06f0912c.gif"}}]);