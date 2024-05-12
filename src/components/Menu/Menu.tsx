import './menu.scss'
import { menu } from './menu.data';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div key={item.id} className="menuItem">
          <span className="item-name">{item.name}</span>
          {item.hijos?.map((hijo) => (
            <Link key={hijo.id} to={hijo.url} className="link">
              <div key={hijo.id} className="item">
                <span className="name">{hijo.name}</span>
                <img src={hijo.icon} alt="" className='icon'/>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
