import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'keycloak-demo';
  constructor(private keycloakService: KeycloakService) {}
  logout() {
    this.keycloakService.logout();
  }
}
