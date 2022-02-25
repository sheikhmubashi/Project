import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './screens/signup/signUp';
import SignIn from './screens/signin/SignIn';
import Roster from './screens/roster/Roster';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<SignIn />} />
        <Route path="/signin" exact={true} element={<SignIn />} />
        <Route path="/signup" exact={true} element={<SignUp />} />
        <Route path="/roster" exact={true} element={<Roster />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
