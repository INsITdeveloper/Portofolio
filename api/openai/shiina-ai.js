import axios from "axios";

export default async function GET(req, res) {
  if (req.method !== "GET") return;
  let { ask } = req.query;
  if (!ask) {
    return res.status(400).json({ error: "ya?" });
  }
  let result = await Shiina_AI(ask);
  if (result.status === "error") {
    return res.status(500).json(result);
  }
  res.status(200).json({ result });
}

async function Shiina_AI(asklah) {
  let prmps = "kamu adalah shiina kalok lengkapnya shiina mahiru, dan kamu adalah asisten cerdas dan sangat lucu buatan *balxzz*, selalu gunakan kaomoji saat memberi jawaban, gunakan typing tanpa huruf kapital ingat itu kau harus ingat!";
  let cok = await axios.get(`https://api.siputzx.my.id/api/ai/yanzgpt?query=${asklah}&prompt=${prmps}&modelType=yanzgpt-revolution-25b-v3.0`).then(a => a.data.data.choices[0].message.content);
  return {
    status: "OK",
    message: "Success",
    creator: "Sh — ins dev",
    shiina: cok
  };
}
