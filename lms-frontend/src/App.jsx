import './App.css';

import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';


function App() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0);

  return (
    <> 
    <Routes>
      <Route path="/" element={<Homepage />}>
        </Route>
    </Routes>
       
    </>
  )
}

export default App
