(function(f){typeof define==="function"?define("matchmedia",f):f()})(function(require,exports,module){"use strict";!function(e){function t(e){var t=d,i={matches:!1,media:e,addListener:function(e){c[t].listeners||(c[t].listeners=[]),e&&c[t].listeners.push(e)},removeListener:function(e){var i=c[t],n=0,s=0;if(i)for(s=i.listeners.length;s>n;n++)i.listeners[n]===e&&i.listeners.splice(n,1)}};return""===e?(i.matches=!0,i):(i.matches=g(e),d=c.push({mql:i,listeners:null}),i)}var i,n,s="",r=e.addEventListener||(s="on")&&e.attachEvent,a=e.stylefix||require("stylefix"),l=e.cssunits||require("cssunits"),o=e.document,c=[],d=0,u="",h={},m=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,p=/^\s*\(\s*(min-|max-)?([\w\-]+)\s*(:?\s*(\d+(\.\d+)?(\/\d+(\.\d+)?)?|portrait|landscape)(\w+)?)?\s*\)\s*$/,f=function(e){return+e.toFixed(4)},g=function(e){var t=-1!==e.indexOf(",")&&e.split(",")||[e],i=t.length-1,n=i,s=null,r=null,a="",o=0,c=!1,d="",g="",x=null,v=0,w=0,y=null,b="",q="",C="",z="",E="",M=!1;if(""===e)return!0;do if(s=t[n-i],c=!1,r=s.match(m),r&&(a=r[0],o=r.index),!r||-1===s.substring(0,o).indexOf("(")&&(o||!r[3]&&a!==r.input))M=!1;else{if(g=s,c="not"===r[1],o||(d=r[2],g=s.substring(a.length)),M=d===u||"all"===d||""===d,x=-1!==g.indexOf(" and ")&&g.split(" and ")||[g],v=x.length-1,w=v,M&&v>=0&&""!==g)do{if(y=x[v].match(p),!y||!(E=h[y[2]])){M=!1;break}if(b=y[1],q=y[4],C=y[8],E=E.call?E():E,C)z=l.parse(q+C),z||("px"===C?z=Number(q):"dppx"===C?z=96*q:"dpcm"===C&&(z=.3937*q));else if(y[6])try{z=eval.call(h,q)}catch(S){}if(z=z||Number(q),z?(E=f(E),z=f(z),M="min-"===b?E>=z:"max-"===b?z>=E:E===z):M=!!E,!M)break}while(v--);if(M)break}while(i--);return c?!M:M},x=function(){clearTimeout(n),n=setTimeout(function(){var t=null,i=d-1,n=i,s=!1;if(i>=0)do if(t=c[n-i],t&&(s=g(t.mql.media),s!==t.mql.matches&&(t.mql.matches=s,t.listeners)))for(var r=0,a=t.listeners.length;a>r;r++)t.listeners[r]&&t.listeners[r].call(e,t.mql);while(i--)},10)},v=function(){var t=o.getElementsByTagName("head")[0],n=o.createElement("style"),c=null,d=["screen","print","speech","projection","handheld","tv","braille","embossed","tty"],m=0,p=d.length,f="#mediamatchjs { position: relative; z-index: 0; }",g=function(){return l.innerWidth},v=function(){return l.innerHeight},w=e.screen,y=w.width,b=w.height,q=w.colorDepth,C=l.ratio;for(i=l.dpi,h["aspect-ratio"]=function(){return g()/v()},h.orientation=function(){return v()>=g()?"portrait":"landscape"},h.msie=a.ieVersion,h.width=g,h.height=v,h["device-width"]=y,h["device-height"]=b,h["device-aspect-ratio"]=y/b,h.color=q,h["color-index"]=Math.pow(2,q),h.resolution=i,h["device-pixel-ratio"]=C,n.type="text/css",n.id="mediamatchjs",t.appendChild(n),c=e.getComputedStyle&&e.getComputedStyle(n)||n.currentStyle;p>m;m++)f+="@media "+d[m]+" { #mediamatchjs { z-index: "+m+" } }";n.styleSheet?n.styleSheet.cssText=f:n.textContent=f,u=d[1*c.zIndex||0],t.removeChild(n),r(s+"resize",x),r(s+"orientationchange",x)};v();var w;e.matchMedia?w=e.matchMedia:(e.matchMedia=w=t,e.styleMedia?a.register(function(e,t){return t?e.replace(/@media\s+([^\{]+)/g,function(e,t){return"@media "+t.replace(/\(\s*(m(ax|in)-)?msie\s*:\s*\d(\.\d+)?\s*\)/gi,function(e){return g(t)?"(min-width:0)":e})}):void 0}):a.register(function(e,t){return t?e.replace(/@media\s+(.*?\(.*?)\s*\{/g,function(e,t){t=t.toLowerCase(),/^all\s*\/\*\s*rawrules`([^`]+)`\s*\*\/$/.test(t)&&(t=RegExp.$1);var i=/\(\s*(m(ax|in)-)?(height|width|aspect-ratio)\s*\:/.test(t)||/\(\s*orientation\s*:\s*(portrait|landscape)\s*\)/.test(t)?" /* rawrules`"+t+"` */":"";return e="@media "+(g(t)?"all"+i:t)+" {"}):void 0}));try{module.exports=w}catch(y){}}(window);});