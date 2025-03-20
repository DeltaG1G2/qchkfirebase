import { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.js';
import './UserQuanLy.css';

const UserQuanLy = () => {
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

  // Handle product updates
  const handleUpdate = async (productId) => {
    try {
      const productToUpdate = products.find(p => p.id === productId);
      await updateDoc(doc(db, 'products', productId), productToUpdate);
      alert('Cập nhật thành công!');
    } catch (error) {
      console.error('Lỗi khi cập nhật:', error);
      alert('Cập nhật thất bại');
    }
  };

  const handleChange = (id, field, value) => {
    setProducts(prev => prev.map(product => 
      product.id === id ? { ...product, [field]: value } : product
    ));
  };

  if (loading) return <div className="loading">Đang tải...</div>;

  return (
    <div className="quanly-container">
      <h1>Quản Lý Sản Phẩm</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="card-header">
              <span className="product-id">#{product.id}</span>
              <button 
                className="save-button"
                onClick={() => handleUpdate(product.id)}
              >
                Lưu thay đổi
              </button>
            </div>
            
            <div className="form-group">
              <label>Tiêu đề:</label>
              <input
                className="form-input"
                value={product.title}
                onChange={(e) => handleChange(product.id, 'title', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>URL hình ảnh:</label>
              <input
                className="form-input"
                value={product.image}
                onChange={(e) => handleChange(product.id, 'image', e.target.value)}
              />
              {product.image && (
                <img 
                  src={product.image} 
                  alt="Preview" 
                  className="image-preview"
                />
              )}
            </div>

            <div className="form-group columns">
              <div className="column">
                <label>Giá (VND):</label>
                <input
                  type="number"
                  className="form-input"
                  value={product.price}
                  onChange={(e) => handleChange(product.id, 'price', parseInt(e.target.value))}
                />
              </div>
              <div className="column">
                <label>Danh mục:</label>
                <select
                  className="form-select"
                  value={product.category}
                  onChange={(e) => handleChange(product.id, 'category', e.target.value)}
                >
                  <option value="bang-hieu">Bảng hiệu</option>
                  <option value="hop-den">Hộp đèn</option>
                  <option value="noi-that">Nội thất</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserQuanLy;