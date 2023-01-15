import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Desktop, Login } from './Pages';
import './index.style.css'
import { getLoginContext, getThemeContext } from './Context';

const ThemeContext = getThemeContext();
const LoginContext = getLoginContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){

  const [theme, setTheme] = useState('dark-theme');
  const [login, setLogin] = useState(false);

  return <> 

    <LoginContext.Provider value={{login, setLogin}}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className={theme}>
          <div id='main_background' />
          {!login ? <Login /> : <Desktop />}
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

