// import fetchRetry from "fetch-retry";
// const fetchWithRetry = fetchRetry(fetch);
const api = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
};

const isPublicEnpoint = (path) => {
    return ["auth/login", "auth/register", "cities", "auth/sendEmail", "api/common/colors", "api/common/sizes","api/common/products", "auth/social-login", "auth/login/google" ].find(item => path.startsWith(item));
}

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
            ...(isPublicEnpoint(path) ? {} : getAuthHeaders()),
        },
    });
    const data = await res.json();
    return {status: res.status, data};
}

export const post = async (path, newData) => {
    const isFormData = newData instanceof FormData;
    const headers = {
        // Nếu không phải endpoint công khai thì thêm Authorization
        ...(isPublicEnpoint(path) ? {} : getAuthHeaders()),
        // Nếu không phải FormData thì cần set Content-Type
        ...(!isFormData && { "Content-Type": "application/json" })
    };
    const res = await fetch(`${api}${path}`, {
        method: "POST",
        credentials: "include",
        headers: Object.keys(headers).length > 0 ? headers : undefined,
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
            ...getAuthHeaders(),
            "Content-Type": "application/json",
        },
        body: id ? JSON.stringify(id) : null
    });
    const data = await res.json();
    return { status: res.status, data };
}

export const patch = async (path, item) => {
    // const isObject = item instanceof FormData;
    // const res = await fetch(`${api}${path}`, {
    //     method: "PATCH",
    //     headers: isObject ? undefined : {
    //         ...getAuthHeaders(),
    //         "Content-Type": "application/json"
    //     },
    //     credentials: "include",
    //     body: isObject ? item : JSON.stringify(item)
    // });
    // const data = await res.json();
    // return {status: res.status, data};
    const isFormData = item instanceof FormData;
    const headers = {
        // Nếu không phải endpoint công khai thì thêm Authorization
        ...(isPublicEnpoint(path) ? {} : getAuthHeaders()),
        // Nếu không phải FormData thì cần set Content-Type
        ...(!isFormData && { "Content-Type": "application/json" })
    };
    const res = await fetch(`${api}${path}`, {
        method: "PATCH",
        credentials: "include",
        headers: Object.keys(headers).length > 0 ? headers : undefined,
        body: isFormData ? item : JSON.stringify(item)
    });
    const data = await res.json();
    return { status: res.status, data };
}