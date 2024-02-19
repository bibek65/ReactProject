import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Create from './Components/Create';
import ListInterns from './Components/ListInterns';
import InternEdit from './Components/UpdateInternDetail';
import { useState } from 'react';

const App = () => {
  const [showAddIntern, setShowAddIntern] = useState(true);

  const toggleButtons = () => {
    setShowAddIntern(!showAddIntern);
  };

  return (
    <Router>
      <div className='mt-2 mx-3'>
        {showAddIntern && (
          <button className='btn btn-primary'>
            <Link to="/create" className='text-white' onClick={toggleButtons}>Add Intern</Link>
          </button>
        )}

        {!showAddIntern && (
          <button className='btn btn-primary'>
            <Link to="/" className='text-white' onClick={toggleButtons}>List Interns</Link>
          </button>
        )}
        <hr />

        <Routes>
          <Route path="/" element={<DefaultView />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<InternEdit />} />
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
