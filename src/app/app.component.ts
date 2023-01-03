import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'gfa-mfe-main-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gfa-mfe-main';

  constructor(private service: AuthService) {
    if (!this.service.isTokenValid()) {
      document.location.href = '/auth';
    }
  }

  hasPermission(permission: string) {
    return this.service.hasPermission(permission);
  }

  singOut() {
    this.service.singOut();
  }
}
