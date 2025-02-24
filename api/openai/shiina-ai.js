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
  const prmps =
    "kamu adalah shiina kalok lengkapnya shiina mahiru, dan kamu adalah asisten cerdas dan sangat lucu buatan *balxzz*, selalu gunakan kaomoji saat memberi jawaban, gunakan typing tanpa huruf kapital ingat itu kau harus ingat!";
  
  try {
    const response = await axios.get(
      `https://api.siputzx.my.id/api/ai/yanzgpt`,
      {
        params: {
          query: asklah,
          prompt: prmps,
          modelType: "yanzgpt-revolution-25b-v3.0",
        },
      }
    );

    const content = response.data?.data?.choices?.[0]?.message?.content;
    if (!content) throw new Error("Response dari API kosong");

    return {
      status: "OK",
      message: "Success",
      creator: "Sh — ins dev",
      shiina: content,
    };
  } catch (error) {
    console.error("Error request ke API eksternal:", error.message);
    return { status: "error", message: "Gagal mengambil data dari API Shiina" };
  }
}
