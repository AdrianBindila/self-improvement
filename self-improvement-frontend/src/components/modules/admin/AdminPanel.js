import { useEffect, useState } from "react";
import { deleteUser, getUsers, setRole } from "../../../api/admin";

function AdminPanel() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("userList")) || []
  );
  useEffect(() => {
    getUsers();
    setUsers(JSON.parse(localStorage.getItem("userList")) || []);
  }, []);
  function deleteItem(id, listid) {
    setUsers((prev) => {
      return prev.filter((current, index) => {
        return index !== listid;
      });
    });
    deleteUser(id);
  }
  function changeRole(id,role){
    setUsers((prev) => {
      return prev.map((current, index) => {
        if (current.id === id) {
          current.role = role;
          setRole(id,role);
        }
        return current;
      });
    });
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
              <tr key={index}>
                <th>{user.username}</th>
                <th>{user.email}</th>
                <th>{user.role}</th>
                {user.role !== "ADMIN" && (
                  <>
                    <th>
                      <button
                        className="btn btn-primary mx-2"
                        disabled={user.role === "BLOGGER"}
                        onClick={() => changeRole(user.id, "BLOGGER")}
                      >
                        Promote
                      </button>
                    </th>
                    <th>
                      <button
                        className="btn btn-warning mx-2"
                        disabled={user.role === "USER"}
                        onClick={() => changeRole(user.id, "USER")}
                      >
                        Demote
                      </button>
                    </th>
                    <th>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => {
                          deleteItem(user.id, index);
                        }}
                      >
                        Delete
                      </button>
                    </th>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default AdminPanel;
