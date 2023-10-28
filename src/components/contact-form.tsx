"use client";
import { ThemeContext } from "@/app/page";
import emailjs from "@emailjs/browser";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { useForm, Resolver } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = {
  email: string;
  name: string;
  message: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email && values.name && values.message ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "This is required.",
          },
        }
      : !values.email
      ? {
          email: {
            type: "required",
            message: "This is required.",
          },
        }
      : !values.message
      ? {
          message: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    const templateParams = {
      name: data.name,
      notes: data.message,
    };

    emailjs
      .send(
        "service_q85xz7a",
        "template_xn29n7m",
        templateParams,
        "MmCZwBAhwqz0sksB0"
      )
      .then(
        function (response) {
          toast("Email Sent!");
        },
        function (error) {
          toast.error("Error in Sending Message!");
        }
      );
  });

  const theme = useContext(ThemeContext);

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-full max-w-2xl px-8">
      <div className="w-full mb-5">
        <h3 className="mb-1 text-sm">NAME</h3>
        <input
          {...register("name")}
          placeholder="Enter Name Here"
          className={`w-full px-3 py-2 rounded-md border ${
            errors?.name ? "border-red-600" : "border-purple-600"
          } ${
            theme?.theme == "dark" &&
            "bg-violet-400 text-slate-900 placeholder:text-slate-700 focus:border-violet-400"
          }`}
        />
        {errors?.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>

      <div className="w-full mb-5">
        <h3 className="mb-1 text-sm">EMAIL</h3>
        <input
          {...register("email")}
          placeholder="Enter Your Email"
          className={`w-full px-3 py-2 rounded-md border ${
            errors?.email ? "border-red-600" : "border-purple-600"
          } ${
            theme?.theme == "dark" &&
            "bg-violet-400 text-slate-900 placeholder:text-slate-700 focus:border-violet-400"
          }`}
        />
        {errors?.email && (
          <p className="text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="w-full mb-5">
        <h3 className="mb-1 text-sm">MESSAGE</h3>
        <textarea
          {...register("message")}
          placeholder="Leave a Message"
          className={`w-full px-3 py-2 rounded-md border ${
            errors?.message ? "border-red-600" : "border-purple-600"
          } ${
            theme?.theme == "dark" &&
            "bg-violet-400 text-slate-900 placeholder:text-slate-700 focus:border-violet-400"
          }`}
        />
        {errors?.message && (
          <p className="text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="flex justify-center text-white bg-violet-700 rounded-lg py-2 hover:bg-violet-900 duration-200 transition-colors"
      >
        <h3>HIT ME UP!</h3>
        <RocketLaunchIcon className="h-6 w-6 ml-3" />{" "}
      </button>
    </form>
  );
};

export default ContactForm;
