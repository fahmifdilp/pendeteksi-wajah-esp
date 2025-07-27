export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'No image provided' });
    }

    // Untuk debug di log
    console.log("Gambar diterima (potongan):", image.substring(0, 100));

    // Simulasi deteksi wajah (random)
    const isRecognized = Math.random() > 0.3; // 70% kemungkinan dikenali
    const name = isRecognized ? "Fahmi" : "Unknown";

    res.status(200).json({
      recognized: isRecognized,
      name: name
    });
  } catch (error) {
    console.error("Terjadi error:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
