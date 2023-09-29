import React, { useState, useEffect,useContext } from 'react';
import AppContext from './GlobalContext'

function App() {

  const { message, updateMessage } = useContext(AppContext)!;
  const { count, updateCount } = useContext(AppContext)!;

  return (
    <>
        SubPage ({count} - {message})

        <button onClick={() => {
          updateMessage("new value from SubPage");

          if(updateCount)
            updateCount(count ? count + 1 : 1);
        }}>
        Click me
      </button>
    </>
  );
}

export default App;
