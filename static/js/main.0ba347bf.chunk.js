(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,n){e.exports=n(78)},65:function(e,t,n){},67:function(e,t,n){},70:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(40),l=n.n(c),o=n(82),i=n(49),u=n(25),s=n(21),p=n(11),m=n(12),d=n(14),v=n(13),b=n(15),E=n(84),f=n(83),h=n(45),j=n(24),O=n.n(j),y=(n(65),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,n=e.options;return a.a.createElement("div",{className:"Question"},a.a.createElement("p",null,t),a.a.createElement("div",{className:"questions"},n.map(function(e){return a.a.createElement("div",{className:"question",key:e.id},e.body)})),a.a.createElement("button",{onClick:this.props.nextLevel},"Next"))}}]),t}(r.Component)),L=Object(s.b)(function(e){return{level:e.level.currentLevel}},function(e){return{nextLevel:function(){return e({type:"@@level/NEXT_LEVEL"})}}})(y);function w(){var e=Object(h.a)(["\n      query Question($id: Int!) {\n        question(id: $id) {\n          title\n          description\n          options {\n            id\n            body\n          }\n          answer\n        }\n      }\n    "]);return w=function(){return e},e}var N=function(e){var t=e.id;return a.a.createElement(u.Query,{query:O()(w()),variables:{id:t}},function(e){return e.loading?a.a.createElement("p",null,"Loading..."):e.error?a.a.createElement("p",null,"Error :("):a.a.createElement(L,{description:e.data.question.description,options:e.data.question.options})})},g=(n(67),function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.level;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Welcome to the Coercion Game!")),a.a.createElement("main",null,e?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"Level: ",e),a.a.createElement(N,{id:e})):a.a.createElement("button",{onClick:this.props.nextLevel},"Start")))}}]),t}(r.Component)),k=Object(s.b)(function(e){return{level:e.level.currentLevel}},function(e){return{nextLevel:function(){return e({type:"@@level/NEXT_LEVEL"})}}})(g),q=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,"Page Not Found.")}}]),t}(r.Component),x=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.a.createElement(E.a,null,a.a.createElement(f.a,{exact:!0,path:"/",component:k}),a.a.createElement(f.a,{component:q}))}}]),t}(r.Component),C=n(10),T=n(50),A={currentLevel:0},Q=Object(C.combineReducers)({level:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;switch((arguments.length>1?arguments[1]:void 0).type){case"@@level/NEXT_LEVEL":return Object(T.a)({},e,{currentLevel:e.currentLevel+=1});default:return e}}}),V=n(47),X=Object(V.composeWithDevTools)({}),_=Object(C.createStore)(Q,X(Object(C.applyMiddleware)())),F=(n(70),new i.a({uri:"https://l94v8vh7rc.execute-api.us-east-1.amazonaws.com/dev/graphql"}));l.a.render(a.a.createElement(o.a,{basename:"/the-coercion-game"},a.a.createElement(u.ApolloProvider,{client:F},a.a.createElement(s.a,{store:_},a.a.createElement(x,null)))),document.getElementById("root"))}},[[53,2,1]]]);
//# sourceMappingURL=main.0ba347bf.chunk.js.map