import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from "../public/Scene"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
