import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// import Venus from '../Assets/Models/scene.gltf';

import { useEffect, useRef } from 'react';

const ThreeCanvas = () => {

    useEffect(() => {
        console.log(document.querySelector("#myCanvas"))
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(400, window.innerWidth / window.innerHeight, 0.1, 1000);
    
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#myCanvas')
        });
    
        renderer.setPixelRatio(window.devicePixelRatio);
        camera.position.setZ(30);
    
        renderer.render(scene, camera);
    
        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
        const torus = new THREE.Mesh(geometry, material);
   
        console.log(torus);
        scene.add(torus);
    
        // function animate() {
        //     requestAnimationFrame( animate);
        //     torus.rotation.x += 0.1;
        //     renderer.render( scene, camera);
    
        // }
    
        // animate();
    }, [])

return(
    <canvas id="myCanvas" style={{width: 640, height: 480}} />
)
};

export default ThreeCanvas;