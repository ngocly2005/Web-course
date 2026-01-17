import { useNavigate } from "react-router";
import "./style-dropdown.css";

const DropDown = ({ outLogin, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="dropdown-container">
      <div className="dropDown">
        <a onClick={() => navigate("/Thong-tin-ca-nhan")}>Thông tin cá nhân</a>{" "}
        <br />
        <a onClick={() => navigate("/Admin-dashboard")}>Admin dashboard</a>
        <br />{" "}
        <a onClick={() => navigate("/Khoa-hoc-cua-toi")}>Khóa học của tôi</a>
        <br />
        <a
          onClick={() => {
            handleLogout();
            outLogin();
          }}
        >
          Đăng xuất
        </a>{" "}
        <br />
      </div>
    </div>
  );
};
export default DropDown;
