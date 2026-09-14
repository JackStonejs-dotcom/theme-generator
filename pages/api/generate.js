export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, subtext, category, style, colors } = req.body || {};
  const token = process.env.REPLICATE_API_TOKEN;

  if (!token) {
    return res.status(500).json({ error: 'مفتاح Replicate API غير معرف في Vercel' });
  }

  const stylePrompts = {
    biroya: 'luxurious BİROYA royal brand aesthetic, deep royal blue and cream beige background, gold accents, elegant coffee and event theme',
    watercolor: 'soft pastel watercolor style, delicate floral frame',
    boho: 'modern boho minimalist style, organic shapes and dry plants',
    embroidery: 'fine embroidery texture style, luxury fabric background'
  };

  const selectedStyle = stylePrompts[style] || stylePrompts.biroya;
  const colorPalette = colors ? `${colors} palette` : 'royal blue, off-white, and gold accent';

  const prompt = `A highly sophisticated centered branding frame for ${category}, ${selectedStyle}, with ${colorPalette}, clean empty blank space in the exact center for text layout, professional graphic design layout, high resolution 8k`;

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
      res.status(500).json({ error: 'فشل التوليد، يرجى إعادة المحاولة' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
