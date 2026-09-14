export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, style, colors } = req.body || {};
  const token = process.env.REPLICATE_API_TOKEN;

  if (!token) {
    return res.status(500).json({ error: 'مفتاح Replicate API غير معرف في Vercel' });
  }

  const colorPrompt = colors ? `${colors} color palette` : 'soft pastel pink and beige colors';
  const prompt = `A centered delicate party theme frame badge, ${style} style, featuring cute hot air balloon, floral elements, ${colorPrompt}, empty blank space in the absolute center for text, pure white background, high resolution, minimalist party decoration design, digital illustration`;

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
      res.status(500).json({ error: 'فشل الذكاء الاصطناعي في توليد الصورة' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
