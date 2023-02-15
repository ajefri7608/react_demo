export type UserState = {
  userName?: string;
  accessToken?: string;
  value: number;
};

export type UserLoginInfo = {
  userName: string;
  password: string;
};

export interface GeneralResponse<T> {
  apiMsg: ApiMsg;
  data: T;
}

export interface ApiMsg {
  rspCode: number;
  rspTitle: string;
  rspMsg: string;
}

export interface LoginResponse {
  id: number;
  userName: string;
  email: string;
  password: any;
  name: string;
  userRole: string;
  userAccessToken: string;
  tokenExpireAt: any;
  image: any;
  provider: string;
}
