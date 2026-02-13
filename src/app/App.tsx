

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "../components/Navbar";

import { AppProvider } from '../context/AppContext';
import { lazy, Suspense } from 'react';
import LoginModal from '../components/loginModal.tsx';
import Footer from '../components/Foter.tsx';

const Home = lazy(() => import("../pages/home/Home.tsx"));
const ProductDetail = lazy(() => import("../pages/praduct-detail/PraductDetail.tsx"));
const Sevimli = lazy(() => import("../pages/sevimli/Sevimli.tsx"));
const Savatcha = lazy(() => import("../pages/savatcha/savatcha.tsx"));

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-uzum-secondary dark:bg-slate-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/savatcha" element={<Savatcha />} />
                <Route path="/sevimli" element={<Sevimli />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />

          <LoginModal />
          <ToastContainer 
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
