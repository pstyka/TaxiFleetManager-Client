import { Component, OnInit } from '@angular/core';
import {UserDto} from "../../services/models/user-dto";
import {ProfileControllerService} from "../../services/services/profile-controller.service";
import {AuthService} from "../../services/auth/auth.service";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user?: UserDto;

  constructor(private profileService: ProfileControllerService, private tokenService: TokenService) {}

  ngOnInit(): void {
    const token = this.tokenService.token;
    this.profileService.getProfile(undefined, token).subscribe((data: UserDto) => {
      this.user = data;
    });
  }
}
