import React, { useState } from 'react';
import './Dichvu.css';
import { ArrowRight, Menu, Search, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="header-section">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/">
            <img 
              src="/images/logo-quang-cao-sai-gon-red-vuong-1.png" 
              alt="HoaKhanh Advertising Logo" 
              className="logo-image"
            />
          </Link>
        </div>
        <div className="search-container">
          <div className="search-input">
            <input type="text" placeholder="Nhập từ khóa để tìm kiếm..." />
            <button className="search-button">
              <Search className="search-icon" />
            </button>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <Mail className="contact-icon" />
            <span>quangcaohk@gmail.com</span>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" />
            <span>0787 545 842</span>
          </div>
        </div>
        <button className="mobile-menu-btn" onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu />
        </button>
      </div>
      <nav className={`navigation${mobileMenuOpen ? ' open' : ''}`}>
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Trang chủ</Link></li>
            <li className="nav-item"><Link to="/gioi-thieu">Giới thiệu</Link></li>
            <li className="nav-item"><Link to="/dich-vu">Dịch vụ</Link></li>
            <li className="nav-item"><Link to="/du-an">Dự án</Link></li>
            <li className="nav-item"><Link to="/bang-gia">Bảng giá</Link></li>
            <li className="nav-item"><Link to="/lien-he">Liên hệ</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>THÔNG TIN LIÊN HỆ</h3>
              <ul>
                <li>Công Ty TNHH Phát Triển Quảng Cáo Hoà Khánh</li>
                <li>Hotline: 0787 545 842</li>
                <li>Email: quangcaohk@gmail.com</li>
                <li>CS1: 35 NGUYỄN LƯƠNG BẰNG, Q.LIÊN CHIỂU, TP.ĐÀ NẴNG</li>
                <li>CS2: 155 NGUYỄN VĂN LINH, Q.HẢI CHÂU, TP ĐÀ NẴNG</li>
                <li>XSX: 24 ĐƯỜNG NGUYỄN THỊ BẢY, Q THANH KHÊ, TP ĐÀ NẴNG</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>HỖ TRỢ KHÁCH HÀNG</h3>
              <ul>
                <li>Phụ trách: Gia Bảo</li>
                <li>Hotline: 0787 65 65 84</li>
                <li>Zalo: 0787 65 65 84</li>
                <li>Email: quangcaohk@gmail.com</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>XƯỞNG SẢN XUẤT</h3>
              <div className="factory-image">
                <img src="/placeholder.svg" alt="Factory" />
              </div>
            </div>
            <div className="footer-column">
              <h3>DỊCH VỤ</h3>
              <ul>
                <li>Làm bảng hiệu</li>
                <li>Làm chữ nổi</li>
                <li>Bảng hiệu alu</li>
                <li>Bảng hiệu hộp đèn</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="copyright-container">
          <p>© 2025 Quảng Cáo Hoà Khánh. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

function Dichvu() {
  const services = [
    {
      id: 1,
      title: 'Bảng Hiệu Aluminium',
      image: '/images/bang-hieu-alu.jpg',
      description: 'Thi công bảng hiệu Aluminium chuyên nghiệp, độ bền cao',
      details: [
        { label: 'Thời gian thi công', value: '3-5 ngày' },
        { label: 'Bảo hành', value: '2 năm' },
        { label: 'Chi phí', value: 'Liên hệ' }
      ]
    },
    {
      id: 2,
      title: 'Hộp Đèn Mica',
      image: '/images/bang-hieu-quang-cao-dep-trung-tam-anh-ngu.jpg',
      description: 'Hộp đèn quảng cáo sử dụng vật liệu Mica cao cấp',
      details: [
        { label: 'Thời gian thi công', value: '2-4 ngày' },
        { label: 'Bảo hành', value: '18 tháng' },
        { label: 'Chi phí', value: 'Liên hệ' }
      ]
    },
    {
      id: 3,
      title: 'Chữ Nổi Inox',
      image: '/images/bang-hieu-spa-dianva.jpg',
      description: 'Chữ nổi inox sang trọng, phù hợp cho biển hiệu công ty',
      details: [
        { label: 'Thời gian thi công', value: '5-7 ngày' },
        { label: 'Bảo hành', value: '3 năm' },
        { label: 'Chi phí', value: 'Liên hệ' }
      ]
    }
  ];

  return (
    <div className="service-page">
      <Header />
      <div className="section-container">
        <h2 className="section-title">DỊCH VỤ CỦA CHÚNG TÔI</h2>
        <div className="service-grid">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <img 
                src={service.image} 
                alt={service.title} 
                className="service-image"
              />
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-details">
                  {service.details.map((detail, index) => (
                    <div key={index} className="detail-item">
                      <span className="detail-label">{detail.label}:</span>
                      <span className="detail-value">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="price-actions">
          <Link to="/bang-gia" className="view-price">
            XEM BẢNG GIÁ CHI TIẾT
            <ArrowRight className="arrow-icon" />
          </Link>
          <Link to="/lien-he" className="register-button">
            Đăng ký tư vấn dịch vụ
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dichvu;