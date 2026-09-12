const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Login User
export const loginUser = async (email, password) => {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email, password
        })
    });
    
    const data = await res.json();
    
    if (!res.ok) {
        throw new Error(data.msg || "Failed to fetch data");
    }
    
    return data;
}


// Register User

export const registerUser = async (userData) => {
    const res = await fetch(`${BASE_URL}/api/auth/registration`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.msg || "Registration failed");
    }

    return data;
};