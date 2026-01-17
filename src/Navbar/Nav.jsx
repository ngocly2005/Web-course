import { Outlet, useLocation, useNavigate } from "react-router";
import "./style.css";
import NavLogin from "./Nav-Login";
const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navBarRouter = ["/Dang-nhap", "/Dang-ky"];
  const hiddenNavbarPage = navBarRouter.includes(location.pathname);
  return (
    <>
      {!hiddenNavbarPage && <NavLogin />}
      <Outlet />
    </>
  );
};
export default Nav;
