import base from "@/api/base.js";

export async function fetchFilteredParlors(page, limit, search, city) {
  const response = await base.get(
    `/api/auth/get_filtered_parlors?page=${page}&limit=${limit}&search=${search}&city=${city}`,
  );
  return response?.data[0];
}

export async function fetchOneParlor(id) {
  const response = await base.get(`/api/auth/get_one_parlor/${id}`);
  return response?.data;
}
