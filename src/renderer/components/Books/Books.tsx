import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DataGrid, { Column, TextEditor } from 'react-data-grid';
import type { SetErrors } from 'renderer/App/App.d';
import { BOOK } from 'main/models';
import Book from './Book';
import Delete from './Delete';

const columns: readonly Column<BOOK>[] = [
  {
    key: 'uid',
    name: 'ID',
  },
  {
    key: 'name',
    name: 'Name',
    editor: TextEditor,
  },
  {
    key: 'author',
    editor: TextEditor,
    name: 'Author',
  },
  {
    key: 'publisher',
    editor: TextEditor,
    name: 'Publisher',
  },
  {
    key: 'genre',
    editor: TextEditor,
    name: 'Genre',
  },
  {
    key: 'price',
    name: 'Price',
    editor: TextEditor,
  },
  {
    key: 'delete',
    name: 'Delete',
    cellClass: () => 'text-center',
    formatter: Delete,
  },
];

type Props = {
  setErrors: SetErrors;
};

const rowKeyGetter = ({ uid }: BOOK) => uid;

const Books = ({ setErrors }: Props) => {
  const [rows, setRows] = useState([] as BOOK[]);

  const location = useLocation();

  useEffect(() => {
    window.electron
      .invoke('db:getBooks')
      .then((res) => {
        setRows(res);
        return res;
      })
      .catch(window.electron.logger.error);
  }, [location]);

  return (
    <div className="row">
      <div className="col-12 text-center fs-3 fw-bold">Books</div>
      <DataGrid
        columns={columns}
        rows={rows}
        style={{ height: 'calc(100vh - 140px)' }}
        className="col-12 rdg-light"
        rowKeyGetter={rowKeyGetter}
        onRowsChange={(allRows, { indexes, column }) => {
          const row = allRows.filter((_, i) => indexes[0] === i)[0];
          const field = column.key as keyof BOOK;
          window.electron
            .invoke('db:updateBook', row.id, row)
            .then((res) => {
              setRows((val) =>
                val.map((i) => {
                  if (i.id === row.id) {
                    return { ...i, [field]: row[field] };
                  }
                  return i;
                })
              );
              setErrors({
                type: 'info',
                message: `Book ${row.uid} Updated ${field}`,
              });
              return res;
            })
            .catch(window.electron.logger.error);
        }}
      />
      <Book
        onSubmit={(values, helper) => {
          return window.electron
            .invoke('db:addBook', values)
            .then((res) => {
              window.electron.logger.log(res);
              helper.resetForm();
              setRows((row) => [...row, { ...res.dataValues }]);
              return res;
            })
            .catch((error) => {
              window.electron.logger.log({ error });
              helper.setFieldError('uid', 'Book id not unique');
              return error;
            });
        }}
      />
    </div>
  );
};

export default Books;
