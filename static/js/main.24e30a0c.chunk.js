(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/marvel.b344b76d.jpg"},31:function(e,t,a){e.exports=a(52)},36:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),i=(a(36),a(23)),s=a(24),o=a(30),m=a(29),u=a(8),d=a(2),f=a(11),h=a.n(f),p=a(9),v=(a(39),a(40),function(e){for(var t=e.itemsPerPage,a=e.totalItems,n=e.paginate,r=e.currentPage,l=[],i=1;i<=Math.ceil(a/t);i++)l.push(i);return c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",{className:"pagination"},c.a.createElement("td",null,"MARV"),l.map((function(e){return c.a.createElement("td",{key:e,className:""},c.a.createElement("div",{className:r===e?"selected":""},c.a.createElement("a",{onClick:function(){return n(e)},href:"/#",className:""},"E")),c.a.createElement("div",{className:"number"},e))})),c.a.createElement("td",null,"L"))))}),E=a(13),b=a(15),g=function(e){var t=Object(n.useState)(1),a=Object(p.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(10),s=Object(p.a)(i,1)[0],o=r*s,m=o-s,d=e.filteredComics.slice(m,o);return c.a.createElement("div",null,c.a.createElement("div",{"data-testid":"search",className:"search"},c.a.createElement("button",{type:"button",title:"Search comic by character",className:"btn btn-danger",onClick:e.toggleClass},c.a.createElement(E.a,{icon:b.b})),c.a.createElement("input",{className:"form-control ".concat(e.inputHidden?"hide-el":"show-el"),type:"text",value:e.inputValue,onChange:function(t){l(1),e.onSearchCharacter(t)},placeholder:"Search comic by character name"})),c.a.createElement("div",{className:"grid","data-testid":"grid"},d.map((function(e,t){return c.a.createElement("div",{className:"grid-item",key:"comic-".concat(t)},c.a.createElement("div",null,c.a.createElement("img",{key:"{i}",alt:e.title,src:"".concat(e.thumbnail.path,"/portrait_incredible.").concat(e.thumbnail.extension),className:"img-center",title:e.title}),c.a.createElement("div",{className:"title"},e.title),c.a.createElement("div",{className:"creators"},"Creators:"," ",0===e.creators.items.length?"Not Available":e.creators.items.map((function(t,a){return a===e.creators.items.length-1?t.name:t.name+", "})))),c.a.createElement("div",{className:"bottom"},c.a.createElement("div",{className:"little-marvel"},c.a.createElement("a",{href:0===e.urls.length?"http://marvel.com":e.urls.find((function(e){return"detail"===e.type}))?e.urls.find((function(e){return"detail"===e.type})).url:e.urls[0].url,title:"Open details on Marvel Website",target:"_blank"},"M")),c.a.createElement("div",{className:"details"},c.a.createElement(u.a,null,c.a.createElement("a",{href:"/comic/".concat(e.id),target:"_blank",rel:"noopener noreferrer",title:"Open Comic Details"},c.a.createElement(E.a,{icon:b.a}))))))}))),c.a.createElement(v,{itemsPerPage:s,totalItems:e.filteredComics.length,paginate:function(e){l(e)},currentPage:r}))},y=a(18),N=a.n(y),w=a(26),C=(a(49),a(54)),k=a(27),O=a.n(k);var j=function(){var e=Object(d.f)().comicId,t=Object(n.useState)([]),a=Object(p.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){var t=(new Date).getTime(),a=h()(t+"38a050f5b87b111194aafe3856b42d11ba631ccf4167c005c0a07310c876a75896675979");function n(){return(n=Object(w.a)(N.a.mark((function n(){return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://gateway.marvel.com:443/v1/public/comics/".concat(e,"?apikey=").concat("4167c005c0a07310c876a75896675979","&ts=").concat(t,"&hash=").concat(a)).then((function(e){return e.json()})).then((function(e){l(e.data.results[0])})).catch((function(e){return console.log(e)}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),Object.keys(r).map((function(e,t){return 0===t?c.a.createElement("div",{className:"comic",key:t},c.a.createElement("div",{className:"title"},r.title),c.a.createElement("div",{className:"creators"},"Creators: ",0===r.creators.items.length?"Not Available":r.creators.items.map((function(e,t){return t===r.creators.items.length-1?e.name:e.name+", "}))),c.a.createElement("div",{className:"sale-date name-span"},c.a.createElement("span",null,"Date: "),r.dates.length>0&&r.dates.find((function(e){return"focDate"===e.type}))&&O()(r.dates.find((function(e){return"focDate"===e.type})).date).isValid()?Object(C.a)(new Date(r.dates.find((function(e){return"focDate"===e.type})).date),"dd MMMM yyyy"):"Not Available"),c.a.createElement("div",{className:"price name-span"},c.a.createElement("span",null,"Print Price: "),"$",r.prices.length>0&&r.prices.find((function(e){return"printPrice"===e.type}))&&"number"===typeof r.prices.find((function(e){return"printPrice"===e.type})).price?r.prices.find((function(e){return"printPrice"===e.type})).price.toFixed(2):"Not Available"),c.a.createElement("div",{className:"main-info"},c.a.createElement("img",{key:"{i}",alt:r.title,src:"".concat(r.thumbnail.path,"/detail.").concat(r.thumbnail.extension),className:"img-center",title:r.title}),c.a.createElement("div",{className:"left-info"},c.a.createElement("div",{className:"description"},r.description?r.description:"Description not available")),c.a.createElement("div",{className:"little-marvel"},c.a.createElement("a",{href:0===r.urls.length?"http://marvel.com":r.urls.find((function(e){return"detail"===e.type}))?r.urls.find((function(e){return"detail"===e.type})).url:r.urls[0].url,title:"Open details on Marvel Website",target:"_blank"},"M")),c.a.createElement("div",{className:"characters"},c.a.createElement("h5",null,"Characters"),0===r.characters.items.length?"Not Available":c.a.createElement("ul",null,r.characters.items.map((function(e,t){return c.a.createElement("li",null,e.name)})))))):null}))},P=a(28),S=a.n(P),M=(a(51),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={filteredComics:[],comics:[],inputValue:"",inputHidden:!0,showWindowPortal:!1},e.toggleClass=function(){e.setState({inputHidden:!e.state.inputHidden})},e.onSearchCharacter=function(t){var a=t.target.value;e.setState({inputValue:a}),0===a.length?e.setState({filteredComics:e.state.comics}):e.setState({filteredComics:e.state.comics.filter((function(e){return e.characters.items.find((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))?e:null}))})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=(new Date).getTime(),a=h()(t+"38a050f5b87b111194aafe3856b42d11ba631ccf4167c005c0a07310c876a75896675979");fetch("https://gateway.marvel.com:443/v1/public/comics?apikey=".concat("4167c005c0a07310c876a75896675979","&ts=").concat(t,"&hash=").concat(a)).then((function(e){return e.json()})).then((function(t){e.setState({comics:t.data.results,filteredComics:t.data.results})})).catch(console.log)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"header"},c.a.createElement("img",{src:S.a,alt:"marvel",width:"200"}),c.a.createElement("span",null," COMICS")),c.a.createElement(u.a,null,c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/comic/:comicId"},c.a.createElement(j,null)),c.a.createElement(d.a,{path:"/comic"},c.a.createElement("h3",null,"Please select a comic.")),c.a.createElement(d.a,{path:"/"},c.a.createElement(g,{filteredComics:this.state.filteredComics,inputValue:this.state.inputValue,onSearchCharacter:this.onSearchCharacter,inputHidden:this.state.inputHidden,toggleClass:this.toggleClass,toggleWindowPortal:this.toggleWindowPortal,showWindowPortal:this.state.showWindowPortal})))),c.a.createElement("div",{className:"footer"},"Data provided by Marvel. \xa9 2014 Marvel"))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.24e30a0c.chunk.js.map