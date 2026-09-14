import { useState, useRef } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [style, setStyle] = useState('watercolor');
  const [colors, setColors] = useState('وردي ناعم وبيج');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const cardRef = useRef(null);

  const generate = async () => {
    if (!name.trim()) {
      alert('يرجى كتابة الاسم أو المناسبة أولاً');
      return;
    }

    setLoading(true);
    setImage(null);
    setErrorMsg('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, style, colors })
      });

      const data = await res.json();

      if (res.ok && data.output) {
        const imageUrl = Array.isArray(data.output) ? data.output[0] : data.output;
        setImage(imageUrl);
      } else {
        setErrorMsg(data.error || 'تعذر توليد التصميم، يرجى المحاولة مرة أخرى');
      }
    } catch (err) {
      setErrorMsg('حدث خطأ أثناء الاتصال بالخادم');
    } finally {
      setLoading(false);
    }
  };

  const downloadCard = async () => {
    if (!image) return;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = image;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // رسم الصورة
      ctx.drawImage(img, 0, 0);

      // رسم الاسم العربي في المنتصف بخط أنيق
      ctx.fillStyle = '#3a2e2b';
      ctx.font = 'bold 58px "Amiri", "Traditional Arabic", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // إضافة ظل ناعم للنص
      ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
      ctx.shadowBlur = 15;

      ctx.fillText(name, canvas.width / 2, canvas.height / 2);

      // تنزيل الصورة
      const link = document.createElement('a');
      link.download = `theme-${name}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  };

  return (
    <div dir="rtl" style={{
      backgroundColor: '#0d0f17',
      color: '#f0f2f8',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* العنون الرأسي */}
      <div style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '35px' }}>
        <div style={{
          display: 'inline-block',
          padding: '6px 16px',
          borderRadius: '20px',
          backgroundColor: 'rgba(99, 102, 241, 0.15)',
          color: '#818cf8',
          fontSize: '13px',
          fontWeight: '600',
          marginBottom: '12px',
          border: '1px solid rgba(99, 102, 241, 0.3)'
        }}>
          ✨ منصة الذكاء الاصطناعي لتصميم الثيمات
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.5px', marginBottom: '10px' }}>
          صممي ثيم مناسبتك بأسلوب عصري
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '15px' }}>
          أدخلي اسم المناسبة واختاري الأسلوب ليتم إنشاء تصميم احترافي مع اسمها المكتوب بخط أنيق.
        </p>
      </div>

      {/* لوحة التحكم (Card Control) */}
      <div style={{
        backgroundColor: '#161926',
        borderRadius: '20px',
        padding: '28px',
        width: '100%',
        maxWidth: '480px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,255,255,0.08)',
        marginBottom: '35px'
      }}>
        <div style={{ marginBottom: '18px', textAlign: 'right' }}>
          <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', fontWeight: '500' }}>
            اسم الطفل / صاحب المناسبة:
          </label>
          <input
            type="text"
            placeholder="مثال: سهيل، جود، ثيم مواليد..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              backgroundColor: '#0d0f17',
              border: '1px solid #2e344d',
              color: '#fff',
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '18px', textAlign: 'right' }}>
          <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', fontWeight: '500' }}>
            نمط الرسم والفن:
          </label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              backgroundColor: '#0d0f17',
              border: '1px solid #2e344d',
              color: '#fff',
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          >
            <option value="watercolor">ألوان مائية ناعمة (Watercolor)</option>
            <option value="hot air balloon embroidery">تطريز وقماش ناعم مع منطاد</option>
            <option value="vintage pencil sketch">رسم ناعم بالقلم الكلاسيكي</option>
            <option value="minimal boho design">ستايل بوهيمي بسيط (Boho)</option>
          </select>
        </div>

        <div style={{ marginBottom: '24px', textAlign: 'right' }}>
          <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', marginBottom: '8px', fontWeight: '500' }}>
            درجات الألوان المفضلة:
          </label>
          <input
            type="text"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
            placeholder="مثال: ترابي، وردي وبايج، أزرق سمائي"
            style={{
              width: '100%',
              padding: '14px 16px',
              borderRadius: '12px',
              backgroundColor: '#0d0f17',
              border: '1px solid #2e344d',
              color: '#fff',
              fontSize: '15px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          onClick={generate}
          disabled={loading}
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '12px',
            border: 'none',
            background: loading ? '#334155' : 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '700',
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: loading ? 'none' : '0 10px 20px rgba(99, 102, 241, 0.3)',
            transition: '0.2s transform active'
          }}
        >
          {loading ? '⏳ جاري تصميم الثيم...' : '✨ توليد التصميم الآن'}
        </button>

        {errorMsg && (
          <div style={{ marginTop: '15px', padding: '10px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#f87171', fontSize: '13px' }}>
            {errorMsg}
          </div>
        )}
      </div>

      {/* معروض التصميم الناتج */}
      {image && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'fadeIn 0.5s ease-in-out'
        }}>
          <div
            ref={cardRef}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              border: '1px solid rgba(255,255,255,0.1)',
              maxWidth: '420px',
              width: '100%'
            }}
          >
            <img
              src={image}
              alt="ثيم المناسبة"
              style={{ width: '100%', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#3a2e2b',
              fontSize: '34px',
              fontWeight: 'bold',
              fontFamily: '"Amiri", serif, sans-serif',
              textAlign: 'center',
              textShadow: '0 0 15px rgba(255,255,255,0.9), 0 0 25px rgba(255,255,255,0.8)',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              width: '80%'
            }}>
              {name}
            </div>
          </div>

          <button
            onClick={downloadCard}
            style={{
              marginTop: '20px',
              padding: '12px 28px',
              borderRadius: '30px',
              border: '1px solid rgba(255,255,255,0.2)',
              backgroundColor: '#1e293b',
              color: '#fff',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            📥 تحميل التصميم بجودة عالية
          </button>
        </div>
      )}
    </div>
  );
}
