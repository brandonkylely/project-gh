import { useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useRef, useEffect, useState } from "react"
import { Float, Html, PerspectiveCamera, OrbitControls } from "@react-three/drei"
import { useControls } from 'leva'
import { Perf } from "r3f-perf"
import Model from "./components/Model"

function Scene() {
  let [cameraPositionY, setCameraPositionY] = useState(0)
  const cubeRef = useRef()

  const deskModel = useLoader(GLTFLoader, './Desk.glb')
  // console.log(deskModel)

  const { visible } = useControls({
    visible: false
  })



  useFrame((state, delta) => 
  {
    // cubeRef.current.rotation.y += delta * 0.15;
    // cubeRef.current.rotation.x += delta * 0.15;
  })

  let scrollY = window.scrollY

  useEffect(() => {
    const onScroll = (event) => {
      scrollY = window.scrollY;
      console.log(scrollY);
      setCameraPositionY(scrollY/200);
    };
      
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  const cursor = {}
  cursor.x = 0
  cursor.y = 0

  useEffect(() => {
    const onMouseMove = (event) => {
      // console.log(event)
      // cursor.x = event.clientX / 200
      // cursor.y = event.clientY / 200
    };
      
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  },[])

  return (<>
  {/* <OrbitControls></OrbitControls> */}

  {visible && <Perf position="top-left" />}

  <PerspectiveCamera 
  // position-x={cameraPositionX}
  position-y={cameraPositionY}
  > 
    {/* <mesh scale={1} ref={cubeRef}> */}
      {/* <boxGeometry /> */}
      {/* <meshStandardMaterial /> */}
    {/* </mesh>  */}

    <ambientLight intensity={0.1}/>
    <group>
    <directionalLight position={[1, 0.3, 0]}/>
      <Model modelUrl={'./Desk.glb'} scale={1.2} position={[2.0, -0.4, 0.9]} rotation={[Math.PI*0.1, Math.PI*0.5, 0]} 
      debug={true}/>
    </group>
  </PerspectiveCamera>
  </>
  )
}

export default Scene
