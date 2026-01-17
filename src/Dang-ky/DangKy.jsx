import { useLocation, useNavigate } from "react-router";
import "./styleDangKy.css";
import { useState } from "react";
const DangKy = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [error, setError] = useState({});
  const location = useLocation();
  const validate = () => {
    const newErr = {};
    if (!name) {
      newErr.name = "Yêu cầu nhập field này";
    } else if (
      name.length > 50 ||
      name.length < 8 ||
      /[^a-zA-Z0-9 ]/.test(name)
    ) {
      newErr.name =
        "Tên không được có kí tự đặc biệt và phải dài từ 8 – 50 kí tự";
    }
    //Email
    if (!email) {
      newErr.email = "Yêu cầu nhập field này";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErr.email = "Vui lòng nhập đúng định dạng email";
    }

    //password
    if (!password) {
      newErr.password = "Yêu cầu nhập field này";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/.test(password) ||
      password.length < 8
    ) {
      newErr.password =
        "Password cần có 1 chữ hoa, 1 chữ thường, 1 kí tự đặc biệt, 1 số và ít nhất 8 kí tự";
    }

    //passwordAgain
    if (!passwordAgain) {
      newErr.passwordAgain = "Yêu cầu nhập field này";
    } else if (password !== passwordAgain) {
      newErr.passwordAgain = "Password không trùng khớp";
    }
    setError(newErr);
    return Object.keys(newErr).length === 0;
  };
  const handaleRegister = () => {
    if (!validate()) return;
    const userData = { name, email, ngaySinh, diaChi, password };
    localStorage.setItem("user", JSON.stringify(userData));
    // Lấy danh sách users đã lưu
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra xem email đã tồn tại chưa
    const checkUser = users.find((user) => user.email === email);
    if (checkUser) {
      setError({ email: "Email này đã tồn tại" });
      return;
    }

    // Thêm user mới vào danh sách
    users.push({ name, email, ngaySinh, diaChi, password });
    localStorage.setItem("users", JSON.stringify(users));

    console.log("Đăng ký thành công! Vui lòng đăng nhập.");
    navigate("/Dang-nhap");
  };

  return (
    <div className="background-dang-ky">
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
            <label htmlFor="inputName">Name</label>
            <input
              id="inputName"
              type="text"
              placeholder="Nhập tên "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error.name && <p className="error">{error.name}</p>}
          </div>

          <div>
            <label htmlFor="inputEmail">Email</label>
            <input
              id="inputEmail"
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <p className="error">{error.email}</p>}
          </div>

          <div>
            <label htmlFor="inputNgaySinh">Ngay sinh</label>
            <input
              id="inputNgaySinh"
              type="date"
              placeholder="Nhập ngày sinh"
              value={ngaySinh}
              onChange={(e) => setNgaySinh(e.target.value)}
            />
            {error.ngaySinh && <p className="error">{error.ngaySinh}</p>}
          </div>

          <div>
            <label htmlFor="inputDiaChi">Địa chỉ</label>
            <input
              id="inputDiaChi"
              type="text"
              placeholder="Nhập địa chỉ"
              value={diaChi}
              onChange={(e) => setDiaChi(e.target.value)}
            />
            {error.diaChi && <p className="error">{error.DiaChi}</p>}
          </div>

          <div>
            <label htmlFor="inputWord">Password</label>
            <input
              id="inputWord"
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <p className="error">{error.password}</p>}
          </div>

          <div>
            <label htmlFor="inputWordAgain">Nhập lại Password</label>
            <input
              id="inputWordAgain"
              type="password"
              placeholder="Nhập lại Password"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
            {error.passwordAgain && (
              <p className="error">{error.passwordAgain}</p>
            )}
          </div>
        </div>

        <div className="button-submit">
          <button onClick={handaleRegister}>Đăng ký</button>
        </div>
      </div>
    </div>
  );
};
export default DangKy;
