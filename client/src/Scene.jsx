import { useFrame } from "@react-three/fiber"
import { useRef, useEffect, useState } from "react"
import { PerspectiveCamera } from "@react-three/drei"

function Scene() {
  let [cameraPosition, setCameraPosition] = useState(0)
  const cubeRef = useRef()

  useFrame((state, delta) => 
  {
    
      cubeRef.current.rotation.y += delta * 0.15
      cubeRef.current.rotation.x += delta * 0.15
  })

  let scrollY = window.scrollY

  useEffect(() => {
    const onScroll = (event) => {
      scrollY = window.scrollY;
      setCameraPosition(scrollY/200)
    };

      
    window.addEventListener('scroll', onScroll);
    console.log(scrollY)
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (<>
  <PerspectiveCamera position-y={cameraPosition} > 
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
