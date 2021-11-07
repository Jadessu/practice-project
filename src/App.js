import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import Landing from './Pages/Landing/Landing';
import Shop from './Pages/Shop/Shop';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
            
        </Routes>
       
        <Routes>
          <Route exact path="/shop" element={<Shop/>}/>
            
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
