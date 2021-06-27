import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  urlServidor: string = 'http://localhost:3000'; //'https://jsonplaceholder.typicode.com'; // url de nuestro servidor en este caso es nuestra api
  endPoint: string = '';
  constructor(private http: HttpClient , private router: Router) { }

  setEndPoint(endpoint: string) {
    this.endPoint = endpoint;
  }

  private HttpOptions() {
    let httpOptions = {};
    const token = localStorage.getItem('JWT');
    if (token) {
      httpOptions = {
        headers: new HttpHeaders({
          Authorization: token
        })
      }
    }
    return httpOptions;
  }


  async get() {
    try {
      return await this.http.get(`${this.urlServidor}/${this.endPoint}`, this.HttpOptions()).toPromise();
    } catch (error) {
      return this.handlerError(error);
    }
  }
  async post(obj: any) {
    try {
      return await this.http.post(`${this.urlServidor}/${this.endPoint}`, obj, this.HttpOptions()).toPromise();
    } catch (e) {
      return this.handlerError(e);
    }
  }

  handlerError({ status }: any) {
    if (status === 404) {
      //not found
    }
    else if (status === 500) {
      //ISE
    }
    else if (status === 401) {
      //unathorized
    }
    location.href = 'http://http.cat/' + status;
  }
}
