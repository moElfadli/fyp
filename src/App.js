import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
// import Account from './pages/Account';
// import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <div>
      <AuthContextProvider>
        {/* <Navbar /> */}
        <Router>
          <Routes>
            <Route path='/signin' element={<Signin />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;