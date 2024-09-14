import { useMutation } from '@tanstack/react-query';
import { CreateSubscriberRequest } from '../../../types';
import { createSubscriber } from '../../requests/subscriber';

export const useCreateSubscriber = () =>
  useMutation({
    mutationFn: async (model: CreateSubscriberRequest) => {
      const { id } = await createSubscriber(model);
      return id;
    },
  });
