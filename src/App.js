import React from 'react';
import './App.css';
import ParentComponent from "./components/ParentComponent";
import OrderForm from "./components/OrderForm";
import ReactForm from "./components/ReactForm"
import Logo from "./assets/screenshot-logo.png"
import ReactFormV1 from "./components/ReactFormV1";

function App() {

  return (
    <>
      <header className="outerContainer">
        <div className="innerContainer">
        <img src={Logo} alt="company logo"/>
        </div>
      </header>
      <main className="outerContainer">
        <div className="innerContainer, twoItems">
          <ParentComponent />
          <OrderForm />
          <ReactFormV1 />
          <ReactForm />
        </div>
      </main>
        <footer className="outerContainer">
          <div className="innerContainer">
              <h6>Created by: Damon.</h6>
          </div>
        </footer>

    </>
  );
}

export default App;
