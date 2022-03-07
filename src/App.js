import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AboutUS from './aboutUs/AboutUS';
import './App.css';
import Services from './services/Services';
import Navbar from './navbar/Navbar';
import Reasons from './reasons/Reasons';
import States from './states/States';
import Ads from './ads/Ads';
import Cta from './cta/Cta';
import Bottom from './bottom/Bottom';
import Footer from './footer/Footer';

function App() {
  return (
    <div >
      
      <Navbar/>
      <Reasons/>
      <AboutUS/>
      <Services/>
      <States/>
      <Ads/>
      <Cta/>
      <Bottom/>
      <Footer/>
    </div>
  );
}

export default App;
