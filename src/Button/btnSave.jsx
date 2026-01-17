import "./style-save.css";
const BtnSave = ({ onClick }) => {
  return (
    <div>
      <button className="btn-luu" onClick={onClick}>
        <i class="fa-solid fa-check"></i>
      </button>
    </div>
  );
};
export default BtnSave;
