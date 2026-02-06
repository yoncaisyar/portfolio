# Yonca İşyar - Portfolyo Web Sitesi

Yonca İşyar için tasarlanmış modern, responsive portfolyo web sitesi.

## Özellikler

- ✨ Modern ve şık tasarım
- 🌙 Karanlık/Aydınlık mod
- 🌍 Türkçe/İngilizce dil desteği
- 📱 Mobil uyumlu (Responsive)
- 🎨 Smooth animasyonlar (Framer Motion)
- 🖼️ Proje slider'ı (Swiper.js)

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Projeyi derle
npm run build

# Derlenen projeyi önizle
npm run preview
```

## Görsel Ekleme

### Avatar/İllüstrasyon
Kendi görselinizi eklemek için:
1. `src/assets/` klasörüne görselinizi ekleyin (örn: `yonca-avatar.png`)
2. `src/components/Hero/Hero.jsx` dosyasında import satırını güncelleyin:
   ```jsx
   import placeholderImage from '../../assets/yonca-avatar.png';
   ```

### Proje Görselleri
Projelerinizin görsellerini eklemek için:
1. `public/projects/` klasörüne görsellerinizi ekleyin
2. Dosya isimleri şu şekilde olmalı:
   - `dior.jpg`
   - `branding.jpg`
   - `packaging.jpg`
   - `socialmedia.jpg`
   - `illustration.jpg`
   - `editorial.jpg`

## Teknolojiler

- **React 19** - UI framework
- **Vite** - Build tool
- **Framer Motion** - Animasyonlar
- **Swiper.js** - Slider component
- **i18next** - Çoklu dil
- **Lucide React** - İkonlar
- **CSS Modules** - Styling

## Kişiselleştirme

### Renkleri değiştirmek için:
`src/styles/variables.css` dosyasını düzenleyin.

### Metinleri değiştirmek için:
- Türkçe: `src/i18n/tr.json`
- İngilizce: `src/i18n/en.json`

### Sosyal medya linklerini değiştirmek için:
`src/components/Footer/Footer.jsx` dosyasındaki `socialLinks` array'ini düzenleyin.

### E-posta adresini değiştirmek için:
`src/components/Contact/Contact.jsx` dosyasındaki `mailto:` linkini düzenleyin.

## Lisans

© 2025 Yonca İşyar - Tüm hakları saklıdır.
