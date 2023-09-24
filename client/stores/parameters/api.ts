import { defineStore } from "pinia";
import { IParameters } from "./types";

export const useParameterStore = defineStore('parameter', () => {
  const parameters: Ref<IParameters> = ref({
    brand: "",
    location: "",
    phone: "",
    email: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
  });

  async function getParameters () {
    console.log(process.env.API_URL)
    const res = await useFetch("/api/parameter", { baseURL: process.env.API_URL });
    
    ({
      brand: parameters.value.brand,
      location: parameters.value.location,
      phone: parameters.value.phone,
      email: parameters.value.email,
      facebook: parameters.value.facebook,
      twitter: parameters.value.twitter,
      linkedin: parameters.value.linkedin,
      instagram: parameters.value.instagram,
    } = res.data as unknown as IParameters);
  }

  return {
    parameters,
    getParameters,
  }
});