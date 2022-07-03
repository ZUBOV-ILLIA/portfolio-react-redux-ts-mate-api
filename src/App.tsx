import React from 'react';
import './App.css';
import { Users } from './components/users';

const App:React.FC = () => {
  return (
    <div className="App">
      <h1>
        HELLO, I AM A TITLE!
      </h1>

      <Users />
    </div>
  );
}

export default App;
