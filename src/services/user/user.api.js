const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// User Details
export const userDetails = async (token, userId) => {
    try {        
        const res = await fetch(`${BASE_URL}/api/user/${userId}`,{
            "method": "GET",
            "headers": {
                "authorization": `Bearer ${token}`
            }
        });
        
        const data = await res.json();
        if(!res.ok){
            throw new Error("Failed to fetch data");
        }
        
        return data;
    } catch(error) {
        throw error;
    }
}