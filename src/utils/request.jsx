// import fetchRetry from "fetch-retry";
// const fetchWithRetry = fetchRetry(fetch);
const api = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => {
    const token = localStorage.getItem("accessToken"); // Hoặc sessionStorage.getItem("token")
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export const refreshToken = async (path) => {

    const token = localStorage.getItem("accessToken");
    if (!token) {
        return null;
    }   
    const res = await fetch(`${api}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
    })
    if (res.status === 200) {
        const data = await res.json();
        localStorage.setItem("accessToken", data.result.token);
        return data.result.token;
    } else {
        localStorage.removeItem("accessToken"); 
        return null;
    }
}

export const verifyToken = async (path, token) => {
    let attempt = 0; // Theo dõi số lần retry

    const fetchWithUpdatedToken = async () => {
        const res = await fetch(`${api}${path}`, {
            method: "POST",
            credentials: "include",
            headers: {
                ...getAuthHeaders(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(token)
        });

        if (res.status === 401 && attempt < 3) {
            attempt++;

            const newToken = await refreshToken("auth/refreshToken");

            if (newToken) {
                return await fetchWithUpdatedToken(); 
            } else {
                return res; // Nếu refreshToken thất bại, trả về kết quả lỗi 401
            }
        }
        return res;
    };

    const res = await fetchWithUpdatedToken();
    const data = await res.json();
    return { status: res.status, data };
};

export const get = async (path) => {
    const res = await fetch(`${api}${path}`, {
        credentials: "include",
        headers: {
            ...getAuthHeaders(),
        },
    });
    const data = await res.json();
    return {status: res.status, data};
}

export const post = async (path, newData) => {
    const isFormData = newData instanceof FormData;
    const res = await fetch(`${api}${path}`, {
        method: "POST",
        credentials: "include",
        headers: isFormData ? undefined : {
            "Content-Type": "application/json",
        },
        body: isFormData ? newData : JSON.stringify(newData)
    });
    const data = await res.json();
    return { status: res.status, data };
}


export const del = async (path, id) => {
    const res = await fetch(`${api}${path}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    });
    const data = await res.json();
    return { status: res.status, data };
}

export const patch = async (path, item) => {
    const isObject = item instanceof FormData;
    const res = await fetch(`${api}${path}`, {
        method: "PATCH",
        headers: isObject ? undefined : {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: isObject ? item : JSON.stringify(item)
    });
    const data = await res.json();
    return {status: res.status, data};
}