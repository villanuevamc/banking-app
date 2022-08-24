function AllData() {
  const { users } = React.useContext(UserContext);
  return (
    <Card
      bgcolor="dark"
      txtcolor="white"
      header="ALL DATA"
      body={
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    />
  );
}
