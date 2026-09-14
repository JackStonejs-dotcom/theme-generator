import { useState } from 'react';

const translations = {
  ar: {
    badge: '✨ BİROYA VISION OS - LIQUID GLASS',
    title: 'تخصيص الهوية والتصميم الزجاجي',
    subtitle: 'واجهة سائلة مستوحاة من أحدث تصميمات Apple VisionOS مع تحكم كامل',
    tabText: '📝 النص والخطوط',
    tabStyle: '🎨 النمط والأبعاد',
    tabPresets: '💡 اقتراحات جاهزة',
    darkMode: '🌙 داكن',
    lightMode: '☀️ فاتح',
    nameLabel: 'الاسم الرئيسي:',
    namePlaceholder: 'مثال: سهيل / BiROYA Gelato',
    subtextLabel: 'العبارة الفرعية:',
    subtextPlaceholder: 'مثال: Welcome / أهلاً وسهلاً',
    fontLabel: 'نوع الخط:',
    fontSizeLabel: 'حجم الخط:',
    fontWeightLabel: 'سمك الخط:',
    fontColorLabel: 'لون النص:',
    categoryLabel: 'المناسبة:',
    shapeLabel: 'الإطار:',
    iconLabel: 'الرمز:',
    colorsLabel: 'درجات ألوان الثيم:',
    presetTitle: 'اختر إلهاماً سريعاً لتعبئة الخيارات تلقائياً:',
    generateBtn: '✨ توليد التصميم الزجاجي',
    generating: '⏳ جاري المعالجة السائلة...',
    downloadBtn: '📥 تحميل الثيم بجودة عالية',
    weights: {
      bold: 'عريض (Bold)',
      medium: 'متوسط (Medium)',
      normal: 'عادي (Regular)'
    },
    categories: {
      baby: '👶 مولود جديد (Baby)',
      wedding: '💍 زفاف وعقد قران',
      coffee: '☕ كافيه وهدية قهوة BİROYA',
      birthday: '🎂 عيد ميلاد',
      graduation: '🎓 تخرج ومناسبات'
    },
    shapes: {
      arch: 'قوس ملكي (Arch)',
      circle: 'دائرة ناعمة (Circle)',
      square: 'مربع بوهيمي (Square)',
      hexagon: 'مسدس تجريدي (Hexagon)'
    },
    icons: {
      none: 'بدون رمز',
      cute_animals: 'حيوانات لطيفة 🧸',
      vintage_car: 'سيارة كلاسيكية 🚗',
      luxury_ornament: 'زخرفة فاخرة ⚜️',
      golden_rings: 'خواتم زفاف 💍',
      coffee_cup: 'كأس قهوة BİROYA ☕'
    }
  },
  tr: {
    badge: '✨ BİROYA VISION OS - LIQUID GLASS',
    title: 'Cam Arayüz Tema Tasarımı',
    subtitle: 'Apple VisionOS stiline sahip akıcı cam panel ve tam kontrol',
    tabText: '📝 Metin & Yazı Tipi',
    tabStyle: '🎨 Stil & Boyutlar',
    tabPresets: '💡 Hızlı Öneriler',
    darkMode: '🌙 Karanlık',
    lightMode: '☀️ Aydınlık',
    nameLabel: 'Ana İsim:',
    namePlaceholder: 'Örn: Suheil / BiROYA Gelato',
    subtextLabel: 'Alt Metin:',
    subtextPlaceholder: 'Örn: Hoş Geldiniz',
    fontLabel: 'Yazı Tipi:',
    fontSizeLabel: 'Metin Boyutu:',
    fontWeightLabel: 'Yazı Kalınlığı:',
    fontColorLabel: 'Yazı Rengi:',
    categoryLabel: 'Etkinlik:',
    shapeLabel: 'Çerçeve:',
    iconLabel: 'Simge:',
    colorsLabel: 'Renk Paleti:',
    presetTitle: 'Seçenekleri otomatik doldurmak için bir öneri seçin:',
    generateBtn: '✨ Cam Tasarımı Oluştur',
    generating: '⏳ Cam İşleniyor...',
    downloadBtn: '📥 Yüksek Kalitede İndir',
    weights: {
      bold: 'Kalın (Bold)',
      medium: 'Orta (Medium)',
      normal: 'Normal (Regular)'
    },
    categories: {
      baby: '👶 Yeni Doğuş / Baby Shower',
      wedding: '💍 Düğün & Nişan',
      coffee: '☕ BİROYA Kahve & Gelato',
      birthday: '🎂 Doğum Günü',
      graduation: '🎓 Mezuniyet'
    },
    shapes: {
      arch: 'Kraliyet Kemeri (Arch)',
      circle: 'Yuvarlak (Circle)',
      square: 'Kare (Square)',
      hexagon: 'Altıgen (Hexagon)'
    },
    icons: {
      none: 'Yok',
      cute_animals: 'Sevimli Hayvanlar 🧸',
      vintage_car: 'Klasik Araba 🚗',
      luxury_ornament: 'Lüks Motif ⚜️',
      golden_rings: 'Altın Yüzükler 💍',
      coffee_cup: 'BİROYA Kahve Bardağı ☕'
    }
  },
  en: {
    badge: '✨ BİROYA VISION OS - LIQUID GLASS',
    title: 'Glassmorphism Theme Creator',
    subtitle: 'Inspired by Apple VisionOS UI with real glass controls and sliders',
    tabText: '📝 Text & Fonts',
    tabStyle: '🎨 Style & Dimensions',
    tabPresets: '💡 Quick Presets',
    darkMode: '🌙 Dark',
    lightMode: '☀️ Light',
    nameLabel: 'Main Title / Name:',
    namePlaceholder: 'e.g., Suheil / BiROYA Gelato',
    subtextLabel: 'Subtext:',
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
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('text');

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

  // نمط الزجاج الضبابي الحقيقي (Frosted Glass Effect)
  const glassStyle = {
    background: isDark ? 'rgba(30, 35, 45, 0.55)' : 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(35px) saturate(210%)',
    WebkitBackdropFilter: 'blur(35px) saturate(210%)',
    borderRadius: '36px',
    border: isDark ? '1px solid rgba(255, 255, 255, 0.18)' : '1px solid rgba(255, 255, 255, 0.8)',
    boxShadow: isDark 
      ? '0 30px 60px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.35)'
      : '0 20px 50px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
    color: isDark ? '#FFFFFF' : '#0F172A',
    transition: 'all 0.4s ease'
  };

  const pillButton = (active) => ({
    padding: '8px 20px',
    borderRadius: '30px',
    border: active 
      ? (isDark ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(0,0,0,0.15)') 
      : '1px solid transparent',
    backgroundColor: active 
      ? (isDark ? 'rgba(255, 255, 255, 0.28)' : '#FFFFFF') 
      : (isDark ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.06)'),
    color: active ? (isDark ? '#FFF' : '#0F172A') : (isDark ? '#cbd5e1' : '#64748b'),
    fontSize: '13px',
    fontWeight: active ? '700' : '500',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    boxShadow: active ? '0 4px 15px rgba(0,0,0,0.15)' : 'none',
    transition: 'all 0.25s ease'
  });

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{
      background: isDark 
        ? 'radial-gradient(circle at 50% 15%, #2a3447 0%, #111827 50%, #030712 100%)' 
        : 'radial-gradient(circle at 50% 15%, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)',
      color: isDark ? '#FFFFFF' : '#0F172A',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '30px 16px 80px 16px',
      overflowX: 'hidden',
      transition: 'background 0.5s ease'
    }}>
      {/* استدعاء خطوط Google العربية واللاتينية */}
      <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700;800&family=Amiri:wght@400;700&family=Cairo:wght@400;600;800&family=Changa:wght@600;800&family=Playfair+Display:ital,wght@0,600;1,600&family=Tajawal:wght@400;700&display=swap" rel="stylesheet" />

      {/* الشريط العلوي العام مع زر Dark / Light Mode */}
      <div style={{
        maxWidth: '1050px',
        margin: '0 auto 30px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        ...glassStyle
      }}>
        <div style={{ fontSize: '14px', fontWeight: '800', letterSpacing: '0.5px', color: '#38bdf8' }}>
          {t.badge}
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* زر التبديل بين الدارك مود والفاتح */}
          <button
            onClick={() => setIsDark(!isDark)}
            style={{
              padding: '8px 18px',
              borderRadius: '30px',
              border: isDark ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(0,0,0,0.15)',
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : '#FFFFFF',
              color: isDark ? '#FFF' : '#0F172A',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backdropFilter: 'blur(10px)'
            }}
          >
            {isDark ? t.darkMode : t.lightMode}
          </button>

          {/* تبديل اللغات */}
          <div style={{ display: 'flex', gap: '4px', background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.06)', padding: '4px', borderRadius: '30px' }}>
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
      </div>

      {/* العنوان الرئيسي */}
      <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 35px auto' }}>
        <h1 style={{ fontSize: '34px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.5px' }}>
          {t.title}
        </h1>
        <p style={{ color: isDark ? '#94a3b8' : '#64748b', fontSize: '15px', lineHeight: '1.6' }}>
          {t.subtitle}
        </p>
      </div>

      {/* ثلاثية البطاقات الزجاجية المطابقة تماماً للصورة المعروضة */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto 40px auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
        gap: '24px',
        alignItems: 'start'
      }}>

        {/* 1. البطاقة الأولى (يسار): التحكم بالقوائم والنصوص */}
        <div style={{ padding: '28px', ...glassStyle }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ fontWeight: '700', fontSize: '16px' }}>Hi BİROYA</span>
            <span style={{ fontSize: '12px', opacity: 0.7 }}>Welcome Home</span>
          </div>

          {/* شريط الأزرار الحبوبية Capsule Pills */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '22px', background: isDark ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.05)', padding: '4px', borderRadius: '30px' }}>
            <button onClick={() => setActiveTab('text')} style={{ ...pillButton(activeTab === 'text'), flex: 1 }}>{t.tabText}</button>
            <button onClick={() => setActiveTab('style')} style={{ ...pillButton(activeTab === 'style'), flex: 1 }}>{t.tabStyle}</button>
            <button onClick={() => setActiveTab('presets')} style={{ ...pillButton(activeTab === 'presets'), flex: 1 }}>{t.tabPresets}</button>
          </div>

          {activeTab === 'text' && (
            <div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', marginBottom: '6px', fontWeight: '600' }}>{t.nameLabel}</label>
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '16px',
                    backgroundColor: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)',
                    border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.1)',
                    color: isDark ? '#FFF' : '#0F172A',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', marginBottom: '6px', fontWeight: '600' }}>{t.subtextLabel}</label>
                <input
                  type="text"
                  placeholder={t.subtextPlaceholder}
                  value={subtext}
                  onChange={(e) => setSubtext(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '16px',
                    backgroundColor: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)',
                    border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.1)',
                    color: isDark ? '#FFF' : '#0F172A',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', marginBottom: '6px', fontWeight: '600' }}>{t.fontLabel}</label>
                <select
                  value={font}
                  onChange={(e) => setFont(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '16px',
                    backgroundColor: isDark ? '#0f172a' : '#FFFFFF',
                    border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.1)',
                    color: isDark ? '#FFF' : '#0F172A',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="Cairo">Cairo - عصري وأنيق</option>
                  <option value="Amiri">Amiri - ملكي كلاسيكي فاخر</option>
                  <option value="Tajawal">Tajawal - انسيابي وناعم</option>
                  <option value="Almarai">Almarai - بسيط وهادئ</option>
                  <option value="Changa">Changa - بارز وبارع</option>
                  <option value="Playfair Display">Playfair - لاتيني (Serif)</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === 'style' && (
            <div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', marginBottom: '6px', fontWeight: '600' }}>{t.categoryLabel}</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '14px',
                    backgroundColor: isDark ? '#0f172a' : '#FFF',
                    border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.1)',
                    color: isDark ? '#FFF' : '#0F172A',
                    fontSize: '13px'
                  }}
                >
                  {Object.keys(t.categories).map((k) => (
                    <option key={k} value={k}>{t.categories[k]}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', marginBottom: '6px', fontWeight: '600' }}>{t.shapeLabel}</label>
                <select
                  value={shape}
                  onChange={(e) => setShape(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '14px',
                    backgroundColor: isDark ? '#0f172a' : '#FFF',
                    border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.1)',
                    color: isDark ? '#FFF' : '#0F172A',
                    fontSize: '13px'
                  }}
                >
                  {Object.keys(t.shapes).map((sk) => (
                    <option key={sk} value={sk}>{t.shapes[sk]}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', marginBottom: '6px', fontWeight: '600' }}>{t.iconLabel}</label>
                <select
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '14px',
                    backgroundColor: isDark ? '#0f172a' : '#FFF',
                    border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.1)',
                    color: isDark ? '#FFF' : '#0F172A',
                    fontSize: '13px'
                  }}
                >
                  {Object.keys(t.icons).map((ik) => (
                    <option key={ik} value={ik}>{t.icons[ik]}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {activeTab === 'presets' && (
            <div>
              <p style={{ fontSize: '12px', marginBottom: '12px', opacity: 0.8 }}>{t.presetTitle}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {presetsList.map((preset, idx) => (
                  <div
                    key={idx}
                    onClick={() => applyPreset(preset)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '14px',
                      backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.8)',
                      border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontWeight: '700', fontSize: '13px', color: '#38bdf8' }}>{preset.title}</div>
                    <div style={{ fontSize: '11px', opacity: 0.7 }}>{preset.name} - {preset.colors}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 2. البطاقة الثانية (الوسط): القرص الدائري المزدوج Glass Circular Knob Controller (مطابق للحرارة بالصورة) */}
        <div style={{ padding: '28px', textAlign: 'center', ...glassStyle }}>
          <div style={{ fontSize: '15px', fontWeight: '700', marginBottom: '20px' }}>Font & Dimension Control</div>

          {/* القرص الزجاجي الدائري التفاعلي */}
          <div style={{
            width: '210px',
            height: '210px',
            margin: '0 auto 24px auto',
            borderRadius: '50%',
            background: isDark 
              ? 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.4) 100%)' 
              : 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(226,232,240,0.8) 100%)',
            border: isDark ? '8px solid rgba(255, 255, 255, 0.12)' : '8px solid rgba(255, 255, 255, 0.9)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <span style={{ fontSize: '12px', opacity: 0.6 }}>Font Size</span>
            <span style={{ fontSize: '46px', fontWeight: '800', lineHeight: '1' }}>{fontSize}</span>
            <span style={{ fontSize: '12px', color: '#38bdf8', marginTop: '4px' }}>px</span>

            {/* أزرار زيادة ونقصان الحجم الدائرية داخل القرص */}
            <div style={{ display: 'flex', gap: '30px', marginTop: '10px' }}>
              <button
                onClick={() => setFontSize(Math.max(30, fontSize - 2))}
                style={{
                  width: '30px', height: '30px', borderRadius: '50%', border: 'none',
                  backgroundColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
                  color: isDark ? '#FFF' : '#0F172A', fontWeight: 'bold', cursor: 'pointer'
                }}
              >-</button>
              <button
                onClick={() => setFontSize(Math.min(90, fontSize + 2))}
                style={{
                  width: '30px', height: '30px', borderRadius: '50%', border: 'none',
                  backgroundColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
                  color: isDark ? '#FFF' : '#0F172A', fontWeight: 'bold', cursor: 'pointer'
                }}
              >+</button>
            </div>
          </div>

          {/* مفتاح التبديل السفلي (Schedule Toggle) */}
          <div style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            padding: '12px 18px',
            borderRadius: '20px',
            backgroundColor: isDark ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.04)',
            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)'
          }}>
            <span style={{ fontSize: '13px', fontWeight: '600' }}>{t.fontWeightLabel}</span>
            <select
              value={fontWeight}
              onChange={(e) => setFontWeight(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: '12px',
                backgroundColor: isDark ? '#0f172a' : '#FFF',
                border: 'none',
                color: isDark ? '#FFF' : '#0F172A',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              <option value="bold">{t.weights.bold}</option>
              <option value="medium">{t.weights.medium}</option>
              <option value="normal">{t.weights.normal}</option>
            </select>
          </div>
        </div>

        {/* 3. البطاقة الثالثة (يمين): التحكم بالألوان وطيف الألوان السائل Spectrum Slider (مطابق لـ Smart Light بالصورة) */}
        <div style={{ padding: '28px', ...glassStyle }}>
          <div style={{ fontSize: '15px', fontWeight: '700', marginBottom: '18px' }}>Smart Color & Palette</div>

          {/* شريط ألوان الطيف السائل (Color Spectrum Bar) المطابق للصورة */}
          <div style={{ marginBottom: '22px' }}>
            <label style={{ display: 'block', fontSize: '12px', marginBottom: '8px', opacity: 0.8 }}>
              {t.fontColorLabel}
            </label>
            <div style={{
              height: '14px',
              borderRadius: '20px',
              background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
              marginBottom: '10px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }} />
            <input
              type="color"
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
              style={{
                width: '100%',
                height: '40px',
                borderRadius: '16px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: 'transparent'
              }}
            />
          </div>

          <div style={{ marginBottom: '22px' }}>
            <label style={{ display: 'block', fontSize: '12px', marginBottom: '6px', opacity: 0.8 }}>
              {t.colorsLabel}
            </label>
            <input
              type="text"
              value={colors}
              onChange={(e) => setColors(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '16px',
                backgroundColor: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)',
                border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.1)',
                color: isDark ? '#FFF' : '#0F172A',
                fontSize: '13px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* زر التوليد السائل الرئيسي */}
          <button
            onClick={generate}
            disabled={loading}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '24px',
              border: 'none',
              background: loading
                ? '#334155'
                : 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              color: '#FFF',
              fontSize: '15px',
              fontWeight: '700',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 10px 30px rgba(2, 132, 199, 0.4)'
            }}
          >
            {loading ? t.generating : t.generateBtn}
          </button>
        </div>

      </div>

      {errorMsg && (
        <div style={{ maxWidth: '600px', margin: '0 auto 20px auto', padding: '12px', borderRadius: '12px', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#F87171', fontSize: '13px', textAlign: 'center' }}>
          {errorMsg}
        </div>
      )}

      {/* بطاقة المعاينة النهائية والتحميل */}
      {image && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <div style={{
            position: 'relative',
            padding: '16px',
            ...glassStyle,
            maxWidth: '460px',
            width: '100%'
          }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
              <img src={image} alt="BİROYA Result" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* طبقة النص والتنسيقات */}
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
                textShadow: '0 0 18px rgba(0,0,0,0.85)'
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
                  textShadow: '0 0 12px rgba(0,0,0,0.85)'
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
