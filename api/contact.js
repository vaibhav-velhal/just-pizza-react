export default async function handler(request) {
    if (request.method !== "POST") {
        return new Response(
            JSON.stringify({ message: "Method Not Allowed" }),
            { status: 405 }
        );
    }

    const ACCESS_KEY = process.env.ACCESS_KEY;

    if (!ACCESS_KEY) {
        return new Response(
            JSON.stringify({ message: "Access Key Missing" }),
            { status: 500 }
        );
    }

    let body;
    try {
        body = await request.json();
    } catch (err) {
        return new Response(
            JSON.stringify({ message: "Invalid JSON" }),
            { status: 400 }
        );
    }

    const { name, email, message } = body;

    const payload = {
        access_key: ACCESS_KEY,
        name,
        email,
        message,
    };

    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const result = await res.json();

        if (result.success) {
            return new Response(
                JSON.stringify({ success: true }),
                { status: 200 }
            );
        } else {
            return new Response(
                JSON.stringify({ success: false }),
                { status: 400 }
            );
        }
    } catch (e) {
        return new Response(
            JSON.stringify({ message: "Server error", e }),
            { status: 500 }
        );
    }
}
