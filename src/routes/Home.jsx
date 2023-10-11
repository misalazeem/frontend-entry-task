import '../App.css';
import MobileHeader from '../components/MobileHeader';
import MainContent from '../components/MainContent';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import DesktopHeader from '../components/DesktopHeader';

const Home = () => (
  <div className="main-container">
    <MobileHeader />
    <SideBar />
    <div className="right-page">
      <NavBar />
      <DesktopHeader />
      <MainContent />
    </div>
  </div>
);

export default Home;
