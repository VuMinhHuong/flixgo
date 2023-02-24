import './App.css';
// import { Routes, Route } from "react-router-dom"
import LoginPage from './pages/login/LoginPage.jsx';
import Homepage from "./pages/homepage/Hompage.jsx"
import ResgisterPage from "./pages/register/RegisterPage.jsx"
import ProductPage from "./pages/productpage/ProductPage.jsx"


function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<ResgisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes> */}
      <ProductPage/>
    </div>
  );
}

export default App;
