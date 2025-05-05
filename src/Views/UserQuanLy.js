import { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase.js';
import './UserQuanLy.css';
import { Link } from 'react-router-dom';
import { Menu, Search, Phone, Mail, Trash2 } from 'lucide-react';
import { addDoc } from 'firebase/firestore';

const UserQuanLy = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Tạo sản phẩm rồi cập nhật lại
  const handleCreate = async () => {
    try {
      const newProduct = {
        title: 'Sản phẩm mới',
        description: '',
        image: '',
        price: 0,
        category: 'bang-hieu',
        createdAt: new Date()
      };
      
      const docRef = await addDoc(collection(db, 'products'), newProduct);
      setProducts([...products, { id: docRef.id, ...newProduct }]);
      alert('Tạo sản phẩm mới thành công!');
    } catch (error) {
      console.error('Lỗi khi tạo sản phẩm:', error);
      alert('Tạo sản phẩm thất bại');
    }
  };

  // Lấy data
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

  // Chức năng cập nhật sản phẩm
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
      product.id === id ? { 
        ...product, 
        [field]: field === 'image' ? value.replace(/\s*,\s*/g, ',') : value 
      } : product
    ));
  };

  // Nhiều ảnh cách nhau dấu phẩy
  const renderImagePreviews = (imageUrls) => {
    if (!imageUrls) return null;
    const urls = imageUrls.split(',').map(url => url.trim());
    return (
      <div className="image-previews">
        {urls.map((url, index) => (
          <img 
            key={index}
            src={url} 
            alt={`Preview ${index + 1}`} 
            className="image-preview"
          />
        ))}
      </div>
    );
  };

  // Xóa sản phẩm
  const handleDelete = async (productId) => {
    if (window.confirm('Bạn có chắc muốn xoá sản phẩm này?')) {
      try {
        await deleteDoc(doc(db, 'products', productId));
        setProducts(products.filter(p => p.id !== productId));
        alert('Xoá sản phẩm thành công!');
      } catch (error) {
        console.error('Lỗi khi xoá sản phẩm:', error);
        alert('Xoá sản phẩm thất bại');
      }
    }
  };

  if (loading) return <div className="loading">Đang tải...</div>;

  return (
    <div className="quanly-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Quản Lý Sản Phẩm</h1>
        <button 
          className="add-button"
          onClick={handleCreate}
        >
          + Tạo sản phẩm mới
        </button>
      </div>
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
              <label>Mô tả:</label>
              <textarea
                className="form-input"
                value={product.description || ''}
                onChange={(e) => handleChange(product.id, 'description', e.target.value)}
                rows={4}
              />
            </div>
            <div className="form-group">
              <label>URL hình ảnh:</label>
              <textarea
                className="form-input"
                value={product.image || ''}
                onChange={(e) => handleChange(product.id, 'image', e.target.value)}
                rows={4}
              />
              {renderImagePreviews(product.image)}
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
                  <option value="chu-noi">Chữ nổi</option>
                  <option value="hop-den">Hộp đèn</option>
                  <option value="noi-that">Nội thất</option>
                </select>
              </div>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDelete(product.id)}
              title="Xoá sản phẩm"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserQuanLy;