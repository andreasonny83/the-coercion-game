(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,n){e.exports=n(74)},62:function(e,t,n){},65:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(38),o=n.n(c),l=n(79),i=n(47),u=n(22),m=n(10),p=n(11),s=n(13),h=n(12),b=n(14),d=n(80),f=n(81),E=n(44),j=n(21),O=n.n(j),v=n(78);function y(){var e=Object(E.a)(["\n      {\n        allQuestions {\n          id\n          title\n        }\n      }\n    "]);return y=function(){return e},e}var k=function(){return r.a.createElement(u.Query,{query:O()(y())},function(e){var t=e.loading,n=e.error,a=e.data;return t?r.a.createElement("p",null,"Loading..."):n?r.a.createElement("p",null,"Error :("):r.a.createElement("div",null,a.allQuestions.map(function(e){var t=e.id,n=e.title;return r.a.createElement("li",{key:"question-".concat(t)},r.a.createElement(v.a,{to:"/question/".concat(t)},n))}))})},g=(n(62),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Welcome to the Coercion Game!")),r.a.createElement("main",null,r.a.createElement("button",{onClick:this.onClick},"Start"),r.a.createElement(k,null)))}}]),t}(a.Component)),w=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.match.params;return r.a.createElement("div",null,"Question #",e.id)}}]),t}(a.Component),C=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Page Not Found.")}}]),t}(a.Component),q=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:g}),r.a.createElement(f.a,{path:"/question/:id",component:w}),r.a.createElement(f.a,{component:C}))}}]),t}(a.Component),A=(n(65),new i.a({uri:"https://494v5nxp79.lp.gql.zone/graphql"}));o.a.render(r.a.createElement(l.a,{basename:"/the-coercion-game"},r.a.createElement(u.ApolloProvider,{client:A},r.a.createElement(q,null))),document.getElementById("root"))}},[[49,2,1]]]);
//# sourceMappingURL=main.e4625111.chunk.js.map