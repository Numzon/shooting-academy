import pb from '../../lib/pocketbase';
import { LoginRequest, SignInRequest } from '../../types/authenticate';

const USERS_COLLECTION_NAME = 'users';

export const signIn = (model: SignInRequest) =>
  pb.collection(USERS_COLLECTION_NAME).create({
    username: model.username,
    email: model.email,
    password: model.password,
    passwordConfirm: model.confirmPassword,
  });

export const login = (model: LoginRequest) =>
  pb.collection(USERS_COLLECTION_NAME).authWithPassword(model.email, model.password);
