import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AboutUS from './aboutUs/AboutUS';
import './App.css';
import Services from './services/Services';
import Navbar from './navbar/Navbar';
import Reasons from './reasons/Reasons';
import States from './states/States';

function App() {
  return (
    <div >
      <States/>
      <Services/>
      <AboutUS/>
      <Reasons/>
      <Navbar/>
    </div>
  );
}

export default App;
