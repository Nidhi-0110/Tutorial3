import { useState } from "react";

function Contact() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setData((preval) => [...preval, { username, email, password, MobileNo, Address }]);
    setEmail("");
    setUsername("");
    setPassword("");
    setAddress("");
    setMobileNo("");
  }

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleMobileNo(e) {
    setMobileNo(e.target.value);
  }

  function handleAddress(e) {
    setAddress(e.target.value);
  }

  return (
    <div>
      <div className="container mt-5">
        <h1>Information</h1>
        <div className="row">
          <div className="col-5 m-auto">
            <form action="" onSubmit={handleSubmit}>
              <label for="username" class="form-label">
                Username
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={username}
                  onChange={handleUsername}
                />
              </div>
              <label for="email" class="form-label">
                Email
              </label>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <label for="inputPassword5" class="form-label">
                Password
              </label>
              <input
                type="password"
                id="inputPassword5"
                class="form-control mb-3"
                placeholder="Enter your Password"
                aria-describedby="passwordHelpBlock"
                value={password}
                onChange={handlePassword}
              />
              <label for="Phone No." class="form-label">
                Phone No.
              </label>
              <div className="input-group mb-3">
                <input
                  type="Phone No"
                  className="form-control"
                  placeholder="Enter your Phone No."
                  aria-label="Phone No."
                  aria-describedby="basic-addon1"
                  value={MobileNo}
                  onChange={handleMobileNo}
                />
              </div>
              <label for="inputAddress2" class="form-label">
                Address
              </label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                  value={Address}
                  onChange={handleAddress}
                />
              </div>
              <button type="submit" className="btn btn-success mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-6 m-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>MobileNo.</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((ele, index) => (
                    <tr key={index}>
                      <td>{ele.username}</td>
                      <td>{ele.email}</td>
                      <td>{ele.password}</td>
                      <td>{ele.MobileNo}</td>
                      <td>{ele.Address}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
