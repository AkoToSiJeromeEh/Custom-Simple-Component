import React from 'react'
import '../style/general.css'
import '../style/modal.css';

function Modal() {
    const [openModal , setModal] = React.useState(true);

    function ToggleModal() {
        setModal(preval => !preval)
    }
  return (
    <>
    <div className='modal-btn'>
    <button onClick={ToggleModal}><i className="fa-solid fa-computer-mouse"></i> Hey There , My Name is Modal</button>
    </div>
    <div className={openModal ? 'Modal-container' : 'Modal-container Open'}>
        <div className='bg-cont'>
        <div className='button-cont'>
         <button onClick={ToggleModal} >
         <i className="fa-solid fa-xmark"></i>
         </button>
        </div>
        <div className='content-content'>
            <h2>I LOVE MY DARLING ALYSSA</h2>
        </div>
        </div>
    </div>
    </>
  )
}

export default Modal