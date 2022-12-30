const API_URL = "http://localhost:3001" || process.env.BASE_URL;

export function get(url) {
  return fetch(API_URL + url, {
    method: "GET",
    ...options,
  }).then((res) => res.json());
}

export function post(
  url,
  body,
  options = {
    headers: {
      "Content-Type": "application/json",
    },
  }
) {
  return fetch(API_URL + url, {
    method: "POST",
    body: JSON.stringify(body),
    ...options,
  }).then((res) => res.json());
}

export function put(url, body, options = {}) {
  return fetch(API_URL + url, {
    method: "PUT",
    body: JSON.stringify(body),
    ...options,
  }).then((res) => res.json());
}

export function del(url, options = {}) {
  return fetch(API_URL + url, {
    method: "DELETE",
    ...options,
  }).then((res) => res.json());
}
