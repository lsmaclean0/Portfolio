import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Home />}></Route>         
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
