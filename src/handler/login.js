import { post } from "utils/fetchApi";

export function login(email, password) {
  return new Promise((resolve, reject) => {
    post("/auth/login", { email, password })
      .then((res) => {
        switch (res.code) {
          case 200:
            return resolve(res.data);
          case 401:
            return reject(res.message);
          default:
            return reject(res.message);
        }
      })
      .catch((err) => {
        const message = err.message || "Something went wrong";
        reject(message);
      });
  });
}
