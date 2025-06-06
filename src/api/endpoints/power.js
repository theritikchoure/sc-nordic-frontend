import api from "../apiClient";

// Fetch all alerts
export async function fetchPowerDataForChart() {
  try {
    const response = await api.get(`/power/chart`);
    return response.data;
  } catch (error) {
    console.error("Error fetching alerts:", error);
  }
}
