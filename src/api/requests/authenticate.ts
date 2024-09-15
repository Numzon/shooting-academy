import pb from '../../lib/pocketbase';
import { SignInRequest } from '../../types/authenticate';

const USERS_COLLECTION_NAME = 'users';

export const signIn = (model: SignInRequest) =>
  pb.collection(USERS_COLLECTION_NAME).create({
    username: model.username,
    email: model.email,
    password: model.password,
    passwordConfirm: model.confirmPassword,
  });
