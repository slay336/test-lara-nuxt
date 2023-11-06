import {defineStore} from "pinia";
import {IUserRegisterForm} from "./types";
import {useCustomFetch} from "~/custom_fetch";

export const useUserStore = defineStore("users", () => {
  const config = useRuntimeConfig();

  async function register (params: IUserRegisterForm) {
    await useCustomFetch("/sanctum/csrf-cookie", { baseURL: config.public.API_URL });

    return useCustomFetch(
      "/api/register",
      {
        baseURL: config.public.API_URL,
        method: "post",
        body: params,
      }
    );
  }

  return {
    register,
  };
});
