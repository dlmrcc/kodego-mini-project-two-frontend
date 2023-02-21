import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './home';
import Homepage from './Homepage';
import NotFound from './404';
import Login from './login';
import Signup from './signup';
import UserAccountManagement from './useraccount';
import RecipeComponent from './reciperesult';


function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/reciperesult" element={<RecipeComponent />} />
          <Route path="/useraccount" element={<UserAccountManagement />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />

      </Routes>


    </HashRouter>



  );
}

export default App;
