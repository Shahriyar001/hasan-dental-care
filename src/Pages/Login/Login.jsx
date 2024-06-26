import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleClick = () => {
    toast.error("OOPS, Login manually");
  };

  return (
    <div className="h-[800px flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <label className="form-control w-full max-w-xs my-2">
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
          <label className="form-control w-full  my-2 max-w-xs">
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
            className="btn btn-accent  my-2 w-full"
            value="LOGIN"
            type="submit"
          />
          <div>
            {loginError && (
              <p className="text-red-600">Incorrect email or password</p>
            )}
          </div>
        </form>
        <p>
          New To This Site?{" "}
          <Link className="text-secondary" to="/signup">
            {" "}
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={() => handleClick()}
          className="btn btn-outline w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
