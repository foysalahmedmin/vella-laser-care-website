import base from "@/api/base.js";

export async function AddContact({ name, email, phone, message }) {
  const payload = {
    name,
    email,
    phone,
    message,
  };
  const response = await base.post(`/api/contact/add_contact`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response?.data;
}
