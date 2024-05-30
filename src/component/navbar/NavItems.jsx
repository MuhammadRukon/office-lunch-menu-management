import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/Auth";
import { admin } from "../../api";
import toast from "react-hot-toast";
const NavItems = () => {
  const links = [{ title: "Home", path: "/" }];

  const { user, role, setRole } = useContext(AuthContext);
  const handleAdmin = async () => {
    const response = await admin({ email: user });
    if(response.success){
      toast.success("successfully became admin");
      setRole('admin');
    }else{
      if(response.status === 403){
        toast.error(response.message);
      }else{
        toast.error("something went wrong");
      }
    }
  };
  return (
    <ul className="flex gap-8 py-5 text-base font-semibold">
      {links.map((link, idx) => (
        <NavLink to={link.path} key={idx}>
          {link.title}
        </NavLink>
      ))}
      {role === "employee" && (
        <button onClick={handleAdmin} className="capitalize">
          become admin
        </button>
      )}
    </ul>
  );
};

export default NavItems;
