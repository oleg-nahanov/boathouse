!function(e,n){"undefined"!=typeof module?module.exports=n():"function"==typeof define&&"object"==typeof define.amd?define(n):this.domready=n()}(0,function(){var e,n=[],t="object"==typeof document&&document,o=t&&t.documentElement.doScroll,s="DOMContentLoaded",c=t&&(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return!c&&t&&t.addEventListener(s,e=function(){for(t.removeEventListener(s,e),c=1;e=n.shift();)e()}),function(e){c?setTimeout(e,0):n.push(e)}}),function(e){function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}var o,s,c;c="classList"in document.documentElement?(o=function(e,n){return e.classList.contains(n)},s=function(e,n){e.classList.add(n)},function(e,n){e.classList.remove(n)}):(o=function(e,n){return t(n).test(e.className)},s=function(e,n){o(e,n)||(e.className=e.className+" "+n)},function(e,n){e.className=e.className.replace(t(n)," ")});var n={has:o,add:s,remove:c,toggle:function(e,n){(o(e,n)?c:s)(e,n)}};"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n:e.classie=n}(window);