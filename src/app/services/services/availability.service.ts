import { Injectable } from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { AvailabilityDto } from '../models/availability-dto';
import {StrictHttpResponse} from "../strict-http-response";

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  private rootUrl = 'http://localhost:8080';
  private readonly apiUrl = `${this.rootUrl}/api/v1/availability`;
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  postAvailability(availability: AvailabilityDto): Observable<AvailabilityDto> {
    const token = this.tokenService.token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<AvailabilityDto>(`${this.rootUrl}/api/v1/availability`, availability, { headers });
  }
  static readonly GetAvailabilityPath = '/api/v1/availability';


  getAvailability(params?: any): Observable<Array<AvailabilityDto>> {
    const token = this.tokenService.token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<Array<AvailabilityDto>>(this.apiUrl, { headers }).pipe(
      map((response: Array<AvailabilityDto>) => response || [])
    );
  }
}
