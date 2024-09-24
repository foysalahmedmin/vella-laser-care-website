import base from "@/api/base";

export async function mutateRegister({ name, phone, address, email, role, photo, password }) {
    const payload = new FormData();
    payload.append("name", name);
    payload.append("phone", phone);
    payload.append("address", address);
    payload.append("email", email);
    payload.append("role", role);
    payload.append("photo", photo);
    payload.append("password", password);

    const response = await base.post(`/api/auth/user_register`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response?.data;
}

export async function mutateSignIn({ email, password }) {
    const payload = { email, password }

    const response = await base.post(`/api/auth/cp_login`, payload, {
        headers: { "Content-Type": "application/json" },
    });
    return response?.data;
}

export async function fetchMe() {
    const response = await base.get(`/api/auth/get_user_by_token`);
    return response?.data[0];
}

export async function updateMyProfile({ id, name, password, photo }) {
    const payload = new FormData();
    payload.append("name", name);
    payload.append("password", password);
    payload.append("photo", photo);

    const response = await base.put(`/api/auth/user_update/${id}`, payload, {
        headers: { "Content-Type": "application/json" },
    });
    return response?.data;
}

export async function mutateSignOut({ refreshToken }) {
    const payload = { refreshToken }
    const response = await base.post(`/api/auth/logout`, payload, {
        headers: { "Content-Type": "application/json" },
    });
    return response?.data;
}

export async function fetchUsers(page, limit, search) {
    const response = await base.get(`/api/auth/get_users?page=${page}&limit=${limit}&search=${search}`);
    return response?.data[0];
}

export async function toggleUserStatus(id) {
    const response = await base.get(`/api/auth/toggle_one_pending_user/${id}`);
    return response?.data;
}

export async function mutateReallocation({ allocation, user }) {
    const payload = { allocation, user }
    const response = await base.post(`/api/recent/reallocate_user_storage`, payload, {
        headers: { "Content-Type": "application/json" },
    });
    return response?.data;
}
