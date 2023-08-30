"use client";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  email: string;
  name: string;
  message: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email && values.name && values.message ? values : {},
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "This is required.",
          },
        }
      : !values.name
      ? {
          name: {
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
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-144 px-8">
      <div className="w-full mb-5">
        <h3 className="mb-1 text-sm">NAME</h3>
        <input
          {...register("name")}
          placeholder="Luo"
          className="w-full px-3 py-2 rounded-md border border-purple-600"
        />
        {errors?.name && <p>{errors.name.message}</p>}
      </div>

      <div className="w-full mb-5">
        <h3 className="mb-1 text-sm">EMAIL</h3>
        <input
          {...register("email")}
          placeholder="Bill"
          className="w-full px-3 py-2 rounded-md border border-purple-600"
        />
        {errors?.email && <p>{errors.email.message}</p>}
      </div>

      <div className="w-full mb-5">
        <h3 className="mb-1 text-sm">MESSAGE</h3>
        <textarea
          {...register("message")}
          placeholder="Bill"
          className="w-full px-3 py-2 rounded-md border border-purple-600 h-40 resize-none"
        />
        {errors?.message && <p>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="flex justify-center text-white bg-violet-500 rounded-lg py-2"
      >
        <h3>HIT ME UP!</h3>
        <RocketLaunchIcon className="h-6 w-6 ml-3" />{" "}
      </button>
    </form>
  );
};

export default ContactForm;
