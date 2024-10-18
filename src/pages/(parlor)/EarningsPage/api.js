import base from "@/api/base.js";

export async function fetchOneWithdraw(id) {
  const response = await base.get(`/api/withdraw/get_one_withdraw/${id}`);
  return response?.data;
}

export async function fetchMyWithdraws(page, limit) {
  const response = await base.get(
    `/api/withdraw/get_my_withdraws?page=${page}&limit=${limit}`,
  );
  return response?.data[0];
}

export async function AddWithdrawRequest({
  amount,
  account_name,
  account_number,
  bank_name,
  branch,
  routing_number,
  message,
}) {
  const payload = {
    amount,
    account_name,
    account_number,
    bank_name,
    branch,
    routing_number,
    message,
  };
  const response = await base.post(
    `/api/withdraw/add_withdraw_request`,
    payload,
    {
      headers: { "Content-Type": "application/json" },
    },
  );
  return response?.data;
}
