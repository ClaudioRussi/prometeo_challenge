import './App.css';
import LoginPage from './pages/LoginPage';
import BankPage from './pages/BankPage';
import {createContext, useEffect, useState} from 'react';
import SessionContext from './contexts/SessionContext';
import Wrapper from './pages/Wrapper';

function App() {
  const [sessionKey, setSessionKey] = useState();
  useEffect(() => {
    loadSession();
  }, []);

  const loadSession = () => {
    setSessionKey(window.localStorage.getItem("key"));
  }

  const saveSession = (key) => {
    setSessionKey(key);
    window.localStorage.setItem("key", key);
  }
  return (
    <SessionContext.Provider value={{sessionKey, saveSession}}>
      <div className="App">
        <Wrapper>
          {sessionKey ? <BankPage/> : <LoginPage/>}
        </Wrapper>
      </div>
    </SessionContext.Provider>
  );
}

export default App;
