import React, { useEffect, useState } from 'react';
import './App.css';

const App = () =>  {
  const [num,setNum] = useState(0);

  useEffect(()=>{
    document.title=`you click me ${num} times`
  })

  return (
    <>
      <button onClick={()=>{
        setNum(num + 1)
      }}>Click Me {num}</button>
    </>
  );
}

export default App;
