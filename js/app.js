/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
/* 
*	Copyright (c) 2010-2013 Marcus Westin 
*	https://github.com/marcuswestin/store.js
*/
"use strict";(function(e,t){typeof define=="function"&&define.amd?define([],t):typeof exports=="object"?module.exports=t():e.store=t()})(this,function(){function o(){try{return r in t&&t[r]}catch(e){return!1}}var e={},t=window,n=t.document,r="localStorage",i="script",s;e.disabled=!1,e.version="1.3.17",e.set=function(e,t){},e.get=function(e,t){},e.has=function(t){return e.get(t)!==undefined},e.remove=function(e){},e.clear=function(){},e.transact=function(t,n,r){r==null&&(r=n,n=null),n==null&&(n={});var i=e.get(t,n);r(i),e.set(t,i)},e.getAll=function(){},e.forEach=function(){},e.serialize=function(e){return JSON.stringify(e)},e.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(o())s=t[r],e.set=function(t,n){return n===undefined?e.remove(t):(s.setItem(t,e.serialize(n)),n)},e.get=function(t,n){var r=e.deserialize(s.getItem(t));return r===undefined?n:r},e.remove=function(e){s.removeItem(e)},e.clear=function(){s.clear()},e.getAll=function(){var t={};return e.forEach(function(e,n){t[e]=n}),t},e.forEach=function(t){for(var n=0;n<s.length;n++){var r=s.key(n);t(r,e.get(r))}};else if(n.documentElement.addBehavior){var u,a;try{a=new ActiveXObject("htmlfile"),a.open(),a.write("<"+i+">document.w=window</"+i+'><iframe src="/favicon.ico"></iframe>'),a.close(),u=a.w.frames[0].document,s=u.createElement("div")}catch(f){s=n.createElement("div"),u=n.body}var l=function(t){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(s),u.appendChild(s),s.addBehavior("#default#userData"),s.load(r);var i=t.apply(e,n);return u.removeChild(s),i}},c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),h=function(e){return e.replace(/^d/,"___$&").replace(c,"___")};e.set=l(function(t,n,i){return n=h(n),i===undefined?e.remove(n):(t.setAttribute(n,e.serialize(i)),t.save(r),i)}),e.get=l(function(t,n,r){n=h(n);var i=e.deserialize(t.getAttribute(n));return i===undefined?r:i}),e.remove=l(function(e,t){t=h(t),e.removeAttribute(t),e.save(r)}),e.clear=l(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(r);while(t.length)e.removeAttribute(t[0].name);e.save(r)}),e.getAll=function(t){var n={};return e.forEach(function(e,t){n[e]=t}),n},e.forEach=l(function(t,n){var r=t.XMLDocument.documentElement.attributes;for(var i=0,s;s=r[i];++i)n(s.name,e.deserialize(t.getAttribute(s.name)))})}try{var p="__storejs__";e.set(p,p),e.get(p)!=p&&(e.disabled=!0),e.remove(p)}catch(f){e.disabled=!0}return e.enabled=!e.disabled,e});
/*
*	Toastr
*
*/
!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return f({type:O.error,iconClass:g().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=g()),v=e("#"+t.containerId),v.length?v:(n&&(v=c(t)),v)}function i(e,t,n){return f({type:O.info,iconClass:g().iconClasses.info,message:e,optionsOverride:n,title:t})}function o(e){w=e}function s(e,t,n){return f({type:O.success,iconClass:g().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return f({type:O.warning,iconClass:g().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e){var t=g();v||n(t),l(e,t)||u(t)}function d(t){var i=g();return v||n(i),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function u(t){for(var n=v.children(),i=n.length-1;i>=0;i--)l(e(n[i]),t)}function l(t,n){return t&&0===e(":focus",t).length?(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0):!1}function c(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass).attr("aria-live","polite").attr("role","alert"),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"<button>&times;</button>",newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}function m(e){w&&w(e)}function f(t){function i(t){return!e(":focus",l).length||t?(clearTimeout(O.intervalId),l[r.hideMethod]({duration:r.hideDuration,easing:r.hideEasing,complete:function(){h(l),r.onHidden&&"hidden"!==b.state&&r.onHidden(),b.state="hidden",b.endTime=new Date,m(b)}})):void 0}function o(){(r.timeOut>0||r.extendedTimeOut>0)&&(u=setTimeout(i,r.extendedTimeOut),O.maxHideTime=parseFloat(r.extendedTimeOut),O.hideEta=(new Date).getTime()+O.maxHideTime)}function s(){clearTimeout(u),O.hideEta=0,l.stop(!0,!0)[r.showMethod]({duration:r.showDuration,easing:r.showEasing})}function a(){var e=(O.hideEta-(new Date).getTime())/O.maxHideTime*100;f.width(e+"%")}var r=g(),d=t.iconClass||r.iconClass;if(r.preventDuplicates){if(t.message===C)return;C=t.message}"undefined"!=typeof t.optionsOverride&&(r=e.extend(r,t.optionsOverride),d=t.optionsOverride.iconClass||d),T++,v=n(r,!0);var u=null,l=e("<div/>"),c=e("<div/>"),p=e("<div/>"),f=e("<div/>"),w=e(r.closeHtml),O={intervalId:null,hideEta:null,maxHideTime:null},b={toastId:T,state:"visible",startTime:new Date,options:r,map:t};return t.iconClass&&l.addClass(r.toastClass).addClass(d),t.title&&(c.append(t.title).addClass(r.titleClass),l.append(c)),t.message&&(p.append(t.message).addClass(r.messageClass),l.append(p)),r.closeButton&&(w.addClass("toast-close-button").attr("role","button"),l.prepend(w)),r.progressBar&&(f.addClass("toast-progress"),l.prepend(f)),l.hide(),r.newestOnTop?v.prepend(l):v.append(l),l[r.showMethod]({duration:r.showDuration,easing:r.showEasing,complete:r.onShown}),r.timeOut>0&&(u=setTimeout(i,r.timeOut),O.maxHideTime=parseFloat(r.timeOut),O.hideEta=(new Date).getTime()+O.maxHideTime,r.progressBar&&(O.intervalId=setInterval(a,10))),l.hover(s,o),!r.onclick&&r.tapToDismiss&&l.click(i),r.closeButton&&w&&w.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),i(!0)}),r.onclick&&l.click(function(){r.onclick(),i()}),m(b),r.debug&&console&&console.log(b),l}function g(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&v.remove())}var v,w,C,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:d,error:t,getContainer:n,info:i,options:{},subscribe:o,success:s,version:"2.1.0",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
/*
*	Jquery countdown
*	https://github.com/hilios/jQuery.countdown
*/
;(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else{factory(jQuery)}})(function($){'use strict';var PRECISION=100;var instances=[],matchers=[];matchers.push(/^[0-9]*$/.source);matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);matchers=new RegExp(matchers.join('|'));function parseDateString(dateString){if(dateString instanceof Date){return dateString}if(String(dateString).match(matchers)){if(String(dateString).match(/^[0-9]*$/)){dateString=Number(dateString)}if(String(dateString).match(/\-/)){dateString=String(dateString).replace(/\-/g,'/')}return new Date(dateString)}else{throw new Error('Couldn\'t cast `'+dateString+'` to a date object.');}}var DIRECTIVE_KEY_MAP={'Y':'years','m':'months','w':'weeks','d':'days','D':'totalDays','H':'hours','M':'minutes','S':'seconds'};function escapedRegExp(str){var sanitize=str.toString().replace(/([.?*+^$[\]\\(){}|-])/g,'\\$1');return new RegExp(sanitize)}function strftime(offsetObject){return function(format){var directives=format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(directives){for(var i=0,len=directives.length;i<len;++i){var directive=directives[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),regexp=escapedRegExp(directive[0]),modifier=directive[1]||'',plural=directive[3]||'',value=null;directive=directive[2];if(DIRECTIVE_KEY_MAP.hasOwnProperty(directive)){value=DIRECTIVE_KEY_MAP[directive];value=Number(offsetObject[value])}if(value!==null){if(modifier==='!'){value=pluralize(plural,value)}if(modifier===''){if(value<10){value='0'+value.toString()}}format=format.replace(regexp,value.toString())}}}format=format.replace(/%%/,'%');return format}}function pluralize(format,count){var plural='s',singular='';if(format){format=format.replace(/(:|;|\s)/gi,'').split(/\,/);if(format.length===1){plural=format[0]}else{singular=format[0];plural=format[1]}}if(Math.abs(count)===1){return singular}else{return plural}}var Countdown=function(el,finalDate,callback){this.el=el;this.$el=$(el);this.interval=null;this.offset={};this.instanceNumber=instances.length;instances.push(this);this.$el.data('countdown-instance',this.instanceNumber);if(callback){this.$el.on('update.countdown',callback);this.$el.on('stoped.countdown',callback);this.$el.on('finish.countdown',callback)}this.setFinalDate(finalDate);this.start()};$.extend(Countdown.prototype,{start:function(){if(this.interval!==null){clearInterval(this.interval)}var self=this;this.update();this.interval=setInterval(function(){self.update.call(self)},PRECISION)},stop:function(){clearInterval(this.interval);this.interval=null;this.dispatchEvent('stoped')},toggle:function(){if(this.interval){this.stop()}else{this.start()}},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this);instances[this.instanceNumber]=null;delete this.$el.data().countdownInstance},setFinalDate:function(value){this.finalDate=parseDateString(value)},update:function(){if(this.$el.closest('html').length===0){this.remove();return}this.totalSecsLeft=this.finalDate.getTime()-new Date().getTime();this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1000);this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft;this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)};if(this.totalSecsLeft===0){this.stop();this.dispatchEvent('finish')}else{this.dispatchEvent('update')}},dispatchEvent:function(eventName){var event=$.Event(eventName+'.countdown');event.finalDate=this.finalDate;event.offset=$.extend({},this.offset);event.strftime=strftime(this.offset);this.$el.trigger(event)}});$.fn.countdown=function(){var argumentsArray=Array.prototype.slice.call(arguments,0);return this.each(function(){var instanceNumber=$(this).data('countdown-instance');if(instanceNumber!==undefined){var instance=instances[instanceNumber],method=argumentsArray[0];if(Countdown.prototype.hasOwnProperty(method)){instance[method].apply(instance,argumentsArray.slice(1))}else if(String(method).match(/^[$A-Z_][0-9A-Z_$]*$/i)===null){instance.setFinalDate.call(instance,method);instance.start()}else{$.error('Method %s does not exist on jQuery.countdown'.replace(/\%s/gi,method))}}else{new Countdown(this,argumentsArray[0],argumentsArray[1])}})}});
/*!
* typeahead.js 0.10.5
* https://github.com/twitter/typeahead.js
* Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
*/
!function(a){var b=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},toStr:function(a){return b.isUndefined(a)||null===a?"":a+""},bind:a.proxy,each:function(b,c){function d(a,b){return c(b,a)}a.each(b,d)},map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,getUniqueId:function(){var a=0;return function(){return a++}}(),templatify:function(b){function c(){return String(b)}return a.isFunction(b)?b:c},defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},noop:function(){}}}(),c="0.10.5",d=function(){"use strict";function a(a){return a=b.toStr(a),a?a.split(/\s+/):[]}function c(a){return a=b.toStr(a),a?a.split(/\W+/):[]}function d(a){return function(){var c=[].slice.call(arguments,0);return function(d){var e=[];return b.each(c,function(c){e=e.concat(a(b.toStr(d[c])))}),e}}}return{nonword:c,whitespace:a,obj:{nonword:d(c),whitespace:d(a)}}}(),e=function(){"use strict";function c(c){this.maxSize=b.isNumber(c)?c:100,this.reset(),this.maxSize<=0&&(this.set=this.get=a.noop)}function d(){this.head=this.tail=null}function e(a,b){this.key=a,this.val=b,this.prev=this.next=null}return b.mixin(c.prototype,{set:function(a,b){var c,d=this.list.tail;this.size>=this.maxSize&&(this.list.remove(d),delete this.hash[d.key]),(c=this.hash[a])?(c.val=b,this.list.moveToFront(c)):(c=new e(a,b),this.list.add(c),this.hash[a]=c,this.size++)},get:function(a){var b=this.hash[a];return b?(this.list.moveToFront(b),b.val):void 0},reset:function(){this.size=0,this.hash={},this.list=new d}}),b.mixin(d.prototype,{add:function(a){this.head&&(a.next=this.head,this.head.prev=a),this.head=a,this.tail=this.tail||a},remove:function(a){a.prev?a.prev.next=a.next:this.head=a.next,a.next?a.next.prev=a.prev:this.tail=a.prev},moveToFront:function(a){this.remove(a),this.add(a)}}),c}(),f=function(){"use strict";function a(a){this.prefix=["__",a,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+b.escapeRegExChars(this.prefix))}function c(){return(new Date).getTime()}function d(a){return JSON.stringify(b.isUndefined(a)?null:a)}function e(a){return JSON.parse(a)}var f,g;try{f=window.localStorage,f.setItem("~~~","!"),f.removeItem("~~~")}catch(h){f=null}return g=f&&window.JSON?{_prefix:function(a){return this.prefix+a},_ttlKey:function(a){return this._prefix(a)+this.ttlKey},get:function(a){return this.isExpired(a)&&this.remove(a),e(f.getItem(this._prefix(a)))},set:function(a,e,g){return b.isNumber(g)?f.setItem(this._ttlKey(a),d(c()+g)):f.removeItem(this._ttlKey(a)),f.setItem(this._prefix(a),d(e))},remove:function(a){return f.removeItem(this._ttlKey(a)),f.removeItem(this._prefix(a)),this},clear:function(){var a,b,c=[],d=f.length;for(a=0;d>a;a++)(b=f.key(a)).match(this.keyMatcher)&&c.push(b.replace(this.keyMatcher,""));for(a=c.length;a--;)this.remove(c[a]);return this},isExpired:function(a){var d=e(f.getItem(this._ttlKey(a)));return b.isNumber(d)&&c()>d?!0:!1}}:{get:b.noop,set:b.noop,remove:b.noop,clear:b.noop,isExpired:b.noop},b.mixin(a.prototype,g),a}(),g=function(){"use strict";function c(b){b=b||{},this.cancelled=!1,this.lastUrl=null,this._send=b.transport?d(b.transport):a.ajax,this._get=b.rateLimiter?b.rateLimiter(this._get):this._get,this._cache=b.cache===!1?new e(0):i}function d(c){return function(d,e){function f(a){b.defer(function(){h.resolve(a)})}function g(a){b.defer(function(){h.reject(a)})}var h=a.Deferred();return c(d,e,f,g),h}}var f=0,g={},h=6,i=new e(10);return c.setMaxPendingRequests=function(a){h=a},c.resetCache=function(){i.reset()},b.mixin(c.prototype,{_get:function(a,b,c){function d(b){c&&c(null,b),k._cache.set(a,b)}function e(){c&&c(!0)}function i(){f--,delete g[a],k.onDeckRequestArgs&&(k._get.apply(k,k.onDeckRequestArgs),k.onDeckRequestArgs=null)}var j,k=this;this.cancelled||a!==this.lastUrl||((j=g[a])?j.done(d).fail(e):h>f?(f++,g[a]=this._send(a,b).done(d).fail(e).always(i)):this.onDeckRequestArgs=[].slice.call(arguments,0))},get:function(a,c,d){var e;return b.isFunction(c)&&(d=c,c={}),this.cancelled=!1,this.lastUrl=a,(e=this._cache.get(a))?b.defer(function(){d&&d(null,e)}):this._get(a,c,d),!!e},cancel:function(){this.cancelled=!0}}),c}(),h=function(){"use strict";function c(b){b=b||{},b.datumTokenizer&&b.queryTokenizer||a.error("datumTokenizer and queryTokenizer are both required"),this.datumTokenizer=b.datumTokenizer,this.queryTokenizer=b.queryTokenizer,this.reset()}function d(a){return a=b.filter(a,function(a){return!!a}),a=b.map(a,function(a){return a.toLowerCase()})}function e(){return{ids:[],children:{}}}function f(a){for(var b={},c=[],d=0,e=a.length;e>d;d++)b[a[d]]||(b[a[d]]=!0,c.push(a[d]));return c}function g(a,b){function c(a,b){return a-b}var d=0,e=0,f=[];a=a.sort(c),b=b.sort(c);for(var g=a.length,h=b.length;g>d&&h>e;)a[d]<b[e]?d++:a[d]>b[e]?e++:(f.push(a[d]),d++,e++);return f}return b.mixin(c.prototype,{bootstrap:function(a){this.datums=a.datums,this.trie=a.trie},add:function(a){var c=this;a=b.isArray(a)?a:[a],b.each(a,function(a){var f,g;f=c.datums.push(a)-1,g=d(c.datumTokenizer(a)),b.each(g,function(a){var b,d,g;for(b=c.trie,d=a.split("");g=d.shift();)b=b.children[g]||(b.children[g]=e()),b.ids.push(f)})})},get:function(a){var c,e,h=this;return c=d(this.queryTokenizer(a)),b.each(c,function(a){var b,c,d,f;if(e&&0===e.length)return!1;for(b=h.trie,c=a.split("");b&&(d=c.shift());)b=b.children[d];return b&&0===c.length?(f=b.ids.slice(0),void(e=e?g(e,f):f)):(e=[],!1)}),e?b.map(f(e),function(a){return h.datums[a]}):[]},reset:function(){this.datums=[],this.trie=e()},serialize:function(){return{datums:this.datums,trie:this.trie}}}),c}(),i=function(){"use strict";function d(a){return a.local||null}function e(d){var e,f;return f={url:null,thumbprint:"",ttl:864e5,filter:null,ajax:{}},(e=d.prefetch||null)&&(e=b.isString(e)?{url:e}:e,e=b.mixin(f,e),e.thumbprint=c+e.thumbprint,e.ajax.type=e.ajax.type||"GET",e.ajax.dataType=e.ajax.dataType||"json",!e.url&&a.error("prefetch requires url to be set")),e}function f(c){function d(a){return function(c){return b.debounce(c,a)}}function e(a){return function(c){return b.throttle(c,a)}}var f,g;return g={url:null,cache:!0,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}},(f=c.remote||null)&&(f=b.isString(f)?{url:f}:f,f=b.mixin(g,f),f.rateLimiter=/^throttle$/i.test(f.rateLimitBy)?e(f.rateLimitWait):d(f.rateLimitWait),f.ajax.type=f.ajax.type||"GET",f.ajax.dataType=f.ajax.dataType||"json",delete f.rateLimitBy,delete f.rateLimitWait,!f.url&&a.error("remote requires url to be set")),f}return{local:d,prefetch:e,remote:f}}();!function(c){"use strict";function e(b){b&&(b.local||b.prefetch||b.remote)||a.error("one of local, prefetch, or remote is required"),this.limit=b.limit||5,this.sorter=j(b.sorter),this.dupDetector=b.dupDetector||k,this.local=i.local(b),this.prefetch=i.prefetch(b),this.remote=i.remote(b),this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null,this.index=new h({datumTokenizer:b.datumTokenizer,queryTokenizer:b.queryTokenizer}),this.storage=this.cacheKey?new f(this.cacheKey):null}function j(a){function c(b){return b.sort(a)}function d(a){return a}return b.isFunction(a)?c:d}function k(){return!1}var l,m;return l=c.Bloodhound,m={data:"data",protocol:"protocol",thumbprint:"thumbprint"},c.Bloodhound=e,e.noConflict=function(){return c.Bloodhound=l,e},e.tokenizers=d,b.mixin(e.prototype,{_loadPrefetch:function(b){function c(a){f.clear(),f.add(b.filter?b.filter(a):a),f._saveToStorage(f.index.serialize(),b.thumbprint,b.ttl)}var d,e,f=this;return(d=this._readFromStorage(b.thumbprint))?(this.index.bootstrap(d),e=a.Deferred().resolve()):e=a.ajax(b.url,b.ajax).done(c),e},_getFromRemote:function(a,b){function c(a,c){b(a?[]:f.remote.filter?f.remote.filter(c):c)}var d,e,f=this;if(this.transport)return a=a||"",e=encodeURIComponent(a),d=this.remote.replace?this.remote.replace(this.remote.url,a):this.remote.url.replace(this.remote.wildcard,e),this.transport.get(d,this.remote.ajax,c)},_cancelLastRemoteRequest:function(){this.transport&&this.transport.cancel()},_saveToStorage:function(a,b,c){this.storage&&(this.storage.set(m.data,a,c),this.storage.set(m.protocol,location.protocol,c),this.storage.set(m.thumbprint,b,c))},_readFromStorage:function(a){var b,c={};return this.storage&&(c.data=this.storage.get(m.data),c.protocol=this.storage.get(m.protocol),c.thumbprint=this.storage.get(m.thumbprint)),b=c.thumbprint!==a||c.protocol!==location.protocol,c.data&&!b?c.data:null},_initialize:function(){function c(){e.add(b.isFunction(f)?f():f)}var d,e=this,f=this.local;return d=this.prefetch?this._loadPrefetch(this.prefetch):a.Deferred().resolve(),f&&d.done(c),this.transport=this.remote?new g(this.remote):null,this.initPromise=d.promise()},initialize:function(a){return!this.initPromise||a?this._initialize():this.initPromise},add:function(a){this.index.add(a)},get:function(a,c){function d(a){var d=f.slice(0);b.each(a,function(a){var c;return c=b.some(d,function(b){return e.dupDetector(a,b)}),!c&&d.push(a),d.length<e.limit}),c&&c(e.sorter(d))}var e=this,f=[],g=!1;f=this.index.get(a),f=this.sorter(f).slice(0,this.limit),f.length<this.limit?g=this._getFromRemote(a,d):this._cancelLastRemoteRequest(),g||(f.length>0||!this.transport)&&c&&c(f)},clear:function(){this.index.reset()},clearPrefetchCache:function(){this.storage&&this.storage.clear()},clearRemoteCache:function(){this.transport&&g.resetCache()},ttAdapter:function(){return b.bind(this.get,this)}}),e}(this);var j=function(){return{wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',dataset:'<div class="tt-dataset-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion"></div>'}}(),k=function(){"use strict";var a={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return b.isMsie()&&b.mixin(a.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),b.isMsie()&&b.isMsie()<=7&&b.mixin(a.input,{marginTop:"-1px"}),a}(),l=function(){"use strict";function c(b){b&&b.el||a.error("EventBus initialized without el"),this.$el=a(b.el)}var d="typeahead:";return b.mixin(c.prototype,{trigger:function(a){var b=[].slice.call(arguments,1);this.$el.trigger(d+a,b)}}),c}(),m=function(){"use strict";function a(a,b,c,d){var e;if(!c)return this;for(b=b.split(i),c=d?h(c,d):c,this._callbacks=this._callbacks||{};e=b.shift();)this._callbacks[e]=this._callbacks[e]||{sync:[],async:[]},this._callbacks[e][a].push(c);return this}function b(b,c,d){return a.call(this,"async",b,c,d)}function c(b,c,d){return a.call(this,"sync",b,c,d)}function d(a){var b;if(!this._callbacks)return this;for(a=a.split(i);b=a.shift();)delete this._callbacks[b];return this}function e(a){var b,c,d,e,g;if(!this._callbacks)return this;for(a=a.split(i),d=[].slice.call(arguments,1);(b=a.shift())&&(c=this._callbacks[b]);)e=f(c.sync,this,[b].concat(d)),g=f(c.async,this,[b].concat(d)),e()&&j(g);return this}function f(a,b,c){function d(){for(var d,e=0,f=a.length;!d&&f>e;e+=1)d=a[e].apply(b,c)===!1;return!d}return d}function g(){var a;return a=window.setImmediate?function(a){setImmediate(function(){a()})}:function(a){setTimeout(function(){a()},0)}}function h(a,b){return a.bind?a.bind(b):function(){a.apply(b,[].slice.call(arguments,0))}}var i=/\s+/,j=g();return{onSync:c,onAsync:b,off:d,trigger:e}}(),n=function(a){"use strict";function c(a,c,d){for(var e,f=[],g=0,h=a.length;h>g;g++)f.push(b.escapeRegExChars(a[g]));return e=d?"\\b("+f.join("|")+")\\b":"("+f.join("|")+")",c?new RegExp(e):new RegExp(e,"i")}var d={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function(e){function f(b){var c,d,f;return(c=h.exec(b.data))&&(f=a.createElement(e.tagName),e.className&&(f.className=e.className),d=b.splitText(c.index),d.splitText(c[0].length),f.appendChild(d.cloneNode(!0)),b.parentNode.replaceChild(f,d)),!!c}function g(a,b){for(var c,d=3,e=0;e<a.childNodes.length;e++)c=a.childNodes[e],c.nodeType===d?e+=b(c)?1:0:g(c,b)}var h;e=b.mixin({},d,e),e.node&&e.pattern&&(e.pattern=b.isArray(e.pattern)?e.pattern:[e.pattern],h=c(e.pattern,e.caseSensitive,e.wordsOnly),g(e.node,f))}}(window.document),o=function(){"use strict";function c(c){var e,f,h,i,j=this;c=c||{},c.input||a.error("input is missing"),e=b.bind(this._onBlur,this),f=b.bind(this._onFocus,this),h=b.bind(this._onKeydown,this),i=b.bind(this._onInput,this),this.$hint=a(c.hint),this.$input=a(c.input).on("blur.tt",e).on("focus.tt",f).on("keydown.tt",h),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=b.noop),b.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(a){g[a.which||a.keyCode]||b.defer(b.bind(j._onInput,j,a))}):this.$input.on("input.tt",i),this.query=this.$input.val(),this.$overflowHelper=d(this.$input)}function d(b){return a('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:b.css("font-family"),fontSize:b.css("font-size"),fontStyle:b.css("font-style"),fontVariant:b.css("font-variant"),fontWeight:b.css("font-weight"),wordSpacing:b.css("word-spacing"),letterSpacing:b.css("letter-spacing"),textIndent:b.css("text-indent"),textRendering:b.css("text-rendering"),textTransform:b.css("text-transform")}).insertAfter(b)}function e(a,b){return c.normalizeQuery(a)===c.normalizeQuery(b)}function f(a){return a.altKey||a.ctrlKey||a.metaKey||a.shiftKey}var g;return g={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},c.normalizeQuery=function(a){return(a||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")},b.mixin(c.prototype,m,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.trigger("focused")},_onKeydown:function(a){var b=g[a.which||a.keyCode];this._managePreventDefault(b,a),b&&this._shouldTrigger(b,a)&&this.trigger(b+"Keyed",a)},_onInput:function(){this._checkInputValue()},_managePreventDefault:function(a,b){var c,d,e;switch(a){case"tab":d=this.getHint(),e=this.getInputValue(),c=d&&d!==e&&!f(b);break;case"up":case"down":c=!f(b);break;default:c=!1}c&&b.preventDefault()},_shouldTrigger:function(a,b){var c;switch(a){case"tab":c=!f(b);break;default:c=!0}return c},_checkInputValue:function(){var a,b,c;a=this.getInputValue(),b=e(a,this.query),c=b?this.query.length!==a.length:!1,this.query=a,b?c&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(a){this.query=a},getInputValue:function(){return this.$input.val()},setInputValue:function(a,b){this.$input.val(a),b?this.clearHint():this._checkInputValue()},resetInputValue:function(){this.setInputValue(this.query,!0)},getHint:function(){return this.$hint.val()},setHint:function(a){this.$hint.val(a)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var a,b,c,d;a=this.getInputValue(),b=this.getHint(),c=a!==b&&0===b.indexOf(a),d=""!==a&&c&&!this.hasOverflow(),!d&&this.clearHint()},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function(){var a=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=a},isCursorAtEnd:function(){var a,c,d;return a=this.$input.val().length,c=this.$input[0].selectionStart,b.isNumber(c)?c===a:document.selection?(d=document.selection.createRange(),d.moveStart("character",-a),a===d.text.length):!0},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null}}),c}(),p=function(){"use strict";function c(c){c=c||{},c.templates=c.templates||{},c.source||a.error("missing source"),c.name&&!f(c.name)&&a.error("invalid dataset name: "+c.name),this.query=null,this.highlight=!!c.highlight,this.name=c.name||b.getUniqueId(),this.source=c.source,this.displayFn=d(c.display||c.displayKey),this.templates=e(c.templates,this.displayFn),this.$el=a(j.dataset.replace("%CLASS%",this.name))}function d(a){function c(b){return b[a]}return a=a||"value",b.isFunction(a)?a:c}function e(a,c){function d(a){return"<p>"+c(a)+"</p>"}return{empty:a.empty&&b.templatify(a.empty),header:a.header&&b.templatify(a.header),footer:a.footer&&b.templatify(a.footer),suggestion:a.suggestion||d}}function f(a){return/^[_a-zA-Z0-9-]+$/.test(a)}var g="ttDataset",h="ttValue",i="ttDatum";return c.extractDatasetName=function(b){return a(b).data(g)},c.extractValue=function(b){return a(b).data(h)},c.extractDatum=function(b){return a(b).data(i)},b.mixin(c.prototype,m,{_render:function(c,d){function e(){return p.templates.empty({query:c,isEmpty:!0})}function f(){function e(b){var c;return c=a(j.suggestion).append(p.templates.suggestion(b)).data(g,p.name).data(h,p.displayFn(b)).data(i,b),c.children().each(function(){a(this).css(k.suggestionChild)}),c}var f,l;return f=a(j.suggestions).css(k.suggestions),l=b.map(d,e),f.append.apply(f,l),p.highlight&&n({className:"tt-highlight",node:f[0],pattern:c}),f}function l(){return p.templates.header({query:c,isEmpty:!o})}function m(){return p.templates.footer({query:c,isEmpty:!o})}if(this.$el){var o,p=this;this.$el.empty(),o=d&&d.length,!o&&this.templates.empty?this.$el.html(e()).prepend(p.templates.header?l():null).append(p.templates.footer?m():null):o&&this.$el.html(f()).prepend(p.templates.header?l():null).append(p.templates.footer?m():null),this.trigger("rendered")}},getRoot:function(){return this.$el},update:function(a){function b(b){c.canceled||a!==c.query||c._render(a,b)}var c=this;this.query=a,this.canceled=!1,this.source(a,b)},cancel:function(){this.canceled=!0},clear:function(){this.cancel(),this.$el.empty(),this.trigger("rendered")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=null}}),c}(),q=function(){"use strict";function c(c){var e,f,g,h=this;c=c||{},c.menu||a.error("menu is required"),this.isOpen=!1,this.isEmpty=!0,this.datasets=b.map(c.datasets,d),e=b.bind(this._onSuggestionClick,this),f=b.bind(this._onSuggestionMouseEnter,this),g=b.bind(this._onSuggestionMouseLeave,this),this.$menu=a(c.menu).on("click.tt",".tt-suggestion",e).on("mouseenter.tt",".tt-suggestion",f).on("mouseleave.tt",".tt-suggestion",g),b.each(this.datasets,function(a){h.$menu.append(a.getRoot()),a.onSync("rendered",h._onRendered,h)})}function d(a){return new p(a)}return b.mixin(c.prototype,m,{_onSuggestionClick:function(b){this.trigger("suggestionClicked",a(b.currentTarget))},_onSuggestionMouseEnter:function(b){this._removeCursor(),this._setCursor(a(b.currentTarget),!0)},_onSuggestionMouseLeave:function(){this._removeCursor()},_onRendered:function(){function a(a){return a.isEmpty()}this.isEmpty=b.every(this.datasets,a),this.isEmpty?this._hide():this.isOpen&&this._show(),this.trigger("datasetRendered")},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block")},_getSuggestions:function(){return this.$menu.find(".tt-suggestion")},_getCursor:function(){return this.$menu.find(".tt-cursor").first()},_setCursor:function(a,b){a.first().addClass("tt-cursor"),!b&&this.trigger("cursorMoved")},_removeCursor:function(){this._getCursor().removeClass("tt-cursor")},_moveCursor:function(a){var b,c,d,e;if(this.isOpen){if(c=this._getCursor(),b=this._getSuggestions(),this._removeCursor(),d=b.index(c)+a,d=(d+1)%(b.length+1)-1,-1===d)return void this.trigger("cursorRemoved");-1>d&&(d=b.length-1),this._setCursor(e=b.eq(d)),this._ensureVisible(e)}},_ensureVisible:function(a){var b,c,d,e;b=a.position().top,c=b+a.outerHeight(!0),d=this.$menu.scrollTop(),e=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),0>b?this.$menu.scrollTop(d+b):c>e&&this.$menu.scrollTop(d+(c-e))},close:function(){this.isOpen&&(this.isOpen=!1,this._removeCursor(),this._hide(),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))},setLanguageDirection:function(a){this.$menu.css("ltr"===a?k.ltr:k.rtl)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getDatumForSuggestion:function(a){var b=null;return a.length&&(b={raw:p.extractDatum(a),value:p.extractValue(a),datasetName:p.extractDatasetName(a)}),b},getDatumForCursor:function(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function(){return this.getDatumForSuggestion(this._getSuggestions().first())},update:function(a){function c(b){b.update(a)}b.each(this.datasets,c)},empty:function(){function a(a){a.clear()}b.each(this.datasets,a),this.isEmpty=!0},isVisible:function(){return this.isOpen&&!this.isEmpty},destroy:function(){function a(a){a.destroy()}this.$menu.off(".tt"),this.$menu=null,b.each(this.datasets,a)}}),c}(),r=function(){"use strict";function c(c){var e,f,g;c=c||{},c.input||a.error("missing input"),this.isActivated=!1,this.autoselect=!!c.autoselect,this.minLength=b.isNumber(c.minLength)?c.minLength:1,this.$node=d(c.input,c.withHint),e=this.$node.find(".tt-dropdown-menu"),f=this.$node.find(".tt-input"),g=this.$node.find(".tt-hint"),f.on("blur.tt",function(a){var c,d,g;c=document.activeElement,d=e.is(c),g=e.has(c).length>0,b.isMsie()&&(d||g)&&(a.preventDefault(),a.stopImmediatePropagation(),b.defer(function(){f.focus()}))}),e.on("mousedown.tt",function(a){a.preventDefault()}),this.eventBus=c.eventBus||new l({el:f}),this.dropdown=new q({menu:e,datasets:c.datasets}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onAsync("datasetRendered",this._onDatasetRendered,this),this.input=new o({input:f,hint:g}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this),this._setLanguageDirection()}function d(b,c){var d,f,h,i;d=a(b),f=a(j.wrapper).css(k.wrapper),h=a(j.dropdown).css(k.dropdown),i=d.clone().css(k.hint).css(e(d)),i.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly",!0).attr({autocomplete:"off",spellcheck:"false",tabindex:-1}),d.data(g,{dir:d.attr("dir"),autocomplete:d.attr("autocomplete"),spellcheck:d.attr("spellcheck"),style:d.attr("style")}),d.addClass("tt-input").attr({autocomplete:"off",spellcheck:!1}).css(c?k.input:k.inputWithNoHint);try{!d.attr("dir")&&d.attr("dir","auto")}catch(l){}return d.wrap(f).parent().prepend(c?i:null).append(h)}function e(a){return{backgroundAttachment:a.css("background-attachment"),backgroundClip:a.css("background-clip"),backgroundColor:a.css("background-color"),backgroundImage:a.css("background-image"),backgroundOrigin:a.css("background-origin"),backgroundPosition:a.css("background-position"),backgroundRepeat:a.css("background-repeat"),backgroundSize:a.css("background-size")}}function f(a){var c=a.find(".tt-input");b.each(c.data(g),function(a,d){b.isUndefined(a)?c.removeAttr(d):c.attr(d,a)}),c.detach().removeData(g).removeClass("tt-input").insertAfter(a),a.remove()}var g="ttAttrs";return b.mixin(c.prototype,{_onSuggestionClicked:function(a,b){var c;(c=this.dropdown.getDatumForSuggestion(b))&&this._select(c)},_onCursorMoved:function(){var a=this.dropdown.getDatumForCursor();this.input.setInputValue(a.value,!0),this.eventBus.trigger("cursorchanged",a.raw,a.datasetName)},_onCursorRemoved:function(){this.input.resetInputValue(),this._updateHint()},_onDatasetRendered:function(){this._updateHint()},_onOpened:function(){this._updateHint(),this.eventBus.trigger("opened")},_onClosed:function(){this.input.clearHint(),this.eventBus.trigger("closed")},_onFocused:function(){this.isActivated=!0,this.dropdown.open()},_onBlurred:function(){this.isActivated=!1,this.dropdown.empty(),this.dropdown.close()},_onEnterKeyed:function(a,b){var c,d;c=this.dropdown.getDatumForCursor(),d=this.dropdown.getDatumForTopSuggestion(),c?(this._select(c),b.preventDefault()):this.autoselect&&d&&(this._select(d),b.preventDefault())},_onTabKeyed:function(a,b){var c;(c=this.dropdown.getDatumForCursor())?(this._select(c),b.preventDefault()):this._autocomplete(!0)},_onEscKeyed:function(){this.dropdown.close(),this.input.resetInputValue()},_onUpKeyed:function(){var a=this.input.getQuery();this.dropdown.isEmpty&&a.length>=this.minLength?this.dropdown.update(a):this.dropdown.moveCursorUp(),this.dropdown.open()},_onDownKeyed:function(){var a=this.input.getQuery();this.dropdown.isEmpty&&a.length>=this.minLength?this.dropdown.update(a):this.dropdown.moveCursorDown(),this.dropdown.open()},_onLeftKeyed:function(){"rtl"===this.dir&&this._autocomplete()},_onRightKeyed:function(){"ltr"===this.dir&&this._autocomplete()},_onQueryChanged:function(a,b){this.input.clearHintIfInvalid(),b.length>=this.minLength?this.dropdown.update(b):this.dropdown.empty(),this.dropdown.open(),this._setLanguageDirection()},_onWhitespaceChanged:function(){this._updateHint(),this.dropdown.open()},_setLanguageDirection:function(){var a;this.dir!==(a=this.input.getLanguageDirection())&&(this.dir=a,this.$node.css("direction",a),this.dropdown.setLanguageDirection(a))},_updateHint:function(){var a,c,d,e,f,g;a=this.dropdown.getDatumForTopSuggestion(),a&&this.dropdown.isVisible()&&!this.input.hasOverflow()?(c=this.input.getInputValue(),d=o.normalizeQuery(c),e=b.escapeRegExChars(d),f=new RegExp("^(?:"+e+")(.+$)","i"),g=f.exec(a.value),g?this.input.setHint(c+g[1]):this.input.clearHint()):this.input.clearHint()},_autocomplete:function(a){var b,c,d,e;b=this.input.getHint(),c=this.input.getQuery(),d=a||this.input.isCursorAtEnd(),b&&c!==b&&d&&(e=this.dropdown.getDatumForTopSuggestion(),e&&this.input.setInputValue(e.value),this.eventBus.trigger("autocompleted",e.raw,e.datasetName))},_select:function(a){this.input.setQuery(a.value),this.input.setInputValue(a.value,!0),this._setLanguageDirection(),this.eventBus.trigger("selected",a.raw,a.datasetName),this.dropdown.close(),b.defer(b.bind(this.dropdown.empty,this.dropdown))},open:function(){this.dropdown.open()},close:function(){this.dropdown.close()},setVal:function(a){a=b.toStr(a),this.isActivated?this.input.setInputValue(a):(this.input.setQuery(a),this.input.setInputValue(a,!0)),this._setLanguageDirection()},getVal:function(){return this.input.getQuery()},destroy:function(){this.input.destroy(),this.dropdown.destroy(),f(this.$node),this.$node=null}}),c}();!function(){"use strict";var c,d,e;c=a.fn.typeahead,d="ttTypeahead",e={initialize:function(c,e){function f(){var f,g,h=a(this);b.each(e,function(a){a.highlight=!!c.highlight}),g=new r({input:h,eventBus:f=new l({el:h}),withHint:b.isUndefined(c.hint)?!0:!!c.hint,minLength:c.minLength,autoselect:c.autoselect,datasets:e}),h.data(d,g)}return e=b.isArray(e)?e:[].slice.call(arguments,1),c=c||{},this.each(f)},open:function(){function b(){var b,c=a(this);(b=c.data(d))&&b.open()}return this.each(b)},close:function(){function b(){var b,c=a(this);(b=c.data(d))&&b.close()}return this.each(b)},val:function(b){function c(){var c,e=a(this);(c=e.data(d))&&c.setVal(b)}function e(a){var b,c;return(b=a.data(d))&&(c=b.getVal()),c}return arguments.length?this.each(c):e(this.first())},destroy:function(){function b(){var b,c=a(this);(b=c.data(d))&&(b.destroy(),c.removeData(d))}return this.each(b)}},a.fn.typeahead=function(b){var c;return e[b]&&"initialize"!==b?(c=this.filter(function(){return!!a(this).data(d)}),e[b].apply(c,[].slice.call(arguments,1))):e.initialize.apply(this,arguments)},a.fn.typeahead.noConflict=function(){return a.fn.typeahead=c,this}}()}(window.jQuery);
/*!
* TableSorter (FORK) 2.18.3 min - Client-side table sorting with ease!
* Copyright (c) 2007 Christian Bach; fork maintained by Rob Garrison
*/
!function(h){h.extend({tablesorter:new function(){function f(){var b=arguments[0],a=1<arguments.length?Array.prototype.slice.call(arguments):b;if("undefined"!==typeof console&&"undefined"!==typeof console.log)console[/error/i.test(b)?"error":/warn/i.test(b)?"warn":"log"](a);else alert(a)}function u(b,a){f(b+" ("+((new Date).getTime()-a.getTime())+"ms)")}function m(b){for(var a in b)return!1;return!0}function t(b,a,c){if(!a)return"";var e,d=b.config,l=d.textExtraction||"",f="",f="basic"===l?h(a).attr(d.textAttribute)|| a.textContent||a.innerText||h(a).text()||"":"function"===typeof l?l(a,b,c):"function"===typeof(e=g.getColumnData(b,l,c))?e(a,b,c):a.textContent||a.innerText||h(a).text()||"";return h.trim(f)}function q(b){var a,c,e=b.config,d=e.$tbodies=e.$table.children("tbody:not(."+e.cssInfoBlock+")"),l,v,k,n,p,w,m,r,s,D=0,y="",z=d.length;if(0===z)return e.debug?f("Warning: *Empty table!* Not building a parser cache"):"";e.debug&&(s=new Date,f("Detecting parsers for each column"));a=[];for(c=[];D<z;){l=d[D].rows; if(l[D])for(v=e.columns,k=0;k<v;k++){n=e.$headers.filter('[data-column="'+k+'"]:last');p=g.getColumnData(b,e.headers,k);r=g.getParserById(g.getData(n,p,"extractor"));m=g.getParserById(g.getData(n,p,"sorter"));w="false"===g.getData(n,p,"parser");e.empties[k]=(g.getData(n,p,"empty")||e.emptyTo||(e.emptyToBottom?"bottom":"top")).toLowerCase();e.strings[k]=(g.getData(n,p,"string")||e.stringTo||"max").toLowerCase();w&&(m=g.getParserById("no-parser"));r||(r=!1);if(!m)a:{n=b;p=l;w=-1;m=k;for(var C=void 0, L=void 0,M=g.parsers.length,x=!1,A="",C=!0;""===A&&C;)w++,p[w]?(x=p[w].cells[m],A=t(n,x,m),L=h(x),n.config.debug&&f("Checking if value was empty on row "+w+", column: "+m+': "'+A+'"')):C=!1;for(;0<=--M;)if((C=g.parsers[M])&&"text"!==C.id&&C.is&&C.is(A,n,x,L)){m=C;break a}m=g.getParserById("text")}e.debug&&(y+="column:"+k+"; extractor:"+r.id+"; parser:"+m.id+"; string:"+e.strings[k]+"; empty: "+e.empties[k]+"\n");c[k]=m;a[k]=r}D+=c.length?z:1}e.debug&&(f(y?y:"No parsers detected"),u("Completed detecting parsers", s));e.parsers=c;e.extractors=a}function z(b){var a,c,e,d,l,v,k,n,p,m,B,r=b.config,s=r.$table.children("tbody"),q=r.extractors,y=r.parsers;r.cache={};r.totalRows=0;if(!y)return r.debug?f("Warning: *Empty table!* Not building a cache"):"";r.debug&&(n=new Date);r.showProcessing&&g.isProcessing(b,!0);for(l=0;l<s.length;l++)if(B=[],a=r.cache[l]={normalized:[]},!s.eq(l).hasClass(r.cssInfoBlock)){p=s[l]&&s[l].rows.length||0;for(e=0;e<p;++e)if(m={child:[]},v=h(s[l].rows[e]),k=[],v.hasClass(r.cssChildRow)&& 0!==e)c=a.normalized.length-1,a.normalized[c][r.columns].$row=a.normalized[c][r.columns].$row.add(v),v.prev().hasClass(r.cssChildRow)||v.prev().addClass(g.css.cssHasChild),m.child[c]=h.trim(v[0].textContent||v[0].innerText||v.text()||"");else{m.$row=v;m.order=e;for(d=0;d<r.columns;++d)"undefined"===typeof y[d]?r.debug&&f("No parser found for cell:",v[0].cells[d],"does it have a header?"):(c=t(b,v[0].cells[d],d),c="undefined"===typeof q[d].id?c:q[d].format(c,b,v[0].cells[d],d),c="no-parser"===y[d].id? "":y[d].format(c,b,v[0].cells[d],d),k.push(r.ignoreCase&&"string"===typeof c?c.toLowerCase():c),"numeric"===(y[d].type||"").toLowerCase()&&(B[d]=Math.max(Math.abs(c)||0,B[d]||0)));k[r.columns]=m;a.normalized.push(k)}a.colMax=B;r.totalRows+=a.normalized.length}r.showProcessing&&g.isProcessing(b);r.debug&&u("Building cache for "+p+" rows",n)}function A(b,a){var c=b.config,e=c.widgetOptions,d=b.tBodies,l=[],f=c.cache,k,n,p,w,q,r;if(m(f))return c.appender?c.appender(b,l):b.isUpdating?c.$table.trigger("updateComplete", b):"";c.debug&&(r=new Date);for(q=0;q<d.length;q++)if(k=h(d[q]),k.length&&!k.hasClass(c.cssInfoBlock)){p=g.processTbody(b,k,!0);k=f[q].normalized;n=k.length;for(w=0;w<n;w++)l.push(k[w][c.columns].$row),c.appender&&(!c.pager||c.pager.removeRows&&e.pager_removeRows||c.pager.ajax)||p.append(k[w][c.columns].$row);g.processTbody(b,p,!1)}c.appender&&c.appender(b,l);c.debug&&u("Rebuilt table",r);a||c.appender||g.applyWidget(b);b.isUpdating&&c.$table.trigger("updateComplete",b)}function F(b){return/^d/i.test(b)|| 1===b}function E(b){var a,c,e,d,l,v,k,n=b.config;n.headerList=[];n.headerContent=[];n.debug&&(k=new Date);n.columns=g.computeColumnIndex(n.$table.children("thead, tfoot").children("tr"));d=n.cssIcon?'<i class="'+(n.cssIcon===g.css.icon?g.css.icon:n.cssIcon+" "+g.css.icon)+'"></i>':"";n.$headers=h(b).find(n.selectorHeaders).each(function(k){c=h(this);a=g.getColumnData(b,n.headers,k,!0);n.headerContent[k]=h(this).html();""!==n.headerTemplate&&(l=n.headerTemplate.replace(/\{content\}/g,h(this).html()).replace(/\{icon\}/g, d),n.onRenderTemplate&&(e=n.onRenderTemplate.apply(c,[k,l]))&&"string"===typeof e&&(l=e),h(this).html('<div class="'+g.css.headerIn+'">'+l+"</div>"));n.onRenderHeader&&n.onRenderHeader.apply(c,[k,n,n.$table]);this.column=parseInt(h(this).attr("data-column"),10);this.order=F(g.getData(c,a,"sortInitialOrder")||n.sortInitialOrder)?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=!1;v=g.getData(c,a,"lockedOrder")||!1;"undefined"!==typeof v&&!1!==v&&(this.order=this.lockedOrder=F(v)?[1,1,1]:[0,0,0]);c.addClass(g.css.header+ " "+n.cssHeader);n.headerList[k]=this;c.parent().addClass(g.css.headerRow+" "+n.cssHeaderRow).attr("role","row");n.tabIndex&&c.attr("tabindex",0)}).attr({scope:"col",role:"columnheader"});H(b);n.debug&&(u("Built headers:",k),f(n.$headers))}function I(b,a,c){var e=b.config;e.$table.find(e.selectorRemove).remove();q(b);z(b);J(e.$table,a,c)}function H(b){var a,c,e,d=b.config;d.$headers.each(function(l,f){c=h(f);e=g.getColumnData(b,d.headers,l,!0);a="false"===g.getData(f,e,"sorter")||"false"===g.getData(f, e,"parser");f.sortDisabled=a;c[a?"addClass":"removeClass"]("sorter-false").attr("aria-disabled",""+a);b.id&&(a?c.removeAttr("aria-controls"):c.attr("aria-controls",b.id))})}function G(b){var a,c,e=b.config,d=e.sortList,l=d.length,f=g.css.sortNone+" "+e.cssNone,k=[g.css.sortAsc+" "+e.cssAsc,g.css.sortDesc+" "+e.cssDesc],n=[e.cssIconAsc,e.cssIconDesc,e.cssIconNone],p=["ascending","descending"],m=h(b).find("tfoot tr").children().add(e.$extraHeaders).removeClass(k.join(" "));e.$headers.removeClass(k.join(" ")).addClass(f).attr("aria-sort", "none").find("."+e.cssIcon).removeClass(n.join(" ")).addClass(n[2]);for(a=0;a<l;a++)if(2!==d[a][1]&&(b=e.$headers.not(".sorter-false").filter('[data-column="'+d[a][0]+'"]'+(1===l?":last":"")),b.length)){for(c=0;c<b.length;c++)b[c].sortDisabled||b.eq(c).removeClass(f).addClass(k[d[a][1]]).attr("aria-sort",p[d[a][1]]).find("."+e.cssIcon).removeClass(n[2]).addClass(n[d[a][1]]);m.length&&m.filter('[data-column="'+d[a][0]+'"]').removeClass(f).addClass(k[d[a][1]])}e.$headers.not(".sorter-false").each(function(){var b= h(this),a=this.order[(this.count+1)%(e.sortReset?3:2)],a=b.text()+": "+g.language[b.hasClass(g.css.sortAsc)?"sortAsc":b.hasClass(g.css.sortDesc)?"sortDesc":"sortNone"]+g.language[0===a?"nextAsc":1===a?"nextDesc":"nextNone"];b.attr("aria-label",a)})}function Q(b){var a,c,e=b.config;e.widthFixed&&0===e.$table.children("colgroup").length&&(a=h("<colgroup>"),c=h(b).width(),h(b.tBodies).not("."+e.cssInfoBlock).find("tr:first").children(":visible").each(function(){a.append(h("<col>").css("width",parseInt(h(this).width()/ c*1E3,10)/10+"%"))}),e.$table.prepend(a))}function R(b,a){var c,e,d,l,g,k=b.config,f=a||k.sortList;k.sortList=[];h.each(f,function(b,a){l=parseInt(a[0],10);if(d=k.$headers.filter('[data-column="'+l+'"]:last')[0]){e=(e=(""+a[1]).match(/^(1|d|s|o|n)/))?e[0]:"";switch(e){case "1":case "d":e=1;break;case "s":e=g||0;break;case "o":c=d.order[(g||0)%(k.sortReset?3:2)];e=0===c?1:1===c?0:2;break;case "n":d.count+=1;e=d.order[d.count%(k.sortReset?3:2)];break;default:e=0}g=0===b?e:g;c=[l,parseInt(e,10)||0]; k.sortList.push(c);e=h.inArray(c[1],d.order);d.count=0<=e?e:c[1]%(k.sortReset?3:2)}})}function S(b,a){return b&&b[a]?b[a].type||"":""}function N(b,a,c){if(b.isUpdating)return setTimeout(function(){N(b,a,c)},50);var e,d,l,f,k=b.config,n=!c[k.sortMultiSortKey],p=k.$table;p.trigger("sortStart",b);a.count=c[k.sortResetKey]?2:(a.count+1)%(k.sortReset?3:2);k.sortRestart&&(d=a,k.$headers.each(function(){this===d||!n&&h(this).is("."+g.css.sortDesc+",."+g.css.sortAsc)||(this.count=-1)}));d=parseInt(h(a).attr("data-column"), 10);if(n){k.sortList=[];if(null!==k.sortForce)for(e=k.sortForce,l=0;l<e.length;l++)e[l][0]!==d&&k.sortList.push(e[l]);e=a.order[a.count];if(2>e&&(k.sortList.push([d,e]),1<a.colSpan))for(l=1;l<a.colSpan;l++)k.sortList.push([d+l,e])}else{if(k.sortAppend&&1<k.sortList.length)for(l=0;l<k.sortAppend.length;l++)f=g.isValueInArray(k.sortAppend[l][0],k.sortList),0<=f&&k.sortList.splice(f,1);if(0<=g.isValueInArray(d,k.sortList))for(l=0;l<k.sortList.length;l++)f=k.sortList[l],e=k.$headers.filter('[data-column="'+ f[0]+'"]:last')[0],f[0]===d&&(f[1]=e.order[a.count],2===f[1]&&(k.sortList.splice(l,1),e.count=-1));else if(e=a.order[a.count],2>e&&(k.sortList.push([d,e]),1<a.colSpan))for(l=1;l<a.colSpan;l++)k.sortList.push([d+l,e])}if(null!==k.sortAppend)for(e=k.sortAppend,l=0;l<e.length;l++)e[l][0]!==d&&k.sortList.push(e[l]);p.trigger("sortBegin",b);setTimeout(function(){G(b);K(b);A(b);p.trigger("sortEnd",b)},1)}function K(b){var a,c,e,d,l,f,k,h,p,w,q,r=0,s=b.config,t=s.textSorter||"",y=s.sortList,x=y.length,z= b.tBodies.length;if(!s.serverSideSorting&&!m(s.cache)){s.debug&&(l=new Date);for(c=0;c<z;c++)f=s.cache[c].colMax,k=s.cache[c].normalized,k.sort(function(c,l){for(a=0;a<x;a++){d=y[a][0];h=y[a][1];r=0===h;if(s.sortStable&&c[d]===l[d]&&1===x)break;(e=/n/i.test(S(s.parsers,d)))&&s.strings[d]?(e="boolean"===typeof s.string[s.strings[d]]?(r?1:-1)*(s.string[s.strings[d]]?-1:1):s.strings[d]?s.string[s.strings[d]]||0:0,p=s.numberSorter?s.numberSorter(c[d],l[d],r,f[d],b):g["sortNumeric"+(r?"Asc":"Desc")](c[d], l[d],e,f[d],d,b)):(w=r?c:l,q=r?l:c,p="function"===typeof t?t(w[d],q[d],r,d,b):"object"===typeof t&&t.hasOwnProperty(d)?t[d](w[d],q[d],r,d,b):g["sortNatural"+(r?"Asc":"Desc")](c[d],l[d],d,b,s));if(p)return p}return c[s.columns].order-l[s.columns].order});s.debug&&u("Sorting on "+y.toString()+" and dir "+h+" time",l)}}function O(b,a){var c=b[0];c.isUpdating&&b.trigger("updateComplete",c);h.isFunction(a)&&a(b[0])}function J(b,a,c){var e=b[0].config.sortList;!1!==a&&!b[0].isProcessing&&e.length?b.trigger("sorton", [e,function(){O(b,c)},!0]):(O(b,c),g.applyWidget(b[0],!1))}function P(b){var a=b.config,c=a.$table;c.unbind("sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(a.namespace+" ")).bind("sortReset"+a.namespace,function(c,d){c.stopPropagation();a.sortList=[];G(b);K(b);A(b);h.isFunction(d)&&d(b)}).bind("updateAll"+a.namespace,function(c,d,l){c.stopPropagation();b.isUpdating= !0;g.refreshWidgets(b,!0,!0);g.restoreHeaders(b);E(b);g.bindEvents(b,a.$headers,!0);P(b);I(b,d,l)}).bind("update"+a.namespace+" updateRows"+a.namespace,function(a,c,l){a.stopPropagation();b.isUpdating=!0;H(b);I(b,c,l)}).bind("updateCell"+a.namespace,function(e,d,l,g){e.stopPropagation();b.isUpdating=!0;c.find(a.selectorRemove).remove();var k,f,p;f=c.find("tbody");p=h(d);e=f.index(h.fn.closest?p.closest("tbody"):p.parents("tbody").filter(":first"));k=h.fn.closest?p.closest("tr"):p.parents("tr").filter(":first"); d=p[0];f.length&&0<=e&&(f=f.eq(e).find("tr").index(k),p=p.index(),a.cache[e].normalized[f][a.columns].$row=k,k="undefined"===typeof a.extractors[p].id?t(b,d,p):a.extractors[p].format(t(b,d,p),b,d,p),d="no-parser"===a.parsers[p].id?"":a.parsers[p].format(k,b,d,p),a.cache[e].normalized[f][p]=a.ignoreCase&&"string"===typeof d?d.toLowerCase():d,"numeric"===(a.parsers[p].type||"").toLowerCase()&&(a.cache[e].colMax[p]=Math.max(Math.abs(d)||0,a.cache[e].colMax[p]||0)),J(c,l,g))}).bind("addRows"+a.namespace, function(e,d,l,g){e.stopPropagation();b.isUpdating=!0;if(m(a.cache))H(b),I(b,l,g);else{d=h(d).attr("role","row");var k,f,p,u,B,r=d.filter("tr").length,s=c.find("tbody").index(d.parents("tbody").filter(":first"));a.parsers&&a.parsers.length||q(b);for(e=0;e<r;e++){f=d[e].cells.length;B=[];u={child:[],$row:d.eq(e),order:a.cache[s].normalized.length};for(k=0;k<f;k++)p="undefined"===typeof a.extractors[k].id?t(b,d[e].cells[k],k):a.extractors[k].format(t(b,d[e].cells[k],k),b,d[e].cells[k],k),p="no-parser"=== a.parsers[k].id?"":a.parsers[k].format(p,b,d[e].cells[k],k),B[k]=a.ignoreCase&&"string"===typeof p?p.toLowerCase():p,"numeric"===(a.parsers[k].type||"").toLowerCase()&&(a.cache[s].colMax[k]=Math.max(Math.abs(B[k])||0,a.cache[s].colMax[k]||0));B.push(u);a.cache[s].normalized.push(B)}J(c,l,g)}}).bind("updateComplete"+a.namespace,function(){b.isUpdating=!1}).bind("sorton"+a.namespace,function(a,d,l,f){var k=b.config;a.stopPropagation();c.trigger("sortStart",this);R(b,d);G(b);k.delayInit&&m(k.cache)&& z(b);c.trigger("sortBegin",this);K(b);A(b,f);c.trigger("sortEnd",this);g.applyWidget(b);h.isFunction(l)&&l(b)}).bind("appendCache"+a.namespace,function(a,c,g){a.stopPropagation();A(b,g);h.isFunction(c)&&c(b)}).bind("updateCache"+a.namespace,function(c,d){a.parsers&&a.parsers.length||q(b);z(b);h.isFunction(d)&&d(b)}).bind("applyWidgetId"+a.namespace,function(c,d){c.stopPropagation();g.getWidgetById(d).format(b,a,a.widgetOptions)}).bind("applyWidgets"+a.namespace,function(a,c){a.stopPropagation();g.applyWidget(b, c)}).bind("refreshWidgets"+a.namespace,function(a,c,l){a.stopPropagation();g.refreshWidgets(b,c,l)}).bind("destroy"+a.namespace,function(a,c,l){a.stopPropagation();g.destroy(b,c,l)}).bind("resetToLoadState"+a.namespace,function(){g.refreshWidgets(b,!0,!0);a=h.extend(!0,g.defaults,a.originalSettings);b.hasInitialized=!1;g.setup(b,a)})}var g=this;g.version="2.18.3";g.parsers=[];g.widgets=[];g.defaults={theme:"default",widthFixed:!1,showProcessing:!1,headerTemplate:"{content}",onRenderTemplate:null, onRenderHeader:null,cancelSelection:!0,tabIndex:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortStable:!1,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"basic",textAttribute:"data-text",textSorter:null,numberSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:!0, widgetClass:"widget-{name}",initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssNone:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssIcon:"tablesorter-icon",cssIconNone:"",cssIconAsc:"",cssIconDesc:"",cssInfoBlock:"tablesorter-infoOnly",cssAllowClicks:"tablesorter-allowClicks",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]};g.css={table:"tablesorter",cssHasChild:"tablesorter-hasChildRow", childRow:"tablesorter-childRow",header:"tablesorter-header",headerRow:"tablesorter-headerRow",headerIn:"tablesorter-header-inner",icon:"tablesorter-icon",info:"tablesorter-infoOnly",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc",sortNone:"tablesorter-headerUnSorted"};g.language={sortAsc:"Ascending sort applied, ",sortDesc:"Descending sort applied, ",sortNone:"No sort applied, ",nextAsc:"activate to apply an ascending sort",nextDesc:"activate to apply a descending sort", nextNone:"activate to remove the sort"};g.log=f;g.benchmark=u;g.construct=function(b){return this.each(function(){var a=h.extend(!0,{},g.defaults,b);a.originalSettings=b;!this.hasInitialized&&g.buildTable&&"TABLE"!==this.tagName?g.buildTable(this,a):g.setup(this,a)})};g.setup=function(b,a){if(!b||!b.tHead||0===b.tBodies.length||!0===b.hasInitialized)return a.debug?f("ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized"):"";var c="",e=h(b),d=h.metadata; b.hasInitialized=!1;b.isProcessing=!0;b.config=a;h.data(b,"tablesorter",a);a.debug&&h.data(b,"startoveralltimer",new Date);a.supportsDataObject=function(a){a[0]=parseInt(a[0],10);return 1<a[0]||1===a[0]&&4<=parseInt(a[1],10)}(h.fn.jquery.split("."));a.string={max:1,min:-1,emptymin:1,emptymax:-1,zero:0,none:0,"null":0,top:!0,bottom:!1};a.emptyTo=a.emptyTo.toLowerCase();a.stringTo=a.stringTo.toLowerCase();/tablesorter\-/.test(e.attr("class"))||(c=""!==a.theme?" tablesorter-"+a.theme:"");a.table=b;a.$table= e.addClass(g.css.table+" "+a.tableClass+c).attr("role","grid");a.$headers=e.find(a.selectorHeaders);a.namespace=a.namespace?"."+a.namespace.replace(/\W/g,""):".tablesorter"+Math.random().toString(16).slice(2);a.$table.children().children("tr").attr("role","row");a.$tbodies=e.children("tbody:not(."+a.cssInfoBlock+")").attr({"aria-live":"polite","aria-relevant":"all"});a.$table.children("caption").length&&(c=a.$table.children("caption")[0],c.id||(c.id=a.namespace.slice(1)+"caption"),a.$table.attr("aria-labelledby", c.id));a.widgetInit={};a.textExtraction=a.$table.attr("data-text-extraction")||a.textExtraction||"basic";E(b);Q(b);q(b);a.totalRows=0;a.delayInit||z(b);g.bindEvents(b,a.$headers,!0);P(b);a.supportsDataObject&&"undefined"!==typeof e.data().sortlist?a.sortList=e.data().sortlist:d&&e.metadata()&&e.metadata().sortlist&&(a.sortList=e.metadata().sortlist);g.applyWidget(b,!0);0<a.sortList.length?e.trigger("sorton",[a.sortList,{},!a.initWidgets,!0]):(G(b),a.initWidgets&&g.applyWidget(b,!1));a.showProcessing&& e.unbind("sortBegin"+a.namespace+" sortEnd"+a.namespace).bind("sortBegin"+a.namespace+" sortEnd"+a.namespace,function(c){clearTimeout(a.processTimer);g.isProcessing(b);"sortBegin"===c.type&&(a.processTimer=setTimeout(function(){g.isProcessing(b,!0)},500))});b.hasInitialized=!0;b.isProcessing=!1;a.debug&&g.benchmark("Overall initialization time",h.data(b,"startoveralltimer"));e.trigger("tablesorter-initialized",b);"function"===typeof a.initialized&&a.initialized(b)};g.getColumnData=function(b,a,c, e){if("undefined"!==typeof a&&null!==a){b=h(b)[0];var d;b=b.config;if(a[c])return e?a[c]:a[b.$headers.index(b.$headers.filter('[data-column="'+c+'"]:last'))];for(d in a)if("string"===typeof d&&(e=b.$headers.filter('[data-column="'+c+'"]:last').filter(d).add(b.$headers.filter('[data-column="'+c+'"]:last').find(d)),e.length))return a[d]}};g.computeColumnIndex=function(b){var a=[],c=0,e,d,g,f,k,n,p,m,u,r;for(e=0;e<b.length;e++)for(k=b[e].cells,d=0;d<k.length;d++){g=k[d];f=h(g);n=g.parentNode.rowIndex; f.index();p=g.rowSpan||1;m=g.colSpan||1;"undefined"===typeof a[n]&&(a[n]=[]);for(g=0;g<a[n].length+1;g++)if("undefined"===typeof a[n][g]){u=g;break}c=Math.max(u,c);f.attr({"data-column":u});for(g=n;g<n+p;g++)for("undefined"===typeof a[g]&&(a[g]=[]),r=a[g],f=u;f<u+m;f++)r[f]="x"}return c+1};g.isProcessing=function(b,a,c){b=h(b);var e=b[0].config,d=c||b.find("."+g.css.header);a?("undefined"!==typeof c&&0<e.sortList.length&&(d=d.filter(function(){return this.sortDisabled?!1:0<=g.isValueInArray(parseFloat(h(this).attr("data-column")), e.sortList)})),b.add(d).addClass(g.css.processing+" "+e.cssProcessing)):b.add(d).removeClass(g.css.processing+" "+e.cssProcessing)};g.processTbody=function(b,a,c){b=h(b)[0];if(c)return b.isProcessing=!0,a.before('<span class="tablesorter-savemyplace"/>'),c=h.fn.detach?a.detach():a.remove();c=h(b).find("span.tablesorter-savemyplace");a.insertAfter(c);c.remove();b.isProcessing=!1};g.clearTableBody=function(b){h(b)[0].config.$tbodies.children().detach()};g.bindEvents=function(b,a,c){b=h(b)[0];var e, d=b.config;!0!==c&&(d.$extraHeaders=d.$extraHeaders?d.$extraHeaders.add(a):a);a.find(d.selectorSort).add(a.filter(d.selectorSort)).unbind(["mousedown","mouseup","sort","keyup",""].join(d.namespace+" ")).bind(["mousedown","mouseup","sort","keyup",""].join(d.namespace+" "),function(c,g){var f;f=c.type;if(!(1!==(c.which||c.button)&&!/sort|keyup/.test(f)||"keyup"===f&&13!==c.which||"mouseup"===f&&!0!==g&&250<(new Date).getTime()-e)){if("mousedown"===f)return e=(new Date).getTime(),/(input|select|button|textarea)/i.test(c.target.tagName)|| h(c.target).closest("td,th").hasClass(d.cssAllowClicks)?"":!d.cancelSelection;d.delayInit&&m(d.cache)&&z(b);f=h.fn.closest?h(this).closest("th, td")[0]:/TH|TD/.test(this.tagName)?this:h(this).parents("th, td")[0];f=d.$headers[a.index(f)];f.sortDisabled||N(b,f,c)}});d.cancelSelection&&a.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})};g.restoreHeaders=function(b){var a=h(b)[0].config;a.$table.find(a.selectorHeaders).each(function(b){h(this).find("."+ g.css.headerIn).length&&h(this).html(a.headerContent[b])})};g.destroy=function(b,a,c){b=h(b)[0];if(b.hasInitialized){g.refreshWidgets(b,!0,!0);var e=h(b),d=b.config,f=e.find("thead:first"),m=f.find("tr."+g.css.headerRow).removeClass(g.css.headerRow+" "+d.cssHeaderRow),k=e.find("tfoot:first > tr").children("th, td");!1===a&&0<=h.inArray("uitheme",d.widgets)&&(e.trigger("applyWidgetId",["uitheme"]),e.trigger("applyWidgetId",["zebra"]));f.find("tr").not(m).remove();e.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd resetToLoadState ".split(" ").join(d.namespace+ " "));d.$headers.add(k).removeClass([g.css.header,d.cssHeader,d.cssAsc,d.cssDesc,g.css.sortAsc,g.css.sortDesc,g.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled","true");m.find(d.selectorSort).unbind(["mousedown","mouseup","keypress",""].join(d.namespace+" "));g.restoreHeaders(b);e.toggleClass(g.css.table+" "+d.tableClass+" tablesorter-"+d.theme,!1===a);b.hasInitialized=!1;delete b.config.cache;"function"===typeof c&&c(b)}};g.regex={chunk:/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i};g.sortNatural=function(b,a){if(b===a)return 0;var c,e,d,f,h,k;e=g.regex;if(e.hex.test(a)){c=parseInt(b.match(e.hex),16);d=parseInt(a.match(e.hex),16);if(c<d)return-1;if(c>d)return 1}c=b.replace(e.chunk,"\\0$1\\0").replace(e.chunks,"").split("\\0");e=a.replace(e.chunk,"\\0$1\\0").replace(e.chunks,"").split("\\0");k=Math.max(c.length,e.length);for(h=0;h<k;h++){d=isNaN(c[h])?c[h]||0:parseFloat(c[h])||0;f=isNaN(e[h])?e[h]||0:parseFloat(e[h])||0;if(isNaN(d)!== isNaN(f))return isNaN(d)?1:-1;typeof d!==typeof f&&(d+="",f+="");if(d<f)return-1;if(d>f)return 1}return 0};g.sortNaturalAsc=function(b,a,c,e,d){if(b===a)return 0;c=d.string[d.empties[c]||d.emptyTo];return""===b&&0!==c?"boolean"===typeof c?c?-1:1:-c||-1:""===a&&0!==c?"boolean"===typeof c?c?1:-1:c||1:g.sortNatural(b,a)};g.sortNaturalDesc=function(b,a,c,e,d){if(b===a)return 0;c=d.string[d.empties[c]||d.emptyTo];return""===b&&0!==c?"boolean"===typeof c?c?-1:1:c||1:""===a&&0!==c?"boolean"===typeof c?c? 1:-1:-c||-1:g.sortNatural(a,b)};g.sortText=function(b,a){return b>a?1:b<a?-1:0};g.getTextValue=function(b,a,c){if(c){var e=b?b.length:0,d=c+a;for(c=0;c<e;c++)d+=b.charCodeAt(c);return a*d}return 0};g.sortNumericAsc=function(b,a,c,e,d,f){if(b===a)return 0;f=f.config;d=f.string[f.empties[d]||f.emptyTo];if(""===b&&0!==d)return"boolean"===typeof d?d?-1:1:-d||-1;if(""===a&&0!==d)return"boolean"===typeof d?d?1:-1:d||1;isNaN(b)&&(b=g.getTextValue(b,c,e));isNaN(a)&&(a=g.getTextValue(a,c,e));return b-a};g.sortNumericDesc= function(b,a,c,e,d,f){if(b===a)return 0;f=f.config;d=f.string[f.empties[d]||f.emptyTo];if(""===b&&0!==d)return"boolean"===typeof d?d?-1:1:d||1;if(""===a&&0!==d)return"boolean"===typeof d?d?1:-1:-d||-1;isNaN(b)&&(b=g.getTextValue(b,c,e));isNaN(a)&&(a=g.getTextValue(a,c,e));return a-b};g.sortNumeric=function(b,a){return b-a};g.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119", E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};g.replaceAccents=function(b){var a,c="[",e=g.characterEquivalents;if(!g.characterRegex){g.characterRegexArray={};for(a in e)"string"===typeof a&&(c+=e[a],g.characterRegexArray[a]=new RegExp("["+e[a]+"]","g"));g.characterRegex= new RegExp(c+"]")}if(g.characterRegex.test(b))for(a in e)"string"===typeof a&&(b=b.replace(g.characterRegexArray[a],a));return b};g.isValueInArray=function(b,a){var c,e=a.length;for(c=0;c<e;c++)if(a[c][0]===b)return c;return-1};g.addParser=function(b){var a,c=g.parsers.length,e=!0;for(a=0;a<c;a++)g.parsers[a].id.toLowerCase()===b.id.toLowerCase()&&(e=!1);e&&g.parsers.push(b)};g.getParserById=function(b){if("false"==b)return!1;var a,c=g.parsers.length;for(a=0;a<c;a++)if(g.parsers[a].id.toLowerCase()=== b.toString().toLowerCase())return g.parsers[a];return!1};g.addWidget=function(b){g.widgets.push(b)};g.hasWidget=function(b,a){b=h(b);return b.length&&b[0].config&&b[0].config.widgetInit[a]||!1};g.getWidgetById=function(b){var a,c,e=g.widgets.length;for(a=0;a<e;a++)if((c=g.widgets[a])&&c.hasOwnProperty("id")&&c.id.toLowerCase()===b.toLowerCase())return c};g.applyWidget=function(b,a){b=h(b)[0];var c=b.config,e=c.widgetOptions,d=" "+c.table.className+" ",f=[],m,k,n;!1!==a&&b.hasInitialized&&(b.isApplyingWidgets|| b.isUpdating)||(c.debug&&(m=new Date),n=new RegExp("\\s"+c.widgetClass.replace(/\{name\}/i,"([\\w-]+)")+"\\s","g"),d.match(n)&&(d=d.match(n))&&h.each(d,function(a,b){c.widgets.push(b.replace(n,"$1"))}),c.widgets.length&&(b.isApplyingWidgets=!0,c.widgets=h.grep(c.widgets,function(a,b){return h.inArray(a,c.widgets)===b}),h.each(c.widgets||[],function(a,b){(n=g.getWidgetById(b))&&n.id&&(n.priority||(n.priority=10),f[a]=n)}),f.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority? 0:1}),h.each(f,function(d,f){if(f){if(a||!c.widgetInit[f.id])c.widgetInit[f.id]=!0,f.hasOwnProperty("options")&&(e=b.config.widgetOptions=h.extend(!0,{},f.options,e)),f.hasOwnProperty("init")&&(c.debug&&(k=new Date),f.init(b,f,c,e),c.debug&&g.benchmark("Initializing "+f.id+" widget",k));!a&&f.hasOwnProperty("format")&&(c.debug&&(k=new Date),f.format(b,c,e,!1),c.debug&&g.benchmark((a?"Initializing ":"Applying ")+f.id+" widget",k))}})),setTimeout(function(){b.isApplyingWidgets=!1;h.data(b,"lastWidgetApplication", new Date)},0),c.debug&&(d=c.widgets.length,u("Completed "+(!0===a?"initializing ":"applying ")+d+" widget"+(1!==d?"s":""),m)))};g.refreshWidgets=function(b,a,c){b=h(b)[0];var e,d=b.config,l=d.widgets,m=g.widgets,k=m.length;for(e=0;e<k;e++)m[e]&&m[e].id&&(a||0>h.inArray(m[e].id,l))&&(d.debug&&f('Refeshing widgets: Removing "'+m[e].id+'"'),m[e].hasOwnProperty("remove")&&d.widgetInit[m[e].id]&&(m[e].remove(b,d,d.widgetOptions),d.widgetInit[m[e].id]=!1));!0!==c&&g.applyWidget(b,a)};g.getData=function(b, a,c){var e="";b=h(b);var d,f;if(!b.length)return"";d=h.metadata?b.metadata():!1;f=" "+(b.attr("class")||"");"undefined"!==typeof b.data(c)||"undefined"!==typeof b.data(c.toLowerCase())?e+=b.data(c)||b.data(c.toLowerCase()):d&&"undefined"!==typeof d[c]?e+=d[c]:a&&"undefined"!==typeof a[c]?e+=a[c]:" "!==f&&f.match(" "+c+"-")&&(e=f.match(new RegExp("\\s"+c+"-([\\w-]+)"))[1]||"");return h.trim(e)};g.formatFloat=function(b,a){if("string"!==typeof b||""===b)return b;var c;b=(a&&a.config?!1!==a.config.usNumberFormat: "undefined"!==typeof a?a:1)?b.replace(/,/g,""):b.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(b)&&(b=b.replace(/^\s*\(([.\d]+)\)/,"-$1"));c=parseFloat(b);return isNaN(c)?h.trim(b):c};g.isDigit=function(b){return isNaN(b)?/^[\-+(]?\d+[)]?$/.test(b.toString().replace(/[,.'"\s]/g,"")):!0}}});var q=h.tablesorter;h.fn.extend({tablesorter:q.construct});q.addParser({id:"no-parser",is:function(){return!1},format:function(){return""},type:"text"});q.addParser({id:"text",is:function(){return!0}, format:function(f,u){var m=u.config;f&&(f=h.trim(m.ignoreCase?f.toLocaleLowerCase():f),f=m.sortLocaleCompare?q.replaceAccents(f):f);return f},type:"text"});q.addParser({id:"digit",is:function(f){return q.isDigit(f)},format:function(f,u){var m=q.formatFloat((f||"").replace(/[^\w,. \-()]/g,""),u);return f&&"number"===typeof m?m:f?h.trim(f&&u.config.ignoreCase?f.toLocaleLowerCase():f):f},type:"numeric"});q.addParser({id:"currency",is:function(f){return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((f|| "").replace(/[+\-,. ]/g,""))},format:function(f,u){var m=q.formatFloat((f||"").replace(/[^\w,. \-()]/g,""),u);return f&&"number"===typeof m?m:f?h.trim(f&&u.config.ignoreCase?f.toLocaleLowerCase():f):f},type:"numeric"});q.addParser({id:"url",is:function(f){return/^(https?|ftp|file):\/\//.test(f)},format:function(f){return f?h.trim(f.replace(/(https?|ftp|file):\/\//,"")):f},parsed:!0,type:"text"});q.addParser({id:"isoDate",is:function(f){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(f)},format:function(f, h){var m=f?new Date(f.replace(/-/g,"/")):f;return m instanceof Date&&isFinite(m)?m.getTime():f},type:"numeric"});q.addParser({id:"percent",is:function(f){return/(\d\s*?%|%\s*?\d)/.test(f)&&15>f.length},format:function(f,h){return f?q.formatFloat(f.replace(/%/g,""),h):f},type:"numeric"});q.addParser({id:"image",is:function(f,h,m,q){return 0<q.find("img").length},format:function(f,u,m){return h(m).find("img").attr(u.config.imgAttr||"alt")||f},parsed:!0,type:"text"});q.addParser({id:"usLongDate",is:function(f){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(f)|| /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(f)},format:function(f,h){var m=f?new Date(f.replace(/(\S)([AP]M)$/i,"$1 $2")):f;return m instanceof Date&&isFinite(m)?m.getTime():f},type:"numeric"});q.addParser({id:"shortDate",is:function(f){return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((f||"").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(f,h,m,t){if(f){m=h.config;var x=m.$headers.filter("[data-column="+t+"]:last");t=x.length&&x[0].dateFormat||q.getData(x, q.getColumnData(h,m.headers,t),"dateFormat")||m.dateFormat;h=f.replace(/\s+/g," ").replace(/[\-.,]/g,"/");"mmddyyyy"===t?h=h.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2"):"ddmmyyyy"===t?h=h.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===t&&(h=h.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3"));h=new Date(h);return h instanceof Date&&isFinite(h)?h.getTime():f}return f},type:"numeric"});q.addParser({id:"time",is:function(f){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(f)}, format:function(f,h){var m=f?new Date("2000/01/01 "+f.replace(/(\S)([AP]M)$/i,"$1 $2")):f;return m instanceof Date&&isFinite(m)?m.getTime():f},type:"numeric"});q.addParser({id:"metadata",is:function(){return!1},format:function(f,q,m){f=q.config;f=f.parserMetadataName?f.parserMetadataName:"sortValue";return h(m).metadata()[f]},type:"numeric"});q.addWidget({id:"zebra",priority:90,format:function(f,q,m){var t,x,z,A,F=new RegExp(q.cssChildRow,"i"),E=q.$tbodies;for(f=0;f<E.length;f++)z=0,t=E.eq(f),t=t.children("tr:visible").not(q.selectorRemove), t.each(function(){x=h(this);F.test(this.className)||z++;A=0===z%2;x.removeClass(m.zebra[A?1:0]).addClass(m.zebra[A?0:1])})},remove:function(f,h,m){var t;h=h.$tbodies;var x=(m.zebra||["even","odd"]).join(" ");for(m=0;m<h.length;m++)t=q.processTbody(f,h.eq(m),!0),t.children().removeClass(x),q.processTbody(f,t,!1)}})}(jQuery);
/*! tableSorter (FORK) 2.16+ widgets - updated 11/7/2014 (v2.18.3) */
;(function(k,z){var e=k.tablesorter=k.tablesorter||{};e.themes={bootstrap:{table:"table table-bordered table-striped",caption:"caption",header:"bootstrap-header",footerRow:"",footerCells:"",icons:"",sortNone:"bootstrap-icon-unsorted",sortAsc:"icon-chevron-up glyphicon glyphicon-chevron-up",sortDesc:"icon-chevron-down glyphicon glyphicon-chevron-down",active:"",hover:"",filterRow:"",even:"",odd:""},jui:{table:"ui-widget ui-widget-content ui-corner-all",caption:"ui-widget-content",header:"ui-widget-header ui-corner-all ui-state-default",footerRow:"",footerCells:"",icons:"ui-icon",sortNone:"ui-icon-carat-2-n-s",sortAsc:"ui-icon-carat-1-n",sortDesc:"ui-icon-carat-1-s",active:"ui-state-active",hover:"ui-state-hover",filterRow:"",even:"ui-widget-content",odd:"ui-state-default"}};k.extend(e.css,{filterRow:"tablesorter-filter-row",filter:"tablesorter-filter",wrapper:"tablesorter-wrapper",resizer:"tablesorter-resizer",sticky:"tablesorter-stickyHeader",stickyVis:"tablesorter-sticky-visible",stickyWrap:"tablesorter-sticky-wrapper"});e.storage=function(c,a,b,d){c=k(c)[0];var e,h,g=!1;e={};h=c.config;var m=k(c);c=d&&d.id||m.attr(d&&d.group||"data-table-group")||c.id||k(".tablesorter").index(m);d=d&&d.url||m.attr(d&&d.page||"data-table-page")||h&&h.fixedUrl||z.location.pathname;if("localStorage"in z)try{z.localStorage.setItem("_tmptest","temp"),g=!0,z.localStorage.removeItem("_tmptest")}catch(n){}k.parseJSON&&(g?e=k.parseJSON(localStorage[a]||"{}"):(h=document.cookie.split(/[;\s|=]/),e=k.inArray(a,h)+1,e=0!==e?k.parseJSON(h[e]||"{}"):{}));if((b||""===b)&&z.JSON&&JSON.hasOwnProperty("stringify"))e[d]||(e[d]={}),e[d][c]=b,g?localStorage[a]=JSON.stringify(e):(b=new Date,b.setTime(b.getTime()+31536E6),document.cookie=a+"="+JSON.stringify(e).replace(/\"/g,'"')+"; expires="+b.toGMTString()+"; path=/");else return e&&e[d]?e[d][c]:""};e.addHeaderResizeEvent=function(c,a,b){c=k(c)[0];var d;b=k.extend({},{timer:250},b);var e=c.config,h=e.widgetOptions,g=function(a){h.resize_flag=!0;d=[];e.$headers.each(function(){var a=k(this),b=a.data("savedSizes")||[0,0],c=this.offsetWidth,e=this.offsetHeight;if(c!==b[0]||e!==b[1])a.data("savedSizes",[c,e]),d.push(this)});d.length&&!1!==a&&e.$table.trigger("resize",[d]);h.resize_flag=!1};g(!1);clearInterval(h.resize_timer);if(a)return h.resize_flag=!1;h.resize_timer=setInterval(function(){h.resize_flag||g()},b.timer)};e.addWidget({id:"uitheme",priority:10,format:function(c,a,b){var d,f,h,g=e.themes;d=a.$table;var m=a.$headers,n=a.theme||"jui",p=g[n]||g.jui,g=[p.sortNone,p.sortDesc,p.sortAsc,p.active].join(" ");a.debug&&(f=new Date);d.hasClass("tablesorter-"+n)&&a.theme===a.appliedTheme&&c.hasInitialized||(h=(c=p[a.appliedTheme]||{},[c.sortNone,c.sortDesc,c.sortAsc,c.active].join(" ")),c&&(b.zebra[0]=b.zebra[0].replace(" "+c.even,""),b.zebra[1]=b.zebra[1].replace(" "+c.odd,"")),""!==p.even&&(b.zebra[0]+=" "+p.even),""!==p.odd&&(b.zebra[1]+=" "+p.odd),d.children("caption").removeClass(c.caption).addClass(p.caption),b=d.removeClass(a.appliedTheme?"tablesorter-"+(a.appliedTheme||""):"").addClass("tablesorter-"+n+" "+p.table).children("tfoot"),b.length&&b.children("tr").removeClass(c.footerRow||"").addClass(p.footerRow).children("th, td").removeClass(c.footerCells||"").addClass(p.footerCells),m.add(a.$extraHeaders).removeClass(c.header+" "+c.hover+" "+h).addClass(p.header).not(".sorter-false").bind("mouseenter.tsuitheme mouseleave.tsuitheme",function(a){k(this)["mouseenter"===a.type?"addClass":"removeClass"](p.hover)}),m.find("."+e.css.wrapper).length||m.wrapInner('<div class="'+e.css.wrapper+'" style="position:relative;height:100%;width:100%"></div>'),a.cssIcon&&m.find("."+e.css.icon).removeClass(c.icons+" "+h).addClass(p.icons),d.hasClass("hasFilters")&&d.children("thead").children("."+e.css.filterRow).removeClass(c.filterRow).addClass(p.filterRow),a.appliedTheme=a.theme);for(d=0;d<a.columns;d++)b=a.$headers.add(a.$extraHeaders).not(".sorter-false").filter('[data-column="'+d+'"]'),c=e.css.icon?b.find("."+e.css.icon):b,h=m.not(".sorter-false").filter('[data-column="'+d+'"]:last'),h.length&&(h[0].sortDisabled?(b.removeClass(g),c.removeClass(g+" "+p.icons)):(h=b.hasClass(e.css.sortAsc)?p.sortAsc:b.hasClass(e.css.sortDesc)?p.sortDesc:b.hasClass(e.css.header)?p.sortNone:"",b[h===p.sortNone?"removeClass":"addClass"](p.active),c.removeClass(g).addClass(h)));a.debug&&e.benchmark("Applying "+n+" theme",f)},remove:function(c,a){var b=a.$table,d=a.theme||"jui",f=e.themes[d]||e.themes.jui,h=b.children("thead").children(),g=f.sortNone+" "+f.sortDesc+" "+f.sortAsc;b.removeClass("tablesorter-"+d+" "+f.table).find(e.css.header).removeClass(f.header);h.unbind("mouseenter.tsuitheme mouseleave.tsuitheme").removeClass(f.hover+" "+g+" "+f.active).find("."+e.css.filterRow).removeClass(f.filterRow);h.find("."+e.css.icon).removeClass(f.icons)}});e.addWidget({id:"columns",priority:30,options:{columns:["primary","secondary","tertiary"]},format:function(c,a,b){var d,f,h,g,m,n,p=a.$table,r=a.$tbodies,v=a.sortList,w=v.length,s=b&&b.columns||["primary","secondary","tertiary"],t=s.length-1;m=s.join(" ");for(d=0;d<r.length;d++)a=e.processTbody(c,r.eq(d),!0),f=a.children("tr"),f.each(function(){h=k(this);if("none"!==this.style.display&&(g=h.children().removeClass(m),v&&v[0]&&(g.eq(v[0][0]).addClass(s[0]),1<w)))for(n=1;n<w;n++)g.eq(v[n][0]).addClass(s[n]||s[t])}),e.processTbody(c,a,!1);c=!1!==b.columns_thead?["thead tr"]:[];!1!==b.columns_tfoot&&c.push("tfoot tr");if(c.length&&(f=p.find(c.join(",")).children().removeClass(m),w))for(n=0;n<w;n++)f.filter('[data-column="'+v[n][0]+'"]').addClass(s[n]||s[t])},remove:function(c,a,b){var d=a.$tbodies,f=(b.columns||["primary","secondary","tertiary"]).join(" ");a.$headers.removeClass(f);a.$table.children("tfoot").children("tr").children("th, td").removeClass(f);for(a=0;a<d.length;a++)b=e.processTbody(c,d.eq(a),!0),b.children("tr").each(function(){k(this).children().removeClass(f)}),e.processTbody(c,b,!1)}});e.addWidget({id:"filter",priority:50,options:{filter_childRows:!1,filter_columnFilters:!0,filter_cellFilter:"",filter_cssFilter:"",filter_defaultFilter:{},filter_excludeFilter:{},filter_external:"",filter_filteredRow:"filtered",filter_formatter:null,filter_functions:null,filter_hideEmpty:!0,filter_hideFilters:!1,filter_ignoreCase:!0,filter_liveSearch:!0,filter_onlyAvail:"filter-onlyAvail",filter_placeholder:{search:"",select:""},filter_reset:null,filter_saveFilters:!1,filter_searchDelay:300,filter_searchFiltered:!0,filter_selectSource:null,filter_startsWith:!1,filter_useParsedData:!1,filter_serversideFiltering:!1,filter_defaultAttrib:"data-value",filter_selectSourceSeparator:"|"},format:function(c,a,b){a.$table.hasClass("hasFilters")||e.filter.init(c,a,b)},remove:function(c,a,b){var d,f=a.$tbodies;a.$table.removeClass("hasFilters").unbind("addRows updateCell update updateRows updateComplete appendCache filterReset filterEnd search ".split(" ").join(a.namespace+"filter ")).find("."+e.css.filterRow).remove();for(a=0;a<f.length;a++)d=e.processTbody(c,f.eq(a),!0),d.children().removeClass(b.filter_filteredRow).show(),e.processTbody(c,d,!1);b.filter_reset&&k(document).undelegate(b.filter_reset,"click.tsfilter")}});e.filter={regex:{regex:/^\/((?:\\\/|[^\/])+)\/([mig]{0,3})?$/,child:/tablesorter-childRow/,filtered:/filtered/,type:/undefined|number/,exact:/(^[\"\'=]+)|([\"\'=]+$)/g,nondigit:/[^\w,. \-()]/g,operators:/[<>=]/g,query:"(q|query)"},types:{regex:function(c,a){if(e.filter.regex.regex.test(a.iFilter)){var b,d=e.filter.regex.regex.exec(a.iFilter);try{b=(new RegExp(d[1],d[2])).test(a.iExact)}catch(f){b=!1}return b}return null},operators:function(c,a){if(/^[<>]=?/.test(a.iFilter)){var b,d;b=c.table;var f=a.index,h=a.parsed[f],g=e.formatFloat(a.iFilter.replace(e.filter.regex.operators,""),b),m=c.parsers[f],n=g;if(h||"numeric"===m.type)d=e.filter.parseFilter(c,k.trim(""+a.iFilter.replace(e.filter.regex.operators,"")),f,h,!0),g="number"!==typeof d||""===d||isNaN(d)?g:d;b=!h&&"numeric"!==m.type||isNaN(g)||"undefined"===typeof a.cache?isNaN(a.iExact)?e.formatFloat(a.iExact.replace(e.filter.regex.nondigit,""),b):e.formatFloat(a.iExact,b):a.cache;/>/.test(a.iFilter)&&(d=/>=/.test(a.iFilter)?b>=g:b>g);/</.test(a.iFilter)&&(d=/<=/.test(a.iFilter)?b<=g:b<g);d||""!==n||(d=!0);return d}return null},notMatch:function(c,a){if(/^\!/.test(a.iFilter)){var b,d=e.filter.parseFilter(c,a.iFilter.replace("!",""),a.index,a.parsed[a.index]);if(e.filter.regex.exact.test(d))return d=d.replace(e.filter.regex.exact,""),""===d?!0:k.trim(d)!==a.iExact;b=a.iExact.search(k.trim(d));return""===d?!0:!(c.widgetOptions.filter_startsWith?0===b:0<=b)}return null},exact:function(c,a){if(e.filter.regex.exact.test(a.iFilter)){var b=e.filter.parseFilter(c,a.iFilter.replace(e.filter.regex.exact,""),a.index,a.parsed[a.index]);return a.anyMatch?0<=k.inArray(b,a.rowArray):b==a.iExact}return null},and:function(c,a){if(e.filter.regex.andTest.test(a.filter)){for(var b=a.index,d=a.parsed[b],f=a.iFilter.split(e.filter.regex.andSplit),h=0<=a.iExact.search(k.trim(e.filter.parseFilter(c,f[0],b,d))),g=f.length-1;h&&g;)h=h&&0<=a.iExact.search(k.trim(e.filter.parseFilter(c,f[g],b,d))),g--;return h}return null},range:function(c,a){if(e.filter.regex.toTest.test(a.iFilter)){var b,d;d=c.table;var f=a.index,h=a.parsed[f],g=a.iFilter.split(e.filter.regex.toSplit),k=e.formatFloat(e.filter.parseFilter(c,g[0].replace(e.filter.regex.nondigit,""),f,h),d),n=e.formatFloat(e.filter.parseFilter(c,g[1].replace(e.filter.regex.nondigit,""),f,h),d);if(h||"numeric"===c.parsers[f].type)b=c.parsers[f].format(""+g[0],d,c.$headers.eq(f),f),k=""===b||isNaN(b)?k:b,b=c.parsers[f].format(""+g[1],d,c.$headers.eq(f),f),n=""===b||isNaN(b)?n:b;b=!h&&"numeric"!==c.parsers[f].type||isNaN(k)||isNaN(n)?isNaN(a.iExact)?e.formatFloat(a.iExact.replace(e.filter.regex.nondigit,""),d):e.formatFloat(a.iExact,d):a.cache;k>n&&(d=k,k=n,n=d);return b>=k&&b<=n||""===k||""===n}return null},wild:function(c,a){if(/[\?\*\|]/.test(a.iFilter)||e.filter.regex.orReplace.test(a.filter)){var b=a.index,d=a.parsed[b],d=e.filter.parseFilter(c,a.iFilter.replace(e.filter.regex.orReplace,"|"),b,d);!c.$headers.filter('[data-column="'+b+'"]:last').hasClass("filter-match")&&/\|/.test(d)&&("|"===d[d.length-1]&&(d+="*"),d=a.anyMatch&&k.isArray(a.rowArray)?"("+d+")":"^("+d+")$");return(new RegExp(d.replace(/\?/g,"\\S{1}").replace(/\*/g,"\\S*"))).test(a.iExact)}return null},fuzzy:function(c,a){if(/^~/.test(a.iFilter)){var b,d=0,f=a.iExact.length,h=e.filter.parseFilter(c,a.iFilter.slice(1),a.index,a.parsed[a.index]);for(b=0;b<f;b++)a.iExact[b]===h[d]&&(d+=1);return d===h.length?!0:!1}return null}},init:function(c,a,b){e.language=k.extend(!0,{},{to:"to",or:"or",and:"and"},e.language);var d,f,h,g,m,n,p;d=e.filter.regex;a.$table.addClass("hasFilters");b.searchTimer=null;b.filter_initTimer=null;b.filter_formatterCount=0;b.filter_formatterInit=[];b.filter_anyColumnSelector='[data-column="all"],[data-column="any"]';b.filter_multipleColumnSelector='[data-column*="-"],[data-column*=","]';h="\\{"+e.filter.regex.query+"\\}";k.extend(d,{child:new RegExp(a.cssChildRow),filtered:new RegExp(b.filter_filteredRow),alreadyFiltered:new RegExp("(\\s+("+e.language.or+"|-|"+e.language.to+")\\s+)","i"),toTest:new RegExp("\\s+(-|"+e.language.to+")\\s+","i"),toSplit:new RegExp("(?:\\s+(?:-|"+e.language.to+")\\s+)","gi"),andTest:new RegExp("\\s+("+e.language.and+"|&&)\\s+","i"),andSplit:new RegExp("(?:\\s+(?:"+e.language.and+"|&&)\\s+)","gi"),orReplace:new RegExp("\\s+("+e.language.or+")\\s+","gi"),iQuery:new RegExp(h,"i"),igQuery:new RegExp(h,"ig")});!1!==b.filter_columnFilters&&a.$headers.filter(".filter-false, .parser-false").length!==a.$headers.length&&e.filter.buildRow(c,a,b);a.$table.bind("addRows updateCell update updateRows updateComplete appendCache filterReset filterEnd search ".split(" ").join(a.namespace+"filter "),function(d,f){a.$table.find("."+e.css.filterRow).toggle(!(b.filter_hideEmpty&&k.isEmptyObject(a.cache)&&(!a.delayInit||"appendCache"!==d.type)));/(search|filter)/.test(d.type)||(d.stopPropagation(),e.filter.buildDefault(c,!0));"filterReset"===d.type?(a.$table.find("."+e.css.filter).add(b.filter_$externalFilters).val(""),e.filter.searching(c,[])):"filterEnd"===d.type?e.filter.buildDefault(c,!0):(f="search"===d.type?f:"updateComplete"===d.type?a.$table.data("lastSearch"):"",/(update|add)/.test(d.type)&&"updateComplete"!==d.type&&(a.lastCombinedFilter=null,a.lastSearch=[]),e.filter.searching(c,f,!0));return!1});b.filter_reset&&(b.filter_reset instanceof k?b.filter_reset.click(function(){a.$table.trigger("filterReset")}):k(b.filter_reset).length&&k(document).undelegate(b.filter_reset,"click.tsfilter").delegate(b.filter_reset,"click.tsfilter",function(){a.$table.trigger("filterReset")}));if(b.filter_functions)for(m=0;m<a.columns;m++)if(h=e.getColumnData(c,b.filter_functions,m))if(g=a.$headers.filter('[data-column="'+m+'"]:last').removeClass("filter-select"),p=!(g.hasClass("filter-false")||g.hasClass("parser-false")),d="",!0===h&&p)e.filter.buildSelect(c,m);else if("object"===typeof h&&p){for(f in h)"string"===typeof f&&(d+=""===d?'<option value="">'+(g.data("placeholder")||g.attr("data-placeholder")||b.filter_placeholder.select||"")+"</option>":"",h=p=f,0<=f.indexOf(b.filter_selectSourceSeparator)&&(p=f.split(b.filter_selectSourceSeparator),h=p[1],p=p[0]),d+="<option "+(h===p?"":'data-function-name="'+f+'" ')+'value="'+p+'">'+h+"</option>");a.$table.find("thead").find("select."+e.css.filter+'[data-column="'+m+'"]').append(d)}e.filter.buildDefault(c,!0);e.filter.bindSearch(c,a.$table.find("."+e.css.filter),!0);b.filter_external&&e.filter.bindSearch(c,b.filter_external);b.filter_hideFilters&&e.filter.hideFilters(c,a);a.showProcessing&&a.$table.bind("filterStart"+a.namespace+"filter filterEnd"+a.namespace+"filter",function(b,d){g=d?a.$table.find("."+e.css.header).filter("[data-column]").filter(function(){return""!==d[k(this).data("column")]}):"";e.isProcessing(c,"filterStart"===b.type,d?g:"")});a.filteredRows=a.totalRows;a.$table.bind("tablesorter-initialized pagerBeforeInitialized",function(){var b=this.config.widgetOptions;n=e.filter.setDefaults(c,a,b)||[];n.length&&(a.delayInit&&""===n.join("")||e.setFilters(c,n,!0));a.$table.trigger("filterFomatterUpdate");setTimeout(function(){b.filter_initialized||e.filter.filterInitComplete(a)},100)});a.pager&&a.pager.initialized&&!b.filter_initialized&&(a.$table.trigger("filterFomatterUpdate"),setTimeout(function(){e.filter.filterInitComplete(a)},100))},formatterUpdated:function(c,a){var b=c.closest("table")[0].config.widgetOptions;b.filter_initialized||(b.filter_formatterInit[a]=1)},filterInitComplete:function(c){var a=c.widgetOptions,b=0,d=function(){a.filter_initialized=!0;c.$table.trigger("filterInit",c);e.filter.findRows(c.table,c.$table.data("lastSearch")||[])};k.isEmptyObject(a.filter_formatter)?d():(k.each(a.filter_formatterInit,function(a,c){1===c&&b++}),clearTimeout(a.filter_initTimer),a.filter_initialized||b!==a.filter_formatterCount)?a.filter_initialized||(a.filter_initTimer=setTimeout(function(){d()},500)):d()},setDefaults:function(c,a,b){var d,f=e.getFilters(c)||[];b.filter_saveFilters&&e.storage&&(d=e.storage(c,"tablesorter-filters")||[],(c=k.isArray(d))&&""===d.join("")||!c||(f=d));if(""===f.join(""))for(c=0;c<a.columns;c++)f[c]=a.$headers.filter('[data-column="'+c+'"]:last').attr(b.filter_defaultAttrib)||f[c];a.$table.data("lastSearch",f);return f},parseFilter:function(c,a,b,d,e){return e||d?c.parsers[b].format(a,c.table,[],b):a},buildRow:function(c,a,b){var d,f,h,g,m=a.columns;h=k.isArray(b.filter_cellFilter);g='<tr role="row" class="'+e.css.filterRow+'">';for(f=0;f<m;f++)g=h?g+("<td"+(b.filter_cellFilter[f]?' class="'+b.filter_cellFilter[f]+'"':"")+"></td>"):g+("<td"+(""!==b.filter_cellFilter?' class="'+b.filter_cellFilter+'"':"")+"></td>");a.$filters=k(g+"</tr>").appendTo(a.$table.children("thead").eq(0)).find("td");for(f=0;f<m;f++)h=a.$headers.filter('[data-column="'+f+'"]:last'),g=e.getColumnData(c,b.filter_functions,f),g=b.filter_functions&&g&&"function"!==typeof g||h.hasClass("filter-select"),d=e.getColumnData(c,a.headers,f),d="false"===e.getData(h[0],d,"filter")||"false"===e.getData(h[0],d,"parser"),g?g=k("<select>").appendTo(a.$filters.eq(f)):((g=e.getColumnData(c,b.filter_formatter,f))?(b.filter_formatterCount++,(g=g(a.$filters.eq(f),f))&&0===g.length&&(g=a.$filters.eq(f).children("input")),g&&(0===g.parent().length||g.parent().length&&g.parent()[0]!==a.$filters[f])&&a.$filters.eq(f).append(g)):g=k('<input type="search">').appendTo(a.$filters.eq(f)),g&&g.attr("placeholder",h.data("placeholder")||h.attr("data-placeholder")||b.filter_placeholder.search||"")),g&&(h=(k.isArray(b.filter_cssFilter)?"undefined"!==typeof b.filter_cssFilter[f]?b.filter_cssFilter[f]||"":"":b.filter_cssFilter)||"",g.addClass(e.css.filter+" "+h).attr("data-column",f),d&&(g.attr("placeholder","").addClass("disabled")[0].disabled=!0))},bindSearch:function(c,a,b){c=k(c)[0];a=k(a);if(a.length){var d=c.config,f=d.widgetOptions,h=f.filter_$externalFilters;!0!==b&&(f.filter_$anyMatch=a.filter(f.filter_anyColumnSelector+","+f.filter_multipleColumnSelector),f.filter_$externalFilters=h&&h.length?f.filter_$externalFilters.add(a):a,e.setFilters(c,d.$table.data("lastSearch")||[],!1===b));a.attr("data-lastSearchTime",(new Date).getTime()).unbind(["keypress","keyup","search","change",""].join(d.namespace+"filter ")).bind("keyup"+d.namespace+"filter",function(a){k(this).attr("data-lastSearchTime",(new Date).getTime());if(27===a.which)this.value="";else if(!1===f.filter_liveSearch||""!==this.value&&("number"===typeof f.filter_liveSearch&&this.value.length<f.filter_liveSearch||13!==a.which&&8!==a.which&&(32>a.which||37<=a.which&&40>=a.which)))return;e.filter.searching(c,!0,!0)}).bind(["search","change","keypress",""].join(d.namespace+"filter "),function(a){var b=k(this).data("column");if(13===a.which||"search"===a.type||"change"===a.type&&this.value!==d.lastSearch[b])a.preventDefault(),k(this).attr("data-lastSearchTime",(new Date).getTime()),e.filter.searching(c,!1,!0)})}},searching:function(c,a,b){var d=c.config.widgetOptions;clearTimeout(d.searchTimer);"undefined"===typeof a||!0===a?d.searchTimer=setTimeout(function(){e.filter.checkFilters(c,a,b)},d.filter_liveSearch?d.filter_searchDelay:10):e.filter.checkFilters(c,a,b)},checkFilters:function(c,a,b){var d=c.config,f=d.widgetOptions,h=k.isArray(a),g=h?a:e.getFilters(c,!0),m=(g||[]).join("");if(k.isEmptyObject(d.cache))d.delayInit&&d.pager&&d.pager.initialized&&d.$table.trigger("updateCache",[function(){e.filter.checkFilters(c,!1,b)}]);else if(h&&(e.setFilters(c,g,!1,!0!==b),f.filter_initialized||(d.lastCombinedFilter="")),f.filter_hideFilters&&d.$table.find("."+e.css.filterRow).trigger(""===m?"mouseleave":"mouseenter"),d.lastCombinedFilter!==m||!1===a)if(!1===a&&(d.lastCombinedFilter=null,d.lastSearch=[]),f.filter_initialized&&d.$table.trigger("filterStart",[g]),d.showProcessing)setTimeout(function(){e.filter.findRows(c,g,m);return!1},30);else return e.filter.findRows(c,g,m),!1},hideFilters:function(c,a){var b,d,f;k(c).find("."+e.css.filterRow).addClass("hideme").bind("mouseenter mouseleave",function(c){b=k(this);clearTimeout(f);f=setTimeout(function(){/enter|over/.test(c.type)?b.removeClass("hideme"):k(document.activeElement).closest("tr")[0]!==b[0]&&""===a.lastCombinedFilter&&b.addClass("hideme")},200)}).find("input, select").bind("focus blur",function(b){d=k(this).closest("tr");clearTimeout(f);f=setTimeout(function(){if(""===e.getFilters(a.$table).join(""))d["focus"===b.type?"removeClass":"addClass"]("hideme")},200)})},defaultFilter:function(c,a){if(""===c)return c;var b=e.filter.regex.iQuery,d=a.match(e.filter.regex.igQuery).length,f=1<d?k.trim(c).split(/\s/):[k.trim(c)],h=f.length-1,g=0,m=a;for(1>h&&1<d&&(f[1]=f[0]);b.test(m);)m=m.replace(b,f[g++]||""),b.test(m)&&g<h&&""!==(f[g]||"")&&(m=a.replace(b,m));return m},getLatestSearch:function(c){return c.sort(function(a,b){return k(b).attr("data-lastSearchTime")-k(a).attr("data-lastSearchTime")})},multipleColumns:function(c,a){var b,d;b=c.widgetOptions;var f=b.filter_initialized||!a.filter(b.filter_anyColumnSelector).length,h=[],g=k.trim(e.filter.getLatestSearch(a).attr("data-column"));f&&/-/.test(g)&&(b=g.match(/(\d+)\s*-\s*(\d+)/g),k.each(b,function(a,b){var d;d=b.split(/\s*-\s*/);var e=parseInt(d[0],10)||0,f=parseInt(d[1],10)||c.columns-1;e>f&&(d=e,e=f,f=d);for(f>=c.columns&&(f=c.columns-1);e<=f;e++)h.push(e);g=g.replace(b,"")}));f&&/,/.test(g)&&(b=g.split(/\s*,\s*/),k.each(b,function(a,b){""!==b&&(d=parseInt(b,10),d<c.columns&&h.push(d))}));if(!h.length)for(d=0;d<c.columns;d++)h.push(d);return h},findRows:function(c,a,b){if(c.config.lastCombinedFilter!==b&&c.config.widgetOptions.filter_initialized){var d,f,h,g,m,n,p,r,v,w,s,t,x,z,y,A,B,F,C,G,E=e.filter.regex,q=c.config,u=q.widgetOptions,H=q.$table.children("tbody"),l={anyMatch:!1},I=["range","notMatch","operators"];l.parsed=q.$headers.map(function(a){return q.parsers&&q.parsers[a]&&q.parsers[a].parsed||e.getData&&"parsed"===e.getData(q.$headers.filter('[data-column="'+a+'"]:last'),e.getColumnData(c,q.headers,a),"filter")||k(this).hasClass("filter-parsed")}).get();q.debug&&(e.log("Starting filter widget search",a),z=new Date);q.filteredRows=0;q.totalRows=0;b=(a||[]).join("");for(g=0;g<H.length;g++)if(!H.eq(g).hasClass(q.cssInfoBlock||e.css.info)){m=e.processTbody(c,H.eq(g),!0);r=q.columns;f=k(k.map(q.cache[g].normalized,function(a){return a[r].$row.get()}));if(""===b||u.filter_serversideFiltering)f.removeClass(u.filter_filteredRow).not("."+q.cssChildRow).show();else{f=f.not("."+q.cssChildRow);d=f.length;A=u.filter_searchFiltered;h=q.lastSearch||q.$table.data("lastSearch")||[];if(A)for(n=0;n<r+1;n++)y=a[n]||"",A||(n=r),A=A&&h.length&&0===y.indexOf(h[n]||"")&&!E.alreadyFiltered.test(y)&&!/[=\"\|!]/.test(y)&&!(/(>=?\s*-\d)/.test(y)||/(<=?\s*\d)/.test(y))&&!(""!==y&&q.$filters&&q.$filters.eq(n).find("select").length&&!q.$headers.filter('[data-column="'+n+'"]:last').hasClass("filter-match"));y=f.not("."+u.filter_filteredRow).length;A&&0===y&&(A=!1);q.debug&&e.log("Searching through "+(A&&y<d?y:"all")+" rows");if(u.filter_$anyMatch&&u.filter_$anyMatch.length||a[q.columns])l.anyMatchFlag=!0,l.anyMatchFilter=u.filter_$anyMatch&&e.filter.getLatestSearch(u.filter_$anyMatch).val()||a[q.columns]||"",q.sortLocaleCompare&&(l.anyMatchFilter=e.replaceAccents(l.anyMatchFilter)),u.filter_defaultFilter&&E.iQuery.test(e.getColumnData(c,u.filter_defaultFilter,q.columns,!0)||"")&&(l.anyMatchFilter=e.filter.defaultFilter(l.anyMatchFilter,e.getColumnData(c,u.filter_defaultFilter,q.columns,!0)),A=!1),l.iAnyMatchFilter=u.filter_ignoreCase&&q.ignoreCase?l.anyMatchFilter.toLocaleLowerCase():l.anyMatchFilter;for(h=0;h<d;h++)if(l.cacheArray=q.cache[g].normalized[h],v=f[h].className,!(E.child.test(v)||A&&E.filtered.test(v))){x=!0;v=f.eq(h).nextUntil("tr:not(."+q.cssChildRow+")");l.childRowText=v.length&&u.filter_childRows?v.text():"";l.childRowText=u.filter_ignoreCase?l.childRowText.toLocaleLowerCase():l.childRowText;n=f.eq(h).children();if(l.anyMatchFlag){r=e.filter.multipleColumns(q,u.filter_$anyMatch);l.anyMatch=!0;l.rowArray=n.map(function(a){if(-1<k.inArray(a,r))return l.parsed[a]?a=l.cacheArray[a]:(a=u.filter_ignoreCase?k(this).text().toLowerCase():k(this).text(),q.sortLocaleCompare&&(a=e.replaceAccents(a))),a}).get();l.filter=l.anyMatchFilter;l.iFilter=l.iAnyMatchFilter;l.exact=l.rowArray.join(" ");l.iExact=u.filter_ignoreCase?l.exact.toLowerCase():l.exact;l.cache=l.cacheArray.slice(0,-1).join(" ");B=null;k.each(e.filter.types,function(a,b){if(0>k.inArray(a,I)&&(s=b(q,l),null!==s))return B=s,!1});if(null!==B)x=B;else if(u.filter_startsWith)for(x=!1,r=q.columns;!x&&0<r;)r--,x=x||0===l.rowArray[r].indexOf(l.iFilter);else x=0<=(l.iExact+l.childRowText).indexOf(l.iFilter);l.anyMatch=!1}for(r=0;r<q.columns;r++)l.filter=a[r],l.index=r,F=(e.getColumnData(c,u.filter_excludeFilter,r,!0)||"").split(/\s+/),l.filter&&(l.cache=l.cacheArray[r],u.filter_useParsedData||l.parsed[r]?l.exact=l.cache:(l.exact=k.trim(n.eq(r).text()),l.exact=q.sortLocaleCompare?e.replaceAccents(l.exact):l.exact),l.iExact=!E.type.test(typeof l.exact)&&u.filter_ignoreCase?l.exact.toLocaleLowerCase():l.exact,t=x,G=u.filter_columnFilters?q.$filters.add(q.$externalFilters).filter('[data-column="'+r+'"]').find("select option:selected").attr("data-function-name")||"":"",l.filter=q.sortLocaleCompare?e.replaceAccents(l.filter):l.filter,y=!0,u.filter_defaultFilter&&E.iQuery.test(e.getColumnData(c,u.filter_defaultFilter,r)||"")&&(l.filter=e.filter.defaultFilter(l.filter,e.getColumnData(c,u.filter_defaultFilter,r)),y=!1),l.iFilter=u.filter_ignoreCase?(l.filter||"").toLocaleLowerCase():l.filter,C=e.getColumnData(c,u.filter_functions,r),p=q.$headers.filter('[data-column="'+r+'"]:last'),w=p.hasClass("filter-select"),C||w&&y?!0===C||w?t=p.hasClass("filter-match")?0<=l.iExact.search(l.iFilter):l.filter===l.exact:"function"===typeof C?t=C(l.exact,l.cache,l.filter,r,f.eq(h)):"function"===typeof C[G||l.filter]&&(t=C[G||l.filter](l.exact,l.cache,l.filter,r,f.eq(h))):(B=null,k.each(e.filter.types,function(a,b){if(0>k.inArray(a,F)&&(s=b(q,l),null!==s))return B=s,!1}),null!==B?t=B:(l.exact=(l.iExact+l.childRowText).indexOf(e.filter.parseFilter(q,l.iFilter,r,l.parsed[r])),t=!u.filter_startsWith&&0<=l.exact||u.filter_startsWith&&0===l.exact)),x=t?x:!1);f.eq(h).toggle(x).toggleClass(u.filter_filteredRow,!x);v.length&&v.toggleClass(u.filter_filteredRow,!x)}}q.filteredRows+=f.not("."+u.filter_filteredRow).length;q.totalRows+=f.length;e.processTbody(c,m,!1)}q.lastCombinedFilter=b;q.lastSearch=a;q.$table.data("lastSearch",a);u.filter_saveFilters&&e.storage&&e.storage(c,"tablesorter-filters",a);q.debug&&e.benchmark("Completed filter widget search",z);u.filter_initialized&&q.$table.trigger("filterEnd",q);setTimeout(function(){q.$table.trigger("applyWidgets")},0)}},getOptionSource:function(c,a,b){var d,f=c.config,h=[],g=!1,m=f.widgetOptions.filter_selectSource,n=f.$table.data("lastSearch")||[],p=k.isFunction(m)?!0:e.getColumnData(c,m,a);b&&""!==n[a]&&(b=!1);if(!0===p)g=m(c,a,b);else{if(p instanceof k||"string"===k.type(p)&&0<=p.indexOf("</option>"))return p;k.isArray(p)?g=p:"object"===k.type(m)&&p&&(g=p(c,a,b))}!1===g&&(g=e.filter.getOptions(c,a,b));g=k.grep(g,function(a,b){return k.inArray(a,g)===b});f.$headers.filter('[data-column="'+a+'"]:last').hasClass("filter-select-nosort")||(k.each(g,function(b,d){h.push({t:d,p:f.parsers&&f.parsers[a].format(d,c,[],a)})}),d=f.textSorter||"",h.sort(function(b,f){var g=b.p.toString(),h=f.p.toString();return k.isFunction(d)?d(g,h,!0,a,c):"object"===typeof d&&d.hasOwnProperty(a)?d[a](g,h,!0,a,c):e.sortNatural?e.sortNatural(g,h):!0}),g=[],k.each(h,function(a,b){g.push(b.t)}));return g},getOptions:function(c,a,b){var d,e,h,g,m=c.config,n=m.widgetOptions,p=m.$table.children("tbody"),r=[];for(d=0;d<p.length;d++)if(!p.eq(d).hasClass(m.cssInfoBlock))for(g=m.cache[d],e=m.cache[d].normalized.length,c=0;c<e;c++)h=g.row?g.row[c]:g.normalized[c][m.columns].$row[0],b&&h.className.match(n.filter_filteredRow)||(n.filter_useParsedData||m.parsers[a].parsed||m.$headers.filter('[data-column="'+a+'"]:last').hasClass("filter-parsed")?r.push(""+g.normalized[c][a]):(h=h.cells[a])&&r.push(k.trim(h.textContent||h.innerText||k(h).text())));return r},buildSelect:function(c,a,b,d,f){c=k(c)[0];a=parseInt(a,10);if(c.config.cache&&!k.isEmptyObject(c.config.cache)){var h,g;g=c.config;var m=g.widgetOptions,n=g.$headers.filter('[data-column="'+a+'"]:last'),n='<option value="">'+(n.data("placeholder")||n.attr("data-placeholder")||m.filter_placeholder.select||"")+"</option>",p=g.$table.find("thead").find("select."+e.css.filter+'[data-column="'+a+'"]').val();if("undefined"===typeof b||""===b)b=e.filter.getOptionSource(c,a,f);if(k.isArray(b)){for(c=0;c<b.length;c++)f=h=b[c]=(""+b[c]).replace(/\"/g,"&quot;"),0<=h.indexOf(m.filter_selectSourceSeparator)&&(h=h.split(m.filter_selectSourceSeparator),f=h[0],h=h[1]),n+=""!==b[c]?"<option "+(f===h?"":'data-function-name="'+b[c]+'" ')+'value="'+f+'">'+h+"</option>":"";b=[]}g=(g.$filters?g.$filters:g.$table.children("thead")).find("."+e.css.filter);m.filter_$externalFilters&&(g=g&&g.length?g.add(m.filter_$externalFilters):m.filter_$externalFilters);a=g.filter('select[data-column="'+a+'"]');a.length&&(a[d?"html":"append"](n),k.isArray(b)||a.append(b).val(p),a.val(p))}},buildDefault:function(c,a){var b,d,f,h=c.config,g=h.widgetOptions,k=h.columns;for(b=0;b<k;b++)d=h.$headers.filter('[data-column="'+b+'"]:last'),f=!(d.hasClass("filter-false")||d.hasClass("parser-false")),(d.hasClass("filter-select")||!0===e.getColumnData(c,g.filter_functions,b))&&f&&e.filter.buildSelect(c,b,"",a,d.hasClass(g.filter_onlyAvail))}};e.getFilters=function(c,a,b,d){var f,h,g=!1,m=c?k(c)[0].config:"",n=m?m.widgetOptions:"";if(!0!==a&&n&&!n.filter_columnFilters)return k(c).data("lastSearch");if(m&&(m.$filters&&(f=m.$filters.find("."+e.css.filter)),n.filter_$externalFilters&&(f=f&&f.length?f.add(n.filter_$externalFilters):n.filter_$externalFilters),f&&f.length))for(g=b||[],c=0;c<m.columns+1;c++)h=c===m.columns?n.filter_anyColumnSelector+","+n.filter_multipleColumnSelector:'[data-column="'+c+'"]',a=f.filter(h),a.length&&(a=e.filter.getLatestSearch(a),k.isArray(b)?(d&&a.slice(1),c===m.columns&&(h=a.filter(n.filter_anyColumnSelector),a=h.length?h:a),a.val(b[c]).trigger("change.tsfilter")):(g[c]=a.val()||"",c===m.columns?a.slice(1).filter('[data-column*="'+a.attr("data-column")+'"]').val(g[c]):a.slice(1).val(g[c])),c===m.columns&&a.length&&(n.filter_$anyMatch=a));0===g.length&&(g=!1);return g};e.setFilters=function(c,a,b,d){var f=c?k(c)[0].config:"";c=e.getFilters(c,!0,a,d);f&&b&&(f.lastCombinedFilter=null,f.lastSearch=[],e.filter.searching(f.$table[0],a,d),f.$table.trigger("filterFomatterUpdate"));return!!c};e.addWidget({id:"stickyHeaders",priority:60,options:{stickyHeaders:"",stickyHeaders_attachTo:null,stickyHeaders_xScroll:null,stickyHeaders_yScroll:null,stickyHeaders_offset:0,stickyHeaders_filteredToTop:!0,stickyHeaders_cloneId:"-sticky",stickyHeaders_addResizeEvent:!0,stickyHeaders_includeCaption:!0,stickyHeaders_zIndex:2},format:function(c,a,b){if(!(a.$table.hasClass("hasStickyHeaders")||0<=k.inArray("filter",a.widgets)&&!a.$table.hasClass("hasFilters"))){var d=a.$table,f=k(b.stickyHeaders_attachTo),h=a.namespace+"stickyheaders ",g=k(b.stickyHeaders_yScroll||b.stickyHeaders_attachTo||z),m=k(b.stickyHeaders_xScroll||b.stickyHeaders_attachTo||z),n=d.children("thead:first").children("tr").not(".sticky-false").children(),p=d.children("tfoot"),r=isNaN(b.stickyHeaders_offset)?k(b.stickyHeaders_offset):"",v=f.length?0:r.length?r.height()||0:parseInt(b.stickyHeaders_offset,10)||0,w=d.parent().closest("."+e.css.table).hasClass("hasStickyHeaders")?d.parent().closest("table.tablesorter")[0].config.widgetOptions.$sticky.parent():[],s=w.length?w.height():0,t=b.$sticky=d.clone().addClass("containsStickyHeaders "+e.css.sticky+" "+b.stickyHeaders).wrap('<div class="'+e.css.stickyWrap+'">'),x=t.parent().css({position:f.length?"absolute":"fixed",margin:0,top:v+s,left:0,visibility:"hidden",zIndex:b.stickyHeaders_zIndex||2}),D=t.children("thead:first"),y,A="",B=0,F=function(a,b){a.filter(":visible").each(function(a){var d;a=b.filter(":visible").eq(a);var c=k(this);"border-box"===c.css("box-sizing")?d=c.outerWidth():"collapse"===a.css("border-collapse")?z.getComputedStyle?d=parseFloat(z.getComputedStyle(this,null).width):(d=parseFloat(c.css("border-width")),d=c.outerWidth()-parseFloat(c.css("padding-left"))-parseFloat(c.css("padding-right"))-d):d=c.width();a.css({"min-width":d,"max-width":d})})},C=function(){v=r.length?r.height()||0:parseInt(b.stickyHeaders_offset,10)||0;B=0;x.css({left:f.length?parseInt(f.css("padding-left"),10)||0:d.offset().left-parseInt(d.css("margin-left"),10)-m.scrollLeft()-B,width:d.outerWidth()});F(d,t);F(n,y)};t.attr("id")&&(t[0].id+=b.stickyHeaders_cloneId);t.find("thead:gt(0), tr.sticky-false").hide();t.find("tbody, tfoot").remove();b.stickyHeaders_includeCaption||t.find("caption").remove();y=D.children().children();t.css({height:0,width:0,margin:0});y.find("."+e.css.resizer).remove();d.addClass("hasStickyHeaders").bind("pagerComplete"+h,function(){C()});e.bindEvents(c,D.children().children(".tablesorter-header"));d.after(x);a.onRenderHeader&&D.children("tr").children().each(function(b){a.onRenderHeader.apply(k(this),[b,a,t])});m.add(g).unbind(["scroll","resize",""].join(h)).bind(["scroll","resize",""].join(h),function(a){if(d.is(":visible")){s=w.length?w.offset().top-g.scrollTop()+w.height():0;var b=d.offset(),c=k.isWindow(g[0]),e=k.isWindow(m[0]),h=(f.length?c?g.scrollTop():g.offset().top:g.scrollTop())+v+s,l=d.height()-(x.height()+(p.height()||0)),b=h>b.top&&h<b.top+l?"visible":"hidden",l={visibility:b};f.length&&(l.top=c?h:f.scrollTop());e&&(l.left=d.offset().left-parseInt(d.css("margin-left"),10)-m.scrollLeft()-B);w.length&&(l.top=(l.top||0)+v+s);x.removeClass("tablesorter-sticky-visible tablesorter-sticky-hidden").addClass("tablesorter-sticky-"+b).css(l);if(b!==A||"resize"===a.type)C(),A=b}});b.stickyHeaders_addResizeEvent&&e.addHeaderResizeEvent(c);d.hasClass("hasFilters")&&b.filter_columnFilters&&(d.bind("filterEnd"+h,function(){var c=k(document.activeElement).closest("td"),c=c.parent().children().index(c);x.hasClass(e.css.stickyVis)&&b.stickyHeaders_filteredToTop&&(z.scrollTo(0,d.position().top),0<=c&&a.$filters&&a.$filters.eq(c).find("a, select, input").filter(":visible").focus())}),e.filter.bindSearch(d,y.find("."+e.css.filter)),b.filter_hideFilters&&e.filter.hideFilters(t,a));d.trigger("stickyHeadersInit")}},remove:function(c,a,b){var d=a.namespace+"stickyheaders ";a.$table.removeClass("hasStickyHeaders").unbind(["pagerComplete","filterEnd",""].join(d)).next("."+e.css.stickyWrap).remove();b.$sticky&&b.$sticky.length&&b.$sticky.remove();k(".hasStickyHeaders").length||k(z).add(b.stickyHeaders_xScroll).add(b.stickyHeaders_yScroll).add(b.stickyHeaders_attachTo).unbind(["scroll","resize",""].join(d));e.addHeaderResizeEvent(c,!1)}});e.addWidget({id:"resizable",priority:40,options:{resizable:!0,resizable_addLastColumn:!1,resizable_widths:[],resizable_throttle:!1},format:function(c,a,b){if(!a.$table.hasClass("hasResizable")){a.$table.addClass("hasResizable");e.resizableReset(c,!0);var d,f,h,g,m,n={},p=a.$table,r=p.parent(),v="auto"===p.parent().css("overflow"),w=0,s=null,t=null,x=20>Math.abs(p.parent().width()-p.width()),D=function(a){if(0!==w&&s){var b=a.pageX-w,c=s.width();s.width(c+b);s.width()!==c&&x?t.width(t.width()-b):v&&(p.width(function(a,c){return c+b}),t.length||(r[0].scrollLeft=p.width()));w=a.pageX}},y=function(){e.storage&&s&&t&&(n={},n[s.index()]=s.width(),n[t.index()]=t.width(),s.width(n[s.index()]),t.width(n[t.index()]),!1!==b.resizable&&e.storage(c,"tablesorter-resizable",a.$headers.map(function(){return k(this).width()}).get()));w=0;s=t=null;k(z).trigger("resize")};if(n=e.storage&&!1!==b.resizable?e.storage(c,"tablesorter-resizable"):{})for(g in n)!isNaN(g)&&g<a.$headers.length&&a.$headers.eq(g).width(n[g]);d=p.children("thead:first").children("tr");d.children().each(function(){var b;b=k(this);g=b.attr("data-column");b="false"===e.getData(b,e.getColumnData(c,a.headers,g),"resizable");d.children().filter('[data-column="'+g+'"]')[b?"addClass":"removeClass"]("resizable-false")});d.each(function(){h=k(this).children().not(".resizable-false");k(this).find("."+e.css.wrapper).length||h.wrapInner('<div class="'+e.css.wrapper+'" style="position:relative;height:100%;width:100%"></div>');b.resizable_addLastColumn||(h=h.slice(0,-1));f=f?f.add(h):h});f.each(function(){var a=k(this),b=parseInt(a.css("padding-right"),10)+10;a.find("."+e.css.wrapper).append('<div class="'+e.css.resizer+'" style="cursor:w-resize;position:absolute;z-index:1;right:-'+b+'px;top:0;height:100%;width:20px;"></div>')}).find("."+e.css.resizer).bind("mousedown",function(b){s=k(b.target).closest("th");var c=a.$headers.filter('[data-column="'+s.attr("data-column")+'"]');1<c.length&&(s=s.add(c));t=b.shiftKey?s.parent().find("th").not(".resizable-false").filter(":last"):s.nextAll(":not(.resizable-false)").eq(0);w=b.pageX});k(document).bind("mousemove.tsresize",function(a){0!==w&&s&&(b.resizable_throttle?(clearTimeout(m),m=setTimeout(function(){D(a)},isNaN(b.resizable_throttle)?5:b.resizable_throttle)):D(a))}).bind("mouseup.tsresize",function(){y()});p.find("thead:first").bind("contextmenu.tsresize",function(){e.resizableReset(c);var a=k.isEmptyObject?k.isEmptyObject(n):!0;n={};return a})}},remove:function(c,a){a.$table.removeClass("hasResizable").children("thead").unbind("mouseup.tsresize mouseleave.tsresize contextmenu.tsresize").children("tr").children().unbind("mousemove.tsresize mouseup.tsresize").find("."+e.css.resizer).remove();e.resizableReset(c)}});e.resizableReset=function(c,a){k(c).each(function(){var b,d=this.config,f=d&&d.widgetOptions;c&&d&&(d.$headers.each(function(a){b=k(this);f.resizable_widths[a]?b.css("width",f.resizable_widths[a]):b.hasClass("resizable-false")||b.css("width","")}),e.storage&&!a&&e.storage(this,"tablesorter-resizable",{}))})};e.addWidget({id:"saveSort",priority:20,options:{saveSort:!0},init:function(c,a,b,d){a.format(c,b,d,!0)},format:function(c,a,b,d){var f,h=a.$table;b=!1!==b.saveSort;var g={sortList:a.sortList};a.debug&&(f=new Date);h.hasClass("hasSaveSort")?b&&c.hasInitialized&&e.storage&&(e.storage(c,"tablesorter-savesort",g),a.debug&&e.benchmark("saveSort widget: Saving last sort: "+a.sortList,f)):(h.addClass("hasSaveSort"),g="",e.storage&&(g=(b=e.storage(c,"tablesorter-savesort"))&&b.hasOwnProperty("sortList")&&k.isArray(b.sortList)?b.sortList:"",a.debug&&e.benchmark('saveSort: Last sort loaded: "'+g+'"',f),h.bind("saveSortReset",function(a){a.stopPropagation();e.storage(c,"tablesorter-savesort","")})),d&&g&&0<g.length?a.sortList=g:c.hasInitialized&&g&&0<g.length&&h.trigger("sorton",[g]))},remove:function(c){e.storage&&e.storage(c,"tablesorter-savesort","")}})})(jQuery,window);
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
/*
*	Format to currency
*/
Number.prototype.toCurrencyString=function(){
	return this.toFixed(2).replace(/(\d)(?=(\d{3})+\b)/g,'$1 ');
}
/*
*	Format to currency without coma
*/
Number.prototype.toCurrencyQtyString=function(){
	return this.toFixed(0).replace(/(\d)(?=(\d{3})+\b)/g,'$1 ');
}
/*
*	Add days to date
*/
function addDays(date, days){
	debugTool('Running addDays('+date + ' | ' +days+')');
	date = new Date(formatDate(date));
	date = new Date(date.setTime(date.getTime() + days * 86400000));
	var year =  date.getFullYear();
	var month = date.getMonth()+1;
	if(month < 10){
		month = '0'+month;
	}
	var day = date.getDate();
	if(day < 10){
		day = '0'+day;
	}
	var hour = date.getHours();
	if(hour < 10){
		hour = '0'+hour;
	}
	var minute = date.getMinutes();
	if(minute < 10){
		minute = '0'+minute;
	}
	var second = date.getSeconds();
	if(second < 10){
		second = '0'+second;
	}
	return year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;
}
/*
*	Format a date
*/
function formatDate(date){
	debugTool('Running formatDate('+date +')');
	return date.replace('T', ' ');
}
/*
*	Remove Time from date
*/
function removeTime(date){
	debugTool('Running removeTime('+date +')');
	date = formatDate(date).split(' ', 1);
	return date[0];
}
/*
*	Init countdown
*/
function initCountdown(id){
	$(id).find('td.timeleft').each(function() {
		var $this = $(this);
		var finalDate = $this.html().replace('-', '/');
		$this.countdown(finalDate, function(event) {
			$this.html('<span class="hidden">'+finalDate+'</span>' +event.strftime('%Dd %Hh %Mm %Ss'));
		});
	});
}
/*
*	Calculate median
*/
function getMedian(data){

	var total = data.length;
	var sum = 0;
	$.each(data, function(i, item){
	
		sum += parseFloat(item);
	
	});
	var median = parseFloat(sum) / parseFloat(total);
	return median;

}
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=a346800846ed0feac82e)
 * Config saved to config.json and https://gist.github.com/a346800846ed0feac82e
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;(n||!/destroy|hide/.test(e))&&(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,p=l.test(a);p&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),d=s[0].offsetWidth,f=s[0].offsetHeight;if(p){var u=a,c=this.getPosition(this.$viewport);a="bottom"==a&&h.bottom+f>c.bottom?"top":"top"==a&&h.top-f<c.top?"bottom":"right"==a&&h.right+d>c.width?"left":"left"==a&&h.left-d<c.left?"right":a,s.removeClass(u).addClass(a)}var v=this.getCalculatedOffset(a,h,d,f);this.applyPlacement(v,a);var g=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",g).emulateTransitionEnd(i.TRANSITION_DURATION):g()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,p=o[0].offsetHeight;"top"==i&&p!=s&&(e.top=e.top+s-p);var h=this.getViewportAdjustedDelta(i,e,l,p);h.left?e.left+=h.left:e.top+=h.top;var d=/top|bottom/.test(i),f=d?2*h.left-n+l:2*h.top-s+p,u=d?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(f,o[0][u],d)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=o?{top:0,left:0}:e.offset(),r={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,r,a,s)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+o;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l)}else{var p=e.left-s,h=e.left+s+i;p<r.left?n.left=r.left-p:h>r.right&&(n.left=r.left+r.width-h)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new i(this)),"string"==typeof e&&n[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),r=t.Event("show.bs.tab",{relatedTarget:n[0]});if(n.trigger(s),e.trigger(r),!r.isDefaultPrevented()&&!s.isDefaultPrevented()){var a=t(o);this.activate(e.closest("li"),i),this.activate(a,a.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:n[0]})})}}},i.prototype.activate=function(e,o,n){function s(){r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),n&&n()}var r=o.find("> .active"),a=n&&t.support.transition&&(r.length&&r.hasClass("fade")||!!o.find("> .fade").length);r.length&&a?r.one("bsTransitionEnd",s).emulateTransitionEnd(i.TRANSITION_DURATION):s(),r.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var n=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',n).on("click.bs.tab.data-api",'[data-toggle="pill"]',n)}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
/*
*	Jquery tablesorter bootstrap 3
*
*
*/
$(function() {
	$.tablesorter.themes.bootstrap = {
		table      : 'table table-bordered',
		caption    : 'caption',
		header     : 'bootstrap-header',
		footerRow  : '',
		footerCells: '',
		icons      : '',
		sortNone   : 'bootstrap-icon-unsorted',
		sortAsc    : 'icon-chevron-up glyphicon glyphicon-chevron-up',
		sortDesc   : 'icon-chevron-down glyphicon glyphicon-chevron-down',
		active     : '', 
		hover      : '',
		filterRow  : '',
		even       : '',
		odd        : ''
	};
	$.tablesorter.addParser({
		id: "sortFloatNumber",
		is: function (s) {
			return /^[0-9]?[0-9 \.]*$/.test(s);
		},
		format: function (s) {
			return jQuery.tablesorter.formatFloat(s.replace(/ /g, ''));
		},
		type: "numeric"
	});
});
/*
*	Get min/max from array
*/
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
/*!
 * Sections of code from https://github.com/jimpurbrick/crestexplorerjs, https://github.com/fuzzysteve/CREST-Market-Viewer
 *  Copyright 2012, CCP (http://www.ccpgames.com)
 *  Dual licensed under the MIT or GPL Version 2 licenses.
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.opensource.org/licenses/GPL-2.0
 *
 *
 *  Eve browser sometimes double trigger request, some var are here to prevent this behaviour
 *
 *
 *  All other code is under the MIT license.
 *
*/
var siteURL = "";
var crestURL = "https://crest-tq.eveonline.com";
var staticURL = "https://public-crest.eveonline.com/market/types/";

var itemsListOjects=Array();
var eveItems;
var itemsInit = false;
var currentItem;
var lastFetch = '';
var lastWarning = '';

var getpage = staticURL;
var currentPage = 1;
var endPage;

var debug = false;
var error = false;
var logged = false;
var downtime = false;
var downtimeAlert = false;

(function ($, window, document) {

	"use strict";

	var clientId = ""; // OAuth client id
	var csrfTokenName = clientId + "csrftoken";
	var hashTokenName = clientId + "hash";
	var scopes = "publicData";
	
	/*
	*	Build items list
	*/
	function setItemCache(page) {
	
		debugTool('Running setItemCache('+page+')');
		var cachedata;
		
		if(store.enabled){
			if(cachedata = store.get('itemsList')){
				try {
					debugTool('setItemCache : cache "itemsList" found');
					itemsListOjects=JSON.parse(cachedata);
					$('.searchLoader').fadeOut(500, function(){
						$('#itemName').removeAttr('disabled');
						initBloodhound(itemsListOjects);
					});
					
					return;
				}catch(e){
					debugTool('setItemCache : invalid json');
					console.log('invalid json')
				}
			}
		}else{
			debugTool('Local storage is not available');
		}

		if (page=='start') {
			toastr.info('Please wait, iska.re is building items list');
			debugTool('setItemCache : Building list from scratch');
		} else {
			getpage=page;
			currentPage++;
			debugTool('setItemCache : Building list page '+currentPage);
		}
		
		$.getJSON(getpage).done(function(data,status,xhr){
		
			debugTool('setItemCache : '+xhr.status+' | '+status);
			endPage = data.pageCount;
		
			$.map(data.items,function(item){
				itemsListOjects.push({
					href:item.type.href,
					typeid:item.type.id,
					typeName:item.type.name,
				});
			});
			
			if(typeof data.next != 'undefined' && currentPage < endPage){
				setItemCache(data.next.href);
			}else{
				if(store.enabled){
					debugTool('Saving "itemsList"');
					store.set("itemsList", JSON.stringify(itemsListOjects));
				}else{
					debugTool('Local storage is not available, couldnt save "itemsList"');
				}
			}
			
			debugTool('setItemCache : Page '+currentPage+'/'+endPage);
			
			if(currentPage == endPage){
				debugTool('setItemCache : Items are loaded');
				$('.searchLoader').fadeOut(500, function(){
					$('#itemName').removeAttr('disabled');
					initBloodhound(itemsListOjects);
				});
			}
		
		});
		
	}
	
	
	/*
	*	Init BloodHound
	*/
	function initBloodhound(dataSrc){
	
		debugTool('Running initBloodhound()');
		if(!itemsInit){
			/*
			*	Twitter typeahead for eve items
			*
			*/
			eveItems = new Bloodhound({
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('typeName'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				limit: 15,
				local: dataSrc
			});
			
			eveItems.initialize();
			$('#itemName.typeahead').typeahead(
				null, {
				name: 'Objets',
				displayKey: 'typeName',
				source: eveItems.ttAdapter()
			}).on('typeahead:selected', function(event, data){       
				
				openItem(data.typeid);
				$('#item-window').removeClass('hidden').slideDown(500, function(){
					$('#currentItemName').html(data.typeName).attr('data-id', data.typeid);
					$('#currentItemImg').attr('src', 'http://image.eveonline.com/InventoryType/'+data.typeid+'_64.png').attr('data-id', data.typeid);
				});
				
			});
			itemsInit = true;
		
		}else{
			debugTool('initBloodhound() already init');
		}
	
	
	}

	/*
	*	Fetch items info
	*/
	function openItem(id){
	
		debugTool('Running openItem('+id+')');
		var itemHref = crestURL+'/types/'+id+'/';
		var timeFetch = new Date;
		var globalVolatility = {};
		
		error = false;
		
		if(lastFetch != ''){
			/*
			*	Last request is > 30sec
			*/
			var diffTime = timeFetch.getTime() - lastFetch.getTime();
			if(diffTime >= 30*1000){
				var newRequest = true;
			}else{
				var newRequest = false;
			}
		}
		if(currentItem != id || currentItem == id && newRequest == true){
			currentItem = id;
			lastFetch = timeFetch;
			
			$('.sortme tbody').html('');
			$('.sortme').hide();
			
			if (typeof itemHref != 'undefined') {
			
				$.each(wantedRegion, function(i, region){
				
					setTimeout(function(){
						/*
						*	Fetch Buys
						*/
						var buyHref = crestURL+'/market/'+region+'/orders/buy/';
						if(error === false && logged){
							$('#'+dirtyKey[i]+'_buy .container-loader').html('<img src="img/loading.gif" class="loader-img" alt="loader"/>').fadeIn(250, function(){
								debugTool('Fetching '+buyHref);
								$.getJSON(buyHref+'?type='+itemHref).done(function(data,status,xhr){
								
									if(xhr.status==200){
									
										$('#'+dirtyKey[i]+'_buy .container-loader img').fadeOut('fast', function(){
										
											$('#'+dirtyKey[i]+'_buy .container-loader').html('');
											$.map(data.items,function(item, ii){
											
												if(item.location.id == wantedStation[i]){
													$('.'+dirtyKey[i]+'_buy_show').append('<tr><td>'+item.price.toCurrencyString()+'</td><td>'+item.volume.toCurrencyQtyString()+'</td><td>'+item.minVolume.toCurrencyQtyString()+'</td><td class="timeleft">'+addDays(item.issued, item.duration)+'</td></tr>');
													$('.all_buy_show').append('<tr><td>'+item.location.name+'</td><td>'+item.price.toCurrencyString()+'</td><td>'+item.volume.toCurrencyQtyString()+'</td><td>'+item.minVolume.toCurrencyQtyString()+'</td><td class="timeleft">'+addDays(item.issued, item.duration)+'</td></tr>');
												}
											});
											$('.'+dirtyKey[i]+'_buy_show').parent().parent().find('table.sortPrice').tablesorter({
												theme : "bootstrap",
												widthFixed: true,
												headers: { 
													0: { sorter: 'sortFloatNumber'}
												},
												headerTemplate : '{content} {icon}',
												widgets : [ "uitheme", "zebra" ],
												widgetOptions : {
													zebra : ["even", "odd"],
													filter_reset : ".reset"
												},
												sortList: [[0,1]] 
											});
											$('.'+dirtyKey[i]+'_buy_show').parent().parent().find('table.sortPrice').trigger("update");
											$('#'+dirtyKey[i]+'_buy_table').fadeIn(500, function(){
											
												var contener = $('#'+dirtyKey[i]+'_buy_table').parent();
												if($(contener).hasClass('active')){
													var height = $(contener).parent().parent().height();
													$(contener).parent().parent().parent().find('.sideTabs').css('height', height);
												}
												initCountdown('#'+dirtyKey[i]+'_buy_table');
											});
											
											
										});
										getBestItem();
										setTimeout(function(){
										
											/*
											*	One page
											*/
											$('#all_buy .container-loader').html('<img src="img/loading.gif" class="loader-img" alt="loader"/>').fadeIn(250, function(){
												$('#all_buy .container-loader img').fadeOut('fast', function(){
												
													$('#all_buy .container-loader').html('');
													$('.all_buy_show').parent().parent().find('table.sortPrice').tablesorter({
														theme : "bootstrap",
														widthFixed: true,
														headers: { 
															1: { sorter: 'sortFloatNumber'}
														},
														headerTemplate : '{content} {icon}',
														widgets : [ "uitheme", "zebra" ],
														widgetOptions : {
															zebra : ["even", "odd"],
															filter_reset : ".reset"
														},
														sortList: [[1,1]] 
													});
													$('.all_buy_show').parent().parent().find('table.sortPrice').trigger("update");
													$('#all_buy_table').fadeIn(500, function(){
													
														var contener = $('#all_buy_table').parent();
														if($(contener).hasClass('active')){
															var height = $(contener).parent().parent().height();
															$(contener).parent().parent().parent().find('.sideTabs').css('height', height);
														}
														// initCountdown('#all_buy_table');
													});
												});
											});
										
										}, 800);
										
									}
								
								}).fail(function(data,status,xhr){
									returnCodeError(xhr, $('.'+dirtyKey[i]+'_system_name').html());
								});
								
								
							});
						}
						/*
						*	Fetch Sells
						*/
						var sellHref = crestURL+'/market/'+region+'/orders/sell/';
						if(error === false && logged){
							$('#'+dirtyKey[i]+'_sell .container-loader').html('<img src="img/loading.gif" class="loader-img" alt="loader"/>').fadeIn(250, function(){
								debugTool('Fetching '+sellHref);
								$.getJSON(sellHref+'?type='+itemHref).done(function(data,status,xhr){
									if(xhr.status==200){
										$('#'+dirtyKey[i]+'_sell .container-loader img').fadeOut('fast', function(){
											
											$('#'+dirtyKey[i]+'_sell .container-loader').html('');
											$.map(data.items,function(item, ii){

												if(item.location.id == wantedStation[i]){
													$('.'+dirtyKey[i]+'_sell_show').append('<tr><td>'+item.price.toCurrencyString()+'</td><td>'+item.volume.toCurrencyQtyString()+'</td><td class="timeleft">'+addDays(item.issued, item.duration)+'</td></tr>');
													$('.all_sell_show').append('<tr><td>'+item.location.name+'</td><td>'+item.price.toCurrencyString()+'</td><td>'+item.volume.toCurrencyQtyString()+'</td><td class="timeleft">'+addDays(item.issued, item.duration)+'</td></tr>');
												}
											});
											$('.'+dirtyKey[i]+'_sell_show').parent().parent().find('table.sortPrice').tablesorter({
												theme : "bootstrap",
												widthFixed: true,
												headers: { 
													0: { sorter: 'sortFloatNumber'},
												},
												headerTemplate : '{content} {icon}',
												widgets : [ "uitheme", "zebra" ],
												widgetOptions : {
													zebra : ["even", "odd"],
													filter_reset : ".reset"
												},
												sortList: [[0,0]] 
											});
											$('.'+dirtyKey[i]+'_sell_show').parent().parent().find('table.sortPrice').trigger("update");
											$('#'+dirtyKey[i]+'_sell_table').fadeIn(500, function(){
											
												var contener = $('#'+dirtyKey[i]+'_sell_table').parent();
												if($(contener).hasClass('active')){
													var height = $(contener).parent().parent().height();
													$(contener).parent().parent().parent().find('.sideTabs').css('height', height);
												}
												initCountdown('#'+dirtyKey[i]+'_sell_table');
											});
											
											
										});
										getBestItem();
										setTimeout(function(){
										
											/*
											*	One page
											*/
											$('#all_sell .container-loader').html('<img src="img/loading.gif" class="loader-img" alt="loader"/>').fadeIn(250, function(){
												$('#all_sell .container-loader img').fadeOut('fast', function(){
												
													$('#all_sell .container-loader').html('');
													$('.all_sell_show').parent().parent().find('table.sortPrice').tablesorter({
														theme : "bootstrap",
														widthFixed: true,
														headers: { 
															1: { sorter: 'sortFloatNumber'},
														},
														headerTemplate : '{content} {icon}',
														widgets : [ "uitheme", "zebra" ],
														widgetOptions : {
															zebra : ["even", "odd"],
															filter_reset : ".reset"
														},
														sortList: [[1,0]] 
													});
													$('.all_sell_show').parent().parent().find('table.sortPrice').trigger("update");
													$('#all_sell_table').fadeIn(500, function(){
													
														var contener = $('#all_sell_table').parent();
														if($(contener).hasClass('active')){
															var height = $(contener).parent().parent().height();
															$(contener).parent().parent().parent().find('.sideTabs').css('height', height);
														}
														// initCountdown('#all_sell_table');
													});
												});
											});
										
										
										}, 800);
										
									}
									
								}).fail(function(data,status,xhr){
									returnCodeError(xhr, $('.'+dirtyKey[i]+'_system_name').html());
								});
							});
						}
						/*
						*	Fetch history
						*/
						var historyHref = crestURL+'/market/'+region+'/types/'+id+'/history/';
						if(error === false && logged){
							$('#'+dirtyKey[i]+'_history .container-loader').html('<img src="img/loading.gif" class="loader-img" alt="loader"/>').fadeIn(250, function(){
								debugTool('Fetching '+historyHref);
								$.getJSON(historyHref).done(function(data,status,xhr){
									
									if(xhr.status==200){
										$('#'+dirtyKey[i]+'_history .container-loader img').fadeOut('fast', function(){
											
											$('#'+dirtyKey[i]+'_history .container-loader').html('');
											var history = data.items.reverse();
											$.map(history,function(item, ii){
												if(ii <= 14){
													$('.'+dirtyKey[i]+'_history_show').append('<tr><td>'+removeTime(item.date)+'</td><td>'+item.orderCount.toCurrencyQtyString()+'</td><td>'+item.volume.toCurrencyQtyString()+'</td><td>'+item.lowPrice.toCurrencyString()+'</td><td>'+item.highPrice.toCurrencyString()+'</td><td>'+item.avgPrice.toCurrencyString()+'</td></tr>');
												}
											});
											$('.'+dirtyKey[i]+'_history_show').parent().parent().find('table.sortPrice').tablesorter({
												theme : "bootstrap",
												widthFixed: true,
												headers: { 
													3: { sorter: 'sortFloatNumber'},
													4: { sorter: 'sortFloatNumber'},
													5: { sorter: 'sortFloatNumber'}
												},
												headerTemplate : '{content} {icon}',
												widgets : [ "uitheme", "zebra" ],
												widgetOptions : {
													zebra : ["even", "odd"],
													filter_reset : ".reset"
												},
												sortList: [[0,1]]
											});
											$('.'+dirtyKey[i]+'_history_show').parent().parent().find('table.sortPrice').trigger("update");
											$('#'+dirtyKey[i]+'_history_table').fadeIn(500, function(){
											
												var contener = $('#'+dirtyKey[i]+'_history_table').parent();
												if($(contener).hasClass('active')){
													var height = $(contener).parent().parent().height();
													$(contener).parent().parent().parent().find('.sideTabs').css('height', height);
												}
											});
											
											
											$('#'+dirtyKey[i]+'_volatility .container-loader').html('<img src="img/loading.gif" class="loader-img" alt="loader"/>').fadeIn(250, function(){
												$('#'+dirtyKey[i]+'_volatility .container-loader img').fadeOut('fast', function(){
													var volatility = getVolatility(history);
													globalVolatility[dirtyKey[i]] = volatility;
													
													$('#'+dirtyKey[i]+'_volatility_10days').find('.volatility-high').html(volatility.days10.high.toCurrencyQtyString());
													var medianBar = parseFloat(volatility.days10.percentage * 250) / 100;
													$('#'+dirtyKey[i]+'_volatility_10days').find('.volatility-bar-median').css('margin-bottom', medianBar+'px').attr('title', volatility.days10.avg.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_10days').find('.volatility-min').html(volatility.days10.min.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_10days').find('.volatility-orders').html(volatility.days10.order.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_10days').find('.volatility-volume').html(volatility.days10.volume.toCurrencyQtyString());
													
													$('#'+dirtyKey[i]+'_volatility_1month').find('.volatility-high').html(volatility.month1.high.toCurrencyQtyString());
													var medianBar = parseFloat(volatility.month1.percentage * 250) / 100;
													$('#'+dirtyKey[i]+'_volatility_1month').find('.volatility-bar-median').css('margin-bottom', medianBar+'px').attr('title', volatility.month1.avg.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_1month').find('.volatility-min').html(volatility.month1.min.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_1month').find('.volatility-orders').html(volatility.month1.order.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_1month').find('.volatility-volume').html(volatility.month1.volume.toCurrencyQtyString());
													
													$('#'+dirtyKey[i]+'_volatility_3months').find('.volatility-high').html(volatility.month3.high.toCurrencyQtyString());
													var medianBar = parseFloat(volatility.month3.percentage * 250) / 100;
													$('#'+dirtyKey[i]+'_volatility_3months').find('.volatility-bar-median').css('margin-bottom', medianBar+'px').attr('title', volatility.month3.avg.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_3months').find('.volatility-min').html(volatility.month3.min.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_3months').find('.volatility-orders').html(volatility.month3.order.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_3months').find('.volatility-volume').html(volatility.month3.volume.toCurrencyQtyString());
													
													$('#'+dirtyKey[i]+'_volatility_1year').find('.volatility-high').html(volatility.year1.high.toCurrencyQtyString());
													var medianBar = parseFloat(volatility.year1.percentage * 250) / 100;
													$('#'+dirtyKey[i]+'_volatility_1year').find('.volatility-bar-median').css('margin-bottom', medianBar+'px').attr('title', volatility.year1.avg.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_1year').find('.volatility-min').html(volatility.year1.min.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_1year').find('.volatility-orders').html(volatility.year1.order.toCurrencyQtyString());
													$('#'+dirtyKey[i]+'_volatility_1year').find('.volatility-volume').html(volatility.year1.volume.toCurrencyQtyString());
													
											
												});
											});
											
										});
										getBestItem();
									}
									
								}).fail(function(data,status,xhr){
									returnCodeError(xhr, $('.'+dirtyKey[i]+'_system_name').html());
								});
							});
						}
					
					}, 200 * i);
				});
				
				setTimeout(function(){
					$('.all_sell_show').parent().parent().find('table.sortPrice').trigger("update");
					$('.all_buy_show').parent().parent().find('table.sortPrice').trigger("update");
					initCountdown('#all_sell_table');
					initCountdown('#all_buy_table');
					setGlobalVolatility(globalVolatility);
					
				}, 2000);
			
			}else{
				displayError('Item ID is missing');
			}
			
		}else{
		
			var timeElapse = diffTime/1000;
			var timeWarning = new Date();
			var diffWarning = timeFetch.getTime() - lastFetch.getTime();
			
			if(timeElapse > 2 && diffWarning > 1000){
				var timeLeft = 30 - timeElapse;
				toastr.info('You\'ve performed this request less than 30 seconds before, please wait '+ timeLeft.toFixed(0) +' seconds to perform it again.');
			}
			lastWarning = new Date();
			debugTool('Cancel openItem('+id+'), previous item ('+currentItem+') and have been fetched '+ timeElapse +' seconds before');	
		}

	}
	
	/*
	*	Get best item from sell/buy orders
	*/
	function getBestItem(){
	
		debugTool('Running getBestItem()');
		setTimeout(function(){

			/*
			*	sell order, seek higher and lower
			*
			*/
			var values = [];
			var valSystem = [];
			var valSystemId = [];
			$.each(dirtyKey, function(i, item){
				
				var val = $('table#'+item+'_sell_table > tbody > tr:first-child > td:first-child').html();
				if(val !== undefined){
					
					val = val.replace(',', '.');
					val = val.replace(/ /g, '');
					
					values[values.length] = val;
					valSystem[val] = $('.'+item+'_system_name').html();
					valSystemId[val] = $('.'+item+'_system_name').attr('data-id');
				}
			});
			
			var min = Math.min.apply(null, values);
			var max = Math.max.apply(null, values);
			
			var minName = valSystem[min.toFixed(2)];
			var minNameId = valSystemId[min.toFixed(2)];
			var maxName = valSystem[max.toFixed(2)];
			var maxNameId = valSystemId[max.toFixed(2)];
			
			if(typeof(min) != 'undefined' && typeof(max) != 'undefined'){
			
				$('.lower_price_system').html(minName).attr('data-id', minNameId);
				$('.lower_price').html(min.toCurrencyString());
			
				if(parseInt(min) > parseInt(max)){
				
					var result = parseFloat(min) / parseFloat(max);
					var sum = (result - 1) * 100;
					if(!isNaN(sum)){
						if (sum < 0) {
							$('.pourcent_gain').html('<span class="loose">'+sum.toFixed(2)+'%</span>');
						}else{
							$('.pourcent_gain').html('+'+sum.toFixed(2)+'%');
						}
					}
				}else{
				
					var result = parseFloat(max) / parseFloat(min);
					var sum = (result - 1) * 100;
					if(!isNaN(sum)){
						if (sum < 0) {
							$('.pourcent_gain').html('<span class="loose">'+sum.toFixed(2)+'%</span>');
						}else{
							$('.pourcent_gain').html('+'+sum.toFixed(2)+'%');
						}
					}
				}
				
				$('.higher_price_system').html(maxName).attr('data-id', maxNameId);
				$('.higher_price').html(max.toCurrencyString());
				
			}
			
			/*
			*	buy order, seek higher
			*
			*/
			var values = [];
			var valSystem = [];
			var valSystemId = [];
			var qtySystem = [];
			$.each(dirtyKey, function(i, item){
				
				var val = $('table#'+item+'_buy_table > tbody > tr:first-child > td:first-child').html();
				var qty = $('table#'+item+'_buy_table > tbody > tr:first-child > td:nth-child(2)').html();
				if(val !== undefined && qty !== undefined ){
					
					val = val.replace(',', '.');
					val = val.replace(/ /g, '');
					
					qty = qty.replace(',', '.');
					qty = qty.replace(/ /g, '');
					
					values[values.length] = val;
					valSystem[val] = $('.'+item+'_system_name').html();
					valSystemId[val] = $('.'+item+'_system_name').attr('data-id');
					qtySystem[val] = qty;
				}
			});
			
			var max = Math.max.apply(null, values);
			var maxName = valSystem[max.toFixed(2)];
			var maxNameId = valSystem[max.toFixed(2)];
			var qtyLinked = qtySystem[max.toFixed(2)];
			
			if(typeof(max) != 'undefined'){
				
				var result = parseFloat(max) / parseFloat(min);
				var sum = (result - 1) * 100;
				if(!isNaN(sum)){
					if (sum < 0) {
						$('.sell_pourcent_gain').html('<span class="loose">'+sum.toFixed(2)+'%</span>');
					}else{
						$('.sell_pourcent_gain').html('+'+sum.toFixed(2)+'%');
					}
				}
				$('.upper_price_system').html(maxName + ' ('+parseFloat(qtyLinked).toCurrencyQtyString()+' available)').attr('data-id', maxNameId);
				$('.upper_price').html(max.toCurrencyString());	
			}
		
		}, 500);

	}
	
	
	/*
	*	Get volatility
	*/
	function getVolatility(data){
	
		debugTool('Running getVolatility()');
		var volatility10days = {
			'low' : [],
			'avg' : [],
			'high' : [],
			'volume' : [],
			'order' : []
		};
		var volatility1month = {
			'low' : [],
			'avg' : [],
			'high' : [],
			'volume' : [],
			'order' : []
		};
		var volatility3months = {
			'low' : [],
			'avg' : [],
			'high' : [],
			'volume' : [],
			'order' : []
		};
		var volatility1year = {
			'low' : [],
			'avg' : [],
			'high' : [],
			'volume' : [],
			'order' : []
		};
		
		$.map(data,function(item, i){

			if(i <= 9){
			
				volatility10days.low[volatility10days.low.length] = item.lowPrice;
				volatility10days.avg[volatility10days.avg.length] = item.avgPrice;
				volatility10days.high[volatility10days.high.length] = item.highPrice;
				volatility10days.volume[volatility10days.volume.length] = item.volume;
				volatility10days.order[volatility10days.order.length] = item.orderCount;
				
				volatility1month.low[volatility1month.low.length] = item.lowPrice;
				volatility1month.avg[volatility1month.avg.length] = item.avgPrice;
				volatility1month.high[volatility1month.high.length] = item.highPrice;
				volatility1month.volume[volatility1month.volume.length] = item.volume;
				volatility1month.order[volatility1month.order.length] = item.orderCount;
				
				volatility3months.low[volatility3months.low.length] = item.lowPrice;
				volatility3months.avg[volatility3months.avg.length] = item.avgPrice;
				volatility3months.high[volatility3months.high.length] = item.highPrice;
				volatility3months.volume[volatility3months.volume.length] = item.volume;
				volatility3months.order[volatility3months.order.length] = item.orderCount;
				
				volatility1year.low[volatility1year.low.length] = item.lowPrice;
				volatility1year.avg[volatility1year.avg.length] = item.avgPrice;
				volatility1year.high[volatility1year.high.length] = item.highPrice;
				volatility1year.volume[volatility1year.volume.length] = item.volume;
				volatility1year.order[volatility1year.order.length] = item.orderCount;
				
				
			
			}else if(i > 9 && i <= 29){
			
				volatility1month.low[volatility1month.low.length] = item.lowPrice;
				volatility1month.avg[volatility1month.avg.length] = item.avgPrice;
				volatility1month.high[volatility1month.high.length] = item.highPrice;
				volatility1month.volume[volatility1month.volume.length] = item.volume;
				volatility1month.order[volatility1month.order.length] = item.orderCount;
				
				volatility3months.low[volatility3months.low.length] = item.lowPrice;
				volatility3months.avg[volatility3months.avg.length] = item.avgPrice;
				volatility3months.high[volatility3months.high.length] = item.highPrice;
				volatility3months.volume[volatility3months.volume.length] = item.volume;
				volatility3months.order[volatility3months.order.length] = item.orderCount;
				
				volatility1year.low[volatility1year.low.length] = item.lowPrice;
				volatility1year.avg[volatility1year.avg.length] = item.avgPrice;
				volatility1year.high[volatility1year.high.length] = item.highPrice;
				volatility1year.volume[volatility1year.volume.length] = item.volume;
				volatility1year.order[volatility1year.order.length] = item.orderCount;
				
			
			}else if(i > 29 && i <= 89){
			
				volatility3months.low[volatility3months.low.length] = item.lowPrice;
				volatility3months.avg[volatility3months.avg.length] = item.avgPrice;
				volatility3months.high[volatility3months.high.length] = item.highPrice;
				volatility3months.volume[volatility3months.volume.length] = item.volume;
				volatility3months.order[volatility3months.order.length] = item.orderCount;
				
				volatility1year.low[volatility1year.low.length] = item.lowPrice;
				volatility1year.avg[volatility1year.avg.length] = item.avgPrice;
				volatility1year.high[volatility1year.high.length] = item.highPrice;
				volatility1year.volume[volatility1year.volume.length] = item.volume;
				volatility1year.order[volatility1year.order.length] = item.orderCount;
			
			
			}else if(i > 89 && i <= 364){
			
				volatility1year.low[volatility1year.low.length] = item.lowPrice;
				volatility1year.avg[volatility1year.avg.length] = item.avgPrice;
				volatility1year.high[volatility1year.high.length] = item.highPrice;
				volatility1year.volume[volatility1year.volume.length] = item.volume;
				volatility1year.order[volatility1year.order.length] = item.orderCount;
			
			}

		});
		
		var median = {
		
			'days10' : {
				'min' : getMedian(volatility10days.low),
				'avg' : getMedian(volatility10days.avg),
				'high' : getMedian(volatility10days.high),
				'percentage' : parseFloat(100 * getMedian(volatility10days.avg)) / parseFloat(getMedian(volatility10days.high)),
				'volume' : getMedian(volatility10days.volume),
				'order' : getMedian(volatility10days.order)
			},
			'month1' : {
				'min' : getMedian(volatility1month.low),
				'avg' : getMedian(volatility1month.avg),
				'high' : getMedian(volatility1month.high),
				'percentage' : parseFloat(100 * getMedian(volatility1month.avg)) / parseFloat(getMedian(volatility1month.high)),
				'volume' : getMedian(volatility1month.volume),
				'order' : getMedian(volatility1month.order)
			},
			'month3' : {
				'min' : getMedian(volatility3months.low),
				'avg' : getMedian(volatility3months.avg),
				'high' : getMedian(volatility3months.high),
				'percentage' : parseFloat(100 * getMedian(volatility3months.avg)) / parseFloat(getMedian(volatility3months.high)),
				'volume' : getMedian(volatility3months.volume),
				'order' : getMedian(volatility3months.order)
			},
			'year1' : {
				'min' : getMedian(volatility1year.low),
				'avg' : getMedian(volatility1year.avg),
				'high' : getMedian(volatility1year.high),
				'percentage' : parseFloat(100 * getMedian(volatility1year.avg)) / parseFloat(getMedian(volatility1year.high)),
				'volume' : getMedian(volatility1year.volume),
				'order' : getMedian(volatility1year.order)
			}
		
		}
		return median;

	}
	
	
	function setGlobalVolatility(data){
	
		debugTool('Running getVolatility()');
		var volatility10days = {
			'low' : [],
			'avg' : [],
			'high' : [],
			'volume' : [],
			'order' : []
		};
		var volatility1month = {
			'low' : [],
			'avg' : [],
			'high' : [],
			'volume' : [],
			'order' : []
		};
		var volatility3months = {
			'low' : [],
			'avg' : [],
			'high' : [],
			'volume' : [],
			'order' : []
		};
		var volatility1year = {
			'low' : [],
			'avg' : [],
			'high' : [],
			'volume' : [],
			'order' : []
		};
		
		$.map(data,function(item, i){
		
		
			volatility10days.low[volatility10days.low.length] = item.days10.min;
			volatility10days.avg[volatility10days.avg.length] = item.days10.avg;
			volatility10days.high[volatility10days.high.length] = item.days10.high;
			volatility10days.volume[volatility10days.volume.length] = item.days10.volume;
			volatility10days.order[volatility10days.order.length] = item.days10.order;
			
			volatility1month.low[volatility1month.low.length] = item.month1.min;
			volatility1month.avg[volatility1month.avg.length] = item.month1.avg;
			volatility1month.high[volatility1month.high.length] = item.month1.high;
			volatility1month.volume[volatility1month.volume.length] = item.month1.volume;
			volatility1month.order[volatility1month.order.length] = item.month1.order;
			
			volatility3months.low[volatility3months.low.length] = item.month3.min;
			volatility3months.avg[volatility3months.avg.length] = item.month3.avg;
			volatility3months.high[volatility3months.high.length] = item.month3.high;
			volatility3months.volume[volatility3months.volume.length] = item.month3.volume;
			volatility3months.order[volatility3months.order.length] = item.month3.order;
			
			volatility1year.low[volatility1year.low.length] = item.year1.min;
			volatility1year.avg[volatility1year.avg.length] = item.year1.avg;
			volatility1year.high[volatility1year.high.length] = item.year1.high;
			volatility1year.volume[volatility1year.volume.length] = item.year1.volume;
			volatility1year.order[volatility1year.order.length] = item.year1.order;
		
		});
		
		var median = {
		
			'days10' : {
				'min' : getMedian(volatility10days.low),
				'avg' : getMedian(volatility10days.avg),
				'high' : getMedian(volatility10days.high),
				'percentage' : parseFloat(100 * getMedian(volatility10days.avg)) / parseFloat(getMedian(volatility10days.high)),
				'volume' : getMedian(volatility10days.volume),
				'order' : getMedian(volatility10days.order)
			},
			'month1' : {
				'min' : getMedian(volatility1month.low),
				'avg' : getMedian(volatility1month.avg),
				'high' : getMedian(volatility1month.high),
				'percentage' : parseFloat(100 * getMedian(volatility1month.avg)) / parseFloat(getMedian(volatility1month.high)),
				'volume' : getMedian(volatility1month.volume),
				'order' : getMedian(volatility1month.order)
			},
			'month3' : {
				'min' : getMedian(volatility3months.low),
				'avg' : getMedian(volatility3months.avg),
				'high' : getMedian(volatility3months.high),
				'percentage' : parseFloat(100 * getMedian(volatility3months.avg)) / parseFloat(getMedian(volatility3months.high)),
				'volume' : getMedian(volatility3months.volume),
				'order' : getMedian(volatility3months.order)
			},
			'year1' : {
				'min' : getMedian(volatility1year.low),
				'avg' : getMedian(volatility1year.avg),
				'high' : getMedian(volatility1year.high),
				'percentage' : parseFloat(100 * getMedian(volatility1year.avg)) / parseFloat(getMedian(volatility1year.high)),
				'volume' : getMedian(volatility1year.volume),
				'order' : getMedian(volatility1year.order)
			}
		
		}
		
		$('#all_volatility_10days').find('.volatility-high').html(median.days10.high.toCurrencyQtyString());
		var medianBar = parseFloat(median.days10.percentage * 250) / 100;
		$('#all_volatility_10days').find('.volatility-bar-median').css('margin-bottom', medianBar+'px').attr('title', median.days10.avg.toCurrencyQtyString());
		$('#all_volatility_10days').find('.volatility-min').html(median.days10.min.toCurrencyQtyString());
		$('#all_volatility_10days').find('.volatility-orders').html(median.days10.order.toCurrencyQtyString());
		$('#all_volatility_10days').find('.volatility-volume').html(median.days10.volume.toCurrencyQtyString());
		
		$('#all_volatility_1month').find('.volatility-high').html(median.month1.high.toCurrencyQtyString());
		var medianBar = parseFloat(median.month1.percentage * 250) / 100;
		$('#all_volatility_1month').find('.volatility-bar-median').css('margin-bottom', medianBar+'px').attr('title', median.month1.avg.toCurrencyQtyString());
		$('#all_volatility_1month').find('.volatility-min').html(median.month1.min.toCurrencyQtyString());
		$('#all_volatility_1month').find('.volatility-orders').html(median.month1.order.toCurrencyQtyString());
		$('#all_volatility_1month').find('.volatility-volume').html(median.month1.volume.toCurrencyQtyString());
		
		$('#all_volatility_3months').find('.volatility-high').html(median.month3.high.toCurrencyQtyString());
		var medianBar = parseFloat(median.month3.percentage * 250) / 100;
		$('#all_volatility_3months').find('.volatility-bar-median').css('margin-bottom', medianBar+'px').attr('title', median.month3.avg.toCurrencyQtyString());
		$('#all_volatility_3months').find('.volatility-min').html(median.month3.min.toCurrencyQtyString());
		$('#all_volatility_3months').find('.volatility-orders').html(median.month3.order.toCurrencyQtyString());
		$('#all_volatility_3months').find('.volatility-volume').html(median.month3.volume.toCurrencyQtyString());		
		
		$('#all_volatility_1year').find('.volatility-high').html(median.year1.high.toCurrencyQtyString());
		var medianBar = parseFloat(median.year1.percentage * 250) / 100;
		$('#all_volatility_1year').find('.volatility-bar-median').css('margin-bottom', medianBar+'px').attr('title', median.year1.avg.toCurrencyQtyString());
		$('#all_volatility_1year').find('.volatility-min').html(median.year1.min.toCurrencyQtyString());
		$('#all_volatility_1year').find('.volatility-orders').html(median.year1.order.toCurrencyQtyString());
		$('#all_volatility_1year').find('.volatility-volume').html(median.year1.volume.toCurrencyQtyString());

	}
	
	/*
	*	Format xhr status code
	*/
	function returnCodeError(xhr, idmarket){
		if(typeof(xhr.status) !== 'undefined' && xhr.status==409){
			toastr.warning('Too much request, please try again.');
		}else if(typeof(xhr.status) !== 'undefined' && xhr.status==503){
			toastr.warning(idmarket+' market is actually unavailable.');
		}else{
		
			// console.log(xhr);
			if(typeof(xhr.status) == 'undefined' && xhr == 'Unauthorized'){
				if(!error){
					toastr.error('Your session has expired, please reconnect');
					ajaxSetup(false);
					$("#login").addClass('login').html('<img src="img/eve_login.png"/>');
					$('body').removeClass('connected');
					$("#market-window, #item-window").slideUp(500, function(){
						$("#market-window, #item-window").addClass('hidden');
					});
					$('#searchBar').fadeOut(500, function(){
						$('#searchBar').addClass('hidden')
					});
					error = true;
					logged = false;
				}
			}else if(xhr.status == 0 && xhr.responseText == "" && xhr.statusText == "error"){
				if(!error && downtime){
					error = true;
					toastr.error('It\'s downtime, have a break and come back when eve is back !');
					$('#item-window').slideUp(200);
					$('.container-loader img').fadeOut(200);
				}
			}
		}
	}
	
	
	/*
	*	Countdown to eve shutdown
	*
	*/
	function checkDowntime(){
		var now = new Date(); 
		var hour = now.getUTCHours();
		var minute = now.getUTCMinutes();
		var sec = now.getUTCSeconds();
		
		if(hour == 10){
			if(minute >= 55){
				var timeLeft = 60 - minute;
				if(sec == 0){
					toastr.info('Downtime is coming in '+timeLeft+' minute(s), brace yourself');
				}
			}
		}else if(hour == 11){
		
			if(minute <= 35){
				
				if(!downtimeAlert && downtime){
					downtimeAlert = true;
					toastr.info('It\'s downtime, have a break and come back when eve is back !');
				}
				
				if(sec == 0 && downtime){
					checkIfOnline(false);
				}
				
			}
		}
		
		setTimeout(function(){
			checkDowntime();
		}, 1000);
	}
	
	
	/*
	*	Check if eve is online
	*
	*/
	function checkIfOnline(callback){
	
		$.ajax({
			url: siteURL+"?do=server_status",
			crossDomain: false,
			type: "GET",
			dataType: "json"
		}).done(function(data,status,xhr){
			console.log(data.time + ' | '+data.status + ' | '+data.nbPlayer);
			if(data.status == 'True'){
				downtime = false;
			}else{
				downtime = true;
			}
			
			if(callback !== false){
				callback();
			}
		
		});
	
	}

	/*
	*	Extract value from oauth formatted hash fragment.
	*/
	function extractFromHash(name, hash) {
		var match = hash.match(new RegExp(name + "=([^&]+)"));
		return !!match && match[1];
	}

	/*
	*	Generate an RFC4122 version 4 UUID
	*/
	function uuidGen() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
			return v.toString(16);
		});
	}

	/*
	*	Defaut ajax config
	*/
	function ajaxSetup(token) {
		var headers = {
			"Accept": "application/json, charset=utf-8"
		};
		if (token) {
			headers.Authorization = "Bearer " + token;
		}
		if ($.cookie('market-language')) {
			headers['Accept-Language'] = $.cookie('market-language');
		}
		$.ajaxSetup({
			accepts: "application/json, charset=utf-8",
			crossDomain: true,
			type: "GET",
			dataType: "json",
			headers: headers,
			error: function (xhr, status, error) {
				returnCodeError(xhr);
				debugTool('Ajax code : '+ xhr.status);
				debugTool('Ajax status : '+ status);
				debugTool('Ajax error : '+ error);
			}
		});
	}

	$(document).ready(function() {

		var hash = window.location.hash;
		var token = extractFromHash("access_token", hash);
		$('.hidden, .sortme').hide();
	  
		if (token) {
			ajaxSetup(token);
			/*
			*	Check CSRF token in state matches token saved in cookie
			*/
			if(extractFromHash("state", hash) !== $.cookie(csrfTokenName)) {
				displayError("CSRF token mismatch");
			return;
			}

			/*
			*	Remove hash from url
			*/
			window.location.hash = $.cookie(hashTokenName);

			/*
			*	Delete cookies
			*/
			$.cookie(csrfTokenName, null);
			$.cookie(hashTokenName, null);
			logged = true;
			$("#login-window").hide();
			$("#login").removeClass('login').html('<img src="img/eve_logout.png"/>');
			$('body').addClass('connected');
			$("#market-window").removeClass('hidden').slideDown(500);
			$('#searchBar').removeClass('hidden').show();
			setItemCache('start');			
		}
		
		/*
		*	Check Downtime
		*
		*/
		checkIfOnline(function(){
			checkDowntime();
		});
		
		
		/*
		*	Log to eveSSO
		*/
		$(document).on('click', '#login', function(){
		
			if($("#login").hasClass('login') && !$('body').hasClass('connnected') && logged===false){
		
				if(!downtime){
					
					logged = true;
					// Store CSRF token and current location as cookie
					var csrfToken = uuidGen();
					$.cookie(csrfTokenName, csrfToken);
					$.cookie(hashTokenName, window.location.hash);

					// No OAuth token, request one from the OAuth authentication endpoint
					window.location =  "https://login.eveonline.com/oauth/authorize/" +
					"?response_type=token" +
					"&client_id=" + clientId +
					"&scope=" + scopes +
					"&redirect_uri=" + siteURL +
					"&state=" + csrfToken;
				
				}else{
					toastr.warning('You cannot connect during eve downtime, please come back later.');
				}

			}else{
			
				toastr.info('You have been disconnected, see you soon.');
				ajaxSetup(false);
				logged = false;
				$("#login").addClass('login').html('<img src="img/eve_login.png"/>');
				$('body').removeClass('connected');
				$("#market-window, #item-window").slideUp(500, function(){
					$("#market-window, #item-window").addClass('hidden');
				});
				$('#searchBar').fadeOut(500, function(){
					$('#searchBar').addClass('hidden')
				});			
			}
			return false;
		
		
		});
		
	});
	

}($, window, document)); // End crestexplorerjs
/*
*	Render error message
*/
function displayError(error) {
	toastr.error(error);
}


/*
*	eveBrowserDebug tool
*/
function debugTool(error){
	
	if(debug){
		if($('#debugTool').length){}else{
			$('body').append('<div id="debugTool" style="position:fixed;padding:10px;z-index:999;background-color:#fff;bottom:0;width:100%;height:250px;overflow:scroll"></div>');
		}
		$('#debugTool').append(error+'<br>');
	}
}


/*
*	Animate background
*/
function animateBackground(){
	if($('.wrap-fadein').hasClass('active')){
		$('.wrap-fadein, .bg_container').hide().css('background', 'url("'+$("#wrap-bg .wrap-list img.bgfade").first().attr('src')+'")').attr('data-src', $("#wrap-bg .wrap-list img.bgfade").first().attr('src'));
		$('.wrap-fadeout').show().fadeOut(1500);
		$('.wrap-fadein, .bg_container').fadeIn(1500, function(){
			$('.wrap-fadeout').css('background', 'url("'+$('.wrap-fadein').attr('data-src')+'")');
			$("#wrap-bg .wrap-list img.bgfade").first().appendTo('#wrap-bg .wrap-list');
		});
	}else{
		$('.wrap-fadein, .wrap-fadeout, .bg_container').css('background', 'url("'+$("#wrap-bg .wrap-list img.bgfade").first().attr('src')+'")').attr('data-src', $("#wrap-bg .wrap-list img.bgfade").first().attr('src'));
		$('.wrap-fadein, .bg_container').fadeIn(1500, function(){
			$('.wrap-fadein').addClass('active');
			$("#wrap-bg .wrap-list img.bgfade").first().appendTo('#wrap-bg .wrap-list');
		});
	}
	
	setTimeout(animateBackground, 30000);
}
$(window).load(function(){
	$('img.bgfade').hide();
	$('#wrap-bg').css({'height':$(window).height(),'width':$(window).width()});
	animateBackground();
});
$(window).resize(function(){
	$('#wrap-bg').css({'height':$(window).height(),'width':$(window).width()});
});


$(document).ready(function() {

	debugTool('Init...');
	var minHeight = $('#jita').find('.sideTabs').height();

	/*
	*	Open item in the eve market browser
	*/
	$(document).on('click', '#currentItemName, #currentItemImg', function(){
		
		var linkID = $(this).data('id');
		if(typeof(CCPEVE) == 'undefined'){
			displayError('You must be in eveonline&copy; browser in order to open the market');
		}else{
			CCPEVE.showMarketDetails(linkID);
		}
		
		return false;
		
	});
	
	/*
	*	Set the destination in eve browser
	*/
	$(document).on('click', '.setDestination', function(){
		
		var stationID = $(this).data('id');
		if(typeof(CCPEVE) == 'undefined'){
			displayError('You must be in eveonline&copy; browser to set a destination');
		}else{
			CCPEVE.setDestination(stationID);
		}
		
		return false;
		
	});
	
	/*
	*	SlideToggle item info
	*/
	$(document).on('click', '.item-info-close', function(){
		
		$('.item-info-container').slideToggle(500);
		return false;
	});
	
	/*
	*	Set sidetabs Height from maintbabs
	*/
	$('.mainTabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href");
		var height = $(target).find('.contentTabs').height();
		
		if(height > minHeight)
			$(target).find('.sideTabs').css('height', height);
		
	});
	
	
	/*
	*	Set sidetabs Height from sidetabs
	*/
	$('.sideTabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href");
		var height = $(target).parent().parent().height();
		
		if(height > minHeight)
			$(e.target).parent().parent().css('height', height);
		
	});
	
	$('body').tooltip({
		selector: '[rel=tooltip]'
	});
	

});