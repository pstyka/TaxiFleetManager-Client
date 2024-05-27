/* tslint:disable */
/* eslint-disable */
import {HttpClient, HttpContext, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addToSchedule } from '../fn/schedule-controller/add-to-schedule';
import { AddToSchedule$Params } from '../fn/schedule-controller/add-to-schedule';
import { CarScheduleDto } from '../models/car-schedule-dto';
import { getSchedule } from '../fn/schedule-controller/get-schedule';
import { GetSchedule$Params } from '../fn/schedule-controller/get-schedule';
import {TokenService} from "../token/token.service";

@Injectable({ providedIn: 'root' })
export class ScheduleControllerService{

  private rootUrl = 'http://localhost:8080';
  static readonly GetSchedulePath = '/api/v1/schedule';
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getSchedule$Response(params?: any, context?: HttpContext): Observable<HttpResponse<CarScheduleDto[]>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.tokenService.token}`
    });

    return this.http.get<CarScheduleDto[]>(`${this.rootUrl}${ScheduleControllerService.GetSchedulePath}`, { headers, observe: 'response', context });
  }

  getSchedule(params?: any, context?: HttpContext): Observable<CarScheduleDto[]> {
    return this.getSchedule$Response(params, context).pipe(
      map((r: HttpResponse<CarScheduleDto[]>): CarScheduleDto[] => r.body || [])
    );
  }

  /** Path part for operation `addToSchedule()` */
  static readonly AddToSchedulePath = '/api/v1/schedule';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addToSchedule()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addToSchedule$Response(params: AddToSchedule$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return addToSchedule(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addToSchedule$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addToSchedule(params: AddToSchedule$Params, context?: HttpContext): Observable<string> {
    return this.addToSchedule$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
