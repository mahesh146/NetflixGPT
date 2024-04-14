import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import appStore from './utils/store/appStore';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export default App;
