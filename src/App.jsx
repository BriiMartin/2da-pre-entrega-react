import React, { useState } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './container/ItemListContainer/itemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer/itemDetailContainer';

function App() {

  const [categoria, setCategoria] = useState('todos')

  return (
    <><div>
      <NavBar handleCategoria={setCategoria} />
    </div>
      <section>
        <ItemListContainer categoria={categoria} />
        <ItemDetailContainer idProduct={5}/>
      </section>
    </>
  );
}

export default App;

