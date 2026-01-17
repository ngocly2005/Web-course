import { useEffect, useState } from "react";
import "./style-dashboard.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
import TableLeft from "../tableLeft/TableLeft";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/listToDo")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);

  // Sắp xếp giảm dần và lấy top 5 khóa học có nhiều người học nhất
  const topCourses = [...courses]
    .sort((a, b) => b.numberOfStudents - a.numberOfStudents)
    .slice(0, 10);

  return (
    <div className="frame-dashboard">
      <div className="style-dashboard">
        <TableLeft />
      </div>
      <div className="dashboard-container">
        <h2>📊 Khóa học nhiều người học nhất</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topCourses}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" tick={false} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="numberOfStudents" fill="#0288d1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
