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
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    />
  );
}
