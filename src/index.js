import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Desktop, Login } from './Pages';
import './index.style.css'
import { getLoginContext, getThemeContext } from './Context';
import { useDevice } from './Hooks';

const ThemeContext = getThemeContext();
const LoginContext = getLoginContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){

  const [theme, setTheme] = useState('light-theme');//default theming
  const [login, setLogin] = useState(false);
  const [device] = useDevice();

  useEffect(() => {

    console.log(device)

  }, [device])

  return <> 

    <LoginContext.Provider value={{login, setLogin}}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className={theme}>
          <div id='main_background' />

          {device === 'DESKTOP'? (!login ? <Login /> : <Desktop />) : (<></>)}

         
        </div>
      </ThemeContext.Provider>
    </LoginContext.Provider>
   
  </>
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

