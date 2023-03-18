import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoute } from './Components/consts'

const { dashboard } = appRoute;

function App() {
  return (
    <div className="App">
     
    
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />}/>
        <Route  exact path={dashboard} element={<Dashboard />} />
       
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;



