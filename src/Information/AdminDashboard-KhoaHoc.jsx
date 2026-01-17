import { useEffect, useState } from "react";
import "./style-adminDashboard.css";
import Search from "../Button/search";
import { useNavigate } from "react-router";
import TableLeft from "../tableLeft/TableLeft";
import { useLocation } from "react-router";
import BtnFilter from "../Button/btnFilter";
const AdminDashboardKhoaHoc = () => {
  const [courses, setCourses] = useState([]);
  const [filterCourse, setFilterCourse] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [selectCategory, setSelecCategory] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [minStudents, setMinStudents] = useState(0);
  const [ratingRanges, setRatingRanges] = useState([]);
  const location = useLocation();
  //dùng useLocation lấy thông tin URL hiện tại, kiểm tra có thông báo create hay.
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/listToDo`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setFilterCourse(data);
      });
  }, []);

  useEffect(() => {
    const filter = courses.filter((course) => {
      const searchKeyWord = course.title
        .toLowerCase() //chuyển sang chữ thường để so sánh không phân biệt hoa thường.
        .includes(keyword.toLowerCase()); // kiểm tra chứa từ khóa tìm kiếm.
      const filterCatergory =
        selectCategory === "all" ||
        String(course.category) === String(selectCategory);
      const filterStudents = course.numberOfStudents >= minStudents;
      // kiểm tra rating nằm trong các khoảng đã chọn
      const filterRating =
        ratingRanges.length === 0 ||
        ratingRanges.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return course.rating >= min && course.rating <= max;
        });
      return searchKeyWord && filterCatergory && filterRating && filterStudents;
    });
    setFilterCourse(filter);
  }, [keyword, selectCategory, courses, ratingRanges, minStudents]);

  useEffect(() => {
    if (location.state?.created) {
      alert("✅ Đã tạo khoá học thành công");
    }
  }, [location.state]);
  //Dùng ?. để tránh lỗi nếu state chưa tồn tại.
  return (
    <div className="table-dashboard">
      <TableLeft />
      <div className="table-right">
        <div className="tieu-de_loc-theo-danh-sach">
          <div className="row-filter">
            <BtnFilter
              setSelecCategory={setSelecCategory}
              setRatingRanges={setRatingRanges}
              setMinStudents={setMinStudents}
            />
            <div className="title-search">
              <Search
                course={courses}
                searchResult={setFilterCourse}
                setKeyword={setKeyword}
                keyword={keyword}
              />
            </div>
          </div>
        </div>
        <div className="btn-create-edit">
          <button onClick={() => navigate("/Tao-khoa-hoc")}>Create</button>
          <button
            onClick={() => navigate(`/Edit-course/${selectedId}`)}
            disabled={!selectedId}
          >
            Edit
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Tên</th>
              <th>Rate</th>
              <th>Số người tham gia</th>
              <th>Ngày khởi tạo</th>
            </tr>
          </thead>
          <tbody>
            {filterCourse.map((course) => (
              <tr key={course.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedId === course.id}
                    onChange={() =>
                      setSelectedId(selectedId === course.id ? null : course.id)
                    }
                  />
                </td>
                <td>{course.title}</td>
                <td>{course.rating}⭐</td>
                <td>{course.numberOfStudents}👤</td>
                <td>{new Date().toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AdminDashboardKhoaHoc;
