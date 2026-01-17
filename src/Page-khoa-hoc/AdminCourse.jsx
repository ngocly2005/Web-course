import "./style-course-admin.css";
const AdminCourse = () => {
  return (
    <div>
      <div className="container-table">
        <div className="table-left">
          <h5>Admin Dashboard</h5>
          <h5>Khoá học</h5>
          <h5>Người dùng</h5>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5>Tiêu đề</h5>
            <input type="text" placeholder="SEARCH" />
          </div>

          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Tên</th>
                <th>Đánh giá sao</th>
                <th>Số người tham gia</th>
                <th>Ngày khởi tạo</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Nguyễn Văn A</td>
                <td>⭐⭐⭐⭐</td>
                <td>120</td>
                <td>01/01/2024</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Trần Thị B</td>
                <td>⭐⭐⭐</td>
                <td>85</td>
                <td>05/02/2024</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AdminCourse;
