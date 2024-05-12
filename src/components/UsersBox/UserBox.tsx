import './userbox.scss';
import {users} from './users.data';

function UserBox() {
  return (
    <div className="userBox">
      <div className="total">
        <span className='total-span'>
          {/* Total users: {users.length} */}
        </span>
      </div>
      <div className="users">
          {users.map((user) => (
            <div key={user.id} className="user-row">
              <div className="avatar">
                <img src={user.avatar} alt="avatar" className="icon" />
              </div>
              <div className="info">
                <span className="user-name">{user.name}</span>
                <span className="user-email">{user.email}</span>
              </div>
            </div>
          ))}
      </div>

    </div>
  );
}

export default UserBox;
