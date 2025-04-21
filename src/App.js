import HomePage from './Views/HomePage';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dichvu from './Views/Dichvu';
import Login from './Views/Login';
import UserQuanLy from './Views/UserQuanLy'; // Import UserQuanLy component
import GioiThieu from './Views/GioiThieu';
import DuAn from './Views/DuAn';
import BangGia from './Views/BangGia';
import LienHe from './Views/LienHe';
import ProductDetail from './Views/ProductDetail'; // Import ProductDetail component
import { AuthProvider, useAuth } from './AuthContext'; // Import AuthProvider and useAuth

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dich-vu" element={<Dichvu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quan-ly" element={<ProtectedRoute><UserQuanLy /></ProtectedRoute>} /> {/* Protect this route */}
          <Route path="/gioi-thieu" element={<GioiThieu />} />
          <Route path="/du-an" element={<DuAn />} />
          <Route path="/du-an/:productId" element={<ProductDetail />} /> {/* Add product detail route */}
          <Route path="/bang-gia" element={<BangGia />} />
          <Route path="/lien-he" element={<LienHe />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
