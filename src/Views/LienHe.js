import React from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer

const LienHe = () => (
  <>
    <Header /> {/* Include Header */}
    <div className="page-container">
      <h2>Liên hệ</h2>
      <p>Đây là trang liên hệ với Quảng Cáo Hoà Khánh.</p>
    </div>
    <Footer /> {/* Include Footer */}
  </>
);

export default LienHe;