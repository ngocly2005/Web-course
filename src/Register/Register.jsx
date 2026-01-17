import { Navigate, useNavigate } from "react-router";

const Register = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <div className="right-register-people">
      <div className="btn-register">
        <button onClick={onClick}>Đăng ký ngay</button>
      </div>
      <div className="user-register">
        <i className="fa-regular fa-user"></i>
        <p>100</p>
      </div>
    </div>
  );
};
export default Register;
