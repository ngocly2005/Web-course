import { useEffect, useState } from "react";
import TableLeft from "../tableLeft/TableLeft";
import "./style-customer.css";
import Search from "../Button/search";
import BtnFilter from "../Button/btnFilter";
const CustomerDashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
      setFilteredUsers(storedUsers);
    }
  }, []);

  useEffect(() => {
    if (searchKeyword.trim() != "") {
      const filter = users.filter((user) =>
        user.name.toLowerCase().includes(searchKeyword.toLocaleLowerCase())
      );
      setFilteredUsers(filter);
    } else {
      setFilteredUsers(users);
    }
  }, [searchKeyword, users]);

  return (
    <div className="customer-dashboard">
      <div className="table-left-nguoi-dung">
        <TableLeft />
      </div>

      <div className="table-customer-right">
        <div className="btn-search-filter-customer">
          <Search keyword={searchKeyword} setKeyword={setSearchKeyword} />
        </div>
        <table className="table-user">
          <thead>
            <tr>
              <th>Tên người dùng</th>
              <th>Email</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.ngaySinh}</td>
                  <td>{user.diaChi}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Không tìm thấy người dùng phù hợp</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CustomerDashboard;
