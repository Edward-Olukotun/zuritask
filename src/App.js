import './App.css';
import Onboard from './components/Onboard'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom';
import Signin from './components/StandardForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App md:hidden">
      <Routes>
        <Route path='/' element={<Onboard />}></Route>
        <Route path='signup' element={<Signin />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='dashboard' element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
