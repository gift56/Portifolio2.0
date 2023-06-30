import * as yup from "yup";

export const contactSchema = yup.object().shape({
  Name: yup.string().required("Required"),
  Message: yup.string().required("Required"),
  Subject: yup.string().required("Required"),
  Email: yup.string().email("Invalid Email Address").required("Required"),
});
