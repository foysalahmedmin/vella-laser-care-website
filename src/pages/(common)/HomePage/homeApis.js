import base from "@/api/base.js";

export async function fetchFeaturedServices() {
  const response = await base.get(`/api/service/get_featured_services`);
  return response?.data;
}

export async function fetchFeaturedProducts() {
  const response = await base.get(`/api/product/get_featured_products`);
  return response?.data;
}

export async function fetchFilteredShopCategories() {
  const response = await base.get(
    `/api/shop_category/get_filtered_shop_categories`,
  );
  return response?.data;
}

export async function fetchAffiliatedParlors() {
  const response = await base.get(`/api/auth/get_affiliated_parlors`);
  return response?.data;
}

export async function fetchFilteredDepartments() {
  const response = await base.get(
    `/api/doctor/department/get_filtered_departments`,
  );
  return response?.data;
}

export async function fetchFilteredDoctors(department) {
  const response = await base.get(
    `/api/auth/get_filtered_doctors?department=${department}`,
  );
  return response?.data;
}

export async function fetchDoctorSlots(doctor, day) {
  const response = await base.get(
    `/api/auth/get_doctor_slots?doctor=${doctor}&day=${day}`,
  );
  return response?.data[0]?.slots;
}

export async function AddAppointment({
  customer,
  name,
  appointment_type,
  department,
  doctor,
  email,
  phone,
  date,
  slot,
  message,
}) {
  const payload = {
    ...(customer && { customer }),
    name,
    appointment_type,
    department,
    doctor,
    email,
    phone,
    date,
    slot,
    message,
    payment_method: appointment_type,
  };
  const response = await base.post(
    `/api/appointment/add_appointment`,
    payload,
    {
      headers: { "Content-Type": "application/json" },
    },
  );
  return response?.data;
}
