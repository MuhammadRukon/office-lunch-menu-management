import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "./../../api/index.js";
import toast from "react-hot-toast";
import { AuthContext } from "../../auth/Auth.jsx";

const Register = () => {
    const { setUser, setRole}  = useContext(AuthContext);
  const [errormsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    let password;
    const name = e.target.name.value;
    const rawEmail = e.target.email?.value;
    const email = rawEmail?.toLowerCase();
    const firstpassword = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const role = "employee";
    if (firstpassword === confirmPassword) {
      password = firstpassword || confirmPassword;
    } else {
      setErrorMsg("password doesn't match");
      return;
    }
    const data = {
      name: name,
      email: email,
      password: password,
      role: role,
    };
    const response = await register(data);
    if (response.status === 200) {
        localStorage.setItem('email',email);
        localStorage.setItem('role',role);
        setRole(role),
        setUser(email);
        toast.success("successfully registered");
      navigate("/");

    }else{
        toast.error("Registration failed");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col 2xl:w-1/4 p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
        </div>
        <form
          onSubmit={handleSignUp}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="confirmPassword" className="text-sm mb-2">
                  Confirm password
                </label>
              </div>
              <input
                type="password"
                name="confirmPassword"
                required
                id="confirmPassword"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            <p className="-pt-2 h-3 text-red-700 italic text-sm">{errormsg}</p>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#1f2937] w-full rounded-md py-3 text-white"
            >
              Register
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1"></div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
