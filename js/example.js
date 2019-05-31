document.addEventListener('DOMContentLoaded', function() {
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth/window.innerHeight,
		0.1,
		1000
	);

	camera.position.z = 100;

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight);
	document.body.appendChild( renderer.domElement);

	var light = new THREE.PointLight(0xFFFF00);
	light.position.set(10, 0, 25);
	scene.add(light);

	var geometry = new THREE.BoxGeometry(20, 15, 10);
	var material = new THREE.MeshNormalMaterial();
	var cube = new THREE.Mesh(geometry, material);
	cube.rotation.x = 0.45;
	cube.rotation.y = -0.25;


	scene.add(cube);


	var render = function () {
		requestAnimationFrame( render );

		renderer.render(scene, camera);
	};

	render();

}, false);