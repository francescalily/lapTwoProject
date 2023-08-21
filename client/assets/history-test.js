import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.min.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(5));

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let object;

let controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const loader = new STLLoader();
loader.load(
    'settlerschurch.stl',
    function (geometry) {
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Create material
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    (error) => {
        console.log(error);
    }
);

const topLight = new THREE.DirectionalLight(0xffffff, 1); // Fix the typo
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();