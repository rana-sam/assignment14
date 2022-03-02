import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AboutUS from './aboutUs/AboutUS';
import './App.css';
import Services from './services/Services';
import Navbar from './navbar/Navbar';
import Reasons from './reasons/Reasons';

function App() {
  return (
    <div >
      <Services/>
      <AboutUS/>
      <Reasons/>
      <Navbar/>
    </div>
  );
}

export default App;
