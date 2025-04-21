import React from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer

const Dichvu = () => (
  <>
    <Header /> {/* Include Header */}
    <div className="page-container">
      <h2>Dịch vụ</h2>
      <p>Đây là trang dịch vụ của Quảng Cáo Hoà Khánh.</p>
    </div>
    <Footer /> {/* Include Footer */}
  </>
);

export default Dichvu;