import '../App.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
