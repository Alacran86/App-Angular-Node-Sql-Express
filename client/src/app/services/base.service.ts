import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  urlServidor: string = environment.url || 'http://localhost:3000';
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
  async put() {
    try {
      return await this.http.put(`${this.urlServidor}/${this.endPoint}`,  this.HttpOptions()).toPromise();
    } catch (e) {
      return this.handlerError(e);
    }
  }
  async delete(id: number) {
    try {
      return await this.http.delete(`${this.urlServidor}/${this.endPoint}`, this.HttpOptions()).toPromise();
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
