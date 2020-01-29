var onw3d = null;

/* ====== Onw3Dvw Class ========= */
var Onw3dvw = function(model) {

      this.model = model;
      this.isfull = false;
      //this.equip = '';

      var o = this, l,
      c = classie,
      w = window,
      d = document,
      r = d.documentElement,
      h = d.getElementsByTagName("head")[0],
      AP = "assets/",
      objs = [],
      w = null,
      prod = false,
      cat = false,
      u = 'https://boathouse.ua/index.php?route=';

      var container = d.querySelector('.photo-box') || null;
      if (container) {
        container.style.position = 'relative';
        container.style.minHeight = '350px';
        container.style.marginBottom = '20px';
      }

      function Onw3dViewModel() {
        var self = this;

        var _details = {
                show: '<i class="fa fa-fw fa-chevron-down"></i> <span>показать детали</span>',
                hide: '<i class="fa fa-fw fa-chevron-up"></i> <span>скрыть детали</span>'
            },
            _cnt = 0;

        self.baseName = 'Base';
        self.basePrice = ko.observable(0);
        self.modName = ko.observable(self.baseName);
        self.modPrice = ko.observable(0);
        self.moreBtn = ko.observable(_details.show);
        self.modsList = ko.observableArray();
        self.goodsList = ko.observableArray();

        self.fullPrice = ko.computed(function () {
            return "$" + self.modPrice();
        });

        self.detailsMode = function () {
            var el = d.querySelector('.mod-details');
            if (classie.has(el, 'active')) {
                classie.remove(el, 'active');
                self.moreBtn(_details.show);
            } else {
                classie.add(el, 'active');
                self.moreBtn(_details.hide);
            }
        };

        self.setDetails = function () {
            var price, obj = self.modsList();

            for (var prop in obj) {
                if (obj[prop].name === self.modName()) {
                    self.goodsList(obj[prop].goods);
                    break;
                }
            }

            if (self.modName() == self.baseName) self.modPrice(self.basePrice());
            else {
                price = self.basePrice();
                obj = self.goodsList();
                for (var prop in obj) price += parseInt(obj[prop].price);
                self.modPrice(parseInt(price));
            }
        };

        self.isActive = function () {
            _cnt++;
            var a = (_cnt == 1) ? ' active' : '';
            return 'mod-item' + a;
        }
    }

    var vm = new Onw3dViewModel();
    ko.applyBindings(vm);


      /* public methods */
      this.hideAll = function () {
        c.has(r, 'onw3d_root') ? c.remove(r, 'onw3d_root') : '';
        objs.forEach(function(item, i, arr) {
          item.style.display = "none";
        });
      }

      this.showAll = function () {
        c.has(r, 'onw3d_root') ? '' : c.add(r, 'onw3d_root');
        objs.forEach(function(item, i, arr) {
          item.style.display = "block";
        });
      }

      this.setPreloader = function (mode, value) {
          if (mode) l.style.display = "block";
          else l.style.display = "none";

          if (!value) value = '';  
      }

      this.toggleColorBtn = function (cl) {
        c_btn7.classList = '';
        c.add(c_btn7, cl);
      }
      /* -------- end public methods ------------- */


      /* private methods */
      function addAll() {
        if (container) container.appendChild(vw);
        else d.body.appendChild(vw);

        classie.add(vw, "ready");
        //classie.add(viewer, "full");

        objs.forEach(function(item, i, arr) {
          d.body.appendChild(item);
        });
      }

      function ajax_get(url, callback) {
        var x = new XMLHttpRequest();
        x.onreadystatechange = function() {
            if (x.readyState == 4 && x.status == 200) {
                //console.log('responseText:' + xmlhttp.responseText);
                try {
                    var data = JSON.parse(x.responseText);
                } catch(err) {
                    //console.log(err.message + " in " + xmlhttp.responseText);
                    return;
                }
                callback(data);
            }
        };
     
        x.open("GET", url, true);
        x.send();
      }


      function toggleFullScreen() {
          if (!d.fullscreenElement &&
              !d.mozFullScreenElement && !d.webkitFullscreenElement && !d.msFullscreenElement) {
              if (r.requestFullscreen) r.requestFullscreen();
              else if (r.msRequestFullscreen) r.msRequestFullscreen();
              else if (r.mozRequestFullScreen) r.mozRequestFullScreen();
              else if (r.webkitRequestFullscreen) r.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          } else {
              if (d.exitFullscreen) d.exitFullscreen();
              else if (d.msExitFullscreen) d.msExitFullscreen();
              else if (d.mozCancelFullScreen) d.mozCancelFullScreen();
              else if (d.webkitExitFullscreen) d.webkitExitFullscreen();
          }
      }
      /* -------- end private methods -------------- */

      /* create elements */
      var link = d.createElement("link");
      link.href = AP + "css/web/style.css";       
      link.type = "text/css";
      link.rel = "stylesheet";
      h.appendChild(link);

      var vw = d.createElement("iframe");
      vw.setAttribute("id", "onw3d_viewer");
      //objs.push(vw);

      var ct = d.createElement("div");
      ct.setAttribute("id", "ctrl");
      objs.push(ct);

      var cw = d.createElement("div");
      cw.setAttribute("id", "ctrl_wrap");
      ct.appendChild(cw);

      var cont = d.createElement("div");
      c.add(cont, "onw3d_cont");
      cw.appendChild(cont);

      var c_btn = d.createElement("div");
      c_btn.setAttribute("id", "c-btn");
      ct.appendChild(c_btn);

      var c_btn2 = d.createElement("div");
      c_btn2.setAttribute("id", "c-btn2");
      ct.appendChild(c_btn2);

      var c_btn3 = d.createElement("div");
      c_btn3.setAttribute("id", "c-btn3");
      ct.appendChild(c_btn3);

      var c_btn4 = d.createElement("div");
      c_btn4.setAttribute("id", "c-btn4");
      //classie.add(c_btn4, "exitfs");
      ct.appendChild(c_btn4);

      var c_btn5 = d.createElement("div");
      c_btn5.setAttribute("id", "c-btn5");
      ct.appendChild(c_btn5);

      var c_btn6 = d.createElement("div");
      c_btn6.setAttribute("id", "c-btn6");
      ct.appendChild(c_btn6);

      var c_btn7 = d.createElement("div");
      c_btn7.setAttribute("id", "c-btn7");
      ct.appendChild(c_btn7);

      var c_btn8 = d.createElement("div");
      c_btn8.setAttribute("id", "c-btn8");
      c_btn8.setAttribute("title", "Развернуть на весь экран");
      if (container) container.appendChild(c_btn8);

      var cts = d.createElement("div");
      cts.setAttribute("id", "ctrl_test");
      ct.appendChild(cts);

      c_btn.addEventListener("click", function (e) {
        c.toggle(ct, "active");
        c.remove(cts, "open");
        c.remove(c_btn2, "open");
      });

      c_btn2.addEventListener("click", function (e) {
        c.toggle(this, "open");
        c.toggle(cts, "open");

        if(!cat) {
          ajax_get(u + "get_json_data", function(data) {

            cts.innerHTML = '<h2>КАТАЛОГ ПРОДУКЦИИ</h2>'; cts.scrollTop = 0;
            for (var i=0; i < data.length; i++) {
              var p = d.createElement("div");
              //var img = (data[i]["icon"] != "") ? '<img src="https://boathouse.ua/image/'+ encodeURI(data[i]["icon"]) +'" />':"";
              p.innerHTML = '<h3>' + data[i]["name"] + '</h3><p>' + data[i]["description"] + '</p>';
              p.setAttribute("data-id", data[i]["id"]);
              c.add(p, "onw3d_category_item");

              p.addEventListener("click", function (e) {
                var cid = this.getAttribute("data-id");
                var cat_name = this.querySelector('h3').innerText;

                if(!prod) {
                  ajax_get(u + "get_json_data&cid=" + cid, function(data) {

                  cts.innerHTML = '<h2>'+ cat_name +'</h2>'; cat = false; cts.scrollTop = 0;

                  for (var i=0; i < data.length; i++) {
                    var p = d.createElement("div");
                    p.innerHTML = '<h3>' + data[i]["name"] + '</h3><p class="elipsis">' + data[i]["description"] + '</p>';
                    p.setAttribute("data-id", data[i]["id"]);
                    p.setAttribute("data-model", data[i]["zcode"]);
                    c.add(p, "onw3d_category_item");

                    p.addEventListener("click", function (e) {
                      o.model = this.getAttribute("data-model");
                      if(o.model && o.model!="") {
                        _w.init();
                        c.remove(cts, "open");
                        c.remove(c_btn2, "open");

                        ajax_get(u + "get_json_data&pname=" + o.model, function(data) {
                          cont.innerHTML = '<h2 style="float:left">' + data["name"] + '</h2>';
                          c.add(cont, "onw3d_cont");
                          cw.appendChild(cont);
                        });
                      }
                    });

                    cts.appendChild(p);
                  }

                  prod = false;

                });
              }//if
            
              });
              cts.appendChild(p);
            }
            cat = true;
          
          });
        }

      });

      c_btn3.addEventListener("click", function (e) {
         _w.toggleCameraRotate();
      });

      c_btn4.addEventListener("click", function (e) {
        c.toggle(this, "exitfs");
        toggleFullScreen();
      });

      c_btn5.addEventListener("click", function (e) {
        _w.setEnv();
      });

      c_btn6.addEventListener("click", function (e) {
         _w.takeScreenshot();
      });

      c_btn7.addEventListener("click", function (e) {
         _w.toggleBaseColor(true);
      });

      c_btn8.addEventListener("click", function (e) {
        o.isfull = true;
        this.style.display = 'none';
        classie.add(vw, "full");
        o.showAll();
    });

      var close = d.createElement("div");
      close.setAttribute("id", "onw3d_close");
      objs.push(close);

      close.addEventListener("click", function (e) {
        o.isfull = false;
        c.remove(ct, "active");
        c.remove(cts, "open");
        o.hideAll();
        //_w.clear();
        if (container) c_btn8.style.display = 'block';
        //else c.remove(vw, 'ready');
        c.remove(vw, "full");
        
      });

      this.hideAll();
      addAll();

      vw.setAttribute("src", "viewer.html");
      vw.readyState ? vw.onreadystatechange = function() {
        ("loaded" == vw.readyState || "complete" == vw.readyState) && (vw.onreadystatechange = null, onReady())
      } : vw.onload = function() { onReady(); };
      

      function onReady() {
          _w = vw.contentWindow;
          l = _w.document.getElementById('info');

            if (container) {
              o.model = container.getAttribute("data-model") || '404';
              if (o.model != '404') _w.init();
              else container.innerHTML = 'model not found';
              ajax_get(u + "get_json_data&pname=" + o.model, function (data) {

                  if (Object.keys(data.options).length > 0) {

                      vm.modsList.push({
                          name: vm.baseName
                      });

                      for (var prop in data.options) {
                          vm.modsList.push(data.options[prop]);
                      }

                    vm.basePrice(parseInt(data.price));
                      vm.setDetails();

                      var items = [].slice.call(d.querySelectorAll(".mod-item"));

                      items.forEach(function (a) {
                          a.addEventListener("click", function (e) {
                            if(!classie.has(this, 'active')) {
                                var n = this.getAttribute('data-name');
                                d.querySelector('.mod-name').innerText = n;
                                var sf = (n != 'Base') ? '_' + n.toLowerCase() : '';
                                o.model = container.getAttribute("data-model") + sf;
                                _w.init();
                                vm.basePrice(parseInt(data.price));
                                vm.modName(n);
                                vm.setDetails();

                                items.forEach(function (b) {
                                    classie.remove(b, 'active');
                                });

                                classie.add(a, 'active');
                            }
                          });
                      });
                  }
              });
          }

          [].slice.call(d.querySelectorAll(".onw3d_btn")).forEach(function(a) {
            
              a&&(a.onclick=function(event) {
                event.preventDefault();
                o.showAll();
                o.model = a.getAttribute("data-model")  || '404';
                //o.equip = a.getAttribute("data-equip") || '';

                if(o.model && o.model!="") {
                  ajax_get(u + "get_json_data&pname=" + o.model, function(data) {
                    cont.innerHTML = '<h2 style="float:left">' + data["name"] + '</h2>';
                  });
                }

                if(o.model && o.model != "") {_w.init();}

              });
          }); 

          // onclick a
      }

      //..   
};
/* ======== end Onw3Dvw Class ========== */

domready(function () {

  onw3d = new Onw3dvw;

});