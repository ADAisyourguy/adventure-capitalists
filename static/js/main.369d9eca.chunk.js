(this["webpackJsonpadventure-capitalist"]=this["webpackJsonpadventure-capitalist"]||[]).push([[0],{15:function(e,a,t){e.exports=t(31)},20:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),c=t.n(i),s=(t(20),t(2)),o=(t(27),t(3));function u(e){var a=e.timeTaken,t=e.timeAlreadyRun,i=e.onComplete,c=void 0===i?function(){}:i,s=e.autoStart,u=e.uuid,m=Object(n.useState)(a-t),d=Object(o.a)(m,2),p=d[0],b=d[1],v=Object(n.useRef)();return Object(n.useEffect)((function(){if(b(a-t),s){var e=(new Date).getTime()+a-Number(t);return v.current=setInterval((function(){var a=(new Date).getTime();e>a?b(e-a):(clearInterval(v.current),c())}),10),function(){clearInterval(v.current)}}}),[u,s]),r.a.createElement("div",{className:"count-down-timer"},l(p))}var l=function(e){var a=Math.ceil(e/1e3),t=Math.floor(a/3600);a%=3600;var n=Math.floor(a/60),r=a%60;return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")+":"+String(r).padStart(2,"0")};t(28);function m(e){var a=e.timeTaken,t=e.timeAlreadyRun,i=e.uuid,c=e.autoStart,s=Object(n.useState)(0),u=Object(o.a)(s,2),l=u[0],m=u[1],d=Object(n.useRef)();return Object(n.useEffect)((function(){if(m(0),c){var e=(new Date).getTime()-t;return d.current=setInterval((function(){var t=100*((new Date).getTime()-e)/a;m("".concat(t,"%")),t>=100&&clearInterval(d.current)})),function(){clearInterval(d.current)}}}),[i,c]),r.a.createElement("div",{className:"progress-bar"},r.a.createElement("span",{style:{width:l}}))}var d=t(33),p=function(e){return{type:"SET_LAST_RUN",payload:{businessId:e}}};t(29);function b(e){var a=e.id,t=e.name,i=e.price,c=e.lastRun,l=e.timeTaken,b=e.hasManager,v=e.quantityPurchased,h=e.icon,f=e.profit,g=Object(n.useState)(Object(d.a)()),E=Object(o.a)(g,2),y=E[0],S=E[1],O=Object(n.useState)(b),N=Object(o.a)(O,2),j=N[0],k=N[1],_=Object(n.useState)(0),T=Object(o.a)(_,2),w=T[0],R=T[1],I=Object(s.b)(),A=Object(s.c)((function(e){return e.balance})),C=function(e){e.preventDefault(),j||(S(Object(d.a)()),k(!0),I(p(a)))},M=function(){A.amount>=i&&(I({type:"BUY_BUSINESS",payload:{businessId:a,qty:1}}),I({type:"DECREASSE_BALANCE",payload:{amount:i}}))};return Object(n.useEffect)((function(){b&&(S(Object(d.a)()),k(!0),I(p(a)))}),[b]),Object(n.useEffect)((function(){var e=(new Date).getTime();c&&e-c<l&&(R(e-c),k(!0))}),[]),r.a.createElement("div",{className:"business"},!!v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"business-icon",onClick:C},r.a.createElement("img",{src:"/adventure-capitalist/images/"+h,alt:"icon",width:"60"}),r.a.createElement("div",{className:"business-quantity"},v)),r.a.createElement("div",{className:"business-content"},r.a.createElement("div",{className:"business-progress",onClick:C},r.a.createElement(m,{timeTaken:l,timeAlreadyRun:w,uuid:y,autoStart:j}),r.a.createElement("span",{className:"business-profit"},"$",f.toLocaleString())),r.a.createElement("div",{className:"business-buy-and-timer"},r.a.createElement("div",{className:"business-buy"+(A.amount>=i?" active":""),onClick:M},r.a.createElement("span",null,"Buy"),r.a.createElement("span",null,"$",i.toLocaleString())),r.a.createElement("div",{className:"business-timer"},r.a.createElement(u,{timeTaken:l,timeAlreadyRun:w,autoStart:j,uuid:y,onComplete:function(){R(0),k(b),I({type:"INCREASE_BALANCE",payload:{amount:f}}),b&&(S(Object(d.a)()),I(p(a)))}}))))),!v&&r.a.createElement("div",{className:"business-unpurchased"+(A.amount>=i?" active":""),onClick:M,style:{backgroundImage:"url(".concat("/adventure-capitalist","/images/lock.png)")}},r.a.createElement("span",null,t),r.a.createElement("br",null),r.a.createElement("span",{className:"price"},"$",i.toLocaleString())))}t(30);function v(){var e=Object(s.c)((function(e){return e.managers})),a=Object(s.c)((function(e){return e.balance})),t=Object(n.useState)(!1),i=Object(o.a)(t,2),c=i[0],u=i[1],l=!!e.find((function(e){return e.price<=a.amount&&!e.hired})),m=Object(s.b)();return r.a.createElement("div",null,r.a.createElement("div",{className:"manager-btn"+(l?" active":""),onClick:function(){return u(!0)}},"Managers"),c&&r.a.createElement("div",{className:"managers-model"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-close",onClick:function(){return u(!1)}},r.a.createElement("img",{src:"/adventure-capitalist/images/close.png",width:"50",alt:"Close"})),r.a.createElement("h2",null,"Managers"),r.a.createElement("p",{className:"sub-title"},"Managers make life easier!",r.a.createElement("br",null),"Hire one to run your business for you."),r.a.createElement("div",{class:"manager-list"},e.filter((function(e){return!e.hired})).map((function(e){return r.a.createElement("div",{key:e.businessId,className:"manager"},r.a.createElement("div",{className:"manager-info"},r.a.createElement("div",{className:"manager-name"},e.name),r.a.createElement("div",{className:"manager-desc"},e.description),r.a.createElement("div",{className:"manager-price"},"$",e.price.toLocaleString())),r.a.createElement("button",{disabled:e.price>a.amount,onClick:function(){var t;(t=e).price<=a.amount&&m({type:"HIRE_MANAGER",payload:{manager:t}})}},"Hire"))}))))))}var h=function(){var e=Object(s.c)((function(e){return e.balance})),a=Object(s.c)((function(e){return e.businesses}));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"side-bar"},r.a.createElement("img",{src:"/adventure-capitalist/images/capitalist.png",width:"150",alt:"Capitalist"}),r.a.createElement(v,null)),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"balance"},r.a.createElement("span",null,"$",e.amount.toLocaleString())),r.a.createElement("div",{className:"businesses"},Object.values(a).map((function(e){return r.a.createElement(b,Object.assign({},e,{timeTaken:1e3*e.timeTaken,key:e.id}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=t(4),g=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(isNaN(e))return 0;for(var t=1;a-- >0;)t*=10;var n=.5*Number.EPSILON*e;return Math.round((e+n)*t)/t},E={amount:0},y=t(5),S=t(1),O={lemonade_stand:{id:"lemonade_stand",name:"Lemonade stand",price:1,timeTaken:1,quantityPurchased:1,hasManager:!1,profit:1,icon:"lemon.png"},newspaper_delivery:{id:"newspaper_delivery",name:"Newspaper Deliver",price:30,timeTaken:3,quantityPurchased:0,hasManager:!1,profit:25,icon:"newspaper.png"},car_wash:{id:"car_wash",name:"Car Wash",price:500,timeTaken:6,quantityPurchased:0,hasManager:!1,profit:300,icon:"car.png"},pizza_delivery:{id:"pizza_delivery",name:"Pizza Delivery",price:3e3,timeTaken:12,quantityPurchased:0,hasManager:!1,profit:2e3,icon:"pizza.png"},donut_shop:{id:"donut_shop",name:"Donut Shop",price:5e4,timeTaken:30,quantityPurchased:0,hasManager:!1,profit:2e4,icon:"donut.png"},shrimp_boat:{id:"shrimp_boat",name:"Shrimp Boat",price:8e5,timeTaken:90,quantityPurchased:0,hasManager:!1,profit:4e5,icon:"boat.png"},hockey_team:{id:"hockey_team",name:"Hockey Team",price:6e6,timeTaken:600,quantityPurchased:0,hasManager:!1,profit:4e6,icon:"hockey.png"},movie_studio:{id:"movie_studio",name:"Movie Studio",price:1e8,timeTaken:3600,quantityPurchased:0,hasManager:!1,profit:4e7,icon:"movie.png"},bank:{id:"bank",name:"Bank",price:5e9,timeTaken:36e3,quantityPurchased:0,hasManager:!1,profit:1e9,icon:"bank.png"},oil_company:{id:"oil_company",name:"Oil Company",price:153434564431,timeTaken:36e3,quantityPurchased:0,hasManager:!1,profit:51434564431,icon:"company.png"}},N=t(14),j=[{name:"Alex",businessId:"lemonade_stand",description:"Run Lemonade Stands",price:20,hired:!1},{name:"Catherine",businessId:"newspaper_delivery",description:"Run Newspaper Deliveries",price:60,hired:!1},{name:"Terry",businessId:"car_wash",description:"Run Car Washes",price:1500,hired:!1},{name:"Peter",businessId:"pizza_delivery",description:"Run Pizza Deliveries",price:6e3,hired:!1},{name:"Simon",businessId:"donut_shop",description:"Run Donut Shops",price:1e5,hired:!1},{name:"Trump",businessId:"shrimp_boat",description:"Run Shrimp Boats",price:1e6,hired:!1},{name:"Stefani",businessId:"hockey_team",description:"Run Hockey Teams",price:8e6,hired:!1},{name:"Louis",businessId:"movie_studio",description:"Run Movie Studios",price:2e8,hired:!1},{name:"Jessica",businessId:"bank",description:"Run Banks",price:8e9,hired:!1},{name:"Tony",businessId:"oil_company",description:"Run Oil Companies",price:353434564431,hired:!1}],k=Object(f.b)({balance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INCREASE_BALANCE":return{amount:g(e.amount+a.payload.amount)};case"DECREASSE_BALANCE":return{amount:g(e.amount-a.payload.amount)};default:return e}},businesses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"BUY_BUSINESS":var t=a.payload.businessId,n=e[t],r=a.payload.qty,i=g(1.1*n.price*r),c=g(n.profit+n.price*r*.3);return Object(S.a)(Object(S.a)({},e),{},Object(y.a)({},t,Object(S.a)(Object(S.a)({},n),{},{quantityPurchased:n.quantityPurchased+r,price:i,profit:c})));case"SET_LAST_RUN":var s=e[a.payload.businessId];return Object(S.a)(Object(S.a)({},e),{},Object(y.a)({},s.id,Object(S.a)(Object(S.a)({},s),{},{lastRun:(new Date).getTime()})));case"HIRE_MANAGER":var o=e[a.payload.manager.businessId];return Object(S.a)(Object(S.a)({},e),{},Object(y.a)({},o.id,Object(S.a)(Object(S.a)({},o),{},{hasManager:!0})));default:return e}},managers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"HIRE_MANAGER":var t=a.payload.manager;return t.hired=!0,[].concat(Object(N.a)(e),[t]);default:return e}}}),_=function(){try{var e=localStorage.getItem("AC_CloseTime");if(null===e)return;return Number(e)}catch(a){return void console.warn(a)}},T=Object(f.c)(k,function(){try{var e=localStorage.getItem("AC_State");if(null===e)return;return function(e){var a=0,t=(new Date).getTime(),n=_()||t;return Object.values(e.businesses).forEach((function(r){if(r.quantityPurchased&&r.hasManager&&r.lastRun){var i=Math.floor((t-r.lastRun)/1e3),c=Math.floor(i/r.timeTaken);a+=c*r.profit,r.lastRun+=c*r.timeTaken*1e3}r.quantityPurchased&&r.hasManager&&!r.lastRun&&(r.lastRun=t),r.quantityPurchased&&!r.hasManager&&r.lastRun&&n-r.lastRun<1e3*r.timeTaken&&t-r.lastRun>=1e3*r.timeTaken&&(a+=r.profit),e.businesses[r.id]=r})),e.balance.amount+=a,e}(JSON.parse(e))}catch(a){return void console.warn(a)}}());T.subscribe((function(){!function(e){try{localStorage.setItem("AC_State",JSON.stringify(e))}catch(a){console.warn(a)}}(T.getState())}));var w=T;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:w},r.a.createElement(h,null))),document.getElementById("root")),window.addEventListener("unload",(function(){try{localStorage.setItem("AC_CloseTime",(new Date).getTime())}catch(e){console.warn(e)}})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.369d9eca.chunk.js.map