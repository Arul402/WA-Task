// import logo from './logo.svg';
import './App.css';
import Details from './components/details';
import Katturai from './components/katturai';
import Katturai_Details from './components/Katturai_Details';
import Menu from './components/menu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    // <div className="App">
      <>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Routes>
          <Route path='/menu' element={ <Menu/>} />
          <Route path='/detail/:id' element={ <Details/>} />
          <Route path='/' element={ <Katturai/>} />
          <Route path='/katturai-details' element={ <Katturai_Details/>} />
          </Routes>
          </Router>
          <footer className='footer'>
            Designed and developed by Arul
          </footer>
          </>
  );
}

export default App;
