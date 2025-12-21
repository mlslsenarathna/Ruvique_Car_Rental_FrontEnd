import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const WagonRCanvas = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x111111);

        const camera = new THREE.PerspectiveCamera(45, currentRef.clientWidth / currentRef.clientHeight, 0.1, 1000);
        camera.position.set(8, 4, 8);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        currentRef.appendChild(renderer.domElement);


        const ambientLight = new THREE.AmbientLight(0xffffff, 2);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
        directionalLight.position.set(5, 10, 7);
        scene.add(directionalLight);


        const grid = new THREE.GridHelper(10, 10, 0x888888, 0x444444);
        scene.add(grid);

        const loader = new GLTFLoader();


        loader.load('/wagon_r.glb',
            (gltf) => {
                const model = gltf.scene;

                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center);
                model.position.y = 0;


                model.scale.set(2, 2, 2);

                scene.add(model);
                console.log("Wagon R loaded successfully!");
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error("COULD NOT FIND FILE: Ensure wagon_r.glb is in your public folder.");
            }
        );


        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();


        const handleResize = () => {
            camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            currentRef.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default WagonRCanvas;