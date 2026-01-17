import "./style-Quay-Lai.css";
const BtnQuayLai = ({ onClick }) => {
  return (
    <div className="btn-again">
      <button onClick={onClick}>
        <i class="fa-solid fa-x"></i>
      </button>
    </div>
  );
};
export default BtnQuayLai;
