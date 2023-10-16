import { createContext, useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const profile = createContext()

function App() {

  const [state, setstate] = useState(undefined)
  return (
    <>
      <profile.Provider value={[state, setstate]}>
        <ToastContainer position={'top-center'} autoClose={2000} />
        <Dashboard />
      </profile.Provider>
    </>
  );
}

export default App;
