var onw3d=null,Onw3dvw=function(e){this.model=e,this.isfull=!1;var i,l=this,r=classie,d=(window,document),t=d.documentElement,n=d.getElementsByTagName("head")[0],a=[],o=!1,s=!1,c="https://boathouse.ua/index.php?route=",u=d.querySelector(".photo-box")||null;u&&(u.style.position="relative",u.style.minHeight="350px",u.style.marginBottom="20px");var m=new function(){var i=this,n='<i class="fa fa-fw fa-chevron-down"></i> <span>подробнее..</span>',a='<i class="fa fa-fw fa-chevron-up"></i>',t=0;i.modelTitle=ko.observable(),i.baseName="Base",i.basePrice=ko.observable(0),i.modName=ko.observable(i.baseName),i.modPrice=ko.observable(0),i.moreBtn=ko.observable(n),i.modsList=ko.observableArray(),i.goodsList=ko.observableArray(),i.fullPrice=ko.computed(function(){return"$"+i.modPrice()}),i.detailsMode=function(){var e=d.querySelector(".mod-details"),t=d.querySelector(".duble");r.has(e,"active")?(r.remove(e,"active"),i.moreBtn(n),t.style.display="inline"):(r.add(e,"active"),i.moreBtn(a),t.style.display="none")},i.clearDetails=function(){i.modsList.removeAll(),i.modName(i.baseName),i.basePrice(0),i.modPrice(0);var e=d.querySelector(".mod-details");r.remove(e,"active"),i.moreBtn(n),t=0},i.setDetails=function(){var e,t=i.modsList();for(var n in t)if(t[n].name===i.modName()){i.goodsList(t[n].goods);break}if(i.modName()==i.baseName)i.modPrice(i.basePrice());else{for(var n in e=i.basePrice(),t=i.goodsList())e+=parseInt(t[n].price);i.modPrice(parseInt(e))}},i.isActive=function(){return"mod-item"+(1==++t?" active":"")}};function v(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){try{var e=JSON.parse(n.responseText)}catch(e){return}t(e)}},n.open("GET",e,!0),n.send()}ko.applyBindings(m),this.hideAll=function(){r.has(t,"onw3d_root")&&r.remove(t,"onw3d_root"),a.forEach(function(e,t,n){e.style.display="none"})},this.showAll=function(){!r.has(t,"onw3d_root")&&r.add(t,"onw3d_root"),a.forEach(function(e,t,n){e.style.display="block"})},this.setPreloader=function(e,t){i.style.display=e?"block":"none",t||(t="")},this.toggleColorBtn=function(e){L.classList="",r.add(L,e)};var p=d.createElement("link");p.href="assets/css/web/style.css",p.type="text/css",p.rel="stylesheet",n.appendChild(p);var h=d.createElement("iframe");h.setAttribute("id","onw3d_viewer");var f=d.createElement("div");f.setAttribute("id","ctrl"),a.push(f);var b=d.createElement("div");b.setAttribute("id","ctrl_wrap"),f.appendChild(b);var E=d.createElement("div");r.add(E,"onw3d_cont"),b.appendChild(E);var y=d.createElement("div");y.setAttribute("id","c-btn"),f.appendChild(y);var w=d.createElement("div");w.setAttribute("id","c-btn2"),f.appendChild(w);var g=d.createElement("div");g.setAttribute("id","c-btn3"),f.appendChild(g);var A=d.createElement("div");A.setAttribute("id","c-btn4"),f.appendChild(A);var k=d.createElement("div");k.setAttribute("id","c-btn5"),f.appendChild(k);var _=d.createElement("div");_.setAttribute("id","c-btn6"),f.appendChild(_);var L=d.createElement("div");L.setAttribute("id","c-btn7"),f.appendChild(L);var C=d.createElement("div");C.setAttribute("id","c-btn8"),C.setAttribute("title","Развернуть на весь экран"),u&&u.appendChild(C);var F=d.createElement("div");F.setAttribute("id","ctrl_test"),f.appendChild(F),y.addEventListener("click",function(e){r.toggle(f,"active"),r.remove(F,"open"),r.remove(w,"open")}),w.addEventListener("click",function(e){r.toggle(this,"open"),r.toggle(F,"open"),s||v(c+"get_json_data",function(e){F.innerHTML="<h2>КАТАЛОГ</h2>";for(var t=F.scrollTop=0;t<e.length;t++){var n=d.createElement("div");n.innerHTML="<h3>"+e[t].name+"</h3><p>"+e[t].description+"</p>",n.setAttribute("data-id",e[t].id),r.add(n,"onw3d_category_item"),n.addEventListener("click",function(e){var t=this.getAttribute("data-id"),i=this.querySelector("h3").innerText;o||v(c+"get_json_data&cid="+t,function(e){F.innerHTML="<h2>"+i+"</h2>",s=!1;for(var t=F.scrollTop=0;t<e.length;t++){var n=d.createElement("div");n.innerHTML="<h3>"+e[t].name+'</h3><p class="elipsis">'+e[t].description+"</p>",n.setAttribute("data-id",e[t].id),n.setAttribute("data-model",e[t].zcode),r.add(n,"onw3d_category_item"),n.addEventListener("click",function(e){l.model=this.getAttribute("data-model"),l.model&&""!=l.model&&(_w.init(),r.remove(F,"open"),r.remove(w,"open"))}),F.appendChild(n)}o=!1})}),F.appendChild(n)}s=!0})}),g.addEventListener("click",function(e){_w.toggleCameraRotate()}),A.addEventListener("click",function(e){r.toggle(this,"exitfs"),d.fullscreenElement||d.mozFullScreenElement||d.webkitFullscreenElement||d.msFullscreenElement?d.exitFullscreen?d.exitFullscreen():d.msExitFullscreen?d.msExitFullscreen():d.mozCancelFullScreen?d.mozCancelFullScreen():d.webkitExitFullscreen&&d.webkitExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.msRequestFullscreen?t.msRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}),k.addEventListener("click",function(e){_w.setEnv()}),_.addEventListener("click",function(e){_w.takeScreenshot()}),L.addEventListener("click",function(e){_w.toggleBaseColor(!0)}),C.addEventListener("click",function(e){l.isfull=!0,this.style.display="none",classie.add(h,"full"),l.showAll()});var S=d.createElement("div");function q(){m.clearDetails(),v(c+"get_json_data&pname="+l.model,function(a){if(m.modelTitle(a.name),0<Object.keys(a.options).length){for(var e in m.modsList.push({name:m.baseName}),a.options)m.modsList.push(a.options[e]);m.basePrice(parseInt(a.price)),m.setDetails();var o=[].slice.call(d.querySelectorAll(".mod-item"));o.forEach(function(i){i.addEventListener("click",function(e){if(!classie.has(this,"active")){var t=this.getAttribute("data-name"),n="Base"!=(d.querySelector(".mod-name").innerText=t)?"_"+t.toLowerCase():"";l.model=u.getAttribute("data-model")+n,_w.init(),m.basePrice(parseInt(a.price)),m.modName(t),m.setDetails(),o.forEach(function(e){r.remove(e,"active")}),r.add(i,"active")}})})}})}function x(){_w=h.contentWindow,i=_w.document.getElementById("info"),u&&(l.model=u.getAttribute("data-model")||"404","404"!=l.model?_w.init():u.innerHTML="model not found",q());var n=[].slice.call(d.querySelectorAll(".onw3d_btn"));n.forEach(function(t){t&&(t.onclick=function(e){e.preventDefault(),l.model=t.getAttribute("data-model")||"404",n.forEach(function(e){r.remove(e,"active")}),r.add(t,"active"),l.model&&""!=l.model&&(u.setAttribute("data-model",l.model),q()),l.model&&""!=l.model&&_w.init()})})}S.setAttribute("id","onw3d_close"),a.push(S),S.addEventListener("click",function(e){l.isfull=!1,r.remove(f,"active"),r.remove(F,"open"),l.hideAll(),u&&(C.style.display="block"),r.remove(h,"full")}),this.hideAll(),u?u.appendChild(h):d.body.appendChild(h),classie.add(h,"ready"),a.forEach(function(e,t,n){d.body.appendChild(e)}),h.setAttribute("src","viewer.html"),h.readyState?h.onreadystatechange=function(){("loaded"==h.readyState||"complete"==h.readyState)&&(h.onreadystatechange=null,x())}:h.onload=function(){x()}};domready(function(){onw3d=new Onw3dvw});