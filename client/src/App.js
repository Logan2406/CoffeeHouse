
import './App.css';
import AboutUs from './UI/AboutUs';
import Test from './UI/Test';
import Header from './UI/Header';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>       
       <Routes>
        <Route exact path="/Test" element={<Test/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
       </Routes>
       </Router>
    </div>
  );
}

export default App;
