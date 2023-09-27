import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const[Show, handShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handShow(true);
        }else{
            handShow(false);
        }
    }

    useEffect(() => {
window.addEventListener('scroll', transitionNavBar);
return ()=> window.removeEventListener('scroll', transitionNavBar);
    }, []);
  return (
    <div className={`nav ${Show && 'nav_black'}`}>
        <div className='nav_content'>
        <img className='nav_log'
        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>

        <img className='nav_avator'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
{/* <h1>This is the nav</h1> */}
</div>
    </div>
  )
}

export default Nav