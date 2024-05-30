import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api";
import { useContext } from "react";
import { AuthContext } from "../../auth/Auth";
import toast from "react-hot-toast";

const Login = () => {
    const {setUser, setRole, setUserId} = useContext(AuthContext);
    const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = {
        email:email,
        password: password
    }
   const response = await login(data);
   if(response.status === 200){
    setUser(response.email);
    setRole(response.role);
    setUserId(response.userId)
    localStorage.setItem("email", response.email)
    localStorage.setItem("role", response.role)
    localStorage.setItem("userId", response.userId)
    toast.success("successfully logged in");
    navigate('/');
   } else{
    toast.error("could not log in")
   }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col 2xl:w-1/4 p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
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
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none bg-gray-200 text-gray-900"
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
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none bg-gray-200 text-gray-900"
              />
            </div>
          </div>
          <div className="flex items-center pt-4 space-x-1"></div>
        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Register
          </Link>
          .
        </p>
          <div>
            <button
              type="submit"
              className="bg-[#1f2937] w-full rounded-md py-3 text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
