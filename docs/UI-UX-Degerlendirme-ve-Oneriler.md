# Yonca İşyar Portfolyo – UI/UX Değerlendirme ve Geliştirme Önerileri

Grafik tasarımcı portfolyosu için UI/UX prensipleri açısından mevcut durum ve iyileştirme önerileri.

---

## 1. Görsel Hiyerarşi (Visual Hierarchy)

**Mevcut durum:** Hero'da başlık (Playfair Display) ve gövde metni (Inter) iyi ayrılmış. Projeler bölümünde kategori başlıkları ve kart başlıkları net. Bölüm başlıkları (Projeler, İletişim) tekrarlı stil kullanıyor.

**Öneriler:**
- Ana başlık vurgusu: Hero'daki isim için hafif gradient veya text-shadow ile okunaklılık ve odak artırılabilir.
- Bölüm başlık tutarlılığı: Tüm bölüm başlıkları tek bir bileşen veya ortak class ile verilsin; tipografi ve boşluk tutarlı olsun.
- Proje kartlarında "kategori etiketi" (Logo Tasarımı, Afiş vb.) küçük bir badge olarak eklenebilir; ziyaretçi hangi tür işe baktığını daha hızlı anlar.

---

## 2. Tutarlılık (Consistency)

**Mevcut durum:** Renk paleti ve cam efektleri tutarlı. Buton stilleri benzer ama tam aynı değil. Contact bölümünde bölüm başlığı sabit "İletişim" (i18n kullanılmıyor).

**Öneriler:**
- Tüm arayüz metinleri (bölüm başlıkları dahil) i18n üzerinden gelsin.
- E-posta tek yerde tanımlansın; Contact ve Footer aynı adresi kullansın.
- Birincil aksiyonlar (CV butonları, "Hire Me Now") aynı border-radius, padding ve hover davranışına getirilebilir.

---

## 3. Erişilebilirlik (Accessibility)

**Mevcut durum:** `:focus-visible` var. Nav ve dil/tema butonlarında `aria-label` kısmen var. Klavye ile slider ve kategori menüsünde tam destek eksik.

**Öneriler:**
- "İçeriğe atla" (skip link) ekleyin; klavye kullanıcıları nav'ı atlayıp `main`'e inebilsin.
- `prefers-reduced-motion: reduce` ile animasyonları azaltın veya kapatın.
- Proje slider'da ok tuşları (← →) ile geçiş ve "Önceki/Sonraki proje" için `aria-label`.
- Kategori menüsü açıldığında odağı menüye taşıyın, Escape ile kapatın; klavye ile (ok tuşları + Enter) gezilebilir olsun.
- Tüm proje görsellerinde anlamlı `alt` metinleri (proje adı + kısa açıklama) kullanın.

---

## 4. Kullanıcı Kontrolü ve Geri Bildirim (User Control & Feedback)

**Mevcut durum:** Navbar scroll'da gizleniyor/gösteriliyor. Slider'da önceki/sonraki butonları net. Proje kartında hover ile detay gösteriliyor.

**Öneriler:**
- **Lightbox:** Proje kartına veya görsele tıklanınca tüm proje görselleri büyük görünümde açılsın; swipe/ok ile geçiş, X veya dışarı tıklama ile kapatma. Grafik portfolyosunda işleri büyük görmek çok önemli.
- Slider için mobilde "Kaydırarak ilerleyebilirsiniz" gibi kısa ipucu; bir kez gösterilip tekrarlanması engellenebilir.
- Görseller yüklenirken placeholder/skeleton; hata durumunda "Görsel yüklenemedi" ve yeniden deneme.

---

## 5. Boşluk ve Kompozisyon (Whitespace & Layout)

**Mevcut durum:** Spacing scale tutarlı. Hero iki sütun; projeler tek sütun, slider ortada. Mobilde SideProgress gizleniyor.

**Öneriler:**
- Projeler bölümünde `scroll-margin-top` navbar yüksekliği + boşluk olacak şekilde ayarlanabilir.
- Contact'ta min-height yerine içeriğe göre esnek yükseklik + yeterli padding.
- Footer'da hafif artan padding veya ince üst çizgi ile "sayfa sonu" hissi güçlendirilebilir.

