import React from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer

const GioiThieu = () => (
  <>
    <Header /> {/* Include Header */}
    <div className="page-container">
      <h2>Giới thiệu</h2>
      <p>Đây là trang giới thiệu về công ty Quảng Cáo Hoà Khánh.</p>
    </div>
    <Footer /> {/* Include Footer */}
  </>
);

export default GioiThieu;