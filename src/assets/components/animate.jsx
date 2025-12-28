import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 1. Setup Scene, Camera, and Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 2, 8); // Position the camera to see the car

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Add Lighting (Crucial for cars to look metallic/shiny)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// 3. Load the Wagon R Model
const loader = new GLTFLoader();
loader.load('path/to/wagon_r.glb', (gltf) => {
    const carModel = gltf.scene;
    scene.add(carModel);
    
    // Adjust scale/position if the model is too big or small
    carModel.scale.set(1, 1, 1); 
    console.log("Wagon R Loaded!");
}, undefined, (error) => {
    console.error("Error loading model:", error);
});

// 4. Interaction Controls (Allows user to rotate the car)
const controls = new OrbitControls(camera, renderer.domElement);

// 5. Animation Loop
function Animate() {
    requestAnimationFrame(Animate);
    controls.update();
    renderer.render(scene, camera);
}
Animate();