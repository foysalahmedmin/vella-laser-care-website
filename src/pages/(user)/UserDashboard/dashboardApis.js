import base from "@/api/base.js";

export async function fetchCustomerOrders(page, limit) {
  const response = await base.get(
    `/api/order/get_customer_orders?page=${page}&limit=${limit}`,
  );
  return response?.data[0];
}

export async function fetchSalesInvoice(id) {
  const response = await base.get(`/api/order/get_order_invoice/${id}`, {
    responseType: "blob",
  });
  return response?.data;
}

export async function fetchCustomerAppointments(page, limit) {
  const response = await base.get(
    `/api/appointment/get_customer_appointments?page=${page}&limit=${limit}`,
  );
  return response?.data[0];
}

export async function fetchPrescriptionPdf(id) {
  const response = await base.get(
    `/api/doctor/prescription/get_prescription_pdf/${id}`,
    {
      responseType: "blob",
    },
  );
  return response?.data;
}

export async function mutateAppointmentStatus({ id, status }) {
  const response = await base.get(
    `/api/appointment/update_status?id=${id}&status=${status ? status : ""}`,
  );
  return response?.data;
}

export async function mutateBookingStatus({ id, status }) {
  const response = await base.get(
    `/api/booking/update_status?id=${id}&status=${status ? status : ""}`,
  );
  return response?.data;
}

export async function fetchCustomerBookings(page, limit) {
  const response = await base.get(
    `/api/booking/get_customer_bookings?page=${page}&limit=${limit}`,
  );
  return response?.data[0];
}

export async function fetchCustomerCounts() {
  const response = await base.get(`/api/auth/get_customer_counts`);
  return response?.data;
}
