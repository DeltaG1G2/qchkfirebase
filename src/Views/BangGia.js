import React from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer

const BangGia = () => (
  <>
    <Header /> {/* Include Header */}
    <div className="page-container">
      <h2>Bảng giá</h2>
      <p>Đây là trang bảng giá dịch vụ của Quảng Cáo Hoà Khánh.</p>
    </div>
    <Footer /> {/* Include Footer */}
  </>
);

export default BangGia;