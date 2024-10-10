import base from "@/api/base.js";

export async function fetchCategoryFilters() {
  const response = await base.get(`/api/shop_category/get_category_filters`);
  return response?.data;
}

export async function fetchFilteredSkinTypes() {
  const response = await base.get(
    `/api/product/skin_type/get_filtered_skin_type`,
  );
  return response?.data;
}

export async function fetchFilteredConcerns() {
  const response = await base.get(`/api/product/concern/get_filtered_concerns`);
  return response?.data;
}

export async function fetchFilteredProducts(
  page,
  limit,
  category,
  sub_category,
  min_price,
  max_price,
  skin_type,
  skin_concern,
) {
  const response = await base.get(
    `/api/product/get_filtered_products?page=${page}&limit=${limit}&category=${category}&sub_category=${sub_category}&min_price=${min_price}&max_price=${max_price}&skin_type=${skin_type}&skin_concern=${skin_concern}`,
  );
  return response?.data[0];
}

export async function fetchOneProduct(id) {
  const response = await base.get(`/api/product/get_one_product_details/${id}`);
  return response?.data;
}

export async function fetchFilteredShipping(city) {
  const response = await base.get(
    `/api/configs/shipping/get_filtered_shipping?city=${city}`,
  );
  return response?.data;
}

export async function AddGuestOrder({
  name,
  city,
  postal,
  phone,
  address,
  email,
  sub_total,
  total,
  shipping,
  sold_from,
  payment_method,
  items,
}) {
  const payload = {
    name,
    city,
    postal,
    phone,
    address,
    email,
    sub_total,
    total,
    shipping,
    sold_from,
    payment_method,
    items,
  };
  const response = await base.post(`/api/order/add_guest_order`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response?.data;
}
