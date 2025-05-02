import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection, query, where, limit, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import './ProductDetail.css';
import { Phone, ArrowRight, Star, Heart, Share2, Clock, Shield, ChevronRight} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'products', productId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const productData = {
            id: docSnap.id,
            ...docSnap.data()
          };
          
          setProduct(productData);
          
          fetchRelatedProducts(productData.category, docSnap.id);
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

  const fetchRelatedProducts = async (category, currentProductId) => {
    try {
      const productsRef = collection(db, 'products');
      const q = query(
        productsRef,
        where('category', '==', category),
        limit(4)
      );
      
      const querySnapshot = await getDocs(q);
      const relatedProductsData = querySnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .filter(prod => prod.id !== currentProductId);
      
      setRelatedProducts(relatedProductsData);
    } catch (error) {
      console.error('Lỗi khi lấy sản phẩm liên quan:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getFirstImage = (imageString) => {
    if (!imageString) return '';
    const images = imageString.split(',');
    return images[0].trim();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Đang tải thông tin sản phẩm...</p>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="error-container">
        <div className="error-icon">!</div>
        <h2>Không tìm thấy sản phẩm</h2>
        <p>Sản phẩm này không tồn tại hoặc đã bị xóa.</p>
        <Link to="/du-an" className="back-button">Quay lại danh sách sản phẩm</Link>
      </div>
    );
  }

  const galleryImages = product.image 
    ? product.image.split(',').map(url => url.trim())
    : [];

  return (
    <div className="product-detail-container">
      <Header />
      
      <div className="product-detail-content">
        <div className="breadcrumb">
          <Link to="/">Trang chủ</Link>
          <ChevronRight className="breadcrumb-icon" />
          <Link to="/du-an">Dự án</Link>
          <ChevronRight className="breadcrumb-icon" />
          <span>{product.title}</span>
        </div>
        
        <div className="product-detail-grid">
          <div className="product-gallery">
            {galleryImages.length > 0 ? (
              <>
                <div className="main-image-container">
                  <img 
                    src={galleryImages[activeImageIndex]} 
                    alt={product.title} 
                    className="main-product-image" 
                    loading="lazy"
                  />
                  <div className="image-nav">
                    <button 
                      className="image-nav-btn prev"
                      onClick={() => setActiveImageIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button 
                      className="image-nav-btn next"
                      onClick={() => setActiveImageIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </div>
                </div>
                
                <div className="thumbnail-gallery">
                  {galleryImages.map((img, index) => (
                    <div 
                      key={index} 
                      className={`thumbnail ${activeImageIndex === index ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.title} - Ảnh ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="no-images">
                <p>Không có hình ảnh sản phẩm</p>
              </div>
            )}
          </div>
          
          <div className={`product-info ${isSticky ? 'sticky' : ''}`}>
            <h1 className="product-title">{product.title}</h1>
            
            <div className="product-meta">
              {product.category && (
                <span className="product-category">{product.category}</span>
              )}
              <div className="product-rating">
                <Star className="star filled" />
                <Star className="star filled" />
                <Star className="star filled" />
                <Star className="star filled" />
                <Star className="star" />
                <span className="rating-count">(12 đánh giá)</span>
              </div>
            </div>
            
            {product.price && (
              <div className="product-price">
                <span className="current-price">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="old-price">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.oldPrice)}
                  </span>
                )}
              </div>
            )}
            
            <div className="product-description">
              <p>{product.description || 'Chưa có mô tả chi tiết cho sản phẩm này.'}</p>
            </div>
            
            <div className="product-highlights">
              <div className="highlight-item">
                <Clock className="highlight-icon" />
                <div className="highlight-text">
                  <span>Thời gian thi công</span>
                  <strong>{product.constructionTime || '3-5 ngày'}</strong>
                </div>
              </div>
              
              <div className="highlight-item">
                <Shield className="highlight-icon" />
                <div className="highlight-text">
                  <span>Bảo hành</span>
                  <strong>{product.warranty || '12 tháng'}</strong>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <Link to="/lien-he" className="primary-button">
                Liên hệ báo giá
              </Link>
              <button className="secondary-button">
                <Phone className="button-icon" />
                Gọi ngay
              </button>
              <button className="icon-button">
                <Heart />
              </button>
              <button className="icon-button">
                <Share2 />
              </button>
            </div>
            
            <div className="contact-summary">
              <div className="contact-header">
                <Phone className="contact-icon" />
                <h3>Hỗ trợ đặt hàng</h3>
              </div>
              <div className="contact-details">
                <p>Hotline: <strong>0787 545 842</strong></p>
                <p>Email: <strong>quangcaohk@gmail.com</strong></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="product-tabs">
          <div className="tabs-header">
            <button className="tab-button">Đặc điểm sản phẩm</button>
          </div>
          
          <div className="tab-content">
            <div className="specs-content">
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
                  <tr>
                    <td>Đơn vị thi công</td>
                    <td>Công Ty TNHH Phát Triển Quảng Cáo Hoà Khánh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="features-section">
          <h2 className="section-title">Đặc điểm nổi bật</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon quality"></div>
              <h3>Chất liệu cao cấp</h3>
              <p>Sử dụng vật liệu nhập khẩu, đảm bảo độ bền và tính thẩm mỹ cao</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon design"></div>
              <h3>Thiết kế hiện đại</h3>
              <p>Thiết kế tinh tế, thu hút ánh nhìn, nâng tầm thương hiệu</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon durability"></div>
              <h3>Bền bỉ theo thời gian</h3>
              <p>Khả năng chống chọi với mọi điều kiện thời tiết, không phai màu</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon installation"></div>
              <h3>Lắp đặt chuyên nghiệp</h3>
              <p>Đội ngũ kỹ thuật lành nghề, thi công tỉ mỉ, đúng tiến độ</p>
            </div>
          </div>
        </div>
        
        <div className="related-products">
          <h2 className="section-title">Sản phẩm liên quan</h2>
          
          {relatedProducts.length > 0 ? (
            <div className="related-products-grid">
              {relatedProducts.map(relatedProduct => (
                <div className="product-card" key={relatedProduct.id}>
                  <div className="product-card-image">
                    <img 
                      src={getFirstImage(relatedProduct.image)} 
                      alt={relatedProduct.title} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="product-card-content">
                    <h3>{relatedProduct.title}</h3>
                    {relatedProduct.price && (
                      <div className="product-card-price">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(relatedProduct.price)}
                      </div>
                    )}
                    <Link to={`/du-an/${relatedProduct.id}`} className="view-product-button">
                      Xem chi tiết
                      <ArrowRight className="button-icon" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-related-products">Không có sản phẩm liên quan</p>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ProductDetail;
