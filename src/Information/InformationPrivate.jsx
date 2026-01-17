import { useEffect, useState } from "react";
import "./style-infomation-private.css";
import BtnEdit from "../Button/btnEdit";
import BtnSave from "../Button/btnSave";
import BtnQuayLai from "../Button/btnQuayLai";
import { useNavigate } from "react-router";

const InformationPrivate = () => {
  const [userInfo, setUserInFo] = useState(null);
  const [edit, setEdit] = useState({
    name: false,
    ngaySinh: false,
  });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    ngaySinh: "",
    avatar: "",
  });

  useEffect(() => {
    const userStore = localStorage.getItem("user");
    if (userStore) {
      const parse = JSON.parse(userStore);
      setUserInFo(parse);
      setFormData({
        name: parse.name || "",
        ngaySinh: parse.ngaySinh || "",
        avatar: parse.avatar || "",
      });
    }
  }, []);

  const handleSaveName = () => {
    const updateUser = {
      ...userInfo,
      name: formData.name,
    };

    // Cập nhật user hiện tại
    setUserInFo(updateUser);
    localStorage.setItem("user", JSON.stringify(updateUser));

    // Cập nhật lại danh sách users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === userInfo.email ? updateUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setEdit({ ...edit, name: false });
  };

  const handleSaveNgaySinh = () => {
    const updateUser = {
      ...userInfo,

      ngaySinh: formData.ngaySinh,
    };

    // Cập nhật user hiện tại
    setUserInFo(updateUser);
    localStorage.setItem("user", JSON.stringify(updateUser));

    // Cập nhật lại danh sách users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === userInfo.email ? updateUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setEdit({ ...edit, ngaySinh: false });
  };
  if (!userInfo) {
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Vui lòng đăng nhập để xem thông tin cá nhân.
      </p>
    );
  }
  return (
    <div className="frame-info">
      <div className="first-info">
        <div className="avatar">
          <div>
            <h1>Thông tin cá nhân</h1>
          </div>
          <div className="frame-img">
            <img src={userInfo.avatar} />
          </div>

          <div className="input-info">
            {edit.name ? (
              <input
                type="text"
                value={formData.name}
                className="input-edit"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            ) : (
              <h2>{userInfo.name}</h2>
            )}
            <div className="btn-chinhSua-Luu">
              {edit.name ? (
                <div className="btn-Save-QuayLai">
                  <BtnSave onClick={handleSaveName} />
                  <BtnQuayLai onClick={() => setEdit(false)} />
                </div>
              ) : (
                <BtnEdit
                  onClick={() =>
                    setEdit({ ...edit, name: true, ngaySinh: false })
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="style-but-chinh-sua">
          {edit.ngaySinh ? (
            <div className="btn-Save-QuayLai">
              <BtnSave onClick={handleSaveNgaySinh} />
              <BtnQuayLai onClick={() => setEdit(false)} />
            </div>
          ) : (
            <BtnEdit
              onClick={() => setEdit({ ...edit, ngaySinh: true, name: false })}
            />
          )}
        </div>
        <div className="main-info">
          <div className={`input-info ${edit.ngaySinh ? "blur" : ""}`}>
            <h5>Email:</h5>
            <p>{userInfo.email}</p>
          </div>

          <div className="input-info input-info-flex">
            <div className="title-ngaysinh">
              <h5>Ngày sinh:</h5>
              {edit.ngaySinh ? (
                <input
                  type="date"
                  value={formData.ngaySinh}
                  className="input-edit"
                  onChange={(e) =>
                    setFormData({ ...formData, ngaySinh: e.target.value })
                  }
                />
              ) : (
                <p>{userInfo.ngaySinh}</p>
              )}
            </div>
            <div className="btn-chinhSua-Luu"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPrivate;
