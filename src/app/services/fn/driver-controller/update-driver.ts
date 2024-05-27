/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserDto } from '../../models/user-dto';

export interface UpdateDriver$Params {
  driverId: string;
  userDTO: UserDto;
}

export function updateDriver(http: HttpClient, rootUrl: string, params: UpdateDriver$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, updateDriver.PATH, 'put');
  if (params) {
    rb.query('driverId', params.driverId, {});
    rb.query('userDTO', params.userDTO, {});
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

updateDriver.PATH = '/api/v1/driver/{driverId}';
