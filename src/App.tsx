import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Appbar from './components/Appbar';
import Stocks from './components/Stocks';

function App() {

  return (

    <div style={{width: "100vw",
        height: "100vh",
        backgroundColor: 'rgba(17 24 39 / 1.0)'
    }}
    >
      <Router>

          <Appbar />

          <Routes>
              <Route path={"/stocks/:id"} element={<Stocks />} />
              <Route path={"/"} element={<Landing />} />
          </Routes>
      </Router>

    </div>

  )

}

export default App;
