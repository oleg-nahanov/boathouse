var onw3d=null,Onw3dvw=function(e){var n,l=this,r=classie,t=window,d=document,i=d.documentElement,o=d.getElementsByTagName("head")[0],a=[],s=!1,c=!1,u="https://boathouse.ua/index.php?route=";l.model=e,l.isfull=!1,l.color=!1;var m=d.querySelector(".photo-box")||null;m&&(m.style.position="relative",m.style.minHeight="400px",m.style.marginBottom="20px");var p=new function(){var n=this,i='<i class="fa fa-fw fa-chevron-down"></i> <span>подробнее..</span>',o='<i class="fa fa-fw fa-chevron-up"></i>',t=0;n.modelTitle=ko.observable(),n.baseName="Base",n.basePrice=ko.observable(0),n.modName=ko.observable(n.baseName),n.modPrice=ko.observable(0),n.moreBtn=ko.observable(i),n.modsList=ko.observableArray(),n.goodsList=ko.observableArray(),n.fullPrice=ko.computed(function(){return"$"+n.modPrice()}),n.detailsMode=function(){var e=d.querySelector(".mod-details"),t=d.querySelector(".duble");r.has(e,"active")?(r.remove(e,"active"),n.moreBtn(i),t.style.display="inline"):(r.add(e,"active"),n.moreBtn(o),t.style.display="none")},n.clearDetails=function(){n.modsList.removeAll(),n.modName(n.baseName),n.basePrice(0),n.modPrice(0);var e=d.querySelector(".mod-details");r.remove(e,"active"),n.moreBtn(i),t=0},n.setDetails=function(){var e,t=n.modsList();for(var i in t)if(t[i].name===n.modName()){n.goodsList(t[i].goods);break}if(n.modName()==n.baseName)n.modPrice(n.basePrice());else{for(var i in e=n.basePrice(),t=n.goodsList())e+=parseInt(t[i].price),void 0;n.modPrice(parseInt(e))}},n.isActive=function(){return"mod-item"+(1==++t?" active":"")}};function v(e,t){var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState&&200==i.status){try{var e=JSON.parse(i.responseText)}catch(e){return}t(e)}},i.open("GET",e,!0),i.send()}ko.applyBindings(p),l.hideAll=function(){r.has(i,"onw3d_root")&&r.remove(i,"onw3d_root"),a.forEach(function(e,t,i){e.style.display="none"})},l.showAll=function(){!r.has(i,"onw3d_root")&&r.add(i,"onw3d_root"),a.forEach(function(e,t,i){e.style.display="block"})},l.setPreloader=function(e,t){n.style.display=e?"block":"none",t||(t="")},l.toggleColorBtn=function(e){C.classList="",r.add(C,e)},l.toggleFrame=function(e){e?r.add(h,"paused"):r.remove(h,"paused")},l.toggleMobile=function(e){e?r.add(d.body,"mobile"):r.remove(d.body,"mobile")},l.getGoods=function(){return p.goodsList()};var b=d.createElement("link");b.href="assets/css/web/style.css",b.type="text/css",b.rel="stylesheet",o.appendChild(b);var h=d.createElement("iframe");h.setAttribute("id","onw3d_viewer");var f=d.createElement("div");f.setAttribute("id","ctrl"),a.push(f);var g=d.createElement("div");g.setAttribute("id","ctrl_wrap"),f.appendChild(g);var A=d.createElement("div");r.add(A,"onw3d_cont"),g.appendChild(A);var E=d.createElement("div");E.setAttribute("id","c-btn"),f.appendChild(E);var y=d.createElement("div");y.setAttribute("id","c-btn2"),y.setAttribute("role","tooltip"),y.setAttribute("data-position","right"),y.setAttribute("aria-label","каталог"),f.appendChild(y);var w=d.createElement("div");w.setAttribute("id","c-btn3"),w.setAttribute("role","tooltip"),w.setAttribute("data-position","right"),w.setAttribute("aria-label","вращение камеры"),f.appendChild(w);var k=d.createElement("div");k.setAttribute("id","c-btn4"),k.setAttribute("role","tooltip"),k.setAttribute("data-position","right"),k.setAttribute("aria-label","полноэкранный режим"),f.appendChild(k);var _=d.createElement("div");_.setAttribute("id","c-btn5"),_.setAttribute("role","tooltip"),_.setAttribute("data-position","right"),_.setAttribute("aria-label","окружающий мир"),f.appendChild(_);var L=d.createElement("div");L.setAttribute("id","c-btn6"),L.setAttribute("role","tooltip"),L.setAttribute("data-position","right"),L.setAttribute("aria-label","сделать снимок"),f.appendChild(L);var C=d.createElement("div");C.setAttribute("id","c-btn7"),r.add(C,"disable"),m?m.appendChild(C):f.appendChild(C);var S=d.createElement("div");S.setAttribute("id","c-btn8"),S.setAttribute("title","Развернуть на весь экран"),m&&m.appendChild(S);var F=d.createElement("div");F.setAttribute("id","c-btn9"),F.setAttribute("role","tooltip"),F.setAttribute("data-position","right"),F.setAttribute("aria-label","вкл/выкл подсказки"),F.textContent="*",f.appendChild(F);var q=d.createElement("div");q.setAttribute("id","ctrl_test"),f.appendChild(q),E.addEventListener("click",function(e){r.toggle(f,"active"),r.remove(q,"open"),r.remove(y,"open")}),y.addEventListener("click",function(e){r.toggle(this,"open"),r.toggle(q,"open"),c||v(u+"get_json_data",function(e){q.innerHTML="<h2>КАТАЛОГ</h2>";for(var t=q.scrollTop=0;t<e.length;t++){var i=d.createElement("div");i.innerHTML="<h3>"+e[t].name+"</h3><p>"+e[t].description+"</p>",i.setAttribute("data-id",e[t].id),r.add(i,"onw3d_category_item"),i.addEventListener("click",function(e){var t=this.getAttribute("data-id"),n=this.querySelector("h3").innerText;s||v(u+"get_json_data&cid="+t,function(e){q.innerHTML="<h2>"+n+"</h2>",c=!1;for(var t=q.scrollTop=0;t<e.length;t++){var i=d.createElement("div");i.innerHTML="<h3>"+e[t].name+'</h3><p class="elipsis">'+e[t].description+"</p>",i.setAttribute("data-id",e[t].id),i.setAttribute("data-model",e[t].zcode),r.add(i,"onw3d_category_item"),i.addEventListener("click",function(e){l.model=this.getAttribute("data-model"),l.model&&""!=l.model&&(_w.init(),r.remove(q,"open"),r.remove(y,"open"))}),q.appendChild(i)}s=!1})}),q.appendChild(i)}c=!0})}),w.addEventListener("click",function(e){_w.toggleCameraRotate()}),k.addEventListener("click",function(e){r.toggle(this,"exitfs"),d.fullscreenElement||d.mozFullScreenElement||d.webkitFullscreenElement||d.msFullscreenElement?d.exitFullscreen?d.exitFullscreen():d.msExitFullscreen?d.msExitFullscreen():d.mozCancelFullScreen?d.mozCancelFullScreen():d.webkitExitFullscreen&&d.webkitExitFullscreen():i.requestFullscreen?i.requestFullscreen():i.msRequestFullscreen?i.msRequestFullscreen():i.mozRequestFullScreen?i.mozRequestFullScreen():i.webkitRequestFullscreen&&i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}),_.addEventListener("click",function(e){_w.setEnv()}),L.addEventListener("click",function(e){_w.takeScreenshot()}),C.addEventListener("click",function(e){_w.toggleBaseColor(l.color)}),S.addEventListener("click",function(e){l.isfull=!0,this.style.display="none",classie.add(h,"full"),l.showAll()}),F.addEventListener("click",function(e){_w.toggleTooltips()});var x=d.createElement("div");function T(){p.clearDetails(),v(u+"get_json_data&pname="+l.model,function(o){var e;if(p.modelTitle(o.name),e=o.model,d.title=e,0<Object.keys(o.options).length){for(var t in p.modsList.push({name:p.baseName,description:"Базовая"}),o.options)p.modsList.push(o.options[t]);p.basePrice(parseInt(o.price)),p.setDetails();var a=[].slice.call(d.querySelectorAll(".mod-item"));a.forEach(function(n){n.addEventListener("click",function(e){if(!classie.has(this,"active")){var t=this.getAttribute("data-name"),i="Base"!=(d.querySelector(".mod-name").innerText=t)?"_"+t.toLowerCase():"";l.model=m.getAttribute("data-model")+i,_w.init(),p.basePrice(parseInt(o.price)),p.modName(t),p.setDetails(),a.forEach(function(e){r.remove(e,"active")}),r.add(n,"active")}})})}})}function P(){_w=h.contentWindow,n=_w.document.getElementById("info");var e=new URLSearchParams(t.location.search),i=[].slice.call(d.querySelectorAll(".onw3d_btn"));m&&(null!==e.get("model")?(l.model=e.get("model"),m.setAttribute("data-model",l.model),t.history.pushState(null,null,t.location.pathname),i.forEach(function(e){r.remove(e,"active")})):l.model=m.getAttribute("data-model")||"404","404"!=l.model?_w.init():m.innerHTML="model not found",T()),i.forEach(function(t){t&&(t.onclick=function(e){e.preventDefault(),l.model=t.getAttribute("data-model")||"404",i.forEach(function(e){r.remove(e,"active")}),r.add(t,"active"),l.model&&""!=l.model&&(m.setAttribute("data-model",l.model),T()),l.model&&""!=l.model&&_w.init()})})}x.setAttribute("id","onw3d_close"),a.push(x),x.addEventListener("click",function(e){l.isfull=!1,r.remove(f,"active"),r.remove(q,"open"),l.hideAll(),m&&(S.style.display="block"),r.remove(h,"full")}),this.hideAll(),m?m.appendChild(h):d.body.appendChild(h),r.add(h,"ready"),a.forEach(function(e,t,i){d.body.appendChild(e)}),h.setAttribute("src","viewer.html"),h.readyState?h.onreadystatechange=function(){("loaded"==h.readyState||"complete"==h.readyState)&&(h.onreadystatechange=null,P())}:h.onload=function(){P()}};domready(function(){onw3d=new Onw3dvw});