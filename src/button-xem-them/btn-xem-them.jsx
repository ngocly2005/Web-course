import "./style-xem-them.css";
const BtnXemThem = ({ onClick }) => {
  return (
    <div>
      <div className="see-more-wrapper">
        <a
          className="top-ban-chay__xem-them__btn"
          onClick={onClick}
          href="/Khoa-hoc"
        >
          Xem thêm
        </a>{" "}
        {/* <FaAngleRight className="see-more-icon" /> */}
      </div>
    </div>
  );
};
export default BtnXemThem;
