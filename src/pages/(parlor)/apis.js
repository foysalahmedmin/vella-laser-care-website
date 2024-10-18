import base from "@/api/base.js";

export async function fetchParlorEarnings(type) {
  const response = await base.get(
    `/api/dashboard/get_parlor_earnings?type=${type}`,
  );
  return response?.data;
}

export async function fetchServiceEarnings() {
  const response = await base.get(`/api/dashboard/get_service_earnings`);
  return response?.data;
}

export async function fetchParlorCounts() {
  const response = await base.get(`/api/dashboard/get_parlor_counts`);
  return response?.data;
}

export async function fetchEarnings(page, limit) {
  const response = await base.get(
    `/api/dashboard/get_earnings?page=${page}&limit=${limit}`,
  );
  return response?.data[0];
}

export async function fetchEarningSummary() {
  const response = await base.get(`/api/dashboard/get_earnings_summary`);
  return response?.data;
}
