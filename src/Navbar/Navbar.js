import React , { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [ menuIcon , setMeneIcon ] = useState(true);
    return (
        <div className="Navbar-box">
            <img src="https://thetab.com/wp-content/themes/thetab-four/assets/_img/thetab-logo.png" alt="Brand_Logo" />
            <div className="language-box">UK<i class="fas fa-angle-down"></i></div>
            <div className="write-tips"><p>WRITE</p><p>TIPS</p></div>
            <div onClick={() => setMeneIcon(!menuIcon)}>{menuIcon ? <i class="fas fa-align-justify"></i> : <i class="fas fa-times"></i>}</div>
        </div>
    )
}

export default Navbar;
