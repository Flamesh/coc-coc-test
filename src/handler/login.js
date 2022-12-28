import { post } from "utils/fetchApi";

export function login(email, password) {
  return new Promise((resolve, reject) => {
    if (email === "elsa@gmail.com" && password === "123456") {
      resolve(true);
    } else resolve(false);
  });
}
