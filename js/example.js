document.addEventListener('DOMContentLoaded', function() {
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth/window.innerHeight,
		1,
		10000
	);

	camera.position.z = 1000;

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight);
	document.body.appendChild( renderer.domElement);

	var controls = new THREE.OrbitControls( camera, renderer.domElement );

	var light = new THREE.PointLight(0xFFFF00);
	light.position.set(10, 0, 25);
	scene.add(light);

	var geometry = new THREE.BoxGeometry(640, 450, 110);

	var loader = new THREE.TextureLoader();
	var materialAray = [
		new THREE.MeshBasicMaterial(  { map: loader.load("covers/N64/1right.png")}),
		new THREE.MeshBasicMaterial(  { map: loader.load("covers/N64/1left.png")}),
		new THREE.MeshBasicMaterial(  { map: loader.load("covers/N64/1top.png")}),
		new THREE.MeshBasicMaterial(  { map: loader.load("covers/N64/1bot.png")}),
		new THREE.MeshBasicMaterial(  { map: loader.load("covers/N64/1front.png")}),
		new THREE.MeshBasicMaterial(  { map: loader.load("covers/N64/1back.png")}),
	];

	var cube = new THREE.Mesh(geometry, materialAray);
	cube.rotation.x = 0.45;
	cube.rotation.y = -0.25;


	scene.add(cube);


	var render = function () {
		requestAnimationFrame( render );
		renderer.render(scene, camera);
	};

	render();

}, false);