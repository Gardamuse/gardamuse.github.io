(function(t){function e(e){for(var i,c,r=e[0],o=e[1],u=e[2],d=0,h=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&h.push(n[c][0]),n[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},s=[];function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/play/ditzy-dice/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"25d7":function(t,e,a){"use strict";a("e3d9")},"2ba2":function(t,e,a){},"59aa":function(t,e,a){},"60bf":function(t,e,a){},9009:function(t,e,a){t.exports=a.p+"img/flowers.png"},"92d9":function(t,e,a){"use strict";a("93f3")},"93f3":function(t,e,a){},"9a5e":function(t,e,a){"use strict";a("9d3a")},"9d3a":function(t,e,a){},a17f:function(t,e,a){t.exports=a.p+"img/black-felt.png"},a4c7:function(t,e,a){"use strict";a("ef94")},ba9d:function(t,e,a){t.exports=a.p+"img/patreon-banner.webp"},c235:function(t,e,a){"use strict";a("fa32")},cc08:function(t,e,a){"use strict";a("59aa")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("7a23");function n(t,e,a,n,s,c){var r=Object(i["x"])("Milkfarm");return Object(i["o"])(),Object(i["d"])("div",{id:"milkfarm-app",style:t.cssVars},[Object(i["f"])(r)],4)}var s=a("d4ec"),c=a("262e"),r=a("2caf"),o=a("9ab4"),u=a("ce1f"),l=Object(i["D"])("data-v-ac9e4552");Object(i["s"])("data-v-ac9e4552");var d={class:"cards-wrapper drawn-cards"},h={class:"window dialogue"},f={class:"text"},b={class:"round-counter"},v={key:0},g={key:1,style:{margin:"0",padding:"0"}},p={key:0,class:"cards-to-pick"},y={key:1,class:"bonus-rolls"},k={style:{margin:"0"}},m={class:"cards-wrapper picked-cards"},O={class:"dices"},j=Object(i["f"])("p",null,"+",-1),w={class:"window credits"},x=Object(i["f"])("h2",{style:{margin:"0"}},"Credits",-1),C=Object(i["f"])("div",null,[Object(i["f"])("p",null,"Artist"),Object(i["f"])("p",null,"Artist"),Object(i["f"])("p",null,"Artist")],-1);Object(i["p"])();var S=l((function(t,e,a,n,s,c){var r=Object(i["x"])("PlayingCard"),o=Object(i["x"])("TextButton"),u=Object(i["x"])("DiceView"),S=Object(i["x"])("PatreonButton");return t.isLoaded?(Object(i["o"])(),Object(i["d"])("div",{key:0,class:["milkfarm",{"dialogue-only":t.game.showDialogueOnly,"start-menu":"stage1"===t.game.stageId}]},[Object(i["f"])("div",d,[Object(i["f"])("div",{class:["cards",{tight:t.game.state.drawnCards.length>8}]},[(Object(i["o"])(!0),Object(i["d"])(i["a"],null,Object(i["v"])(t.game.drawnCards,(function(e){return Object(i["o"])(),Object(i["d"])(r,{key:e,card:e,class:{scaled:e.scale},onClick:function(a){t.toggleScale(e),t.game.clickCard(e)}},null,8,["card","class","onClick"])})),128))],2)]),Object(i["f"])("div",h,[Object(i["f"])("div",f,Object(i["z"])(t.game.currentDialogue),1),Object(i["f"])("div",b,[t.game.round.value>0?(Object(i["o"])(),Object(i["d"])("h3",v,Object(i["z"])(t.game.roundString),1)):(Object(i["o"])(),Object(i["d"])("h1",g,"Ditzy Dice"))]),t.game.state.cardsToPick>0?(Object(i["o"])(),Object(i["d"])("div",p,[Object(i["f"])("h3",null,"Picked "+Object(i["z"])(t.game.state.cardsPickedThisRound)+" of "+Object(i["z"])(t.game.state.cardsToPick)+" cards",1)])):Object(i["e"])("",!0),t.game.round.value>0&&"bonus"!==t.game.stageId?(Object(i["o"])(),Object(i["d"])("div",y,[Object(i["f"])("h3",null,"Bonus rolls: "+Object(i["z"])(t.game.state.bonusRolls.value)+" / "+Object(i["z"])(t.game.state.bonusRolls.max),1)])):Object(i["e"])("",!0),t.game.allowNextStage()?(Object(i["o"])(),Object(i["d"])(o,{key:2,class:"next-button",onClick:e[1]||(e[1]=function(e){return t.game.nextStage()})},{default:l((function(){return[Object(i["f"])("p",k,Object(i["z"])(t.game.buttonLabel),1)]})),_:1})):Object(i["e"])("",!0)]),Object(i["f"])("div",m,[Object(i["f"])("div",{class:["cards",{tight:t.game.state.pickedCards.length>5}]},[(Object(i["o"])(!0),Object(i["d"])(i["a"],null,Object(i["v"])(t.game.state.pickedCards,(function(e){return Object(i["o"])(),Object(i["d"])(r,{key:e,card:e,class:{scaled:e.scale},onClick:function(a){return t.toggleScale(e)}},null,8,["card","class","onClick"])})),128))],2)]),Object(i["f"])("div",O,[(Object(i["o"])(!0),Object(i["d"])(i["a"],null,Object(i["v"])(t.game.state.dice,(function(t){return Object(i["o"])(),Object(i["d"])(u,{key:t,dice:t},null,8,["dice"])})),128)),t.game.allowDiceBuy()?(Object(i["o"])(),Object(i["d"])("div",{key:0,class:"dice-view add-dice",onClick:e[2]||(e[2]=function(e){return t.game.buyDice()})},[j])):Object(i["e"])("",!0)]),Object(i["f"])("div",w,[x,Object(i["f"])(S),C])],2)):Object(i["e"])("",!0)})),_=(a("96cf"),a("1da1")),R=(a("99af"),a("c740"),a("b0c0"),a("9911"),a("b85c")),D=a("bee2"),P=(a("a4d3"),a("e01a"),a("a434"),a("5530")),T=(a("7db0"),a("a9e3"),a("b680"),a("d3b7"),a("ac1f"),a("25f0"),a("4d90"),a("5319"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("bc3a")),V=a.n(T),M=a("d5d0"),N=a.n(M),B={baseUrl:function(){return"https://www.blushingdefeat.com/play/ditzy-dice"},wait:function(t){return new Promise((function(e,a){setTimeout(e,t)}))},fetchHjson:function(t){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function a(){var i,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,V.a.get(e.baseUrl()+"/"+t,{transformResponse:[function(t){return t}]});case 2:return i=a.sent,n=i.data,s=N.a.parse(n),a.abrupt("return",s);case 6:case"end":return a.stop()}}),a)})))()},getInfo:function(t){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.fetchHjson(t+"/info.hjson");case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))()},isVideo:function(t){return/\.webm$/i.test(t)},sample:function(t){return t[Math.floor(Math.random()*t.length)]},timeToDays:function(t){return t/60},currentDate:function(t){var e=Math.floor(this.timeToDays(t)),a=t%60/60*24,i=Math.floor(a),n=60*(a-i);return"Day ".concat(e,", ").concat(i.toFixed(0).padStart(2,"0"),":").concat(n.toFixed(0).padStart(2,"0"))},displayTime:function(t){var e=Math.floor(this.timeToDays(t)),a=t%60/60*24,i=Math.floor(a),n=60*(a-i),s="";return 1==e&&(s+="".concat(e," day")),e>1&&(s+="".concat(e," days")),e>=1&&i>0&&(s+=", "),1==i&&(s+="".concat(i," hour")),i>1&&(s+="".concat(i," hours")),0==e&&0==i&&(s="".concat(n," minutes")),s},uuid:function(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,(function(t){return(Number(t)^crypto.getRandomValues(new Uint8Array(1))[0]&15>>Number(t)/4).toString(16)}))},capitalize:function(t){return t.charAt(0).toUpperCase()+t.substr(1)},pickFrom:function(t,e){var a=this.clamp(Math.round(e*(t.length-1)),0,t.length-1);return t[a]},clamp:function(t,e,a){return Math.max(Math.min(t,a),e)},showNumber:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return void 0==e&&(e=t),e<1?t.toFixed(2):e<10?t.toFixed(1):t.toFixed(0)},ensure:function(t,e){return e.find((function(e){return e==t}))?t:e[0]},shuffle:function(t){var e,a,i=t.length;while(0!==i)a=Math.floor(Math.random()*i),i-=1,e=t[i],t[i]=t[a],t[a]=e;return t}},z=Object(i["t"])({loading:!0,cardFamilyString:"",dialogueString:""});function A(){var t=function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n,s,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return z.loading=!0,t.next=3,B.fetchHjson("cards/series.hjson");case 3:e=t.sent,a=[],i=Object(R["a"])(e),t.prev=6,i.s();case 8:if((n=i.n()).done){t.next=16;break}return s=n.value,t.next=12,B.fetchHjson("cards/".concat(s));case 12:c=t.sent,a.push(c);case 14:t.next=8;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](6),i.e(t.t0);case 21:return t.prev=21,i.f(),t.finish(21);case 24:return z.cardFamilyString=JSON.stringify(a),t.next=27,B.fetchHjson("dialogue.hjson");case 27:r=t.sent,z.dialogueString=JSON.stringify(r),z.loading=!1;case 30:case"end":return t.stop()}}),t,null,[[6,18,21,24]])})));return function(){return t.apply(this,arguments)}}();return Object(P["a"])(Object(P["a"])({},Object(i["A"])(z)),{},{load:t})}var L=function(){function t(e){Object(s["a"])(this,t),this.scale=!1,this.highlight=!1,this.family=e.family?e.family:"None",this.thumb=e.thumb,this.name=e.name,this.description=e.description,this.levels=e.levels?e.levels:[],this.type=e.type?e.type:"single",this.parent=e.parent,this.hue=e.hue?e.hue:0,this.artist=e.artist?e.artist:"Gardamuse"}return Object(D["a"])(t,[{key:"getLevel",value:function(t){return"single"!=this.type&&t<this.levels.length?this.levels[t]:this}},{key:"title",get:function(){return this.hasParent?"".concat(this.parent.name):this.name}},{key:"subtitle",get:function(){return this.hasParent?"".concat(this.name):""}},{key:"level",get:function(){var t=this;return this.hasParent?this.parent.levels.findIndex((function(e){return e.name==t.name}))+1:0}},{key:"maxLevel",get:function(){return this.hasParent?this.parent.levels.length:this.levels.length}},{key:"levelString",get:function(){return"single"==this.type?"1":this.isParent?this.maxLevel.toFixed(0):"".concat(this.level," / ").concat(this.maxLevel)}},{key:"hasParent",get:function(){return void 0!=this.parent}},{key:"isParent",get:function(){return"single"!=this.type&&this.levels.length>0}}]),t}(),I=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;Object(s["a"])(this,t),this.cards=void 0!=e?e:this.parseCards()}return Object(D["a"])(t,[{key:"withoutFamily",value:function(e){var a,i=[],n=Object(R["a"])(this.cards);try{for(n.s();!(a=n.n()).done;){var s=a.value;s.family.name!=e&&i.push(s)}}catch(c){n.e(c)}finally{n.f()}return new t(i)}},{key:"pick",value:function(t){for(var e=[],a=0;a<this.cards.length;a++){var i,n=Object(R["a"])(t);try{for(n.s();!(i=n.n()).done;){var s=i.value;a==s-1&&e.push(this.cards[a])}}catch(c){n.e(c)}finally{n.f()}}return e}},{key:"draw",value:function(t){for(var e=[],a=0;a<t;a++){var i=this.cards.pop();if(void 0==i)break;e.push(i)}return e}},{key:"drawIndex",value:function(t){return this.cards.splice(t,1)[0]}},{key:"removeCard",value:function(t){var e=this.cards.findIndex((function(e){return e.name==t.name&&e.description==t.description}));-1!=e&&this.drawIndex(e)}},{key:"size",value:function(){return this.cards.length}},{key:"shuffle",value:function(){this.cards=B.shuffle(this.cards)}},{key:"parseCards",value:function(){var t,e=JSON.parse(A().cardFamilyString.value),a=[],i=Object(R["a"])(e);try{for(i.s();!(t=i.n()).done;){var n,s=t.value,c=Object(R["a"])(s.cards);try{for(c.s();!(n=c.n()).done;){var r=n.value,o=[];if(void 0!=r.levels){var u,l=Object(R["a"])(r.levels);try{for(l.s();!(u=l.n()).done;){var d=u.value;o.push(new L({family:s,thumb:d.thumb?"cards/".concat(d.thumb):r.thumb?"cards/".concat(r.thumb):"cards/".concat(s.thumb),name:d.name,description:d.description,type:r.type,levels:[],parent:r,hue:s.hue,artist:d.artist?d.artist:r.artist?r.artist:s.artist?s.artist:"Gardamuse"}))}}catch(h){l.e(h)}finally{l.f()}}a.push(new L({family:s,thumb:r.thumb?"cards/".concat(r.thumb):"cards/".concat(s.thumb),name:r.name,description:r.description,type:r.type,levels:o,hue:s.hue,artist:r.artist?r.artist:s.artist?s.artist:"Gardamuse"}))}}catch(h){c.e(h)}finally{c.f()}}}catch(h){i.e(h)}finally{i.f()}return a}},{key:"pickableCards",get:function(){var t,e=[],a=Object(R["a"])(this.cards);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.isParent||e.push(i);for(var n=0;n<i.levels.length;n++)e.push(i.getLevel(n))}}catch(s){a.e(s)}finally{a.f()}return e}},{key:"allLevels",get:function(){var t,e=[],a=Object(R["a"])(this.cards);try{for(a.s();!(t=a.n()).done;){var i=t.value;e.push(i);for(var n=0;n<i.levels.length;n++)e.push(i.getLevel(n))}}catch(s){a.e(s)}finally{a.f()}return e}}]),t}(),F=function(){function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;Object(s["a"])(this,t),this._value=1,this._locked=!1,this.isRolling=!1,this.valueUsed=!0,this.max=e,this.game=a}return Object(D["a"])(t,[{key:"load",value:function(t){this.game=t}},{key:"roll",value:function(){this.isRolling||this.locked||(this.isRolling=!0,this.rollingDice(10))}},{key:"useValue",value:function(){return this.valueUsed=!0,this.value}},{key:"rollingDice",value:function(t){var e=this;t>0?(this._value=t,setTimeout((function(){e.rollingDice(t-1)}),50)):(this._value=Math.floor(Math.random()*this.max)+1,this.valueUsed=!1,this.game.notifyDiceRoll(this.value),this.isRolling=!1)}},{key:"isUsed",get:function(){return this.valueUsed}},{key:"locked",set:function(t){this._locked=t},get:function(){return this._locked||!this.isUsed}},{key:"value",get:function(){return this._value}},{key:"rolling",get:function(){return this.isRolling}}]),t}(),U=function(){function t(e){Object(s["a"])(this,t),this.id="stage",this.args={},this._allowNext=!0,this._allowDiceBuy=!1,this.buttonLabel="Next",this.game=e}return Object(D["a"])(t,[{key:"onStart",value:function(){}},{key:"onResume",value:function(){}},{key:"onDiceRoll",value:function(t){}},{key:"onCardClick",value:function(t){}},{key:"output",value:function(){}},{key:"link",value:function(t){return this._nextStage=t,t}},{key:"resumeStage",value:function(t){t.onResume(),this.game.setStage(t)}},{key:"nextStage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;void 0!=t?this.gotoNext(t,e):void 0!=this._nextStage?this.gotoNext(this._nextStage,e):this.game.setStage(this)}},{key:"allowNext",value:function(){return this._allowNext}},{key:"allowDiceBuy",value:function(){return this._allowDiceBuy}},{key:"gotoNext",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;t.args=void 0!=e?e:this.output(),t.onStart(),this.game.setStage(t)}},{key:"text",get:function(){return""}}]),t}(),H=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(t){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(s["a"])(this,a),i=e.call(this,t),i._text=n,i}return Object(D["a"])(a,[{key:"text",get:function(){return this._text}}]),a}(U),E=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(t){var i;return Object(s["a"])(this,a),i=e.call(this,t,""),i.deck=new I([]),i.done=!1,i}return Object(D["a"])(a,[{key:"onStart",value:function(){this.pickStage=this.args.pickStage,this.parentCard=this.args.parentCard,this._allowDiceBuy=void 0==this.args.allowDiceBuy||this.args.allowDiceBuy,this._text="Ah, you got ".concat(this.parentCard.name,". ").concat(this.game.dialogue["intensityStage"]),this.done=!1,this.deck=new I(this.parentCard.levels),this.game.state.drawnCards=this.deck.cards,this.game.diceCount=1,this.game.diceSize=this.deck.size(),this._allowNext=!1}},{key:"onDiceRoll",value:function(t){if(!this.done){this.done=!0,this.game.lockDice(!0);var e=this.deck.pick(t);this.nextStage(new G(this.game),{pickStage:this.pickStage,highlightedCards:e})}}}]),a}(H),G=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(t){var i;return Object(s["a"])(this,a),i=e.call(this,t,""),i.highlightedCards=[],i.done=!1,i}return Object(D["a"])(a,[{key:"onStart",value:function(){this.pickStage=this.args.pickStage,this.highlightedCards=this.args.highlightedCards,this._allowDiceBuy=void 0==this.args.allowDiceBuy||this.args.allowDiceBuy,1==this.highlightedCards.length?this._text="Ah, you got ".concat(this.highlightedCards[0].name,". Click on it to add it to your hand."):this._text="Because you rolled multiple dice you now get to choose one of the highlighted cards. Click on the one you want to add to your hand.";var t,e=Object(R["a"])(this.highlightedCards);try{for(e.s();!(t=e.n()).done;){var a=t.value;a.highlight=!0}}catch(i){e.e(i)}finally{e.f()}this.done=!1,this._allowNext=!1}},{key:"onCardClick",value:function(t){if(t.highlight){var e,a=Object(R["a"])(this.highlightedCards);try{for(a.s();!(e=a.n()).done;){var i=e.value;i.highlight=!1,i.scale=!1}}catch(n){a.e(n)}finally{a.f()}t.isParent?(this.pickStage.deck.removeCard(t),this.nextStage(new E(this.game),{pickStage:this.pickStage,parentCard:t,allowDiceBuy:this._allowDiceBuy})):(this.pickStage.deck.removeCard(t),this.game.pickCard(t),this.resumeStage(this.pickStage))}}}]),a}(H),J=a("45eb"),Y=a("7e84"),$=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(t){var i;return Object(s["a"])(this,a),i=e.call(this,t,""),i.pickedCards=[],i.leftToPick=0,i.deck=new I([]),i}return Object(D["a"])(a,[{key:"onStart",value:function(){this._text=this.game.dialogue["endStage"],this._nextStage=this.game.stage1,this.buttonLabel="The End"}},{key:"nextStage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.game.restart(),Object(J["a"])(Object(Y["a"])(a.prototype),"nextStage",this).call(this,t,e)}}]),a}(H),q=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(t){var i;return Object(s["a"])(this,a),i=e.call(this,t,""),i.pickedCards=[],i.leftToPick=0,i.deck=new I([]),i.id="bonus",i}return Object(D["a"])(a,[{key:"onStart",value:function(){this._text=this.game.dialogue["bonusStage"],this.deck=new I(this.game.deck.withoutFamily("Reward").draw(12)),this.game.state.drawnCards=this.deck.cards,this.game.round.addValue(1),this.game.state.cardsPickedThisRound=0,this.leftToPick=this.game.state.bonusRolls.value,this.game.state.cardsToPick=this.leftToPick,this.game.diceCount=2,this.game.diceSize=this.deck.size(),this._allowDiceBuy=!1,this._allowNext=!1,0==this.leftToPick&&this.onResume()}},{key:"onResume",value:function(){this.game.state.drawnCards=this.deck.cards,this.game.diceCount=2,this.game.diceSize=this.deck.size(),0==this.leftToPick&&(this.game.state.drawnCards=[],this.game.diceCount=0,this._text="Take a moment now, look at your cards.\n\nRead each one, if you still can read, that is.",this._nextStage=new $(this.game),this._allowNext=!0,this.game.lockDice(!0))}},{key:"onDiceRoll",value:function(t){this.leftToPick>0&&(this.leftToPick-=1,this.pickedCards=this.deck.pick(t),this.game.lockDice(!0),this.nextStage(new G(this.game),{pickStage:this,highlightedCards:this.pickedCards,allowDiceBuy:!1}))}}]),a}(H),X=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(t){var i;return Object(s["a"])(this,a),i=e.call(this,t,""),i.pickedCards=[],i.leftToPick=0,i.diceCount=1,i.deck=new I([]),i}return Object(D["a"])(a,[{key:"onStart",value:function(){this._text=this.game.dialogue["pickStage"],this.deck=new I(this.args.drawnCards),this.leftToPick=this.args.cardsToPick,this.pickedCards=[],this.diceCount=1,this.game.diceCount=this.diceCount,this.game.diceSize=this.deck.size(),this._allowNext=!1,this._allowDiceBuy=!0}},{key:"onResume",value:function(){this.game.state.drawnCards=this.deck.cards,this.diceCount=Math.max(1,this.diceCount-1),this.game.diceCount=this.diceCount,this.game.diceSize=this.deck.size(),this._allowDiceBuy=!0,0==this.leftToPick&&(this._text="Good job! You completed round ".concat(this.game.round.value,"."),this.buttonLabel="Next round",this._allowNext=!0,this.game.lockDice(!0),1==this.game.round.fraction&&(this.game.state.bonusRolls.value>0?this.buttonLabel="To Bonus Round":this.buttonLabel="Next",this._nextStage=new q(this.game)))}},{key:"onDiceRoll",value:function(t){this.leftToPick>0&&(this.leftToPick-=1,this.pickedCards=this.deck.pick(t),this.game.lockDice(!0),this.diceCount=t.length,this.nextStage(new G(this.game),{pickStage:this,highlightedCards:this.pickedCards}))}}]),a}(H),K=a("2909"),Q=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(t){var i;return Object(s["a"])(this,a),i=e.call(this,t,""),i.drawnCards=[],i.cardsToPick=0,i}return Object(D["a"])(a,[{key:"onStart",value:function(){this._text=this.game.dialogue["drawStage"],this.cardsToPick=0,this.drawnCards=this.game.deck.draw(8),this.game.diceSize=Math.min(6,this.drawnCards.length),this.game.state.drawnCards=this.drawnCards,this._allowNext=!1,this.game.round.addValue(1),this.game.state.cardsPickedThisRound=0,this.game.state.cardsToPick=0,this.game.diceCount=1,this._allowDiceBuy=!1}},{key:"onDiceRoll",value:function(t){if(!this.allowNext()){var e=Math.min.apply(Math,Object(K["a"])(t));this.cardsToPick=e,this.game.state.cardsToPick=e,this._text="You will have to draw ".concat(e," cards this round."),this._allowNext=!0,this.game.lockDice(!0)}}},{key:"output",value:function(){return{drawnCards:this.drawnCards,cardsToPick:this.cardsToPick}}},{key:"nextStage",value:function(){this.allowNext()&&Object(J["a"])(Object(Y["a"])(a.prototype),"nextStage",this).call(this)}}]),a}(H),W=(a("aff5"),a("07ac"),a("e46d")),Z=function(){function t(e,a){Object(s["a"])(this,t),this.uuid=B.uuid(),this.type="add",this.value=0,this.type=a,this.value=e}return Object(D["a"])(t,[{key:"equals",value:function(t){return this.value==t.value&&this.type==t.type}},{key:"toString",value:function(){var t="",e=B.showNumber(Math.abs(this.value));return"add"===this.type?t=this.value>0?"+".concat(e):"-".concat(e):"mul"===this.type&&(t="x".concat(e)),t}}],[{key:"activate",value:function(t,e){return"add"===e.type?t+e.value:"mul"===e.type?t*e.value:t}},{key:"reverseActivate",value:function(t,e){return"add"===e.type?t-e.value:"mul"===e.type?t*(1/e.value):t}},{key:"activateAll",value:function(e,a){var i,n=Object(R["a"])(a);try{for(n.s();!(i=n.n()).done;){var s=i.value;"add"===s.type&&(e=t.activate(e,s))}}catch(u){n.e(u)}finally{n.f()}var c,r=Object(R["a"])(a);try{for(r.s();!(c=r.n()).done;){var o=c.value;"mul"===o.type&&(e=t.activate(e,o))}}catch(u){r.e(u)}finally{r.f()}return e}},{key:"reverseActivateAll",value:function(e,a){var i,n=Object(R["a"])(a.reverse());try{for(n.s();!(i=n.n()).done;){var s=i.value;"mul"===s.type&&(e=t.reverseActivate(e,s))}}catch(u){n.e(u)}finally{n.f()}var c,r=Object(R["a"])(a.reverse());try{for(r.s();!(c=r.n()).done;){var o=c.value;"add"===o.type&&(e=t.reverseActivate(e,o))}}catch(u){r.e(u)}finally{r.f()}return e}}]),t}();Object(o["a"])([Object(W["f"])(Object(W["a"])())],Z.prototype,"uuid",void 0),Object(o["a"])([W["f"]],Z.prototype,"type",void 0),Object(o["a"])([W["f"]],Z.prototype,"value",void 0);var tt=function(){function t(e,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Object(s["a"])(this,t),this._baseValue=0,this._min=0,this._max=0,this.valueMods={},this.minMods={},this.maxMods={},this.texts=[],this.capBaseValue=!1,this._baseValue=e,this._min=a,this._max=void 0==i?Number.MAX_SAFE_INTEGER:i,this.texts=n,this.capBaseValue=c}return Object(D["a"])(t,[{key:"addValue",value:function(t){var e=[];for(var a in this.valueMods){var i=this.valueMods[a];"mul"==i.type&&e.push(i)}var n=this.value;this.baseValue;return this.baseValue+=Z.reverseActivateAll(t,e),this.value-n}},{key:"addBaseValue",value:function(t){var e=this.baseValue;return this.baseValue+=t,this.baseValue-e}},{key:"load",value:function(t){this._baseValue=t._baseValue}},{key:"fraction",set:function(t){this.baseValue=this.min+this.max*t},get:function(){return(this.value-this.min)/(this.max-this.min)}},{key:"value",get:function(){var t=Z.activateAll(this._baseValue,Object.values(this.valueMods));return t>this.max?this.max:t<this.min?this.min:t}},{key:"baseValue",set:function(t){this.capBaseValue&&(t=Math.max(Math.min(t,this.max),this.min)),this._baseValue=t},get:function(){return this._baseValue}},{key:"min",get:function(){return Z.activateAll(this._min,Object.values(this.minMods))}},{key:"max",get:function(){return Z.activateAll(this._max,Object.values(this.maxMods))}},{key:"text",get:function(){return 0==this.texts.length?this.value.toFixed(1):B.pickFrom(this.texts,this.fraction)}},{key:"copy",get:function(){var e=new t(this._baseValue,this._min,this._max,this.texts);return e.valueMods=this.valueMods,e}}]),t}();Object(o["a"])([W["f"]],tt.prototype,"_baseValue",void 0),Object(o["a"])([W["f"]],tt.prototype,"_min",void 0),Object(o["a"])([W["f"]],tt.prototype,"_max",void 0),Object(o["a"])([Object(W["f"])(Object(W["c"])(Object(W["d"])(Z)))],tt.prototype,"valueMods",void 0),Object(o["a"])([Object(W["f"])(Object(W["c"])(Object(W["d"])(Z)))],tt.prototype,"minMods",void 0),Object(o["a"])([Object(W["f"])(Object(W["c"])(Object(W["d"])(Z)))],tt.prototype,"maxMods",void 0),Object(o["a"])([Object(W["f"])(Object(W["b"])(Object(W["e"])()))],tt.prototype,"texts",void 0),Object(o["a"])([W["f"]],tt.prototype,"capBaseValue",void 0);var et=function(){function t(){var e=this;Object(s["a"])(this,t),this.state=Object(i["t"])({deck:new I,dice:[],drawnCards:[],pickedCards:[],playerHand:[],stage:new H(this),round:new tt(0,0,3),cardsToPick:0,cardsPickedThisRound:0,rewardRolls:new tt(0,0,8),bonusRolls:new tt(0,0,8)}),this.dialogue=JSON.parse(A().dialogueString.value),this.restart(),console.log("Deck size:",this.state.deck.size()),window.lookup=function(t){var a=e.deck.cards.findIndex((function(e){return e.name==t}));return e.state.drawnCards=[e.deck.cards[a]],e.state.drawnCards},window.roll=function(t){e.state.stage.onDiceRoll([t])},window.round=function(t){e.state.round.baseValue=t}}return Object(D["a"])(t,[{key:"restart",value:function(){this.stage1=new H(this,this.dialogue["stage1"]),this.stage1.id="stage1";var t=new H(this,this.dialogue["stage2"]),e=new H(this,this.dialogue["stage3"]);e.buttonLabel="Yes";var a=new H(this,this.dialogue["stage4"]);a.buttonLabel="Start";var i=new Q(this),n=new X(this);this.stage1.link(t).link(e).link(a).link(i).link(n).link(i),this.state.deck=new I,this.state.dice=[],this.state.drawnCards=[],this.state.pickedCards=[],this.state.playerHand=[],this.state.stage=this.stage1,this.state.round=new tt(0,0,3),this.state.cardsToPick=0,this.state.cardsPickedThisRound=0,this.state.rewardRolls=new tt(0,0,8),this.state.bonusRolls=new tt(0,0,8),this.state.deck.shuffle(),this.lockDice(!0)}},{key:"pickCard",value:function(t){this.state.pickedCards.push(t),this.state.cardsPickedThisRound+=1}},{key:"nextStage",value:function(){this.state.stage.nextStage()}},{key:"allowNextStage",value:function(){return this.state.stage.allowNext()}},{key:"setStage",value:function(t){this.state.stage=t}},{key:"notifyDiceRoll",value:function(t){if(this.allDiceReady){this.state.stage.onDiceRoll(this.diceValues);var e,a=Object(R["a"])(this.state.dice);try{for(a.s();!(e=a.n()).done;){var i=e.value;i.useValue()}}catch(n){a.e(n)}finally{a.f()}}}},{key:"lockDice",value:function(t){var e,a=Object(R["a"])(this.state.dice);try{for(a.s();!(e=a.n()).done;){var i=e.value;i.locked=t}}catch(n){a.e(n)}finally{a.f()}}},{key:"diceAreLocked",value:function(){var t,e=0,a=Object(R["a"])(this.state.dice);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.locked&&(e+=1)}}catch(n){a.e(n)}finally{a.f()}return e==this.state.dice.length}},{key:"buyDice",value:function(){this.allowDiceBuy()&&(this.bonusRolls.addValue(1),0==this.state.dice.length?this.state.dice.push(new F(6,this)):this.state.dice.push(new F(this.state.dice[0].max,this)))}},{key:"allowDiceBuy",value:function(){return this.state.stage.allowDiceBuy()&&this.diceReadyCount+this.diceRollingCount==0&&!this.diceAreLocked()&&this.state.dice.length<4&&this.state.bonusRolls.value<this.state.bonusRolls.max}},{key:"clickCard",value:function(t){this.state.stage.onCardClick(t)}},{key:"buttonLabel",get:function(){return this.state.stage.buttonLabel}},{key:"diceValues",get:function(){var t,e=[],a=Object(R["a"])(this.state.dice);try{for(a.s();!(t=a.n()).done;){var i=t.value;e.push(i.value)}}catch(n){a.e(n)}finally{a.f()}return e}},{key:"allDiceReady",get:function(){return this.diceReadyCount==this.state.dice.length}},{key:"diceReadyCount",get:function(){var t,e=0,a=Object(R["a"])(this.state.dice);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.isUsed||(e+=1)}}catch(n){a.e(n)}finally{a.f()}return e}},{key:"diceRollingCount",get:function(){var t,e=0,a=Object(R["a"])(this.state.dice);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.rolling&&(e+=1)}}catch(n){a.e(n)}finally{a.f()}return e}},{key:"diceCount",set:function(t){for(var e=[],a=0;a<t;a++)0==this.state.dice.length?e.push(new F(6,this)):e.push(new F(this.state.dice[0].max,this));this.state.dice=e}},{key:"diceSize",set:function(t){for(var e=0;e<this.state.dice.length;e++)this.state.dice[e]=new F(t,this)}},{key:"currentDialogue",get:function(){return this.state.stage.text}},{key:"deck",get:function(){return this.state.deck}},{key:"drawnCards",get:function(){return this.state.drawnCards}},{key:"round",get:function(){return this.state.round}},{key:"roundString",get:function(){return"bonus"==this.state.stage.id?"Bonus Round":"Round ".concat(this.round.value," of ").concat(this.round.max)}},{key:"stageId",get:function(){return this.state.stage.id}},{key:"rewardRolls",get:function(){return this.state.rewardRolls}},{key:"bonusRolls",get:function(){return this.state.bonusRolls}},{key:"cardsPickedThisRound",get:function(){return this.state.cardsPickedThisRound}},{key:"showDialogueOnly",get:function(){return 0==this.round.value}}]),t}();et.GAME_VERSION="0.1.0";var at=Object(i["D"])("data-v-ef28c724");Object(i["s"])("data-v-ef28c724");var it=Object(i["f"])("div",{class:"filled-bar"},null,-1),nt={class:"label"};Object(i["p"])();var st=at((function(t,e,a,n,s,c){return Object(i["o"])(),Object(i["d"])("div",{class:"value-meter",style:t.cssVars},[it,Object(i["f"])("div",nt,[Object(i["w"])(t.$slots,"default")])],4)})),ct=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.backgroundColor="#282c3b",t.barColor="#741A32",t}return a}(u["b"]);ct=Object(o["a"])([Object(u["a"])({props:{container:tt,barColor:String,backgroundColor:String},methods:{log:function(t){console.log(t)}},computed:{cssVars:function(){return{"--percent-filled":100*this.container.fraction+"%","--background-color":this.backgroundColor,"--bar-color":this.barColor}}}})],ct);var rt=ct;a("d4b5");rt.render=st,rt.__scopeId="data-v-ef28c724";var ot=rt,ut=Object(i["D"])("data-v-2ba6bbe6");Object(i["s"])("data-v-2ba6bbe6");var lt={class:"text-button",onselectstart:"return false"};Object(i["p"])();var dt=ut((function(t,e,a,n,s,c){return Object(i["o"])(),Object(i["d"])("div",lt,[Object(i["w"])(t.$slots,"default")])})),ht=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return a}(u["b"]);ht=Object(o["a"])([Object(u["a"])({props:{icon:String}})],ht);var ft=ht;a("c235");ft.render=dt,ft.__scopeId="data-v-2ba6bbe6";var bt=ft,vt=Object(i["D"])("data-v-48b0309a");Object(i["s"])("data-v-48b0309a");var gt={class:"title-field",title:"Name of this card"},pt={class:"levels-field",title:"Level of this card / Max level of this card"},yt={class:"thumb-container"},kt={key:0,class:"subtitle-field",title:"Name of this level of this card"},mt={class:"description-field"},Ot={class:"artist-field"};Object(i["p"])();var jt=vt((function(t,e,a,n,s,c){return Object(i["o"])(),Object(i["d"])("div",{class:["playing-card",{"single-card":"single"===t.card.type,"child-card":t.card.hasParent,highlight:t.card.highlight}],style:t.cssVars},[Object(i["f"])("div",gt,[Object(i["f"])("h3",null,Object(i["z"])(t.card.title),1)]),Object(i["f"])("div",pt,[Object(i["f"])("h3",null,Object(i["z"])(t.card.levelString),1)]),Object(i["f"])("div",yt,[Object(i["f"])("img",{class:"thumb",src:t.card.thumb},null,8,["src"])]),""!==t.card.subtitle?(Object(i["o"])(),Object(i["d"])("div",kt,[Object(i["f"])("h3",null,Object(i["z"])(t.card.subtitle),1)])):Object(i["e"])("",!0),Object(i["f"])("div",mt,[Object(i["f"])("p",null,Object(i["z"])(t.card.description),1)]),Object(i["f"])("div",Ot,[Object(i["f"])("p",null,Object(i["z"])(t.card.artist),1)])],6)})),wt=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return a}(u["b"]);wt=Object(o["a"])([Object(u["a"])({components:{ValueMeter:ot,TextButton:bt},props:{card:Object},methods:{log:function(t){console.log(t)}},computed:{cssVars:function(){return{"--border-color":"black","--background-hue":this.card.hue,"--background-image":"url("+a("a17f")+")"}}}})],wt);var xt=wt;a("fca4");xt.render=jt,xt.__scopeId="data-v-48b0309a";var Ct=xt;function St(t,e,a,n,s,c){return Object(i["o"])(),Object(i["d"])("div",{class:["dice-view",{"locked-dice":t.dice.locked}],style:t.cssVars,onClick:e[1]||(e[1]=function(e){return t.dice.roll()})},[Object(i["f"])("p",null,Object(i["z"])(t.dice.value)+" / "+Object(i["z"])(t.dice.max),1)],6)}var _t=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return a}(u["b"]);_t=Object(o["a"])([Object(u["a"])({components:{ValueMeter:ot,TextButton:bt},props:{dice:Object},methods:{log:function(t){console.log(t)}},computed:{cssVars:function(){return{"--border-color":"black"}}}})],_t);var Rt=_t;a("25d7");Rt.render=St;var Dt=Rt,Pt=Object(i["D"])("data-v-d5159fe2"),Tt=Pt((function(t,e,a,n,s,c){return Object(i["o"])(),Object(i["d"])("a",{href:"https://www.patreon.com/gardamuse",style:t.cssVars,class:"patreon-button"},null,4)})),Vt=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return a}(u["b"]);Vt=Object(o["a"])([Object(u["a"])({props:{label:String},computed:{cssVars:function(){return{"--background-image":"url("+a("ba9d")+")"}}}})],Vt);var Mt=Vt;a("92d9");Mt.render=Tt,Mt.__scopeId="data-v-d5159fe2";var Nt=Mt,Bt=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.isLoaded=!1,t.scaledCard=new L({}),t.tabs=[{id:"AdminView",label:"Office"},{id:"StaffView",label:"Pasture"},{id:"ResearchView",label:"Lab"}],t.selectedTab="Menu",t}return a}(u["b"]);Bt=Object(o["a"])([Object(u["a"])({components:{ValueMeter:ot,TextButton:bt,PlayingCard:Ct,DiceView:Dt,PatreonButton:Nt},props:{},methods:{log:function(t){console.log(t)},toggleScale:function(t){t.scale=!t.scale,this.scaledCard==t?(this.scaledCard.scale=!1,this.scaledCard=new L({})):this.scaledCard.scale=!1,t.scale&&(this.scaledCard=t)}},computed:{game:function(){return this._game}},created:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A().load();case 2:t._game=new et,t.isLoaded=!0;case 4:case"end":return e.stop()}}),e)})))()}})],Bt);var zt=Bt;a("a4c7"),a("cc08");zt.render=S,zt.__scopeId="data-v-ac9e4552";var At=zt,Lt=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return a}(u["b"]);Lt=Object(o["a"])([Object(u["a"])({components:{Milkfarm:At},methods:{},computed:{cssVars:function(){return{"--background-image":"url("+a("9009")+")"}}}})],Lt);var It=Lt;a("9a5e");It.render=n;var Ft=It,Ut=a("6c02"),Ht=[{path:"/",name:"Milkfarm",component:At}],Et=Object(Ut["a"])({history:Object(Ut["b"])("/"),routes:Ht}),Gt=Et;i["c"](Ft).use(Gt).mount("#app")},d4b5:function(t,e,a){"use strict";a("60bf")},e3d9:function(t,e,a){},ef94:function(t,e,a){},fa32:function(t,e,a){},fca4:function(t,e,a){"use strict";a("2ba2")}});
//# sourceMappingURL=app.js.map