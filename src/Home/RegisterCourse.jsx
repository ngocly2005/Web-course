import { useEffect, useState } from "react";
import "./style-registerCourse.css";
import { useNavigate, useParams } from "react-router";
import Star from "../start/start";
import Register from "../Register/Register";
const RegisterCourse = () => {
  const [course, setCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const selected = JSON.parse(localStorage.getItem("selectedCourse"));
    setCourse(selected);
  }, [id]);

  //Hàm xử lý khi người dùng đăng ký
  const handleRegister = () => {
    // Lấy danh sách đã đăng ký trước đó
    const registeredCourses =
      JSON.parse(localStorage.getItem("registerCourses")) || [];

    // Kiểm tra xem đã đăng ký khóa học này chưa
    const alreadyRegistered = registeredCourses.some((c) => c.id === course.id);
    //some:là hàm kiểm tra điều kiện
    if (!alreadyRegistered) {
      registeredCourses.unshift(course);
      localStorage.setItem(
        "registerCourses",
        JSON.stringify(registeredCourses)
      );
    }
    setShowModal(true);
    setTimeout(() => {
      navigate("/Khoa-hoc-cua-toi");
    }, 1000);
  };
  const closeModal = () => {
    setShowModal(false);
    navigate("/trang-chu");
  };

  // Kiểm tra nếu chưa có dữ liệu
  if (!course) {
    return <div>Đang tải khoá học...</div>;
  }
  return (
    <div className="page-regis">
      <h1>ĐĂNG KÍ KHÓA HỌC</h1>
      <div className="register-course-container">
        <div className="left-section">
          <img
            src={course.image || "https://via.placeholder.com/300"}
            alt="Ảnh đại diện"
          />
          <div>
            <div>
              <h2 title={course.title}>{course.title}</h2>
              <p className="author">{course.author}</p>
              <div className="description-scroll">
                <p className="description-regis">{course.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <Register onClick={handleRegister} />
          <Star rating={course.rating} />
          <p>⏱️ Thời lượng: 70 phút</p>
          <p>💰 Học phí: {course.price || "Miễn phí"}</p>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>✅ Bạn đã đăng ký khoá học này!</h3>
              <button className="btn-close" onClick={closeModal}>
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default RegisterCourse;
