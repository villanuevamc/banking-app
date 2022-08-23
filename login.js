const useHistory = ReactRouterDOM.useHistory;

function Login() {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const ctx = React.useContext(UserContext);
  const history = useHistory();

  function login() {
    const user = ctx.users.find((user) => {
      if (user.email === userEmail && user.password === userPassword)
        return user;
    });

    if (!user) {
      alert("That user does not exist");
      setUserEmail("");
      setUserPassword("");
      return;
    }

    ctx.currentUser = user;
    ctx.loggedIn = true;
    alert("Successfully logged in");
    history.push("/#");
    s;
  }

  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      body={
        <>
          <br />
          Email address
          <br />
          <input
            type="input"
            className="form-control"
            id="userEmail"
            placeholder="Enter email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.currentTarget.value)}
          />
          <br />
          Password
          <br />
          <input
            type="password"
            className="form-control"
            id="userPassword"
            placeholder="Enter password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.currentTarget.value)}
          />
          <br />
          <button
            id="submit"
            type="submit"
            disabled={!userEmail || !userPassword}
            className="btn btn-light"
            onClick={login}
          >
            Login
          </button>
        </>
      }
    />
  );
}
