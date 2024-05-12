import './navbar.scss'

function Navbar() {

  const userName = 'john doe';
  const notifications = 3;

  return (
    <div className="navbar">
      <div className="logo">
        <img src="icons/logo.svg" alt="logo" />
        <span className="username">{userName}</span>
      </div>
      <div className="icons">
        <img src="icons/search.svg" alt="search" className="icon" />

        <div className="notifications">
          <img src="icons/notifications.svg" alt="search" className="icon" />
          <span className="span-notification">{notifications}</span>
        </div>

        <div className="user">
          <img src="icons/myuser.svg" alt="search" className="icon" />
          <span>{userName}</span>
        </div>
        <img src="icons/music.svg" alt="search" className="icon" />
        <img src="icons/logout-g.svg" alt="logout" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
