import base from "@/api/base.js";

export async function fetchOneService(id) {
  const response = await base.get(`/api/service/get_one_service/${id}`);
  return response?.data;
}
