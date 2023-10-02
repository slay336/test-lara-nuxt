import { defineStore } from "pinia";
import { IParameters } from "./types";
import { useCustomFetch } from "~/custom_fetch";

export const useParameterStore = defineStore('parameter', () => {
  const config = useRuntimeConfig();

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

  const hasSocial: Ref<boolean> = computed(() => {
    return !!parameters.value.facebook
      || !!parameters.value.twitter
      || !!parameters.value.linkedin
      || !!parameters.value.instagram;
  });

  async function getParameters () {
    const { data } = await useCustomFetch("/api/parameter", { baseURL: config.public.API_URL });

    ({
      brand: parameters.value.brand,
      location: parameters.value.location,
      phone: parameters.value.phone,
      email: parameters.value.email,
      facebook: parameters.value.facebook,
      twitter: parameters.value.twitter,
      linkedin: parameters.value.linkedin,
      instagram: parameters.value.instagram,
    } = data.value as unknown as IParameters);
  }

  return {
    parameters,
    getParameters,
    hasSocial,
  }
});