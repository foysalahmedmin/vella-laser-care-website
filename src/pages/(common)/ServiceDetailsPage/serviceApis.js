import base from "@/api/base.js";

export async function fetchOneService(id) {
  const response = await base.get(`/api/service/get_one_service/${id}`);
  return response?.data;
}

export async function AddServiceBooking({
  customer,
  parlor,
  name,
  service,
  service_type,
  email,
  phone,
  date,
  slot,
  message,
  payment_method,
}) {
  const payload = {
    ...(customer && { customer }),
    ...(parlor && { parlor }),
    name,
    service,
    service_type,
    email,
    phone,
    date,
    slot,
    message,
    payment_method,
  };
  const response = await base.post(`/api/booking/add_booking`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response?.data;
}

export async function fetchFilteredSlots() {
  const response = await base.get(`/api/doctor/slot/get_filtered_slots`);
  return response?.data;
}
