import { useMutation } from '@tanstack/react-query';
import { SignInRequest } from '../../../types/authenticate';
import { signIn } from '../../requests/authenticate';

export const useSignIn = () =>
  useMutation({
    mutationFn: async (model: SignInRequest) => {
      const { id } = await signIn(model);

      return { id };
    },
  });
