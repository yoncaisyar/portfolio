// Base URL for assets (handles GitHub Pages subdirectory)
const baseUrl = import.meta.env.BASE_URL;

// Kategori bazlı proje verileri
export const categories = [
  {
    id: 'logo-tasarimi',
    title: 'Logo Tasarımı',
    projects: [
      {
        id: 'arboris',
        title: 'Arboris',
        subtitle: 'Ulusal Mobilya Firması',
        description: 'Arboris logosunun amblemi, parmak izi ile ağaç köklerini birleştiren eşsiz bir tasarımdır. Parmak İzi: Markanın benzersizliğini ve her alanda iz bırakma hedefini temsil eder. Ağaç Kökleri: Markanın köklü yapısını ve sürdürülebilirlik anlayışını yansıtır. Bu güçlü sembol, hem markanın eşsizliğini hem de köklü ve sağlam duruşunu görsel olarak ifade eder.',
        images: [
          `${baseUrl}projects/logo_tasarimi/arboris1.jpeg`,
          `${baseUrl}projects/logo_tasarimi/arboris2.jpeg`
        ]
      },
      {
        id: 'selcuk',
        title: 'Selçuk Ecza Deposu',
        subtitle: 'Kurumsal Kimlik',
        description: '"Selçuk Ecza Deposu" için yeniden tasarlanan bu logo, sağlık sektörünün güven ve otoritesini modern bir dille yansıtıyor. Tasarım, eczacılığın evrensel simgesi olan asaya sarılı yılan figürünü, geleneksel Selçuklu motiflerini çağrıştıran geometrik bir yıldız formunun içine yerleştiriyor. Bu minimal ve anlamlı tasarım, kurumun köklü geçmişi ile modern hizmet anlayışını birleştiriyor.',
        images: [
          `${baseUrl}projects/logo_tasarimi/selcuk1.jpeg`,
          `${baseUrl}projects/logo_tasarimi/selcuk2.jpeg`,
          `${baseUrl}projects/logo_tasarimi/selcuk22.jpeg`
        ]
      },
      {
        id: 'wush',
        title: 'Wush Wush Coffee',
        subtitle: 'Kahve Dükkanı',
        description: 'Wush Wush Coffee Shop için yeniden tasarlanan bu logo, dükkanın baş harfi olan "W"yi, kahve kupası formuyla ustaca birleştirir. Koyu kahverengi ile krem tonlarının kullanıldığı merkezdeki akışkan ve dalgalı "W" formu, sadece kahve buharını değil, aynı zamanda Wush Wush kahvesinin yetiştiği yüksek rakımlı dağlık alanların soyut bir temsili olarak da işlev görür.',
        images: [
          `${baseUrl}projects/logo_tasarimi/wush1.jpeg`,
          `${baseUrl}projects/logo_tasarimi/wush2.jpeg`
        ]
      }
    ]
  },
  {
    id: 'afis-reklam',
    title: 'Afiş ve Reklam Kampanyaları',
    projects: [
      {
        id: 'dior',
        title: 'DIOR',
        subtitle: 'Gözlük Koleksiyonu',
        description: 'Bu afiş kampanyası, Dior markasının yeni gözlük koleksiyonunu tanıtmak amacıyla, "PARIS O KADAR YAKINDA" sloganıyla lüks ve ulaşılabilir bir rüyayı birleştiriyor. Kampanya, gözlükleri sadece bir moda aksesuarı olarak değil, takan kişiye Paris\'in zarafetini, cazibesini ve stilini bir bakış uzaklığına getiren bir portal olarak konumlandırıyor. Gizemli bir çekiciliğe sahip model görseli, Dior gözlüklerin ardındaki kendine güveni ve sofistikasyonu vurgularken; büyük ölçekli billboardlardan AVM panolarına kadar çeşitli mecralarda kullanılarak, hedef kitlesine küresel modanın kalbine bir davet sunuyor.',
        images: [
          `${baseUrl}projects/afis_reklam/dior1.jpeg`,
          `${baseUrl}projects/afis_reklam/dior2.jpeg`
        ]
      },
      {
        id: 'yetenek-sinavi',
        title: 'Yetenek Sınavı',
        subtitle: 'Konservatuvar',
        description: 'Konservatuvarın 2025 yılı yetenek sınavı için hazırlanmış bu afiş, klasik sanat ve müzik temasını zarif bir tipografi ve illüstratif keman figürüyle birleştiriyor. Estetik çizgiler ve nota görselleriyle sanatsal bir atmosfer oluşturulmuştur.',
        images: [
          `${baseUrl}projects/afis_reklam/devlet1.jpeg`,
          `${baseUrl}projects/afis_reklam/devlet2.jpeg`
        ]
      },
      {
        id: 'arboris-afis',
        title: 'ARBORİS',
        subtitle: 'Kampanya Afişi',
        description: 'ARBORİS firmasına özel olarak tasarlanan bu reklam afişi, "Tüm Tekli Koltuklarda %30 İndirim" kampanyasını sade ve klasik bir kompozisyonla sunar. Yumuşak tonlar, doğal doku hissi ve zarif bir font tercih edilerek markanın sıcak ve güvenilir imajı vurgulanmıştır.',
        images: [
          `${baseUrl}projects/afis_reklam/arboriss1.jpeg`,
          `${baseUrl}projects/afis_reklam/arboriss2.jpeg`,
          `${baseUrl}projects/afis_reklam/arboriss3.jpeg`
        ]
      },
      {
        id: 'bilgilendirme-yarisma',
        title: 'Bilgilendirme Ve Yarışma',
        subtitle: 'Su Kıtlığı Farkındalığı',
        description: 'Su kıtlığına dikkat çekmek amacıyla tasarlanan bu afiş, minimal bir yaklaşım benimsiyor. Mavi zemin ve sade ikonografik karpuz dilimi sembolüyle, "su olmadan yaşam olmaz" mesajı sade ama güçlü bir biçimde aktarılıyor. Tasarım, çevresel farkındalık yaratmayı hedefleyen bir yarışma kapsamında hazırlandı.',
        images: [
          `${baseUrl}projects/afis_reklam/food1.jpeg`,
          `${baseUrl}projects/afis_reklam/food2.jpeg`
        ]
      },
      {
        id: 'selcuk-ecza-afis',
        title: 'Selçuk Ecza',
        subtitle: 'Billboard Tasarımı',
        description: 'Selçuk Ecza Deposu için hazırladığım bu billboard tasarımında, markanın güven ve sağlık temalarını öne çıkardım. "Her Bagajla Sağlığınız Güvence Altında" sloganı, görselde yer alan bagaj bandı ve medikal çanta kompozisyonuyla desteklenerek, markanın güvenilir hizmet anlayışını güçlü bir görsel mesajla aktarmaktadır.',
        images: [
          `${baseUrl}projects/afis_reklam/selcukecza1.jpeg`,
          `${baseUrl}projects/afis_reklam/selcukecza2.jpeg`
        ]
      }
    ]
  },
  {
    id: 'ambalaj-tasarimi',
    title: 'Ambalaj Tasarımı',
    projects: [
      {
        id: 'johnsons-baby',
        title: 'Johnsons Baby',
        subtitle: 'Bebek Ürünleri',
        description: 'Johnsons Baby markası için tasarlanan bu ambalaj serisi, sevimli penguen karakterleri ve pastel renk paletiyle bebek ürünlerinin yumuşak ve güvenilir doğasını yansıtıyor. Her ürün için özel tasarlanmış penguen karakterleri, ürünün özelliklerini görsel olarak ifade ederken, ebeveynlerin güvenini kazanmayı hedefliyor.',
        images: [
          `${baseUrl}projects/ambalaj_tasarimi/johnson1.jpeg`,
          `${baseUrl}projects/ambalaj_tasarimi/johnson2.jpeg`,
          `${baseUrl}projects/ambalaj_tasarimi/johnson3.jpeg`,
          `${baseUrl}projects/ambalaj_tasarimi/johnson4.jpeg`,
          `${baseUrl}projects/ambalaj_tasarimi/johnson5.jpeg`,
          `${baseUrl}projects/ambalaj_tasarimi/johnson6.jpeg`
        ]
      }
    ]
  },
  {
    id: 'cocuk-kitabi-tasarimi',
    title: 'Çocuk Kitabı Tasarımı',
    projects: [
      {
        id: 'kitap-tasarim',
        title: 'Kitap Tasarımı',
        subtitle: 'Kitap Tasarım',
        description: 'Bu çalışma, çocuk kitapları için hazırladığım, hem hikayesini yazdığım hem de tüm sayfalarının illüstrasyonlarını bizzat tasarladığım tamamen özgün bir projedir. Hikaye, bir denizci ve küçük bir kızın deniz kenarındaki keyifli balık avı macerasına odaklanırken; canlı ve neşeli çizimlerimle metnin ruhunu görselleştirmeyi amaçladım. Metin ve görsellerin uyum içinde olduğu, bütünsel bir eserdir.',
        images: [
          `${baseUrl}projects/cocuk_kitabi_tasarimi/cocuk1.jpeg`,
          `${baseUrl}projects/cocuk_kitabi_tasarimi/cocuk2.jpeg`
        ]
      }
    ]
  },
  {
    id: 'illustrasyon-tasarimi',
    title: 'İllüstrasyon Tasarımı',
    projects: [
      {
        id: 'anatomik-bilimsel-illustrasyon',
        title: 'Anatomik ve bilimsel illüstrasyon',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/illustrasyon/yarasa1.jpeg`,
          `${baseUrl}projects/illustrasyon/yarasa2.jpeg`
        ]
      },
      {
        id: 'radyo-mimik',
        title: 'Radyo Mimik Çalışması',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/illustrasyon/radyo1.jpeg`,
          `${baseUrl}projects/illustrasyon/radyo2.jpeg`
        ]
      },
      {
        id: 'karakter-illustrasyon',
        title: 'Karakter ve illüstrasyon Çalışması',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/illustrasyon/pamukprenses1.jpeg`,
          `${baseUrl}projects/illustrasyon/pamukprenses2.jpeg`
        ]
      }
    ]
  },
  {
    id: 'kurumsal-kimlik',
    title: 'Kurumsal Kimlik',
    projects: [
      {
        id: 'arboris-kurumsal',
        title: 'Arboris',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/kurumsal_kimlik/Arboris1.jpeg`,
          `${baseUrl}projects/kurumsal_kimlik/Arboris1.jpeg`
        ]
      },
      {
        id: 'selcuk-ecza-kurumsal',
        title: 'Selçuk Ecza',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/kurumsal_kimlik/selcukecza1.jpeg`,
          `${baseUrl}projects/kurumsal_kimlik/selcukecza2.jpg`
        ]
      }
    ]
  },
  {
    id: 'sosyal-medya',
    title: 'Sosyal Medya',
    projects: [
      {
        id: 'selcuk-ecza-sosyal',
        title: 'Selçuk Ecza',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/sosyal_medya/Selcukecza1.png`,
          `${baseUrl}projects/sosyal_medya/Selçukecza2.jpg`
        ]
      },
      {
        id: 'arboris-sosyal',
        title: 'Arboris',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/sosyal_medya/Arboriss1.png`,
          `${baseUrl}projects/sosyal_medya/Arboriss1.png`
        ]
      }
    ]
  },
  {
    id: 'dergi-tasarimi',
    title: 'Dergi Tasarımı',
    projects: [
      {
        id: 'sprint-spor-dergisi',
        title: 'SPRINT Spor Dergisi',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/dergi_tasarimi/sprint1.png`,
          `${baseUrl}projects/dergi_tasarimi/sprint2.png`
        ]
      },
      {
        id: 'selcuk-ecza-dergi',
        title: 'Selçuk Ecza',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/dergi_tasarimi/selcukkecza1.png`,
          `${baseUrl}projects/sosyal_medya/Selçukecza2.jpg`
        ]
      }
    ]
  },
  {
    id: 'uiux-design',
    title: 'UI/UX DESIGN',
    projects: [
      {
        id: 'yemek-arkadasi-uygulama',
        title: 'Diyet Tercihlerine Uyumlu Yemek Arkadaşı uygulama tasarımı',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/uiuxdesign/yemekuygulama1.png`,
          `${baseUrl}projects/uiuxdesign/yemekuygulama1.png`
        ]
      }
    ]
  },
  {
    id: 'cesitli-tasarimlar',
    title: 'Çeşitli Tasarımlar',
    projects: [
      {
        id: 'kutu-oyunu-tasarimi',
        title: 'Kutu Oyunu Tasarımı',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/cesitli_tasarimlar/kutu oyunu1.png`,
          `${baseUrl}projects/cesitli_tasarimlar/kutuoyunu2.png`
        ]
      },
      {
        id: 'brosur-tasarimi-1',
        title: 'Broşür Tasarımı',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/cesitli_tasarimlar/brosur1.png`,
          `${baseUrl}projects/cesitli_tasarimlar/brosur2.png`
        ]
      },
      {
        id: 'brosur-tasarimi-2',
        title: 'Broşür Tasarımı',
        subtitle: '',
        description: '',
        images: [
          `${baseUrl}projects/cesitli_tasarimlar/bbrosur1.png`,
          `${baseUrl}projects/cesitli_tasarimlar/bbrosur2.png`
        ]
      },
      {
        id: 'bilgilendirme-infografik',
        title: 'Bilgilendirme / İnografik Tasarım',
        subtitle: '',
        description: 'Bu görsel, küresel obezite sorununun 1990\'dan 2035\'e uzanan istatistiklerini, 1 milyar yetişkin ve 340 milyon çocuk obez gibi çarpıcı verilerle, modern ve bilgilendirici bir infografik tasarımıyla sunmaktadır.',
        images: [
          `${baseUrl}projects/cesitli_tasarimlar/bilgilendirme1.png`,
          `${baseUrl}projects/cesitli_tasarimlar/bilgilendirme1.png`
        ]
      },
      {
        id: 'menu-tasarimi',
        title: 'Menü Tasarımı',
        subtitle: '',
        description: 'Parm and Cheese restoranının mevcut menüsü görsel açıdan yetersiz bulunarak analiz edilmiş ve iyileştirme ihtiyacı tespit edilmiştir. Müşteri deneyimini zenginleştirmek amacıyla yapılan yeni menü tasarımında, her makarna çeşidine yüksek çözünürlüklü görseller eklenerek görsel zenginlik artırılmıştır. Ayrıca, menüdeki seçeneklerin kolayca işaretlenmesini sağlayan kullanıcı dostu bir mekanizma geliştirilerek seçim süreci hızlandırılmış ve etkileşimli hale getirilmiştir. Menü düzeninde her ürünün altına kısa açıklama ve fiyat bilgileri eklenmiş, son olarak tasarımda kullanılan renk ve yazı tipleri Parm and Cheese\'in marka kimliğini yansıtacak şekilde özenle seçilmiştir.',
        images: [
          `${baseUrl}projects/cesitli_tasarimlar/menu1.png`,
          `${baseUrl}projects/cesitli_tasarimlar/menu1.png`
        ]
      },
      {
        id: 'masa-takvimi-tasarimi',
        title: 'Masa Takvimi Tasarımı',
        subtitle: '',
        description: 'Fotoğrafçılık tutkunları ve estetik tasarım meraklıları için özel olarak tasarlanmış bu masa takvimi, sadece zamanı takip etmekle kalmaz, aynı zamanda günlük yaşama sanatsal bir dokunuş katmayı amaçlar. Kamera lensi konsepti, fotoğrafçılığın büyülü dünyasını masalara taşır. Bu özel tasarım masa takvimi, sadece estetik bir obje değil, aynı zamanda akıllı bir mekanizmaya sahip fonksiyonel bir araçtır. Kamera lensi şeklindeki bu takvim, kullanıcı dostu bir mekanizma ile donatılmıştır.',
        images: [
          `${baseUrl}projects/cesitli_tasarimlar/takvim1.png`,
          `${baseUrl}projects/cesitli_tasarimlar/takvim1.png`
        ]
      }
    ]
  }
];
