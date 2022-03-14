import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import NavBar from './navBar/navbar';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
        <main className="container">
          <SortingVisualizer />
        </main>
    </React.Fragment>
  );
}

export default App;