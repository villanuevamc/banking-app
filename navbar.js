const useLocation = ReactRouterDOM.useLocation;

function NavBar() {
  const [currentPage, setCurrentPage] = React.useState(useLocation().pathname);
  const loggedIn = React.useContext(UserContext).loggedIn;

  const current = (e) => {
    const oldCurrent = document.getElementById(currentPage);
    if (oldCurrent) {
      oldCurrent.classList.remove("bg-dark");
      oldCurrent.classList.remove("text-white");
    }

    const newCurrent = document.getElementById(e.currentTarget.id);
    newCurrent.className += " bg-dark text-white";
    setCurrentPage(newCurrent.id);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a id="home" className="navbar-brand" href="#" onClick={current}>
          BadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {!loggedIn ? (
            <div className="navbar-nav">
              <a
                id="/login/"
                className="nav-item nav-link"
                href="#/login/"
                onClick={current}
              >
                Login
              </a>
              <a
                id="/CreateAccount/"
                className="nav-item nav-link"
                href="#/CreateAccount/"
                onClick={current}
              >
                Create Account
              </a>
            </div>
          ) : (
            <div className="navbar-nav">
              <a
                id="/CreateAccount/"
                className="nav-item nav-link"
                href="#/CreateAccount/"
                onClick={current}
              >
                Create Account
              </a>
              <a
                id="/deposit/"
                className="nav-item nav-link"
                href="#/deposit/"
                onClick={current}
              >
                Deposit
              </a>
              <a
                id="/withdraw/"
                className="nav-item nav-link"
                href="#/withdraw/"
                onClick={current}
              >
                Withdraw
              </a>
              <a
                id="/allData/"
                className="nav-item nav-link"
                href="#/alldata/"
                onClick={current}
              >
                All Data
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
