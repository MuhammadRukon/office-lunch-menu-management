import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { useContext } from "react";
import { AuthContext } from "../../auth/Auth";

const Navbar = () => {
  const { user, loading, setUser, setRole } = useContext(AuthContext);
  const handleLogout = ()=>{
    setUser(null);
    setRole(null);
    localStorage.setItem('email', null);
    localStorage.setItem("role", null);
  }
  return (
    <>
      <div className="text-white bg-[#1f2937]">
        <div className="xl:container mx-auto px-8 flex justify-between items-center">
          <div></div>
          <NavItems />
          <div className="w-8 h-8 relative rounded-full cursor-pointer">
            <svg
              fill="none"
              height="30"
              viewBox="0 0 24 24"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#fff">
                <path d="m22 12c0-5.51-4.49-10-10-10s-10 4.49-10 10c0 2.9 1.25 5.51 3.23 7.34 0 .01 0 .01-.01.02.1.1.22.18.32.27.06.05.11.1.17.14.18.15.38.29.57.43.07.05.13.09.2.14.19.13.39.25.6.36.07.04.15.09.22.13.2.11.41.21.63.3.08.04.16.08.24.11.22.09.44.17.66.24.08.03.16.06.24.08.24.07.48.13.72.19.07.02.14.04.22.05.28.06.56.1.85.13.04 0 .08.01.12.02.34.03.68.05 1.02.05s.68-.02 1.01-.05c.04 0 .08-.01.12-.02.29-.03.57-.07.85-.13.07-.01.14-.04.22-.05.24-.06.49-.11.72-.19.08-.03.16-.06.24-.08.22-.08.45-.15.66-.24.08-.03.16-.07.24-.11.21-.09.42-.19.63-.3.08-.04.15-.09.22-.13.2-.12.4-.23.6-.36.07-.04.13-.09.2-.14.2-.14.39-.28.57-.43.06-.05.11-.1.17-.14.11-.09.22-.18.32-.27 0-.01 0-.01-.01-.02 1.99-1.83 3.24-4.44 3.24-7.34zm-5.06 4.97c-2.71-1.82-7.15-1.82-9.88 0-.44.29-.8.63-1.1 1-1.52-1.54-2.46-3.65-2.46-5.97 0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5c0 2.32-.94 4.43-2.46 5.97-.29-.37-.66-.71-1.1-1z" />
                <path d="m12 6.92969c-2.07 0-3.75 1.68-3.75 3.75001 0 2.03 1.59 3.68 3.7 3.74h.09.07.02c2.02-.07 3.61-1.71 3.62-3.74 0-2.07001-1.68-3.75001-3.75-3.75001z" />
              </g>
            </svg>
            <div className="w-20 text-center py-2 flex flex-col gap-1 shadow-xl rounded-lg bg-white top-10 absolute  text-black">
              { !user ? (
                <>
                  <Link to={"/login"}>login</Link>
                  <hr />
                  <Link to={"/register"}>register</Link>
                </>
              ) : (
                <p onClick={handleLogout}>Logout</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
