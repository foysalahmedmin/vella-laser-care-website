import base from "@/api/base";

export async function mutateCustomerRegister({
  name,
  phone,
  address,
  email,
  role,
  postal,
  city,
  password,
}) {
  const payload = {
    name,
    phone,
    address,
    email,
    role,
    postal,
    city,
    password,
  };
  const response = await base.post(`/api/auth/customer_register`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response?.data;
}

export async function mutateSignIn({ email, password }) {
  const payload = { email, password };

  const response = await base.post(`/api/auth/cp_login`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response?.data;
}

export async function fetchMe() {
  const response = await base.get(`/api/auth/get_user_by_token`);
  return response?.data[0];
}

export async function mutateSignOut({ refreshToken }) {
  const payload = { refreshToken };
  const response = await base.post(`/api/auth/logout`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response?.data;
}
