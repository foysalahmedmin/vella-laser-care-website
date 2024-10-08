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
