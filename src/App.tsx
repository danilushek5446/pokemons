import type { FC } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledAppContainer } from './App.styles';

import Header from './components/header/Header';

const App: FC = () => {
  return (
    <StyledAppContainer>
      <ToastContainer />
      <Header />
      <Routes>
        <Route />
      </Routes>
    </StyledAppContainer>
  );
};

export default App;
