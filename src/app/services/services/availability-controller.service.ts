/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AvailabilityDto } from '../models/availability-dto';
import { getAvailability } from '../fn/availability-controller/get-availability';
import { GetAvailability$Params } from '../fn/availability-controller/get-availability';
import { postAvailability } from '../fn/availability-controller/post-availability';
import { PostAvailability$Params } from '../fn/availability-controller/post-availability';

@Injectable({ providedIn: 'root' })
export class AvailabilityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAvailability()` */
  static readonly GetAvailabilityPath = '/api/v1/availability';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAvailability()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAvailability$Response(params?: GetAvailability$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AvailabilityDto>>> {
    return getAvailability(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAvailability$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAvailability(params?: GetAvailability$Params, context?: HttpContext): Observable<Array<AvailabilityDto>> {
    return this.getAvailability$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AvailabilityDto>>): Array<AvailabilityDto> => r.body)
    );
  }

  /** Path part for operation `postAvailability()` */
  static readonly PostAvailabilityPath = '/api/v1/availability';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAvailability()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postAvailability$Response(params: PostAvailability$Params, context?: HttpContext): Observable<StrictHttpResponse<AvailabilityDto>> {
    return postAvailability(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postAvailability$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postAvailability(params: PostAvailability$Params, context?: HttpContext): Observable<AvailabilityDto> {
    return this.postAvailability$Response(params, context).pipe(
      map((r: StrictHttpResponse<AvailabilityDto>): AvailabilityDto => r.body)
    );
  }

}
