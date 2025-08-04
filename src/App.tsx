import './App.css'
import CoreAppLayout from '@/layouts/CoreApp'
import LandingPageLayout from '@/layouts/LandingPage'
import { Routes, Route } from 'react-router'

// import Footer from './pages/LandingPage/components/Footer';
// import Features from './pages/LandingPage/Features/Features';
// import FAQ from './pages/LandingPage/FAQ/FAQ';
// import Mapel from './pages/LandingPage/components/Mapel';
// import Semester from './pages/LandingPage/components/Semester';
// import ListMateri from './pages/LandingPage/components/ListMateri';
// import DetailMateri from './pages/LandingPage/components/MateriSpesifik';
// import SoalPilgan from './pages/LandingPage/components/SoalPilgan';
// import SoalIsian from './pages/LandingPage/components/SoalIsian';
// import ReviewSoal from './pages/LandingPage/components/ReviewSoal';
// import ListSoal from './pages/LandingPage/components/ListSoal';
// import SignUp from './pages/LandingPage/components/SignUp';
// import Login from './pages/LandingPage/components/Login';

function App() {
  return (
    // <>
    //   <SignUp />
    //   <Login />
    //   <Semester />
    //   <Mapel />
    //   <ListMateri />
    //   <DetailMateri />
    //   <SoalPilgan />
    //   <SoalIsian />
    //   <ReviewSoal />
    //   <ListSoal />
    //   <Features />
    //   <FAQ />
    //   <Footer />
    // </>
    <Routes>
      <Route path="/" element={<LandingPageLayout />} />
      <Route path="/*" element={<CoreAppLayout />} />
    </Routes>
  )
}

export default App