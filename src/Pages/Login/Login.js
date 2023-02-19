import React, { useContext, useEffect, useState } from "react";
import { Field } from "../../Components";
import "./Login.style.css";
import moment from "moment/moment";
import { ReactComponent as LoginIcon } from '../../assets/icons/login.svg';
import profilePicture from '../../assets/images/photo_profile.png'
import { getLoginContext } from "../../Context";

const LoginContext = getLoginContext();

function Login({}){

    const {setLogin} = useContext(LoginContext);
    const [currentTime, setCurrentTime] = useState(getTime());


    function getTime(){
        return moment().format('ddd MMM DD  H:mm A')
    }

    useEffect(() => {

        let timeInterval = setInterval(updateTime, 10000)

        return () => {
            clearInterval(timeInterval)
        }
    }, [])

    function updateTime(){
        setCurrentTime(getTime())
    }


    function handleLogin(e){

        e.preventDefault();

        setLogin(true);

    }


    return <div className={"login-unlocked full-screen"}>
        
        <div className="top-corner">
                <h5>{currentTime}</h5>
        </div>


        <form id="login_form" onSubmit={handleLogin}>

            <div className="picture-container">
                <img id="login_profile_picture" alt="Profile picture" src={profilePicture} />
            </div>

            <h2>Antoine LE BORGNE</h2>

            <Field placeholder={'Enter password'} className={'login'} password />
        

        </form>

    </div>

}


function LoginMobile(){


    return <div>

        


    </div>

}

export default Login;
export {
    LoginMobile
}