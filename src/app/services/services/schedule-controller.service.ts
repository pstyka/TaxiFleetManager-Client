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

  static readonly AddToSchedulePath = '/api/v1/schedule';

  addToSchedule$Response(params: AddToSchedule$Params, context?: HttpContext): Observable<HttpResponse<string>> {
    const token = this.tokenService.token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<string>(`${this.rootUrl}${ScheduleControllerService.AddToSchedulePath}`, params.body, { headers, observe: 'response', context });
  }

  addToSchedule(params: AddToSchedule$Params, context?: HttpContext): Observable<string> {
    return this.addToSchedule$Response(params, context).pipe(
      map((r: HttpResponse<string>): string => r.body as string)
    );
  }

}
