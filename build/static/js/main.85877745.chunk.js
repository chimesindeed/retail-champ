(this["webpackJsonpretail-champ"]=this["webpackJsonpretail-champ"]||[]).push([[0],{44:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(6),i=c.n(n),a=c(46),r=c.n(a),s=(c(55),c(44),c(48)),j=c(18),l=c(11),o=i.a.createContext(""),b=i.a.createContext(""),u=i.a.createContext(""),d=i.a.createContext(""),O=i.a.createContext(""),p=i.a.createContext(""),h=i.a.createContext(""),x=i.a.createContext(""),v=i.a.createContext(""),f=i.a.createContext(""),m=i.a.createContext(""),C=i.a.createContext(""),k=i.a.createContext(""),N=c(3),w=function(e){var t=Object(n.useContext)(o),c=Object(l.a)(t,1)[0];return Object(N.jsxs)("div",{children:["Retail Hub #",c]})},g=function(e){var t=Object(n.useContext)(b),c=Object(l.a)(t,1)[0];return Object(N.jsxs)("div",{children:["a: ",c]})},D=function(e){var t=Object(n.useContext)(u),c=Object(l.a)(t,1)[0];return Object(N.jsxs)("div",{children:["p ",c]})},y=function(e){var t=Object(n.useContext)(d),c=Object(l.a)(t,1)[0];return Object(N.jsxs)("div",{className:"store-hours",children:[Object(N.jsx)("div",{children:"Hours of Operation"}),c]})},S=function(e){return Object(N.jsx)("div",{children:"Pricing & Discounts"})},F=function(e){var t=Object(n.useContext)(O),c=Object(l.a)(t,1)[0];return Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:"Exchange Policy"}),c]})},I=c(67),P=function(){var e=Object(n.useState)("loading..."),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){!function(){var e=new Date("October 25, 2020"),t=new Date,n=Math.floor((Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())-Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))/864e5)/7%5;n>=0&&n<1?i("Pink"):n>=1&&n<2?i("Yellow"):n>=2&&n<3?i("Green"):n>=3&&n<4?i("Blue"):n>=4&&n<5&&i("White"),console.log(c)}()}),[]),{color:c}},T="Yellow Tickets",A="Green Tickets",E="Blue Tickets",M="White Tickets",Y="Pink Tickets",B="50%",H="99 Cents",G=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"white",children:"".concat(M," ").concat(B)}),Object(N.jsx)("div",{className:"blue",children:"".concat(E," ").concat(B)}),Object(N.jsx)("div",{className:"green",children:"".concat(A," ").concat(H)})]})},z=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"pink",children:"".concat(Y," ").concat(B)}),Object(N.jsx)("div",{className:"white",children:"".concat(M," ").concat(B)}),Object(N.jsx)("div",{className:"blue",children:"".concat(E," ").concat(H)})]})},U=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"yellow",children:"".concat(T," ").concat(B)}),Object(N.jsx)("div",{className:"pink",children:"".concat(Y," ").concat(B)}),Object(N.jsx)("div",{className:"white",children:"".concat(M," ").concat(H)})]})},W=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"green",children:"".concat(A," ").concat(B)}),Object(N.jsx)("div",{className:"yellow",children:"".concat(T," ").concat(B)}),Object(N.jsx)("div",{className:"pink",children:"".concat(Y," ").concat(H)})]})},q=function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"blue",children:"".concat(E," ").concat(B)}),Object(N.jsx)("div",{className:"green",children:"".concat(A," ").concat(B)}),Object(N.jsx)("div",{className:"yellow",children:"".concat(T," ").concat(H)})]})},J=function(e){var t=P().color;return Object(N.jsxs)(I.a,{className:"ticket-cycle-card",children:[Object(N.jsx)("div",{className:"ticket-cycle-title",children:"Clothing / Handbags"}),function(){switch(t){case"Yellow":return Object(N.jsx)(G,{});case"Green":return Object(N.jsx)(z,{});case"Blue":return Object(N.jsx)(U,{});case"White":return Object(N.jsx)(W,{});case"Pink":return Object(N.jsx)(q,{});default:return"Loading..."}}()]})},L=c(1),V=c(4),K=c(9),Q=c(10),R=c(22),X=c.n(R),Z=function(){var e=Object(n.useContext)(x),t=Object(l.a)(e,1)[0];return Object(N.jsxs)("div",{className:"books-item-and-price",children:[Object(N.jsx)("div",{className:"softcover",children:"Softcover"}),Object(N.jsx)("div",{className:"prices",children:3===String(t).length?Object(N.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["  ",t]}):t})]})},$=c(0),_=c.n($),ee=c(2),te=c(68),ce=c(69),ne=c(13),ie=c(47),ae=c(35),re=Object(ie.a)({apiKey:"AIzaSyAYqZx2SaYAQFgfuqsGeOoyX3TM4CvSPjs",authDomain:"retail-companion-e4310.firebaseapp.com",projectId:"retail-companion-e4310",storageBucket:"retail-companion-e4310.appspot.com",messagingSenderId:"783423928675",appId:"1:783423928675:web:ec558cf6cdfbb356efbb56"}),se=re,je=Object(ae.a)(re),le=Object(ne.b)(se),oe=function(){var e=Object(n.useContext)(x),t=Object(l.a)(e,1)[0],c=Object(ne.a)(le,"items","softcover"),i=function(){var e=Object(ee.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.d)(c,{price:t.target.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(te.a,{children:Object(N.jsx)(ce.a,{children:Object(N.jsx)("input",{className:"softcover-input",type:"number",name:"priceInput",id:"priceInput",placeholder:t.price,onDoubleClick:i})})})},be=function(e){Object(K.a)(c,e);var t=Object(Q.a)(c);function c(){var e;return Object(L.a)(this,c),(e=t.call(this)).handleClick=function(t){t.preventDefault(),e.setState((function(e){return{isFlipped:!e.isFlipped}}))},e.state={isFlipped:!1},e}return Object(V.a)(c,[{key:"render",value:function(){return Object(N.jsxs)(X.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(Z,{})},"front"),Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(oe,{})},"back")]})}}]),c}(i.a.Component),ue=function(){var e=Object(n.useContext)(h),t=Object(l.a)(e,1)[0];return Object(N.jsxs)("div",{className:"books-item-and-price",children:[Object(N.jsx)("div",{className:"hardcover",children:"Hardcover"}),Object(N.jsx)("div",{className:"prices",children:3===String(t).length?Object(N.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["  ",t]}):t})]})},de=Object(ne.b)(se),Oe=function(){var e=Object(n.useContext)(h),t=Object(l.a)(e,1)[0],c=Object(ne.a)(de,"items","hardcover"),i=function(){var e=Object(ee.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.d)(c,{price:t.target.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(te.a,{children:Object(N.jsx)(ce.a,{children:Object(N.jsx)("input",{className:"hardcover-input",type:"number",name:"priceInput",id:"priceInput",placeholder:t.price,onDoubleClick:i})})})},pe=function(e){Object(K.a)(c,e);var t=Object(Q.a)(c);function c(){var e;return Object(L.a)(this,c),(e=t.call(this)).handleClick=function(t){t.preventDefault(),e.setState((function(e){return{isFlipped:!e.isFlipped}}))},e.state={isFlipped:!1},e}return Object(V.a)(c,[{key:"render",value:function(){return Object(N.jsxs)(X.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(ue,{})},"front"),Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(Oe,{})},"back")]})}}]),c}(i.a.Component),he=function(){var e=Object(n.useContext)(p),t=Object(l.a)(e,1)[0];return Object(N.jsxs)("div",{className:"books-item-and-price",children:[Object(N.jsx)("div",{className:"hardcover",children:"Childrens"}),Object(N.jsx)("div",{className:"prices",children:3===String(t).length?Object(N.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["  ",t]}):t})]})},xe=Object(ne.b)(se),ve=function(){var e=Object(n.useContext)(p),t=Object(l.a)(e,1)[0],c=Object(ne.a)(xe,"items","childrens"),i=function(){var e=Object(ee.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.d)(c,{price:t.target.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(te.a,{children:Object(N.jsx)(ce.a,{children:Object(N.jsx)("input",{className:"childrens-input",type:"number",name:"priceInput",id:"priceInput",placeholder:t.price,onDoubleClick:i})})})},fe=function(e){Object(K.a)(c,e);var t=Object(Q.a)(c);function c(){var e;return Object(L.a)(this,c),(e=t.call(this)).handleClick=function(t){t.preventDefault(),e.setState((function(e){return{isFlipped:!e.isFlipped}}))},e.state={isFlipped:!1},e}return Object(V.a)(c,[{key:"render",value:function(){return Object(N.jsxs)(X.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(he,{})},"front"),Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(ve,{})},"back")]})}}]),c}(i.a.Component),me=function(e){return Object(N.jsxs)("div",{className:"books-container",children:[Object(N.jsx)("div",{className:"books-title",children:"Books"}),Object(N.jsx)(be,{}),Object(N.jsx)(pe,{}),Object(N.jsx)(fe,{})]})},Ce=function(){var e=Object(n.useContext)(v),t=Object(l.a)(e,1)[0];return Object(N.jsxs)("div",{className:"media-item-and-price",children:[Object(N.jsx)("div",{className:"albums",children:"Albums"}),Object(N.jsx)("div",{className:"prices",children:3===String(t).length?Object(N.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["  ",t]}):t})]})},ke=Object(ne.b)(se),Ne=function(){var e=Object(n.useContext)(v),t=Object(l.a)(e,1)[0],c=Object(ne.a)(ke,"items","albums"),i=function(){var e=Object(ee.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.d)(c,{price:t.target.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(te.a,{children:Object(N.jsx)(ce.a,{children:Object(N.jsx)("input",{className:"albums-input",type:"number",name:"priceInput",id:"priceInput",placeholder:t.price,onDoubleClick:i})})})},we=function(e){Object(K.a)(c,e);var t=Object(Q.a)(c);function c(){var e;return Object(L.a)(this,c),(e=t.call(this)).handleClick=function(t){t.preventDefault(),e.setState((function(e){return{isFlipped:!e.isFlipped}}))},e.state={isFlipped:!1},e}return Object(V.a)(c,[{key:"render",value:function(){return Object(N.jsxs)(X.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(Ce,{})},"front"),Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(Ne,{})},"back")]})}}]),c}(i.a.Component),ge=function(){var e=Object(n.useContext)(f),t=Object(l.a)(e,1)[0];return Object(N.jsxs)("div",{className:"media-item-and-price",children:[Object(N.jsx)("div",{className:"cds",children:"Cds"}),Object(N.jsx)("div",{className:"prices",children:3===String(t).length?Object(N.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["  ",t]}):t})]})},De=Object(ne.b)(se),ye=function(){var e=Object(n.useContext)(f),t=Object(l.a)(e,1)[0],c=Object(ne.a)(De,"items","cds"),i=function(){var e=Object(ee.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.d)(c,{price:t.target.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(te.a,{children:Object(N.jsx)(ce.a,{children:Object(N.jsx)("input",{className:"cds-input",type:"number",name:"priceInput",id:"priceInput",placeholder:t.price,onDoubleClick:i})})})},Se=function(e){Object(K.a)(c,e);var t=Object(Q.a)(c);function c(){var e;return Object(L.a)(this,c),(e=t.call(this)).handleClick=function(t){t.preventDefault(),e.setState((function(e){return{isFlipped:!e.isFlipped}}))},e.state={isFlipped:!1},e}return Object(V.a)(c,[{key:"render",value:function(){return Object(N.jsxs)(X.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(ge,{})},"front"),Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(ye,{})},"back")]})}}]),c}(i.a.Component),Fe=function(){var e=Object(n.useContext)(m),t=Object(l.a)(e,1)[0];return Object(N.jsxs)("div",{className:"media-item-and-price",children:[Object(N.jsx)("div",{className:"dvds",children:"Dvds"}),Object(N.jsx)("div",{className:"prices",children:3===String(t).length?Object(N.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["  ",t]}):t})]})},Ie=Object(ne.b)(se),Pe=function(){var e=Object(n.useContext)(m),t=Object(l.a)(e,1)[0],c=Object(ne.a)(Ie,"items","dvds"),i=function(){var e=Object(ee.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.d)(c,{price:t.target.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(te.a,{children:Object(N.jsx)(ce.a,{children:Object(N.jsx)("input",{className:"dvds-input",type:"number",name:"priceInput",id:"priceInput",placeholder:t.price,onDoubleClick:i})})})},Te=function(e){Object(K.a)(c,e);var t=Object(Q.a)(c);function c(){var e;return Object(L.a)(this,c),(e=t.call(this)).handleClick=function(t){t.preventDefault(),e.setState((function(e){return{isFlipped:!e.isFlipped}}))},e.state={isFlipped:!1},e}return Object(V.a)(c,[{key:"render",value:function(){return Object(N.jsxs)(X.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(Fe,{})},"front"),Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(Pe,{})},"back")]})}}]),c}(i.a.Component),Ae=function(){var e=Object(n.useContext)(C),t=Object(l.a)(e,1)[0];return Object(N.jsxs)("div",{className:"media-item-and-price",children:[Object(N.jsx)("div",{className:"sets",children:"Sets"}),Object(N.jsx)("div",{className:"prices",children:t})]})},Ee=Object(ne.b)(se),Me=function(){var e=Object(n.useContext)(C),t=Object(l.a)(e,1)[0],c=Object(ne.a)(Ee,"items","sets"),i=function(){var e=Object(ee.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.d)(c,{price:t.target.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(te.a,{children:Object(N.jsx)(ce.a,{children:Object(N.jsx)("input",{className:"sets-input",type:"number",name:"priceInput",id:"priceInput",placeholder:t.price,onDoubleClick:i})})})},Ye=function(e){Object(K.a)(c,e);var t=Object(Q.a)(c);function c(){var e;return Object(L.a)(this,c),(e=t.call(this)).handleClick=function(t){t.preventDefault(),e.setState((function(e){return{isFlipped:!e.isFlipped}}))},e.state={isFlipped:!1},e}return Object(V.a)(c,[{key:"render",value:function(){return Object(N.jsxs)(X.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(Ae,{})},"front"),Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(Me,{})},"back")]})}}]),c}(i.a.Component),Be=function(){var e=Object(n.useContext)(k),t=Object(l.a)(e,1)[0];return Object(N.jsxs)("div",{className:"media-item-and-price",children:[Object(N.jsx)("div",{className:"vhs",children:"Vhs"}),Object(N.jsx)("div",{className:"prices",children:3===String(t).length?Object(N.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:["  ",t]}):t})]})},He=Object(ne.b)(se),Ge=function(){var e=Object(n.useContext)(k),t=Object(l.a)(e,1)[0],c=Object(ne.a)(He,"items","vhs"),i=function(){var e=Object(ee.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.d)(c,{price:t.target.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)(te.a,{children:Object(N.jsx)(ce.a,{children:Object(N.jsx)("input",{className:"vhs-input",type:"number",name:"priceInput",id:"priceInput",placeholder:t.price,onDoubleClick:i})})})},ze=function(e){Object(K.a)(c,e);var t=Object(Q.a)(c);function c(){var e;return Object(L.a)(this,c),(e=t.call(this)).handleClick=function(t){t.preventDefault(),e.setState((function(e){return{isFlipped:!e.isFlipped}}))},e.state={isFlipped:!1},e}return Object(V.a)(c,[{key:"render",value:function(){return Object(N.jsxs)(X.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(Be,{})},"front"),Object(N.jsx)("div",{onDoubleClick:this.handleClick,children:Object(N.jsx)(Ge,{})},"back")]})}}]),c}(i.a.Component),Ue=function(e){return Object(N.jsxs)("div",{className:"media-container",children:[Object(N.jsx)("div",{className:"media-title",children:"Music / Video"}),Object(N.jsx)(we,{}),Object(N.jsx)(Se,{}),Object(N.jsx)(ze,{}),Object(N.jsx)(Te,{}),Object(N.jsx)(Ye,{})]})},We=function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"itemized-discounts-card-title",children:"MEDIA"}),Object(N.jsxs)("div",{className:"books-and-media-container",children:[Object(N.jsx)(me,{}),Object(N.jsx)(Ue,{})]})]})},qe=function(){return Object(N.jsxs)("div",{className:"wrapper",children:[Object(N.jsx)("div",{className:"store-id",children:Object(N.jsx)(w,{})}),Object(N.jsx)("div",{className:"store-add",children:Object(N.jsx)(g,{})}),Object(N.jsx)("div",{className:"store-phone",children:Object(N.jsx)(D,{})}),Object(N.jsx)("div",{className:"store-hours",children:Object(N.jsx)(y,{})}),Object(N.jsx)("div",{className:"discounts-header",children:Object(N.jsx)(S,{})}),Object(N.jsx)("div",{className:"exchange-policy",children:Object(N.jsx)(F,{})}),Object(N.jsxs)("div",{className:"discount-boxes-wrapper",children:[Object(N.jsx)(J,{}),Object(N.jsx)("div",{className:"itemized-discounts-card",children:Object(N.jsx)(We,{})})]})]})},Je=c(70),Le=c(71),Ve=c(72),Ke=function(e){var t=Object(n.useState)({}),c=Object(l.a)(t,2),i=c[0],a=c[1],r=Object(n.useState)(""),s=Object(l.a)(r,2),j=s[0],o=s[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),d=u[0],O=u[1];Object(ae.b)(je,(function(e){a(e),e&&(window.location="/discounts")}));var p=function(){var e=Object(ee.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ae.c)(je,j,d);case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(ee.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.d)(je);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)(te.a,{className:"login-form",children:[Object(N.jsx)(Je.a,{for:"email",children:"Email"}),Object(N.jsx)(Le.a,{className:"login-input",type:"email",id:"email",placeholder:"email",onChange:function(e){o(e.target.value)}}),Object(N.jsx)(Je.a,{for:"password",children:"Password"}),Object(N.jsx)(Le.a,{className:"login-input",type:"password",id:"password",placeholder:"password",onChange:function(e){O(e.target.value)}}),Object(N.jsxs)("h4",{children:["Current User: ",null===i||void 0===i?void 0:i.email]}),Object(N.jsx)(Ve.a,{onClick:p,children:"Submit"}),Object(N.jsx)(Ve.a,{onClick:h,children:"Logout"})]})},Qe=function(){return Object(N.jsx)(s.a,{children:Object(N.jsx)("div",{children:Object(N.jsxs)(j.c,{children:[Object(N.jsx)(j.a,{path:"/discounts",exact:!0,component:qe}),Object(N.jsx)(j.a,{path:"/login",exact:!0,component:Ke})]})})})},Re=function(e){var t=Object(n.useState)("Id"),c=Object(l.a)(t,2),i=c[0],a=c[1],r=Object(n.useState)("Address"),s=Object(l.a)(r,2),j=s[0],p=s[1],h=Object(n.useState)("Phone"),x=Object(l.a)(h,2),v=x[0],f=x[1],m=Object(n.useState)("Hours"),C=Object(l.a)(m,2),k=C[0],w=C[1],g=Object(n.useState)("Exchange Policy"),D=Object(l.a)(g,2),y=D[0],S=D[1];return Object(N.jsx)(o.Provider,{value:[i,a],children:Object(N.jsx)(b.Provider,{value:[j,p],children:Object(N.jsx)(u.Provider,{value:[v,f],children:Object(N.jsx)(d.Provider,{value:[k,w],children:Object(N.jsx)(O.Provider,{value:[y,S],children:e.children})})})})})},Xe=function(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),i=c[0],a=c[1],r=Object(n.useState)(""),s=Object(l.a)(r,2),j=s[0],o=s[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),d=u[0],O=u[1],w=Object(n.useState)(""),g=Object(l.a)(w,2),D=g[0],y=g[1],S=Object(n.useState)(""),F=Object(l.a)(S,2),I=F[0],P=F[1],T=Object(n.useState)(""),A=Object(l.a)(T,2),E=A[0],M=A[1],Y=Object(n.useState)(""),B=Object(l.a)(Y,2),H=B[0],G=B[1],z=Object(n.useState)("As Marked"),U=Object(l.a)(z,2),W=U[0],q=U[1];return Object(N.jsx)(p.Provider,{value:[i,a],children:Object(N.jsx)(x.Provider,{value:[j,o],children:Object(N.jsx)(h.Provider,{value:[d,O],children:Object(N.jsx)(v.Provider,{value:[D,y],children:Object(N.jsx)(k.Provider,{value:[I,P],children:Object(N.jsx)(f.Provider,{value:[E,M],children:Object(N.jsx)(m.Provider,{value:[H,G],children:Object(N.jsx)(C.Provider,{value:[W,q],children:e.children})})})})})})})})},Ze=Object(ne.b)(se),$e=function(e){var t=Object(n.useContext)(x),c=Object(l.a)(t,2)[1],i=Object(n.useContext)(h),a=Object(l.a)(i,2)[1],r=Object(n.useContext)(p),s=Object(l.a)(r,2)[1],j=Object(n.useContext)(v),o=Object(l.a)(j,2)[1],b=Object(n.useContext)(f),u=Object(l.a)(b,2)[1],d=Object(n.useContext)(m),O=Object(l.a)(d,2)[1],N=Object(n.useContext)(k),w=Object(l.a)(N,2)[1],g=Object(n.useContext)(C),D=Object(l.a)(g,2)[1];return Object(n.useEffect)((function(){Object(ne.c)(Object(ne.a)(Ze,"items","softcover"),(function(e){c(e.data().price)})),Object(ne.c)(Object(ne.a)(Ze,"items","hardcover"),(function(e){a(e.data().price)})),Object(ne.c)(Object(ne.a)(Ze,"items","childrens"),(function(e){s(e.data().price)})),Object(ne.c)(Object(ne.a)(Ze,"items","albums"),(function(e){o(e.data().price)})),Object(ne.c)(Object(ne.a)(Ze,"items","cds"),(function(e){u(e.data().price)})),Object(ne.c)(Object(ne.a)(Ze,"items","dvds"),(function(e){O(e.data().price)})),Object(ne.c)(Object(ne.a)(Ze,"items","sets"),(function(e){D(e.data().price)})),Object(ne.c)(Object(ne.a)(Ze,"items","vhs"),(function(e){w(e.data().price)}))}),[]),e.children};r.a.render(Object(N.jsx)(Re,{children:Object(N.jsx)(Xe,{children:Object(N.jsx)($e,{children:Object(N.jsx)(Qe,{})})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.85877745.chunk.js.map