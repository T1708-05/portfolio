How to open:
- If bạn mở bằng file:// (double-click): dùng thư mục /pages_inline để đảm bảo hoạt động không cần fetch includes.
- Nếu bạn chạy bằng server (Live Server / python -m http.server): dùng /pages (có include component).

Fix chính:
- Đã thêm class 'active' cho <article> ở mỗi trang để nội dung hiển thị.
- Đồng bộ filter Portfolio với data-category.

Assets:
- CSS gốc của bạn đã copy vào /assets/css/style.css
- script.js gốc được lưu tại /assets/js/original_script.js (không load mặc định).
