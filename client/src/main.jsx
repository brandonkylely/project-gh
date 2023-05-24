import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import {Canvas} from '@react-three/fiber'
import Scene from './Scene'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas className='webgl'>
      <Scene />
    </Canvas>
    <HomePage />
  </React.StrictMode>,
)
