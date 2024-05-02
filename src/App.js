import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Header from './components/1_Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './components/0_Home/Home';
import Profile from './components/0_Profile/Profile';
import Browse from './components/0_Browse/Browse';
import Details from './components/0_Details/Details';
import Streams from './components/0_Streams/Streams';

function App() {
  return (
    <div className="App  bg-dark">
      <Header />
      <div className='container text-white p-5 bg-opacity-25 rounded-5 bg-black d-flex flex-column gap-5'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/details' element={<Details />} />
          <Route path='/streams' element={<Streams />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
