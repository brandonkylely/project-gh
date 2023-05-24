// import 

function Scene() {

  return (<>
    <mesh scale={3}>
      <sphereGeometry />
      <meshStandardMaterial />
    </mesh> 
    <ambientLight intensity={0.1}/>
  </>

  )
}

export default Scene
