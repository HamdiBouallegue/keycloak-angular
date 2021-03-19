import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private keycloakService: KeycloakService) {}

  getUserName(): string {
    return this.keycloakService.getUsername();
  }
  logout(): void {
    this.keycloakService.logout();
  }
  getLoggedUser(): any {
    return this.keycloakService.getKeycloakInstance().idTokenParsed;
  }
}
