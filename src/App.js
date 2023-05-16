import React from 'react';
import './App.css';
import ParentComponent from "./components/ParentComponent";
import OrderForm from "./components/OrderForm";

function App() {

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <div>
          <ParentComponent />
          <OrderForm />
        </div>

    </>
  );
}

export default App;
