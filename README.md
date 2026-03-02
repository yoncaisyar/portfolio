# Yonca İşyar – Grafik Tasarımcı Portfolyo

Bu proje **Yonca İşyar**'ın grafik tasarım çalışmalarını sergileyen bir **web sitesidir**. Tarayıcıda açılan, tek sayfalık (single-page) bir portfolyo uygulamasıdır.

---

## Bu proje ne tür bir proje?

- **Web projesidir** — İnternet üzerinden tarayıcıda görüntülenir.
- **.NET projesi değildir** — Microsoft .NET veya C# kullanılmaz.
- **Sadece ön yüz (frontend)** — Sunucu tarafında veritabanı veya backend uygulaması yok; tüm içerik sayfa açıldığında tarayıcıda çalışır.

---

## Kullanılan teknolojiler (basit açıklamalarla)

Aşağıdaki liste, yazılım bilgisi az olan biri için sade bir dille yazılmıştır.

### 1. **React**
- **Ne:** Sayfadaki arayüzü parça parça (bileşenler halinde) yazmamızı sağlayan bir kütüphane.
- **Neden:** Menü, hero alanı, projeler bölümü, iletişim formu gibi kısımlar ayrı modüller olarak yazılıyor; böylece kod düzenli kalıyor ve tekrar kullanılabiliyor.
- **Basit benzetme:** Lego blokları gibi — her blok (bileşen) kendi başına bir parça, hepsi bir araya gelince tam site oluşuyor.

### 2. **JavaScript / JSX**
- **Ne:** Sitedeki tıklama, dil değiştirme, tema değiştirme gibi etkileşimleri yazan dil.
- **Neden:** Web sayfalarında “canlı” davranışlar (animasyon, form, buton tepkisi) genelde JavaScript ile yapılır; JSX ise React ile birlikte arayüzü yazmayı kolaylaştırır.
- **Basit benzetme:** Sayfanın “ne yapacağını” tarayıcıya anlatan talimatlar.

### 3. **TypeScript (kısmen)**
- **Ne:** JavaScript’e “tipler” ekleyen bir dil; bazı dosyalarda (ör. `vite.config.ts`, `useInView.ts`) kullanılıyor.
- **Neden:** Yazarken hata yakalamayı ve projeyi daha güvenli büyütmeyi kolaylaştırır.
- **Basit benzetme:** Etiketli kutular — her şeyin ne olduğu yazılı, karışıklık azalıyor.

### 4. **Vite**
- **Ne:** Projeyi geliştirirken çalıştıran ve yayına alırken “derleyen” (build) araç.
- **Neden:** Geliştirme sırasında anında yenileme ve hızlı build; canlıya alırken tüm dosyalar tek, optimize paketlere dönüşüyor.
- **Basit benzetme:** Hem mutfak (geliştirme) hem paketleme (yayın) işini yapan makine.

### 5. **CSS ve CSS Modülleri**
- **Ne:** Sayfanın renk, font, boşluk, animasyon gibi görünümünü belirleyen stiller. `.module.css` dosyaları her bileşenin kendi stillerini taşır.
- **Neden:** Stil isimleri bileşenlere özel olduğu için çakışma olmuyor; tasarım tutarlı ve yönetmesi kolay.
- **Basit benzetme:** Her odanın kendi dekorasyonu; karışmıyor.

### 6. **i18next / react-i18next**
- **Ne:** Çok dilli (Türkçe / İngilizce) metinleri yöneten kütüphane.
- **Neden:** Site tek kodda kalıyor; dil değişince metinler `tr.json` ve `en.json` dosyalarından okunuyor.
- **Basit benzetme:** Aynı vitrin, farklı dillerde etiketler.

### 7. **Framer Motion**
- **Ne:** Animasyon ve geçiş efektleri için kullanılan kütüphane.
- **Neden:** Giriş ekranı, proje kartları, butonlar gibi öğelerde akıcı hareketler sağlıyor; site daha dinamik hissediliyor.
- **Basit benzetme:** Sayfadaki öğelerin yumuşak hareket etmesini sağlayan “motor”.

### 8. **Swiper**
- **Ne:** Projeler bölümünde kullanılan kaydırmalı (slider) alan kütüphanesi.
- **Neden:** Proje görselleri yatay kaydırma ile gösteriliyor; mobil ve masaüstünde düzgün çalışıyor.
- **Basit benzetme:** Yatay bir “kaydırmalı galeri”.

### 9. **Lucide React & React Icons**
- **Ne:** Hazır ikon setleri (ok, menü, mail, sosyal medya vb.).
- **Neden:** Küçük ikonları elle çizmemek için; tutarlı ve hızlı kullanım.
- **Basit benzetme:** Hazır, uyumlu ikon paketi.

### 10. **ESLint**
- **Ne:** Kodun belirli kurallara uyup uymadığını kontrol eden araç.
- **Neden:** Yazım hataları ve ortak hatalar erkenden fark ediliyor; kod kalitesi artıyor.
- **Basit benzetme:** Yazım ve dil bilgisi kontrolü yapan program.

### 11. **Git & GitHub Pages**
- **Ne:** Git versiyon kontrolü; GitHub Pages ise sitenin barındırıldığı yer.
- **Neden:** Kodun geçmişi saklanıyor, değişiklikler takip ediliyor; build edilen site GitHub Pages’te yayınlanıyor.
- **Basit benzetme:** Projenin “arşivi” ve “canlı yayın adresi”.

---

## Proje yapısı (kısaca)

| Klasör / dosya   | İşlevi |
|------------------|--------|
| `src/components/` | Navbar, Hero, Projeler, İletişim, Footer gibi arayüz parçaları |
| `src/context/`    | Tema (açık/koyu) gibi uygulama genelinde kullanılan durum |
| `src/i18n/`       | Türkçe ve İngilizce metin dosyaları |
| `src/data/`       | Proje listesi ve kategoriler |
| `src/styles/`     | Genel ve ortak stiller |
| `index.html`      | Sitenin tek HTML iskeleti |
| `dist/`           | Yayına hazır, derlenmiş site (build çıktısı) |

---

## Nasıl çalıştırılır?

- **Geliştirme:** `npm run dev` — Yerelde geliştirme sunucusu açılır.
- **Yayına hazır build:** `npm run build` — `dist/` klasörü oluşur.
- **Yayınlama:** `npm run deploy` — Build alınır ve GitHub Pages’e gönderilir.

---

## Özet

Bu proje, **sadece tarayıcıda çalışan bir web (frontend) projesidir**; 
 React ile yazılmış, Vite ile derlenen, Türkçe/İngilizce destekli ve açık/koyu temalı bir grafik tasarımcı portfolyo sitesidir.


*** Proje açıklaması 
Bu projeyi React ile tek sayfalık bir web uygulaması olarak geliştirdim; arayüzü Vite, CSS Modülleri, Framer Motion ve Swiper ile kurdum, çok dillilik için i18next, ikonlar için Lucide React kullandım. Proje tamamen frontend; build alındıktan sonra GitHub Pages üzerinden yayınlanıyor.