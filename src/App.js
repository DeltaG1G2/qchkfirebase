import HomePage from './Views/HomePage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dichvu from './Views/Dichvu';
import Login from './Views/Login';
import UserQuanLy from './Views/UserQuanLy'; // Import UserQuanLy component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dich-vu" element={<Dichvu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quan-ly" element={<UserQuanLy />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
