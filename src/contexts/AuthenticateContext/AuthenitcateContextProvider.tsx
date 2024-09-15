import { useEffect, useState } from 'react';
import { AuthenticateData, LoginResponse } from '../../types/authenticate';
import pb from '../../lib/pocketbase';
import { AuthenicateContext } from './AuthenicateContext';

type AuthenicateContextProviderProps = {
  children: React.ReactNode;
};

export const AuthenicateContextProvider = ({ children }: AuthenicateContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<AuthenticateData | undefined>(undefined);

  useEffect(() => {
    if (!pb.authStore.isValid) {
      return;
    }

    const model = pb.authStore.model;

    if (!model) {
      setData(undefined);
      pb.authStore.clear();
      return;
    }

    setIsAuthenticated(true);
    setData({
      token: pb.authStore.token,
      user: {
        email: model['email'],
        id: model['id'],
        username: model['username'],
      },
    });
  }, []);

  const clear = () => {
    pb.authStore.clear();
    setIsAuthenticated(false);
    setData(undefined);
  };

  const login = (model: LoginResponse) => {
    setIsAuthenticated(true);
    setData({
      token: model.token,
      user: {
        email: model.user.email,
        id: model.user.id,
        username: model.user.username,
      },
    });
  };

  return (
    <AuthenicateContext.Provider
      value={{
        clear,
        login,
        isAuthenticated,
        data,
      }}
    >
      {children}
    </AuthenicateContext.Provider>
  );
};

export default AuthenicateContextProvider;
