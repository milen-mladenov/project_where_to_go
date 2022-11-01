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
import { VisitedPage } from './components/userProfilePage/navLayouts/VisitedPage'
import { CommentsPage } from './components/userProfilePage/navLayouts/CommentsPage'
import { PhotosPage } from './components/userProfilePage/navLayouts/PhotosPage'
import { ReviewsPage } from './components/userProfilePage/navLayouts/ReviewsPage'
import { SettingsPage } from './components/userProfilePage/navLayouts/SettingsPage'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/company-register' element={<CompanyRegister />} />
          <Route path='/browse' element={<BrowsingPage />} />
          <Route path='/profile' element={<UserProfilePage />}>
            <Route path='settings' element={<SettingsPage />} />
            <Route path='visited' element={<VisitedPage />} />
            <Route path='comments' element={<CommentsPage />} />
            <Route path='photos' element={<PhotosPage />} />
            <Route path='reviews' element={<ReviewsPage />} />
          </Route>
          <Route path='/business' element={<BusinessPage />} />
          <Route path='/reservations/:id' element={<ReservationsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
