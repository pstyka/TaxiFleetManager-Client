/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AvailabilityDto } from '../../models/availability-dto';

export interface PostAvailability$Params {
  Authorization: string;
      body: AvailabilityDto
}

export function postAvailability(http: HttpClient, rootUrl: string, params: PostAvailability$Params, context?: HttpContext): Observable<StrictHttpResponse<AvailabilityDto>> {
  const rb = new RequestBuilder(rootUrl, postAvailability.PATH, 'post');
  if (params) {
    rb.header('Authorization', params.Authorization, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AvailabilityDto>;
    })
  );
}

postAvailability.PATH = '/api/v1/availability';
