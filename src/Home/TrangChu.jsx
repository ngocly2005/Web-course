import { useEffect, useState } from "react";
import Final from "../footer/final";
import Register from "../Register/Register";

import "./styleHome.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router";
import Loading from "../PopUp-Loading/Loading";
import BtnXemThem from "../button-xem-them/btn-xem-them";
import Star from "../start/start";

const TrangChu = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/listToDo`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      });
  }, []);

  const itemSaleToday = course.filter((item) => item.isSaleToday);
  const muchToLearnInAWeek = course.filter((item) => item.muchToLearnInAWeek);

  const newCourse = [...course].sort((a, b) => b.id - a.id).slice(0, 10);
  // Hàm sort() sắp xếp các phần tử
  // slide(start, end)
  const [numberOfDisplay, setnumberOfDisplay] = useState(4);
  const bestseller = course.filter((item) => item.isBestSeller);

  const handleSeeMore = () => {
    navigate("/Khoa-hoc");
  };
  const handleRegisterClick = (selectedCourse) => {
    localStorage.setItem("selectedCourse", JSON.stringify(selectedCourse));
    navigate(`/Dang-ki-khoa-hoc/${selectedCourse.id}`);
  };

  return (
    <div className="container-all">
      <div className="container">
        {loading && <Loading />}
        <div className="section-container">
          <div className="home-container">
            <div className="home-left">
              <h2>Website học online tốt nhất</h2>
              <p>
                Đây là nền tảng học tập trực tuyến chất lượng, mang đến cho bạn
                trải nghiệm học tập thú vị và hiệu quả với các khoá học cập nhật
                liên tục.
              </p>
              <button
                className="register-btn"
                onClick={() => navigate("/Khoa-hoc")}
              >
                Đăng ký ngay <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="home-right">
              <img
                src="https://edubit.vn/data/blog/photo_lop-hoc-ao.jpg_1592375989.jpg?v=1592375989"
                alt="Lớp học ảo"
              />
            </div>
          </div>
          <div className="main-content">
            <div>
              <h3>Tại sao bạn nên chọn chúng tôi?</h3>
            </div>
            <div className="detail-content">
              <div className="content">
                <div className="content-title_sticker-small">
                  <i class="fa-brands fa-docker"></i>
                  <h5>Đào Tạo Chuyên Nghiệp</h5>
                </div>
                <p>
                  Các khóa học được thiết kế bài bản bởi giảng viên giàu kinh
                  nghiệm, đảm bảo kiến thức chuyên sâu và thực tiễn.
                </p>
              </div>
              <div className="content">
                <div className="content-title_sticker-small">
                  <i class="fa-brands fa-linux"></i>
                  <h5>Chứng Nhận Hoàn Thành</h5>
                </div>
                <p>
                  Sau mỗi khóa học, học viên sẽ nhận chứng nhận uy tín, giúp
                  nâng cao giá trị hồ sơ cá nhân và nghề nghiệp.
                </p>
              </div>
              <div className="content">
                <div className="content-title_sticker-small">
                  <i class="fa-brands fa-waze"></i>
                  <h5>Học Trực Tuyến Linh Hoạt</h5>
                </div>
                <p>
                  Truy cập bài học mọi lúc mọi nơi trên mọi thiết bị, phù hợp
                  với người bận rộn cần tối ưu thời gian học tập.
                </p>
              </div>
              <div className="content">
                <div className="content-title_sticker-small">
                  <i class="fa-brands fa-wpbeginner"></i>
                  <h5>Hơn 100 Khóa Học Đa Dạng</h5>
                </div>
                <p>
                  Thư viện khóa học phong phú thuộc nhiều lĩnh vực: CNTT, kinh
                  doanh, ngoại ngữ, kỹ năng mềm,...
                </p>
              </div>
              <div className="content">
                <div className="content-title_sticker-small">
                  <i class="fa-brands fa-untappd"></i>
                  <h5>Tài Liệu Miễn Phí</h5>
                </div>
                <p>
                  Cung cấp tài liệu hỗ trợ học tập chất lượng cao, hoàn toàn
                  miễn phí cho học viên đăng ký khóa học.
                </p>
              </div>
              <div className="content">
                <div className="content-title_sticker-small">
                  <i class="fa-brands fa-square-web-awesome-stroke"></i>
                  <h5>Phủ Sóng Toàn Cầu</h5>
                </div>
                <p>
                  Hàng ngàn học viên từ nhiều quốc gia đang học tập cùng chúng
                  tôi, tạo nên cộng đồng học tập quốc tế.
                </p>
              </div>
            </div>
          </div>
          <div className="view-course-all">
            <h2>Xem Qua Các Khóa Học Của Chúng Tôi</h2>

            <div className="course-all">
              <div className="Da-dang-khoa-hoc">
                <div className="title-btn-xem-them">
                  <h2>ĐA DẠNG KHÓA HỌC</h2>{" "}
                  <BtnXemThem onClick={handleSeeMore} />
                </div>
                <div className="item">
                  {[...course]
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, numberOfDisplay)
                    .map((course) => (
                      <div className="item-course" key={course.id}>
                        <div className="img-item">
                          <img src={course.image} alt={course.title} />
                        </div>
                        <div className="content-item">
                          <div>
                            <h4 title={course.title} onClick={handleSeeMore}>
                              {course.title}
                            </h4>
                            <p className="author">{course.author}</p>
                            <p
                              className="description"
                              title={course.description}
                            >
                              {course.description}
                            </p>
                          </div>

                          <div className="bottom-course">
                            <div>
                              <Star rating={course.rating} />
                            </div>

                            <div>
                              <Register
                                course={course}
                                onClick={() => handleRegisterClick(course)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {/* TOP BÁN CHẠY */}
          <div className="item-bestseller">
            <div className="title-top-ban-chay">
              <h2>TOP BÁN CHẠY</h2> <BtnXemThem onClick={handleSeeMore} />
            </div>
            <div className="ban-chay-nhat">
              {[...bestseller]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, numberOfDisplay)
                .map((course) => (
                  <div className="item-course" key={course.id}>
                    <div className="img-item">
                      <img src={course.image} alt={course.title} />
                    </div>
                    <div className="content-item-ban-chay">
                      <h4
                        className="ellipsis-1-line-home"
                        title={course.title}
                        onClick={handleSeeMore}
                      >
                        {course.title}
                      </h4>
                      <p className="author">{course.author}</p>
                      <p className="description" title={course.description}>
                        {course.description}
                      </p>
                      <Star rating={course.rating} />
                      <Register
                        course={course}
                        onClick={() => handleRegisterClick(course)}
                      />
                    </div>
                  </div>
                ))}{" "}
            </div>
          </div>
          {/* SIÊU ƯU ĐÃI HÔM NAY */}
          <div>
            <div className="title-sieu-uu-dai">
              <h2>SIÊU ƯU ĐÃI HÔM NAY</h2>{" "}
              {numberOfDisplay < course.length && (
                <BtnXemThem onClick={handleSeeMore} />
              )}
            </div>
            <div className="course-all">
              {[...itemSaleToday]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 4)
                .map((course) => (
                  <div className="item-course" key={course.id}>
                    <div className="img-item">
                      <img src={course.image} alt={course.title} />
                    </div>
                    <div className="content-item-sieu-uu-dai">
                      <h4
                        className="title ellipsis-1-line-home"
                        title={course.title}
                        onClick={handleSeeMore}
                      >
                        {course.title}
                      </h4>
                      <p className="author">{course.author}</p>
                      <p className="description" title={course.description}>
                        {course.description}
                      </p>
                      <Star rating={course.rating} />
                      <Register
                        course={course}
                        onClick={() => handleRegisterClick(course)}
                      />
                    </div>
                  </div>
                ))}{" "}
            </div>
          </div>

          {/* HỌC NHIỀU TRONG TUẦN */}
          <div>
            <div
              className="title-hoc-nhieu-trong-tuan
"
            >
              <h2>HỌC NHIỀU TRONG TUẦN</h2>{" "}
              {numberOfDisplay < course.length && (
                <BtnXemThem onClick={handleSeeMore} />
              )}
            </div>
            <div className="course-all">
              {[...muchToLearnInAWeek]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 4)
                .map((course) => (
                  <div className="item-course" key={course.id}>
                    <div className="img-item">
                      <img src={course.image} alt={course.title} />
                    </div>
                    <div className="content-item-hoc-nhieu-trong-tuan">
                      <h4
                        className="title ellipsis-1-line-home"
                        title={course.title}
                        onClick={handleSeeMore}
                      >
                        {course.title}
                      </h4>
                      <p className="author">{course.author}</p>
                      <p className="description" title={course.description}>
                        {course.description}
                      </p>
                      <Star rating={course.rating} />
                      <Register
                        course={course}
                        onClick={() => handleRegisterClick(course)}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* KHÓA HỌC MỚI RA MẮT */}
          <div>
            <div className="title-khoa-hoc-moi-ra-mat">
              <h2>KHÓA HỌC MỚI RA MẮT</h2>{" "}
              {numberOfDisplay < course.length && (
                <BtnXemThem onClick={handleSeeMore} />
              )}
            </div>
            <div className="course-all">
              {[...newCourse]
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 4)
                .map((course) => (
                  <div className="item-course" key={course.id}>
                    <div className="img-item">
                      <img src={course.image} alt={course.title} />
                    </div>
                    <div className="content-item-khoa-hoc-moi-ra-mat">
                      <h4
                        className="title ellipsis-1-line-home"
                        title={course.title}
                        onClick={handleSeeMore}
                      >
                        {course.title}
                      </h4>
                      <p className="author">{course.author}</p>
                      <p className="description" title={course.description}>
                        {course.description}
                      </p>
                      <Star rating={course.rating} />
                      <Register
                        course={course}
                        onClick={() => handleRegisterClick(course)}
                      />
                    </div>
                  </div>
                ))}{" "}
            </div>
          </div>
        </div>
        <Final />
      </div>
    </div>
  );
};

export default TrangChu;
