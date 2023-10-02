import { useCookie, useRuntimeConfig } from "nuxt/app";

export const useCustomFetch = ( url: string, opts: any ) => {
  const config = useRuntimeConfig();

  const xsrfToken = useCookie("XSRF-TOKEN");
  let headers = {
    accept: "application/json",
    ...opts?.headers,
  }
  if (xsrfToken && xsrfToken.value !== null) {
    headers["X-XSRF-TOKEN"] = xsrfToken.value;
  }
  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
      referer: config.public.baseURL
    }
  }
  return useFetch(url, {
    baseURL: config.public.API_URL,
    headers,
    credentials: "include",
    ...opts,
  });
};