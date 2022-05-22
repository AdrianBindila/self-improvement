import { useState } from "react";
import { deleteUser } from "../../../api/admin";

function AdminPanel() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("userList")) || []
  );
  function deleteItem(id) {
    setUsers((prev) => {
      return prev.filter((current, index) => {
        return index !== id;
      });
    });
    deleteUser(id);
  }
  return (
    <div className="w-50 mx-auto">
      <div className="display-1 text-center">Administrator Panel</div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <th>{user.username}</th>
                <th>{user.email}</th>
                <th>{user.role}</th>
                <th>
                  <button
                    className="btn btn-primary mx-2"
                    disabled={user.role === "BLOGGER"}
                  >
                    Promote
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-warning mx-2"
                    disabled={user.role === "USER"}
                  >
                    Demote
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      deleteItem(index);
                    }}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default AdminPanel;
