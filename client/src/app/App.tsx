import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/style.scss';
import UnAuthContent from '../routes/unauth-routes';
import AuthContext from '../context/AuthContext';
import useAuth from '../tools/hooks/useAuth';
import UserAuthContent from '../routes/user-auth-routes';
import { Provider } from 'react-redux';
import { store } from '../store';

const App: FC = () => {
  const { login, logout, jwtToken, userName } = useAuth();
  const isAuth = !!jwtToken;

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ jwtToken, userName, login, logout, isAuth }}>
        <BrowserRouter>
          {/* <UnAuthContent /> */}
          <UserAuthContent />
        </BrowserRouter>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
