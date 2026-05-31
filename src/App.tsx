import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import UpdatePrompt from './components/UpdatePrompt'
import Login from './pages/Login'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import WorkoutDetail from './pages/WorkoutDetail'
import Membership from './pages/Membership'
import Profile from './pages/Profile'

export default function App() {
  const location = useLocation()
  const showNav = location.pathname !== '/login'

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:id" element={<WorkoutDetail />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {showNav && <BottomNav />}
      {/* Global PWA update toast — shown on all pages when a new version is ready */}
      <UpdatePrompt />
    </>
  )
}

