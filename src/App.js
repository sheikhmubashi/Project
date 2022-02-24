import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './screens/signup/signUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<SignUp/>} />
      
      </Routes>

    </BrowserRouter>
  );
}

export default App;
