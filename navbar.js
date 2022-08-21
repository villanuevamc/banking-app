function NavBar() {
  const current = (e) => {
    // Get "old" current link and reset to inactive
    const oldCurrent = document.getElementsByClassName("bg-light text-dark");
    if (oldCurrent.length > 0) {
      if (oldCurrent[0].id === "home") {
        oldCurrent[0].className = "navbar-brand"
      } else {
        oldCurrent[0].className = "nav-item nav-link";
      }
    }
    // Get "new" current link and add 'current' class
    const newCurrent = document.getElementById(e.currentTarget.id);
    newCurrent.className += " bg-light text-dark";
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
          <div className="navbar-nav">
            <a
              id="createAccount"
              className="nav-item nav-link"
              href="#/CreateAccount/"
              onClick={current}
            >
              Create Account
            </a>
            <a
              id="deposit"
              className="nav-item nav-link"
              href="#/deposit/"
              onClick={current}
            >
              Deposit
            </a>
            <a
              id="withdraw"
              className="nav-item nav-link"
              href="#/withdraw/"
              onClick={current}
            >
              Withdraw
            </a>
            <a
              id="allData"
              className="nav-item nav-link"
              href="#/alldata/"
              onClick={current}
            >
              All Data
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
