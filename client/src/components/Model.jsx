import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

function Model(props) {
  const model = useLoader(GLTFLoader, props.modelUrl)
  
  return (<>
    <primitive 
      scale={props.scale}
      object={ model.scene }
      position={[2.0, -0.4, 0.9]}
      rotation={[Math.PI*0.1,Math.PI*0.5, 0]} 
    />
  </>

  )
}

export default Model