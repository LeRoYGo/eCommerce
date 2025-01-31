import { Outlet } from 'react-router';

import '../App.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
