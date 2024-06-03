/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getProfile } from '../fn/profile-controller/get-profile';
import { GetProfile$Params } from '../fn/profile-controller/get-profile';
import { UserDto } from '../models/user-dto';

@Injectable({ providedIn: 'root' })
export class ProfileControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getProfile()` */
  static readonly GetProfilePath = '/api/v1/profile';


  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile$Response(params?: any, token?: string): Observable<HttpResponse<UserDto>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<UserDto>(`${this.rootUrl}${ProfileControllerService.GetProfilePath}`, { headers, observe: 'response' });
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfile(params?: any, token?: string): Observable<UserDto> {
    return this.getProfile$Response(params, token).pipe(
      map((r: HttpResponse<UserDto>): UserDto => r.body as UserDto)
    );
  }

}
