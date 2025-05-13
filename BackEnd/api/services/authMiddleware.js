// /services/authMiddleware.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifySupabaseJWT = async (request, h) => {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return h.response({ error: "Unauthorized" }).code(401).takeover();
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.decode(token, { complete: true });
    // Optional: Verifikasi iss, aud, atau sub
    request.auth = { uid: payload.payload.sub, email: payload.payload.email };
    return h.continue;
  } catch (err) {
    console.error("JWT Verification Error:", err);
    return h.response({ error: "Invalid token" }).code(401).takeover();
  }
};

module.exports = { verifySupabaseJWT };
