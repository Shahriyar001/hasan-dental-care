import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="h-[800px] bg-slate-500 flex justify-center items-center">
      <div className="w-96 p-7 bg-blue-400">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label className="form-control w-full max-w-xs">
            <span className="label-text">Email</span>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <span className="label-text">Password</span>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 charcters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            <span className="label-text">Forget Password?</span>
          </label>
          <input
            className="btn btn-accent w-full"
            value="LOGIN"
            type="submit"
          />
        </form>
        <p>
          New To This Site?{" "}
          <Link className="text-secondary" to="/singup">
            {" "}
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
