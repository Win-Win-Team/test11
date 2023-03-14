import { defineStore } from "pinia";
import { useState } from "./state";
import { userLogin } from "@/api/user";
import { setToken } from "@/utils/storage";
export const useActions = defineStore("user.actions", () => {
  const state = useState();

  const login = (payload: any) => {
    const { username, password } = payload;
    return new Promise((resolve, reject) => {
      userLogin({ username: username.trim(), password: password })
        .then((response) => {
          const { result } = response;
          setToken(result.token);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  return {
    login,
  };
});
