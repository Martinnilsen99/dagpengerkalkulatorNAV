(this.webpackJsonpmjn_nav_it=this.webpackJsonpmjn_nav_it||[]).push([[0],{49:function(e,n,t){e.exports=t(61)},54:function(e,n,t){},55:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(8),i=t.n(l),s=(t(54),t(25)),o=t(34),u=t(35),c=(t(55),t(85)),d=t(81),m=t(88),g=t(87),p=t(89),E=t(82),v=t(86),h=t(90),k=t(83),f=t(41),b=t.n(f);var y=function(){var e=101351,n=(new Date).getFullYear(),t=Object(a.useState)({}),l=Object(u.a)(t,2),i=l[0],f=l[1],y=Object(a.useState)({Basis:0,Amount:0}),I=Object(u.a)(y,2),C=I[0],j=I[1],B=function(e){return function(n){f(Object(o.a)(Object(o.a)({},i),{},Object(s.a)({},e,isNaN(n.target.value)?"":n.target.value)))}},A=function(){N(),document.getElementById("ResultContainer").classList.remove("Hidden")},N=function(){var t=parseInt(i[n-1])+parseInt(i[n-2])+parseInt(i[n-3]),a=parseInt(i[n-1]),r=t>3*e||a>1.5*e;if(r){var l=Math.max(t/3,a)<=6*e?parseInt(Math.max(t/3,a)):6*e,s=r?Math.ceil(l/260):0;j({Basis:l,Amount:s})}else j({Basis:parseInt(Math.max(t/3,a)),Amount:0})};return r.a.createElement(c.a,{className:"App"},r.a.createElement(d.a,{className:"Container"},r.a.createElement(c.a,{className:"IntroContainer"},r.a.createElement("h1",null,"Velkommen"),r.a.createElement("h2",null,"La oss sjekke om du har rett p\xe5 dagpenger. Start med \xe5 fylle ut skjemaet under:")),r.a.createElement(c.a,{className:"InputContainer"},r.a.createElement("h3",null,"Din \xe5rsinntekt i ",n-1,":"),r.a.createElement(m.a,{fullWidth:!0,variant:"outlined"},r.a.createElement(g.a,{value:i[n-1]||"",onChange:B(n-1),endAdornment:r.a.createElement(p.a,{position:"end"},"NOK"),"aria-label":"annual salary 1 year ago",type:"number",inputProps:{"data-testid":"inputField1YearAgo"},onClick:function(){return document.getElementById("ResultContainer").classList.add("Hidden")}})),r.a.createElement("h3",null,"Din \xe5rsinntekt i ",n-2,":"),r.a.createElement(m.a,{fullWidth:!0,variant:"outlined"},r.a.createElement(g.a,{value:i[n-2]||"",onChange:B(n-2),endAdornment:r.a.createElement(p.a,{position:"end"},"NOK"),"aria-label":"annual salary 2 years ago ",type:"number",inputProps:{"data-testid":"inputField2YearsAgo"},onClick:function(){return document.getElementById("ResultContainer").classList.add("Hidden")}})),r.a.createElement("h3",null,"Din \xe5rsinntekt i ",n-3,":"),r.a.createElement(m.a,{fullWidth:!0,variant:"outlined"},r.a.createElement(g.a,{value:i[n-3]||"",onChange:B(n-3),endAdornment:r.a.createElement(p.a,{position:"end"},"NOK"),"aria-label":"annual salary 3 years ago",type:"number",inputProps:{"data-testid":"inputField3YearsAgo"},onClick:function(){return document.getElementById("ResultContainer").classList.add("Hidden")}}))),r.a.createElement("p",{className:"ErrorMessage",id:"missingInputWarning"},"Du m\xe5 fylle inn alle feltene!"),r.a.createElement(c.a,{className:"CalculateButtonContainer"},r.a.createElement(E.a,{onClick:function(){3===Object.keys(i).length&&""!==i[n-1]&&""!==i[n-2]&&""!==i[n-3]?(document.getElementById("missingInputWarning").classList.remove("Show"),A()):(document.getElementById("missingInputWarning").classList.add("Show"),document.getElementById("ResultContainer").classList.add("Hidden"))},"aria-labelledby":"Calculate",variant:"extended",alt:"Calculatebutton",id:"calculateButton"},r.a.createElement("h2",null,"Beregn dagpenger")))),r.a.createElement(d.a,{className:"Container Hidden",id:"ResultContainer"},r.a.createElement("h1",null,"Du f\xe5r innvilget ",C.Amount,"kr"),r.a.createElement("p",null,0===C.Amount?"Du oppfyller ikke kravene p\xe5 dagpenger. Ditt dagpengegrunnlag baseres p\xe5 ":"Du oppfyller kravene p\xe5 dagpenger. Ditt dagpengegrunnlag baseres p\xe5 ",C.Basis===6*e?"6G ettersom du har tjent mer enn dette.":C.Basis===parseInt(i[n-1])?"din inntekt for det siste \xe5ret, som er ":"din gjennomsnittsinntekt for de tre siste \xe5rene, som er ",C.Basis!==6*e?C.Basis+"kr.":""),r.a.createElement(v.a,{className:"Accordion"},r.a.createElement(h.a,{expandIcon:r.a.createElement(b.a,null),"aria-controls":"Information about calculation"},r.a.createElement("p",null,"Hvordan foreg\xe5r denne utregningen?")),r.a.createElement(k.a,{className:"AccordionContainer"},r.a.createElement("div",null,r.a.createElement("b",null,"Krav for dagpenger"),r.a.createElement("p",null,"For \xe5 f\xe5 innvilget dagpenger m\xe5 man enten ha tjent til sammen over 3G de siste 3 kalender\xe5rene, eller ha tjent over 1.5G forrige kalender\xe5r (",n-1,"). Grunnbel\xf8pet, kalt G, brukes til \xe5 beregne mange av NAVs ytelser. Grunnbel\xf8pet justeres 1. mai hvert \xe5r og blir fastsatt etter trygdeoppgj\xf8ret. Grunnbel\xf8pet (G) per 1. mai 2020 er kr 101 351.")),r.a.createElement("div",null,r.a.createElement("b",null,"Dagpengegrunnlag"),r.a.createElement("p",null,"Dagpengegrunnlaget er den h\xf8yeste verdien av enten inntekten siste kalender\xe5ret, eller gjennomsnittsinntekten de siste tre kalender\xe5rene. Dagpengegrunnlaget kan ikke v\xe6re h\xf8yere enn 6G.")),r.a.createElement("div",null,r.a.createElement("b",null,"Dagsats"),r.a.createElement("p",null,"For \xe5 finne dagsatsen deler man dagpengegrunnlaget p\xe5 antall arbeidsdager i \xe5ret, rundet opp. I NAV har vi definert antall arbeidsdager i et \xe5r til \xe5 v\xe6re 260."))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.75b81686.chunk.js.map