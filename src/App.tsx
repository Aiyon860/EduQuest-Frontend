import './App.css'
import CoreAppLayout from '@/layouts/CoreApp'
import LandingPageLayout from '@/layouts/LandingPage'
import { Routes, Route } from 'react-router'

import Footer from '@/pages/LandingPage/components/Footer';
import Features from '@/pages/LandingPage/Features/Features';
import FAQ from '@/pages/LandingPage/FAQ/FAQ';
import Mapel from '@/pages/MataPelajaran/Mapel';
import Semester from '@/pages/Semester/Semester';
import ListMateri from '@/pages/Materi/ListMateri';
import DetailMateri from '@/pages/MateriSpesifik/MateriSpesifik';
import SoalPilgan from '@/pages/SoalPilgan/SoalPilgan';
import SoalIsian from '@/pages/SoalIsian/SoalIsian';
import ReviewSoal from '@/pages/ReviewSoal/ReviewSoal';
import ListSoal from '@/pages/HistoryPengerjaan/ListSoal';
import SignUp from '@/pages/SignUp/SignUp';
import Login from '@/pages/Login/Login';

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