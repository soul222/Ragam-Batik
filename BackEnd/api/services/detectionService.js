// detectionService.js
const fetch = require("node-fetch");

async function predictBatikFromImage(imageUrl) {
  const response = await fetch("https://ml-api-url/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image_url: imageUrl }),
  });

  if (!response.ok) throw new Error("Prediction failed");

  const result = await response.json();

  // Sesuaikan format responsenya
  return {
    nama_batik: result.batik_name,
    batik_id: result.batik_id,
  };
}

module.exports = { predictBatikFromImage };
