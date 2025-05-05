# Dự án Website Quảng Cáo Hoà Khánh
## Giới thiệu
Dự án này là một ứng dụng web được xây dựng bằng React và Firebase, phục vụ cho công ty thi công quảng cáo Hoà Khánh. Website được thiết kế để giới thiệu và quản lý các sản phẩm, dịch vụ quảng cáo như bảng hiệu, chữ nổi, hộp đèn và nội thất. Dự án bao gồm phần giao diện người dùng và hệ thống quản lý sản phẩm.

## Công nghệ sử dụng
- React: Thư viện JavaScript để xây dựng giao diện người dùng
- Firebase: Nền tảng Backend trực tuyến của Google
  - Firestore: Cơ sở dữ liệu NoSQL lưu trữ thông tin sản phẩm và người dùng
  - Firebase Hosting: Triển khai ứng dụng
- React Router: Quản lý điều hướng giữa các trang
- bcryptjs: Mã hóa mật khẩu người dùng
- lucide-react: Thư viện cung cấp các icon

## Cài đặt
1. Cài đặt Node.js và npm: Đảm bảo bạn đã cài đặt Node.js và npm (Node Package Manager) trên máy tính. Bạn có thể tải xuống từ trang chủ của Node.js: https://nodejs.org/
2. Clone dự án:
   git clone https://github.com/DeltaG1G2/qchkfirebase.git
   cd qchkfirebase
3. Cài đặt các gói phụ thuộc:
   npm install

## Cấu hình Firebase
1. Tạo một dự án Firebase: Truy cập https://console.firebase.google.com/ và tạo một dự án mới.
2. Cấu hình Firestore:
   - Trong Firebase console, chọn "Firestore Database".
   - Tạo một cơ sở dữ liệu mới. Bạn có thể bắt đầu ở chế độ "test mode" để dễ dàng phát triển.
3. Lấy thông tin cấu hình Firebase:
   - Trong Firebase console, vào "Project settings" (biểu tượng bánh răng).
   - Cuộn xuống phần "Your apps" và chọn biểu tượng "</>" (Web).
   - Sao chép đoạn mã cấu hình Firebase (firebaseConfig) và dán vào file src/firebase.js của dự án.

## Cấu trúc dự án
qchkfirebase/
├── public/             # Các file logo
├── src/                # Mã nguồn của ứng dụng
│   ├── assets/css      # CSS
│   ├── components/     # Các components tái sử dụng (Header, Footer)
│   ├── Views/          # Các trang của ứng dụng
│   │   ├── HomePage.js # Trang chủ
│   │   ├── Login.js    # Trang đăng nhập
│   │   ├── UserQuanLy.js # Trang quản lý sản phẩm
│   │   ├── ProductDetail.js # Trang chi tiết sản phẩm
│   │   └── ...         # Các trang khác chưa hoàn thành
│   ├── App.js          # Component chính của ứng dụng
│   ├── AuthContext.js  # Quản lý xác thực người dùng
│   ├── firebase.js     # Cấu hình Firebase
│   ├── createSampleProducts.js # Script tạo sản phẩm mẫu
│   ├── createUser.js   # Script tạo người dùng mẫu
│   └── index.js        # Điểm khởi đầu của ứng dụng
├── firebase.json       # Cấu hình Firebase
├── firestore.rules     # Quy tắc bảo mật cho Firestore
└── package.json        # Cấu hình npm và dependencies

## Chạy dự án
1. Khởi động môi trường phát triển:
   npm start
   Ứng dụng sẽ chạy tại địa chỉ http://localhost:3000 .
2. Tạo dữ liệu mẫu (nếu cần):
   node src/createSampleProducts.js
   Script này sẽ tạo một số sản phẩm mẫu trong Firestore.
3. Tạo tài khoản quản lý (nếu cần):
   node src/createUser.js
   Script này sẽ tạo một tài khoản quản lý với thông tin đăng nhập được lưu trong file user_credentials.txt .
## Triển khai (Deploy)
1. Xây dựng ứng dụng cho môi trường production:
   npm run build
2. Triển khai lên Firebase Hosting:
   firebase deploy

## Chức năng chính
1. Hiển thị sản phẩm: Trang chủ và các trang danh mục hiển thị sản phẩm từ Firestore.
2. Chi tiết sản phẩm: Xem thông tin chi tiết và hình ảnh của từng sản phẩm.
3. Đăng nhập quản trị: Hệ thống xác thực người dùng với Firebase Authentication.
4. Quản lý sản phẩm: Thêm, sửa, xóa sản phẩm (chỉ dành cho quản trị viên).
5. Responsive: Giao diện tương thích với nhiều kích thước màn hình.
## Tài khoản đăng nhập mặc định
- Tên đăng nhập: mahoa
- Mật khẩu: mahoa
## Thông tin liên hệ
- Sinh viên thực hiện: Lê Trương Gia Bảo
- MSSV: 3120221006
- Email: 3120221006@ued.udn.vn
- Giảng viên hướng dẫn: TS. Nguyễn Trần Quốc Vinh
Dự án này được thực hiện như một phần của môn học Thực Tập Tốt Nghiệp tại Trường Đại học Sư Phạm Đại học Đà Nẵng.
