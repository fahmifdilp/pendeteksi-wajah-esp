export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { image } = req.body;

  if (!image) {
    return res.status(400).json({ error: 'No image provided' });
  }

  console.log("Gambar diterima:", image.slice(0, 30)); // Log sebagian gambar

  // Di sini nanti kamu bisa tambahkan pemrosesan AI (pengenalan wajah)

  res.status(200).json({
    recognized: true,
    name: "Fahmi"
  });
}
