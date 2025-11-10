# Trang Web Về Chủ Tịch Hồ Chí Minh

## Giới thiệu
Đây là trang web tổng hợp về cuộc đời, sự nghiệp và tư tưởng của Chủ tịch Hồ Chí Minh - Vị Cha Già Dân Tộc Việt Nam.

## Cấu trúc dự án

```
HCM/
├── HCM.html              # Trang chủ chính
├── biography.html         # Trang tiểu sử chi tiết
├── career.html           # Trang sự nghiệp cách mạng
├── ideology.html         # Trang tư tưởng Hồ Chí Minh
├── legacy.html           # Trang di sản để lại
├── gallery.html          # Trang thư viện ảnh
├── assets/               # Thư mục chứa tài nguyên
│   ├── images/           # Thư mục ảnh
│   │   ├── biography/    # Ảnh về tiểu sử
│   │   ├── career/       # Ảnh về sự nghiệp
│   │   ├── ideology/     # Ảnh về tư tưởng
│   │   ├── legacy/       # Ảnh về di sản
│   │   └── gallery/      # Thư viện ảnh chung
│   ├── videos/           # Thư mục video
│   │   ├── speeches/     # Video bài phát biểu
│   │   ├── documentaries/ # Video tài liệu
│   │   └── clips/        # Video clip ngắn
│   ├── audio/            # Thư mục âm thanh
│   │   ├── speeches/     # Audio bài phát biểu
│   │   └── songs/        # Bài hát về Bác Hồ
│   └── HUONG_DAN_LUU_TRU.md # Hướng dẫn lưu trữ
└── README.md             # File này
```

## Cách sử dụng

### 1. Xem trang web
- Mở file `HCM.html` trực tiếp trong trình duyệt web để xem trang chủ
- Hoặc mở trực tiếp các trang con như `biography.html`, `career.html`, etc.
- Có thể sử dụng Live Server trong VS Code/Cursor hoặc bất kỳ web server nào

### 2. Điều hướng
- **Trang chủ (HCM.html)**: Tổng quan về Chủ tịch Hồ Chí Minh
- **Tiểu sử chi tiết**: Cuộc đời và hành trình của Người
- **Sự nghiệp**: Các giai đoạn cách mạng quan trọng
- **Tư tưởng**: Hệ thống quan điểm và tư tưởng cách mạng
- **Di sản**: Những gì Người để lại cho dân tộc và thế giới
- **Thư viện ảnh**: Bộ sưu tập hình ảnh với tính năng lọc

### 3. Thêm nội dung
- Để thêm ảnh: Đặt vào thư mục `assets/images/` theo phân loại
- Để thêm video: Đặt vào thư mục `assets/videos/`
- Để thêm audio: Đặt vào thư mục `assets/audio/`
- Xem file `HUONG_DAN_LUU_TRU.md` để biết quy tắc đặt tên và tổ chức

## Tính năng

### Trang chủ (HCM.html)
- ✅ Hero section với hình ảnh nền
- ✅ Timeline tiểu sử tương tác
- ✅ Các section về sự nghiệp, tư tưởng, di sản
- ✅ Thống kê với hiệu ứng đếm số
- ✅ Câu nói nổi tiếng
- ✅ Audio player giả lập
- ✅ Thư viện ảnh với modal
- ✅ Dark mode toggle
- ✅ Responsive design
- ✅ Tìm kiếm nội dung

### Trang con
- ✅ **biography.html**: Tiểu sử chi tiết với timeline
- ✅ **career.html**: Sự nghiệp cách mạng với các giai đoạn
- ✅ **ideology.html**: Tư tưởng với các nội dung chính
- ✅ **legacy.html**: Di sản với UNESCO và các thành tựu
- ✅ **gallery.html**: Thư viện ảnh với filter và modal

## Công nghệ sử dụng
- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và animations
- **Tailwind CSS**: Framework CSS utility-first
- **JavaScript**: Tương tác và animations
- **Responsive Design**: Tương thích mobile và desktop

## Hướng dẫn tùy chỉnh

### Thay đổi màu sắc
- Màu chính: `#c8102e` (đỏ cờ)
- Màu phụ: `#fcd34d` (vàng)
- Có thể thay đổi trong các class Tailwind CSS

### Thêm nội dung mới
1. Tạo file HTML mới trong thư mục gốc
2. Copy cấu trúc header/footer từ file có sẵn
3. Thêm link navigation trong các file khác
4. Đặt nội dung vào thư mục `assets/` phù hợp

### Tối ưu hóa
- Nén ảnh trước khi upload để giảm dung lượng
- Sử dụng định dạng JPG/PNG (đã được tối ưu)
- Tối ưu video với độ phân giải phù hợp
- Lazy loading cho hình ảnh
- Preload cho critical resources

## Lưu ý quan trọng
- Chỉ sử dụng ảnh/video có bản quyền hoặc thuộc phạm vi công cộng
- Backup dữ liệu thường xuyên
- Test trên nhiều trình duyệt khác nhau
- Kiểm tra responsive trên các thiết bị khác nhau

## Liên hệ
Nếu có thắc mắc hoặc góp ý về trang web, vui lòng liên hệ qua email hoặc tạo issue trong repository.

---
**Kính tặng Vị Cha Già Dân Tộc - Chủ tịch Hồ Chí Minh**
