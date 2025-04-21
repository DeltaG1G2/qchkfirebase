import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.js';
import './HomePage.css';
import { Search, Phone, Mail, ArrowRight, Menu } from 'lucide-react';
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

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', productId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProduct({
            id: docSnap.id,
            ...docSnap.data()
          });
        } else {
          console.log('Không tìm thấy sản phẩm!');
        }
        setLoading(false);
      } catch (error) {
        console.error('Lỗi khi lấy thông tin sản phẩm:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <div className="loading">Đang tải...</div>;
  if (!product) return <div className="error-message">Không tìm thấy sản phẩm</div>;

  return (
    <div className="product-detail-container">
      <Header />
      <div className="product-detail-content">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link> &gt; 
          <Link to="/du-an">Dự án</Link> &gt; 
          <span>{product.title}</span>
        </div>
        
        <div className="product-detail-grid">
          <div className="product-detail-image">
            <img src={product.image} alt={product.title} />
          </div>
          
          <div className="product-detail-info">
            <h1 className="product-detail-title">{product.title}</h1>
            
            {product.price && (
              <div className="product-detail-price">
                <span className="price-label">Giá:</span>
                <span className="price-value">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </span>
              </div>
            )}
            
            {product.category && (
              <div className="product-detail-category">
                <span className="category-label">Loại sản phẩm:</span>
                <span className="category-value">{product.category}</span>
              </div>
            )}
            
            <div className="product-detail-description">
              <h3>Mô tả sản phẩm</h3>
              <p>{product.description || 'Chưa có mô tả chi tiết cho sản phẩm này.'}</p>
            </div>
            
            <div className="product-detail-features">
              <h3>Đặc điểm sản phẩm</h3>
              <ul>
                <li>Chất liệu cao cấp</li>
                <li>Thiết kế hiện đại</li>
                <li>Bền bỉ theo thời gian</li>
                <li>Phù hợp với nhiều không gian</li>
              </ul>
            </div>
            
            <div className="product-detail-contact">
              <h3>Liên hệ đặt hàng</h3>
              <p>Để được tư vấn và báo giá chi tiết, vui lòng liên hệ:</p>
              <div className="contact-info-detail">
                <p><strong>Hotline:</strong> 0787 545 842</p>
                <p><strong>Email:</strong> quangcaohk@gmail.com</p>
              </div>
              <Link to="/lien-he" className="contact-button">Liên hệ ngay</Link>
            </div>
          </div>
        </div>
        
        <div className="product-detail-specs">
          <h2>Thông số kỹ thuật</h2>
          <table className="specs-table">
            <tbody>
              <tr>
                <td>Kích thước</td>
                <td>{product.dimensions || 'Tùy chỉnh theo yêu cầu'}</td>
              </tr>
              <tr>
                <td>Chất liệu</td>
                <td>{product.material || 'Đa dạng tùy chọn'}</td>
              </tr>
              <tr>
                <td>Thời gian thi công</td>
                <td>{product.constructionTime || '3-5 ngày làm việc'}</td>
              </tr>
              <tr>
                <td>Bảo hành</td>
                <td>{product.warranty || '12 tháng'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
