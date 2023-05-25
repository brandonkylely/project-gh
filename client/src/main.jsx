import React from 'react'
import ReactDOM from 'react-dom/client'
import {Canvas} from '@react-three/fiber'
import Scene from './Scene'
import './index.css'
import PageHero from './PageHero'
import PageLeft from './components/PageLeft'
import PageRight from './components/PageRight'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas className='webgl'>
      <Scene />
    </Canvas>
    <PageHero />
    <PageRight classes={'font-sigmar'} title={'wake'}/>
    <PageLeft classes={'font-vt323 text-4xl'} title={'eat'}/>
    <PageRight classes={'font-sigmar'} title={'read'}/>
  </React.StrictMode>,
)
