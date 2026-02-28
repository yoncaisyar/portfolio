/**
 * Kategori ve proje verisi. Görseller public/projects/ altında.
 */
const base = typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL != null ? import.meta.env.BASE_URL : '/';
const p = (path) => `${base}${path}`;

export const categories = [
  {
    id: 'logo-tasarimi',
    projects: [
      { id: 'arboris', images: [p('projects/logo_tasarimi/arboris1.jpeg'), p('projects/logo_tasarimi/arboris2.jpeg')] },
      { id: 'selcuk', images: [p('projects/logo_tasarimi/selcuk1.jpeg'), p('projects/logo_tasarimi/selcuk2.jpeg'), p('projects/logo_tasarimi/selcuk22.jpeg')] },
      { id: 'wush', images: [p('projects/logo_tasarimi/wush1.jpeg'), p('projects/logo_tasarimi/wush2.jpeg')] },
    ],
  },
  {
    id: 'afis-reklam',
    projects: [
      { id: 'dior', images: [p('projects/afis_reklam/dior1.jpeg'), p('projects/afis_reklam/dior2.jpeg'), p('projects/afis_reklam/dior3.jpeg')] },
      { id: 'yetenek-sinavi', images: [p('projects/afis_reklam/devlet1.jpeg'), p('projects/afis_reklam/devlet2.jpeg')] },
      { id: 'arboris-afis', images: [p('projects/afis_reklam/arboriss1.jpeg'), p('projects/afis_reklam/arboriss2.jpeg')] },
      { id: 'bilgilendirme-yarisma', images: [p('projects/afis_reklam/food1.jpeg'), p('projects/afis_reklam/food2.jpeg')] },
      { id: 'selcuk-ecza-afis', images: [p('projects/afis_reklam/selcukecza1.jpeg'), p('projects/afis_reklam/selcukecza2.jpeg')] },
    ],
  },
  {
    id: 'ambalaj-tasarimi',
    projects: [
      {
        id: 'johnsons-baby',
        images: [
          p('projects/ambalaj_tasarimi/johnson1.jpeg'),
          p('projects/ambalaj_tasarimi/johnson2.jpeg'),
          p('projects/ambalaj_tasarimi/johnson3.jpeg'),
          p('projects/ambalaj_tasarimi/johnson4.jpeg'),
          p('projects/ambalaj_tasarimi/johnson5.jpeg'),
          p('projects/ambalaj_tasarimi/johnson6.jpeg'),
        ],
      },
    ],
  },
  {
    id: 'cocuk-kitabi-tasarimi',
    projects: [
      { id: 'kitap-tasarim', images: [p('projects/cocuk_kitabi_tasarimi/cocuk1.jpeg'), p('projects/cocuk_kitabi_tasarimi/cocuk2.jpeg')] },
    ],
  },
  {
    id: 'illustrasyon-tasarimi',
    projects: [
      { id: 'anatomik-bilimsel-illustrasyon', images: [p('projects/illustrasyon/yarasa1.jpeg'), p('projects/illustrasyon/yarasa2.jpeg')] },
      { id: 'radyo-mimik', images: [p('projects/illustrasyon/radyo1.jpeg'), p('projects/illustrasyon/radyo2.jpeg')] },
      { id: 'karakter-illustrasyon', images: [p('projects/illustrasyon/pamukprenses1.jpeg'), p('projects/illustrasyon/pamukprenses2.jpeg')] },
    ],
  },
  {
    id: 'kurumsal-kimlik',
    projects: [
      { id: 'arboris-kurumsal', images: [p('projects/kurumsal_kimlik/Arboris1.jpeg')] },
      { id: 'selcuk-ecza-kurumsal', images: [p('projects/kurumsal_kimlik/selcukecza1.jpeg'), p('projects/kurumsal_kimlik/selcukecza2.jpg')] },
    ],
  },
  {
    id: 'sosyal-medya',
    projects: [
      { id: 'selcuk-ecza-sosyal', images: [p('projects/sosyal_medya/Selcukecza1.png'), p('projects/sosyal_medya/Selçukecza2.jpg')] },
      { id: 'arboris-sosyal', images: [p('projects/sosyal_medya/Arboriss1.png')] },
    ],
  },
  {
    id: 'dergi-tasarimi',
    projects: [
      { id: 'sprint-spor-dergisi', images: [p('projects/dergi_tasarimi/sprint1.png'), p('projects/dergi_tasarimi/sprint2.png')] },
      { id: 'selcuk-ecza-dergi', images: [p('projects/dergi_tasarimi/selcukkecza1.png'), p('projects/dergi_tasarimi/selcukkecza2.png')] },
    ],
  },
  {
    id: 'uiux-design',
    projects: [{ id: 'yemek-arkadasi-uygulama', images: [p('projects/uiuxdesign/yemekuygulama1.png')] }],
  },
  {
    id: 'cesitli-tasarimlar',
    projects: [
      { id: 'kutu-oyunu-tasarimi', images: [p('projects/cesitli_tasarimlar/kutu%20oyunu1.png'), p('projects/cesitli_tasarimlar/kutuoyunu2.png')] },
      { id: 'brosur-tasarimi-1', images: [p('projects/cesitli_tasarimlar/brosur1.png'), p('projects/cesitli_tasarimlar/bbrosur1.png')] },
      { id: 'brosur-tasarimi-2', images: [p('projects/cesitli_tasarimlar/brosur2.png'), p('projects/cesitli_tasarimlar/bbrosur2.png')] },
      { id: 'bilgilendirme-infografik', images: [p('projects/cesitli_tasarimlar/bilgilendirme1.png')] },
      { id: 'menu-tasarimi', images: [p('projects/cesitli_tasarimlar/menu1.png')] },
      { id: 'masa-takvimi-tasarimi', images: [p('projects/cesitli_tasarimlar/takvim1.png')] },
    ],
  },
];
