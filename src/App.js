import './App.css';
import AvailableTimes from './Components/AvailableTimes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <AvailableTimes></AvailableTimes>
      <ToastContainer />
    </div>
  );
}

export default App;
