import React from 'react'
import '../style/Modal.css';
function Modal() {

  const [isShow , setShow] = React.useState(true)
  function HandleModal(){setShow(prevVal => !prevVal)}
 
  return (
    <main className='main-container'>
        <div className={isShow ? 'main-item-1' : 'main-item-1 show'}>
            <div className='header'>
            <h1>Darling Trivia</h1>
             <button onClick={HandleModal}>
             <i className="fa-solid fa-xmark"></i>
             </button>
            </div>
            <hr />
            <p>Darling is an ambitious couple of students deeply passionate about web development. Their journey is fueled by the desire to master both front-end and back-end engineering. With unwavering dedication, they diligently immerse themselves in the ever-evolving world of coding languages, frameworks, and design principles. Their shared aspiration is to excel in creating dynamic and visually stunning websites, while also mastering the intricacies of server-side functionality. Darling&#39;s commitment, coupled with their collaborative spirit, sets them on a path towards becoming versatile and skilled professionals in the realm of web development i love my darling so much.</p>
            <hr />
            <small className='p-2'>&copy; 2023 Darling | All Rights Reserved.</small>
        </div>
        <div className='main-item-2'>
            <button onClick={HandleModal}>
                Toggle Me
            </button>
        </div>
    </main>
  )
}

export default Modal