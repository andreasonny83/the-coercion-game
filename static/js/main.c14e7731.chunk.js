(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,n){e.exports=n(80)},67:function(e,t,n){},69:function(e,t,n){},72:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),l=n.n(c),o=n(42),i=n.n(o),u=n(84),s=n(52),v=n(25),p=n(21),E=n(11),d=n(12),m=n(14),b=n(13),f=n(15),h=n(85),O=n(86),L=n(47),j=n(24),y=n.n(j),w=n(48),N=n.n(w),C=(n(67),function(e){function t(){var e,n;Object(E.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(a)))).nextLevel=function(){n.props.nextLevel(10)},n.select=function(){},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,n=e.options,r=e.answers,a=e.currentLevel,c=e.selectAnswer;return l.a.createElement("div",{className:"Question",onClick:this.select},l.a.createElement("p",null,t),l.a.createElement("div",{className:"questions"},n.map(function(e){return l.a.createElement("div",{key:e.id,className:N()("question",(t=e.id,r[a]===t&&"active")),onClick:function(){return c(a,e.id)}},e.body);var t}),l.a.createElement("button",{disabled:!r[a],onClick:this.nextLevel},"Next")))}}]),t}(c.Component));!function(e){e.NEXT_LEVEL="@@level/NEXT_LEVEL",e.PREVIOUS_LEVEL="@@level/PREVIOUS_LEVEL"}(r||(r={})),function(e){e.SELECT_ANSWER="@@level/SELECT_ANSWER"}(a||(a={}));var g=function(e){return{type:r.NEXT_LEVEL,payload:e}},S=Object(p.b)(function(e){return{currentLevel:e.level.currentLevel,answers:e.answers}},function(e){return{nextLevel:function(t){return e(g(t))},selectAnswer:function(t,n){return e(function(e,t){return{type:a.SELECT_ANSWER,payload:{level:e,answer:t}}}(t,n))}}})(C);function k(){var e=Object(L.a)(["\n        query Question($id: Int!) {\n          question(id: $id) {\n            title\n            level\n            description\n            options {\n              id\n              body\n            }\n            answer\n          }\n        }\n      "]);return k=function(){return e},e}var x=function(e){var t=e.id;return l.a.createElement(v.Query,{query:y()(k()),variables:{id:t}},function(e){return e.loading?l.a.createElement("p",null,"Loading..."):e.error?l.a.createElement("p",null,"Error :("):l.a.createElement(S,{description:e.data.question.description,level:e.data.question.level,options:e.data.question.options})})},A=(n(69),function(e){function t(){return Object(E.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.level,n=e.nextLevel;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Welcome to the Coercion Game!")),l.a.createElement("main",null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,"Level: ",t),l.a.createElement(x,{id:t})):l.a.createElement("button",{onClick:n},"Start")))}}]),t}(c.Component)),_=Object(p.b)(function(e){return{level:e.level.currentLevel}},function(e){return{nextLevel:function(){return e(g())}}})(A),q=function(e){function t(){return Object(E.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Page Not Found.")}}]),t}(c.Component),T=function(e){function t(){return Object(E.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(O.a,{exact:!0,path:"/",component:_}),l.a.createElement(O.a,{component:q}))}}]),t}(c.Component),V=n(10),R=n(50),W=n(28),I={currentLevel:0},P=n(29),X={},Q=Object(V.combineReducers)({level:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;switch((arguments.length>1?arguments[1]:void 0).type){case r.NEXT_LEVEL:return Object(W.a)({},e,{currentLevel:e.currentLevel+=1});default:return e}},answers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SELECT_ANSWER:return Object(W.a)({},e,Object(P.a)({},t.payload.level,t.payload.answer));default:return e}}}),F=Object(R.composeWithDevTools)({}),J=Object(V.createStore)(Q,F(Object(V.applyMiddleware)())),U=(n(72),new s.a({uri:"https://l94v8vh7rc.execute-api.us-east-1.amazonaws.com/dev/graphql"}));i.a.render(l.a.createElement(u.a,{basename:"/the-coercion-game"},l.a.createElement(v.ApolloProvider,{client:U},l.a.createElement(p.a,{store:J},l.a.createElement(T,null)))),document.getElementById("root"))}},[[55,2,1]]]);
//# sourceMappingURL=main.c14e7731.chunk.js.map