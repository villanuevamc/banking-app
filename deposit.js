function Deposit() {
  const users = React.useContext(UserContext).users;
  const user = users.find(element => {
    element.name
  })
  const [deposit, setDeposit] = React.useState(0);
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      body={
        <div>
          <div className="d-flex">
            <div>Balance</div>
            <div className="ml-auto">{deposit}</div>
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
        </div>
      }
    />
  );
}
