import { useState } from 'react';
import { getDocs, query, collection, where } from 'firebase/firestore';
import { db } from '../firebase.js';
import './Login.css';
import { Lock, User } from 'lucide-react'; // Added new icons

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const usersRef = collection(db, 'user');
      const q = query(usersRef, 
        where('username', '==', username),
        where('password', '==', password)
      );
      
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        alert('Login successful!');
        window.location.href = '/quan-ly'; // Changed from '/dich-vu'
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h2>Đăng nhập hệ thống</h2>
          <p>Quản lý sản phẩm Quảng Cáo Hoà Khánh</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <User className="input-icon" />
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <Lock className="input-icon" />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;