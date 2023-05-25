import { useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useRef, useEffect, useState } from "react"
import { Float, Html, PerspectiveCamera } from "@react-three/drei"
import { useControls } from 'leva'
import { Perf } from "r3f-perf"

function Scene() {
  let [cameraPositionY, setCameraPositionY] = useState(0)
  const cubeRef = useRef()

  const deskModel = useLoader(GLTFLoader, './Desk.glb')
  console.log(deskModel)

  const { visible } = useControls({
    Visible: true
})

  const { position1, position2 } = useControls({
    position1:
    {
        value: { x: 0, y: 0, z: 0 },
        step: 0.01
    },
    position2:
    {
        value: { x: 0, y: 0, z: 0 },
        step: 0.01
    }
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

  {visible && <Perf position="top-left" />}

  <PerspectiveCamera 
  // position-x={cameraPositionX}
  position-y={cameraPositionY}
  > 
    {/* <mesh scale={1} ref={cubeRef}> */}
      {/* <boxGeometry /> */}
      {/* <meshStandardMaterial /> */}
    {/* </mesh>  */}

    <directionalLight position={[1, 0.3, 0]}/>
    <ambientLight intensity={0.1}/>
    {/* <Float> */}
    <group>
      <Html
      transform
      wrapperClass="htmlScreen"
      distanceFactor={ 1.0 }
      position={ [ 0, 1.56, - 1.4 ] }
      rotation-x={ - 0.256 }
      >
        <iframe src="https://www.anaxi.app/" />
      </Html>
      <primitive 
      scale={1.2}
      object={ deskModel.scene }
      position={[2.0, -0.4, 0.9]}
      rotation={[Math.PI*0.1,Math.PI*0.5, 0]} 
      />
    </group>
    {/* </Float> */}
  </PerspectiveCamera>
  </>
  )
}

export default Scene
