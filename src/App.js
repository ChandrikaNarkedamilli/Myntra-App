import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Women from "./components/Women";
import Men from "./components/Men";
import LoginPage from "./components/LoginPage";
import Kids from "./components/Kids";
import HomeLiving from "./components/HomeLiving";
import Wishlist from "./components/Wishlist";
import Bag from "./components/Bag";
import Beauty from "./components/Beauty";

function App() {
  return (
    <>
    
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='women' element={<Women />} />
      <Route path='men' element={<Men/>} />
      <Route path='login' element={<LoginPage/>} />
      <Route path='kids' element={<Kids />} />
      <Route path='wishlist' element={<Wishlist />} />
      <Route path='bag' element={<Bag />} />
      <Route path='home&living' element={<HomeLiving />} />
      <Route path='beauty' element={<Beauty />} />
    </Routes>
    </>
  );
}

export default App;
