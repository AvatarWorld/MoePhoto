!function(e){function t(t){for(var o,r,s=t[0],l=t[1],u=t[2],c=0,f=[];c<s.length;c++)r=s[c],i[r]&&f.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={4:0,3:0},i={4:0,3:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{0:1}[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="static/css/"+e+"."+{0:"6a20f4e8774f262b5d5f"}[e]+".css",i=s.p+o,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var u=(d=a[l]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===o||u===i))return t()}var c=document.getElementsByTagName("style");for(l=0;l<c.length;l++){var d;if((u=(d=c[l]).getAttribute("data-href"))===o||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=i,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){r[e]=0}));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=i[e]=[t,o]});t.push(n[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=function(e){return s.p+"static/js/"+{0:"bfb4d3f71107c7b598f7"}[e]+".js"}(e),a=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}i[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=u;a.push([32,1]),n()}({1:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=(n(11),n(3));n(4),n(5),n(6),n(7),n(8),n(9);const a=window.document,s={cache:!1},l=e=>e&&"string"==typeof e?JSON.parse(e):e,u=(e,t,n={})=>{var o={url:e,session:t,xhr:null,status:0},i={};n=Object.assign({},s,n);const a=e=>{var t=Object.assign({},n);return e&&"object"==typeof e?(t.data=Object.assign({session:o.session},e),t.url=o.url):(t.data=e,t.url=`${o.url}?session=${o.session}`),t},u=(e,t,n)=>o.fire({type:"error",data:l(e.responseJSON),error:n}),c=e=>(o.status?o.xhr=r.a.ajax(a()).then(e=>o.fire({type:"message",data:l(e)}),u):o.xhr=null,e);return o.on=((e,t)=>{var n,r;for(null==i[e+=""]&&(n=[],i[e]=n),r=(n=i[e]).length;r--&&n[r]!==t;);return r<0&&n.push(t),o}),o.on("message",c),o.on("open",c),o.removeEventListener=((e,t)=>{var n=i[e+=""];return n&&n.length?(i[e]=n.filter(e=>e!==t),i[e].length||delete i[e],o):o}),o.fire=function(e){e.target=o;var t=i[e.type];if(t&&t.length)return t.map(t=>{try{return"function"==typeof t.handleEvent?t.handleEvent(e):t.call(this,e)}catch(e){(e=>setTimeout(()=>{throw e},0))(e)}})},o.open=(e=>(o.status||(o.status=1,o.xhr=r.a.ajax(a(e)).then(e=>o.fire({type:"open",data:l(e)}),u)),o.xhr)),o.abort=(e=>o.status=0),o},c=e=>{var t=a.cookie;let n=t.indexOf("session=")+8,o=t.indexOf(";",n);return o<0&&(o=t.length),unescape(t.substring(n,o))};n.d(t,"a",function(){return d}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return u}),Promise.all([n.e(0),n.e(1)]).then(n.t.bind(null,34,7)),n.e(0).then(n.t.bind(null,35,7)),n.e(0).then(n.t.bind(null,36,7)),n.e(0).then(n.t.bind(null,37,7)),n.e(0).then(n.t.bind(null,38,7)),n.e(0).then(n.t.bind(null,39,7)),n.e(0).then(n.t.bind(null,40,7)),window.$=r.a,Object(i.jarallax)(r()(".jarallax"),{speed:.5,imgWidth:1366,imgHeight:768}),r()(e=>{r()("#vertical-ticker").totemticker({row_height:"100px",next:"#ticker-next",previous:"#ticker-previous",stop:"#stop",start:"#start",mousestop:!0})}),r()(document).ready(e=>{e(".scroll ").click(function(t){t.preventDefault(),e("html,body").animate({scrollTop:e(this.hash).offset().top},1e3)}),e().UItoTop({easingType:"easeOutQuart"})});const d=e=>e+"?"+(new Date).getTime()},10:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),i=n.n(r);const a={getSession:o.b,getResource:o.a,setup:e=>{var t=i()("#imgInp");if(e.inputImg&&e.inputImg.length){const n=function(){if(this.files&&this.files[0]){var t=new FileReader;t.onload=(t=>e.inputImg.attr("src",t.target.result)),t.readAsDataURL(this.files[0])}};t.change(n)}if(e.dropZone&&e.dropZone.length){var n=e.dropZone[0];n.addEventListener("dragover",e=>{e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},!1),n.addEventListener("drop",e=>{e.stopPropagation(),e.preventDefault(),t[0].files=e.dataTransfer.files},!1)}var r,a=i()("#downloader"),s=i()("#FG"),l=i()("#RunButton"),u=document.querySelector("#imgUpload");s.hide(),a.hide();const c=Object(o.c)("/msg",e.session).on("message",e=>{e.data?(clearInterval(r),l.attr("disabled",!0)):(c.abort(),l.attr("disabled",!1))}).on("error",t=>{console.error(t),clearInterval(r),l.attr("disabled",!0);let n=0;return t.data?(c.abort(),n=+t.data.eta,e.onErrorMsg&&e.onErrorMsg(0,n,t.data)):n=5,n&&(n+=Math.random(),setTimeout(d,1e3*(n=Math.min(Math.max(n,.1),2147483)))),e.setStatus&&e.setStatus(n)}),d=t=>c.open({path:e.path});if(d(),e.session){const t="缺少输入文件",n="出错啦";l.bind("click",function(){var o=new FormData(u);if(!o.get("file").size)return e.setMessage?e.setMessage(t):alert(t);i.a.ajax({url:`${e.path}?session=${e.session}`,type:"POST",data:o,cache:!1,contentType:!1,processData:!1,async:!0,dataType:"json",beforeSend:t=>{s.show(),l.attr("disabled",!0),r=setInterval(d,200),e.beforeSend&&e.beforeSend(o)},success:t=>{console.log(t),clearInterval(r),s.hide(),a.show(),l.attr("disabled",!1),e.success&&e.success(t.result)},error:(t,o,i)=>{console.error(t,o,i),clearInterval(r),s.hide(),e.error?e.error(n):alert(n)}})})}return c}};window.app=a,t.default=a},32:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(1),a=n(10);const s={getSession:i.b,getResource:i.a,setup:e=>{var t=r()("#StopButton").hide(),n=r()("#RunButton"),o=0;const s=e.outputImg?(t=>{let n=!0;return e.outputImg.on("load",e=>n=!0),t=>{n&&(n=!1,e.outputImg.attr("src",t))}})():e=>e;e.session||(e.session=Object(i.b)());const l=e=>"忙碌中"+(null==e?"":`，已经过${e}秒`);e.onProgress||(e.onProgress=l);const u=r=>{if(!r.data)return;let a=r.data;a.eta&&(n.hide(),t.attr("disabled",!1).show()),a.preview&&s(Object(i.a)(a.preview)),a.total&&(o=a.total),a.gone&&d.setMessage(e.onProgress(a.gone,o,a))},c=a.default.setup(e);c.on("message",u).on("open",u);const d=((e,t)=>{const n=(e=>{var t,n=0,o=0,r=e.find(".progress-bar"),i=e.find(".message"),a=e.find(".time");const s=e=>`，预计还需要${e.toFixed(2)}秒`,l=e=>{r[0].value+=1,(o-=1)<1&&(o=1),a.text(s(o))},u=e=>(n&&clearInterval(n),r[0].value=0,n=setInterval(l,1e3),a.show(),r.show(),t);return t={show:u,hide:e=>(n&&clearInterval(n),n=0,o=0,a.hide(),r.hide(),t),setMessage:e=>("string"==typeof e?i.html(e):e&&e.result&&i.html(e.result),t),setStatus:e=>(n||u(),r[0].max=e+ +r[0].value,o=e,a.text(s(o)),t)}})(e),o=e=>{if(e.data){let t=e.data;t&&(n.setMessage(t),t.eta&&n.setStatus(+t.eta))}else n.hide().setMessage("空闲中"),n.status||t.abort()};return t.on("message",o).on("open",o),n.final=(e=>(n.status=0,t.abort(),n.hide().setMessage(e),t.xhr&&t.xhr.then(t=>n.setMessage(e)),n)),n.begin=(e=>(n.status=1,n.show().setMessage(e))),n})(e.progress,c);e.onErrorMsg=(e=>d.setMessage(l(e.gone))),e.setStatus=d.setStatus,e.setMessage=d.setMessage;let f=e.beforeSend;e.beforeSend=(e=>{n.hide(),t.attr("disabled",!1).show(),d.begin("正在处理您的任务"),f&&f(e)});let p=e.success;return e.success=(e=>{n.show(),t.hide(),p&&p(e,d)}),e.error=(e=>{d.final(e),n.show(),t.hide()}),t.click(n=>{r.a.ajax({url:`/stop?session=${e.session}`,beforeSend:e=>{t.attr("disabled",!0),d.hide().setMessage("等待保存已处理部分")},error:(e,t,n)=>{console.error(e,t,n),d.final("出错啦")}})}),d}};window.app=s,t.default=s},4:function(e,t,n){!function(){function t(){k.keyboardSupport&&p("keydown",i)}function n(){if(!D&&document.body){D=!0;var e=document.body,n=document.documentElement,o=window.innerHeight,r=e.scrollHeight;if(P=document.compatMode.indexOf("CSS")>=0?n:e,x=e,t(),top!=self)_=!0;else if(r>o&&(e.offsetHeight<=o||n.offsetHeight<=o)){var i,a=document.createElement("div");if(a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+P.scrollHeight+"px",document.body.appendChild(a),S=function(){i||(i=setTimeout(function(){O||(a.style.height="0",a.style.height=P.scrollHeight+"px",i=null)},500))},setTimeout(S,10),p("resize",S),(M=new N(S)).observe(e,{attributes:!0,childList:!0,characterData:!1}),P.offsetHeight<=o){var s=document.createElement("div");s.style.clear="both",e.appendChild(s)}}k.fixedBackground||O||(e.style.backgroundAttachment="scroll",n.style.backgroundAttachment="scroll")}}function o(e,t,n){if(function(e,t){e=e>0?1:-1,t=t>0?1:-1,(E.x!==e||E.y!==t)&&(E.x=e,E.y=t,z=[],B=0)}(t,n),1!=k.accelerationMax){var o=Date.now()-B;if(o<k.accelerationDelta){var r=(1+50/o)/2;r>1&&(r=Math.min(r,k.accelerationMax),t*=r,n*=r)}B=Date.now()}if(z.push({x:t,y:n,lastX:0>t?.99:-.99,lastY:0>n?.99:-.99,start:Date.now()}),!L){var i=e===document.body,a=function(){for(var o=Date.now(),r=0,s=0,l=0;l<z.length;l++){var u=z[l],c=o-u.start,d=c>=k.animationTime,f=d?1:c/k.animationTime;k.pulseAlgorithm&&(f=b(f));var p=u.x*f-u.lastX>>0,h=u.y*f-u.lastY>>0;r+=p,s+=h,u.lastX+=p,u.lastY+=h,d&&(z.splice(l,1),l--)}i?window.scrollBy(r,s):(r&&(e.scrollLeft+=r),s&&(e.scrollTop+=s)),t||n||(z=[]),z.length?R(a,e,1e3/k.frameRate+1):L=!1};R(a,e,0),L=!0}}function r(e){D||n();var t=e.target,r=u(t);if(!r||e.defaultPrevented||e.ctrlKey)return!0;if(m(x,"embed")||m(t,"embed")&&/\.pdf/i.test(t.src)||m(x,"object"))return!0;var i=-e.wheelDeltaX||e.deltaX||0,a=-e.wheelDeltaY||e.deltaY||0;return j&&(e.wheelDeltaX&&g(e.wheelDeltaX,120)&&(i=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&g(e.wheelDeltaY,120)&&(a=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),i||a||(a=-e.wheelDelta||0),1===e.deltaMode&&(i*=40,a*=40),!(k.touchpadSupport||!function(e){return e?(H.length||(H=[e,e,e]),e=Math.abs(e),H.push(e),H.shift(),clearTimeout($),$=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=H.join(","))},1e3),!v(120)&&!v(100)):void 0}(a))||(Math.abs(i)>1.2&&(i*=k.stepSize/120),Math.abs(a)>1.2&&(a*=k.stepSize/120),o(r,i,a),e.preventDefault(),void s())}function i(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==C.spacebar;document.contains(x)||(x=document.activeElement);var r=/^(button|submit|radio|checkbox|file|color|image)$/i;if(/^(textarea|select|embed|object)$/i.test(t.nodeName)||m(t,"input")&&!r.test(t.type)||m(x,"video")||function(e){var t=e.target,n=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(n=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return n}(e)||t.isContentEditable||e.defaultPrevented||n)return!0;if((m(t,"button")||m(t,"input")&&r.test(t.type))&&e.keyCode===C.spacebar)return!0;var i=0,a=0,l=u(x),c=l.clientHeight;switch(l==document.body&&(c=window.innerHeight),e.keyCode){case C.up:a=-k.arrowScroll;break;case C.down:a=k.arrowScroll;break;case C.spacebar:a=-(e.shiftKey?1:-1)*c*.9;break;case C.pageup:a=.9*-c;break;case C.pagedown:a=.9*c;break;case C.home:a=-l.scrollTop;break;case C.end:var d=l.scrollHeight-l.scrollTop-c;a=d>0?d+10:0;break;case C.left:i=-k.arrowScroll;break;case C.right:i=k.arrowScroll;break;default:return!0}o(l,i,a),e.preventDefault(),s()}function a(e){x=e.target}function s(){clearTimeout(I),I=setInterval(function(){A={}},1e3)}function l(e,t){for(var n=e.length;n--;)A[q(e[n])]=t;return t}function u(e){var t=[],n=document.body,o=P.scrollHeight;do{var r=A[q(e)];if(r)return l(t,r);if(t.push(e),o===e.scrollHeight){var i=d(P)&&d(n)||f(P);if(_&&c(P)||!_&&i)return l(t,Q())}else if(c(e)&&f(e))return l(t,e)}while(e=e.parentElement)}function c(e){return e.clientHeight+10<e.scrollHeight}function d(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function f(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function p(e,t){window.addEventListener(e,t,!1)}function h(e,t){window.removeEventListener(e,t,!1)}function m(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function g(e,t){return Math.floor(e/t)==e/t}function v(e){return g(H[0],e)&&g(H[1],e)&&g(H[2],e)}function w(e){return(1>(e*=k.pulseScale)?e-(1-Math.exp(-e)):Math.exp(-1)+.6321205588285577*(1-Math.exp(-(e-=1))))*k.pulseNormalize}function b(e){return e>=1?1:0>=e?0:(1==k.pulseNormalize&&(k.pulseNormalize/=w(1)),w(e))}function y(e){for(var t in e)T.hasOwnProperty(t)&&(k[t]=e[t])}var x,M,S,I,$,T={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!1,fixedBackground:!0,excluded:""},k=T,O=!1,_=!1,E={x:0,y:0},D=!1,P=document.documentElement,H=[],j=/^Mac/.test(navigator.platform),C={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},z=[],L=!1,B=Date.now(),q=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),A={};window.localStorage&&localStorage.SS_deltaBuffer&&(H=localStorage.SS_deltaBuffer.split(","));var F,R=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)},N=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,Q=function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var n=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,1),e=document.body.scrollTop!=n?document.body:document.documentElement,window.scrollBy(0,-1),document.body.removeChild(t)}return e}}(),X=window.navigator.userAgent,Y=/Edge/.test(X),V=(/chrome/i.test(X)&&!Y||/safari/i.test(X)&&!Y)&&!/mobile/i.test(X);"onwheel"in document.createElement("div")?F="wheel":"onmousewheel"in document.createElement("div")&&(F="mousewheel"),F&&V&&(p(F,r),p("mousedown",a),p("load",n)),y.destroy=function(){M&&M.disconnect(),h(F,r),h("mousedown",a),h("keydown",i),h("resize",S),h("load",n)},window.SmoothScrollOptions&&y(window.SmoothScrollOptions),e.exports=y}()},5:function(e,t,n){var o,r;o=n(0),(r=o).omr||(r.omr={}),r.omr.totemticker=function(e,t){var n=this;n.el=e,n.$el=r(e),n.$el.data("omr.totemticker",n),n.init=function(){n.options=r.extend({},r.omr.totemticker.defaultOptions,t),n.ticker,n.format_ticker(),n.setup_nav(),n.start_interval()},n.start_interval=function(){clearInterval(n.ticker),"up"==n.options.direction?n.ticker=setInterval(function(){n.$el.find("li:last").detach().prependTo(n.$el).css("marginTop","-"+n.options.row_height),n.$el.find("li:first").animate({marginTop:"0px"},n.options.speed,function(){})},n.options.interval):n.ticker=setInterval(function(){n.$el.find("li:first").animate({marginTop:"-"+n.options.row_height},n.options.speed,function(){r(this).detach().css("marginTop","0").appendTo(n.$el)})},n.options.interval)},n.reset_interval=function(){clearInterval(n.ticker),n.start_interval()},n.stop_interval=function(){clearInterval(n.ticker)},n.format_ticker=function(){if(void 0!==n.options.max_items&&null!=n.options.max_items){var e=n.options.row_height.replace(/px/i,"")*n.options.max_items;n.$el.css({height:e+"px",overflow:"hidden"})}else n.$el.css({overflow:"hidden"})},n.setup_nav=function(){void 0!==n.options.stop&&null!=n.options.stop&&r(n.options.stop).click(function(){return n.stop_interval(),!1}),void 0!==n.options.start&&null!=n.options.start&&r(n.options.start).click(function(){return n.start_interval(),!1}),void 0!==n.options.previous&&null!=n.options.previous&&r(n.options.previous).click(function(){return n.$el.find("li:last").detach().prependTo(n.$el).css("marginTop","-"+n.options.row_height),n.$el.find("li:first").animate({marginTop:"0px"},n.options.speed,function(){n.reset_interval()}),!1}),void 0!==n.options.next&&null!=n.options.next&&r(n.options.next).click(function(){return n.$el.find("li:first").animate({marginTop:"-"+n.options.row_height},n.options.speed,function(){r(this).detach().css("marginTop","0px").appendTo(n.$el),n.reset_interval()}),!1}),void 0!==n.options.mousestop&&!0===n.options.mousestop&&n.$el.mouseenter(function(){n.stop_interval()}).mouseleave(function(){n.start_interval()})},n.debug_info=function(){console.log(n.options)},n.init()},r.omr.totemticker.defaultOptions={message:"Ticker Loaded",next:null,previous:null,stop:null,start:null,row_height:"100px",speed:800,interval:3e3,max_items:null,mousestop:!1,direction:"down"},r.fn.totemticker=function(e){return this.each(function(){new r.omr.totemticker(this,e)})}},6:function(e,t,n){var o,r;o=n(0),(r=o).fn.UItoTop=function(e){var t=r.extend({text:"To Top",min:200,inDelay:600,outDelay:400,containerID:"toTop",containerHoverID:"toTopHover",scrollSpeed:1e3,easingType:"linear"},e),n="#"+t.containerID,o="#"+t.containerHoverID;r("body").append('<a href="#" id="'+t.containerID+'">'+t.text+"</a>"),r(n).hide().on("click.UItoTop",function(){return r("html, body").animate({scrollTop:0},t.scrollSpeed,t.easingType),r("#"+t.containerHoverID,this).stop().animate({opacity:0},t.inDelay,t.easingType),!1}).prepend('<span id="'+t.containerHoverID+'"></span>').hover(function(){r(o,this).stop().animate({opacity:1},600,"linear")},function(){r(o,this).stop().animate({opacity:0},700,"linear")}),r(window).scroll(function(){var e=r(window).scrollTop();void 0===document.body.style.maxHeight&&r(n).css({position:"absolute",top:e+r(window).height()-50}),e>t.min?r(n).fadeIn(t.inDelay):r(n).fadeOut(t.Outdelay)})}},7:function(e,t,n){var o;(o=n(0)).extend(o.easing,{easeInQuad:function(e,t,n,o,r){return o*(t/=r)*t+n},easeOutQuad:function(e,t,n,o,r){return-o*(t/=r)*(t-2)+n},easeInOutQuad:function(e,t,n,o,r){return(t/=r/2)<1?o/2*t*t+n:-o/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,o,r){return o*(t/=r)*t*t+n},easeOutCubic:function(e,t,n,o,r){return o*((t=t/r-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,o,r){return(t/=r/2)<1?o/2*t*t*t+n:o/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,o,r){return o*(t/=r)*t*t*t+n},easeOutQuart:function(e,t,n,o,r){return-o*((t=t/r-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,o,r){return(t/=r/2)<1?o/2*t*t*t*t+n:-o/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,o,r){return o*(t/=r)*t*t*t*t+n},easeOutQuint:function(e,t,n,o,r){return o*((t=t/r-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,o,r){return(t/=r/2)<1?o/2*t*t*t*t*t+n:o/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,o,r){return-o*Math.cos(t/r*(Math.PI/2))+o+n},easeOutSine:function(e,t,n,o,r){return o*Math.sin(t/r*(Math.PI/2))+n},easeInOutSine:function(e,t,n,o,r){return-o/2*(Math.cos(Math.PI*t/r)-1)+n},easeInExpo:function(e,t,n,o,r){return 0==t?n:o*Math.pow(2,10*(t/r-1))+n},easeOutExpo:function(e,t,n,o,r){return t==r?n+o:o*(1-Math.pow(2,-10*t/r))+n},easeInOutExpo:function(e,t,n,o,r){return 0==t?n:t==r?n+o:(t/=r/2)<1?o/2*Math.pow(2,10*(t-1))+n:o/2*(2-Math.pow(2,-10*--t))+n},easeInCirc:function(e,t,n,o,r){return-o*(Math.sqrt(1-(t/=r)*t)-1)+n},easeOutCirc:function(e,t,n,o,r){return o*Math.sqrt(1-(t=t/r-1)*t)+n},easeInOutCirc:function(e,t,n,o,r){return(t/=r/2)<1?-o/2*(Math.sqrt(1-t*t)-1)+n:o/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,o,r){var i=1.70158,a=0,s=o;return 0==t?n:1==(t/=r)?n+o:(a||(a=.3*r),s<Math.abs(o)?(s=o,i=a/4):i=a/(2*Math.PI)*Math.asin(o/s),-s*Math.pow(2,10*(t-=1))*Math.sin(2*Math.PI*(t*r-i)/a)+n)},easeOutElastic:function(e,t,n,o,r){var i=1.70158,a=0,s=o;return 0==t?n:1==(t/=r)?n+o:(a||(a=.3*r),s<Math.abs(o)?(s=o,i=a/4):i=a/(2*Math.PI)*Math.asin(o/s),s*Math.pow(2,-10*t)*Math.sin(2*Math.PI*(t*r-i)/a)+o+n)},easeInOutElastic:function(e,t,n,o,r){var i=1.70158,a=0,s=o;return 0==t?n:2==(t/=r/2)?n+o:(a||(a=r*(.3*1.5)),s<Math.abs(o)?(s=o,i=a/4):i=a/(2*Math.PI)*Math.asin(o/s),t<1?s*Math.pow(2,10*(t-=1))*Math.sin(2*Math.PI*(t*r-i)/a)*-.5+n:s*Math.pow(2,-10*(t-=1))*Math.sin(2*Math.PI*(t*r-i)/a)*.5+o+n)},easeInBack:function(e,t,n,o,r,i){return null==i&&(i=1.70158),o*(t/=r)*t*((i+1)*t-i)+n},easeOutBack:function(e,t,n,o,r,i){return null==i&&(i=1.70158),o*((t=t/r-1)*t*((i+1)*t+i)+1)+n},easeInOutBack:function(e,t,n,o,r,i){return null==i&&(i=1.70158),(t/=r/2)<1?o/2*(t*t*((1+(i*=1.525))*t-i))+n:o/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+n},easeInBounce:function(e,t,n,r,i){return r-o.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,o,r){return(t/=r)<1/2.75?o*(7.5625*t*t)+n:t<2/2.75?o*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?o*(7.5625*(t-=2.25/2.75)*t+.9375)+n:o*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,r,i){return t<i/2?.5*o.easing.easeInBounce(e,2*t,0,r,i)+n:.5*o.easing.easeOutBounce(e,2*t-i,0,r,i)+.5*r+n}})},8:function(module,exports,__webpack_require__){!function(jQuery){!function($){function numberRoller(e){var t=$(".roller-title-number-"+e).attr("data-min"),n=$(".roller-title-number-"+e).attr("data-max"),o=$(".roller-title-number-"+e).attr("data-delay");numberRoll(e,t,n,$(".roller-title-number-"+e).attr("data-increment"),1e3*o/(n-t))}function numberRoll(slno,min,max,increment,timeout){min<=max?($(".roller-title-number-"+slno).html(min),min=parseInt(min)+parseInt(increment),setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout)):$(".roller-title-number-"+slno).html(max)}$(window).on("load",function(){$(document).scrollzipInit(),$(document).rollerInit()}),$(window).on("load scroll resize",function(){$(".numscroller").scrollzip({showFunction:function(){numberRoller($(this).attr("data-slno"))},wholeVisible:!1})}),$.fn.scrollzipInit=function(){$("body").prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>")},$.fn.rollerInit=function(){var e=0;$(".numscroller").each(function(){e++,$(this).attr("data-slno",e),$(this).addClass("roller-title-number-"+e)})},$.fn.scrollzip=function(e){var t=$.extend({showFunction:null,hideFunction:null,showShift:0,wholeVisible:!1,hideShift:0},e);return this.each(function(e,n){return $(this).addClass("scrollzip"),$.isFunction(t.showFunction)&&!$(this).hasClass("isShown")&&$(window).outerHeight()+$("#scrollzipPoint").offset().top-t.showShift>$(this).offset().top+(t.wholeVisible?$(this).outerHeight():0)&&$("#scrollzipPoint").offset().top+(t.wholeVisible?$(this).outerHeight():0)<$(this).outerHeight()+$(this).offset().top-t.showShift&&($(this).addClass("isShown"),t.showFunction.call(this)),$.isFunction(t.hideFunction)&&$(this).hasClass("isShown")&&($(window).outerHeight()+$("#scrollzipPoint").offset().top-t.hideShift<$(this).offset().top+(t.wholeVisible?$(this).outerHeight():0)||$("#scrollzipPoint").offset().top+(t.wholeVisible?$(this).outerHeight():0)>$(this).outerHeight()+$(this).offset().top-t.hideShift)&&($(this).removeClass("isShown"),t.hideFunction.call(this)),this})}}(jQuery)}(__webpack_require__(0))},9:function(e,t,n){"use strict";!function(e,t,n){var o=e.querySelectorAll(".inputfile");Array.prototype.forEach.call(o,function(e){var t=e.nextElementSibling,n=t.innerHTML;e.addEventListener("change",function(e){var o;(o=this.files&&this.files.length>1?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value.split("\\").pop())?t.querySelector("span").innerHTML=o:t.innerHTML=n}),e.addEventListener("focus",function(){e.classList.add("has-focus")}),e.addEventListener("blur",function(){e.classList.remove("has-focus")})})}(document,window)}});