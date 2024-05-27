/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { DriverService } from './services/driver.service';
import { CarService } from './services/car.service';
import { ScheduleControllerService } from './services/schedule-controller.service';
import { AvailabilityControllerService } from './services/availability-controller.service';
import { AuthenticationControllerService } from './services/authentication-controller.service';
import { ProfileControllerService } from './services/profile-controller.service';
import {TokenService} from "./token/token.service";

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    DriverService,
    CarService,
    TokenService,
    ScheduleControllerService,
    AvailabilityControllerService,
    AuthenticationControllerService,
    ProfileControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor(
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
