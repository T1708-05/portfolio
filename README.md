# 🛡️ Portfolio - Vũ Văn Thông

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Information%20Security-blue?style=for-the-badge&logo=shield&logoColor=white)
![Student](https://img.shields.io/badge/Student-Year%203-green?style=for-the-badge&logo=graduation-cap&logoColor=white)
![University](https://img.shields.io/badge/University-HCMUTE-orange?style=for-the-badge&logo=university&logoColor=white)

**Sinh viên năm 3 - Chuyên ngành An toàn thông tin**  
**Đại học Sư Phạm Kĩ Thuật Hồ Chí Minh**

[![GitHub](https://img.shields.io/badge/GitHub-vanity1412-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vanity1412)

</div>

---

## 📋 Mục lục

- [👨‍💻 Giới thiệu](#-giới-thiệu)
- [🎯 Mục tiêu](#-mục-tiêu)
- [🌟 Tính năng Portfolio](#-tính-năng-portfolio)
- [🛠️ Công nghệ sử dụng](#️-công-nghệ-sử-dụng)
- [📚 Học vấn & Chứng chỉ](#-học-vấn--chứng-chỉ)
- [🔧 Kỹ năng](#-kỹ-năng)
- [🚀 Dự án](#-dự-án)
- [📚 Blog Posts](#-blog-posts)
- [📊 Thống kê](#-thống-kê)
- [📞 Liên hệ](#-liên-hệ)
- [📄 Cấu trúc dự án](#-cấu-trúc-dự-án)
- [💻 Hướng dẫn sử dụng](#-hướng-dẫn-sử-dụng)
- [📝 License](#-license)
- [🙏 Credits & Acknowledgments](#-credits--acknowledgments)
- [🔮 Future Updates](#-future-updates)

---

## 👨‍💻 Giới thiệu

Xin chào! Tôi là **Vũ Văn Thông**, sinh viên năm 3 chuyên ngành **An toàn thông tin** tại Đại học Sư Phạm Kĩ Thuật Hồ Chí Minh. Với niềm đam mê về bảo mật mạng và an ninh thông tin, tôi đang học tập và phát triển kỹ năng trong lĩnh vực bảo vệ hệ thống, phân tích malware và đánh giá rủi ro bảo mật.

## 🎯 Mục tiêu

- 🔒 Trở thành chuyên gia bảo mật mạng
- 🛡️ Phát triển kỹ năng penetration testing
- 🔍 Nâng cao khả năng phân tích malware
- 📈 Tham gia các cuộc thi CTF và bảo mật
- 🎓 Tốt nghiệp với GPA cao

---

## 🌟 Tính năng Portfolio

### ✨ Giao diện & UI/UX

- 🎨 **Thiết kế hiện đại**: Gradient backgrounds, animations mượt mà, UI/UX tối ưu
- 🖱️ **Custom Cursor**: Con trỏ chuột tùy chỉnh với hiệu ứng glow và particles (chỉ trên desktop >768px)
- 🌈 **Background động**: Mesh gradient background lung linh nhưng không làm mất chữ
- 📱 **Responsive Design**: Hoàn toàn responsive trên mọi thiết bị (mobile, tablet, desktop)
- ⚡ **Smooth Animations**: 
  - Scroll-triggered fade-in animations với Intersection Observer
  - Parallax effect cho hero section
  - Hover effects trên tất cả interactive elements
  - Page transitions mượt mà
- 🎨 **Glass Morphism**: Backdrop blur effects trên các cards
- ✨ **Glow Effects**: Glow effects trên buttons và links
- 📜 **Custom Scrollbar**: Custom styled scrollbar

### 🎵 Audio Player

- 🎶 **Global Audio Player**: Nhạc phát liên tục qua tất cả các trang không bị ngắt
- 🔄 **Playlist System**: 3 bài nhạc piano tự động chuyển đổi:
  - Beethoven1.mp3
  - Beethoven2_Virus.mp3
  - Beethoven3.mp3
- 💾 **State Persistence**: Lưu trạng thái phát nhạc (isPlaying, volume, currentSongIndex, currentTime) bằng localStorage
- 🔊 **Volume Control**: Điều chỉnh âm lượng trực tiếp trên player
- 🔁 **Auto-resume**: Tự động tiếp tục phát khi chuyển trang
- 📱 **Visibility API**: Tự động pause/resume khi tab không active

### 📝 Blog System

- 📚 **9+ Blog Posts**: Chia sẻ kiến thức về SOC, Blue Team, Cloud Security
- 🏷️ **Category Filter**: Lọc bài viết theo chủ đề (Blue Team, Cloud, Projects, Writeup)
- 🔍 **Search Functionality**: Tìm kiếm bài viết theo tiêu đề và nội dung
- 📱 **Sidebar**: Sidebar hiển thị thông tin cá nhân trên mọi trang blog
- 📊 **Reading Progress**: Thanh tiến độ đọc bài viết
- 📋 **Code Highlighting**: Syntax highlighting cho code blocks với Prism.js
- 📤 **Share Buttons**: Chia sẻ bài viết lên Facebook, Twitter, LinkedIn
- 📋 **Copy Code**: Nút copy code trong code blocks

### 🧩 Component Architecture

- 📦 **Modular Components**: Header, Footer, Sidebar được load động từ file riêng
- 🔄 **Smart Path Detection**: Tự động điều chỉnh đường dẫn dựa trên vị trí trang hiện tại
- 📱 **Responsive Sidebar**: 
  - Desktop: Sidebar luôn hiển thị bên trái
  - Mobile: Sidebar ẩn mặc định, có thể toggle mở/đóng
- 🔗 **Dynamic Navigation**: Navigation links tự động cập nhật dựa trên vị trí hiện tại

### 🎯 Tính năng khác

- 📸 **Lazy Loading Images**: Tối ưu performance với lazy loading
- ⌨️ **Keyboard Navigation**: Hỗ trợ điều hướng bằng bàn phím (ESC để đóng menu)
- ♿ **Accessibility**: Focus management và ARIA labels
- 🚀 **Performance Optimization**: 
  - Debounced scroll events
  - Image preloading
  - Intersection Observer cho animations
- 💼 **Project Filtering**: Lọc dự án theo category (Security, Forensics, Crypto, Web)
- 📊 **Skills Visualization**: Progress bars với animation khi scroll đến section
- 📧 **Contact Form**: Form liên hệ với validation

---

## 🛠️ Công nghệ sử dụng

### Frontend Core

- **HTML5**: Semantic markup, accessibility, modern structure
- **CSS3**: 
  - Custom Properties (CSS Variables)
  - Flexbox & Grid Layout
  - Animations & Transitions (keyframes, transform, opacity)
  - Backdrop Filters (glass morphism effects)
  - Responsive Media Queries
  - Advanced selectors và pseudo-elements
- **JavaScript (ES6+)**:
  - Classes & Modules
  - Arrow Functions
  - Template Literals
  - Destructuring
  - LocalStorage API
  - Intersection Observer API
  - RequestAnimationFrame
  - Fetch API
  - Event Delegation

### Libraries & Frameworks

- 🎨 **Font Awesome 6.4.0**: Icons library với 1000+ icons
- 🔤 **Google Fonts (Poppins)**: Typography với multiple weights (300-700)
- 💻 **Prism.js 1.29.0**: Code syntax highlighting cho blog posts
  - Supports multiple languages (KQL, Python, Bash, PowerShell, SQL)
  - Dark theme (prism-tomorrow)
  - Auto-loader plugin
- 🎵 **HTML5 Audio API**: Audio player functionality với full control

### Tools & Features

- **Component Loader**: Dynamic component loading với Fetch API
- **State Management**: LocalStorage cho audio state persistence
- **Performance Optimization**: 
  - Debounced scroll events (10ms delay)
  - Image preloading
  - Lazy loading với Intersection Observer
  - RequestAnimationFrame cho smooth animations
- **Browser APIs Used**:
  - LocalStorage API
  - Intersection Observer API
  - Visibility API
  - Clipboard API
  - History API

### Security Tools (Skills)

- **Wireshark**: Network protocol analyzer
- **Metasploit**: Penetration testing framework
- **Nmap**: Network scanning và discovery
- **Burp Suite**: Web application security testing
- **IDA Pro**: Disassembler và debugger
- **Autopsy**: Digital forensics platform
- **FTK Imager**: Forensic toolkit
- **Volatility**: Memory forensics framework
- **YARA**: Pattern matching cho malware detection
- **Nessus**: Vulnerability scanner
- **OWASP ZAP**: Web application security scanner
- **SQLMap**: SQL injection testing tool

### Programming Languages

- **Python**: Scripting, automation, security tools
- **Linux**: System administration, shell scripting
- **C/C++**: System programming, low-level operations
- **SQL**: Database queries, analysis
- **JavaScript**: Frontend development, DOM manipulation
- **HTML/CSS**: Web development, responsive design

---

## 📚 Học vấn & Chứng chỉ

### 🎓 Học vấn
- **Cử nhân An toàn thông tin** - Đại học Sư Phạm Kĩ Thuật Hồ Chí Minh (2022-2026)
- **GPA hiện tại:** 8.5+
- **Chuyên ngành:** An toàn thông tin và Bảo mật mạng
- **Năm học:** Năm 3

### 🏆 Chứng chỉ & Thành tích

| Chứng chỉ | Tổ chức | Năm | Mô tả |
|-----------|---------|-----|-------|
| 🏅 **MOS** | Microsoft | 2023 | Microsoft Office Specialist (Word, Excel, PowerPoint) |
| 🛡️ **CAPT** | EC-Council | 2024 | Certified Advanced Penetration Tester |
| 🏆 **Olympic Toán** | Bộ GD&ĐT | 2023 | Olympic Toán học Sinh viên toàn quốc |
| 🥈 **Giải Nhì CTF** | HCMUTE | 2024 | Cuộc thi CTF cấp trường - An toàn thông tin |
| 🥉 **Giải Khuyến khích CTF** | HCMUTE | 2025 | Cuộc thi CTF cấp trường - An toàn thông tin |

---

## 🔧 Kỹ năng

### 🔒 An toàn thông tin
- **Network Security** - 85%
- **Penetration Testing** - 80%
- **Malware Analysis** - 75%
- **Cryptography** - 70%
- **Digital Forensics** - 65%

### 🛠️ Tools & Technologies
- **Wireshark** - 85% - Phân tích mạng
- **Metasploit** - 80% - Penetration testing
- **Nmap** - 85% - Network scanning
- **Burp Suite** - 75% - Web application testing

### 💻 Programming & Others
- **Python** - 80%
- **Linux** - 85%
- **C/C++** - 70%
- **SQL** - 75%

---

## 🚀 Dự án

### 🔍 Network Security Assessment
- **Mô tả:** Đánh giá bảo mật mạng doanh nghiệp và phát hiện lỗ hổng
- **Công nghệ:** Nmap, Nessus, Wireshark, OWASP
- **Kết quả:** Phát hiện 15+ lỗ hổng bảo mật

### 🌐 Web Application Penetration Testing
- **Mô tả:** Kiểm thử xâm nhập ứng dụng web và báo cáo lỗ hổng
- **Công nghệ:** Burp Suite, SQLMap, OWASP ZAP, Nmap
- **Kết quả:** Báo cáo chi tiết 20+ lỗ hổng

### 🔐 Malware Analysis Lab
- **Mô tả:** Phân tích và nghiên cứu malware mẫu
- **Công nghệ:** IDA Pro, Wireshark, VMware, YARA
- **Kết quả:** Phân tích 50+ mẫu malware

### 🔍 Digital Forensics Investigation
- **Mô tả:** Điều tra pháp lý số, thu thập và phân tích bằng chứng
- **Công nghệ:** Autopsy, FTK Imager, Volatility, Wireshark
- **Kết quả:** Báo cáo pháp lý chi tiết

### 🎯 Social Engineering Awareness
- **Mô tả:** Nghiên cứu và phát triển chương trình nâng cao nhận thức
- **Công nghệ:** Phishing Simulation, Training Materials, Assessment Tools
- **Kết quả:** Chương trình đào tạo hoàn chỉnh

### 📝 Assignment Index - Lập trình Web
- **Mô tả:** Trang web quản lý danh sách bài tập với tính năng tìm kiếm thông minh
- **Công nghệ:** HTML5, CSS3, JavaScript, Responsive Design
- **Tính năng:** Search Functionality, Card Layout, Mobile Friendly
- **Link:** `posts/projects/web_homework.html`

---

## 📊 Thống kê

<div align="center">

| Chỉ số | Giá trị |
|--------|---------|
| 📚 **Năm học** | 3 |
| 📈 **GPA hiện tại** | 8.5+ |
| 🛠️ **Dự án bảo mật** | 15+ |
| 📝 **Blog Posts** | 9+ |
| 🏆 **Chứng chỉ** | 5 |
| 🎨 **CSS Lines** | 2500+ |
| 💻 **JS Lines** | 2000+ |
| 📄 **HTML Pages** | 15+ |
| 🎵 **Audio Tracks** | 3 |
| 🖼️ **Images** | 10+ |

</div>

---

## 📞 Liên hệ

<div align="center">

### 📱 Thông tin liên hệ

| Thông tin | Chi tiết |
|-----------|----------|
| 📧 **Email** | vvthong.insec@gmail.com |
| 📞 **Phone** | 0968046024 |
| 📍 **Địa chỉ** | Số 1, Võ Văn Ngân, Thủ Đức, TP.HCM |
| 🏫 **Trường** | Đại học Sư Phạm Kĩ Thuật Hồ Chí Minh |
| 🎓 **Chuyên ngành** | An toàn thông tin |

### 🌐 Mạng xã hội

[![Facebook](https://img.shields.io/badge/Facebook-thong.vu.871003-blue?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/thong.vu.871003)
[![GitHub](https://img.shields.io/badge/GitHub-vanity1412-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vanity1412)
[![HackMD](https://img.shields.io/badge/HackMD-vinety-green?style=for-the-badge&logo=hackmd&logoColor=white)](https://hackmd.io/@vinety)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Thông%20Vũ%20Văn-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/th%C3%B4ng-v%C5%A9-v%C4%83n-506966200/)

</div>

---

## 📄 Cấu trúc dự án

```
Porfolio_VVTR/
│
├── 📄 index.html              # Trang chủ
├── 📄 blog.html               # Trang blog index
├── 📄 header.html             # Header component
├── 📄 footer.html             # Footer component
├── 📄 sidebar.html            # Sidebar component
│
├── 📂 components/             # Các trang component
│   ├── about.html            # Giới thiệu về tôi
│   ├── contact.html          # Trang liên hệ
│   ├── projects.html         # Dự án
│   └── skills.html           # Kỹ năng & Chứng chỉ
│
├── 📂 posts/                  # Blog posts
│   ├── 📂 blue/              # Blue Team posts (6 bài)
│   │   ├── soc-introduction.html
│   │   ├── incident-response.html
│   │   ├── red-blue-purple-teams.html
│   │   ├── brute-force-windows-login.html
│   │   ├── beacon-detection-challenge.html
│   │   └── ransomware-response-challenge.html
│   │
│   ├── 📂 cloud/             # Cloud Security posts (1 bài)
│   │   └── aws-misconfigurations.html
│   │
│   └── 📂 projects/          # Project posts (2 bài)
│       ├── soc-lab-wazuh.html
│       └── web_homework.html
│
├── 📂 assets/
│   ├── 📂 css/               # Stylesheets
│   │   ├── style.css        # Main stylesheet (2500+ lines)
│   │   └── blog.css         # Blog-specific styles
│   │
│   ├── 📂 js/                # JavaScript files
│   │   ├── animations.js    # Custom cursor & animations
│   │   ├── global-audio.js  # Global audio player (407 lines)
│   │   ├── audio-player.js  # Audio player UI
│   │   ├── blog.js          # Blog functionality (460 lines)
│   │   ├── load-components.js # Component loader (218 lines)
│   │   └── script.js        # Main scripts (455 lines)
│   │
│   ├── 📂 img/               # Images
│   │   ├── myface.jpg       # Profile image
│   │   ├── Blueteam.png     # Blog image
│   │   ├── Cert_CAPT.png    # CAPT Certificate
│   │   ├── Cert_MOS.png     # MOS Certificate
│   │   ├── CTF2024.png      # CTF 2024 Certificate
│   │   ├── CTF2025.png      # CTF 2025 Certificate
│   │   ├── GiaiKKCTF2025.png # Giải Khuyến khích CTF 2025
│   │   ├── GiaiNhiCTF2024.png # Giải Nhì CTF 2024
│   │   ├── Olympic_Toán_SV.png # Olympic Toán Sinh viên
│   │   ├── Olympic_Toán_SV1.png # Olympic Toán Sinh viên (2)
│   │   └── 📂 blue/
│   │       └── 📂 Lab_SOC/
│   │           └── setup1.png
│   │
│   └── 📂 Music/             # Audio files
│       ├── Beethoven1.mp3
│       ├── Beethoven2_Virus.mp3
│       └── Beethoven3.mp3
│
└── 📄 README.md              # File này
```

## 📝 License

Dự án này được tạo ra cho mục đích cá nhân và học tập.  
Bạn có thể tự do sử dụng code làm reference cho portfolio của mình.

---

## 🙏 Credits & Acknowledgments

- **Font Awesome**: Icons library
- **Google Fonts**: Poppins font family
- **Prism.js**: Code syntax highlighting
- **Unsplash**: Some placeholder images

---

## 🔮 Future Updates

- [ ] Thêm dark mode toggle
- [ ] Thêm search functionality cho blog (đã có basic)
- [ ] Thêm comments system
- [ ] Thêm RSS feed
- [ ] Optimize performance
- [ ] Thêm PWA support
- [ ] Thêm i18n (Đa ngôn ngữ)
- [ ] Thêm animation cho blog posts
- [ ] Thêm tags system cho blog
- [ ] Thêm related posts section

---

<div align="center">

### 🌟 "Bảo mật không phải là sản phẩm, mà là một quá trình" 🌟

**Made with ❤️ by Vũ Văn Thông**

[![GitHub stars](https://img.shields.io/github/stars/vanity1412/portfolio?style=social)](https://github.com/vanity1412)
[![GitHub followers](https://img.shields.io/github/followers/vanity1412?style=social)](https://github.com/vanity1412)

</div>

## 📚 Blog Posts

### 🔵 Blue Team (6 bài viết)

1. **SOC là gì? Giới thiệu đơn giản về Security Operations Center**
   - Ngày đăng: 29 Tháng 10, 2025
   - Thời gian đọc: 8 phút
   - Nội dung: Hướng dẫn cơ bản về SOC cho người mới bắt đầu
   - Link: `posts/blue/soc-introduction.html`

2. **Blue Team: Làm gì khi bị tấn công?**
   - Ngày đăng: 28 Tháng 10, 2025
   - Thời gian đọc: 10 phút
   - Nội dung: Quy trình Incident Response (IR) cơ bản - 6 bước vàng
   - Link: `posts/blue/incident-response.html`

3. **Phân biệt Red Team – Blue Team – Purple Team**
   - Ngày đăng: 27 Tháng 10, 2025
   - Thời gian đọc: 7 phút
   - Nội dung: Hiểu rõ vai trò của từng "màu" trong bảo mật mạng
   - Link: `posts/blue/red-blue-purple-teams.html`

4. **Brute-force Windows Login: Nhật ký SOC của sinh viên năm 3**
   - Ngày đăng: 30 Tháng 10, 2025
   - Thời gian đọc: 15 phút
   - Nội dung: Phát hiện và xử lý brute-force RDP trong lab SOC mini
   - Link: `posts/blue/brute-force-windows-login.html`

5. **Beacon Detection Challenge: Nhật ký SOC của sinh viên năm 3**
   - Ngày đăng: 31 Tháng 10, 2025
   - Thời gian đọc: 18 phút
   - Nội dung: Phát hiện C2 beaconing patterns, correlation logs từ DNS, HTTP/TLS, EDR, NetFlow
   - Link: `posts/blue/beacon-detection-challenge.html`

6. **Ransomware Response Challenge: Nhật ký SOC của sinh viên năm 3**
   - Ngày đăng: 1 Tháng 11, 2025
   - Thời gian đọc: 20 phút
   - Nội dung: Phát hiện và xử lý ransomware outbreak với IR timeline chi tiết
   - Link: `posts/blue/ransomware-response-challenge.html`

### ☁️ Cloud Security (1 bài viết)

1. **10 cấu hình sai phổ biến nhất trên AWS khiến hệ thống "lộ bụng"**
   - Ngày đăng: 26 Tháng 10, 2025
   - Thời gian đọc: 12 phút
   - Nội dung: Misconfiguration là nguyên nhân hàng đầu dẫn đến lộ lọt dữ liệu trên đám mây
   - Link: `posts/cloud/aws-misconfigurations.html`

### 🚀 Projects (2 bài viết)

1. **Tự xây dựng lab SOC mini tại nhà với Wazuh và VirtualBox**
   - Ngày đăng: 28 Tháng 10, 2025
   - Thời gian đọc: 25 phút
   - Nội dung: Hướng dẫn chi tiết từng bước xây dựng lab SOC với Wazuh SIEM
   - Link: `posts/projects/soc-lab-wazuh.html`

2. **Assignment Index - Lập trình Web**
   - Nội dung: Trang web quản lý danh sách bài tập với tính năng tìm kiếm thông minh
   - Tính năng: Search Functionality, Card Layout, Mobile Friendly
   - Link: `posts/projects/web_homework.html`

---

## 💻 Hướng dẫn sử dụng

### Cài đặt

1. Clone repository:
```bash
git clone https://github.com/vanity1412/portfolio.git
cd portfolio
```

2. Mở file `index.html` trong trình duyệt:
```bash
# Hoặc sử dụng local server
python -m http.server 8000
# Truy cập http://localhost:8000
```

### Tính năng chính

#### 🎵 Audio Player
- Click vào nút play/pause để bắt đầu/dừng nhạc
- Điều chỉnh volume bằng slider
- Nhạc sẽ phát liên tục khi chuyển trang (sử dụng localStorage)
- Playlist tự động chuyển bài khi bài hiện tại kết thúc
- State được lưu tự động mỗi 2 giây và khi đóng trang

#### 🖱️ Custom Cursor
- Chỉ hoạt động trên desktop (>768px)
- Hover vào các element để thấy hiệu ứng
- Particles tự động di chuyển xung quanh cursor
- Cursor thay đổi kích thước khi hover vào interactive elements

#### 📱 Sidebar
- **Desktop**: Sidebar luôn hiển thị bên trái
- **Mobile**: Click vào nút menu để mở/đóng sidebar
- Sidebar hiển thị thông tin cá nhân, kỹ năng, và links mạng xã hội

#### 📝 Blog
- Click vào category filter để lọc bài viết
- Click vào bài viết để đọc chi tiết
- Sidebar hiển thị thông tin cá nhân trên mọi trang blog
- Code blocks có nút copy code
- Reading progress bar hiển thị tiến độ đọc
- Share buttons để chia sẻ bài viết lên Facebook, Twitter, LinkedIn

#### 📊 Skills Page
- Progress bars tự động animate khi scroll đến section
- Hover vào skill bars để thấy hiệu ứng
- Hiển thị chứng chỉ với hình ảnh
- Kỹ năng mềm với icons và mô tả

#### 🚀 Projects Page
- Filter projects theo category (Security, Forensics, Crypto, Web)
- Hover vào project cards để thấy overlay với links
- Click vào project để xem chi tiết

#### 📧 Contact Page
- Form liên hệ với validation
- FAQ section với accordion
- Multiple contact methods (Email, Phone, WhatsApp, Telegram)

---

## 🎨 Tính năng Portfolio - Tóm tắt

- ✅ **Responsive Design** - Tương thích mọi thiết bị
- ✅ **Modern UI/UX** - Giao diện hiện đại, tối giản
- ✅ **Smooth Animations** - Hiệu ứng mượt mà
- ✅ **Multi-page Structure** - Cấu trúc nhiều trang dễ quản lý
- ✅ **Interactive Elements** - Các thành phần tương tác
- ✅ **Certificate Display** - Hiển thị chứng chỉ với ảnh
- ✅ **Social Media Integration** - Tích hợp mạng xã hội
- ✅ **Blog System** - Hệ thống blog với phân loại
- ✅ **Component-based Architecture** - Kiến trúc component
- ✅ **Contact Form** - Form liên hệ tương tác
- ✅ **Project Filtering** - Lọc dự án theo danh mục
- ✅ **Skills Visualization** - Hiển thị kỹ năng với thanh tiến độ
- ✅ **Global Audio Player** - Nhạc phát liên tục qua các trang
- ✅ **Custom Cursor** - Con trỏ chuột tùy chỉnh với hiệu ứng
- ✅ **Dynamic Background** - Background động với mesh gradient
- ✅ **Code Highlighting** - Syntax highlighting cho blog posts
- ✅ **Reading Progress** - Thanh tiến độ đọc bài viết

---

<div align="center">

### 🌟 "Bảo mật không phải là sản phẩm, mà là một quá trình" 🌟

**Made with ❤️ by Vũ Văn Thông**

[![GitHub stars](https://img.shields.io/github/stars/vanity1412/portfolio?style=social)](https://github.com/vanity1412)
[![GitHub followers](https://img.shields.io/github/followers/vanity1412?style=social)](https://github.com/vanity1412)

</div>
