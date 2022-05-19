import UserItem from "./components/UserItem";

function AdminPanel() {
  const users = [
    {
      username: "John",
      email: "john@gmail.com",
      role: "USER",
    },
    {
      username: "Smith",
      email: "smith@gmail.com",
      role: "BLOGGER",
    },
  ];
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
          <UserItem user={users[0]} />
          <UserItem user={users[1]} />
        </tbody>
      </table>
    </div>
  );
}
export default AdminPanel;
