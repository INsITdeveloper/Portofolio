import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { ask } = req.query;
    if (!ask) {
        return res.status(400).json({ error: "Parameter 'ask' wajib diisi" });
    }

    try {
        const result = await Shiina_AI(ask);
        if (result.status === "error") {
            return res.status(500).json(result);
        }
        return res.status(200).json({ result });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function Shiina_AI(asklah) {
    const prompt = "Kamu adalah Shiina...";
    const response = await axios.get(`https://api.example.com?query=${encodeURIComponent(asklah)}`);
    
    return {
        status: "OK",
        message: "Success",
        data: response.data
    };
}
