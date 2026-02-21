import './stylesheets/App.css';
import Phreddit from './components/phreddit.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  // console.log("did we make it to app");
  return (
    <Router>
    <Routes>
       
        <Route path="/" element={<Phreddit />} />
    </Routes>
</Router>
  );
}

export default App;