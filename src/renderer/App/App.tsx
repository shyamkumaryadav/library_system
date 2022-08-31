import { useEffect, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Books, Home, Issues, Nav, Users } from '../components';
import type ErrorType from './App.d';

export default function App() {
  const [errors, setErrors] = useState<ErrorType>();

  useEffect(() => {
    const abc = errors ? setTimeout(() => setErrors(undefined), 2500) : null;

    return () => {
      if (abc) clearTimeout(abc);
    };
  }, [errors]);

  return (
    <Router>
      <Nav />
      <main className="container-fluid mt-5">
        {/* success danger warning */}
        {errors && (
          <div
            className={`alert alert-${errors.type} alert-dismissible fade show m-2`}
            role="alert"
          >
            {errors.message}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setErrors(undefined)}
            />
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home setErrors={setErrors} />} />
          <Route path="/books" element={<Books setErrors={setErrors} />} />
          <Route path="/users" element={<Users setErrors={setErrors} />} />
          <Route path="/issues" element={<Issues setErrors={setErrors} />} />
        </Routes>
      </main>
    </Router>
  );
}
