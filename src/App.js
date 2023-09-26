
import './stylesheets/App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/HomeMain';

function App() {


  return (
    <div className="App-container">

      <Routes>
        <Route path='/' element={<Navigate to={"/login"} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>


    </div>

  );
}

export default App;
