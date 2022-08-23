function Deposit() {
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState("");
  const [bgColor, setBgColor] = React.useState("primary");
  const [deposit, setDeposit] = React.useState("");
  const [balance, setBalance] = React.useState(ctx.currentUser.balance);

  function handleDeposit() {
    if (isNaN(deposit)) {
      setStatus("Error: Deposit value must be a number");
      setBgColor("danger");
      setTimeout(() => setStatus(""), 3000);
      setTimeout(() => setBgColor("primary"), 3000);
      return;
    }

    if (deposit <= 0) {
      setStatus("Error: Deposit value must be greater than 0");
      setBgColor("danger");
      setTimeout(() => setStatus(""), 3000);
      setTimeout(() => setBgColor("primary"), 3000);
      return;
    }

    setBalance(Number(balance) + Number(deposit));
    ctx.currentUser.balance = balance;
  }

  return (
    <Card
      bgcolor={bgColor}
      txtcolor="white"
      header="DEPOSIT"
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
            id="deposit"
            placeholder="Enter deposit amount"
            value={deposit}
            onChange={(e) => setDeposit(e.currentTarget.value)}
          />
          <br />
          <button
            id="addDeposit"
            type="addDeposit"
            disabled={!deposit}
            className="btn btn-light"
            onClick={handleDeposit}
          >
            Deposit
          </button>
        </div>
      }
    />
  );
}
