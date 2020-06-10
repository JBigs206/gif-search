import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	public baseUrl: string;

  	constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiProtocol}://${environment.apiBaseUrl}`;
    }

    get(uri: string, data: any = {}) {
        return this.http.get(`${this.baseUrl}${uri}`, { withCredentials: false });
    }
}