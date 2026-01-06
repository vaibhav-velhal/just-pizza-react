export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const ACCESS_KEY = process.env.ACCESS_KEY;
  if (!ACCESS_KEY) {
    return res.status(500).json({ message: "Access Key Missing" });
  }

  let body;
  try {
    body = req.body;
  } catch (error) {
    return res.status(400).json({ message: "Invalid JSON" });
  }

  return res.status(200).json({ message: "Form submitted successfully" });
}
