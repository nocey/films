import React from 'react';
import Filmlist from './Components/Film List/Filmlist';
import Navi from './Components/Navi/Navi';

function App() {
  return (
    <div className="background">
      <Navi></Navi>
      <Filmlist></Filmlist>
    </div>
  );
}

export default App;
