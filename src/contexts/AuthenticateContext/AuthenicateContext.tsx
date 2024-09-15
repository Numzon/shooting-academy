import { createContext } from 'react';
import { AuthenticateData, LoginResponse } from '../../types/authenticate';

type AuthenicateContextValue = {
  isAuthenticated: boolean;
  data?: AuthenticateData;
  clear: () => void;
  login: (model: LoginResponse) => void;
};

export const AuthenicateContext = createContext<AuthenicateContextValue>(null!);

export default AuthenicateContext;
