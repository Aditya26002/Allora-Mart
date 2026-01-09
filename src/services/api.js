// API service configuration and functions

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.example.com";

/**
 * Generic fetch wrapper
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise} API response
 */
export const apiClient = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Example: Product service functions
export const productService = {
  getAll: () => apiClient("/products"),
  getById: (id) => apiClient(`/products/${id}`),
  create: (data) => apiClient("/products", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) => apiClient(`/products/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  delete: (id) => apiClient(`/products/${id}`, { method: "DELETE" }),
};
