import { useFrame } from "@react-three/fiber"
import { useRef, useEffect, useState } from "react"
import { PerspectiveCamera } from "@react-three/drei"

function Scene() {
  let [cameraPositionY, setCameraPositionY] = useState(0)
  const cubeRef = useRef()

  useFrame((state, delta) => 
  {
    
      cubeRef.current.rotation.y += delta * 0.15;
      cubeRef.current.rotation.x += delta * 0.15;
  })

  let scrollY = window.scrollY

  useEffect(() => {
    const onScroll = (event) => {
      scrollY = window.scrollY;
      setCameraPositionY(scrollY/200)
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
  <PerspectiveCamera 
  // position-x={cameraPositionX}
  position-y={cameraPositionY}
  > 
    <mesh scale={1} ref={cubeRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh> 
    <directionalLight position={[1, 0.3, 0]}/>
    <ambientLight intensity={0.1}/>
  </PerspectiveCamera>
  </>
  )
}

export default Scene
