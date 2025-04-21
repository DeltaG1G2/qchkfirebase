import React from 'react';
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer

const DuAn = () => (
  <>
    <Header /> {/* Include Header */}
    <div className="page-container">
      <h2>Dự án</h2>
      <p>Đây là trang giới thiệu các dự án tiêu biểu của Quảng Cáo Hoà Khánh.</p>
    </div>
    <Footer /> {/* Include Footer */}
  </>
);

export default DuAn;