// App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product'; // Import the Product component

function App() {
  return (
    <div className="App">
      <Product /> {/* Render the Product component */}
    </div>
  );
}

export default App;
