export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const ACCESS_KEY = process.env.ACCESS_KEY;  // BACKEND ONLY, HIDDEN

    if (!ACCESS_KEY) {
        return res.status(500).json({ message: "Access Key Missing" });
    }

    const { name, email, message } = req.body;

    // Build payload for Web3Forms
    const formData = {
        access_key: ACCESS_KEY,
        name,
        email,
        message,
    };

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(400).json({ message: "Form submission failed" });
        }
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
}
