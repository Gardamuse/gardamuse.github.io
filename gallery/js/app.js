(function(e){function t(t){for(var i,a,s=t[0],u=t[1],o=t[2],h=0,b=[];h<s.length;h++)a=s[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,o||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},c=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/gallery/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"019c":function(e,t,n){e.exports=n.p+"img/exit.svg"},"070c":function(e,t,n){},"0a24":function(e,t,n){},"19e7":function(e,t,n){e.exports=n.p+"img/image.svg"},"1deb":function(e,t,n){"use strict";n("f668")},"243e":function(e,t,n){},"252b":function(e,t,n){"use strict";n("0a24")},4184:function(e,t,n){e.exports=n.p+"img/toStart.svg"},5830:function(e,t,n){e.exports=n.p+"img/play.svg"},6978:function(e,t,n){e.exports=n.p+"img/video-overlay.svg"},"6a2a":function(e,t,n){"use strict";n("070c")},"9cdc":function(e,t,n){"use strict";n("c701")},a38e:function(e,t,n){},b2f3:function(e,t,n){e.exports=n.p+"img/next.svg"},c701:function(e,t,n){},cc23:function(e,t,n){"use strict";n("a38e")},ccfe:function(e,t,n){e.exports=n.p+"img/back.svg"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),r={id:"sequence-gallery"};function c(e,t,n,c,a,s){var u=Object(i["y"])("router-view");return Object(i["q"])(),Object(i["e"])("div",r,[Object(i["h"])(u,null,{default:Object(i["F"])((function(e){var t=e.Component;return[Object(i["h"])(i["b"],{name:"fade",mode:"out-in"},{default:Object(i["F"])((function(){return[(Object(i["q"])(),Object(i["e"])(Object(i["z"])(t)))]})),_:2},1024)]})),_:1})])}var a=n("d4ec"),s=n("262e"),u=n("2caf"),o=n("9ab4"),l=n("ce1f"),h=Object(i["G"])("data-v-56029ec7");Object(i["u"])("data-v-56029ec7");var b={class:"topbar",onselectstart:"return false"},f={id:"index-counter"},d={class:"image-container",onselectstart:"return false"},p={class:"control-panel"},v={class:"thumbs"},g={class:"textview"},O={class:"info-panel"},j={id:"titlebar"},m={id:"title"},y=Object(i["h"])("div",{class:"comments"},[Object(i["h"])("div",{id:"disqus_thread",class:"comment"})],-1);Object(i["r"])();var x=h((function(e,t,r,c,a,s){var u=this,o=Object(i["y"])("BlushButton"),l=Object(i["y"])("BlushThumb");return void 0!==this.info?(Object(i["q"])(),Object(i["e"])("div",{key:0,id:this.id,class:"image-view"},[Object(i["h"])("div",b,[Object(i["h"])(o,{onClick:t[1]||(t[1]=function(e){return u.exitB()}),id:"exitB",icon:n("019c")},null,8,["icon"]),Object(i["h"])("h3",f,Object(i["B"])(e.player.getCurrentIndex())+" / "+Object(i["B"])(e.player.getLastIndex()),1),Object(i["h"])(o,{onClick:t[2]||(t[2]=function(e){return u.sidebarB()}),id:"sidebarB",icon:n("eab1")},null,8,["icon"])]),Object(i["h"])("div",{class:e.mainview},[Object(i["h"])("div",d,[this.isVideo(e.img)?(Object(i["q"])(),Object(i["e"])("video",{key:0,class:"current-image",controls:"",poster:this.player.getThumb(),src:e.img},null,8,["poster","src"])):(Object(i["q"])(),Object(i["e"])("img",{key:1,class:"current-image",src:e.img},null,8,["src"])),Object(i["h"])("div",p,[!this.isVideo(e.img)&&e.player.activeSequence().getLastIndex()>2?(Object(i["q"])(),Object(i["e"])(o,{key:0,onClick:t[3]||(t[3]=function(e){return u.firstB()}),icon:n("4184")},null,8,["icon"])):Object(i["f"])("",!0),!this.isVideo(e.img)&&e.player.activeSequence().getLastIndex()>1?(Object(i["q"])(),Object(i["e"])(o,{key:1,onClick:t[4]||(t[4]=function(e){return u.prevB()}),id:"prevB",icon:n("ccfe")},null,8,["icon"])):Object(i["f"])("",!0),!this.isVideo(e.img)&&e.paused&&e.player.activeSequence().getLastIndex()>1?(Object(i["q"])(),Object(i["e"])(o,{key:2,onClick:t[5]||(t[5]=function(e){return u.playB()}),id:"playB",icon:n("5830")},null,8,["icon"])):Object(i["f"])("",!0),!this.isVideo(e.img)&&!e.paused&&e.player.activeSequence().getLastIndex()>1?(Object(i["q"])(),Object(i["e"])(o,{key:3,onClick:t[6]||(t[6]=function(e){return u.playB()}),id:"playB",icon:n("ec7e")},null,8,["icon"])):Object(i["f"])("",!0),!this.isVideo(e.img)&&e.player.activeSequence().getLastIndex()>1?(Object(i["q"])(),Object(i["e"])(o,{key:4,onClick:t[7]||(t[7]=function(e){return u.nextB()}),id:"nextB",icon:n("b2f3")},null,8,["icon"])):Object(i["f"])("",!0),!this.isVideo(e.img)&&e.player.activeSequence().getLastIndex()>2?(Object(i["q"])(),Object(i["e"])(o,{key:5,onClick:t[8]||(t[8]=function(e){return u.lastB()}),icon:n("e7cb")},null,8,["icon"])):Object(i["f"])("",!0)])]),this.info.title.length>0?(Object(i["q"])(),Object(i["e"])("div",{key:0,class:e.sidebarClass},[Object(i["h"])("div",v,[(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(this.player.allSequences(),(function(e,t){return Object(i["q"])(),Object(i["e"])("div",null,[Object(i["h"])(l,{sequence:e,onClick:function(e){return u.setTrack(t)}},null,8,["sequence","onClick"])])})),256))])],2)):Object(i["f"])("",!0),Object(i["h"])("div",g,[Object(i["h"])("div",O,[Object(i["h"])("div",j,[Object(i["h"])("h1",m,Object(i["B"])(e.player.getTitle()),1)]),Object(i["h"])("div",{id:"description",innerHTML:e.player.getDescription()},null,8,["innerHTML"])])]),y],2)])):Object(i["f"])("",!0)})),k=(n("a4d3"),n("e01a"),n("96cf"),n("1da1")),q=(n("d3b7"),n("bc3a")),I=n.n(q),w=n("d5d0"),B=n.n(w),S={baseUrl:function(){return"https://www.blushingdefeat.com/gallery"},wait:function(e){return new Promise((function(t,n){setTimeout(t,e)}))},getInfo:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function n(){var i,r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,I.a.get(t.baseUrl()+"/"+e+"/info.hjson",{transformResponse:[function(e){return e}]});case 2:return i=n.sent,r=i.data,c=B.a.parse(r),n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))()},isVideo:function(e){return/\.webm$/i.test(e)}},C=Object(i["G"])("data-v-0991df8a");Object(i["u"])("data-v-0991df8a");var L={class:"blush-button",onselectstart:"return false"};Object(i["r"])();var T=C((function(e,t,n,r,c,a){return Object(i["q"])(),Object(i["e"])("div",L,[Object(i["h"])("img",{src:e.icon,alt:"",class:"svg-2"},null,8,["src"])])})),_=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return n}(l["b"]);_=Object(o["a"])([Object(l["a"])({props:{icon:String},beforeCreate:function(){}})],_);var V=_;n("252b");V.render=T,V.__scopeId="data-v-0991df8a";var P=V,R=Object(i["G"])("data-v-1ae98445");Object(i["u"])("data-v-1ae98445");var M={href:"https://www.patreon.com/gardamuse",style:{display:"block"},class:"patreon-image"};Object(i["r"])();var U=R((function(e,t,n,r,c,a){return Object(i["q"])(),Object(i["e"])("a",M)})),G=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return n}(l["b"]);G=Object(o["a"])([Object(l["a"])({props:{label:String}})],G);var $=G;n("1deb");$.render=U,$.__scopeId="data-v-1ae98445";var D=$,E=(n("99af"),n("b85c")),F=n("bee2"),A=(n("baa5"),n("ac1f"),n("25f0"),n("466d"),n("4d90"),function(){function e(t,n){Object(a["a"])(this,e),this.id=t,this.info=n,this.firstIndex=e.sequenceIndex(this.info.firstImage),this.lastIndex=this.firstIndex+this.info.length,this.index=0}return Object(F["a"])(e,[{key:"goto",value:function(e){return this.index=e,this.index=Math.min(this.index,this.info.length-1),this.index=Math.max(this.index,0),this}},{key:"next",value:function(){return this.goto(this.index+1),this}},{key:"prev",value:function(){return this.goto(this.index-1),this}},{key:"get",value:function(){return e.setSequenceIndex("".concat(S.baseUrl(),"/").concat(this.id,"/").concat(this.info.firstImage),this.getImageIndex())}},{key:"getAll",value:function(){for(var t=[],n=this.firstIndex;n<this.lastIndex;n++)t.push(e.setSequenceIndex("".concat(S.baseUrl(),"/").concat(this.id,"/").concat(this.info.firstImage),n));return t}},{key:"getThumb",value:function(){return"".concat(S.baseUrl(),"/").concat(this.id,"/").concat(this.info.thumb)}},{key:"getCurrentIndex",value:function(){return this.index+1}},{key:"getLastIndex",value:function(){return this.info.length}},{key:"isVideo",value:function(){return S.isVideo(this.info.firstImage)}},{key:"getImageIndex",value:function(){return this.firstIndex+this.index}}],[{key:"prefix",value:function(e,t){var n=e.match(t),i=null===n||void 0===n?void 0:n[n.length-1];if(null!=i){var r=e.lastIndexOf(i);return e.substr(0,r)}return e}},{key:"sequencePrefix",value:function(e){var t=this.prefix(e,/[0-9]*\./g);return t}},{key:"sequenceSuffix",value:function(e){var t=e.lastIndexOf(".");return e.substr(t,e.length)}},{key:"sequenceIndex",value:function(e){var t,n=e.match(/([0-9]*)\./g),i=null===n||void 0===n?void 0:n[n.length-1];return"."==i&&(i="0"),parseFloat((null===(t=i)||void 0===t?void 0:t.toString())||"0")}},{key:"sequenceIndexLength",value:function(e){var t=e.match(/([0-9]*)\./g),n=null===t||void 0===t?void 0:t[t.length-1],i=null===n||void 0===n?void 0:n.length;return i?i-1:0}},{key:"setSequenceIndex",value:function(e,t){var n=this.sequencePrefix(e),i=this.sequenceSuffix(e),r=this.sequenceIndexLength(e),c="";return r>0&&(c=t.toString().padStart(r,"0")),n+c+i}}]),e}()),H=function(){function e(t,n){Object(a["a"])(this,e),this.currentTrackIndex=0,this.sequences=[],this.extra=[],this.id=t,this.info=n;var i,r=0,c=Object(E["a"])(n.sequences);try{for(c.s();!(i=c.n()).done;){var s=i.value,u=s.title?s.title:n.title,o=s.length?s.length:1,l=n.description;s.description&&(l="<p>".concat(s.description,"</p> <p>").concat(n.description,"</p>"));var h=s.thumb?s.thumb:s.firstImage;0==r&&(h=s.thumb?s.thumb:n.thumb?n.thumb:s.firstImage),this.sequences.push(new A(t,{title:u,description:l,length:o,firstImage:s.firstImage,thumb:h})),r+=1}}catch(b){c.e(b)}finally{c.f()}}return Object(F["a"])(e,[{key:"allSequences",value:function(){var e=[];return e=e.concat(this.sequences),e=e.concat(this.extra),e}},{key:"gotoTrack",value:function(e){return this.currentTrackIndex=e,this}},{key:"goto",value:function(e){return this.activeSequence().goto(e),this}},{key:"next",value:function(){return this.activeSequence().next(),this}},{key:"prev",value:function(){return this.activeSequence().prev(),this}},{key:"get",value:function(){return this.activeSequence().get()}},{key:"getThumb",value:function(){return this.activeSequence().getThumb()}},{key:"getTitle",value:function(){return this.info.title}},{key:"getDescription",value:function(){return this.activeSequence().info.description}},{key:"getCurrentIndex",value:function(){return this.activeSequence().getCurrentIndex()}},{key:"getLastIndex",value:function(){return this.activeSequence().getLastIndex()}},{key:"primaryLength",value:function(){return this.sequences[0].getLastIndex()}},{key:"secondaryLength",value:function(){return this.totalLength()-this.primaryLength()}},{key:"totalLength",value:function(){var e,t=0,n=Object(E["a"])(this.sequences);try{for(n.s();!(e=n.n()).done;){var i=e.value;t+=i.getLastIndex()}}catch(r){n.e(r)}finally{n.f()}return t}},{key:"activeSequence",value:function(){return this.sequences[this.currentTrackIndex]}}]),e}(),J=n("6978"),z=n.n(J),K=n("19e7"),N=n.n(K),Q=Object(i["G"])("data-v-35f5f384");Object(i["u"])("data-v-35f5f384");var W={class:"thumb-container"},X={key:1,class:"thumb-overlay",src:z.a},Y={class:"thumb-title"},Z={class:"thumb-footer"},ee={key:0},te={key:0},ne=Object(i["h"])("img",{class:"svg-2",src:N.a},null,-1);Object(i["r"])();var ie=Q((function(e,t,n,r,c,a){return Object(i["q"])(),Object(i["e"])("div",W,[this.isVideo(this.player.getThumb())?Object(i["f"])("",!0):(Object(i["q"])(),Object(i["e"])("img",{key:0,class:"thumb",src:this.player.getThumb()},null,8,["src"])),this.player.isVideo()?(Object(i["q"])(),Object(i["e"])("img",X)):Object(i["f"])("",!0),Object(i["h"])("div",Y,[Object(i["h"])("h3",null,Object(i["B"])(e.player.info.title),1)]),Object(i["h"])("div",Z,[this.hasCollection()?(Object(i["q"])(),Object(i["e"])("p",ee,[Object(i["g"])(Object(i["B"])(e.collection.primaryLength())+" ",1),e.collection.secondaryLength()>0?(Object(i["q"])(),Object(i["e"])("span",te,"(+"+Object(i["B"])(e.collection.secondaryLength())+")",1)):Object(i["f"])("",!0),ne])):Object(i["f"])("",!0)])])})),re=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return n}(l["b"]);re=Object(o["a"])([Object(l["a"])({props:{collection:H,sequence:A},methods:{isVideo:function(e){return S.isVideo(e)},hasCollection:function(){return void 0!=this.collection}},created:function(){void 0!=this.collection?this.player=this.collection.activeSequence():this.player=this.sequence}})],re);var ce=re;n("cc23");ce.render=ie,ce.__scopeId="data-v-35f5f384";var ae=ce,se=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.img="",e.description="",e.info={title:"",sequences:[{firstImage:""}]},e.player=new H("none",e.info),e.paused=!0,e.sidebarClass="sidebar-shown",e.mainview="mainview-small",e}return n}(l["b"]);se=Object(o["a"])([Object(l["a"])({components:{BlushButton:P,PatreonButton:D,BlushThumb:ae},props:{},methods:{log:function(e){console.log(e)},play:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S.wait(200);case 2:if(e.player.getCurrentIndex()!=e.player.getLastIndex()){t.next=12;break}return t.next=5,S.wait(200);case 5:if(!e.paused){t.next=7;break}return t.abrupt("return");case 7:return e.firstB(),t.next=10,S.wait(800);case 10:if(!e.paused){t.next=12;break}return t.abrupt("return");case 12:return e.nextB(),t.next=15,S.wait(800);case 15:e.paused||e.play();case 16:case"end":return t.stop()}}),t)})))()},playB:function(){this.paused=!this.paused,this.paused||this.play()},firstB:function(){this.img=this.player.goto(0).get()},lastB:function(){this.img=this.player.goto(this.player.getLastIndex()).get()},prevB:function(){this.img=this.player.prev().get()},nextB:function(){this.img=this.player.next().get()},exitB:function(){this.$router.push("/")},sidebarB:function(){"sidebar-hidden"==this.sidebarClass?(this.sidebarClass="sidebar-shown",this.mainview="mainview-small"):(this.sidebarClass="sidebar-hidden",this.mainview="mainview-large")},showImage:function(e){this.img=e},isVideo:function(e){return S.isVideo(e)},setTrack:function(e){this.img=this.player.gotoTrack(e).get(),this.description=this.player.getDescription()}},beforeCreate:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.id=e.$route.params.id,t.next=3,S.getInfo(e.id);case 3:e.info=t.sent,e.description=e.info.description,e.player=new H(e.id,e.info),e.img=e.player.get();case 7:case"end":return t.stop()}}),t)})))()},mounted:function(){S.baseUrl(),this.$route.href.substring(1);(function(){var e=document,t=e.createElement("script");t.src="https://gardamuse.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)})()}})],se);var ue=se;n("6a2a");ue.render=x,ue.__scopeId="data-v-56029ec7";var oe=ue,le=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return n}(l["b"]);le=Object(o["a"])([Object(l["a"])({components:{ImageView:oe},methods:{beforeEnter:function(){this.$root.$emit("scrollBeforeEnter")}}})],le);var he=le;n("9cdc");he.render=c;var be=he,fe=n("6c02"),de=Object(i["G"])("data-v-a68f4a78");Object(i["u"])("data-v-a68f4a78");var pe={id:"gallery",class:"gallery"},ve={class:"thumbs"};Object(i["r"])();var ge=de((function(e,t,n,r,c,a){var s=Object(i["y"])("BlushThumb"),u=Object(i["y"])("router-link");return Object(i["q"])(),Object(i["e"])("div",pe,[Object(i["h"])("div",ve,[(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["x"])(e.allCollections,(function(e){return Object(i["q"])(),Object(i["e"])("div",null,[Object(i["h"])(u,{to:"/"+e.id},{default:de((function(){return[Object(i["h"])(s,{collection:e},null,8,["collection"])]})),_:2},1032,["to"])])})),256))])])})),Oe=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.sequences=[],e.allCollections=[],e}return n}(l["b"]);Oe=Object(o["a"])([Object(l["a"])({components:{BlushButton:P,BlushThumb:ae},props:{},methods:{getThumb:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S.getInfo(e);case 2:return n=t.sent,t.abrupt("return","".concat(S.baseUrl(),"/").concat(e).concat(n.thumb));case 4:case"end":return t.stop()}}),t)})))()}},beforeCreate:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,i,r,c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.a.get(S.baseUrl()+"/gallery-info.json");case 2:n=t.sent,e.sequences=n.data.sequences,i=Object(E["a"])(e.sequences),t.prev=5,i.s();case 7:if((r=i.n()).done){t.next=15;break}return c=r.value,t.next=11,S.getInfo(c);case 11:a=t.sent,e.allCollections.push(new H(c,a));case 13:t.next=7;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](5),i.e(t.t0);case 20:return t.prev=20,i.f(),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[5,17,20,23]])})))()}})],Oe);var je=Oe;n("db53");je.render=ge,je.__scopeId="data-v-a68f4a78";var me=je,ye=[{path:"/",name:"Gallery",component:me},{path:"/:id",name:"Image View",component:oe}],xe=Object(fe["a"])({history:Object(fe["b"])("/gallery/"),routes:ye}),ke=xe;i["d"](be).use(ke).mount("#app")},db53:function(e,t,n){"use strict";n("243e")},e7cb:function(e,t,n){e.exports=n.p+"img/toEnd.svg"},eab1:function(e,t,n){e.exports=n.p+"img/hamburger.svg"},ec7e:function(e,t,n){e.exports=n.p+"img/pause.svg"},f668:function(e,t,n){}});
//# sourceMappingURL=app.js.map