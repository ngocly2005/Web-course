const Star = ({ rating }) => {
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
  const soSaoDay = Math.floor(safeRating);
  const soSaoNua = safeRating - soSaoDay >= 0.5;
  const soSaoTrong = 5 - soSaoDay - (soSaoNua ? 1 : 0);
  // soSaoDay: Số sao đầy
  // soSaoNua: số sao nữa
  // soSaoTrong: số sao trống, không coa sao
  // Math.floor():là hàm làm tròn xuống, lấy phần nguyên của một số.
  return (
    <div>
      <div className="arrange-star">
        <div className="stars">
          {/* Sao đầy */}
          {Array.from({ length: soSaoDay }, (_, i) => (
            <i key={`startFull-${i}`} className="fa-solid fa-star"></i>
          ))}
          {/* full để bạn nhận biết đây là sao đầy, còn i là thứ tự ngôi sao */}
          {/* Sao nửa */}
          {soSaoNua && <i className="fa-solid fa-star-half-stroke"></i>}
          {/* Sao trống */}
          {Array.from({ length: soSaoTrong }, (_, i) => (
            <i key={`startEmpty-${i}`} className="fa-regular fa-star"></i>
          ))}
        </div>
        <p className="rating">{safeRating.toFixed(1)}</p>
      </div>
    </div>
  );
};
export default Star;
