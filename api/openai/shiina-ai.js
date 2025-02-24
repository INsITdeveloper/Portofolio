import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { ask } = req.query;
  if (!ask) {
    return res.status(400).json({ error: "ya?" });
  }

  try {
    const result = await Shiina_AI(ask);
    if (result.status === "error") {
      return res.status(500).json(result);
    }
    return res.status(200).json({ result });
  } catch (error) {
    console.error("Error di API Shiina_AI:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function Shiina_AI(asklah) {
  const prmps = `kamu adalah shiina mahiru, asisten cerdas dan lucu buatan *balxzz*. selalu gunakan kaomoji saat menjawab dan gunakan typing tanpa huruf kapital.`;

  try {
    const response = await axios.get(
      "https://apii.ambalzz.biz.id/api/openai/shiina-ai",
      {
        params: { ask: asklah },
        headers: { accept: "application/json" },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("Error request ke API eksternal:", error.message);
    return { status: "error", message: "Gagal mengambil data dari API Shiina" };
  }
}
