import { useNavigate } from "react-router";
import "./tableLeft.css";
const TableLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="table-left">
        <div className="title-admin-dashboard">
          <p onClick={() => navigate("/Admin-dashboard")}>Admin Dashboard</p>
        </div>
        <div className="description-course-admin">
          <p onClick={() => navigate("/Admin-dashboard-khoa-hoc")}>KHÓA HỌC</p>
          <p onClick={() => navigate("/Customer-Dashboard")}>NGƯỜI DÙNG</p>
        </div>
      </div>
    </div>
  );
};
export default TableLeft;
