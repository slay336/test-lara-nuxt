import { helpers } from "@vuelidate/validators";

export const validPassword = (value: string) => {
  return helpers.regex(
    /[A-Z]/,
    /[a-z]/,
    /[0-9]/,
    /[#?!@$%^&*-]/,
  );
};