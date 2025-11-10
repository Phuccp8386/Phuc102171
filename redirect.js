// Redirect script - Đảm bảo trang đầu tiên được mở là HCM.html
// File này có thể được include vào index.html hoặc các trang khác nếu cần

(function() {
    'use strict';
    
    // Kiểm tra nếu đang ở trang gốc (index.html hoặc domain gốc)
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop();
    
    // Danh sách các file được coi là trang gốc
    const rootFiles = ['index.html', 'index.htm', ''];
    
    // Nếu đang ở trang gốc, redirect đến HCM.html
    if (rootFiles.includes(currentFile) || currentPath === '/' || currentPath.endsWith('/')) {
        // Kiểm tra xem HCM.html có tồn tại không
        const targetUrl = 'HCM.html';
        
        // Sử dụng replace thay vì assign để không lưu vào history
        window.location.replace(targetUrl);
    }
    
    // Hàm helper để redirect đến HCM.html từ bất kỳ đâu
    function redirectToHome() {
        window.location.replace('HCM.html');
    }
    
    // Export function nếu cần sử dụng từ nơi khác
    if (typeof window !== 'undefined') {
        window.redirectToHome = redirectToHome;
    }
})();

