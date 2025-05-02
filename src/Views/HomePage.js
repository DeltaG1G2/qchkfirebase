import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import './HomePage.css';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

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

  const getFirstImage = (imageUrls) => {
    if (!imageUrls) return '';
    return imageUrls.split(',')[0].trim();
  };

  const filteredProducts = () => {
    if (activeTab === 'all') return products.slice(0, 6);
    return products.filter(product => product.category === activeTab).slice(0, 6);
  };

  return (
    <div className="home-container">
      <Header />
      {/* Banner chính */}
      <section className="hero-banner">
        <div className="banner-content">
          <div className="banner-text">
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
              src="https://phucloiviet.vn/wp-content/uploads/2021/04/duc-lai-1-1024x767.jpg"
              alt="Banner Image"
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
      {/* Cụm 1 tab chuyển */}
      <section className="featured-projects">
        <div className="section-container">
          <h2 className="section-title">DỰ ÁN BẢNG HIỆU TIÊU BIỂU</h2>
          <div className="project-tabs">
            <div className="tabs-placeholder">
              <div 
                className={`tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                Tất cả
              </div>
              <div 
                className={`tab ${activeTab === 'bang-hieu' ? 'active' : ''}`}
                onClick={() => setActiveTab('bang-hieu')}
              >
                Bảng hiệu
              </div>
              <div 
                className={`tab ${activeTab === 'chu-noi' ? 'active' : ''}`}
                onClick={() => setActiveTab('chu-noi')}
              >
                Chữ nổi
              </div>
              <div 
                className={`tab ${activeTab === 'hop-den' ? 'active' : ''}`}
                onClick={() => setActiveTab('hop-den')}
              >
                Hộp đèn
              </div>
            </div>
            <div className="projects-grid">
              {filteredProducts().map((product) => (
                <div key={product.id} className="project-item">
                  <Link to={`/du-an/${product.id}`}>
                    <img src={getFirstImage(product.image)} alt={product.title} />
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
      {/* XEM BẢNG GIÁ */}
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
      {/* CỤM 2 */}
      <section className="product-section">
        <div className="section-container">
          <h2 className="section-title">LÀM BẢNG HIỆU QUẢNG CÁO</h2>
          <div className="product-carousel">
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  <Link to={`/du-an/${product.id}`}>
                    <img src={getFirstImage(product.image)} alt={product.title} />
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
      {/* CỤM 3 */}
      <section className="light-box-section">
        <div className="section-container">
          <h2 className="section-title">HỘP ĐÈN QUẢNG CÁO</h2>
          <div className="light-box-grid">
            {products.filter(product => product.category === 'hop-den').map((product) => (
              <div key={product.id} className="light-box-item">
                <Link to={`/du-an/${product.id}`}>
                  <img src={getFirstImage(product.image)} alt={product.title} />
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
      {/* Khác biệt */}
      <section className="special-section">
        <div className="section-container">
          <div className="special-grid">
            <div className="special-content">
              <h2>KHÁC BIỆT</h2>
              <ul className="special-list">
                <li>Có nhà xưởng trực tiếp sản xuất giá tốt giảm tới 30% chi phí.</li>
                <li>Thiết kếm miễn phí cho khách thi công.</li>
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
      {/* Zalo thả nổi */}
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