function UserItem(props) {
  return (
    <tr>
      <th>{props.user.username}</th>
      <th>{props.user.email}</th>
      <th>{props.user.role}</th>
      <th>
        <button
          className="btn btn-primary mx-2"
          disabled={props.user.role === "BLOGGER"}
        >
          Promote
        </button>
      </th>
      <th>
        <button
          className="btn btn-warning mx-2"
          disabled={props.user.role === "USER"}
        >
          Demote
        </button>
      </th>
      <th>
        <button className="btn btn-danger mx-2">Delete</button>
      </th>
    </tr>
  );
}
export default UserItem;
