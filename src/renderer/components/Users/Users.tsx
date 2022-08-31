import { Link } from 'react-router-dom';

const UsersList = Array.from(Array(100).keys());

const Users = (props: any) => {
  return (
    <div>
      Users /users{' '}
      <ul className="overflow-auto">
        {UsersList.map((el, key) => (
          <li key={el}>
            <Link to={`${key}`}>
              {el} -- {key}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
