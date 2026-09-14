import { useState } from 'react';

const translations = {
  ar: {
    badge: '✨ BİROYA VISION OS - LIQUID GLASS',
    title: 'مصمم ثيمات الهوية البصرية',
    subtitle: 'استخدم الذكاء الاصطناعي مع تحكم كامل بالخطوط والألوان والبطاقات الزجاجية',
    tabText: '📝 النص والخطوط',
    tabStyle: '🎨 النمط والرموز',
    tabPresets: '💡 اقتراحات جاهزة',
    nameLabel: 'الاسم الرئيسي:',
    namePlaceholder: 'مثال: سهيل / BiROYA Gelato',
    subtextLabel: 'العبارة الفرعية:',
    subtextPlaceholder: 'مثال: Welcome / أهلاً وسهلاً',
    fontLabel: 'نوع الخط:',
    fontSizeLabel: 'حجم الخط:',
    fontWeightLabel: 'سمك الخط:',
    fontColorLabel: 'لون النص:',
    categoryLabel: 'نوع المناسبة:',
    shapeLabel: 'شكل الإطار:',
    iconLabel: 'الرمز / الزخرفة:',
    colorsLabel: 'درجات ألوان الثيم:',
    presetTitle: 'اختر إلهاماً سريعاً لتعبئة الخيارات تلقائياً:',
    generateBtn: '✨ توليد التصميم الآن',
    generating: '⏳ جاري المعالجة السائلة...',
    downloadBtn: '📥 تحميل الثيم بجودة عالية',
    weights: {
      bold: 'عريض جداً (Bold)',
      medium: 'متوسط (Medium)',
      normal: 'عادي (Regular)'
    },
    categories: {
      baby: '👶 مولود جديد (Baby)',
      wedding: '💍 زفاف وعقد قران',
      coffee: '☕ كافيه وهدية قهوة BİROYA',
      birthday: '🎂 عيد ميلاد',
      graduation: '🎓 تخرج ومناسبات راقية'
    },
    shapes: {
      arch: 'قوس زفاف ملكي (Arch)',
      circle: 'دائرة ناعمة (Circle)',
      square: 'مربع بوهيمي (Square)',
      hexagon: 'مسدس تجريدي (Hexagon)'
    },
    icons: {
      none: 'بدون رمز',
      cute_animals: 'حيوانات لطيفة 🧸',
      vintage_car: 'سيارة كلاسيكية 🚗',
      luxury_ornament: 'زخرفة عربية فاخرة ⚜️',
      golden_rings: 'خواتم زفاف ذهبية 💍',
      coffee_cup: 'كأس قهوة BİROYA ☕'
    }
  },
  tr: {
    badge: '✨ BİROYA VISION OS - CAM TASARIM',
    title: 'Kurumsal Kimlik ve Tema Tasarımı',
    subtitle: 'Yapay zeka ve özelleştirilebilir cam arayüz ile harika temalar oluşturun',
    tabText: '📝 Metin & Yazı Tipi',
    tabStyle: '🎨 Stil & Nesneler',
    tabPresets: '💡 Hızlı Öneriler',
    nameLabel: 'Ana İsim / Marka:',
    namePlaceholder: 'Örn: Suheil / BiROYA Gelato',
    subtextLabel: 'Alt Metin:',
    subtextPlaceholder: 'Örn: Hoş Geldiniz / Special Edition',
    fontLabel: 'Yazı Tipi (Font):',
    fontSizeLabel: 'Yazı Boyutu:',
    fontWeightLabel: 'Yazı Kalınlığı:',
    fontColorLabel: 'Yazı Rengi:',
    categoryLabel: 'Etkinlik Türü:',
    shapeLabel: 'Çerçeve Şekli:',
    iconLabel: 'Sımge / Süsleme:',
    colorsLabel: 'Tema Renk Paleti:',
    presetTitle: 'Seçenekleri otomatik doldurmak için bir öneri seçin:',
    generateBtn: '✨ Tasarımı Oluştur',
    generating: '⏳ Cam Efekti İşleniyor...',
    downloadBtn: '📥 Baskı Boyutunda İndir',
    weights: {
      bold: 'Kalın (Bold)',
      medium: 'Orta (Medium)',
      normal: 'Normal (Regular)'
    },
    categories: {
      baby: '👶 Yeni Doğuş / Baby Shower',
      wedding: '💍 Düğün & Nişan',
      coffee: '☕ Kahve & Gelato Konsepti',
      birthday: '🎂 Doğum Günü',
      graduation: '🎓 Mezuniyet'
    },
    shapes: {
      arch: 'Kraliyet Kemeri (Arch)',
      circle: 'Yuvarlak Çerçeve (Circle)',
      square: 'Kare (Square)',
      hexagon: 'Altıgen (Hexagon)'
    },
    icons: {
      none: 'Yok',
      cute_animals: 'Sevimli Hayvanlar 🧸',
      vintage_car: 'Klasik Araba 🚗',
      luxury_ornament: 'Lüks Osmanlı Motifi ⚜️',
      golden_rings: 'Altın Yüzükler 💍',
      coffee_cup: 'BİROYA Kahve Bardağı ☕'
    }
  },
  en: {
    badge: '✨ BİROYA VISION OS - LIQUID GLASS',
    title: 'Theme & Identity Creator',
    subtitle: 'AI Powered with full glassmorphic controls for fonts, shapes & colors',
    tabText: '📝 Text & Fonts',
    tabStyle: '🎨 Style & Shapes',
    tabPresets: '💡 Quick Presets',
    nameLabel: 'Main Title / Name:',
    namePlaceholder: 'e.g., Suheil / BiROYA Gelato',
    subtextLabel: 'Subtext / Tagline:',
    subtextPlaceholder: 'e.g., Welcome / Special Edition',
    fontLabel: 'Font Family:',
    fontSizeLabel: 'Font Size:',
    fontWeightLabel: 'Font Weight:',
    fontColorLabel: 'Text Color:',
    categoryLabel: 'Event Category:',
    shapeLabel: 'Frame Geometry:',
    iconLabel: 'Icon / Element:',
    colorsLabel: 'Theme Colors:',
    presetTitle: 'Pick a preset to auto-fill settings:',
    generateBtn: '✨ Generate Design',
    generating: '⏳ Processing Liquid Glass...',
    downloadBtn: '📥 Download High Quality',
    weights: {
      bold: 'Bold',
      medium: 'Medium',
      normal: 'Regular'
    },
    categories: {
      baby: '👶 Baby Shower / New Born',
      wedding: '💍 Wedding & Ceremony',
      coffee: '☕ BİROYA Coffee & Gelato',
      birthday: '🎂 Birthday Party',
      graduation: '🎓 Graduation'
    },
    shapes: {
      arch: 'Royal Arch Frame',
      circle: 'Smooth Circle',
      square: 'Boho Square',
      hexagon: 'Abstract Hexagon'
    },
    icons: {
      none: 'None',
      cute_animals: 'Cute Baby Animals 🧸',
      vintage_car: 'Vintage Baby Car 🚗',
      luxury_ornament: 'Royal Gold Ornament ⚜️',
      golden_rings: 'Golden Rings 💍',
      coffee_cup: 'BİROYA Coffee Cup ☕'
    }
  }
};

