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
