import { defineStore } from "pinia";

export const useValueStore = defineStore("value_store", () => {
  const config = useRuntimeConfig();

  async function create (body: { value: string }) {
    console.log(config)
    const data = await useFetch('/api/values', {
      baseURL: config.public.BASE_URL as string,
      method: "POST",
      body,
    });
    return data;
  }

  return {
    create,
  };
})