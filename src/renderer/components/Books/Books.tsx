import { Link, Outlet } from 'react-router-dom';
import { Table } from '../Table';

const Books = () => {
  return (
    <div>
      <Outlet />
      Books /books <Link to="5">id 5</Link>
      <Table />
    </div>
  );
};

export default Books;
