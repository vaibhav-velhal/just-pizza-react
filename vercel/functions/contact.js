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

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: data.success ? 200 : 400,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}
