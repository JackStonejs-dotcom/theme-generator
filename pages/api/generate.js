export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, style, colors, elements } = req.body || {};

  const prompt = `Arabic ${style} event theme for ${name}, ${elements}, ${colors} colors, minimal, printable, white background, high resolution`;

  try {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        "Authorization": `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        version: "black-forest-labs/flux-1.1-pro",
        input: { prompt: prompt, width: 1024, height: 1024 }
      })
    });

    const prediction = await response.json();
    res.status(200).json(prediction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
