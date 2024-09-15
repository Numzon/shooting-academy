export type SignInRequest = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type UserData = {
  id: string;
  username: string;
  email: string;
};

export type LoginResponse = {
  token: string;
  user: UserData;
};
