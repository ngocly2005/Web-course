import { useEffect, useState } from "react";
import "./style-search.css";
const Search = ({ keyword, setKeyword }) => {
  // const [keyword, setKeyword] = useState("");
  // useEffect(() => {
  //   if (keyword.length >= 3) {
  //     const filter = course.filter((course) =>
  //       course.title.toLowerCase().includes(keyword.toLowerCase())
  //     );
  //     searchResult(filter);
  //   } else {
  //     searchResult(course);
  //   }
  // }, [keyword, course, searchResult]);

  return (
    <div className="title-search">
      <div>
        <input
          id="tieu-de"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Nhập từ khóa tìm kiếm... cần tìm"
        ></input>
        <button className="btn-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};
export default Search;
