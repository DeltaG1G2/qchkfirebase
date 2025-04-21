import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, Menu } from 'lucide-react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <header className="header-section">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/">
            <img 
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/484183060_611216925276624_2363419216912594779_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=KGLmylPGo3sQ7kNvwGtLjpU&_nc_oc=Admd_34a3kiuFGdwIUjZAfgXNm95wrTIHrhZrp5afgAUBxEygsZP6IbjEB8h5O-71uZln0KhHuGIvkZnFPaHBREi&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&oh=03_Q7cD2AEPcyCbtTvPuMq_9P897Q0LHtvpT2nFq1EH8G0tA-PseA&oe=682DC401" 
              alt="HoaKhanh Advertising Logo" 
              className="logo-image"
            />
          </Link>
        </div>
        
        <div className="header-mobile-controls">
          <button className="search-toggle" onClick={toggleSearch}>
            <Search size={20} />
          </button>
          <button className="mobile-menu-btn" onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>

        <div className={`search-container ${searchVisible ? 'mobile-visible' : ''}`}>
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
      </div>
      
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      
      <nav className={`navigation${mobileMenuOpen ? ' open' : ''}`}>
        <div className="nav-header">
          <span>Menu</span>
          <button className="close-menu" onClick={() => setMobileMenuOpen(false)}>✕</button>
        </div>
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" onClick={() => setMobileMenuOpen(false)}>Trang chủ</Link></li>
            <li className="nav-item"><Link to="/gioi-thieu" onClick={() => setMobileMenuOpen(false)}>Giới thiệu</Link></li>
            <li className="nav-item"><Link to="/dich-vu" onClick={() => setMobileMenuOpen(false)}>Dịch vụ</Link></li>
            <li className="nav-item"><Link to="/du-an" onClick={() => setMobileMenuOpen(false)}>Dự án</Link></li>
            <li className="nav-item"><Link to="/bang-gia" onClick={() => setMobileMenuOpen(false)}>Bảng giá</Link></li>
            <li className="nav-item"><Link to="/lien-he" onClick={() => setMobileMenuOpen(false)}>Liên hệ</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;