import { useNavigate, useParams } from "react-router";
import "./style-EditCourse.css";
import { useEffect, useState } from "react";
const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });
  useEffect(() => {
    fetch(`http://localhost:3000/listToDo/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm(data); // Giả sử setForm là state lưu thông tin khoá học
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/listToDo/${id}`, {
      method: "PUT",
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        alert("✅ Cập nhật khoá học thành công");
        navigate("/Admin-dashboard-khoa-hoc");
      });
  };
  return (
    <div className="edit-course">
      <button
        className="again-course"
        onClick={() => navigate("/Admin-dashboard-khoa-hoc")}
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h2>Chỉnh sửa khoá học</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Tên khoá học"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Mô tả"
        />
        <input
          type="text"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Giá"
        />
        <button className="button-luu-thay-doi" type="submit">
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
};
export default EditCourse;
