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
  }
  // Diğer kategoriler buraya eklenecek
];
