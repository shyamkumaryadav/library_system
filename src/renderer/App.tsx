import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      <h1>Library Management System</h1>
      <div id="col">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => alert('Not Working')}
        >
          click me
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
