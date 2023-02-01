import { useState } from 'react'
import './App.css'
import ControlPanel from './components/ControlPanel'
import Info from './components/Info'
import InputForm from './components/InputForm'
import Products from './components/Products'
import Modal from './components/UI/Modal/Modal'
import useModal from './hooks/useModal'
import { useAppSelector } from './redux/hooks'

function App() {

  const { isOpen, toggle } = useModal()
  const balance = useAppSelector(state => state.money)
  let total = 0
  let key: keyof typeof balance

  for (key in balance) {
    if (balance[key]) total += +key * +balance[key]
  }

  return (
    <div className="App">
      <div>Баланс: {total}</div>
      <Products />
      <Info />
      <ControlPanel toggle={toggle} />
      <Modal isOpen={isOpen} toggle={toggle}>
        <InputForm isOpen={isOpen} toggle={toggle} />
      </Modal>
    </div>
  )
}

export default App
