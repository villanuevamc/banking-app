function NavBar2() {
  const { loggedIn } = React.useContext(UserContext);
  const { currentPage, setCurrentPage } = React.useContext(UserContext);

  function updateActiveLink() {
    setTimeout(function () {
      const oldCurrent = document.getElementById(currentPage);
      console.log(oldCurrent);
      oldCurrent.classList.remove("bg-dark");
      oldCurrent.classList.remove("text-white");
      setCurrentPage(window.location.hash);
      const newCurrent = document.getElementById(currentPage);
      if (newCurrent) newCurrent.className += " bg-dark text-white";
    }, 1);
  }

  /* React.useEffect(() => {
    updateActiveLink();
  });*/

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a id="/#" className="navbar-brand" href="#" onClick={updateActiveLink}>
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
                id="#/login/"
                className="nav-item nav-link"
                href="#/login/"
                onClick={updateActiveLink}
              >
                Login
              </a>
              <a
                id="#/CreateAccount/"
                className="nav-item nav-link"
                href="#/CreateAccount/"
                onClick={updateActiveLink}
              >
                Create Account
              </a>
              <a
                id="#/allData/"
                className="nav-item nav-link"
                href="#/alldata/"
                onClick={updateActiveLink}
              >
                All Data
              </a>
            </div>
          ) : (
            <div className="navbar-nav">
              <a
                id="#/CreateAccount/"
                className="nav-item nav-link"
                href="#/CreateAccount/"
                onClick={setCurrentPage(window.location.hash)}
              >
                Create Account
              </a>
              <a
                id="#/deposit/"
                className="nav-item nav-link"
                href="#/deposit/"
                onClick={setCurrentPage(window.location.hash)}
              >
                Deposit
              </a>
              <a
                id="#/withdraw/"
                className="nav-item nav-link"
                href="#/withdraw/"
                onClick={setCurrentPage(window.location.hash)}
              >
                Withdraw
              </a>
              <a
                id="#/allData/"
                className="nav-item nav-link"
                href="#/alldata/"
                onClick={setCurrentPage(window.location.hash)}
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
