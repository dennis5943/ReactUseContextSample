import React,{  createContext,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SubPage from './SubPage'
import AppContext from './GlobalContext';

function App() {
  const [message, updateMessage] = useState('initialValue');
  const [count,setCount] = useState(0);
  function updateCount(newCnt?:number){
    setCount(newCnt?newCnt:0)
  }
  return (
    <AppContext.Provider value={{message, updateMessage, count,updateCount}}>
        <div className="App">
            <header className="App-header">
            <div>Home ({count} - {message})</div>
        
            <SubPage />
            </header>
        </div>
    </AppContext.Provider>
  );
}

export default App;
