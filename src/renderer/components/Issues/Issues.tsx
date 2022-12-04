import { Link } from 'react-router-dom';

const IssuesList = Array.from(Array(100).keys());

const Issues = () => {
  return (
    <div>
      Issues Form{' '}
      <ul className="overflow-auto">
        {IssuesList.map((el, key) => (
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

export default Issues;