---

## 6. Tipografi (Typography)

**Mevcut durum:** Inter (gövde) + Playfair Display (başlıklar); okunaklı. Font boyutları scale'e bağlı; responsive'de ölçekleniyor.

**Öneriler:**
- İstenirse display başlıklar için daha karakterli bir font eklenebilir; mevcut kombinasyon da profesyonel.
- Açıklama metinlerinde max-width (örn. 65ch) ile satır uzunluğu sınırlanabilir.
- Türkçe/İngilizce için mevcut fontlar yeterli.

---

## 7. Renk ve Kontrast (Color & Contrast)

**Mevcut durum:** Koyu/açık tema tutarlı; cam bileşenlerde border ve arka plan düşük kontrastlı; genel okunaklılık iyi.

**Öneriler:**
- Metin/arka plan oranlarını WCAG AA (4.5:1 gövde, 3:1 büyük metin) ile doğrulayın; özellikle `color-text-muted` ve cam üzerindeki yazılar.
- Accent rengi sadece etkileşimli öğeler ve vurgularda kalsın.
- Hover/focus'ta hem renk hem hafif scale/underline gibi ikinci bir ipucu eklenebilir.

---

## 8. Mobil Deneyim (Mobile UX)

**Mevcut durum:** Hamburger menü, Swiper ile dokunma kaydırma, SideProgress mobilde gizli, Hero butonları tam genişlik.

**Öneriler:**
- Tüm tıklanabilir öğeler en az 44x44px olsun.
- Proje kartında mobilde "Detay için dokunun" ipucu veya ikon eklenebilir.
- Navbar'ın mobilde her zaman (yarı saydam) görünür kalması isteğe bağlı test edilebilir.

---

## 9. Performans ve Algılanan Hız (Performance)

**Mevcut durum:** Vite + React; görseller `public` altında; lazy loading açıkça kullanılmıyor.

**Öneriler:**
- Proje görsellerine `loading="lazy"` veya viewport'a girince yükleme; Hero görseli hemen yüklensin.
- Görsellere `width`/`height` veya `aspect-ratio` vererek layout shift (CLS) azaltılsın.

---

## 10. İçerik ve Mesaj (Content & Messaging)

**Mevcut durum:** Hero'da kısa tanıtım ve CV butonları; projeler kategori bazlı; Contact'ta tek CTA (e-posta).

**Öneriler:**
- Contact'ta e-posta adresi doğru ve tek olsun; bölüm başlığı i18n'den gelsin.
- Footer marka adı (Yoncisyar / Yonca İşyar) tutarlı kullanılsın.
- İllüstrasyon kategorisinde boş açıklamalar için en azından kısa bir cümle eklenebilir.
- CV indirme dosya adı tasarımcı adıyla uyumlu olabilir (örn. Yonca-Isyar-CV.pdf).

---

## Öncelik Sıralaması (Uygulama Önerisi)

| Öncelik | Öneri | Etki | Zorluk |
|--------|--------|------|--------|
| 1 | Contact: i18n bölüm başlığı + doğru e-posta | Yüksek | Düşük |
| 2 | Skip link + prefers-reduced-motion | Erişilebilirlik | Düşük |
| 3 | Proje lightbox (tıklanınca büyük görünüm) | Çok yüksek | Orta |
| 4 | Slider klavye desteği + aria | Erişilebilirlik | Düşük |
| 5 | Görsel lazy loading + alt metinleri | Performans + erişilebilirlik | Orta |
| 6 | Mobil "detay için dokunun" ipucu | Mobil UX | Düşük |
| 7 | Bölüm başlığı bileşeni (tutarlılık) | Tutarlılık | Düşük |
| 8 | Kontrast (WCAG) kontrolü | Erişilebilirlik | Düşük |

Bu sırayla ilerleyerek hem görsel hem işlevsel olarak portfolyoyu güçlendirebilirsiniz. Önce 1–2 ve 4'ü, ardından lightbox ve görsel optimizasyonunu uygulamanız mantıklı olur.
