const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Login User
export const loginUser = async (email, password) => {
    try{
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

        return data;

    } catch(error) {
        throw error;
    }
}


// Register User
export const registerUser = async (userData) => {
    try {
        const res = await fetch(`${BASE_URL}/api/auth/registration`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        
        if (!res.ok) {
            throw new Error("Registration failed");
        }

        return res.json()
    } catch(error) {
        throw error;
    }

};