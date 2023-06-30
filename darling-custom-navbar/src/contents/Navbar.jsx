import '../style/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

function Navbar() {
     const [isClicked , setClicked] = React.useState(true);

     function HandleClicks() {

        setClicked(prevVal => !prevVal)
     }
  return (
    <nav className='nav-container'>
        <div className='nav-item-1'>
            <h1>Darling Artsu </h1>
        </div>
        <div className={isClicked ? 'hideNavLinks nav-item-2' : 'nav-item-2'}>

            <ul>
                <li>Da Alien Series</li>
                <li>Mochiiro Series</li>
                <li>Yssa Series</li>
                <li>Icons</li>
                <li>Projects</li>
            </ul>
        </div>
        <div className='btn-container'>
            <button onClick={HandleClicks}>
             {isClicked ?  <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faXmark}/>}
            </button>
        </div>
    </nav>
  )
}

export default Navbar