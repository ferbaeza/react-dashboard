import './login.scss';

function Login() {

  const fecha = new Date();
  const toString = fecha.toUTCString();

  return (
    <div className="login">
      <div className="login-text">
        <span className="login-text">Dashboard Login</span>
        <br />
        <div className="form">
          <form action="login">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
      <div className="login-footer">
        <span className="footer-text">{toString}</span>
      </div>
    </div>
  );
}

export default Login;
