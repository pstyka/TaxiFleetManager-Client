/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addDriver } from '../fn/driver-controller/add-driver';
import { AddDriver$Params } from '../fn/driver-controller/add-driver';
import { deleteDriver } from '../fn/driver-controller/delete-driver';
import { DeleteDriver$Params } from '../fn/driver-controller/delete-driver';
import { getDriverById } from '../fn/driver-controller/get-driver-by-id';
import { GetDriverById$Params } from '../fn/driver-controller/get-driver-by-id';
import { getDrivers } from '../fn/driver-controller/get-drivers';
import { GetDrivers$Params } from '../fn/driver-controller/get-drivers';
import { updateDriver } from '../fn/driver-controller/update-driver';
import { UpdateDriver$Params } from '../fn/driver-controller/update-driver';
import { UserDto } from '../models/user-dto';
import {TokenService} from "../token/token.service";

@Injectable({ providedIn: 'root' })
export class DriverService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient, private tokenService: TokenService) {
    super(config, http);
  }

  /** Path part for operation `getDriverById()` */
  static readonly GetDriverByIdPath = '/api/v1/driver/{driverId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDriverById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDriverById$Response(params: GetDriverById$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return getDriverById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDriverById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDriverById(params: GetDriverById$Params, context?: HttpContext): Observable<UserDto> {
    return this.getDriverById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `updateDriver()` */
  static readonly UpdateDriverPath = '/api/v1/driver/{driverId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDriver()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateDriver$Response(params: UpdateDriver$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateDriver(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateDriver$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateDriver(params: UpdateDriver$Params, context?: HttpContext): Observable<string> {
    return this.updateDriver$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `deleteDriver()` */
  static readonly DeleteDriverPath = '/api/v1/driver/{driverId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDriver()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDriver$Response(params: DeleteDriver$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteDriver(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteDriver$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDriver(params: DeleteDriver$Params, context?: HttpContext): Observable<string> {
    return this.deleteDriver$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getDrivers()` */
  static readonly GetDriversPath = '/api/v1/driver';

  getDrivers$Response(params?: GetDrivers$Params, context?: HttpContext): Observable<HttpResponse<Array<UserDto>>> {
    const token = this.tokenService.token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Array<UserDto>>(`${this.rootUrl}${DriverService.GetDriversPath}`, { headers, observe: 'response' });
  }

  getDrivers(params?: GetDrivers$Params, context?: HttpContext): Observable<Array<UserDto>> {
    return this.getDrivers$Response(params, context).pipe(
      map((r: HttpResponse<Array<UserDto>>): Array<UserDto> => r.body as Array<UserDto>)
    );
  }

  /** Path part for operation `addDriver()` */
  static readonly AddDriverPath = '/api/v1/driver';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addDriver()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addDriver$Response(params: AddDriver$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addDriver(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addDriver$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addDriver(params: AddDriver$Params, context?: HttpContext): Observable<string> {
    return this.addDriver$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
