function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState("");
  const [bgColor, setBgColor] = React.useState("primary");
  const [withdraw, setWithdraw] = React.useState("");
  const [balance, setBalance] = React.useState(ctx.currentUser.balance);

  function handleDeposit() {
    if (isNaN(withdraw)) {
      setStatus("Error: Withdrawal value must be a number");
      setBgColor("danger");
      setTimeout(() => setStatus(""), 3000);
      setTimeout(() => setBgColor("primary"), 3000);
      return;
    }

    if (withdraw <= 0) {
      setStatus("Error: Withdrawal value must be greater than 0");
      setBgColor("danger");
      setTimeout(() => setStatus(""), 3000);
      setTimeout(() => setBgColor("primary"), 3000);
      return;
    }

    if (withdraw > balance) {
      setStatus("Error: Withdrawal value can't be greater than balance");
      setBgColor("danger");
      setTimeout(() => setStatus(""), 3000);
      setTimeout(() => setBgColor("primary"), 3000);
    }

    setBalance(Number(balance) - Number(withdraw));
    ctx.currentUser.balance = balance;
    console.log(ctx.currentUser);
  }

  return (
    <Card
      bgcolor={bgColor}
      txtcolor="white"
      header="WITHDRAW"
      status={status}
      body={
        <div>
          <div className="d-flex">
            <div>Balance</div>
            <div className="ml-auto">{balance}</div>
          </div>
          <br />
          Deposit Amount
          <br />
          <input
            type="input"
            className="form-control"
            id="withdraw"
            placeholder="Enter withdrawal amount"
            value={withdraw}
            onChange={(e) => setWithdraw(e.currentTarget.value)}
          />
          <br />
          <button
            id="subtractWithdrawal"
            type="subtractWithdrawal"
            disabled={!withdraw}
            defaultValue=""
            className="btn btn-light"
            onClick={handleDeposit}
          >
            Withdraw
          </button>
        </div>
      }
    />
  );
}
