"use strict";(self.webpackChunkfreelancer_ui=self.webpackChunkfreelancer_ui||[]).push([[592],{2809:(C,m,s)=>{s.d(m,{s:()=>p});var t=s(5879),h=s(4642);let p=(()=>{var a;class _{constructor(u,n){this.element=u,this.service=n}ngOnInit(){this.service.viewport=this.element.nativeElement}}return(a=_).\u0275fac=function(u){return new(u||a)(t.Y36(t.SBq),t.Y36(h.a))},a.\u0275dir=t.lG2({type:a,selectors:[["","appOutlineArea",""]]}),_})()},4305:(C,m,s)=>{s.d(m,{N:()=>p});var t=s(4642),h=s(5879);let p=(()=>{var a;class _{}return(a=_).\u0275fac=function(u){return new(u||a)},a.\u0275dir=h.lG2({type:a,selectors:[["","appOutlineHost",""]],features:[h._Bn([t.a])]}),_})()},8904:(C,m,s)=>{s.d(m,{a:()=>_});var t=s(5879),h=s(4642),p=s(6814);function a(l,u){if(1&l&&(t.TgZ(0,"div",1),t._uU(1),t.qZA()),2&l){const n=t.oxw();t.xp6(1),t.hij(" ",n.outline.title,"\n")}}let _=(()=>{var l;class u{constructor(r){this.outline=r}}return(l=u).\u0275fac=function(r){return new(r||l)(t.Y36(h.a))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-outline-mobile"]],decls:1,vars:1,consts:[["class","content",4,"ngIf"],[1,"content"]],template:function(r,c){1&r&&t.YNc(0,a,2,1,"div",0),2&r&&t.Q6J("ngIf",c.outline.shouldDisplay)},dependencies:[p.O5],styles:["[_nghost-%COMP%]{display:block;background:#448aff;color:#fff}.content[_ngcontent-%COMP%]{padding:.5em 1em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]}),u})()},5192:(C,m,s)=>{s.d(m,{D:()=>u});var t=s(5879),h=s(4642),p=s(6814);let a=(()=>{var n;class r{constructor(o){this.elementRef=o,this._active=!1}get active(){return this._active}set active(o){this._active!==o&&(this._active=o,this._active&&this.elementRef.nativeElement.scrollIntoView({block:"nearest"}))}}return(n=r).\u0275fac=function(o){return new(o||n)(t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n,selectors:[["","appShowWhenActive",""]],inputs:{active:["appShowWhenActive","active"]}}),r})(),_=(()=>{var n;class r{transform(o){return`outline-${o.tagName.toLowerCase()}`}}return(n=r).\u0275fac=function(o){return new(o||n)},n.\u0275pipe=t.Yjl({name:"outlineCss",type:n,pure:!0}),r})();function l(n,r){if(1&n){const c=t.EpF();t.TgZ(0,"li",2)(1,"a",3),t.NdJ("click",function(){const M=t.CHM(c).$implicit,P=t.oxw();return t.KtG(P.jumpTo(M.anchor))}),t.ALo(2,"outlineCss"),t._uU(3),t.qZA()()}if(2&n){const c=r.$implicit,o=t.oxw();t.ekj("active",o.isActive(c)),t.xp6(1),t.Gre("nav-link  ",t.lcZ(2,10,c.element),""),t.ekj("active",o.isActive(c)),t.Q6J("appShowWhenActive",o.isActive(c))("title",c.title),t.xp6(2),t.Oqu(c.title)}}let u=(()=>{var n;class r{constructor(o){this.outline=o}get items(){return this.outline.items}ngOnInit(){}jumpTo(o){location.hash="#"+o}isActive(o){return this.outline.isActive(o)}trackByElement(o,d){return d.element}}return(n=r).\u0275fac=function(o){return new(o||n)(t.Y36(h.a))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-outline"]],decls:2,vars:2,consts:[[1,"nav"],["class","nav-item",3,"active",4,"ngFor","ngForOf","ngForTrackBy"],[1,"nav-item"],["href","javascript:void(0)",3,"appShowWhenActive","title","click"]],template:function(o,d){1&o&&(t.TgZ(0,"ul",0),t.YNc(1,l,4,12,"li",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",d.items)("ngForTrackBy",d.trackByElement))},dependencies:[p.sg,a,_],styles:['[_nghost-%COMP%]{display:block;padding-left:3px}ul.nav[_ngcontent-%COMP%]{list-style:none;padding:0;border-left:1px solid rgba(0,0,0,.12)}ul.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{position:relative}ul.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:before{position:absolute;content:"";display:block;left:-3px;top:0;bottom:0;height:6px;width:6px;margin:auto;border-radius:50%}ul.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover:before{background:#fafafa}ul.nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]:before{background:#448aff}ul.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{display:block;text-decoration:none;color:#757575;margin:0 1em;padding:.5em 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}ul.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, ul.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#448aff}ul.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.outline-h1[_ngcontent-%COMP%]{padding-bottom:.5em;margin-bottom:.5em;border-bottom:1px solid rgba(0,0,0,.12)}ul.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.outline-h3[_ngcontent-%COMP%]{padding-left:1em}ul.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.outline-h4[_ngcontent-%COMP%]{padding-left:2em}ul.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.outline-h5[_ngcontent-%COMP%]{padding-left:2.5em}ul.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.outline-h6[_ngcontent-%COMP%]{padding-left:3em}']}),r})()},4642:(C,m,s)=>{s.d(m,{a:()=>c});var t=s(8645),h=s(2438),p=s(3019),a=s(3620),_=s(9397),l=s(9773),u=s(6814),n=s(5879),r=s(7131);let c=(()=>{var i;class g{constructor(e,v){this.observer=e,this.document=v,this.selector=M,this.destroyed$=new t.x,this.shouldDisplay=!1,this._items=[],this._changes$=new t.x}get activeItem(){return this._activeItem}set activeItem(e){this._activeItem!==e&&(this._activeItem=e,this.changed())}get viewport(){return this._viewport}set viewport(e){this._viewport!==e&&(this._viewport=e,this.watch(e),this.changed())}get items(){return this._items}set items(e){this._items!==(e=e||[])&&(function o(i,g){if(i.length!==g.length)return!1;for(let O=0;O<i.length;++O){const e=i[O]||d,v=g[O]||d;if(e.title!==v.title||e.anchor!==v.title)return!1}}(this._items,e),this._items=e,this.changed())}get changes$(){return this._changes$}ngOnDestroy(){this.destroyed$.next()}updateItems(){const e=this._viewport?.querySelectorAll(this.selector);this.items=Array.from(e).map(v=>function D(i){const g=function I(i){return i instanceof HTMLAnchorElement?i.getAttribute("name")??"":i instanceof HTMLHeadingElement?i.id:i.hasAttribute("uiOutlineAnchor")?i.getAttribute("uiOutlineAnchor")||i.id:""}(i);if(g)return{element:i,title:P(i),anchor:g}}(v)).filter(v=>!!v)}isActive(e){return this._activeItem===e}updateActiveItem(){this.activeItem=this.findActiveItem();const e=this.items.indexOf(this.activeItem);this.shouldDisplay=!!this.activeItem&&"H1"!==this.activeItem.element.tagName&&e>0,this.title=this.activeItem?`(${e+1}/${this.items.length}) ${this.activeItem.title}`:""}changed(){this._changes$.next(this)}watch(e){this._viewport=e,this.observer.observe(e).pipe((0,a.b)(100),(0,_.b)(()=>this.updateItems()),(0,l.R)(this.destroyed$)).subscribe();const v=[...E(this.viewport),this.document].map(f=>(0,h.R)(f,"scroll"));(0,p.T)(...v).pipe((0,_.b)(()=>this.updateActiveItem()),(0,l.R)(this.destroyed$)).subscribe()}findActiveItem(){const e=this.items.filter(f=>f.element.getBoundingClientRect().top>=0);return e.length?e.sort((f,A)=>f.element.scrollTop-A.element.scrollTop)[0]:this.items[this.items.length-1]}}return(i=g).\u0275fac=function(e){return new(e||i)(n.LFG(r.yq),n.LFG(u.K0))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac}),g})();const d={title:"",anchor:""},M="a[name],h1[id],h2[id],h3[id],h4[id],h5[id],h6[id],[uiOutlineAnchor]";function P(i){return(i.textContent??"").replace(/link$/,"")||i.title||(i.getAttribute("aria-label")??"")}function E(i){return i?[i,...E(i.parentElement)]:[]}}}]);