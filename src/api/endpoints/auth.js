import api from "../apiClient";

// Fetch all alerts
export async function login({username, password}) {
  try {
    const response = await api.post("/auth/login", {username, password});
    console.log("Alerts:", response.data.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching alerts:", error);
  }
}