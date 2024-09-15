import { useMutation } from '@tanstack/react-query';
import { LoginRequest, LoginResponse } from '../../../types/authenticate';
import { login } from '../../requests/authenticate';

export const useLogin = () =>
  useMutation({
    mutationFn: async (model: LoginRequest) => {
      const {
        token,
        record: { id, username, email },
      } = await login(model);

      const response: LoginResponse = {
        token,
        user: {
          id,
          username,
          email,
        },
      };

      return response;
    },
  });
