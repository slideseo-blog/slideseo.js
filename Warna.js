function autoSelect(d){var h,e;window.getSelection?(h=window.getSelection(),e=document.createRange(),e.selectNodeContents(d),h.removeAllRanges(),h.addRange(e)):document.selection&&(document.selection.createRange(),e=document.body.createTextRange(),e.moveToElementText(d),e.select())}
var hljs=new function(){function d(a){return a.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function h(a,d,c){return RegExp(d,"m"+(a.cI?"i":"")+(c?"g":""))}function e(a,d){for(var c="",b=0;b<a.childNodes.length;b++)if(3==a.childNodes[b].nodeType){var f=a.childNodes[b].nodeValue;d&&(f=f.replace(/\n/g,""));c+=f}else c="BR"==a.childNodes[b].nodeName?c+"\n":c+e(a.childNodes[b]);/MSIE [678]/.test(navigator.userAgent)&&(c=c.replace(/\r/g,"\n"));return c}function p(a){var d=[];(function(c,a){for(var f=0;f<
c.childNodes.length;f++)3==c.childNodes[f].nodeType?a+=c.childNodes[f].nodeValue.length:"BR"==c.childNodes[f].nodeName?a+=1:(d.push({event:"start",offset:a,node:c.childNodes[f]}),a=arguments.callee(c.childNodes[f],a),d.push({event:"stop",offset:a,node:c.childNodes[f]}));return a})(a,0);return d}function a(a,b,c){function e(a){for(var c="<"+a.nodeName.toLowerCase(),b=0;b<a.attributes.length;b++){var f=a.attributes[b],c=c+(" "+f.nodeName.toLowerCase());void 0!=f.nodeValue&&0!=f.nodeValue&&null!=f.nodeValue&&
(c+='="'+d(f.nodeValue)+'"')}return c+">"}for(var f=0,g="",m=[];a.length||b.length;){var h=(a.length&&b.length?a[0].offset!=b[0].offset?a[0].offset<b[0].offset?a:b:"start"==b[0].event?a:b:a.length?a:b).splice(0,1)[0],g=g+d(c.substr(f,h.offset-f)),f=h.offset;if("start"==h.event)g+=e(h.node),m.push(h.node);else if("stop"==h.event){var l=m.length;do{l--;var k=m[l],g=g+("</"+k.nodeName.toLowerCase()+">")}while(k!=h.node);for(m.splice(l,1);l<m.length;)g+=e(m[l]),l++}}return g+=c.substr(f)}function b(){function a(c,
b,d){if(!c.compiled){d||(c.bR=h(b,c.b?c.b:"\\B|\\b"),c.e||c.eW||(c.e="\\B|\\b"),c.e&&(c.eR=h(b,c.e)));c.i&&(c.iR=h(b,c.i));void 0==c.r&&(c.r=1);c.k&&(c.lR=h(b,c.l||hljs.IR,!0));for(var g in c.k)if(c.k.hasOwnProperty(g)){c.kG=c.k[g]instanceof Object?c.k:{keyword:c.k};break}c.c||(c.c=[]);c.compiled=!0;for(d=0;d<c.c.length;d++)a(c.c[d],b,!1);c.starts&&a(c.starts,b,!1)}}for(var b in t)t.hasOwnProperty(b)&&a(t[b].dM,t[b],!0)}function m(a,e){function c(a,b){if(l[a].e&&l[a].eR.test(b))return 1;if(l[a].eW){var d=
c(a-1,b);return d?d+1:0}return 0}function y(a,c){var b=l[l.length-1];if(!b.t){var d;d=q;for(var f=[],e=0;e<b.c.length;e++)f.push(b.c[e].b);e=l.length-1;do l[e].e&&f.push(l[e].e),e--;while(l[e+1].eW);b.i&&f.push(b.i);d=h(d,"("+f.join("|")+")",!0);b.t=d}b.t.lastIndex=c;return(b=b.t.exec(a))?[a.substr(c,b.index-c),b[0],!1]:[a.substr(c),"",!0]}function f(a,b){if(b.sL&&t[b.sL]){var c=m(b.sL,a);v+=c.keyword_count;return c.value}if(b.k){var c="",f=0;b.lR.lastIndex=0;for(var e=b.lR.exec(a);e;){c+=d(a.substr(f,
e.index-f));b:{var f=b,g=e,g=q.cI?g[0].toLowerCase():g[0],n=void 0;for(n in f.kG)if(f.kG.hasOwnProperty(n)){var l=f.kG[n].hasOwnProperty(g);if(l){f=[n,l];break b}}f=!1}f?(v+=f[1],c+='<span class="'+f[0]+'">'+d(e[0])+"</span>"):c+=d(e[0]);f=b.lR.lastIndex;e=b.lR.exec(a)}c+=d(a.substr(f,a.length-f))}else c=d(a);return c}function g(a,b){var c=a.cN?'<span class="'+a.cN+'">':"";a.rB?(u+=c,a.buffer=""):a.eB?(u+=d(b)+c,a.buffer=""):(u+=c,a.buffer=b);l.push(a);p+=a.r}function k(a,b,e){var n=l[l.length-1];
if(e)return u+=f(n.buffer+a,n),!1;a:{for(e=0;e<n.c.length;e++)if(n.c[e].bR.test(b)){e=n.c[e];break a}e=void 0}if(e)return u+=f(n.buffer+a,n),g(e,b),e.rB;if(e=c(l.length-1,b)){var m=n.cN?"</span>":"";for(u=n.rE?u+(f(n.buffer+a,n)+m):n.eE?u+(f(n.buffer+a,n)+m+d(b)):u+(f(n.buffer+a+b,n)+m);1<e;)m=l[l.length-2].cN?"</span>":"",u+=m,e--,l.length--;a=l[l.length-1];l.length--;l[l.length-1].buffer="";a.starts&&g(a.starts,"");return n.rE}if(n.iR&&n.iR.test(b))throw"Illegal";}b.called||(b(),b.called=!0);var q=
t[a],l=[q.dM],p=0,v=0,u="";try{var r=0;q.dM.buffer="";do{var w=y(e,r),z=k(w[0],w[1],w[2]),r=r+w[0].length;z||(r+=w[1].length)}while(!w[2]);if(1<l.length)throw"Illegal";return{r:p,keyword_count:v,value:u}}catch(x){if("Illegal"==x)return{r:0,keyword_count:0,value:d(e)};throw x;}}function q(a){var b={keyword_count:0,r:0,value:d(a)},c=b,e;for(e in t)if(t.hasOwnProperty(e)){var f=m(e,a);f.language=e;f.keyword_count+f.r>c.keyword_count+c.r&&(c=f);f.keyword_count+f.r>b.keyword_count+b.r&&(c=b,b=f)}c.language&&
(b.second_best=c);return b}function v(a,b,c){b&&(a=a.replace(/^((<[^>]+>|\t)+)/gm,function(a,c,d,e){return c.replace(/\t/g,b)}));c&&(a=a.replace(/\n/g,"<br>"));return a}function r(b,d,c){var h=e(b,c),f;a:{var g=b;f=g.className.split(/\s+/);f=f.concat(g.parentNode.className.split(/\s+/));for(g=0;g<f.length;g++){var k=f[g].replace(/^language-/,"");if(t[k]||"no-highlight"==k){f=k;break a}}f=void 0}if("no-highlight"!=f){f?g=m(f,h):(g=q(h),f=g.language);var r=p(b);r.length&&(k=document.createElement("pre"),
k.innerHTML=g.value,g.value=a(r,p(k),h));g.value=v(g.value,d,c);d=b.className;d.match("(\\s|^)(language-)?"+f+"(\\s|$)")||(d=d?d+" "+f:f);/MSIE [678]/.test(navigator.userAgent)&&"CODE"==b.tagName&&"PRE"==b.parentNode.tagName?(k=b.parentNode,c=document.createElement("div"),c.innerHTML="<pre><code>"+g.value+"</code></pre>",b=c.firstChild.firstChild,c.firstChild.cN=k.cN,k.parentNode.replaceChild(c.firstChild,k)):b.innerHTML=g.value;b.className=d;b.result={language:f,kw:g.keyword_count,re:g.r};g.second_best&&
(b.second_best={language:g.second_best.language,kw:g.second_best.keyword_count,re:g.second_best.r})}}function k(){if(!k.called){k.called=!0;for(var a=document.getElementsByTagName("pre"),b=0;b<a.length;b++){var c;a:{c=a[b];for(var d=0;d<c.childNodes.length;d++){var f=c.childNodes[d];if("CODE"==f.nodeName||"SPAN"==f.nodeName){c=f;break a}if(3!=f.nodeType||!f.nodeValue.match(/\s+/))break}c=void 0}c&&r(c,hljs.tabReplace)}makeNumber()}}var t={};this.LANGUAGES=t;this.highlight=m;this.highlightAuto=q;this.fixMarkup=
v;this.highlightBlock=r;this.initHighlighting=k;this.initHighlightingOnLoad=function(){window.addEventListener?(window.addEventListener("DOMContentLoaded",k,!1),window.addEventListener("load",k,!1)):window.attachEvent?window.attachEvent("onload",k):window.onload=k};this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
this.BE={b:"\\\\.",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.inherit=function(a,b){var c={},d;for(d in a)c[d]=a[d];if(b)for(d in b)c[d]=b[d];return c}};
hljs.LANGUAGES.javascript={dM:{k:{keyword:{"in":1,"if":1,"for":1,"while":1,"finally":1,"var":1,"new":1,"function":1,"do":1,"return":1,"void":1,"else":1,"break":1,"catch":1,"instanceof":1,"with":1,"throw":1,"case":1,"default":1,"try":1,"this":1,"switch":1,"continue":1,"typeof":1,"delete":1},literal:{"true":1,"false":1,"null":1}},c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM,hljs.CNM,{b:"("+hljs.RSR+"|case|return|throw)\\s*",k:{"return":1,"throw":1,"case":1},c:[hljs.CLCM,hljs.CBLCLM,{cN:"regexp",b:"/",
e:"/[gim]*",c:[{b:"\\\\/"}]}],r:0},{cN:"function",b:"\\bfunction\\b",e:"{",k:{"function":1},c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM]}]}]}};
hljs.LANGUAGES.css=function(){var d={cN:"function",b:hljs.IR+"\\(",e:"\\)",c:[{eW:!0,eE:!0,c:[hljs.NM,hljs.ASM,hljs.QSM]}]};return{cI:!0,dM:{i:"[=/|']",c:[hljs.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:{"font-face":1,page:1}},{cN:"at_rule",b:"@",e:"[{;]",eE:!0,k:{"import":1,page:1,media:1,charset:1},c:[d,hljs.ASM,
hljs.QSM,hljs.NM]},{cN:"tag",b:hljs.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[hljs.CBLCLM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[d,hljs.NM,hljs.QSM,hljs.ASM,hljs.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}}();
hljs.LANGUAGES.xml=function(){var d={eW:!0,c:[{cN:"attribute",b:"[A-Za-z0-9\\._:-]+",r:0},{b:'="',rB:!0,e:'"',c:[{cN:"value",b:'"',eW:!0}]},{b:"='",rB:!0,e:"'",c:[{cN:"value",b:"'",eW:!0}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:!0,dM:{c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"\x3c!--",e:"--\x3e",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style",e:">",k:{title:{style:1}},c:[d],starts:{cN:"css",
e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script",e:">",k:{title:{script:1}},c:[d],starts:{cN:"javascript",e:"\x3c/script>",rE:!0,sL:"javascript"}},{cN:"vbscript",b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},d]}]}}}();
hljs.LANGUAGES.java={dM:{k:{"false":1,"synchronized":1,"int":1,"abstract":1,"float":1,"private":1,"char":1,"interface":1,"boolean":1,"static":1,"null":1,"if":1,"const":1,"for":1,"true":1,"while":1,"long":1,"throw":1,strictfp:1,"finally":1,"protected":1,"extends":1,"import":1,"native":1,"final":1,"implements":1,"return":1,"void":1,"enum":1,"else":1,"break":1,"transient":1,"new":1,"catch":1,"instanceof":1,"byte":1,"super":1,"class":1,"volatile":1,"case":1,assert:1,"short":1,"package":1,"default":1,
"double":1,"public":1,"try":1,"this":1,"switch":1,"continue":1,"throws":1},c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},hljs.CLCM,hljs.CBLCLM,hljs.ASM,hljs.QSM,{cN:"class",b:"(class |interface )",e:"{",k:{"class":1,"interface":1},i:":",c:[{b:"(implements|extends)",k:{"extends":1,"implements":1},r:10},{cN:"title",b:hljs.UIR}]},hljs.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}};
hljs.LANGUAGES.php={cI:!0,dM:{k:{and:1,include_once:1,list:1,"abstract":1,global:1,"private":1,echo:1,"interface":1,as:1,"static":1,endswitch:1,array:1,"null":1,"if":1,endwhile:1,or:1,"const":1,"for":1,endforeach:1,self:1,"var":1,"while":1,isset:1,"public":1,"protected":1,exit:1,foreach:1,"throw":1,elseif:1,"extends":1,include:1,__FILE__:1,empty:1,require_once:1,"function":1,"do":1,xor:1,"return":1,"implements":1,parent:1,clone:1,use:1,__CLASS__:1,__LINE__:1,"else":1,"break":1,print:1,eval:1,"new":1,
"catch":1,__METHOD__:1,"class":1,"case":1,exception:1,php_user_filter:1,"default":1,die:1,require:1,__FUNCTION__:1,enddeclare:1,"final":1,"try":1,"this":1,"switch":1,"continue":1,endfor:1,endif:1,declare:1,unset:1,"true":1,"false":1,namespace:1},c:[hljs.CLCM,hljs.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+",r:10}]},hljs.CNM,hljs.inherit(hljs.ASM,{i:null}),hljs.inherit(hljs.QSM,{i:null}),{cN:"variable",b:"\\$[a-zA-Z_\u007f-\u00ff][a-zA-Z0-9_\u007f-\u00ff]*"},{cN:"preprocessor",
b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"}]}};hljs.tabReplace="    ";hljs.initHighlightingOnLoad();function getauthor(d){for(var h=0;h<d.length;h++)var e=d[h].name.$t;return e}function getmeta(d){var h=d.substring(0,4),e=d.substring(5,7);d=d.substring(8,10);return[,"Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][parseInt(e,10)]+" "+d+" "+h}
function zaputradesignTicker(d){var h=document.querySelector("#ticker");d=d.feed.entry;var e="<ul id='ticket-wrapper-inner'>";if(d){for(var p=0;p<d.length;p++){for(var a=d[p],b=0;b<a.link.length;b++)if("alternate"==a.link[b].rel){var m=a.link[b].href;break}try{var q='<img src="'+a.media$thumbnail.url+'"/>'}catch(r){q=""}var b=a.title.$t,v=getauthor(a.author),a=getmeta(a.published.$t),e=e+("<li>"+q+'<h3><a href="'+m+'">'+b+'</a></h3><div class="tickermeta"><span>'+v+"</span> - <span>"+a+"</span></div></li>")}h.innerHTML=
e+"</ul>"}$("#ticker").vTicker()}
!function(d){var h={speed:700,pause:4E3,showItems:1,mousePause:!0,height:0,animate:!0,margin:0,padding:0,startPaused:!1},e={moveUp:function(a,b){e.animate(a,b,"up")},moveDown:function(a,b){e.animate(a,b,"down")},animate:function(a,b,e){var h=a.itemHeight,p=a.options,r=a.element,k=r.children("ul"),t="up"===e?"li:first":"li:last";r.trigger("vticker.beforeTick");var n=k.children(t).clone(!0);if(0<p.height&&(h=k.children("li:first").height()),h+=p.margin+2*p.padding,"down"===e&&k.css("top","-"+h+"px").prepend(n),
b&&b.animate){if(a.animating)return;a.animating=!0;k.animate("up"===e?{top:"-="+h+"px"}:{top:0},p.speed,function(){d(k).children(t).remove();d(k).css("top","0px");a.animating=!1;r.trigger("vticker.afterTick")})}else k.children(t).remove(),k.css("top","0px"),r.trigger("vticker.afterTick");"up"===e&&n.appendTo(k)},nextUsePause:function(){var a=d(this).data("state"),b=a.options;a.isPaused||2>a.itemCount||p.next.call(this,{animate:b.animate})},startInterval:function(){var a=d(this).data("state"),b=this;
a.intervalId=setInterval(function(){e.nextUsePause.call(b)},a.options.pause)},stopInterval:function(){var a=d(this).data("state");a&&(a.intervalId&&clearInterval(a.intervalId),a.intervalId=void 0)},restartInterval:function(){e.stopInterval.call(this);e.startInterval.call(this)}},p={init:function(a){p.stop.call(this);var b=jQuery.extend({},h);a=d.extend(b,a);var b=d(this),m={itemCount:b.children("ul").children("li").length,itemHeight:0,itemMargin:0,element:b,animating:!1,options:a,isPaused:a.startPaused?
!0:!1,pausedByCode:!1};d(this).data("state",m);b.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",margin:0,padding:0}).children("li").css({margin:a.margin,padding:a.padding});isNaN(a.height)||0===a.height?(b.children("ul").children("li").each(function(){var a=d(this);a.height()>m.itemHeight&&(m.itemHeight=a.height())}),b.children("ul").children("li").each(function(){d(this).height(m.itemHeight)}),b.height((m.itemHeight+(a.margin+2*a.padding))*a.showItems+a.margin)):
b.height(a.height);var q=this;a.startPaused||e.startInterval.call(q);a.mousePause&&b.bind("mouseenter",function(){!0!==m.isPaused&&(m.pausedByCode=!0,e.stopInterval.call(q),p.pause.call(q,!0))}).bind("mouseleave",function(){(!0!==m.isPaused||m.pausedByCode)&&(m.pausedByCode=!1,p.pause.call(q,!1),e.startInterval.call(q))})},pause:function(a){var b=d(this).data("state");if(b){if(2>b.itemCount)return!1;b.isPaused=a;b=b.element;a?(d(this).addClass("paused"),b.trigger("vticker.pause")):(d(this).removeClass("paused"),
b.trigger("vticker.resume"))}},next:function(a){var b=d(this).data("state");if(b){if(b.animating||2>b.itemCount)return!1;e.restartInterval.call(this);e.moveUp(b,a)}},prev:function(a){var b=d(this).data("state");if(b){if(b.animating||2>b.itemCount)return!1;e.restartInterval.call(this);e.moveDown(b,a)}},stop:function(){d(this).data("state")&&e.stopInterval.call(this)},remove:function(){var a=d(this).data("state");a&&(e.stopInterval.call(this),a=a.element,a.unbind(),a.remove())}};d.fn.vTicker=function(a){return p[a]?
p[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void d.error("Method "+a+" does not exist on jQuery.vTicker"):p.init.apply(this,arguments)}}(jQuery);$(function(){var d=document.createElement("script");d.src="http://"+$(".ticker-wrap").data("domain")+"/feeds/posts/summary?alt=json&callback=zaputradesignTicker";d.type="text/javascript";document.getElementsByTagName("body")[0].appendChild(d)});