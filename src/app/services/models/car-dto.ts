/* tslint:disable */
/* eslint-disable */
export interface CarDto {
  brand: string;
  color: string;
  id?: string;
  imageUrl: string;
  mileage: number;
  model: string;
  productionYear: string;
  registrationNumber: string;
  wheelState: 'GOOD' | 'MEDIUM' | 'BAD';
}
