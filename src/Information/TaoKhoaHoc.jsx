import { useNavigate } from "react-router";
import "./style-CourseList.css";
import { useEffect, useState } from "react";
const TaoKhoaHoc = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const oldCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const newCourse = {
      id: Date.now(),
      ...form,
    };
    localStorage.setItem("courses", JSON.stringify([...oldCourses, newCourse]));

    // ✅ Chuyển sang AdminDashboard và truyền trạng thái tạo thành công
    navigate("/Admin-dashboard-khoa-hoc", {
      state: { created: true },
    });
  };

  return (
    <div style={{ padding: "20px" }} className="form-tao-khoa-hoc">
      <button
        className="again-course"
        onClick={() => navigate("/Admin-dashboard-khoa-hoc")}
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h2>Tạo khóa học mới</h2>
      <input
        name="title"
        placeholder="Tên khóa học"
        value={form.title}
        onChange={handleChange}
      />
      <br />
      <textarea
        name="description"
        placeholder="Chi tiết khóa học"
        value={form.description}
        onChange={handleChange}
      />
      <br />
      <input
        name="price"
        type="number"
        placeholder="Học phí"
        value={form.price}
        onChange={handleChange}
      />
      <br />
      <button className="button-save" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};
export default TaoKhoaHoc;
