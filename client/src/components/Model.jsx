import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useControls } from "leva"

function Model(props) {
  const model = useLoader(GLTFLoader, props.modelUrl)


  const { scale1, position1, rotation1 } = useControls({
    scale1:
    {
      value: 1,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    position1:
    {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01
    },
    rotation1:
    {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01
    }
  })
  
  return (<>
  {props.debug? 
    <primitive 
      object={ model.scene }
      scale={scale1}
      position={[position1.x, position1.y, position1.z]}
      rotation={[rotation1.x, rotation1.y, rotation1.z]} 
    /> 
    : 
    <primitive 
      object={ model.scene }
      scale={props.scale}
      position={props.position}
      rotation={props.rotation} 
    />
    }
  </>

  )
}

export default Model