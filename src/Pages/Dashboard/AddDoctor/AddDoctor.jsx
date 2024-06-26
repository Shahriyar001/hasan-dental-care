import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data);
  };

  return (
    <div className="w-96 p-7 m-7">
      <h2 className="text-4xl">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <label className="form-control w-full my-2 max-w-xs">
          <span className="label-text">Your Name</span>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </label>
        <label className="form-control  my-2 w-full max-w-xs">
          <span className="label-text">Email</span>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </label>
        <label className="form-control my-2 w-full max-w-xs">
          <span className="label-text">Specialty</span>
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Pick a Specialty
            </option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
        </label>
        <input
          className="btn btn-accent mt-4 w-full"
          value="Add A Value"
          type="submit"
        />
        {/* {signUpError && <p className="text-red-600">{signUpError}</p>} */}
      </form>
    </div>
  );
};

export default AddDoctor;
