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

export const token = "3f30438c7b3212b121ae63e52bae216ca2bc11b700c8aa29cb0891d61cc96fca"

export enum chooseModalType {
  view,
  edit,
  delete
}

