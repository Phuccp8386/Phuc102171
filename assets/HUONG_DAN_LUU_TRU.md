# HƯỚNG DẪN LƯU TRỮ ẢNH VÀ VIDEO

## Cấu trúc thư mục

```
assets/
├── images/          # Thư mục lưu trữ ảnh
│   ├── biography/   # Ảnh về tiểu sử
│   ├── career/      # Ảnh về sự nghiệp
│   ├── ideology/    # Ảnh về tư tưởng
│   ├── legacy/      # Ảnh về di sản
│   └── gallery/     # Thư viện ảnh chung
├── videos/          # Thư mục lưu trữ video
│   ├── speeches/    # Video bài phát biểu
│   ├── documentaries/ # Video tài liệu
│   └── clips/       # Video clip ngắn
└── audio/           # Thư mục lưu trữ âm thanh
    ├── speeches/    # Audio bài phát biểu
    └── songs/       # Bài hát về Bác Hồ
```

## Quy tắc đặt tên file

### Ảnh (Images)
- Định dạng: `.jpg`, `.jpeg`, `.png`, `.webp`
- Tên file: `[chủ đề]_[mô tả]_[năm].jpg`
- Ví dụ: `biography_ho_chi_minh_young_1920.jpg`

### Video (Videos)
- Định dạng: `.mp4`, `.webm`, `.mov`
- Tên file: `[chủ đề]_[mô tả]_[năm].mp4`
- Ví dụ: `speeches_tuyen_ngon_doc_lap_1945.mp4`

### Audio (Audio)
- Định dạng: `.mp3`, `.wav`, `.ogg`
- Tên file: `[chủ đề]_[mô tả]_[năm].mp3`
- Ví dụ: `speeches_tuyen_ngon_doc_lap_1945.mp3`

## Kích thước và chất lượng

### Ảnh
- **Ảnh thumbnail**: 300x300px, chất lượng 80%
- **Ảnh gallery**: 800x600px, chất lượng 85%
- **Ảnh hero**: 1920x1080px, chất lượng 90%
- **Ảnh full size**: Giữ nguyên kích thước gốc

### Video
- **Video clip ngắn**: Tối đa 50MB, độ phân giải 720p
- **Video tài liệu**: Tối đa 200MB, độ phân giải 1080p
- **Video phát biểu**: Tối đa 100MB, độ phân giải 720p

### Audio
- **Audio chất lượng cao**: 320kbps MP3
- **Audio chất lượng trung bình**: 128kbps MP3
- **Audio chất lượng thấp**: 64kbps MP3

## Cách sử dụng trong HTML

### Ảnh
```html
<img src="assets/images/biography/ho_chi_minh_young_1920.jpg" 
     alt="Hồ Chí Minh thời trẻ" 
     class="w-full h-auto">
```

### Video
```html
<video controls class="w-full">
    <source src="assets/videos/speeches/tuyen_ngon_doc_lap_1945.mp4" type="video/mp4">
    Trình duyệt không hỗ trợ video.
</video>
```

### Audio
```html
<audio controls>
    <source src="assets/audio/speeches/tuyen_ngon_doc_lap_1945.mp3" type="audio/mpeg">
    Trình duyệt không hỗ trợ audio.
</audio>
```

## Lưu ý quan trọng

1. **Bản quyền**: Chỉ sử dụng ảnh/video có bản quyền hoặc thuộc phạm vi công cộng
2. **Tối ưu hóa**: Nén ảnh/video để giảm dung lượng
3. **Backup**: Luôn có bản sao lưu các file quan trọng
4. **Tên file**: Sử dụng tiếng Việt không dấu hoặc tiếng Anh
5. **Thư mục**: Tổ chức theo chủ đề để dễ quản lý

## Danh sách ảnh/video cần thiết

### Ảnh tiểu sử
- [ ] Hồ Chí Minh thời trẻ (1920s)
- [ ] Bến cảng Nhà Rồng (1911)
- [ ] Hồ Chí Minh ở nước ngoài
- [ ] Thành lập Đảng Cộng sản Việt Nam (1930)
- [ ] Đọc Tuyên ngôn Độc lập (1945)
- [ ] Hồ Chí Minh cuối đời (1960s)

### Video quan trọng
- [ ] Đọc Tuyên ngôn Độc lập (1945)
- [ ] Phát biểu tại các hội nghị
- [ ] Hồ Chí Minh với thiếu nhi
- [ ] Hồ Chí Minh làm việc

### Audio
- [ ] Giọng đọc Tuyên ngôn Độc lập
- [ ] Các bài phát biểu quan trọng
- [ ] Bài hát "Như có Bác Hồ trong ngày vui đại thắng"
