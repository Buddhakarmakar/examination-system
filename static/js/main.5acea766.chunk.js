(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,i){},21:function(e,t,i){},24:function(e,t,i){},33:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),c=i(13),o=i.n(c),r=(i(21),i(7)),a=i(2),d=i(5),l={isSubmitted:!1,timeLeft:300},j=[{id:1,question:"What is the capital of India?",visited:!1,answered:!1,options:[{id:1,option:"New Delhi",isSelected:!1,isCorrect:!0},{id:2,option:"Mumbai",isSelected:!1,isCorrect:!1},{id:3,option:"Chennai",isSelected:!1,isCorrect:!1}]},{id:2,visited:!1,answered:!1,question:"What is the capital of USA?",options:[{id:1,option:"New Delhi",isSelected:!1,isCorrect:!1},{id:2,option:"Mumbai",isSelected:!1,isCorrect:!1},{id:3,option:"New York",isSelected:!1,isCorrect:!0}]},{id:3,visited:!1,answered:!1,question:"What is the capital of UK?",options:[{id:1,option:"New Delhi",isSelected:!1,isCorrect:!1},{id:2,option:"London",isSelected:!1,isCorrect:!0},{id:3,option:"New York",isSelected:!1,isCorrect:!1}]},{id:4,visited:!1,answered:!1,question:"What is the capital of Australia?",options:[{id:1,option:"New Delhi",isSelected:!1,isCorrect:!1},{id:2,option:"Sydney",isSelected:!1,isCorrect:!0},{id:3,option:"Melbourne",isSelected:!1,isCorrect:!1}]},{id:5,visited:!1,answered:!1,question:"What is the capital of Canada?",options:[{id:1,option:"New Delhi",isSelected:!1,isCorrect:!1},{id:2,option:"Ottawa",isSelected:!1,isCorrect:!0},{id:3,option:"Toronto",isSelected:!1,isCorrect:!1}]},{id:6,visited:!1,answered:!1,question:"What is the capital of Germany?",options:[{id:1,option:"New Delhi",isSelected:!1,isCorrect:!1},{id:2,option:"Berlin",isSelected:!1,isCorrect:!0},{id:3,option:"Munich",isSelected:!1,isCorrect:!1}]},{id:7,visited:!1,answered:!1,question:"What is the capital of France?",options:[{id:1,option:"New Delhi",isSelected:!1,isCorrect:!1},{id:2,option:"Paris",isSelected:!1,isCorrect:!0},{id:3,option:"Lyon",isSelected:!1,isCorrect:!1}]},{id:8,visited:!1,answered:!1,question:"What is the capital of Italy?",options:[{id:1,option:"New Delhi",isSelected:!1,isCorrect:!1},{id:2,option:"Rome",isSelected:!1,isCorrect:!0},{id:3,option:"Milan",isSelected:!1,isCorrect:!1}]}],b=(i(12),i(0));function u(e){for(var t=e.questions,i=e.itemsPerPage,s=e.paginate,n=(e.setVisited,[]),c=0;c<Math.ceil(t.length/i);c++)n.push(c);return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:"page-button-contrainer",children:n.map((function(e){return Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("button",{className:t[e].visited&&t[e].answered?"page-link-answered":t[e].visited?"page-link-visited":"page-link",onClick:function(){return s(e)},children:e+1})},e)}))})})}i(23);function h(e){var t=e.pageNumber,i=e.totalQues,s=e.paginate;return Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:t<i-1?"page-link":"disabled",onClick:function(){t<i-1&&s(t+1)},children:"next"})})}function p(e){var t=e.pageNumber,i=(e.setPageNumber,e.paginate);return Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:t>0?"page-link":"disabled",onClick:function(){t>0&&i(t-1)},children:"Previous"})})}function O(){for(var e=0,t=0;t<j.length;t++)for(var i=0;i<j[t].options.length;i++)j[t].options[i].isCorrect&&j[t].options[i].isSelected&&e++;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h3",{children:[" Your score is : ",e]}),Object(b.jsxs)("h4",{children:["Wrong answer:",j.length-e]}),Object(b.jsx)("hr",{})]})}function m(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:Object(b.jsx)(O,{answer_data:e})}),Object(b.jsx)("button",{className:"show-answer",children:Object(b.jsx)("a",{href:"/show-answer",children:"Show Answer  Script"})})]})}function x(e,t){var i=Object(s.useState)("Submit"),n=Object(d.a)(i,2),c=n[0],o=n[1],r=Object(s.useState)(l.isSubmitted),a=Object(d.a)(r,2),j=a[0],u=a[1];return Object(s.useEffect)((function(){l.isSubmitted&&(o("Submitted"),u(!0))}),[j]),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:j?"disabled":"page-link",onClick:function(){return u(!0),l.isSubmitted=!0,o("Submitted"),t},children:c}),j?Object(b.jsx)(m,{data:e}):null]})}var S=i(14);function f(e){var t=e.expiryTimestamp,i=Object(S.useTimer)({expiryTimestamp:t,onExpire:function(){return alert("Times up"),l.isSubmitted=!0,l.timeLeft=0}}),s=i.seconds,n=i.minutes,c=i.hours;i.isRunning,i.start,i.pause,i.resume,i.restart;return Object(b.jsx)("div",{style:{textAlign:"center"},children:Object(b.jsxs)("div",{style:{fontSize:"30px",backgroundColor:"rgba(213,213,90)"},children:[Object(b.jsx)("span",{children:c<10?"0"+c:c}),":",Object(b.jsx)("span",{children:n<10?"0"+n:n}),":",Object(b.jsx)("span",{children:s<10?"0"+s:s})]})})}var v=function(e){e.itemsPerPage,console.log(l.isSubmitted);var t=0,i=0,n=Object(s.useState)(j),c=Object(d.a)(n,2),o=c[0],r=(c[1],Object(s.useState)(0)),a=Object(d.a)(r,2),O=a[0],m=a[1],S=Object(s.useState)(!1),v=Object(d.a)(S,2),g=v[0],w=v[1],C=Object(s.useState)(!1),N=Object(d.a)(C,2),k=(N[0],N[1],function(e){m(e),w(!0),o[e].visited=!0});if(!l.isSubmitted)for(var y=0;y<o.length;y++)j[y].visited&&i++,j[y].answered&&t++;var q=o.length,P=j,D=1*O,W=P.slice(D,D+1).map((function(e){return Object(b.jsxs)("ul",{children:[Object(b.jsx)("h2",{children:Object(b.jsxs)("li",{children:["(",e.id,")",e.question]})}),Object(b.jsx)("div",{className:l.isSubmitted?"radio radio-disabled":"radio",children:e.options.map((function(t){return Object(b.jsx)("div",{className:"option",children:Object(b.jsxs)("label",{className:"form-control",children:[Object(b.jsx)("input",{type:"radio",className:l.isSubmitted?"radio-disabled":null,name:e.id,value:t.id,onChange:function(){l.isSubmitted||function(e,t){t.options.map((function(t){t.id===e?(t.isSelected=!0,w(!g)):t.isSelected=!1})),t.answered=!0}(t.id,e)},checked:t.isSelected}),t.option]})},t.id)}))})]},e.id)})),M=Object(s.useState)(l.timeLeft),T=Object(d.a)(M,2),A=T[0],E=T[1],L=new Date;return L.setSeconds(L.getSeconds()+A),Object(s.useEffect)((function(){console.log("Cahnge detected"),console.log(g)}),[P,g,l,A]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"container",children:[W,Object(b.jsx)("div",{children:A>0?Object(b.jsx)(f,{expiryTimestamp:L}):Object(b.jsx)("h3",{children:"Exam Submitted"})})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(u,{questions:P,itemsPerPage:1,paginate:k})}),Object(b.jsxs)("div",{className:" bottom",children:[Object(b.jsx)(p,{pageNumber:O,setPageNumber:m,paginate:k}),Object(b.jsx)(h,{pageNumber:O,totalQues:q,paginate:k})]}),Object(b.jsx)("div",{className:" bottom",children:Object(b.jsxs)("h2",{children:["Saved Answer : ",t,Object(b.jsx)("br",{}),"Visited :",i]})}),Object(b.jsx)("div",{className:" bottom",children:Object(b.jsx)(x,{data:o,submitButtonFunction:function(){E(0)}})})]})};i(24);var g=function(){return Object(b.jsx)(r.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(a.a,{exact:!0,path:"/",children:Object(b.jsx)(v,{})}),Object(b.jsxs)(a.a,{path:"/examination-system",children:[" ",Object(b.jsx)(v,{})]}),Object(b.jsx)(a.a,{path:"/show-answer",children:Object(b.jsx)(O,{})})]})})};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(r.b,{children:Object(b.jsx)(g,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5acea766.chunk.js.map