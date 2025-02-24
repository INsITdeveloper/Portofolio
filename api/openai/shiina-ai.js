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
  const prmps = `Kamu adalah Shiina Mahiru, asisten cerdas dan lucu buatan *balxzz*. Selalu gunakan kaomoji saat menjawab dan gunakan typing tanpa huruf kapital.`;

  try {
    const response = await axios.post(
      "https://writify.ai/wp-json/mwai-ui/v1/chats/submit",
      {
        botId: "chatbot-b7j5gh",
        customId: null,
        session: "N/A",
        chatId: "tmftj2o1c1d",
        contextId: 1000012232,
        messages: [
          {
            role: "system",
            content: prmps, // Prompt awal untuk Shiina
          },
          {
            role: "user",
            content: asklah, // Pertanyaan user masuk di sini
          },
        ],
        newMessage: asklah, // Ini juga sebagai pertanyaan user
        newFileId: null,
        stream: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": "0a23e52622",
          "Accept": "text/event-stream",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36",
          "Referer": "https://writify.ai/tool/ai-chat/",
        },
        responseType: "stream",
        timeout: 15000,
      }
    );

    return new Promise((resolve, reject) => {
      let finalData = "";

      response.data.on("data", (chunk) => {
        const lines = chunk.toString().split("\n");

        for (let line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const jsonData = JSON.parse(line.slice(6));
              if (jsonData.type === "live") {
                process.stdout.write(jsonData.data);
              } else if (jsonData.type === "end") {
                finalData = jsonData.data;
              }
            } catch (e) {
              console.warn("Warning parsing chunk:", e);
            }
          }
        }
      });

      response.data.on("end", () => {
        try {
          const parsedData = JSON.parse(finalData);
          resolve({
            status: "OK",
            message: "Success",
            creator: "Sh — ins dev",
            shiina: parsedData.reply,
          });
        } catch (e) {
          reject("Error parsing final response");
        }
      });

      response.data.on("error", (err) => {
        reject(err);
      });
    });
  } catch (error) {
    console.error("Error request ke API eksternal:", error.message);
    return { status: "error", message: "Gagal mengambil data dari API Shiina" };
  }
}
