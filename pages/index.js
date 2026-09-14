import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [style, setStyle] = useState('watercolor');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const generate = async () => {
    if (!name.trim()) {
      alert('يرجى كتابة اسم أولاً');
      return;
    }

    setLoading(true);
    setImage(null);
    setErrorMsg('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, style })
      });

      const data = await res.json();

      if (res.ok && data.output) {
        setImage(Array.isArray(data.output) ? data.output[0] : data.output);
      } else {
        setErrorMsg(data.error || 'تعذر توليد الصورة');
      }
    } catch (err) {
      setErrorMsg('حدث خطأ أثناء الاتصال بالخادم');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl" style={{ fontFamily: 'sans-serif', padding: '40px', textAlign: 'center' }}>
      <h1>صممي ثيم مناسبتك</h1>
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="اكتبي اسم الطفل أو المناسبة"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '10px', margin: '5px', width: '250px' }}
        />
        <select value={style} onChange={(e) => setStyle(e.target.value)} style={{ padding: '10px', margin: '5px' }}>
          <option value="watercolor">ألوان مائية</option>
          <option value="embroidery">تطريز</option>
          <option value="pencil">رسم بالقلم</option>
        </select>
      </div>
      <button onClick={generate} disabled={loading} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        {loading ? 'جاري التوليد (قد يستغرق 10 ثوانٍ)...' : 'توليد التصميم'}
      </button>

      {errorMsg && <p style={{ color: 'red', marginTop: '15px' }}>{errorMsg}</p>}

      {image && (
        <div style={{ marginTop: '20px' }}>
          <img src={image} alt="ثيم المناسبة" style={{ maxWidth: '400px', width: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
      )}
    </div>
  );
}
