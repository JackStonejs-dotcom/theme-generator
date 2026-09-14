export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, subtext, category, font, shape, icon, style, colors } = req.body || {};
  const token = process.env.REPLICATE_API_TOKEN;

  if (!token) {
    return res.status(500).json({ error: 'مفتاح Replicate API غير معرف في Vercel' });
  }

  // ترجمة وتوجيه شكل الإطار للهندسة المعمارية للتصميم
  const shapeDescriptions = {
    circle: 'delicate circular frame badge in center',
    arch: 'royal wedding arch frame structure with floral arrangements',
    square: 'minimalist boho square frame',
    hexagon: 'modern geometric hexagon center badge'
  };

  // ترجمة وتوجيه العناصر الزخرفية والرموز
  const iconDescriptions = {
    none: '',
    cute_animals: 'featuring adorable teddy bear and baby animals illustrations',
    vintage_car: 'featuring a classic vintage toy car illustration',
    luxury_ornament: 'embellished with elegant royal Islamic / Arabic golden filigree ornaments',
    golden_rings: 'featuring delicate golden wedding rings illustration',
    coffee_cup: 'featuring a luxury coffee cup branding element'
  };

  const selectedShape = shapeDescriptions[shape] || shapeDescriptions.arch;
  const selectedIcon = iconDescriptions[icon] || '';
  const selectedPalette = colors ? `${colors} color scheme` : 'royal blue, cream, and gold accent';

  // بناء المحفز الذكي القوي جداً للنموذج
  const prompt = `A centered, ultra-high-resolution branding theme template for ${category}. Structural frame: ${selectedShape}. Elements: ${selectedIcon}. Color Palette: ${selectedPalette}. Style: luxurious BİROYA brand design, soft studio lighting, clean completely empty blank blank center for text overlay, 8k render, digital art`;

  try {
    const startRes = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        version: "black-forest-labs/flux-1.1-pro",
        input: { prompt: prompt, width: 1024, height: 1024 }
      })
    });

    let prediction = await startRes.json();

    if (startRes.status !== 201) {
      return res.status(500).json({ error: prediction.detail || 'خطأ في الاتصال بـ Replicate' });
    }

    while (prediction.status !== "succeeded" && prediction.status !== "failed") {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const checkRes = await fetch(`https://api.replicate.com/v1/predictions/${prediction.id}`, {
        headers: { "Authorization": `Token ${token}` }
      });
      prediction = await checkRes.json();
    }

    if (prediction.status === "succeeded") {
      res.status(200).json({ output: prediction.output });
    } else {
      res.status(500).json({ error: 'فشل الذكاء الاصطناعي في معالجة طلبك' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
