import React from 'react';
import './HomePage.css';
import { Search, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header-section">
        <div className="header-content">
          <div className="logo-container">
            <a href="/">
              <img 
                src="/images/logo-quang-cao-sai-gon-red-vuong-1.png" 
                alt="HoaKhanh Advertising Logo" 
                className="logo-image"
              />
            </a>
          </div>

          <div className="search-container">
            <div className="search-input">
              <input
                type="text"
                placeholder="Nhập từ khóa để tìm kiếm..."
              />
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
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-item"><a href="/">Trang chủ</a></li>
            <li className="nav-item"><a href="/gioi-thieu">Giới thiệu</a></li>
            <li className="nav-item"><a href="/dich-vu">Dịch vụ</a></li>
            <li className="nav-item"><a href="/du-an">Dự án</a></li>
            <li className="nav-item"><a href="/bang-gia">Bảng giá</a></li>
            <li className="nav-item"><a href="/lien-he">Liên hệ</a></li>
          </ul>
        </div>
      </nav>

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

            <div className="hotline-badge">
              Hotline: 0787 545 842
            </div>

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
            {/* Project tabs would go here */}
            <div className="tabs-placeholder">
              <div className="tab active">Tất cả</div>
              <div className="tab">Bảng hiệu</div>
              <div className="tab">Chữ nổi</div>
              <div className="tab">Hộp đèn</div>
            </div>
            <div className="projects-grid">
              {/* Project items would go here */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="project-item">
                  <img 
                    src={`/images/bang-hieu-${item === 1 ? 'alu' : item === 2 ? 'spa-dianva' : 'quang-cao-dep-trung-tam-anh-ngu'}.jpg`} 
                    alt={`Project ${item}`} 
                  />
                  <div className="project-overlay">
                    <h3>Dự án {item}</h3>
                  </div>
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
            <a href="#" className="view-price">
              XEM BẢNG GIÁ
              <ArrowRight className="arrow-icon" />
            </a>
            <a href="#" className="register-button">
              Đăng ký để nhận ngay báo giá
            </a>
          </div>
        </div>
      </section>

      {/* Advertising Signs Section */}
      <section className="product-section">
        <div className="section-container">
          <h2 className="section-title">LÀM BẢNG HIỆU QUẢNG CÁO</h2>
          <div className="product-carousel">
            <div className="products-grid">
              {[
                { id: 1, title: 'Thi công nội thất quán cafe', image: '/images/bang-hieu-spa-dianva.jpg' },
                { id: 2, title: 'Hộp đèn mica', image: '/images/bang-hieu-alu.jpg' },
                { id: 3, title: 'Thi công bảng hiệu SPA', image: '/images/bang-hieu-quang-cao-dep-trung-tam-anh-ngu.jpg' },
                { id: 4, title: 'Thi công bảng hiệu Anh Ngữ', image: '/images/bang-hieu-spa-dianva.jpg' }
              ].map((product) => (
                <div key={product.id} className="product-item">
                  <a href="#">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                  </a>
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
            {[
              { id: 1, title: 'Hộp đèn LED siêu mỏng', image: '/images/bang-hieu-alu.jpg' },
              { id: 2, title: 'Mẫu hộp đèn quảng cáo đẹp', image: '/images/bang-hieu-quang-cao-dep-trung-tam-anh-ngu.jpg' },
              { id: 3, title: 'Hộp đèn mica hút nổi', image: '/images/bang-hieu-spa-dianva.jpg' }
            ].map((box) => (
              <div key={box.id} className="light-box-item">
                <a href="#">
                  <img src={box.image} alt={box.title} />
                  <h3>{box.title}</h3>
                </a>
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

      {/* Footer */}
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
                <li>Phụ trách: Anh Thưởng</li>
                <li>Hotline: 0909 42 32 45</li>
                <li>Zalo: 0909 42 32 45</li>
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

      {/* Copyright */}
      <div className="copyright">
        <div className="copyright-container">
          <p>© 2025 Quảng Cáo Hoà Khánh. All rights reserved.</p>
        </div>
      </div>

      {/* Social Media Sidebar */}
      <div className="social-sidebar">
        <div className="social-buttons">
          <a href="#" className="social-button zalo">
            <div className="social-icon">Zalo</div>
          </a>
          <a href="#" className="social-button facebook">
            <div className="social-icon">FB</div>
          </a>
          <a href="#" className="social-button call">
            <div className="social-icon">Call</div>
          </a>
          <a href="#" className="social-button top">
            <div className="social-icon">↑</div>
          </a>
        </div>
      </div>
    </div>
  );
  <p>Already have an account? <Link to="/login">Login here</Link></p>
}

export default HomePage;