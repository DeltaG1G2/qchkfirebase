import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import './HomePage.css';
import { Search, Phone, Mail, ArrowRight, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              src="/images/logo-quang-cao-sai-gon-red-vuong-1.png" 
              alt="HoaKhanh Advertising Logo" 
              className="logo-image"
            />
          </Link>
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
        <div className="header-mobile-controls">
          <button className="search-toggle" onClick={toggleSearch}>
            <Search />
          </button>
          <button className="mobile-menu-btn" onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu />
          </button>
        </div>
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

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Firestore
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const productsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setProducts(productsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div className="loading">Đang tải...</div>;

  return (
    <div className="home-container">
      <Header />
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="banner-content">
          <div className="banner-text">
            <div className="logo-wrapper">
              <img
                src="/images/logo-quang-cao-sai-gon-red-vuong-1.png"
                alt="HoaKhanh Advertising Logo White"
                className="banner-logo"
              />
            </div>
            <h1>CÔNG TY TNHH PHÁT TRIỂN</h1>
            <h2>QUẢNG CÁO HOÀ KHÁNH</h2>
            <ul className="service-list">
              <li>✦ CẮT KHẮC LASER - CNC</li>
              <li>✦ HIFLEX - DECAL - PP - BACKLIT</li>
              <li>✦ BẢNG HIỆU - HỘP ĐÈN MICA, INOX</li>
            </ul>
            <div className="hotline-badge">Hotline: 0787 545 842</div>
            <div className="address-section">
              <p>CS1: 35 NGUYỄN LƯƠNG BẰNG, Q.LIÊN CHIỂU, TP.ĐÀ NẴNG</p>
              <p>CS2: 155 NGUYỄN VĂN LINH, Q.HẢI CHÂU, TP ĐÀ NẴNG</p>
              <p>XSX: 24 ĐƯỜNG NGUYỄN THỊ BẢY, Q THANH KHÊ, TP ĐÀ NẴNG</p>
              <p>Website: quangcaohk.vn - thicongbanghieuhk.com</p>
            </div>
          </div>
          <div className="banner-image-container">
            <img
              src="/images/bang-hieu-quang-cao-dep-trung-tam-anh-ngu.jpg"
              alt="Advertising Examples"
              className="main-banner-image"
            />
            <div className="diamond-badge">
              <div className="diamond-content">
                <p>UY TÍN</p>
                <p>CHẤT LƯỢNG</p>
                <p>GIÁ RẺ</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="section-container">
          <h2 className="section-title">DỰ ÁN BẢNG HIỆU TIÊU BIỂU</h2>
          <div className="project-tabs">
            <div className="tabs-placeholder">
              <div className="tab active">Tất cả</div>
              <div className="tab">Bảng hiệu</div>
              <div className="tab">Chữ nổi</div>
              <div className="tab">Hộp đèn</div>
            </div>
            <div className="projects-grid">
              {products.slice(0, 6).map((product) => (
                <div key={product.id} className="project-item">
                  <Link to={`/du-an/${product.id}`}>
                    <img src={product.image} alt={product.title} />
                    <div className="project-overlay">
                      <h3>{product.title}</h3>
                      {product.category && (
                        <p>Loại: {product.category}</p>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Price List Section */}
      <section className="price-list">
        <div className="section-container">
          <div className="price-actions">
            <Link to="/bang-gia" className="view-price">
              XEM BẢNG GIÁ
              <ArrowRight className="arrow-icon" />
            </Link>
            <Link to="/lien-he" className="register-button">
              Đăng ký để nhận ngay báo giá
            </Link>
          </div>
        </div>
      </section>
      {/* Advertising Signs Section */}
      <section className="product-section">
        <div className="section-container">
          <h2 className="section-title">LÀM BẢNG HIỆU QUẢNG CÁO</h2>
          <div className="product-carousel">
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  <Link to={`/du-an/${product.id}`}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    {product.price && (
                      <p className="product-price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</p>
                    )}
                    {product.category && (
                      <span className="product-category">{product.category}</span>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Light Box Section */}
      <section className="light-box-section">
        <div className="section-container">
          <h2 className="section-title">HỘP ĐÈN QUẢNG CÁO</h2>
          <div className="light-box-grid">
            {products.filter(product => product.category === 'hop-den').map((product) => (
              <div key={product.id} className="light-box-item">
                <Link to={`/du-an/${product.id}`}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  {product.price && (
                    <p className="product-price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</p>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Special Section */}
      <section className="special-section">
        <div className="section-container">
          <div className="special-grid">
            <div className="special-content">
              <h2>KHÁC BIỆT</h2>
              <ul className="special-list">
                <li>Có nhà xưởng trực tiếp sản xuất giá tốt giảm tới 30% chi phí.</li>
                <li>Thiết kế miễn phí cho khách thi công.</li>
                <li>Cam kết thực hiện Đúng theo 100% hợp đồng.</li>
                <li>Hoàn tiền thiệt kế không cần lý do.</li>
                <li>Giám Đốc đi lên từ thợ chính.</li>
                <li>Đội ngũ nhân viên trẻ năng động nhiệt huyết.</li>
              </ul>
            </div>
            <div className="special-highlight">
              <h3>KHÁC BIỆT</h3>
              <h4>QUẢNG CÁO HOÀ KHÁNH</h4>
              <p>là đơn vị thi công quảng cáo hàng đầu lấy uy tin làm nền tảng vì chúng tôi tạo nên <strong>chất lượng, giá trị</strong> trong mỗi công trình nhận thi công.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* Social Media Sidebar */}
      <div className="social-sidebar">
        <div className="social-buttons">
          <a href="https://zalo.me/0787656584" className="social-button zalo" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">Zalo</div>
          </a>
          <a href="https://facebook.com" className="social-button facebook" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">FB</div>
          </a>
          <a href="tel:0787545842" className="social-button call">
            <div className="social-icon">Call</div>
          </a>
          <a href="#top" className="social-button top">
            <div className="social-icon">↑</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;