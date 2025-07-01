# Safiye Dalkıran - Kişisel Portfolio Sitesi

Bu proje, **Safiye Dalkıran**'ın kişisel portfolyo web sitesidir. Modern frontend teknolojileri (HTML, CSS, JavaScript, Tailwind CSS gibi) kullanılarak hazırlanmıştır. Sitede kişisel bilgiler, yetenekler, projeler ve iletişim bilgileri bulunmaktadır.

##  Özellikler

- **Responsif Tasarım:** Tüm cihazlarda mükemmel görünüm (mobil, tablet, masaüstü).
- **Karanlık/Parlak Mod Desteği:** Kullanıcılar dilediğinde temalar arasında geçiş yapabilir.
- **Modern UI:** Google Fonts, Tailwind CSS ve özel SVG ikonlar ile göze hoş gelen bir arayüz.
- **AOS (Animate On Scroll):** Bölümler kaydırıldıkça animasyonlar ile canlanır.
- **Kolay İletişim:** LinkedIn, GitHub ve e-posta kartları.
- **Projeler Bölümü:** Canlı demo ve GitHub bağlantılarıyla öne çıkan projeler.
- **Mobil Menü:** Hamburger menü ile mobilde kolay gezinme.

> **Not:** Görseller `/public/images/` veya `/images/` klasörlerinde yer almalıdır.

## 🛠Kullanılan Teknolojiler

- **HTML5**
- **CSS3 & Tailwind CSS**
- **JavaScript**
- **AOS (Animate On Scroll)**
- **Font Awesome & Google Fonts**

##  Kurulum ve Geliştirme

1. **Projeyi Klonlayın:**
   ```bash
   git clone https://github.com/saflye/portfolio.git
   cd portfolio
   ```
2. **Tailwind ile Çalışmak İçin:**
   - Eğer doğrudan CSS ile kullanıyorsanız ekstra bir şey yapmanıza gerek yok.
   - Tailwind ile geliştirme için `tailwindcss` kurulu olmalı ve `tailwind.config.js` dosyası hazırdır.
   - Gerekirse terminalden:
     ```bash
     npm install
     npx tailwindcss -i ./css/style.css -o ./public/css/style.css --watch
     ```
3. **Projeyi Başlatın:**
   - Sadece `index.html` dosyasını tarayıcıda açabilirsiniz.

## Özelleştirme

- **Renkler ve fontlar** `tailwind.config.js` dosyasında özelleştirilebilir.
- Profil ve proje görsellerinizi `/images/` klasörüne ekleyin ve ilgili `<img>` etiketlerini güncelleyin.
- Kendi projeleriniz için "Projelerim" bölümünü çoğaltabilirsiniz.

## 🌙 Karanlık / Parlak Mod

- Sayfanın sağ üst köşesindeki ☀️ veya 🌙 ikonlarına tıklayarak temalar arasında geçiş yapılabilir.
- Bu özellik, body'ye `dark` sınıfı ekleyip çıkararak çalışır.

## 📱 Mobil Duyarlılık

- Menü, mobilde hamburger ikonu ile açılır.
- Tüm bölümler responsive olarak tasarlanmıştır.

