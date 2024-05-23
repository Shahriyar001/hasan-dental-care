import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div>
        <h2 className="text-4xl">Login</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <label className="form-control w-full max-w-xs">
            <span className="label-text">Email</span>
            <input
              type="email"
              {...register("email")}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <span className="label-text">Password</span>
            <input
              type="password"
              {...register("password")}
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <p>{data}</p>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
