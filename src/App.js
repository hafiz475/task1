import './App.css';
import DashBoard from './Pages/DashBoard/HomePage';
import LoginForm from './Pages/FormValidation/HomePage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className = "task1" >
    
      <Routes>

        <Route path = "/" element = {<LoginForm />} />
        <Route path = "/Dashboard" element = {<DashBoard />} />

      </Routes>

    </div>
)
  ;
}

export default App;
