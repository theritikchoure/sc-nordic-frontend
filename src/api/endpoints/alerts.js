import api from "../apiClient";

// Fetch all alerts
export async function fetchAlerts() {
  try {
    const response = await api.get("/alerts");
      console.log("Alerts:", response.data.data);
      return response.data;
  } catch (error) {
    console.error("Error fetching alerts:", error);
  }
}

// Create a new alert
export async function createAlert(alertData) {
  try {
    const response = await api.post("/alerts", alertData);
      console.log("Created alert:", response.data.data);
      return response.data;
  } catch (error) {
    console.error("Error creating alert:", error);
  }
}


export async function deleteAlert(id) {
  try {
    const response = await api.delete(`/alerts/${id}`);
    console.log("Alerts:", response.data.data);
    return response.data;
  } catch (error) {
    //   return error;
    console.error("Error fetching alerts:", error);
  }
}