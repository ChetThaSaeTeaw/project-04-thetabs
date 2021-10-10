import React from 'react';
import './Topcontent.css';
import Top_Content from '../Image/topContentImage.png';

function Topcontent() {
    return (
        <div className="Top-Content">
            <img src={Top_Content} alt="Top_Content" />
            <div>
                <h2>These 31 Squid Game memes are so good they deserve the 45.6billion won prize money</h2> 
                <p>This show has played with my emotions</p>
            </div>
        </div>
    )
}

export default Topcontent;
