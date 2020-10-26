"use strict";var onwSlider=function(e,t){var n=document.querySelector(e),o=n.querySelector(".slider__wrapper"),s=n.querySelectorAll(".slider__item"),a=n.querySelectorAll(".slider__control"),l=parseFloat(getComputedStyle(o).width),c=parseFloat(getComputedStyle(s[0]).width),r=0,i=0,u=c/l*100,d=0,f=s.length-1,m=[];s.forEach((function(e,t){m.push({item:e,position:t,transform:0})}));var g={getItemMin:function(){var e=0;return m.forEach((function(t,n){t.position<m[e].position&&(e=n)})),e},getItemMax:function(){var e=0;return m.forEach((function(t,n){t.position>m[e].position&&(e=n)})),e},getMin:function(){return m[g.getItemMin()].position},getMax:function(){return m[g.getItemMax()].position}},p=function(e){var t;"right"===e&&(++r+l/c-1>g.getMax()&&(t=g.getItemMin(),m[t].position=g.getMax()+1,m[t].transform+=100*m.length,m[t].item.style.transform="translateX("+m[t].transform+"%)"),i-=u,(d+=1)>f&&(d=0)),"left"===e&&(--r<g.getMin()&&(t=g.getItemMax(),m[t].position=g.getMin()-1,m[t].transform-=100*m.length,m[t].item.style.transform="translateX("+m[t].transform+"%)"),i+=u,(d-=1)<0&&(d=f)),o.style.transform="translateX("+i+"%)"},v=function(e){if(e.target.classList.contains("slider__control")){e.preventDefault();var t=e.target.classList.contains("slider__control_right")?"right":"left";p(t)}},h=function(e){e<=-1&&(e=0);for(var t=0,n=e>d?"right":"left";e!==d&&t<=f;)p(n),t++};return document.querySelectorAll(".onw3d_btn").forEach((function(e){e.classList.contains("active")&&h(parseInt(e.dataset.index)-2),e.addEventListener("click",(function(e){e.preventDefault(),h(parseInt(e.target.dataset.index)-2)}))})),a.forEach((function(e){e.addEventListener("click",v)})),{right:function(){p("right")},left:function(){p("left")}}},slider=onwSlider(".slider");document.addEventListener("build",(function(e){void 0}),!1);var autoComplete=function(e){if(document.querySelector){var t={selector:0,source:0,minChars:3,delay:150,offsetLeft:0,offsetTop:1,cache:1,menuClass:"",renderItem:function(e,t){t=t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var n=new RegExp("("+t.split(" ").join("|")+")","gi");return'<div class="autocomplete-suggestion" data-val="'+e+'">'+e.replace(n,"<b>$1</b>")+"</div>"},onSelect:function(e,t,n){}};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);for(var o="object"==typeof t.selector?[t.selector]:document.querySelectorAll(t.selector),s=0;s<o.length;s++){var a=o[s];a.sc=document.createElement("div"),a.sc.className="autocomplete-suggestions "+t.menuClass,a.autocompleteAttr=a.getAttribute("autocomplete"),a.setAttribute("autocomplete","off"),a.cache={},a.last_val="",a.updateSC=function(e,n){var o=a.getBoundingClientRect();if(a.sc.style.left=Math.round(o.left+(window.pageXOffset||document.documentElement.scrollLeft)+t.offsetLeft)+"px",a.sc.style.top=Math.round(o.bottom+(window.pageYOffset||document.documentElement.scrollTop)+t.offsetTop)+"px",a.sc.style.width=Math.round(o.right-o.left)+"px",!e&&(a.sc.style.display="block",a.sc.maxHeight||(a.sc.maxHeight=parseInt((window.getComputedStyle?getComputedStyle(a.sc,null):a.sc.currentStyle).maxHeight)),a.sc.suggestionHeight||(a.sc.suggestionHeight=a.sc.querySelector(".autocomplete-suggestion").offsetHeight),a.sc.suggestionHeight))if(n){var s=a.sc.scrollTop,l=n.getBoundingClientRect().top-a.sc.getBoundingClientRect().top;l+a.sc.suggestionHeight-a.sc.maxHeight>0?a.sc.scrollTop=l+a.sc.suggestionHeight+s-a.sc.maxHeight:l<0&&(a.sc.scrollTop=l+s)}else a.sc.scrollTop=0},r(window,"resize",a.updateSC),document.body.appendChild(a.sc),u("autocomplete-suggestion","mouseleave",(function(e){var t=a.sc.querySelector(".autocomplete-suggestion.selected");t&&setTimeout((function(){t.className=t.className.replace("selected","")}),20)}),a.sc),u("autocomplete-suggestion","mouseover",(function(e){var t=a.sc.querySelector(".autocomplete-suggestion.selected");t&&(t.className=t.className.replace("selected","")),this.className+=" selected"}),a.sc),u("autocomplete-suggestion","mousedown",(function(e){if(c(this,"autocomplete-suggestion")){var n=this.getAttribute("data-val");a.value=n,t.onSelect(e,n,this),a.sc.style.display="none"}}),a.sc),a.blurHandler=function(){try{var e=document.querySelector(".autocomplete-suggestions:hover")}catch(t){e=0}e?a!==document.activeElement&&setTimeout((function(){a.focus()}),20):(a.last_val=a.value,a.sc.style.display="none",setTimeout((function(){a.sc.style.display="none"}),350))},r(a,"blur",a.blurHandler);var l=function(e){var n=a.value;if(a.cache[n]=e,e.length&&n.length>=t.minChars){for(var o="",s=0;s<e.length;s++)o+=t.renderItem(e[s],n);a.sc.innerHTML=o,a.updateSC(0)}else a.sc.style.display="none"};a.keydownHandler=function(e){var n,o=window.event?e.keyCode:e.which;if((40==o||38==o)&&a.sc.innerHTML)return(s=a.sc.querySelector(".autocomplete-suggestion.selected"))?(n=40==o?s.nextSibling:s.previousSibling)?(s.className=s.className.replace("selected",""),n.className+=" selected",a.value=n.getAttribute("data-val")):(s.className=s.className.replace("selected",""),a.value=a.last_val,n=0):((n=40==o?a.sc.querySelector(".autocomplete-suggestion"):a.sc.childNodes[a.sc.childNodes.length-1]).className+=" selected",a.value=n.getAttribute("data-val")),a.updateSC(0,n),!1;if(27==o)a.value=a.last_val,a.sc.style.display="none";else if(13==o||9==o){var s;(s=a.sc.querySelector(".autocomplete-suggestion.selected"))&&"none"!=a.sc.style.display&&(t.onSelect(e,s.getAttribute("data-val"),s),setTimeout((function(){a.sc.style.display="none"}),20))}},r(a,"keydown",a.keydownHandler),a.keyupHandler=function(e){var n=window.event?e.keyCode:e.which;if(!n||(n<35||n>40)&&13!=n&&27!=n){var o=a.value;if(o.length>=t.minChars){if(o!=a.last_val){if(a.last_val=o,clearTimeout(a.timer),t.cache){if(o in a.cache)return void l(a.cache[o]);for(var s=1;s<o.length-t.minChars;s++){var c=o.slice(0,o.length-s);if(c in a.cache&&!a.cache[c].length)return void l([])}}a.timer=setTimeout((function(){t.source(o,l)}),t.delay)}}else a.last_val=o,a.sc.style.display="none"}},r(a,"keyup",a.keyupHandler),a.focusHandler=function(e){a.last_val="\n",a.keyupHandler(e)},t.minChars||r(a,"focus",a.focusHandler)}this.destroy=function(){for(var e=0;e<o.length;e++){var t=o[e];i(window,"resize",t.updateSC),i(t,"blur",t.blurHandler),i(t,"focus",t.focusHandler),i(t,"keydown",t.keydownHandler),i(t,"keyup",t.keyupHandler),t.autocompleteAttr?t.setAttribute("autocomplete",t.autocompleteAttr):t.removeAttribute("autocomplete"),document.body.removeChild(t.sc),t=null}}}function c(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function r(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n)}function i(e,t,n){e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener(t,n)}function u(e,t,n,o){r(o||document,t,(function(t){for(var o,s=t.target||t.srcElement;s&&!(o=c(s,e));)s=s.parentElement;o&&n.call(s,t)}))}};function setUpMenu(e){new autoComplete({selector:"#category",minChars:0,source:function(t,n){t=t.toLowerCase();for(var o=[],s=0;s<e.length;s++)~(e[s][0]+" "+e[s][1]).toLowerCase().indexOf(t)&&o.push(e[s]);n(o)},renderItem:function(e,t){t=t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&amp;");var n=new RegExp("("+t.split(" ").join("|")+")","gi");return'<div class="autocomplete-suggestion" data-id="'+e[2]+'" data-fullname="'+e[0]+'" data-name="'+e[1]+'" data-val="'+t+'"> '+e[0].replace(n,"<b>$1</b>")+"</div>"},onSelect:function(e,t,n){void 0,void 0,document.querySelector(this.selector).setAttribute("placeholder",n.getAttribute("data-name"))}})}"function"==typeof define&&define.amd?define("autoComplete",(function(){return autoComplete})):"undefined"!=typeof module&&module.exports?module.exports=autoComplete:window.autoComplete=autoComplete,fetch("assets/data.html").then((function(e){return e.json()})).then((function(e){var t=[];for(var n in e){var o=[e[n].name,e[n].title,e[n].id];t.push(o)}setUpMenu(t)}));