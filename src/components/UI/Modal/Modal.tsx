import React from 'react'
import classes from './Modal.module.css'

interface ModalType {
  children?: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const Modal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <div className={classes.modalOverlay} onClick={props.toggle}>
          <div onClick={e => e.stopPropagation()} className={classes.modalBox}>
            {props.children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal