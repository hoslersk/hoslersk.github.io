(this.webpackJsonphoslersk=this.webpackJsonphoslersk||[]).push([[0],{19:function(e,t,a){e.exports=a(40)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=a(2),s=a(10);a(24);function i(){return r.a.createElement("svg",{"aria-hidden":"true",className:"background-grid",height:"100%",width:"100%",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("defs",null,r.a.createElement("pattern",{id:"small-grid",width:"4",height:"4",patternUnits:"userSpaceOnUse"},r.a.createElement("path",{d:"M 8 0 L 0 0 0 8",fill:"none",stroke:"currentColor",strokeWidth:"0.5"})),r.a.createElement("pattern",{id:"grid",width:"40",height:"40",patternUnits:"userSpaceOnUse"},r.a.createElement("rect",{width:"40",height:"40",fill:"url(#small-grid)"}))),r.a.createElement("rect",{width:"100%",height:"100%",fill:"url(#grid)"}))}a(25);function m(){return r.a.createElement("svg",{"aria-hidden":"true",className:"background-shadow",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("defs",null,r.a.createElement("radialGradient",{id:"shadow-gradient",cx:"0.5",cy:"0.5",r:"0.7",fx:"0.5",fy:"0.5"},r.a.createElement("stop",{offset:"0%",stopColor:"#fff",stopOpacity:"0.3"}),r.a.createElement("stop",{offset:"50%",stopColor:"#fff",stopOpacity:"0"}),r.a.createElement("stop",{offset:"100%",stopColor:"#000",stopOpacity:"0.6"}))),r.a.createElement("rect",{width:"100%",height:"100%",fill:"url(#shadow-gradient)"}))}var u=a(9),E=a(5),h=a.n(E);a(26);function d(e){var t=e.position,a=h()("background-svg",Object(u.a)({},"".concat("background-svg","--").concat(t),t));return r.a.createElement("svg",{"aria-hidden":"true",className:a,viewBox:"0 0 16 9",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{className:"background-svg__circles"},r.a.createElement("circle",{className:"background-svg__circle",fill:"none",stroke:"currentColor",strokeWidth:"0.03",cx:"0",cy:"0",r:"6"}),r.a.createElement("circle",{className:"background-svg__circle",fill:"none",stroke:"currentColor",strokeWidth:"0.03",cx:"0",cy:"0",r:"5.8"})),r.a.createElement("g",{className:"background-svg__lines"},r.a.createElement("line",{className:"background-svg__line",x1:"0.5",y1:"0",x2:"6.5",y2:"6",stroke:"currentColor",strokeWidth:"0.03"}),r.a.createElement("line",{className:"background-svg__line",x1:"0",y1:"0",x2:"7",y2:"7",stroke:"currentColor",strokeWidth:"0.03"}),r.a.createElement("line",{className:"background-svg__line",x1:"-0.5",y1:"0",x2:"6",y2:"6.5",stroke:"currentColor",strokeWidth:"0.03"})))}a(27);function g(e){var t=e.position,a=h()("background-trim",Object(u.a)({},"".concat("background-trim","--").concat(t),t));return r.a.createElement("svg",{"aria-hidden":"true",className:a,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("defs",null,r.a.createElement("pattern",{id:"trim",width:"80",height:"24",patternUnits:"userSpaceOnUse"},r.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"2",fill:"currentColor"}),r.a.createElement("rect",{x:"0",y:"1",width:"5",height:"5",fill:"currentColor"}),r.a.createElement("circle",{cx:"32",cy:"10",r:"3",fill:"currentColor"}),r.a.createElement("circle",{cx:"48",cy:"10",r:"3",fill:"currentColor"}),r.a.createElement("circle",{cx:"40",cy:"20",r:"3",fill:"currentColor"}),r.a.createElement("rect",{x:"75",y:"1",width:"5",height:"5",fill:"currentColor"}))),r.a.createElement("rect",{width:"100%",height:"100%",fill:"url(#trim)"}))}a(28);function f(e){var t=e.children;return r.a.createElement("h1",{className:"heading"},t)}a(29);function p(e){var t=e.children,a=e.className,n=h()("nav-item",a);return r.a.createElement("li",{className:n},t)}a(30);function v(e){var t=e.isActive,a=e.className,n=h()("cursor-svg",a);return r.a.createElement("svg",{"aria-hidden":"true",className:n,viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("defs",null,r.a.createElement("mask",{id:"mask",x:"0",y:"0"},r.a.createElement("rect",{x:"0",y:"0",width:"10",height:"10",fill:"#fff"}),r.a.createElement("circle",{cx:"3",cy:"5",r:"0.75"}))),r.a.createElement("path",{mask:"url(#mask)",fill:t?"#c9c3af":"currentColor",d:"M0,5 L3.5,3 L10,5 L3.5,7 L0,5"}),r.a.createElement("rect",{fill:"currentColor",x:"8.75",y:"2",width:"1.25",height:"1.25"}),r.a.createElement("rect",{fill:"currentColor",x:"8.75",y:"7",width:"1.25",height:"1.25"}))}a(31);function w(){return r.a.createElement("svg",{"aria-hidden":"true",className:"nav-bullet-svg",viewBox:"0 0 1 1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("rect",{fill:"currentColor",x:"0",y:"0",width:"1",height:"1"}))}a(32);function N(e){var t=e.children,a=e.className,n=e.to,l=h()("nav-link",a),c="".concat("nav-link","--active"),o="".concat("nav-link","__cursor"),i=h()(o,"".concat(o,"--active"));return r.a.createElement(s.b,{activeClassName:c,exact:!0,className:l,to:n},r.a.createElement(v,{className:i,isActive:!0}),r.a.createElement(v,{className:o}),r.a.createElement(w,null),r.a.createElement("span",null,t))}a(38);function k(){var e="".concat("site-header","__nav"),t="".concat("site-header","__list"),a="".concat("site-header","__list-item"),n="".concat("site-header","__link");return r.a.createElement("header",{className:"site-header"},r.a.createElement("nav",{className:e},r.a.createElement("ul",{className:t},r.a.createElement(p,{className:a},r.a.createElement(N,{className:n,to:"/"},"Home")),r.a.createElement(p,{className:a},r.a.createElement(N,{className:n,to:"/about"},"About")),r.a.createElement(p,{className:a},r.a.createElement(N,{className:n,to:"/tools"},"Tools")),r.a.createElement(p,{className:a},r.a.createElement(N,{className:n,to:"/projects"},"Projects")),r.a.createElement(p,{className:a},r.a.createElement(N,{className:n,to:"/contact"},"Contact")))))}function x(e){var t=e.children,a=e.heading;return r.a.createElement(n.Fragment,null,r.a.createElement(k,null),r.a.createElement(g,{position:"top"}),r.a.createElement("main",{className:"container"},r.a.createElement(f,null,a),t),r.a.createElement(d,{position:"top"}),r.a.createElement(i,null),r.a.createElement(m,null),r.a.createElement(d,{position:"bottom"}),r.a.createElement(g,{position:"bottom"}))}function b(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null,"Home ",r.a.createElement("small",null,"- \u30db\u30fc\u30e0")),r.a.createElement("div",{className:"content"},"Under Construction"))}function y(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null,"About ",r.a.createElement("small",null,"- \u30b9\u30ab\u30a4\u30e9\u30fc\u306b\u3064\u3044\u3066")),r.a.createElement("div",{className:"content"},"TBD"))}function _(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null,"Tools ",r.a.createElement("small",null,"- \u30c4\u30fc\u30eb")),r.a.createElement("div",{className:"content"},"TBD"))}function C(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null,"Projects ",r.a.createElement("small",null,"- \u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),r.a.createElement("div",{className:"content"},"TBD"))}function B(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null,"Contact ",r.a.createElement("small",null,"- \u304a\u554f\u5408\u305b")),r.a.createElement("div",{className:"content"},"TBD"))}function O(){return r.a.createElement(x,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/about",component:y}),r.a.createElement(o.b,{path:"/tools",component:_}),r.a.createElement(o.b,{path:"/projects",component:C}),r.a.createElement(o.b,{path:"/contact",component:B}),r.a.createElement(o.b,{path:"/",component:b}),r.a.createElement(o.a,{to:"/"})))}a(39);c.a.render(r.a.createElement((function(){return r.a.createElement(s.a,{basename:"/"},r.a.createElement(o.b,{path:"/",component:O}))}),null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a07f906d.chunk.js.map