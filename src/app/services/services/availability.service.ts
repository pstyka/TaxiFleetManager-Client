import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { AvailabilityDto } from '../models/availability-dto';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  private rootUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  postAvailability(availability: AvailabilityDto): Observable<AvailabilityDto> {
    const token = this.tokenService.token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<AvailabilityDto>(`${this.rootUrl}/api/v1/availability`, availability, { headers });
  }
}
