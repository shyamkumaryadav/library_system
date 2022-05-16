import { useParams } from 'react-router-dom';

const User = () => {
  const path = useParams();
  window.electron.log.debug({ path });
  return <div>User /User/:id -&gt; {path.id}</div>;
};

export default User;
