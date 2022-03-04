import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AboutUS from './aboutUs/AboutUS';
import './App.css';
import Services from './services/Services';
import Navbar from './navbar/Navbar';
import Reasons from './reasons/Reasons';
import States from './states/States';
import Ads from './ads/Ads';

function App() {
  return (
    <div >
      <Ads/>
      <States/>
      <Services/>
      <AboutUS/>
      <Reasons/>
      <Navbar/>
    </div>
  );
}

export default App;
