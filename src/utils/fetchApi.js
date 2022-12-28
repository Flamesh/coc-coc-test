export function get(url, options = {}) {
  return fetch(url, {
    method: "GET",
    ...options,
  }).then((res) => res.json());
}

export function post(url, body, options = {}) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    ...options,
  }).then((res) => res.json());
}

export function put(url, body, options = {}) {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(body),
    ...options,
  }).then((res) => res.json());
}

export function del(url, options = {}) {
  return fetch(url, {
    method: "DELETE",
    ...options,
  }).then((res) => res.json());
}
