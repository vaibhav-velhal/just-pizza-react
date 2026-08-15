const BASE_URL = import.meta.env.VITE_BACKEND_URL;


// User Details
export const userDetails = async () => {
    try {
        const res = await fetch(`${BASE_URL}/api/user`);

        const data = await res.json();
        
        if(!res.ok){
            throw new Error("Login failed");
        }

        return data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}