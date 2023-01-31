import { useState } from 'react'
import './App.css'
import Info from './components/Info'
import Products from './components/Products'
import MyButton from './components/UI/Button/MyButton'
import Modal from './components/UI/Modal/Modal'
import useModal from './hooks/useModal'
import { incDeposit } from './redux/depositSlice'
import { useAppDispatch } from './redux/hooks'

function App() {

  const { isOpen, toggle } = useModal()
  const [input, setInput] = useState(0)
  const dispatch = useAppDispatch()
  const onClickHandler = () => {
    dispatch(incDeposit(input))
    toggle()
  }

  return (
    <div className="App">
      <Products />
      <Info />
      <div>
        <MyButton onClick={toggle}>Внести деньги</MyButton>
        <MyButton>Получить сдачу</MyButton>
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <input type="number" value={input} onChange={e => setInput(+e.target.value)} />
        <button onClick={onClickHandler}>Внести</button>
      </Modal>
    </div>
  )
}

export default App
