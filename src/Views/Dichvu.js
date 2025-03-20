import React from 'react';
import './Dichvu.css';
import { ArrowRight } from 'lucide-react';

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
          <a href="#" className="view-price">
            XEM BẢNG GIÁ CHI TIẾT
            <ArrowRight className="arrow-icon" />
          </a>
          <a href="#" className="register-button">
            Đăng ký tư vấn dịch vụ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dichvu;