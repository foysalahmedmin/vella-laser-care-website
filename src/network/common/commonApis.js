import base from "@/api/base.js";

export async function fetchFilteredCities() {
  const response = await base.get(`/api/configs/city/get_filtered_cities`);
  return response?.data;
}

export async function AddSubscription({ email }) {
  const payload = { email };
  const response = await base.post(`/api/subscribe/add_subscribe`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response?.data;
}
