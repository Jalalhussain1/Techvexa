import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Cart from './components/Cart'
import PricingCards from './components/PricingCards'
import Client from './components/Client'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-200'>

      <Hero />
      <Cart />
      <PricingCards />
      <Client />
    </div>
  )
}

export default App
