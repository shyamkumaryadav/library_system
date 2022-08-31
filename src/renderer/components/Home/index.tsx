import { useEffect } from 'react';
import type { SetErrors } from '../../App/App.d';

type Props = {
  setErrors: SetErrors;
};
const Index = ({ setErrors }: Props) => {
  useEffect(() => {
    setErrors({ type: 'success', message: 'Welcome To Library' });
  }, [setErrors]);

  return <div>index</div>;
};

export default Index;
