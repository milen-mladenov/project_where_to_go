import './App.css';
import { Route, Routes } from 'react-router';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { LandingPage } from './components/landingPage/LandingPage';
import { BrowsingPage } from './components/browsingPage/BrowsingPage';
import { UserProfilePage } from './components/userProfilePage/UserProfilePage';
import { BusinessPage } from './components/businessPage/BusinessPage';
import { ReservationsPage } from './components/reservationsPage/ReservationsPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/browse' element={<BrowsingPage />} />
        <Route path='/profile' element={<UserProfilePage />} />
        <Route path='/business' element={<BusinessPage />} />
        <Route path='/reservations' element={<ReservationsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
