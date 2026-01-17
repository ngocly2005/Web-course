// import { useEffect, useState } from "react";
// import Register from "../Register/Register";
// import Star from "../start/start";
// import "./styleCourseDetail.css";
// import Final from "../footer/final";
// import { CCategory } from "../common/enum";

// const CourseDetail = () => {
//   const [course, setCourse] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:3000/listToDo`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("data", data);
//         setCourse(data);
//       });
//   }, []);

//   // Nhóm khóa học theo category
//   const groupCourse = course.reduce((acc, curr) => {
//     if (!acc[curr.category]) {
//       acc[curr.category] = [];
//     }
//     acc[curr.category].push(curr);
//     return acc;
//   }, {});

//   return (
//     <div className="container">
//       <div className="frame-item">
//         {/* DANH MỤC KHÓA HỌC */}

//         {/* {Object.keys(CCategory.text).map((key) => (
//           <div key={key} className="category-block">
//             <h2>{CCategory.text[key]}</h2>

//             <div className="course-all">
//               {(groupCourse[key] || []).length > 0 ? (
//                 groupCourse[key].map((course) => (
//                   <div className="item-course" key={course.id}>
//                     <div className="img-item">
//                       <img src={course.image} alt={course.title} />
//                     </div>
//                     <div className="content-item">
//                       <h4 className="title" title={course.title}>
//                         {course.title}
//                       </h4>

//                       <p className="author">{course.author}</p>
//                       <p className="description" title={course.description}>
//                         {course.description}
//                       </p>
//                       <Star rating={course.rating} />
//                       <Register />
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p style={{ padding: "10px" }}>Chưa có khóa học nào</p>
//               )}
//             </div>
//           </div>
//         ))}

//         {Object.keys(CCategory.KyNangGiaoTiep).map((key) => (
//           <div key={key} className="category-block">
//             <h2>{CCategory.text[key]}</h2>
//           </div>
//         ))}
//       </div> */}
//       <Final />
//     </div>
//   );
// };

// export default CourseDetail;
