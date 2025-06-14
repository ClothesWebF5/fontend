const api = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => {
  const token = localStorage.getItem("accessToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const isPublicEnpoint = (path) => {
  return [
    "auth/login",
    "auth/register",
    "cities",
    "auth/sendEmail",
    "api/common/colors",
    "api/common/sizes",
    "api/common/categories",
    "api/products",
    "auth/social-login",
    "auth/login/google",

    "api/admin/ordersAdmin",
    "api/chatbot/ask",
    "auth/forgot/OTPRequest",
    "auth/forgot/checkOTP",
    "auth/forgot/reset"
  ].some(item => path.startsWith(item));
};

export const refreshToken = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return null;

  const res = await fetch(`${api}auth/refreshToken`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  if (res.status === 200) {
    const data = await res.json();
    localStorage.setItem("accessToken", data.result.token);
    return data.result.token;
  } else {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("profile");
    return null;
  }
};

const fetchWithAuthRetry = async (path, options = {}, retryCount = 1) => {
  const fullUrl = `${api}${path}`;

  // Nếu không phải public endpoint, thêm Authorization
  if (!isPublicEnpoint(path)) {
    options.headers = {
      ...(options.headers || {}),
      ...getAuthHeaders(),
    };
  }

  const res = await fetch(fullUrl, options);

  if (res.status === 401 && retryCount > 0) {
    const newToken = await refreshToken();
    if (newToken) {
      // Cập nhật header Authorization và thử lại
      options.headers = {
        ...(options.headers || {}),
        Authorization: `Bearer ${newToken}`,
      };
      return await fetchWithAuthRetry(path, options, retryCount - 1);
    }
  }

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  return { status: res.status, data };
};

// ----- API Methods -----
export const get = async (path) => {
  return fetchWithAuthRetry(path, {
    method: "GET",
    credentials: "include"
  });
};

export const post = async (path, newData) => {

  const isFormData = newData instanceof FormData;
  const headers = !isFormData ? { "Content-Type": "application/json" } : undefined;

  return fetchWithAuthRetry(path, {
    method: "POST",
    credentials: "include",
    headers,
    body: isFormData ? newData : JSON.stringify(newData),
  });
};

export const patch = async (path, item) => {
  const isFormData = item instanceof FormData;
  const headers = !isFormData ? { "Content-Type": "application/json" } : undefined;

  return fetchWithAuthRetry(path, {
    method: "PATCH",
    credentials: "include",
    headers,
    body: isFormData ? item : JSON.stringify(item),
  });
};

export const del = async (path, id) => {
  return fetchWithAuthRetry(path, {
    method: "DELETE",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: id ? JSON.stringify(id) : null,
  });
};

export const verifyToken = async (path, token) => {
  return fetchWithAuthRetry(path, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(token)
  });
};
