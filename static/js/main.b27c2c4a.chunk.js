(this.webpackJsonprefugee=this.webpackJsonprefugee||[]).push([[0],{151:function(e,t,n){e.exports=n(320)},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},315:function(e,t,n){},316:function(e,t,n){},317:function(e,t,n){},318:function(e,t,n){},320:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(42),c=n.n(o),i=(n(156),n(157),n(7)),s=(n(158),n(10)),u=function(e){return{type:"GET_PROCESS_FAIL",payload:e}},l=function(e){return{type:"GET_PROCESS_ID_FAIL",payload:e}},p=function(e){return{type:"PUT_PROCESS_ID_SUCCESS",payload:e}},m=function(e){return{type:"PUT_PROCESS_ID_FAIL",payload:e}},d=function(e){return{type:"DELETE_PROCESS_ID_FAIL",payload:e}},f=n(63),b=n(3),E={stories:[],isLoading:!1,error:""};var v=n(15),g=n.n(v),O=n(17),S=n.n(O),h="https://refugee-stories-build-week.herokuapp.com",x=S.a.create({baseURL:h,headers:{Authorization:window.sessionStorage.getItem("token")}}),y=function(e,t){return function(n){var a;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n({type:"PUT_PROCESS_ID_START"}),r.prev=1,r.next=4,g.a.awrap(x.put("".concat(h,"/api/stories/process/").concat(e),t));case 4:a=r.sent,console.log(a),n(p(a.data)),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.error(r.t0.response.data.Error),n(m(r.t0));case 13:case"end":return r.stop()}}),null,null,[[1,9]])}},j=function(e){return function(t){var n;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"DELETE_PROCESS_ID_START"}),a.prev=1,a.next=4,g.a.awrap(x.delete("".concat(h,"/api/stories/process/").concat(e)));case 4:n=a.sent,t({type:"DELETE_PROCESS_ID_SUCCESS",payload:n.data}),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.error(a.t0.response.data.Error),t(d(a.t0));case 12:case"end":return a.stop()}}),null,null,[[1,8]])}},_=n(11);function w(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.processReducer.stories})),n=Object(a.useCallback)((function(){e((function(e){var t;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"GET_PROCESS_START"}),n.prev=1,n.next=4,g.a.awrap(x.get("".concat(h,"/api/stories/process")));case 4:t=n.sent,console.log(t),e({type:"GET_PROCESS_SUCCESS",payload:t.data}),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.error(n.t0.response.data.Error),e(u(n.t0));case 13:case"end":return n.stop()}}),null,null,[[1,9]])}))}),[e]);return Object(a.useEffect)((function(){n()}),[n]),[t,n]}function C(e){var t=Object(_.b)(),n=Object(_.c)((function(t){return t.processReducer.stories.find((function(t){return Number(t.id)===Number(e)}))})),r=Object(a.useCallback)((function(){t(function(e){return function(t){var n;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"GET_PROCESS_ID_START"}),a.prev=1,a.next=4,g.a.awrap(x.get("".concat(h,"/api/stories/process/").concat(e)));case 4:n=a.sent,t({type:"GET_PROCESS_ID_SUCCESS",payload:n.data}),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.error(a.t0.response.data.Error),t(l(a.t0));case 12:case"end":return a.stop()}}),null,null,[[1,8]])}}(e))}),[t,e]);return Object(a.useEffect)((function(){r()}),[r]),[n,r]}var T={token:""};function R(){var e=Object(_.b)();return[Object(_.c)((function(e){return e.tokenReducer.token})),function(t){e({type:"SET_TOKEN",payload:t})}]}var k=n(27),L=n(142),I=Object(k.c)({tokenReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_TOKEN":return Object(b.a)({},e);case"SET_TOKEN":return window.sessionStorage.setItem("token",a),Object(b.a)({},e,{token:a});default:return e}},processReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_PROCESS_START":return Object(b.a)({},e,{isLoading:!0});case"GET_PROCESS_SUCCESS":return Object(b.a)({},e,{stories:Object(f.a)(a),isLoading:!1});case"GET_PROCESS_FAIL":return Object(b.a)({},e,{error:a,isLoading:!1});case"GET_PROCESS_ID_START":return Object(b.a)({},e,{isLoading:!0});case"GET_PROCESS_ID_SUCCESS":return e.stories.findIndex((function(e){return e.id===a.id}))>-1?Object(b.a)({},e,{isLoading:!1}):Object(b.a)({},e,{stories:[].concat(Object(f.a)(e.stories),[a]),isLoading:!1});case"GET_PROCESS_ID_FAIL":return Object(b.a)({},e,{error:a,isLoading:!1});case"PUT_PROCESS_ID_START":return Object(b.a)({},e,{isLoading:!0});case"PUT_PROCESS_ID_SUCCESS":return Object(b.a)({},e,{stories:[].concat(Object(f.a)(e.stories.filter((function(e){return e.id!==a.id}))),[a]),isLoading:!1});case"PUT_PROCESS_ID_FAIL":return Object(b.a)({},e,{error:a,isLoading:!1});case"DELETE_PROCESS_ID_START":return Object(b.a)({},e,{isLoading:!0});case"DELETE_PROCESS_ID_SUCCESS":return Object(b.a)({},e,{stories:e.stories.filter((function(e){return e.id!==a.id})),isLoading:!1});case"DELETE_PROCESS_ID_FAIL":return Object(b.a)({},e,{error:a,isLoading:!1});default:return e}}}),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,D=Object(k.e)(I,N(Object(k.a)(L.a)));function P(){var e=R(),t=Object(i.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{className:"nav"},r.a.createElement("a",{href:"\r\nhttps://refugee-stories-ui.netlify.com/"},"Home"),r.a.createElement(s.c,{activeClassName:"active",to:"/submitstory"},"Submit Story"),r.a.createElement(s.c,{activeClassName:"active",to:"/stories"},"Stories"),n?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,{activeClassName:"active",to:"/process"},"Process"),r.a.createElement(s.c,{onClick:function(){a(void 0)},exact:!0,to:"/"},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,{activeClassName:"active",to:"/login"},"Login"),r.a.createElement(s.c,{activeClassName:"active",to:"/signup"},"Signup")))}var A=n(25),F=n(8),U=n(322),G=n(9);function z(){var e=Object(F.a)(["\n  color: black;\n  font-size: 20px;\n"]);return z=function(){return e},e}function q(){var e=Object(F.a)(["\n  color: black;\n  font-size: 2.5rem;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n"]);return q=function(){return e},e}function K(){var e=Object(F.a)(["\n  width: 80%;\n  text-align: center;\n  justify-content: center;\n  margin: 10px auto;\n  padding: 10px;\n"]);return K=function(){return e},e}function H(){var e=Object(F.a)(["\n  width: 50%;\n  text-align: center;\n  justify-content: center;\n  margin: 10px auto;\n  padding: 10px;\n"]);return H=function(){return e},e}function M(){var e=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  text-align: center;\n  justify-content: center;\n  margin: 10px auto;\n  padding: 30px;\n  border: 1.5px solid #2b2b2b;\n  box-shadow: 5px 10px 18px #888888;\n"]);return M=function(){return e},e}function W(){var e=Object(F.a)(["\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  background: transparent;\n  border-radius: 5px;\n  border-color: grey;\n  color: black;\n  margin: 10px auto;\n  padding: 10px;\n  font-size: 15px;\n  width: 20%;\n"]);return W=function(){return e},e}var B=G.a.button(W()),J=G.a.form(M()),V=G.a.input(H()),X=G.a.textarea(K()),Y=G.a.h1(q()),$=G.a.label(z());function Q(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)({name:"",location:"",date:"",textbody:""}),s=Object(i.a)(c,2),u=s[0],l=s[1],p=function(e){l(Object(b.a)({},u,Object(A.a)({},e.target.name,e.target.value))),console.log(e.target.name)};return r.a.createElement("div",null,r.a.createElement(Y,null,"Submit your story here:"),r.a.createElement(J,{onSubmit:function(e){e.preventDefault(),S.a.post("".concat(h,"/api/stories/process"),u).then((function(){l({name:"",location:"",date:"",textbody:""})})),console.log(u)}},r.a.createElement($,{htmlFor:"nameInput"},"Name: "),r.a.createElement(V,{onChange:p,maxLength:"15",placeholder:"Name",id:"nameInput",name:"name",value:u.name,type:"text"}),r.a.createElement($,{htmlFor:"locationInput"},"Location: "),r.a.createElement(V,{onChange:p,maxLength:"15",placeholder:"Location",id:"locationInput",name:"location",value:u.location,type:"text"}),r.a.createElement($,{htmlFor:"dateInput"},"Date: "),r.a.createElement(V,{onChange:p,maxLength:"15",placeholder:"Date",id:"dateInput",name:"date",value:u.date,type:"date"}),r.a.createElement($,{htmlFor:"story"},"Your Story:"),r.a.createElement(X,{onChange:p,id:"story",name:"textbody",placeholder:"What's your story?",maxLength:"328",value:u.textbody}),r.a.createElement(B,{onClick:function(){o(!0)}},"Submit Story")),r.a.createElement(U.a,{color:"primary",isOpen:n,toggle:function(){return o(!1)}},"Thank you for submitting your story!"))}var Z=n(28);function ee(){var e=Object(F.a)(["\n  color: black;\n  font-size: 2.5rem;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n"]);return ee=function(){return e},e}function te(){var e=Object(F.a)(["\n  color: black;\n  font-size: 20px;\n"]);return te=function(){return e},e}function ne(){var e=Object(F.a)(["\n  width: 50%;\n  text-align: center;\n  justify-content: center;\n  margin: 10px auto;\n  padding: 10px;\n"]);return ne=function(){return e},e}function ae(){var e=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  text-align: center;\n  justify-content: center;\n  margin: 10px auto;\n  padding: 30px;\n  border: 1.5px solid #2b2b2b;\n  box-shadow: 5px 10px 18px #888888;\n"]);return ae=function(){return e},e}function re(){var e=Object(F.a)(["\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  background: transparent;\n  border-radius: 5px;\n  border-color: grey;\n  color: black;\n  margin: 10px auto;\n  padding: 10px;\n  font-size: 15px;\n  width: 20%;\n"]);return re=function(){return e},e}var oe=G.a.button(re()),ce=G.a.form(ae()),ie=G.a.input(ne()),se=G.a.label(te()),ue=G.a.h1(ee());function le(){var e=R(),t=Object(i.a)(e,2),n=(t[0],t[1]),o=Object(Z.f)(),c={username:"",password:""},s=Object(a.useState)(c),u=Object(i.a)(s,2),l=u[0],p=u[1],m=function(e){p(Object(b.a)({},l,Object(A.a)({},e.target.name,e.target.value))),console.log(e.target.name)};return r.a.createElement("div",null,r.a.createElement(ue,null,"Login Page"),r.a.createElement(ce,{onSubmit:function(e){e.preventDefault(),console.log(window.sessionStorage.getItem("token")),S.a.post("".concat(h,"/api/auth/login"),l).then((function(e){console.log(e),n(e.data.token),p(c),o.push("/process")})).catch((function(e){return console.error(e)}))}},r.a.createElement(se,{htmlFor:"userNameInput"},"Username: "),r.a.createElement(ie,{maxLength:"20",placeholder:"Username Here",id:"userNameInput",name:"username",value:l.username,onChange:m,type:"text"}),r.a.createElement(se,{htmlFor:"userNamePassword"},"Password: "),r.a.createElement(ie,{maxLength:"20",placeholder:"Password Here",id:"userNamePassword",name:"password",value:l.password,onChange:m,type:"password"}),r.a.createElement(oe,{type:"submit"},"Login")))}var pe=n(34),me=n(62);n(315);function de(){var e=Object(F.a)(["\n\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  background: transparent;\n  border-radius: 5px;\n  border-color: grey;\n  color: black;\n  margin: 10px auto;\n  padding: 10px;\n  font-size: 15px;\n  width: 20%;\n"]);return de=function(){return e},e}var fe=G.a.button(de());function be(){var e=Object(Z.f)(),t=R(),n=Object(i.a)(t,2),a=(n[0],n[1]);return r.a.createElement("div",{className:"signup"},r.a.createElement(pe.d,{initialValues:{username:"",password:""},validationSchema:me.object({username:me.string().min(4,"Must be 4 characters or more").required("Required"),password:me.string().min(6,"Must be 6 characters or more").required("Required")}),onSubmit:function(t,n){var r=n.resetForm;(function(e){var t;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.a.awrap(S.a.post("".concat(h,"/api/auth/register"),e));case 3:return n.sent,n.next=6,g.a.awrap(S.a.post("".concat(h,"/api/auth/login"),e));case 6:return t=n.sent,a(t.data.token),console.log(t),n.abrupt("return",t);case 12:n.prev=12,n.t0=n.catch(0),console.error(n.t0);case 15:case"end":return n.stop()}}),null,null,[[0,12]])})(t).then((function(t){r(),e.push("/")}))}},(function(e){var t=e.isSubmitting;return r.a.createElement(pe.c,{className:"signup form"},r.a.createElement("h1",null,"Sign up here:"),r.a.createElement("label",{htmlFor:"username"},"username: "),r.a.createElement(pe.b,{id:"username",type:"text",name:"username",placeholder:"type username"}),r.a.createElement(pe.a,{name:"username",className:"error",component:"div"}),r.a.createElement("label",{htmlFor:"password"},"password: "),r.a.createElement(pe.b,{autoComplete:"off",id:"password",type:"password",name:"password",placeholder:"type password"}),r.a.createElement(pe.a,{name:"password",className:"error",component:"div"}),r.a.createElement(fe,{type:"submit",className:"submit",disabled:t},"Submit"))})))}function Ee(){var e=Object(F.a)(["\n\nfont-size:25px;\n\n"]);return Ee=function(){return e},e}function ve(){var e=Object(F.a)(["\n\nfont-size: 40px;\n\n\n\n"]);return ve=function(){return e},e}function ge(){var e=Object(F.a)(["\n\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: space-between;\nborder:1px solid grey;\nwidth: 50%;\nmargin: 5px auto;\nbox-shadow: 2px 1px 7px #888888;\n"]);return ge=function(){return e},e}var Oe=G.a.div(ge()),Se=G.a.h2(ve()),he=G.a.h3(Ee()),xe=function(e){return console.log(e),r.a.createElement(Oe,{key:e.stories.name},r.a.createElement(Se,null,e.name),r.a.createElement(he,null,e.location),r.a.createElement("h4",null,e.date),r.a.createElement("p",null,e.textbody))};function ye(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){S.a.get("https://refugee-stories-build-week.herokuapp.com/api/stories/approved").then((function(e){console.log(e.data),o(e.data)})).catch((function(e){console.log("data not returned",e)}))}),[]),r.a.createElement("div",{className:"peoples"},n.map((function(e){return r.a.createElement(xe,{stories:e,key:e.name,name:e.name,location:e.location,date:e.date,textbody:e.textbody})})))}var je=n(148);function _e(e){var t=e.component,n=Object(je.a)(e,["component"]),a=function(){var e=Object(_.b)();return[Object(_.c)((function(e){return e.tokenReducer.token})),function(){return e({type:"GET_TOKEN"})}]}(),o=Object(i.a)(a,1)[0];return r.a.createElement(Z.b,Object.assign({},n,{render:function(e){return o?r.a.createElement(t,e):r.a.createElement(Z.a,{to:"/login"})}}))}function we(e){var t=e.item,n=t.name,a=t.location,o=t.date,c=t.textbody,i=t.approved;return r.a.createElement(s.b,{className:"process-item",to:"/process/".concat(t.id)},r.a.createElement("div",null,"Name: ",n),r.a.createElement("div",null,"Location: ",a),r.a.createElement("div",null,"Data: ",o),r.a.createElement("div",null,"Status: ",i?"Approved":"Denied"),r.a.createElement("div",null,"Story:"),r.a.createElement("div",{className:"text"},c))}n(316);function Ce(){var e=w(),t=Object(i.a)(e,1)[0];return r.a.createElement("div",{className:"process"},t.map((function(e){return r.a.createElement(we,{key:e.id,item:e})})))}n(317);function Te(){var e=Object(Z.g)().id,t=Object(Z.f)(),n=C(e),a=Object(i.a)(n,1)[0],o=a.name,c=a.location,s=a.date,u=a.approved,l=a.textbody,p=function(e){var t=Object(_.b)();return[Object(_.c)((function(t){return t.processReducer.stories.find((function(t){return t.id===e}))})),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;t(j(n))}]}(e),m=Object(i.a)(p,2),d=(m[0],m[1]),f=function(e){var t=Object(_.b)();return[Object(_.c)((function(t){return t.processReducer.stories.find((function(t){return t.id===e}))})),function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;t(y(a,n))}]}(e),E=Object(i.a)(f,2),v=(E[0],E[1]);return r.a.createElement("div",{className:"processId"},r.a.createElement("div",null,"Name: ",o),r.a.createElement("div",null,"Location: ",c),r.a.createElement("div",null,"Data: ",s),r.a.createElement("div",null,"Status: ",u?"Approved":"Denied"),r.a.createElement("div",null,"Story:"),r.a.createElement("div",{className:"text"},l),r.a.createElement("div",{className:"action"},r.a.createElement("button",{className:"process-action",onClick:function(){var e=Object(b.a)({},a,{approved:!u});v(e),t.push("/")}},u?"Denied":"Approve"),r.a.createElement("button",{className:"process-action",onClick:function(){d(),t.push("/")}},"Delete")))}n(318);function Re(){var e=new Date;return r.a.createElement("div",{className:"footer"},"\xa9Refugee ",e.getFullYear())}var ke=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement(Z.b,{path:"/submitstory",component:Q}),r.a.createElement(Z.b,{path:"/login",component:le}),r.a.createElement(Z.b,{path:"/signup",component:be}),r.a.createElement(Z.b,{path:"/stories",component:ye}),r.a.createElement(_e,{exact:!0,path:"/process",component:Ce}),r.a.createElement(_e,{path:"/process/:id",component:Te}),r.a.createElement(Re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(319);c.a.render(r.a.createElement(_.a,{store:D},r.a.createElement(s.a,{basename:"/React"},r.a.createElement(ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[151,1,2]]]);
//# sourceMappingURL=main.b27c2c4a.chunk.js.map