import pb from '../../lib/pocketbase';
import { CreateSubscriberRequest } from '../../types';

const SUBSCRIBER_COLLECTION_NAME = 'subscriber';

export const createSubscriber = (model: CreateSubscriberRequest) =>
  pb.collection(SUBSCRIBER_COLLECTION_NAME).create({
    fullname: model.fullname,
    email: model.email,
    isRadioTrue: model.isRadioTrue,
  });
