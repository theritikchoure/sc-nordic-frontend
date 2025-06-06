import api from "../apiClient";

// Fetch all alerts
export async function fetchAlerts(page = 1, limit = 8) {
  try {
    const response = await api.get(`/alerts?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
}

// Create a new alert
export async function createAlert(alertData) {
  try {
    const response = await api.post("/alerts", alertData);
    return response.data;
  } catch (error) {
    console.error("Error", error);
  }
}

export async function deleteAlert(id) {
  try {
    const response = await api.delete(`/alerts/${id}`);
    return response.data;
  } catch (error) {
    //   return error;
    console.error("Error", error);
  }
}
