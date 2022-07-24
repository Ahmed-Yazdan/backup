import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import Count from './Compononets/Count';
import Portal from './Compononets/Portal';

function App() {
  const [users, setUsers] = useState();
  const [state, dispatch] = useReducer();
  return (
    <div className="App">
      <Count/>
      <Portal/>
    </div>
  );
}

export default App;
