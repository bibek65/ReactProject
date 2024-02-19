import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Create from './Components/Create';
import ListInterns from './Components/ListInterns';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/create">Add Intern</Link></li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<DefaultView />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

function DefaultView() {
  return (
    <>
      <div>
        <ListInterns></ListInterns>
      </div>
    </>
  );
}

export default App;
