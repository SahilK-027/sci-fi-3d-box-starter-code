import "./styles.css";
import * as THREE from "three";

/**
 * Base Setup
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Texture Loading
 */

// Load textures

// Set texture properties

/**
 * Object Creation
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material with multiple textures
const material = new THREE.MeshNormalMaterial();

// Create mesh
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.y = Math.PI;
scene.add(mesh);

/**
 * Responsive Canvas
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Perspective camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(0, 0, 3);
scene.add(camera);

// Orbit controls

/**
 * Lighting
 */
// Directional light

// Ambient light

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animation Loop
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Rotate the cube on X, Y, Z axes
  mesh.rotation.x = elapsedTime * 0.7;
  mesh.rotation.y = elapsedTime * 0.7;

  // Render scene
  renderer.render(scene, camera);

  // Request next frame
  window.requestAnimationFrame(tick);
};

tick();
