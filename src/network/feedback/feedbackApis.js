import base from "@/api/base.js";

export async function addNewFeedback({
  feedback_type,
  products,
  service,
  doctor,
  message,
  rating,
}) {
  const payload = {
    feedback_type,
    ...(products?.length > 0 && { products }),
    ...(service && { service }),
    ...(doctor && { doctor }),
    ...(message && { message }),
    ...(rating && { rating }),
  };
  const response = await base.post(`/api/feedback/add_feedback`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response?.data;
}
