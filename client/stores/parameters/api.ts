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
    const res = await useFetch("/api/parameter");
    
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
    getParameters,
  }
});