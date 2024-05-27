/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CarDto } from '../../models/car-dto';

export interface UpdateCarPatchById$Params {
  carId: string;
      body: CarDto
}

export function updateCarPatchById(http: HttpClient, rootUrl: string, params: UpdateCarPatchById$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, updateCarPatchById.PATH, 'patch');
  if (params) {
    rb.path('carId', params.carId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

updateCarPatchById.PATH = '/api/v1/car/{carId}';
