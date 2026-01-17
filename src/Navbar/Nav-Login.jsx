import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./style.css";
import DropDown from "../DropDown/DropDown";

const NavLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation();
  const updateUserFromLocalStorage = () => {
    try {
      const storedUserData = localStorage.getItem("user");
      if (storedUserData && storedUserData !== "undefined") {
        const userShow = JSON.parse(storedUserData);
        setUser(userShow);
        console.log("USER LOADED:", userShow);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Lỗi khi đọc user từ localStorage:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    // Load user khi component được mount
    updateUserFromLocalStorage();

    // Gắn sự kiện lắng nghe localStorage thay đổi
    window.addEventListener("storage", updateUserFromLocalStorage);

    // Cleanup khi component unmount
    return () => {
      window.removeEventListener("storage", updateUserFromLocalStorage);
    };
  }, []);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropDown(false);
    navigate("/Dang-nhap");
  };
  return (
    <>
      <div>
        <div className="nav">
          <div className="nav-left">
            <button className="logo-btn" onClick={() => navigate("/")}>
              COURSE WEBSITE
            </button>
            <button
              className={location.pathname === "/" ? "link" : ""}
              onClick={() => navigate("/")}
            >
              Trang Chủ
            </button>
            <button
              className={location.pathname === "/Khoa-hoc" ? "link" : ""}
              onClick={() => navigate("/Khoa-hoc")}
            >
              Khóa Học
            </button>
          </div>
          <div className="nav-right">
            {user ? (
              <div className="nav-user-info">
                <button className="titleName" onClick={handleDropDown}>
                  xin chào, {user.name || "Người dùng"}
                </button>
                {dropDown && (
                  <DropDown
                    outLogin={handleDropDown}
                    handleLogout={handleLogout}
                  />
                )}
              </div>
            ) : (
              <div>
                <button
                  className="button-1"
                  onClick={() => navigate("/Dang-nhap")}
                >
                  Đăng nhập
                </button>
                <button
                  className="button-2"
                  onClick={() => navigate("/Dang-ky")}
                >
                  Đăng ký
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default NavLogin;
