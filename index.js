function Spa() {
  const [users, setUsers] = React.useState([
    {
      name: "test",
      email: "test",
      password: "testtest",
      balance: 100,
    },
  ]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(window.location.hash);

  return (
    <HashRouter>
      <UserContext.Provider
        value={{
          users,
          setUsers,
          currentUser,
          setCurrentUser,
          loggedIn,
          setLoggedIn,
          currentPage,
          setCurrentPage,
        }}
      >
        <NavBar2 />
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
