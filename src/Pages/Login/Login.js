import React, { useContext, useEffect, useState } from "react";
import { Field } from "../../Components";
import "./Login.style.css";
import moment from "moment/moment";
import { ReactComponent as LoginIcon } from '../../assets/icons/login.svg';
import profilePicture from '../../assets/images/photo_profile.png'
import { getLoginContext } from "../../Context";

const LoginContext = getLoginContext();

function Login({}){

    const [unlock, setUnlock] = useState(false);

    const {setLogin} = useContext(LoginContext);

    useEffect(() => {

        if(!unlock){
            document.addEventListener('keypress', handleUnlock)
        }else{
            document.removeEventListener('keypress', handleUnlock)
        }
        
        return () => {
            document.removeEventListener('keypress', handleUnlock)
        }

    }, [unlock])


    function handleUnlock(){
        setUnlock(true);
    }


    function handleLogin(e){

        e.preventDefault();

        setLogin(true);

    }


    return <div className={unlock ? "login-unlocked full-screen" : "login-locked full-screen"}>
        
        {unlock ? <form id="login_form" onSubmit={handleLogin}>

            <img id="login_profile_picture" alt="Profile picture" src={profilePicture} />
            
            <h2>Antoine LE BORGNE</h2>

            <div id="valid-login-input">
                <Field placeholder={'Password'} className={'login'} password />
                <div onClick={handleLogin} className="login-button">
                        <LoginIcon />
                </div>
            </div>

        </form>
        :
        <>
            <div className="time">
                <h1>{moment().format('DD/MM/YYYY')}</h1>
                <h1>{moment().format('HH:mm')}</h1>
            </div>
        </>
        }
    </div>

}


export default Login;