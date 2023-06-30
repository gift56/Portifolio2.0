import React from "react";
import Link from "next/link";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useForm } from "@formspree/react";
import { contactSchema } from "@/schema";

const Contact = () => {
  const Icons = [
    {
      href: "https://twitter.com/",
      icon: BsTwitter,
    },
    {
      href: "https://web.instagram.com/",
      icon: BsInstagram,
    },
    {
      href: "https://youtube.com/",
      icon: BsLinkedin,
    },
  ];

  const [state, submitForm = handleSubmit] = useForm("xaygwalq");
  const initialValues = {
    Full_Name: "",
    Message: "",
    Email: "",
  };
  const onSubmit = async (payload, actions) => {
    submitForm(payload);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit,
  });

  return (
    <section id="contact" className="py-10 w-full">
      <div className="container">
        <div className="w-full flex flex-col items-start justify-start tab:flex-row gap-10">
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4">
            <h2 className="text-2xl font-semibold md:text-3xl text-secondary">
              Get in touch
            </h2>
            <p className="text-sm md:text-base font-normal">
              I’m very approachable and would love to speak to you. Feel free to
              call, send me an email . Follow me in social media or simply
              complete the enquiry form.
            </p>
            <div className="flex items-center justify-start gap-4 flex-wrap lg:flex-none">
              {Icons.map((item, i) => (
                <Link
                  href={item.href}
                  target="_blank"
                  key={i}
                  rel="noreferrer noopener"
                  className="w-12 h-12 flex items-center justify-center bg-[#ffffff1a] rounded-md backdrop-blur-sm border border-[#ffffff1a]"
                >
                  <item.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4">
            <h2 className="text-2xl font-semibold">Send me a message</h2>
            <form className="w-full flex flex-col items-start"></form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
