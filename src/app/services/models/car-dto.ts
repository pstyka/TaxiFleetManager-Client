/* tslint:disable */
/* eslint-disable */
export interface CarDto {
  id?: string;
  brand: string;
  color: string;
  imageUrl: string;
  mileage: number;
  model: string;
  productionYear: string;
  registrationNumber: string;
  wheelState: 'GOOD' | 'MEDIUM' | 'BAD';
}
