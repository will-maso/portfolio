import './App.css';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import Contact from './components/Contact';
// import About from './components/About';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import spaceImg from './space.jpg';

function App() {
  // const [darkmode, setDarkMode] = useState(false);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshStandardMaterial({
    color: 0xff6347,
    wireframe: true,
  });
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(20, 20, 20);
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);
  const controls = new OrbitControls(camera, renderer.domElement);

  function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x, y, z);
    scene.add(star);
  }

  Array(200).fill().forEach(addStar);

  const spaceTexture = new THREE.TextureLoader().load(spaceImg);
  scene.background = spaceTexture;

  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
  }

  document.body.onscroll = moveCamera;
  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
  // const toggleTheme = () => {
  //   setDarkMode((currDarkmode) => {
  //     return !currDarkmode;
  //   });
  // };

  // return (
  //   <BrowserRouter>
  //     {/* <div className={`App__${darkmode ? 'Light' : 'Dark'}`}>
  //       <NavBar />
  //       <button
  //         onClick={() => toggleTheme()}
  //         className={`button__${darkmode ? 'Dark' : 'Light'}`}
  //       >
  //         {darkmode ? 'Dark' : 'Light'}mode
  //       </button>
  //       <Routes>
  //         <Route path='/' element={<Home />}></Route>
  //         <Route path='/Contact' element={<Contact />}></Route>
  //         <Route path='/About' element={<About />}></Route>
  //       </Routes>
  //     </div> */}
  //   </BrowserRouter>
  // );
}

export default App;
