import { useState, useRef } from 'react';

// قاموس الترجمات للغات الأربع
const translations = {
  ar: {
    badge: '✨ منصة الذكاء الاصطناعي لـ BİROYA',
    title: 'تصميم الثيمات الهوية البصرية',
    subtitle: 'أنشئي تصاميم وتوزيعات احترافية تناسب كافة المناسبات بأسلوب عصري وفاخر',
    nameLabel: 'اسم صاحب المناسبة / المشافي / الماركة:',
    namePlaceholder: 'مثال: سهيل / BiROYA Gelato',
    subtextLabel: 'عبارة فرعية (اختياري):',
    subtextPlaceholder: 'مثال: Welcome / أهلاً وسهلاً',
    categoryLabel: 'نوع المناسبة:',
    styleLabel: 'نمط الرسم والفن:',
    colorsLabel: 'درجات الألوان المفضلة:',
    generateBtn: '✨ توليد التصميم الآن',
    generating: '⏳ جاري التوليد والتحليل...',
    downloadBtn: '📥 تحميل الثيم جاهز للطباعة',
    categories: {
      baby: 'مولود جديد (Baby Shower)',
      coffee: 'كافيه وهدية قهوة (Coffee & Gelato)',
      birthday: 'عيد ميلاد (Birthday)',
      wedding: 'زفاف وحفلات (Wedding)',
      graduation: 'تخرج ومناسبات خاصة'
    },
    styles: {
      biroya: 'أسلوب BİROYA الملكي (أزرق ملكي وبيج)',
      watercolor: 'ألوان مائية ناعمة (Watercolor)',
      boho: 'بوهيمي تجريدي معاصر (Boho Minimal)',
      embroidery: 'تطريز وقماش فاخر'
    }
  },
  en: {
    badge: '✨ BİROYA AI Theme Platform',
    title: 'Visual Identity & Theme Generator',
    subtitle: 'Create professional branding and event themes with luxury style',
    nameLabel: 'Name / Brand Title:',
    namePlaceholder: 'e.g. Suheil / BiROYA Gelato',
    subtextLabel: 'Subtext / Tagline (Optional):',
    subtextPlaceholder: 'e.g. Welcome / Special Edition',
    categoryLabel: 'Event Category:',
    styleLabel: 'Visual Art Style:',
    colorsLabel: 'Preferred Color Palette:',
    generateBtn: '✨ Generate Theme Now',
    generating: '⏳ Generating Design...',
    downloadBtn: '📥 Download Print-Ready Theme',
    categories: {
      baby: 'Baby Shower / New Born',
      coffee: 'Coffee & Gelato Branding',
      birthday: 'Birthday Party',
      wedding: 'Wedding & Engagement',
      graduation: 'Graduation & Special Event'
    },
    styles: {
      biroya: 'BİROYA Royal Style (Deep Blue & Beige)',
      watercolor: 'Soft Watercolor',
      boho: 'Modern Boho Minimal',
      embroidery: 'Luxury Embroidery'
    }
  },
  tr: {
    badge: '✨ BİROYA Yapay Zeka Tema Platformu',
    title: 'Kurumsal Kimlik ve Tema Tasarımı',
    subtitle: 'Lüks ve modern tarzda profesyonel konsept tasarımları oluşturun',
    nameLabel: 'İsim / Markا Adı:',
    namePlaceholder: 'Örn: Suheil / BiROYA Gelato',
    subtextLabel: 'Alt Başlık / Not (İsteğe bağlı):',
    subtextPlaceholder: 'Örn: Hoş Geldiniz / Special Edition',
    categoryLabel: 'Etkinlik Türü:',
    styleLabel: 'Sanat Tarzı:',
    colorsLabel: 'Tercih Edilen Renkler:',
    generateBtn: '✨ Tasارımı Şimdi Üret',
    generating: '⏳ Oluşturuluyor...',
    downloadBtn: '📥 Baskıya Hazır Temayı İndir',
    categories: {
      baby: 'Yeni Doğğan / Baby Shower',
      coffee: 'Kahve & Gelato Konsepti',
      birthday: 'Doğum Günü',
      wedding: 'Düğün & Nişan',
      graduation: 'Mezuniyet & Özel Gün'
    },
    styles: {
      biroya: 'BİROYA Kraliyet Stili (Koyu Mavi & Bej)',
      watercolor: 'Yumuşak Sulu Boya',
      boho: 'Modern Boho Minimal',
      embroidery: 'Lüks Nakış Dokusu'
    }
  },
  fr: {
    badge: '✨ Plateforme BİROYA IA',
    title: 'Générateur d\'Identité Visuelle',
    subtitle: 'Créez des thèmes d\'événements et de marque de luxe en quelques clics',
    nameLabel: 'Nom / Marque:',
    namePlaceholder: 'ex: Suheil / BiROYA Gelato',
    subtextLabel: 'Sous-texte (Optionnel):',
    subtextPlaceholder: 'ex: Bienvenue / Éditon Spéciale',
    categoryLabel: 'Catégorie d\'événement:',
    styleLabel: 'Style Artistique:',
    colorsLabel: 'Palette de Couleurs:',
    generateBtn: '✨ Générer le Thème',
    generating: '⏳ Création en cours...',
    downloadBtn: '📥 Télécharger pour Impression',
    categories: {
      baby: 'Nouveau-né / Baby Shower',
      coffee: 'Café & Gelato Branding',
      birthday: 'Anniversaire',
      wedding: 'Mariage & Fiançailles',
      graduation: 'Diplôme & Événement'
    },
    styles: {
      biroya: 'Style BİROYA Royal (Bleu Roi & Beige)',
      watercolor: 'Aquarelle Douce',
      boho: 'Boho Minimaliste',
      embroidery: 'Broderie de Luxe'
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState('ar');
  const [darkMode, setDarkMode] = useState(true);
  
  const [name, setName] = useState('');
  const [subtext, setSubtext] = useState('');
  const [category, setCategory] = useState('baby');
  const [style, setStyle] = useState('biroya');
  const [colors, setColors] = useState('أزرق ملكي وبيج أوف وايت');

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const t = translations[lang];

  const generate = async () => {
    if (!name.trim()) {
      alert(lang === 'ar' ? 'يرجى كتابة الاسم أولاً' : 'Please enter a name first');
      return;
    }

    setLoading(true);
    setImage(null);
    setErrorMsg('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, subtext, category, style, colors })
      });

      const data = await res.json();

      if (res.ok && data.output) {
        const imageUrl = Array.isArray(data.output) ? data.output[0] : data.output;
        setImage(imageUrl);
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

      // رسم خلفية التصميم
      ctx.drawImage(img, 0, 0);

      // رسم النص الرئيسي في منتصف الشاشة
      ctx.fillStyle = darkMode ? '#ffffff' : '#001B3A';
      ctx.font = 'bold 54px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 10;
      ctx.fillText(name, canvas.width / 2, canvas.height / 2 - (subtext ? 20 : 0));

      // رسم النص الفرعي إن وجد
      if (subtext) {
        ctx.font = '30px "Segoe UI", sans-serif';
        ctx.fillText(subtext, canvas.width / 2, canvas.height / 2 + 45);
      }

      const link = document.createElement('a');
      link.download = `biroya-theme-${name}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  };

  // ألوان القالب بناءً على الوضع (Light/Dark)
  const themeStyles = {
    bg: darkMode ? '#001328' : '#F8F9FA',
    cardBg: darkMode ? '#001E3D' : '#FFFFFF',
    text: darkMode ? '#FFFFFF' : '#001B3A',
    subText: darkMode ? '#94A3B8' : '#64748B',
    inputBg: darkMode ? '#001328' : '#F1F5F9',
    border: darkMode ? 'rgba(255,255,255,0.1)' : '#E2E8F0',
    primary: '#0052CC'
  };

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{
      backgroundColor: themeStyles.bg,
      color: themeStyles.text,
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '20px 20px 60px 20px',
      transition: 'all 0.3s ease'
    }}>
      {/* الشريط العلوي - التحكم باللغة والوضع الداكن */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto 30px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        backgroundColor: themeStyles.cardBg,
        borderRadius: '50px',
        border: `1px solid ${themeStyles.border}`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        {/* اختيار اللغة */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {['ar', 'en', 'tr', 'fr'].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: lang === l ? '#0052CC' : 'transparent',
                color: lang === l ? '#FFF' : themeStyles.text,
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '13px',
                textTransform: 'uppercase'
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* زر التبديل بين Dark / Light Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            border: `1px solid ${themeStyles.border}`,
            backgroundColor: themeStyles.inputBg,
            color: themeStyles.text,
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* الرأس الرئيسي */}
      <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 35px auto' }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 18px',
          borderRadius: '30px',
          backgroundColor: 'rgba(0, 82, 204, 0.12)',
          color: '#3B82F6',
          fontSize: '13px',
          fontWeight: '700',
          marginBottom: '15px',
          border: '1px solid rgba(0, 82, 204, 0.3)'
        }}>
          {t.badge}
        </div>
        <h1 style={{ fontSize: '34px', fontWeight: '800', marginBottom: '12px', letterSpacing: '-0.5px' }}>
          {t.title}
        </h1>
        <p style={{ color: themeStyles.subText, fontSize: '16px', lineHeight: '1.6' }}>
          {t.subtitle}
        </p>
      </div>

      {/* اللوحة الرئيسية للتخصيص */}
      <div style={{
        maxWidth: '540px',
        margin: '0 auto 40px auto',
        backgroundColor: themeStyles.cardBg,
        borderRadius: '24px',
        padding: '32px',
        border: `1px solid ${themeStyles.border}`,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        {/* حقل الاسم */}
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: themeStyles.subText, marginBottom: '8px', fontWeight: '600' }}>
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
              borderRadius: '12px',
              backgroundColor: themeStyles.inputBg,
              border: `1px solid ${themeStyles.border}`,
              color: themeStyles.text,
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* النص الفرعي */}
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: themeStyles.subText, marginBottom: '8px', fontWeight: '600' }}>
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
              borderRadius: '12px',
              backgroundColor: themeStyles.inputBg,
              border: `1px solid ${themeStyles.border}`,
              color: themeStyles.text,
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* نوع المناسبة */}
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: themeStyles.subText, marginBottom: '8px', fontWeight: '600' }}>
            {t.categoryLabel}
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              backgroundColor: themeStyles.inputBg,
              border: `1px solid ${themeStyles.border}`,
              color: themeStyles.text,
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          >
            {Object.keys(t.categories).map((catKey) => (
              <option key={catKey} value={catKey}>{t.categories[catKey]}</option>
            ))}
          </select>
        </div>

        {/* نمط الفن */}
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: themeStyles.subText, marginBottom: '8px', fontWeight: '600' }}>
            {t.styleLabel}
          </label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              backgroundColor: themeStyles.inputBg,
              border: `1px solid ${themeStyles.border}`,
              color: themeStyles.text,
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          >
            {Object.keys(t.styles).map((styleKey) => (
              <option key={styleKey} value={styleKey}>{t.styles[styleKey]}</option>
            ))}
          </select>
        </div>

        {/* اختيار درجات الألوان */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: themeStyles.subText, marginBottom: '8px', fontWeight: '600' }}>
            {t.colorsLabel}
          </label>
          <input
            type="text"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              backgroundColor: themeStyles.inputBg,
              border: `1px solid ${themeStyles.border}`,
              color: themeStyles.text,
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* زر التوليد */}
        <button
          onClick={generate}
          disabled={loading}
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '14px',
            border: 'none',
            background: loading ? '#334155' : 'linear-gradient(135deg, #0052CC 0%, #003380 100%)',
            color: '#FFF',
            fontSize: '16px',
            fontWeight: '700',
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: '0 8px 25px rgba(0, 82, 204, 0.35)',
            transition: 'all 0.2s'
          }}
        >
          {loading ? t.generating : t.generateBtn}
        </button>

        {errorMsg && (
          <div style={{ marginTop: '15px', padding: '12px', borderRadius: '10px', backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#F87171', fontSize: '13px', textAlign: 'center' }}>
            {errorMsg}
          </div>
        )}
      </div>

      {/* عرض النتيجة والبطاقة الناتجة */}
      {image && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
            border: `1px solid ${themeStyles.border}`,
            maxWidth: '440px',
            width: '100%'
          }}>
            <img src={image} alt="BİROYA Theme Result" style={{ width: '100%', display: 'block' }} />
            
            {/* عرض النص الرئيسي والفرعي فوق الصورة */}
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
                fontSize: '36px',
                fontWeight: '800',
                textShadow: '0 0 15px rgba(0,0,0,0.6)'
              }}>
                {name}
              </div>
              {subtext && (
                <div style={{
                  color: darkMode ? '#F1F5F9' : '#334155',
                  fontSize: '20px',
                  fontWeight: '500',
                  marginTop: '6px',
                  textShadow: '0 0 10px rgba(0,0,0,0.6)'
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
              padding: '14px 32px',
              borderRadius: '50px',
              border: `1px solid ${themeStyles.border}`,
              backgroundColor: themeStyles.cardBg,
              color: themeStyles.text,
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
            }}
          >
            {t.downloadBtn}
          </button>
        </div>
      )}
    </div>
  );
}
