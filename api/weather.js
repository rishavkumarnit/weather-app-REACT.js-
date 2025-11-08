export default async function handler(req, res) {
  const { city } = req.query;

// eslint-disable-next-line no-undef
  const apiKey = process.env.OWM_API_KEY;

  if (!city) {
    return res.status(400).json({ error: "City name is required" });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    if (!response.ok || data.cod !== 200) {
      return res.status(404).json({ error: data.message || "Invalid city" });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.log(err.message.substring(0,0));
    return res.status(500).json({ error: "Server error" });
  }
}
