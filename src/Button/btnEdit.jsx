import "./style-Edit.css";
const BtnEdit = ({ onClick }) => {
  return (
    <div>
      <button className="btn-chinhSua" onClick={onClick}>
        <i class="fa-solid fa-pen"></i>
      </button>
    </div>
  );
};
export default BtnEdit;
