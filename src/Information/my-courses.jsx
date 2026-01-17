import { useEffect, useState } from "react";
import "./style-my-courses.css";
import { useNavigate } from "react-router";
import BtnQuayLai from "../Button/btnQuayLai";
const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const register = JSON.parse(localStorage.getItem("registerCourses")) || [];
    //localStorage.getItem("registerCourses"):là cách lấy dữ liệu từ bộ nhớ localStorage .

    setCourses(register);
  }, []);
  return (
    <div>
      <div className="my-courses">
        <div className="title-my-course">
          <button
            className="again-my-course"
            onClick={() => navigate("/trang-chu")}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <h2>Khóa học bạn đã đăng ký</h2>
        </div>
        {courses.length === 0 ? (
          <p>Bạn chưa đăng ký khóa học nào.</p>
        ) : (
          <ul>
            {courses.map((course, index) => (
              <li key={index} className="course-item">
                <strong>{course.title}</strong> <br />
                <p>{course.author}</p> <br />
                <span>{course.description}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default MyCourses;
