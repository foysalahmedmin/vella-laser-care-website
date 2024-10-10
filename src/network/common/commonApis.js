import base from "@/api/base.js";

export async function fetchFilteredCities() {
  const response = await base.get(`/api/configs/city/get_filtered_cities`);
  return response?.data;
}
