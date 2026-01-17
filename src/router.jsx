import DangKy from "./Dang-ky/DangKy";
import DangNhap from "./Dang-nhap/DangNhap";
import TrangChu from "./Home/TrangChu";
import AdminDashboardKhoaHoc from "./Information/AdminDashboard-KhoaHoc";
import InformationPrivate from "./Information/InformationPrivate";
import Nav from "./Navbar/Nav";
import Course from "./Page-khoa-hoc/Course";
import CourseDetail from "./Home/CourseDetail";
import AdminDashboard from "./Information/dashboard";
import Dashboard from "./Information/dashboard";
import CustomerDashboard from "./Information/customerDashboard";
import CourseList from "./Information/TaoKhoaHoc";
import TaoKhoaHoc from "./Information/TaoKhoaHoc";
import EditCourse from "./Information/EditCourse";
import RegisterCourse from "./Home/RegisterCourse";
import MyCourses from "./Information/my-courses";
const router = () => [
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        index: true, // ✅ Quan trọng: gán TrangChu làm mặc định
        element: <TrangChu />,
      },
      { path: "trang-chu", element: <TrangChu /> },
      { path: "Khoa-hoc", element: <Course /> },
      { path: "Dang-nhap", element: <DangNhap /> },
      { path: "Dang-ky", element: <DangKy /> },
      { path: "Thong-tin-ca-nhan", element: <InformationPrivate /> },
      { path: "Admin-dashboard-khoa-hoc", element: <AdminDashboardKhoaHoc /> },
      { path: "Admin-dashboard", element: <Dashboard /> },
      { path: "Customer-Dashboard", element: <CustomerDashboard /> },
      { path: "Tao-khoa-hoc", element: <TaoKhoaHoc /> },
      { path: "Edit-course/:id", element: <EditCourse /> },
      { path: "Dang-ki-khoa-hoc/:id", element: <RegisterCourse /> },
      { path: "Khoa-hoc-cua-toi", element: <MyCourses /> },
    ],
  },
];
export default router;
