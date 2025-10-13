export default function TernaryOperator() {
  const loggedIn = true; // ✅ changed let → const

  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      <hr />
    </div>
  );
}
