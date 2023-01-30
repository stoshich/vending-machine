import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import { products } from './items/items'

function App() {

  return (
    <div className="App">
      <Products items={products} />
    </div>
  )
}

export default App
