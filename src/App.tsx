import { useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import Cart from './components/Cart'
import ControlPanel from './components/ControlPanel'
import Info from './components/Info'
import InputForm from './components/InputForm'
import Products from './components/Products'
import Modal from './components/UI/Modal/Modal'
import useModal from './hooks/useModal'

function App() {

  const { isOpen, toggle } = useModal()


  return (
    <div className="App">
      <Balance />
      <Products />
      <Info />
      <ControlPanel toggle={toggle} />
      <Cart />
      <Modal isOpen={isOpen} toggle={toggle}>
        <InputForm isOpen={isOpen} toggle={toggle} />
      </Modal>
    </div>
  )
}

export default App
