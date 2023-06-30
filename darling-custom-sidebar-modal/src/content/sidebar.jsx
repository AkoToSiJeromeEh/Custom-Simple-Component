import '../style/general.css'
import '../style/sidebar.css'
import React from 'react'

function Sidebar() {

    const [click , setClick] = React.useState(true);

    function ToggleMenu() {

        setClick(preval => !preval)
    }
  return (

    <>
    <div className='btn-toggle'>
    <button onClick={ToggleMenu}>
        <i className="fa-solid fa-bars"></i>
    </button>
    </div>
    <nav className={click ? 'main-container' : 'showSide main-container'}>
        
        <div className='first-item'>
            <h4>Darling Coding</h4>
            <button onClick={ToggleMenu}>
            <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div className='second-item'>
            <ul>
                <li><i className="fa-solid fa-house"></i> Home</li>
                <li><i className="fa-solid fa-people-group"></i> Team</li>
                <li><i className="fa-solid fa-folder-open"></i> Projects</li>
                <li><i className="fa-solid fa-calendar-days"></i> Calendar</li>
                <li><i className="fa-solid fa-file"></i> Documents</li>
            </ul>

        </div>
        <div className='third-item'>
        <ul>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
                <li><i className="fa-brands fa-linkedin"></i></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Sidebar