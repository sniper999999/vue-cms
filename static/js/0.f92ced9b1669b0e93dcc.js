webpackJsonp([0],{"8Z7i":function(t,e,a){"use strict";(function(t){e.a=function(){var e=void 0,a=void 0,r=void 0,n=void 0;return i=document.createElement("_"),o=i.style,s=void 0,""===o[s="webkitTransition"]&&(r="webkitTransitionEnd",a=s),""===o[s="transition"]&&(r="transitionend",a=s),""===o[s="webkitTransform"]&&(e=s),""===o[s="msTransform"]&&(e=s),""===o[s="transform"]&&(e=s),document.body.insertBefore(i,null),o[e]="translate3d(0, 0, 0)",n=!!t.getComputedStyle(i).getPropertyValue(e),document.body.removeChild(i),{transform:e,transition:a,transitionEnd:r,hasTranslate3d:n};var i,o,s}}).call(e,a("DuR2"))},EarI:function(t,e){var a=1e3,r=60*a,n=60*r,i=24*n,o=365.25*i;function s(t,e,a){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+a:Math.ceil(t/e)+" "+a+"s"}t.exports=function(t,e){e=e||{};var c,u=typeof t;if("string"===u&&t.length>0)return function(t){if((t=String(t)).length>100)return;var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(!e)return;var s=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*o;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*n;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(t);if("number"===u&&!1===isNaN(t))return e.long?s(c=t,i,"day")||s(c,n,"hour")||s(c,r,"minute")||s(c,a,"second")||c+" ms":function(t){if(t>=i)return Math.round(t/i)+"d";if(t>=n)return Math.round(t/n)+"h";if(t>=r)return Math.round(t/r)+"m";if(t>=a)return Math.round(t/a)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},"Fy0/":function(t,e,a){(function(r){function n(){var t;try{t=e.storage.debug}catch(t){}return!t&&void 0!==r&&"env"in r&&(t=Object({NODE_ENV:"production"}).DEBUG),t}(e=t.exports=a("vmzn")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(t){var a=this.useColors;if(t[0]=(a?"%c":"")+this.namespace+(a?" %c":" ")+t[0]+(a?"%c ":" ")+"+"+e.humanize(this.diff),!a)return;var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var n=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&"%c"===t&&(i=++n)}),t.splice(i,0,r)},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}},e.load=n,e.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(n())}).call(e,a("W2nU"))},TlRg:function(t,e){},hU7x:function(t,e,a){var r=a("Fy0/")("jsonp");t.exports=function(t,e,a){"function"==typeof e&&(a=e,e={});e||(e={});var o,s,c=e.prefix||"__jp",u=e.name||c+n++,h=e.param||"callback",p=null!=e.timeout?e.timeout:6e4,m=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;p&&(s=setTimeout(function(){f(),a&&a(new Error("Timeout"))},p));function f(){o.parentNode&&o.parentNode.removeChild(o),window[u]=i,s&&clearTimeout(s)}return window[u]=function(t){r("jsonp got",t),f(),a&&a(null,t)},t=(t+=(~t.indexOf("?")?"&":"?")+h+"="+m(u)).replace("?&","?"),r('jsonp req "%s"',t),(o=document.createElement("script")).src=t,d.parentNode.insertBefore(o,d),function(){window[u]&&f()}};var n=0;function i(){}},kdsv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Gu7T"),n=a.n(r),i=a("//Fk"),o=a.n(i),s=a("yDoh");var c=a("8Z7i"),u={props:{stackinit:{type:Object,default:{}},pages:{type:Array,default:[]}},data:function(){return{basicdata:{start:{},end:{}},temporaryData:{prefixes:Object(c.a)(),offsetY:"",poswidth:0,posheight:0,lastPosWidth:"",lastPosHeight:"",lastZindex:"",rotate:0,lastRotate:0,visible:this.stackinit.visible||3,tracking:!1,animation:!1,currentPage:this.stackinit.currentPage||0,opacity:1,lastOpacity:0,swipe:!1,zIndex:10}}},computed:{offsetRatio:function(){var t=this.$el.offsetWidth,e=this.$el.offsetHeight,a=1-(t-Math.abs(this.temporaryData.poswidth))*(e-Math.abs(this.temporaryData.posheight))/(t*e)||0;return a>1?1:a},offsetWidthRatio:function(){var t=this.$el.offsetWidth;return 1-(t-Math.abs(this.temporaryData.poswidth))/t||0}},mounted:function(){var t=this;this.$on("next",function(){t.next()}),this.$on("prev",function(){t.prev()}),document.addEventListener("touchmove",function(t){t.preventDefault()})},methods:{touchstart:function(t){if(!this.temporaryData.tracking){if("touchstart"===t.type){if(t.touches.length>1)return void(this.temporaryData.tracking=!1);this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY,this.temporaryData.offsetY=t.targetTouches[0].pageY-this.$el.offsetParent.offsetTop}else this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY,this.temporaryData.offsetY=t.offsetY;this.temporaryData.tracking=!0,this.temporaryData.animation=!1}},touchmove:function(t){if(this.temporaryData.tracking&&!this.temporaryData.animation){"touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),this.temporaryData.poswidth=this.basicdata.end.x-this.basicdata.start.x,this.temporaryData.posheight=this.basicdata.end.y-this.basicdata.start.y;var e=this.rotateDirection(),a=this.angleRatio();this.temporaryData.rotate=e*this.offsetWidthRatio*15*a}},touchend:function(t){if(this.temporaryData.tracking=!1,this.temporaryData.animation=!0,this.offsetRatio>=.4){var e=Math.abs(this.temporaryData.posheight/this.temporaryData.poswidth);this.temporaryData.poswidth=this.temporaryData.poswidth>=0?this.temporaryData.poswidth+200:this.temporaryData.poswidth-200,this.temporaryData.posheight=this.temporaryData.posheight>=0?Math.abs(this.temporaryData.poswidth*e):-Math.abs(this.temporaryData.poswidth*e),this.temporaryData.opacity=0,this.temporaryData.swipe=!0,this.nextTick()}else this.temporaryData.poswidth=0,this.temporaryData.posheight=0,this.temporaryData.swipe=!1,this.temporaryData.rotate=0},nextTick:function(){var t=this;this.temporaryData.lastPosWidth=this.temporaryData.poswidth,this.temporaryData.lastPosHeight=this.temporaryData.posheight,this.temporaryData.lastRotate=this.temporaryData.rotate,this.temporaryData.lastZindex=20,this.temporaryData.currentPage=this.temporaryData.currentPage===this.pages.length-1?0:this.temporaryData.currentPage+1,this.$nextTick(function(){t.temporaryData.poswidth=0,t.temporaryData.posheight=0,t.temporaryData.opacity=1,t.temporaryData.rotate=0})},onTransitionEnd:function(t){var e=0===this.temporaryData.currentPage?this.pages.length-1:this.temporaryData.currentPage-1;this.temporaryData.swipe&&t===e&&(this.temporaryData.animation=!0,this.temporaryData.lastPosWidth=0,this.temporaryData.lastPosHeight=0,this.temporaryData.lastOpacity=0,this.temporaryData.lastRotate=0,this.temporaryData.swipe=!1,this.temporaryData.lastZindex=-1)},prev:function(){this.temporaryData.tracking=!1,this.temporaryData.animation=!0;var t=this.$el.offsetWidth;this.temporaryData.poswidth=-t,this.temporaryData.posheight=0,this.temporaryData.opacity=0,this.temporaryData.rotate="-3",this.temporaryData.swipe=!0,this.nextTick()},next:function(){this.temporaryData.tracking=!1,this.temporaryData.animation=!0;var t=this.$el.offsetWidth;this.temporaryData.poswidth=t,this.temporaryData.posheight=0,this.temporaryData.opacity=0,this.temporaryData.rotate="3",this.temporaryData.swipe=!0,this.nextTick()},rotateDirection:function(){return this.temporaryData.poswidth<=0?-1:1},angleRatio:function(){var t=this.$el.offsetHeight;return-1*(2*this.temporaryData.offsetY/t-1)||0},inStack:function(t,e){for(var a=[],r=this.temporaryData.visible,n=this.pages.length,i=0;i<r;i++)e+i<n?a.push(e+i):a.push(e+i-n);return a.indexOf(t)>=0},transform:function(t){var e=this.temporaryData.currentPage,a=this.pages.length,r=0===e?this.pages.length-1:e-1,n={},i=this.temporaryData.visible;if(t!==this.temporaryData.currentPage){if(this.inStack(t,e)){var o=t-e>0?t-e:t-e+a;n.opacity="1",n.transform="translate3D(0,0,"+-60*(o-this.offsetRatio)+"px)",n.zIndex=i-o,this.temporaryData.tracking||(n[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",n[this.temporaryData.prefixes.transition+"Duration"]="300ms")}else t===r?(n.transform="translate3D("+this.temporaryData.lastPosWidth+"px,"+this.temporaryData.lastPosHeight+"px,0px) rotate("+this.temporaryData.lastRotate+"deg)",n.opacity=this.temporaryData.lastOpacity,n.zIndex=this.temporaryData.lastZindex,n[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",n[this.temporaryData.prefixes.transition+"Duration"]="300ms"):(n.zIndex="-1",n.transform="translate3D(0,0,"+-1*i*60+"px)");return n}},transformIndex:function(t){if(t===this.temporaryData.currentPage){var e={};return e.transform="translate3D("+this.temporaryData.poswidth+"px,"+this.temporaryData.posheight+"px,0px) rotate("+this.temporaryData.rotate+"deg)",e.opacity=this.temporaryData.opacity,e.zIndex=10,this.temporaryData.animation&&(e[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",e[this.temporaryData.prefixes.transition+"Duration"]=(this.temporaryData.animation?300:0)+"ms"),e}}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"stack"},t._l(t.pages,function(e,r){return a("li",{staticClass:"stack-item",style:[t.transformIndex(r),t.transform(r)],on:{"!touchmove":function(e){return e.stopPropagation(),e.preventDefault(),t.touchmove(e)},"!touchstart":function(e){return e.stopPropagation(),e.preventDefault(),t.touchstart(e)},"!touchend":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e)},"!touchcancel":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e)},"!mousedown":function(e){return e.stopPropagation(),e.preventDefault(),t.touchstart(e)},"!mouseup":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e)},"!mousemove":function(e){return e.stopPropagation(),e.preventDefault(),t.touchmove(e)},"!mouseout":function(e){return e.stopPropagation(),e.preventDefault(),t.touchend(e)},"webkit-transition-end":function(e){return t.onTransitionEnd(r)},transitionend:function(e){return t.onTransitionEnd(r)}}},[a("div",{domProps:{innerHTML:t._s(e.html)}})])}),0)},staticRenderFns:[]};var p={name:"introduction",components:{Stack:a("VU/8")(u,h,!1,function(t){a("TlRg")},"data-v-70f14212",null).exports},data:function(){return{isDev:null,imgUrl:[],someList:[],stackinit:{visible:3}}},methods:{prev:function(){this.$refs.stack.$emit("prev")},next:function(){this.$refs.stack.$emit("next")}},created:function(){var t,e,a=this;this.isDev=!1,(t={param:"callback"},e={start:0,count:10,city:"深圳"},o.a.all([Object(s.a)("https://douban.uieee.com/v2/movie/in_theaters",e,t),Object(s.a)("https://douban.uieee.com/v2/movie/coming_soon",e,t)])).then(function(t){[].concat(n()(t[0].subjects),n()(t[1].subjects)).forEach(function(t,e,r){a.imgUrl.push({html:"<img src='"+t.images.large+"'>"})})})},mounted:function(){var t=this;this.$nextTick(function(){t.someList=t.imgUrl})}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"introduction"},[t._v("\n  "+t._s(t.$t("author.name"))+"：\n  "),a("ul",[a("li",[t._v(t._s(t.$t("introduction.item1")))]),t._v(" "),a("li",[t._v(t._s(t.$t("introduction.item2")))]),t._v(" "),a("li",[t._v(t._s(t.$t("introduction.item3")))]),t._v(" "),a("li",[t._v(t._s(t.$t("introduction.item4.title")))]),t._v(" "),a("ul",[a("li",[t._v(t._s(t.$t("introduction.item4.contents[0]")))]),t._v(" "),a("li",[t._v(t._s(t.$t("introduction.item4.contents[1]")))])]),t._v(" "),a("li",[t._v(t._s(t.$t("introduction.item5")))]),t._v(" "),a("li",[t._v(t._s(t.$t("introduction.item6")))])]),t._v(" "),a("div",{staticClass:"mid-center"},[a("div",{staticClass:"stack-wrapper"},[a("stack",{ref:"stack",attrs:{pages:t.someList,stackinit:t.stackinit}})],1),t._v(" "),a("div",{staticClass:"controls"},[a("button",{staticClass:"button",on:{click:t.prev}},[a("i",{staticClass:"prev"}),a("span",{staticClass:"text-hidden"},[t._v("prev")])]),t._v(" "),a("button",{staticClass:"button",on:{click:t.next}},[a("i",{staticClass:"next"}),a("span",{staticClass:"text-hidden"},[t._v("next")])])])])])},staticRenderFns:[]};var d=a("VU/8")(p,m,!1,function(t){a("mQFn")},"data-v-6b5c18cd",null);e.default=d.exports},mQFn:function(t,e){},vmzn:function(t,e,a){var r;function n(t){function a(){if(a.enabled){var t=a,n=+new Date,i=n-(r||n);t.diff=i,t.prev=r,t.curr=n,r=n;for(var o=new Array(arguments.length),s=0;s<o.length;s++)o[s]=arguments[s];o[0]=e.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var c=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,function(a,r){if("%%"===a)return a;c++;var n=e.formatters[r];if("function"==typeof n){var i=o[c];a=n.call(t,i),o.splice(c,1),c--}return a}),e.formatArgs.call(t,o),(a.log||e.log||console.log.bind(console)).apply(t,o)}}return a.namespace=t,a.enabled=e.enabled(t),a.useColors=e.useColors(),a.color=function(t){var a,r=0;for(a in t)r=(r<<5)-r+t.charCodeAt(a),r|=0;return e.colors[Math.abs(r)%e.colors.length]}(t),"function"==typeof e.init&&e.init(a),a}(e=t.exports=n.debug=n.default=n).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){e.save(t),e.names=[],e.skips=[];for(var a=("string"==typeof t?t:"").split(/[\s,]+/),r=a.length,n=0;n<r;n++)a[n]&&("-"===(t=a[n].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))},e.enabled=function(t){var a,r;for(a=0,r=e.skips.length;a<r;a++)if(e.skips[a].test(t))return!1;for(a=0,r=e.names.length;a<r;a++)if(e.names[a].test(t))return!0;return!1},e.humanize=a("EarI"),e.names=[],e.skips=[],e.formatters={}},yDoh:function(t,e,a){"use strict";e.a=function(t,e,a){return t+=(t.indexOf("?")<0?"?":"&")+function(t){var e="";for(var a in t){var r=void 0!==t[a]?t[a]:"";"object"===(void 0===r?"undefined":o()(r))?e+="&"+a+"="+encodeURIComponent(n()(r)):e+="&"+a+"="+encodeURIComponent(r)}return e?e.substring(1):""}(e),new c.a(function(e,r){h()(t,a,function(t,a){t?r(t):e(a)})})};var r=a("mvHQ"),n=a.n(r),i=a("pFYg"),o=a.n(i),s=a("//Fk"),c=a.n(s),u=a("hU7x"),h=a.n(u)}});
//# sourceMappingURL=0.f92ced9b1669b0e93dcc.js.map