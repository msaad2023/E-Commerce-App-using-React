const API_URL = "https://api.storerestapi.com";

export function getProducts() {
  return fetch(`${API_URL}/products`).then((res) => res.json());
}

export function getCategories() {
  return fetch(`${API_URL}/categories`).then((res) => res.json());
}

export function getProduct(slug) {
    return fetch(`${API_URL}/products/${slug}`).then((res) => res.json());
  }