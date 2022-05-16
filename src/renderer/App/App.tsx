import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Book,
  Books,
  Home,
  Issue,
  Issues,
  Nav,
  User,
  Users,
} from '../components';

export default function App() {
  return (
    <Router>
      <Nav />
      <main className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />}>
            <Route path="add" element={<Book />} />
          </Route>
          <Route path="/users" element={<Users />}>
            <Route path="add" element={<User />} />
          </Route>
          <Route path="/issues" element={<Issues />}>
            <Route path="add" element={<Issue />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}
