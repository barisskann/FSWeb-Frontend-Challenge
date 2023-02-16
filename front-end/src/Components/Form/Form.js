import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const [form, setForm] = useState(false);
console.log(errors);
  return (
    <div className=" mb-60 ">
      {form ? (
        <div className="flex justify-end w-9/12 m-auto">
          <AiOutlineClose
            onClick={() => {
              setForm(!form);
              reset();
            }}
            className="text-3xl hover:cursor-pointer red"
          />
        </div>
      ) : (
        <div className="w-9/12 m-auto">
          <button
            onClick={() => {
              setForm(!form);
            }}
            className="border p-2 bg-cyan-500 border-cyan-500 font-semibold  w-full rounded-md hover:bg-cyan-400		"
          >
            Send Message
          </button>
        </div>
      )}

      {form && (
        <form
          className=" w-9/12 m-auto"
          method="POST"
          action="mailto:bars_958@hotmail.com?=SA"
        >
          <div className="flex flex-col ">
            <label className="font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="p-2 outline-cyan-400 "
              id="name"
              {...register("name", { required: "This Required" })}
            />
            {errors.name && <div className="text-xs text-red-500">{errors.name.message}</div>}
          </div>{" "}
          <div className="flex  flex-col">
            <label className="font-semibold" htmlFor="surname">
              Surname
            </label>
            <input
              className="p-2 outline-cyan-400 "
              id="surname"
              {...register("surname", {
                required: "This Required",
                minLength: { value: 2, message: "En az 2 KARAKTER İÇERİR" },
              })}
            />
            {errors.surname && <div className="text-xs text-red-500">{errors.surname.message}</div>}
          </div>{" "}
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 outline-cyan-400 "
              id="email"
              {...register("email", {
                required: "This Required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && <div className="text-xs text-red-500">{errors.email.message}</div>}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="message">
              Message
            </label>
            <input
              className="p-2 outline-cyan-400 		 "
              id="message"
              {...register("message", { required: "This Required" })}
            />
            {errors.message && <div className="text-xs text-red-500">{errors.message.message}</div>}
          </div>
          <div>
            <button
              disabled={!isValid}
              className={`border p-2 bg-cyan-500 border-cyan-500 font-semibold  w-full rounded-md hover:bg-cyan-400	mt-4 ${
                isValid ? "" : "opacity-40"
              }`}
            >
              SUBMIT
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
