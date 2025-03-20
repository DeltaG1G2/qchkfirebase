import HomePage from './Views/HomePage';  // Add this import
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dichvu from './Views/Dichvu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dich-vu" element={<Dichvu />} />
      </Routes>
    </Router>
  );
}

export default App;
