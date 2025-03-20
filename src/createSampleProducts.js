import { db } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const createSampleProducts = async () => {
  const sampleProducts = [
    {
      title: 'Thi công nội thất quán cafe',
      image: '/images/bang-hieu-spa-dianva.jpg',
      price: 15000000,
      category: 'noi-that'
    },
    {
      title: 'Hộp đèn mica cao cấp',
      image: '/images/bang-hieu-alu.jpg',
      price: 8500000,
      category: 'hop-den'
    },
    {
      title: 'Bảng hiệu SPA sang trọng',
      image: '/images/bang-hieu-quang-cao-dep-trung-tam-anh-ngu.jpg',
      price: 12000000,
      category: 'bang-hieu'
    }
  ];

  try {
    for (const product of sampleProducts) {
      await addDoc(collection(db, 'products'), product);
    }
    console.log('Đã thêm sản phẩm mẫu thành công!');
  } catch (error) {
    console.error('Lỗi khi thêm sản phẩm:', error);
  }
};

createSampleProducts();