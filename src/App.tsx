
import './App.css';
import CategorySection from './CategorySection';
import FooterSection from './FooterSection';
import HeroSection from './HeroSection';
import NavBar from './NavBar';
import PopupModal from './PopupModal';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <NavBar/>
      <HeroSection/>
      <CategorySection/>
      <FooterSection/>
      <PopupModal/>
    </div>
  );
};

export default App;
