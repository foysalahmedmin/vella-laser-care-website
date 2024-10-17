import base from "@/api/base.js";

export async function fetchParlorEarnings(type) {
  const response = await base.get(
    `/api/dashboard/get_parlor_earnings?type=${type}`,
  );
  return response?.data;
}
