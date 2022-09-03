import './assets/styles/App.css';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      {/* <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/card-details' element={<CardDetail />}/> */}
      {/* <Route path='/register' element={<Register />}/> */}
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
  );
}

export default App;
