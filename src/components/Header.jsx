import { useContext } from 'react';
import { UserContext } from './UserContext';

import {Link} from 'react-router-dom'

export const Header = () => {
    const {value, setValue}= useContext(UserContext);
    const loginImg = window.localStorage.getItem("loginImg")
    const loginName = window.localStorage.getItem("loginName")
    
    

    return <section>
        <h1 className="Header"> House Of Board Games </h1>
        <div className='Login_Details'> 
        {value.avatar_url ? <div><img className="Login_img" src={value.avatar_url} alt="User's avatar." /></div>:
        loginImg ? <div><img className="Login_img" src={loginImg} alt="User's avatar." /></div>
        : <div><strong>☺</strong></div>} 
        <strong> {value.name ? value.name :
        loginName ? loginName : "Guest"}</strong>
        </div> 
        <button className="Log_Button" onClick={() => {
            window.localStorage.removeItem("loginImg")
            window.localStorage.removeItem("loginName")
            window.localStorage.removeItem("loginUsername")
            setValue("")}}> Log out </button> 
        <button className="Log_Button"><Link to='/users' > Log in </Link></button>
    </section>
}