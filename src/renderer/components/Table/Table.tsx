import DataGrid from 'react-data-grid';
import './Table.css';

const numbers = Array.from(Array(100).keys());

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
];

const rows = numbers.map((id) => ({ id, title: `ID ${id}` }));
const Table = () => {
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      style={{ height: 'calc(100vh - 88px)', width: '100vw' }}
      className="rdg-light"
    />
  );
};

export default Table;
