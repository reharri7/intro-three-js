import * as THREE from 'three';
import { OrbitControls} from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: 'red'});

const cubeMesh = new THREE.Mesh(
    cubeGeometry,
    cubeMaterial
);

scene.add(cubeMesh);

// init camera
// const camera = new THREE.OrthographicCamera(-1, 1,1 , -1, 0.1, 200);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
// init renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({canvas});
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;
renderer.setSize(window.innerWidth, window.innerHeight);
const renderLoop = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(renderLoop);
};
renderLoop();
