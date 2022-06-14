import * as React from 'react';
import './App.css';
import { NavBar, SobreMi, Datos, Contacto, Copyright } from './components';

function App() {
  return (
    <div className='App'>
      <header>
        <NavBar />
      </header>
      <body>
        <SobreMi />
        <Datos />
        <Contacto />
      </body>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
