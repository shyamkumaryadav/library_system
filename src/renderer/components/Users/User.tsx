import { useParams } from 'react-router-dom';

const User = () => {
  const path = useParams();
  window.electron.logger.debug({ path });
  return <div>User /User/:id -&gt; {path.id}</div>;
};

export default User;
