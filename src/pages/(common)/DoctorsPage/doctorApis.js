import base from "@/api/base.js";

export async function fetchFilteredDoctors(department, search) {
  const response = await base.get(
    `/api/auth/get_filtered_doctors?department=${department ? department : ""}&search=${search ? search : ""}`,
  );
  return response?.data;
}

export async function fetchFilteredDepartments() {
  const response = await base.get(
    `/api/doctor/department/get_filtered_departments`,
  );
  return response?.data;
}

export async function fetchOneDoctor(id) {
  const response = await base.get(
    `/api/doctor/profile/get_one_doctor_profile/${id}`,
  );
  return response?.data;
}
