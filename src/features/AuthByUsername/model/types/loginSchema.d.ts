export interface LoginSchema {
  username: string;
  password: string;
}

export interface LoginRes {
  id: number;
  username: string;
  password: string;
}

export interface LoginError {
  data: {
    message: string;
  };
}
