(this["webpackJsonpcsi-project"]=this["webpackJsonpcsi-project"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),a=c(19),s=c.n(a),j=(c(26),c(10)),r=c(2),o=c.p+"static/media/6.9f3c6e11.gif",l=(c(27),c(0));var d=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{children:[Object(l.jsx)("div",{className:"img",children:Object(l.jsx)("img",{src:o,alt:"logo"})}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{className:"link",to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{className:"link",to:"/ToDo",children:"ToDo"})})]})]})})},b=c.p+"static/media/1.c6eb3604.png",O=c.p+"static/media/todo.a4ad838c.gif",m=c.p+"static/media/insta logo.88b48cc5.gif",x=c.p+"static/media/linkedin.30946678.gif",u=(c(34),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"containar",children:[Object(l.jsx)("img",{src:b,alt:"",className:"photo"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:'"Click ToDo for ToDo list"'}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Creating a new note. ",Object(l.jsx)("br",{}),"Organize your notes.",Object(l.jsx)("br",{}),"Delete, Edit and Update notes.",Object(l.jsx)("br",{})]})]}),Object(l.jsxs)("div",{className:"containar",children:[Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("a",{href:"https://www.instagram.com/raj_navadiya_972/",target:"_blank",children:Object(l.jsx)("img",{src:m,alt:"",className:"insta",title:"Instagram"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/rajnavadiya972",target:"_blank",children:Object(l.jsx)("img",{src:x,alt:"",className:"insta",title:"Linkdin"})})]}),Object(l.jsx)("img",{src:O,alt:"",className:"p1"})]})]})}),h=c(21),f=c(17),g=c(8),p=c.p+"static/media/2.09b95d91.png",v=(c(35),c.p+"static/media/5.c8c8391c.gif"),N=function(){var e=Object(i.useState)(""),t=Object(g.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]),s=Object(g.a)(a,2),j=s[0],r=s[1],o=Object(i.useState)(null),d=Object(g.a)(o,2),b=d[0],O=d[1],m=Object(i.useState)(0),x=Object(g.a)(m,2),u=x[0],N=x[1],S=Object(i.useState)(!0),D=Object(g.a)(S,2),k=D[0],T=D[1],w=Object(i.useState)((new Date).toLocaleTimeString()),C=Object(g.a)(w,2),y=C[0],F=C[1],L=function(){if(c)if(c&&!k)F((new Date).toLocaleTimeString()),r(j.map((function(e){return e.id===b?Object(f.a)(Object(f.a)({},e),{},{name:c,time:y}):e}))),n(""),T(!0);else{F((new Date).toLocaleTimeString());var e={id:u,name:c,time:y};r([].concat(Object(h.a)(j),[e])),n(""),N(u+1)}else alert("Enter the input")};return Object(i.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(j))}),[j]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"main-containar",children:[Object(l.jsxs)("figure",{children:[Object(l.jsx)("img",{src:p,alt:"ToDo Image"}),Object(l.jsx)("figcaption",{children:"ToDo List"})]}),Object(l.jsxs)("div",{className:"input-item",children:[Object(l.jsx)("input",{type:"text",placeholder:"Add items...",value:c,onChange:function(e){return n(e.target.value)}}),k?Object(l.jsx)("i",{class:"fas fa-plus-circle",title:"Add",onClick:L}):Object(l.jsx)("i",{class:"fas fa-pen-alt",title:"Update",onClick:L})]}),Object(l.jsx)("div",{className:"todo-item",children:j.map((function(e){return Object(l.jsxs)("div",{className:"one-item",children:[Object(l.jsxs)("div",{className:"timeAndtodo",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsxs)("span",{children:["Time : ",e.time]})]}),Object(l.jsx)("i",{class:"fas fa-edit",type:"Edit",onClick:function(){return function(e){var t=j.find((function(t){return t.id===e}));T(!1),n(t.name),O(t.id),F((new Date).toLocaleTimeString())}(e.id)}}),Object(l.jsx)("i",{class:"fas fa-trash-alt",type:"Delete",onClick:function(){return function(e){var t=j.filter((function(t){return e!==t.id}));r(t)}(e.id)}})]},e.id)}))})]}),Object(l.jsx)("div",{className:"photo_todo",children:Object(l.jsx)("img",{src:v,alt:"photo"})})]})};c(36);var S=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(r.a,{exact:!0,path:"/ToDo",component:N})]}),Object(l.jsx)("footer",{children:Object(l.jsx)("p",{children:"Developer : Raj"})})]})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),D()}},[[37,1,2]]]);
//# sourceMappingURL=main.d922b872.chunk.js.map