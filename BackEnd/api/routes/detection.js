// /routes/detection.js
const supabase = require("../services/supabaseClient");
const { verifySupabaseJWT } = require("../services/authMiddleware");
const { predictBatikFromImage } = require("../services/detectionService");

module.exports = [
  {
    method: "POST",
    path: "/detect",
    options: { pre: [{ method: verifySupabaseJWT }] },
    handler: async (req, h) => {
      const image_url = req.payload.image_url;
      const user_id = req.auth.uid;
      const prediction = await predictBatikFromImage(image_url);

      const { data, error } = await supabase.from("detection_history").insert([
        {
          user_id,
          image_url,
          hasil_batik_id: prediction.batik_id,
        },
      ]);

      if (error) return h.response({ error }).code(500);

      return { message: "Deteksi berhasil", result: prediction };
    },
  },
  {
    method: "GET",
    path: "/history/{user_id}",
    handler: async (req, h) => {
      const { user_id } = req.params;
      const { data, error } = await supabase
        .from("detection_history")
        .select("*, batik_types(*)")
        .eq("user_id", user_id)
        .order("tanggal", { ascending: false });

      if (error) return h.response({ error }).code(500);

      return { data };
    },
  },
];
