"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[2729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Getting started",p={unversionedId:"app-payments/development-guide/getting-started",id:"app-payments/development-guide/getting-started",title:"Getting started",description:"You will be starting off in the Sandbox. Its purpose is to give developers a shielded environment for testing and integration purposes. Sandboxes are isolated from your production organization and give you the possibility to explore the API Platform.",source:"@site/docs/app-payments/development-guide/getting-started.md",sourceDirName:"app-payments/development-guide",slug:"/app-payments/development-guide/getting-started",permalink:"/MobilePay-Payments-API/docs/app-payments/development-guide/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Development Guide",permalink:"/MobilePay-Payments-API/docs/app-payments/development-guide/"},next:{title:"Testing",permalink:"/MobilePay-Payments-API/docs/app-payments/development-guide/test"}},s={},l=[{value:"Step 1 - Register",id:"step-1---register",level:2},{value:"Step 2 - API documentation",id:"step-2---api-documentation",level:2},{value:"Step 3 - Authentication",id:"step-3---authentication",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"You will be starting off in the Sandbox. Its purpose is to give developers a shielded environment for testing and integration purposes. Sandboxes are isolated from your production organization and give you the possibility to explore the API Platform."),(0,o.kt)("h2",{id:"step-1---register"},"Step 1 - Register"),(0,o.kt)("p",null,"All merchants should order the product needed on the MobilePay portal ",(0,o.kt)("a",{parentName:"p",href:"https://admin.mobilepay.dk/"},"here"),". If you are a Third Party integrator and don't have an agreement with MobilePay you can sign up ",(0,o.kt)("a",{parentName:"p",href:"https://www.mobilepaygroup.com/partner/signup"},"here"),". When the sign up has been approved by our business representatives we will contact your technical contact in order to start the integration process."),(0,o.kt)("h2",{id:"step-2---api-documentation"},"Step 2 - API documentation"),(0,o.kt)("p",null,"Find the API documentation for App Payments and Webhooks in the API references below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/app-payments"},"App Payments")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/wehooks"},"Webhooks"))),(0,o.kt)("h2",{id:"step-3---authentication"},"Step 3 - Authentication"),(0,o.kt)("p",null,"In order to do authentication you must use either an API key generated by the merchant on the MobilePay Portal, or by using the OAuth flow which is preferred if you are an integrator doing the integration on behalf of merchants."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API keys: This is a simple solution aimed at merchants integrating on their own behalf. They are used to get unlimited access to resources in your merchant account. These are retrieved through the MobilePay Portal. If you choose this option you simply need to retrieve the API key from the MobilePay portal to get started."),(0,o.kt)("li",{parentName:"ul"},"OAuth: This is aimed at larger merchants or integrators integrating on behalf of one or more merchants. It is used to get authenticated and scoped access to any MobilePay merchant account. Use them when your application will access resources on behalf of multiple MobilePay merchant accounts, i.e. you are an integrator. If you choose this option please contact ",(0,o.kt)("a",{parentName:"li",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk")," to get started.")),(0,o.kt)("p",null,"During the technical onboarding pelase inform us which authentication method you wish to use."))}c.isMDXComponent=!0}}]);