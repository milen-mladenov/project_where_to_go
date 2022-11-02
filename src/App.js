import './App.css';
import { Route, Routes } from 'react-router';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { LandingPage } from './components/landingPage/LandingPage';
import { BrowsingPage } from './components/browsingPage/BrowsingPage';
import { UserProfilePage } from './components/userProfilePage/UserProfilePage';
import { BusinessPage } from './components/businessPage/BusinessPage';
import { ReservationsPage } from './components/reservationsPage/ReservationsPage';
import { Login } from './components/userController/Login'
import { Register } from './components/userController/Register'
import { CompanyRegister } from './components/userController/CompanyRegister'
import { VisitedPage } from './components/navLayouts/VisitedPage'
import { CommentsPage } from './components/navLayouts/CommentsPage'
import { PhotosPage } from './components/navLayouts/PhotosPage'
import { ReviewsPage } from './components/navLayouts/ReviewsPage'
import { SettingsPage } from './components/navLayouts/SettingsPage'
import { useState } from 'react';
import { UserReservations } from './components/navLayouts/UserReservations';


function App() {

  const [currEst, setCurrEst] = useState({})


  function estHandler(data) {
    setCurrEst(data)
  }
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/company-register' element={<CompanyRegister />} />
          <Route path='/browse' element={<BrowsingPage handler={estHandler} />} />
          <Route path='/profile' element={<UserProfilePage />}>
            <Route path='settings' element={<SettingsPage />} />
            <Route path='visited' element={<VisitedPage />} />
            <Route path='comments' element={<CommentsPage />} />
            <Route path='photos' element={<PhotosPage />} />
            <Route path='reviews' element={<ReviewsPage />} />
            <Route path='reservations' element={<UserReservations />} />
          </Route>
          <Route path='/business' element={<BusinessPage />} />
          <Route path='/reservations/:id' element={<ReservationsPage location={currEst} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
