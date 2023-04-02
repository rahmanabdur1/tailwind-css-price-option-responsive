
import './App.css';

import Navbar from './Components/Navbar';
import PhoneBar from './Components/PhoneBar/PhoneBar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h2 className='text-3xl mt-4'> This is  Header Components</h2>
     <Pricing></Pricing>
      <PhoneBar></PhoneBar>

    </div>
  );
}

export default App;
