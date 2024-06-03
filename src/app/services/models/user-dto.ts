/* tslint:disable */
/* eslint-disable */
export interface UserDto {
  id?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: 'DRIVER' | 'ADMIN';
  imgUrl?: string;
}
