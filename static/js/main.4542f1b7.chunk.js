(this["webpackJsonpreact-stopwatch"]=this["webpackJsonpreact-stopwatch"]||[]).push([[0],{29:function(t,e,c){},31:function(t,e,c){"use strict";c.r(e);var n=c(5),a=c.n(n),s=c(24),b=c.n(s),r=c(17),i=c(40),u=c(39),j=c(34),o=c(38),O=c(35),l=c(36),p=c(22),d=c(37),f=(c(29),c(6));var h=function(){var t=Object(n.useState)(!1),e=Object(r.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)(0),b=Object(r.a)(s,2),h=b[0],x=b[1],k=Object(n.useState)(0),m=Object(r.a)(k,2),v=m[0],w=m[1],S=Object(n.useState)(0),C=Object(r.a)(S,2),N=C[0],g=C[1],y=Object(n.useCallback)((function(){a(!1)}),[]);Object(n.useEffect)((function(){var t=new i.a;Object(u.a)(1e3).pipe(Object(j.a)(t)).subscribe((function(){!0===c&&(x((function(t){return t>59?0:t+1})),w((function(t){return h>59?t+1:t>59?0:t})),g((function(t){return v>59?t+1:t})))}));var e=Object(o.a)(document.querySelector(".wait"),"click");return e.pipe(Object(O.a)(e.pipe(Object(l.a)(300))),Object(p.a)((function(t){return t.length})),Object(d.a)((function(t){return 2===t}))).subscribe((function(){return y()})),function(){t.next(),t.complete()}}),[c,h,v,y]);var E=Object(n.useCallback)((function(){a(!0)}),[]),J=Object(n.useCallback)((function(){a(!1),x(0),w(0),g(0)}),[]),q=Object(n.useCallback)((function(){x(0),w(0),g(0)}),[]);return Object(f.jsxs)("div",{className:"stopwatch",children:[Object(f.jsxs)("div",{className:"monitor",children:[Object(f.jsx)("span",{children:N<10?"0".concat(N):N}),Object(f.jsx)("span",{children:v<10?"0".concat(v):v}),Object(f.jsx)("span",{children:h<10?"0".concat(h):h})]}),Object(f.jsxs)("div",{className:"btn-box",children:[Object(f.jsx)("button",{onClick:c?J:E,children:c?"Stop":"Start"}),Object(f.jsx)("button",{className:"wait",children:"Wait"}),Object(f.jsx)("button",{onClick:q,children:"Reset"})]})]})};b.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4542f1b7.chunk.js.map