import "./App.css";
import { Routes, Route } from "react-router";
import CoreAppLayout from "@/layouts/CoreApp";
import LandingPageLayout from "@/layouts/LandingPage";

import Dashboard from "@/pages/Dashboard/Dashboard";
import SignUp from "@/pages/SignUp/SignUp";
import Login from "@/pages/Login/Login";
import Mapel from "@/pages/MataPelajaran/Mapel";
import Semester from "@/pages/Semester/Semester";
import ListMateri from "@/pages/Materi/ListMateri";
import DetailMateri from "@/pages/MateriSpesifik/MateriSpesifik";
import SoalPilgan from "@/pages/SoalPilgan/SoalPilgan";
import SoalIsian from "@/pages/SoalIsian/SoalIsian";
import ReviewSoal from "@/pages/ReviewSoal/ReviewSoal";
import ListSoal from "@/pages/HistoryPengerjaan/ListSoal";
import MisiHarian from "@/pages/MisiHarian/MisiHarian";
import PeringkatGlobal from "@/pages/PapanPeringkat/PeringkatGlobal";
import Kelas from "@/pages/Kelas/Kelas";
import ProtectedRoute from "@/components/ProtectedRoute";
import PublicRoute from "@/components/PublicRoute";

function App() {
  return (
    <Routes>
      {/* Landing page (still accessible to all) */}
      <Route path="/" element={<LandingPageLayout />} />

      {/* Public routes - only accessible if not logged in */}
      <Route element={<PublicRoute />}>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/*" element={<CoreAppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="mapel" element={<Mapel />} />
          <Route path="semester" element={<Semester />} />
          <Route path="materials/:level" element={<ListMateri />} />
          <Route path="materials/:level/:grade" element={<ListMateri />} />
          <Route
            path="materials/:level/:grade/:semester"
            element={<ListMateri />}
          />
          <Route path="materials/detail/:id" element={<DetailMateri />} />
          <Route path="soal/pilgan" element={<SoalPilgan />} />
          <Route path="soal/isian" element={<SoalIsian />} />
          <Route path="soal/review" element={<ReviewSoal />} />
          <Route path="histories" element={<ListSoal />} />
          <Route path="quests" element={<MisiHarian />} />
          <Route path="leaderboard/global" element={<PeringkatGlobal />} />
          <Route path="kelas" element={<Kelas />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
