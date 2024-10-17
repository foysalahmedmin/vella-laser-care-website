import base from "@/api/base.js";

export async function fetchMyNotifications() {
  const response = await base.get(`/api/notification/get_my_notifications`);
  return response?.data;
}

export async function fetchReadNotifications() {
  const response = await base.get(`/api/notification/read_my_notifications`);
  return response?.data;
}

export async function fetchNotificationsCount() {
  const response = await base.get(`/api/notification/get_notifications_counts`);
  return response?.data;
}
