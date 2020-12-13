import React, { useEffect, useState } from 'react';
import "./css/Nav.css"
function Nav(){
    const [show, handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
        return () =>{
            window.removeEventListener("scroll")
        }
    }, [])

    return(
        <div className={`nav ${show && "nav-black"}`}>
            <img className="nav-logo"
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                alt="NETFLIX"
            />

            <img className="nav-avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="NETFLIX"
            />
        </div>
    )
}

export default Nav