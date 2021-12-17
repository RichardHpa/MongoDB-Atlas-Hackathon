export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  acceptTerms?: boolean;
  role: string;
  verificationToken?: string;
  verified?: string;
  resetToken?: {
    token: string;
    expires: string;
  };
  passwordReset?: string;
  created?: string;
  updated?: string;
}
