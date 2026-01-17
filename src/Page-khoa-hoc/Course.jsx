import { useEffect, useState } from "react";
import { CCategory } from "../common/enum";
import "./style-course.css";
import BtnXemThem from "../button-xem-them/btn-xem-them";
import Star from "../start/start";
import Register from "../Register/Register";
import { useNavigate } from "react-router";
import Final from "../footer/final";
import Search from "../Button/search";
import BtnFilter from "../Button/btnFilter";
import Panal from "./Panal";

const Course = () => {
  const [courses, setCourse] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [selectCategory, setSelecCategory] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [minStudents, setMinStudents] = useState(0);
  const [ratingRanges, setRatingRanges] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3000/listToDo`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setFilteredCourses(data);
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
    setFilteredCourses(filter);
  }, [keyword, selectCategory, courses, ratingRanges, minStudents]);
  const handleOnClick = (course) => {
    localStorage.setItem("selectedCourse", JSON.stringify(course));
    navigate(`/Dang-ki-khoa-hoc/${course.id}`);
  };

  return (
    <div className="background">
      <div className="container">
        <div className="layout-wrapper">
          <div className="left-panel">
            <Panal
              setSelecCategory={setSelecCategory}
              setRatingRanges={setRatingRanges}
              setMinStudents={setMinStudents}
            />
          </div>
          <div className="right-panel">
            <div className="course-section">
              <div className="title-btn">
                <h2 className="section-title">Tất cả khóa học</h2>
              </div>
              <div className="input-timkiem">
                <Search setKeyword={setKeyword} keyword={keyword} />
              </div>
              <div className="course-list">
                {filteredCourses.map((course) => (
                  <div className="course-card" key={course.id}>
                    <div className="course-image">
                      <img src={course.image} alt={course.title} />
                    </div>
                    <div className="info-course">
                      <h4 className="ellipsis-1-line" title={course.title}>
                        {course.title}
                      </h4>
                      <p className="author">{course.author}</p>
                      <p
                        className="description ellipsis-1-line"
                        title={course.description}
                      >
                        {course.description}
                      </p>
                      <Star rating={course.rating} />
                      <Register
                        onClick={() => handleOnClick(course)}
                        course={course}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Final />
    </div>
  );
};
export default Course;
