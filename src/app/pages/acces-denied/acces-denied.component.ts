import { Component } from '@angular/core';

@Component({
  selector: 'app-access-denied',
  template: '<div class="container"><img src="https://cdn.dribbble.com/users/1192256/screenshots/6290585/1._friday.gif" alt="access denied"></div>',
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    img {
      width: 80%;
      height: 80%;
    }
  `]
})
export class AccesDeniedComponent {}

