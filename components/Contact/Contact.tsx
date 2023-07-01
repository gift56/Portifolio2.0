import React from "react";
import Link from "next/link";
import { BsTwitter, BsInstagram, BsLinkedin, BsSend } from "react-icons/bs";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useForm } from "@formspree/react";
import { contactSchema } from "@/schema";
import { motion } from "framer-motion";

interface FormValues {
  Name: string;
  Message: string;
  Email: string;
  Subject: string;
}

const Contact = () => {
  const Icons = [
    {
      href: "https://twitter.com/AsiughuE",
      icon: BsTwitter,
    },
    {
      href: "https://www.instagram.com/giftedvibez20/",
      icon: BsInstagram,
    },
    {
      href: "https://www.linkedin.com/in/efe-gift-109120241",
      icon: BsLinkedin,
    },
  ];

  const initialValues: FormValues = {
    Name: "",
    Message: "",
    Email: "",
    Subject: "",
  };
  const onSubmit = async (payload: FormValues | any, actions: any) => {
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

  const [state, submitForm = handleSubmit] = useForm("xaygwalq");

  if (state.succeeded) {
    toast.success("Thank you for getting in touch!", {
      toastId: 1,
      autoClose: 1500,
    });
  }

  const NameValuesCheck = values.Name.length > 0;
  const EmailValuesCheck = values.Email.length > 0;
  const SubjectValuesCheck = values.Subject.length > 0;
  const MessageValuesCheck = values.Message.length > 0;

  const btnDisabled =
    !NameValuesCheck ||
    !EmailValuesCheck ||
    !SubjectValuesCheck ||
    !MessageValuesCheck ||
    isSubmitting;

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
        duration: 0.3,
        type: "spring",
      },
    },
  };

  const itemdisplay = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      duration: 2,
      type: "spring",
    },
  };

  return (
    <section id="contact" className="py-10 w-full">
      <div className="container">
        <div className="w-full flex flex-col items-start justify-start tab:flex-row gap-10">
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1 }}
              className="text-2xl font-semibold md:text-3xl text-secondary"
            >
              Get in touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 4 }}
              className="text-sm md:text-base font-normal"
            >
              I’m very approachable and would love to speak to you. Feel free to
              call, send me an email . Follow me in social media or simply
              complete the enquiry form.
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-start gap-4 flex-wrap lg:flex-none"
            >
              {Icons.map((item, i) => (
                <Link
                  href={item.href}
                  target="_blank"
                  key={i}
                  rel="noreferrer noopener"
                  className="w-12 h-12 flex items-center justify-center bg-[#ffffff1a] rounded-md backdrop-blur-sm border border-[#ffffff1a] hover:bg-secondary hover:text-white hover:origin-bottom transition-all duration-300"
                >
                  <motion.span variants={itemdisplay}>
                    <item.icon size={20} className="hover:text-white" />
                  </motion.span>
                </Link>
              ))}
            </motion.div>
          </div>
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-4">
            <h2 className="text-2xl font-semibold">Send me a message</h2>
            <motion.form
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-start gap-4"
            >
              <input
                type="text"
                placeholder="Name"
                value={values.Name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="Name"
                className={`${
                  errors.Name && touched.Name
                    ? "border-red-500"
                    : "border-primary"
                } w-full h-12 px-5 rounded-xl border outline-none bg-primary text-white placeholder:text-white text-sm md:text-base font-normal`}
              />
              <input
                type="text"
                placeholder="Email Adress"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="Email"
                className={`${
                  errors.Email && touched.Email
                    ? "border-red-500"
                    : "border-primary"
                } w-full h-12 px-5 rounded-xl border outline-none bg-primary text-white placeholder:text-white text-sm md:text-base font-normal`}
              />
              <input
                type="text"
                placeholder="Subject"
                value={values.Subject}
                onChange={handleChange}
                onBlur={handleBlur}
                name="Subject"
                className={`${
                  errors.Subject && touched.Subject
                    ? "border-red-500"
                    : "border-primary"
                } w-full h-12 px-5 rounded-xl border outline-none bg-primary text-white placeholder:text-white text-sm md:text-base font-normal`}
              />
              <textarea
                name="Message"
                rows={4}
                value={values.Message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your message"
                className={`${
                  errors.Subject && touched.Subject
                    ? "border-red-500"
                    : "border-primary"
                } w-full h-52 p-5 rounded-xl border outline-none bg-primary text-white placeholder:text-white text-sm md:text-base font-normal resize-none`}
              ></textarea>
              <button
                disabled={btnDisabled}
                type="submit"
                className="text-base font-normal text-white cursor-pointer hover:bg-transparent border-secondary border flex items-center justify-center gap-3 w-fit bg-secondary py-2 px-8 rounded-lg transition-all duration-300 outline-none disabled:cursor-not-allowed disabled:bg-secondary/60 disabled:border-secondary/60"
              >
                <span>Send Message</span>
                <BsSend />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