// قائمة الاقتراحات السريعة للزبائن
const presetsList = [
  {
    title: '🌸 مولود بناتي ناعم',
    name: 'مريم',
    subtext: 'Welcome Little Princess',
    category: 'baby',
    font: 'Cairo',
    shape: 'circle',
    icon: 'cute_animals',
    colors: 'وردي ناعم، بيج أوف وايت، وذهبي خفيف',
    fontColor: '#ffffff'
  },
  {
    title: '🚗 مولود صبي كلاسيكي',
    name: 'سهيل',
    subtext: 'Welcome Baby Boy',
    category: 'baby',
    font: 'Tajawal',
    shape: 'arch',
    icon: 'vintage_car',
    colors: 'أزرق سماوي، بيج فاتح، لمسات خشبية',
    fontColor: '#ffffff'
  },
  {
    title: '👑 BİROYA Coffee Royal',
    name: 'BiROYA Gelato',
    subtext: 'Special Coffee Edition',
    category: 'coffee',
    font: 'Amiri',
    shape: 'arch',
    icon: 'coffee_cup',
    colors: 'أزرق ملكي عميق #001B3A، كريمة ذهبية، وأوف وايت',
    fontColor: '#f1f5f9'
  },
  {
    title: '💍 زفاف عربي فاخر',
    name: 'أحمد & سارة',
    subtext: 'أنار الله دربكما',
    category: 'wedding',
    font: 'Amiri',
    shape: 'arch',
    icon: 'luxury_ornament',
    colors: 'أبيض عاجي، ذهبي ملكي، لمسات زمردية',
    fontColor: '#ffffff'
  }
];

