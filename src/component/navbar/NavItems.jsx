import { NavLink } from "react-router-dom";
const NavItems = () => {
  const links = [{ title: "Home", path: "/" }];
  return (
    <ul className="flex gap-8 py-5 text-base font-semibold">
      {links.map((link, idx) => (
        <NavLink to={link.path} key={idx}>
          {link.title}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavItems;
