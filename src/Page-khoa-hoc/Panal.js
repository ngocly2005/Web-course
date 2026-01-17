import { useState } from "react";
import { CCategory } from "../common/enum";

const Panal = ({ setSelecCategory, setRatingRanges, setMinStudents }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [localMinStudents, setLocalMinStudents] = useState(0);
  const handleRatingCheckbox = (range) => {
    setSelectedRatings((pre) =>
      pre.includes(range) ? pre.filter((r) => r != range) : [...pre, range]
    );
  };
  const applyFilters = () => {
    setRatingRanges(selectedRatings);
    setMinStudents(localMinStudents);
    setShowModal(false);
  };
  return (
    <div>
      <h2>Lọc theo danh mục</h2>

      <div>
        <select
          className="input-loc-theo-danh-muc"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "all") {
              setSelecCategory("all");
              setRatingRanges([]); // ✅ reset sao trong parent
              setSelectedRatings([]); // ✅ reset sao trong local state
              setMinStudents(0); // ✅ reset số người trong parent
              setLocalMinStudents(0); // ✅ reset local input nếu có
            } else {
              setSelecCategory(Number(value));
            }
          }}
        >
          <option value="all">Tất cả</option>
          <option value={CCategory.CongNgheLapTrinh}>
            Công nghệ lập trình
          </option>
          <option value={CCategory.KyNangGiaoTiep}>Kỹ năng giao tiếp</option>
          <option value={CCategory.KinhdoanhMarketing}>
            Kinh doanh & Marketing
          </option>
          <option value={CCategory.thietKeSangTao}>Thiết kế sáng tạo</option>
          <option value={CCategory.amNhacNgheThuat}>
            Âm nhạc & Nghệ thuật
          </option>
          <option value={CCategory.sucKhoeDoiSong}>Sức khỏe & Đời sống</option>
          <option value={CCategory.phatTrienCaNhan}>Phát triển cá nhân</option>
        </select>
      </div>

      {/* Lọc theo số sao (checkbox) */}
      <div className="style-title-modal">
        <h3>Lọc theo số sao:</h3>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              onChange={() => handleRatingCheckbox("1-2")}
              checked={selectedRatings.includes("1-2")}
            />
            1–2 sao
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleRatingCheckbox("2-3")}
              checked={selectedRatings.includes("2-3")}
            />
            2–3 sao
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleRatingCheckbox("3-4")}
              checked={selectedRatings.includes("3-4")}
            />
            3–4 sao
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleRatingCheckbox("4-5")}
              checked={selectedRatings.includes("4-5")}
            />
            4–5 sao
          </label>
        </div>
        <button onClick={applyFilters} className="btn-filter-star">
          Lọc
        </button>
      </div>
    </div>
  );
};
export default Panal;
