import { Outlet } from 'react-router-dom';

import Header from 'blocks/Header';
import Footer from 'blocks/footer/Footer';

const GlobalRoute = () => {
  return (
    <div className='content-main'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default GlobalRoute
