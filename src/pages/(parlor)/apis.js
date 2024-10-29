import base from "@/api/base.js";

export async function fetchParlorEarnings(type) {
  const response = await base.get(
    `/api/dashboard/get_parlor_earnings?type=${type}`,
  );
  return response?.data;
}

export async function fetchParlorOrderGraph(type) {
  const response = await base.get(
    `/api/dashboard/get_parlor_order_chart?type=${type}`,
  );
  return response?.data;
}

export async function fetchParlorAppointmentGraph(type) {
  const response = await base.get(
    `/api/dashboard/get_parlor_appointment_chart?type=${type}`,
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

export async function fetchBookingEarnings(page, limit) {
  const response = await base.get(
    `/api/dashboard/get_booking_earnings?page=${page}&limit=${limit}`,
  );
  return response?.data[0];
}

export async function fetchOrderEarnings(page, limit) {
  const response = await base.get(
    `/api/dashboard/get_order_earnings?page=${page}&limit=${limit}`,
  );
  return response?.data[0];
}

export async function fetchAppointmentEarnings(page, limit) {
  const response = await base.get(
    `/api/dashboard/get_appointment_earnings?page=${page}&limit=${limit}`,
  );
  return response?.data[0];
}

export async function fetchEarningSummary() {
  const response = await base.get(`/api/dashboard/get_earnings_summary`);
  return response?.data;
}
