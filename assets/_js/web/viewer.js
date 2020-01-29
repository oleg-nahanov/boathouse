var _init = false,
    _real = true,
    _render = true;
    _env = true,
    d = document,
    w = window,
    assets = '/assets/';

var container, loader, info, stats;

var scene, camera, renderer, controls, light;

var water, skybox;

var parameters = {
    oceanSide: 1000,
    size: 1.0,
    distortionScale: 1.0,
    alpha: 0.6
};

info = d.getElementById("info");

if (!WEBGL.isWebGL2Available()) {
    d.body.appendChild( WEBGL.getWebGL2ErrorMessage() );
}

if (!WEBGL.isWebGLAvailable()) {
    var warning = WEBGL.getWebGLErrorMessage();
    d.body.appendChild(warning);
}


function clear(arg) {
    controls.reset();

    for (var obj in loader.meshes) {
        scene.remove(loader.meshes[obj]);
        loader.meshes[obj].geometry.dispose();
        loader.meshes[obj].material.dispose();
    }

    for (var obj in loader.containers) {
        scene.remove(loader.containers[obj]); 
    }

    if (arg) {
        _render = true;
        load();
    } else {
        _render = false;
    }
}

function load() {
    info.style.display = "block";
    
    loader = new THREE.SEA3D({
        container: scene
    });
    
    loader.onComplete = function (e) {
        info.style.display = "none";

        setTimeout(function(){
                toggleBaseColor();
        }, 300); 
    };

    var req_model = w.parent.onw3d.model || '404';
    var eq_model = w.parent.onw3d.equip || '';

    var url = assets + 'models/' + req_model + eq_model + '.sea';
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        //console.log(http);
        if (http.readyState === 4) {
            if (http.status === 404) {
                //console.log('404');
                w.parent.onw3d.model = '404';
                w.parent.onw3d.hideAll();
                w.parent.onw3d.showAll();
                w.parent.onw3d.setPreloader();
                loader.load(assets + 'models/404.sea');
                //return;
                //alert('Error 404 - File not found');
            } else {
                w.parent.onw3d.setPreloader(!0);
                loader.load(url);
            }
        }
    };
    /*http.onerror = function () {
        console.log('error');

    };*/
    http.open('HEAD', url);
    http.send();
}


function init() {
    if (_init) return clear(true);

    var width = w.innerWidth;
    var height = w.innerHeight;

    container = d.createElement('div');
    d.body.appendChild(container);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.antialias = true;
    renderer.setPixelRatio(window.devicePixelRatio);//|| 1
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x3f4d5a, 0.001);

    camera = new THREE.PerspectiveCamera(55, w.innerWidth / w.innerHeight, 1, 20000);
    camera.position.set(20, 20, 50);

    light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(-30, 30, 30);
    scene.add(light);

    var underlight = new THREE.DirectionalLight(0xcccccc, 0.3);
    underlight.position.set(30, -30, 30);
    scene.add(underlight);

    var ambientLight = new THREE.AmbientLight(0xeeeeee, 1.2);
    scene.add(ambientLight);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.maxDistance = 200.0;
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    controls.zoomSpeed = 0.4;
    controls.rotateSpeed = 0.3;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;

    camera.lookAt(controls.target);

    stats = new Stats();
    container.appendChild(stats.dom);
    stats.dom.style.opacity = "0.05";
    // var helper = new THREE.GridHelper( 200, 60, 0xFF4444, 0x404040 );
    // helper.position.y = -1.5;
    // scene.add( helper );

    w.addEventListener('resize', onWindowResize, false);

    _init = true;

    if(_env){
        setWater();
        setSkybox();
    }
    load();
    animate();
}


function toggleCameraRotate() {
    controls.autoRotate = (controls.autoRotate == true) ? false : true;
}

function toggleBaseColor(arg) {
    if(!arg) arg = false;
    var cl = 'disable';

    loader.meshes.forEach(function(item, i, arr) {
        if(item.name.search(/_Base_Mesh/i)>0) {
            var tog = ''; 
            var mat = item.material;
            var cur = mat.map.image.src;
            
            
            if(cur.search(/green/i)>0) {tog = cur.replace("green", "grey"); if(arg) cl = 'green'; else cl = 'grey';}
            else if(cur.search(/grey/i)>0){tog = cur.replace("grey", "green"); if(arg) cl = 'grey'; else cl = 'green';}

            if(arg && tog!='') {
                mat.map.dispose();
                mat.map.image.src = tog;
                mat.needsUpdate = true;
            }
        }
    });
    w.parent.onw3d.toggleColorBtn(cl);
}


function setEnv() {
    if(!water) setWater();
    if(!skybox) setSkybox();

    if(_env == true) {
        _env=false;
        skybox && (skybox.visible = false);
        water && (water.visible = false);
    }else{
        _env=true;
        skybox && (skybox.visible = true);
        water && (water.visible = true);
    }
}


function setWater() {
    //var waterGeometry = new THREE.PlaneBufferGeometry( parameters.oceanSide * 5, parameters.oceanSide * 5 );
    water = new THREE.Water(
        new THREE.PlaneBufferGeometry(parameters.oceanSide * 5, parameters.oceanSide * 5), {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new THREE.TextureLoader().load(assets + 'textures/waternormals.jpg', function (texture) {
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            }),
            alpha: parameters.alpha,
            sunDirection: light.position.clone().normalize(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: parameters.distortionScale,
            fog: scene.fog !== undefined
        }
    );

    water.position.y = -1.5;
    water.rotation.x = -Math.PI / 2;
    water.receiveShadow = true;
    scene.add(water);
}


function setSkybox() {
    var cubeTextureLoader = new THREE.CubeTextureLoader();
    cubeTextureLoader.setPath(assets + 'textures/skybox4/');

    cubeMap = cubeTextureLoader.load([
        'px.jpg', 'nx.jpg',
        'py.jpg', 'ny.jpg',
        'pz.jpg', 'nz.jpg',
    ]);

    var cubeShader = THREE.ShaderLib['cube'];
    cubeShader.uniforms['tCube'].value = cubeMap;

    var skyBoxMaterial = new THREE.ShaderMaterial({
        fragmentShader: cubeShader.fragmentShader,
        vertexShader: cubeShader.vertexShader,
        uniforms: cubeShader.uniforms,
        side: THREE.BackSide
    });

    var skyBoxGeometry = new THREE.BoxBufferGeometry(
        parameters.oceanSide * 5 + 100,
        parameters.oceanSide * 5 + 100,
        parameters.oceanSide * 5 + 100);

    skybox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);

    scene.add(skybox);
}


function takeScreenshot() {

    //skybox && (skybox.visible = false);
    //water && (water.visible = false);

    var a = d.createElement('a');
    renderer.render(scene, camera);
    a.href = renderer.domElement.toDataURL().replace("image/png", "image/octet-stream");
    a.download = w.parent.onw3d.model + '.png';

    d.body.appendChild(a);
    a.click();
    d.body.removeChild(a);

    //skybox && (skybox.visible = true);
    //water && (water.visible = true);
}


function onWindowResize() {
    var width = w.innerWidth;
    var height = w.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
}


function animate() {
    requestAnimationFrame(animate);
    if(_env){
        if (_real) {
            water.material.uniforms.time.value += 1.0 / 60.0;
        }
    }

    if (_render) {
        renderer.render(scene, camera);
        controls.update();
        stats.update();
    }
}