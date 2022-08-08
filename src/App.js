import React from "react";
import ReactSelectInput from "./components/ReactSelectInput";
import { useForm, Controller } from "react-hook-form";
import { phone } from "phone";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function App() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      gender: { value: "vanilla", label: "Vanilla" },
      fullname: "Yan Moe Naing",
      email: "yan@mail.com",
      phone: "097680888",
    },
  });

  function handleFormSubmit(data) {
    console.log("form data ", data);
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md my-5 p-10">
      <h1 className="font-extrabold mb-5">Form Input</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          placeholder="Name"
          className="w-full p-2 border mb-3"
          {...register("fullname")}
        />
        <input
          placeholder="Email"
          className="w-full p-2 border mb-3"
          {...register("email", {
            required: true,
            validate: (value) => {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                value
              );
            },
          })}
        />
        <input
          placeholder="Phone"
          className="w-full p-2 border mb-3"
          {...register("phone", {
            required: true,
            validate: (value) => {
              return phone(value, {
                country: "MMR",
                validateMobilePrefix: true,
              }).isValid;
            },
          })}
        />
        <Controller
          name="gender"
          control={control}
          render={({ field: { onChange, value } }) => (
            <ReactSelectInput
              name="gender"
              onChange={onChange}
              options={options}
              value={value}
            />
          )}
        />
        <button
          type="submit"
          className="shadow bg-green-500 text-cyan-50 my-5 w-full p-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}


