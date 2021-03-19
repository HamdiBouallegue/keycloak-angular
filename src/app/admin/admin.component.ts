import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  template: '<p>{{ message }}</p>',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  message = 'message';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`${environment.serverUrl}/demo`).subscribe((data: any) => {
      this.message = data.message;
    });
  }
}
