// import logo from './logo.svg';
import './App.css';
import { Route, Routes, Router} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
import Signin from './pages/Signin'; 
// import Account from './pages/Account';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (

    <div>
      <AuthContextProvider>
      {/* <Navbar /> */}
      <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/account" element={<Account />} /> */}
      </Routes>
      </Router>
      </AuthContextProvider>
    </div>
    
  );
}

export default App;
