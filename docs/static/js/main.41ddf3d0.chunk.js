(this.webpackJsonpistrability=this.webpackJsonpistrability||[]).push([[0],{78:function(e,t,i){},87:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(40),r=i.n(o),c=(i(78),i(27)),s=i(56),l=i.n(s),d=i(59);function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var j=Object(c.b)("counter/fetchCount",function(){var e=Object(d.a)(l.a.mark((function e(t){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return i=e.sent,e.abrupt("return",i.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u=Object(c.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(j.pending,(function(e){e.status="loading"})).addCase(j.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),p=u.actions,b=(p.increment,p.decrement,p.incrementByAmount,u.reducer),g=Object(c.c)({name:"language",initialState:"en",reducers:{setLanguage:function(e,t){return t.payload}}}),A=g.actions.setLanguage,h=function(e){return e.language},f=g.reducer,x=Object(c.a)({reducer:{counter:b,language:f}}),z=i(26);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=i(67),v=i(120),k=i(114),y=i(35),M=i(48),N=z.c,R=i.p+"static/media/logo6.517ccc2f.png",S=i(1),T=Object(k.a)({titleRow:{position:"sticky",top:"0rem",backgroundColor:"#0B0B18",width:"100%",padding:"0rem 1.5rem 0rem 1.2rem",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",color:"#FFFFFE",height:"3rem",boxSizing:"border-box",zIndex:100},titlePlaceholder:{height:"1rem",top:"4rem",backgroundColor:"#0B0B18",position:"absolute",width:"100%"},mdMenu:{display:"none"},xsMenu:{height:"100%",display:"flex",alignItems:"center"},flag:{width:"1.4rem"},title:{color:"#FFFFFE",fontSize:"1.5rem",fontWeight:"bold",cursor:"pointer",textDecoration:"none",display:"flex",flexDirection:"row",alignItems:"center"},titleIcon:{fontSize:"1.2rem"},image:{width:"3rem",height:"3rem",backgroundSize:"contain"},"@media (min-width: 960px)":{titleRow:{height:"4rem",paddingRight:"3.5rem"},titlePlaceholder:{top:"5rem"},title:{fontSize:"1.8rem"},flag:{width:"1.5rem",cursor:"pointer"},mdMenu:{},titleIcon:{fontSize:"1.8rem"},image:{width:"4rem",height:"4rem"}}}),U=function(){var e=T(),t=N(h),i=Object(z.b)();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{style:{height:"1rem",backgroundColor:"#0B0B18",width:"100%"}}),Object(S.jsx)("div",{className:e.titlePlaceholder}),Object(S.jsxs)("div",{className:e.titleRow,children:[Object(S.jsxs)(y.b,{to:"/",className:e.title,children:[Object(S.jsx)("div",{className:e.image,style:{backgroundImage:"url(".concat(R,")")}}),"\xa0Istrability"]}),Object(S.jsxs)("div",{className:e.xsMenu,children:[Object(S.jsx)("div",{className:e.flag,style:{marginRight:"1rem",opacity:"en"===t?1:.5},onClick:function(){return i(A("en"))},children:Object(S.jsx)(M.a.GB,{title:"English"})}),Object(S.jsx)("div",{className:e.flag,style:{marginRight:"1rem",opacity:"hr"===t?1:.5},onClick:function(){return i(A("hr"))},children:Object(S.jsx)(M.a.HR,{title:"Hrvatski"})}),Object(S.jsx)("div",{className:e.flag,style:{opacity:"it"===t?1:.5},onClick:function(){return i(A("it"))},children:Object(S.jsx)(M.a.IT,{title:"Italiano"})})]})]})]})},E=i(6),I=i(117),C=i(65),H=i.n(C),B=i(64),D=i.n(B),P=i(66),J=i.n(P),Q=i(15),w=Object(k.a)((function(e){return{outer:{},inner:{width:"100%",height:"0",paddingBottom:"70%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},"@media (min-width: 600px)":{},"@media (min-width: 960px)":{}}})),F=function(e){var t=e.diagnosisData,i=e.style,a=w(),o=Object(n.useState)(!1),r=Object(Q.a)(o,2),c=(r[0],r[1]);return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{className:a.outer,style:i,onClick:function(){return c(!0)},children:Object(S.jsx)("div",{title:t.name,className:a.inner,style:{backgroundImage:"url(".concat(t.imageUrl,")")}})})})},V=i.p+"static/media/react.97d059a4.png",K=i.p+"static/media/redux.692b2c1f.png",Z=i.p+"static/media/materialui.15980d5c.png",L=i.p+"static/media/css.ad674aa8.png",W=[{id:"React",name:"React",description:"asd",imageUrl:V,links:[]},{id:"Redux",name:"Redux",description:"asd",imageUrl:K,links:[]},{id:"Material UI",name:"Material UI",description:"asd",imageUrl:Z,links:[]},{id:"HTML 5",name:"HTML 5",description:"HTML 5",imageUrl:i.p+"static/media/html.f565d178.png",links:[]},{id:"NodeJS",name:"NodeJS",description:"asd",imageUrl:"data:image/png;base64,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",links:[]},{id:"CSS 3",name:"CSS 3",description:"CSS 3",imageUrl:L,links:[]},{id:"Rust",name:"Rust",description:"Rust",imageUrl:i.p+"static/media/rust.5f0719d0.png",links:[]},{id:"Linux",name:"Linux",description:"Linux",imageUrl:i.p+"static/media/linux.c6a6048d.png",links:[]}],q=i(113),X=i(119),G=Object(k.a)((function(e){return{outer:{textAlign:"center",width:"1000px",maxWidth:"100%",backgroundColor:"#F9F9F9",borderRadius:"30px",padding:"0rem 1rem",margin:"1rem 0rem 0rem"},gallery:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"flex-start"},galleryItem:{padding:"1rem 1% 1rem",display:"flex",flexDirection:"column",width:"48%"},galleryItemTitle:{fontSize:"1rem",marginBottom:"0.5rem"},contactItem:{margin:"0.8rem auto 0.6rem",display:"flex",alignItems:"center",textDecoration:"none"},contactItemIcon:{paddingRight:"5px",color:"black"},contactItemContent:{color:"rgb(0, 0, 238)"},servicesWrapper:{marginBottom:"2.5rem"},"@media (min-width: 600px)":{outer:{padding:"0px 50px",margin:"1rem 0rem 0rem"},servicesWrapper:{marginBottom:"3.5rem"},galleryItem:{padding:"0.5rem 0.41%",boxSizing:"border-box",width:"33.33%"},galleryItemTitle:{fontSize:"1.2rem",marginBottom:"0.5rem"}}}})),Y=function(){var e=G();return Object(S.jsxs)(I.a,{container:!0,className:e.outer,children:[Object(S.jsx)(I.a,{item:!0,xs:!1,md:1}),Object(S.jsx)(I.a,{item:!0,xs:12,md:10,style:{textAlign:"center"},children:Object(S.jsxs)("div",{style:{marginTop:"2rem",marginBottom:"3.5rem"},children:[Object(S.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"1rem",fontWeight:"bold"},children:Object(S.jsx)(X.a,{id:"aboutUs"})}),Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(S.jsx)("div",{style:{marginBottom:"1rem",textAlign:"center"},children:Object(S.jsx)(X.a,{id:"aboutUsContent1"})}),Object(S.jsx)("div",{style:{marginBottom:"1rem",textAlign:"center"},children:Object(S.jsx)(X.a,{id:"aboutUsContent2"})})]})]})}),Object(S.jsx)(I.a,{item:!0,xs:12,md:12,style:{textAlign:"center"},children:Object(S.jsxs)("div",{style:{marginBottom:"4.5rem"},children:[Object(S.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"0.5rem",fontWeight:"bold"},children:Object(S.jsx)(X.a,{id:"contactAndLocation"})}),Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(S.jsxs)("a",{href:"tel:+385958576949",className:e.contactItem,style:{display:"flex",alignItems:"center"},children:[Object(S.jsx)(D.a,{className:e.contactItemIcon}),Object(S.jsx)("span",{className:e.contactItemContent,children:"+385 95 857 6949"})]}),Object(S.jsxs)("a",{href:"mailto:vrafaeli@gmail.com",className:e.contactItem,children:[Object(S.jsx)(H.a,{className:e.contactItemIcon}),Object(S.jsx)("span",{className:e.contactItemContent,children:"vrafaeli@msn.com"})]}),Object(S.jsxs)("a",{href:"https:/github.com/istrability/",className:e.contactItem,children:[Object(S.jsx)(q.a,{className:e.contactItemIcon}),Object(S.jsx)("span",{className:e.contactItemContent,children:"github.com/istrability"})]}),Object(S.jsxs)("a",{href:"https://www.google.com/maps/place/Zagreb/@45.8401746,15.8942922,5z",target:"_blank",rel:"noopener noreferrer",className:e.contactItem,children:[Object(S.jsx)(J.a,{className:e.contactItemIcon}),Object(S.jsx)("span",{className:e.contactItemContent,children:"Zagreb, Croatia (UTC+1)"})]})]})]})}),Object(S.jsx)(I.a,{item:!0,xs:12,md:12,style:{textAlign:"center"},children:Object(S.jsxs)("div",{className:e.servicesWrapper,children:[Object(S.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"0.8rem",fontWeight:"bold"},children:Object(S.jsx)(X.a,{id:"productsAndServices"})}),Object(S.jsx)("div",{className:e.gallery,children:W.map((function(t){return Object(S.jsxs)("div",{className:e.galleryItem,children:[Object(S.jsx)("div",{className:e.galleryItemTitle,children:t.name}),Object(S.jsx)(F,{diagnosisData:t},t.id)]},t.id)}))})]})})]})},$=i.p+"static/media/office3.220d7d25.jpg",_=i.p+"static/media/office2.0a161bcd.jpg",ee=i.p+"static/media/office1.17331a3a.jpg",te="linear-gradient(to bottom, rgba(0, 0, 8, 1), rgba(0,0,0,0), rgba(255, 255, 255, 0.40))",ie=Object(k.a)({imageContainer:{marginLeft:"auto",marginRight:"auto",marginTop:"1rem",height:"60vh",textAlign:"center",width:"100%",borderLeft:"0px solid black",borderRight:"0px solid black",boxSizing:"content-box",position:"relative",background:"black"},image:{filter:"brightness(47%)",width:"100%",height:"100%",backgroundRepeat:"repeat-x",backgroundSize:"240vh 80vh",backgroundPosition:"50%",transition:"opacity 2s ease-in-out",position:"absolute"},textContainer:{position:"absolute",zIndex:50,color:"white",fontSize:"2rem",width:"100%",height:"100%",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},"@media (min-width: 960px)":{imageContainer:{marginTop:"1rem",marginBottom:"0.5rem"}}}),ne=function(){var e=ie(),t=Object(n.useState)(0),i=Object(Q.a)(t,2),a=i[0],o=i[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){o((a+1)%3)}),6500);return function(){return clearTimeout(e)}}),[a]),Object(S.jsxs)("div",{className:e.imageContainer,children:[Object(S.jsx)("div",{className:e.image,style:{backgroundImage:"".concat(te,", url(").concat($,")"),backgroundColor:"#080814",opacity:0===a?1:0}}),Object(S.jsx)("div",{className:e.image,style:{backgroundImage:"".concat(te,", url(").concat(_,")"),backgroundColor:"#080814",opacity:1===a?1:0}}),Object(S.jsx)("div",{className:e.image,style:{backgroundImage:"".concat(te,", url(").concat(ee,")"),backgroundColor:"#080814",opacity:2===a?1:0}}),Object(S.jsxs)("div",{className:e.textContainer,children:[Object(S.jsx)("div",{style:{fontSize:"3rem",fontWeight:"bold",marginBottom:"2rem",marginTop:"-4rem"},children:"Istrability"}),Object(S.jsx)("div",{children:Object(S.jsx)(X.a,{id:"title"})})]})]})},ae=Object(k.a)((function(e){return{outer:{minHeight:"100%",position:"absolute",width:"100vw",backgroundColor:"#F9F9F9"}}})),oe=function(){var e=ae(),t=Object(E.c)();return Object(n.useEffect)((function(){document.getElementsByTagName("html")[0].scrollTop=0}),[t]),Object(S.jsxs)("div",{className:e.outer,children:[Object(S.jsx)(U,{}),Object(S.jsx)(ne,{}),Object(S.jsx)("div",{style:{display:"flex",alignItems:"center",width:"95%",maxWidth:"950px",margin:"auto",flexDirection:"column"},children:Object(S.jsx)(Y,{})}),Object(S.jsxs)("div",{style:{width:"100%",backgroundColor:"#0B0B18",color:"white",fontSize:"0.9rem",textAlign:"center",padding:"3px",boxSizing:"border-box"},children:["\xa9 Istrability, 2019-",(new Date).toLocaleDateString("sv-SE",{timeZone:"Europe/Zagreb"}).substring(0,4)]})]})},re=i(115),ce={en:{title:"Digitalize your ideas",aboutUs:"About us",aboutUsContent1:"Istrability is a software development company that is actively developing Web apps (and other software) since 2019. With the help of our expert knowledge you can realize your digital ideas or optimize your business processes.",aboutUsContent2:"Our area of expertize is building frontend part of Web apps (in React), backend part of Web apps and scripting (in NodeJS), whole Web apps, and system apps (in Rust).",contactAndLocation:"Contact & Location",productsAndServices:"Products & Services"},hr:{title:"Digitaliziraj svoje ideje",aboutUs:"O nama",aboutUsContent1:"Istrability je softverska kompanija koja samostalno izra\u0111uje Web aplikacije (i drugi softver) od 2019. godine. Uz na\u0161tu profesionalnu pomo\u0107 mo\u017eete realizirati i digitalizirati va\u0161e ideje te optimizirati svoje poslovne procese.",aboutUsContent2:"Specijalizirani smo za izradu gotovih Web programskih rje\u0161enja (u React-u i NodeJS-u), te gotovih sistemskih aplikacija.",contactAndLocation:"Kontak & Lokacija",productsAndServices:"Proizvodi & Usluge"},it:{title:"Digitalize your ideas",aboutUs:"About us",aboutUsContent1:"Istrability is a software development company that is actively developing Web apps (and other software) since 2019. With the help of our expert knowledge you can realize your digital ideas or optimize your business processes.",aboutUsContent2:"Our area of expertize is building frontend part of Web apps (in React), backend part of Web apps and scripting (in NodeJS), whole Web apps, and system apps (in Rust).",contactAndLocation:"Contact & Location",productsAndServices:"Products & Services"}},se=function(e){var t=e.children,i=Object(z.c)(h);return Object(S.jsx)(re.a,{locale:i,messages:ce[i],children:t})},le=Object(O.a)();r.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(z.a,{store:x,children:Object(S.jsx)(se,{children:Object(S.jsx)(v.a,{theme:le,children:Object(S.jsx)(y.a,{children:Object(S.jsx)(oe,{})})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[87,1,2]]]);
//# sourceMappingURL=main.41ddf3d0.chunk.js.map