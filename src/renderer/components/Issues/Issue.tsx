import { useParams } from 'react-router-dom';

const Issue = () => {
  const path = useParams();

  return <div>Issue -&gt; {path.id}</div>;
};

export default Issue;
