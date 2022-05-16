import { useParams } from 'react-router-dom';

const Book = () => {
  const path = useParams();
  window.electron.log.debug({ path });
  return <div>Book /book/:id -&gt; {path.id}</div>;
};

export default Book;
