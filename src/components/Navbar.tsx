import React, {useState} from 'react'
import {Navitem} from "./Navitem";
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './Navbar.css'

function Navbar()
{
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <nav className={'navbar'}>

            <div className='navbar-container'>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    <p className='nav-title'>React Creator</p>
                </div>
                

                <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                    <Navitem title={"Home"} url={"/"}/>
                    <Navitem title={"Creator"} url={"/creator"}/>
                    <Navitem title={"Login"} url={"/login"}/>
                    <Navitem title={"News"} url={"/news"}/>
                </ul>

            </div>
        </nav>

    )
}

export default Navbar

