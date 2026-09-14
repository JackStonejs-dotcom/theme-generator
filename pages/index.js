import { useState } from 'react';

const translations = {
  ar: {
    badge: '✨ BİROYA AI - Liquid Glass Design',
    title: 'مصمم الثيمات وتوزيعات المناسبات',
    subtitle: 'صممي هويتك الفاخرة بتأثير الزجاج السائل مع تحكم كامل بالخطوط والرموز والزخارف',
    nameLabel: 'الاسم الرئيسي:',
    namePlaceholder: 'مثال: سهيل / BiROYA Gelato',
    subtextLabel: 'عبارة إضافية:',
    subtextPlaceholder: 'مثال: Welcome to our baby / أهلاً وسهلاً',
    categoryLabel: 'نوع المناسبة:',
    styleLabel: 'أسلوب الرسم والنمط:',
    colorsLabel: 'درجات الألوان:',
    fontLabel: 'نوع الخط للمنشور:',
    shapeLabel: 'شكل الإطار / القطب:',
    iconLabel: 'رمز إضافي أو زخرفة داخلية:',
    generateBtn: '✨ توليد وتصميم الثيم',
    generating: '⏳ جاري معالجة الزجاج والتصميم...',
    downloadBtn: '📥 تحميل الثيم بجودة للطباعة',
    categories: {
      baby: '👶 مولود جديد / Baby Shower',
      wedding: '💍 زفاف وعقد قران',
      coffee: '☕ كافيه وهدية قهوة BİROYA',
      birthday: '🎂 عيد ميلاد',
      graduation: '🎓 تخرج ومناسبات راقية'
    },
    fonts: {
      amiri: 'خط أميري فاخر (Amiri)',
      cairo: 'خط القاهرة عصري (Cairo)',
      tajawal: 'خط تجوال انسيابي (Tajawal)',
      serif: 'خط كلاسيكي لاتيني (Serif)'
    },
    shapes: {
      circle: 'دائري ناعم (Round Circle)',
      arch: 'قوس زفاف ملكي (Arch Frame)',
      square: 'مربع بوهيمي (Boho Square)',
      hexagon: 'مسدس تجريدي (Hexagon)'
    },
    icons: {
      none: 'بدون رمز إضافي',
      cute_animals: 'حيوانات لطيفة (دب، أرنب) 🧸',
      vintage_car: 'سيارة كلاسيكية للأطفال 🚗',
      luxury_ornament: 'زخرفة عربية فاخرة ⚜️',
      golden_rings: 'خواتم زفاف ذهبية 💍',
      coffee_cup: 'كأس قهوة BİROYA ☕'
    }
  },
  en: {
    badge: '✨ BİROYA AI - Liquid Glass Design',
    title: 'Event Theme & Identity Creator',
    subtitle: 'Craft luxury themes with liquid glass effect and full control over fonts, ornaments, and shapes',
    nameLabel: 'Primary Name:',
    namePlaceholder: 'e.g., Suheil / BiROYA Gelato',
    subtextLabel: 'Tagline / Subtext:',
    subtextPlaceholder: 'e.g., Welcome / Special Edition',
    categoryLabel: 'Event Category:',
    styleLabel: 'Art & Theme Style:',
    colorsLabel: 'Color Palette:',
    fontLabel: 'Font Family:',
    shapeLabel: 'Frame Geometry / Shape:',
    iconLabel: 'Icon / Ornament Element:',
    generateBtn: '✨ Generate Custom Theme',
    generating: '⏳ Processing Liquid Render...',
    downloadBtn: '📥 Download Print-Ready Theme',
    categories: {
      baby: '👶 New Born / Baby Shower',
      wedding: '💍 Wedding & Engagement',
      coffee: '☕ Coffee & Gelato Branding',
      birthday: '🎂 Birthday Party',
      graduation: '🎓 Graduation & Ceremony'
    },
    fonts: {
      amiri: 'Royal Amiri Arabic',
      cairo: 'Modern Cairo Sans',
      tajawal: 'Tajawal Soft Sans',
      serif: 'Classic Elegance Serif'
    },
    shapes: {
      circle: 'Smooth Circle',
      arch: 'Royal Wedding Arch',
      square: 'Boho Square',
      hexagon: 'Abstract Hexagon'
    },
    icons: {
      none: 'None',
      cute_animals: 'Cute Baby Animals 🧸',
      vintage_car: 'Vintage Baby Car 🚗',
      luxury_ornament: 'Royal Arabic Ornament ⚜️',
      golden_rings: 'Golden Rings 💍',
      coffee_cup: 'BİROYA Coffee Cup ☕'
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState('ar');
  const [darkMode, setDarkMode] = useState(true);

  // الخيارات التي يختارها العميل
  const [name, setName] = useState('');
  const [subtext, setSubtext] = useState('');
  const [category, setCategory] = useState('baby');
  const [font, setFont] = useState('amiri');
  const [shape, setShape] = useState('arch');
  const [icon, setIcon] = useState('cute_animals');
  const [style, setStyle] = useState('biroya');
  const [colors, setColors] = useState('أزرق ملكي، ذهبي، وبيج أوف وايت');

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const t = translations[lang] || translations.ar;

  const generate = async () => {
    if (!name.trim()) {
      alert(lang === 'ar' ? 'يرجى كتابة الاسم أولاً' : 'Please enter a name');
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

      // ضبط نوع الخط المختار من العميل
      let selectedFontFamily = 'Amiri, serif';
      if (font === 'cairo') selectedFontFamily = 'Cairo, sans-serif';
      if (font === 'tajawal') selectedFontFamily = 'Tajawal, sans-serif';
      if (font === 'serif') selectedFontFamily = 'Georgia, serif';

      ctx.fillStyle = darkMode ? '#FFFFFF' : '#001B3A';
      ctx.font = `bold 56px ${selectedFontFamily}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
      ctx.shadowBlur = 12;

      ctx.fillText(name, canvas.width / 2, canvas.height / 2 - (subtext ? 25 : 0));

      if (subtext) {
        ctx.font = `30px ${selectedFontFamily}`;
        ctx.fillText(subtext, canvas.width / 2, canvas.height / 2 + 40);
      }

      const link = document.createElement('a');
      link.download = `biroya-theme-${name}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  };

  // أنماط الزجاج السائل (Liquid Glass Glassmorphism)
  const glassStyle = {
    background: darkMode 
      ? 'rgba(0, 27, 58, 0.45)' 
      : 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    borderRadius: '28px',
    border: darkMode 
      ? '1px solid rgba(255, 255, 255, 0.15)' 
      : '1px solid rgba(255, 255, 255, 0.6)',
    boxShadow: darkMode 
      ? '0 30px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
      : '0 20px 50px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  };

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{
      background: darkMode 
        ? 'radial-gradient(circle at 50% 0%, #002b5b 0%, #001124 100%)' 
        : 'radial-gradient(circle at 50% 0%, #e2edff 0%, #f4f7fb 100%)',
      color: darkMode ? '#FFFFFF' : '#001B3A',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
      padding: '30px 20px 80px 20px',
      overflowX: 'hidden'
    }}>
      {/* تضمين خطوط جوجل الفاخرة للزبائن */}
      <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@700&family=Cairo:wght@600;800&family=Tajawal:wght@700&display=swap" rel="stylesheet" />

      {/* الشريط العلوي الزجاجي Float Bar */}
      <div style={{
        maxWidth: '920px',
        margin: '0 auto 40px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        ...glassStyle
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['ar', 'en'].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: lang === l ? '#0052CC' : 'transparent',
                color: lang === l ? '#FFF' : (darkMode ? '#FFF' : '#001B3A'),
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '13px',
                transition: 'all 0.3s ease'
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '8px 18px',
            borderRadius: '20px',
            border: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.1)',
            backgroundColor: 'transparent',
            color: darkMode ? '#FFF' : '#001B3A',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            backdropFilter: 'blur(10px)'
          }}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* العنوان والعنوان الفرعي */}
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 20px',
          borderRadius: '30px',
          backgroundColor: 'rgba(0, 82, 204, 0.2)',
          color: '#3B82F6',
          fontSize: '13px',
          fontWeight: '700',
          marginBottom: '16px',
          border: '1px solid rgba(59, 130, 246, 0.3)'
        }}>
          {t.badge}
        </div>
        <h1 style={{ fontSize: '38px', fontWeight: '800', marginBottom: '14px', letterSpacing: '-0.8px' }}>
          {t.title}
        </h1>
        <p style={{ color: darkMode ? '#94A3B8' : '#475569', fontSize: '16px', lineHeight: '1.6' }}>
          {t.subtitle}
        </p>
      </div>

      {/* نموذج التخصيص الكامل بأسلوب الزجاج السائل */}
      <div style={{
        maxWidth: '650px',
        margin: '0 auto 40px auto',
        padding: '36px',
        ...glassStyle
      }}>
        {/* الاسم والرئيسي */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>
              {t.nameLabel}
            </label>
            <input
              type="text"
              placeholder={t.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '16px',
                backgroundColor: darkMode ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.7)',
                border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                color: darkMode ? '#FFF' : '#001B3A',
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>
              {t.subtextLabel}
            </label>
            <input
              type="text"
              placeholder={t.subtextPlaceholder}
              value={subtext}
              onChange={(e) => setSubtext(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '16px',
                backgroundColor: darkMode ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.7)',
                border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                color: darkMode ? '#FFF' : '#001B3A',
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* اختيارات نوع الخط والمناسبة */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>
              {t.categoryLabel}
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '16px',
                backgroundColor: darkMode ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.8)',
                border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                color: darkMode ? '#FFF' : '#001B3A',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            >
              {Object.keys(t.categories).map((k) => (
                <option key={k} value={k} style={{ color: '#000' }}>{t.categories[k]}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>
              {t.fontLabel}
            </label>
            <select
              value={font}
              onChange={(e) => setFont(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '16px',
                backgroundColor: darkMode ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.8)',
                border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                color: darkMode ? '#FFF' : '#001B3A',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            >
              {Object.keys(t.fonts).map((fk) => (
                <option key={fk} value={fk} style={{ color: '#000' }}>{t.fonts[fk]}</option>
              ))}
            </select>
          </div>
        </div>

        {/* شكل الإطار والرموز والزخارف */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>
              {t.shapeLabel}
            </label>
            <select
              value={shape}
              onChange={(e) => setShape(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '16px',
                backgroundColor: darkMode ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.8)',
                border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                color: darkMode ? '#FFF' : '#001B3A',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            >
              {Object.keys(t.shapes).map((sk) => (
                <option key={sk} value={sk} style={{ color: '#000' }}>{t.shapes[sk]}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>
              {t.iconLabel}
            </label>
            <select
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '16px',
                backgroundColor: darkMode ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.8)',
                border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                color: darkMode ? '#FFF' : '#001B3A',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            >
              {Object.keys(t.icons).map((ik) => (
                <option key={ik} value={ik} style={{ color: '#000' }}>{t.icons[ik]}</option>
              ))}
            </select>
          </div>
        </div>

        {/* الألوان والتفاصيل */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ display: 'block', fontSize: '13px', marginBottom: '8px', fontWeight: '600' }}>
            {t.colorsLabel}
          </label>
          <input
            type="text"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '16px',
              backgroundColor: darkMode ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.7)',
              border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
              color: darkMode ? '#FFF' : '#001B3A',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* زر التوليد ذو الانعكاس السائل */}
        <button
          onClick={generate}
          disabled={loading}
          style={{
            width: '100%',
            padding: '18px',
            borderRadius: '20px',
            border: 'none',
            background: loading 
              ? '#475569' 
              : 'linear-gradient(135deg, #0052CC 0%, #002B66 100%)',
            color: '#FFF',
            fontSize: '16px',
            fontWeight: '700',
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: '0 12px 30px rgba(0, 82, 204, 0.4)',
            transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
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

      {/* معروض بطاقة النتيجة بالزجاج السائل والخط المختار */}
      {image && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            position: 'relative',
            padding: '16px',
            ...glassStyle,
            maxWidth: '460px',
            width: '100%'
          }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <img src={image} alt="BİROYA Theme" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* النص الظاهر في منتصف التصميم بحسب نوع الخط المحدد */}
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
                color: darkMode ? '#FFFFFF' : '#001B3A',
                fontSize: '38px',
                fontWeight: '800',
                fontFamily: font === 'cairo' ? 'Cairo, sans-serif' : (font === 'tajawal' ? 'Tajawal, sans-serif' : 'Amiri, serif'),
                textShadow: '0 0 20px rgba(0,0,0,0.7)'
              }}>
                {name}
              </div>
              {subtext && (
                <div style={{
                  color: darkMode ? '#F1F5F9' : '#334155',
                  fontSize: '20px',
                  fontWeight: '600',
                  marginTop: '8px',
                  fontFamily: font === 'cairo' ? 'Cairo, sans-serif' : 'Amiri, serif',
                  textShadow: '0 0 12px rgba(0,0,0,0.7)'
                }}>
                  {subtext}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={downloadCard}
            style={{
              marginTop: '28px',
              padding: '16px 36px',
              borderRadius: '50px',
              border: 'none',
              background: '#0052CC',
              color: '#FFF',
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0, 82, 204, 0.35)'
            }}
          >
            {t.downloadBtn}
          </button>
        </div>
      )}
    </div>
  );
}
