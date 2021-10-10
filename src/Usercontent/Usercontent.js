import React  from 'react';
import './Usercontent.css';
import { topUserData } from './UserData.js';

function Usercontent() {
    const TopUser = topUserData.map((topuser , index) => {
        return (
           <div className="User-Content" key={index}>
               {topuser.timestamp}
               <div>
                    <img src={topuser.image} alt={topuser.username} />
                    <div>
                        <h5>{topuser.username} | Trash</h5>
                        <span>{topuser.country}</span>
                    </div>
                </div>   
           </div>
        )
    })
    console.log(TopUser)    
    return (
        <>
            {TopUser}                  
        </>
    )
}

export default Usercontent;
