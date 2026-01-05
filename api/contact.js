export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    // Parse JSON body manually (REQUIRED for Vercel)
    const body = await new Promise((resolve, reject) => {
      let data = "";
      req.on("data", chunk => (data += chunk));
      req.on("end", () => resolve(JSON.parse(data)));
      req.on("error", reject);
    });

    const access_key = process.env.ACCESS_KEY;

    const formData = new URLSearchParams();
    formData.append("access_key", access_key);
    formData.append("name", body.name);
    formData.append("email", body.email);
    formData.append("message", body.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ message: "Server Error", error });
  }
}
