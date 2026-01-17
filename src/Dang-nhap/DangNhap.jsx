import { useLocation, useNavigate } from "react-router";
import "./style-dang-nhap.css";
import { useState } from "react";

const DangNhap = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const location = useLocation();
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogIn = () => {
    const newErr = { email: "", password: "" };

    if (!email) {
      newErr.email = "Yêu cầu nhập field này";
    } else if (!validateEmail(email)) {
      newErr.email = "Vui lòng nhập email đúng định dạng";
    }

    if (!password) {
      newErr.password = "Yêu cầu nhập field này";
    }

    if (newErr.email || newErr.password) {
      setErrors(newErr);
      return;
    }
    // chh
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email);

    if (!user) {
      setErrors({ email: "Tài khoản không tồn tại", password: " " });
      return;
    }
    if (email === user.email && password === user.password) {
      localStorage.setItem("user", JSON.stringify(user)); // để biết ai đang đăng nhập
      window.dispatchEvent(new Event("storageChange"));
      console.log("Đăng nhập thành công!");
      navigate("/");
    }
    if (email !== user.email) {
      setErrors({
        ...newErr,
        email: "Sai email! email phải viết đúng cú pháp @gmail.com",
      });
      return;
    }
    if (password !== user.password) {
      setErrors({ ...newErr, password: "Sai password" });
    }
  };
  return (
    <div className="background-dang-nhap">
      <div className="modal-dang-nhap">
        <div className="button-logIn-register">
          <button
            className={location.pathname === "/Dang-nhap" ? "active" : ""}
            onClick={() => navigate("/Dang-nhap")}
          >
            Đăng nhập
          </button>
          <button
            className={location.pathname === "/Dang-ky" ? "active" : ""}
            onClick={() => navigate("/Dang-ky")}
          >
            Đăng ký
          </button>
        </div>

        <div className="input-email-pass">
          <div>
            <label htmlFor="inputEmail">Email</label>
            <input
              id="inputEmail"
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // Xóa lỗi email khi người dùng sửa
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="inputWord">Password</label>
            <input
              id="inputWord"
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                // Xóa lỗi pass khi người dùng sửa
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>

        <div className="button-submit">
          <button onClick={handleLogIn}>Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};
export default DangNhap;
