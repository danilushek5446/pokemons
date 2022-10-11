import type { FC } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledAppContainer } from './App.styles';
import Footer from './components/footer/Footer';

import Header from './components/header/Header';
import MainPage from './components/mainPage/MainPage';

const App: FC = () => {
  return (
    <StyledAppContainer>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </StyledAppContainer>
  );
};

export default App;
