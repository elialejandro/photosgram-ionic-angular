import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

const CLIENT_ID = environment.clientId;
const CLIENT_SECRET = environment.clientSecret;
const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }


  login(username: string, password: string) {
    const data = {
      grant_type: 'password',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      username,
      password,
      scope: ''
    };

    this.http.post(`${ URL }/oauth/token`, data)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

}
