var container,loader,info,stats,scene,camera,renderer,controls,light,water,skybox,_init=!1,_real=!0,_render=!0;_env=!0,d=document,w=window,assets="/assets/";var parameters={oceanSide:1e3,size:1,distortionScale:1,alpha:.6};function clear(e){for(var a in controls.reset(),loader.meshes)scene.remove(loader.meshes[a]),loader.meshes[a].geometry.dispose(),loader.meshes[a].material.dispose();for(var a in loader.containers)scene.remove(loader.containers[a]);e?(_render=!0,load()):_render=!1}function load(){info.style.display="block",(loader=new THREE.SEA3D({container:scene})).onComplete=function(e){info.style.display="none",setTimeout(function(){toggleBaseColor()},30)};var e=w.parent.onw3d.model||"404",a=w.parent.onw3d.equip||"",r=assets+"models/"+e+a+".sea",t=new XMLHttpRequest;t.onreadystatechange=function(){4===t.readyState&&(404===t.status?(w.parent.onw3d.model="404",w.parent.onw3d.setPreloader(),loader.load(assets+"models/404.sea")):(w.parent.onw3d.setPreloader(!0),loader.load(r)))},t.open("HEAD",r),t.send()}function init(){if(_init)return clear(!0);var e=w.innerWidth,a=w.innerHeight;container=d.createElement("div"),d.body.appendChild(container),(renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!0})).antialias=!0,renderer.setPixelRatio(window.devicePixelRatio),renderer.setSize(e,a),container.appendChild(renderer.domElement),(scene=new THREE.Scene).fog=new THREE.FogExp2(4148570,.001),(camera=new THREE.PerspectiveCamera(55,w.innerWidth/w.innerHeight,1,2e4)).position.set(20,20,50),(light=new THREE.DirectionalLight(16777215,1.2)).position.set(-30,30,30),scene.add(light);var r=new THREE.DirectionalLight(13421772,.3);r.position.set(30,-30,30),scene.add(r);var t=new THREE.AmbientLight(15658734,1.2);scene.add(t),(controls=new THREE.OrbitControls(camera,renderer.domElement)).target.set(0,0,0),controls.maxDistance=200,controls.enableDamping=!0,controls.dampingFactor=.2,controls.zoomSpeed=.4,controls.rotateSpeed=.3,controls.autoRotate=!0,controls.autoRotateSpeed=.6,camera.lookAt(controls.target),stats=new Stats,container.appendChild(stats.dom),stats.dom.style.opacity="0.05",w.addEventListener("resize",onWindowResize,!1),_init=!0,_env&&(setWater(),setSkybox()),load(),animate()}function toggleCameraRotate(){controls.autoRotate=1!=controls.autoRotate}function toggleBaseColor(o){o||(o=!1);var s,i,d="disable",l=w.parent.onw3d.color;loader.meshes.forEach(function(e,a,r){if(0<e.name.search(/_Base_Mesh/i)){var t=e.material,n=t.map.image.src;d=o?("green"==o?(s="grey",i="green"):"grey"==o&&(s="green",i="grey"),t.map.dispose(),t.map.image.src=n.replace(i,s),t.needsUpdate=!0,l=s,i):l?("green"==l?(s="green",i="grey"):"grey"==l&&(s="grey",i="green"),t.map.dispose(),t.map.image.src=n.replace(i,s),t.needsUpdate=!0,l=s,i):(0<n.search(/green/i)?(s="grey",i="green"):0<n.search(/grey/i)&&(s="green",i="grey"),l=i,s),w.parent.onw3d.color=l}}),w.parent.onw3d.toggleColorBtn(d)}function setEnv(){water||setWater(),skybox||setSkybox(),1==_env?(_env=!1,skybox&&(skybox.visible=!1),water&&(water.visible=!1)):(_env=!0,skybox&&(skybox.visible=!0),water&&(water.visible=!0))}function setWater(){(water=new THREE.Water(new THREE.PlaneBufferGeometry(5*parameters.oceanSide,5*parameters.oceanSide),{textureWidth:512,textureHeight:512,waterNormals:(new THREE.TextureLoader).load(assets+"textures/waternormals.jpg",function(e){e.wrapS=e.wrapT=THREE.RepeatWrapping}),alpha:parameters.alpha,sunDirection:light.position.clone().normalize(),sunColor:16777215,waterColor:7695,distortionScale:parameters.distortionScale,fog:void 0!==scene.fog})).position.y=-1.5,water.rotation.x=-Math.PI/2,water.receiveShadow=!0,scene.add(water)}function setSkybox(){var e=new THREE.CubeTextureLoader;e.setPath(assets+"textures/skybox4/"),cubeMap=e.load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);var a=THREE.ShaderLib.cube;a.uniforms.tCube.value=cubeMap;var r=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:a.uniforms,side:THREE.BackSide}),t=new THREE.BoxBufferGeometry(5*parameters.oceanSide+100,5*parameters.oceanSide+100,5*parameters.oceanSide+100);skybox=new THREE.Mesh(t,r),scene.add(skybox)}function takeScreenshot(){var e=d.createElement("a");renderer.render(scene,camera),e.href=renderer.domElement.toDataURL().replace("image/png","image/octet-stream"),e.download=w.parent.onw3d.model+".png",d.body.appendChild(e),e.click(),d.body.removeChild(e)}function onWindowResize(){var e=w.innerWidth,a=w.innerHeight;camera.aspect=e/a,camera.updateProjectionMatrix(),renderer.setSize(e,a)}function animate(){requestAnimationFrame(animate),_env&&_real&&(water.material.uniforms.time.value+=1/60),_render&&(renderer.render(scene,camera),controls.update(),stats.update())}info=d.getElementById("info"),WEBGL.isWebGL2Available()||d.body.appendChild(WEBGL.getWebGL2ErrorMessage()),WEBGL.isWebGLAvailable()||d.body.appendChild(WEBGL.getWebGLErrorMessage());