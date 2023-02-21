
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import AddEditUser from './Pages/AddEditUser';
import UserInfo from './Pages/UserInfo';
import Header from './components/Header';
import './App.scss';
import Login from './Pages/Login';
import ProtectedRoute from './Pages/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      
      {/* <Route path="/home" element={<ProtectedRoute />}> */}
      <Route path='/' element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>,
      <Route path='/addUser' element={<AddEditUser/>}/>,
      <Route path='/editUser/:id' element={<AddEditUser/>}/>,
      <Route path='/userInfo/:id' element={<UserInfo/>}/>
      {/* </Route> */}
     
     </Routes>
    </div>
  );
}

export default App;