export default function Home() {
  const [lang, setLang] = useState('ar');
  const [activeTab, setActiveTab] = useState('text'); // 'text' | 'style' | 'presets'

  // التخصيصات
  const [name, setName] = useState('سهيل');
  const [subtext, setSubtext] = useState('Welcome Little Prince');
  const [category, setCategory] = useState('baby');
  const [font, setFont] = useState('Cairo');
  const [fontSize, setFontSize] = useState(54);
  const [fontWeight, setFontWeight] = useState('bold');
  const [fontColor, setFontColor] = useState('#ffffff');
  const [shape, setShape] = useState('arch');
  const [icon, setIcon] = useState('cute_animals');
  const [style] = useState('biroya');
  const [colors, setColors] = useState('أزرق ملكي، بيج أوف وايت، وذهبي');

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const t = translations[lang] || translations.ar;

  const applyPreset = (p) => {
    setName(p.name);
    setSubtext(p.subtext);
    setCategory(p.category);
    setFont(p.font);
    setShape(p.shape);
    setIcon(p.icon);
    setColors(p.colors);
    setFontColor(p.fontColor);
  };

  const generate = async () => {
    if (!name.trim()) {
      alert(lang === 'ar' ? 'يرجى كتابة الاسم أولاً' : 'Please enter name');
      return;
    }

    setLoading(true);
    setImage(null);
    setErrorMsg('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, subtext, category, font, shape, icon, style, colors })
      });

      const data = await res.json();

      if (res.ok && data.output) {
        setImage(Array.isArray(data.output) ? data.output[0] : data.output);
      } else {
        setErrorMsg(data.error || 'تعذر توليد التصميم');
      }
    } catch (err) {
      setErrorMsg('حدث خطأ أثناء الاتصال بالخادم');
    } finally {
      setLoading(false);
    }
  };

  const downloadCard = () => {
    if (!image) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = image;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const weightVal = fontWeight === 'bold' ? 'bold' : (fontWeight === 'medium' ? '500' : 'normal');
      ctx.fillStyle = fontColor;
      ctx.font = `${weightVal} ${fontSize}px "${font}", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
      ctx.shadowBlur = 14;

      ctx.fillText(name, canvas.width / 2, canvas.height / 2 - (subtext ? 25 : 0));

      if (subtext) {
        ctx.font = `normal ${Math.round(fontSize * 0.55)}px "${font}", sans-serif`;
        ctx.fillText(subtext, canvas.width / 2, canvas.height / 2 + (fontSize * 0.65));
      }

      const link = document.createElement('a');
      link.download = `biroya-${name}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  };

  // أسلوب الزجاج السائل المطابق للصورة (Frosted Glass Effect)
  const visionOsGlass = {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(30px) saturate(200%)',
    WebkitBackdropFilter: 'blur(30px) saturate(200%)',
    borderRadius: '32px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
  };

  const pillButton = (active) => ({
    padding: '10px 22px',
    borderRadius: '30px',
    border: active ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.08)',
    backgroundColor: active ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.2)',
    color: '#FFF',
    fontSize: '14px',
    fontWeight: active ? '700' : '500',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
  });

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{
      backgroundImage: 'radial-gradient(circle at 50% 10%, #1e293b 0%, #0f172a 50%, #020617 100%)',
      color: '#FFFFFF',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '30px 20px 80px 20px',
      overflowX: 'hidden'
    }}>
      {/* استدعاء خطوط Google العربية واللاتينية الفاخرة */}
      <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700;800&family=Amiri:wght@400;700&family=Cairo:wght@400;600;800&family=Changa:wght@600;800&family=Playfair+Display:ital,wght@0,600;1,600&family=Tajawal:wght@400;700&display=swap" rel="stylesheet" />

      {/* الشريط العلوي - VisionOS Top Float Bar */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto 35px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        ...visionOsGlass
      }}>
        <div style={{ fontSize: '15px', fontWeight: '800', letterSpacing: '0.5px', color: '#38bdf8' }}>
          {t.badge}
        </div>

        {/* زر تبديل اللغات (العربية / التركية / الإنجليزية) */}
        <div style={{ display: 'flex', gap: '6px', background: 'rgba(0,0,0,0.3)', padding: '4px', borderRadius: '30px' }}>
          {['ar', 'tr', 'en'].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={pillButton(lang === l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* العنوان الرئيسي */}
      <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 30px auto' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '10px', letterSpacing: '-0.5px' }}>
          {t.title}
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6' }}>
          {t.subtitle}
        </p>
      </div>

      {/* لوحة التحكم الرئيسية المنظمة بتأثير الزجاج */}
      <div style={{
        maxWidth: '680px',
        margin: '0 auto 40px auto',
        padding: '32px',
        ...visionOsGlass
      }}>
        {/* شريط التبويب السلس لمنع تشتت الزبون (Capsule Tabs) */}
        <div style={{
          display: 'flex',
          justify: 'center',
          gap: '10px',
          marginBottom: '28px',
          background: 'rgba(0,0,0,0.25)',
          padding: '6px',
          borderRadius: '40px'
        }}>
          <button onClick={() => setActiveTab('text')} style={pillButton(activeTab === 'text')}>{t.tabText}</button>
          <button onClick={() => setActiveTab('style')} style={pillButton(activeTab === 'style')}>{t.tabStyle}</button>
          <button onClick={() => setActiveTab('presets')} style={pillButton(activeTab === 'presets')}>{t.tabPresets}</button>
        </div>

        {/* التبويب الأول: النص والخطوط وألوان الخط */}
        {activeTab === 'text' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#FFF',
                    fontSize: '15px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                  {t.subtextLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.subtextPlaceholder}
                  value={subtext}
                  onChange={(e) => setSubtext(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#FFF',
                    fontSize: '15px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* خطوط متميزة */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                {t.fontLabel}
              </label>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: '#0f172a',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#FFF',
                  fontSize: '15px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <option value="Cairo">Cairo - عصري وأنيق</option>
                <option value="Amiri">Amiri - ملكي كلاسيكي فاخر</option>
                <option value="Tajawal">Tajawal - انسيابي وناعم</option>
                <option value="Almarai">Almarai - بسيط وهادئ</option>
                <option value="Changa">Changa - بارز وبارع</option>
                <option value="Playfair Display">Playfair - لاتيني كلاسيكي (Serif)</option>
              </select>
            </div>

            {/* حجم الخط وسمك الخط ولون النص */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '10px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#cbd5e1', marginBottom: '6px' }}>
                  {t.fontSizeLabel} ({fontSize}px)
                </label>
                <input
                  type="range"
                  min="30"
                  max="90"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#38bdf8' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#cbd5e1', marginBottom: '6px' }}>
                  {t.fontWeightLabel}
                </label>
                <select
                  value={fontWeight}
                  onChange={(e) => setFontWeight(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '12px',
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#FFF',
                    fontSize: '13px'
                  }}
                >
                  <option value="bold">{t.weights.bold}</option>
                  <option value="medium">{t.weights.medium}</option>
                  <option value="normal">{t.weights.normal}</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#cbd5e1', marginBottom: '6px' }}>
                  {t.fontColorLabel}
                </label>
                <input
                  type="color"
                  value={fontColor}
                  onChange={(e) => setFontColor(e.target.value)}
                  style={{
                    width: '100%',
                    height: '38px',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* التبويب الثاني: النمط والإطارات والرموز */}
        {activeTab === 'style' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                  {t.categoryLabel}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#FFF',
                    fontSize: '14px'
                  }}
                >
                  {Object.keys(t.categories).map((k) => (
                    <option key={k} value={k}>{t.categories[k]}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                  {t.shapeLabel}
                </label>
                <select
                  value={shape}
                  onChange={(e) => setShape(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#FFF',
                    fontSize: '14px'
                  }}
                >
                  {Object.keys(t.shapes).map((sk) => (
                    <option key={sk} value={sk}>{t.shapes[sk]}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                  {t.iconLabel}
                </label>
                <select
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#FFF',
                    fontSize: '14px'
                  }}
                >
                  {Object.keys(t.icons).map((ik) => (
                    <option key={ik} value={ik}>{t.icons[ik]}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                  {t.colorsLabel}
                </label>
                <input
                  type="text"
                  value={colors}
                  onChange={(e) => setColors(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#FFF',
                    fontSize: '13px'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* التبويب الثالث: القوالب والاقتراحات السريعة */}
        {activeTab === 'presets' && (
          <div>
            <p style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '16px' }}>
              {t.presetTitle}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {presetsList.map((preset, idx) => (
                <div
                  key={idx}
                  onClick={() => applyPreset(preset)}
                  style={{
                    padding: '14px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '14px', marginBottom: '4px', color: '#38bdf8' }}>
                    {preset.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                    {preset.name} - {preset.colors}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* زر التوليد الزجاجي الفاخر */}
        <button
          onClick={generate}
          disabled={loading}
          style={{
            width: '100%',
            marginTop: '24px',
            padding: '16px',
            borderRadius: '24px',
            border: 'none',
            background: loading 
              ? '#334155' 
              : 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
            color: '#FFF',
            fontSize: '16px',
            fontWeight: '700',
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: '0 10px 30px rgba(2, 132, 199, 0.4)'
          }}
        >
          {loading ? t.generating : t.generateBtn}
        </button>

        {errorMsg && (
          <div style={{ marginTop: '16px', padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#F87171', fontSize: '13px', textAlign: 'center' }}>
            {errorMsg}
          </div>
        )}
      </div>

      {/* بطاقة النتيجة بالخط المخصص بالحجم واللون المطلوب */}
      {image && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            position: 'relative',
            padding: '16px',
            ...visionOsGlass,
            maxWidth: '460px',
            width: '100%'
          }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
              <img src={image} alt="BİROYA Result" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* معاينة النص بالخط واللون الحقيقي */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '85%',
              pointerEvents: 'none'
            }}>
              <div style={{
                color: fontColor,
                fontSize: `${Math.round(fontSize * 0.65)}px`,
                fontWeight: fontWeight === 'bold' ? '800' : (fontWeight === 'medium' ? '600' : '400'),
                fontFamily: `"${font}", sans-serif`,
                textShadow: '0 0 18px rgba(0,0,0,0.8)'
              }}>
                {name}
              </div>
              {subtext && (
                <div style={{
                  color: fontColor,
                  fontSize: `${Math.round(fontSize * 0.35)}px`,
                  fontWeight: '500',
                  marginTop: '6px',
                  fontFamily: `"${font}", sans-serif`,
                  opacity: 0.9,
                  textShadow: '0 0 12px rgba(0,0,0,0.8)'
                }}>
                  {subtext}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={downloadCard}
            style={{
              marginTop: '24px',
              padding: '16px 36px',
              borderRadius: '50px',
              border: 'none',
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              color: '#FFF',
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(2, 132, 199, 0.35)'
            }}
          >
            {t.downloadBtn}
          </button>
        </div>
      )}
    </div>
  );
}
