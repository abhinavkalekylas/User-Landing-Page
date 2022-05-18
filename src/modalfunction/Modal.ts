export interface User {
  id: number;
  name: string;
  email: string;
  gender: GenderType;
  status: StatusType;
}

export enum GenderType {
  MALE = "male",
  FEMALE = "female",
}

export enum StatusType {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)) {
    return true;
  }
  return false;
};
