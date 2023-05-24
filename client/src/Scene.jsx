import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function Scene() {
  const cubeRef = useRef()

  useFrame((state, delta) => 
  {
      // console.log(state.camera)
      // console.log(state.clock.elapsedTime)
      // const angle = state.clock.elapsedTime/4
      // state.camera.position.x = Math.sin(angle)*8
      // state.camera.position.z = Math.cos(angle)*8
      // state.camera.lookAt(0,0,0)
      
      cubeRef.current.rotation.y += delta * 0.15
      cubeRef.current.rotation.x += delta * 0.15
      // groupRef.current.rotation.y +=delta*0.01
  })

  return (<>
    <mesh scale={1} ref={cubeRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh> 
    <directionalLight position={[1, 0.3, 0]}/>
    <ambientLight intensity={0.1}/>
  </>

  )
}

export default Scene
