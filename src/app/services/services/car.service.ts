/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addCar } from '../fn/car/add-car';
import { AddCar$Params } from '../fn/car/add-car';
import { CarDto } from '../models/car-dto';
import { deleteCar } from '../fn/car/delete-car';
import { DeleteCar$Params } from '../fn/car/delete-car';
import { getCarById } from '../fn/car/get-car-by-id';
import { GetCarById$Params } from '../fn/car/get-car-by-id';
import { getCars } from '../fn/car/get-cars';
import { GetCars$Params } from '../fn/car/get-cars';
import { updateCarById } from '../fn/car/update-car-by-id';
import { UpdateCarById$Params } from '../fn/car/update-car-by-id';
import { updateCarPatchById } from '../fn/car/update-car-patch-by-id';
import { UpdateCarPatchById$Params } from '../fn/car/update-car-patch-by-id';
import { TokenService } from '../token/token.service';

@Injectable({ providedIn: 'root' })
export class CarService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient, private tokenService: TokenService){
    super(config, http);
  }

  /** Path part for operation `getCarById()` */
  static readonly GetCarByIdPath = '/api/v1/car/{carId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCarById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCarById$Response(params: GetCarById$Params, context?: HttpContext): Observable<StrictHttpResponse<CarDto>> {
    return getCarById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCarById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCarById(params: GetCarById$Params, context?: HttpContext): Observable<CarDto> {
    return this.getCarById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CarDto>): CarDto => r.body)
    );
  }

  /** Path part for operation `updateCarById()` */
  static readonly UpdateCarByIdPath = '/api/v1/car/{carId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCarById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCarById$Response(params: UpdateCarById$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateCarById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCarById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCarById(params: UpdateCarById$Params, context?: HttpContext): Observable<string> {
    return this.updateCarById$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `deleteCar()` */
  static readonly DeleteCarPath = '/api/v1/car/{carId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCar()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCar$Response(params: DeleteCar$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteCar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCar(params: DeleteCar$Params, context?: HttpContext): Observable<string> {
    return this.deleteCar$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `updateCarPatchById()` */
  static readonly UpdateCarPatchByIdPath = '/api/v1/car/{carId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCarPatchById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCarPatchById$Response(params: UpdateCarPatchById$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateCarPatchById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCarPatchById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCarPatchById(params: UpdateCarPatchById$Params, context?: HttpContext): Observable<string> {
    return this.updateCarPatchById$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  static readonly GetCarsPath = '/api/v1/car';

  getCars$Response(params?: GetCars$Params, context?: HttpContext): Observable<HttpResponse<Array<CarDto>>> {
    const token = this.tokenService.token; // Pobierz token z TokenService
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Dodaj token do nagłówków
    });

    return this.http.get<Array<CarDto>>(`${this.rootUrl}${CarService.GetCarsPath}`, { headers, observe: 'response' });
  }

  getCars(params?: GetCars$Params, context?: HttpContext): Observable<Array<CarDto>> {
    return this.getCars$Response(params, context).pipe(
      map((r: HttpResponse<Array<CarDto>>): Array<CarDto> => r.body as Array<CarDto>)
    );
  }

  /** Path part for operation `addCar()` */
  static readonly AddCarPath = '/api/v1/car';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCar$Response(params: AddCar$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addCar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCar(params: AddCar$Params, context?: HttpContext): Observable<string> {
    return this.addCar$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
