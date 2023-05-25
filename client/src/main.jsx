import React from 'react'
import ReactDOM from 'react-dom/client'
import Page1 from './components/Page1'
import {Canvas} from '@react-three/fiber'
import Scene from './Scene'
import './style.css'
import Page2 from './components/Page2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas className='webgl'>
      <Scene />
    </Canvas>
    <Page1 />
    <Page2 />
  </React.StrictMode>,
)
