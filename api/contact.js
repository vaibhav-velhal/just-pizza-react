export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const access_key = process.env.ACCESS_KEY;

    const formData = new URLSearchParams();
    formData.append("access_key", access_key);
    formData.append("name", req.body.name);
    formData.append("email", req.body.email);
    formData.append("message", req.body.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString()
    });

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
}
