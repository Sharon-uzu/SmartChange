import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './Screens/Signin';
import Dashboard from './Screens/Dashboard';
import OverviewUser from './Screens/OverviewUser';
import OverviewM from './Screens/OverviewM';
import Transaction from './Screens/Transaction';
import Super from './Screens/Super';
import Activity from './Screens/Activity';

function App() {
  return (
    <div>
      <Routes>
            
            <Route path='/' element={<Signin/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/useroverview' element={<OverviewUser/>} />
            <Route path='/merchantoverview' element={<OverviewM/>} />
            <Route path='/transaction' element={<Transaction/>} />
            <Route path='/superadmin' element={<Super/>} />
            <Route path='/activity' element={<Activity/>} />
            
          </Routes>
    </div>
  );
}

export default App;
